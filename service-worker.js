self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("red-stillness-cache").then((cache) => {
      return cache.addAll([
        "/THE-RED-STILLNESS/",
        "/THE-RED-STILLNESS/index.html",
        "/THE-RED-STILLNESS/icon-192.png",
        "/THE-RED-STILLNESS/icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});