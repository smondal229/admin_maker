import { jsx as o } from "react/jsx-runtime";
import { useState as p } from "react";
import t from "prop-types";
import a from "styled-components";
import { ellipsisStyle as n } from "../Typography/utils.js";
import { Box as f } from "../Box/Box.js";
import { Tooltip as c } from "../Tooltip/Tooltip.js";
const e = a(f)`
  height: 100%;
  ${n({ ellipsis: !0 })}
`, i = (r) => {
  const [s, m] = p(!1), l = () => {
    m(!0);
  };
  return s ? /* @__PURE__ */ o(c, { description: r.alt ?? "", children: /* @__PURE__ */ o(e, { as: "img", ...r }) }) : /* @__PURE__ */ o(e, { as: "img", ...r, onError: l });
};
i.defaultProps = {
  src: void 0,
  alt: void 0
};
i.propTypes = {
  alt: t.string,
  src: t.string
};
export {
  i as CarouselImage
};
