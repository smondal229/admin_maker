"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react/jsx-runtime"),t=require("react"),F=require("../hooks/useId.cjs"),I=require("../Field/FieldInput.cjs"),q=require("../Field/Field.cjs"),j=require("../Flex/Flex.cjs"),h=require("../Field/FieldLabel.cjs"),m=require("../Field/FieldHint.cjs"),f=require("../Field/FieldError.cjs"),s=t.forwardRef(({name:l,hint:d,error:o,label:r,labelAction:u,id:c,required:a,...i},p)=>{const x=F.useId(c),n=t.useRef(null);if(!r&&!i["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return t.useImperativeHandle(p,()=>({inputWrapperRef:n})),e.jsx("div",{ref:n,children:e.jsx(q.Field,{name:l,hint:d,error:o,id:x,required:a,children:e.jsxs(j.Flex,{direction:"column",alignItems:"stretch",gap:1,children:[r&&e.jsx(h.FieldLabel,{action:u,children:r}),e.jsx(I.FieldInput,{...i}),e.jsx(m.FieldHint,{}),e.jsx(f.FieldError,{})]})})})});s.displayName="TextInput";exports.TextInput=s;
