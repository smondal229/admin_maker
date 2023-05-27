"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),L=require("react"),g=require("@strapi/icons"),j=require("prop-types"),q=require("styled-components"),u=require("./PaginationContext.cjs"),R=require("../../themes/utils.cjs"),m=require("../../Typography/Typography.cjs"),w=require("../../BaseLink/BaseLink.cjs"),l=require("../../VisuallyHidden/VisuallyHidden.cjs"),c=e=>e&&e.__esModule?e:{default:e},p=c(L),d=c(j),n=c(q),x=n.default(m.Typography)`
  line-height: revert;
`,T={active:!0},h=n.default(w.BaseLink).withConfig({shouldForwardProp:(e,i)=>!T[e]&&i(e)})`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({active:e,theme:i})=>e?i.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${R.buttonFocusStyle}
`,$=n.default(h)`
  color: ${({theme:e,active:i})=>i?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,active:i})=>i?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`,P=n.default(h)`
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
`,_=n.default(h)`
  color: ${({theme:e})=>e.colors.neutral800};
`,f=p.default.forwardRef(({children:e,...i},a)=>{const{activePage:s}=u.usePagination(),t=s===1;return r.jsxs(P,{ref:a,"aria-disabled":t,tabIndex:t?-1:void 0,...i,children:[r.jsx(l.VisuallyHidden,{children:e}),r.jsx(g.ChevronLeft,{"aria-hidden":!0})]})});f.displayName="PreviousLink";const v=p.default.forwardRef(({children:e,...i},a)=>{const{activePage:s,pageCount:t}=u.usePagination(),o=s===t;return r.jsxs(P,{ref:a,"aria-disabled":o,tabIndex:o?-1:void 0,...i,children:[r.jsx(l.VisuallyHidden,{children:e}),r.jsx(g.ChevronRight,{"aria-hidden":!0})]})});v.displayName="NextLink";const y=p.default.forwardRef(({number:e,children:i,...a},s)=>{const{activePage:t}=u.usePagination(),o=t===e;return r.jsxs($,{ref:s,...a,active:o,children:[r.jsx(l.VisuallyHidden,{children:i}),r.jsx(x,{"aria-hidden":!0,variant:"pi",fontWeight:o?"bold":null,children:e})]})});y.displayName="PageLink";const b=({children:e,...i})=>r.jsxs(_,{...i,as:"div",children:[r.jsx(l.VisuallyHidden,{children:e}),r.jsx(x,{"aria-hidden":!0,variant:"pi",children:"…"})]});y.propTypes={children:d.default.node.isRequired,number:d.default.number.isRequired};const k={children:d.default.node.isRequired};v.propTypes=k;f.propTypes=k;b.propTypes={children:d.default.node.isRequired};exports.Dots=b;exports.NextLink=v;exports.PageLink=y;exports.PreviousLink=f;
