"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7239],{59958:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=n(85893),r=n(11151);const i={title:"Rust \u679a\u4e3e\u548c\u6a21\u5f0f\u5339\u914d",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png"},description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",tags:["rust","\u5165\u95e8","\u679a\u4e3e","\u6a21\u5f0f\u5339\u914d"],date:new Date("2023-10-19T00:00:00.000Z")},o=void 0,a={permalink:"/my-website/blog/2023/10/19/rust-enum-pattern-matching",source:"@site/blog/2023-10-19-rust-enum-pattern-matching/index.md",title:"Rust \u679a\u4e3e\u548c\u6a21\u5f0f\u5339\u914d",description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",date:"2023-10-19T00:00:00.000Z",formattedDate:"2023\u5e7410\u670819\u65e5",tags:[{label:"rust",permalink:"/my-website/blog/tags/rust"},{label:"\u5165\u95e8",permalink:"/my-website/blog/tags/\u5165\u95e8"},{label:"\u679a\u4e3e",permalink:"/my-website/blog/tags/\u679a\u4e3e"},{label:"\u6a21\u5f0f\u5339\u914d",permalink:"/my-website/blog/tags/\u6a21\u5f0f\u5339\u914d"}],readingTime:22.79,hasTruncateMarker:!0,authors:[{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png",imageURL:"https://github.com/hbche.png"}],frontMatter:{title:"Rust \u679a\u4e3e\u548c\u6a21\u5f0f\u5339\u914d",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png",imageURL:"https://github.com/hbche.png"},description:"\u8bb0\u5f55 Rust \u5b66\u4e60\u8fc7\u7a0b",tags:["rust","\u5165\u95e8","\u679a\u4e3e","\u6a21\u5f0f\u5339\u914d"],date:"2023-10-19T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Rust \u5e38\u89c1\u96c6\u5408",permalink:"/my-website/blog/2023/10/23/rust-collections"},nextItem:{title:"Rust \u4f7f\u7528\u7ed3\u6784\u4f53\u7ec4\u7ec7\u5173\u8054\u6570\u636e",permalink:"/my-website/blog/2023/10/18/rust-structure"}},c={authorsImageUrls:[void 0]},l=[];function u(t){const e={code:"code",p:"p",strong:"strong",...(0,r.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"\u679a\u4e3e"}),"\uff08enumerations\uff09\uff0c\u4e5f\u88ab\u79f0\u4f5c ",(0,s.jsx)(e.code,{children:"enums"}),"\u3002\u679a\u4e3e\u5141\u8bb8\u4f60\u901a\u8fc7\u5217\u4e3e\u53ef\u80fd\u7684 ",(0,s.jsx)(e.strong,{children:"\u6210\u5458"}),"\uff08variants\uff09 \u6765\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u578b\u3002\u9996\u5148\uff0c\u6211\u4eec\u4f1a\u5b9a\u4e49\u5e76\u4f7f\u7528\u4e00\u4e2a\u679a\u4e3e\u6765\u5c55\u793a\u5b83\u662f\u5982\u4f55\u8fde\u540c\u6570\u636e\u4e00\u8d77\u7f16\u7801\u4fe1\u606f\u7684\u3002\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u4f1a\u63a2\u7d22\u4e00\u4e2a\u7279\u522b\u6709\u7528\u7684\u679a\u4e3e\uff0c\u53eb\u505a ",(0,s.jsx)(e.code,{children:"Option"}),"\uff0c\u5b83\u4ee3\u8868\u4e00\u4e2a\u503c\u8981\u4e48\u662f\u67d0\u4e2a\u503c\u8981\u4e48\u4ec0\u4e48\u90fd\u4e0d\u662f\u3002\u7136\u540e\u4f1a\u8bb2\u5230\u5728 ",(0,s.jsx)(e.code,{children:"match"})," \u8868\u8fbe\u5f0f\u4e2d\u7528\u6a21\u5f0f\u5339\u914d\uff0c\u9488\u5bf9\u4e0d\u540c\u7684\u679a\u4e3e\u503c\u7f16\u5199\u76f8\u5e94\u8981\u6267\u884c\u7684\u4ee3\u7801\u3002\u6700\u540e\u4f1a\u4ecb\u7ecd ",(0,s.jsx)(e.code,{children:"if let"}),"\uff0c\u53e6\u4e00\u4e2a\u7b80\u6d01\u65b9\u4fbf\u5904\u7406\u4ee3\u7801\u4e2d\u679a\u4e3e\u7684\u7ed3\u6784\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u679a\u4e3e\u662f\u4e00\u4e2a\u5f88\u591a\u8bed\u8a00\u90fd\u6709\u7684\u529f\u80fd\uff0c\u4e0d\u8fc7\u4e0d\u540c\u8bed\u8a00\u4e2d\u5176\u529f\u80fd\u5404\u4e0d\u76f8\u540c\u3002Rust \u7684\u679a\u4e3e\u4e0e ",(0,s.jsx)(e.code,{children:"F#"}),"\u3001",(0,s.jsx)(e.code,{children:"OCaml"})," \u548c ",(0,s.jsx)(e.code,{children:"Haskell"})," \u8fd9\u6837\u7684\u51fd\u6570\u5f0f\u7f16\u7a0b\u8bed\u8a00\u4e2d\u7684 ",(0,s.jsx)(e.strong,{children:"\u4ee3\u6570\u6570\u636e\u7c7b\u578b"}),"\uff08algebraic data types\uff09\u6700\u4e3a\u76f8\u4f3c\u3002"]})]})}function h(t={}){const{wrapper:e}={...(0,r.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(u,{...t})}):u(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>o});var s=n(67294);const r={},i=s.createContext(r);function o(t){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),s.createElement(i.Provider,{value:e},t.children)}}}]);