(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[617],{56671:function(_,i,e){var n=e(35897),l=e(74741),s=l(n);_.exports=s},91131:function(_,i,e){var n=e(94318),l=e(3387),s="[object RegExp]";function t(a){return l(a)&&n(a)==s}_.exports=t},52920:function(_,i,e){var n=e(56671),l=e(81580);function s(t,a){var d=-1,o=l(t)?Array(t.length):[];return n(t,function(h,c,g){o[++d]=a(h,c,g)}),o}_.exports=s},50690:function(_,i,e){var n=e(26460),l=e(80166),s=e(88904),t=e(52920),a=e(36024),d=e(76535),o=e(1397),h=e(15362),c=e(77236);function g(x,E,m){E.length?E=n(E,function(f){return c(f)?function(v){return l(v,f.length===1?f[0]:f)}:f}):E=[h];var u=-1;E=n(E,d(s));var p=t(x,function(f,v,M){var C=n(E,function(j){return j(f)});return{criteria:C,index:++u,value:f}});return a(p,function(f,v){return o(f,v,m)})}_.exports=g},36024:function(_){function i(e,n){var l=e.length;for(e.sort(n);l--;)e[l]=e[l].value;return e}_.exports=i},40709:function(_,i,e){var n=e(22945);function l(s,t){if(s!==t){var a=s!==void 0,d=s===null,o=s===s,h=n(s),c=t!==void 0,g=t===null,x=t===t,E=n(t);if(!g&&!E&&!h&&s>t||h&&c&&x&&!g&&!E||d&&c&&x||!a&&x||!o)return 1;if(!d&&!h&&!E&&s<t||E&&a&&o&&!d&&!h||g&&a&&o||!c&&o||!x)return-1}return 0}_.exports=l},1397:function(_,i,e){var n=e(40709);function l(s,t,a){for(var d=-1,o=s.criteria,h=t.criteria,c=o.length,g=a.length;++d<c;){var x=n(o[d],h[d]);if(x){if(d>=g)return x;var E=a[d];return x*(E=="desc"?-1:1)}}return s.index-t.index}_.exports=l},74741:function(_,i,e){var n=e(81580);function l(s,t){return function(a,d){if(a==null)return a;if(!n(a))return s(a,d);for(var o=a.length,h=t?o:-1,c=Object(a);(t?h--:++h<o)&&d(c[h],h,c)!==!1;);return a}}_.exports=l},52654:function(_,i,e){var n=e(91131),l=e(76535),s=e(91782),t=s&&s.isRegExp,a=t?l(t):n;_.exports=a},98978:function(_,i,e){var n=e(40314),l=e(50690),s=e(94569),t=e(63108),a=s(function(d,o){if(d==null)return[];var h=o.length;return h>1&&t(d,o[0],o[1])?o=[]:h>2&&t(o[0],o[1],o[2])&&(o=[o[0]]),l(d,n(o,1),[])});_.exports=a},51382:function(_,i,e){var n=e(90454),l=e(24793),s=e(34327),t=e(85973),a=e(52654),d=e(38788),o=e(51119),h=e(25225),c=e(41119),g=30,x="...",E=/\w*$/;function m(u,p){var f=g,v=x;if(t(p)){var M="separator"in p?p.separator:M;f="length"in p?h(p.length):f,v="omission"in p?n(p.omission):v}u=c(u);var C=u.length;if(s(u)){var j=o(u);C=j.length}if(f>=C)return u;var P=f-d(v);if(P<1)return v;var O=j?l(j,0,P).join(""):u.slice(0,P);if(M===void 0)return O+v;if(j&&(P+=O.length-P),a(M)){if(u.slice(P).search(M)){var R,B=O;for(M.global||(M=RegExp(M.source,c(E.exec(M))+"g")),M.lastIndex=0;R=M.exec(B);)var A=R.index;O=O.slice(0,A===void 0?P:A)}}else if(u.indexOf(n(M),P)!=P){var U=O.lastIndexOf(M);U>-1&&(O=O.slice(0,U))}return O+v}_.exports=m},11299:function(_,i,e){"use strict";e.d(i,{$:function(){return c},O:function(){return g}});var n=e(74512),l=e(77277),s=e(8471),t=e(3685),a=e(87933),d=e(72850),o=e(49372);const h=(0,s.ZP)(a.k)`
  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
    path {
      fill: ${({theme:x})=>x.colors.neutral500};
    }
  }
  :last-of-type ${d.x} {
    display: none;
  }
  :last-of-type ${o.Z} {
    color: ${({theme:x})=>x.colors.neutral800};
    font-weight: ${({theme:x})=>x.fontWeights.bold};
  }
`,c=({children:x})=>(0,n.jsxs)(h,{inline:!0,as:"li",children:[(0,n.jsx)(o.Z,{variant:"pi",textColor:"neutral600",children:x}),(0,n.jsx)(d.x,{"aria-hidden":!0,paddingLeft:3,paddingRight:3,children:(0,n.jsx)(l.Z,{})})]});c.displayName="Crumb";const g=({children:x,label:E,...m})=>(0,n.jsxs)(a.k,{...m,children:[(0,n.jsx)(t.T,{children:E}),(0,n.jsx)("ol",{"aria-hidden":!0,children:x})]});g.displayName="Breadcrumbs"},21428:function(_,i,e){"use strict";e.d(i,{Wx:function(){return l0},XU:function(){return P},hQ:function(){return j}});var n=e(74512),l=e(32735),s=e(35331),t=e(16899),a=e(79405),d=e(8471),o=e(14268),h=e(95976),c=e(74971),g=e(36971),x=e(30350),E=e(23866),m=e(72850),u=e(49372),p=e(87107),f=e(87933),v=e(28847),M=e(67014),C=e(47851);const j=({children:r,clearLabel:Z="clear",creatable:L=!1,createMessage:b=W=>`Create "${W}"`,defaultFilterValue:K,defaultTextValue:w,defaultOpen:r0=!1,open:a0,onOpenChange:i0,disabled:y=!1,error:F,filterValue:o0,hasMoreItems:d0=!1,hint:h0,id:_0,label:c0,labelAction:u0,loading:H=!1,loadingMessage:x0="Loading content...",noOptionsMessage:f0=()=>"No results found",onChange:Q,onClear:V,onCreateOption:S,onFilterValueChange:E0,onInputChange:z,onTextValueChange:v0,onLoadMore:N,placeholder:g0="Select or enter a value",required:G=!1,startIcon:k,textValue:M0,value:J})=>{const[W,m0]=(0,h.T)({prop:a0,defaultProp:r0,onChange:i0}),[T,X]=(0,h.T)({prop:M0,defaultProp:w,onChange:v0}),[p0,Y]=(0,h.T)({prop:o0,defaultProp:K,onChange:E0}),q=l.useRef(null),e0=l.useRef(null),j0=l.useRef(null),I=(0,c.M)(_0),P0=D=>{V&&!y&&(X(""),Y(""),V(D),e0.current.focus())},O0=D=>{m0(D)},D0=D=>{X(D)},C0=D=>{Y(D)},Z0=D=>{z&&z(D)},R0=D=>{Q&&Q(D)},B0=(0,c.M)(),n0=`intersection-${(0,o.B)(B0)}`,T0=D=>{N&&d0&&!H&&N(D)},t0=()=>{S&&T&&S(T)};(0,g.s)(q,T0,{selectorToWatch:`#${n0}`,skipWhen:!W});const L0=`${I}-hint`,A0=`${I}-error`;return(0,n.jsx)(p.g,{hint:h0,error:F,id:I,required:G,children:(0,n.jsxs)(f.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsx)(v.Q,{action:u0,children:c0}),(0,n.jsxs)(a.hQ.Root,{autocomplete:L?"list":"both",open:W,onOpenChange:O0,onTextValueChange:D0,textValue:T,allowCustomValue:!0,disabled:y,required:G,value:J===null?void 0:J,onValueChange:R0,filterValue:p0,onFilterValueChange:C0,children:[(0,n.jsxs)(R,{$hasError:!!F,children:[(0,n.jsxs)(f.k,{flex:"1",as:"span",gap:3,children:[k?(0,n.jsx)(m.x,{as:"span","aria-hidden":!0,children:k}):null,(0,n.jsx)(B,{placeholder:g0,id:I,"aria-invalid":!!F,"aria-labelledby":`${L0} ${A0}`,onChange:Z0,ref:e0})]}),(0,n.jsxs)(f.k,{as:"span",gap:3,children:[T&&V?(0,n.jsx)(O,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:P0,"aria-disabled":y,"aria-label":Z,title:Z,ref:j0,children:(0,n.jsx)(s.Z,{})}):null,(0,n.jsx)(A,{children:(0,n.jsx)(t.Z,{})})]})]}),(0,n.jsx)(a.hQ.Portal,{children:(0,n.jsx)(U,{sideOffset:4,children:(0,n.jsxs)(s0,{ref:q,children:[r,L?(0,n.jsx)(a.hQ.CreateItem,{onPointerUp:t0,onClick:t0,asChild:!0,children:(0,n.jsx)($,{children:(0,n.jsx)(u.Z,{children:b(T??"")})})}):null,!L&&!H?(0,n.jsx)(a.hQ.NoValueFound,{asChild:!0,children:(0,n.jsx)($,{$hasHover:!1,children:(0,n.jsx)(u.Z,{children:f0(T??"")})})}):null,H?(0,n.jsx)(f.k,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:(0,n.jsx)(E.a,{small:!0,children:x0})}):null,(0,n.jsx)(m.x,{id:n0,width:"100%",height:"1px"})]})})})]}),(0,n.jsx)(M.J,{}),(0,n.jsx)(C.c,{})]})})},P=r=>(0,n.jsx)(j,{...r,creatable:!0}),O=(0,d.ZP)(m.x)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:r})=>r.colors.neutral600};
  }
