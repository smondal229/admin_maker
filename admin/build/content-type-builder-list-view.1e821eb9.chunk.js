"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[5905],{69073:function(G,P,n){n.r(P),n.d(P,{default:function(){return lt}});var e=n(32735),r=n(24989),i=n(19406),j=n(66456),B=n(68625),K=n(29439),J=n(82055),m=n(87933),L=n(41415),S=n(17e3),f=n(72850),$=n(33795),T=n.n($),F=n(23973),s=n.n(F),b=n(89793),h=n.n(b),g=n(23940),Z=n.n(g),R=n(67879),N=n(53038),ee=n(60216),o=n.n(ee),Y=n(56755),fe=n(33827),he=n(94547),te=n(19786),D=n(49372),Pe=n(73269),ye=n(32237),X=n(198),M=n(8471),C=n(92318),je=n(35331);const we=(0,M.ZP)(m.k)`
  border-radius: 50%;
  color: ${({theme:t,isActive:a})=>a?t.colors.primary600:t.colors.neutral600};
  height: ${({theme:t})=>t.spaces[8]};
  width: ${({theme:t})=>t.spaces[8]};

  svg {
    height: ${({theme:t})=>t.spaces[5]};
    width: ${({theme:t})=>t.spaces[5]};
  }
`;function re({isActive:t}){return e.createElement(we,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",isActive:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}re.defaultProps={isActive:!1},re.propTypes={isActive:o().bool};const ve=(0,M.ZP)(f.x)`
  position: absolute;
  display: none;
  top: 5px;
  right: ${(0,r.Q1)(8)};

  svg {
    width: ${(0,r.Q1)(10)};
    height: ${(0,r.Q1)(10)};

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Be=(0,M.ZP)(m.k)`
  width: ${(0,r.Q1)(140)};
  height: ${(0,r.Q1)(80)};
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${ve} {
      display: block;
    }

    ${D.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function ie({component:t,dzName:a,index:l,isActive:d,isInDevelopmentMode:u,onClick:c}){const{modifiedData:v,removeComponentFromDynamicZone:I}=(0,X.Z)(),{schema:{displayName:w}}=T()(v,["components",t],{schema:{}}),A=E=>{E.stopPropagation(),I(a,l)};return e.createElement(Be,{as:"button",alignItems:"center",direction:"column",className:d?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,type:"button",onClick:c},e.createElement(re,{isActive:d}),e.createElement(f.x,{marginTop:1,maxWidth:"100%"},e.createElement(D.Z,{variant:"pi",fontWeight:"bold",ellipsis:!0},w)),u&&e.createElement(ve,{as:"button",onClick:A,type:"button"},e.createElement(je.Z,null)))}ie.defaultProps={component:null,isActive:!1,isInDevelopmentMode:!1,onClick(){}},ie.propTypes={component:o().string,dzName:o().string.isRequired,index:o().number.isRequired,isActive:o().bool,isInDevelopmentMode:o().bool,onClick:o().func};var Ie=ie,Ee=M.ZP.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 ${(0,r.Q1)(20)};
      position: relative;

      &::before {
        content: '';
        width: ${(0,r.Q1)(4)};
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 1.625rem;
        border-radius: 4px;

        ${({isFromDynamicZone:t,isChildOfDynamicZone:a,theme:l})=>a?`background-color: ${l.colors.primary200};`:t?`background-color: ${l.colors.primary200};`:`background: ${l.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`;function le({customRowComponent:t,component:a,isFromDynamicZone:l,isNestedInDZComponent:d,firstLoopComponentUid:u}){const{modifiedData:c}=(0,X.Z)(),{schema:{attributes:v}}=T()(c,["components",a],{schema:{attributes:[]}});return e.createElement(Ee,{isChildOfDynamicZone:l,className:"component-row"},e.createElement("td",{colSpan:12},e.createElement(Ce,{customRowComponent:t,items:v,targetUid:a,firstLoopComponentUid:u||a,editTarget:"components",isFromDynamicZone:l,isNestedInDZComponent:d,isSub:!0,secondLoopComponentUid:u?a:null})))}le.defaultProps={component:null,customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1},le.propTypes={component:o().string,customRowComponent:o().func,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool};var xe=le;const ke=(0,M.ZP)(i.Z)`
  width: ${(0,r.Q1)(32)};
  height: ${(0,r.Q1)(32)};
  padding: ${(0,r.Q1)(9)};
  border-radius: ${(0,r.Q1)(64)};
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Oe=(0,M.ZP)(f.x)`
  height: ${(0,r.Q1)(90)};
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Fe=(0,M.ZP)(m.k)`
  width: 100%;
  overflow-x: auto;
`,We=(0,M.ZP)(f.x)`
  padding-top: ${(0,r.Q1)(90)};
`,Ue=(0,M.ZP)(m.k)`
  flex-shrink: 0;
  width: ${(0,r.Q1)(140)};
  height: ${(0,r.Q1)(80)};
  justify-content: center;
  align-items: center;
`;function se({customRowComponent:t,components:a,addComponent:l,name:d,targetUid:u}){const{isInDevelopmentMode:c}=(0,X.Z)(),[v,I]=(0,e.useState)(0),{formatMessage:w}=(0,R.Z)(),A=p=>{v!==p&&I(p)},E=()=>{l(d)};return e.createElement(Ee,{className:"dynamiczone-row",isFromDynamicZone:!0},e.createElement("td",{colSpan:12},e.createElement(Oe,{paddingLeft:8},e.createElement(Fe,{gap:2},c&&e.createElement("button",{type:"button",onClick:E},e.createElement(Ue,{direction:"column",alignItems:"stretch",gap:1},e.createElement(ke,null),e.createElement(D.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600"},w({id:(0,C.Z)("button.component.add"),formatMessage:"Add a component"})))),a.map((p,y)=>e.createElement(Ie,{key:p,dzName:d,index:y,component:p,isActive:v===y,isInDevelopmentMode:c,onClick:()=>A(y)})))),e.createElement(We,null,a.map((p,y)=>{const x={customRowComponent:t,component:p};return e.createElement(f.x,{tabId:`${y}`,key:p,style:{display:v===y?"block":"none"}},e.createElement("table",null,e.createElement("tbody",null,e.createElement(xe,{...x,isFromDynamicZone:!0,targetUid:u,key:p}))))}))))}se.defaultProps={addComponent(){},components:[],customRowComponent:null,name:null},se.propTypes={addComponent:o().func,components:o().instanceOf(Array),customRowComponent:o().func,name:o().string,targetUid:o().string.isRequired};var Se=se,Ne=(0,M.ZP)(f.x)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`;const Ve=(0,M.ZP)(f.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:t,color:a})=>t.colors[`${a}600`]};
  }
