"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("react/jsx-runtime");require("react");const a=require("prop-types"),c=require("styled-components"),p=require("./GridContext.cjs"),m=require("../Box/Box.cjs"),s=e=>e&&e.__esModule?e:{default:e},r=s(a),f=s(c),x=f.default.div`
  grid-column: span ${({col:e})=>e};
  max-width: 100%;

  ${({theme:e})=>e.mediaQueries.tablet} {
    grid-column: span ${({s:e})=>e};
  }

  ${({theme:e})=>e.mediaQueries.mobile} {
    grid-column: span ${({xs:e})=>e};
  }
`,t=({col:e,xs:i,s:d,...u})=>{const{gap:n,gridCols:l}=p.useGrid();return o.jsx(x,{gap:n,gridCols:l,col:e,xs:i,s:d,children:o.jsx(m.Box,{...u})})};t.defaultProps={col:void 0,s:void 0,xs:void 0};t.propTypes={col:r.default.number,s:r.default.number,xs:r.default.number};exports.GridItem=t;
