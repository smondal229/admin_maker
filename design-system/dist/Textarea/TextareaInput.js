import { jsx as n } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import $ from "prop-types";
import d from "styled-components";
import { inputFocusStyle as m } from "../themes/utils.js";
import { useField as b } from "../Field/FieldContext.js";
const g = d.div`
  border: 1px solid ${({ theme: r, hasError: o }) => o ? r.colors.danger600 : r.colors.neutral200};
  border-radius: ${({ theme: r }) => r.borderRadius};

  padding-left: ${({ theme: r, hasLeftAction: o }) => o ? 0 : r.spaces[4]};
  padding-right: ${({ theme: r, hasRightAction: o }) => o ? 0 : r.spaces[4]};
  padding-top: ${({ theme: r }) => `${r.spaces[3]}`};
  padding-bottom: ${({ theme: r }) => `${r.spaces[3]}`};

  background: ${({ theme: r, disabled: o }) => o ? r.colors.neutral150 : r.colors.neutral0};
  ${m()}
`, x = d.textarea`
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: ${14 / 16}rem;
  border: none;
  color: ${({ theme: r, disabled: o }) => o ? r.colors.neutral600 : r.colors.neutral800};
  resize: none;
  background: inherit;

  ::placeholder {
    color: ${({ theme: r }) => r.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`, t = f(({ disabled: r, ...o }, l) => {
  const { id: e, error: s, hint: p, name: c, required: u } = b();
  let a;
  s ? a = `${e}-error` : p && (a = `${e}-hint`);
  const i = !!s;
  return /* @__PURE__ */ n(g, { hasError: i, disabled: r, children: /* @__PURE__ */ n(
    x,
    {
      id: e,
      name: c,
      ref: l,
      "aria-describedby": a,
      "aria-invalid": i,
      disabled: r,
      hasError: i,
      "aria-required": u,
      ...o
    }
  ) });
});
t.displayName = "TextareaInput";
t.defaultProps = {
  disabled: !1
};
t.propTypes = {
  disabled: $.bool
};
export {
  t as TextareaInput
};
