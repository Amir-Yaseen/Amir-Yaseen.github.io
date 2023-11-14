'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9f9cbb400ca9e5d449968d9b44c421d2",
"index.html": "8ea68bf7ecbeb3ef32aa5a789abfc694",
"/": "8ea68bf7ecbeb3ef32aa5a789abfc694",
"main.dart.js": "6825b5544ddba9c50f606d1bb847dbf5",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "88d5a340f32c26313f598a8f2aed6b0e",
"assets/AssetManifest.json": "e720f9e824c6a4ac19580f7566346f0c",
"assets/NOTICES": "c33527b2e3ca1c8f88b4b4d16db25506",
"assets/FontManifest.json": "da723c250fd84de6742ec6b9a3dd20fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c41887974e2767f87fb1d4a5047a688c",
"assets/fonts/MaterialIcons-Regular.otf": "a4805eb3762b4505555660ef9fa5ad9c",
"assets/assets/images/person.jpeg": "41bb6f8d50438565c5b5313ea06e1d69",
"assets/assets/images/Ellipse.png": "3e3302e463609bf9a36f4168d71e4b12",
"assets/assets/images/istockphoto.jpg": "3fb39db6f9b49a3de8bcad570025beea",
"assets/assets/images/personpic.jpeg": "9537b989d4fd819ce79e61c7a327e37b",
"assets/assets/icons/persons.svg": "14666bfac5d932b9a0c5550be734e598",
"assets/assets/icons/logout.svg": "5f984ba1b4806b70bd248e1bf3663ed8",
"assets/assets/icons/card-account-details-outline.svg": "b2b9d26077b537172d73a2fab5468674",
"assets/assets/icons/handshake-outline.svg": "2b7a5eb033559d8c8aeef5a93e87b6f0",
"assets/assets/icons/lock.svg": "34071998d34838c054431c519900bfa2",
"assets/assets/icons/calender.svg": "b10ad4aa1262e09c8f6552f788a75b1a",
"assets/assets/icons/chevron-right.svg": "1566049e196c48cb2ccb428a78c5c006",
"assets/assets/icons/mail.svg": "be0da59f53fa5dc287ad435d5e37cb87",
"assets/assets/icons/apps.svg": "e150631aff500407eec1fcbcba9363dc",
"assets/assets/icons/phone-outline.svg": "f775309bc816e62523d9e5d71dc717e4",
"assets/assets/icons/blue_daywise.svg": "10782fec4b1b10a27fc11125a4e28f37",
"assets/assets/icons/arrow-up%25201%2520(1).svg": "020247f2e1f5250d8ee1f7c9ac70b14d",
"assets/assets/icons/arrow-up%25201.svg": "80d0f1718c9f3f393553a2a9c420a585",
"assets/assets/icons/logo.png": "5355dbe474d3100de8fd2415d780bd23",
"assets/assets/icons/camera.svg": "c2334c9150b26549504a0df4ad861f30",
"assets/assets/icons/circularlines.svg": "c5ab64b14fdf2721ec59822502b1b66a",
"assets/assets/icons/chevron_down.svg": "fb5808884f12a7b62dfdd70891a03e2c",
"assets/assets/icons/currency-inr.svg": "2a04045699b30d7558fcc5fa78839166",
"assets/assets/icons/search%25201.svg": "c6f20019e7796a5f2f5b0330c53dbfc4",
"assets/assets/icons/green_bars.svg": "0eb5236d7237dc31513401756337f2ad",
"assets/assets/icons/Ellipse%25208.png": "3e3302e463609bf9a36f4168d71e4b12",
"assets/assets/icons/logo.svg": "52ad84d334aee690b5e0927c1da7a063",
"assets/assets/icons/user-square%25201.svg": "454ba1c2d79b411e126ac79711a946b5",
"assets/assets/icons/Bg.png": "90491730a0634a14e930b1257b77fb39",
"assets/assets/fonts/caros/cretype-Caros-Bold-Italic.ttf": "3975abaf5a8c27c85c1c817133e2b31d",
"assets/assets/fonts/caros/cretype-Caros-Black-Italic.ttf": "755e2d8c7d81af76a117ad698c3b9224",
"assets/assets/fonts/caros/cretype-Caros-Medium.ttf": "c64678b794d97d139cc1ee298eecc2a0",
"assets/assets/fonts/caros/cretype-Caros-Black.ttf": "1de2dcd167c70829db880adb625a0206",
"assets/assets/fonts/caros/cretype-Caros-ExtraBold.ttf": "293fa54b920d19a67803023d6060a2c8",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
