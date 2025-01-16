"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6272],{79135:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var s=n(74848),c=n(28453);const r={title:"Zustand \u4e0e\u5176\u4ed6\u72b6\u6001\u7ba1\u7406\u5e93\u7684\u6bd4\u8f83",description:"Zustand \u4e0e\u5176\u4ed6\u7c7b\u4f3c\u5e93\u7684\u5bf9\u6bd4\u60c5\u51b5",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png"},tags:["\u524d\u7aef","\u72b6\u6001\u7ba1\u7406","zustand","\u7ffb\u8bd1"],sidebar_position:2,last_update:{date:new Date("2025-01-15T00:00:00.000Z"),author:"hbche"}},o=void 0,a={id:"getting-started/comparison",title:"Zustand \u4e0e\u5176\u4ed6\u72b6\u6001\u7ba1\u7406\u5e93\u7684\u6bd4\u8f83",description:"Zustand \u4e0e\u5176\u4ed6\u7c7b\u4f3c\u5e93\u7684\u5bf9\u6bd4\u60c5\u51b5",source:"@site/tutorial/zustand/getting-started/comparison.md",sourceDirName:"getting-started",slug:"/getting-started/comparison",permalink:"/my-website/zustand/getting-started/comparison",draft:!1,unlisted:!1,tags:[{label:"\u524d\u7aef",permalink:"/my-website/zustand/tags/\u524d\u7aef"},{label:"\u72b6\u6001\u7ba1\u7406",permalink:"/my-website/zustand/tags/\u72b6\u6001\u7ba1\u7406"},{label:"zustand",permalink:"/my-website/zustand/tags/zustand"},{label:"\u7ffb\u8bd1",permalink:"/my-website/zustand/tags/\u7ffb\u8bd1"}],version:"current",lastUpdatedBy:"hbche",lastUpdatedAt:1736899200,formattedLastUpdatedAt:"2025\u5e741\u670815\u65e5",sidebarPosition:2,frontMatter:{title:"Zustand \u4e0e\u5176\u4ed6\u72b6\u6001\u7ba1\u7406\u5e93\u7684\u6bd4\u8f83",description:"Zustand \u4e0e\u5176\u4ed6\u7c7b\u4f3c\u5e93\u7684\u5bf9\u6bd4\u60c5\u51b5",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png"},tags:["\u524d\u7aef","\u72b6\u6001\u7ba1\u7406","zustand","\u7ffb\u8bd1"],sidebar_position:2,last_update:{date:"2025-01-15T00:00:00.000Z",author:"hbche"}},sidebar:"tutorialSidebar",previous:{title:"Zustand \u7b80\u4ecb",permalink:"/my-website/zustand/getting-started/introduction"},next:{title:"\u6559\u7a0b",permalink:"/my-website/zustand/category/\u6559\u7a0b"}},u={},i=[{value:"Redux",id:"redux",level:2},{value:"\u72b6\u6001\u6a21\u578b (vs Redux)",id:"\u72b6\u6001\u6a21\u578b-vs-redux",level:3},{value:"\u6e32\u67d3\u4f18\u5316 (vs Redux)",id:"\u6e32\u67d3\u4f18\u5316-vs-redux",level:3}];function d(t){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Zustand \u662f\u4f17\u591a React \u72b6\u6001\u7ba1\u7406\u5e93\u4e2d\u7684\u4e00\u79cd. \u6211\u4eec\u5c06\u8ba8\u8bba\u72b6\u6001\u7ba1\u7406\u5e93 Redux,\u5e76\u5c06\u5176\u4e0e\nzustand \u505a\u5bf9\u6bd4."}),"\n",(0,s.jsx)(e.p,{children:"\u6bcf\u4e00\u4e2a\u72b6\u6001\u5e93\u90fd\u6709\u5176\u4f18\u52bf\u548c\u4e0d\u8db3, \u6211\u4eec\u5c06\u6bd4\u8f83\u5173\u952e\u4e0d\u540c\u70b9\u548c\u76f8\u4f3c\u70b9."}),"\n",(0,s.jsx)(e.h2,{id:"redux",children:"Redux"}),"\n",(0,s.jsx)(e.h3,{id:"\u72b6\u6001\u6a21\u578b-vs-redux",children:"\u72b6\u6001\u6a21\u578b (vs Redux)"}),"\n",(0,s.jsx)(e.p,{children:"\u4ece\u6982\u5ff5\u4e0a\u8bb2\uff0cZustand \u548c Redux \u975e\u5e38\u76f8\u4f3c\uff0c\u4e8c\u8005\u90fd\u57fa\u4e8e\u4e0d\u53ef\u53d8\u72b6\u6001\u6a21\u578b\u3002\u7136\u800c\uff0cRedux \u9700\n\u8981\u5c06\u4f60\u7684\u5e94\u7528\u5305\u88f9\u5728\u4e0a\u4e0b\u6587\u63d0\u4f9b\u5668\u4e2d\uff1bZustand \u5219\u4e0d\u9700\u8981\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Zustand"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { create } from 'zustand';\n\ntype State = {\n  count: number;\n};\n\ntype Actions = {\n  increment: (qty: number) => void;\n  decrement: (qty: number) => void;\n};\n\nconst useCountStore = create<State & Actions>((set) => ({\n  count: 0,\n  increment: (qty: number) => set((state) => ({ count: state.count + qty })),\n  decrement: (qty: number) => set((state) => ({ count: state.count - qty })),\n}));\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { create } from 'zustand';\n\ntype State = {\n  count: number;\n};\n\ntype Actions = {\n  increment: (qty: number) => void;\n  decrement: (qty: number) => void;\n};\n\ntype Action = {\n  type: keyof Actions;\n  qty: number;\n};\n\nconst countReducer = (state: State, action: Action) => {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + action.qty };\n    case 'decrement':\n      return { count: state.count - action.qty };\n    default:\n      return state;\n  }\n};\n\nconst useCountStore = create<State & { dispatch: (action: Action) => void }>(\n  (set) => ({\n    count: 0,\n    dispatch: (action: Action) => {\n      set((state) => countReducer(state, action));\n    },\n  })\n);\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Redux"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { createStore } from 'redux';\nimport { useSelector, useDispatch } from 'react-redux';\n\ntype State = {\n  count: number;\n};\n\ntype Action = {\n  type: 'increment' | 'decrement';\n  qty: number;\n};\n\nconst countReducer = (state: State, action: Action) => {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + action.qty };\n    case 'decrement':\n      return { count: state.count - action.qty };\n    default:\n      return state;\n  }\n};\n\nconst countStore = createStore(countReducer);\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { createSlice, configureStore } from '@reduxjs/toolkit';\n\nconst countSlice = createSlice({\n  name: 'count',\n  initialState: { value: 0 },\n  reducers: {\n    incremented: (state, qty: number) => {\n      // Redux Toolkit does not mutate the state, it uses the Immer library\n      // behind scenes, allowing us to have something called \"draft state\".\n      state.value += qty;\n    },\n    decremented: (state, qty: number) => {\n      state.value -= qty;\n    },\n  },\n});\n\nconst countStore = configureStore({ reducer: countSlice.reducer });\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u6e32\u67d3\u4f18\u5316-vs-redux",children:"\u6e32\u67d3\u4f18\u5316 (vs Redux)"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4f60\u7684\u5e94\u7528\u4e2d\u8fdb\u884c\u6e32\u67d3\u4f18\u5316\u65f6\uff0c Zustand \u548c Redux \u5728\u65b9\u6cd5\u4e0a\u5e76\u6ca1\u6709\u91cd\u5927\u533a\u522b\u3002\u5728\u8fd9\u4e24\u4e2a\u5e93\n\u4e2d\u90fd\u5efa\u8bae\u4f60\u901a\u8fc7\u4f7f\u7528\u9009\u62e9\u5668\u624b\u52a8\u5e94\u7528\u6e32\u67d3\u4f18\u5316\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Zustand"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { create } from 'zustand';\n\ntype State = {\n  count: number;\n};\n\ntype Actions = {\n  increment: (qty: number) => void;\n  decrement: (qty: number) => void;\n};\n\nconst useCountStore = create<State & Actions>((set) => ({\n  count: 0,\n  increment: (qty: number) => set((state) => ({ count: state.count + qty })),\n  decrement: (qty: number) => set((state) => ({ count: state.count - qty })),\n}));\n\nconst Component = () => {\n  const count = useCountStore((state) => state.count);\n  const increment = useCountStore((state) => state.increment);\n  const decrement = useCountStore((state) => state.decrement);\n  // ...\n};\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Redux"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { createStore } from 'redux';\nimport { useSelector, useDispatch } from 'react-redux';\n\ntype State = {\n  count: number;\n};\n\ntype Action = {\n  type: 'increment' | 'decrement';\n  qty: number;\n};\n\nconst countReducer = (state: State, action: Action) => {\n  switch (action.type) {\n    case 'increment':\n      return { count: state.count + action.qty };\n    case 'decrement':\n      return { count: state.count - action.qty };\n    default:\n      return state;\n  }\n};\n\nconst countStore = createStore(countReducer);\n\nconst Component = () => {\n  const count = useSelector((state) => state.count);\n  const dispatch = useDispatch();\n  // ...\n};\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ts",children:"import { useSelector } from 'react-redux';\nimport type { TypedUseSelectorHook } from 'react-redux';\nimport { createSlice, configureStore } from '@reduxjs/toolkit';\n\nconst countSlice = createSlice({\n  name: 'count',\n  initialState: { value: 0 },\n  reducers: {\n    incremented: (state, qty: number) => {\n      // Redux Toolkit does not mutate the state, it uses the Immer library\n      // behind scenes, allowing us to have something called \"draft state\".\n      state.value += qty;\n    },\n    decremented: (state, qty: number) => {\n      state.value -= qty;\n    },\n  },\n});\n\nconst countStore = configureStore({ reducer: countSlice.reducer });\n\nconst useAppSelector: TypedUseSelectorHook<typeof countStore.getState> =\n  useSelector;\n\nconst useAppDispatch: () => typeof countStore.dispatch = useDispatch;\n\nconst Component = () => {\n  const count = useAppSelector((state) => state.count.value);\n  const dispatch = useAppDispatch();\n  // ...\n};\n"})})]})}function l(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>a});var s=n(96540);const c={},r=s.createContext(c);function o(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:o(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);