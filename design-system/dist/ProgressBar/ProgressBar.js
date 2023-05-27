import { jsx as m } from "react/jsx-runtime";
import "react";
import o from "prop-types";
import u from "styled-components";
import { Box as p } from "../Box/Box.js";
const l = u(p)`
  &:before {
    background-color: ${({ theme: r }) => r.colors.neutral0};
    border-radius: ${({ theme: r }) => r.borderRadius};
    bottom: 0;
    content: '';
    position: absolute;
    top: 0;
    width: ${({ value: r }) => `${r}%`};
  }
`, i = ({ min: r, max: t, value: e, children: s, size: a, ...n }) => /* @__PURE__ */ m(
  l,
  {
    background: "neutral600",
    hasRadius: !0,
    "aria-label": s,
    "aria-valuemax": t,
    "aria-valuemin": r,
    "aria-valuenow": e,
    height: a === "S" ? 1 : 2,
    position: "relative",
    role: "progressbar",
    value: e,
    width: a === "S" ? "78px" : "102px",
    ...n
  }
);
i.defaultProps = {
  min: 0,
  max: 100,
  value: 0,
  size: "M"
};
i.propTypes = {
  children: o.node.isRequired,
  max: o.number,
  min: o.number,
  size: o.oneOf(["S", "M"]),
  value: o.number
};
export {
  i as ProgressBar
};
