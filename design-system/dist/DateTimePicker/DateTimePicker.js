import { jsx as r, jsxs as D } from "react/jsx-runtime";
import { useControllableState as P } from "../hooks/useControllableState.js";
import { useId as V } from "../hooks/useId.js";
import { DatePicker as j } from "../DatePicker/DatePicker.js";
import { TimePicker as q } from "../TimePicker/TimePicker.js";
import { Field as v } from "../Field/Field.js";
import { Flex as C } from "../Flex/Flex.js";
import { FieldLabel as z } from "../Field/FieldLabel.js";
import { FieldHint as B } from "../Field/FieldHint.js";
import { FieldError as E } from "../Field/FieldError.js";
const Z = ({ ariaLabel: a, clearLabel: n = "clear", disabled: f = !1, error: d, hint: c, id: b, label: m, labelAction: I, onChange: T, onClear: g, name: $, required: u = !1, selectButtonTitle: w = "select", size: h = "M", step: y = 1, value: F, ...H }) => {
  const M = A(F), [t, o] = P({
    prop: M,
    onChange: T
  }), i = t ? `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}` : void 0, k = (e) => {
    if (i) {
      const [s, p] = i.split(":");
      e.setHours(parseInt(s, 10)), e.setMinutes(parseInt(p, 10));
    }
    o(e);
  }, x = (e) => {
    const s = t ? new Date(t) : /* @__PURE__ */ new Date(), [p, N] = e.split(":");
    s.setHours(parseInt(p, 10)), s.setMinutes(parseInt(N, 10)), o(s);
  }, S = () => {
    o(void 0), g && g();
  }, L = () => {
    let e = t ? new Date(t) : /* @__PURE__ */ new Date();
    e.setHours(0), e.setMinutes(0), o(e);
  }, l = V(b);
  return r(v, { name: $, role: "group", id: l, "aria-labelledby": l, hint: c, error: d, required: u, children: D(C, { direction: "column", alignItems: "stretch", gap: 1, children: [r(z, { action: I, children: m }), D(C, { gap: 2, children: [r(j, { ariaLabel: m || a, selectedDate: t, selectedDateLabel: (e) => `Date picker, current is ${e}`, onChange: k, error: typeof d == "string", hint: typeof c == "string", required: u, size: h, onClear: S, clearLabel: `${n} date`, disabled: f, id: l, ...H }), r(q, {
    size: h,
    "aria-label": m || a,
    error: typeof d == "string",
    hint: typeof c == "string",
    value: i,
    onChange: x,
    /**
     * In reality the time picker is only cleared when there is no date otherwise it's just 00:00
     * and we should show that for accurate UX and therefore you cannot clear it when it's 00:00.
     */
    onClear: i !== void 0 && i !== "0:0:0" ? L : void 0,
    clearLabel: `${n} time`,
    required: u,
    selectButtonTitle: w,
    disabled: f,
    step: y,
    id: l
  })] }), r(B, {}), r(E, {})] }) });
}, A = (a) => {
  const n = Date.parse(a);
  if (!Number.isNaN(n))
    return new Date(n);
};
export {
  Z as DateTimePicker
};