`,ze=(0,M.ZP)(f.x)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.25rem;
`,be=({children:t,icon:a,color:l,...d})=>e.createElement(ze,{paddingBottom:4,paddingTop:4,as:"button",type:"button",...d},e.createElement(m.k,null,e.createElement(Ve,{color:l,"aria-hidden":!0,background:`${l}200`},a),e.createElement(f.x,{paddingLeft:3},e.createElement(D.Z,{variant:"pi",fontWeight:"bold",textColor:`${l}600`},t))));be.propTypes={color:o().string.isRequired,children:o().string.isRequired,icon:o().node.isRequired};var Ke=be;function ce({addComponentToDZ:t,customRowComponent:a,editTarget:l,firstLoopComponentUid:d,isFromDynamicZone:u,isMain:c,isNestedInDZComponent:v,isSub:I,items:w,secondLoopComponentUid:A,targetUid:E}){const{formatMessage:p}=(0,R.Z)(),{trackUsage:y}=(0,r.rS)(),{isInDevelopmentMode:x,modifiedData:Q,isInContentTypeView:W}=(0,X.Z)(),{onOpenModalAddField:V}=(0,ye.Z)(),k=()=>{y("hasClickedCTBAddFieldBanner"),V({forTarget:l,targetUid:E})};return E?w.length===0&&c?e.createElement(Y.i,{colCount:2,rowCount:2},e.createElement(fe.h,null,e.createElement(he.Tr,null,e.createElement(te.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.name",defaultMessage:"Name"}))),e.createElement(te.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.type",defaultMessage:"Type"}))))),e.createElement(r.c4,{action:e.createElement(L.z,{onClick:k,size:"L",startIcon:e.createElement(i.Z,null),variant:"secondary"},p({id:(0,C.Z)("table.button.no-fields"),defaultMessage:"Add new field"})),colSpan:2,content:W?{id:(0,C.Z)("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:(0,C.Z)("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}})):e.createElement(Ne,null,e.createElement(f.x,{paddingLeft:6,paddingRight:c?6:0,...c&&{style:{overflowX:"auto"}}},e.createElement("table",null,c&&e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.name",defaultMessage:"Name"}))),e.createElement("th",{colSpan:"2"},e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.type",defaultMessage:"Type"}))))),e.createElement("tbody",null,w.map(U=>{const{type:H}=U,q=a;return e.createElement(e.Fragment,{key:U.name},e.createElement(q,{...U,isNestedInDZComponent:v,targetUid:E,editTarget:l,firstLoopComponentUid:d,isFromDynamicZone:u,secondLoopComponentUid:A}),H==="component"&&e.createElement(xe,{...U,customRowComponent:a,targetUid:E,isNestedInDZComponent:u,editTarget:l,firstLoopComponentUid:d}),H==="dynamiczone"&&e.createElement(Se,{...U,customRowComponent:a,addComponent:t,targetUid:E}))})))),c&&x&&e.createElement(Pe.c,{icon:e.createElement(i.Z,null),onClick:k},p({id:(0,C.Z)(`form.button.add.field.to.${Q.contentType?Q.contentType.schema.kind:l||"collectionType"}`),defaultMessage:"Add another field"})),I&&x&&e.createElement(Ke,{icon:e.createElement(i.Z,null),onClick:k,color:u?"primary":"neutral"},p({id:(0,C.Z)("form.button.add.field.to.component"),defaultMessage:"Add another field"}))):e.createElement(Y.i,{colCount:2,rowCount:2},e.createElement(fe.h,null,e.createElement(he.Tr,null,e.createElement(te.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.name",defaultMessage:"Name"}))),e.createElement(te.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},p({id:"global.type",defaultMessage:"Type"}))))),e.createElement(r.c4,{colSpan:2,content:{id:(0,C.Z)("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}}))}ce.defaultProps={addComponentToDZ(){},customRowComponent:null,firstLoopComponentUid:null,isFromDynamicZone:!1,isNestedInDZComponent:!1,isMain:!1,isSub:!1,items:[],secondLoopComponentUid:null,targetUid:null},ce.propTypes={addComponentToDZ:o().func,customRowComponent:o().func,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,isNestedInDZComponent:o().bool,isMain:o().bool,items:o().instanceOf(Array),secondLoopComponentUid:o().string,targetUid:o().string,isSub:o().bool};var Ce=ce,Te=n(50563),Qe=n(4038),Ze=n(74512);const He=t=>(0,Ze.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:(0,Ze.jsx)("path",{fill:"#8E8EA9",d:"M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0v1Zm-2 0V9A5 5 0 0 0 7 9v1h10Zm-6 4v4h2v-4h-2Z"})}),Xe=He,Ge=(0,M.ZP)(f.x)`
  position: absolute;
  left: -1.125rem;
  top: 0px;

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:t,color:a})=>t.colors[a]};
    display: block;
  }
`,Je=M.ZP.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:a})=>t.colors[a]};
  }
