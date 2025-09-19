import Sval from './sval.js';

const interpreter = new Sval({
    ecmaVer: 'latest',
    sourceType: 'module',
    sandBox: false,
});

(()=>{
    const $fetch = globalThis.fetch;
    globalThis.fetch = Object.setPrototypeOf(async function fetch(...args){
      try{
        return await $fetch(...args);
      }catch(e){
        console.warn(e,...arguments);
        return new Response(Object.getOwnPropertyNames(e??{}).map(x=>`${x} : ${e[x]}`).join(''),{
          status : 569,
          statusText:e?.message
        });
      }
    },$fetch);
})();

(()=>{
    const $Response = globalThis.Response;
    globalThis.Response = class Response extends $Response{
        constructor(...args){
            try{
                if(/^(101|204|205|304)$/.test(args?.[1]?.status)){
                    console.warn('Trying to give a body to in compatible response code 101|204|205|304; body ignored');
                    (args??[])[0] = null;
                    delete (args??[])[1].body;
                }
                return super(...args);
            }catch(e){
                console.warn(e,...args);
            }
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
