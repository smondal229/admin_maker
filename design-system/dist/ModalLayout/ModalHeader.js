import { jsx as r, jsxs as s } from "react/jsx-runtime";
import "react";
import { Cross as p } from "@strapi/icons";
import e from "prop-types";
import a from "styled-components";
import { useModal as n } from "./ModalContext.js";
import { IconButton as l } from "../IconButton/IconButton.js";
import { Box as m } from "../Box/Box.js";
import { Flex as c } from "../Flex/Flex.js";
const u = a(m)`
  border-radius: ${({ theme: o }) => o.borderRadius} ${({ theme: o }) => o.borderRadius} 0 0;
  border-bottom: 1px solid ${({ theme: o }) => o.colors.neutral150};
`, t = ({ children: o, closeLabel: d }) => {
  const i = n();
  return /* @__PURE__ */ r(u, { paddingTop: 4, paddingBottom: 4, paddingLeft: 5, paddingRight: 5, background: "neutral100", children: /* @__PURE__ */ s(c, { justifyContent: "space-between", children: [
    o,
    /* @__PURE__ */ r(l, { onClick: i, "aria-label": d, icon: /* @__PURE__ */ r(p, {}) })
  ] }) });
};
t.defaultProps = {
  closeLabel: "Close the modal"
};
t.propTypes = {
  children: e.node.isRequired,
  closeLabel: e.string
};
export {
  t as ModalHeader
};
