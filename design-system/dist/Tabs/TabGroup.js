import { jsx as f } from "react/jsx-runtime";
import * as r from "react";
import e from "prop-types";
import { TabsContext as x } from "./TabsContext.js";
import { useId as I } from "../hooks/useId.js";
const t = r.forwardRef(
  ({ id: u, initialSelectedTabIndex: o, label: n, onTabChange: s, variant: a, ...p }, T) => {
    const l = I(u), c = r.Children.toArray(p.children).find((i) => i.type.displayName === "Tabs");
    let d = o || 0;
    c && o === void 0 && (d = c.props.children.findIndex((i) => !i.props.disabled));
    const [m, b] = r.useState(d === -1 ? 0 : d);
    r.useImperativeHandle(T, () => ({
      _handlers: { setSelectedTabIndex: b }
    }));
    const v = r.useMemo(
      () => ({ id: l, selectedTabIndex: m, selectTabIndex: b, label: n, variant: a, onTabChange: s }),
      [n, s, m, l, a]
    );
    return /* @__PURE__ */ f(x.Provider, { value: v, children: /* @__PURE__ */ f("div", { ...p }) });
  }
);
t.displayName = "TabGroup";
t.defaultProps = {
  id: void 0,
  initialSelectedTabIndex: void 0,
  onTabChange() {
  },
  variant: void 0
};
t.propTypes = {
  children: e.node.isRequired,
  id: e.string,
  initialSelectedTabIndex: e.number,
  label: e.string.isRequired,
  onTabChange: e.func,
  variant: e.oneOf(["simple"])
};
export {
  t as TabGroup
};
