(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6057:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5461)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},c=r(6273),s=r(387),l=r(7190);var u={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=s.useRouter(),a=i.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,m=e.children,h=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var _=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,b=o(l.useIntersection({rootMargin:"200px"}),2),j=b[0],x=b[1],w=i.default.useCallback((function(e){j(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,j]);i.default.useEffect((function(){var e=x&&r&&c.isLocalURL(d),t="undefined"!==typeof g?g:n&&n.locale,o=u[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,x,g,r,n]);var L={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:i}))}(e,n,d,p,h,v,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof g?g:n&&n.locale,I=n&&n.isLocaleDomain&&c.getDomainLocale(p,N,n&&n.locales,n&&n.domainLocales);L.href=I||c.addBasePath(c.addLocale(p,N,n&&n.defaultLocale))}return i.default.cloneElement(t,L)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,n=a.useRef(),l=o(a.useState(!1),2),u=l[0],f=l[1],d=a.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||u||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return a.useEffect((function(){if(!c&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var a=r(7294),i=r(9311),c="undefined"!==typeof IntersectionObserver;var s=new Map},5461:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),o=r(1664),a=(r(7294),r(9008)),i="liberaliberi",c=function(e){var t=e.pageName,r=e.description,o=void 0===r?"\ub098\ub294 \uc5b4\ub5a4 \uac00\ub4e0\uc131\ud5a5\uc77c\uae4c? \uac00\ub4e0\uc131\ud5a5\ud14c\uc2a4\ud2b8 \uc2dc\uc791\ud558\uae30. \ub9ac\ubca0\ub77c\ub9ac\ubca0\ub9ac\uac00 \uc81c\uacf5\ud558\ub294 \ub098\uc758 \uac00\ub4e0\uc131\ud5a5\ud14c\uc2a4\ud2b8 \uc54c\uc544\ubcf4\uae30":r,c=e.image,s=e.children,l=t?"".concat(t," - ").concat(i,"}"):i;return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("title",{children:l},"title"),(0,n.jsx)("meta",{name:"description",content:o},"meta-description"),(0,n.jsx)("meta",{name:"author",content:"liberaliberi"},"meta-author"),(0,n.jsx)("meta",{name:"title",content:l},"meta-title"),(0,n.jsx)("meta",{itemProp:"name",content:l},"itemprop-name"),(0,n.jsx)("meta",{itemProp:"description",content:o},"itemprop-description"),(0,n.jsx)("meta",{itemProp:"image",content:c},"itemprop-image"),(0,n.jsx)("meta",{name:"google-site-verification",content:"lqawRf4dWNUP4TI4qhDccfX7ni3f6_ghIgmo8H1N0_s"}),(0,n.jsx)("meta",{name:"naver-site-verification",content:"bd238244cba33b98be905b28943d0bd100904f22"}),(0,n.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,n.jsx)("meta",{property:"og:title",content:l},"og:title"),(0,n.jsx)("meta",{property:"og:description",content:o},"og:description"),(0,n.jsx)("meta",{property:"og:site_name",content:i},"og:site_name"),(0,n.jsx)("meta",{property:"og:locale",content:"ko_KR"},"og:locale"),s]})},s=r(1673),l=r.n(s),u=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c,{pageName:"\ub098\ub294 \uc5b4\ub5a4 \uc815\uc6d0\uc774 \uc5b4\uc6b8\ub9b4\uae4c?",description:"\uc815\uc6d0\uc131\ud5a5 \ud14c\uc2a4\ud2b8",image:"/start-image.png"}),(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsx)("div",{className:l().startAuthor,children:"Libera Liberi"}),(0,n.jsxs)("div",{className:l().descLayout,children:[(0,n.jsx)("p",{className:l().descLayout__description,children:"\ub098\ub294 \uc5b4\ub5a4"}),(0,n.jsx)("p",{className:l().descLayout__description,children:"\uc815\uc6d0\uc774 \uc5b4\uc6b8\ub9b4\uae4c?"})]}),(0,n.jsx)("h1",{className:l().startTitle,children:"\uc815\uc6d0 \uc131\ud5a5 \ud14c\uc2a4\ud2b8"}),(0,n.jsx)("div",{className:l().startImage,children:(0,n.jsxs)("picture",{children:[(0,n.jsx)("source",{srcSet:"/start-image.avif"}),(0,n.jsx)("source",{srcSet:"/start-image.webp"}),(0,n.jsx)("img",{className:"start-image",src:"/start-image.png",alt:"",width:"100%",height:"100%"})]})}),(0,n.jsx)(o.default,{href:"/question",children:(0,n.jsx)("button",{className:l().startButton,children:(0,n.jsx)("a",{children:"\ud14c\uc2a4\ud2b8 \uc2dc\uc791\ud558\uae30"})})})]})]})}},1673:function(e){e.exports={container:"Home_container__97eC3",startAuthor:"Home_startAuthor___PvGq",startTitle:"Home_startTitle__oS3vT",descLayout:"Home_descLayout__izXAk",descLayout__description:"Home_descLayout__description__vLc_T",startImage:"Home_startImage__KnpVL",startButton:"Home_startButton__VWWFj"}},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=6057,e(e.s=t);var t}));var t=e.O();_N_E=t}]);