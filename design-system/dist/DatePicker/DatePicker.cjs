"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("react/jsx-runtime"),d=require("react"),p=require("@strapi/icons"),R=require("styled-components"),P=require("./components.cjs"),S=require("./DatePickerCalendar.cjs"),_=require("./utils/formatDate.cjs"),v=require("../helpers/getDefaultLocale.cjs"),A=require("../TextInput/TextInput.cjs"),W=require("../Field/FieldAction.cjs"),$=e=>e&&e.__esModule?e:{default:e},h=$(R),I=({ariaLabel:e,onClear:a,clearLabel:D="Clear",initialDate:m,locale:x,maxDate:q,minDate:C,onChange:c,selectedDate:o,disabled:n=!1,...g})=>{const[s,i]=d.useState(!1),r=d.useRef(null),u=x||v.getDefaultLocale(),f=o?_.formatDate(o,u):"",j=()=>{n||i(l=>!l)},y=()=>{n||a&&(a(),r.current.inputWrapperRef.current.focus())},b=l=>{c&&c(l),i(!1)},k=()=>{i(!1)};return t.jsxs(P.DatePickerWrapper,{bold:s,children:[t.jsx(A.TextInput,{ref:r,onClick:j,onChange:()=>{},value:f,startAction:t.jsx(E,{"aria-hidden":!0}),endAction:a&&f?t.jsx(W.FieldAction,{label:D,onClick:y,"aria-disabled":n||void 0,children:t.jsx(T,{})}):void 0,"aria-autocomplete":"none","aria-label":e,disabled:n,type:"text",...g}),r.current&&r.current.inputWrapperRef&&s&&t.jsx(S.DatePickerCalendar,{selectedDate:o,initialDate:m,onChange:b,onEscape:k,locale:u,popoverSource:r.current.inputWrapperRef,minDate:C,maxDate:q})]})},T=h.default(p.Cross)`
  height: ${11/16}rem;
  width: ${11/16}rem;

  path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`,E=h.default(p.Calendar)`
  & > path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;exports.DatePicker=I;
