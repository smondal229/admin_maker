"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("react/jsx-runtime"),a=require("react"),u=require("@strapi/icons"),S=require("prop-types"),m=require("styled-components"),$=require("../themes/sizes.cjs"),v=require("../themes/utils.cjs"),i=require("../Field/FieldInput.cjs"),c=require("../Flex/Flex.cjs"),_=require("../Field/Field.cjs"),z=require("../VisuallyHidden/VisuallyHidden.cjs"),C=require("../Field/FieldLabel.cjs"),I=require("../Field/FieldAction.cjs"),d=e=>e&&e.__esModule?e:{default:e},s=d(S),l=d(m),w=l.default(c.Flex)`
  font-size: 0.5rem;
  svg path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,p=l.default(c.Flex)`
  font-size: 0.8rem;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,W=l.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${p} {
      svg path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${i.InputWrapper} {
    border: 1px solid transparent;
  }

  ${v.inputFocusStyle(i.InputWrapper)}
`,t=a.forwardRef(({name:e,size:f,children:h,value:n,onClear:q,clearLabel:x,...b},j)=>{const o=a.useRef(null),y=n.length>0,F=g=>{q(g),o.current.focus()},R=j||o;return r.jsx(W,{children:r.jsxs(_.Field,{name:e,children:[r.jsx(z.VisuallyHidden,{children:r.jsx(C.FieldLabel,{children:h})}),r.jsx(i.FieldInput,{ref:R,value:n,startAction:r.jsx(p,{children:r.jsx(u.Search,{"aria-hidden":!0})}),size:f,endAction:y?r.jsx(I.FieldAction,{label:x,onClick:F,children:r.jsx(w,{children:r.jsx(u.Cross,{})})}):void 0,...b})]})})});t.displayName="Searchbar";t.defaultProps={value:"",size:"M"};t.propTypes={children:s.default.node.isRequired,clearLabel:s.default.string.isRequired,name:s.default.string.isRequired,onClear:s.default.func.isRequired,size:s.default.oneOf(Object.keys($.sizes.input)),value:s.default.string};exports.Searchbar=t;
