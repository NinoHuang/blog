(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(2525)}])},2525:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var s=t(5893),o=t(564),i=t(3563),r=t(392),a=t(8143),l=t(7107),c=t(9320),d=t(8077),u=t(256),h=t(8686),p=t(7294),x=t(1163);let m=[{label:"Select campaign settings",description:"For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more."},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:"Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues."}];function f(e){let[n,t]=(0,p.useState)(0),f=(0,x.useRouter)();console.log(f),console.log(f.query),(0,p.useEffect)(()=>{if(f.isReady){let{id:e}=f.query;e&&t(parseInt(e.toString()))}},[e.id]);let w=()=>{t(e=>e+1)},g=()=>{t(e=>e-1)};return(0,s.jsx)(o.Z,{maxWidth:"sm",children:(0,s.jsxs)(i.Z,{sx:{maxWidth:400},children:[(0,s.jsx)(r.Z,{activeStep:n,orientation:"vertical",children:m.map((e,n)=>(0,s.jsxs)(a.Z,{children:[(0,s.jsx)(l.Z,{optional:2===n?(0,s.jsx)(c.Z,{variant:"caption",children:"Last step"}):null,children:e.label}),(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(c.Z,{children:e.description}),(0,s.jsx)(i.Z,{sx:{mb:2},children:(0,s.jsxs)("div",{children:[(0,s.jsx)(u.Z,{variant:"contained",onClick:w,sx:{mt:1,mr:1},children:n===m.length-1?"Finish":"Continue"}),(0,s.jsx)(u.Z,{disabled:0===n,onClick:g,sx:{mt:1,mr:1},children:"Back"})]})})]})]},e.label))}),n===m.length&&(0,s.jsxs)(h.Z,{square:!0,elevation:0,sx:{p:3},children:[(0,s.jsx)(c.Z,{children:"All steps completed - you're finished"}),(0,s.jsx)(u.Z,{onClick:()=>{t(0)},sx:{mt:1,mr:1},children:"Reset"}),(0,s.jsx)(u.Z,{onClick:()=>{f.push("/about")},sx:{mt:1,mr:1},children:"Back To About"})]})]})})}}},function(e){e.O(0,[794,987,888,774,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);