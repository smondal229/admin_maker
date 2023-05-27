import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { useState as E, useEffect as O } from "react";
import { DatePickerPopover as W } from "./components.js";
import { DatePickerTd as H } from "./DatePickerTd.js";
import { DatePickerTh as t } from "./DatePickerTh.js";
import { getDefaultLocale as I } from "../helpers/getDefaultLocale.js";
import { generateWeeks as V } from "./utils/generateWeeks.js";
import { getDayOfWeek as q } from "./utils/getDayOfWeek.js";
import { getMonths as z } from "./utils/getMonths.js";
import { getYears as A } from "./utils/getYears.js";
import { SimpleMenu as u, MenuItem as g } from "../SimpleMenu/SimpleMenu.js";
import { RawTable as G } from "../RawTable/RawTable.js";
import { RawThead as J } from "../RawTable/RawThead.js";
import { RawTr as D } from "../RawTable/RawTr.js";
import { RawTbody as K } from "../RawTable/RawTbody.js";
import { formatDate as N } from "./utils/formatDate.js";
import { FocusTrap as Q } from "../FocusTrap/FocusTrap.js";
import { Box as p } from "../Box/Box.js";
import { Flex as U } from "../Flex/Flex.js";
import { VisuallyHidden as X } from "../VisuallyHidden/VisuallyHidden.js";
const ke = ({ onEscape: i, popoverSource: c, ...d }) => e(W, { source: c, role: "dialog", "aria-modal": "true", spacing: 4, children: e(Q, { onEscape: i, children: e(Z, { ...d }) }) }), Z = ({ selectedDate: i, initialDate: c = /* @__PURE__ */ new Date(), locale: d, onChange: s, minDate: w, maxDate: k }) => {
  const [a, m] = E(c), [f, C, M] = V(a, i), { sun: x, mon: R, tue: T, wed: P, thu: F, fri: S, sat: Y } = q(), h = z(), b = A(w, k), y = d || I();
  O(() => {
    i && m(i);
  }, [i]);
  const v = (r) => {
    const o = new Date(a);
    o.setMonth(h.indexOf(r)), m(o);
  }, L = (r) => {
    const o = new Date(a);
    o.setFullYear(r), m(o);
  }, $ = (r) => () => {
    s && s(r);
  };
  return l(p, { padding: 4, children: [e(p, { paddingBottom: 4, paddingLeft: 2, paddingRight: 2, children: l(U, { children: [e(u, { label: h[a.getMonth()], children: h.map((r) => e(g, { onClick: () => v(r), children: r }, r)) }), e(p, { paddingLeft: 2, children: e(u, { label: a.getFullYear(), children: b.map((r) => e(g, { onClick: () => L(r), children: r }, r)) }) })] }) }), l(G, { colCount: 7, rowCount: f.length + 1, initialCol: M, initialRow: C, role: "grid", children: [e(J, { children: l(D, { "aria-rowindex": 1, children: [e(t, { children: x }), e(t, { children: R }), e(t, { children: T }), e(t, { children: P }), e(t, { children: F }), e(t, { children: S }), e(t, { children: Y })] }) }), e(K, { children: f.map((r, o) => (
    // eslint-disable-next-line react/no-array-index-key
    e(D, { children: r.map(({ date: n, outsideMonth: j, isSelected: B }) => l(H, { outsideMonth: j, onSelectDay: $(n), isSelected: B, children: [e("span", { "aria-hidden": !0, children: n.getDate() }), e(X, { children: e("span", { children: N(n, y) }) })] }, `${n.getFullYear()}-${n.getMonth() + 1}-${n.getDate()}`)) }, o)
  )) })] })] });
};
export {
  ke as DatePickerCalendar,
  Z as DatePickerCalendarContent
};
