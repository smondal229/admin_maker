"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react/jsx-runtime"),$=require("react"),b=require("prop-types"),y=require("styled-components"),g=require("../themes/utils.cjs"),x=require("../Field/FieldContext.cjs"),l=e=>e&&e.__esModule?e:{default:e},T=l(b),d=l(y),q=d.default.div`
  border: 1px solid ${({theme:e,hasError:r})=>r?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};

  padding-left: ${({theme:e,hasLeftAction:r})=>r?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:r})=>r?0:e.spaces[4]};
  padding-top: ${({theme:e})=>`${e.spaces[3]}`};
  padding-bottom: ${({theme:e})=>`${e.spaces[3]}`};

  background: ${({theme:e,disabled:r})=>r?e.colors.neutral150:e.colors.neutral0};
  ${g.inputFocusStyle()}
`,h=d.default.textarea`
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: ${14/16}rem;
  border: none;
  color: ${({theme:e,disabled:r})=>r?e.colors.neutral600:e.colors.neutral800};
  resize: none;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`,o=$.forwardRef(({disabled:e,...r},u)=>{const{id:t,error:n,hint:c,name:p,required:f}=x.useField();let a;n?a=`${t}-error`:c&&(a=`${t}-hint`);const s=!!n;return i.jsx(q,{hasError:s,disabled:e,children:i.jsx(h,{id:t,name:p,ref:u,"aria-describedby":a,"aria-invalid":s,disabled:e,hasError:s,"aria-required":f,...r})})});o.displayName="TextareaInput";o.defaultProps={disabled:!1};o.propTypes={disabled:T.default.bool};exports.TextareaInput=o;
