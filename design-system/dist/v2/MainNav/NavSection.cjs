"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react/jsx-runtime"),o=require("react"),x=require("prop-types"),g=require("./MainNavContext.cjs"),i=require("../../Flex/Flex.cjs"),l=require("../../Box/Box.cjs"),h=require("../../Divider/Divider.cjs"),m=require("../../VisuallyHidden/VisuallyHidden.cjs"),j=require("../../Typography/Typography.cjs"),q=n=>n&&n.__esModule?n:{default:n},u=q(x),p=({label:n,children:d,horizontal:r=!1,spacing:a=2,...c})=>g.useMainNav()?e.jsxs(i.Flex,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsxs(l.Box,{paddingTop:1,paddingBottom:1,background:"neutral0",hasRadius:!0,as:"span",children:[e.jsx(h.Divider,{}),e.jsx(m.VisuallyHidden,{children:e.jsx("span",{children:n})})]}),e.jsx(i.Flex,{as:"ul",gap:a,direction:r?"row":"column",alignItems:r?"center":"stretch",...c,children:o.Children.map(d,(t,s)=>e.jsx("li",{children:t},s))})]}):e.jsxs(i.Flex,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsx(l.Box,{paddingTop:1,paddingBottom:1,background:"neutral0",paddingRight:3,paddingLeft:3,hasRadius:!0,as:"span",children:e.jsx(j.Typography,{variant:"sigma",textColor:"neutral600",children:n})}),e.jsx(i.Flex,{as:"ul",gap:a,direction:r?"row":"column",alignItems:r?"center":"stretch",...c,children:o.Children.map(d,(t,s)=>e.jsx("li",{children:t},s))})]});p.propTypes={children:u.default.node.isRequired,label:u.default.string.isRequired};exports.NavSection=p;
