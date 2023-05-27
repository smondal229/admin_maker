"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[5162],{47272:function(z,C,t){t.d(C,{Z:function(){return ke}});var e=t(32735),o=t(24989),A=t(27649),M=t(20108),p=t(53038),k=t(67927),me=t(60216),i=t.n(me),re=t(2438),se=t(66456),Ee=t(29439),pe=t(82055),m=t(87933),S=t(41415),fe=t(17e3),j=t(72850),_=t(15335),D=t(5803),X=t(10369),x=t(92802),$=t(67879),le=t(28847),I=t(49372),oe=t(8471),ve=t(8284),be=t(82884),Ce=t(23940),Me=t.n(Ce);const W=({disabledEvents:n,name:r,events:s,inputValue:l,handleChange:c,handleChangeAll:v})=>{const d=s.filter(g=>!n.includes(g)),u=l.length===d.length,E=l.length>0,P=({target:{name:g}})=>{v({target:{name:g,value:!u}})};return e.createElement("tr",null,e.createElement("td",null,e.createElement(ve.X,{indeterminate:E&&!u,"aria-label":"Select all entries",name:r,onChange:P,value:u},Me()(r))),s.map(g=>e.createElement("td",{key:g},e.createElement(be.C,{disabled:n.includes(g),"aria-label":g,name:g,value:l.includes(g),onValueChange:f=>c({target:{name:g,value:f}})}))))};W.defaultProps={disabledEvents:[],events:[],inputValue:[],handleChange(){},handleChangeAll(){}},W.propTypes={disabledEvents:i().array,events:i().array,inputValue:i().array,handleChange:i().func,handleChangeAll:i().func,name:i().string.isRequired};var a=W,U=n=>n.reduce((r,s)=>{const l=s.split(".")[0];return r[l]||(r[l]=[]),r[l].push(s),r},{});const G=oe.ZP.table`
  td {
    height: ${52/16}rem;
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr:nth-child(odd) {
    background: ${({theme:n})=>n.colors.neutral100};
  }

  tbody tr td:first-child {
    padding-left: ${({theme:n})=>n.spaces[7]};
  }
`,Z={headers:{default:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}],draftAndPublish:[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"},{id:"app.utils.publish",defaultMessage:"Publish"},{id:"app.utils.unpublish",defaultMessage:"Unpublish"}]},events:{default:{entry:["entry.create","entry.update","entry.delete"],media:["media.create","media.update","media.delete"]},draftAndPublish:{entry:["entry.create","entry.update","entry.delete","entry.publish","entry.unpublish"],media:["media.create","media.update","media.delete"]}}},F=({isDraftAndPublish:n})=>{const r=n?Z.headers.draftAndPublish:Z.headers.default,s=n?Z.events.draftAndPublish:Z.events.default,{formatMessage:l}=(0,$.Z)(),{values:c,handleChange:v}=(0,x.u6)(),d="events",u=c.events,E=[],P=U(u),g=({target:{name:h,value:V}})=>{let y=new Set(u);V?y.add(h):y.delete(h),v({target:{name:d,value:Array.from(y)}})},f=({target:{name:h,value:V}})=>{let y=new Set(u);V?s[h].forEach(B=>{E.includes(B)||y.add(B)}):s[h].forEach(B=>y.delete(B)),v({target:{name:d,value:Array.from(y)}})};return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(le.Q,null,l({id:"Settings.webhooks.form.events",defaultMessage:"Events"})),e.createElement(G,null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("td",null),r.map(h=>h==="app.utils.publish"||h==="app.utils.unpublish"?e.createElement("td",{key:h.id,title:l({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"})},e.createElement(I.Z,{variant:"sigma",textColor:"neutral600"},l(h))):e.createElement("td",{key:h.id},e.createElement(I.Z,{variant:"sigma",textColor:"neutral600"},l(h)))))),e.createElement("tbody",null,Object.keys(s).map(h=>e.createElement(a,{disabledEvents:E,key:h,name:h,events:s[h],inputValue:P[h],handleChange:g,handleChangeAll:f})))))};F.propTypes={isDraftAndPublish:i().bool.isRequired};var Pe=F,ye=t(19406),xe=t(7563),J=t(21428),Y=t(90333),ie=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"];const q=({name:n,onChange:r,value:s,...l})=>{const[c,v]=(0,e.useState)(s?[...ie,s]:ie),d=E=>{r({target:{name:n,value:E}})},u=E=>{v(P=>[...P,E]),r({target:{name:n,value:E}})};return e.createElement(J.XU,{...l,onChange:d,onCreateOption:u,placeholder:"",value:s},c.map(E=>e.createElement(Y.O,{value:E,key:E},E)))};q.defaultProps={value:void 0},q.propTypes={name:i().string.isRequired,onChange:i().func.isRequired,value:i().string};var Ie=q,Oe=()=>{const{formatMessage:n}=(0,$.Z)(),{values:r,errors:s}=(0,x.u6)();return e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(le.Q,null,n({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})),e.createElement(j.x,{padding:8,background:"neutral100",hasRadius:!0},e.createElement(x.F2,{validateOnChange:!1,name:"headers",render:({push:l,remove:c})=>e.createElement(_.r,{gap:4},r.headers?.map((v,d)=>e.createElement(e.Fragment,{key:d},e.createElement(D.P,{col:6},e.createElement(x.gN,{as:Ie,name:`headers.${d}.key`,"aria-label":`row ${d+1} key`,label:n({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:s.headers?.[d]?.key&&n({id:s.headers[d]?.key,defaultMessage:s.headers[d]?.key})})),e.createElement(D.P,{col:6},e.createElement(m.k,{alignItems:"flex-end"},e.createElement(j.x,{style:{flex:1}},e.createElement(x.gN,{as:X.o,"aria-label":`row ${d+1} value`,label:n({id:"Settings.webhooks.value",defaultMessage:"Value"}),name:`headers.${d}.value`,error:s.headers?.[d]?.value&&n({id:s.headers[d]?.value,defaultMessage:s.headers[d]?.value})})),e.createElement(m.k,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:s.headers?.[d]?.value?0:5},e.createElement(o.fG,{onClick:()=>r.headers.length!==1&&c(d),label:n({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:d+1})})))))),e.createElement(D.P,{col:12},e.createElement(xe.A,{type:"button",onClick:()=>{l({key:"",value:""})},startIcon:e.createElement(ye.Z,null)},n({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"}))))})))},ee=t(27169),de=t(35331);const Q=oe.ZP.svg(({theme:n,color:r})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;

  path {
    fill: ${n.colors[r]};
  }
`),H=({isPending:n,statusCode:r})=>{const{formatMessage:s}=(0,$.Z)();return n?e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(Q,{as:ee.Z}),e.createElement(I.Z,null,s({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"}))):r>=200&&r<300?e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(Q,{as:se.Z,color:"success700"}),e.createElement(I.Z,null,s({id:"Settings.webhooks.trigger.success",defaultMessage:"success"}))):r>=300?e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(Q,{as:de.Z,color:"danger700"}),e.createElement(I.Z,null,s({id:"Settings.error",defaultMessage:"error"})," ",r)):null};H.propTypes={isPending:i().bool.isRequired,statusCode:i().number},H.defaultProps={statusCode:void 0};const w=({statusCode:n,message:r})=>{const{formatMessage:s}=(0,$.Z)();return n>=200&&n<300?e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(I.Z,{textColor:"neutral600",ellipsis:!0},s({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"}))):n>=300?e.createElement(m.k,{justifyContent:"flex-end"},e.createElement(m.k,{maxWidth:(0,o.Q1)(250),justifyContent:"flex-end",title:r},e.createElement(I.Z,{ellipsis:!0,textColor:"neutral600"},r))):null};w.propTypes={statusCode:i().number,message:i().string},w.defaultProps={statusCode:void 0,message:void 0};const te=({onCancel:n})=>{const{formatMessage:r}=(0,$.Z)();return e.createElement(m.k,{justifyContent:"flex-end"},e.createElement("button",{onClick:n,type:"button"},e.createElement(m.k,{gap:2,alignItems:"center"},e.createElement(I.Z,{textColor:"neutral400"},r({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})),e.createElement(Q,{as:de.Z,color:"neutral400"}))))};te.propTypes={onCancel:i().func.isRequired};const ae=({isPending:n,onCancel:r,response:s})=>{const{statusCode:l,message:c}=s,{formatMessage:v}=(0,$.Z)();return e.createElement(j.x,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0},e.createElement(_.r,{gap:4,style:{alignItems:"center"}},e.createElement(D.P,{col:3},e.createElement(I.Z,null,v({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"}))),e.createElement(D.P,{col:3},e.createElement(H,{isPending:n,statusCode:l})),e.createElement(D.P,{col:6},n?e.createElement(te,{onCancel:r}):e.createElement(w,{statusCode:l,message:c}))))};ae.defaultProps={isPending:!1,onCancel(){},response:{}},ae.propTypes={isPending:i().bool,onCancel:i().func,response:i().object};var ce=ae,R=t(24346);const ue=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Re=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/;var he=R.Ry().shape({name:R.Z_(o.I0.string).required(o.I0.required).matches(ue,o.I0.regex),url:R.Z_(o.I0.string).required(o.I0.required).matches(Re,o.I0.regex),headers:R.Vo(n=>{let r=R.IX();if(n.length===1){const{key:s,value:l}=n[0];if(!s&&!l)return r}return r.of(R.Ry().shape({key:R.Z_().required(o.I0.required),value:R.Z_().required(o.I0.required)}))}),events:R.IX()});const ne=({handleSubmit:n,data:r,triggerWebhook:s,isCreating:l,isTriggering:c,triggerResponse:v,isDraftAndPublishEvents:d})=>{const{formatMessage:u}=(0,$.Z)(),[E,P]=(0,e.useState)(!1);return e.createElement(x.J9,{onSubmit:n,initialValues:{name:r?.name||"",url:r?.url||"",headers:Object.keys(r?.headers||[]).length?Object.entries(r.headers).map(([g,f])=>({key:g,value:f})):[{key:"",value:""}],events:r?.events||[]},validationSchema:he,validateOnChange:!1,validateOnBlur:!1},({handleSubmit:g,errors:f})=>e.createElement(o.l0,{noValidate:!0},e.createElement(pe.T,{primaryAction:e.createElement(m.k,{gap:2},e.createElement(S.z,{onClick:()=>{s(),P(!0)},variant:"tertiary",startIcon:e.createElement(re.Z,null),disabled:l||c,size:"L"},u({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})),e.createElement(S.z,{startIcon:e.createElement(se.Z,null),onClick:g,type:"submit",size:"L"},u({id:"global.save",defaultMessage:"Save"}))),title:l?u({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):r?.name,navigationAction:e.createElement(o.rU,{startIcon:e.createElement(Ee.Z,null),to:"/settings/webhooks"},u({id:"global.back",defaultMessage:"Back"}))}),e.createElement(fe.D,null,e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:4},E&&e.createElement("div",{className:"trigger-wrapper"},e.createElement(ce,{isPending:c,response:v,onCancel:()=>P(!1)})),e.createElement(j.x,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0},e.createElement(m.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(_.r,{gap:6},e.createElement(D.P,{col:6},e.createElement(x.gN,{as:X.o,name:"name",error:f.name&&u({id:f.name}),label:u({id:"global.name",defaultMessage:"Name"}),required:!0})),e.createElement(D.P,{col:12},e.createElement(x.gN,{as:X.o,name:"url",error:f.url&&u({id:f.url}),label:u({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0}))),e.createElement(Oe,null),e.createElement(Pe,{isDraftAndPublish:d})))))))};ne.propTypes={data:i().object,handleSubmit:i().func.isRequired,triggerWebhook:i().func.isRequired,isCreating:i().bool.isRequired,isDraftAndPublishEvents:i().bool.isRequired,isTriggering:i().bool.isRequired,triggerResponse:i().object},ne.defaultProps={data:void 0,triggerResponse:void 0};var ge=ne;const N=n=>({...n,headers:De(n.headers)}),De=n=>n.reduce((r,s)=>{const{key:l,value:c}=s;return l!==""?{...r,[l]:c}:r},{});var L=N,ke=()=>{const{params:{id:n}}=(0,p.$B)("/settings/webhooks/:id"),{replace:r}=(0,p.k6)(),{lockApp:s,unlockApp:l}=(0,o.o1)(),c=(0,o.lm)(),v=(0,M.useQueryClient)(),{isLoading:d,collectionTypes:u}=(0,k.bP)(),{put:E,get:P,post:g}=(0,o.kY)(),f=n==="create",{isLoading:h,data:V}=(0,M.useQuery)(["get-webhook",n],async()=>{try{const{data:{data:T}}=await P(`/admin/webhooks/${n}`);return T}catch{return c({type:"warning",message:{id:"notification.error"}}),null}},{enabled:!f}),{isLoading:y,data:B,isIdle:je,mutate:b}=(0,M.useMutation)(()=>g(`/admin/webhooks/${n}/trigger`)),Se=()=>b(null,{onError(){c({type:"warning",message:{id:"notification.error"}})}}),Ze=(0,M.useMutation)(T=>g("/admin/webhooks",T)),Be=(0,M.useMutation)(({id:T,body:K})=>E(`/admin/webhooks/${T}`,K)),We=async T=>{f?(s(),Ze.mutate(L(T),{onSuccess({data:K}){c({type:"success",message:{id:"Settings.webhooks.created"}}),r(`/settings/webhooks/${K.data.id}`),l()},onError(K){c({type:"warning",message:{id:"notification.error"}}),console.log(K),l()}})):(s(),Be.mutate({id:n,body:L(T)},{onSuccess(){v.invalidateQueries(["get-webhook",n]),c({type:"success",message:{id:"notification.form.success.fields"}}),l()},onError(K){c({type:"warning",message:{id:"notification.error"}}),console.log(K),l()}}))},Ue=e.useMemo(()=>u.some(T=>T.options.draftAndPublish===!0),[u]);return h||d?e.createElement(o.dO,null):e.createElement(A.o,null,e.createElement(o.SL,{name:"Webhooks"}),e.createElement(ge,{handleSubmit:We,data:V,triggerWebhook:Se,isCreating:f,isTriggering:y,isTriggerIdle:je,triggerResponse:B?.data.data,isDraftAndPublishEvents:Ue}))}},33238:function(z,C,t){t.r(C);var e=t(32735),o=t(24989),A=t(83983),M=t(47272);const p=()=>e.createElement(o.O4,{permissions:A.Z.settings.webhooks.create},e.createElement(M.Z,null));C.default=p},59021:function(z,C,t){t.r(C);var e=t(32735),o=t(24989),A=t(83983),M=t(47272);const p=()=>e.createElement(o.O4,{permissions:A.Z.settings.webhooks.update},e.createElement(M.Z,null));C.default=p},21428:function(z,C,t){t.d(C,{Wx:function(){return Me},XU:function(){return $},hQ:function(){return x}});var e=t(74512),o=t(32735),A=t(35331),M=t(16899),p=t(79405),k=t(8471),me=t(14268),i=t(95976),re=t(74971),se=t(36971),Ee=t(30350),pe=t(23866),m=t(72850),S=t(49372),fe=t(87107),j=t(87933),_=t(28847),D=t(67014),X=t(47851);const x=({children:a,clearLabel:O="clear",creatable:U=!1,createMessage:G=N=>`Create "${N}"`,defaultFilterValue:Z,defaultTextValue:F,defaultOpen:Pe=!1,open:ye,onOpenChange:xe,disabled:J=!1,error:Y,filterValue:$e,hasMoreItems:ie=!1,hint:q,id:Ie,label:Le,labelAction:Oe,loading:ee=!1,loadingMessage:de="Loading content...",noOptionsMessage:Q=()=>"No results found",onChange:H,onClear:w,onCreateOption:te,onFilterValueChange:ae,onInputChange:ce,onTextValueChange:R,onLoadMore:ue,placeholder:Re="Select or enter a value",required:Te=!1,startIcon:he,textValue:ne,value:ge})=>{const[N,De]=(0,i.T)({prop:ye,defaultProp:Pe,onChange:xe}),[L,Ae]=(0,i.T)({prop:ne,defaultProp:F,onChange:R}),[ke,n]=(0,i.T)({prop:$e,defaultProp:Z,onChange:ae}),r=o.useRef(null),s=o.useRef(null),l=o.useRef(null),c=(0,re.M)(Ie),v=b=>{w&&!J&&(Ae(""),n(""),w(b),s.current.focus())},d=b=>{De(b)},u=b=>{Ae(b)},E=b=>{n(b)},P=b=>{ce&&ce(b)},g=b=>{H&&H(b)},f=(0,re.M)(),h=`intersection-${(0,me.B)(f)}`,V=b=>{ue&&ie&&!ee&&ue(b)},y=()=>{te&&L&&te(L)};(0,se.s)(r,V,{selectorToWatch:`#${h}`,skipWhen:!N});const B=`${c}-hint`,je=`${c}-error`;return(0,e.jsx)(fe.g,{hint:q,error:Y,id:c,required:Te,children:(0,e.jsxs)(j.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(_.Q,{action:Oe,children:Le}),(0,e.jsxs)(p.hQ.Root,{autocomplete:U?"list":"both",open:N,onOpenChange:d,onTextValueChange:u,textValue:L,allowCustomValue:!0,disabled:J,required:Te,value:ge===null?void 0:ge,onValueChange:g,filterValue:ke,onFilterValueChange:E,children:[(0,e.jsxs)(I,{$hasError:!!Y,children:[(0,e.jsxs)(j.k,{flex:"1",as:"span",gap:3,children:[he?(0,e.jsx)(m.x,{as:"span","aria-hidden":!0,children:he}):null,(0,e.jsx)(oe,{placeholder:Re,id:c,"aria-invalid":!!Y,"aria-labelledby":`${B} ${je}`,onChange:P,ref:s})]}),(0,e.jsxs)(j.k,{as:"span",gap:3,children:[L&&w?(0,e.jsx)(le,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:v,"aria-disabled":J,"aria-label":O,title:O,ref:l,children:(0,e.jsx)(A.Z,{})}):null,(0,e.jsx)(ve,{children:(0,e.jsx)(M.Z,{})})]})]}),(0,e.jsx)(p.hQ.Portal,{children:(0,e.jsx)(be,{sideOffset:4,children:(0,e.jsxs)(Ce,{ref:r,children:[a,U?(0,e.jsx)(p.hQ.CreateItem,{onPointerUp:y,onClick:y,asChild:!0,children:(0,e.jsx)(W,{children:(0,e.jsx)(S.Z,{children:G(L??"")})})}):null,!U&&!ee?(0,e.jsx)(p.hQ.NoValueFound,{asChild:!0,children:(0,e.jsx)(W,{$hasHover:!1,children:(0,e.jsx)(S.Z,{children:Q(L??"")})})}):null,ee?(0,e.jsx)(j.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,e.jsx)(pe.a,{small:!0,children:de})}):null,(0,e.jsx)(m.x,{id:h,width:"100%",height:"1px"})]})})})]}),(0,e.jsx)(D.J,{}),(0,e.jsx)(X.c,{})]})})},$=a=>(0,e.jsx)(x,{...a,creatable:!0}),le=(0,k.ZP)(m.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,I=(0,k.ZP)(p.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:a,$hasError:O})=>O?a.colors.danger600:a.colors.neutral200};
  padding-right: ${({theme:a})=>a.spaces[3]};
  padding-left: ${({theme:a})=>a.spaces[3]};
  border-radius: ${({theme:a})=>a.borderRadius};
  background: ${({theme:a})=>a.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:a})=>a.spaces[4]};

  &[data-disabled] {
    color: ${({theme:a})=>a.colors.neutral600};
    background: ${({theme:a})=>a.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:a,$hasError:O})=>(0,Ee.k3)()({theme:a,hasError:O})};
`,oe=(0,k.ZP)(p.hQ.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:a})=>a.colors.neutral800};
  min-height: ${40/16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,ve=(0,k.ZP)(p.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,be=(0,k.ZP)(p.hQ.Content)`
  background: ${({theme:a})=>a.colors.neutral0};
  box-shadow: ${({theme:a})=>a.shadows.filterShadow};
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
  border-radius: ${({theme:a})=>a.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:a})=>a.zIndices[1]};
`,Ce=(0,k.ZP)(p.hQ.Viewport)`
  padding: ${({theme:a})=>a.spaces[1]};
`,Me=o.forwardRef(({children:a,value:O,disabled:U,textValue:G,...Z},F)=>(0,e.jsx)(p.hQ.ComboboxItem,{asChild:!0,value:O,disabled:U,textValue:G,children:(0,e.jsx)(W,{ref:F,...Z,children:(0,e.jsx)(p.hQ.ItemText,{asChild:!0,children:(0,e.jsx)(S.Z,{children:a})})})})),W=k.ZP.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:a})=>a.spaces[2]} ${({theme:a})=>a.spaces[4]};
  background-color: ${({theme:a})=>a.colors.neutral0};
  border-radius: ${({theme:a})=>a.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({theme:a})=>a.colors.primary100};

    ${S.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:a,$hasHover:O=!0})=>O?a.colors.primary100:a.colors.neutral0};
  }

  &[data-highlighted] {
    ${S.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }
`},90333:function(z,C,t){t.d(C,{O:function(){return o}});var e=t(21428);const o=e.Wx},29439:function(z,C,t){t.d(C,{Z:function(){return A}});var e=t(74512);const o=M=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...M,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),A=o}}]);
