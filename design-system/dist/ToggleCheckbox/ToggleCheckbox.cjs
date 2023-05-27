"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime"),$=require("react"),_=require("prop-types"),L=require("styled-components"),m=require("../themes/sizes.cjs"),z=require("../themes/utils.cjs"),S=require("../Box/Box.cjs"),F=require("../Flex/Flex.cjs"),W=require("../Field/FieldContext.cjs"),B=require("../VisuallyHidden/VisuallyHidden.cjs"),h=require("../Typography/Typography.cjs"),c=e=>e&&e.__esModule?e:{default:e},M=c($),n=c(_),i=c(L),P=i.default.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`,I=i.default(S.Box)`
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${z.inputFocusStyle()}
`,g=i.default(F.Flex).attrs({hasRadius:!0})`
  background-color: ${({theme:e,checked:l,disabled:a})=>l?a?e.colors.neutral200:e.colors.neutral0:"transparent"};
  border: 1px solid
    ${({theme:e,checked:l,disabled:a})=>l&&l!==null?a?e.colors.neutral300:e.colors.neutral200:a?e.colors.neutral150:e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({size:e})=>`${e==="S"?"2px":"6px"}`};
  padding-bottom: ${({size:e})=>`${e==="S"?"2px":"6px"}`};
`,O=i.default.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`,s=M.default.forwardRef(({size:e,onLabel:l,offLabel:a,children:x,checked:t,disabled:r,onChange:b,...y},C)=>{const{error:q,hint:w,id:p,name:j,required:T}=W.useField(),f="neutral600";let v=!t&&t!==null?"danger700":f,R=t?"primary600":f;const k=d=>{r||b(d)};let u;return q?u=`${p}-error`:w&&(u=`${p}-hint`),o.jsxs(P,{children:[o.jsx(B.VisuallyHidden,{children:x}),o.jsxs(I,{hasRadius:!0,disabled:r,padding:1,display:"flex",background:r?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",children:[o.jsx(g,{size:e,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:t===null?!1:!t,disabled:r,children:o.jsx(h.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:r?"neutral700":v,children:a})}),o.jsx(g,{size:e,paddingLeft:3,paddingRight:3,justifyContent:"center",alignItems:"center","aria-hidden":!0,checked:t===null?!1:t,disabled:r,children:o.jsx(h.Typography,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:r?"neutral700":R,children:l})}),o.jsx(O,{type:"checkbox","aria-disabled":r,"aria-describedby":u,onChange:d=>k(d),name:j,ref:C,"aria-required":T,...y,checked:!(t===null||!t)})]})]})});s.displayName="ToggleCheckbox";s.defaultProps={disabled:!1,checked:!1,onChange:void 0,size:"M"};s.propTypes={checked:n.default.bool,children:n.default.string.isRequired,disabled:n.default.bool,offLabel:n.default.string.isRequired,onChange:n.default.func,onLabel:n.default.string.isRequired,size:n.default.oneOf(Object.keys(m.sizes.input))};exports.ToggleCheckbox=s;
