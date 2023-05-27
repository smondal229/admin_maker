"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),g=require("react"),q=require("prop-types"),m=require("styled-components"),T=require("./TextareaInput.cjs"),v=require("../hooks/useId.cjs"),y=require("../Field/Field.cjs"),d=require("../Flex/Flex.cjs"),F=require("../Field/FieldLabel.cjs"),b=require("../Field/FieldHint.cjs"),j=require("../Field/FieldError.cjs"),l=t=>t&&t.__esModule?t:{default:t},_=l(g),e=l(q),I=l(m),O=I.default.div`
  & textarea {
    // TODO: remove when we'll have fonts in the theme
    height: ${80/16}rem;
    line-height: ${20/16}rem;
  }

  & textarea::placeholder {
    font-weight: 400;
    font-size: ${14/16}rem;
    line-height: 1.43;
    color: ${({theme:t})=>t.colors.neutral500};
    opacity: 1;
  }
`,i=_.default.forwardRef(({name:t,hint:n,error:o,label:a,children:s,labelAction:u,id:c,required:f,...h},x)=>{const p=v.useId(c);return r.jsx(O,{children:r.jsx(y.Field,{name:t,hint:n,error:o,id:p,required:f,children:r.jsxs(d.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[a&&r.jsx(d.Flex,{children:r.jsx(F.FieldLabel,{action:u,children:a})}),r.jsx(T.TextareaInput,{ref:x,as:"textarea",value:s,...h}),r.jsx(b.FieldHint,{}),r.jsx(j.FieldError,{})]})})})});i.displayName="Textarea";i.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,children:"",required:!1};i.propTypes={"aria-label":e.default.string,children:e.default.string,error:e.default.string,hint:e.default.oneOfType([e.default.string,e.default.node,e.default.arrayOf(e.default.node)]),id:e.default.string,label:e.default.string,labelAction:e.default.element,name:e.default.string.isRequired,required:e.default.bool};exports.Textarea=i;
