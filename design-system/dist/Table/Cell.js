import { jsx as r, jsxs as s } from "react/jsx-runtime";
import "react";
import e from "prop-types";
import t from "styled-components";
import { RawTd as a, RawTh as c } from "../RawTable/RawCell.js";
import { Flex as d } from "../Flex/Flex.js";
const i = t(a)`
  vertical-align: middle;
  text-align: left;
  color: ${({ theme: o }) => o.colors.neutral600};
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`, m = t.span`
  svg {
    height: ${4 / 16}rem;
  }
`, n = ({ children: o, action: l, ...p }) => /* @__PURE__ */ r(i, { as: c, ...p, children: /* @__PURE__ */ s(d, { children: [
  o,
  /* @__PURE__ */ r(m, { children: l })
] }) });
n.defaultProps = {
  action: void 0
};
n.propTypes = {
  action: e.node,
  children: e.node.isRequired
};
const k = (o) => /* @__PURE__ */ r(i, { ...o });
export {
  k as Td,
  n as Th
};
