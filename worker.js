import runner from './runner.js';

async function init(){
  if(init.result)return init.result;
   if(!init.running)init.running = runner.importModule(`https://raw.githubusercontent.com/Patrick-ring-motive/cloudflare-worker-dynamic-import/refs/heads/main/example.js?${new Date().getTime()}`);
   await init.running;
   init.result = runner.exports.default;
   return init.result;
}


export default {
  async fetch(request, env, ctx) {
    const onRequest = init.result ?? (await init());
    return onRequest(...arguments);
  },
};
