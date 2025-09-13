import Sval from './sval.js';

const interpreter = new Sval({
    ecmaVer: 'latest',
    sourceType: 'module',
    sandBox: false,
});

(()=>{
    const $fetch = globalThis.fetch;
    globalThis.fetch = Object.setPrototypeOf(function fetch(...args){
      try{
        return await $fetch(...args);
      }catch(e){
        return new Response(Object.getOwnPropertyNames(e??{}).map(x=>`${x} : ${e[x]}`).join(''),{
          status : 569,
          statusText:e?.message
        });
      }
    },$fetch);
})();

(()=>{
    const $Request = globalThis.Request;
    globalThis.Request = class Request extends $Request{
        constructor(...args){
            if(/^(101|204|205|304)$/.test(args?.[1]?.status)){
                (args??[])[0] = null;
            }
            return super(...args);
        }
    }
})();

const fetchText = async function fetchText(){
  const res = await fetch(...arguments);
  return await res.text();
};

export const importModule = async function importModule(url){
  const mod = await fetchText(url);
  interpreter.run(mod);
  return interpreter['exports'];
};
