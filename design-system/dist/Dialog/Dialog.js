import { jsx as o, jsxs as u } from "react/jsx-runtime";
import "react";
import r from "prop-types";
import e from "styled-components";
import { DismissibleLayer as f } from "../DismissibleLayer/index.js";
import { setOpacity as g } from "../helpers/setOpacity.js";
import { useId as h } from "../hooks/useId.js";
import y from "../hooks/useLockScroll.js";
import { FocusTrap as b } from "../FocusTrap/FocusTrap.js";
import { Box as t } from "../Box/Box.js";
import { Flex as x } from "../Flex/Flex.js";
import { Portal as D } from "../Portal/Portal.js";
import { Typography as w } from "../Typography/Typography.js";
const T = e(t)`
  inset: 0;
  background: ${({ theme: i }) => g(i.colors.neutral800, 0.2)};
`, P = e(t)`
  max-width: ${412 / 16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`, R = e(x)`
  border-bottom: 1px solid ${({ theme: i }) => i.colors.neutral150};
`, a = ({ onClose: i, title: l, as: s, isOpen: n, id: p, ...m }) => {
  const c = h(p);
  if (y(n), !n)
    return null;
  const d = `${c}-label`;
  return /* @__PURE__ */ o(D, { children: /* @__PURE__ */ o(T, { padding: 8, position: "fixed", zIndex: 4, children: /* @__PURE__ */ o(b, { children: /* @__PURE__ */ o(f, { onEscapeKeyDown: i, onPointerDownOutside: i, children: /* @__PURE__ */ u(
    P,
    {
      "aria-labelledby": d,
      "aria-modal": !0,
      background: "neutral0",
      hasRadius: !0,
      shadow: "popupShadow",
      role: "dialog",
      children: [
        /* @__PURE__ */ o(R, { padding: 6, justifyContent: "center", children: /* @__PURE__ */ o(w, { variant: "beta", as: s || "h2", id: d, children: l }) }),
        /* @__PURE__ */ o(t, { ...m })
      ]
    }
  ) }) }) }) });
};
a.displayName = "Dialog";
a.defaultProps = {
  as: "h2",
  id: void 0
};
a.propTypes = {
  as: r.string,
  id: r.oneOfType([r.string, r.number]),
  isOpen: r.bool.isRequired,
  onClose: r.func.isRequired,
  title: r.string.isRequired
};
export {
  a as Dialog
};
