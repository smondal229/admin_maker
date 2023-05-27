import { jsx as r, jsxs as a } from "react/jsx-runtime";
import * as p from "react";
import { Cross as he, CarretDown as pe } from "@strapi/icons";
import { Combobox as t } from "@strapi/ui-primitives";
import l from "styled-components";
import { stripReactIdOfColon as fe } from "../helpers/strings.js";
import { useControllableState as I } from "../hooks/useControllableState.js";
import { useId as q } from "../hooks/useId.js";
import { useIntersection as me } from "../hooks/useIntersection.js";
import { inputFocusStyle as ge } from "../themes/utils.js";
import { Loader as be } from "../Loader/Loader.js";
import { Box as w } from "../Box/Box.js";
import { Typography as d } from "../Typography/Typography.js";
import { Field as $e } from "../Field/Field.js";
import { Flex as h } from "../Flex/Flex.js";
import { FieldLabel as Ce } from "../Field/FieldLabel.js";
import { FieldHint as xe } from "../Field/FieldHint.js";
import { FieldError as Ie } from "../Field/FieldError.js";
const we = ({ children: e, clearLabel: n = "clear", creatable: s = !1, createMessage: f = (c) => `Create "${c}"`, defaultFilterValue: m, defaultTextValue: g, defaultOpen: D = !1, open: H, onOpenChange: N, disabled: b = !1, error: $, filterValue: W, hasMoreItems: L = !1, hint: U, id: A, label: G, labelAction: J, loading: C = !1, loadingMessage: K = "Loading content...", noOptionsMessage: Q = () => "No results found", onChange: V, onClear: x, onCreateOption: v, onFilterValueChange: X, onInputChange: y, onTextValueChange: Y, onLoadMore: k, placeholder: Z = "Select or enter a value", required: T = !1, startIcon: F, textValue: _, value: O }) => {
  const [c, M] = I({
    prop: H,
    defaultProp: D,
    onChange: N
  }), [i, B] = I({
    prop: _,
    defaultProp: g,
    onChange: Y
  }), [ee, P] = I({
    prop: W,
    defaultProp: m,
    onChange: X
  }), S = p.useRef(null), j = p.useRef(null), re = p.useRef(null), u = q(A), oe = (o) => {
    x && !b && (B(""), P(""), x(o), j.current.focus());
  }, te = (o) => {
    M(o);
  }, ne = (o) => {
    B(o);
  }, le = (o) => {
    P(o);
  }, ie = (o) => {
    y && y(o);
  }, ae = (o) => {
    V && V(o);
  }, se = q(), E = `intersection-${fe(se)}`, de = (o) => {
    k && L && !C && k(o);
  }, z = () => {
    v && i && v(i);
  };
  me(S, de, {
    selectorToWatch: `#${E}`,
    /**
     * We need to know when the select is open because only then will viewportRef
     * not be null. Because it uses a portal that (sensibly) is not mounted 24/7.
     */
    skipWhen: !c
  });
  const ce = `${u}-hint`, ue = `${u}-error`;
  return r($e, { hint: U, error: $, id: u, required: T, children: a(h, { direction: "column", alignItems: "stretch", gap: 1, children: [r(Ce, { action: J, children: G }), a(t.Root, { autocomplete: s ? "list" : "both", open: c, onOpenChange: te, onTextValueChange: ne, textValue: i, allowCustomValue: !0, disabled: b, required: T, value: O === null ? void 0 : O, onValueChange: ae, filterValue: ee, onFilterValueChange: le, children: [a(Ve, { $hasError: !!$, children: [a(h, { flex: "1", as: "span", gap: 3, children: [F ? r(w, { as: "span", "aria-hidden": !0, children: F }) : null, r(ve, { placeholder: Z, id: u, "aria-invalid": !!$, "aria-labelledby": `${ce} ${ue}`, onChange: ie, ref: j })] }), a(h, { as: "span", gap: 3, children: [i && x ? r(Re, { as: "button", hasRadius: !0, background: "transparent", type: "button", onClick: oe, "aria-disabled": b, "aria-label": n, title: n, ref: re, children: r(he, {}) }) : null, r(ye, { children: r(pe, {}) })] })] }), r(t.Portal, { children: r(ke, { sideOffset: 4, children: a(Te, { ref: S, children: [e, s ? r(t.CreateItem, { onPointerUp: z, onClick: z, asChild: !0, children: r(R, { children: r(d, { children: f(i ?? "") }) }) }) : null, !s && !C ? r(t.NoValueFound, { asChild: !0, children: r(R, { $hasHover: !1, children: r(d, { children: Q(i ?? "") }) }) }) : null, C ? r(h, { justifyContent: "center", alignItems: "center", paddingTop: 2, paddingBottom: 2, children: r(be, { small: !0, children: K }) }) : null, r(w, { id: E, width: "100%", height: "1px" })] }) }) })] }), r(xe, {}), r(Ie, {})] }) });
}, Je = (e) => r(we, { ...e, creatable: !0 }), Re = l(w)`
  border: none;

  svg {
    height: ${11 / 16}rem;
    width: ${11 / 16}rem;
  }

  svg path {
    fill: ${({ theme: e }) => e.colors.neutral600};
  }
`, Ve = l(t.Trigger)`
  position: relative;
  border: 1px solid ${({ theme: e, $hasError: n }) => n ? e.colors.danger600 : e.colors.neutral200};
  padding-right: ${({ theme: e }) => e.spaces[3]};
  padding-left: ${({ theme: e }) => e.spaces[3]};
  border-radius: ${({ theme: e }) => e.borderRadius};
  background: ${({ theme: e }) => e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme: e }) => e.spaces[4]};

  &[data-disabled] {
    color: ${({ theme: e }) => e.colors.neutral600};
    background: ${({ theme: e }) => e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({ theme: e, $hasError: n }) => ge()({ theme: e, hasError: n })};
`, ve = l(t.TextInput)`
  width: 100%;
  font-size: ${14 / 16}rem;
  color: ${({ theme: e }) => e.colors.neutral800};
  min-height: ${40 / 16}rem;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`, ye = l(t.Icon)`
  & > svg {
    width: ${6 / 16}rem;

    & > path {
      fill: ${({ theme: e }) => e.colors.neutral600};
    }
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`, ke = l(t.Content)`
  background: ${({ theme: e }) => e.colors.neutral0};
  box-shadow: ${({ theme: e }) => e.shadows.filterShadow};
  border: 1px solid ${({ theme: e }) => e.colors.neutral150};
  border-radius: ${({ theme: e }) => e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({ theme: e }) => e.zIndices[1]};
`, Te = l(t.Viewport)`
  padding: ${({ theme: e }) => e.spaces[1]};
`, Ke = p.forwardRef(({ children: e, value: n, disabled: s, textValue: f, ...m }, g) => r(t.ComboboxItem, { asChild: !0, value: n, disabled: s, textValue: f, children: r(R, { ref: g, ...m, children: r(t.ItemText, { asChild: !0, children: r(d, { children: e }) }) }) })), R = l.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({ theme: e }) => e.spaces[2]} ${({ theme: e }) => e.spaces[4]};
  background-color: ${({ theme: e }) => e.colors.neutral0};
  border-radius: ${({ theme: e }) => e.borderRadius};
  user-select: none;

  &[data-selected] {
    background-color: ${({ theme: e }) => e.colors.primary100};

    ${d} {
      color: ${({ theme: e }) => e.colors.primary600};
      font-weight: bold;
    }
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme: e, $hasHover: n = !0 }) => n ? e.colors.primary100 : e.colors.neutral0};
  }

  &[data-highlighted] {
    ${d} {
      color: ${({ theme: e }) => e.colors.primary600};
      font-weight: bold;
    }
  }
`;
export {
  we as Combobox,
  Je as CreatableCombobox,
  Ke as Option,
  R as OptionBox
};
