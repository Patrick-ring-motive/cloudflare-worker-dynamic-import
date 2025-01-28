import runner from './runner.js';

async function init(){
  if(init.result)return init.result;
   if(!init.running)init.running = runner.importModules(
    'https://cdn.jsdelivr.net/npm/core-js/+esm',
    `https://raw.githubusercontent.com/Patrick-ring-motive/kaleb/refs/heads/main/worker.js?${new Date().getTime()}`
    );
   await init.running;
   init.result = runner.exports.default;
   return init.result;
}

export default {
  async fetch(request, env, ctx) {
    try{
      const onRequest = init.result ?? (await init());
      return await onRequest(...arguments);
    }catch(e){
      return new Response(Object.getOwnPropertyNames(e).map(x=>`${x} : ${e[x]}`).join(''),{
        status : 569,
        statusText:e.message
      });
    }
  },
};
