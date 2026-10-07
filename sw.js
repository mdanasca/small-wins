const CACHE = 'small-wins-pages-v3';
const ASSETS = ['./','./index.html','./style.css','./app.js','./storage.js','./sync-config.js','./recipes.js','./food.js','./icon.svg','./icon-192.png','./icon-512.png','./manifest.webmanifest'];
self.addEventListener('install', e => {e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting();});
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if(e.request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;
  e.respondWith(fetch(e.request).then(r => {if(r.ok) {const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy));} return r;}).catch(()=>caches.match(e.request)));
});
