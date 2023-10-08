"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5540],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(k,l(l({ref:n},s),{},{components:t})):r.createElement(k,l({ref:n},s))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5859:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"Rust \u901a\u7528\u7f16\u7a0b\u6982\u5ff5 - \u51fd\u6570",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png"},description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",tags:["rust","\u51fd\u6570","tutorial"],date:new Date("2023-10-08T00:00:00.000Z")},l=void 0,o={permalink:"/my-website/blog/2023/10/08/rust-function",source:"@site/blog/2023-10-08-rust-function/index.md",title:"Rust \u901a\u7528\u7f16\u7a0b\u6982\u5ff5 - \u51fd\u6570",description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",date:"2023-10-08T00:00:00.000Z",formattedDate:"2023\u5e7410\u67088\u65e5",tags:[{label:"rust",permalink:"/my-website/blog/tags/rust"},{label:"\u51fd\u6570",permalink:"/my-website/blog/tags/\u51fd\u6570"},{label:"tutorial",permalink:"/my-website/blog/tags/tutorial"}],readingTime:11.265,hasTruncateMarker:!0,authors:[{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png",imageURL:"https://github.com/hbche.png"}],frontMatter:{title:"Rust \u901a\u7528\u7f16\u7a0b\u6982\u5ff5 - \u51fd\u6570",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png",imageURL:"https://github.com/hbche.png"},description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",tags:["rust","\u51fd\u6570","tutorial"],date:"2023-10-08T00:00:00.000Z"},prevItem:{title:"Rust \u901a\u7528\u7f16\u7a0b\u6982\u5ff5 - \u6570\u636e\u7c7b\u578b",permalink:"/my-website/blog/2023/10/08/rust-data-type"},nextItem:{title:"Rust \u901a\u7528\u7f16\u7a0b\u6982\u5ff5 - \u53d8\u91cf",permalink:"/my-website/blog/2023/10/07/rust-valiables"}},p={authorsImageUrls:[void 0]},u=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f",id:"\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f",level:3},{value:"\u5e26\u6709\u8fd4\u56de\u503c\u7684\u51fd\u6570",id:"\u5e26\u6709\u8fd4\u56de\u503c\u7684\u51fd\u6570",level:3}],s={toc:u},m="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u51fd\u6570\u5728 Rust \u4ee3\u7801\u4e2d\u5f88\u666e\u904d\u3002\u4f60\u5df2\u7ecf\u89c1\u8fc7\u8bed\u8a00\u4e2d\u6700\u91cd\u8981\u7684\u51fd\u6570\u4e4b\u4e00\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\uff0c\u5b83\u662f\u5f88\u591a\u7a0b\u5e8f\u7684\u5165\u53e3\u70b9\u3002\u4f60\u4e5f\u89c1\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," \u5173\u952e\u5b57\uff0c\u5b83\u7528\u6765\u58f0\u660e\u65b0\u51fd\u6570\u3002"),(0,a.kt)("p",null,"Rust \u4ee3\u7801\u4e2d\u7684\u51fd\u6570\u548c\u53d8\u91cf\u540d\u4f7f\u7528\u4e0b\u5212\u7ebf\u547d\u540d\u6cd5\uff08snake case\uff0c\u76f4\u8bd1\u4e3a\u86c7\u5f62\u547d\u540d\u6cd5\uff09\u89c4\u8303\u98ce\u683c\u3002\u5728\u4e0b\u5212\u7ebf\u547d\u540d\u6cd5\u4e2d\uff0c\u6240\u6709\u5b57\u6bcd\u90fd\u662f\u5c0f\u5199\u5e76\u4f7f\u7528\u4e0b\u5212\u7ebf\u5206\u9694\u5355\u8bcd\u3002\u8fd9\u662f\u4e00\u4e2a\u5305\u542b\u51fd\u6570\u5b9a\u4e49\u793a\u4f8b\u7684\u7a0b\u5e8f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    println!("Hello, world!");\n\n    another_function();\n}\n\nfn another_function() {\n    println!("Another function.");\n}\n')),(0,a.kt)("p",null,"Rust \u4e2d\u7684\u51fd\u6570\u5b9a\u4e49\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," \u5f00\u59cb\uff0c\u540e\u8ddf\u7740\u51fd\u6570\u540d\u548c\u4e00\u5bf9\u5706\u62ec\u53f7\u3002\u5927\u62ec\u53f7\u544a\u8bc9\u7f16\u8bd1\u5668\u51fd\u6570\u4f53\u5728\u54ea\u91cc\u5f00\u59cb\u548c\u7ed3\u675f\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u51fd\u6570\u540d\u540e\u8ddf\u5706\u62ec\u53f7\u6765\u8c03\u7528\u6211\u4eec\u5b9a\u4e49\u8fc7\u7684\u4efb\u610f\u51fd\u6570\u3002\u56e0\u4e3a\u7a0b\u5e8f\u4e2d\u5df2\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"another_function")," \u51fd\u6570\uff0c\u6240\u4ee5\u53ef\u4ee5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\u4e2d\u8c03\u7528\u5b83\u3002\u6ce8\u610f\uff0c\u6e90\u7801\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"another_function")," \u5b9a\u4e49\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570",(0,a.kt)("strong",{parentName:"p"},"\u4e4b\u540e"),"\uff1b\u4e5f\u53ef\u4ee5\u5b9a\u4e49\u5728\u4e4b\u524d\u3002",(0,a.kt)("strong",{parentName:"p"},"Rust \u4e0d\u5173\u5fc3\u51fd\u6570\u5b9a\u4e49\u4e8e\u4f55\u5904\uff0c\u53ea\u8981\u5b9a\u4e49\u4e86\u5c31\u884c\u3002")),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,"\u51fd\u6570\u4e5f\u53ef\u4ee5\u88ab\u5b9a\u4e49\u4e3a\u62e5\u6709\u53c2\u6570\uff08parameter\uff09\uff0c\u53c2\u6570\u662f\u7279\u6b8a\u53d8\u91cf\uff0c\u662f\u51fd\u6570\u7b7e\u540d\u7684\u4e00\u90e8\u5206\u3002\u5f53\u51fd\u6570\u62e5\u6709\u53c2\u6570\uff08\u5f62\u53c2\uff09\u65f6\uff0c\u53ef\u4ee5\u4e3a\u8fd9\u4e9b\u53c2\u6570\u63d0\u4f9b\u5177\u4f53\u7684\u503c\uff08\u5b9e\u53c2\uff09\u3002\u6280\u672f\u4e0a\u8bb2\uff0c\u8fd9\u4e9b\u5177\u4f53\u503c\u88ab\u79f0\u4e3a\u5b9e\u53c2\uff08argument\uff09\uff0c\u4f46\u662f\u5728\u65e5\u5e38\u4ea4\u6d41\u4e2d\uff0c\u4eba\u4eec\u503e\u5411\u4e8e\u4e0d\u533a\u5206\u4f7f\u7528 parameter \u548c argument \u6765\u8868\u793a\u51fd\u6570\u5b9a\u4e49\u4e2d\u7684\u53d8\u91cf\u6216\u8c03\u7528\u51fd\u6570\u65f6\u4f20\u5165\u7684\u5177\u4f53\u503c\u3002\u5f53\u4e00\u4e2a\u51fd\u6570\u6709\u591a\u4e2a\u53c2\u6570\u65f6\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694\u3002\u6211\u4eec\u6765\u770b\u4e00\u4e0b\u4e0b\u9762\u7684\u793a\u4f8b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    println!("Hello, world!");\n\n    another_function(3, 4);\n}\n\nfn another_function(x: i32, y: i32) {\n    println!("The sum of x and y is: {}", x + y);\n}\n')),(0,a.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Hello, world!\nThe sum of a and b is: 7\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"another_function")," \u51fd\u6570\u4e2d\u58f0\u660e\u4e86\u4e24\u4e2a\u53c2\u6570\uff0c\u5206\u522b\u547d\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),"\uff0c\u5e76\u6307\u5b9a\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"i32"),"\u3002\u5f53\u6211\u4eec\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," \u4f20\u7ed9 ",(0,a.kt)("inlineCode",{parentName:"p"},"another_function")," \u51fd\u6570\u65f6\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"println!")," \u5b8f\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," \u76f8\u52a0\u7684\u548c\u653e\u5165\u683c\u5f0f\u5316\u5b57\u7b26\u4e32\u4e2d\u5927\u62ec\u53f7\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,"\u5728\u51fd\u6570\u7b7e\u540d\u4e2d\uff0c\u5fc5\u987b\u58f0\u660e\u6bcf\u4e2a\u53c2\u6570\u7684\u7c7b\u578b\u3002\u8fd9\u662f\u4e00\u4e2a\u5728 Rust \u8bbe\u8ba1\u4e2d\u7ecf\u8fc7\u614e\u91cd\u8003\u8651\u7684\u51b3\u5b9a\uff1a\u8981\u6c42\u5728\u51fd\u6570\u5b9a\u4e49\u4e2d\u63d0\u4f9b\u7c7b\u578b\u6807\u6ce8\uff0c\u610f\u5473\u7740\u7f16\u8bd1\u5668\u51e0\u4e4e\u4ece\u4e0d\u9700\u8981\u4f60\u5728\u4ee3\u7801\u7684\u5176\u4ed6\u5730\u65b9\u6ce8\u660e\u7c7b\u578b\u6765\u6307\u51fa\u4f60\u7684\u610f\u56fe\u3002"),(0,a.kt)("h3",{id:"\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f"},"\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f"),(0,a.kt)("p",null,"\u51fd\u6570\u4f53\u7531\u4e00\u7cfb\u5217\u8bed\u53e5\u7ec4\u6210\uff0c\u4e5f\u53ef\u9009\u62e9\u4ee5\u8868\u8fbe\u5f0f\u7ed3\u5c3e\u3002\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u4ecb\u7ecd\u7684\u51fd\u6570\u8fd8\u6ca1\u6709\u5305\u542b\u7ed3\u5c3e\u8868\u8fbe\u5f0f\uff0c\u4e0d\u8fc7\u4f60\u5df2\u7ecf\u770b\u5230\u4e86\u8868\u8fbe\u5f0f\u4f5c\u4e3a\u8bed\u53e5\u7684\u4e00\u90e8\u5206\u3002\u56e0\u4e3a Rust \u662f\u4e00\u95e8\u57fa\u4e8e\u8868\u8fbe\u5f0f\uff08expression-based\uff09\u7684\u8bed\u8a00\uff0c\u6240\u4ee5\u8fd9\u662f\u4e00\u4e2a\u9700\u8981\u7406\u89e3\u7684\u91cd\u8981\u533a\u522b\u3002\u5176\u4ed6\u8bed\u8a00\u6ca1\u6709\u8fd9\u6837\u7684\u533a\u522b\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u770b\u770b\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f\u5206\u522b\u662f\u4ec0\u4e48\uff0c\u4ee5\u53ca\u5b83\u4eec\u7684\u533a\u522b\u5982\u4f55\u5f71\u54cd\u51fd\u6570\u4f53\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u53e5"),"\uff08statement\uff09\u662f\u6267\u884c\u4e00\u4e9b\u64cd\u4f5c\u4f46\u4e0d\u8fd4\u56de\u503c\u7684\u6307\u4ee4\u3002\u8868\u8fbe\u5f0f\uff08expression\uff09\u8ba1\u7b97\u5e76\u4ea7\u751f\u4e00\u4e2a\u503c\u3002\u8ba9\u6211\u4eec\u770b\u4e00\u4e9b\u4f8b\u5b50\uff1a"),(0,a.kt)("p",null,"\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u5df2\u7ecf\u4f7f\u7528\u8fc7\u8bed\u53e5\u548c\u8868\u8fbe\u5f0f\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," \u5173\u952e\u5b57\u521b\u5efa\u53d8\u91cf\u5e76\u7ed1\u5b9a\u4e00\u4e2a\u503c\u662f\u4e00\u4e2a\u8bed\u53e5\u3002\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"let y = 6;")," \u662f\u4e00\u4e2a\u8bed\u53e5\u3002"),(0,a.kt)("p",null,"\u51fd\u6570\u5b9a\u4e49\u4e5f\u662f\u8bed\u53e5\uff0c\u4e0a\u9762\u6574\u4e2a\u4f8b\u5b50\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u8bed\u53e5\u3002"),(0,a.kt)("p",null,"\u8bed\u53e5\u4e0d\u8fd4\u56de\u503c\u3002\u56e0\u6b64\uff0c\u4e0d\u80fd\u628a ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," \u8bed\u53e5\u8d4b\u503c\u7ed9\u53e6\u4e00\u4e2a\u53d8\u91cf\uff0c\u5c31\u50cf\u4e0b\u9762\u7684\u4ee3\u7801\u5c1d\u8bd5\u505a\u7684\u90a3\u6837\uff0c\u4f1a\u4ea7\u751f\u4e00\u4e2a\u9519\u8bef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"fn main() {\n    let x = (let y = 6);\n}\n")),(0,a.kt)("p",null,"\u5f53\u8fd0\u884c\u8fd9\u4e2a\u7a0b\u5e8f\u65f6\uff0c\u4f1a\u5f97\u5230\u5982\u4e0b\u9519\u8bef\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'   Compiling function-demo v0.1.0 (E:\\github\\rust-projects\\function-demo)\nerror: expected expression, found `let` statement\n --\x3e src\\main.rs:2:14\n  |\n2 |     let x = (let y = 6);\n  |              ^^^\n\nerror: expected expression, found statement (`let`)\n --\x3e src\\main.rs:2:14\n  |\n2 |     let x = (let y = 6);\n  |              ^^^^^^^^^\n  |\n  = note: variable declaration using `let` is a statement\n\nerror[E0658]: `let` expressions in this position are unstable\n --\x3e src\\main.rs:2:14\n  |\n2 |     let x = (let y = 6);\n  |              ^^^^^^^^^\n  |\n  = note: see issue #53667 <https://github.com/rust-lang/rust/issues/53667> for more information\n\nwarning: unnecessary parentheses around assigned value\n --\x3e src\\main.rs:2:13\n  |\n2 |     let x = (let y = 6);\n  |             ^         ^\n  |\n  = note: `#[warn(unused_parens)]` on by default\nhelp: remove these parentheses\n  |\n2 -     let x = (let y = 6);\n2 +     let x = let y = 6;\n  |\n\nFor more information about this error, try `rustc --explain E0658`.\nwarning: `function-demo` (bin "function-demo") generated 1 warning\nerror: could not compile `function-demo` (bin "function-demo") due to 3 previous errors; 1 warning emitted\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"let y = 6")," \u8bed\u53e5\u5e76\u4e0d\u8fd4\u56de\u503c\uff0c\u6240\u4ee5\u6ca1\u6709\u53ef\u4ee5\u7ed1\u5b9a\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," \u4e0a\u7684\u503c\u3002\u8fd9\u4e0e\u5176\u4ed6\u8bed\u8a00\u4e0d\u540c\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"C")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Ruby"),"\uff0c\u5b83\u4eec\u7684\u8d4b\u503c\u8bed\u53e5\u4f1a\u8fd4\u56de\u6240\u8d4b\u7684\u503c\u3002\u5728\u8fd9\u4e9b\u8bed\u8a00\u4e2d\uff0c\u53ef\u4ee5\u8fd9\u4e48\u5199 ",(0,a.kt)("inlineCode",{parentName:"p"},"x = y = 6"),"\uff0c\u8fd9\u6837 ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," \u7684\u503c\u90fd\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"6"),"\uff1b",(0,a.kt)("strong",{parentName:"p"},"Rust \u4e2d\u4e0d\u80fd\u8fd9\u6837\u5199"),"\u3002"),(0,a.kt)("p",null,"\u8868\u8fbe\u5f0f\u4f1a\u8ba1\u7b97\u51fa\u4e00\u4e2a\u503c\uff0c\u5e76\u4e14\u4f60\u63a5\u4e0b\u6765\u8981\u7528 Rust \u7f16\u5199\u7684\u5927\u90e8\u5206\u4ee3\u7801\u90fd\u7531\u8868\u8fbe\u5f0f\u7ec4\u6210\u3002\u8003\u8651\u4e00\u4e2a\u6570\u5b66\u8fd0\u7b97\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"5 + 6"),"\uff0c\u8fd9\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\u5e76\u8ba1\u7b97\u51fa\u503c ",(0,a.kt)("inlineCode",{parentName:"p"},"11"),"\u3002\u51fd\u6570\u8c03\u7528\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\u3002\u5b8f\u8c03\u7528\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\u3002\u6211\u4eec\u7528\u6765\u521b\u5efa\u65b0\u4f5c\u7528\u57df\u7684\u5927\u62ec\u53f7\uff08\u4ee3\u7801\u5757\uff09 {} \u4e5f\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let y = {\n        let x = 3;\n        x + 1\n    };\n\n    println!("The value of y is: {}", y);\n}\n')),(0,a.kt)("p",null,"\u8f93\u51fa:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"The value of y is: 4\n")),(0,a.kt)("p",null,"\u662f\u4e00\u4e2a\u4ee3\u7801\u5757\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u8ba1\u7b97\u7ed3\u679c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"4"),"\u3002\u8fd9\u4e2a\u503c\u4f5c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," \u8bed\u53e5\u7684\u4e00\u90e8\u5206\u88ab\u7ed1\u5b9a\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"y")," \u4e0a\u3002\u6ce8\u610f\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"x + 1")," ",(0,a.kt)("strong",{parentName:"p"},"\u884c\u7684\u672b\u5c3e\u6ca1\u6709\u5206\u53f7"),"\uff0c\u8fd9\u4e0e\u4f60\u76ee\u524d\u89c1\u8fc7\u7684\u5927\u90e8\u5206\u4ee3\u7801\u884c\u4e0d\u540c\u3002",(0,a.kt)("strong",{parentName:"p"},"\u8868\u8fbe\u5f0f\u7684\u7ed3\u5c3e\u6ca1\u6709\u5206\u53f7\u3002\u5982\u679c\u5728\u8868\u8fbe\u5f0f\u7684\u672b\u5c3e\u52a0\u4e0a\u5206\u53f7\uff0c\u90a3\u4e48\u5b83\u5c31\u8f6c\u6362\u4e3a\u8bed\u53e5\uff0c\u800c\u8bed\u53e5\u4e0d\u4f1a\u8fd4\u56de\u503c\u3002"),"\u5728\u63a5\u4e0b\u6765\u63a2\u8ba8\u51fd\u6570\u8fd4\u56de\u503c\u548c\u8868\u8fbe\u5f0f\u65f6\uff0c\u8bf7\u8bb0\u4f4f\u8fd9\u4e00\u70b9\u3002"),(0,a.kt)("h3",{id:"\u5e26\u6709\u8fd4\u56de\u503c\u7684\u51fd\u6570"},"\u5e26\u6709\u8fd4\u56de\u503c\u7684\u51fd\u6570"),(0,a.kt)("p",null,"\u51fd\u6570\u53ef\u4ee5\u5411\u8c03\u7528\u5b83\u7684\u4ee3\u7801\u8fd4\u56de\u503c\u3002\u6211\u4eec\u5e76\u4e0d\u5bf9\u8fd4\u56de\u503c\u547d\u540d\uff0c\u4f46\u8981\u5728\u7bad\u5934\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"->"),"\uff09\u540e\u58f0\u660e\u5b83\u7684\u7c7b\u578b\u3002\u5728 Rust \u4e2d\uff0c\u51fd\u6570\u7684\u8fd4\u56de\u503c\u7b49\u540c\u4e8e\u51fd\u6570\u4f53\u6700\u540e\u4e00\u4e2a\u8868\u8fbe\u5f0f\u7684\u503c\u3002\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," \u5173\u952e\u5b57\u548c\u6307\u5b9a\u503c\uff0c\u53ef\u4ee5\u4ece\u51fd\u6570\u4e2d\u63d0\u524d\u8fd4\u56de\uff1b\u4f46\u5927\u90e8\u5206\u51fd\u6570\u9690\u5f0f\u8fd4\u56de\u6700\u540e\u4e00\u4e2a\u8868\u8fbe\u5f0f\u3002\u8fd9\u662f\u4e00\u4e2a\u6709\u8fd4\u56de\u503c\u51fd\u6570\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn five() -> i32 {\n    5\n}\n\nfn main() {\n    let y = five();\n    println!("The value of y is: {}", y);\n}\n')),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"five")," \u51fd\u6570\u4e2d\u6ca1\u6709\u51fd\u6570\u8c03\u7528\u3001\u5b8f\uff0c\u751a\u81f3\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," \u8bed\u53e5\u2014\u2014\u53ea\u6709\u6570\u5b57 ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," \u672c\u8eab\u3002\u8fd9\u5728 Rust \u4e2d\u662f\u4e00\u4e2a\u5b8c\u5168\u6709\u6548\u7684\u51fd\u6570\u3002\u6ce8\u610f\uff0c\u51fd\u6570\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u4e5f\u88ab\u6307\u5b9a\u597d\uff0c\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"-> i32"),"\u3002\u5c1d\u8bd5\u8fd0\u884c\u4ee3\u7801\uff1b\u8f93\u51fa\u5e94\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"PS E:\\github\\rust-projects\\function-demo> cargo run\n   Compiling function-demo v0.1.0 (E:\\github\\rust-projects\\function-demo)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.44s\n     Running `target\\debug\\function-demo.exe`\nThe value of y is: 5\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"five")," \u51fd\u6570\u7684\u8fd4\u56de\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"\uff0c\u6240\u4ee5\u8fd4\u56de\u503c\u7c7b\u578b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"i32"),"\u3002\u8ba9\u6211\u4eec\u4ed4\u7ec6\u68c0\u67e5\u4e00\u4e0b\u8fd9\u6bb5\u4ee3\u7801\u3002\u6709\u4e24\u4e2a\u91cd\u8981\u7684\u90e8\u5206\uff1a\u9996\u5148\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"let x = five();")," \u8fd9\u4e00\u884c\u8868\u660e\u6211\u4eec\u4f7f\u7528\u51fd\u6570\u7684\u8fd4\u56de\u503c\u521d\u59cb\u5316\u4e00\u4e2a\u53d8\u91cf\u3002\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"five")," \u51fd\u6570\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"5"),"\uff0c\u8fd9\u4e00\u884c\u4e0e\u5982\u4e0b\u4ee3\u7801\u76f8\u540c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let y = 5;\n")),(0,a.kt)("p",null,"\u5176\u6b21\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"five")," \u51fd\u6570\u6ca1\u6709\u53c2\u6570\u5e76\u5b9a\u4e49\u4e86\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u4e0d\u8fc7\u51fd\u6570\u4f53\u53ea\u6709\u5355\u5355\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," \u4e5f\u6ca1\u6709\u5206\u53f7\uff0c\u56e0\u4e3a\u8fd9\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u6b63\u662f\u6211\u4eec\u60f3\u8981\u8fd4\u56de\u7684\u503c\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u770b\u770b\u53e6\u4e00\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let y = plus_one(5);\n    println!("The value of y is: {}", y);\n}\n\nfn plus_one(x: i32) -> i32 {\n    x + 1\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee3\u7801\u4f1a\u6253\u5370\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"The value of x is: 6"),"\u3002\u4f46\u5982\u679c\u5728\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"x + 1")," \u7684\u884c\u5c3e\u52a0\u4e0a\u4e00\u4e2a\u5206\u53f7\uff0c\u628a\u5b83\u4ece\u8868\u8fbe\u5f0f\u53d8\u6210\u8bed\u53e5\uff0c\u6211\u4eec\u5c06\u5f97\u5230\u4e00\u4e2a\u9519\u8bef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let y = plus_one(5);\n    println!("The value of y is: {}", y);\n}\n\nfn plus_one(x: i32) -> i32 {\n    x + 1;\n}\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee3\u7801\u4f1a\u4ea7\u751f\u4e00\u4e2a\u9519\u8bef\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'PS E:\\github\\rust-projects\\function-demo> cargo run\n   Compiling function-demo v0.1.0 (E:\\github\\rust-projects\\function-demo)\nerror[E0308]: mismatched types\n --\x3e src\\main.rs:6:24\n  |\n6 | fn plus_one(x: i32) -> i32 {\n  |    --------            ^^^ expected `i32`, found `()`\n  |    |\n  |    implicitly returns `()` as its body has no tail or `return` expression\n7 |     x + 1;\n  |          - help: remove this semicolon to return this value\n\nFor more information about this error, try `rustc --explain E0308`.\nerror: could not compile `function-demo` (bin "function-demo") due to previous error\n')),(0,a.kt)("p",null,"\u4e3b\u8981\u7684\u9519\u8bef\u4fe1\u606f \u201cmismatched types\u201d\uff08\u7c7b\u578b\u4e0d\u5339\u914d\uff09\u63ed\u793a\u4e86\u8fd9\u6bb5\u4ee3\u7801\u7684\u6838\u5fc3\u95ee\u9898\u3002\u51fd\u6570 ",(0,a.kt)("inlineCode",{parentName:"p"},"plus_one")," \u7684\u5b9a\u4e49\u8bf4\u660e\u5b83\u8981\u8fd4\u56de\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"i32")," \u7c7b\u578b\u7684\u503c\uff0c\u4e0d\u8fc7\u8bed\u53e5\u5e76\u4e0d\u4f1a\u8fd4\u56de\u503c\uff0c\u6b64\u503c\u7531\u5355\u5143\u7c7b\u578b () \u8868\u793a\uff0c\u8868\u793a\u4e0d\u8fd4\u56de\u503c\u3002\u56e0\u4e3a\u4e0d\u8fd4\u56de\u503c\u4e0e\u51fd\u6570\u5b9a\u4e49\u76f8\u77db\u76fe\uff0c\u4ece\u800c\u51fa\u73b0\u4e00\u4e2a\u9519\u8bef\u3002\u5728\u8f93\u51fa\u4e2d\uff0cRust \u63d0\u4f9b\u4e86\u4e00\u6761\u4fe1\u606f\uff0c\u53ef\u80fd\u6709\u52a9\u4e8e\u7ea0\u6b63\u8fd9\u4e2a\u9519\u8bef\uff1a\u5b83\u5efa\u8bae\u5220\u9664\u5206\u53f7\uff0c\u8fd9\u5c06\u4fee\u590d\u9519\u8bef\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"plus_one")," \u51fd\u6570\u4e2d\u589e\u52a0\u8fd4\u56de\u8bed\u53e5\u7684\u8bdd\u4e5f\u80fd\u4fee\u590d\u4e0a\u8ff0\u9519\u8bef\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," \u8bed\u53e5\u663e\u793a\u5730\u8fd4\u56de\uff0c\u4fee\u6539\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let y = plus_one(5);\n    println!("The value of y is: {}", y);\n}\n\nfn plus_one(x: i32) -> i32 {\n    let result = x + 1;\n    return result;\n}\n')),(0,a.kt)("p",null,"\u7ecf\u8fc7\u4e0a\u8ff0\u4fee\u6539\u540e\u4e5f\u80fd\u6b63\u5e38\u8fd4\u56de\u8ba1\u7b97\u7684\u7ed3\u679c\u3002"))}c.isMDXComponent=!0}}]);