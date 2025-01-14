"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8544],{26535:(e,t,s)=>{s.d(t,{A:()=>f});var r=s(96540),a=s(18215),n=s(28244),l=s(24581),i=s(28774),o=s(21312),c=s(94654),m=s(99169);function d(e){const{pathname:t}=(0,c.zy)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var h=s(74848);function g(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("aside",{className:"col col--3",children:(0,h.jsxs)("nav",{className:(0,a.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,h.jsx)("div",{className:(0,a.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,h.jsx)("ul",{className:(0,a.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,h.jsx)("li",{className:u.sidebarItem,children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var p=s(75600);function x(e){let{sidebar:t}=e;const s=d(t.items);return(0,h.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,h.jsx)("li",{className:"menu__list-item",children:(0,h.jsx)(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,h.jsx)(p.GX,{component:x,props:e})}function b(e){let{sidebar:t}=e;const s=(0,l.l)();return t?.items.length?"mobile"===s?(0,h.jsx)(j,{sidebar:t}):(0,h.jsx)(g,{sidebar:t}):null}function f(e){const{sidebar:t,toc:s,children:r,...l}=e,i=t&&t.items.length>0;return(0,h.jsx)(n.A,{...l,children:(0,h.jsx)("div",{className:"container margin-vert--lg",children:(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)(b,{sidebar:t}),(0,h.jsx)("main",{className:(0,a.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"https://schema.org/Blog",children:r}),s&&(0,h.jsx)("div",{className:"col col--2",children:s})]})})})}},48258:(e,t,s)=>{s.d(t,{A:()=>B});s(96540);var r=s(18215),a=s(7131),n=s(86025),l=s(74848);function i(e){let{children:t,className:s}=e;const{frontMatter:r,assets:i,metadata:{description:o}}=(0,a.e)(),{withBaseUrl:c}=(0,n.h)(),m=i.image??r.image,d=r.keywords??[];return(0,l.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting",children:[o&&(0,l.jsx)("meta",{itemProp:"description",content:o}),m&&(0,l.jsx)("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&(0,l.jsx)("meta",{itemProp:"keywords",content:d.join(",")}),t]})}var o=s(28774);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:s,isBlogPostPage:n}=(0,a.e)(),{permalink:i,title:m}=s,d=n?"h1":"h2";return(0,l.jsx)(d,{className:(0,r.A)(c.title,t),itemProp:"headline",children:n?m:(0,l.jsx)(o.A,{itemProp:"url",to:i,children:m})})}var d=s(21312),u=s(53465);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,u.W)();return t=>{const s=Math.ceil(t);return e(s,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,l.jsx)(l.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,l.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function x(){return(0,l.jsx)(l.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:s}=(0,a.e)(),{date:n,formattedDate:i,readingTime:o}=s;return(0,l.jsxs)("div",{className:(0,r.A)(h.container,"margin-vert--md",t),children:[(0,l.jsx)(p,{date:n,formattedDate:i}),void 0!==o&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(x,{}),(0,l.jsx)(g,{readingTime:o})]})]})}function b(e){return e.href?(0,l.jsx)(o.A,{...e}):(0,l.jsx)(l.Fragment,{children:e.children})}function f(e){let{author:t,className:s}=e;const{name:a,title:n,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,l.jsxs)("div",{className:(0,r.A)("avatar margin-bottom--sm",s),children:[o&&(0,l.jsx)(b,{href:m,className:"avatar__photo-link",children:(0,l.jsx)("img",{className:"avatar__photo",src:o,alt:a,itemProp:"image"})}),a&&(0,l.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,l.jsx)("div",{className:"avatar__name",children:(0,l.jsx)(b,{href:m,itemProp:"url",children:(0,l.jsx)("span",{itemProp:"name",children:a})})}),n&&(0,l.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:n})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function P(e){let{className:t}=e;const{metadata:{authors:s},assets:n}=(0,a.e)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,l.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,l.jsx)("div",{className:(0,r.A)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,l.jsx)(f,{author:{...e,imageURL:n.authorsImageUrls[t]??e.imageURL}})},t)))})}function A(){return(0,l.jsxs)("header",{children:[(0,l.jsx)(m,{}),(0,l.jsx)(j,{}),(0,l.jsx)(P,{})]})}var N=s(70440),_=s(11544);function k(e){let{children:t,className:s}=e;const{isBlogPostPage:n}=(0,a.e)();return(0,l.jsx)("div",{id:n?N.blogPostContainerID:void 0,className:(0,r.A)("markdown",s),itemProp:"articleBody",children:(0,l.jsx)(_.A,{children:t})})}var w=s(61943),T=s(62053);function y(){return(0,l.jsx)("b",{children:(0,l.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function I(e){const{blogPostTitle:t,...s}=e;return(0,l.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,l.jsx)(y,{})})}const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function L(){const{metadata:e,isBlogPostPage:t}=(0,a.e)(),{tags:s,title:n,editUrl:i,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||i?(0,l.jsxs)("footer",{className:(0,r.A)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull),children:[m&&(0,l.jsx)("div",{className:(0,r.A)("col",{"col--9":c}),children:(0,l.jsx)(T.A,{tags:s})}),t&&i&&(0,l.jsx)("div",{className:"col margin-top--sm",children:(0,l.jsx)(w.A,{editUrl:i})}),c&&(0,l.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":m}),children:(0,l.jsx)(I,{blogPostTitle:n,to:e.permalink})})]}):null}function B(e){let{children:t,className:s}=e;const n=function(){const{isBlogPostPage:e}=(0,a.e)();return e?void 0:"margin-bottom--xl"}();return(0,l.jsxs)(i,{className:(0,r.A)(n,s),children:[(0,l.jsx)(A,{}),(0,l.jsx)(k,{children:t}),(0,l.jsx)(L,{})]})}},7131:(e,t,s)=>{s.d(t,{e:()=>o,i:()=>i});var r=s(96540),a=s(89532),n=s(74848);const l=r.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:a=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,r.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:a});return(0,n.jsx)(l.Provider,{value:i,children:t})}function o(){const e=(0,r.useContext)(l);if(null===e)throw new a.dV("BlogPostProvider");return e}},53465:(e,t,s)=>{s.d(t,{W:()=>c});var r=s(96540),a=s(44586);const n=["zero","one","two","few","many","other"];function l(e){return n.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const r=e.split("|");if(1===r.length)return r[0];r.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=s.select(t),n=s.pluralForms.indexOf(a);return r[Math.min(n,r.length-1)]}(s,t,e)}}}}]);