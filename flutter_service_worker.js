'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "21b60d415374031526ebe304809a0f7a",
"index.html": "54074b8e578a54192dde9753c27021a6",
"/": "54074b8e578a54192dde9753c27021a6",
"main.dart.js": "8c9f2804f6fda5329ab7066291c97330",
"favicon.png": "15bb4e92cff9e9b91d35f77d68cf49c4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "084268f741315b430f09f61eec8acac4",
"assets/AssetManifest.json": "af35180764580e5f5a03f52db4d0f913",
"assets/NOTICES": "84973b652dbda71a0c290324a62aeb15",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/Thumbs.db": "7458108a94f1ffce0a754f7f3273977e",
"assets/assets/entradas/8030%2520-%2520YAKIMESHI.png": "5e53e373e99b991fa47d0693dba15794",
"assets/assets/entradas/2360%2520-%2520JOE.png": "d30f73eb2cccdcdb1e7c9edb0232b5dd",
"assets/assets/entradas/0200%2520-%2520TEMPURA_SORVETE.png": "01ee8fa98ed22b4b8eded8ce92d789f3",
"assets/assets/entradas/7020%2520-%2520CAMAR%25D8%25A7O_ROSA.png": "713d75241b21754edff2c7d7226879f2",
"assets/assets/entradas/6030%2520-%2520COMBINADO_ESPECIAL_2.png": "b34106b6af8f34e1b53d4124c6333e8a",
"assets/assets/entradas/1060%2520-%2520TOFU.png": "fb5502f5c1a8c4e2aad6a379fc490c95",
"assets/assets/entradas/5080%2520-%2520TILAPIA_PICANTE.png": "f40174720a87f5c40c077a150ff99d8e",
"assets/assets/entradas/8130%2520-%2520TEPPAN_SALMAO.png": "7a07b6149263a7884969c0adbb70ffcd",
"assets/assets/entradas/6030%2520-%2520COMBINADO_ESPECIAL.png": "afed267519617592cfd8d12ee9123ad7",
"assets/assets/entradas/2350%2520-%2520FLAMBADO.png": "0c94e29ab6ede5f644e710d88ed362ed",
"assets/assets/entradas/2170%2520-%2520SALMON.png": "0e0a45386298532d8c71326d45460558",
"assets/assets/entradas/2380%2520-%2520SALMAOCHILI.png": "46ddd4054ae353a22225e321d0bfac41",
"assets/assets/entradas/1140%2520-%2520CARPACCIO.png": "1487cd4d7773c0c72b3455d7acefd8d6",
"assets/assets/entradas/7010%2520-%2520CAMAR%25D8%25A7O_7_BARBAS.png": "5441fa61da9422b7d42dd9aa04a74e9b",
"assets/assets/entradas/8220%2520-%2520YAKISSOBA_MISTO.png": "c4b6674666ab932c6e33152516effa8f",
"assets/assets/entradas/2120%2520-%2520CALIFORNIA.png": "0c50b7dc29c3c3de6b234ebe2beeb387",
"assets/assets/entradas/2140%2520-%2520TOMATO.png": "98df24a98e85eaea7788b1f98f52685e",
"assets/assets/entradas/6020%2520-%2520COMBINADO_SIMPLES_2.png": "8c8b334f8700a31f132ac3ba19e2cf78",
"assets/assets/entradas/4070%2520-%2520SHITAKE.png": "f782b988798c48c3dc8732677e7109ab",
"assets/assets/entradas/refrigerante.jpg": "b6873560eee9e8c58a47557c263740e8",
"assets/assets/entradas/4040%2520-%2520EMPANADO.png": "e82a7c1f9e6a0eb0a6966b237e676d96",
"assets/assets/entradas/0240%2520-%2520DIVINA.png": "7179fa2da2167611e56bbc05d5312faf",
"assets/assets/entradas/8180%2520-%2520FRANGO_XADREZ.png": "8d084f5e6e95cf1b1bbd42b549cf276c",
"assets/assets/entradas/8280%2520-%2520FILE_LEGUMES.png": "87b04c9cdd5243cfcdc12c4e8a5c5abc",
"assets/assets/entradas/6020%2520-%2520COMBINADO_SIMPLES.png": "92da15264fffe3f470e05f0e2b23ef45",
"assets/assets/entradas/1100%2520-%2520KAKIAGUE.png": "9ed71344f9f32c90ddaf1e40e7d4292b",
"assets/assets/entradas/1130%2520-%2520CEVICHE.png": "2ba950efad9a3cb7f70955f5acbaf9a1",
"assets/assets/entradas/4050%2520-%2520SKIN.png": "3276086efb31a2e2063ee913b66f3fbe",
"assets/assets/entradas/8130%2520-%2520TEPPAN_SALM%25D8%25A7O.png": "7a07b6149263a7884969c0adbb70ffcd",
"assets/assets/entradas/7050%2520-%2520SALMAO.png": "d4443e737dc3b3c256ee1f0f5a5cbb12",
"assets/assets/entradas/8020%2520-%2520GOHAN.png": "0760f74e0399563996eada3d3209ecec",
"assets/assets/entradas/7070%2520-%2520ISCA_FILE.png": "2c269a78ffd664d5868ed12533f48161",
"assets/assets/entradas/7010%2520-%2520CAMARAO_7_BARBAS.png": "6053d52dae3463a866bd734fda9dfe27",
"assets/assets/entradas/agua.jpg": "07b80c724355f3c1e5a6ab3ba372e910",
"assets/assets/entradas/2400%2520-%2520PANKO.png": "077d22c687aa05d2c4f81a49f0c66ee8",
"assets/assets/entradas/7080%2520-%2520ISCA_FRANGO.png": "72810b47bc96ff8a843c796f09e5e950",
"assets/assets/entradas/7100%2520-%2520BATATA.png": "a189fa82966653009c248a07ef50cc4d",
"assets/assets/entradas/6010%2520-%2520EXECUTIVO_SALMAO_2.png": "f52b275ae6687240446fedc6a542b376",
"assets/assets/entradas/7050%2520-%2520SALM%25D8%25A7O.png": "dcdae3a4e9c5d09bc18f3a2d98f270c0",
"assets/assets/entradas/2180%2520-%2520NUTELLA.png": "ba74b52d95aeee357c3925cf8a994d86",
"assets/assets/entradas/5070%2520-%2520TILAPIA.png": "834ed360827d11705e8d4158dd0d3cba",
"assets/assets/entradas/2010%2520-%2520SAKKEMAKI.png": "c44b8c24ff6ad1304aeceb329fe4b9af",
"assets/assets/entradas/3010%2520-%2520SALMAO.png": "a8196245aeb0885e7d899902e64ba7be",
"assets/assets/entradas/1020%2520-%2520SUNOMONO.png": "b78e0a890569ae06ae283e07959cf4dc",
"assets/assets/entradas/2310%2520-%2520PEPER.png": "da36f8dd13fca6d2c1e9e5d3bbd09b29",
"assets/assets/entradas/7020_2%2520-%2520CAMAR%25D8%25A7O_GRANDE.png": "b819a7989d7013e117b8258f36f38b71",
"assets/assets/entradas/7020%2520-%2520CAMARAO_ROSA.png": "31b7f603972444f6b1bde552f512748c",
"assets/assets/entradas/4030%2520-%2520CAMAR%25D8%25A7O.png": "459948646707a6d63af6fbf7a13a9cc0",
"assets/assets/entradas/5010%2520-%2520SALMAO.png": "aa931af4e1a0806d1e3c36ec1b1d4c6b",
"assets/assets/entradas/8050%2520-%2520TEISHOKU_SALM%25D8%25A7O.png": "c3446c77931c9d512fbb7a3f9d17ad4e",
"assets/assets/entradas/8010%2520-%2520MISSOSHIRU.png": "88193af8bf467cdbeb1a77cb5cba9745",
"assets/assets/entradas/RODIZIO_PREMIUM.PNG": "da589d53a95c4502f1a1aa42ee0223ed",
"assets/assets/entradas/4010%2520-%2520SALMAO.png": "f005999c02f51ca227b47bc2e7d9e845",
"assets/assets/entradas/8320_8360%2520-%2520PEIXE_TELHA.png": "3cd814e5b608fc7779441b20bac11b8f",
"assets/assets/entradas/2130%2520-%2520SHITAKE.png": "921aff1764bd06c264f5997f51f8bcdd",
"assets/assets/entradas/2340%2520-%2520HOT_ROLL.png": "c0fca024c56bf82abf4d03cbd636d0a0",
"assets/assets/entradas/2320%2520-%2520PHILADELPHIA.png": "a82dcc0bcf8777a1df439182401411b6",
"assets/assets/entradas/1030_1040%2520-%2520SHIMEJI_SHITAKE.png": "c2bcd33e6166fad9c1508ef62f1cf6bb",
"assets/assets/entradas/8050%2520-%2520TEISHOKU_SALMAO.png": "def3fa4965aa5a8c5aed42fcbcc7266c",
"assets/assets/entradas/4080%2520-%2520CALIFORNIA.png": "ac6bb1980a8d465891bccc6027d41d18",
"assets/assets/entradas/5040%2520-%2520PREGO.png": "c511a9a458b6b31cd5d815080f5257a0",
"assets/assets/entradas/2160%2520-%2520PHILADELPHIA.png": "c506543e9ac623bd1f5385aa3a0437ed",
"assets/assets/entradas/2040%2520-%2520KAPAMAKI.png": "1804c85421f47a2d4af18fcf1dd724da",
"assets/assets/entradas/5030%2520-%2520CAMAR%25D8%25A7O.png": "8ad97de46367392a3759bb530bf3958c",
"assets/assets/entradas/5030%2520-%2520CAMARAO.png": "f2443f72ef15dcd4da750af9a9f48b71",
"assets/assets/entradas/suco.jpg": "9c517c7e528c00372b23496b556c3beb",
"assets/assets/entradas/2410%2520-%2520MASSARICADO.png": "95c7e3b000e871a0807de33c0dbf44db",
"assets/assets/entradas/5010%2520-%2520SALM%25D8%25A7O.png": "db58ff147dbd720d6a7da7e783c0ab3b",
"assets/assets/entradas/4060%2520-%2520TOMATO.png": "51aab2829d7d5470c1409c0ada7ebefb",
"assets/assets/entradas/2030%2520-%2520KANIMAKI.png": "04440ce3a77d6040a0db2c322d1a5968",
"assets/assets/entradas/7030%2520-%2520ANEIS_LULA.png": "5194d7fa07160512bdac952d2c9889ee",
"assets/assets/entradas/6010%2520-%2520EXECUTIVO_SALMAO.png": "4b5bdfe9f2f2144635dc4ca7ba8fb9be",
"assets/assets/entradas/3060%2520-%2520SKIN.png": "d9395ff29d9f87bb0954ebc762490055",
"assets/assets/entradas/6040%2520-%2520SETTO.png": "28e89b10fb92165ffd160d1bb840151d",
"assets/assets/entradas/4010%2520-%2520SALM%25D8%25A7O.png": "db068ca1af6c1dbff88b4a271b31e732",
"assets/assets/entradas/2150%2520-%2520HOT_DRAGON.png": "8a20fd0fa451d07e5092ac4ab7f7389b",
"assets/assets/entradas/4030%2520-%2520CAMARAO.png": "62375602a890e6a90659a3bbf6ced1b0",
"assets/assets/entradas/6050%2520-%2520MIX_ESPECIAL.png": "4ae999f76590ccb1b4a0790ce13c19d2",
"assets/assets/entradas/6040%2520-%2520SETTO_2.png": "5c1a9537b4bc261a73b7986a9b35dd10",
"assets/assets/entradas/1010%2520-%2520GARI.png": "845c823d9043e6d5d9620b7014e65aa7",
"assets/assets/entradas/1110%2520-%2520TEMPURA_LEGUMES.png": "2eefed7e8c5aecae7f9251efc982e4f1",
"assets/assets/entradas/1120%2520-%2520TEMPURA_ESPECIAL.png": "a917583ed82e895d4fe04bff7b3491db",
"assets/assets/entradas/1070%2520-%2520GUIOZA.png": "1241a3c7e1040a4221f7f17ae014b23c",
"assets/assets/entradas/1090%2520-%2520HARUMAKI_QUEIJO.png": "291d93818daae63b5843c4bd8ee8e91b",
"assets/assets/entradas/RODIZIO_CLASSICO.PNG": "70e3f9dc276ff7c9a5a8c270dc4fe55c",
"assets/assets/entradas/5050%2520-%2520KANI.png": "f6a9871ffabda61438015b0d57824b64",
"assets/assets/entradas/7060%2520-%2520ISCA_TILAPIA.png": "a9e26062ef920b3962cfba9de5963593",
"assets/assets/entradas/0210%2520-%2520HOT_BANANA.png": "cd2013714429d3388c5a6accfc907403",
"assets/assets/entradas/5000%2520-%2520SASHIMI.png": "ae00e1cd0c2eb9f05062a8a8512b4e80",
"assets/assets/entradas/8300%2520-%2520RISOTO.png": "8963b1d2fe5a04fabec8a9d997810690",
"assets/assets/entradas/2110%2520-%2520SKIM.png": "c9506878aaf5b81b305ac0ded38bf73c",
"assets/assets/entradas/1080%2520-%2520HARUMAKI_CARNE.png": "1266422f45e50e952e01f0aa6a6ad1b2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
