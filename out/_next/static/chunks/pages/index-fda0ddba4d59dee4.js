(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6057:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8026)}])},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},c=n(6273),l=n(387),s=n(7190);var u={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=l.useRouter(),a=i.default.useMemo((function(){var t=o(c.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),d=a.href,p=a.as,m=e.children,h=e.replace,b=e.shallow,v=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var y=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,_=o(s.useIntersection({rootMargin:"200px"}),2),j=_[0],k=_[1],x=i.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);i.default.useEffect((function(){var e=k&&n&&c.isLocalURL(d),t="undefined"!==typeof g?g:r&&r.locale,o=u[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(r,d,p,{locale:t})}),[p,d,k,g,n,r]);var w={ref:x,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,r,d,p,h,b,v,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(r,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof g?g:r&&r.locale,I=r&&r.isLocaleDomain&&c.getDomainLocale(p,E,r&&r.locales,r&&r.domainLocales);w.href=I||c.addBasePath(c.addLocale(p,E,r&&r.defaultLocale))}return i.default.cloneElement(t,w)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(l){c=!0,o=l}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,r=a.useRef(),s=o(a.useState(!1),2),u=s[0],f=s[1],d=a.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||u||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!c&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=n(7294),i=n(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map},8026:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(5893),o=n(1664),a=n(7294),i=n(4298);function c(e){var t=e.children;return(0,a.useEffect)((function(){var e=window.Kakao;e&&!e.isInitialized()&&e.init("bffac30d79ce8fe310a23cfc80d10050")}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{src:"https://developers.kakao.com/sdk/js/kakao.js",strategy:"beforeInteractive"}),t]})}var l="https://liberaliberi.github.io";function s(){return(0,a.useEffect)((function(){var e=window.Kakao;e&&e.Link.createDefaultButton({container:"#create-kakao-link-btn",objectType:"feed",content:{title:"custom \ud558\uac8c \ubcc0\uacbd\ub418\uc5b4\uc57c \ud568",description:"custom\ud558\uac8c \ubcc0\uacbd\ub418\uc5b4\uc57c \ud568",imageUrl:"https://photos.app.goo.gl/Ej8ptuCF4m3iYC6t5",link:{mobileWebUrl:l,webUrl:l}},buttons:[{title:"\ub0b4 \uc815\uc6d0\uc0ac\uc774\ud2b8 \ubcf4\ub7ec\uac00\uae30",link:{mobileWebUrl:l,webUrl:l}}]})}),[]),(0,r.jsx)(c,{children:(0,r.jsx)("a",{id:"create-kakao-link-btn",children:(0,r.jsx)("img",{src:"https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png",alt:"\uce74\uce74\uc624\ub9c1\ud06c \ubcf4\ub0b4\uae30 \ubc84\ud2bc"})})})}function u(e){var t=e.children;return(0,a.useEffect)((function(){var e=window.FB;e&&e.init({appId:"968358264097523",autoLogAppEvents:!0,xfbml:!0,version:"v12.0"})}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{async:!0,defer:!0,crossOrigin:"anonymous",strategy:"beforeInteractive",src:"https://connect.facebook.net/en_US/sdk.js"}),t]})}function f(){return(0,r.jsx)(u,{children:(0,r.jsx)("div",{className:"fb-share-button","data-href":"https://developers.facebook.com/docs/plugins/","data-layout":"button","data-size":"large",children:(0,r.jsx)("a",{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&src=sdkpreparse",className:"fb-xfbml-parse-ignore",children:"\uacf5\uc720"})})})}var d=n(9008),p="LIBERA-LIBERI",m=function(e){var t=e.pageName,n=e.description,o=void 0===n?"\ub098\ub294 \uc5b4\ub5a4 \uac00\ub4e0\uc131\ud5a5\uc77c\uae4c? \uac00\ub4e0\uc131\ud5a5\ud14c\uc2a4\ud2b8 \uc2dc\uc791\ud558\uae30. \ub9ac\ubca0\ub77c\ub9ac\ubca0\ub9ac\uac00 \uc81c\uacf5\ud558\ub294 \ub098\uc758 \uac00\ub4e0\uc131\ud5a5\ud14c\uc2a4\ud2b8 \uc54c\uc544\ubcf4\uae30":n,a=e.children,i=t?"".concat(t," - Libera-Liberi}"):p;return(0,r.jsxs)(d.default,{children:[(0,r.jsx)("title",{children:i},"title"),(0,r.jsx)("meta",{name:"description",content:o},"meta-description"),(0,r.jsx)("meta",{name:"author",content:"liberaliberi"},"meta-author"),(0,r.jsx)("meta",{name:"title",content:i},"meta-title"),(0,r.jsx)("meta",{itemProp:"name",content:i},"itemprop-name"),(0,r.jsx)("meta",{itemProp:"description",content:o},"itemprop-description"),(0,r.jsx)("meta",{itemProp:"image",content:""},"itemprop-image"),(0,r.jsx)("meta",{name:"google-site-verification",content:"lqawRf4dWNUP4TI4qhDccfX7ni3f6_ghIgmo8H1N0_s"}),(0,r.jsx)("meta",{name:"naver-site-verification",content:"bd238244cba33b98be905b28943d0bd100904f22"}),(0,r.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,r.jsx)("meta",{property:"og:title",content:i},"og:title"),(0,r.jsx)("meta",{property:"og:description",content:o},"og:description"),(0,r.jsx)("meta",{property:"og:site_name",content:p},"og:site_name"),(0,r.jsx)("meta",{property:"og:locale",content:"ko_KR"},"og:locale"),a]})},h=n(214),b=n.n(h),v=function(){return(0,r.jsx)("div",{className:b().container,children:(0,r.jsx)("main",{className:b().main,children:(0,r.jsxs)(m,{children:[(0,r.jsx)(s,{}),(0,r.jsx)(f,{}),(0,r.jsx)(o.default,{href:"/question",children:(0,r.jsx)("a",{children:"\uc815\uc6d0\uc131\ud5a5 \ud14c\uc2a4\ud2b8 \ud558\ub7ec\uac00\uae30"})})]})})})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},4298:function(e,t,n){e.exports=n(699)}},function(e){e.O(0,[774,888,179],(function(){return t=6057,e(e.s=t);var t}));var t=e.O();_N_E=t}]);