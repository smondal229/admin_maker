import { jsx as r, jsxs as g } from "react/jsx-runtime";
import u from "react";
import e from "prop-types";
import x from "styled-components";
import { TextareaInput as v } from "./TextareaInput.js";
import { useId as T } from "../hooks/useId.js";
import { Field as b } from "../Field/Field.js";
import { Flex as a } from "../Flex/Flex.js";
import { FieldLabel as y } from "../Field/FieldLabel.js";
import { FieldHint as F } from "../Field/FieldHint.js";
import { FieldError as w } from "../Field/FieldError.js";
const I = x.div`
  & textarea {
    // TODO: remove when we'll have fonts in the theme
    height: ${80 / 16}rem;
    line-height: ${20 / 16}rem;
  }

  & textarea::placeholder {
    font-weight: 400;
    font-size: ${14 / 16}rem;
    line-height: 1.43;
    color: ${({ theme: i }) => i.colors.neutral500};
    opacity: 1;
  }
`, t = u.forwardRef(
  ({ name: i, hint: l, error: n, label: o, children: d, labelAction: m, id: s, required: p, ...h }, c) => {
    const f = T(s);
    return /* @__PURE__ */ r(I, { children: /* @__PURE__ */ r(b, { name: i, hint: l, error: n, id: f, required: p, children: /* @__PURE__ */ g(a, { direction: "column", alignItems: "stretch", gap: 1, children: [
      o && /* @__PURE__ */ r(a, { children: /* @__PURE__ */ r(y, { action: m, children: o }) }),
      /* @__PURE__ */ r(v, { ref: c, as: "textarea", value: d, ...h }),
      /* @__PURE__ */ r(F, {}),
      /* @__PURE__ */ r(w, {})
    ] }) }) });
  }
);
t.displayName = "Textarea";
t.defaultProps = {
  "aria-label": void 0,
  label: void 0,
  labelAction: void 0,
  error: void 0,
  hint: void 0,
  id: void 0,
  children: "",
  required: !1
};
t.propTypes = {
  "aria-label": e.string,
  children: e.string,
  error: e.string,
  hint: e.oneOfType([e.string, e.node, e.arrayOf(e.node)]),
  id: e.string,
  label: e.string,
  labelAction: e.element,
  name: e.string.isRequired,
  required: e.bool
};
export {
  t as Textarea
};
