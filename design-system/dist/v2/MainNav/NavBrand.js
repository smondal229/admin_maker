import { jsx as e, jsxs as i } from "react/jsx-runtime";
import f from "react";
import d from "prop-types";
import h from "styled-components";
import { useMainNav as u } from "./MainNavContext.js";
import { BaseLink as g } from "../../BaseLink/BaseLink.js";
import { Box as n } from "../../Box/Box.js";
import { VisuallyHidden as m } from "../../VisuallyHidden/VisuallyHidden.js";
import { Flex as x } from "../../Flex/Flex.js";
import { Typography as l } from "../../Typography/Typography.js";
const c = h.div`
  border-radius: ${({ theme: r }) => r.borderRadius};

  svg,
  img {
    height: ${({ condensed: r }) => r ? `${40 / 16}rem` : `${32 / 16}rem`};
    width: ${({ condensed: r }) => r ? `${40 / 16}rem` : `${32 / 16}rem`};
  }
`, R = h(g)`
  text-decoration: unset;
  color: inherit;
`, t = f.forwardRef(({ workplace: r, title: o, icon: a, ...p }, s) => u() ? /* @__PURE__ */ e(g, { ref: s, ...p, children: /* @__PURE__ */ e(n, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: /* @__PURE__ */ i(c, { condensed: !0, children: [
  a,
  /* @__PURE__ */ i(m, { children: [
    /* @__PURE__ */ e("span", { children: o }),
    /* @__PURE__ */ e("span", { children: r })
  ] })
] }) }) }) : /* @__PURE__ */ e(R, { ref: s, ...p, children: /* @__PURE__ */ e(n, { paddingLeft: 3, paddingRight: 3, paddingTop: 4, paddingBottom: 4, children: /* @__PURE__ */ i(x, { children: [
  /* @__PURE__ */ e(c, { "aria-hidden": !0, tabIndex: -1, children: a }),
  /* @__PURE__ */ i(n, { paddingLeft: 2, children: [
    /* @__PURE__ */ i(l, { fontWeight: "bold", textColor: "neutral800", as: "span", children: [
      o,
      /* @__PURE__ */ e(m, { as: "span", children: r })
    ] }),
    /* @__PURE__ */ e(l, { variant: "pi", as: "p", textColor: "neutral600", "aria-hidden": !0, children: r })
  ] })
] }) }) }));
t.displayName = "NavBrand";
t.defaultProps = {
  to: "/"
};
t.propTypes = {
  icon: d.node.isRequired,
  title: d.string.isRequired,
  to: d.string,
  workplace: d.string.isRequired
};
export {
  t as NavBrand
};
