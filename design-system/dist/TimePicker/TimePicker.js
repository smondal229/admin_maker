import { jsx as n } from "react/jsx-runtime";
import { Clock as S } from "@strapi/icons";
import b from "styled-components";
import { useId as C } from "../hooks/useId.js";
import { SingleSelect as I, SingleSelectOption as v } from "../Select/SingleSelect.js";
import { Flex as x } from "../Flex/Flex.js";
const O = ({ id: i, value: c, step: h = 15, onChange: a, ...m }) => {
  const p = C(i), d = 24, e = [];
  let s = 0;
  for (let t = 0; t < d; t++)
    for (s = 0; s < 60; )
      e.push(`${t < 10 ? `0${t}` : t}:${s < 10 ? `0${s}` : s}`), s += h;
  const f = () => {
    const [t, u] = c?.split(":") ?? [], $ = e.reduce((o, l) => {
      const [r] = l.split(":");
      return Math.abs(r - t) < Math.abs(o - t) ? r : o;
    }, e[0].split(":")[0]), M = e.reduce((o, l) => {
      const r = l.split(":")[1];
      return Math.abs(r - u) < Math.abs(o - u) ? r : o;
    }, e[0].split(":")[1]);
    return `${$}:${M}`;
  }, g = (t) => {
    a && a(t.toString());
  };
  return n(I, { id: p, placeholder: "--:--", value: c ? f() : void 0, startIcon: n(k, { as: "span", children: n(S, {}) }), onChange: g, ...m, children: e.map((t) => n(v, { value: t, children: t }, t)) });
}, k = b(x)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({ theme: i }) => i.colors.neutral500};
  }
`;
export {
  O as TimePicker
};
