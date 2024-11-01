import{p as _,r as f,q as u,o as v,c as g,y as o,v as e,W as s,a as m,M as b,l as O,u as C,A as J,_ as E}from"./framework.DwCbV5ML.js";import{G as z,H as D,I,J as P}from"./theme.Q658I92K.js";const R=_({__name:"align-center",setup(c){const t=f(!1);return(r,n)=>{const l=u("el-button"),d=u("el-dialog");return v(),g(b,null,[o(l,{plain:"",onClick:n[0]||(n[0]=a=>t.value=!0)},{default:e(()=>[s(" Click to open the Dialog ")]),_:1}),o(d,{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=a=>t.value=a),title:"Warning",width:"500","align-center":""},{footer:e(()=>[m("div",{class:"dialog-footer"},[o(l,{onClick:n[1]||(n[1]=a=>t.value=!1)},{default:e(()=>[s("Cancel")]),_:1}),o(l,{type:"primary",onClick:n[2]||(n[2]=a=>t.value=!1)},{default:e(()=>[s(" Confirm ")]),_:1})])]),default:e(()=>[m("span",null,"Open the dialog from the center from the screen")]),_:1},8,["modelValue"])],64)}}}),W=_({__name:"basic-usage",setup(c){const t=f(!1),r=n=>{z.confirm("Are you sure to close this dialog?").then(()=>{n()}).catch(()=>{})};return(n,l)=>{const d=u("el-button"),a=u("el-dialog");return v(),g(b,null,[o(d,{plain:"",onClick:l[0]||(l[0]=i=>t.value=!0)},{default:e(()=>[s(" Click to open the Dialog ")]),_:1}),o(a,{modelValue:t.value,"onUpdate:modelValue":l[3]||(l[3]=i=>t.value=i),title:"Tips",width:"500","before-close":r},{footer:e(()=>[m("div",{class:"dialog-footer"},[o(d,{onClick:l[1]||(l[1]=i=>t.value=!1)},{default:e(()=>[s("Cancel")]),_:1}),o(d,{type:"primary",onClick:l[2]||(l[2]=i=>t.value=!1)},{default:e(()=>[s(" Confirm ")]),_:1})])]),default:e(()=>[m("span",null,"This is a message")]),_:1},8,["modelValue"])],64)}}}),A=_({__name:"centered-content",setup(c){const t=f(!1);return(r,n)=>{const l=u("el-button"),d=u("el-dialog");return v(),g(b,null,[o(l,{plain:"",onClick:n[0]||(n[0]=a=>t.value=!0)},{default:e(()=>[s(" Click to open the Dialog ")]),_:1}),o(d,{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=a=>t.value=a),title:"Warning",width:"500",center:""},{footer:e(()=>[m("div",{class:"dialog-footer"},[o(l,{onClick:n[1]||(n[1]=a=>t.value=!1)},{default:e(()=>[s("Cancel")]),_:1}),o(l,{type:"primary",onClick:n[2]||(n[2]=a=>t.value=!1)},{default:e(()=>[s(" Confirm ")]),_:1})])]),default:e(()=>[m("span",null," It should be noted that the content will not be aligned in center by default ")]),_:1},8,["modelValue"])],64)}}}),w="140px",F=_({__name:"customization-content",setup(c){const t=f(!1),r=f(!1),n=O({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),l=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-03",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}];return(d,a)=>{const i=u("el-button"),V=u("el-table-column"),x=u("el-table"),k=u("el-dialog"),N=u("el-input"),$=u("el-form-item"),y=u("el-option"),U=u("el-select"),T=u("el-form");return v(),g(b,null,[o(i,{plain:"",onClick:a[0]||(a[0]=p=>t.value=!0)},{default:e(()=>[s(" Open a Table nested Dialog ")]),_:1}),o(i,{plain:"",onClick:a[1]||(a[1]=p=>r.value=!0)},{default:e(()=>[s(" Open a Form nested Dialog ")]),_:1}),o(k,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=p=>t.value=p),title:"Shipping address",width:"800"},{default:e(()=>[o(x,{data:l},{default:e(()=>[o(V,{property:"date",label:"Date",width:"150"}),o(V,{property:"name",label:"Name",width:"200"}),o(V,{property:"address",label:"Address"})]),_:1})]),_:1},8,["modelValue"]),o(k,{modelValue:r.value,"onUpdate:modelValue":a[7]||(a[7]=p=>r.value=p),title:"Shipping address",width:"500"},{footer:e(()=>[m("div",{class:"dialog-footer"},[o(i,{onClick:a[5]||(a[5]=p=>r.value=!1)},{default:e(()=>[s("Cancel")]),_:1}),o(i,{type:"primary",onClick:a[6]||(a[6]=p=>r.value=!1)},{default:e(()=>[s(" Confirm ")]),_:1})])]),default:e(()=>[o(T,{model:n},{default:e(()=>[o($,{label:"Promotion name","label-width":w},{default:e(()=>[o(N,{modelValue:n.name,"onUpdate:modelValue":a[3]||(a[3]=p=>n.name=p),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o($,{label:"Zones","label-width":w},{default:e(()=>[o(U,{modelValue:n.region,"onUpdate:modelValue":a[4]||(a[4]=p=>n.region=p),placeholder:"Please select a zone"},{default:e(()=>[o(y,{label:"Zone No.1",value:"shanghai"}),o(y,{label:"Zone No.2",value:"beijing"})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}}}),S=_({__name:"customization-header",setup(c){const t=f(!1);return(r,n)=>{const l=u("el-icon");return v(),g(b,null,[o(C(D),{plain:"",onClick:n[0]||(n[0]=d=>t.value=!0)},{default:e(()=>[s(" Open Dialog with customized header ")]),_:1}),o(C(P),{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=d=>t.value=d),"show-close":!1,width:"500"},{header:e(({close:d,titleId:a,titleClass:i})=>[m("div",{class:"my-header"},[m("h4",{id:a,class:J(i)},"This is a custom header!",10,["id"]),o(C(D),{type:"danger",onClick:d},{default:e(()=>[o(l,{class:"el-icon--left"},{default:e(()=>[o(C(I))]),_:1}),s(" Close ")]),_:2},1032,["onClick"])])]),default:e(()=>[s(" This is dialog content. ")]),_:1},8,["modelValue"])],64)}}}),Z=E(S,[["__scopeId","data-v-abaffde4"]]),H=_({__name:"destroy-on-close",setup(c){const t=f(!1);return(r,n)=>{const l=u("el-button"),d=u("el-dialog");return v(),g(b,null,[o(l,{plain:"",onClick:n[0]||(n[0]=a=>t.value=!0)},{default:e(()=>[s(" Click to open Dialog ")]),_:1}),o(d,{modelValue:t.value,"onUpdate:modelValue":n[3]||(n[3]=a=>t.value=a),title:"Notice",width:"500","destroy-on-close":"",center:""},{footer:e(()=>[m("div",{class:"dialog-footer"},[o(l,{onClick:n[1]||(n[1]=a=>t.value=!1)},{default:e(()=>[s("Cancel")]),_:1}),o(l,{type:"primary",onClick:n[2]||(n[2]=a=>t.value=!1)},{default:e(()=>[s(" Confirm ")]),_:1})])]),default:e(()=>[m("span",null," Notice: before dialog gets opened for the first time this node and the one bellow will not be rendered "),m("div",null,[m("strong",null,"Extra content (Not rendered)")])]),_:1},8,["modelValue"])],64)}}}),M=_({__name:"draggable-dialog",setup(c){const t=f(!1),r=f(!1);return(n,l)=>{const d=u("el-button"),a=u("el-dialog");return v(),g(b,null,[o(d,{plain:"",onClick:l[0]||(l[0]=i=>t.value=!0)},{default:e(()=>[s(" Open a draggable Dialog ")]),_:1}),o(d,{plain:"",onClick:l[1]||(l[1]=i=>r.value=!0)},{default:e(()=>[s(" Open a overflow draggable Dialog ")]),_:1}),o(a,{modelValue:t.value,"onUpdate:modelValue":l[4]||(l[4]=i=>t.value=i),title:"Tips",width:"500",draggable:""},{footer:e(()=>[m("div",{class:"dialog-footer"},[o(d,{onClick:l[2]||(l[2]=i=>t.value=!1)},{default:e(()=>[s("Cancel")]),_:1}),o(d,{type:"primary",onClick:l[3]||(l[3]=i=>t.value=!1)},{default:e(()=>[s(" Confirm ")]),_:1})])]),default:e(()=>[m("span",null,"It's a draggable Dialog")]),_:1},8,["modelValue"]),o(a,{modelValue:r.value,"onUpdate:modelValue":l[7]||(l[7]=i=>r.value=i),title:"Tips",width:"500",draggable:"",overflow:""},{footer:e(()=>[m("div",{class:"dialog-footer"},[o(d,{onClick:l[5]||(l[5]=i=>r.value=!1)},{default:e(()=>[s("Cancel")]),_:1}),o(d,{type:"primary",onClick:l[6]||(l[6]=i=>r.value=!1)},{default:e(()=>[s(" Confirm ")]),_:1})])]),default:e(()=>[m("span",null,"It's a overflow draggable Dialog")]),_:1},8,["modelValue"])],64)}}}),q=_({__name:"nested-dialog",setup(c){const t=f(!1),r=f(!1);return(n,l)=>{const d=u("el-button"),a=u("el-dialog");return v(),g(b,null,[o(d,{plain:"",onClick:l[0]||(l[0]=i=>t.value=!0)},{default:e(()=>[s(" Open the outer Dialog ")]),_:1}),o(a,{modelValue:t.value,"onUpdate:modelValue":l[4]||(l[4]=i=>t.value=i),title:"Outer Dialog",width:"800"},{footer:e(()=>[m("div",{class:"dialog-footer"},[o(d,{onClick:l[2]||(l[2]=i=>t.value=!1)},{default:e(()=>[s("Cancel")]),_:1}),o(d,{type:"primary",onClick:l[3]||(l[3]=i=>r.value=!0)},{default:e(()=>[s(" Open the inner Dialog ")]),_:1})])]),default:e(()=>[m("span",null,"This is the outer Dialog"),o(a,{modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=i=>r.value=i),width:"500",title:"Inner Dialog","append-to-body":""},{default:e(()=>[m("span",null,"This is the inner Dialog")]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])],64)}}});export{Z as E,W as _,F as a,q as b,A as c,R as d,H as e,M as f};