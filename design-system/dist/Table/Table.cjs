"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),l=require("react"),w=require("prop-types"),x=require("styled-components"),T=require("../RawTable/RawTable.cjs"),n=require("../Box/Box.cjs"),c=e=>e&&e.__esModule?e:{default:e},i=c(w),a=c(x),R=a.default(n.Box)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,S=a.default(T.RawTable)`
  width: 100%;
  white-space: nowrap;
`,y=a.default(n.Box)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:e})=>e==="both"||e==="left"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({overflowing:e})=>e==="both"||e==="right"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    right: 0;
    top: 0;
  }
`,q=a.default(n.Box)`
  overflow-x: auto;
`,d=({colCount:e,rowCount:u,footer:f,...h})=>{const s=l.useRef(null),[b,o]=l.useState(),g=t=>{const p=t.target.scrollWidth-t.target.clientWidth;if(t.target.scrollLeft===0){o("right");return}if(t.target.scrollLeft===p){o("left");return}t.target.scrollLeft>0&&o("both")};return l.useEffect(()=>{s.current.scrollWidth>s.current.clientWidth&&o("right")},[]),r.jsxs(R,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[r.jsx(y,{overflowing:b,position:"relative",children:r.jsx(q,{ref:s,onScroll:g,paddingLeft:6,paddingRight:6,children:r.jsx(S,{colCount:e,rowCount:u,...h})})}),f]})};d.defaultProps={footer:void 0};d.propTypes={colCount:i.default.number.isRequired,footer:i.default.node,rowCount:i.default.number.isRequired};exports.Table=d;
