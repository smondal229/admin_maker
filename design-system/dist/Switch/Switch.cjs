"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),b=require("react"),h=require("prop-types"),g=require("styled-components"),m=require("../Flex/Flex.cjs"),x=require("../Box/Box.cjs"),a=e=>e&&e.__esModule?e:{default:e},$=a(b),t=a(h),l=a(g),s=l.default.div`
  background: ${({theme:e})=>e.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24/16}rem;
  width: ${40/16}rem;

  & span {
    font-size: ${({visibleLabels:e})=>e?"1rem":0};
  }

  &:before {
    content: '';
    background: ${({theme:e})=>e.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({theme:e})=>e.spaces[1]};
    top: ${({theme:e})=>e.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`,q=l.default.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${s} {
    background: ${({theme:e})=>e.colors.success500};
  }

  &[aria-checked='true'] ${s}:before {
    transform: translateX(1rem);
  }
`,o=$.default.forwardRef(({label:e,onChange:u,onLabel:i,offLabel:d,selected:n,visibleLabels:c,...f},p)=>r.jsx(q,{ref:p,role:"switch","aria-checked":n,"aria-label":e,onClick:u,visibleLabels:c,type:"button",...f,children:r.jsxs(m.Flex,{children:[r.jsxs(s,{children:[r.jsx("span",{children:i}),r.jsx("span",{children:d})]}),c&&r.jsx(x.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:n?"success600":"danger600",children:n?i:d})]})}));o.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1};o.propTypes={label:t.default.string.isRequired,offLabel:t.default.string,onChange:t.default.func.isRequired,onLabel:t.default.string,selected:t.default.bool.isRequired,visibleLabels:t.default.bool};o.displayName="Switch";exports.Switch=o;
