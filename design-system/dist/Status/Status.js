import { jsx as i, jsxs as h } from "react/jsx-runtime";
import "react";
import t from "prop-types";
import p from "styled-components";
import { Box as f } from "../Box/Box.js";
import { Typography as $ } from "../Typography/Typography.js";
import { Flex as b } from "../Flex/Flex.js";
const y = p.div`
  margin-right: ${({ theme: o }) => o.spaces[3]};
  width: ${6 / 16}rem;
  height: ${6 / 16}rem;
  border-radius: 50%;
  background: ${({ theme: o, backgroundColor: r }) => o.colors[r]};
`, x = p(f)`
  ${$} {
    color: ${({ theme: o, textColor: r }) => o.colors[r]};
  }
`, a = ({ variant: o, showBullet: r, size: e, children: s, ...l }) => {
  const c = `${o}100`, m = `${o}200`, u = `${o}600`, g = `${o}600`, n = e === "S" ? 2 : 5, d = e === "S" ? 1 : 4;
  return /* @__PURE__ */ i(
    x,
    {
      borderColor: m,
      textColor: g,
      background: c,
      hasRadius: !0,
      paddingTop: d,
      paddingBottom: d,
      paddingLeft: n,
      paddingRight: n,
      ...l,
      children: r ? /* @__PURE__ */ h(b, { children: [
        /* @__PURE__ */ i(y, { backgroundColor: u }),
        s
      ] }) : s
    }
  );
};
a.defaultProps = {
  showBullet: !0,
  size: "M",
  variant: "primary"
};
a.propTypes = {
  children: t.node.isRequired,
  /**
   * If `false`, the preceeding bullet of the status won't be displayed.
   * This prop and the bullet will be removed in the next major version.
   */
  showBullet: t.bool,
  // TODO V2: remove prop and bullet
  size: t.oneOf(["S", "M"]),
  /**
   * Color variation
   */
  variant: t.oneOf(["alternative", "danger", "neutral", "primary", "secondary", "success", "warning"])
};
export {
  a as Status
};
