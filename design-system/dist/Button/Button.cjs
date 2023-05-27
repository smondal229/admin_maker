"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),S=require("react"),j=require("@strapi/icons"),c=require("styled-components"),u=require("./constants.cjs"),r=require("./utils.cjs"),v=require("../BaseButton/BaseButton.cjs"),_=require("../Box/Box.cjs"),$=require("../Typography/Typography.cjs"),T=require("../Flex/Flex.cjs"),f=e=>e&&e.__esModule?e:{default:e},D=f(S),g=f(c),R=c.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,C=g.default.div`
  animation: ${R} 2s infinite linear;
  will-change: transform;
`,y=g.default(v.BaseButton)`
  height: ${({theme:e,size:n})=>e.sizes.button[n]};

  &[aria-disabled='true'] {
    ${r.getDisabledStyle}

    &:active {
      ${r.getDisabledStyle}
    }
  }

  &:hover {
    ${r.getHoverStyle}
  }

  &:active {
    ${r.getActiveStyle}
  }

  ${r.getVariantStyle}
`,p=D.default.forwardRef(({variant:e=u.DEFAULT,startIcon:n,endIcon:s,disabled:h=!1,children:b,onClick:d,size:l=u.BUTTON_SIZES[0],loading:a=!1,fullWidth:i=!1,...m},x)=>{const o=h||a,B=q=>{!o&&d&&d(q)};return t.jsxs(y,{ref:x,"aria-disabled":o,disabled:o,size:l,variant:e,onClick:B,fullWidth:i,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:i,justifyContent:i?"center":void 0,paddingLeft:4,paddingRight:4,width:i?"100%":void 0,...m,children:[(n||a)&&t.jsx(_.Box,{"aria-hidden":!0,children:a?t.jsx(C,{children:t.jsx(j.Loader,{})}):n}),t.jsx($.Typography,{variant:l==="S"?"pi":void 0,fontWeight:"bold",lineHeight:0,textColor:"buttonNeutral0",children:b}),s&&t.jsx(T.Flex,{"aria-hidden":!0,children:s})]})});p.displayName="Button";exports.Button=p;exports.ButtonWrapper=y;
