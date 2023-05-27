"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("react/jsx-runtime"),j=require("react"),a=require("@floating-ui/react-dom"),O=require("styled-components"),f=require("../helpers/strings.cjs"),_=require("../hooks/useId.cjs"),k=require("../hooks/useIntersection.cjs"),d=require("../Box/Box.cjs"),S=require("../Portal/Portal.cjs"),v=e=>e&&e.__esModule?e:{default:e};function q(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const l=q(j),p=v(O),R=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end"],$=p.default(d.Box)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices[0]};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  background: ${({theme:e})=>e.colors.neutral0};
`,b=({source:e,children:r,spacing:t=0,fullWidth:o=!1,placement:n="bottom-start",centered:s=!1,...c})=>{const[g,m]=l.useState(void 0),{x,y:w,reference:u,floating:P,strategy:y}=a.useFloating({strategy:"fixed",placement:s?"bottom":n,middleware:[a.offset({mainAxis:t}),a.shift(),a.flip()],whileElementsMounted:a.autoUpdate});return l.useLayoutEffect(()=>{u(e.current)},[e,u]),l.useLayoutEffect(()=>{o&&m(e.current.offsetWidth)},[o,e]),i.jsx($,{ref:P,style:{left:x,top:w,position:y,width:g||void 0},hasRadius:!0,background:"neutral0",padding:1,...c,children:r})},h=({children:e,intersectionId:r,onReachEnd:t,...o})=>{const n=l.useRef(null),s=_.useId();return k.useIntersection(n,t??(()=>{}),{selectorToWatch:`#${f.stripReactIdOfColon(s)}`,skipWhen:!r||!t}),i.jsxs(I,{ref:n,...o,children:[e,r&&t&&i.jsx(d.Box,{id:f.stripReactIdOfColon(s),width:"100%",height:"1px"})]})},I=p.default(d.Box)`
  // 16 is base base size, 3 is the factor to get closer to 40px and 5 is the number of elements visible in the list
  max-height: ${3*5}rem;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.neutral0};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.neutral150};
    border-radius: ${({theme:e})=>e.borderRadius};
    margin-right: 10px;
  }
`,E=({children:e,source:r,spacing:t,fullWidth:o,placement:n,centered:s,...c})=>i.jsx(S.Portal,{children:i.jsx(b,{source:r,spacing:t,fullWidth:o,placement:n,centered:s,children:i.jsx(h,{...c,children:e})})});exports.Content=b;exports.POPOVER_PLACEMENTS=R;exports.Popover=E;exports.Scrolling=h;
