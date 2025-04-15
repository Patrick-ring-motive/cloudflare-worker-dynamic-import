import './core.js';
import Sval from './sval.js'

globalThis.WeakRef ??= (()=>function WeakRef(ref){
	const $this = new.target ? this : Object.create(WeakRef.prototype);
	$this.deref = () => ref;
	return $this;
})();

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

const $fetch = Symbol('*fetch');
globalThis[$fetch] = fetch;
globalThis.fetch = function fetch(){
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
  const url = String(urlObj?.url ?? urlObj);
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



runner.compileScript = async function compileScript(urlObj,options){
  return runner.compileModule(urlObj,options,"script");
};

runner.importScript = async function importScript(urlObj,options){
  return runner.importModule(urlObj,options,"script");
};

runner.compileCode = async function compileCode(urlObj,options){
  try{
    return await runner.compileModule(urlObj,options,"script");
  }catch{
    return await runner.compileModule(urlObj,options);
  }
}

runner.importModules = async function importModules(...args){
  args = args.map(x=>isArray(x)?runner.compileCode(...x):runner.compileCode(x));
  args = await Promise.all(args);
  args.map(x=>runner.run(x));
  return runner;
};

export default runner;
