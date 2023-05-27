"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),a=require("react"),c=require("prop-types"),d=require("styled-components"),f=require("../Typography/utils.cjs"),g=require("../Box/Box.cjs"),p=require("../Tooltip/Tooltip.cjs"),i=e=>e&&e.__esModule?e:{default:e},s=i(c),y=i(d),o=y.default(g.Box)`
  height: 100%;
  ${f.ellipsisStyle({ellipsis:!0})}
`,r=e=>{const[l,u]=a.useState(!1),n=()=>{u(!0)};return l?t.jsx(p.Tooltip,{description:e.alt??"",children:t.jsx(o,{as:"img",...e})}):t.jsx(o,{as:"img",...e,onError:n})};r.defaultProps={src:void 0,alt:void 0};r.propTypes={alt:s.default.string,src:s.default.string};exports.CarouselImage=r;
