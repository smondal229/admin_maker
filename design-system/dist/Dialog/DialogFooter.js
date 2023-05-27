import { jsx as i, jsxs as n } from "react/jsx-runtime";
import "react";
import r from "prop-types";
import p from "styled-components";
import { Box as d } from "../Box/Box.js";
import { Flex as s } from "../Flex/Flex.js";
const l = p(d)`
  border-top: 1px solid ${({ theme: o }) => o.colors.neutral150};

  button {
    width: 100%;
    display: inline-flex;
    justify-content: center;
  }
`, t = ({ startAction: o, endAction: e }) => /* @__PURE__ */ i(l, { padding: 4, children: /* @__PURE__ */ n(s, { gap: 2, children: [
  o,
  e
] }) });
t.displayName = "DialogFooter";
t.defaultProps = {
  endAction: void 0,
  startAction: void 0
};
t.propTypes = {
  endAction: r.node,
  startAction: r.node
};
export {
  t as DialogFooter
};
