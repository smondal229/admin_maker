"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime");require("react");const h=require("prop-types"),b=require("styled-components"),$=require("../Box/Box.cjs"),x=require("../Typography/Typography.cjs"),m=require("../Flex/Flex.cjs"),l=e=>e&&e.__esModule?e:{default:e},r=l(h),i=l(b),q=i.default.div`
  margin-right: ${({theme:e})=>e.spaces[3]};
  width: ${6/16}rem;
  height: ${6/16}rem;
  border-radius: 50%;
  background: ${({theme:e,backgroundColor:o})=>e.colors[o]};
`,S=i.default($.Box)`
  ${x.Typography} {
    color: ${({theme:e,textColor:o})=>e.colors[o]};
  }
`,s=({variant:e,showBullet:o,size:n,children:d,...c})=>{const p=`${e}100`,g=`${e}200`,f=`${e}600`,y=`${e}600`,u=n==="S"?2:5,a=n==="S"?1:4;return t.jsx(S,{borderColor:g,textColor:y,background:p,hasRadius:!0,paddingTop:a,paddingBottom:a,paddingLeft:u,paddingRight:u,...c,children:o?t.jsxs(m.Flex,{children:[t.jsx(q,{backgroundColor:f}),d]}):d})};s.defaultProps={showBullet:!0,size:"M",variant:"primary"};s.propTypes={children:r.default.node.isRequired,showBullet:r.default.bool,size:r.default.oneOf(["S","M"]),variant:r.default.oneOf(["alternative","danger","neutral","primary","secondary","success","warning"])};exports.Status=s;
