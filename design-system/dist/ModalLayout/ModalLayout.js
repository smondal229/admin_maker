import { jsx as o } from "react/jsx-runtime";
import "react";
import e from "prop-types";
import i from "styled-components";
import { ModalContext as d } from "./ModalContext.js";
import { DismissibleLayer as p } from "../DismissibleLayer/index.js";
import l from "../hooks/useLockScroll.js";
import { Flex as m } from "../Flex/Flex.js";
import { Box as s } from "../Box/Box.js";
import { Portal as u } from "../Portal/Portal.js";
import { FocusTrap as c } from "../FocusTrap/FocusTrap.js";
const f = i(m)`
  inset: 0;
  background: ${({ theme: r }) => `${r.colors.neutral800}1F`};
`, h = i(s)`
  width: ${830 / 16}rem;
`, y = ({ onClose: r, labelledBy: t, ...n }) => (l(!0), /* @__PURE__ */ o(u, { children: /* @__PURE__ */ o(d.Provider, { value: r, children: /* @__PURE__ */ o(f, { justifyContent: "center", paddingLeft: 8, paddingRight: 8, position: "fixed", zIndex: 4, children: /* @__PURE__ */ o(c, { children: /* @__PURE__ */ o(p, { onEscapeKeyDown: r, onPointerDownOutside: r, children: /* @__PURE__ */ o(
  h,
  {
    "aria-labelledby": t,
    onClick: (a) => a.stopPropagation(),
    background: "neutral0",
    hasRadius: !0,
    shadow: "popupShadow",
    role: "dialog",
    "aria-modal": !0,
    ...n
  }
) }) }) }) }) }));
y.propTypes = {
  labelledBy: e.string.isRequired,
  onClose: e.func.isRequired
};
export {
  y as ModalLayout
};
