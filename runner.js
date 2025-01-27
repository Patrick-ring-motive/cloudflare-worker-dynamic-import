import Sval from './sval.js'

const scriptInterpreter = new Sval({
  ecmaVer: 'latest',
  sourceType: 'script',
  sandBox: false,
});
const moduleInterpreter = new Sval({
  ecmaVer: 'latest',
  sourceType: 'module',
  sandBox: false,
});


const svalGlobal = moduleInterpreter.scope.context.globalThis.value;

const keys = [];
for(const key in globalThis){keys.push(key);}

const props = Object.getOwnPropertyNames(globalThis).concat(keys).concat(Object.getOwnPropertySymbols(globalThis));

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

const moduleMap = new Map();
const scriptMap = new Map();

const fetchText = async function fetchText(){
  const res = await fetch(...arguments);
  return await res.text();
};

const runner = moduleInterpreter;

runner.importModule = async function importModule(urlObj,options){
  const url = urlObj?.url ?? urlObj;
  const key = url.split(/[?#]/).shift();
  let mod;
  if(moduleMap.has(key)){
    mod = moduleMap.get(key);
  }else{
    mod = fetchText(...arguments);
    moduleMap.set(key,mod);
  }
  if(mod instanceof Promise){
    mod = await mod;
    mod = moduleInterpreter.parse(mod);
    moduleMap.set(key,mod);
  }
  runner.run(mod);
  return runner;
};

runner.importScript = async function importScript(urlObj,options){
  const url = urlObj?.url ?? urlObj;
  const key = url.split(/[?#]/).shift();
  let scr;
  if(scriptMap.has(key)){
    scr = scriptMap.get(key);
  }else{
    scr = fetchText(...arguments);
    scr = scriptMap.set(key,scr);
  }
  if(scr instanceof Promise){
    scr = await scr;
    scr = scriptInterpreter.parse(scr);
    scriptMap.set(key,scr);
  }
  runner.run(scr);
  return runner;
};

export default runner;
