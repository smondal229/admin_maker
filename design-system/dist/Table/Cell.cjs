"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime");require("react");const u=require("prop-types"),d=require("styled-components"),o=require("../RawTable/RawCell.cjs"),p=require("../Flex/Flex.cjs"),s=e=>e&&e.__esModule?e:{default:e},l=s(u),n=s(d),i=n.default(o.RawTd)`
  vertical-align: middle;
  text-align: left;
  color: ${({theme:e})=>e.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,f=n.default.span`
  svg {
    height: ${4/16}rem;
  }
`,r=({children:e,action:a,...c})=>t.jsx(i,{as:o.RawTh,...c,children:t.jsxs(p.Flex,{children:[e,t.jsx(f,{children:a})]})});r.defaultProps={action:void 0};r.propTypes={action:l.default.node,children:l.default.node.isRequired};const h=e=>t.jsx(i,{...e});exports.Td=h;exports.Th=r;
