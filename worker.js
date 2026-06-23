import {
  env
} from "cloudflare:workers"
import {
  importModule
} from './runner.js';

globalThis.env = env;

const debug = (...args) => {
  if (env.mode === 'DEBUG') {
    console.log(...args);
  }
};

let workerURL = env.WORKER_URL;
const isPromise = x => x instanceof Promise || typeof x?.then === 'function' || x?.constructor?.name === 'Promise';
let init;
export default {
  async fetch(request, env, ctx) {
    try {
      debug(workerURL);
      if (['DEV', 'DEBUG'].includes(env.mode) || !init) {
        if (!isPromise(init)) {
          workerURL = `${env.WORKER_URL}?${crypto.randomUUID()+new Date().getTime()+Math.random()}`;
          init = importModule(workerURL);
        }
      }
      if (isPromise(init)) {
        init = await init;
      }
      debug(init);
      const {
        onRequest
      } = init;
      return await onRequest(...arguments);
    } catch (e) {
      console.warn(e, ...arguments);
      return new Response(Object.getOwnPropertyNames(e ?? {}).map(x => `${x} : ${e[x]}`).join(','), {
        status: 569,
        statusText: e?.message
      });
    }
  },
};
