(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{1620:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(t,e)||c(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}e.default=function(t){var e=t.src,n=t.sizes,r=t.unoptimized,a=void 0!==r&&r,c=t.priority,d=void 0!==c&&c,m=t.loading,g=t.lazyBoundary,h=void 0===g?"200px":g,w=t.className,A=t.quality,S=t.width,j=t.height,k=t.objectFit,O=t.objectPosition,E=t.onLoadingComplete,_=t.loader,P=void 0===_?I:_,R=t.placeholder,M=void 0===R?"empty":R,q=t.blurDataURL,C=function(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),D=n?"responsive":"intrinsic";"layout"in C&&(C.layout&&(D=C.layout),delete C.layout);var L="";if(function(t){return"object"===typeof t&&(v(t)||function(t){return void 0!==t.src}(t))}(e)){var N=v(e)?e.default:e;if(!N.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(N)));if(q=q||N.blurDataURL,L=N.src,(!D||"fill"!==D)&&(j=j||N.height,S=S||N.width,!N.height||!N.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(N)))}e="string"===typeof e?e:L;var W=z(S),B=z(j),U=z(A),T=!d&&("lazy"===m||"undefined"===typeof m);(e.startsWith("data:")||e.startsWith("blob:"))&&(a=!0,T=!1);p.has(e)&&(T=!1);0;var H,F=o(f.useIntersection({rootMargin:h,disabled:!T}),2),V=F[0],J=F[1],$=!T||J,G={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K=!1,X={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:k,objectPosition:O},Y="blur"===M?{filter:"blur(20px)",backgroundSize:k||"cover",backgroundImage:'url("'.concat(q,'")'),backgroundPosition:O||"0% 0%"}:{};if("fill"===D)G.display="block",G.position="absolute",G.top=0,G.left=0,G.bottom=0,G.right=0;else if("undefined"!==typeof W&&"undefined"!==typeof B){var Z=B/W,tt=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===D?(G.display="block",G.position="relative",K=!0,Q.paddingTop=tt):"intrinsic"===D?(G.display="inline-block",G.position="relative",G.maxWidth="100%",K=!0,Q.maxWidth="100%",H='<svg width="'.concat(W,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===D&&(G.display="inline-block",G.position="relative",G.width=W,G.height=B)}else 0;var et={src:y,srcSet:void 0,sizes:void 0};$&&(et=x({src:e,unoptimized:a,layout:D,width:W,quality:U,sizes:n,loader:P}));var nt=e;0;var rt;0;var it=(i(rt={},"imagesrcset",et.srcSet),i(rt,"imagesizes",et.sizes),rt);return l.default.createElement("span",{style:G},K?l.default.createElement("span",{style:Q},H?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(s.toBase64(H))}):null):null,l.default.createElement("img",Object.assign({},C,et,{decoding:"async","data-nimg":D,className:w,ref:function(t){V(t),function(t,e,n,r,i){if(!t)return;var o=function(){t.src!==y&&("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(t.style.filter="",t.style.backgroundSize="",t.style.backgroundImage="",t.style.backgroundPosition=""),p.add(e),i){var n=t.naturalWidth,o=t.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};t.complete?o():t.onload=o}(t,nt,0,M,E)},style:b({},X,Y)})),T&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},C,x({src:e,unoptimized:a,layout:D,width:W,quality:U,sizes:n,loader:P}),{decoding:"async","data-nimg":D,style:X,className:w,loading:m||"lazy"}))),d?l.default.createElement(u.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+et.src+et.srcSet+et.sizes,rel:"preload",as:"image",href:et.srcSet?void 0:et.src},it))):null)};var l=g(n(7294)),u=g(n(5443)),s=n(6978),d=n(5809),f=n(7190);function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){return t&&t.__esModule?t:{default:t}}function b(t){for(var e=arguments,n=function(n){var r=null!=e[n]?e[n]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(e){m(t,e,r[e])}))},r=1;r<arguments.length;r++)n(r);return t}var p=new Set,y=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var h=new Map([["default",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality,o=new URL("".concat(e).concat(E(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var e=t.root,n=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(E(n))}],["akamai",function(t){var e=t.root,n=t.src,r=t.width;return"".concat(e).concat(E(n),"?imwidth=").concat(r)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function v(t){return void 0!==t.default}var w={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://liberaliberi.github.io/",loader:"imgix"}||d.imageConfigDefault,A=w.deviceSizes,S=w.imageSizes,j=w.loader,k=w.path,O=(w.domains,a(A).concat(a(S)));function x(t){var e=t.src,n=t.unoptimized,r=t.layout,i=t.width,o=t.quality,c=t.sizes,l=t.loader;if(n)return{src:e,srcSet:void 0,sizes:void 0};var u=function(t,e,n){if(n&&("fill"===e||"responsive"===e)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,o=[];r=i.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c,l=.01*(c=Math).min.apply(c,a(o));return{widths:O.filter((function(t){return t>=A[0]*l})),kind:"w"}}return{widths:O,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:A,kind:"w"}:{widths:a(new Set([t,2*t].map((function(t){return O.find((function(e){return e>=t}))||O[O.length-1]})))),kind:"x"}}(i,r,c),s=u.widths,d=u.kind,f=s.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:s.map((function(t,n){return"".concat(l({src:e,quality:o,width:t})," ").concat("w"===d?t:n+1).concat(d)})).join(", "),src:l({src:e,quality:o,width:s[f]})}}function z(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function I(t){var e=h.get(j);if(e)return e(b({root:k},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(j))}function E(t){return"/"===t[0]?t.slice(1):t}A.sort((function(t,e){return t-e})),O.sort((function(t,e){return t-e}))},7190:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o=[],a=!0,c=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw i}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootMargin,n=t.disabled||!c,r=o.useRef(),u=i(o.useState(!1),2),s=u[0],d=u[1],f=o.useCallback((function(t){r.current&&(r.current(),r.current=void 0),n||s||t&&t.tagName&&(r.current=function(t,e,n){var r=function(t){var e=t.rootMargin||"",n=l.get(e);if(n)return n;var r=new Map,i=new IntersectionObserver((function(t){t.forEach((function(t){var e=r.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return l.set(e,n={id:e,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(t,e),o.observe(t),function(){a.delete(t),o.unobserve(t),0===a.size&&(o.disconnect(),l.delete(i))}}(t,(function(t){return t&&d(t)}),{rootMargin:e}))}),[n,e,s]);return o.useEffect((function(){if(!c&&!s){var t=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(t)}}}),[s]),[f,s]};var o=n(7294),a=n(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},6978:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,e,n){t.exports=n(1620)}}]);