"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),u=require("react"),l=require("prop-types"),d=require("../Box/Box.cjs"),a=require("../Flex/Flex.cjs"),p=e=>e&&e.__esModule?e:{default:e},x=p(l),n=({children:e,spacing:o=2,horizontal:t=!1,...s})=>r.jsx(d.Box,{paddingTop:2,paddingBottom:4,children:r.jsx(a.Flex,{as:"ol",gap:o,direction:t?"row":"column",alignItems:t?"center":"stretch",...s,children:u.Children.map(e,(i,c)=>r.jsx("li",{children:i},c))})});n.propTypes={children:x.default.node.isRequired};exports.SubNavSections=n;
