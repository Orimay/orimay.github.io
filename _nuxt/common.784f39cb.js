import{_ as w}from"./Loading.5d8fff2d.js";import{a as $,_ as S}from"./Toggle.vue.68b9afc4.js";import{_ as V}from"./_plugin-vue_export-helper.c27b6911.js";import{o as t,j as u,h as n,r as l,a as b,B,b as j,O as F,c as o,w as a,k as d,s as f,e as L,F as N,A as C,u as T,x as R,t as U}from"./entry.851d371b.js";import{a as A}from"./Button.f151897d.js";const D={},E={class:"relative overflow-x-hidden overflow-y-auto rotate-180 text-left",dir:"rtl"},I={class:"absolute left-0 right-0 overflow-hidden rotate-180",dir:"ltr"};function O(r,_){return t(),u("div",E,[n("div",I,[l(r.$slots,"default")])])}const W=V(D,[["render",O]]),Y={key:1,class:"max-w-md mx-auto h-100dvh flex flex-col overflow-hidden"},q={class:"px-2 pt-2 flex flex-col gap-2"},z=n("div",{class:"h-50dvh"},null,-1),P=b({__name:"common",props:{isLoading:{type:Boolean,default:!1}},setup(r){const _=B(),m=j();function c(e,p){return L({get:()=>_.path.startsWith(p),set:()=>m.replace(e)})}const g=F([{label:"tags",icon:"fa6-solid:tags",isSelected:c("/tag/list","/tag")},{label:"tasks",icon:"fluent:tasks-app-24-filled",isSelected:c("/task/list","/task")},{label:"settings",icon:"fa-solid:cog",isSelected:c("/settings","/settings")}].reverse());return(e,p)=>{const h=w,i=$,x=W,y=A,k=S;return r.isLoading?(t(),o(h,{key:0})):(t(),u("div",Y,[e.$slots.header?(t(),o(i,{key:0,tag:"header",group:"",class:"p-2 flex justify-end items-start gap-2 uppercase min-h-[3.5rem]"},{default:a(()=>[l(e.$slots,"header")]),_:3})):d("",!0),e.$slots.default?(t(),o(x,{key:1,id:"content",class:"flex-grow snap-proximity snap-y relative"},{default:a(()=>[n("main",q,[z,l(e.$slots,"default")])]),_:3})):d("",!0),n("footer",null,[e.$slots.footer?(t(),o(i,{key:0,group:"",class:"p-2 flex justify-end items-center gap-2"},{default:a(()=>[l(e.$slots,"footer")]),_:3})):d("",!0),f(i,{group:"",class:"p-2 grid grid-flow-col gap-2 justify-evenly"},{default:a(()=>[(t(!0),u(N,null,C(T(g),s=>(t(),o(k,{key:s.icon,modelValue:s.isSelected,"onUpdate:modelValue":v=>s.isSelected=v,class:"flex-wrap gap-0.5 text-[8px] px-3 max-w-min",flat:""},{default:a(()=>[f(y,{class:"text-sm",name:s.icon},null,8,["name"]),R(" "+U(s.label),1)]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),_:1})])]))}}});export{P as default};

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="d1e8f721-5fef-4082-a1a9-f146b5574835")}catch(e){}}()
//# debugId=d1e8f721-5fef-4082-a1a9-f146b5574835
//# sourceMappingURL=common.784f39cb.js.map