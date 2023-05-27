import { jsxs as d, jsx as i } from "react/jsx-runtime";
import "react";
import { ChevronLeft as y, ChevronRight as P } from "@strapi/icons";
import n from "prop-types";
import { NavLink as x } from "react-router-dom";
import s from "styled-components";
import { usePagination as p } from "./PaginationContext.js";
import { buttonFocusStyle as k } from "../themes/utils.js";
import { Typography as L } from "../Typography/Typography.js";
import { VisuallyHidden as l } from "../VisuallyHidden/VisuallyHidden.js";
const u = s(L)`
  line-height: revert;
`, $ = {
  active: !0
}, h = s(x).withConfig({
  shouldForwardProp: (e, r) => !$[e] && r(e)
})`
  padding: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  box-shadow: ${({ active: e, theme: r }) => e ? r.shadows.filterShadow : void 0};
  text-decoration: none;
  display: flex;

  ${k}
`, w = s(h)`
  color: ${({ theme: e, active: r }) => r ? e.colors.primary700 : e.colors.neutral800};
  background: ${({ theme: e, active: r }) => r ? e.colors.neutral0 : void 0};

  &:hover {
    box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  }
`, m = s(h)`
  font-size: 0.7rem;
  svg path {
    fill: ${(e) => e["aria-disabled"] ? e.theme.colors.neutral300 : e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${(e) => e["aria-disabled"] ? e.theme.colors.neutral300 : e.theme.colors.neutral700};
    }
  }

  ${(e) => e["aria-disabled"] ? `
  pointer-events: none;
    ` : void 0}
`, T = s(h)`
  color: ${({ theme: e }) => e.colors.neutral800};
`, v = ({ children: e, to: r, ...t }) => {
  const { activePage: a } = p(), o = a === 1;
  return /* @__PURE__ */ d(
    m,
    {
      to: o ? "#" : r,
      "aria-disabled": o,
      tabIndex: o ? -1 : void 0,
      ...t,
      children: [
        /* @__PURE__ */ i(l, { children: e }),
        /* @__PURE__ */ i(y, { "aria-hidden": !0 })
      ]
    }
  );
};
v.displayName = "PreviousLink";
const f = ({ children: e, to: r, ...t }) => {
  const { activePage: a, pageCount: o } = p(), c = a === o;
  return /* @__PURE__ */ d(
    m,
    {
      to: c ? "#" : r,
      "aria-disabled": c,
      tabIndex: c ? -1 : void 0,
      ...t,
      children: [
        /* @__PURE__ */ i(l, { children: e }),
        /* @__PURE__ */ i(P, { "aria-hidden": !0 })
      ]
    }
  );
};
f.displayName = "NextLink";
const g = ({ number: e, children: r, ...t }) => {
  const { activePage: a } = p(), o = a === e;
  return /* @__PURE__ */ d(w, { ...t, active: o, children: [
    /* @__PURE__ */ i(l, { children: r }),
    /* @__PURE__ */ i(u, { "aria-hidden": !0, variant: "pi", fontWeight: o ? "bold" : null, children: e })
  ] });
};
g.displayName = "PageLink";
const R = ({ children: e, ...r }) => /* @__PURE__ */ d(T, { ...r, as: "div", children: [
  /* @__PURE__ */ i(l, { children: e }),
  /* @__PURE__ */ i(u, { "aria-hidden": !0, variant: "pi", children: "…" })
] });
g.propTypes = {
  children: n.node.isRequired,
  number: n.number.isRequired
};
const b = {
  children: n.node.isRequired,
  to: n.string.isRequired
};
f.propTypes = b;
v.propTypes = b;
R.propTypes = {
  children: n.node.isRequired
};
export {
  R as Dots,
  f as NextLink,
  g as PageLink,
  v as PreviousLink
};
