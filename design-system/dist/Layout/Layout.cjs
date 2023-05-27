"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime");require("react");const u=require("prop-types"),l=require("styled-components"),d=require("../Box/Box.cjs"),s=e=>e&&e.__esModule?e:{default:e},r=s(u),n=s(l),a=n.default(d.Box)`
  display: grid;
  grid-template-columns: ${({hasSideNav:e})=>e?"auto 1fr":"1fr"};
`,c=n.default(d.Box)`
  overflow-x: hidden;
`,t=({sideNav:e,children:i})=>o.jsxs(a,{hasSideNav:!!e,children:[e,o.jsx(c,{paddingBottom:10,children:i})]});t.defaultProps={sideNav:void 0};t.propTypes={children:r.default.node.isRequired,sideNav:r.default.node};exports.Layout=t;
