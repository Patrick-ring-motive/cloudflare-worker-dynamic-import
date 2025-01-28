import Sval from './sval.js'


const interpreters = {
  module : new Sval({
    ecmaVer: 'latest',
    sourceType: 'module',
    sandBox: false,
  }),
  script : new Sval({
    ecmaVer: 'latest',
    sourceType: 'script',
    sandBox: false,
  }),
};

const isArray = x => Array.isArray(x) || x instanceof Array;

const svalGlobal = interpreters['module'].scope.context.globalThis.value;

const keys = [];
for(const key in globalThis){keys.push(key);}

const props = new Set(Object.getOwnPropertyNames(globalThis).concat(keys).concat(Object.getOwnPropertySymbols(globalThis)));

for(const prop of props){
  svalGlobal[prop] = globalThis[prop];
}

const $fetch = Symbol('*fetch');
globalThis[$fetch] = fetch;
svalGlobal.fetch = function fetch(){
  try{
    return globalThis[$fetch](...arguments);
  }catch(e){
    return new Response(Object.getOwnPropertyNames(e).map(x=>`${x} : ${e[x]}`).join(''),{
      status : 569,
      statusText:e.message
    });
  }
};

const cache = {
  module : new Map(),
  script : new Map()
}; 

const fetchText = async function fetchText(){
  const res = await fetch(...arguments);
  return await res.text();
};

const runner = interpreters['module'];

runner.compileModule = async function compileModule(urlObj,options,type="module"){
  const cacheMap = cache[type];
  const url = urlObj?.url ?? urlObj;
  const key = url.split(/[?#]/).shift();
  let mod;
  if(cacheMap.has(key)){
    mod = cacheMap.get(key);
  }else{
    mod = fetchText(...arguments);
    cacheMap.set(key,mod);
  }
  if(mod instanceof Promise){
    mod = await mod;
    mod = interpreters[type].parse(mod);
    cacheMap.set(key,mod);
  }
  return cacheMap.get(key);
};

runner.importModule = async function importModule(urlObj,options,type="module"){
  const mod = await runner.compileModule(arguments);
  interpreters[type].run(mod);
  return interpreters[type];
};

runner.importModules = async function importModules(...args){
  args = args.map(x=>isArray(x)?runner.compileModule(...x):runner.compileModule(x));
  args = await Promise.all(args);
  args.map(x=>runner.run(x));
  return runner;
};

runner.compileScript = async function compileScript(urlObj,options){
  return runner.compileModule(...arguments,"script");
};

runner.importScript = async function importScript(urlObj,options){
  return runner.importModule(...arguments,"script");
};

export default runner;
