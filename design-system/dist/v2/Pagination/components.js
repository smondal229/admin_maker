import { jsxs as l, jsx as o } from "react/jsx-runtime";
import p from "react";
import { ChevronLeft as P, ChevronRight as x } from "@strapi/icons";
import d from "prop-types";
import s from "styled-components";
import { usePagination as h } from "./PaginationContext.js";
import { buttonFocusStyle as k } from "../../themes/utils.js";
import { Typography as w } from "../../Typography/Typography.js";
import { BaseLink as L } from "../../BaseLink/BaseLink.js";
import { VisuallyHidden as c } from "../../VisuallyHidden/VisuallyHidden.js";
const m = s(w)`
  line-height: revert;
`, $ = {
  active: !0
}, u = s(L).withConfig({
  shouldForwardProp: (e, r) => !$[e] && r(e)
})`
  padding: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  box-shadow: ${({ active: e, theme: r }) => e ? r.shadows.filterShadow : void 0};
  text-decoration: none;
  display: flex;

  ${k}
`, R = s(u)`
  color: ${({ theme: e, active: r }) => r ? e.colors.primary700 : e.colors.neutral800};
  background: ${({ theme: e, active: r }) => r ? e.colors.neutral0 : void 0};

  &:hover {
    box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  }
`, f = s(u)`
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
`, T = s(u)`
  color: ${({ theme: e }) => e.colors.neutral800};
`, v = p.forwardRef(({ children: e, ...r }, a) => {
  const { activePage: t } = h(), i = t === 1;
  return /* @__PURE__ */ l(f, { ref: a, "aria-disabled": i, tabIndex: i ? -1 : void 0, ...r, children: [
    /* @__PURE__ */ o(c, { children: e }),
    /* @__PURE__ */ o(P, { "aria-hidden": !0 })
  ] });
});
v.displayName = "PreviousLink";
const g = p.forwardRef(({ children: e, ...r }, a) => {
  const { activePage: t, pageCount: i } = h(), n = t === i;
  return /* @__PURE__ */ l(f, { ref: a, "aria-disabled": n, tabIndex: n ? -1 : void 0, ...r, children: [
    /* @__PURE__ */ o(c, { children: e }),
    /* @__PURE__ */ o(x, { "aria-hidden": !0 })
  ] });
});
g.displayName = "NextLink";
const b = p.forwardRef(({ number: e, children: r, ...a }, t) => {
  const { activePage: i } = h(), n = i === e;
  return /* @__PURE__ */ l(R, { ref: t, ...a, active: n, children: [
    /* @__PURE__ */ o(c, { children: r }),
    /* @__PURE__ */ o(m, { "aria-hidden": !0, variant: "pi", fontWeight: n ? "bold" : null, children: e })
  ] });
});
b.displayName = "PageLink";
const N = ({ children: e, ...r }) => /* @__PURE__ */ l(T, { ...r, as: "div", children: [
  /* @__PURE__ */ o(c, { children: e }),
  /* @__PURE__ */ o(m, { "aria-hidden": !0, variant: "pi", children: "…" })
] });
b.propTypes = {
  children: d.node.isRequired,
  number: d.number.isRequired
};
const y = {
  children: d.node.isRequired
};
g.propTypes = y;
v.propTypes = y;
N.propTypes = {
  children: d.node.isRequired
};
export {
  N as Dots,
  g as NextLink,
  b as PageLink,
  v as PreviousLink
};
