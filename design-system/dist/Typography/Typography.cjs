"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("styled-components"),o=require("./utils.cjs"),r=require("../helpers/theme.cjs"),i=e=>e&&e.__esModule?e:{default:e},a=i(n),s={fontSize:!0,fontWeight:!0},l=a.default.span.withConfig({shouldForwardProp:(e,t)=>!s[e]&&t(e)})`
  ${o.variantStyle}
  ${o.ellipsisStyle}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:t})=>r.extractStyleFromTheme(e.fontWeights,t,void 0)};
  font-size: ${({theme:e,fontSize:t})=>r.extractStyleFromTheme(e.fontSizes,t,void 0)};
  line-height: ${({theme:e,lineHeight:t})=>r.extractStyleFromTheme(e.lineHeights,t,void 0)};
  color: ${o.handleColor};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`;exports.Typography=l;
