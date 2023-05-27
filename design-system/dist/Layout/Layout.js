import { jsxs as n, jsx as p } from "react/jsx-runtime";
import "react";
import r from "prop-types";
import e from "styled-components";
import { Box as i } from "../Box/Box.js";
const s = e(i)`
  display: grid;
  grid-template-columns: ${({ hasSideNav: o }) => o ? "auto 1fr" : "1fr"};
`, m = e(i)`
  overflow-x: hidden;
`, t = ({ sideNav: o, children: d }) => /* @__PURE__ */ n(s, { hasSideNav: !!o, children: [
  o,
  /* @__PURE__ */ p(m, { paddingBottom: 10, children: d })
] });
t.defaultProps = {
  sideNav: void 0
};
t.propTypes = {
  children: r.node.isRequired,
  sideNav: r.node
};
export {
  t as Layout
};
