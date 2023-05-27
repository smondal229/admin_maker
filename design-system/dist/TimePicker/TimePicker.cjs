"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react/jsx-runtime"),$=require("@strapi/icons"),b=require("styled-components"),j=require("../hooks/useId.cjs"),d=require("../Select/SingleSelect.cjs"),q=require("../Flex/Flex.cjs"),I=t=>t&&t.__esModule?t:{default:t},_=I(b),v=({id:t,value:c,step:h=15,onChange:u,...p})=>{const g=j.useId(t),m=24,s=[];let n=0;for(let e=0;e<m;e++)for(n=0;n<60;)s.push(`${e<10?`0${e}`:e}:${n<10?`0${n}`:n}`),n+=h;const f=()=>{const[e,a]=c?.split(":")??[],x=s.reduce((r,o)=>{const[l]=o.split(":");return Math.abs(l-e)<Math.abs(r-e)?l:r},s[0].split(":")[0]),M=s.reduce((r,o)=>{const l=o.split(":")[1];return Math.abs(l-a)<Math.abs(r-a)?l:r},s[0].split(":")[1]);return`${x}:${M}`},S=e=>{u&&u(e.toString())};return i.jsx(d.SingleSelect,{id:g,placeholder:"--:--",value:c?f():void 0,startIcon:i.jsx(y,{as:"span",children:i.jsx($.Clock,{})}),onChange:S,...p,children:s.map(e=>i.jsx(d.SingleSelectOption,{value:e,children:e},e))})},y=_.default(q.Flex)`
  & > svg {
    height: 1rem;
    width: 1rem;
  }

  & > svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`;exports.TimePicker=v;
