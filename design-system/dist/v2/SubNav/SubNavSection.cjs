"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),a=require("react"),b=require("prop-types"),S=require("styled-components"),q=require("./SubNavSectionLabel.cjs"),j=require("../../hooks/useId.cjs"),d=require("../../Box/Box.cjs"),v=require("../../Flex/Flex.cjs"),m=require("../../Badge/Badge.cjs"),u=e=>e&&e.__esModule?e:{default:e},r=u(b),y=u(S),_=y.default(d.Box)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,o=({collapsable:e,label:c,badgeLabel:i,children:p,id:g})=>{const[s,f]=a.useState(!0),l=j.useId(g),h=()=>{f(n=>!n)};return t.jsxs(v.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[t.jsx(_,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:t.jsxs(d.Box,{position:"relative",paddingRight:i?6:0,children:[t.jsx(q.SubNavSectionLabel,{onClick:h,ariaExpanded:s,ariaControls:l,collapsable:e,label:c}),i&&t.jsx(m.Badge,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:i})]})}),(!e||s)&&t.jsx("ol",{id:l,children:a.Children.map(p,(n,x)=>t.jsx("li",{children:n},x))})]})};o.defaultProps={badgeLabel:null,collapsable:!1,id:void 0};o.propTypes={badgeLabel:r.default.string,children:r.default.node.isRequired,collapsable:r.default.bool,id:r.default.string,label:r.default.string.isRequired};exports.SubNavSection=o;
