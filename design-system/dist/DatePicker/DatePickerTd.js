import { jsx as n } from "react/jsx-runtime";
import c from "styled-components";
import { RawTd as d } from "../RawTable/RawCell.js";
import { Typography as i } from "../Typography/Typography.js";
const f = c.button`
  border: none;
  background: ${({ theme: r, $isSelected: o }) => o ? r.colors.primary100 : r.colors.neutral0};
  height: ${32 / 16}rem;
  text-align: center;
  width: ${32 / 16}rem;
  border-radius: ${({ theme: r }) => r.borderRadius};

  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;

  &:hover {
    background: ${({ theme: r }) => r.colors.primary100};
  }

  &:hover > ${i} {
    color: ${({ theme: r }) => r.colors.primary600};
  }
`, h = ({ children: r, outsideMonth: o = !1, onSelectDay: l, isSelected: e = !1, ...a }) => {
  let t = "neutral900";
  return e ? t = "primary600" : o && (t = "neutral600"), n(d, { ...a, children: n(f, { tabIndex: -1, onClick: l, $isSelected: e, type: "button", children: n(i, { variant: "pi", textColor: t, fontWeight: e ? "bold" : void 0, children: r }) }) });
};
export {
  h as DatePickerTd
};
