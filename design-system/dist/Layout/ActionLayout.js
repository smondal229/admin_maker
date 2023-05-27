import { jsx as o, jsxs as s } from "react/jsx-runtime";
import "react";
import e from "prop-types";
import n from "styled-components";
import { Flex as p } from "../Flex/Flex.js";
import { Box as i } from "../Box/Box.js";
const d = n(p)`
  & > * + * {
    margin-left: ${({ theme: t }) => t.spaces[2]};
  }

  margin-left: ${({ pullRight: t }) => t ? "auto" : void 0};
`, a = n(d)`
  flex-shrink: 0;
`, l = ({ startActions: t, endActions: r }) => t || r ? /* @__PURE__ */ o(i, { paddingLeft: 10, paddingRight: 10, children: /* @__PURE__ */ o(i, { paddingBottom: 4, children: /* @__PURE__ */ s(p, { justifyContent: "space-between", alignItems: "flex-start", children: [
  t && /* @__PURE__ */ o(d, { wrap: "wrap", children: t }),
  r && /* @__PURE__ */ o(a, { pullRight: !0, children: r })
] }) }) }) : null;
l.defaultProps = {
  endActions: void 0,
  startActions: void 0
};
l.propTypes = {
  endActions: e.node,
  startActions: e.node
};
export {
  l as ActionLayout
};
