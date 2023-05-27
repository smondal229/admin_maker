import { jsx as i } from "react/jsx-runtime";
import "react";
import o from "prop-types";
import n from "styled-components";
import { useGrid as l } from "./GridContext.js";
import { Box as u } from "../Box/Box.js";
const a = n.div`
  grid-column: span ${({ col: r }) => r};
  max-width: 100%;

  ${({ theme: r }) => r.mediaQueries.tablet} {
    grid-column: span ${({ s: r }) => r};
  }

  ${({ theme: r }) => r.mediaQueries.mobile} {
    grid-column: span ${({ xs: r }) => r};
  }
`, m = ({ col: r, xs: e, s: p, ...s }) => {
  const { gap: t, gridCols: d } = l();
  return /* @__PURE__ */ i(a, { gap: t, gridCols: d, col: r, xs: e, s: p, children: /* @__PURE__ */ i(u, { ...s }) });
};
m.defaultProps = {
  col: void 0,
  s: void 0,
  xs: void 0
};
m.propTypes = {
  col: o.number,
  s: o.number,
  xs: o.number
};
export {
  m as GridItem
};
