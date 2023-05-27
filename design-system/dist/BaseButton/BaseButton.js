import { jsx as s } from "react/jsx-runtime";
import n from "react";
import i from "styled-components";
import { buttonFocusStyle as u } from "../themes/utils.js";
import { Flex as p } from "../Flex/Flex.js";
const d = i(p)`
  > svg {
    height: ${({ theme: t }) => t.spaces[3]};
    width: ${({ theme: t }) => t.spaces[3]};

    > g,
    path {
      fill: ${({ theme: t }) => t.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${u}
`, l = n.forwardRef(({ disabled: t, children: r, background: e = "neutral0", ...o }, a) => s(d, { ref: a, "aria-disabled": t, as: "button", type: "button", disabled: t, padding: 2, hasRadius: !0, background: e, borderColor: "neutral200", cursor: "pointer", ...o, children: r }));
l.displayName = "BaseButton";
export {
  l as BaseButton,
  d as BaseButtonWrapper
};
