import { jsx as i, jsxs as s, Fragment as v } from "react/jsx-runtime";
import R, { useRef as b, useState as x, useEffect as w } from "react";
import t from "prop-types";
import L from "styled-components";
import { useElementOnScreen as S } from "../hooks/useElementOnScreen.js";
import { useResizeObserver as B } from "../hooks/useResizeObserver.js";
import { Box as d } from "../Box/Box.js";
import { Flex as l } from "../Flex/Flex.js";
import { Typography as p } from "../Typography/Typography.js";
const H = () => {
  const e = b(null), [o, n] = x(null), [r, a] = S({
    root: null,
    rootMargin: "0px",
    threshold: 0
  });
  return B(r, () => {
    r.current && n(r.current.getBoundingClientRect());
  }), w(() => {
    e.current && n(e.current.getBoundingClientRect());
  }, [e]), {
    containerRef: r,
    isVisible: a,
    baseHeaderLayoutRef: e,
    headerSize: o
  };
}, h = (e) => {
  const { containerRef: o, isVisible: n, baseHeaderLayoutRef: r, headerSize: a } = H();
  return /* @__PURE__ */ s(v, { children: [
    /* @__PURE__ */ i("div", { style: { height: a?.height }, ref: o, children: n && /* @__PURE__ */ i(c, { ref: r, ...e }) }),
    !n && /* @__PURE__ */ i(c, { ...e, sticky: !0, width: a?.width })
  ] });
};
h.displayName = "HeaderLayout";
const T = L(d)`
  width: ${(e) => e.width}px;
  z-index: ${({ theme: e }) => e.zIndices[1]};
`, c = R.forwardRef(
  ({ navigationAction: e, primaryAction: o, secondaryAction: n, subtitle: r, title: a, sticky: g, width: m, ...u }, y) => {
    const f = typeof r == "string";
    return g ? /* @__PURE__ */ i(
      T,
      {
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 3,
        paddingBottom: 3,
        position: "fixed",
        top: 0,
        right: 0,
        background: "neutral0",
        shadow: "tableShadow",
        width: m,
        "data-strapi-header-sticky": !0,
        children: /* @__PURE__ */ s(l, { justifyContent: "space-between", children: [
          /* @__PURE__ */ s(l, { children: [
            e && /* @__PURE__ */ i(d, { paddingRight: 3, children: e }),
            /* @__PURE__ */ s(d, { children: [
              /* @__PURE__ */ i(p, { variant: "beta", as: "h1", ...u, children: a }),
              f ? /* @__PURE__ */ i(p, { variant: "pi", textColor: "neutral600", children: r }) : r
            ] }),
            n ? /* @__PURE__ */ i(d, { paddingLeft: 4, children: n }) : null
          ] }),
          /* @__PURE__ */ i(l, { children: o ? /* @__PURE__ */ i(d, { paddingLeft: 2, children: o }) : void 0 })
        ] })
      }
    ) : /* @__PURE__ */ s(
      d,
      {
        ref: y,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 8,
        paddingTop: e ? 6 : 8,
        background: "neutral100",
        "data-strapi-header": !0,
        children: [
          e ? /* @__PURE__ */ i(d, { paddingBottom: 2, children: e }) : null,
          /* @__PURE__ */ s(l, { justifyContent: "space-between", children: [
            /* @__PURE__ */ s(l, { minWidth: 0, children: [
              /* @__PURE__ */ i(p, { as: "h1", variant: "alpha", ...u, children: a }),
              n ? /* @__PURE__ */ i(d, { paddingLeft: 4, children: n }) : null
            ] }),
            o
          ] }),
          f ? /* @__PURE__ */ i(p, { variant: "epsilon", textColor: "neutral600", as: "p", children: r }) : r
        ]
      }
    );
  }
);
c.displayName = "BaseHeaderLayout";
c.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0,
  sticky: !1,
  width: void 0
};
c.propTypes = {
  navigationAction: t.node,
  primaryAction: t.node,
  secondaryAction: t.node,
  sticky: t.bool,
  // TODO V2: Remove the string fallback
  subtitle: t.oneOfType([t.string, t.node]),
  title: t.string.isRequired,
  width: t.number
};
h.defaultProps = {
  navigationAction: void 0,
  primaryAction: void 0,
  secondaryAction: void 0,
  subtitle: void 0
};
h.propTypes = {
  navigationAction: t.node,
  primaryAction: t.node,
  secondaryAction: t.node,
  // TODO V2: Remove the string fallback
  subtitle: t.oneOfType([t.string, t.node]),
  title: t.string.isRequired
};
export {
  c as BaseHeaderLayout,
  h as HeaderLayout
};
