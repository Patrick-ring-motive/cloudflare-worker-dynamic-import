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
const BleakMap = (()=>{
  const objDefProp = (obj,prop,value) =>Object.defineProperty(obj,prop,{
    value:value,
    enumerable:false,
    writable:true,
    configurable:true
  });
  const isSymbol = x => typeof x === 'symbol' || x instanceof Symbol;
  const mapSet = (map,key,value)=>Map.prototype.set.call(map,key,value);
  const mapGet = (map,key,value)=>Map.prototype.get.call(map,key);
  return class BleakMap extends Map{
    constructor(iter){
      super();
      if(!this['&weakMap']){
        objDefProp(this,'&weakMap',new WeakMap());
      }
      const init  = new Map(iter);
      for (const [key, value] of init) {
        this.set(key, value);
      }
    }
    get(key){
      return this['&weakMap'].get(mapGet(this,key));
    }
    set(key,value){
      let weakMapKey = mapGet(this,key);
      if(!isSymbol(weakMapKey))weakMapKey = Symbol(key);
      this['&weakMap'].set(weakMapKey,value);
      return mapSet(this,key,weakMapKey);
    }
    has(key){
      return this['&weakMap'].get(mapGet(this,key)) !== undefined;
    }
    delete(key) {
    const weakMapKey = super.get(key);
    const hasKey = super.has(key);
    if (hasKey) {
      this["&weakMap"].delete(weakMapKey);
      super.delete(key);
    }
    return hasKey;
    }
  }
  })();

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
  module : new BleakMap(),
  script : new BleakMap()
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
