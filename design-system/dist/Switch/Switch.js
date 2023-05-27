import { jsx as o, jsxs as c } from "react/jsx-runtime";
import b from "react";
import r from "prop-types";
import l from "styled-components";
import { Flex as h } from "../Flex/Flex.js";
import { Box as m } from "../Box/Box.js";
const n = l.div`
  background: ${({ theme: e }) => e.colors.danger500};
  border: none;
  border-radius: 16px;
  position: relative;
  height: ${24 / 16}rem;
  width: ${40 / 16}rem;

  & span {
    font-size: ${({ visibleLabels: e }) => e ? "1rem" : 0};
  }

  &:before {
    content: '';
    background: ${({ theme: e }) => e.colors.neutral0};
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    transition: all 0.5s;
    left: ${({ theme: e }) => e.spaces[1]};
    top: ${({ theme: e }) => e.spaces[1]};
  }

  @media (prefers-reduced-motion: reduce) {
    &:before {
      transition: none;
    }
  }
`, g = l.button`
  background: transparent;
  padding: 0;
  border: none;

  &[aria-checked='true'] ${n} {
    background: ${({ theme: e }) => e.colors.success500};
  }

  &[aria-checked='true'] ${n}:before {
    transform: translateX(1rem);
  }
`, i = b.forwardRef(
  ({ label: e, onChange: p, onLabel: a, offLabel: s, selected: t, visibleLabels: d, ...u }, f) => /* @__PURE__ */ o(
    g,
    {
      ref: f,
      role: "switch",
      "aria-checked": t,
      "aria-label": e,
      onClick: p,
      visibleLabels: d,
      type: "button",
      ...u,
      children: /* @__PURE__ */ c(h, { children: [
        /* @__PURE__ */ c(n, { children: [
          /* @__PURE__ */ o("span", { children: a }),
          /* @__PURE__ */ o("span", { children: s })
        ] }),
        d && /* @__PURE__ */ o(m, { as: "span", "aria-hidden": !0, paddingLeft: 2, color: t ? "success600" : "danger600", children: t ? a : s })
      ] })
    }
  )
);
i.defaultProps = {
  onLabel: "On",
  offLabel: "Off",
  visibleLabels: !1
};
i.propTypes = {
  label: r.string.isRequired,
  offLabel: r.string,
  onChange: r.func.isRequired,
  onLabel: r.string,
  selected: r.bool.isRequired,
  visibleLabels: r.bool
};
i.displayName = "Switch";
export {
  i as Switch
};
