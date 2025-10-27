// Service Worker for Inchtomilez PWA - Advanced Caching Strategy
const CACHE_VERSION = 'v1.1.0';
const CACHE_NAME = `inchtomilez-${CACHE_VERSION}`;
const RUNTIME_CACHE = `inchtomilez-runtime-${CACHE_VERSION}`;
const IMAGE_CACHE = `inchtomilez-images-${CACHE_VERSION}`;
const FONT_CACHE = `inchtomilez-fonts-${CACHE_VERSION}`;
const VIDEO_CACHE = `inchtomilez-videos-${CACHE_VERSION}`;

// Cache duration (in seconds)
const ONE_YEAR = 31536000;
const ONE_WEEK = 604800;
const ONE_DAY = 86400;
const ONE_HOUR = 3600;

// Assets to precache on install (critical resources)
const PRECACHE_ASSETS = [
  '/',
  '/about',
  '/services',
  '/industries',
  '/blogs',
  '/lets-talk',
  '/manifest.json'
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .catch((error) => console.error('Precache failed:', error))
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('inchtomilez-') && name !== CACHE_NAME && name !== RUNTIME_CACHE && name !== IMAGE_CACHE && name !== FONT_CACHE && name !== VIDEO_CACHE)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Helper: Check if request is for an image
const isImageRequest = (url) => {
  return /\.(png|jpg|jpeg|gif|svg|webp|ico)(\?.*)?$/i.test(url);
};

// Helper: Check if request is for a font
const isFontRequest = (url) => {
  return /\.(woff|woff2|ttf|otf|eot)(\?.*)?$/i.test(url);
};

// Helper: Check if request is for a video
const isVideoRequest = (url) => {
  return /\.(mp4|webm|ogg)(\?.*)?$/i.test(url);
};

// Helper: Check if request is for a static asset
const isStaticAsset = (url) => {
  return /\/(assets|icons)\//.test(url) || /\.(js|css)(\?.*)?$/i.test(url);
};

// Strategy 1: Cache First (for static assets, fonts, images)
const cacheFirst = async (request, cacheName) => {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    return cachedResponse || new Response('Offline', { status: 503 });
  }
};

// Strategy 2: Network First (for HTML pages, API calls)
const networkFirst = async (request, cacheName) => {
  const cache = await caches.open(cacheName);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Fallback to cached homepage for navigation requests
    if (request.mode === 'navigate') {
      return cache.match('/');
    }
    return new Response('Offline', { status: 503 });
  }
};

// Strategy 3: Stale While Revalidate (for frequently changing content)
const staleWhileRevalidate = async (request, cacheName) => {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
};

// Main fetch event handler with advanced routing
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip cross-origin requests (except fonts from Google Fonts, etc.)
  if (url.origin !== self.location.origin && !isFontRequest(url.href)) {
    return;
  }
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Route 1: Fonts - Cache First (1 year)
  if (isFontRequest(url.href)) {
    event.respondWith(cacheFirst(request, FONT_CACHE));
    return;
  }
  
  // Route 2: Images - Cache First (1 year)
  if (isImageRequest(url.href)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }
  
  // Route 3: Videos - Cache First (1 week)
  if (isVideoRequest(url.href)) {
    event.respondWith(cacheFirst(request, VIDEO_CACHE));
    return;
  }
  
  // Route 4: Static Assets (JS, CSS, /assets/, /icons/) - Cache First (1 year)
  if (isStaticAsset(url.href)) {
    event.respondWith(cacheFirst(request, CACHE_NAME));
    return;
  }
  
  // Route 5: HTML Pages - Network First (always fresh, fallback to cache)
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(networkFirst(request, RUNTIME_CACHE));
    return;
  }
  
  // Route 6: API calls & dynamic content - Stale While Revalidate
  event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
});

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncForms());
  }
});

async function syncForms() {
  console.log('Syncing offline forms...');
  // TODO: Implement form sync logic
}

// Push notification handler
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update from Inchtomilez',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      { action: 'explore', title: 'View', icon: '/icons/icon-72x72.png' },
      { action: 'close', title: 'Close', icon: '/icons/icon-72x72.png' }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Inchtomilez', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(clients.openWindow('/'));
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    event.waitUntil(clients.openWindow('/'));
  }
});

// Message handler for cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name.startsWith('inchtomilez-'))
            .map((name) => caches.delete(name))
        );
      })
    );
  }
});

// Cache size management - limit image cache to 50MB
const limitCacheSize = async (cacheName, maxSize) => {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  let totalSize = 0;
  
  for (const key of keys) {
    const response = await cache.match(key);
    if (response) {
      const blob = await response.blob();
      totalSize += blob.size;
    }
  }
  
  if (totalSize > maxSize) {
    // Delete oldest entries until under limit
    await cache.delete(keys[0]);
    await limitCacheSize(cacheName, maxSize);
  }
};

// Periodic cleanup (every hour)
setInterval(() => {
  limitCacheSize(IMAGE_CACHE, 50 * 1024 * 1024); // 50MB
  limitCacheSize(VIDEO_CACHE, 100 * 1024 * 1024); // 100MB
}, 3600000);