`,R=(0,d.ZP)(a.hQ.Trigger)`
  position: relative;
  border: 1px solid ${({theme:r,$hasError:Z})=>Z?r.colors.danger600:r.colors.neutral200};
  padding-right: ${({theme:r})=>r.spaces[3]};
  padding-left: ${({theme:r})=>r.spaces[3]};
  border-radius: ${({theme:r})=>r.borderRadius};
  background: ${({theme:r})=>r.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:r})=>r.spaces[4]};

  &[data-disabled] {
    color: ${({theme:r})=>r.colors.neutral600};
    background: ${({theme:r})=>r.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:r,$hasError:Z})=>(0,x.k3)()({theme:r,hasError:Z})};
`,B=(0,d.ZP)(a.hQ.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:r})=>r.colors.neutral800};
  min-height: ${40/16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,A=(0,d.ZP)(a.hQ.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:r})=>r.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,U=(0,d.ZP)(a.hQ.Content)`
  background: ${({theme:r})=>r.colors.neutral0};
  box-shadow: ${({theme:r})=>r.shadows.filterShadow};
  border: 1px solid ${({theme:r})=>r.colors.neutral150};
  border-radius: ${({theme:r})=>r.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:r})=>r.zIndices[1]};
`,s0=(0,d.ZP)(a.hQ.Viewport)`
  padding: ${({theme:r})=>r.spaces[1]};
