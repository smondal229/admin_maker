import { jsx as o, jsxs as l } from "react/jsx-runtime";
import "react";
import r from "prop-types";
import f from "styled-components";
import { useId as c } from "../hooks/useId.js";
import { useField as h } from "../Field/FieldContext.js";
import { Typography as x } from "../Typography/Typography.js";
import { Field as b } from "../Field/Field.js";
import { Flex as u } from "../Flex/Flex.js";
import { Box as y } from "../Box/Box.js";
import { FieldHint as g } from "../Field/FieldHint.js";
import { FieldError as T } from "../Field/FieldError.js";
import { BaseCheckbox as k } from "../BaseCheckbox/BaseCheckbox.js";
const C = f(x)`
  display: flex;
  align-items: flex-start;
  * {
    cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  }
`, F = (e) => {
  const { id: i } = h();
  return /* @__PURE__ */ o(k, { id: i, ...e });
}, m = ({ children: e, disabled: i, id: p, hint: n, error: s, ...a }) => {
  const t = c(p);
  let d;
  return s ? d = `${t}-error` : n && (d = `${t}-hint`), /* @__PURE__ */ o(b, { id: t, hint: n, error: s, children: /* @__PURE__ */ l(u, { direction: "column", alignItems: "stretch", gap: 1, children: [
    /* @__PURE__ */ l(C, { as: "label", textColor: "neutral800", disabled: i, children: [
      /* @__PURE__ */ o(F, { disabled: i, "aria-describedby": d, ...a }),
      /* @__PURE__ */ o(y, { paddingLeft: 2, children: e })
    ] }),
    /* @__PURE__ */ o(g, {}),
    /* @__PURE__ */ o(T, {})
  ] }) });
};
m.defaultProps = {
  disabled: !1,
  id: void 0,
  error: void 0,
  hint: void 0
};
m.propTypes = {
  children: r.node.isRequired,
  disabled: r.bool,
  error: r.string,
  hint: r.oneOfType([r.string, r.node, r.arrayOf(r.node)]),
  id: r.oneOfType([r.string, r.number])
};
export {
  m as Checkbox
};
