import { jsxs as R, jsx as r } from "react/jsx-runtime";
import { useState as S, useRef as W } from "react";
import { Cross as $, Calendar as v } from "@strapi/icons";
import m from "styled-components";
import { DatePickerWrapper as A } from "./components.js";
import { DatePickerCalendar as P } from "./DatePickerCalendar.js";
import { formatDate as j } from "./utils/formatDate.js";
import { getDefaultLocale as E } from "../helpers/getDefaultLocale.js";
import { TextInput as I } from "../TextInput/TextInput.js";
import { FieldAction as V } from "../Field/FieldAction.js";
const N = ({
  /**
   * DatePicker props
   */
  ariaLabel: e,
  onClear: a,
  clearLabel: u = "Clear",
  /**
   * DatePickerCalendar props
   */
  initialDate: d,
  locale: h,
  maxDate: C,
  minDate: D,
  onChange: c,
  selectedDate: n,
  /**
   * TextInput props
   */
  disabled: o = !1,
  ...g
}) => {
  const [s, i] = S(!1), t = W(null), f = h || E(), p = n ? j(n, f) : "", x = () => {
    o || i((l) => !l);
  }, b = () => {
    o || a && (a(), t.current.inputWrapperRef.current.focus());
  }, k = (l) => {
    c && c(l), i(!1);
  }, y = () => {
    i(!1);
  };
  return R(A, { bold: s, children: [r(I, {
    ref: t,
    onClick: x,
    // Prevent input from changing for now
    onChange: () => {
    },
    value: p,
    startAction: r(F, { "aria-hidden": !0 }),
    endAction: a && p ? r(V, { label: u, onClick: b, "aria-disabled": o || void 0, children: r(w, {}) }) : void 0,
    "aria-autocomplete": "none",
    "aria-label": e,
    disabled: o,
    type: "text",
    ...g
  }), t.current && t.current.inputWrapperRef && s && r(P, { selectedDate: n, initialDate: d, onChange: k, onEscape: y, locale: f, popoverSource: t.current.inputWrapperRef, minDate: D, maxDate: C })] });
}, w = m($)`
  height: ${11 / 16}rem;
  width: ${11 / 16}rem;

  path {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }
`, F = m(v)`
  & > path {
    fill: ${({ theme: e }) => e.colors.neutral500};
  }
`;
export {
  N as DatePicker
};
