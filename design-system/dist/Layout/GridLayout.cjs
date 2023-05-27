"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const d=require("prop-types"),o=require("styled-components"),t=e=>e&&e.__esModule?e:{default:e},s=t(d),i=t(o),r=i.default.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${({theme:e})=>e.spaces[4]};
`;r.propTypes={children:s.default.node.isRequired};exports.GridLayout=r;
