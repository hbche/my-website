"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[133],{18525:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=n(74848),r=n(28453);const a={title:"\u5206\u7247\u6a21\u5f0f",description:"\u5206\u7247\u6a21\u5f0f",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png"},tags:["\u524d\u7aef","\u72b6\u6001\u7ba1\u7406","zustand","\u7ffb\u8bd1"],sidebar_position:15,last_update:{date:new Date("2025-01-15T00:00:00.000Z"),author:"hbche"}},i=void 0,c={id:"guides/slices-pattern",title:"\u5206\u7247\u6a21\u5f0f",description:"\u5206\u7247\u6a21\u5f0f",source:"@site/tutorial/zustand/guides/slices-pattern.md",sourceDirName:"guides",slug:"/guides/slices-pattern",permalink:"/my-website/zustand/guides/slices-pattern",draft:!1,unlisted:!1,tags:[{label:"\u524d\u7aef",permalink:"/my-website/zustand/tags/\u524d\u7aef"},{label:"\u72b6\u6001\u7ba1\u7406",permalink:"/my-website/zustand/tags/\u72b6\u6001\u7ba1\u7406"},{label:"zustand",permalink:"/my-website/zustand/tags/zustand"},{label:"\u7ffb\u8bd1",permalink:"/my-website/zustand/tags/\u7ffb\u8bd1"}],version:"current",lastUpdatedBy:"hbche",lastUpdatedAt:1736899200,formattedLastUpdatedAt:"2025\u5e741\u670815\u65e5",sidebarPosition:15,frontMatter:{title:"\u5206\u7247\u6a21\u5f0f",description:"\u5206\u7247\u6a21\u5f0f",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png"},tags:["\u524d\u7aef","\u72b6\u6001\u7ba1\u7406","zustand","\u7ffb\u8bd1"],sidebar_position:15,last_update:{date:"2025-01-15T00:00:00.000Z",author:"hbche"}},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 props \u521d\u59cb\u5316\u72b6\u6001",permalink:"/my-website/zustand/guides/initialize-state-with-props"},next:{title:"\u4e09\u65b9\u5e93\u96c6\u6210",permalink:"/my-website/zustand/category/\u4e09\u65b9\u5e93\u96c6\u6210"}},o={},d=[{value:"\u5c06 store \u5212\u5206\u4e3a\u66f4\u5c0f\u7684 store",id:"\u5c06-store-\u5212\u5206\u4e3a\u66f4\u5c0f\u7684-store",level:3},{value:"\u5728 React \u7ec4\u4ef6\u4e2d\u4f7f\u7528",id:"\u5728-react-\u7ec4\u4ef6\u4e2d\u4f7f\u7528",level:4},{value:"\u66f4\u65b0\u591a store",id:"\u66f4\u65b0\u591a-store",level:4},{value:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6",id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6",level:3},{value:"\u4f7f\u7528 TypeScript",id:"\u4f7f\u7528-typescript",level:3}];function l(e){const t={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"\u5c06-store-\u5212\u5206\u4e3a\u66f4\u5c0f\u7684-store",children:"\u5c06 store \u5212\u5206\u4e3a\u66f4\u5c0f\u7684 store"}),"\n",(0,s.jsx)(t.p,{children:"\u968f\u7740\u6211\u4eec\u6dfb\u52a0\u66f4\u591a\u529f\u80fd\uff0c\u6211\u4eec\u7684 store \u53ef\u80fd\u4f1a\u53d8\u5f97\u8d8a\u6765\u8d8a\u5927\uff0c\u4e5f\u8d8a\u6765\u8d8a\u96be\u4ee5\u7ef4\u62a4\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u6211\u4eec\u53ef\u4ee5\u5c06\u4e3b store \u5212\u5206\u4e3a\u66f4\u5c0f\u7684\u5355\u72ec store\uff0c\u4ee5\u5b9e\u73b0\u6a21\u5757\u5316\u3002\u5728 Zustand \u4e2d\uff0c\u8fd9\u5f88\u5bb9\u6613\n\u5b9e\u73b0\uff01"}),"\n",(0,s.jsx)(t.p,{children:"\u7b2c\u4e00\u4e2a\u5355\u72ec\u7684 store\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { StateCreator } from 'zustand';\nimport { FishSlice } from './use-fish-slice';\n\nexport interface BearSlice {\n  bears: number;\n  addBear: () => void;\n  eatFish: () => void;\n}\n\nexport const createBearSlice: StateCreator<\n  BearSlice & FishSlice,\n  [],\n  [],\n  BearSlice\n> = (set) => {\n  return {\n    bears: 0,\n    addBear: () => set((state) => ({ ...state, bears: state.bears + 1 })),\n    eatFish: () => set((state) => ({ ...state, fishes: state.fishes - 1 })),\n  };\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u53e6\u4e00\u4e2a\u5355\u72ec\u7684 store \uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { StateCreator } from 'zustand';\nimport { BearSlice } from './use-bear-slice';\n\nexport interface FishSlice {\n  fishes: number;\n  addFish: () => void;\n}\n\nexport const createFishSlice: StateCreator<\n  BearSlice & FishSlice,\n  [],\n  [],\n  FishSlice\n> = (set) => ({\n  fishes: 0,\n  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u5c06\u8fd9\u4e24\u4e2a store \u5408\u5e76\u4e3a\u4e00\u4e2a ",(0,s.jsx)(t.strong,{children:"bounded store"}),"\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const;\n"})}),"\n",(0,s.jsx)(t.h4,{id:"\u5728-react-\u7ec4\u4ef6\u4e2d\u4f7f\u7528",children:"\u5728 React \u7ec4\u4ef6\u4e2d\u4f7f\u7528"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import useBoundStore from './bound-store';\n\nexport default function StoreSliceDemo() {\n  const bears = useBoundStore((state) => state.bears);\n  const fishes = useBoundStore((state) => state.fishes);\n  const addBear = useBoundStore((state) => state.addBear);\n  const eatFish = useBoundStore((state) => state.eatFish);\n  return (\n    <div>\n      <h2>Number of bears: {bears}</h2>\n      <h2>Number of fishes: {fishes}</h2>\n      <button onClick={() => addBear()}>Add a bear</button>\n      <button onClick={() => eatFish()}>Eat a fish</button>\n    </div>\n  );\n}\n"})}),"\n",(0,s.jsx)(t.h4,{id:"\u66f4\u65b0\u591a-store",children:"\u66f4\u65b0\u591a store"}),"\n",(0,s.jsx)(t.p,{children:"\u5728\u540c\u4e00\u4e2a\u65b9\u6cd5\uff0c\u540c\u4e00\u65f6\u523b\uff0c\u6211\u4eec\u53ef\u4ee5\u66f4\u65b0\u591a\u4e2a store\u3002"}),"\n",(0,s.jsx)(t.p,{children:"\u5171\u4eab store\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { StateCreator } from 'zustand';\nimport { BearSlice } from './create-bear-slice';\nimport { FishSlice } from './create-fish-slice';\n\nexport interface SharedSlice {\n  addBoth: () => void;\n  getBoth: () => number;\n}\n\nexport const createSharedSlice: StateCreator<\n  BearSlice & FishSlice,\n  [],\n  [],\n  SharedSlice\n> = (_set, get) => {\n  return {\n    addBoth: () => {\n      get().addBear();\n      get().addFish();\n    },\n    getBoth: () => {\n      return get().bears + get().fishes;\n    },\n  };\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u66f4\u65b0 bound store\uff0c\u589e\u52a0\u5171\u4eab store\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { create } from 'zustand';\nimport { BearSlice, createBearSlice } from './create-bear-slice';\nimport { FishSlice, createFishSlice } from './create-fish-slice';\nimport { createSharedSlice, SharedSlice } from './create-shared-slice';\n\nconst useBoundStore = create<BearSlice & FishSlice & SharedSlice>()((...a) => ({\n  ...createBearSlice(...a),\n  ...createFishSlice(...a),\n  ...createSharedSlice(...a),\n}));\n\nexport default useBoundStore;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6",children:"\u6dfb\u52a0\u4e2d\u95f4\u4ef6"}),"\n",(0,s.jsx)(t.p,{children:"\u5411\u5408\u5e76\u540e\u7684 store \u6dfb\u52a0\u4e2d\u95f4\u4ef6\u7684\u65b9\u5f0f\u4e0e\u5176\u4ed6\u666e\u901a store \u76f8\u540c\u3002"}),"\n",(0,s.jsxs)(t.p,{children:["\u6dfb\u52a0 ",(0,s.jsx)(t.code,{children:"persist"})," \u4e2d\u95f4\u4ef6\u5230\u6211\u4eec\u7684 ",(0,s.jsx)(t.code,{children:"useBoundStore"})," \u65b9\u6cd5\u4e2d\uff1a"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"import { create } from 'zustand';\nimport { BearSlice, createBearSlice } from './create-bear-slice';\nimport { FishSlice, createFishSlice } from './create-fish-slice';\nimport { createSharedSlice, SharedSlice } from './create-shared-slice';\nimport { persist } from 'zustand/middleware';\n\nconst useBoundStore = create<BearSlice & FishSlice & SharedSlice>()(\n  persist(\n    (...a) => ({\n      ...createBearSlice(...a),\n      ...createFishSlice(...a),\n      ...createSharedSlice(...a),\n    }),\n    { name: '' }\n  )\n);\n\nexport default useBoundStore;\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u5e94\u8be5\u53ea\u5728\u5408\u5e76\u540e\u7684 store \u4e2d\u5e94\u7528\u4e2d\u95f4\u4ef6\u3002\u5728\u5355\u72ec\u7684\u5207\u7247\u5185\u90e8\u5e94\u7528\u5b83\u4eec\u53ef\u80fd\u4f1a\n\u5bfc\u81f4\u610f\u5916\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"\u4f7f\u7528-typescript",children:"\u4f7f\u7528 TypeScript"}),"\n",(0,s.jsxs)(t.p,{children:["\u5173\u4e8e\u5982\u4f55\u5728 Zustand \u4e2d\u4f7f\u7528 TypeScript \u7684\u5207\u7247\u6a21\u5f0f\u7684\u8be6\u7ec6\u6307\u5357\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\n\uff1a",(0,s.jsx)(t.a,{href:"https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern",children:"\u8fd9\u91cc"}),"\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(96540);const r={},a=s.createContext(r);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);