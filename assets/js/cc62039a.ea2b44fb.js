"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[1011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),l=n(6010),i=n(2466),o=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var k=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},7814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>b,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var a=n(7462),r=(n(7294),n(3905));const l={toc:[{value:"Capabilities",id:"capabilities",level:2},{value:"Differences with webhdfs",id:"differences-with-webhdfs",level:2},{value:"Features",id:"features",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Environment",id:"environment",level:2},{value:"Example",id:"example",level:2},{value:"Via Builder",id:"via-builder",level:3}]},i="wrapper";function o(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A distributed file system that provides high-throughput access to application data."),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"This service can be used to:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","stat"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","read"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","write"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","create_dir"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","delete"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","copy"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","rename"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","list"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("del",{parentName:"li"},"scan")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("del",{parentName:"li"},"presign")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","blocking")),(0,r.kt)("h2",{id:"differences-with-webhdfs"},"Differences with webhdfs"),(0,r.kt)("p",null,"[Webhdfs][crate::services::Webhdfs]"," is powered by hdfs's RESTful HTTP API."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"HDFS support needs to enable feature ",(0,r.kt)("inlineCode",{parentName:"p"},"services-hdfs"),"."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"root"),": Set the work dir for backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name_node"),": Set the name node for backend.")),(0,r.kt)("p",null,"Refer to ","[",(0,r.kt)("inlineCode",{parentName:"p"},"HdfsBuilder"),"]","'s public API docs for more information."),(0,r.kt)("h2",{id:"environment"},"Environment"),(0,r.kt)("p",null,"HDFS needs some environment set correctly."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JAVA_HOME"),": the path to java home, could be found via ",(0,r.kt)("inlineCode",{parentName:"li"},"java -XshowSettings:properties -version")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HADOOP_HOME"),": the path to hadoop home, opendal relays on this env to discover hadoop jars and set ",(0,r.kt)("inlineCode",{parentName:"li"},"CLASSPATH")," automatically.")),(0,r.kt)("p",null,"Most of the time, setting ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HADOOP_HOME")," is enough. But there are some edge cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If meeting errors like the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"error while loading shared libraries: libjvm.so: cannot open shared object file: No such file or directory\n")),(0,r.kt)("p",null,"Java's lib are not including in pkg-config find path, please set ",(0,r.kt)("inlineCode",{parentName:"p"},"LD_LIBRARY_PATH"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export LD_LIBRARY_PATH=${JAVA_HOME}/lib/server:${LD_LIBRARY_PATH}\n")),(0,r.kt)("p",null,"The path of ",(0,r.kt)("inlineCode",{parentName:"p"},"libjvm.so")," could be different, please keep an eye on it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If meeting errors like the following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"(unable to get stack trace for java.lang.NoClassDefFoundError exception: ExceptionUtils::getStackTrace error.)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CLASSPATH")," is not set correctly or your hadoop installation is incorrect."),(0,r.kt)("p",null,"To set ",(0,r.kt)("inlineCode",{parentName:"p"},"CLASSPATH"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"export CLASSPATH=$(find $HADOOP_HOME -iname \"*.jar\" | xargs echo | tr ' ' ':'):${CLASSPATH}\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"via-builder"},"Via Builder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::services::Hdfs;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Create fs backend builder.\n    let mut builder = Hdfs::default();\n    // Set the name node for hdfs.\n    builder.name_node("hdfs://127.0.0.1:9000");\n    // Set the root for hdfs, all operations will happen under this root.\n    //\n    // NOTE: the root must be absolute path.\n    builder.root("/tmp");\n\n    // `Accessor` provides the low level APIs, we will use `Operator` normally.\n    let op: Operator = Operator::new(builder)?.finish();\n\n    Ok(())\n}\n')))}o.isMDXComponent=!0;var s=n(4866),u=n(5162);const c={title:"HDFS"},p=void 0,d={unversionedId:"services/hdfs",id:"services/hdfs",title:"HDFS",description:"Hadoop Distributed File System (HDFS\u2122) support.",source:"@site/docs/services/hdfs.mdx",sourceDirName:"services",slug:"/services/hdfs",permalink:"/docs/services/hdfs",draft:!1,editUrl:"https://github.com/apache/incubator-opendal/website/docs/services/hdfs.mdx",tags:[],version:"current",lastUpdatedBy:"Xuanwo",lastUpdatedAt:1686038368,formattedLastUpdatedAt:"Jun 6, 2023",frontMatter:{title:"HDFS"},sidebar:"docs",previous:{title:"FTP",permalink:"/docs/services/ftp"},next:{title:"IPFS",permalink:"/docs/services/ipfs"}},m={},f=[{value:"Via Config",id:"via-config",level:3}],h={toc:f},k="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(k,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://hadoop.apache.org/"},"Hadoop Distributed File System (HDFS\u2122)")," support."),(0,r.kt)(o,{components:n.components,mdxType:"Docs"}),(0,r.kt)("h3",{id:"via-config"},"Via Config"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'use std::sync::Arc;\n\nuse anyhow::Result;\nuse opendal::Scheme;\nuse opendal::Operator;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  let mut map = HashMap::new();\n  map.insert("name_node".to_string(), "hdfs://127.0.0.1:9000".to_string());\n  map.insert("root".to_string(), "/tmp".to_string());\n\n  let op: Operator = Operator::via_map(Scheme::Hdfs, map)?;\n  Ok(())\n}\n'))),(0,r.kt)(u.Z,{value:"node.js",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { Operator } from "opendal";\n\nasync function main() {\n  const op = new Operator("hdfs", {\n    name_node: "hdfs://127.0.0.1:9000",\n    root: "/tmp",\n  });\n}\n'))),(0,r.kt)(u.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import opendal\n\nop = opendal.Operator("hdfs",\n    name_node="hdfs://127.0.0.1:9000",\n    root="/tmp",\n)\n')))))}b.isMDXComponent=!0}}]);