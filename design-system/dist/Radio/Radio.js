import { jsxs as t, jsx as r } from "react/jsx-runtime";
import "react";
import o from "prop-types";
import p from "styled-components";
import { BaseRadio as m } from "../BaseRadio/BaseRadio.js";
import { Typography as s } from "../Typography/Typography.js";
import { Box as a } from "../Box/Box.js";
const l = p(s)`
  display: flex;
  align-items: center;
`, d = ({ children: e, ...i }) => /* @__PURE__ */ t(l, { as: "label", textColor: "neutral800", children: [
  /* @__PURE__ */ r(m, { ...i }),
  /* @__PURE__ */ r(a, { paddingLeft: 2, children: e })
] });
d.propTypes = {
  children: o.node.isRequired,
  value: o.any.isRequired
};
export {
  d as Radio
};
