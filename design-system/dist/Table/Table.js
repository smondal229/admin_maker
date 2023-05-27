import { jsxs as b, jsx as i } from "react/jsx-runtime";
import { useRef as g, useState as w, useEffect as m } from "react";
import s from "prop-types";
import r from "styled-components";
import { RawTable as x } from "../RawTable/RawTable.js";
import { Box as n } from "../Box/Box.js";
const T = r(n)`
  overflow: hidden;
  border: 1px solid ${({ theme: t }) => t.colors.neutral150};
`, S = r(x)`
  width: 100%;
  white-space: nowrap;
`, k = r(n)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({ overflowing: t }) => t === "both" || t === "left" ? "''" : void 0};
    box-shadow: ${({ theme: t }) => t.shadows.tableShadow};
    width: ${({ theme: t }) => t.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({ overflowing: t }) => t === "both" || t === "right" ? "''" : void 0};
    box-shadow: ${({ theme: t }) => t.shadows.tableShadow};
    width: ${({ theme: t }) => t.spaces[2]};
    right: 0;
    top: 0;
  }
`, R = r(n)`
  overflow-x: auto;
`, l = ({ colCount: t, rowCount: d, footer: c, ...f }) => {
  const a = g(null), [h, e] = w(), u = (o) => {
    const p = o.target.scrollWidth - o.target.clientWidth;
    if (o.target.scrollLeft === 0) {
      e("right");
      return;
    }
    if (o.target.scrollLeft === p) {
      e("left");
      return;
    }
    o.target.scrollLeft > 0 && e("both");
  };
  return m(() => {
    a.current.scrollWidth > a.current.clientWidth && e("right");
  }, []), /* @__PURE__ */ b(T, { shadow: "tableShadow", hasRadius: !0, background: "neutral0", children: [
    /* @__PURE__ */ i(k, { overflowing: h, position: "relative", children: /* @__PURE__ */ i(R, { ref: a, onScroll: u, paddingLeft: 6, paddingRight: 6, children: /* @__PURE__ */ i(S, { colCount: t, rowCount: d, ...f }) }) }),
    c
  ] });
};
l.defaultProps = {
  footer: void 0
};
l.propTypes = {
  colCount: s.number.isRequired,
  footer: s.node,
  rowCount: s.number.isRequired
};
export {
  l as Table
};
