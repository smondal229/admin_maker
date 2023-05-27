import { jsxs as c, jsx as l } from "react/jsx-runtime";
import L from "react";
import t from "prop-types";
import a from "styled-components";
import { sizes as j } from "../themes/sizes.js";
import { inputFocusStyle as q } from "../themes/utils.js";
import { Box as z } from "../Box/Box.js";
import { Flex as W } from "../Flex/Flex.js";
import { useField as S } from "../Field/FieldContext.js";
import { VisuallyHidden as B } from "../VisuallyHidden/VisuallyHidden.js";
import { Typography as h } from "../Typography/Typography.js";
const F = a.label`
  position: relative;
  display: inline-block;
  z-index: 0;
  width: 100%;
`, I = a(z)`
  cursor: ${({ disabled: e }) => e ? "not-allowed" : void 0};
  // Masks the background of each value
  overflow: hidden;
  flex-wrap: wrap;

  ${q()}
`, g = a(W).attrs({
  hasRadius: !0
})`
  background-color: ${({ theme: e, checked: n, disabled: i }) => n ? i ? e.colors.neutral200 : e.colors.neutral0 : "transparent"};
  border: 1px solid
    ${({ theme: e, checked: n, disabled: i }) => n && n !== null ? i ? e.colors.neutral300 : e.colors.neutral200 : i ? e.colors.neutral150 : e.colors.neutral100};
  position: relative;
  user-select: none;
  z-index: 2;
  flex: 1 1 50%;
  /**
    We declare the defined value because we want the height of the input when 
    the values are in a row to be 40px. But defining a height on the label
    would break the input when it wraps.
  */
  padding-top: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
  padding-bottom: ${({ size: e }) => `${e === "S" ? "2px" : "6px"}`};
`, M = a.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100%;
`, u = L.forwardRef(
  ({ size: e, onLabel: n, offLabel: i, children: b, checked: r, disabled: o, onChange: x, ...m }, y) => {
    const { error: C, hint: w, id: d, name: v, required: $ } = S(), f = "neutral600";
    let k = !r && r !== null ? "danger700" : f, R = r ? "primary600" : f;
    const T = (p) => {
      o || x(p);
    };
    let s;
    return C ? s = `${d}-error` : w && (s = `${d}-hint`), /* @__PURE__ */ c(F, { children: [
      /* @__PURE__ */ l(B, { children: b }),
      /* @__PURE__ */ c(
        I,
        {
          hasRadius: !0,
          disabled: o,
          padding: 1,
          display: "flex",
          background: o ? "neutral150" : "neutral100",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "neutral200",
          children: [
            /* @__PURE__ */ l(
              g,
              {
                size: e,
                paddingLeft: 3,
                paddingRight: 3,
                justifyContent: "center",
                alignItems: "center",
                "aria-hidden": !0,
                checked: r === null ? !1 : !r,
                disabled: o,
                children: /* @__PURE__ */ l(
                  h,
                  {
                    variant: "pi",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    textColor: o ? "neutral700" : k,
                    children: i
                  }
                )
              }
            ),
            /* @__PURE__ */ l(
              g,
              {
                size: e,
                paddingLeft: 3,
                paddingRight: 3,
                justifyContent: "center",
                alignItems: "center",
                "aria-hidden": !0,
                checked: r === null ? !1 : r,
                disabled: o,
                children: /* @__PURE__ */ l(
                  h,
                  {
                    variant: "pi",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    textColor: o ? "neutral700" : R,
                    children: n
                  }
                )
              }
            ),
            /* @__PURE__ */ l(
              M,
              {
                type: "checkbox",
                "aria-disabled": o,
                "aria-describedby": s,
                onChange: (p) => T(p),
                name: v,
                ref: y,
                "aria-required": $,
                ...m,
                checked: !(r === null || !r)
              }
            )
          ]
        }
      )
    ] });
  }
);
u.displayName = "ToggleCheckbox";
u.defaultProps = {
  disabled: !1,
  checked: !1,
  onChange: void 0,
  size: "M"
};
u.propTypes = {
  checked: t.bool,
  children: t.string.isRequired,
  disabled: t.bool,
  offLabel: t.string.isRequired,
  onChange: t.func,
  onLabel: t.string.isRequired,
  size: t.oneOf(Object.keys(j.input))
};
export {
  u as ToggleCheckbox
};
