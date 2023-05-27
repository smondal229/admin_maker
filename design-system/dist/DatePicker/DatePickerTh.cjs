"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),o=require("styled-components"),n=require("../RawTable/RawCell.cjs"),s=require("../Flex/Flex.cjs"),l=require("../Typography/Typography.cjs"),a=require("../VisuallyHidden/VisuallyHidden.cjs"),u=e=>e&&e.__esModule?e:{default:e},r=u(o),c=r.default(n.RawTh)`
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,d=r.default(s.Flex)`
  height: ${24/16}rem;
  width: ${32/16}rem;
`,h=({children:e,...i})=>t.jsx(c,{...i,children:t.jsxs(d,{justifyContent:"center",children:[t.jsx(l.Typography,{variant:"pi",fontWeight:"bold",color:"neutral800","aria-hidden":!0,children:e.substr(0,2)}),t.jsx(a.VisuallyHidden,{children:t.jsx("span",{children:e})})]})});exports.DatePickerTh=h;
