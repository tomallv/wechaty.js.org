(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{108:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),c=(r(0),r(142)),o={slug:"/api/",title:"Wechaty API Reference",sidebar_label:"API Index"},i={unversionedId:"api/README",id:"api/README",isDocsHomePage:!1,title:"Wechaty API Reference",description:"The Wechaty API surface is tiny. Wechaty defines a set of easy to use classes for you.",source:"@site/docs/api/README.md",slug:"/api/",permalink:"/docs/api/",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/README.md",version:"current",lastUpdatedBy:"\u738b\u4fca\u4f1f",lastUpdatedAt:1599072601,sidebar_label:"API Index",sidebar:"docs",previous:{title:"Case Study: Rui.BOT",permalink:"/docs/case-study/rui-bot"},next:{title:"Wechaty",permalink:"/docs/api/wechaty"}},l=[{value:"Top-level Exports",id:"top-level-exports",children:[{value:"Wechaty Class",id:"wechaty-class",children:[]},{value:"User Classes",id:"user-classes",children:[]}]},{value:"Importing",id:"importing",children:[{value:"ES6/TypeScript",id:"es6typescript",children:[]},{value:"ES5 (CommonJS)",id:"es5-commonjs",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Wechaty API surface is tiny. Wechaty defines a set of easy to use classes for you."),Object(c.b)("p",null,"This section documents the complete Wechaty API."),Object(c.b)("h2",{id:"top-level-exports"},"Top-level Exports"),Object(c.b)("p",null,"Every class described below is a top-level export."),Object(c.b)("h3",{id:"wechaty-class"},"Wechaty Class"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./wechaty"}),"Class Wechaty"))),Object(c.b)("h3",{id:"user-classes"},"User Classes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./message"}),"Class Message")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./contact"}),"Class Contact"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./contact-self"}),"Class ContactSelf")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./room"}),"Class Room"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./room-invitation"}),"Class RoomInvitation")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"./friendship"}),"Class Friendship"))),Object(c.b)("h2",{id:"importing"},"Importing"),Object(c.b)("p",null,"You can import any of them like this:"),Object(c.b)("h3",{id:"es6typescript"},"ES6/TypeScript"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Wechaty } from 'wechaty'\n")),Object(c.b)("h3",{id:"es5-commonjs"},"ES5 (CommonJS)"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"var Wechaty = require('wechaty').Wechaty\n")))}p.isMDXComponent=!0},142:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=a,d=b["".concat(o,".").concat(m)]||b[m]||u[m]||c;return r?n.a.createElement(d,i(i({ref:t},s),{},{components:r})):n.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);