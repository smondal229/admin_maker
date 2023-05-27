import { jsxs as p, jsx as t } from "react/jsx-runtime";
import "react";
import d from "prop-types";
import n from "styled-components";
import { Box as e } from "../Box/Box.js";
import { Flex as s } from "../Flex/Flex.js";
const a = n(e)`
  svg {
    width: ${({ theme: o }) => o.spaces[6]};
    height: ${({ theme: o }) => o.spaces[6]};

    path {
      fill: ${({ theme: o }) => o.colors.danger600};
    }
  }
`, i = ({ children: o, icon: r }) => /* @__PURE__ */ p(e, { paddingTop: 8, paddingBottom: 8, paddingLeft: 6, paddingRight: 6, children: [
  r && /* @__PURE__ */ t(a, { paddingBottom: 2, children: /* @__PURE__ */ t(s, { justifyContent: "center", children: r }) }),
  o
] });
i.displayName = "DialogBody";
i.defaultProps = {
  icon: void 0
};
i.propTypes = {
  children: d.node.isRequired,
  icon: d.node
};
export {
  i as DialogBody
};
