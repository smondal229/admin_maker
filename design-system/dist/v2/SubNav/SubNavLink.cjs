"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),x=require("react"),h=require("@strapi/icons"),b=require("prop-types"),$=require("styled-components"),s=require("../../Box/Box.cjs"),c=require("../../Typography/Typography.cjs"),a=require("../../Flex/Flex.cjs"),m=require("../../BaseLink/BaseLink.cjs"),i=e=>e&&e.__esModule?e:{default:e},v=i(x),t=i(b),n=i($),j=n.default(s.Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${c.Typography} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,u=n.default(h.Dot)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:o})=>o?e.colors.primary600:e.colors.neutral600};
  }
`,q=n.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,l=v.default.forwardRef(({children:e,icon:o,withBullet:d,as:p,isSubSectionChild:f,...y},g)=>r.jsxs(j,{as:p,icon:o,background:"neutral100",paddingLeft:f?9:7,paddingBottom:2,paddingTop:2,ref:g,...y,children:[r.jsxs(a.Flex,{children:[o?r.jsx(q,{children:o}):r.jsx(u,{}),r.jsx(s.Box,{paddingLeft:2,children:r.jsx(c.Typography,{as:"span",children:e})})]}),d&&r.jsx(s.Box,{as:a.Flex,paddingRight:4,children:r.jsx(u,{$active:!0})})]}));l.displayName="SubNavLink";l.defaultProps={as:m.BaseLink,icon:null,isSubSectionChild:!1,withBullet:!1};l.propTypes={as:t.default.elementType,children:t.default.node.isRequired,icon:t.default.element,isSubSectionChild:t.default.bool,withBullet:t.default.bool};exports.SubNavLink=l;
