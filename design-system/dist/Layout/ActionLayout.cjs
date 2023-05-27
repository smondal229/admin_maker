"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime");require("react");const a=require("prop-types"),c=require("styled-components"),l=require("../Flex/Flex.cjs"),r=require("../Box/Box.cjs"),i=e=>e&&e.__esModule?e:{default:e},s=i(a),d=i(c),u=d.default(l.Flex)`
  & > * + * {
    margin-left: ${({theme:e})=>e.spaces[2]};
  }

  margin-left: ${({pullRight:e})=>e?"auto":void 0};
`,p=d.default(u)`
  flex-shrink: 0;
`,n=({startActions:e,endActions:o})=>e||o?t.jsx(r.Box,{paddingLeft:10,paddingRight:10,children:t.jsx(r.Box,{paddingBottom:4,children:t.jsxs(l.Flex,{justifyContent:"space-between",alignItems:"flex-start",children:[e&&t.jsx(u,{wrap:"wrap",children:e}),o&&t.jsx(p,{pullRight:!0,children:o})]})})}):null;n.defaultProps={endActions:void 0,startActions:void 0};n.propTypes={endActions:s.default.node,startActions:s.default.node};exports.ActionLayout=n;
