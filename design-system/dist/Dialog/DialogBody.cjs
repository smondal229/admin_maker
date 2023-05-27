"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime");require("react");const r=require("prop-types"),l=require("styled-components"),n=require("../Box/Box.cjs"),a=require("../Flex/Flex.cjs"),s=e=>e&&e.__esModule?e:{default:e},i=s(r),c=s(l),u=c.default(n.Box)`
  svg {
    width: ${({theme:e})=>e.spaces[6]};
    height: ${({theme:e})=>e.spaces[6]};

    path {
      fill: ${({theme:e})=>e.colors.danger600};
    }
  }
`,o=({children:e,icon:d})=>t.jsxs(n.Box,{paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,children:[d&&t.jsx(u,{paddingBottom:2,children:t.jsx(a.Flex,{justifyContent:"center",children:d})}),e]});o.displayName="DialogBody";o.defaultProps={icon:void 0};o.propTypes={children:i.default.node.isRequired,icon:i.default.node};exports.DialogBody=o;
