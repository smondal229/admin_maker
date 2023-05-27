"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime");require("react");const l=require("prop-types"),u=require("styled-components"),c=require("../Box/Box.cjs"),s=require("../Flex/Flex.cjs"),n=e=>e&&e.__esModule?e:{default:e},r=n(l),i=n(u),p=i.default(c.Box)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,d=i.default(s.Flex)`
  & > * + * {
    margin-left: ${({theme:e})=>e.spaces[2]};
  }
`,o=({startActions:e,endActions:a})=>t.jsx(p,{paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,background:"neutral100",children:t.jsxs(s.Flex,{justifyContent:"space-between",children:[t.jsx(d,{children:e}),t.jsx(d,{children:a})]})});o.defaultProps={endActions:void 0,startActions:void 0};o.propTypes={endActions:r.default.node,startActions:r.default.node};exports.ModalFooter=o;
