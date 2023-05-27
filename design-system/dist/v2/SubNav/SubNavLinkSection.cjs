"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),l=require("react"),f=require("@strapi/icons"),y=require("prop-types"),j=require("styled-components"),b=require("../../hooks/useId.cjs"),o=require("../../Box/Box.cjs"),q=require("../../Flex/Flex.cjs"),S=require("../../Typography/Typography.cjs"),c=e=>e&&e.__esModule?e:{default:e},i=c(y),s=c(j),m=s.default(o.Box)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,k=s.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,v=s.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,d=({label:e,children:u,id:p})=>{const[n,g]=l.useState(!0),a=b.useId(p),h=()=>{g(r=>!r)};return t.jsxs(o.Box,{children:[t.jsx(m,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:t.jsx(q.Flex,{justifyContent:"space-between",children:t.jsxs(k,{onClick:h,"aria-expanded":n,"aria-controls":a,children:[t.jsx(v,{rotated:n,children:t.jsx(f.CarretDown,{"aria-hidden":!0})}),t.jsx(o.Box,{paddingLeft:2,children:t.jsx(S.Typography,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),n&&t.jsx("ul",{id:a,children:l.Children.map(u,(r,x)=>t.jsx("li",{children:r},x))})]})};d.defaultProps={id:void 0};d.propTypes={children:i.default.node.isRequired,id:i.default.string,label:i.default.string.isRequired};exports.SubNavLinkSection=d;
