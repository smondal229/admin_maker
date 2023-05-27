"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime");require("react");const i=require("prop-types"),l=require("styled-components"),n=require("../BaseRadio/BaseRadio.cjs"),u=require("../Typography/Typography.cjs"),d=require("../Box/Box.cjs"),o=e=>e&&e.__esModule?e:{default:e},r=o(i),c=o(l),p=c.default(u.Typography)`
  display: flex;
  align-items: center;
`,s=({children:e,...a})=>t.jsxs(p,{as:"label",textColor:"neutral800",children:[t.jsx(n.BaseRadio,{...a}),t.jsx(d.Box,{paddingLeft:2,children:e})]});s.propTypes={children:r.default.node.isRequired,value:r.default.any.isRequired};exports.Radio=s;
