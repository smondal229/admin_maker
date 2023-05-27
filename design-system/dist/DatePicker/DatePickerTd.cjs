"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("react/jsx-runtime"),u=require("styled-components"),s=require("../RawTable/RawCell.cjs"),l=require("../Typography/Typography.cjs"),c=e=>e&&e.__esModule?e:{default:e},d=c(u),f=d.default.button`
  border: none;
  background: ${({theme:e,$isSelected:r})=>r?e.colors.primary100:e.colors.neutral0};
  height: ${32/16}rem;
  text-align: center;
  width: ${32/16}rem;
  border-radius: ${({theme:e})=>e.borderRadius};

  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px;

  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
  }

  &:hover > ${l.Typography} {
    color: ${({theme:e})=>e.colors.primary600};
  }
`,p=({children:e,outsideMonth:r=!1,onSelectDay:i,isSelected:t=!1,...a})=>{let o="neutral900";return t?o="primary600":r&&(o="neutral600"),n.jsx(s.RawTd,{...a,children:n.jsx(f,{tabIndex:-1,onClick:i,$isSelected:t,type:"button",children:n.jsx(l.Typography,{variant:"pi",textColor:o,fontWeight:t?"bold":void 0,children:e})})})};exports.DatePickerTd=p;
