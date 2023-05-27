import { jsx as e, jsxs as g } from "react/jsx-runtime";
import { forwardRef as y, useRef as $ } from "react";
import { Search as C, Cross as S } from "@strapi/icons";
import o from "prop-types";
import i from "styled-components";
import { sizes as v } from "../themes/sizes.js";
import { inputFocusStyle as x } from "../themes/utils.js";
import { InputWrapper as l, FieldInput as F } from "../Field/FieldInput.js";
import { Flex as a } from "../Flex/Flex.js";
import { Field as w } from "../Field/Field.js";
import { VisuallyHidden as z } from "../VisuallyHidden/VisuallyHidden.js";
import { FieldLabel as q } from "../Field/FieldLabel.js";
import { FieldAction as I } from "../Field/FieldAction.js";
const W = i(a)`
  font-size: 0.5rem;
  svg path {
    fill: ${({ theme: r }) => r.colors.neutral400};
  }
`, p = i(a)`
  font-size: 0.8rem;

  svg path {
    fill: ${({ theme: r }) => r.colors.neutral800};
  }
`, j = i.div`
  border-radius: ${({ theme: r }) => r.borderRadius};
  box-shadow: ${({ theme: r }) => r.shadows.filterShadow};

  &:focus-within {
    ${p} {
      svg path {
        fill: ${({ theme: r }) => r.colors.primary600};
      }
    }
  }

  ${l} {
    border: 1px solid transparent;
  }

  ${x(l)}
`, t = y(({ name: r, size: c, children: d, value: s, onClear: m, clearLabel: f, ...u }, h) => {
  const n = $(null), b = s.length > 0;
  return /* @__PURE__ */ e(j, { children: /* @__PURE__ */ g(w, { name: r, children: [
    /* @__PURE__ */ e(z, { children: /* @__PURE__ */ e(q, { children: d }) }),
    /* @__PURE__ */ e(
      F,
      {
        ref: h || n,
        value: s,
        startAction: /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e(C, { "aria-hidden": !0 }) }),
        size: c,
        endAction: b ? /* @__PURE__ */ e(I, { label: f, onClick: (R) => {
          m(R), n.current.focus();
        }, children: /* @__PURE__ */ e(W, { children: /* @__PURE__ */ e(S, {}) }) }) : void 0,
        ...u
      }
    )
  ] }) });
});
t.displayName = "Searchbar";
t.defaultProps = {
  value: "",
  size: "M"
};
t.propTypes = {
  children: o.node.isRequired,
  clearLabel: o.string.isRequired,
  name: o.string.isRequired,
  onClear: o.func.isRequired,
  size: o.oneOf(Object.keys(v.input)),
  value: o.string
};
export {
  t as Searchbar
};
