import { jsxs as s, jsx as o } from "react/jsx-runtime";
import h from "react";
import { Dot as y } from "@strapi/icons";
import i from "prop-types";
import l from "styled-components";
import { Box as t } from "../../Box/Box.js";
import { Typography as c } from "../../Typography/Typography.js";
import { Flex as a } from "../../Flex/Flex.js";
import { BaseLink as $ } from "../../BaseLink/BaseLink.js";
const b = l(t)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({ theme: r }) => r.colors.neutral800};
  svg > * {
    fill: ${({ theme: r }) => r.colors.neutral600};
  }

  &.active {
    ${({ theme: r }) => `
      background-color: ${r.colors.primary100};
      border-right: 2px solid ${r.colors.primary600};
      svg > * {
        fill: ${r.colors.primary700};
      }
      ${c} {
        color: ${r.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`, p = l(y)`
  width: ${12 / 16}rem;
  height: ${4 / 16}rem;
  * {
    fill: ${({ theme: r, $active: e }) => e ? r.colors.primary600 : r.colors.neutral600};
  }
`, v = l.div`
  svg {
    height: ${12 / 16}rem;
    width: ${12 / 16}rem;
  }
`, n = h.forwardRef(({ children: r, icon: e, withBullet: d, as: m, isSubSectionChild: f, ...u }, g) => /* @__PURE__ */ s(
  b,
  {
    as: m,
    icon: e,
    background: "neutral100",
    paddingLeft: f ? 9 : 7,
    paddingBottom: 2,
    paddingTop: 2,
    ref: g,
    ...u,
    children: [
      /* @__PURE__ */ s(a, { children: [
        e ? /* @__PURE__ */ o(v, { children: e }) : /* @__PURE__ */ o(p, {}),
        /* @__PURE__ */ o(t, { paddingLeft: 2, children: /* @__PURE__ */ o(c, { as: "span", children: r }) })
      ] }),
      d && /* @__PURE__ */ o(t, { as: a, paddingRight: 4, children: /* @__PURE__ */ o(p, { $active: !0 }) })
    ]
  }
));
n.displayName = "SubNavLink";
n.defaultProps = {
  as: $,
  icon: null,
  isSubSectionChild: !1,
  withBullet: !1
};
n.propTypes = {
  as: i.elementType,
  children: i.node.isRequired,
  icon: i.element,
  isSubSectionChild: i.bool,
  withBullet: i.bool
};
export {
  n as SubNavLink
};
