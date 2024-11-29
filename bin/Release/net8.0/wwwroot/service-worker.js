// In development, always fetch from the network and do not enable offline support.
// This is because caching would make development more difficult (changes would not
// be reflected on the first load after each change).
self.addEventListener('fetch', () => { });

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('advent-cache').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/app.css',
                '/img/icon-192.png',
                '/img/icon-512.png',
                '/manifest.webmanifest'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});

/* Manifest version: tmG9mW7j */
