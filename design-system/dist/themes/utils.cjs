"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("styled-components"),i=t=>({theme:o,size:r})=>o.sizes[t][r],s=(t="&")=>({theme:o,hasError:r})=>e.css`
      outline: none;
      box-shadow: 0;
      transition-property: border-color, box-shadow, fill;
      transition-duration: 0.2s;

      ${t}:focus-within {
        border: 1px solid ${r?o.colors.danger600:o.colors.primary600};
        box-shadow: ${r?o.colors.danger600:o.colors.primary600} 0px 0px 0px 2px;
      }
    `,n=({theme:t})=>e.css`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${t.colors.primary600};
    }
  }
`;exports.buttonFocusStyle=n;exports.getThemeSize=i;exports.inputFocusStyle=s;
