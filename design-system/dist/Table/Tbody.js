import { jsx as r } from "react/jsx-runtime";
import "react";
import t from "styled-components";
import { RawTbody as m } from "../RawTable/RawTbody.js";
const p = t(m)`
  & tr:last-of-type {
    border-bottom: none;
  }
`, s = (o) => /* @__PURE__ */ r(p, { ...o });
export {
  s as Tbody
};
