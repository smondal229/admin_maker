"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react/jsx-runtime"),p=require("react"),g=require("prop-types"),b=require("styled-components"),P=require("./PaginationContext.cjs"),_=require("../../Flex/Flex.cjs"),s=e=>e&&e.__esModule?e:{default:e};function m(e){if(e&&e.__esModule)return e;const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:()=>e[t]})}}return n.default=e,Object.freeze(n)}const l=m(p),a=s(g),u=s(b),j=u.default.nav``,x=u.default(_.Flex)`
  & > * + * {
    margin-left: ${({theme:e})=>e.spaces[1]};
  }
`,o=({children:e,label:n,activePage:t,pageCount:r})=>{const c=l.useMemo(()=>({activePage:t,pageCount:r}),[t,r]);return i.jsx(P.PaginationContext.Provider,{value:c,children:i.jsx(j,{"aria-label":n,children:i.jsx(x,{as:"ul",children:l.Children.map(e,(d,f)=>i.jsx("li",{children:d},f))})})})};o.defaultProps={label:"pagination"};o.propTypes={activePage:a.default.number.isRequired,children:a.default.node.isRequired,label:a.default.string,pageCount:a.default.number.isRequired};exports.Pagination=o;
