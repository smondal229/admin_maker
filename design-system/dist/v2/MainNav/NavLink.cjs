"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),$=require("react"),x=require("prop-types"),v=require("styled-components"),b=require("./MainNavContext.cjs"),j=require("../../Box/Box.cjs"),m=require("../../BaseLink/BaseLink.cjs"),o=require("../../Typography/Typography.cjs"),y=require("../../Flex/Flex.cjs"),q=require("../../Badge/Badge.cjs"),T=require("../../Tooltip/Tooltip.cjs"),l=e=>e&&e.__esModule?e:{default:e},k=l($),a=l(x),n=l(v),p=n.default(j.Box)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`,g=n.default(m.BaseLink)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};

  ${o.Typography} {
    color: ${({theme:e})=>e.colors.neutral600};
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};

    ${o.Typography} {
      color: ${({theme:e})=>e.colors.neutral700};
    }

    svg path {
      fill: ${({theme:e})=>e.colors.neutral600};
    }
  }

  &.active {
    background: ${({theme:e})=>e.colors.primary100};

    svg path {
      fill: ${({theme:e})=>e.colors.primary600};
    }

    ${o.Typography} {
      color: ${({theme:e})=>e.colors.primary600};
      font-weight: 500;
    }
  }
`,h=n.default(y.Flex)`
  padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
`,f=n.default(q.Badge)`
  ${({theme:e,condensed:s})=>s&&`
	  position: absolute;
    // Values based on visual aspect 
    top: -${e.spaces[3]};
    right:  -${e.spaces[1]};
  `}

  ${o.Typography} {
    //find a solution to remove !important
    color: ${({theme:e})=>e.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({theme:e})=>e.spaces[6]};
  height: ${({theme:e})=>e.spaces[5]};
  padding: ${({theme:e})=>`0 ${e.spaces[2]}`};
  border-radius: ${({theme:e})=>e.spaces[10]};
  background: ${({theme:e})=>e.colors.primary600};
`,i=k.default.forwardRef(({children:e,icon:s,badgeContent:t,badgeAriaLabel:c,...d},u)=>b.useMainNav()?r.jsx(g,{ref:u,...d,children:r.jsx(T.Tooltip,{position:"right",label:e,children:r.jsxs(h,{as:"span",justifyContent:"center",children:[r.jsx(p,{"aria-hidden":!0,paddingRight:0,as:"span",children:s}),t&&r.jsx(f,{condensed:!0,"aria-label":c,children:t})]})})}):r.jsx(g,{ref:u,...d,children:r.jsxs(h,{as:"span",justifyContent:"space-between",children:[r.jsxs(y.Flex,{children:[r.jsx(p,{"aria-hidden":!0,paddingRight:3,as:"span",children:s}),r.jsx(o.Typography,{children:e})]}),t&&r.jsx(f,{justifyContent:"center","aria-label":c,children:t})]})}));i.displayName="NavLink";i.defaultProps={badgeContent:void 0,badgeAriaLabel:void 0};i.propTypes={badgeAriaLabel:a.default.string,badgeContent:a.default.oneOfType([a.default.string,a.default.number]),children:a.default.string.isRequired,icon:a.default.node.isRequired};exports.NavLink=i;
