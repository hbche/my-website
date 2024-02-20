"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,f=d["".concat(s,".").concat(k)]||d[k]||m[k]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={id:"frontend-css-tailwindcss",title:"tailwindcss",description:"\u524d\u7aef\u5de5\u7a0b\u5e08\u7684CSS\u77e5\u8bc6\u5e93",keywords:["Front-End","CSS","tailwindcss","framework"],tags:["Front-End","CSS","tailwindcss","framework"],sidebar_position:2,author:"hanbin",last_update:{date:new Date("2023-09-05T00:00:00.000Z"),author:"hbche"}},l=void 0,o={unversionedId:"\u57fa\u7840/css/frontend-css-tailwindcss",id:"\u57fa\u7840/css/frontend-css-tailwindcss",title:"tailwindcss",description:"\u524d\u7aef\u5de5\u7a0b\u5e08\u7684CSS\u77e5\u8bc6\u5e93",source:"@site/wiki/frontend/\u57fa\u7840/css/tailwind.md",sourceDirName:"\u57fa\u7840/css",slug:"/\u57fa\u7840/css/frontend-css-tailwindcss",permalink:"/my-website/frontend/\u57fa\u7840/css/frontend-css-tailwindcss",draft:!1,tags:[{label:"Front-End",permalink:"/my-website/frontend/tags/front-end"},{label:"CSS",permalink:"/my-website/frontend/tags/css"},{label:"tailwindcss",permalink:"/my-website/frontend/tags/tailwindcss"},{label:"framework",permalink:"/my-website/frontend/tags/framework"}],version:"current",lastUpdatedBy:"hbche",lastUpdatedAt:1693872e3,formattedLastUpdatedAt:"2023\u5e749\u67085\u65e5",sidebarPosition:2,frontMatter:{id:"frontend-css-tailwindcss",title:"tailwindcss",description:"\u524d\u7aef\u5de5\u7a0b\u5e08\u7684CSS\u77e5\u8bc6\u5e93",keywords:["Front-End","CSS","tailwindcss","framework"],tags:["Front-End","CSS","tailwindcss","framework"],sidebar_position:2,author:"hanbin",last_update:{date:"2023-09-05T00:00:00.000Z",author:"hbche"}},sidebar:"tutorialSidebar",previous:{title:"BEM",permalink:"/my-website/frontend/\u57fa\u7840/css/frontend-css-bem"},next:{title:"Web\u5b89\u5168-CORS",permalink:"/my-website/frontend/\u57fa\u7840/security/frontend-security-cors"}},s={},p=[{value:"\u4f18\u52bf",id:"\u4f18\u52bf",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u53ea\u9700\u4e66\u5199 HTML \u4ee3\u7801\uff0c\u65e0\u9700\u4e66\u5199 CSS\uff0c\u5373\u53ef\u5feb\u901f\u6784\u5efa\u7f8e\u89c2\u7684\u7f51\u7ad9\u3002tailwind \u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u5de5\u5177\u96c6\uff0c\u5305\u542b\u4e86\u5927\u91cf\u7c7b\u4f3c ",(0,a.kt)("inlineCode",{parentName:"p"},"flex"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"pt-4"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"text-center")," \u4ee5\u53ca ",(0,a.kt)("inlineCode",{parentName:"p"},"rotate-90")," \u7b49\u5de5\u5177\u7c7b\uff0c\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u5e76\u76f4\u63a5\u5728 HTML \u4ee3\u7801\u4e0a\u5b9e\u73b0\u4efb\u4f55 UI \u8bbe\u8ba1\u3002"),(0,a.kt)("h2",{id:"\u4f18\u52bf"},"\u4f18\u52bf"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7ea6\u675f"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5de5\u5177\u7c7b\uff08Utility classes\uff09\u80fd\u591f\u4e3a\u4f60\u63d0\u4f9b\u4e00\u5957\u7ea6\u675f\u7cfb\u7edf\uff0c\u907f\u514d\u8ba9\u4f60\u7684\u6837\u5f0f\u8868\u4e2d\u51fa\u73b0\u968f\u610f\u7684\u53d6\u503c\u3002\u5b83\u8ba9\u989c\u8272\u3001 \u95f4\u8ddd\u3001\u6392\u7248\u3001\u9634\u5f71\u4ee5\u53ca\u4e00\u5207\u5c5e\u6027\u7684\u53d6\u503c\u4fdd\u6301\u4e00\u81f4\uff0c\u5e76\u6700\u7ec8\u5f62\u6210\u4e00\u4e2a\u7cbe\u5fc3\u6784\u5efa\u7684\u8bbe\u8ba1\u7cfb\u7edf\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5b9e\u73b0\u4f60\u6240\u60f3"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u7531\u4e8e Tailwind \u62bd\u8c61\u5c42\u7ea7\u8f83\u4f4e\uff0c\u56e0\u6b64\u5b83\u4ece\u4e0d\u9f13\u52b1\u5c06\u540c\u4e00\u4e2a\u8bbe\u8ba1\u5e94\u7528\u5230\u4e24\u4e2a\u7f51\u7ad9\u4e0a\u3002\u5373\u4f7f\u4f7f\u7528\u76f8\u540c\u7684\u8c03\u8272\u677f\uff08color palette\uff09\u548c\u5c3a\u5bf8\u8bbe\u7f6e\uff0c\u4e5f\u80fd\u5f88\u5bb9\u6613\u5730\u8ba9\u540c\u6837\u7684\u7ec4\u4ef6\u5177\u6709\u5b8c\u5168\u4e0d\u540c\u7684\u5916\u89c2\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4f53\u79ef\u5c0f"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u7531\u4e8e Tailwind \u62bd\u8c61\u5c42\u7ea7\u8f83\u4f4e\uff0c\u56e0\u6b64\u5b83\u4ece\u4e0d\u9f13\u52b1\u5c06\u540c\u4e00\u4e2a\u8bbe\u8ba1\u5e94\u7528\u5230\u4e24\u4e2a\u7f51\u7ad9\u4e0a\u3002\u5373\u4f7f\u4f7f\u7528\u76f8\u540c\u7684\u8c03\u8272\u677f\uff08color palette\uff09\u548c\u5c3a\u5bf8\u8bbe\u7f6e\uff0c\u4e5f\u80fd\u5f88\u5bb9\u6613\u5730\u8ba9\u540c\u6837\u7684\u7ec4\u4ef6\u5177\u6709\u5b8c\u5168\u4e0d\u540c\u7684\u5916\u89c2\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u79fb\u52a8\u8bbe\u5907\u4f18\u5148"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5728 CSS \u4e2d\u5904\u7406\u4e00\u5927\u5806\u590d\u6742\u7684\u5a92\u4f53\u67e5\u8be2\uff08media queries\uff09\u662f\u5f88\u7cdf\u7cd5\u7684\uff0c\u800c Tailwind \u80fd\u591f\u8ba9\u4f60 \u5728 HTML \u4e2d\u76f4\u63a5\u652f\u6301\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u4efb\u4f55\u5de5\u5177\u7c7b\u524d\u9762\u6dfb\u52a0\u4e00\u4e2a\u4ee3\u8868\u5c4f\u5e55\u5c3a\u5bf8\u7684\u524d\u7f00\uff0c\u7136\u540e\u5c31\u80fd\u770b\u5230\u5b83\u795e\u5947\u5730\u4f5c\u7528\u5230\u67d0\u4e2a\u7279\u5b9a\u7684\u65ad\u70b9\uff08breakpoint\uff09\u4e0a\u4e86\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5404\u79cd\u72b6\u6001"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u9700\u8981\u5bf9\u9f20\u6807\u60ac\u505c\u7684\u9875\u9762\u5143\u7d20\u8bbe\u7f6e\u4e00\u4e9b\u7279\u6b8a\u7684\u6837\u5f0f\u5417\uff1f\u5c06 hover: \u524d\u7f00\u6dfb\u52a0\u5230\u4f60\u6240\u8981\u4f7f\u7528\u7684 CSS \u7c7b\u7684\u540d\u79f0\u524d\u9762\u5373\u53ef\u3002\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"focus"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"li"},"active"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"disabled"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"focus-within"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"focus-visible")," \u4ee5\u53ca\u6211\u4eec\u81ea\u5df1\u6240\u521b\u9020\u7684\u4e00\u4e9b\u5947\u5999\u7684\u72b6\u6001\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"group-hover"),"\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7ec4\u4ef6\u9a71\u52a8"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f60\u53d1\u73b0\u4e00\u904d\u53c8\u4e00\u904d\u5730\u91cd\u590d\u4f7f\u7528\u540c\u4e00\u7ec4\u5de5\u5177\u7c7b\u7684\u8bdd\uff0c\u90a3\u4f60\u6240\u9700\u8981\u505a\u7684\u662f\u5c06\u5b83\u4eec\u63d0\u53d6\u5230\u4e00\u4e2a\u7ec4\u4ef6\u6216\u6a21\u677f\u4e2d\uff0c\u7136\u540e\u4f60\u5c31\u53ef\u4ee5\u5c06\u5b83\u4eec\u653e\u5230\u4e00\u4e2a\u7edf\u4e00\u7684\u5730\u65b9\u5c31\u884c\u4fee\u6539\u4e86\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u60f3\u6d89\u8db3\u7ec4\u4ef6\u6846\u67b6\u7684\u4e16\u754c\uff1f\u5229\u7528 Tailwind \u5185\u7f6e\u7684 @apply \u6307\u4ee4\uff0c\u53ef\u4ee5\u901a\u8fc7\u590d\u5236\u3001\u7c98\u8d34\u7c7b\u540d\u5217\u8868\u7684\u65b9\u5f0f \u5c06\u4e00\u7cfb\u5217\u5de5\u5177\u7c7b\u6240\u5bf9\u5e94\u7684 CSS \u4ee3\u7801\u63d0\u53d6\u5230\u81ea\u5b9a\u4e49\u7c7b\u4e2d\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u591c\u95f4\u6a21\u5f0f"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u4f60\u4e5f\u4e0d\u5e0c\u671b\u7528\u6237\u5728\u51cc\u6668\u4e24\u70b9\u7528\u624b\u673a\u6253\u5f00\u4f60\u7684\u7f51\u7ad9\uff0c\u88ab\u523a\u773c\u7684\u767d\u5149\u6643\u778e\u53cc\u773c\u5427\uff1f \u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u5f00\u542f\u591c\u95f4\u6a21\u5f0f\uff0c\u7136\u540e\u5c06 dark: \u524d\u7f00\u6dfb\u52a0\u5230\u4efb\u4f55\u4ee3\u8868\u989c\u8272\u7684\u5de5\u5177\u7c7b\u540d\u79f0\u524d\u9762\uff0c\u5c31\u80fd\u652f\u6301\u591c\u95f4\u6a21\u5f0f\u4e86\u3002 \u6b64\u529f\u80fd\u652f\u6301\u80cc\u666f\u8272\uff08background colors\uff09\u3001\u6587\u672c\u989c\u8272\uff08text colors\uff09\u3001\u8fb9\u6846\u989c\u8272\uff08border colors\uff09\u4ee5\u53ca\u6e10\u53d8\u8272\uff08gradients\uff09\u3002"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7f16\u8f91\u5668\u652f\u6301"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u8fd8\u5728\u4e3a\u8bb0\u4e0d\u4f4f\u6240\u6709\u7c7b\u540d\u800c\u62c5\u5fc3\u5417\uff1fTailwind CSS IntelliSense \u6269\u5c55\u5df2\u7ecf\u652f\u6301 VS Code \u4e86\uff0c\u8fd8\u4e0d\u5feb\u53bb\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u667a\u80fd\u81ea\u52a8\u8865\u5168\u63d0\u793a\u3001\u4ee3\u7801\u68c0\u67e5\uff08linting\uff09\u3001CSS \u7c7b\u5b9a\u4e49\u7b49\uff0c\u6240\u6709\u8fd9\u4e9b \u90fd\u96c6\u6210\u5230\u7f16\u8f91\u5668\u4e2d\u4e86\uff0c\u5e76\u4e14\u65e0\u9700\u4efb\u4f55\u914d\u7f6e\u3002")))),(0,a.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://www.tailwindcss.cn/"},"tailwind \u4e2d\u6587\u5b98\u7f51"))))}m.isMDXComponent=!0}}]);