// Keeps the app shell available offline. Never caches church data (that always comes live from the database).
const V="jubelate-v2";
const SHELL=["./","index.html","config.js","manifest.json","icon-180.png","icon-192.png","icon-512.png","logo.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET")return;
  const u=new URL(r.url);
  const sameOrigin=u.origin===location.origin;
  const staticCdn=/fonts\.(googleapis|gstatic)\.com$|cdn\.jsdelivr\.net$/.test(u.hostname);
  if(!sameOrigin&&!staticCdn)return; // database and file requests go straight to the network
  e.respondWith(fetch(r).then(res=>{if(res.ok||res.type==="opaque"){const c=res.clone();caches.open(V).then(x=>x.put(r,c))}return res}).catch(()=>caches.match(r)));
});
