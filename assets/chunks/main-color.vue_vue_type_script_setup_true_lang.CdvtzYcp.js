import{r as f,j as W,t as B,v as D,w as N,f as j}from"./theme.Q658I92K.js";import{p as $,q as k,o as a,t as T,v as u,y as g,a as e,c as t,M as v,ab as x,u as s,S as n,W as d,X as l}from"./framework.DwCbV5ML.js";const L="#000000",S="#FFFFFF",A=$({__name:"neutral-color",setup(U){const i=["page","","overlay"].map(o=>({name:o?`${o[0].toUpperCase()+o.slice(1)} Background`:"Base Background",var:f(B("bg-color",o))})),p=["darker","dark","","light","lighter","extra-light"].map(o=>({name:o?`${o[0].toUpperCase()+o.slice(1)} Border`:"Base Border",var:f(B("border-color",o))})),h=["darker","dark","","light","lighter","extra-light","blank"].map(o=>({name:o?`${o[0].toUpperCase()+o.slice(1)} Fill`:"Base Fill",var:f(B("fill-color",o))})),c=["primary","regular","secondary","placeholder","disabled"].map(o=>({name:`${o[0].toUpperCase()+o.slice(1)} Text`,var:f(B("text-color",o))}));return(o,w)=>{const _=k("el-col"),V=k("el-row");return a(),T(V,{gutter:12},{default:u(()=>[g(_,{span:6,xs:{span:12}},{default:u(()=>[e("div",{class:"demo-color-box-group"},[(a(!0),t(v,null,x(s(c),(r,m)=>(a(),t("div",{key:m,class:"demo-color-box demo-color-box-other",style:n({color:"var(--el-bg-color)",background:r.var.value})},[d(l(r.name)+" ",1),e("div",{class:"value",text:"xs"},l(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),g(_,{span:6,xs:{span:12}},{default:u(()=>[e("div",{class:"demo-color-box-group"},[(a(!0),t(v,null,x(s(p),(r,m)=>(a(),t("div",{key:m,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:n({background:r.var.value})},[d(l(r.name)+" ",1),e("div",{class:"value",text:"xs"},l(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),g(_,{span:6,xs:{span:12}},{default:u(()=>[e("div",{class:"demo-color-box-group"},[(a(!0),t(v,null,x(s(h),(r,m)=>(a(),t("div",{key:m,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:n({background:r.var.value,border:`1px solid ${r.name==="Blank Fill"?"var(--el-border-color-light)":"transparent"}`})},[d(l(r.name)+" ",1),e("div",{class:"value",text:"xs"},l(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),g(_,{span:6,xs:{span:12}},{default:u(()=>[e("div",{class:"demo-color-box-group"},[e("div",{class:"demo-color-box demo-color-box-other",style:n({background:L})},[d(" Basic Black "),e("div",{class:"value",text:"xs"},l(L))],4),e("div",{class:"demo-color-box demo-color-box-other",style:n({background:S,color:"#303133",border:"1px solid #eee"})},[d(" Basic White "),e("div",{class:"value",text:"xs"},l(S))],4),e("div",{class:"demo-color-box demo-color-box-other demo-color-box-lite bg-transparent"},[d(" Transparent "),e("div",{class:"value",text:"xs"},"Transparent")]),(a(!0),t(v,null,x(s(i),(r,m)=>(a(),t("div",{key:m,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:n({background:r.var.value,border:"1px solid "+(!s(W)||r.name==="Base Background"?"var(--el-border-color-light)":"transparent")})},[d(l(r.name)+" ",1),e("div",{class:"value",text:"xs"},l(r.var.value.toUpperCase()),1)],4))),128))])]),_:1})]),_:1})}}}),E=$({__name:"secondary-colors",setup(U){const b=["success","warning","danger","info"],i=[3,5,7,8,9].map(p=>`light-${p}`);i.unshift("dark-2");const{copyColor:C}=D();return(p,F)=>{const h=k("el-col"),y=k("el-row");return a(),T(y,{gutter:12},{default:u(()=>[(a(),t(v,null,x(b,(c,o)=>g(h,{key:o,span:6,xs:{span:12}},{default:u(()=>[e("div",{class:"demo-color-box",style:n({background:s(N)(c)})},[d(l(c.charAt(0).toUpperCase()+c.slice(1))+" ",1),e("div",{class:"value",text:"xs"},l(s(N)(c).toUpperCase()),1),e("div",{class:"bg-color-sub"},[(a(!0),t(v,null,x(s(i),(w,_)=>(a(),t("div",{key:_,class:"bg-secondary-sub-item transition cursor-pointer hover:shadow",style:n({width:`${100/6}%`,background:`var(--el-color-${c}-`+w+")"}),onClick:V=>s(C)(c+"-"+w)},null,12,["onClick"]))),128))])],4)]),_:2},1024)),64))]),_:1})}}}),M=$({__name:"main-color",setup(U){const b=j("--el-color-primary"),i=[3,5,7,8,9].map(p=>`light-${p}`);i.unshift("dark-2");const{copyColor:C}=D();return(p,F)=>{const h=k("el-col"),y=k("el-row");return a(),T(y,{gutter:12},{default:u(()=>[g(h,{span:10,xs:{span:12}},{default:u(()=>[e("div",{class:"demo-color-box",style:n({background:s(b)})},[d(" Brand Color "),e("div",{class:"value",text:"xs"},l(s(b).toUpperCase()),1),e("div",{class:"bg-color-sub",style:n({background:s(b)})},[(a(!0),t(v,null,x(s(i),c=>(a(),t("div",{key:c,class:"bg-blue-sub-item cursor-pointer hover:shadow",style:n({width:`${100/6}%`,background:"var(--el-color-primary-"+c+")"}),onClick:o=>s(C)("primary-"+c)},null,12,["onClick"]))),128))],4)],4)]),_:1})]),_:1})}}});export{M as _,E as a,A as b};