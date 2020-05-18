'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "37d57db57c95ca9af04d6f8f71c7a31f",
"assets/FontManifest.json": "a106d8872409dc1e1c8ed8b09df1c914",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/fonts/SourceSansPro-Regular.ttf": "c1678b46f7dd3f50ceac94ed4e0ad01a",
"assets/images/FB.png": "4fd2dd89cee556dac0f0982e69a65d1c",
"assets/images/github.png": "90ef21acbcf0753025edcb14d4052d6e",
"assets/images/IG.jpg": "ac114ad4d5919d68e693918c02e001e5",
"assets/images/medium.png": "1832553213f37026ef5595fa39c267d3",
"assets/images/profile.jpg": "3ab71eb9a74b19db149f52659cfb9c12",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"debug.log": "ba275c1f15cfa95457e40ebd4e68f65d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9f56977816c0405c7532af14ae44b767",
"/": "9f56977816c0405c7532af14ae44b767",
"main.dart.js": "6a4f8139a4cea997bbc44dd72ce94e2f",
"manifest.json": "0141d12830c8b3198598be94bae52abc"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
