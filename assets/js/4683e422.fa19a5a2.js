"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9289],{87947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(74848),a=r(28453);const o={title:"\u4f7f\u7528 props \u521d\u59cb\u5316\u72b6\u6001",description:"\u4f7f\u7528 props \u521d\u59cb\u5316\u72b6\u6001",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png"},tags:["\u524d\u7aef","\u72b6\u6001\u7ba1\u7406","zustand","\u7ffb\u8bd1"],sidebar_position:14,last_update:{date:new Date("2025-01-15T00:00:00.000Z"),author:"hbche"}},s=void 0,i={id:"guides/initialize-state-with-props",title:"\u4f7f\u7528 props \u521d\u59cb\u5316\u72b6\u6001",description:"\u4f7f\u7528 props \u521d\u59cb\u5316\u72b6\u6001",source:"@site/tutorial/zustand/guides/initialize-state-with-props.md",sourceDirName:"guides",slug:"/guides/initialize-state-with-props",permalink:"/my-website/zustand/guides/initialize-state-with-props",draft:!1,unlisted:!1,tags:[{label:"\u524d\u7aef",permalink:"/my-website/zustand/tags/\u524d\u7aef"},{label:"\u72b6\u6001\u7ba1\u7406",permalink:"/my-website/zustand/tags/\u72b6\u6001\u7ba1\u7406"},{label:"zustand",permalink:"/my-website/zustand/tags/zustand"},{label:"\u7ffb\u8bd1",permalink:"/my-website/zustand/tags/\u7ffb\u8bd1"}],version:"current",lastUpdatedBy:"hbche",lastUpdatedAt:1736899200,formattedLastUpdatedAt:"2025\u5e741\u670815\u65e5",sidebarPosition:14,frontMatter:{title:"\u4f7f\u7528 props \u521d\u59cb\u5316\u72b6\u6001",description:"\u4f7f\u7528 props \u521d\u59cb\u5316\u72b6\u6001",authors:{name:"Hanbin Che",title:"Front End Engineer",url:"https://github.com/hbche",image_url:"https://github.com/hbche.png"},tags:["\u524d\u7aef","\u72b6\u6001\u7ba1\u7406","zustand","\u7ffb\u8bd1"],sidebar_position:14,last_update:{date:"2025-01-15T00:00:00.000Z",author:"hbche"}},sidebar:"tutorialSidebar",previous:{title:"React 18 \u4e4b\u524d\u7248\u672c\u5728 React \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u4e2d\u8c03\u7528 actions",permalink:"/my-website/zustand/guides/event-handler-in-pre-react-18"},next:{title:"\u5206\u7247\u6a21\u5f0f",permalink:"/my-website/zustand/guides/slices-pattern"}},c={},d=[{value:"\u4f7f\u7528 <code>createStore</code> \u521b\u5efa store",id:"\u4f7f\u7528-createstore-\u521b\u5efa-store",level:3},{value:"\u4f7f\u7528 <code>React.createContext</code> \u521b\u5efa\u4e0a\u4e0b\u6587",id:"\u4f7f\u7528-reactcreatecontext-\u521b\u5efa\u4e0a\u4e0b\u6587",level:3},{value:"\u57fa\u7840\u7684\u7ec4\u4ef6\u4f7f\u7528",id:"\u57fa\u7840\u7684\u7ec4\u4ef6\u4f7f\u7528",level:4},{value:"\u901a\u7528\u6a21\u5f0f",id:"\u901a\u7528\u6a21\u5f0f",level:3},{value:"\u5c01\u88c5\u4e0a\u4e0b\u6587 Provider \u7ec4\u4ef6",id:"\u5c01\u88c5\u4e0a\u4e0b\u6587-provider-\u7ec4\u4ef6",level:4},{value:"\u5c06\u4e0a\u4e0b\u6587\u903b\u8f91\u63d0\u53d6\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49 hook",id:"\u5c06\u4e0a\u4e0b\u6587\u903b\u8f91\u63d0\u53d6\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49-hook",level:4},{value:"\u53ef\u9009\u5730\u5141\u8bb8\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u76f8\u7b49\u6027\u51fd\u6570",id:"\u53ef\u9009\u5730\u5141\u8bb8\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u76f8\u7b49\u6027\u51fd\u6570",level:4}];function u(e){const t={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u5728\u9700\u8981\u4f9d\u8d56\u6ce8\u5165\u7684\u60c5\u51b5\u4e0b\uff0c\u4f8b\u5982\u5f53\u4e00\u4e2a store \u9700\u8981\u4f7f\u7528\u6765\u81ea\u7ec4\u4ef6\u7684\u5c5e\u6027\u8fdb\u884c\u521d\u59cb\u5316\u65f6\uff0c\u63a8\n\u8350\u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u539f\u751f store \u7ed3\u5408 React.context\u3002"}),"\n",(0,n.jsxs)(t.h3,{id:"\u4f7f\u7528-createstore-\u521b\u5efa-store",children:["\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"createStore"})," \u521b\u5efa store"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { createStore } from 'zustand';\n\ninterface BearProps {\n  bears: number;\n}\n\nexport interface BearState extends BearProps {\n  addBear: () => void;\n}\n\nexport type BearStore = ReturnType<typeof createBearStore>;\n\nexport const createBearStore = (initProps?: BearProps) => {\n  const DEFAULT_PROPS: BearProps = {\n    bears: 0,\n  };\n\n  return createStore<BearState>()((set) => ({\n    ...DEFAULT_PROPS,\n    ...initProps,\n    addBear: () =>\n      set((state) => ({\n        bears: state.bears + 1,\n      })),\n  }));\n};\n"})}),"\n",(0,n.jsxs)(t.h3,{id:"\u4f7f\u7528-reactcreatecontext-\u521b\u5efa\u4e0a\u4e0b\u6587",children:["\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"React.createContext"})," \u521b\u5efa\u4e0a\u4e0b\u6587"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import React from 'react';\nimport { BearStore } from './create-bear-store';\n\nexport const BearContext = React.createContext<BearStore | null>(null);\n"})}),"\n",(0,n.jsx)(t.h4,{id:"\u57fa\u7840\u7684\u7ec4\u4ef6\u4f7f\u7528",children:"\u57fa\u7840\u7684\u7ec4\u4ef6\u4f7f\u7528"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { BearContext } from './bear-context';\nimport { createBearStore } from './create-bear-store';\nimport BasicConsumer from './basic-consumer';\n\nexport default function InitializeStateWithPropsDemo() {\n  const store = useRef(createBearStore()).current;\n\n  return (\n    <BearContext.Provider value={store}>\n      <BasicConsumer />\n    </BearContext.Provider>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useContext } from 'react';\nimport { BearContext } from './bear-context';\nimport { StoreApi, useStore } from 'zustand';\nimport { BearState } from './create-bear-store';\n\nexport default function BasicConsumer() {\n  const store = useContext(BearContext);\n\n  if (!store) throw new Error('Missing BearContext.Provider in the tree.');\n\n  const bears = useStore<StoreApi<BearState>, BearState['bears']>(\n    store,\n    (state: BearState) => state.bears\n  );\n  const addBear = useStore<StoreApi<BearState>, BearState['addBear']>(\n    store,\n    (state: BearState) => state.addBear\n  );\n\n  return (\n    <>\n      <div>{bears} Bears.</div>\n      <button onClick={addBear}>Add bear</button>\n    </>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"\u901a\u7528\u6a21\u5f0f",children:"\u901a\u7528\u6a21\u5f0f"}),"\n",(0,n.jsx)(t.h4,{id:"\u5c01\u88c5\u4e0a\u4e0b\u6587-provider-\u7ec4\u4ef6",children:"\u5c01\u88c5\u4e0a\u4e0b\u6587 Provider \u7ec4\u4ef6"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { BearProps, BearStore, createBearStore } from './create-bear-store';\nimport { BearContext } from './bear-context';\n\ntype BearProviderProps = React.PropsWithChildren<BearProps>;\n\nexport default function BearProvider({\n  children,\n  ...props\n}: BearProviderProps) {\n  const storeRef = useRef<BearStore>();\n  if (!storeRef.current) {\n    storeRef.current = createBearStore(props);\n  }\n\n  return (\n    <BearContext.Provider value={storeRef.current}>\n      {children}\n    </BearContext.Provider>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h4,{id:"\u5c06\u4e0a\u4e0b\u6587\u903b\u8f91\u63d0\u53d6\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49-hook",children:"\u5c06\u4e0a\u4e0b\u6587\u903b\u8f91\u63d0\u53d6\u5230\u4e00\u4e2a\u81ea\u5b9a\u4e49 hook"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { useContext } from 'react';\nimport { BearContext } from './bear-context';\nimport { useStore } from 'zustand';\nimport { BearState } from './create-bear-store';\n\nexport default function useBearContext<T>(\n  selector: (state: BearState) => T\n): T {\n  const store = useContext(BearContext);\n  if (!store) throw new Error('Missing BearContext.Provider in the tree.');\n  return useStore(store, selector);\n}\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { BearState } from './create-bear-store';\nimport useBearContext from './use-bear-context';\n\nexport default function BasicConsumer() {\n  const bears = useBearContext<BearState['bears']>((state) => state.bears);\n  const addBear = useBearContext<BearState['addBear']>(\n    (state) => state.addBear\n  );\n\n  return (\n    <>\n      <div>{bears} Bears.</div>\n      <button onClick={addBear}>Add bear</button>\n    </>\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h4,{id:"\u53ef\u9009\u5730\u5141\u8bb8\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u76f8\u7b49\u6027\u51fd\u6570",children:"\u53ef\u9009\u5730\u5141\u8bb8\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u76f8\u7b49\u6027\u51fd\u6570"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"import { useContext } from 'react';\nimport { useStoreWithEqualityFn } from 'zustand/traditional';\n\nfunction useBearContext<T>(\n  selector: (state: BearState) => T,\n  equalityFn?: (left: T, right: T) => boolean\n): T {\n  const store = useContext(BearContext);\n  if (!store) throw new Error('Missing BearContext.Provider in the tree');\n  return useStoreWithEqualityFn(store, selector, equalityFn);\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(96540);const a={},o=n.createContext(a);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);