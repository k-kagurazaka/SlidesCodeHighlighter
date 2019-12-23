/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "ace.js",
    "revision": "83603cd2a06339a9e92b8f0aacec0033"
  },
  {
    "url": "index.css",
    "revision": "08448bfe1b447bbf783a256d46c79ae3"
  },
  {
    "url": "index.html",
    "revision": "bd8624f93dc7e720443ef11045f81413"
  },
  {
    "url": "index.js",
    "revision": "df0719d8fb398aff9831c2de182774f4"
  },
  {
    "url": "jquery.min.js",
    "revision": "a09e13ee94d51c524b7e2a728c7d4039"
  },
  {
    "url": "material-colors.js",
    "revision": "62d4d679092da70d66e51aa2752aa17f"
  },
  {
    "url": "mode-text.js",
    "revision": "83d2fb76e83e27150c9b1bc87001459f"
  },
  {
    "url": "prettify-languages.js",
    "revision": "4672b108372b541c06bb707bab6c4f44"
  },
  {
    "url": "prettify.js",
    "revision": "c1bdf5dd18d1da399f8df8eee1f5bfd7"
  },
  {
    "url": "theme-chrome.js",
    "revision": "eb6b7b8e5d13d16573b94b69e73a33bc"
  },
  {
    "url": "themes.js",
    "revision": "5e7de839de2c13408e104e525e2e12a7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
