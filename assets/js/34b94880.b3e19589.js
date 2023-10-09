"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),u=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=u(e.components);return i.createElement(o.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(t),k=r,c=s["".concat(o,".").concat(k)]||s[k]||d[k]||a;return t?i.createElement(c,l(l({ref:n},m),{},{components:t})):i.createElement(c,l({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var u=2;u<a;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const a={title:"Rust \u901a\u7528\u7f16\u7a0b\u6982\u5ff5 - \u63a7\u5236\u6d41",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png"},description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",tags:["rust","\u63a7\u5236\u6d41","\u901a\u7528\u7f16\u7a0b\u6982\u5ff5"],date:new Date("2023-10-08T00:00:00.000Z")},l=void 0,p={permalink:"/my-website/blog/2023/10/08/control-flow",source:"@site/blog/2023-10-08-control-flow/index.md",title:"Rust \u901a\u7528\u7f16\u7a0b\u6982\u5ff5 - \u63a7\u5236\u6d41",description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",date:"2023-10-08T00:00:00.000Z",formattedDate:"2023\u5e7410\u67088\u65e5",tags:[{label:"rust",permalink:"/my-website/blog/tags/rust"},{label:"\u63a7\u5236\u6d41",permalink:"/my-website/blog/tags/\u63a7\u5236\u6d41"},{label:"\u901a\u7528\u7f16\u7a0b\u6982\u5ff5",permalink:"/my-website/blog/tags/\u901a\u7528\u7f16\u7a0b\u6982\u5ff5"}],readingTime:18.915,hasTruncateMarker:!0,authors:[{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png",imageURL:"https://github.com/hbche.png"}],frontMatter:{title:"Rust \u901a\u7528\u7f16\u7a0b\u6982\u5ff5 - \u63a7\u5236\u6d41",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png",imageURL:"https://github.com/hbche.png"},description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",tags:["rust","\u63a7\u5236\u6d41","\u901a\u7528\u7f16\u7a0b\u6982\u5ff5"],date:"2023-10-08T00:00:00.000Z"},prevItem:{title:"Rust \u7ed3\u6784\u4f53",permalink:"/my-website/blog/2023/10/09/rust-structure"},nextItem:{title:"IEEE-754\u6807\u51c6",permalink:"/my-website/blog/2023/10/08/ieee-754"}},o={authorsImageUrls:[void 0]},u=[{value:"if \u8868\u8fbe\u5f0f",id:"if-\u8868\u8fbe\u5f0f",level:2},{value:"\u4f7f\u7528 else if \u5904\u7406\u591a\u91cd\u6761\u4ef6",id:"\u4f7f\u7528-else-if-\u5904\u7406\u591a\u91cd\u6761\u4ef6",level:3},{value:"\u5728 let \u8bed\u53e5\u4e2d\u4f7f\u7528 if",id:"\u5728-let-\u8bed\u53e5\u4e2d\u4f7f\u7528-if",level:3},{value:"\u4f7f\u7528\u5faa\u73af\u91cd\u590d\u6267\u884c",id:"\u4f7f\u7528\u5faa\u73af\u91cd\u590d\u6267\u884c",level:2},{value:"\u4f7f\u7528 loop \u91cd\u590d\u6267\u884c\u4ee3\u7801",id:"\u4f7f\u7528-loop-\u91cd\u590d\u6267\u884c\u4ee3\u7801",level:3},{value:"\u4ece\u5faa\u73af\u8fd4\u56de",id:"\u4ece\u5faa\u73af\u8fd4\u56de",level:3},{value:"while \u6761\u4ef6\u5faa\u73af",id:"while-\u6761\u4ef6\u5faa\u73af",level:3},{value:"\u4f7f\u7528 for \u904d\u5386\u96c6\u5408",id:"\u4f7f\u7528-for-\u904d\u5386\u96c6\u5408",level:3},{value:"\u7ec3\u4e60",id:"\u7ec3\u4e60",level:2}],m={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6839\u636e\u6761\u4ef6\u662f\u5426\u4e3a\u771f\u6765\u51b3\u5b9a\u662f\u5426\u6267\u884c\u67d0\u4e9b\u4ee3\u7801\uff0c\u6216\u6839\u636e\u6761\u4ef6\u662f\u5426\u4e3a\u771f\u6765\u91cd\u590d\u8fd0\u884c\u4e00\u6bb5\u4ee3\u7801\uff0c\u662f\u5927\u90e8\u5206\u7f16\u7a0b\u8bed\u8a00\u7684\u57fa\u672c\u7ec4\u6210\u90e8\u5206\u3002Rust \u4ee3\u7801\u4e2d\u6700\u5e38\u89c1\u7684\u7528\u6765\u63a7\u5236\u6267\u884c\u6d41\u7684\u7ed3\u6784\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u8868\u8fbe\u5f0f\u548c\u5faa\u73af\u3002"),(0,r.kt)("h2",{id:"if-\u8868\u8fbe\u5f0f"},"if \u8868\u8fbe\u5f0f"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u8868\u8fbe\u5f0f\u5141\u8bb8\u6839\u636e\u6761\u4ef6\u6267\u884c\u4e0d\u540c\u7684\u4ee3\u7801\u5206\u652f\u3002\u4f60\u63d0\u4f9b\u4e00\u4e2a\u6761\u4ef6\u5e76\u8868\u793a \u201c\u5982\u679c\u6761\u4ef6\u6ee1\u8db3\uff0c\u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\uff1b\u5982\u679c\u6761\u4ef6\u4e0d\u6ee1\u8db3\uff0c\u4e0d\u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u3002\u201d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::io;\n\nfn even_number(num: i32) -> bool {\n    num % 2 == 0\n}\n\nfn main() {\n    println!("Please input a number");\n\n    let mut number = String::new();\n    io::stdin()\n        .read_line(&mut number)\n        .expect("Failed to read line");\n\n    // number \u8f6c\u6362\u4e4b\u524d\u5fc5\u987b\u4f7f\u7528 trim \u51fd\u6570\u5bf9\u5176\u7ed3\u5c3e\u7684\u6362\u884c\u8f6c\u79fb\u8fdb\u884c\u5220\u9664,\u5426\u5219 parse \u51fd\u6570\u8c03\u7528\u5c06\u62a5\u5f02\u5e38\n    let number = number.trim().parse().expect("Failed to parse number");\n    let is_even = even_number(number);\n\n    if is_even {\n        println!("{} is even number.", number);\n    } else {\n        println!("{} is odd number.", number);\n    }\n}\n')),(0,r.kt)("p",null,"\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PS E:\\github\\rust-projects\\branches> cargo run\n   Compiling branches v0.1.0 (E:\\github\\rust-projects\\branches)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.45s\n     Running `target\\debug\\branches.exe`\nPlease input a number\n23\n23 is odd number.\n")),(0,r.kt)("p",null,"\u6240\u6709\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u8868\u8fbe\u5f0f\u90fd\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u5173\u952e\u5b57\u5f00\u5934\uff0c\u5176\u540e\u8ddf\u4e00\u4e2a\u6761\u4ef6\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u9996\u5148\u5b9a\u4e49\u4e86\u4e00\u4e2a\u51fd\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"even_number")," \u7528\u6765\u5224\u65ad\u4e00\u4e2a\u6570\u5b57\u662f\u5426\u662f\u5076\u6570\uff0c\u5e76\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," \u7c7b\u578b\u7684\u7ed3\u679c\uff1b\u63a5\u7740\u6211\u4eec\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\u4e2d\u8c03\u7528\u4e86\u8be5\u51fd\u6570\uff0c\u53c2\u6570\u662f\u7528\u6237\u4ece\u63a7\u5236\u53f0\u8f93\u5165\u7684\u6570\u5b57\uff1b\u63a5\u4e0b\u6765\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u8868\u8fbe\u5f0f\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"even_number")," \u51fd\u6570\u7684\u8fd4\u56de\u503c\u8fdb\u884c\u5224\u65ad\uff0c\u6700\u540e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"println")," \u5b8f\u6253\u5370\u76f8\u5e94\u7684\u7ed3\u679c\uff0c\u5e76\u7528\u8f93\u5165\u7684\u6570\u5b57\u56de\u586b\u5230\u6807\u51c6\u8f93\u5165\u5360\u4f4d\u7b26\u7684\u4f4d\u7f6e\u3002"),(0,r.kt)("p",null,"\u5728\u6761\u4ef6\u4e3a\u771f\u65f6\u5e0c\u671b\u6267\u884c\u7684\u4ee3\u7801\u5757\u4f4d\u4e8e\u7d27\u8ddf\u6761\u4ef6\u4e4b\u540e\u7684\u5927\u62ec\u53f7\u4e2d\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u8868\u8fbe\u5f0f\u4e2d\u4e0e\u6761\u4ef6\u5173\u8054\u7684\u4ee3\u7801\u5757\u6709\u65f6\u88ab\u53eb\u505a",(0,r.kt)("strong",{parentName:"p"},"\u5206\u652f"),"\uff08arm\uff09\uff0c\u4e5f\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a\u53ef\u9009\u7684 else \u8868\u8fbe\u5f0f\u6765\u63d0\u4f9b\u4e00\u4e2a\u5728\u6761\u4ef6\u4e3a\u5047\u65f6\u5e94\u5f53\u6267\u884c\u7684\u4ee3\u7801\u5757\uff0c\u8fd9\u91cc\u6211\u4eec\u5c31\u8fd9\u4e48\u505a\u4e86\u3002\u5982\u679c\u4e0d\u63d0\u4f9b else \u8868\u8fbe\u5f0f\u5e76\u4e14\u6761\u4ef6\u4e3a\u5047\u65f6\uff0c\u7a0b\u5e8f\u4f1a\u76f4\u63a5\u5ffd\u7565 if \u4ee3\u7801\u5757\u5e76\u7ee7\u7eed\u6267\u884c\u4e0b\u9762\u7684\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u5c1d\u8bd5\u8f93\u5165\u4e0d\u540c\u7684\u503c\uff0c\u6839\u636e\u6761\u4ef6\u5224\u65ad\u5c06\u4f1a\u6253\u5370\u4e0d\u540c\u7684\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\u53e6\u5916\u503c\u5f97\u6ce8\u610f\u7684\u662f\u4ee3\u7801\u4e2d\u7684\u6761\u4ef6\u5fc5\u987b\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," \u503c\u3002\u5982\u679c\u6761\u4ef6\u4e0d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," \u503c\uff0c\u6211\u4eec\u5c06\u5f97\u5230\u4e00\u4e2a\u9519\u8bef\u3002\u4f8b\u5982\uff0c\u5c1d\u8bd5\u8fd0\u884c\u4ee5\u4e0b\u4ee3\u7801\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let number = 3;\n    if number {\n        println!("number was three");\n    }\n}\n')),(0,r.kt)("p",null,"\u8fd9\u91cc ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u6761\u4ef6\u7684\u503c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),"\uff0cRust \u629b\u51fa\u4e86\u4e00\u4e2a\u9519\u8bef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'PS E:\\github\\rust-projects\\branches> cargo run\n   Compiling branches v0.1.0 (E:\\github\\rust-projects\\branches)\nerror[E0308]: mismatched types\n --\x3e src\\main.rs:3:8\n  |\n3 |     if number {\n  |        ^^^^^^ expected `bool`, found integer\n\nFor more information about this error, try `rustc --explain E0308`.\nerror: could not compile `branches` (bin "branches") due to previous error\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u9519\u8bef\u8868\u660e Rust \u671f\u671b\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"bool")," \u5374\u5f97\u5230\u4e86\u4e00\u4e2a\u6574\u6570\u3002\u4e0d\u50cf Ruby \u6216 JavaScript \u8fd9\u6837\u7684\u8bed\u8a00\uff0cRust \u5e76\u4e0d\u4f1a\u5c1d\u8bd5\u81ea\u52a8\u5730\u5c06\u975e\u5e03\u5c14\u503c\u8f6c\u6362\u4e3a\u5e03\u5c14\u503c\u3002\u4f60\u5fc5\u987b\u81ea\u59cb\u81f3\u7ec8\u663e\u5f0f\u5730\u4f7f\u7528\u5e03\u5c14\u503c\u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u7684\u6761\u4ef6\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60f3\u8981 ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u4ee3\u7801\u5757\u53ea\u5728\u4e00\u4e2a\u6570\u5b57\u4e0d\u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u65f6\u6267\u884c\uff0c\u53ef\u4ee5\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u8868\u8fbe\u5f0f\u4fee\u6539\u6210\u4e0b\u9762\u8fd9\u6837\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let number = 3;\n    if number != 0 {\n        println!("number was something other than zero");\n    }\n}\n')),(0,r.kt)("p",null,"\u8fd0\u884c\u4ee3\u7801\u4f1a\u6253\u5370\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"number was something other than zero"),"\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-else-if-\u5904\u7406\u591a\u91cd\u6761\u4ef6"},"\u4f7f\u7528 else if \u5904\u7406\u591a\u91cd\u6761\u4ef6"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," \u7ec4\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"else if")," \u8868\u8fbe\u5f0f\u6765\u5b9e\u73b0\u591a\u91cd\u6761\u4ef6\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::io;\n\nfn main() {\n    let mut number = String::new();\n\n    println!("Please input a number: ");\n\n    io::stdin().read_line(&mut number).expect("Input Failed.");\n\n    let number: i32 = number.trim().parse().expect("Input is not a number.");\n\n    if number % 3 == 0 {\n        println!("number is divisible by 3");\n    } else if number % 5 == 0 {\n        println!("number is divisible by 5");\n    } else if number % 7 == 0 {\n        println!("number is divisible by 7");\n    } else {\n        println!("number is not divisible by 3, 5, or 7");\n    }\n}\n')),(0,r.kt)("p",null,"\u8f93\u51fa:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PS E:\\github\\rust-projects\\branches> cargo run\n   Compiling branches v0.1.0 (E:\\github\\rust-projects\\branches)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.82s\n     Running `target\\debug\\branches.exe`\nPlease input a number:\n15\nnumber is divisible by 3\n")),(0,r.kt)("p",null,"\u5f53\u6267\u884c\u8fd9\u4e2a\u7a0b\u5e8f\u65f6\uff0c\u5b83\u6309\u987a\u5e8f\u68c0\u67e5\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u8868\u8fbe\u5f0f\u5e76\u6267\u884c\u7b2c\u4e00\u4e2a\u6761\u4ef6\u4e3a\u771f\u7684\u4ee3\u7801\u5757\u3002\u6ce8\u610f\u53ca\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"15")," \u53ef\u4ee5\u88ab ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," \u6574\u9664\uff0c\u4e5f\u4e0d\u4f1a\u8f93\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"number is divisible by 5"),"\uff0c\u66f4\u4e0d\u4f1a\u8f93\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"else "),"\u5757\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"number is not divisible by 3, 5, or 7"),"\u3002\u539f\u56e0\u662f Rust \u53ea\u4f1a\u6267\u884c\u7b2c\u4e00\u4e2a\u6761\u4ef6\u4e3a\u771f\u7684\u4ee3\u7801\u5757\uff0c\u5e76\u4e14\u4e00\u65e6\u5b83\u627e\u5230\u4e00\u4e2a\u4ee5\u540e\uff0c\u751a\u81f3\u90fd\u4e0d\u4f1a\u68c0\u67e5\u5269\u4e0b\u7684\u6761\u4ef6\u4e86\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u8fc7\u591a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"else if")," \u8868\u8fbe\u5f0f\u4f1a\u4f7f\u4ee3\u7801\u663e\u5f97\u6742\u4e71\u65e0\u7ae0\uff0c\u6240\u4ee5\u5982\u679c\u6709\u591a\u4e8e\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"else if")," \u8868\u8fbe\u5f0f\uff0c\u6700\u597d\u91cd\u6784\u4ee3\u7801\u3002\u4e3a\u5904\u7406\u8fd9\u4e9b\u60c5\u51b5\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," \u591a\u5206\u652f\u7ed3\u6784\u3002"),(0,r.kt)("h3",{id:"\u5728-let-\u8bed\u53e5\u4e2d\u4f7f\u7528-if"},"\u5728 let \u8bed\u53e5\u4e2d\u4f7f\u7528 if"),(0,r.kt)("p",null,"\u56e0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u662f\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u8868\u8fbe\u5f0f"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," \u8bed\u53e5\u7684\u53f3\u4fa7\u4f7f\u7528\u5b83\u6765\u5c06\u7ed3\u679c\u8d4b\u503c\u7ed9\u4e00\u4e2a\u53d8\u91cf\uff0c\u5982\u4e0b\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let condition = true;\n    let number = if condition { 5 } else { 6 };\n\n    println!("The value of number is: {}", number);\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")," \u53d8\u91cf\u5c06\u4f1a\u7ed1\u5b9a\u5230\u8868\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u8868\u8fbe\u5f0f\u7ed3\u679c\u7684\u503c\u4e0a\u3002\u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u770b\u770b\u4f1a\u51fa\u73b0\u4ec0\u4e48\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PS E:\\github\\rust-projects\\branches> cargo run\n   Compiling branches v0.1.0 (E:\\github\\rust-projects\\branches)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.21s\n     Running `target\\debug\\branches.exe`\nThe value of number is: 5\n")),(0,r.kt)("p",null,"\u8bb0\u4f4f\uff0c\u4ee3\u7801\u5757\u7684\u503c\u662f\u5176\u6700\u540e\u4e00\u4e2a\u8868\u8fbe\u5f0f\u7684\u503c\uff0c\u800c\u6570\u5b57\u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u6574\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u8868\u8fbe\u5f0f\u7684\u503c\u53d6\u51b3\u4e8e\u54ea\u4e2a\u4ee3\u7801\u5757\u88ab\u6267\u884c\u3002\u8fd9\u610f\u5473\u7740 ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u7684\u6bcf\u4e2a\u5206\u652f\u7684\u53ef\u80fd\u7684\u8fd4\u56de\u503c\u90fd\u5fc5\u987b\u662f\u76f8\u540c\u7c7b\u578b\uff1b\u5728\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u5206\u652f\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," \u5206\u652f\u7684\u7ed3\u679c\u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"i32")," \u6574\u578b\u3002\u5982\u679c\u5b83\u4eec\u7684\u7c7b\u578b\u4e0d\u5339\u914d\uff0c\u5982\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u5219\u4f1a\u4ea7\u751f\u4e00\u4e2a\u9519\u8bef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let condition = true;\n    let number = if condition { 5 } else { "six" };\n\n    println!("The value of number is: {}", number);\n}\n')),(0,r.kt)("p",null,"\u5f53\u7f16\u8bd1\u8fd9\u6bb5\u4ee3\u7801\u65f6\uff0c\u4f1a\u5f97\u5230\u4e00\u4e2a\u9519\u8bef\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," \u5206\u652f\u7684\u503c\u7c7b\u578b\u662f\u4e0d\u76f8\u5bb9\u7684\uff0c\u540c\u65f6 Rust \u4e5f\u51c6\u786e\u5730\u6307\u51fa\u5728\u7a0b\u5e8f\u4e2d\u7684\u4f55\u5904\u53d1\u73b0\u7684\u8fd9\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'PS E:\\github\\rust-projects\\branches> cargo run\n   Compiling branches v0.1.0 (E:\\github\\rust-projects\\branches)\nerror[E0308]: `if` and `else` have incompatible types\n --\x3e src\\main.rs:3:44\n  |\n3 |     let number = if condition { 5 } else { "six" };\n  |                                 -          ^^^^^ expected integer, found `&str`\n  |                                 |\n  |                                 expected because of this\n\nFor more information about this error, try `rustc --explain E0308`.\nerror: could not compile `branches` (bin "branches") due to previous error\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"if")," \u4ee3\u7801\u5757\u4e2d\u7684\u8868\u8fbe\u5f0f\u8fd4\u56de\u4e00\u4e2a\u6574\u6570\uff0c\u800c ",(0,r.kt)("inlineCode",{parentName:"p"},"else")," \u4ee3\u7801\u5757\u4e2d\u7684\u8868\u8fbe\u5f0f\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u8fd9\u4e0d\u53ef\u884c\uff0c\u56e0\u4e3a\u53d8\u91cf\u5fc5\u987b\u53ea\u6709\u4e00\u4e2a\u7c7b\u578b\u3002Rust \u9700\u8981\u5728\u7f16\u8bd1\u65f6\u5c31\u786e\u5207\u5730\u77e5\u9053 ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," \u53d8\u91cf\u7684\u7c7b\u578b\uff0c\u8fd9\u6837\u5b83\u5c31\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\u9a8c\u8bc1\u5728\u6bcf\u5904\u4f7f\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," \u53d8\u91cf\u7684\u7c7b\u578b\u662f\u6709\u6548\u7684\u3002\u82e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," \u7684\u7c7b\u578b\u4ec5\u5728\u8fd0\u884c\u65f6\u786e\u5b9a\uff0c\u5219 Rust \u5c06\u65e0\u6cd5\u505a\u5230\u8fd9\u4e00\u70b9\uff1b\u800c\u4e14\u82e5\u7f16\u8bd1\u5668\u5fc5\u987b\u8ddf\u8e2a\u4efb\u610f\u53d8\u91cf\u7684\u591a\u79cd\u5047\u8bbe\u7c7b\u578b\uff0c\u5219\u7f16\u8bd1\u5668\u4f1a\u53d8\u5f97\u66f4\u590d\u6742\uff0c\u5e76\u4e14\u5bf9\u4ee3\u7801\u7684\u4fdd\u8bc1\u4e5f\u4f1a\u51cf\u5c11\u3002"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5faa\u73af\u91cd\u590d\u6267\u884c"},"\u4f7f\u7528\u5faa\u73af\u91cd\u590d\u6267\u884c"),(0,r.kt)("p",null,"\u591a\u6b21\u6267\u884c\u540c\u4e00\u6bb5\u4ee3\u7801\u662f\u5f88\u5e38\u7528\u7684\uff0cRust \u4e3a\u6b64\u63d0\u4f9b\u4e86\u591a\u79cd",(0,r.kt)("strong",{parentName:"p"},"\u5faa\u73af"),"\uff08loop\uff09\uff0c\u5b83\u4eec\u904d\u5386\u6267\u884c\u5faa\u73af\u4f53\u4e2d\u7684\u4ee3\u7801\u76f4\u5230\u7ed3\u5c3e\u5e76\u7d27\u63a5\u7740\u56de\u5230\u5f00\u5934\u7ee7\u7eed\u6267\u884c\u3002\u4e3a\u4e86\u8bd5\u9a8c\u5faa\u73af\uff0c\u8ba9\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("em",{parentName:"p"},"loops")," \u7684\u9879\u76ee\u3002"),(0,r.kt)("p",null,"Rust \u6709\u4e09\u79cd\u5faa\u73af\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"loop"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"while")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"for"),"\u3002\u6211\u4eec\u6bcf\u4e00\u4e2a\u90fd\u8bd5\u8bd5\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-loop-\u91cd\u590d\u6267\u884c\u4ee3\u7801"},"\u4f7f\u7528 loop \u91cd\u590d\u6267\u884c\u4ee3\u7801"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loop")," \u5173\u952e\u5b57\u544a\u8bc9 Rust \u4e00\u904d\u53c8\u4e00\u904d\u5730\u6267\u884c\u4e00\u6bb5\u4ee3\u7801\u76f4\u5230\u4f60\u660e\u786e\u8981\u6c42\u505c\u6b62\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    loop {\n        println!("again!");\n    }\n}\n')),(0,r.kt)("p",null,"\u5f53\u8fd0\u884c\u8fd9\u4e2a\u7a0b\u5e8f\u65f6\uff0c\u6211\u4eec\u4f1a\u770b\u5230\u8fde\u7eed\u7684\u53cd\u590d\u6253\u5370 ",(0,r.kt)("inlineCode",{parentName:"p"},"again!"),"\uff0c\u76f4\u5230\u6211\u4eec\u624b\u52a8\u505c\u6b62\u7a0b\u5e8f\u3002\u5927\u90e8\u5206\u7ec8\u7aef\u90fd\u652f\u6301\u4e00\u4e2a\u5feb\u6377\u952e ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl-c")," \u6765\u7ec8\u6b62\u4e00\u4e2a\u9677\u5165\u65e0\u9650\u5faa\u73af\u7684\u7a0b\u5e8f\u3002\u5c1d\u8bd5\u4e00\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PS E:\\github\\rust-projects\\loops> cargo run\n    Finished dev [unoptimized + debuginfo] target(s) in 0.01s\n     Running `target\\debug\\loops.exe`\nagain!\nagain!\nagain!\n^Cagain!\n")),(0,r.kt)("p",null,"\u7b26\u53f7 ",(0,r.kt)("inlineCode",{parentName:"p"},"^C")," \u4ee3\u8868\u4f60\u5728\u8fd9\u6309\u4e0b\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl-c"),"\u3002\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"^C")," \u4e4b\u540e\u4f60\u53ef\u80fd\u770b\u5230\u4e5f\u53ef\u80fd\u770b\u4e0d\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"again!")," \uff0c\u8fd9\u53d6\u51b3\u4e8e\u5728\u63a5\u6536\u5230\u7ec8\u6b62\u4fe1\u53f7\u65f6\u4ee3\u7801\u6267\u884c\u5230\u4e86\u5faa\u73af\u7684\u4f55\u5904\u3002"),(0,r.kt)("p",null,"\u5e78\u8fd0\u7684\u662f\uff0cRust \u4e5f\u63d0\u4f9b\u4e86\u4e00\u79cd\u4ece\u4ee3\u7801\u4e2d\u8df3\u51fa\u5faa\u73af\u7684\u65b9\u6cd5\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u5173\u952e\u5b57\u6765\u544a\u8bc9\u7a0b\u5e8f\u4f55\u65f6\u505c\u6b62\u5faa\u73af\u3002"),(0,r.kt)("p",null,"\u5faa\u73af\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," \u5173\u952e\u5b57\u544a\u8bc9\u7a0b\u5e8f\u8df3\u8fc7\u8fd9\u4e2a\u5faa\u73af\u8fed\u4ee3\u4e2d\u7684\u4efb\u4f55\u5269\u4f59\u4ee3\u7801\uff0c\u5e76\u8f6c\u5230\u4e0b\u4e00\u4e2a\u8fed\u4ee3\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5b58\u5728\u5d4c\u5957\u5faa\u73af\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," \u5e94\u7528\u4e8e\u6b64\u65f6\u6700\u5185\u5c42\u7684\u5faa\u73af\u3002\u4f60\u53ef\u4ee5\u9009\u62e9\u5728\u4e00\u4e2a\u5faa\u73af\u4e0a\u6307\u5b9a\u4e00\u4e2a",(0,r.kt)("strong",{parentName:"p"},"\u5faa\u73af\u6807\u7b7e"),"\uff08loop label\uff09\uff0c\u7136\u540e\u5c06\u6807\u7b7e\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"continue")," \u4e00\u8d77\u4f7f\u7528\uff0c\u4f7f\u8fd9\u4e9b\u5173\u952e\u5b57\u5e94\u7528\u4e8e\u5df2\u6807\u8bb0\u7684\u5faa\u73af\u800c\u4e0d\u662f\u6700\u5185\u5c42\u7684\u5faa\u73af\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u5d4c\u5957\u5faa\u73af\u7684\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut count = 0;\n    \'counting_up: loop {\n        println!("count = {}", count);\n        let mut remaining = 10;\n\n        loop {\n            println!("remaining = {}", remaining);\n\n            if remaining == 9 {\n                break;\n            }\n\n            if count == 2 {\n                break \'counting_up;\n            }\n            remaining -= 1;\n        }\n\n        count += 1;\n    }\n    println!("End count = {}", count);\n}\n')),(0,r.kt)("p",null,"\u5916\u5c42\u5faa\u73af\u6709\u4e00\u4e2a\u6807\u7b7e ",(0,r.kt)("inlineCode",{parentName:"p"},"counting_up"),"\uff0c\u5b83\u5c06\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," \u6570\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"\u3002\u6ca1\u6709\u6807\u7b7e\u7684\u5185\u90e8\u5faa\u73af\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," \u5411\u4e0b\u6570\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"9"),"\u3002\u7b2c\u4e00\u4e2a\u6ca1\u6709\u6307\u5b9a\u6807\u7b7e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u5c06\u53ea\u9000\u51fa\u5185\u5c42\u5faa\u73af\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"break 'counting_up;")," \u8bed\u53e5\u5c06\u9000\u51fa\u5916\u5c42\u5faa\u73af\u3002\u8fd9\u4e2a\u4ee3\u7801\u6253\u5370:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PS E:\\github\\rust-projects\\loops> cargo run\n   Compiling loops v0.1.0 (E:\\github\\rust-projects\\loops)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.47s\n     Running `target\\debug\\loops.exe`\ncount = 0\nremaining = 10\nremaining = 9\ncount = 1\nremaining = 10\nremaining = 9\ncount = 2\nremaining = 10\nEnd count = 2\n")),(0,r.kt)("h3",{id:"\u4ece\u5faa\u73af\u8fd4\u56de"},"\u4ece\u5faa\u73af\u8fd4\u56de"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loop")," \u7684\u4e00\u4e2a\u7528\u4f8b\u662f\u91cd\u8bd5\u53ef\u80fd\u4f1a\u5931\u8d25\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982\u68c0\u67e5\u7ebf\u7a0b\u662f\u5426\u5b8c\u6210\u4e86\u4efb\u52a1\u3002\u7136\u800c\u4f60\u53ef\u80fd\u4f1a\u9700\u8981\u5c06\u64cd\u4f5c\u7684\u7ed3\u679c\u4ece\u5faa\u73af\u4e2d\u4f20\u9012\u7ed9\u5176\u5b83\u7684\u4ee3\u7801\u3002\u4e3a\u6b64\uff0c\u4f60\u53ef\u4ee5\u5728\u7528\u4e8e\u505c\u6b62\u5faa\u73af\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u8868\u8fbe\u5f0f\u6dfb\u52a0\u4f60\u60f3\u8981\u8fd4\u56de\u7684\u503c\uff1b\u8be5\u503c\u5c06\u4ece\u5faa\u73af\u4e2d\u8fd4\u56de\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut counter = 0;\n    let result = loop {\n        counter += 1;\n\n        if counter == 10 {\n            break counter * 2;\n        }\n    };\n\n    println!("The result is {}", result);\n}\n')),(0,r.kt)("p",null,"\u5728\u5faa\u73af\u4e4b\u524d\uff0c\u6211\u4eec\u58f0\u660e\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," \u7684\u53d8\u91cf\u5e76\u521d\u59cb\u5316\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"\u3002\u63a5\u7740\u58f0\u660e\u4e86\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," \u6765\u5b58\u653e\u5faa\u73af\u7684\u8fd4\u56de\u503c\u3002\u5728\u5faa\u73af\u7684\u6bcf\u4e00\u6b21\u8fed\u4ee3\u4e2d\uff0c\u6211\u4eec\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"counter")," \u53d8\u91cf\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"\uff0c\u63a5\u7740\u68c0\u67e5\u8ba1\u6570\u662f\u5426\u7b49\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"10"),"\u3002\u5f53\u76f8\u7b49\u65f6\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u5173\u952e\u5b57\u8fd4\u56de\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"counter * 2"),"\u3002\u5faa\u73af\u4e4b\u540e\uff0c\u6211\u4eec\u901a\u8fc7\u5206\u53f7\u7ed3\u675f\u8d4b\u503c\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," \u7684\u8bed\u53e5\u3002\u6700\u540e\u6253\u5370\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," \u7684\u503c\uff0c\u4e5f\u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"20"),"\u3002"),(0,r.kt)("h3",{id:"while-\u6761\u4ef6\u5faa\u73af"},"while \u6761\u4ef6\u5faa\u73af"),(0,r.kt)("p",null,"\u5728\u7a0b\u5e8f\u4e2d\u8ba1\u7b97\u5faa\u73af\u7684\u6761\u4ef6\u4e5f\u5f88\u5e38\u89c1\u3002\u5f53\u6761\u4ef6\u4e3a\u771f\uff0c\u6267\u884c\u5faa\u73af\u3002\u5f53\u6761\u4ef6\u4e0d\u518d\u4e3a\u771f\uff0c\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u505c\u6b62\u5faa\u73af\u3002\u8fd9\u4e2a\u5faa\u73af\u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7\u7ec4\u5408 ",(0,r.kt)("inlineCode",{parentName:"p"},"loop"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"else")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u6765\u5b9e\u73b0\uff1b\u5982\u679c\u4f60\u559c\u6b22\u7684\u8bdd\uff0c\u73b0\u5728\u5c31\u53ef\u4ee5\u5728\u7a0b\u5e8f\u4e2d\u8bd5\u8bd5\u3002\u7136\u800c\uff0c\u8fd9\u4e2a\u6a21\u5f0f\u592a\u5e38\u7528\u4e86\uff0cRust \u4e3a\u6b64\u5185\u7f6e\u4e86\u4e00\u4e2a\u8bed\u8a00\u7ed3\u6784\uff0c\u5b83\u88ab\u79f0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," \u5faa\u73af\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut number = 3;\n    while number != 0 {\n        println!("{}", number);\n\n        number -= 1;\n    }\n\n    println!("LIFTOFF!!!");\n}\n')),(0,r.kt)("p",null,"\u8fd9\u79cd\u7ed3\u6784\u6d88\u9664\u4e86\u5f88\u591a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"loop"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"else")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u65f6\u6240\u5fc5\u987b\u7684\u5d4c\u5957\uff0c\u8fd9\u6837\u66f4\u52a0\u6e05\u6670\u3002\u5f53\u6761\u4ef6\u4e3a\u771f\u5c31\u6267\u884c\uff0c\u5426\u5219\u9000\u51fa\u5faa\u73af\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-for-\u904d\u5386\u96c6\u5408"},"\u4f7f\u7528 for \u904d\u5386\u96c6\u5408"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," \u7ed3\u6784\u6765\u904d\u5386\u96c6\u5408\u4e2d\u7684\u5143\u7d20\uff0c\u6bd4\u5982\u6570\u7ec4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let mut index = 0;\n    let a = [10, 20, 30, 40, 50];\n\n    while index < 5 {\n        println!("The value is: {}", a[index]);\n\n        index += 1;\n    }\n}\n')),(0,r.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u4ee3\u7801\u5bf9\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u8fdb\u884c\u8ba1\u6570\u3002\u5b83\u4ece\u7d22\u5f15 0 \u5f00\u59cb\uff0c\u5e76\u63a5\u7740\u5faa\u73af\u76f4\u5230\u9047\u5230\u6570\u7ec4\u7684\u6700\u540e\u4e00\u4e2a\u7d22\u5f15\uff08\u5373 index < 5 \u4e0d\u518d\u4e3a\u771f\u65f6\uff09\u3002\u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u4f1a\u6253\u5370\u51fa\u6570\u7ec4\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5143\u7d20\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PS E:\\github\\rust-projects\\loops> cargo run\n   Compiling loops v0.1.0 (E:\\github\\rust-projects\\loops)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.48s\n     Running `target\\debug\\loops.exe`\nThe value is: 10\nThe value is: 20\nThe value is: 30\nThe value is: 40\nThe value is: 50\n")),(0,r.kt)("p",null,"\u6570\u7ec4\u4e2d\u7684 5 \u4e2a\u5143\u7d20\u5168\u90e8\u90fd\u5982\u671f\u88ab\u6253\u5370\u51fa\u6765\u3002\u5c3d\u7ba1 ",(0,r.kt)("inlineCode",{parentName:"p"},"index")," \u5728\u67d0\u4e00\u65f6\u523b\u4f1a\u5230\u8fbe\u503c ",(0,r.kt)("inlineCode",{parentName:"p"},"5"),"\uff0c\u4e0d\u8fc7\u5faa\u73af\u5728\u5176\u5c1d\u8bd5\u4ece\u6570\u7ec4\u83b7\u53d6\u7b2c 6 \u4e2a\u503c\uff08\u4f1a\u8d8a\u754c\uff09\u4e4b\u524d\u5c31\u505c\u6b62\u4e86\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\u8fd9\u4e2a\u8fc7\u7a0b\u5f88\u5bb9\u6613\u51fa\u9519\uff1b\u5982\u679c\u7d22\u5f15\u503c\u6216\u6d4b\u8bd5\u6761\u4ef6\u4e0d\u6b63\u786e\u4f1a\u5bfc\u81f4\u7a0b\u5e8f panic\u3002\u4f8b\u5982\uff0c\u5982\u679c\u5c06 a \u6570\u7ec4\u7684\u5b9a\u4e49\u66f4\u6539\u4e3a\u5305\u542b 4 \u4e2a\u5143\u7d20\uff0c\u4f46\u5fd8\u8bb0\u5c06\u6761\u4ef6\u66f4\u65b0\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"while index < 4"),"\uff0c\u5219\u4ee3\u7801\u4f1a\u51fa\u73b0 panic\u3002\u8fd9\u4e5f\u4f7f\u7a0b\u5e8f\u66f4\u6162\uff0c\u56e0\u4e3a\u7f16\u8bd1\u5668\u589e\u52a0\u4e86\u8fd0\u884c\u65f6\u4ee3\u7801\u6765\u5bf9\u6bcf\u6b21\u5faa\u73af\u8fdb\u884c\u6761\u4ef6\u68c0\u67e5\uff0c\u4ee5\u786e\u5b9a\u5728\u5faa\u73af\u7684\u6bcf\u6b21\u8fed\u4ee3\u4e2d\u7d22\u5f15\u662f\u5426\u5728\u6570\u7ec4\u7684\u8fb9\u754c\u5185\u3002"),(0,r.kt)("p",null,"\u4f5c\u4e3a\u66f4\u7b80\u6d01\u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u6765\u5bf9\u4e00\u4e2a\u96c6\u5408\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u4e9b\u4ee3\u7801\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u770b\u8d77\u6765\u5982\u4e0b\u793a\u4f8b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let a = [10, 20, 30, 40, 50];\n\n    for element in a {\n        println!("The value is: {}", element);\n    }\n}\n')),(0,r.kt)("p",null,"\u5f53\u8fd0\u884c\u8fd9\u6bb5\u4ee3\u7801\u65f6\uff0c\u5176\u7ed3\u679c\u4e0e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," \u5b9e\u73b0\u7684\u793a\u4f8b\u4e00\u6837\u3002\u66f4\u4e3a\u91cd\u8981\u7684\u662f\uff0c\u6211\u4eec\u589e\u5f3a\u4e86\u4ee3\u7801\u5b89\u5168\u6027\uff0c\u5e76\u6d88\u9664\u4e86\u53ef\u80fd\u7531\u4e8e\u8d85\u51fa\u6570\u7ec4\u7684\u7ed3\u5c3e\u6216\u904d\u5386\u957f\u5ea6\u4e0d\u591f\u800c\u7f3a\u5c11\u4e00\u4e9b\u5143\u7d20\u800c\u5bfc\u81f4\u7684 bug\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u7684\u8bdd\uff0c\u5c31\u4e0d\u9700\u8981\u60e6\u8bb0\u7740\u5728\u6539\u53d8\u6570\u7ec4\u5143\u7d20\u4e2a\u6570\u65f6\u4fee\u6539\u5176\u4ed6\u7684\u4ee3\u7801\u4e86\uff0c\u5c31\u50cf\u4f7f\u7528\u4e0a\u8ff0\u793a\u4f8b\u4e2d\u4f7f\u7528\u7684\u65b9\u6cd5\u4e00\u6837\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u7684\u5b89\u5168\u6027\u548c\u7b80\u6d01\u6027\u4f7f\u5f97\u5b83\u6210\u4e3a Rust \u4e2d\u4f7f\u7528\u6700\u591a\u7684\u5faa\u73af\u7ed3\u6784\u3002\u5373\u4f7f\u662f\u5728\u60f3\u8981\u5faa\u73af\u6267\u884c\u4ee3\u7801\u7279\u5b9a\u6b21\u6570\u65f6\uff0c\u5927\u90e8\u5206\u4e5f\u4f1a\u503e\u5411\u4e8e\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u5b9e\u73b0\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," \u5faa\u73af\u6765\u5012\u8ba1\u65f6\u7684\u4f8b\u5b50\uff0c\u5b83\u8fd8\u4f7f\u7528\u4e86\u4e00\u4e2a\u6211\u4eec\u8fd8\u672a\u8bb2\u5230\u7684\u65b9\u6cd5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"rev")," \u7528\u6765\u53cd\u8f6c\u533a\u95f4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    for element in (1..4).rev() {\n        println!("The value is: {}", element);\n    }\n}\n')),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PS E:\\github\\rust-projects\\loops> cargo run\n   Compiling loops v0.1.0 (E:\\github\\rust-projects\\loops)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.55s\n     Running `target\\debug\\loops.exe`\nThe value is: 3\nThe value is: 2\nThe value is: 1\n")),(0,r.kt)("h2",{id:"\u7ec3\u4e60"},"\u7ec3\u4e60"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"n")," \u9636\u6bb5\u6590\u6ce2\u90a3\u5951\u6570\u5217"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u5b9e\u73b0"),"\u601d\u8def:",(0,r.kt)("p",{parentName:"li"},"F(0)=1\uff0cF(1)=1\uff0cF(n)=F(n-1)+F(n-2)\uff08n\u22652\uff0cn\u2208N","*","\uff09"),(0,r.kt)("p",{parentName:"li"},"\u4ee3\u7801:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"fn fibonacci_sequence(n: i32) -> i32 {\n    if n == 1 {\n        return 1;\n    } else if n == 2 {\n        return 1;\n    } else {\n        return fibonacci_sequence(n - 1) + fibonacci_sequence(n - 2);\n    }\n}\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u534e\u6c0f\u6e29\u5ea6\u548c\u6444\u6c0f\u5ea6\u4e4b\u95f4\u8f6c\u6362"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u70b9\u51fb\u67e5\u770b\u5b9e\u73b0"),"\u601d\u8def:",(0,r.kt)("p",{parentName:"li"},"\u534e\u6c0f\u6e29\u5ea6\u548c\u6444\u6c0f\u5ea6\u4e4b\u95f4\u7684\u6e29\u5ea6\u8f6c\u6362\u516c\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u5c06\u6444\u6c0f\u5ea6\u8f6c\u6362\u4e3a\u534e\u6c0f\u6e29\u5ea6\uff1a\nF = C ","*"," 9/5 + 32"),(0,r.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0cF \u4ee3\u8868\u534e\u6c0f\u6e29\u5ea6\uff0cC \u4ee3\u8868\u6444\u6c0f\u5ea6\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5c06\u534e\u6c0f\u6e29\u5ea6\u8f6c\u6362\u4e3a\u6444\u6c0f\u5ea6\uff1a\nC = (F - 32) ","*"," 5/9"),(0,r.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0cF \u4ee3\u8868\u534e\u6c0f\u6e29\u5ea6\uff0cC \u4ee3\u8868\u6444\u6c0f\u5ea6\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4f8b\u5982\uff1a\u5982\u679c\u4e00\u4e2a\u7269\u4f53\u7684\u6e29\u5ea6\u662f 37 \u6444\u6c0f\u5ea6\uff0c\u90a3\u4e48\u7528\u4e0a\u8ff0\u7684\u8f6c\u6362\u516c\u5f0f\u53ef\u4ee5\u8ba1\u7b97\u51fa\u5b83\u5bf9\u5e94\u7684\u534e\u6c0f\u6e29\u5ea6\u4e3a 37","*","9/5+32=98.6 \u5ea6\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4ee3\u7801\u5b9e\u73b0:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    let degrees: f64 = 37.0;\n    println!(\n        "The fahrenheit of {} is: {}",\n        degrees,\n        degrees_to_fahrenheit(degrees)\n    );\n    let fahrenheit: f64 = 98.6;\n    println!(\n        "The fahrenheit of {} is: {}",\n        fahrenheit,\n        fahrenheit_to_degrees(fahrenheit)\n    );\n}\n\n// \u6444\u6c0f\u5ea6\u8f6c\u534e\u6c0f\u5ea6\nfn degrees_to_fahrenheit(degrees: f64) -> f64 {\n    return degrees * 9.0 / 5.0 + 32.0;\n}\n\n// \u534e\u6c0f\u5ea6\u8f6c\u6444\u6c0f\u5ea6\nfn fahrenheit_to_degrees(fahrenheit: f64) -> f64 {\n    return (fahrenheit - 32.0) * (5.0 / 9.0);\n}\n'))))))}d.isMDXComponent=!0}}]);