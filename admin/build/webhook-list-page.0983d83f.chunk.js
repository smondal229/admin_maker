"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[4121],{74767:function(H,L,t){t.r(L),t.d(L,{default:function(){return be}});var e=t(32735),a=t(24989),f=t(83983),b=t(53038),T=t(67879),y=t(94638),p=t(96709),M=t(27649),O=t(82055),E=t(99223),d=t(49372),h=t(41415),j=t(17e3),W=t(72850),ne=t(56755),oe=t(73269),se=t(33827),G=t(94547),m=t(19786),N=t(82884),le=t(3685),ae=t(35658),R=t(87933),C=t(74512),x=t(60216),V=t(8471);const $=V.ZP.div`
  background: ${({theme:o})=>o.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:o})=>o?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:o})=>o.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:o})=>o.spaces[1]};
    top: ${({theme:o})=>o.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,ie=V.ZP.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${$} {
    background: ${({theme:o})=>o.colors.success500};
  }

  &[aria-checked='true'] ${$}:before {
    transform: translateX(1rem);
  }
`,P=e.forwardRef(({label:o,onChange:i,onLabel:l,offLabel:c,selected:D,visibleLabels:v,...u},s)=>(0,C.jsx)(ie,{ref:s,role:"switch","aria-checked":D,"aria-label":o,onClick:i,visibleLabels:v,type:"button",...u,children:(0,C.jsxs)(R.k,{children:[(0,C.jsxs)($,{children:[(0,C.jsx)("span",{children:l}),(0,C.jsx)("span",{children:c})]}),v&&(0,C.jsx)(W.x,{as:"span","aria-hidden":!0,paddingLeft:2,color:D?"success600":"danger600",children:D?l:c})]})}));P.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},P.propTypes={label:x.string.isRequired,offLabel:x.string,onChange:x.func.isRequired,onLabel:x.string,selected:x.bool.isRequired,visibleLabels:x.bool},P.displayName="Switch";var F=t(50563),re=t(9695),K=t(19406),z=t(4038),de=t(68625),ce=t(54725),Ee=t(97889),he=t(3040),me=t.n(he);const ue={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0};var ge=(o,i)=>(0,Ee.ZP)(o,l=>{switch(i.type){case"GET_DATA_SUCCEEDED":{l.webhooks=i.data,l.loadingWebhooks=!1;break}case"TOGGLE_LOADING":{l.loadingWebhooks=!o.loadingWebhooks;break}case"SET_WEBHOOK_ENABLED":{me()(l,["webhooks",...i.keys],i.value);break}case"SET_WEBHOOK_TO_DELETE":{l.webhookToDelete=i.id;break}case"SET_WEBHOOKS_TO_DELETE":{i.value?l.webhooksToDelete.push(i.id):l.webhooksToDelete=o.webhooksToDelete.filter(c=>c!==i.id);break}case"SET_ALL_WEBHOOKS_TO_DELETE":{o.webhooksToDelete.length===0?l.webhooksToDelete=o.webhooks.map(c=>c.id):l.webhooksToDelete=[];break}case"WEBHOOKS_DELETED":{l.webhooks=o.webhooks.filter(c=>!o.webhooksToDelete.includes(c.id)),l.webhooksToDelete=[];break}case"WEBHOOK_DELETED":{l.webhooks=o.webhooks.filter((c,D)=>D!==i.index),l.webhookToDelete=null;break}default:return l}}),fe=()=>{const{isLoading:o,allowedActions:{canCreate:i,canRead:l,canUpdate:c,canDelete:D}}=(0,a.ss)(f.Z.settings.webhooks),v=(0,a.lm)(),u=(0,e.useRef)(!0),{formatMessage:s}=(0,T.Z)(),[Te,B]=(0,e.useState)(!1),[{webhooks:A,webhooksToDelete:Z,webhookToDelete:I,loadingWebhooks:U},g]=(0,e.useReducer)(ge,ue),{notifyStatus:Q}=(0,y.G)(),{get:X,del:De,post:ve,put:Oe}=(0,a.kY)();(0,a.go)();const{push:Le}=(0,b.k6)(),{pathname:Y}=(0,b.TH)(),w=A.length,k=Z.length,J=n=>A.findIndex(r=>r.id===n);(0,e.useEffect)(()=>(u.current=!0,()=>{u.current=!1}),[]),(0,e.useEffect)(()=>{l&&(async()=>{try{const{data:{data:r}}=await X("/admin/webhooks");u.current&&(g({type:"GET_DATA_SUCCEEDED",data:r}),Q("webhooks have been loaded"))}catch(r){console.log(r),u.current&&(r.code!==20&&v({type:"warning",message:{id:"notification.error"}}),g({type:"TOGGLE_LOADING"}))}})()},[l,X,Q,v]);const ye=()=>{B(n=>!n)},pe=()=>{I?Ce():xe()},Ce=async()=>{try{await De(`/admin/webhooks/${I}`),g({type:"WEBHOOK_DELETED",index:J(I)})}catch(n){n.code!==20&&v({type:"warning",message:{id:"notification.error"}})}B(!1)},xe=async()=>{const n={ids:Z};try{await ve("/admin/webhooks/batch-delete",n),u.current&&g({type:"WEBHOOKS_DELETED"})}catch(r){u.current&&r.code!==20&&v({type:"warning",message:{id:"notification.error"}})}B(!1)},q=n=>{B(!0),n!=="all"&&g({type:"SET_WEBHOOK_TO_DELETE",id:n})},Me=async(n,r)=>{const _=J(r),Pe=A[_],ee=[_,"isEnabled"],te={...Pe,isEnabled:n};delete te.id;try{g({type:"SET_WEBHOOK_ENABLED",keys:ee,value:n}),await Oe(`/admin/webhooks/${r}`,te)}catch(Be){u.current&&(g({type:"SET_WEBHOOK_ENABLED",keys:ee,value:!n}),Be.code!==20&&v({type:"warning",message:{id:"notification.error"}}))}},ke=()=>{g({type:"SET_ALL_WEBHOOKS_TO_DELETE"})},We=(n,r)=>{g({type:"SET_WEBHOOKS_TO_DELETE",value:n,id:r})},S=n=>{Le(`${Y}/${n}`)};return e.createElement(p.A,null,e.createElement(a.SL,{name:"Webhooks"}),e.createElement(M.o,{"aria-busy":o||U},e.createElement(O.T,{title:s({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:s({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:i&&!U&&e.createElement(a.Qj,{startIcon:e.createElement(K.Z,null),variant:"default",to:`${Y}/create`,size:"S"},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),k>0&&D&&e.createElement(E.Z,{startActions:e.createElement(e.Fragment,null,e.createElement(d.Z,{variant:"epsilon",textColor:"neutral600"},s({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:k})),e.createElement(h.z,{onClick:()=>q("all"),startIcon:e.createElement(z.Z,null),size:"L",variant:"danger-light"},s({id:"global.delete",defaultMessage:"Delete"})))}),e.createElement(j.D,null,o||U?e.createElement(W.x,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},e.createElement(a.dO,null)):w>0?e.createElement(ne.i,{colCount:5,rowCount:w+1,footer:e.createElement(oe.c,{onClick:()=>i?S("create"):{},icon:e.createElement(K.Z,null)},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},e.createElement(se.h,null,e.createElement(G.Tr,null,e.createElement(m.Th,null,e.createElement(N.C,{"aria-label":s({id:"global.select-all-entries",defaultMessage:"Select all entries"}),indeterminate:k>0&&k<w,value:k===w,onValueChange:ke})),e.createElement(m.Th,{width:"20%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},s({id:"global.name",defaultMessage:"Name"}))),e.createElement(m.Th,{width:"60%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),e.createElement(m.Th,{width:"20%"},e.createElement(d.Z,{variant:"sigma",textColor:"neutral600"},s({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),e.createElement(m.Th,null,e.createElement(le.T,null,s({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),e.createElement(ae.p,null,A.map(n=>e.createElement(G.Tr,{key:n.id,...(0,a.X7)({fn:()=>S(n.id),condition:c})},e.createElement(m.Td,{...a.UW},e.createElement(N.C,{"aria-label":`${s({id:"global.select",defaultMessage:"Select"})} ${n.name}`,value:Z?.includes(n.id),onValueChange:r=>We(r,n.id),id:"select",name:"select"})),e.createElement(m.Td,null,e.createElement(d.Z,{fontWeight:"semiBold",textColor:"neutral800"},n.name)),e.createElement(m.Td,null,e.createElement(d.Z,{textColor:"neutral800"},n.url)),e.createElement(m.Td,null,e.createElement(R.k,{...a.UW},e.createElement(P,{onLabel:s({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:s({id:"global.disabled",defaultMessage:"Disabled"}),label:`${n.name} ${s({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,selected:n.isEnabled,onChange:()=>Me(!n.isEnabled,n.id),visibleLabels:!0}))),e.createElement(m.Td,null,e.createElement(R.k,{gap:1,...a.UW},c&&e.createElement(F.h,{onClick:()=>{S(n.id)},label:s({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:e.createElement(de.Z,null),noBorder:!0}),D&&e.createElement(F.h,{onClick:()=>q(n.id),label:s({id:"global.delete",defaultMessage:"Delete"}),icon:e.createElement(z.Z,null),noBorder:!0,id:`delete-${n.id}`}))))))):e.createElement(re.x,{icon:e.createElement(ce.Z,{width:"160px"}),content:s({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:e.createElement(h.z,{variant:"secondary",startIcon:e.createElement(K.Z,null),onClick:()=>i?S("create"):{}},s({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}))),e.createElement(a.QH,{isOpen:Te,onToggleDialog:ye,onConfirm:pe}))},be=()=>e.createElement(a.O4,{permissions:f.Z.settings.webhooks.main},e.createElement(fe,null))},99223:function(H,L,t){t.d(L,{Z:function(){return O}});var e=t(74512),a=t(32735),f=t(60216),b=t(8471),T=t(87933),y=t(72850);const p=(0,b.ZP)(T.k)`
  & > * + * {
    margin-left: ${({theme:E})=>E.spaces[2]};
  }

  margin-left: ${({pullRight:E})=>E?"auto":void 0};
`,M=(0,b.ZP)(p)`
  flex-shrink: 0;
`,O=({startActions:E,endActions:d})=>E||d?(0,e.jsx)(y.x,{paddingLeft:10,paddingRight:10,children:(0,e.jsx)(y.x,{paddingBottom:4,children:(0,e.jsxs)(T.k,{justifyContent:"space-between",alignItems:"flex-start",children:[E&&(0,e.jsx)(p,{wrap:"wrap",children:E}),d&&(0,e.jsx)(M,{pullRight:!0,children:d})]})})}):null;O.defaultProps={endActions:void 0,startActions:void 0},O.propTypes={endActions:f.node,startActions:f.node}},73269:function(H,L,t){t.d(L,{c:function(){return d}});var e=t(74512),a=t(32735),f=t(60216),b=t(8471),T=t(72850),y=t(9026),p=t(87933),M=t(49372);const O=(0,b.ZP)(T.x)`
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
    fill: ${({theme:h})=>h.colors.primary600};
  }
`,E=(0,b.ZP)(T.x)`
  border-radius: 0 0 ${({theme:h})=>h.borderRadius} ${({theme:h})=>h.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,d=({children:h,icon:j,...W})=>(0,e.jsxs)("div",{children:[(0,e.jsx)(y.i,{}),(0,e.jsx)(E,{as:"button",background:"primary100",padding:5,...W,children:(0,e.jsxs)(p.k,{children:[(0,e.jsx)(O,{"aria-hidden":!0,background:"primary200",children:j}),(0,e.jsx)(T.x,{paddingLeft:3,children:(0,e.jsx)(M.Z,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:h})})]})})]});d.propTypes={children:f.string.isRequired,icon:f.node.isRequired}}}]);