`,l0=l.forwardRef(({children:r,value:Z,disabled:L,textValue:b,...K},w)=>(0,n.jsx)(a.hQ.ComboboxItem,{asChild:!0,value:Z,disabled:L,textValue:b,children:(0,n.jsx)($,{ref:w,...K,children:(0,n.jsx)(a.hQ.ItemText,{asChild:!0,children:(0,n.jsx)(u.Z,{children:r})})})})),$=d.ZP.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:r})=>r.spaces[2]} ${({theme:r})=>r.spaces[4]};
  background-color: ${({theme:r})=>r.colors.neutral0};
  border-radius: ${({theme:r})=>r.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({theme:r})=>r.colors.primary100};

    ${u.Z} {
      color: ${({theme:r})=>r.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:r,$hasHover:Z=!0})=>Z?r.colors.primary100:r.colors.neutral0};
  }

  &[data-highlighted] {
    ${u.Z} {
      color: ${({theme:r})=>r.colors.primary600};
      font-weight: bold;
    }
  }
`},90333:function(_,i,e){"use strict";e.d(i,{O:function(){return l}});var n=e(21428);const l=n.Wx},25148:function(_,i,e){"use strict";e.d(i,{Q:function(){return g}});var n=e(74512),l=e(32735),s=e(14911),t=e(8471),a=e(73342),d=e(69783),o=e(87933),h=e(49372);const c=(0,t.ZP)(d.G)`
  &[aria-disabled='true'] {
    ${a.sg}
    &:active {
      ${a.sg}
    }
  }
  &:hover {
    ${a.yP}
  }
  &:active {
    ${a.tB}
  }
  ${a.PD}
`,g=l.forwardRef(({variant:x="default",startIcon:E,endIcon:m,disabled:u=!1,children:p,size:f="S",href:v,to:M,...C},j)=>{const P=v?"_blank":void 0,O=v?"noreferrer noopener":void 0,R=f==="S"?2:"10px",B=4;return(0,n.jsxs)(c,{ref:j,"aria-disabled":u,size:f,variant:x,target:P,rel:O,to:u?void 0:M,href:u?"#":v,background:"buttonPrimary600",borderColor:"buttonPrimary600",hasRadius:!0,gap:2,inline:!0,paddingBottom:R,paddingLeft:B,paddingRight:B,paddingTop:R,pointerEvents:u?"none":void 0,...C,as:M&&!u?s.OL:"a",children:[E&&(0,n.jsx)(o.k,{"aria-hidden":!0,children:E}),(0,n.jsx)(h.Z,{variant:f==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:p}),m&&(0,n.jsx)(o.k,{"aria-hidden":!0,children:m})]})})},27799:function(_,i,e){"use strict";e.d(i,{Q:function(){return t}});var n=e(74512),l=e(8471),s=e(6407);const t=({options:d,...o})=>(0,n.jsx)(s.NU,{...o,children:d.map(h=>"children"in h?(0,n.jsx)(s.Ab,{label:h.label,values:h.children.map(c=>c.value.toString()),children:h.children.map(c=>(0,n.jsx)(a,{value:c.value,children:c.label},c.value))},h.label):(0,n.jsx)(s.ML,{value:h.value,children:h.label},h.value))}),a=(0,l.ZP)(s.ML)`
  padding-left: ${({theme:d})=>d.spaces[7]};
`},28832:function(_,i,e){"use strict";e.d(i,{z:function(){return m}});var n=e(74512),l=e(32735),s=e(16899),t=e(60216),a=e(8471),d=e(74971),o=e(72850),h=e(87933),c=e(49372);const g=(0,a.ZP)(o.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:u})=>u.colors.neutral700};
    }
  }
