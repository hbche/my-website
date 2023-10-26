"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,g=p["".concat(c,".").concat(b)]||p[b]||m[b]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5104:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Rust \u5e38\u89c1\u96c6\u5408",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png"},description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",tags:["rust","\u5165\u95e8","\u96c6\u5408"],date:new Date("2023-10-23T00:00:00.000Z")},i=void 0,l={permalink:"/my-website/blog/2023/10/23/rust-collections",source:"@site/blog/2023-10-23-rust-collections/index.md",title:"Rust \u5e38\u89c1\u96c6\u5408",description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",date:"2023-10-23T00:00:00.000Z",formattedDate:"2023\u5e7410\u670823\u65e5",tags:[{label:"rust",permalink:"/my-website/blog/tags/rust"},{label:"\u5165\u95e8",permalink:"/my-website/blog/tags/\u5165\u95e8"},{label:"\u96c6\u5408",permalink:"/my-website/blog/tags/\u96c6\u5408"}],readingTime:44.37,hasTruncateMarker:!0,authors:[{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png",imageURL:"https://github.com/hbche.png"}],frontMatter:{title:"Rust \u5e38\u89c1\u96c6\u5408",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png",imageURL:"https://github.com/hbche.png"},description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",tags:["rust","\u5165\u95e8","\u96c6\u5408"],date:"2023-10-23T00:00:00.000Z"},prevItem:{title:"Rust \u4f7f\u7528\u5305\u3001Crate\u548c\u6a21\u5757\u7ba1\u7406\u4e0d\u65ad\u589e\u957f\u7684\u9879\u76ee",permalink:"/my-website/blog/2023/10/26/rust-package-crate-module"},nextItem:{title:"Rust \u679a\u4e3e\u548c\u6a21\u5f0f\u5339\u914d",permalink:"/my-website/blog/2023/10/19/rust-enum-pattern-matching"}},c={authorsImageUrls:[void 0]},u=[],s={toc:u},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rust \u6807\u51c6\u5e93\u4e2d\u5305\u542b\u4e00\u7cfb\u5217\u88ab\u79f0\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u96c6\u5408"),"\uff08collections\uff09\u7684\u975e\u5e38\u6709\u7528\u7684\u6570\u636e\u7ed3\u6784\u3002\u5927\u90e8\u5206\u5176\u4ed6\u6570\u636e\u7c7b\u578b\u90fd\u4ee3\u8868\u4e00\u4e2a\u7279\u5b9a\u7684\u503c\uff0c\u4e0d\u8fc7\u96c6\u5408\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u503c\u3002\u4e0d\u540c\u4e8e\u5185\u5efa\u7684\u6570\u7ec4\u548c\u5143\u7ec4\u7c7b\u578b\uff0c\u8fd9\u4e9b\u96c6\u5408\u6307\u5411\u7684\u6570\u636e\u662f\u50a8\u5b58\u5728\u5806\u4e0a\u7684\uff0c\u8fd9\u610f\u5473\u7740\u6570\u636e\u7684\u6570\u91cf\u4e0d\u5fc5\u5728\u7f16\u8bd1\u65f6\u5c31\u5df2\u77e5\uff0c\u5e76\u4e14\u8fd8\u53ef\u4ee5\u968f\u7740\u7a0b\u5e8f\u7684\u8fd0\u884c\u589e\u957f\u6216\u7f29\u5c0f\u3002\u6bcf\u79cd\u96c6\u5408\u90fd\u6709\u7740\u4e0d\u540c\u529f\u80fd\u548c\u6210\u672c\uff0c\u800c\u6839\u636e\u5f53\u524d\u60c5\u51b5\u9009\u62e9\u5408\u9002\u7684\u96c6\u5408\uff0c\u8fd9\u662f\u4e00\u9879\u5e94\u5f53\u9010\u6e10\u638c\u63e1\u7684\u6280\u80fd\u3002\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u8be6\u7ec6\u7684\u4e86\u89e3\u4e09\u4e2a\u5728 Rust \u7a0b\u5e8f\u4e2d\u88ab\u5e7f\u6cdb\u4f7f\u7528\u7684\u96c6\u5408\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"vector \u5141\u8bb8\u6211\u4eec\u4e00\u4e2a\u6328\u7740\u4e00\u4e2a\u5730\u50a8\u5b58\u4e00\u7cfb\u5217\u6570\u91cf\u53ef\u53d8\u7684\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\uff08string\uff09\u662f\u5b57\u7b26\u7684\u96c6\u5408\u3002\u6211\u4eec\u4e4b\u524d\u89c1\u8fc7 String \u7c7b\u578b\uff0c\u4e0d\u8fc7\u5728\u672c\u7ae0\u6211\u4eec\u5c06\u6df1\u5165\u4e86\u89e3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u54c8\u5e0c map\uff08hash map\uff09\u5141\u8bb8\u6211\u4eec\u5c06\u503c\u4e0e\u4e00\u4e2a\u7279\u5b9a\u7684\u952e\uff08key\uff09\u76f8\u5173\u8054\u3002\u8fd9\u662f\u4e00\u4e2a\u53eb\u505a map \u7684\u66f4\u901a\u7528\u7684\u6570\u636e\u7ed3\u6784\u7684\u7279\u5b9a\u5b9e\u73b0\u3002")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6807\u51c6\u5e93\u63d0\u4f9b\u7684\u5176\u4ed6\u7c7b\u578b\u7684\u96c6\u5408\uff0c\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"https://rustwiki.org/zh-CN/std/collections/"},"\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u8ba8\u8bba\u5982\u4f55\u521b\u5efa\u548c\u66f4\u65b0 vector\u3001\u5b57\u7b26\u4e32\u548c\u54c8\u5e0c map\uff0c\u4ee5\u53ca\u5b83\u4eec\u6709\u4ec0\u4e48\u7279\u522b\u4e4b\u5904\u3002"))}m.isMDXComponent=!0}}]);