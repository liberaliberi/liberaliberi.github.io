(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6057:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1703)}])},1988:function(e,t,n){"use strict";n.d(t,{T:function(){return i}});var r=n(5893),o=n(7070),a=n.n(o),i=function(){return(0,r.jsx)("div",{className:a().logo,children:"Libera Liberi"})}},7469:function(e,t,n){"use strict";var r=n(5893),o=(n(7294),n(9008)),a="\ub9ac\ubca0\ub77c\ub9ac\ubca0\ub9ac",i="https://liberaliberi.github.io";t.Z=function(e){var t=e.pageName,n=e.description,c=void 0===n?"\ub098\ub294 \uc5b4\ub5a4 \uac00\ub4e0\uc131\ud5a5\uc77c\uae4c? \uc815\uc6d0\uc131\ud5a5\ud14c\uc2a4\ud2b8 \uc2dc\uc791\ud558\uae30. \ub9ac\ubca0\ub77c\ub9ac\ubca0\ub9ac\uac00 \uc81c\uacf5\ud558\ub294 \ub098\uc758 \uc815\uc6d0\uc131\ud5a5\ud14c\uc2a4\ud2b8 \uc54c\uc544\ubcf4\uae30":n,s=e.image,l=e.fullUrl,u=void 0===l?i:l,f=e.children,m=t?"".concat(t," - ").concat(a):a;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:m},"title"),(0,r.jsx)("meta",{name:"description",content:c},"meta-description"),(0,r.jsx)("meta",{name:"author",content:"liberaliberi"},"meta-author"),(0,r.jsx)("meta",{name:"title",content:m},"meta-title"),(0,r.jsx)("meta",{charSet:"utf-8"}),(0,r.jsx)("meta",{itemProp:"name",content:m},"itemprop-name"),(0,r.jsx)("meta",{itemProp:"description",content:c},"itemprop-description"),(0,r.jsx)("meta",{itemProp:"image",content:"".concat(i,"/").concat(s)},"itemprop-image"),(0,r.jsx)("meta",{name:"google-site-verification",content:"d7HelawSJUGI09brv7kPmxEV9U-YDLOMPADUywvo9BM"}),(0,r.jsx)("meta",{name:"naver-site-verification",content:"bd238244cba33b98be905b28943d0bd100904f22"}),(0,r.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,r.jsx)("meta",{property:"og:title",content:m},"og:title"),(0,r.jsx)("meta",{property:"og:image",content:"".concat(i,"/").concat(s)},"og:image"),(0,r.jsx)("meta",{property:"og:description",content:c},"og:description"),(0,r.jsx)("meta",{property:"og:site_name",content:a},"og:site_name"),(0,r.jsx)("meta",{property:"og:locale",content:"ko_KR"},"og:locale"),(0,r.jsx)("meta",{property:"og:url",content:u}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,r.jsx)("meta",{name:"twitter:title",content:m}),(0,r.jsx)("meta",{name:"twitter:description",content:c}),(0,r.jsx)("meta",{name:"twitter:image",content:"".concat(i,"/").concat(s)}),(0,r.jsx)("meta",{name:"robots",content:"index,follow"}),(0,r.jsx)("link",{rel:"canonical",href:i},"canonical"),f]})}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},c=n(6273),s=n(387),l=n(7190);var u={};function f(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var m=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),a=i.default.useMemo((function(){var t=o(c.resolveHref(r,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?c.resolveHref(r,e.as):a||n}}),[r,e.href,e.as]),m=a.href,d=a.as,p=e.children,v=e.replace,y=e.shallow,g=e.scroll,h=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var _=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,b=o(l.useIntersection({rootMargin:"200px"}),2),j=b[0],x=b[1],w=i.default.useCallback((function(e){j(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,j]);i.default.useEffect((function(){var e=x&&n&&c.isLocalURL(m),t="undefined"!==typeof h?h:r&&r.locale,o=u[m+"%"+d+(t?"%"+t:"")];e&&!o&&f(r,m,d,{locale:t})}),[d,m,x,h,n,r]);var L={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:i}))}(e,r,m,d,v,y,g,h)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(m)&&f(r,m,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof h?h:r&&r.locale,E=r&&r.isLocaleDomain&&c.getDomainLocale(d,k,r&&r.locales,r&&r.domainLocales);L.href=E||c.addBasePath(c.addLocale(d,k,r&&r.defaultLocale))}return i.default.cloneElement(t,L)};t.default=m},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(s){c=!0,o=s}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,r=a.useRef(),l=o(a.useState(!1),2),u=l[0],f=l[1],m=a.useCallback((function(e){r.current&&(r.current(),r.current=void 0),n||u||e&&e.tagName&&(r.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),s.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!c&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[m,u]};var a=n(7294),i=n(9311),c="undefined"!==typeof IntersectionObserver;var s=new Map},1703:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),o=n(7469),a=n(1988),i=n(1673),c=n.n(i),s=n(1664),l=n(3345),u=n.n(l),f=function(e){var t=e.href,n=e.name,o=e.onClick;return(0,r.jsx)(s.default,{href:t,children:(0,r.jsx)("a",{onClick:o,className:u().link,children:n})})},m=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{pageName:"\uc815\uc6d0\uc131\ud5a5 \ud14c\uc2a4\ud2b8",description:"\ub098\ub294 \uc5b4\ub5a4 \uc815\uc6d0\uc774 \uc5b4\uc6b8\ub9b4\uae4c",image:"/start-image.png"}),(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsx)("div",{style:{margin:"8.1055vh 0"}}),(0,r.jsx)(a.T,{}),(0,r.jsxs)("div",{className:c().descLayout,children:[(0,r.jsx)("p",{className:c().descLayout__description,children:"\ub098\ub294 \uc5b4\ub5a4"}),(0,r.jsx)("p",{className:c().descLayout__description,children:"\uc815\uc6d0\uc774 \uc5b4\uc6b8\ub9b4\uae4c?"})]}),(0,r.jsx)("h1",{className:c().startTitle,children:"\uc815\uc6d0 \uc131\ud5a5 \ud14c\uc2a4\ud2b8"}),(0,r.jsx)("div",{className:c().startImage,children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:"/start-image.avif",type:"image/avif"}),(0,r.jsx)("source",{srcSet:"/start-image.webp",type:"image/webp"}),(0,r.jsx)("img",{className:"start-image",src:"/start-image.png",alt:"",width:"100%",height:"100%"})]})}),(0,r.jsx)("div",{className:c().startBtn,children:(0,r.jsx)(f,{href:"/garden-test",name:"\ud14c\uc2a4\ud2b8 \uc2dc\uc791\ud558\uae30"})})]})]})}},1673:function(e){e.exports={container:"Home_container__97eC3",startTitle:"Home_startTitle__oS3vT",descLayout:"Home_descLayout__izXAk",descLayout__description:"Home_descLayout__description__vLc_T",startImage:"Home_startImage__KnpVL",startBtn:"Home_startBtn__SaJEt"}},3345:function(e){e.exports={choice:"button_choice__y79R8",link:"button_link___MwQy"}},7070:function(e){e.exports={logo:"logo_logo__ajVrv"}},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=6057,e(e.s=t);var t}));var t=e.O();_N_E=t}]);