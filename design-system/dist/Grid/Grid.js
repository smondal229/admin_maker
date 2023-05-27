import { jsx as p } from "react/jsx-runtime";
import * as s from "react";
import e from "prop-types";
import n from "styled-components";
import { GridContext as a } from "./GridContext.js";
import d from "../helpers/handleResponsiveValues.js";
import { Box as f } from "../Box/Box.js";
const l = n(f)`
  display: grid;
  grid-template-columns: repeat(${({ gridCols: r }) => r}, 1fr);
  ${({ theme: r, gap: o }) => d("gap", o, r)}
`, t = ({ gap: r, gridCols: o, ...m }) => {
  const i = s.useMemo(() => ({ gap: r, gridCols: o }), [r, o]);
  return /* @__PURE__ */ p(a.Provider, { value: i, children: /* @__PURE__ */ p(l, { gap: r, gridCols: o, ...m }) });
};
t.defaultProps = {
  gap: 0,
  gridCols: 12
};
t.propTypes = {
  gap: e.oneOfType([e.number, e.arrayOf(e.number)]),
  gridCols: e.number
};
export {
  t as Grid
};
