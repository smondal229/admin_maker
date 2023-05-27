import { jsx as r, jsxs as s } from "react/jsx-runtime";
import "react";
import t from "prop-types";
import d from "styled-components";
import { Box as a } from "../Box/Box.js";
import { Flex as i } from "../Flex/Flex.js";
const c = d(a)`
  border-radius: 0 0 ${({ theme: o }) => o.borderRadius} ${({ theme: o }) => o.borderRadius};
  border-top: 1px solid ${({ theme: o }) => o.colors.neutral150};
`, e = d(i)`
  & > * + * {
    margin-left: ${({ theme: o }) => o.spaces[2]};
  }
`, n = ({ startActions: o, endActions: p }) => /* @__PURE__ */ r(c, { paddingTop: 4, paddingBottom: 4, paddingLeft: 5, paddingRight: 5, background: "neutral100", children: /* @__PURE__ */ s(i, { justifyContent: "space-between", children: [
  /* @__PURE__ */ r(e, { children: o }),
  /* @__PURE__ */ r(e, { children: p })
] }) });
n.defaultProps = {
  endActions: void 0,
  startActions: void 0
};
n.propTypes = {
  endActions: t.node,
  startActions: t.node
};
export {
  n as ModalFooter
};
