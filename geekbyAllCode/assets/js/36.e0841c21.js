(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{21:function(t,n,e){"use strict";e.d(n,"d",function(){return r}),e.d(n,"f",function(){return o}),e.d(n,"g",function(){return a}),e.d(n,"h",function(){return c}),e.d(n,"b",function(){return f}),e.d(n,"e",function(){return p}),e.d(n,"j",function(){return h}),e.d(n,"k",function(){return d}),e.d(n,"c",function(){return m}),e.d(n,"i",function(){return b}),e.d(n,"a",function(){return g});const r=/#.*$/,i=/\.(md|html)$/,l=/\/$/,s=/^(https?:|mailto:|tel:)/;function u(t){return decodeURI(t).replace(r,"").replace(i,"")}function o(t){return s.test(t)}function a(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(o(t))return t;const n=t.match(r),e=n?n[0]:"",i=u(t);return l.test(i)?t:i+".html"+e}function p(t,n){const e=t.hash,i=function(t){const n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&u(t.path)===u(n)}function h(t,n,e){e&&(n=function(t,n,e){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;const i=n.split("/");e&&i[i.length-1]||i.pop();const l=t.replace(/^\//,"").split("/");for(let t=0;t<l.length;t++){const n=l[t];".."===n?i.pop():"."!==n&&i.push(n)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));const r=u(n);for(let n=0;n<t.length;n++)if(u(t[n].regularPath)===r)return Object.assign({},t[n],{type:"page",path:f(t[n].path)});return console.error(`[vuepress] No matching page found for sidebar item "${n}"`),{}}function d(t,n,e,r){const{pages:i,themeConfig:l}=e,s=r&&l.locales&&l.locales[r]||l;if("auto"===(t.frontmatter.sidebar||s.sidebar||l.sidebar))return function(t){const n=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:n.map(n=>({type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}))}]}(t);const u=s.sidebar||l.sidebar;if(u){const{base:t,config:e}=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(const r in n)if(0===(e=t,/(\.html|\/)$/.test(e)?e:e+"/").indexOf(r))return{base:r,config:n[r]};var e;return{}}(n,u);return e?e.map(n=>(function t(n,e,r,i){if("string"==typeof n)return h(e,n,r);if(Array.isArray(n))return Object.assign(h(e,n[0],r),{title:n[1]});{i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const l=n.children||[];return{type:"group",title:n.title,children:l.map(n=>t(n,e,r,!0)),collapsable:!1!==n.collapsable}}})(n,i,t)):[]}return[]}function m(t){let n;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}const g=function(t,n,e){var r,i,l,s,u;function o(){var a=Date.now()-s;a<n&&a>=0?r=setTimeout(o,n-a):(r=null,e||(u=t.apply(l,i),l=i=null))}null==n&&(n=100);var a=function(){l=this,i=arguments,s=Date.now();var a=e&&!r;return r||(r=setTimeout(o,n)),a&&(u=t.apply(l,i),l=i=null),u};return a.clear=function(){r&&(clearTimeout(r),r=null)},a.flush=function(){r&&(u=t.apply(l,i),l=i=null,clearTimeout(r),r=null)},a}},226:function(t,n,e){"use strict";e.r(n);var r=e(21),i={props:{item:{required:!0}},computed:{link(){return Object(r.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h}},l=e(1),s=Object(l.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);n.default=s.exports}}]);