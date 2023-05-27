import { jsx as r } from "react/jsx-runtime";
import * as t from "react";
import e from "prop-types";
import a from "styled-components";
import { PaginationContext as c } from "./PaginationContext.js";
import { Flex as u } from "../../Flex/Flex.js";
const f = a.nav``, g = a(u)`
  & > * + * {
    margin-left: ${({ theme: i }) => i.spaces[1]};
  }
`, l = ({ children: i, label: s, activePage: n, pageCount: o }) => {
  const p = t.useMemo(() => ({ activePage: n, pageCount: o }), [n, o]);
  return /* @__PURE__ */ r(c.Provider, { value: p, children: /* @__PURE__ */ r(f, { "aria-label": s, children: /* @__PURE__ */ r(g, { as: "ul", children: t.Children.map(i, (m, d) => /* @__PURE__ */ r("li", { children: m }, d)) }) }) });
};
l.defaultProps = {
  label: "pagination"
};
l.propTypes = {
  activePage: e.number.isRequired,
  children: e.node.isRequired,
  label: e.string,
  pageCount: e.number.isRequired
};
export {
  l as Pagination
};
