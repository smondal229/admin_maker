"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),s=require("@strapi/icons"),p=require("styled-components"),l=require("./utils.cjs"),g=require("../themes/utils.cjs"),t=require("../Box/Box.cjs"),f=require("../Flex/Flex.cjs"),i=require("../Typography/Typography.cjs"),j=e=>e&&e.__esModule?e:{default:e},d=j(p),B=d.default(t.Box)`
  flex: 1;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`,C=d.default(t.Box)`
  border: 1px solid ${l.handleBorderColor};
  background: ${l.handleBackgroundColor};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
`,y=d.default.button`
  border: none;
  background: transparent;
  font-size: ${12/16}rem;
  svg path {
    fill: ${({theme:e})=>e.colors.neutral700};
  }
  margin-top: ${({theme:e})=>e.spaces[1]};
  ${g.buttonFocusStyle};
`,$=d.default(t.Box)`
  font-size: ${20/16}rem;
  svg path {
    fill: ${l.handleIconColor};
  }
`,b=({variant:e,...o})=>e==="success"?r.jsx(s.CheckCircle,{...o}):e==="danger"||e==="warning"?r.jsx(s.ExclamationMarkCircle,{...o}):r.jsx(s.Information,{...o}),m=d.default(t.Box)`
  // Checked with the designers, validated
  padding-top: 1px;

  & a > span {
    color: ${l.handleIconColor};

    svg path {
      fill: ${l.handleIconColor};
    }
  }
`,q=({title:e,children:o,variant:n="default",onClose:c,closeLabel:u,titleAs:x="p",action:a,...h})=>r.jsx(C,{hasRadius:!0,paddingLeft:5,paddingRight:6,paddingTop:5,variant:n,...h,children:r.jsxs(f.Flex,{alignItems:"flex-start",children:[r.jsx($,{paddingRight:3,variant:n,children:r.jsx(b,{variant:n,"aria-hidden":!0})}),r.jsxs(B,{role:n==="danger"?"alert":"status",children:[r.jsx(t.Box,{paddingBottom:2,paddingRight:1,children:r.jsx(i.Typography,{fontWeight:"bold",textColor:"neutral800",as:x,children:e})}),r.jsx(t.Box,{paddingBottom:a?2:5,paddingRight:2,children:r.jsx(i.Typography,{as:"p",textColor:"neutral800",children:o})}),a&&r.jsx(m,{paddingBottom:5,variant:n,children:a})]}),r.jsx(y,{onClick:c,"aria-label":u,children:r.jsx(s.Cross,{"aria-hidden":!0})})]})});exports.Alert=q;
