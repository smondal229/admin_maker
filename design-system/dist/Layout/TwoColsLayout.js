import { jsxs as s, jsx as r } from "react/jsx-runtime";
import "react";
import o from "prop-types";
import { Grid as a } from "../Grid/Grid.js";
import { GridItem as e } from "../Grid/GridItem.js";
import { Box as d } from "../Box/Box.js";
const l = ({ startCol: i, endCol: t }) => /* @__PURE__ */ s(a, { gap: 4, children: [
  /* @__PURE__ */ r(e, { col: 9, s: 12, children: /* @__PURE__ */ r(d, { hasRadius: !0, background: "neutral0", shadow: "tableShadow", children: i }) }),
  /* @__PURE__ */ r(e, { col: 3, s: 12, children: /* @__PURE__ */ r(d, { hasRadius: !0, background: "neutral0", shadow: "tableShadow", children: t }) })
] });
l.propTypes = {
  endCol: o.node.isRequired,
  startCol: o.node.isRequired
};
export {
  l as TwoColsLayout
};
