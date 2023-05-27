"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const l=require("react/jsx-runtime");require("react");const d=require("prop-types"),c=require("styled-components"),p=require("../Box/Box.cjs"),s=e=>e&&e.__esModule?e:{default:e},r=s(d),b=s(c),f=b.default(p.Box)`
  &:before {
    background-color: ${({theme:e})=>e.colors.neutral0};
    border-radius: ${({theme:e})=>e.borderRadius};
    bottom: 0;
    content: '';
    position: absolute;
    top: 0;
    width: ${({value:e})=>`${e}%`};
  }
`,o=({min:e,max:u,value:t,children:i,size:a,...n})=>l.jsx(f,{background:"neutral600",hasRadius:!0,"aria-label":i,"aria-valuemax":u,"aria-valuemin":e,"aria-valuenow":t,height:a==="S"?1:2,position:"relative",role:"progressbar",value:t,width:a==="S"?"78px":"102px",...n});o.defaultProps={min:0,max:100,value:0,size:"M"};o.propTypes={children:r.default.node.isRequired,max:r.default.number,min:r.default.number,size:r.default.oneOf(["S","M"]),value:r.default.number};exports.ProgressBar=o;
