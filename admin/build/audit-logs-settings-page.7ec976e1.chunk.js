"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[2812],{83196:function(Z,x,t){var e=t(32735),i=t(60216),h=t.n(i),v=t(67879),c=t(72850),E=t(41415),L=t(5644),O=t(24989);const y=({displayedFilters:f})=>{const[g,n]=(0,e.useState)(!1),{formatMessage:j}=(0,v.Z)(),R=(0,e.useRef)(),$=()=>{n(T=>!T)};return e.createElement(e.Fragment,null,e.createElement(c.x,{paddingTop:1,paddingBottom:1},e.createElement(E.z,{variant:"tertiary",ref:R,startIcon:e.createElement(L.Z,null),onClick:$,size:"S"},j({id:"app.utils.filters",defaultMessage:"Filters"})),g&&e.createElement(O.J5,{displayedFilters:f,isVisible:g,onToggle:$,source:R})),e.createElement(O.W$,{filtersSchema:f}))};y.propTypes={displayedFilters:h().arrayOf(h().shape({name:h().string.isRequired,metadatas:h().shape({label:h().string}),fieldSchema:h().shape({type:h().string})})).isRequired},x.Z=y},71765:function(Z,x,t){t.r(x),t.d(x,{default:function(){return ye}});var e=t(32735),i=t(24989),h=t(83983),v=t(67879),c=t(96709),E=t(17e3),L=t(72850),O=t(27649),y=t(82055),f=t(99223),g=t(60216),n=t.n(g),j=t(35658),R=t(94547),$=t(19786),T=t(49372),S=t(87933),oe=t(50563),re=t(54894),G=t(96315),w=()=>{const{formatDate:s}=(0,v.Z)();return p=>{const o=(0,G.Z)(p),m=s(o,{dateStyle:"long"}),d=s(o,{timeStyle:"medium",hourCycle:"h24"});return`${m}, ${d}`}};const k={"entry.create":"Create entry{model, select, undefined {} other { ({model})}}","entry.update":"Update entry{model, select, undefined {} other { ({model})}}","entry.delete":"Delete entry{model, select, undefined {} other { ({model})}}","entry.publish":"Publish entry{model, select, undefined {} other { ({model})}}","entry.unpublish":"Unpublish entry{model, select, undefined {} other { ({model})}}","media.create":"Create media","media.update":"Update media","media.delete":"Delete media","media-folder.create":"Create media folder","media-folder.update":"Update media folder","media-folder.delete":"Delete media folder","user.create":"Create user","user.update":"Update user","user.delete":"Delete user","admin.auth.success":"Admin login","admin.logout":"Admin logout","content-type.create":"Create content type","content-type.update":"Update content type","content-type.delete":"Delete content type","component.create":"Create component","component.update":"Update component","component.delete":"Delete component","role.create":"Create role","role.update":"Update role","role.delete":"Delete role","permission.create":"Create permission","permission.update":"Update permission","permission.delete":"Delete permission"},V=s=>k[s]||s,Q=({headers:s,rows:u,onOpenModal:p})=>{const{formatMessage:o}=(0,v.Z)(),m=w(),d=({type:l,value:r,model:M})=>l==="date"?m(r):l==="action"?o({id:`Settings.permissions.auditLogs.${r}`,defaultMessage:V(r)},{model:M}):r||"-";return e.createElement(j.p,null,u.map(l=>e.createElement(R.Tr,{key:l.id,...(0,i.X7)({fn:()=>p(l.id)})},s.map(({key:r,name:M,cellFormatter:_})=>e.createElement($.Td,{key:r},e.createElement(T.Z,{textColor:"neutral800"},d({type:r,value:_?_(l[M]):l[M],model:l.payload?.model})))),e.createElement($.Td,{...i.UW},e.createElement(S.k,{justifyContent:"end"},e.createElement(oe.h,{onClick:()=>p(l.id),"aria-label":o({id:"app.component.table.view",defaultMessage:"{target} details"},{target:`${l.action} action`}),noBorder:!0,icon:e.createElement(re.Z,null)}))))))};Q.defaultProps={rows:[]},Q.propTypes={headers:n().array.isRequired,rows:n().array,onOpenModal:n().func.isRequired};var ie=Q,le=[{name:"action",key:"action",metadatas:{label:{id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"},sortable:!0}},{name:"date",key:"date",metadatas:{label:{id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"},sortable:!0}},{key:"user",name:"user",metadatas:{label:{id:"Settings.permissions.auditLogs.user",defaultMessage:"User"},sortable:!1},cellFormatter:s=>s?s.displayName:""}];const B=({pagination:s})=>e.createElement(L.x,{paddingTop:4},e.createElement(S.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(i.v4,null),e.createElement(i.tU,{pagination:s})));B.defaultProps={pagination:{pageCount:0,pageSize:50,total:0}},B.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};var a=B,P=t(20108),U=t(85025),N=t(55225),W=t(11299),H=t(31600),de=t(23866),ue=t(15335),ce=t(88807);const K=({actionLabel:s,actionName:u})=>e.createElement(S.k,{direction:"column",alignItems:"baseline",gap:1},e.createElement(T.Z,{textColor:"neutral600",variant:"sigma"},s),e.createElement(T.Z,{textColor:"neutral600"},u));K.propTypes={actionLabel:n().string.isRequired,actionName:n().string.isRequired};var I=K;const z=({status:s,data:u,formattedDate:p})=>{const{formatMessage:o}=(0,v.Z)();if(s==="loading")return e.createElement(S.k,{padding:7,justifyContent:"center",alignItems:"center"},e.createElement(de.a,null,"Loading content..."));const{action:m,user:d,payload:l}=u;return e.createElement(e.Fragment,null,e.createElement(L.x,{marginBottom:3},e.createElement(T.Z,{variant:"delta",id:"title"},o({id:"Settings.permissions.auditLogs.details",defaultMessage:"Log Details"}))),e.createElement(ue.r,{gap:4,gridCols:2,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:6,marginBottom:4,background:"neutral100",hasRadius:!0},e.createElement(I,{actionLabel:o({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),actionName:o({id:`Settings.permissions.auditLogs.${m}`,defaultMessage:V(m)},{model:l?.model})}),e.createElement(I,{actionLabel:o({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"}),actionName:p}),e.createElement(I,{actionLabel:o({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),actionName:d?.displayName||"-"}),e.createElement(I,{actionLabel:o({id:"Settings.permissions.auditLogs.userId",defaultMessage:"User ID"}),actionName:d?.id.toString()||"-"})),e.createElement(ce.V,{value:JSON.stringify(l,null,2),disabled:!0,label:o({id:"Settings.permissions.auditLogs.payload",defaultMessage:"Payload"})}))};z.defaultProps={data:{}},z.propTypes={status:n().oneOf(["idle","loading","error","success"]).isRequired,data:n().shape({action:n().string,date:n().string,payload:n().object,user:n().object}),formattedDate:n().string.isRequired};var me=z;const q=({handleClose:s,logId:u})=>{const{get:p}=(0,i.kY)(),o=(0,i.lm)(),m=async _=>{const{data:C}=await p(`/admin/audit-logs/${_}`);if(!C)throw new Error("Audit log not found");return C},{data:d,status:l}=(0,P.useQuery)(["audit-log",u],()=>m(u),{onError(){o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),s()}}),r=w(),M=d?r(d.date):"";return e.createElement(U.P,{onClose:s,labelledBy:"title"},e.createElement(N.x,null,e.createElement(W.O,{label:M,id:"title"},e.createElement(W.$,null,M))),e.createElement(H.f,null,e.createElement(me,{status:l,data:d,formattedDate:M})))};q.propTypes={handleClose:n().func.isRequired,logId:n().string.isRequired};var ge=q,pe=t(83196),he=t(21428),J=t(90333);const Y=({value:s,options:u,onChange:p})=>{const{formatMessage:o}=(0,v.Z)(),m=o({id:"Settings.permissions.auditLogs.filter.aria-label",defaultMessage:"Search and select an option to filter"});return e.createElement(he.hQ,{"aria-label":m,value:s,onChange:p},u.map(({label:d,customValue:l})=>e.createElement(J.O,{key:l,value:l},d)))};Y.defaultProps={value:null},Y.propTypes={value:n().string,options:n().arrayOf(n().shape({label:n().string.isRequired,customValue:n().string.isRequired}).isRequired).isRequired,onChange:n().func.isRequired};var ee=Y;const X=[{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$eq",defaultMessage:"is"},value:"$eq"},{intlLabel:{id:"components.FilterOptions.FILTER_TYPES.$ne",defaultMessage:"is not"},value:"$ne"}];var ae=({formatMessage:s,users:u,canReadUsers:p})=>{const o=Object.keys(k).map(d=>({label:s({id:`Settings.permissions.auditLogs.${d}`,defaultMessage:V(d)},{model:void 0}),customValue:d})),m=[{name:"action",metadatas:{customOperators:X,label:s({id:"Settings.permissions.auditLogs.action",defaultMessage:"Action"}),options:o,customInput:ee},fieldSchema:{type:"enumeration"}},{name:"date",metadatas:{label:s({id:"Settings.permissions.auditLogs.date",defaultMessage:"Date"})},fieldSchema:{type:"datetime"}}];if(p&&u){const d=r=>r.username?r.username:r.firstname&&r.lastname?s({id:"Settings.permissions.auditLogs.user.fullname",defaultMessage:"{firstname} {lastname}"},{firstname:r.firstname,lastname:r.lastname}):r.email,l=u.results.map(r=>({label:d(r),customValue:r.id.toString()}));return[...m,{name:"user",metadatas:{customOperators:X,label:s({id:"Settings.permissions.auditLogs.user",defaultMessage:"User"}),options:l,customInput:ee},fieldSchema:{type:"relation",mainField:{name:"id"}}}]}return m},Ee=t(53038),Me=({canReadAuditLogs:s,canReadUsers:u})=>{const{get:p}=(0,i.kY)(),{search:o}=(0,Ee.TH)(),m=(0,i.lm)(),d=async({queryKey:b})=>{const Le=b[1],{data:De}=await p(`/admin/audit-logs${Le}`);return De},l=async()=>{const{data:b}=await p("/admin/users");return b},r={keepPreviousData:!0,retry:!1,staleTime:1e3*20,onError:b=>m({type:"warning",message:b.message})},{data:M,isLoading:_,isError:C}=(0,P.useQuery)(["auditLogs",o],d,{...r,enabled:s}),{data:F,isError:A}=(0,P.useQuery)(["auditLogsUsers"],l,{...r,enabled:u,staleTime:2*(1e3*60)}),Pe=C||A;return{auditLogs:M,users:F?.data,isLoading:_,hasError:Pe}};const se={...h.Z.settings.auditLogs,readUsers:h.Z.settings.users.read};var ne=()=>{const{formatMessage:s}=(0,v.Z)(),{allowedActions:{canRead:u,canReadUsers:p}}=(0,i.ss)(se),[{query:o},m]=(0,i.Kx)(),{auditLogs:d,users:l,isLoading:r,hasError:M}=Me({canReadAuditLogs:u,canReadUsers:p});(0,i.go)();const _=ae({formatMessage:s,users:l,canReadUsers:p}),C=s({id:"global.auditLogs",defaultMessage:"Audit Logs"}),F=le.map(A=>({...A,metadatas:{...A.metadatas,label:s(A.metadatas.label)}}));return M?e.createElement(c.A,null,e.createElement(E.D,null,e.createElement(L.x,{paddingTop:8},e.createElement(i.Hn,null)))):e.createElement(O.o,{"aria-busy":r},e.createElement(i.SL,{name:C}),e.createElement(y.T,{title:C,subtitle:s({id:"Settings.permissions.auditLogs.listview.header.subtitle",defaultMessage:"Logs of all the activities that happened in your environment"})}),e.createElement(f.Z,{startActions:e.createElement(pe.Z,{displayedFilters:_})}),e.createElement(E.D,{canRead:u},e.createElement(i.tM,{contentType:"Audit logs",headers:F,rows:d?.results||[],withBulkActions:!0,isLoading:r},e.createElement(ie,{headers:F,rows:d?.results||[],onOpenModal:A=>m({id:A})})),e.createElement(a,{pagination:d?.pagination})),o?.id&&e.createElement(ge,{handleClose:()=>m({id:null},"remove"),logId:o.id}))},ye=()=>e.createElement(i.O4,{permissions:h.Z.settings.auditLogs.main},e.createElement(ne,null))},11299:function(Z,x,t){t.d(x,{$:function(){return y},O:function(){return f}});var e=t(74512),i=t(77277),h=t(8471),v=t(3685),c=t(87933),E=t(72850),L=t(49372);const O=(0,h.ZP)(c.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:g})=>g.colors.neutral500};
    }
  }
  :last-of-type ${E.x} {
    display: none;
  }
  :last-of-type ${L.Z} {
    color: ${({theme:g})=>g.colors.neutral800};
    font-weight: ${({theme:g})=>g.fontWeights.bold};
  }
