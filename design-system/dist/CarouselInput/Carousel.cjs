"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),n=require("react"),g=require("@strapi/icons"),w=require("prop-types"),K=require("styled-components"),x=require("../helpers/keyboardKeys.cjs"),_=require("../Tooltip/Tooltip.cjs"),o=require("../Box/Box.cjs"),y=require("../Icon/Icon.cjs"),B=require("../Flex/Flex.cjs"),L=require("../Typography/Typography.cjs"),q=t=>t&&t.__esModule?t:{default:t},e=q(w),l=q(K),D=l.default(o.Box)`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,I=l.default(o.Box)`
  grid-area: slides;
`,b=l.default.button`
  grid-area: ${({area:t})=>t};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:t})=>t.colors.neutral900};
  }
`,s=({actions:t,children:v,label:R,nextLabel:j,onNext:d,onPrevious:u,previousLabel:C,secondaryLabel:a,selectedSlide:T,...A})=>{const c=n.useRef(null),f=n.useRef(null),p=n.Children.toArray(v).map((i,k)=>n.cloneElement(i,{selected:k===T})),m=i=>{switch(i.key){case x.KeyboardKeys.RIGHT:{i.preventDefault(),f.current.focus(),d();break}case x.KeyboardKeys.LEFT:{i.preventDefault(),c.current.focus(),u();break}}},h=p.length>1;return r.jsx(o.Box,{...A,onKeyDown:m,children:r.jsxs(o.Box,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[r.jsxs(D,{as:"section","aria-roledescription":"carousel","aria-label":R,position:"relative",children:[h&&r.jsx(b,{onClick:u,area:"startAction",ref:c,"aria-label":C,type:"button",children:r.jsx(y.Icon,{as:g.ChevronLeft,"aria-hidden":!0,width:"6px",height:"10px",color:"neutral600"})}),h&&r.jsx(b,{onClick:d,area:"endAction",ref:f,"aria-label":j,type:"button",children:r.jsx(y.Icon,{as:g.ChevronRight,"aria-hidden":!0,width:"6px",height:"10px",color:"neutral600"})}),r.jsx(I,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:p}),t]}),a&&r.jsx(o.Box,{paddingTop:2,paddingLeft:4,paddingRight:4,children:r.jsx(_.Tooltip,{label:a,children:r.jsx(B.Flex,{justifyContent:"center",children:r.jsx(L.Typography,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:a})})})})]})})};s.defaultProps={actions:void 0,error:void 0,hint:void 0,required:!1,secondaryLabel:void 0};s.propTypes={actions:e.default.node,children:e.default.node.isRequired,error:e.default.string,hint:e.default.oneOfType([e.default.string,e.default.node,e.default.arrayOf(e.default.node)]),label:e.default.string.isRequired,nextLabel:e.default.string.isRequired,onNext:e.default.func.isRequired,onPrevious:e.default.func.isRequired,previousLabel:e.default.string.isRequired,required:e.default.bool,secondaryLabel:e.default.string,selectedSlide:e.default.number.isRequired};exports.Carousel=s;
