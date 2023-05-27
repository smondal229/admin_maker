"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime");require("react");const a=require("prop-types"),l=require("styled-components"),t=require("../Box/Box.cjs"),c=require("../Divider/Divider.cjs"),p=require("../Flex/Flex.cjs"),h=require("../Typography/Typography.cjs"),o=e=>e&&e.__esModule?e:{default:e},i=o(a),d=o(l),x=d.default(t.Box)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,y=d.default(t.Box)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,s=({children:e,icon:n,...u})=>r.jsxs("div",{children:[r.jsx(c.Divider,{}),r.jsx(y,{as:"button",background:"primary100",padding:5,...u,children:r.jsxs(p.Flex,{children:[r.jsx(x,{"aria-hidden":!0,background:"primary200",children:n}),r.jsx(t.Box,{paddingLeft:3,children:r.jsx(h.Typography,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:e})})]})})]});s.propTypes={children:i.default.string.isRequired,icon:i.default.node.isRequired};exports.TFooter=s;
