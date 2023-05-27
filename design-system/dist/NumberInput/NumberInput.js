import { jsx as n, jsxs as h, Fragment as L } from "react/jsx-runtime";
import S, { useRef as y } from "react";
import { NumberParser as T, NumberFormatter as j } from "@internationalized/number";
import { CarretDown as N } from "@strapi/icons";
import r from "prop-types";
import z from "styled-components";
import { getDefaultLocale as U } from "../helpers/getDefaultLocale.js";
import { KeyboardKeys as v } from "../helpers/keyboardKeys.js";
import { useControllableState as _ } from "../hooks/useControllableState.js";
import { useId as E } from "../hooks/useId.js";
import { sizes as H } from "../themes/sizes.js";
import { Field as M } from "../Field/Field.js";
import { Flex as W } from "../Flex/Flex.js";
import { FieldLabel as X } from "../Field/FieldLabel.js";
import { FieldInput as Y } from "../Field/FieldInput.js";
import { Icon as w } from "../Icon/Icon.js";
import { FieldHint as G } from "../Field/FieldHint.js";
import { FieldError as J } from "../Field/FieldError.js";
const x = z.button`
  display: flex;
  height: 1rem;
  align-items: ${({ reverse: o }) => o ? "flex-end" : "flex-start"};
  transform: translateY(${({ reverse: o }) => o ? "-2px" : "2px"});
  cursor: ${({ disabled: o }) => o ? "not-allowed" : void 0};
  svg {
    display: block;
    height: ${4 / 16}rem;
    transform: ${({ reverse: o }) => o ? "rotateX(180deg)" : void 0};
  }
`, Q = "", u = S.forwardRef(
  ({
    size: o,
    startAction: I,
    name: A,
    hint: V,
    error: D,
    label: c,
    labelAction: F,
    locale: C,
    id: k,
    onValueChange: P,
    value: p,
    step: i,
    required: R,
    disabled: d,
    ...K
  }, O) => {
    const $ = E(k), f = C || U(), s = y(new T(f, { style: "decimal" })), m = y(new j(f, { maximumFractionDigits: 20 })), [a, q] = _({
      prop(e) {
        const t = String(p);
        return isNaN(t) || t !== e && e !== "" ? e : m.current.format(p);
      },
      defaultProp: Q,
      onChange(e) {
        const t = s.current.parse(e);
        P(isNaN(t) ? void 0 : t);
      }
    }), l = (e) => {
      q(String(e));
    }, B = ({ target: { value: e } }) => {
      s.current.isValidPartialNumber(e) && l(e);
    }, b = () => {
      if (!a) {
        l(i);
        return;
      }
      const e = s.current.parse(a), t = isNaN(e) ? i : e + i;
      l(m.current.format(t));
    }, g = () => {
      if (!a) {
        l(-i);
        return;
      }
      const e = s.current.parse(a), t = isNaN(e) ? -i : e - i;
      l(m.current.format(t));
    };
    return /* @__PURE__ */ n(M, { name: A, hint: V, error: D, id: $, required: R, children: /* @__PURE__ */ h(W, { direction: "column", alignItems: "stretch", gap: 1, children: [
      c && /* @__PURE__ */ n(X, { action: F, children: c }),
      /* @__PURE__ */ n(
        Y,
        {
          ref: O,
          startAction: I,
          disabled: d,
          type: "text",
          inputmode: "decimal",
          onChange: B,
          onKeyDown: (e) => {
            if (!d)
              switch (e.key) {
                case v.DOWN: {
                  e.preventDefault(), g();
                  break;
                }
                case v.UP: {
                  e.preventDefault(), b();
                  break;
                }
              }
          },
          onBlur: () => {
            if (a) {
              const e = s.current.parse(a), t = isNaN(e) ? "" : m.current.format(e);
              l(t);
            }
          },
          value: a,
          size: o,
          endAction: /* @__PURE__ */ h(L, { children: [
            /* @__PURE__ */ n(
              x,
              {
                disabled: d,
                "aria-hidden": !0,
                reverse: !0,
                onClick: b,
                tabIndex: -1,
                type: "button",
                "data-testid": "ArrowUp",
                children: /* @__PURE__ */ n(w, { as: N, color: "neutral500" })
              }
            ),
            /* @__PURE__ */ n(
              x,
              {
                disabled: d,
                "aria-hidden": !0,
                onClick: g,
                tabIndex: -1,
                type: "button",
                "data-testid": "ArrowDown",
                children: /* @__PURE__ */ n(w, { as: N, color: "neutral500" })
              }
            )
          ] }),
          ...K
        }
      ),
      /* @__PURE__ */ n(G, {}),
      /* @__PURE__ */ n(J, {})
    ] }) });
  }
);
u.displayName = "NumberInput";
u.defaultProps = {
  "aria-label": void 0,
  disabled: !1,
  error: void 0,
  hint: void 0,
  id: void 0,
  label: void 0,
  labelAction: void 0,
  locale: void 0,
  required: !1,
  size: "M",
  startAction: void 0,
  step: 1,
  value: void 0
};
u.propTypes = {
  "aria-label": r.string,
  disabled: r.bool,
  error: r.string,
  hint: r.oneOfType([r.string, r.node, r.arrayOf(r.node)]),
  id: r.string,
  label: r.string,
  labelAction: r.element,
  locale: r.string,
  name: r.string.isRequired,
  onValueChange: r.func.isRequired,
  required: r.bool,
  size: r.oneOf(Object.keys(H.input)),
  startAction: r.element,
  step: r.number,
  value: r.number
};
export {
  u as NumberInput
};
