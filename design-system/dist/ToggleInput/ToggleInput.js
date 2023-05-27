import { jsx as o, jsxs as s } from "react/jsx-runtime";
import "react";
import e from "prop-types";
import a from "styled-components";
import { useId as T } from "../hooks/useId.js";
import { sizes as v } from "../themes/sizes.js";
import { ToggleCheckbox as F } from "../ToggleCheckbox/ToggleCheckbox.js";
import { Field as I } from "../Field/Field.js";
import { TextButton as k } from "../TextButton/TextButton.js";
import { Flex as p } from "../Flex/Flex.js";
import { FieldLabel as C } from "../Field/FieldLabel.js";
import { FieldHint as O } from "../Field/FieldHint.js";
import { FieldError as j } from "../Field/FieldError.js";
const z = a(I)`
  max-width: 320px;
`, q = a(k)`
  align-self: flex-end;
  margin-left: auto;
`, r = ({
  disabled: i,
  size: c,
  error: f,
  hint: g,
  label: t,
  name: u,
  labelAction: h,
  required: b,
  id: x,
  onClear: n,
  clearLabel: l,
  checked: d,
  ...y
}) => {
  const m = T(x);
  return /* @__PURE__ */ o(z, { name: u, hint: g, error: f, id: m, required: b, children: /* @__PURE__ */ s(p, { direction: "column", alignItems: "stretch", gap: 1, children: [
    /* @__PURE__ */ s(p, { children: [
      /* @__PURE__ */ o(C, { action: h, children: t }),
      l && n && d !== null && !i && /* @__PURE__ */ o(q, { onClick: n, children: l })
    ] }),
    /* @__PURE__ */ o(F, { id: m, size: c, checked: d, disabled: i, ...y, children: t }),
    /* @__PURE__ */ o(O, {}),
    /* @__PURE__ */ o(j, {})
  ] }) });
};
r.displayName = "ToggleInput";
r.defaultProps = {
  checked: !1,
  clearLabel: void 0,
  disabled: !1,
  error: void 0,
  hint: void 0,
  id: void 0,
  label: "",
  labelAction: void 0,
  name: "",
  onClear: void 0,
  required: !1,
  size: "M"
};
r.propTypes = {
  checked: e.bool,
  clearLabel: e.string,
  disabled: e.bool,
  error: e.string,
  hint: e.oneOfType([e.string, e.node, e.arrayOf(e.node)]),
  id: e.string,
  label: e.string,
  labelAction: e.node,
  name: e.string,
  onClear: e.func,
  required: e.bool,
  size: e.oneOf(Object.keys(v.input))
};
export {
  r as ToggleInput
};
