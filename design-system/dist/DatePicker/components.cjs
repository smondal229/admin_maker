"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("styled-components"),n=require("../Field/FieldInput.cjs"),a=require("../Popover/Popover.cjs"),i=require("../Box/Box.cjs"),d=e=>e&&e.__esModule?e:{default:e},r=d(o),s=r.default(a.Popover)`
  max-height: ${3*6}rem;
  overflow: hidden;
`;/**
 * @preserve
 * @deprecated This component will be removed in the next major version
 */const l=r.default.button`
  border: none;
  background: transparent;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  & svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,u=r.default.div`
  ${({bold:e,theme:t})=>e?o.css`
          & ${n.InputWrapper} {
            border: 1px solid ${t.colors.primary600};
          }
        `:""}
`;/**
 * @preserve
 * @deprecated This component will be removed in the next major version
 */const c=r.default(i.Box)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: ${11/16}rem;
    width: ${11/16}rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`;exports.DatePickerButton=l;exports.DatePickerPopover=s;exports.DatePickerWrapper=u;exports.IconBox=c;
