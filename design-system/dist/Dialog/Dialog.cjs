"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime");require("react");const g=require("prop-types"),x=require("styled-components"),y=require("../DismissibleLayer/index.cjs"),h=require("../helpers/setOpacity.cjs"),q=require("../hooks/useId.cjs"),b=require("../hooks/useLockScroll.cjs"),j=require("../FocusTrap/FocusTrap.cjs"),i=require("../Box/Box.cjs"),m=require("../Flex/Flex.cjs"),D=require("../Portal/Portal.cjs"),T=require("../Typography/Typography.cjs"),l=e=>e&&e.__esModule?e:{default:e},o=l(g),s=l(x),P=s.default(i.Box)`
  inset: 0;
  background: ${({theme:e})=>h.setOpacity(e.colors.neutral800,.2)};
`,_=s.default(i.Box)`
  max-width: ${412/16}rem;
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10%;
`,w=s.default(m.Flex)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,t=({onClose:e,title:d,as:u,isOpen:a,id:c,...p})=>{const f=q.useId(c);if(b(a),!a)return null;const n=`${f}-label`;return r.jsx(D.Portal,{children:r.jsx(P,{padding:8,position:"fixed",zIndex:4,children:r.jsx(j.FocusTrap,{children:r.jsx(y.DismissibleLayer,{onEscapeKeyDown:e,onPointerDownOutside:e,children:r.jsxs(_,{"aria-labelledby":n,"aria-modal":!0,background:"neutral0",hasRadius:!0,shadow:"popupShadow",role:"dialog",children:[r.jsx(w,{padding:6,justifyContent:"center",children:r.jsx(T.Typography,{variant:"beta",as:u||"h2",id:n,children:d})}),r.jsx(i.Box,{...p})]})})})})})};t.displayName="Dialog";t.defaultProps={as:"h2",id:void 0};t.propTypes={as:o.default.string,id:o.default.oneOfType([o.default.string,o.default.number]),isOpen:o.default.bool.isRequired,onClose:o.default.func.isRequired,title:o.default.string.isRequired};exports.Dialog=t;
