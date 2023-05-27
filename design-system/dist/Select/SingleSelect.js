import { jsxs as s, jsx as e } from "react/jsx-runtime";
import * as n from "react";
import { Item as M, ItemText as P, Root as _, Trigger as z, Value as A, Portal as D, Content as G, Viewport as J } from "./SelectParts.js";
import { stripReactIdOfColon as K } from "../helpers/strings.js";
import { useId as S } from "../hooks/useId.js";
import { useIntersection as Q } from "../hooks/useIntersection.js";
import { Box as C } from "../Box/Box.js";
import { Typography as U } from "../Typography/Typography.js";
import { Field as X } from "../Field/Field.js";
import { Flex as Y } from "../Flex/Flex.js";
import { FieldLabel as Z } from "../Field/FieldLabel.js";
import { FieldHint as ee } from "../Field/FieldHint.js";
import { FieldError as re } from "../Field/FieldError.js";
const Ie = ({ children: h, clearLabel: o = "Clear", customizeContent: i, disabled: l, error: d, hint: O, id: B, label: p, labelAction: F, onChange: f, onClear: m, onReachEnd: u, placeholder: T, required: g, selectButtonTitle: te, startIcon: $, size: y = "M", value: c, ...w }) => {
  const [k, I] = n.useState(), [v, E] = n.useState(!1), a = S(B), L = `${a}-hint`, N = `${a}-error`, V = (r) => {
    f ? f(typeof c == "number" ? Number(r) : r) : I(r);
  }, j = (r) => {
    E(r);
  }, W = (r) => {
    m && m(r), f || I("");
  }, b = n.useRef(null), q = () => {
    b.current.focus();
  }, x = n.useRef(null), H = S(), R = `intersection-${K(H)}`;
  Q(x, (r) => {
    u && u(r);
  }, {
    selectorToWatch: `#${R}`,
    /**
     * We need to know when the select is open because only then will viewportRef
     * not be null. Because it uses a portal that (sensibly) is not mounted 24/7.
     */
    skipWhen: !v
  });
  const t = (typeof c < "u" && c !== null ? c.toString() : k) ?? "";
  return e(X, { hint: O, error: d, id: a, required: g, children: s(Y, { direction: "column", alignItems: "stretch", gap: 1, children: [e(Z, { onClick: q, action: F, children: p }), s(_, { onOpenChange: j, disabled: l, required: g, onValueChange: V, value: t, ...w, children: [e(z, { ref: b, "aria-label": p, "aria-describedby": `${L} ${N}`, id: a, startIcon: $, size: y, hasError: !!d, disabled: l, clearLabel: o, onClear: t && m ? W : void 0, children: e(A, { placeholder: T, textColor: t ? "neutral800" : "neutral600", children: t && i ? i(t) : void 0 }) }), e(D, { children: e(G, { position: "popper", sideOffset: 4, children: s(J, { ref: x, children: [h, e(C, { id: R, width: "100%", height: "1px" })] }) }) })] }), e(ee, {}), e(re, {})] }) });
}, be = n.forwardRef(({ value: h, startIcon: o, children: i, ...l }, d) => s(M, { ref: d, value: h.toString(), ...l, children: [o && e(C, { as: "span", "aria-hidden": !0, children: o }), e(U, { textColor: "neutral800", children: e(P, { children: i }) })] }));
export {
  Ie as SingleSelect,
  be as SingleSelectOption
};