`,y=({children:g})=>(0,e.jsxs)(O,{inline:!0,as:"li",children:[(0,e.jsx)(L.Z,{variant:"pi",textColor:"neutral600",children:g}),(0,e.jsx)(E.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,e.jsx)(i.Z,{})})]});y.displayName="Crumb";const f=({children:g,label:n,...j})=>(0,e.jsxs)(c.k,{...j,children:[(0,e.jsx)(v.T,{children:n}),(0,e.jsx)("ol",{"aria-hidden":!0,children:g})]});f.displayName="Breadcrumbs"},21428:function(Z,x,t){t.d(x,{Wx:function(){return le},XU:function(){return xe},hQ:function(){return G}});var e=t(74512),i=t(32735),h=t(35331),v=t(16899),c=t(79405),E=t(8471),L=t(14268),O=t(95976),y=t(74971),f=t(36971),g=t(30350),n=t(23866),j=t(72850),R=t(49372),$=t(87107),T=t(87933),S=t(28847),oe=t(67014),re=t(47851);const G=({children:a,clearLabel:P="clear",creatable:U=!1,createMessage:N=u=>`Create "${u}"`,defaultFilterValue:W,defaultTextValue:H,defaultOpen:de=!1,open:ue,onOpenChange:ce,disabled:K=!1,error:I,filterValue:z,hasMoreItems:me=!1,hint:q,id:ge,label:pe,labelAction:he,loading:J=!1,loadingMessage:Y="Loading content...",noOptionsMessage:ee=()=>"No results found",onChange:X,onClear:te,onCreateOption:ae,onFilterValueChange:Ee,onInputChange:fe,onTextValueChange:Me,onLoadMore:se,placeholder:Ce="Select or enter a value",required:ne=!1,startIcon:ve,textValue:ye,value:s})=>{const[u,p]=(0,O.T)({prop:ue,defaultProp:de,onChange:ce}),[o,m]=(0,O.T)({prop:ye,defaultProp:H,onChange:Me}),[d,l]=(0,O.T)({prop:z,defaultProp:W,onChange:Ee}),r=i.useRef(null),M=i.useRef(null),_=i.useRef(null),C=(0,y.M)(ge),F=D=>{te&&!K&&(m(""),l(""),te(D),M.current.focus())},A=D=>{p(D)},Pe=D=>{m(D)},b=D=>{l(D)},Le=D=>{fe&&fe(D)},De=D=>{X&&X(D)},_e=(0,y.M)(),Te=`intersection-${(0,L.B)(_e)}`,je=D=>{se&&me&&!J&&se(D)},Re=()=>{ae&&o&&ae(o)};(0,f.s)(r,je,{selectorToWatch:`#${Te}`,skipWhen:!u});const Ae=`${C}-hint`,Ie=`${C}-error`;return(0,e.jsx)($.g,{hint:q,error:I,id:C,required:ne,children:(0,e.jsxs)(T.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(S.Q,{action:he,children:pe}),(0,e.jsxs)(c.hQ.Root,{autocomplete:U?"list":"both",open:u,onOpenChange:A,onTextValueChange:Pe,textValue:o,allowCustomValue:!0,disabled:K,required:ne,value:s===null?void 0:s,onValueChange:De,filterValue:d,onFilterValueChange:b,children:[(0,e.jsxs)(k,{$hasError:!!I,children:[(0,e.jsxs)(T.k,{flex:"1",as:"span",gap:3,children:[ve?(0,e.jsx)(j.x,{as:"span","aria-hidden":!0,children:ve}):null,(0,e.jsx)(V,{placeholder:Ce,id:C,"aria-invalid":!!I,"aria-labelledby":`${Ae} ${Ie}`,onChange:Le,ref:M})]}),(0,e.jsxs)(T.k,{as:"span",gap:3,children:[o&&te?(0,e.jsx)(w,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:F,"aria-disabled":K,"aria-label":P,title:P,ref:_,children:(0,e.jsx)(h.Z,{})}):null,(0,e.jsx)(Q,{children:(0,e.jsx)(v.Z,{})})]})]}),(0,e.jsx)(c.hQ.Portal,{children:(0,e.jsx)(ie,{sideOffset:4,children:(0,e.jsxs)(Oe,{ref:r,children:[a,U?(0,e.jsx)(c.hQ.CreateItem,{onPointerUp:Re,onClick:Re,asChild:!0,children:(0,e.jsx)(B,{children:(0,e.jsx)(R.Z,{children:N(o??"")})})}):null,!U&&!J?(0,e.jsx)(c.hQ.NoValueFound,{asChild:!0,children:(0,e.jsx)(B,{$hasHover:!1,children:(0,e.jsx)(R.Z,{children:ee(o??"")})})}):null,J?(0,e.jsx)(T.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,e.jsx)(n.a,{small:!0,children:Y})}):null,(0,e.jsx)(j.x,{id:Te,width:"100%",height:"1px"})]})})})]}),(0,e.jsx)(oe.J,{}),(0,e.jsx)(re.c,{})]})})},xe=a=>(0,e.jsx)(G,{...a,creatable:!0}),w=(0,E.ZP)(j.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.neutral600};
  }
