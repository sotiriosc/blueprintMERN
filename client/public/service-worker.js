self.addEventListener('install', (event) => {
    // Perform install steps, maybe precache some resources
  });
  
  self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
  
    if (url.pathname.endsWith('/app-file.apk')) {  // Replace 'app-file.apk' with your actual file name
      event.respondWith(
        caches.match(event.request).then((response) => {
          return (
            response ||
            fetch(event.request).then((fetchResponse) => {
              const cacheResponse = fetchResponse.clone();
              caches.open('my-app-cache').then((cache) => cache.put(event.request, cacheResponse));
              return fetchResponse;
            })
          );
        })
      );
    }
  });
  