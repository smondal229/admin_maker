import { jsx as d } from "react/jsx-runtime";
import { Children as s, cloneElement as b } from "react";
import i from "prop-types";
import { useTabs as c } from "./TabsContext.js";
const m = ({ children: e, ...r }) => {
  const { id: t, selectedTabIndex: o } = c(), p = s.toArray(e).map((a, n) => b(a, { id: `${t}-${n}` })).filter((a, n) => n === o);
  return /* @__PURE__ */ d("div", { ...r, children: p });
};
m.propTypes = {
  children: i.node.isRequired
};
const l = ({ id: e, ...r }) => {
  const t = `${e}-tab`, o = `${e}-tabpanel`;
  return /* @__PURE__ */ d("div", { id: o, role: "tabpanel", tabIndex: 0, "aria-labelledby": t, ...r });
};
l.defaultProps = {
  id: void 0
};
l.propTypes = {
  id: i.string
};
export {
  l as TabPanel,
  m as TabPanels
};
