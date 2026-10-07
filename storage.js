'use strict';
// Pages serves files; household data never lives in the public source repository.
const householdStore = (() => {
 const KEY='sw-pages-state', ENDPOINT='sw-sync-endpoint';
 const configured=globalThis.SMALL_WINS_CONFIG?.endpoint||'';
 let endpoint=configured||localStorage.getItem(ENDPOINT)||'';
 const response=(status,data)=>({ok:status>=200&&status<300,status,json:async()=>data});
 const valid=x=>x&&Number.isSafeInteger(x.revision)&&x.revision>=0&&(x.state===null||x.state?.version===1&&Array.isArray(x.state.people)&&x.state.people.length===2&&x.state.weeks&&Array.isArray(x.state.routines)&&Array.isArray(x.state.goals)&&Array.isArray(x.state.activity));
 async function remote(url,payload){
  const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),20000);
  try{
   // text/plain is a CORS simple request; Apps Script cannot answer OPTIONS.
   const r=await fetch(url,payload?{method:'POST',headers:{'Content-Type':'text/plain;charset=UTF-8'},body:JSON.stringify(payload),signal:controller.signal}:{cache:'no-store',signal:controller.signal});
   if(!r.ok)throw Error('Shared storage could not be reached.');
   const data=await r.json();
   if(data.error)return response(data.status||500,data);
   if(payload){if(!Number.isSafeInteger(data.revision))throw Error('Unexpected storage response.');}
   else if(!valid(data))throw Error('This URL did not return a Small Wins plan.');
   return response(200,data);
  }finally{clearTimeout(timeout);}
 }
 return {
  get endpoint(){return endpoint;},get shared(){return !!endpoint;},get configured(){return !!configured;},
  deviceBackup(){return JSON.parse(localStorage.getItem(KEY)||'null')?.state||null;},
  async read(){if(endpoint)return remote(endpoint);const data=JSON.parse(localStorage.getItem(KEY)||'{"revision":0,"state":null}');if(!valid(data))throw Error('Saved plan is invalid.');return response(200,data);},
  async write(payload){if(endpoint)return remote(endpoint,payload);const old=JSON.parse(localStorage.getItem(KEY)||'{"revision":0,"state":null}');if(old.revision!==payload.revision)return response(409,{error:'Plan changed'});const next={revision:old.revision+1,state:payload.state};if(!valid(next))return response(400,{error:'Invalid plan'});localStorage.setItem(KEY,JSON.stringify(next));return response(200,{revision:next.revision});},
  async connect(url,current){
   if(configured)throw Error('This household already connects automatically.');
   if(!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url))throw Error('Use the deployed Web App URL ending in /exec.');
   const r=await remote(url);if(!r.ok)throw Error('Could not read shared storage.');const data=await r.json();
   if(!data.state){const write=await remote(url,{revision:data.revision,state:current});if(!write.ok)throw Error('The shared plan changed. Please connect again.');}
   localStorage.setItem(ENDPOINT,url);endpoint=url;
  }
 };
})();
