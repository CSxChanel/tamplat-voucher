const CACHE_NAME = "voucher-app-v1";
const urlsToCache = [
    "/tamplat-voucher/",
    "/tamplat-voucher/index.html",
    "/tamplat-voucher/css/tailwind.css",
    "/tamplat-voucher/css/main.css",
    "/tamplat-voucher/img/icon.webp",
    "/tamplat-voucher/img/icon2.webp",
    "/tamplat-voucher/manifest.json",
    "/tamplat-voucher/main-js/jam.js",
    "/tamplat-voucher/main-js/main.js"
];

// Install Service Worker
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Caching assets...");
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetching resources
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// Activate Service Worker
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Deleting old cache...");
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});
