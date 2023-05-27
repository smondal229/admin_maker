"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("react/jsx-runtime"),i=require("react"),d=require("styled-components"),c=require("../themes/utils.cjs"),p=require("../Flex/Flex.cjs"),t=e=>e&&e.__esModule?e:{default:e},f=t(i),B=t(d),r=B.default(p.Flex)`
  > svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};

    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${c.buttonFocusStyle}
`,s=f.default.forwardRef(({disabled:e,children:a,background:o="neutral0",...u},n)=>l.jsx(r,{ref:n,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:o,borderColor:"neutral200",cursor:"pointer",...u,children:a}));s.displayName="BaseButton";exports.BaseButton=s;exports.BaseButtonWrapper=r;