`,k=(0,E.ZP)(c.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:a,$hasError:P})=>P?a.colors.danger600:a.colors.neutral200};
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

  ${({theme:a,$hasError:P})=>(0,g.k3)()({theme:a,hasError:P})};
`,V=(0,E.ZP)(c.hQ.TextInput)`
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
`,Q=(0,E.ZP)(c.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:a})=>a.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,ie=(0,E.ZP)(c.hQ.Content)`
  background: ${({theme:a})=>a.colors.neutral0};
  box-shadow: ${({theme:a})=>a.shadows.filterShadow};
  border: 1px solid ${({theme:a})=>a.colors.neutral150};
  border-radius: ${({theme:a})=>a.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:a})=>a.zIndices[1]};
`,Oe=(0,E.ZP)(c.hQ.Viewport)`
  padding: ${({theme:a})=>a.spaces[1]};
`,le=i.forwardRef(({children:a,value:P,disabled:U,textValue:N,...W},H)=>(0,e.jsx)(c.hQ.ComboboxItem,{asChild:!0,value:P,disabled:U,textValue:N,children:(0,e.jsx)(B,{ref:H,...W,children:(0,e.jsx)(c.hQ.ItemText,{asChild:!0,children:(0,e.jsx)(R.Z,{children:a})})})})),B=E.ZP.div`
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

    ${R.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:a,$hasHover:P=!0})=>P?a.colors.primary100:a.colors.neutral0};
  }

  &[data-highlighted] {
    ${R.Z} {
      color: ${({theme:a})=>a.colors.primary600};
      font-weight: bold;
    }
  }
`},90333:function(Z,x,t){t.d(x,{O:function(){return i}});var e=t(21428);const i=e.Wx},99223:function(Z,x,t){t.d(x,{Z:function(){return y}});var e=t(74512),i=t(32735),h=t(60216),v=t(8471),c=t(87933),E=t(72850);const L=(0,v.ZP)(c.k)`
  & > * + * {
    margin-left: ${({theme:f})=>f.spaces[2]};
  }

  margin-left: ${({pullRight:f})=>f?"auto":void 0};
`,O=(0,v.ZP)(L)`
  flex-shrink: 0;
`,y=({startActions:f,endActions:g})=>f||g?(0,e.jsx)(E.x,{paddingLeft:10,paddingRight:10,children:(0,e.jsx)(E.x,{paddingBottom:4,children:(0,e.jsxs)(c.k,{justifyContent:"space-between",alignItems:"flex-start",children:[f&&(0,e.jsx)(L,{wrap:"wrap",children:f}),g&&(0,e.jsx)(O,{pullRight:!0,children:g})]})})}):null;y.defaultProps={endActions:void 0,startActions:void 0},y.propTypes={endActions:h.node,startActions:h.node}}}]);
