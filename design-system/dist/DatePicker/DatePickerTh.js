import { jsx as e, jsxs as i } from "react/jsx-runtime";
import t from "styled-components";
import { RawTh as n } from "../RawTable/RawCell.js";
import { Flex as a } from "../Flex/Flex.js";
import { Typography as s } from "../Typography/Typography.js";
import { VisuallyHidden as l } from "../VisuallyHidden/VisuallyHidden.js";
const f = t(n)`
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;
  border-radius: ${({ theme: r }) => r.borderRadius};
  text-transform: capitalize;
`, h = t(a)`
  height: ${24 / 16}rem;
  width: ${32 / 16}rem;
`, T = ({ children: r, ...o }) => e(f, { ...o, children: i(h, { justifyContent: "center", children: [e(s, { variant: "pi", fontWeight: "bold", color: "neutral800", "aria-hidden": !0, children: r.substr(0, 2) }), e(l, { children: e("span", { children: r }) })] }) });
export {
  T as DatePickerTh
};
