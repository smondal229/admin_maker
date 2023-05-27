import { jsxs as e, jsx as i } from "react/jsx-runtime";
import "react";
import t from "prop-types";
import d from "styled-components";
import { Box as o } from "../Box/Box.js";
import { Divider as m } from "../Divider/Divider.js";
import { Flex as s } from "../Flex/Flex.js";
import { Typography as a } from "../Typography/Typography.js";
const c = d(o)`
  height: ${24 / 16}rem;
  width: ${24 / 16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10 / 16}rem;
    width: ${10 / 16}rem;
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.primary600};
  }
`, l = d(o)`
  border-radius: 0 0 ${({ theme: r }) => r.borderRadius} ${({ theme: r }) => r.borderRadius};
  display: block;
  width: 100%;
  border: none;
`, h = ({ children: r, icon: n, ...p }) => /* @__PURE__ */ e("div", { children: [
  /* @__PURE__ */ i(m, {}),
  /* @__PURE__ */ i(l, { as: "button", background: "primary100", padding: 5, ...p, children: /* @__PURE__ */ e(s, { children: [
    /* @__PURE__ */ i(c, { "aria-hidden": !0, background: "primary200", children: n }),
    /* @__PURE__ */ i(o, { paddingLeft: 3, children: /* @__PURE__ */ i(a, { variant: "pi", fontWeight: "bold", textColor: "primary600", children: r }) })
  ] }) })
] });
h.propTypes = {
  children: t.string.isRequired,
  icon: t.node.isRequired
};
export {
  h as TFooter
};
