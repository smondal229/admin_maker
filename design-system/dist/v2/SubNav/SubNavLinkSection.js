import { jsxs as p, jsx as e } from "react/jsx-runtime";
import { useState as u, Children as f } from "react";
import { CarretDown as g } from "@strapi/icons";
import n from "prop-types";
import d from "styled-components";
import { useId as x } from "../../hooks/useId.js";
import { Box as o } from "../../Box/Box.js";
import { Flex as b } from "../../Flex/Flex.js";
import { Typography as k } from "../../Typography/Typography.js";
const y = d(o)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: r }) => r.colors.neutral700};
    }
  }
`, C = d.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`, S = d.div`
  display: flex;
  align-items: center;
  width: ${12 / 16}rem;
  transform: rotateX(${({ rotated: r }) => r ? "0deg" : "180deg"});
`, l = ({ label: r, children: s, id: c }) => {
  const [i, m] = u(!0), a = x(c);
  return /* @__PURE__ */ p(o, { children: [
    /* @__PURE__ */ e(y, { paddingLeft: 7, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: /* @__PURE__ */ e(b, { justifyContent: "space-between", children: /* @__PURE__ */ p(C, { onClick: () => {
      m((t) => !t);
    }, "aria-expanded": i, "aria-controls": a, children: [
      /* @__PURE__ */ e(S, { rotated: i, children: /* @__PURE__ */ e(g, { "aria-hidden": !0 }) }),
      /* @__PURE__ */ e(o, { paddingLeft: 2, children: /* @__PURE__ */ e(k, { as: "span", fontWeight: "semiBold", textColor: "neutral800", children: r }) })
    ] }) }) }),
    i && /* @__PURE__ */ e("ul", { id: a, children: f.map(s, (t, h) => /* @__PURE__ */ e("li", { children: t }, h)) })
  ] });
};
l.defaultProps = {
  id: void 0
};
l.propTypes = {
  children: n.node.isRequired,
  id: n.string,
  label: n.string.isRequired
};
export {
  l as SubNavLinkSection
};
