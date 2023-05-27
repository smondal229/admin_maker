import { jsx as t } from "react/jsx-runtime";
import "react";
import r from "prop-types";
import p from "styled-components";
import { Flex as d } from "../Flex/Flex.js";
const a = p(d)`
  display: ${({ selected: e }) => e ? "flex" : "none"};
`, o = ({ label: e, children: i, selected: l, ...s }) => /* @__PURE__ */ t(
  a,
  {
    selected: l,
    role: "group",
    "aria-roledescription": "slide",
    "aria-label": e,
    justifyContent: "center",
    height: "124px",
    ...s,
    children: i
  }
);
o.defaultProps = {
  selected: !1
};
o.propTypes = {
  children: r.node.isRequired,
  label: r.string.isRequired,
  selected: r.bool
};
export {
  o as CarouselSlide
};
