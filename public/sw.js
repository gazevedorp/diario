if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,t,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(t.map((s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/253-1bd7546d8ef88af7d551.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/276-aa324a50f63f25e66e83.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/552-b2d93beac7f0f5d21009.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/948-663136d0317054c6f8cc.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/main-da1bc8f8d312ca485cee.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/pages/_app-b67ae78469db3ac91c43.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/pages/forget-4473fe6bfaa24db07f3b.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/pages/has-doctor-9dd5b66b0a2f183c910f.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/pages/homeScreen-dd54f6b4dccb55dbcfc7.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/pages/index-28106c67f17488341cde.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/pages/login-39f775c7acdffcb4ebf6.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/pages/register-97e25ac19b0bf11d3857.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/chunks/webpack-0e3c274fd8419109d37b.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/css/0deb4357b80d9cba08ca.css",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/css/33f830eb3fd4423eca60.css",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/media/slick.295183786cd8a138986521d9f388a286.woff",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/zxtHCzlzfV-jH33F9WW-r/_buildManifest.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/_next/static/zxtHCzlzfV-jH33F9WW-r/_ssgManifest.js",revision:"zxtHCzlzfV-jH33F9WW-r"},{url:"/avatar.png",revision:"bbedcb13bc7153eb93f114f5c94eae4f"},{url:"/buscar-medico.png",revision:"e4d73f81273dd030152a050f286ca768"},{url:"/diario-alimentacao.png",revision:"21aa520f1e6374fa71f4e2394ec796a6"},{url:"/diario-dor.png",revision:"8759117a164c5cf54b80cbee92622f5d"},{url:"/diario-exercicio.png",revision:"da177e5a912049d54a5805ce38327b0a"},{url:"/favicon.png",revision:"db33bfd59838efbc974b03578e1daa4e"},{url:"/manifest.json",revision:"307e634d8228798ad95c15f4aeaa9d38"},{url:"/redes-sociais.png",revision:"599514bb8824efdbb646f7cd26225559"},{url:"/splash01.jpg",revision:"b290922b87443913d39462846bf8dac3"},{url:"/splash02.jpg",revision:"9e4d1653f6bd43ea218d72d7d5ab646a"},{url:"/splash03.jpg",revision:"c02cae157277f6c1dba4fb715475def3"},{url:"/splash04.jpg",revision:"60aa53d60380e5166e3c354cdf093b22"},{url:"/videos.png",revision:"f1ff859f8fb4b8139fd5b69e9fd6b39b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
