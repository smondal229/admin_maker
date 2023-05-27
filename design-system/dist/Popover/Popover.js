import { jsx as n, jsxs as w } from "react/jsx-runtime";
import * as a from "react";
import { useFloating as k, offset as $, shift as y, flip as v, autoUpdate as P } from "@floating-ui/react-dom";
import p from "styled-components";
import { stripReactIdOfColon as f } from "../helpers/strings.js";
import { useId as I } from "../hooks/useId.js";
import { useIntersection as R } from "../hooks/useIntersection.js";
import { Box as d } from "../Box/Box.js";
import { Portal as S } from "../Portal/Portal.js";
const N = [
  "top",
  "top-start",
  "top-end",
  "right",
  "right-start",
  "right-end",
  "bottom",
  "bottom-start",
  "bottom-end",
  "left",
  "left-start",
  "left-end"
], W = p(d)`
  box-shadow: ${({ theme: t }) => t.shadows.filterShadow};
  z-index: ${({ theme: t }) => t.zIndices[0]};
  border: 1px solid ${({ theme: t }) => t.colors.neutral150};
  background: ${({ theme: t }) => t.colors.neutral0};
`, E = ({ source: t, children: o, spacing: e = 0, fullWidth: r = !1, placement: s = "bottom-start", centered: i = !1, ...l }) => {
  const [m, u] = a.useState(void 0), { x: h, y: b, reference: c, floating: g, strategy: x } = k({
    strategy: "fixed",
    placement: i ? "bottom" : s,
    middleware: [
      $({
        mainAxis: e
      }),
      y(),
      v()
    ],
    whileElementsMounted: P
  });
  return a.useLayoutEffect(() => {
    c(t.current);
  }, [t, c]), a.useLayoutEffect(() => {
    r && u(t.current.offsetWidth);
  }, [r, t]), n(W, { ref: g, style: {
    left: h,
    top: b,
    position: x,
    width: m || void 0
  }, hasRadius: !0, background: "neutral0", padding: 1, ...l, children: o });
}, z = ({ children: t, intersectionId: o, onReachEnd: e, ...r }) => {
  const s = a.useRef(null), i = I();
  return R(s, e ?? (() => {
  }), {
    selectorToWatch: `#${f(i)}`,
    skipWhen: !o || !e
  }), w(C, { ref: s, ...r, children: [t, o && e && n(d, { id: f(i), width: "100%", height: "1px" })] });
}, C = p(d)`
  // 16 is base base size, 3 is the factor to get closer to 40px and 5 is the number of elements visible in the list
  max-height: ${3 * 5}rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme: t }) => t.colors.neutral0};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme: t }) => t.colors.neutral150};
    border-radius: ${({ theme: t }) => t.borderRadius};
    margin-right: 10px;
  }
`, U = ({ children: t, source: o, spacing: e, fullWidth: r, placement: s, centered: i, ...l }) => n(S, { children: n(E, { source: o, spacing: e, fullWidth: r, placement: s, centered: i, children: n(z, { ...l, children: t }) }) });
export {
  E as Content,
  N as POPOVER_PLACEMENTS,
  U as Popover,
  z as Scrolling
};
