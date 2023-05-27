import { jsx as r, jsxs as h } from "react/jsx-runtime";
import "react";
import e from "prop-types";
import { Carousel as R } from "./Carousel.js";
import { useId as x } from "../hooks/useId.js";
import { Field as y } from "../Field/Field.js";
import { FieldLabel as F } from "../Field/FieldLabel.js";
import { FieldHint as L } from "../Field/FieldHint.js";
import { FieldError as I } from "../Field/FieldError.js";
import { Flex as P } from "../Flex/Flex.js";
const n = ({
  actions: d,
  children: t,
  error: s,
  hint: l,
  label: i,
  labelAction: m,
  nextLabel: p,
  onNext: u,
  onPrevious: a,
  previousLabel: c,
  required: f,
  secondaryLabel: g,
  selectedSlide: q,
  id: b,
  ...v
}) => {
  const o = x(b);
  return /* @__PURE__ */ r(y, { hint: l, error: s, id: o, required: f, children: /* @__PURE__ */ h(P, { direction: "column", alignItems: "stretch", gap: 1, children: [
    i && /* @__PURE__ */ r(F, { action: m, children: i }),
    /* @__PURE__ */ r(
      R,
      {
        actions: d,
        label: i,
        nextLabel: p,
        onNext: u,
        onPrevious: a,
        previousLabel: c,
        secondaryLabel: g,
        selectedSlide: q,
        id: o,
        ...v,
        children: t
      }
    ),
    /* @__PURE__ */ r(L, {}),
    /* @__PURE__ */ r(I, {})
  ] }) });
};
n.defaultProps = {
  actions: void 0,
  error: void 0,
  hint: void 0,
  id: void 0,
  labelAction: void 0,
  required: !1,
  secondaryLabel: void 0
};
n.propTypes = {
  actions: e.node,
  children: e.node.isRequired,
  error: e.string,
  hint: e.oneOfType([e.string, e.node, e.arrayOf(e.node)]),
  id: e.string,
  label: e.string.isRequired,
  labelAction: e.element,
  nextLabel: e.string.isRequired,
  onNext: e.func.isRequired,
  onPrevious: e.func.isRequired,
  previousLabel: e.string.isRequired,
  required: e.bool,
  secondaryLabel: e.string,
  selectedSlide: e.number.isRequired
};
export {
  n as CarouselInput
};
