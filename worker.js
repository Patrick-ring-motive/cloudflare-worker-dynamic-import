import { importModule } from './runner.js';

const workerURL = `https://raw.githubusercontent.com/Patrick-ring-motive/venusaur/refs/heads/main/venusaur.js?${new Date().getTime()}`;
const isPromise = x => x instanceof Promise || typeof x?.then === 'function' || x?.constructor?.name === 'Promise';
let init;
export default {
  async fetch(request, env, ctx) {
    try{
      if(!init){
        init = importModule(workerURL);
      }
      if(isPromise(init)){
        init = await init;
      }
      console.log(init);
      const { onRequest } = init;
      return await onRequest(...arguments);
    }catch(e){
      console.warn(e,...arguments);
      return new Response(Object.getOwnPropertyNames(e??{}).map(x=>`${x} : ${e[x]}`).join(','),{
        status : 569,
        statusText:e?.message
      });
    }
  },
};
