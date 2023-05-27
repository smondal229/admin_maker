"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime");require("react");const s=require("prop-types"),l=require("styled-components"),d=require("../Box/Box.cjs"),u=require("../Flex/Flex.cjs"),n=e=>e&&e.__esModule?e:{default:e},r=n(s),a=n(l),c=a.default(d.Box)`
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`,t=({startAction:e,endAction:i})=>o.jsx(c,{padding:4,children:o.jsxs(u.Flex,{gap:2,children:[e,i]})});t.displayName="DialogFooter";t.defaultProps={endAction:void 0,startAction:void 0};t.propTypes={endAction:r.default.node,startAction:r.default.node};exports.DialogFooter=t;
