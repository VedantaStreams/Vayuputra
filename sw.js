const CACHE='vayuputra-v1';
const ASSETS=['./','./index.html','./data/config.json','./data/schedule.json','./data/videos.json','./data/chalisa.json','./data/organizations.json','./data/faq.json'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
