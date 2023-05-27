"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),pe=require("react"),P=require("@strapi/icons"),n=require("@strapi/ui-primitives"),be=require("styled-components"),xe=require("../helpers/strings.cjs"),j=require("../hooks/useControllableState.cjs"),E=require("../hooks/useId.cjs"),fe=require("../hooks/useIntersection.cjs"),ge=require("../themes/utils.cjs"),me=require("../Loader/Loader.cjs"),y=require("../Box/Box.cjs"),d=require("../Typography/Typography.cjs"),Ce=require("../Field/Field.cjs"),h=require("../Flex/Flex.cjs"),$e=require("../Field/FieldLabel.cjs"),je=require("../Field/FieldHint.cjs"),ye=require("../Field/FieldError.cjs"),Ie=e=>e&&e.__esModule?e:{default:e};function we(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const l in e)if(l!=="default"){const a=Object.getOwnPropertyDescriptor(e,l);Object.defineProperty(r,l,a.get?a:{enumerable:!0,get:()=>e[l]})}}return r.default=e,Object.freeze(r)}const p=we(pe),s=Ie(be),z=({children:e,clearLabel:r="clear",creatable:l=!1,createMessage:a=c=>`Create "${c}"`,defaultFilterValue:x,defaultTextValue:f,defaultOpen:D=!1,open:H,onOpenChange:L,disabled:g=!1,error:m,filterValue:M,hasMoreItems:N=!1,hint:W,id:U,label:A,labelAction:G,loading:C=!1,loadingMessage:J="Loading content...",noOptionsMessage:K=()=>"No results found",onChange:I,onClear:$,onCreateOption:w,onFilterValueChange:Q,onInputChange:q,onTextValueChange:X,onLoadMore:F,placeholder:Y="Select or enter a value",required:T=!1,startIcon:v,textValue:Z,value:R})=>{const[c,ee]=j.useControllableState({prop:H,defaultProp:D,onChange:L}),[i,V]=j.useControllableState({prop:Z,defaultProp:f,onChange:X}),[oe,O]=j.useControllableState({prop:M,defaultProp:x,onChange:Q}),k=p.useRef(null),S=p.useRef(null),re=p.useRef(null),u=E.useId(U),te=t=>{$&&!g&&(V(""),O(""),$(t),S.current.focus())},ne=t=>{ee(t)},le=t=>{V(t)},se=t=>{O(t)},ae=t=>{q&&q(t)},ie=t=>{I&&I(t)},de=E.useId(),B=`intersection-${xe.stripReactIdOfColon(de)}`,ce=t=>{F&&N&&!C&&F(t)},_=()=>{w&&i&&w(i)};fe.useIntersection(k,ce,{selectorToWatch:`#${B}`,skipWhen:!c});const ue=`${u}-hint`,he=`${u}-error`;return o.jsx(Ce.Field,{hint:W,error:m,id:u,required:T,children:o.jsxs(h.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[o.jsx($e.FieldLabel,{action:G,children:A}),o.jsxs(n.Combobox.Root,{autocomplete:l?"list":"both",open:c,onOpenChange:ne,onTextValueChange:le,textValue:i,allowCustomValue:!0,disabled:g,required:T,value:R===null?void 0:R,onValueChange:ie,filterValue:oe,onFilterValueChange:se,children:[o.jsxs(Te,{$hasError:!!m,children:[o.jsxs(h.Flex,{flex:"1",as:"span",gap:3,children:[v?o.jsx(y.Box,{as:"span","aria-hidden":!0,children:v}):null,o.jsx(ve,{placeholder:Y,id:u,"aria-invalid":!!m,"aria-labelledby":`${ue} ${he}`,onChange:ae,ref:S})]}),o.jsxs(h.Flex,{as:"span",gap:3,children:[i&&$?o.jsx(Fe,{as:"button",hasRadius:!0,background:"transparent",type:"button",onClick:te,"aria-disabled":g,"aria-label":r,title:r,ref:re,children:o.jsx(P.Cross,{})}):null,o.jsx(Re,{children:o.jsx(P.CarretDown,{})})]})]}),o.jsx(n.Combobox.Portal,{children:o.jsx(Ve,{sideOffset:4,children:o.jsxs(Oe,{ref:k,children:[e,l?o.jsx(n.Combobox.CreateItem,{onPointerUp:_,onClick:_,asChild:!0,children:o.jsx(b,{children:o.jsx(d.Typography,{children:a(i??"")})})}):null,!l&&!C?o.jsx(n.Combobox.NoValueFound,{asChild:!0,children:o.jsx(b,{$hasHover:!1,children:o.jsx(d.Typography,{children:K(i??"")})})}):null,C?o.jsx(h.Flex,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:o.jsx(me.Loader,{small:!0,children:J})}):null,o.jsx(y.Box,{id:B,width:"100%",height:"1px"})]})})})]}),o.jsx(je.FieldHint,{}),o.jsx(ye.FieldError,{})]})})},qe=e=>o.jsx(z,{...e,creatable:!0}),Fe=s.default(y.Box)`
  border: none;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,Te=s.default(n.Combobox.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:r})=>r?e.colors.danger600:e.colors.neutral200};
  padding-right: ${({theme:e})=>e.spaces[3]};
  padding-left: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:r})=>ge.inputFocusStyle()({theme:e,hasError:r})};
`,ve=s.default(n.Combobox.TextInput)`
  width: 100%;
  font-size: ${14/16}rem;
  color: ${({theme:e})=>e.colors.neutral800};
  min-height: ${40/16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Re=s.default(n.Combobox.Icon)`
  & > svg {
    width: ${6/16}rem;

    & > path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Ve=s.default(n.Combobox.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices[1]};
`,Oe=s.default(n.Combobox.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,ke=p.forwardRef(({children:e,value:r,disabled:l,textValue:a,...x},f)=>o.jsx(n.Combobox.ComboboxItem,{asChild:!0,value:r,disabled:l,textValue:a,children:o.jsx(b,{ref:f,...x,children:o.jsx(n.Combobox.ItemText,{asChild:!0,children:o.jsx(d.Typography,{children:e})})})})),b=s.default.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({theme:e})=>e.colors.primary100};

    ${d.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:e,$hasHover:r=!0})=>r?e.colors.primary100:e.colors.neutral0};
  }

  &[data-highlighted] {
    ${d.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
      font-weight: bold;
    }
  }
`;exports.Combobox=z;exports.CreatableCombobox=qe;exports.Option=ke;exports.OptionBox=b;
