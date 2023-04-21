"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Overview",sidebar_position:1},i=void 0,l={unversionedId:"index",id:"index",title:"Overview",description:"Open Data Access Layer: Access data freely.",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/website/docs/index.md",tags:[],version:"current",lastUpdatedBy:"Zhizhen He",lastUpdatedAt:1682067258,formattedLastUpdatedAt:"Apr 21, 2023",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"docs",next:{title:"Vision",permalink:"/docs/vision"}},s={},p=[{value:"Quickstart",id:"quickstart",level:2},{value:"Rust",id:"rust",level:3},{value:"Python",id:"python",level:3},{value:"Node.js",id:"nodejs",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Open")," ",(0,a.kt)("strong",{parentName:"p"},"D"),"ata ",(0,a.kt)("strong",{parentName:"p"},"A"),"ccess ",(0,a.kt)("strong",{parentName:"p"},"L"),"ayer: Access data freely."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5351546/222356748-14276998-501b-4d2a-9b09-b8cff3018204.png",alt:null})),(0,a.kt)("h2",{id:"quickstart"},"Quickstart"),(0,a.kt)("h3",{id:"rust"},"Rust"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use opendal::Result;\nuse opendal::layers::LoggingLayer;\nuse opendal::services;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Pick a builder and configure it.\n    let mut builder = services::S3::default();\n    builder.bucket("test");\n\n    // Init an operator\n    let op = Operator::new(builder)?\n        // Init with logging layer enabled.\n        .layer(LoggingLayer::default())\n        .finish();\n\n    // Write data\n    op.write("hello.txt", "Hello, World!").await?;\n\n    // Read data\n    let bs = op.read("hello.txt").await?;\n\n    // Fetch metadata\n    let meta = op.stat("hello.txt").await?;\n    let mode = meta.mode();\n    let length = meta.content_length();\n\n    // Delete\n    op.delete("hello.txt").await?;\n\n    Ok(())\n}\n')),(0,a.kt)("h3",{id:"python"},"Python"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import asyncio\n\nasync def main():\n    op = opendal.AsyncOperator("fs", root="/tmp")\n    await op.write("test.txt", b"Hello World")\n    print(await op.read("test.txt"))\n\nasyncio.run(main())\n')),(0,a.kt)("h3",{id:"nodejs"},"Node.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("fs", { root: "/tmp" });\n  await op.write("test", "Hello, World!");\n  const bs = await op.read("test");\n  console.log(new TextDecoder().decode(bs));\n  const meta = await op.stat("test");\n  console.log(`contentLength: ${meta.contentLength}`);\n}\n')))}u.isMDXComponent=!0}}]);