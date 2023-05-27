import { jsx as o, jsxs as s } from "react/jsx-runtime";
import f from "react";
import e from "prop-types";
import t from "styled-components";
import { useMainNav as y } from "./MainNavContext.js";
import { Box as b } from "../../Box/Box.js";
import { BaseLink as v } from "../../BaseLink/BaseLink.js";
import { Typography as i } from "../../Typography/Typography.js";
import { Flex as $ } from "../../Flex/Flex.js";
import { Badge as k } from "../../Badge/Badge.js";
import { Tooltip as x } from "../../Tooltip/Tooltip.js";
const m = t(b)`
  svg {
    width: 1rem;
    height: 1rem;
  }
`, u = t(v)`
  position: relative;
  text-decoration: none;
  display: block;
  border-radius: ${({ theme: r }) => r.borderRadius};
  background: ${({ theme: r }) => r.colors.neutral0};

  ${i} {
    color: ${({ theme: r }) => r.colors.neutral600};
  }

  svg path {
    fill: ${({ theme: r }) => r.colors.neutral500};
  }

  &:hover {
    background: ${({ theme: r }) => r.colors.neutral100};

    ${i} {
      color: ${({ theme: r }) => r.colors.neutral700};
    }

    svg path {
      fill: ${({ theme: r }) => r.colors.neutral600};
    }
  }

  &.active {
    background: ${({ theme: r }) => r.colors.primary100};

    svg path {
      fill: ${({ theme: r }) => r.colors.primary600};
    }

    ${i} {
      color: ${({ theme: r }) => r.colors.primary600};
      font-weight: 500;
    }
  }
`, h = t($)`
  padding: ${({ theme: r }) => `${r.spaces[2]} ${r.spaces[3]}`};
`, g = t(k)`
  ${({ theme: r, condensed: a }) => a && `
	  position: absolute;
    // Values based on visual aspect 
    top: -${r.spaces[3]};
    right:  -${r.spaces[1]};
  `}

  ${i} {
    //find a solution to remove !important
    color: ${({ theme: r }) => r.colors.neutral0} !important;
    line-height: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ theme: r }) => r.spaces[6]};
  height: ${({ theme: r }) => r.spaces[5]};
  padding: ${({ theme: r }) => `0 ${r.spaces[2]}`};
  border-radius: ${({ theme: r }) => r.spaces[10]};
  background: ${({ theme: r }) => r.colors.primary600};
`, l = f.forwardRef(({ children: r, icon: a, badgeContent: n, badgeAriaLabel: c, ...d }, p) => y() ? /* @__PURE__ */ o(u, { ref: p, ...d, children: /* @__PURE__ */ o(x, { position: "right", label: r, children: /* @__PURE__ */ s(h, { as: "span", justifyContent: "center", children: [
  /* @__PURE__ */ o(m, { "aria-hidden": !0, paddingRight: 0, as: "span", children: a }),
  n && /* @__PURE__ */ o(g, { condensed: !0, "aria-label": c, children: n })
] }) }) }) : /* @__PURE__ */ o(u, { ref: p, ...d, children: /* @__PURE__ */ s(h, { as: "span", justifyContent: "space-between", children: [
  /* @__PURE__ */ s($, { children: [
    /* @__PURE__ */ o(m, { "aria-hidden": !0, paddingRight: 3, as: "span", children: a }),
    /* @__PURE__ */ o(i, { children: r })
  ] }),
  n && /* @__PURE__ */ o(g, { justifyContent: "center", "aria-label": c, children: n })
] }) }));
l.displayName = "NavLink";
l.defaultProps = {
  badgeContent: void 0,
  badgeAriaLabel: void 0
};
l.propTypes = {
  badgeAriaLabel: e.string,
  badgeContent: e.oneOfType([e.string, e.number]),
  children: e.string.isRequired,
  icon: e.node.isRequired
};
export {
  l as NavLink
};