`,Me=t=>e.createElement(Ge,null,e.createElement(Je,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},e.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})));Me.propTypes={color:o().string.isRequired};var Ye=Me;const de=({content:t})=>Z()(t);de.defaultProps={content:null},de.propTypes={content:o().string};var qe=de,_e=(0,M.ZP)(f.x)`
  position: relative;
`,et=n(25747);const pe=({type:t,customField:a,repeatable:l})=>{const{formatMessage:d}=(0,R.Z)();let u=t;return["integer","biginteger","float","decimal"].includes(t)?u="number":["string"].includes(t)&&(u="text"),a?e.createElement(D.Z,null,d({id:(0,C.Z)("attribute.customField"),defaultMessage:"Custom field"})):e.createElement(D.Z,null,d({id:(0,C.Z)(`attribute.${u}`),defaultMessage:t}),"\xA0",l&&d({id:(0,C.Z)("component.repeatable"),defaultMessage:"(repeatable)"}))};pe.defaultProps={customField:null,repeatable:!1},pe.propTypes={type:o().string.isRequired,customField:o().string,repeatable:o().bool};var tt=pe;function me({configurable:t,customField:a,editTarget:l,firstLoopComponentUid:d,isFromDynamicZone:u,name:c,onClick:v,relation:I,repeatable:w,secondLoopComponentUid:A,target:E,targetUid:p,type:y}){const{contentTypes:x,isInDevelopmentMode:Q,removeAttribute:W}=(0,X.Z)(),{formatMessage:V}=(0,R.Z)(),k=y==="relation"&&I.includes("morph"),U=["integer","biginteger","float","decimal"].includes(y)?"number":y,H=T()(x,[E],{}),q=T()(H,["schema","displayName"],""),_=T()(H,"plugin"),ge=E?"relation":U,ne=()=>{k||t!==!1&&v(l,A||d||p,c,y,a)};let z;return A&&d?z=2:d?z=1:z=0,e.createElement(_e,{as:"tr",...(0,r.X7)({fn:ne,condition:Q&&t&&!k})},e.createElement("td",{style:{position:"relative"}},z!==0&&e.createElement(Ye,{color:u?"primary200":"neutral150"}),e.createElement(m.k,{paddingLeft:2,gap:4},e.createElement(et.Z,{type:ge,customField:a}),e.createElement(D.Z,{fontWeight:"bold"},c))),e.createElement("td",null,E?e.createElement(D.Z,null,V({id:(0,C.Z)(`modelPage.attribute.${k?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"}),"\xA0",e.createElement("span",{style:{fontStyle:"italic"}},e.createElement(qe,{content:q}),"\xA0",_&&`(${V({id:(0,C.Z)("from"),defaultMessage:"from"})}: ${_})`)):e.createElement(tt,{type:y,customField:a,repeatable:w})),e.createElement("td",null,Q?e.createElement(m.k,{justifyContent:"flex-end",...r.UW},t?e.createElement(m.k,{gap:1},!k&&e.createElement(Te.h,{onClick:ne,label:`${V({id:"app.utils.edit",defaultMessage:"Edit"})} ${c}`,noBorder:!0,icon:e.createElement(B.Z,null)}),e.createElement(Te.h,{onClick:oe=>{oe.stopPropagation(),W(l,c,A||d||"")},label:`${V({id:"global.delete",defaultMessage:"Delete"})} ${c}`,noBorder:!0,icon:e.createElement(Qe.Z,null)})):e.createElement(Xe,null)):e.createElement(f.x,{height:(0,r.Q1)(32)})))}me.defaultProps={configurable:!0,customField:null,firstLoopComponentUid:null,isFromDynamicZone:!1,onClick(){},relation:"",repeatable:!1,secondLoopComponentUid:null,target:null,targetUid:null,type:null},me.propTypes={configurable:o().bool,customField:o().string,editTarget:o().string.isRequired,firstLoopComponentUid:o().string,isFromDynamicZone:o().bool,name:o().string.isRequired,onClick:o().func,relation:o().string,repeatable:o().bool,secondLoopComponentUid:o().string,target:o().string,targetUid:o().string,type:o().string};var nt=(0,e.memo)(me),ot=t=>{let a;switch(t){case"date":case"datetime":case"time":case"timestamp":a="date";break;case"integer":case"biginteger":case"decimal":case"float":a="number";break;case"string":case"text":a="text";break;case"":a="relation";break;default:a=t}return a},at=n(2669);const rt={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},ue=({disabled:t,isTemporary:a,isInContentTypeView:l,contentTypeKind:d,targetUid:u})=>{const{formatMessage:c}=(0,R.Z)(),{push:v}=(0,N.k6)(),{collectionTypesConfigurations:I,componentsConfigurations:w,singleTypesConfigurations:A}=rt,E=c({id:"content-type-builder.form.button.configure-view"});let p=I;const y=()=>(a||v(l?`/content-manager/collectionType/${u}/configurations/edit`:`/content-manager/components/${u}/configurations/edit`),!1);return l&&d==="singleType"&&(p=A),l||(p=w),e.createElement(r.jW,{permissions:p},e.createElement(L.z,{startIcon:e.createElement(at.Z,null),variant:"tertiary",onClick:y,disabled:a||t},E))};ue.defaultProps={contentTypeKind:"collectionType",isInContentTypeView:!0,isTemporary:!1,targetUid:""},ue.propTypes={disabled:o().bool.isRequired,contentTypeKind:o().string,isInContentTypeView:o().bool,isTemporary:o().bool,targetUid:o().string};var it=(0,e.memo)(ue),lt=()=>{const{initialData:t,modifiedData:a,isInDevelopmentMode:l,isInContentTypeView:d,submitData:u}=(0,X.Z)(),{formatMessage:c}=(0,R.Z)(),{trackUsage:v}=(0,r.rS)(),I=(0,N.$B)("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:w,onOpenModalAddField:A,onOpenModalEditField:E,onOpenModalEditSchema:p,onOpenModalEditCustomField:y}=(0,ye.Z)(),x=d?"contentType":"component",Q=[x,"schema","attributes"],W=T()(a,[x,"uid"]),V=T()(a,[x,"isTemporary"],!1),k=T()(a,[x,"schema","kind"],null),U=T()(a,Q,[]),H=s()(t,[x,"plugin"]),q=!h()(a,t),_=d?"contentType":"component",ge=O=>{w({dynamicZoneTarget:O,targetUid:W})},ne=async(O,$e,De,Le,Re)=>{const Ae=ot(Le);Re?y({forTarget:O,targetUid:$e,attributeName:De,attributeType:Ae,customFieldUid:Re}):E({forTarget:O,targetUid:$e,attributeName:De,attributeType:Ae,step:Le==="component"?"2":null})};let z=T()(a,[x,"schema","displayName"],"");const oe=T()(a,[x,"schema","kind"],""),ae=I?.params.currentUID==="create-content-type";!z&&ae&&(z=c({id:(0,C.Z)("button.model.create"),defaultMessage:"Create new collection type"}));const st=()=>{const O=oe||x;O==="collectionType"&&v("willEditNameOfContentType"),O==="singleType"&&v("willEditNameOfSingleType"),p({modalType:x,forTarget:x,targetUid:W,kind:O})};return e.createElement(e.Fragment,null,e.createElement(N.NL,{message:c({id:(0,C.Z)("prompt.unsaved")}),when:q}),e.createElement(J.T,{id:"title",primaryAction:l&&e.createElement(m.k,{gap:2},!ae&&e.createElement(L.z,{startIcon:e.createElement(i.Z,null),variant:"secondary",onClick:()=>{A({forTarget:_,targetUid:W})}},c({id:(0,C.Z)("button.attributes.add.another")})),e.createElement(L.z,{startIcon:e.createElement(j.Z,null),onClick:()=>u(),type:"submit",disabled:h()(a,t)},c({id:"global.save",defaultMessage:"Save"}))),secondaryAction:l&&!H&&!ae&&e.createElement(L.z,{startIcon:e.createElement(B.Z,null),variant:"tertiary",onClick:st},c({id:"app.utils.edit",defaultMessage:"Edit"})),title:Z()(z),subtitle:c({id:(0,C.Z)("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.createElement(r.rU,{startIcon:e.createElement(K.Z,null),to:"/plugins/content-type-builder/"},c({id:"global.back",defaultMessage:"Back"}))}),e.createElement(S.D,null,e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(m.k,{gap:2},e.createElement(it,{key:"link-to-cm-settings-view",targetUid:W,isTemporary:V,isInContentTypeView:d,contentTypeKind:k,disabled:ae}))),e.createElement(f.x,{background:"neutral0",shadow:"filterShadow",hasRadius:!0},e.createElement(Ce,{items:U,customRowComponent:O=>e.createElement(nt,{...O,onClick:ne}),addComponentToDZ:ge,targetUid:W,editTarget:_,isMain:!0})))))}},17e3:function(G,P,n){n.d(P,{D:function(){return B}});var e=n(74512),r=n(32735),i=n(60216),j=n(72850);const B=({children:K})=>(0,e.jsx)(j.x,{paddingLeft:10,paddingRight:10,children:K});B.propTypes={children:i.node.isRequired}},82055:function(G,P,n){n.d(P,{T:function(){return $}});var e=n(74512),r=n(32735),i=n(60216),j=n(8471);const B=s=>{const b=(0,r.useRef)(null),[h,g]=(0,r.useState)(!0),Z=([R])=>{g(R.isIntersecting)};return(0,r.useEffect)(()=>{const R=b.current,N=new IntersectionObserver(Z,s);return R&&N.observe(b.current),()=>{R&&N.disconnect()}},[b,s]),[b,h]};var K=n(63060);const J=(s,b)=>{const h=(0,K.W)(b);(0,r.useLayoutEffect)(()=>{const g=new ResizeObserver(h);return Array.isArray(s)?s.forEach(Z=>{Z.current&&g.observe(Z.current)}):s.current&&g.observe(s.current),()=>{g.disconnect()}},[s,h])};var m=n(72850),L=n(87933),S=n(49372);const f=()=>{const s=(0,r.useRef)(null),[b,h]=(0,r.useState)(null),[g,Z]=B({root:null,rootMargin:"0px",threshold:0});return J(g,()=>{g.current&&h(g.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{s.current&&h(s.current.getBoundingClientRect())},[s]),{containerRef:g,isVisible:Z,baseHeaderLayoutRef:s,headerSize:b}},$=s=>{const{containerRef:b,isVisible:h,baseHeaderLayoutRef:g,headerSize:Z}=f();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:Z?.height},ref:b,children:h&&(0,e.jsx)(F,{ref:g,...s})}),!h&&(0,e.jsx)(F,{...s,sticky:!0,width:Z?.width})]})};$.displayName="HeaderLayout";const T=(0,j.ZP)(m.x)`
  width: ${s=>s.width}px;
  z-index: ${({theme:s})=>s.zIndices[1]};
`,F=r.forwardRef(({navigationAction:s,primaryAction:b,secondaryAction:h,subtitle:g,title:Z,sticky:R,width:N,...ee},o)=>{const Y=typeof g=="string";return R?(0,e.jsx)(T,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:N,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(L.k,{justifyContent:"space-between",children:[(0,e.jsxs)(L.k,{children:[s&&(0,e.jsx)(m.x,{paddingRight:3,children:s}),(0,e.jsxs)(m.x,{children:[(0,e.jsx)(S.Z,{variant:"beta",as:"h1",...ee,children:Z}),Y?(0,e.jsx)(S.Z,{variant:"pi",textColor:"neutral600",children:g}):g]}),h?(0,e.jsx)(m.x,{paddingLeft:4,children:h}):null]}),(0,e.jsx)(L.k,{children:b?(0,e.jsx)(m.x,{paddingLeft:2,children:b}):void 0})]})}):(0,e.jsxs)(m.x,{ref:o,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:s?6:8,background:"neutral100","data-strapi-header":!0,children:[s?(0,e.jsx)(m.x,{paddingBottom:2,children:s}):null,(0,e.jsxs)(L.k,{justifyContent:"space-between",children:[(0,e.jsxs)(L.k,{minWidth:0,children:[(0,e.jsx)(S.Z,{as:"h1",variant:"alpha",...ee,children:Z}),h?(0,e.jsx)(m.x,{paddingLeft:4,children:h}):null]}),b]}),Y?(0,e.jsx)(S.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:g}):g]})});F.displayName="BaseHeaderLayout",F.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},F.propTypes={navigationAction:i.node,primaryAction:i.node,secondaryAction:i.node,sticky:i.bool,subtitle:i.oneOfType([i.string,i.node]),title:i.string.isRequired,width:i.number},$.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},$.propTypes={navigationAction:i.node,primaryAction:i.node,secondaryAction:i.node,subtitle:i.oneOfType([i.string,i.node]),title:i.string.isRequired}},73269:function(G,P,n){n.d(P,{c:function(){return f}});var e=n(74512),r=n(32735),i=n(60216),j=n(8471),B=n(72850),K=n(9026),J=n(87933),m=n(49372);const L=(0,j.ZP)(B.x)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:$})=>$.colors.primary600};
  }
`,S=(0,j.ZP)(B.x)`
  border-radius: 0 0 ${({theme:$})=>$.borderRadius} ${({theme:$})=>$.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,f=({children:$,icon:T,...F})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(K.i,{}),(0,e.jsx)(S,{as:"button",background:"primary100",padding:5,...F,children:(0,e.jsxs)(J.k,{children:[(0,e.jsx)(L,{"aria-hidden":!0,background:"primary200",children:T}),(0,e.jsx)(B.x,{paddingLeft:3,children:(0,e.jsx)(m.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:$})})]})})]});f.propTypes={children:i.string.isRequired,icon:i.node.isRequired}},29439:function(G,P,n){n.d(P,{Z:function(){return i}});var e=n(74512);const r=j=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...j,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),i=r},2669:function(G,P,n){n.d(P,{Z:function(){return i}});var e=n(74512);const r=j=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...j,children:(0,e.jsx)("path",{fill:"#212134",d:"M4.8.2c0-.11.09-.2.2-.2h18.8c.11 0 .2.09.2.2v4.4a.2.2 0 0 1-.2.2H5a.2.2 0 0 1-.2-.2V.2ZM0 9.8c0-.11.09-.2.2-.2H19c.11 0 .2.09.2.2v4.4a.2.2 0 0 1-.2.2H.2a.2.2 0 0 1-.2-.2V9.8ZM5 19.2a.2.2 0 0 0-.2.2v4.4c0 .11.09.2.2.2h18.8a.2.2 0 0 0 .2-.2v-4.4a.2.2 0 0 0-.2-.2H5Z"})}),i=r}}]);
