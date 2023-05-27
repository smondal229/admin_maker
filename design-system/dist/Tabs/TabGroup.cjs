"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const T=require("react/jsx-runtime"),v=require("react"),x=require("prop-types"),_=require("./TabsContext.cjs"),g=require("../hooks/useId.cjs"),I=e=>e&&e.__esModule?e:{default:e};function j(e){if(e&&e.__esModule)return e;const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const t in e)if(t!=="default"){const d=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,d.get?d:{enumerable:!0,get:()=>e[t]})}}return r.default=e,Object.freeze(r)}const a=j(v),n=I(x),o=a.forwardRef(({id:e,initialSelectedTabIndex:r,label:t,onTabChange:d,variant:u,...l},m)=>{const c=g.useId(e),f=a.Children.toArray(l.children).find(i=>i.type.displayName==="Tabs");let s=r||0;f&&r===void 0&&(s=f.props.children.findIndex(i=>!i.props.disabled));const[p,b]=a.useState(s===-1?0:s);a.useImperativeHandle(m,()=>({_handlers:{setSelectedTabIndex:b}}));const y=a.useMemo(()=>({id:c,selectedTabIndex:p,selectTabIndex:b,label:t,variant:u,onTabChange:d}),[t,d,p,c,u]);return T.jsx(_.TabsContext.Provider,{value:y,children:T.jsx("div",{...l})})});o.displayName="TabGroup";o.defaultProps={id:void 0,initialSelectedTabIndex:void 0,onTabChange(){},variant:void 0};o.propTypes={children:n.default.node.isRequired,id:n.default.string,initialSelectedTabIndex:n.default.number,label:n.default.string.isRequired,onTabChange:n.default.func,variant:n.default.oneOf(["simple"])};exports.TabGroup=o;