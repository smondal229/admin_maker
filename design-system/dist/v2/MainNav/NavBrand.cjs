"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),g=require("react"),f=require("prop-types"),y=require("styled-components"),j=require("./MainNavContext.cjs"),h=require("../../BaseLink/BaseLink.cjs"),t=require("../../Box/Box.cjs"),u=require("../../VisuallyHidden/VisuallyHidden.cjs"),q=require("../../Flex/Flex.cjs"),c=require("../../Typography/Typography.cjs"),i=e=>e&&e.__esModule?e:{default:e},B=i(g),r=i(f),x=i(y),p=x.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};

  svg,
  img {
    height: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
    width: ${({condensed:e})=>e?`${40/16}rem`:`${32/16}rem`};
  }
`,m=x.default(h.BaseLink)`
  text-decoration: unset;
  color: inherit;
`,d=B.default.forwardRef(({workplace:e,title:s,icon:a,...o},l)=>j.useMainNav()?n.jsx(h.BaseLink,{ref:l,...o,children:n.jsx(t.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:n.jsxs(p,{condensed:!0,children:[a,n.jsxs(u.VisuallyHidden,{children:[n.jsx("span",{children:s}),n.jsx("span",{children:e})]})]})})}):n.jsx(m,{ref:l,...o,children:n.jsx(t.Box,{paddingLeft:3,paddingRight:3,paddingTop:4,paddingBottom:4,children:n.jsxs(q.Flex,{children:[n.jsx(p,{"aria-hidden":!0,tabIndex:-1,children:a}),n.jsxs(t.Box,{paddingLeft:2,children:[n.jsxs(c.Typography,{fontWeight:"bold",textColor:"neutral800",as:"span",children:[s,n.jsx(u.VisuallyHidden,{as:"span",children:e})]}),n.jsx(c.Typography,{variant:"pi",as:"p",textColor:"neutral600","aria-hidden":!0,children:e})]})]})})}));d.displayName="NavBrand";d.defaultProps={to:"/"};d.propTypes={icon:r.default.node.isRequired,title:r.default.string.isRequired,to:r.default.string,workplace:r.default.string.isRequired};exports.NavBrand=d;