`,x=a.ZP.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,E=a.ZP.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:u})=>u?"0deg":"180deg"});
`,m=({label:u,children:p,id:f})=>{const[v,M]=(0,l.useState)(!0),C=(0,d.M)(f);return(0,n.jsxs)(o.x,{children:[(0,n.jsx)(g,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsx)(h.k,{justifyContent:"space-between",children:(0,n.jsxs)(x,{onClick:()=>{M(j=>!j)},"aria-expanded":v,"aria-controls":C,children:[(0,n.jsx)(E,{rotated:v,children:(0,n.jsx)(s.Z,{"aria-hidden":!0})}),(0,n.jsx)(o.x,{paddingLeft:2,children:(0,n.jsx)(c.Z,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:u})})]})})}),v&&(0,n.jsx)("ul",{id:C,children:l.Children.map(p,(j,P)=>(0,n.jsx)("li",{children:j},P))})]})};m.defaultProps={id:void 0},m.propTypes={children:t.node.isRequired,id:t.string,label:t.string.isRequired}},35071:function(_,i,e){"use strict";e.d(i,{Z:function(){return s}});var n=e(74512);const l=t=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...t,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#4945FF",stroke:"#4945FF",rx:2.5}),(0,n.jsx)("path",{fill:"#fff",d:"M15.328 10.54h1.723c.012-.089.012-.165.012-.253 0-1.676-1.471-2.959-3.41-2.959-2.696 0-4.647 2.22-4.647 5.344 0 2.15 1.383 3.545 3.504 3.545 2.045 0 3.597-1.154 3.967-2.936h-1.752c-.276.826-1.102 1.371-2.063 1.371-1.137 0-1.846-.802-1.846-2.103 0-2.08 1.19-3.65 2.725-3.65 1.037 0 1.746.62 1.787 1.558v.082ZM21.053 16l1.488-6.943h2.531l.31-1.512H18.54l-.31 1.512h2.53L19.272 16h1.782Z"})]}),s=l},26253:function(_,i,e){"use strict";e.d(i,{Z:function(){return s}});var n=e(74512);const l=t=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:[(0,n.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M20.4 14.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM3.6 14.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM20.4 22.8a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM20.4 6a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z",clipRule:"evenodd"}),(0,n.jsx)("path",{fill:"#212134",d:"M6.24 11.28H18v1.44H6.24v-1.44Z"}),(0,n.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M3.6 22.8a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm0 1.2a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2ZM3.6 6a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm0 1.2a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z",clipRule:"evenodd"}),(0,n.jsx)("path",{fill:"#212134",d:"M18.328 13.863 6.49 19.765l-.652-1.307 11.838-5.902.652 1.307ZM18.358 10.078 6.398 4.115l-.646 1.294 11.961 5.963.645-1.294Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M18.323 18.83 6.252 12.813l-.643 1.29 12.071 6.019.643-1.29ZM18.136 5.228 6.207 11.176l-.653-1.311 11.928-5.948.654 1.311Z"})]}),s=l},79634:function(_,i,e){"use strict";e.d(i,{Z:function(){return s}});var n=e(74512);const l=t=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...t,children:[(0,n.jsx)("path",{fill:"#212134",d:"M17.76 11.28H6v1.44h11.76v-1.44Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M18.129 10.699 9.782 4.523l-.86 1.162 8.347 6.177.86-1.163ZM18.101 13.354 9.755 19.53l-.864-1.167 8.347-6.176.863 1.167Z"}),(0,n.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M20.4 14.399a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm0 1.2a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2ZM3.6 14.399a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm0 1.2a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2ZM7.2 22.8a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm0 1.2a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2ZM7.2 6a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm0 1.2a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z",clipRule:"evenodd"})]}),s=l},32548:function(_,i,e){"use strict";e.d(i,{Z:function(){return s}});var n=e(74512);const l=t=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:[(0,n.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M3.6 14.132a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z",clipRule:"evenodd"}),(0,n.jsx)("path",{fill:"#212134",d:"M6.24 11.011h13.44v1.44H6.24v-1.44Z"}),(0,n.jsx)("path",{fill:"#212134",d:"m5.872 10.43 8.347-6.176.86 1.163-8.347 6.176-.86-1.162ZM5.9 13.087l8.346 6.177.864-1.168-8.347-6.176-.864 1.167ZM18.72 8.613l5.28 3.12-5.28 3.12v-6.24Z"}),(0,n.jsx)("path",{fill:"#212134",d:"M12.72 2.633 18.82 2 16.43 7.649 12.72 2.633ZM12.72 21.307l6.1.633-2.389-5.649-3.711 5.016Z"})]}),s=l},7733:function(_,i,e){"use strict";e.d(i,{Z:function(){return s}});var n=e(74512);const l=t=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 25",...t,children:[(0,n.jsx)("path",{fill:"#212134",d:"M6.24 11.28H18v1.44H6.24v-1.44Z"}),(0,n.jsx)("path",{fill:"#212134",d:"m5.871 10.699 8.347-6.176.86 1.162-8.347 6.177-.86-1.163ZM5.899 13.354l8.346 6.176.864-1.167-8.347-6.176-.863 1.167Z"}),(0,n.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M3.6 14.399a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM20.4 14.399a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM16.8 22.8a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM16.8 6a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z",clipRule:"evenodd"})]}),s=l},10168:function(_,i,e){"use strict";e.d(i,{Z:function(){return s}});var n=e(74512);const l=t=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:[(0,n.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M3.6 14a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2ZM20.4 14a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Zm0 1.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2Z",clipRule:"evenodd"}),(0,n.jsx)("path",{fill:"#212134",d:"M6.24 10.881H18v1.44H6.24v-1.44Z"})]}),s=l},25449:function(_,i,e){"use strict";e.d(i,{Z:function(){return s}});var n=e(74512);const l=t=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...t,children:(0,n.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M7.128 12.321a3.601 3.601 0 1 1 0-1.44H18.72v-2.4L24 11.6l-5.28 3.12v-2.4H7.128ZM6 11.6a2.4 2.4 0 1 1-4.8 0 2.4 2.4 0 0 1 4.8 0Z",clipRule:"evenodd"})}),s=l},89135:function(_,i,e){"use strict";e.d(i,{Z:function(){return s}});var n=e(74512);const l=t=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...t,children:[(0,n.jsx)("path",{fill:"#FDF4DC",stroke:"#FAE7B9",d:"M.5 3A2.5 2.5 0 0 1 3 .5h26A2.5 2.5 0 0 1 31.5 3v18a2.5 2.5 0 0 1-2.5 2.5H3A2.5 2.5 0 0 1 .5 21V3Z"}),(0,n.jsx)("path",{fill:"#D9822F",d:"M20.158 11.995c0-.591-.463-1.073-1.045-1.11H13.53V9.245a2.05 2.05 0 0 1 2.046-2.049c1.13 0 2.048.784 2.049 1.913 0 .24.194.433.433.433h.33a.433.433 0 0 0 .433-.433C18.82 7.32 17.365 5.999 15.577 6a3.246 3.246 0 0 0-3.241 3.244v1.642h-.223c-.615 0-1.113.499-1.113 1.114v4.887c.001.615.5 1.113 1.115 1.113l6.93-.003c.616 0 1.114-.5 1.114-1.115l-.001-4.887Z"})]}),s=l},61642:function(_,i,e){"use strict";e.d(i,{Z:function(){return s}});var n=e(74512);const l=t=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...t,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#EAF5FF",stroke:"#B8E1FF",rx:2.5}),(0,n.jsx)("path",{fill:"#0C75AF",fillRule:"evenodd",d:"M19.286 9.286v-.857a.397.397 0 0 0-.138-.302A.465.465 0 0 0 18.82 8h-8.357a.465.465 0 0 0-.326.127.397.397 0 0 0-.138.302v.857c0 .116.046.216.138.301.092.085.2.127.326.127h8.357a.465.465 0 0 0 .327-.127.397.397 0 0 0 .138-.301Zm2.785 2.713v.857a.397.397 0 0 1-.137.301.465.465 0 0 1-.327.128H10.464a.465.465 0 0 1-.326-.128.397.397 0 0 1-.138-.301v-.857c0-.116.046-.217.138-.302a.465.465 0 0 1 .326-.127h11.143c.126 0 .235.043.327.127a.397.397 0 0 1 .137.302Zm-1.857 3.574v.857a.397.397 0 0 1-.137.302.465.465 0 0 1-.327.127h-9.286a.465.465 0 0 1-.326-.127.397.397 0 0 1-.138-.302v-.857c0-.116.046-.216.138-.301a.465.465 0 0 1 .326-.127h9.286c.126 0 .235.042.326.127a.397.397 0 0 1 .138.301Z",clipRule:"evenodd"})]}),s=l},58656:function(_,i,e){"use strict";e.d(i,{Z:function(){return s}});var n=e(74512);const l=t=>(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 32 24",...t,children:[(0,n.jsx)("rect",{width:31,height:23,x:.5,y:.5,fill:"#0C75AF",stroke:"#0C75AF",rx:2.5}),(0,n.jsx)("path",{fill:"#fff",d:"M8.523 13.586c.106 1.64 1.418 2.63 3.34 2.63 2.098 0 3.516-1.113 3.516-2.788 0-1.143-.65-1.846-2.086-2.297l-.867-.27c-.797-.252-1.137-.597-1.137-1.066 0-.598.633-1.031 1.459-1.031.873 0 1.512.474 1.617 1.183h1.67c-.053-1.54-1.36-2.619-3.217-2.619-1.91 0-3.328 1.131-3.328 2.678 0 1.09.715 1.922 1.963 2.309l.879.275c.914.287 1.266.592 1.266 1.084 0 .662-.657 1.107-1.606 1.107-.914 0-1.635-.469-1.758-1.195h-1.71ZM20.107 16l1.489-6.943h2.531l.31-1.512h-6.843l-.31 1.512h2.53L18.326 16h1.781Z"})]}),s=l}}]);
