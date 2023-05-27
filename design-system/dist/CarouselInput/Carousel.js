import { jsx as r, jsxs as h } from "react/jsx-runtime";
import { useRef as f, Children as k, cloneElement as L } from "react";
import { ChevronLeft as D, ChevronRight as K } from "@strapi/icons";
import e from "prop-types";
import a from "styled-components";
import { KeyboardKeys as m } from "../helpers/keyboardKeys.js";
import { Tooltip as j } from "../Tooltip/Tooltip.js";
import { Box as t } from "../Box/Box.js";
import { Icon as g } from "../Icon/Icon.js";
import { Flex as E } from "../Flex/Flex.js";
import { Typography as F } from "../Typography/Typography.js";
const G = a(t)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`, I = a(t)`
  grid-area: slides;
`, y = a.button`
  grid-area: ${({ area: i }) => i};

  &:focus svg path,
  &:hover svg path {
    fill: ${({ theme: i }) => i.colors.neutral900};
  }
`, b = ({
  actions: i,
  children: v,
  label: R,
  nextLabel: C,
  onNext: l,
  onPrevious: d,
  previousLabel: x,
  secondaryLabel: n,
  selectedSlide: q,
  ...A
}) => {
  const s = f(null), c = f(null), p = k.toArray(v).map(
    (o, w) => L(o, { selected: w === q })
  ), T = (o) => {
    switch (o.key) {
      case m.RIGHT: {
        o.preventDefault(), c.current.focus(), l();
        break;
      }
      case m.LEFT: {
        o.preventDefault(), s.current.focus(), d();
        break;
      }
    }
  }, u = p.length > 1;
  return /* @__PURE__ */ r(t, { ...A, onKeyDown: T, children: /* @__PURE__ */ h(t, { padding: 2, borderColor: "neutral200", hasRadius: !0, background: "neutral100", children: [
    /* @__PURE__ */ h(G, { as: "section", "aria-roledescription": "carousel", "aria-label": R, position: "relative", children: [
      u && /* @__PURE__ */ r(
        y,
        {
          onClick: d,
          area: "startAction",
          ref: s,
          "aria-label": x,
          type: "button",
          children: /* @__PURE__ */ r(g, { as: D, "aria-hidden": !0, width: "6px", height: "10px", color: "neutral600" })
        }
      ),
      u && /* @__PURE__ */ r(y, { onClick: l, area: "endAction", ref: c, "aria-label": C, type: "button", children: /* @__PURE__ */ r(g, { as: K, "aria-hidden": !0, width: "6px", height: "10px", color: "neutral600" }) }),
      /* @__PURE__ */ r(I, { "aria-live": "polite", paddingLeft: 2, paddingRight: 2, width: "100%", overflow: "hidden", children: p }),
      i
    ] }),
    n && /* @__PURE__ */ r(t, { paddingTop: 2, paddingLeft: 4, paddingRight: 4, children: /* @__PURE__ */ r(j, { label: n, children: /* @__PURE__ */ r(E, { justifyContent: "center", children: /* @__PURE__ */ r(F, { variant: "pi", textColor: "neutral600", ellipsis: !0, children: n }) }) }) })
  ] }) });
};
b.defaultProps = {
  actions: void 0,
  error: void 0,
  hint: void 0,
  required: !1,
  secondaryLabel: void 0
};
b.propTypes = {
  actions: e.node,
  children: e.node.isRequired,
  error: e.string,
  hint: e.oneOfType([e.string, e.node, e.arrayOf(e.node)]),
  label: e.string.isRequired,
  nextLabel: e.string.isRequired,
  onNext: e.func.isRequired,
  onPrevious: e.func.isRequired,
  previousLabel: e.string.isRequired,
  required: e.bool,
  secondaryLabel: e.string,
  selectedSlide: e.number.isRequired
};
export {
  b as Carousel
};
