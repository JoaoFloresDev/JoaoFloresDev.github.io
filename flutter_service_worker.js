'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "21b60d415374031526ebe304809a0f7a",
"splash/teste.png": "15bb4e92cff9e9b91d35f77d68cf49c4",
"splash/img/teste.png": "15bb4e92cff9e9b91d35f77d68cf49c4",
"splash/favicon.png": "15bb4e92cff9e9b91d35f77d68cf49c4",
"splash/style.css": "aa856a66153fa64eb260bc3bde1f88c2",
"index.html": "0acd1a06a4eaefe656b0a2404aaec25e",
"/": "294172116aabe772f48f8a56c6761af7",
"main.dart.js": "0c360361c7c4ad649f3dd9ac5f74effc",
"web/index.html": "294172116aabe772f48f8a56c6761af7",
"web/icons/Icon-192.png": "170d89a50bcdc41aeb24e45a23a5378b",
"web/icons/Icon-512.png": "15bb4e92cff9e9b91d35f77d68cf49c4",
"web/manifest.json": "0f86af74cd342d8ff8561668da747ec9",
"pubspec.lock": "4ace21db7ee0cc599a9eb3187193869c",
"README.md": "4b903d7ce00e79d5f9748941d475b443",
"favicon.png": "15bb4e92cff9e9b91d35f77d68cf49c4",
"pubspec.yaml": "66a153d59787a89979a24e0477c136f0",
"icons/Icon-192.png": "170d89a50bcdc41aeb24e45a23a5378b",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "15bb4e92cff9e9b91d35f77d68cf49c4",
"manifest.json": "39c1686d37b5ec719b32f20c17dd9d57",
"lib/main.dart": "486d758024205cbd505432a1107cff0b",
".dart_tool/package_config.json": "647ef0c809cc16f2ebbfe88f859adf52",
".dart_tool/package_config_subset": "ef26d4f87af7e604f400509ec9d21393",
".dart_tool/version": "5d36c29483386600ea4bf8921a417a46",
"assets/AssetManifest.json": "73e89e312be91c3d35b072fb96fb596d",
"assets/NOTICES": "b9e43d3b2f32828941fb861685236df0",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/entradas/8030%2520-%2520YAKIMESHI.png": "cb5cc426835c3f797c4edf62d97dc77a",
"assets/assets/entradas/2360%2520-%2520JOE.png": "d30f73eb2cccdcdb1e7c9edb0232b5dd",
"assets/assets/entradas/1060%2520-%2520TOFU.png": "fb5502f5c1a8c4e2aad6a379fc490c95",
"assets/assets/entradas/5080%2520-%2520TILAPIA_PICANTE.png": "b75abe5b8cf3a87a0d28662e7230c8af",
"assets/assets/entradas/8130%2520-%2520TEPPAN_SALMAO.png": "1e70177f1305b9d4e8898f6f568dcf67",
"assets/assets/entradas/6030%2520-%2520COMBINADO_ESPECIAL.png": "1c18b5aefb91c24fced5e45b6fe9c327",
"assets/assets/entradas/2350%2520-%2520FLAMBADO.png": "af5b6ed13ddbcffc8febf26226ef0cda",
"assets/assets/entradas/2170%2520-%2520SALMON.png": "0e0a45386298532d8c71326d45460558",
"assets/assets/entradas/2380%2520-%2520SALMAOCHILI.png": "040df0fb9c3c748ef410c2f3276d6bb5",
"assets/assets/entradas/1140%2520-%2520CARPACCIO.png": "1487cd4d7773c0c72b3455d7acefd8d6",
"assets/assets/entradas/promotionYakissobaFrango.jpeg": "03c79dffa07f00261309dd1b72c4a6a9",
"assets/assets/entradas/8220%2520-%2520YAKISSOBA_MISTO.png": "32c3ef655f77a46462049d61dc0072ac",
"assets/assets/entradas/2120%2520-%2520CALIFORNIA.png": "0c50b7dc29c3c3de6b234ebe2beeb387",
"assets/assets/entradas/2140%2520-%2520TOMATO.png": "98df24a98e85eaea7788b1f98f52685e",
"assets/assets/entradas/4070%2520-%2520SHITAKE.png": "f813ff64604a2c499c19444d5159d710",
"assets/assets/entradas/refrigerante.jpg": "99f318fbce870f9bcfa29da25fa193d1",
"assets/assets/entradas/4040%2520-%2520EMPANADO.png": "90b1e1c0a9bf1c70342558ac973792f2",
"assets/assets/entradas/8180%2520-%2520FRANGO_XADREZ.png": "ebf612615d95899c4b2e9fa4199ee738",
"assets/assets/entradas/8280%2520-%2520FILE_LEGUMES.png": "adbf199c44161fd39e6861dc47bfa4a7",
"assets/assets/entradas/6020%2520-%2520COMBINADO_SIMPLES.png": "cd620e7e9a6d5caf09354f8cc14c3d38",
"assets/assets/entradas/1100%2520-%2520KAKIAGUE.png": "9ed71344f9f32c90ddaf1e40e7d4292b",
"assets/assets/entradas/1130%2520-%2520CEVICHE.png": "2ba950efad9a3cb7f70955f5acbaf9a1",
"assets/assets/entradas/4050%2520-%2520SKIN.png": "75dcafbf9c0839d212a615a9ae1ac56a",
"assets/assets/entradas/7050%2520-%2520SALMAO.png": "550f24f0b7dd54e3ff9675d1178a54ca",
"assets/assets/entradas/8020%2520-%2520GOHAN.png": "d45e1cae697842784220c4d3a3fe6a32",
"assets/assets/entradas/7070%2520-%2520ISCA_FILE.png": "4cadafa493017dbc87dd66170b9cfb23",
"assets/assets/entradas/7010%2520-%2520CAMARAO_7_BARBAS.png": "95497bd6b1fed06929b9df2fa37f4f94",
"assets/assets/entradas/agua.jpg": "dc9fd200d26c990155ed0475691adebf",
"assets/assets/entradas/2400%2520-%2520PANKO.png": "077d22c687aa05d2c4f81a49f0c66ee8",
"assets/assets/entradas/7080%2520-%2520ISCA_FRANGO.png": "5b8056d52deeb08013c30a26c9f190c1",
"assets/assets/entradas/7100%2520-%2520BATATA.png": "50c9e9731ce9c05a80c249fc13c8b526",
"assets/assets/entradas/2180%2520-%2520NUTELLA.png": "ba74b52d95aeee357c3925cf8a994d86",
"assets/assets/entradas/5070%2520-%2520TILAPIA.png": "8d783a07973d29c53d4fe72828f7ffcb",
"assets/assets/entradas/2010%2520-%2520SAKKEMAKI.png": "c44b8c24ff6ad1304aeceb329fe4b9af",
"assets/assets/entradas/1020%2520-%2520SUNOMONO.png": "b78e0a890569ae06ae283e07959cf4dc",
"assets/assets/entradas/2310%2520-%2520PEPER.png": "da36f8dd13fca6d2c1e9e5d3bbd09b29",
"assets/assets/entradas/7020%2520-%2520CAMARAO_ROSA.png": "c57ee2a9421fa8ab0424789c4d37dd5f",
"assets/assets/entradas/commboVegano.png": "cc7ad0ec84bd2b9a84eeddf1b5a2eddb",
"assets/assets/entradas/5010%2520-%2520SALMAO.png": "326935c2a1530b6f745733b906cdd9e4",
"assets/assets/entradas/8010%2520-%2520MISSOSHIRU.png": "ded146781d1158cb16aa1186dd7fb19a",
"assets/assets/entradas/RODIZIO_PREMIUM.PNG": "18a62d9d877891f0658553ca70d1cfeb",
"assets/assets/entradas/4010%2520-%2520SALMAO.png": "f2ae893d12cb2cf2a717d0629e5c268b",
"assets/assets/entradas/8320_8360%2520-%2520PEIXE_TELHA.png": "7ec255d7c0a87ee9e9d24762d027a37c",
"assets/assets/entradas/2130%2520-%2520SHITAKE.png": "9838538d431f9951157bb11b7d897e0b",
"assets/assets/entradas/2340%2520-%2520HOT_ROLL.png": "c0fca024c56bf82abf4d03cbd636d0a0",
"assets/assets/entradas/2320%2520-%2520PHILADELPHIA.png": "21845a095e5d4653b10a090628c0b117",
"assets/assets/entradas/1030_1040%2520-%2520SHIMEJI_SHITAKE.png": "c2bcd33e6166fad9c1508ef62f1cf6bb",
"assets/assets/entradas/8050%2520-%2520TEISHOKU_SALMAO.png": "184dc30c8385527ee5f5c25992d68150",
"assets/assets/entradas/4080%2520-%2520CALIFORNIA.png": "fcb4664e529eb19b551dd3620028f29d",
"assets/assets/entradas/5040%2520-%2520PREGO.png": "9c2690738b6ea11bee4a4cfbc486b9a0",
"assets/assets/entradas/2160%2520-%2520PHILADELPHIA.png": "c506543e9ac623bd1f5385aa3a0437ed",
"assets/assets/entradas/2040%2520-%2520KAPAMAKI.png": "1804c85421f47a2d4af18fcf1dd724da",
"assets/assets/entradas/5030%2520-%2520CAMARAO.png": "6631bb6afab21a74c8d1ee6e88f12b1c",
"assets/assets/entradas/suco.jpg": "1cf68e122f593e5ebd786ce7627efb9f",
"assets/assets/entradas/2410%2520-%2520MASSARICADO.png": "33cd1f6412c506976cf5b3f017b37474",
"assets/assets/entradas/4060%2520-%2520TOMATO.png": "f0aeda3539a0b5b4685fc574d00a063e",
"assets/assets/entradas/2030%2520-%2520KANIMAKI.png": "04440ce3a77d6040a0db2c322d1a5968",
"assets/assets/entradas/7030%2520-%2520ANEIS_LULA.png": "472abcd9f0884e57e85d631036618170",
"assets/assets/entradas/6010%2520-%2520EXECUTIVO_SALMAO.png": "e13475386352bfe91200ed2e1b65087e",
"assets/assets/entradas/3060%2520-%2520SKIN.png": "f0d94c5d84ae97e18b9aefd83b5f7de6",
"assets/assets/entradas/6040%2520-%2520SETTO.png": "af4c4860d1bcea0b209da0e02f7d62f4",
"assets/assets/entradas/2150%2520-%2520HOT_DRAGON.png": "8a20fd0fa451d07e5092ac4ab7f7389b",
"assets/assets/entradas/4030%2520-%2520CAMARAO.png": "2b54a9e5053dd5391420ed1e49dd0be0",
"assets/assets/entradas/promotionHotPhiladelphia.jpeg": "65720b5b9f74b3e57d0568f995df319b",
"assets/assets/entradas/6050%2520-%2520MIX_ESPECIAL.png": "3cf16624454a554ca4f04aa31d048668",
"assets/assets/entradas/1010%2520-%2520GARI.png": "845c823d9043e6d5d9620b7014e65aa7",
"assets/assets/entradas/1110%2520-%2520TEMPURA_LEGUMES.png": "2eefed7e8c5aecae7f9251efc982e4f1",
"assets/assets/entradas/1120%2520-%2520TEMPURA_ESPECIAL.png": "a917583ed82e895d4fe04bff7b3491db",
"assets/assets/entradas/1070%2520-%2520GUIOZA.png": "1241a3c7e1040a4221f7f17ae014b23c",
"assets/assets/entradas/1090%2520-%2520HARUMAKI_QUEIJO.png": "291d93818daae63b5843c4bd8ee8e91b",
"assets/assets/entradas/RODIZIO_CLASSICO.PNG": "0cb82470aa4a5f932885302dfe98f5cf",
"assets/assets/entradas/5050%2520-%2520KANI.png": "52dfdeb17f6c17a40d4024cd6600aad4",
"assets/assets/entradas/7060%2520-%2520ISCA_TILAPIA.png": "c5028461000c599e34bc9c13a4b8ee0e",
"assets/assets/entradas/8300%2520-%2520RISOTO.png": "1ef1a7e8d0ef661a1fbc62bed8a2199e",
"assets/assets/entradas/2110%2520-%2520SKIM.png": "c9506878aaf5b81b305ac0ded38bf73c",
"assets/assets/entradas/1080%2520-%2520HARUMAKI_CARNE.png": "1266422f45e50e952e01f0aa6a6ad1b2",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
