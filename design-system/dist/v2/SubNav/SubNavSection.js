import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { useState as h, Children as f } from "react";
import o from "prop-types";
import b from "styled-components";
import { SubNavSectionLabel as x } from "./SubNavSectionLabel.js";
import { useId as C } from "../../hooks/useId.js";
import { Box as d } from "../../Box/Box.js";
import { Flex as S } from "../../Flex/Flex.js";
import { Badge as v } from "../../Badge/Badge.js";
const k = b(d)`
  svg {
    height: ${4 / 16}rem;
    path {
      fill: ${({ theme: i }) => i.colors.neutral500};
    }
  }
`, s = ({ collapsable: i, label: p, badgeLabel: t, children: c, id: m }) => {
  const [n, u] = h(!0), l = C(m);
  return /* @__PURE__ */ a(S, { direction: "column", alignItems: "stretch", gap: 1, children: [
    /* @__PURE__ */ r(k, { paddingLeft: 6, paddingTop: 2, paddingBottom: 2, paddingRight: 4, children: /* @__PURE__ */ a(d, { position: "relative", paddingRight: t ? 6 : 0, children: [
      /* @__PURE__ */ r(
        x,
        {
          onClick: () => {
            u((e) => !e);
          },
          ariaExpanded: n,
          ariaControls: l,
          collapsable: i,
          label: p
        }
      ),
      t && /* @__PURE__ */ r(
        v,
        {
          backgroundColor: "neutral150",
          textColor: "neutral600",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          children: t
        }
      )
    ] }) }),
    (!i || n) && /* @__PURE__ */ r("ol", { id: l, children: f.map(c, (e, g) => /* @__PURE__ */ r("li", { children: e }, g)) })
  ] });
};
s.defaultProps = {
  badgeLabel: null,
  collapsable: !1,
  id: void 0
};
s.propTypes = {
  badgeLabel: o.string,
  children: o.node.isRequired,
  collapsable: o.bool,
  id: o.string,
  label: o.string.isRequired
};
export {
  s as SubNavSection
};
