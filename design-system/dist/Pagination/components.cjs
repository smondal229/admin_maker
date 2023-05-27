"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime");require("react");const g=require("@strapi/icons"),q=require("prop-types"),j=require("react-router-dom"),k=require("styled-components"),u=require("./PaginationContext.cjs"),L=require("../themes/utils.cjs"),m=require("../Typography/Typography.cjs"),d=require("../VisuallyHidden/VisuallyHidden.cjs"),y=e=>e&&e.__esModule?e:{default:e},a=y(q),n=y(k),f=n.default(m.Typography)`
  line-height: revert;
`,T={active:!0},c=n.default(j.NavLink).withConfig({shouldForwardProp:(e,i)=>!T[e]&&i(e)})`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({active:e,theme:i})=>e?i.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${L.buttonFocusStyle}
`,$=n.default(c)`
  color: ${({theme:e,active:i})=>i?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,active:i})=>i?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`,x=n.default(c)`
  font-size: 0.7rem;
  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`,R=n.default(c)`
  color: ${({theme:e})=>e.colors.neutral800};
`,p=({children:e,to:i,...o})=>{const{activePage:s}=u.usePagination(),t=s===1;return r.jsxs(x,{to:t?"#":i,"aria-disabled":t,tabIndex:t?-1:void 0,...o,children:[r.jsx(d.VisuallyHidden,{children:e}),r.jsx(g.ChevronLeft,{"aria-hidden":!0})]})};p.displayName="PreviousLink";const h=({children:e,to:i,...o})=>{const{activePage:s,pageCount:t}=u.usePagination(),l=s===t;return r.jsxs(x,{to:l?"#":i,"aria-disabled":l,tabIndex:l?-1:void 0,...o,children:[r.jsx(d.VisuallyHidden,{children:e}),r.jsx(g.ChevronRight,{"aria-hidden":!0})]})};h.displayName="NextLink";const v=({number:e,children:i,...o})=>{const{activePage:s}=u.usePagination(),t=s===e;return r.jsxs($,{...o,active:t,children:[r.jsx(d.VisuallyHidden,{children:i}),r.jsx(f,{"aria-hidden":!0,variant:"pi",fontWeight:t?"bold":null,children:e})]})};v.displayName="PageLink";const P=({children:e,...i})=>r.jsxs(R,{...i,as:"div",children:[r.jsx(d.VisuallyHidden,{children:e}),r.jsx(f,{"aria-hidden":!0,variant:"pi",children:"…"})]});v.propTypes={children:a.default.node.isRequired,number:a.default.number.isRequired};const b={children:a.default.node.isRequired,to:a.default.string.isRequired};h.propTypes=b;p.propTypes=b;P.propTypes={children:a.default.node.isRequired};exports.Dots=P;exports.NextLink=h;exports.PageLink=v;exports.PreviousLink=p;
