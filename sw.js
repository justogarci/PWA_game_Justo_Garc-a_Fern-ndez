const CACHE_NAME = 'shooter-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/Game.js',
  '/Entity.js',
  '/Character.js',
  '/Player.js',
  '/Opponent.js',
  '/Boss.js',
  '/Shot.js',
  '/main.js',
  '/game.css',
  '/assets/bueno.png',
  '/assets/malo.png',
  '/assets/shot1.png',
  '/assets/shot2.png',
  '/assets/malo_muerto.png',
  '/assets/bueno_muerto.png',
  '/assets/game_over.png',
  '/assets/jefe.png',
  '/assets/jefe_muerto.png',
  '/assets/you_win.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Install event - cache all the necessary static resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event - serve cached resources or fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response =>  response || fetch(event.request))
  );
});
