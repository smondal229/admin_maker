import { jsx as l } from "react/jsx-runtime";
import { Children as C, cloneElement as D } from "react";
import o from "prop-types";
import k from "styled-components";
import { DefaultTabsRow as w, SimpleTabBox as R, DefaultTabButton as B, DefaultTabBox as E } from "./components.js";
import { useTabs as K } from "./TabsContext.js";
import { useTabsFocus as P } from "./useTabsFocus.js";
import { KeyboardKeys as T } from "../helpers/keyboardKeys.js";
import { Typography as I } from "../Typography/Typography.js";
const A = k.button`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }
`, N = ({ children: b, ...p }) => {
  const { id: x, selectedTabIndex: c, selectTabIndex: i, label: f, variant: u, onTabChange: y } = K(), m = P(c, y), r = C.toArray(b).map(
    (n, s) => D(n, {
      id: `${x}-${s}`,
      index: s,
      selectedTabIndex: c,
      onTabClick: () => i(s),
      variant: u
    })
  ), h = (n) => {
    if (!r.every((a) => a.props.disabled))
      switch (n.key) {
        case T.RIGHT: {
          const a = c + 1, e = (t) => r[t].props.disabled ? t === r.length - 1 ? e(0) : e(t + 1) : t, d = e(a >= r.length ? 0 : a);
          i(d);
          break;
        }
        case T.LEFT: {
          const a = c - 1, e = (t) => r[t].props.disabled ? e(t === 0 ? r.length - 1 : t - 1) : t, d = e(a < 0 ? r.length - 1 : a);
          i(d);
          break;
        }
        case T.HOME: {
          const a = r.findIndex((e) => !e.props.disabled);
          i(a);
          break;
        }
        case T.END: {
          const e = r.map((d, t) => ({ isDisabled: d.props.disabled, index: t })).reverse().find(({ isDisabled: d }) => !d);
          e && i(e.index);
          break;
        }
      }
  };
  return u === "simple" ? (
    // TODO: This needs to be reviewed how to handle correctly since it's supposed to have focus.
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    /* @__PURE__ */ l("div", { ref: m, role: "tablist", "aria-label": f, onKeyDown: h, ...p, children: r })
  ) : /* @__PURE__ */ l(
    w,
    {
      ref: m,
      role: "tablist",
      alignItems: "flex-end",
      "aria-label": f,
      onKeyDown: h,
      ...p,
      children: r
    }
  );
};
N.propTypes = {
  children: o.node.isRequired
};
const v = ({ disabled: b, id: p, children: x, variant: c, hasError: i, index: f, selectedTabIndex: u, onTabClick: y, ...m }) => {
  const r = `${p}-tab`, h = `${p}-tabpanel`, n = f === u, s = () => {
    b || y();
  };
  if (c === "simple") {
    let e;
    return i ? e = "danger600" : n ? e = "primary600" : e = "neutral600", /* @__PURE__ */ l(
      A,
      {
        id: r,
        role: "tab",
        "aria-controls": n ? h : void 0,
        tabIndex: n ? 0 : -1,
        "aria-selected": n,
        type: "button",
        onClick: s,
        "aria-disabled": b,
        ...m,
        children: /* @__PURE__ */ l(R, { padding: 4, selected: n, hasError: i, children: /* @__PURE__ */ l(I, { variant: "sigma", textColor: e, children: x }) })
      }
    );
  }
  i && console.warn('The "hasError" prop is only available for the "simple" variant.');
  const a = u - 1 === f;
  return /* @__PURE__ */ l(
    B,
    {
      id: r,
      role: "tab",
      type: "button",
      "aria-controls": n ? h : void 0,
      tabIndex: n ? 0 : -1,
      "aria-selected": n,
      onClick: s,
      "aria-disabled": b,
      showRightBorder: a,
      ...m,
      children: /* @__PURE__ */ l(E, { padding: n ? 4 : 3, background: n ? "neutral0" : "neutral100", selected: n, children: /* @__PURE__ */ l(I, { fontWeight: "bold", textColor: n ? "primary700" : "neutral600", children: x }) })
    }
  );
};
v.defaultProps = {
  disabled: !1,
  hasError: !1,
  id: void 0,
  index: void 0,
  onTabClick: void 0,
  selectedTabIndex: void 0,
  variant: void 0
};
v.propTypes = {
  children: o.node.isRequired,
  disabled: o.bool,
  hasError: o.bool,
  id: o.string,
  index: o.number,
  onTabClick: o.func,
  selectedTabIndex: o.number,
  variant: o.oneOf(["simple"])
};
export {
  v as Tab,
  N as Tabs
};
