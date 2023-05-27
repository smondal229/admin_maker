import { jsx as r, jsxs as s } from "react/jsx-runtime";
import { forwardRef as c, useRef as u, useImperativeHandle as h } from "react";
import { useId as I } from "../hooks/useId.js";
import { FieldInput as x } from "../Field/FieldInput.js";
import { Field as F } from "../Field/Field.js";
import { Flex as T } from "../Flex/Flex.js";
import { FieldLabel as g } from "../Field/FieldLabel.js";
import { FieldHint as w } from "../Field/FieldHint.js";
import { FieldError as R } from "../Field/FieldError.js";
const b = c(({ name: t, hint: n, error: m, label: e, labelAction: p, id: d, required: a, ...i }, l) => {
  const f = I(d), o = u(null);
  if (!e && !i["aria-label"])
    throw new Error('The TextInput component needs a "label" or an "aria-label" props');
  return h(l, () => ({
    inputWrapperRef: o
  })), r("div", { ref: o, children: r(F, { name: t, hint: n, error: m, id: f, required: a, children: s(T, { direction: "column", alignItems: "stretch", gap: 1, children: [e && r(g, { action: p, children: e }), r(x, { ...i }), r(w, {}), r(R, {})] }) }) });
});
b.displayName = "TextInput";
export {
  b as TextInput
};
