(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[994],{42814:function(dt,De){"use strict";De.Z=()=>null},82865:function(dt,De,d){"use strict";d.r(De),d.d(De,{App:function(){return Ws},default:function(){return bm}});var e=d(32735),ve=d(74758),te=d(53038),h=d(24989),Ce=d(27649),fe=d(82055),we=d(96709),H=d(67879),rt=d(98978),Oe=d.n(rt),Ie=d(83983),Ee=d(47510),Fe=d(55433),Le=(0,e.createContext)(),Ke=d(47533),he=d(60216),n=d.n(he),Se=(0,e.createContext)(),Vt=d(73386),de=d(56327),y=d(95952),_=d(15062),$e=d(46339),Ye=d(4460);const Mt=()=>({type:Ye.c}),Tt=(t,r)=>({type:Ye.O,layout:t,query:r});var mt=d(70031),ot=d(8266),xe=d.n(ot),Ze=d(17e3),Te=d(15335),ue=d(5803),F=d(87933),S=d(72850),je=d(68625),Ue=d(2669),Xe=d(66694),It=()=>(0,e.useContext)(Xe.ux),Ut=t=>{const{getAdminInjectedComponents:r}=It(),[o,s,a]=t.split(".");return r(o,s,a)};const Wr=({area:t,...r})=>Ut(t).map(s=>e.createElement(s.Component,{key:s.name,...r}));Wr.propTypes={area:n().string.isRequired};var Ht=Wr,zs=d(33795),P=d.n(zs),pt=d(3685);function Vs(t,r){return o=>{const s=r(o.name);return e.createElement(t,{...o,...s})}}var Us=Vs;function Hs(t){const{addComponentToDynamicZone:r,createActionAllowedFields:o,isCreatingEntry:s,formErrors:a,modifiedData:l,moveComponentField:i,removeComponentFromDynamicZone:c,readActionAllowedFields:p,updateActionAllowedFields:u}=(0,h.Wq)(),m=(0,e.useMemo)(()=>P()(l,[t],[]).map(E=>({componentUid:E.__component,id:E.id??E.__temp_key__})),[l,t]),f=(0,e.useMemo)(()=>(s?o:u).includes(t),[t,s,o,u]),g=(0,e.useMemo)(()=>(s?[]:p).includes(t),[t,s,p]);return{addComponentToDynamicZone:r,formErrors:a,isCreatingEntry:s,isFieldAllowed:f,isFieldReadable:g,moveComponentField:i,removeComponentFromDynamicZone:c,dynamicDisplayedComponents:m}}var Qs=Hs,N=d(8471),xt=d(51968),ye=d(50563),mn=d(83828),pn=d(61762),gn=d(89966),He=d(4038),Je=d(47081),Gs=d(61868),Ks=d.n(Gs);function Ys(t,r){return o=>{const s=r(o);return e.createElement(t,{...o,...s})}}var Xs=Ys,Js=d(88708),Ot=d.n(Js);function _s({isFromDynamicZone:t,name:r}){const{addNonRepeatableComponentToField:o,createActionAllowedFields:s,isCreatingEntry:a,modifiedData:l,removeComponentFromField:i,readActionAllowedFields:c,updateActionAllowedFields:p,formErrors:u}=(0,h.Wq)(),{contentType:m}=(0,de.PL)(),f=(0,e.useMemo)(()=>{const T=P()(m,["attributes"],{});return Object.keys(T).filter(I=>P()(T,[I,"type"],"")==="dynamiczone")},[m]),g=(0,e.useMemo)(()=>a?s:p,[a,s,p]),E=P()(l,r,null),b=(0,e.useMemo)(()=>(0,y.Ts)(r),[r]),v=(0,e.useMemo)(()=>t&&a||g.filter(I=>I===b[0]).length>0?!0:g.map(I=>I.split(".")).filter(I=>I.length<b.length?!1:Ot()(I,b.length).join(".")===b.join(".")).length>0,[t,a,g,b]),M=(0,e.useMemo)(()=>t||f.includes(b[0])?!0:(a?[]:c).map(I=>I.split(".")).filter(I=>I.length<b.length?!1:Ot()(I,b.length).join(".")===b.join(".")).length>0,[t,f,b,a,c]),D=(0,e.useMemo)(()=>a||v?!1:M,[v,M,a]);return{addNonRepeatableComponentToField:o,formErrors:u,hasChildrenAllowedFields:v,hasChildrenReadableFields:M,isCreatingEntry:a,isReadOnly:D,removeComponentFromField:i,componentValue:E}}var ea=_s,Q=d(49372);const ta=(0,N.ZP)(S.x)`
  svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,fn=({intlLabel:t,id:r,labelAction:o,name:s,numberOfEntries:a,showNumberOfEntries:l,required:i})=>{const{formatMessage:c}=(0,H.Z)(),p=t?.id?c(t):s;return e.createElement(S.x,{paddingBottom:1},e.createElement(F.k,null,e.createElement(Q.Z,{textColor:"neutral800",htmlFor:r||s,variant:"pi",fontWeight:"bold",as:"label"},p,l&&e.createElement(e.Fragment,null,"\xA0(",a,")"),i&&e.createElement(Q.Z,{textColor:"danger600"},"*")),o&&e.createElement(ta,{paddingLeft:1},o)))};fn.defaultProps={id:void 0,labelAction:void 0,numberOfEntries:0,required:!1,showNumberOfEntries:!1},fn.propTypes={id:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,numberOfEntries:n().number,required:n().bool,showNumberOfEntries:n().bool};var na=fn,zr=d(86308);const ra=N.ZP.span`
  > svg {
    width: ${(0,h.Q1)(24)};
    height: ${(0,h.Q1)(24)};
    > circle {
      fill: ${({theme:t})=>t.colors.primary200};
    }
    > path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,hn=({error:t,isReadOnly:r,onClick:o})=>{const{formatMessage:s}=(0,H.Z)();return e.createElement(e.Fragment,null,e.createElement(S.x,{as:"button",background:"neutral100",borderColor:t?"danger600":"neutral200",disabled:r,hasRadius:!0,onClick:o,paddingTop:9,paddingBottom:9,type:"button"},e.createElement(F.k,{direction:"column",gap:2},e.createElement(F.k,{justifyContent:"center",style:{cursor:r?"not-allowed":"inherit"}},e.createElement(ra,null,e.createElement(zr.Z,null))),e.createElement(F.k,{justifyContent:"center"},e.createElement(Q.Z,{textColor:"primary600",variant:"pi",fontWeight:"bold"},s({id:(0,y.OB)("components.empty-repeatable"),defaultMessage:"No entry yet. Click on the button below to add one."}))))),t?.id&&e.createElement(Q.Z,{textColor:"danger600",variant:"pi"},s(t,{...t.values})))};hn.defaultProps={error:void 0,isReadOnly:!1},hn.propTypes={error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),isReadOnly:n().bool,onClick:n().func.isRequired};var Vr=hn,oa=d(9086),sa=d.n(oa),aa=d(87702),yn=d.n(aa),xm=d(27217),ia=d(88591),la=d.n(ia),bn=d(59845),ca=d(20871),da=d.n(ca),ua=d(48375),Ur=d.n(ua),ma=d(31089),pa=d.n(ma),ga=d(16043),fa=d.n(ga),ha=d(5109),ya=d.n(ha),ba=d(47955),Ea=d.n(ba),va=d(95706),Ca=d.n(va),Ra=d(6658),Ma=d.n(Ra),Ta=d(36407),Da=d.n(Ta);(async()=>{await d.e(7347).then(d.bind(d,74194))})();const gt=new(la())({html:!0,xhtmlOut:!1,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight(t,r){if(r&&r!=="auto"&&(0,bn.getLanguage)(r))return'<pre class="hljs language-'+gt.utils.escapeHtml(r.toLowerCase())+'"><code>'+(0,bn.highlight)(r,t,!0).value+"</code></pre>";if(r==="auto"){const o=(0,bn.highlightAuto)(t);return'<pre class="hljs language-'+gt.utils.escapeHtml(o.language)+'"><code>'+o.value+"</code></pre>"}return'<pre class="hljs"><code>'+gt.utils.escapeHtml(t)+"</code></pre>"}}).use(da()).use(Ur(),"warning").use(Ur(),"tip").use(pa()).use(fa()).use(ya()).use(Ea()).use(Ca()).use(Ma()).use(Da());gt.renderer.rules.footnote_ref=(t,r,o,s,a)=>'<sup class="footnote-ref"><span>'+a.rules.footnote_caption(t,r,o,s,a)+"</span></sup>",gt.renderer.rules.footnote_anchor=()=>' <span class="footnote-backref">\u21A9\uFE0E</span>';var Ia=gt,ka=d(13993),Hr=d.n(ka);const xa={...Hr().defaults,allowedTags:!1,allowedAttributes:{"*":["href","align","alt","center","width","height","type","controls","target"],img:["src","alt"],source:["src","type"]}};var Oa=t=>Hr()(t,xa),Pa=N.ZP.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({theme:t})=>`${t.spaces[3]} ${t.spaces[4]}`};
  font-size: ${14/16}rem;
  background-color: ${({theme:t})=>t.colors.neutral0};
  color: ${({theme:t})=>t.colors.neutral800};
  line-height: ${({theme:t})=>t.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({theme:t})=>t.spaces[2]};
    margin-block-end: ${({theme:t})=>t.spaces[2]};
  }

  p {
    margin-bottom: ${({theme:t})=>t.spaces[2]};
  }

  h1 {
    font-size: ${36/16}rem;
    font-weight: 600;
  }

  h2 {
    font-size: ${30/16}rem;
    font-weight: 500;
  }

  h3 {
    font-size: ${24/16}rem;
    font-weight: 500;
  }

  h4 {
    font-size: ${20/16}rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({theme:t})=>t.spaces[8]};
    margin-bottom: ${({theme:t})=>t.spaces[7]};
    font-size: ${14/16}rem;
    font-weight: 400;
    border-left: 4px solid ${({theme:t})=>t.colors.neutral150};
    font-style: italic;
    padding: ${({theme:t})=>t.spaces[2]} ${({theme:t})=>t.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({theme:t})=>t.colors.neutral150};

      th {
        padding: ${({theme:t})=>t.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({theme:t})=>t.colors.neutral200};
    }
    th,
    td {
      padding: ${({theme:t})=>t.spaces[4]};
      border: 1px solid ${({theme:t})=>t.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: ${14/16}rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({theme:t})=>t.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({theme:t})=>t.spaces[4]};
    margin-block-end: ${({theme:t})=>t.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:t})=>t.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({theme:t})=>t.spaces[4]};
    margin-block-end: ${({theme:t})=>t.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:t})=>t.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`;const En=({data:t})=>{const r=(0,e.useMemo)(()=>Oa(Ia.render(t.replaceAll("\\n",`
`)||"")),[t]);return e.createElement(Pa,null,e.createElement("div",{dangerouslySetInnerHTML:{__html:r}}))};En.defaultProps={data:""},En.propTypes={data:n().string};var Qr=(0,e.memo)(En);const wa=N.ZP.div`
  cursor: ${({disabled:t})=>t?"not-allowed !important":"auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({theme:t})=>t.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: ${14/16}rem;
    height: ${({isExpandMode:t})=>t?"100%":"290px"};
    color: ${({theme:t})=>t.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({theme:t})=>`${t.spaces[3]} ${t.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({theme:t})=>`${t.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({theme:t})=>`${t.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({theme:t})=>`${t.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({theme:t})=>t.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({theme:t})=>t.colors.neutral800} !important;
  }
`;var vn=d(69783);const Pe=(0,N.ZP)(ye.h)`
  padding: ${({theme:t})=>t.spaces[2]};
  /* Trick to prevent the outline from overflowing because of the general outline-offset */
  outline-offset: -2px !important;

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,Fa=(0,N.ZP)(Pe)`
  svg {
    width: ${8/16}rem;
    height: ${8/16}rem;
  }
`,Gr=(0,N.ZP)(ye.o)`
  margin-left: ${({theme:t})=>t.spaces[4]};
`,Kr=(0,N.ZP)(ye.h)`
  margin: ${({theme:t})=>`0 ${t.spaces[2]}`};
  padding: ${({theme:t})=>t.spaces[2]};

  svg {
    width: ${18/16}rem;
    height: ${18/16}rem;
  }
`,La=(0,N.ZP)(ye.o)`
  margin-right: ${({theme:t})=>`${t.spaces[2]}`};
`,Sa=N.ZP.div`
  position: relative;
  height: calc(100% - 48px);
`,Aa=(0,N.ZP)(vn.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:t})=>`${t.spaces[2]}`};
    path {
      fill: ${({theme:t})=>t.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`;var Qt=/^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/,$a=/^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/,Za=/[*+-]\s/;function Ba(t){if(t.getOption("disableInput"))return yn().Pass;for(var r=t.listSelections(),o=[],s=0;s<r.length;s++){var a=r[s].head,l=t.getStateAfter(a.line),i=l.list!==!1,c=l.quote!==0,p=t.getLine(a.line),u=Qt.exec(p),m=/^\s*$/.test(p.slice(0,a.ch));if(!r[s].empty()||!i&&!c||!u||m){t.execCommand("newlineAndIndent");return}if($a.test(p)){var f=c&&/>\s*$/.test(p),g=!/>\s*$/.test(p);(f||g)&&t.replaceRange("",{line:a.line,ch:0},{line:a.line,ch:a.ch+1}),o[s]=`
`}else{var E=u[1],b=u[5],v=!(Za.test(u[2])||u[2].indexOf(">")>=0),M=v?parseInt(u[3],10)+1+u[4]:u[2].replace("x"," ");o[s]=`
`+E+M+b,v&&qa(t,a)}}t.replaceSelections(o)}function qa(t,r){var o=r.line,s=0,a=0,l=Qt.exec(t.getLine(o)),i=l[1];do{s+=1;var c=o+s,p=t.getLine(c),u=Qt.exec(p);if(u){var m=u[1],f=parseInt(l[3],10)+s-a,g=parseInt(u[3],10),E=g;if(i===m&&!isNaN(g))f===g&&(E=g+1),f>g&&(E=f+1),t.replaceRange(p.replace(Qt,m+E+u[4]+u[5]),{line:c,ch:0},{line:c,ch:p.length});else{if(i.length>m.length||i.length<m.length&&s===1)return;a+=1}}}while(u)}var Na=Ba;const Cn=({disabled:t,editorRef:r,error:o,isPreviewMode:s,isExpandMode:a,name:l,onChange:i,placeholder:c,textareaRef:p,value:u})=>{const m=(0,e.useRef)(i);return(0,e.useEffect)(()=>{r.current=yn().fromTextArea(p.current,{lineWrapping:!0,extraKeys:{Enter:"newlineAndIndentContinueMarkdownList",Tab:!1,"Shift-Tab":!1},readOnly:!1,smartIndent:!1,placeholder:c,spellcheck:!0,inputStyle:"contenteditable"}),yn().commands.newlineAndIndentContinueMarkdownList=Na,r.current.on("change",f=>{m.current({target:{name:l,value:f.getValue(),type:"wysiwyg"}})})},[r,p,l,c]),(0,e.useEffect)(()=>{u&&!r.current.hasFocus()&&r.current.setValue(u)},[r,u]),(0,e.useEffect)(()=>{s||t?r.current.setOption("readOnly","nocursor"):r.current.setOption("readOnly",!1)},[t,s,r]),(0,e.useEffect)(()=>{o?r.current.setOption("screenReaderLabel",o):r.current.setOption("screenReaderLabel","Editor")},[r,o]),e.createElement(Sa,null,e.createElement(wa,{isExpandMode:a,disabled:t||s},e.createElement("textarea",{ref:p})),s&&e.createElement(Qr,{data:u}))};Cn.defaultProps={disabled:!1,error:void 0,isPreviewMode:!1,isExpandMode:!1,placeholder:"",value:""},Cn.propTypes={disabled:n().bool,editorRef:n().shape({current:n().any}).isRequired,error:n().string,isPreviewMode:n().bool,isExpandMode:n().bool,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().string,textareaRef:n().shape({current:n().any}).isRequired,value:n().string};var ja=Cn,We=d(68465),be=d(84967),me=d(41415),Wa=d(54015),Yr=d(67563),Xr=d(73906),Jr=d(49844),_r=d(99283),eo=d(49825),za=d(83139),Va=d(35635),Ua=d(20063),Ha=d(80601),Qa=d(11417),Ga=d(43231),Ka=d(65663);const Rn=({disabled:t,editorRef:r,isExpandMode:o,isPreviewMode:s,onActionClick:a,onToggleMediaLib:l,onTogglePreviewMode:i})=>{const[c,p]=(0,e.useState)(!1),{formatMessage:u}=(0,H.Z)(),m=u({id:"components.Wysiwyg.selectOptions.title",defaultMessage:"Add a title"}),f=(0,e.useRef)(),g=()=>{p(E=>!E)};return t||s?e.createElement(F.k,{padding:2,background:"neutral100",justifyContent:"space-between"},e.createElement(to,null,e.createElement(We.P,{disabled:!0,placeholder:m,size:"S",label:m},e.createElement(be.W,{value:"h1"},"h1"),e.createElement(be.W,{value:"h2"},"h2"),e.createElement(be.W,{value:"h3"},"h3"),e.createElement(be.W,{value:"h4"},"h4"),e.createElement(be.W,{value:"h5"},"h5"),e.createElement(be.W,{value:"h6"},"h6")),e.createElement(Gr,null,e.createElement(Pe,{disabled:!0,id:"Bold",label:"Bold",name:"Bold",icon:e.createElement(Xr.Z,null)}),e.createElement(Pe,{disabled:!0,id:"Italic",label:"Italic",name:"Italic",icon:e.createElement(Jr.Z,null)}),e.createElement(Pe,{disabled:!0,id:"Underline",label:"Underline",name:"Underline",icon:e.createElement(_r.Z,null)})),e.createElement(Kr,{disabled:!0,id:"more",label:"More",icon:e.createElement(eo.Z,null)})),!o&&e.createElement(me.z,{onClick:i,variant:"tertiary",id:"preview"},u({id:"components.Wysiwyg.ToggleMode.markdown-mode",defaultMessage:"Markdown mode"}))):e.createElement(F.k,{padding:2,background:"neutral100",justifyContent:"space-between"},e.createElement(to,null,e.createElement(We.P,{placeholder:m,label:m,size:"S",onChange:E=>a(E,r)},e.createElement(be.W,{value:"h1"},"h1"),e.createElement(be.W,{value:"h2"},"h2"),e.createElement(be.W,{value:"h3"},"h3"),e.createElement(be.W,{value:"h4"},"h4"),e.createElement(be.W,{value:"h5"},"h5"),e.createElement(be.W,{value:"h6"},"h6")),e.createElement(Gr,null,e.createElement(Pe,{onClick:()=>a("Bold",r),id:"Bold",label:"Bold",name:"Bold",icon:e.createElement(Xr.Z,null)}),e.createElement(Pe,{onClick:()=>a("Italic",r),id:"Italic",label:"Italic",name:"Italic",icon:e.createElement(Jr.Z,null)}),e.createElement(Pe,{onClick:()=>a("Underline",r),id:"Underline",label:"Underline",name:"Underline",icon:e.createElement(_r.Z,null)})),e.createElement(Kr,{ref:f,onClick:g,id:"more",label:"More",icon:e.createElement(eo.Z,null)}),c&&e.createElement(Wa.J2,{centered:!0,source:f,spacing:4,id:"popover"},e.createElement(Yr.i,{onEscape:g,restoreFocus:!1},e.createElement(F.k,null,e.createElement(La,null,e.createElement(Pe,{onClick:()=>a("Strikethrough",r,g),id:"Strikethrough",label:"Strikethrough",name:"Strikethrough",icon:e.createElement(za.Z,null)}),e.createElement(Pe,{onClick:()=>a("BulletList",r,g),id:"BulletList",label:"BulletList",name:"BulletList",icon:e.createElement(Va.Z,null)}),e.createElement(Pe,{onClick:()=>a("NumberList",r,g),id:"NumberList",label:"NumberList",name:"NumberList",icon:e.createElement(Ua.Z,null)})),e.createElement(ye.o,null,e.createElement(Pe,{onClick:()=>a("Code",r,g),id:"Code",label:"Code",name:"Code",icon:e.createElement(Ha.Z,null)}),e.createElement(Pe,{onClick:()=>{g(),l()},id:"Image",label:"Image",name:"Image",icon:e.createElement(Qa.Z,null)}),e.createElement(Fa,{onClick:()=>a("Link",r,g),id:"Link",label:"Link",name:"Link",icon:e.createElement(Ga.Z,null)}),e.createElement(Pe,{onClick:()=>a("Quote",r,g),id:"Quote",label:"Quote",name:"Quote",icon:e.createElement(Ka.Z,null)})))))),i&&e.createElement(me.z,{onClick:i,variant:"tertiary",id:"preview"},u({id:"components.Wysiwyg.ToggleMode.preview-mode",defaultMessage:"Preview mode"})))};Rn.defaultProps={isPreviewMode:!1,onActionClick(){},onToggleMediaLib(){},onTogglePreviewMode:void 0},Rn.propTypes={disabled:n().bool.isRequired,editorRef:n().shape({current:n().any}).isRequired,isExpandMode:n().bool.isRequired,isPreviewMode:n().bool,onActionClick:n().func,onToggleMediaLib:n().func,onTogglePreviewMode:n().func};var Ya=Rn;const to=(0,N.ZP)(F.k)`
  /* Hide the label, every input needs a label. */
  label {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;var Xa=d(18070);const Mn=({onToggleExpand:t})=>{const{formatMessage:r}=(0,H.Z)();return e.createElement(S.x,{padding:2,background:"neutral100",hasRadius:!0},e.createElement(F.k,{justifyContent:"flex-end",alignItems:"flex-end"},e.createElement(Aa,{id:"expand",onClick:t},e.createElement(Q.Z,null,r({id:"components.WysiwygBottomControls.fullscreen",defaultMessage:"Expand"})),e.createElement(Xa.Z,null))))};Mn.defaultProps={onToggleExpand(){}},Mn.propTypes={onToggleExpand:n().func};var Ja=Mn;const Tn=({id:t,error:r,name:o,hint:s})=>s.length===0||r?null:e.createElement(Q.Z,{as:"p",variant:"pi",id:`${t||o}-hint`,textColor:"neutral600"},s);Tn.defaultProps={id:void 0,error:void 0,hint:""},Tn.propTypes={hint:n().oneOfType([n().string,n().array]),error:n().string,id:n().string,name:n().string.isRequired};var _a=Tn;const no=(t,r)=>{let o;switch(t){case"Strikethrough":o=`~~${r}~~`;break;case"Bold":o=`**${r}**`;break;case"Italic":o=`_${r}_`;break;case"Underline":o=`<u>${r}</u>`;break;case"Code":o=`\`\`\`
${r}
\`\`\``;break;case"Link":o=`[${r}](link)`;break;case"Quote":o=`>${r}`;break;default:o=r}return o},ro=t=>{let r,o={start:t.length,end:0};switch(t){case"Strikethrough":r=`~~${t}~~`,o.end=2;break;case"Bold":r=`**${t}**`,o.end=2;break;case"Italic":r=`_${t}_`,o.end=1;break;case"alt":r=`[${t}]()`,o.end=3;break;case"Underline":r=`<u>${t}</u>`,o.end=4;break;case"Code":r=`\`\`\`
${t}
\`\`\``,o.end=3;break;case"Link":r=`[${t}](link)`,o.end=7;break;case"Quote":r=`>${t}`,o.end=0;break;default:r=""}return{editedText:r,selection:o}},oo=t=>{let r;switch(t){case"BulletList":r="- ";break;case"NumberList":r="1. ";break;case"h1":r="# ";break;case"h2":r="## ";break;case"h3":r="### ";break;case"h4":r="#### ";break;case"h5":r="##### ";break;case"h6":r="###### ";break;default:return""}return r},so=(t,r)=>{const o=t.current.getSelection();let s;if(o){const a=no(r,o);t.current.replaceSelection(a),t.current.focus()}else{s=ro(r),t.current.replaceSelection(s.editedText),t.current.focus();const{line:a,ch:l}=t.current.getCursor(),i=l-s.selection.end,c=l-s.selection.end-s.selection.start;t.current.setSelection({line:a,ch:c},{line:a,ch:i})}},ei=(t,r)=>{const o=t.current.getDoc(),s=r==="BulletList"?"- ":"1. ";if(o.somethingSelected()){const a=o.listSelections();let l=null;t.current.operation(function(){a.forEach(function(i){const c=[i.head.line,i.anchor.line].sort();l==null&&(l=o.getLine(c[0]).startsWith(s));for(let p=c[0];p<=c[1];p++)if(l)o.getLine(p).startsWith(s)&&o.replaceRange("",{line:p,ch:0},{line:p,ch:s.length});else{const u=r==="BulletList"?"- ":`${p+1}. `;o.replaceRange(u,{line:p,ch:0})}})})}else{let{line:a}=o.getCursor();const l=oo(r),i=t.current.getLine(a),c=l+i;t.current.setSelection({line:a,ch:0},{line:a,ch:i.length}),t.current.replaceSelection(c)}t.current.focus()},ti=(t,r)=>{let{line:o}=t.current.getCursor();const s=oo(r),a=t.current.getLine(o),l=a.replace(/#{1,6}\s/g,"").trim(),i=s+l;t.current.setSelection({line:o,ch:0},{line:o,ch:a.length}),t.current.replaceSelection(i),setTimeout(()=>{const c=t.current.getLine(o).length;t.current.focus(),t.current.setCursor({line:o,ch:c})},0)},ni=(t,r)=>{let{line:o,ch:s}=t.current.getCursor();r.forEach((a,l)=>{let i=t.current.getLine(o).length;t.current.setCursor({line:o,ch:i}),(l>0||l===0&&s!==0)&&(i=t.current.getLine(o).length,t.current.setCursor({line:o,ch:i}),o++,t.current.replaceSelection(`
`)),a.mime.includes("image")?t.current.replaceSelection(`![${a.alt}](${a.url})`):t.current.replaceSelection(`[${a.alt}](${a.url})`)}),setTimeout(()=>t.current.focus(),0)},ri=(t,r,o,s,a)=>{const l=no(r,a),i=t.current.getRange({line:o+1,ch:0},{line:1/0,ch:1/0});if(t.current.replaceRange("",{line:o+1,ch:0},{line:1/0,ch:1/0}),t.current.replaceSelection(""),t.current.setCursor({line:o,ch:s}),t.current.replaceSelection(`
`),t.current.replaceSelection(l),r==="Code"){let{line:c}=t.current.getCursor();t.current.setCursor({line:c-1,ch:a.length})}t.current.replaceRange(i,{line:o+4,ch:0},{line:1/0,ch:1/0}),t.current.focus()},oi=(t,r,o,s)=>{const a=ro(r),l=t.current.getRange({line:o+1,ch:0},{line:1/0,ch:1/0});if(t.current.replaceRange("",{line:o+1,ch:0},{line:1/0,ch:1/0}),t.current.setCursor({line:o,ch:s}),t.current.replaceSelection(`
`),t.current.replaceSelection(a.editedText),r==="Code")o+=2,t.current.setSelection({line:o,ch:0},{line:o,ch:4});else{o+=1;let{ch:i}=t.current.getCursor(),c=i-a.selection.end,p=i-a.selection.end-a.selection.start;t.current.setSelection({line:o,ch:p},{line:o,ch:c})}t.current.replaceRange(l,{line:o+2,ch:0},{line:1/0,ch:1/0}),t.current.focus()},si=(t,r)=>{const o=t.current.getSelection();let{line:s}=t.current.getCursor(),a=t.current.getLine(s).length;o?ri(t,r,s,a,o):oi(t,r,s,a)};var ai=d(71933),ii=d(74464);const li=(t,r)=>`${t}${Math.floor(r*255).toString(16).padStart(2,0)}`,ci=(0,N.ZP)(F.k)`
  background: ${({theme:t})=>li(t.colors.neutral800,.2)};
`,di=(0,N.ZP)(S.x)`
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
`,ui=(0,N.ZP)(vn.Y)`
  background-color: transparent;
  border: none;
  align-items: center;

  svg {
    margin-left: ${({theme:t})=>`${t.spaces[2]}`};

    path {
      fill: ${({theme:t})=>t.colors.neutral700};
      width: ${12/16}rem;
      height: ${12/16}rem;
    }
  }
`,Dn=({children:t,isExpandMode:r,error:o,previewContent:s,onCollapse:a})=>{const{formatMessage:l}=(0,H.Z)();return(0,h.F5)(r),r?e.createElement(ai.h,{role:"dialog","aria-modal":!1},e.createElement(Yr.i,{onEscape:a},e.createElement(ci,{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:4,justifyContent:"center",onClick:a},e.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"popupShadow",overflow:"hidden",width:"70%",height:"70%",onClick:i=>i.stopPropagation()},e.createElement(F.k,{height:"100%",alignItems:"flex-start"},e.createElement(di,{flex:"1",height:"100%"},t),e.createElement(F.k,{alignItems:"start",direction:"column",flex:1,height:"100%",width:"100%"},e.createElement(F.k,{height:(0,h.Q1)(48),background:"neutral100",justifyContent:"flex-end",shrink:0,width:"100%"},e.createElement(ui,{onClick:a},e.createElement(Q.Z,null,l({id:"components.Wysiwyg.collapse",defaultMessage:"Collapse"})),e.createElement(ii.Z,null))),e.createElement(S.x,{position:"relative",height:"100%",width:"100%"},e.createElement(Qr,{data:s})))))))):e.createElement(S.x,{borderColor:o?"danger600":"neutral200",borderStyle:"solid",borderWidth:"1px",hasRadius:!0},t)};Dn.defaultProps={error:void 0,previewContent:""},Dn.propTypes={children:n().node.isRequired,error:n().string,isExpandMode:n().bool.isRequired,previewContent:n().string,onCollapse:n().func.isRequired};const mi=(0,N.ZP)(S.x)`
  svg path {
    fill: ${({theme:t})=>t.colors.neutral500};
  }
`,pi=(0,N.ZP)(Q.Z)`
  line-height: 0;
`,In=({hint:t,disabled:r,error:o,intlLabel:s,labelAction:a,name:l,onChange:i,placeholder:c,value:p,required:u})=>{const{formatMessage:m}=(0,H.Z)(),f=(0,e.useRef)(null),g=(0,e.useRef)(null),[E,b]=(0,e.useState)(!1),[v,M]=(0,e.useState)(!1),[D,T]=(0,e.useState)(!1),{components:w}=(0,h.yX)(),I=w["media-library"],C=()=>M($=>!$),R=()=>b($=>!$),L=()=>{b(!1),T($=>!$)},B=($,K,W)=>{switch($){case"Link":case"Strikethrough":{so(K,$),W();break}case"Code":case"Quote":{si(K,$),W();break}case"Bold":case"Italic":case"Underline":{so(K,$);break}case"BulletList":case"NumberList":{ei(K,$),W();break}case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":{ti(K,$);break}default:}},U=$=>{const K=$.map(W=>({alt:W.alternativeText||W.name,url:(0,h.CR)(W.url),mime:W.mime}));ni(g,K),M(!1)},A=c?m({id:c.id,defaultMessage:c.defaultMessage},{...c.values}):"",G=s.id?m({id:s.id,defaultMessage:s.defaultMessage},{...s.values}):l;return e.createElement(e.Fragment,null,e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(F.k,{gap:1},e.createElement(Q.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral800"},G,u&&e.createElement(pi,{textColor:"danger600"},"*")),a&&e.createElement(mi,{paddingLeft:1},a)),e.createElement(Dn,{isExpandMode:D,error:o,previewContent:p,onCollapse:L},e.createElement(Ya,{isExpandMode:D,editorRef:g,isPreviewMode:E,onActionClick:B,onToggleMediaLib:C,onTogglePreviewMode:D?void 0:R,disabled:r}),e.createElement(ja,{disabled:r,isExpandMode:D,editorRef:g,error:o,isPreviewMode:E,name:l,onChange:i,placeholder:A,textareaRef:f,value:p}),!D&&e.createElement(Ja,{onToggleExpand:L})),e.createElement(_a,{hint:t,name:l,error:o})),o&&e.createElement(S.x,{paddingTop:1},e.createElement(Q.Z,{variant:"pi",textColor:"danger600","data-strapi-field-error":!0},o)),v&&e.createElement(I,{onClose:C,onSelectAssets:U}))};In.defaultProps={disabled:!1,error:"",labelAction:void 0,placeholder:null,required:!1,value:"",hint:""},In.propTypes={hint:n().oneOfType([n().string,n().array]),disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,value:n().string};var gi=In,kn=d(10369),fi=d(38705),Pt=d(69932),hi=d(27169),ao=d(44647),io=d(75536),yi=/^[A-Za-z0-9-_.~]*$/,bi=d(63642);const Ei=(0,N.ZP)(bi.E)`
  svg {
    height: 1rem;
    width: 1rem;
    path {
      fill: ${({theme:t})=>t.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,lo=(0,N.ZP)(F.k)`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;

    path {
      fill: ${({theme:t,available:r})=>r?t.colors.success600:t.colors.danger600};
    }
  }
`,vi=N.F4`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Ci=(0,N.ZP)(F.k)`
  animation: ${vi} 2s infinite linear;
`,xn=({attribute:t,contentTypeUID:r,hint:o,disabled:s,error:a,intlLabel:l,labelAction:i,name:c,onChange:p,value:u,placeholder:m,required:f})=>{const{modifiedData:g,initialData:E,layout:b}=(0,h.Wq)(),[v,M]=(0,e.useState)(!1),[D,T]=(0,e.useState)(null),w=(0,io.Z)(u,300),I=(0,e.useRef)(),C=(0,h.lm)(),{formatAPIError:R}=(0,h.So)(),L=E[c],{formatMessage:B}=(0,H.Z)(),U=b?.options?.timestamps??0,A=!E[U],G=(0,io.Z)(g[t.targetField],300),[$,K]=(0,e.useState)(!1),[W,Y]=(0,e.useState)(null),{post:q}=(0,h.kY)(),z=l.id?B({id:l.id,defaultMessage:l.defaultMessage},{...l.values}):c,x=m?B({id:m.id,defaultMessage:m.defaultMessage},{...m.values}):"";I.current=async(Z=!1)=>{M(!0);try{const{data:{data:ne}}=await q((0,y.IF)("uid/generate"),{contentTypeUID:r,field:c,data:g});p({target:{name:c,value:ne,type:"text"}},Z),M(!1)}catch(ne){M(!1),C({type:"warning",message:R(ne)})}};const O=async()=>{if(u){M(!0);try{const{data:Z}=await q((0,y.IF)("uid/check-availability"),{contentTypeUID:r,field:c,value:u?u.trim():""});M(!1),T(Z)}catch(Z){M(!1),C({type:"warning",message:R(Z)})}}};(0,e.useEffect)(()=>{!u&&t.required&&I.current(!0)},[t.required,I,u]),(0,e.useEffect)(()=>{w?.trim().match(yi)&&w!==L&&O(),w||T(null)},[L,w]),(0,e.useEffect)(()=>{let Z;return D?.isAvailable&&(Z=setTimeout(()=>{T(null)},4e3)),()=>{Z&&clearTimeout(Z)}},[D]),(0,e.useEffect)(()=>{!$&&A&&G&&g[t.targetField]&&!u&&I.current(!0)},[G,$,A]);const j=()=>{Y(B({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}))},X=()=>{Y(null)},k=Z=>{Z.target.value&&A&&K(!0),p(Z)};return e.createElement(kn.o,{disabled:s,error:a,endAction:e.createElement(F.k,{position:"relative",gap:1},D&&!W&&e.createElement(lo,{alignItems:"center",gap:1,justifyContent:"flex-end",available:!!D?.isAvailable,"data-not-here-outer":!0,position:"absolute",pointerEvents:"none",right:6,width:"100px"},D?.isAvailable?e.createElement(fi.Z,null):e.createElement(Pt.Z,null),e.createElement(Q.Z,{textColor:D.isAvailable?"success600":"danger600",variant:"pi"},B(D.isAvailable?{id:"content-manager.components.uid.available",defaultMessage:"Available"}:{id:"content-manager.components.uid.unavailable",defaultMessage:"Unavailable"}))),!s&&e.createElement(e.Fragment,null,W&&e.createElement(lo,{alignItems:"center",justifyContent:"flex-end",gap:1},e.createElement(Q.Z,{textColor:"primary600",variant:"pi"},W)),e.createElement(Ei,{onClick:()=>I.current(),label:B({id:"content-manager.components.uid.regenerate",defaultMessage:"Regenerate"}),onMouseEnter:j,onMouseLeave:X},v?e.createElement(Ci,{"data-testid":"loading-wrapper"},e.createElement(hi.Z,null)):e.createElement(ao.Z,null)))),hint:o,label:z,labelAction:i,name:c,onChange:k,placeholder:x,value:u||"",required:f})};xn.propTypes={attribute:n().shape({targetField:n().string,required:n().bool}).isRequired,contentTypeUID:n().string.isRequired,disabled:n().bool,error:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,name:n().string.isRequired,onChange:n().func.isRequired,value:n().string,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,hint:n().oneOfType([n().string,n().array])},xn.defaultProps={disabled:!1,error:void 0,labelAction:void 0,placeholder:void 0,value:"",required:!1,hint:""};var Ri=xn,Mi=d(88423),On=d.n(Mi),Ti=d(41044),Di=d(50428),Ii=d(87107),ki=d(28847),co=d(7563),xi=d(67014),Oi=d(47851),uo=d(99140),Gt=d(63919),Pn=d(41234),Kt=d(35331);const wn=({children:t,loadMore:r,search:o,totalNumberOfRelations:s,size:a,...l})=>e.createElement(e.Fragment,null,e.createElement(F.k,{paddingBottom:s>0?3:0,gap:2,justifyContent:"space-between",alignItems:"end",wrap:"wrap"},e.createElement(F.k,{direction:"column",alignItems:"stretch",basis:a<=6?"100%":"70%",gap:1,...l},o),r),t);wn.defaultProps={search:void 0,loadMore:void 0,totalNumberOfRelations:0},wn.propTypes={children:n().node.isRequired,search:n().node,loadMore:n().node,size:n().number.isRequired,totalNumberOfRelations:n().number};var mo=d(90553);const Yt=50,ft=4,po=(0,N.ZP)(F.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`,go=(0,N.ZP)(F.k)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;
`,Fn=({ariaDescribedBy:t,children:r,displayValue:o,canDrag:s,disabled:a,endAction:l,iconButtonAriaLabel:i,style:c,id:p,index:u,name:m,onCancel:f,onDropItem:g,onGrabItem:E,status:b,updatePositionOfRelation:v,...M})=>{const[{handlerId:D,isDragging:T,handleKeyDown:w},I,C,R,L]=(0,mo.Y)(s&&!a,{type:`${y._Q.RELATION}_${m}`,index:u,item:{displayedValue:o,status:b,id:p},onGrabItem:E,onDropItem:g,onCancel:f,onMoveItem:v,dropSensitivity:"immediate"}),B=(0,y.FE)(I,R);return(0,e.useEffect)(()=>{L((0,xt.rX)())},[L]),e.createElement(S.x,{style:c,as:"li",ref:C,"aria-describedby":t,cursor:s?"all-scroll":"default"},T?e.createElement(Pi,null):e.createElement(F.k,{paddingTop:2,paddingBottom:2,paddingLeft:s?2:4,paddingRight:4,hasRadius:!0,borderSize:1,borderColor:"neutral200",background:a?"neutral150":"neutral0",justifyContent:"space-between",ref:s?B:void 0,"data-handler-id":D,...M},e.createElement(po,{gap:1},s?e.createElement(ye.h,{forwardedAs:"div",role:"button",tabIndex:0,"aria-label":i,noBorder:!0,onKeyDown:w,disabled:a},e.createElement(Je.Z,null)):null,e.createElement(go,{justifyContent:"space-between"},r)),l&&e.createElement(S.x,{paddingLeft:4},l)))},Pi=()=>e.createElement(S.x,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,hasRadius:!0,borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",background:"primary100",height:`calc(100% - ${ft}px)`});Fn.defaultProps={ariaDescribedBy:"",canDrag:!1,displayValue:"",disabled:!1,endAction:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,style:void 0,status:void 0,updatePositionOfRelation:void 0},Fn.propTypes={ariaDescribedBy:n().string,canDrag:n().bool,children:n().node.isRequired,displayValue:n().string,disabled:n().bool,endAction:n().node,iconButtonAriaLabel:n().string.isRequired,id:n().number.isRequired,index:n().number.isRequired,name:n().string.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,status:n().string,style:n().shape({height:n().number,left:n().number,position:n().string,right:n().number,width:n().string}),updatePositionOfRelation:n().func};const wi=(0,N.ZP)(S.x)`
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({overflowDirection:t})=>t==="top-bottom"||t==="top"?1:0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({overflowDirection:t})=>t==="top-bottom"||t==="bottom"?1:0};
    transition: opacity 0.2s ease-in-out;
  }
`,Ln=({children:t,overflow:r,...o})=>e.createElement(wi,{overflowDirection:r,...o},t);Ln.defaultProps={overflow:""},Ln.propTypes={children:n().node.isRequired,overflow:n().oneOf(["top-bottom","bottom","top",""])};var Fi=d(67582);const Li=N.ZP.div`
  flex-shrink: 0;
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  margin-right: ${({theme:t})=>t.spaces[2]};
  background-color: ${({theme:t,isDraft:r})=>t.colors[r?"secondary600":"success600"]};
  border-radius: 50%;
`,fo=t=>{const{formatMessage:r}=(0,H.Z)(),o=Fi.c.Option,{publicationState:s,mainField:a,id:l}=t.data;if(s){const i=s==="draft",c={id:(0,y.OB)("components.Select.draft-info-title"),defaultMessage:"State: Draft"},p={id:(0,y.OB)("components.Select.publish-info-title"),defaultMessage:"State: Published"},u=r(i?c:p);return e.createElement(o,{...t},e.createElement(F.k,null,e.createElement(Li,{title:u,isDraft:i}),e.createElement(Q.Z,{ellipsis:!0},a??l)))}return e.createElement(o,{...t},a??l)};fo.propTypes={isFocused:n().bool.isRequired,data:n().shape({id:n().number.isRequired,isDraft:n().bool,mainField:n().string,publicationState:n().oneOfType([n().string,n().bool])}).isRequired};const ho=(0,N.ZP)(Di.r)`
  display: block;

  > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`,yo=N.ZP.button`
  svg path {
    fill: ${({theme:t,disabled:r})=>r?t.colors.neutral600:t.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({theme:t,disabled:r})=>!r&&t.colors.neutral600};
  }
`,Sn=({canReorder:t,description:r,disabled:o,error:s,iconButtonAriaLabel:a,id:l,name:i,numberOfRelationsToDisplay:c,label:p,labelAction:u,labelLoadMore:m,labelDisconnectRelation:f,listAriaDescription:g,liveText:E,loadingMessage:b,onCancel:v,onDropItem:M,onGrabItem:D,noRelationsMessage:T,onRelationConnect:w,onRelationLoadMore:I,onRelationDisconnect:C,onRelationReorder:R,onSearchNextPage:L,onSearch:B,placeholder:U,publicationStateTranslations:A,required:G,relations:$,searchResults:K,size:W})=>{const[Y,q]=(0,e.useState)(null),[z,x]=(0,e.useState)(""),O=(0,e.useRef)(),j=(0,e.useRef)(),{data:X}=K,k=$.data,Z=k.length??0,ne=(0,e.useMemo)(()=>Z>c?Math.min(Z,c)*(Yt+ft)+Yt/2:Math.min(Z,c)*(Yt+ft),[Z,c]),J=!!m&&$.hasNextPage,ae=(0,e.useMemo)(()=>X.flat().filter(Boolean).map(re=>({...re,value:re.id,label:re.mainField})),[X]);(0,e.useEffect)(()=>{if(Z<=c)return x("");const re=qe=>{const Nr=qe.target.parentNode.scrollHeight,nt=qe.target.scrollHeight-qe.target.scrollTop;return qe.target.scrollTop===0?x("bottom"):x(nt===Nr?"top":"top-bottom")},ge=j?.current;return!$.isLoading&&k.length>0&&ge&&j.current.addEventListener("scroll",re),()=>{ge&&ge.removeEventListener("scroll",re)}},[$,k,c,Z]);const[V,ie]=(0,e.useState)(!1),Me=(0,e.useRef)(),Ge=(0,e.useRef)([]);(0,e.useEffect)(()=>(ae.length>0&&Ge.current.length===0&&ie(re=>(re&&(Me.current=setTimeout(()=>{ie(!0)},10)),!1)),()=>{Ge.current=ae||[]}),[ae]),(0,e.useEffect)(()=>()=>{Me.current&&clearTimeout(Me.current)},[]);const Nt=()=>{ie(!1)},jt=()=>{ie(!0),B()},Wt=(re,ge)=>{R&&re>=0&&re<k.length&&R(ge,re)},Ae=(0,de.zH)(k.length),Be=(0,e.useRef)(),zt=()=>{Be.current="loadMore",I()};(0,e.useEffect)(()=>{Be.current==="onChange"&&k.length!==Ae?O.current.scrollToItem(k.length,"end"):Be.current==="loadMore"&&k.length!==Ae&&O.current.scrollToItem(0,"start"),Be.current=void 0},[Ae,k]);const tt=`${i}-item-instructions`;return e.createElement(Ii.g,{error:s,name:i,hint:r,id:l,required:G},e.createElement(wn,{totalNumberOfRelations:Z,size:W,search:e.createElement(e.Fragment,null,e.createElement(ki.Q,{action:u},p),e.createElement(h.JV,{menuPosition:"absolute",menuPlacement:"auto",components:{Option:fo},options:ae,isDisabled:o,isLoading:K.isLoading,error:s,inputId:l,isSearchable:!0,isClear:!0,loadingMessage:()=>b,onChange:re=>{q(null),w(re),Be.current="onChange"},onInputChange:re=>{q(re),B(re)},onMenuClose:Nt,onMenuOpen:jt,menuIsOpen:V,noOptionsMessage:()=>T,onMenuScrollToBottom:()=>{K.hasNextPage&&L()},placeholder:U,name:i,value:Y})),loadMore:J&&e.createElement(co.A,{disabled:$.isLoading||$.isFetchingNextPage,onClick:zt,loading:$.isLoading||$.isFetchingNextPage,startIcon:e.createElement(ao.Z,null)},m)},k.length>0&&e.createElement(Ln,{overflow:z},e.createElement(pt.T,{id:tt},g),e.createElement(pt.T,{"aria-live":"assertive"},E),e.createElement(Ti.t7,{height:ne,ref:O,outerRef:j,itemCount:Z,itemSize:Yt+ft,itemData:{name:i,ariaDescribedBy:tt,canDrag:t,disabled:o,handleCancel:v,handleDropItem:M,handleGrabItem:D,iconButtonAriaLabel:a,labelDisconnectRelation:f,onRelationDisconnect:C,publicationStateTranslations:A,relations:k,updatePositionOfRelation:Wt},itemKey:re=>`${k[re].mainField}_${k[re].id}`,innerElementType:"ol"},An)),(r||s)&&e.createElement(S.x,{paddingTop:2},e.createElement(xi.J,null),e.createElement(Oi.c,null))))},Si=n().shape({data:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),hasNextPage:n().bool,isFetchingNextPage:n().bool.isRequired,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired}),Ai=n().shape({data:n().arrayOf(n().shape({id:n().number.isRequired,href:n().string,mainField:n().oneOfType([n().string,n().number]),publicationState:n().oneOfType([n().string,n().bool])})),hasNextPage:n().bool,isLoading:n().bool.isRequired,isSuccess:n().bool.isRequired});Sn.defaultProps={canReorder:!1,description:void 0,disabled:!1,error:void 0,labelAction:null,labelLoadMore:null,liveText:void 0,onCancel:void 0,onDropItem:void 0,onGrabItem:void 0,required:!1,relations:{data:[]},searchResults:{data:[]}},Sn.propTypes={error:n().string,canReorder:n().bool,description:n().string,disabled:n().bool,iconButtonAriaLabel:n().string.isRequired,id:n().string.isRequired,label:n().string.isRequired,labelAction:n().element,labelLoadMore:n().string,labelDisconnectRelation:n().string.isRequired,listAriaDescription:n().string.isRequired,liveText:n().string,loadingMessage:n().string.isRequired,name:n().string.isRequired,noRelationsMessage:n().string.isRequired,numberOfRelationsToDisplay:n().number.isRequired,onCancel:n().func,onDropItem:n().func,onGrabItem:n().func,onRelationConnect:n().func.isRequired,onRelationDisconnect:n().func.isRequired,onRelationLoadMore:n().func.isRequired,onRelationReorder:n().func.isRequired,onSearch:n().func.isRequired,onSearchNextPage:n().func.isRequired,placeholder:n().string.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,required:n().bool,searchResults:Ai,size:n().number.isRequired,relations:Si};const An=({data:t,index:r,style:o})=>{const{ariaDescribedBy:s,canDrag:a,disabled:l,handleCancel:i,handleDropItem:c,handleGrabItem:p,iconButtonAriaLabel:u,name:m,labelDisconnectRelation:f,onRelationDisconnect:g,publicationStateTranslations:E,relations:b,updatePositionOfRelation:v}=t,{publicationState:M,href:D,mainField:T,id:w}=b[r],I=M==="draft"?"secondary":"success";return e.createElement(Fn,{ariaDescribedBy:s,canDrag:a,disabled:l,displayValue:String(T??w),iconButtonAriaLabel:u,id:w,index:r,name:m,endAction:e.createElement(yo,{"data-testid":`remove-relation-${w}`,disabled:l,type:"button",onClick:()=>g(b[r]),"aria-label":f},e.createElement(uo.J,{width:"12px",as:Kt.Z})),onCancel:i,onDropItem:c,onGrabItem:p,status:M||void 0,style:{...o,bottom:o.bottom??0+ft,height:o.height??0-ft},updatePositionOfRelation:v},e.createElement(S.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},e.createElement(Gt.u,{description:T??`${w}`},D?e.createElement(ho,{to:D},T??w):e.createElement(Q.Z,{textColor:l?"neutral600":"primary600",ellipsis:!0},T??w))),M&&e.createElement(Pn.q,{variant:I,showBullet:!1,size:"S"},e.createElement(Q.Z,{fontWeight:"bold",textColor:`${I}700`},E[M])))};An.defaultProps={data:{}},An.propTypes={data:n().shape({ariaDescribedBy:n().string.isRequired,canDrag:n().bool.isRequired,disabled:n().bool.isRequired,handleCancel:n().func,handleDropItem:n().func,handleGrabItem:n().func,iconButtonAriaLabel:n().string.isRequired,labelDisconnectRelation:n().string.isRequired,name:n().string.isRequired,onRelationDisconnect:n().func.isRequired,publicationStateTranslations:n().shape({draft:n().string.isRequired,published:n().string.isRequired}).isRequired,relations:n().arrayOf(n().shape({href:n().string,id:n().number.isRequired,publicationState:n().oneOfType([n().string,n().bool]),mainField:n().oneOfType([n().string,n().number])})),updatePositionOfRelation:n().func.isRequired}),index:n().number.isRequired,style:n().object.isRequired};var $i=Sn,st=d(20108);function Zi(t,r){return o=>{const s=r(o);return e.createElement(t,{...o,...s})}}var Bi=Zi;function qi({componentUid:t,isUserAllowedToEditField:r,isUserAllowedToReadField:o,name:s,queryInfos:a}){const{isCreatingEntry:l,createActionAllowedFields:i,readActionAllowedFields:c,updateActionAllowedFields:p,slug:u,modifiedData:m}=(0,h.Wq)(),f=(0,e.useMemo)(()=>r===!0?!0:(l?i:p).includes(s),[l,i,s,r,p]),g=(0,e.useMemo)(()=>o?!0:(l?[]:c).includes(s),[l,o,s,c]),E=s.split(".");let b;t&&(b=P()(m,E.slice(0,-1))?.id);const v=(0,e.useMemo)(()=>l?null:t?b?(0,y.IF)(`relations/${t}/${b}/${E.at(-1)}`):null:(0,y.IF)(`relations/${u}/${m.id}/${s.split(".").at(-1)}`),[l,t,u,m.id,s,b,E]),M=(0,e.useMemo)(()=>t?(0,y.IF)(`relations/${t}/${s.split(".").at(-1)}`):(0,y.IF)(`relations/${u}/${s.split(".").at(-1)}`),[t,u,s]);return{componentId:b,isComponentRelation:Boolean(t),queryInfos:{...a,endpoints:{search:M,relation:v}},isCreatingEntry:l,isFieldAllowed:f,isFieldReadable:g}}var Ni=qi;function ji(t,r){return`${(0,y.IF)(`collectionType/${t}/${r??""}`)}`}const at={DRAFT:"draft",PUBLISHED:"published"},$n=5,Wi=10,Zn=(t,{shouldAddLink:r,mainFieldName:o,targetModel:s})=>{const a={...t};return r&&(a.href=ji(s,a.id)),a.publicationState=!1,a?.publishedAt!==void 0&&(a.publicationState=a.publishedAt?at.PUBLISHED:at.DRAFT),a.mainField=a[o],a},zi=(t,{shouldAddLink:r=!1,mainFieldName:o,targetModel:s}={})=>[...t].map(a=>Zn(a,{shouldAddLink:r,mainFieldName:o,targetModel:s})),Vi=(t,{mainFieldName:r})=>{const{data:o}=t,{pages:s=[]}=o??{};return{...t,data:s.map(a=>a?.results.map(l=>Zn(l,{mainFieldName:r}))).filter(Boolean).flat()}},Ui=(t=[],r=[])=>{const o=t.reduce((a,l)=>r.find(i=>i.id===l.id)?a:[...a,l.id],[]),s=r.reduce((a,l)=>t.find(i=>i.id===l.id)?a:[...a,l.id],[]);return[o,s]},Hi=(t,{relation:r,search:o})=>{const[s,a]=(0,e.useState)({}),[l,i]=(0,e.useState)(0),{get:c}=(0,h.kY)(),p=async({pageParam:C=1})=>{try{const{data:R}=await c(r?.endpoint,{params:{...r.pageParams??{},page:C}});return i(C),R}catch{return null}},u=async({pageParam:C=1})=>{try{const{data:R}=await c(o.endpoint,{params:{...o.pageParams??{},...s,page:C}});return R}catch{return null}},{onLoad:m,normalizeArguments:f={}}=r,g=(0,st.useInfiniteQuery)(["relation",...t],p,{cacheTime:0,enabled:r.enabled,getNextPageParam(C){const R=!C?.pagination;if(!(!C||R||C?.pagination.page>=C?.pagination.pageCount))return C.pagination.page+1},select:C=>({...C,pages:C.pages.map(R=>{if(!R)return R;const{data:L,results:B,pagination:U}=R,A=!!L;let G=[];return A?G=[L]:B&&(G=[...B].reverse()),{pagination:U,results:G}})})}),{pageGoal:E}=r,{status:b,data:v,fetchNextPage:M,hasNextPage:D}=g;(0,e.useEffect)(()=>{E>l&&D&&b==="success"&&M({pageParam:l+1})},[E,l,M,D,b]);const T=(0,h.W6)(m);(0,e.useEffect)(()=>{if(b==="success"&&v&&v.pages?.at(-1)?.results&&T){const C=zi(v.pages.at(-1).results,f);T(C)}},[b,T,v]);const w=(0,st.useInfiniteQuery)(["relation",...t,"search",JSON.stringify(s)],u,{enabled:Object.keys(s).length>0,getNextPageParam(C){if(!(!C?.pagination||C.pagination.page>=C.pagination.pageCount))return C.pagination.page+1}});return{relations:g,search:w,searchFor:(C,R={})=>{a({...R,_q:C})}}},bo=(t,r)=>o=>{const s=o.split(".");return s.reduce((a,l,i)=>{const c=P()(t,a),p=P()(r,[...s.slice(0,i),l,"__temp_key__"]);if(Array.isArray(c)&&typeof p=="number"){const u=c.findIndex(m=>m.__temp_key__===p);return a.push(u.toString()),a}return a.push(l),a},[])},Bn=({error:t,componentId:r,isComponentRelation:o,editable:s,description:a,intlLabel:l,isCreatingEntry:i,isFieldAllowed:c,isFieldReadable:p,labelAction:u,mainField:m,name:f,queryInfos:{endpoints:g,defaultParams:E,shouldDisplayRelationLink:b},placeholder:v,required:M,relationType:D,size:T,targetModel:w})=>{const[I,C]=(0,e.useState)(""),{formatMessage:R}=(0,H.Z)(),{slug:L,initialData:B,modifiedData:U,relationConnect:A,relationDisconnect:G,relationLoad:$,relationReorder:K}=(0,h.Wq)(),W=f.split("."),Y=bo(B,U)(f),q=P()(U,f,[]),z=Math.ceil(P()(B,f,[]).length/$n),{relations:x,search:O,searchFor:j}=Hi([L,Y.join("."),U.id,E],{relation:{enabled:!!g.relation,endpoint:g.relation,pageGoal:z,pageParams:{...E,pageSize:$n},onLoad(re){$({target:{initialDataPath:["initialData",...Y],modifiedDataPath:["modifiedData",...W],value:re}})},normalizeArguments:{mainFieldName:m.name,shouldAddLink:b,targetModel:w}},search:{endpoint:g.search,pageParams:{...E,entityId:i?void 0:o?r:B.id,pageSize:Wi}}}),X=(0,e.useMemo)(()=>D.toLowerCase().includes("morph"),[D]),k=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(D),Z=(0,e.useMemo)(()=>X?!0:i?!s:!c&&p||!s,[X,i,s,c,p]),ne=re=>{const ge=Zn(re,{mainFieldName:m.name,shouldAddLink:b,targetModel:w});A({name:f,value:ge,toOneRelation:k})},J=re=>{G({name:f,id:re.id})},ae=()=>{x.fetchNextPage()},V=(re="")=>{const[ge,qe]=Ui(q,P()(B,f));j(re,{idsToInclude:qe,idsToOmit:ge})},ie=()=>{O.fetchNextPage()},Me=re=>`${re+1} of ${q.length}`,Ge=(re,ge)=>{const qe=q[re];C(R({id:(0,y.OB)("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:qe.mainField??qe.id,position:Me(ge)})),K({name:f,newIndex:ge,oldIndex:re})},Nt=re=>{const ge=q[re];C(R({id:(0,y.OB)("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:ge.mainField??ge.id,position:Me(re)}))},jt=re=>{const ge=q[re];C(R({id:(0,y.OB)("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:ge.mainField??ge.id,position:Me(re)}))},Wt=re=>{const ge=q[re];C(R({id:(0,y.OB)("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:ge.mainField??ge.id}))};if(!c&&i||!i&&!c&&!p)return e.createElement(h.X0,{name:f,intlLabel:l,labelAction:u});const Ae=q.length,Be=(P()(B,Y)??[]).length,zt=x.data?.pages[0]?.pagination?.total??0,tt=!x.data&&Ae===Be?Ae:Ae-Be+zt;return e.createElement($i,{error:t,canReorder:!k,description:a,disabled:Z,iconButtonAriaLabel:R({id:(0,y.OB)("components.RelationInput.icon-button-aria-label"),defaultMessage:"Drag"}),id:f,label:`${R({id:l.id,defaultMessage:l.defaultMessage})} ${tt>0?`(${tt})`:""}`,labelAction:u,labelLoadMore:i?null:R({id:(0,y.OB)("relation.loadMore"),defaultMessage:"Load More"}),labelDisconnectRelation:R({id:(0,y.OB)("relation.disconnect"),defaultMessage:"Remove"}),listAriaDescription:R({id:(0,y.OB)("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"}),listHeight:320,liveText:I,loadingMessage:R({id:(0,y.OB)("relation.isLoading"),defaultMessage:"Relations are loading"}),name:f,noRelationsMessage:R({id:(0,y.OB)("relation.notAvailable"),defaultMessage:"No relations available"}),numberOfRelationsToDisplay:$n,onDropItem:jt,onGrabItem:Nt,onCancel:Wt,onRelationConnect:ne,onRelationDisconnect:J,onRelationLoadMore:ae,onRelationReorder:Ge,onSearch:re=>V(re),onSearchNextPage:()=>ie(),placeholder:R(v||{id:(0,y.OB)("relation.add"),defaultMessage:"Add relation"}),publicationStateTranslations:{[at.DRAFT]:R({id:(0,y.OB)("relation.publicationState.draft"),defaultMessage:"Draft"}),[at.PUBLISHED]:R({id:(0,y.OB)("relation.publicationState.published"),defaultMessage:"Published"})},relations:On()({...x,data:q},"data","hasNextPage","isFetchingNextPage","isLoading","isSuccess"),required:M,searchResults:Vi(O,{mainFieldName:m.name}),size:T})};Bn.defaultProps={componentId:void 0,editable:!0,error:void 0,description:"",labelAction:null,isComponentRelation:!1,isFieldAllowed:!0,placeholder:null,required:!1},Bn.propTypes={componentId:n().number,editable:n().bool,error:n().string,description:n().string,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}).isRequired,labelAction:n().element,isCreatingEntry:n().bool.isRequired,isComponentRelation:n().bool,isFieldAllowed:n().bool,isFieldReadable:n().bool.isRequired,mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired}).isRequired,name:n().string.isRequired,placeholder:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),required:n().bool,relationType:n().string.isRequired,size:n().number.isRequired,targetModel:n().string.isRequired,queryInfos:n().shape({defaultParams:n().shape({locale:n().string}),endpoints:n().shape({relation:n().string,search:n().string.isRequired}).isRequired,shouldDisplayRelationLink:n().bool.isRequired}).isRequired};const Qi=(0,e.memo)(Bn);var Gi=Bi(Qi,Ni);function Ki(t,r){return o=>{const s=r(o.keys);return e.createElement(t,{...o,...s})}}var Yi=Ki,Xi=(t,r=!1)=>[{metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},disabled:r,hidden:r},key:"__enum_option_null",value:""},...t.map(o=>({metadatas:{intlLabel:{id:o,defaultMessage:o},hidden:!1,disabled:!1},key:o,value:o}))],Ji=d(59578),_i=d.n(Ji),el=(t="")=>{switch(_i()(t)){case"boolean":return"bool";case"biginteger":return"text";case"decimal":case"float":case"integer":return"number";case"date":case"datetime":case"time":return t;case"email":return"email";case"enumeration":return"select";case"password":return"password";case"string":return"text";case"text":return"textarea";case"media":case"file":case"files":return"media";case"json":return"json";case"wysiwyg":case"WYSIWYG":case"richtext":return"wysiwyg";case"uid":return"uid";default:return t||"text"}},tl=t=>{let r;return t==="float"||t==="decimal"?r=.01:r=1,r};function nl(t){const{createActionAllowedFields:r,formErrors:o,isCreatingEntry:s,modifiedData:a,onChange:l,readActionAllowedFields:i,shouldNotRunValidations:c,updateActionAllowedFields:p}=(0,h.Wq)(),u=(0,e.useMemo)(()=>s?r:p,[s,r,p]),m=(0,e.useMemo)(()=>s?[]:i,[s,i]),f=P()(a,t,null);return{allowedFields:u,formErrors:o,isCreatingEntry:s,onChange:l,readableFields:m,shouldNotRunValidations:c,value:f}}var rl=nl,Eo=["type","model","via","collection","default","plugin","enum","regex","pluginOptions"];function qn({allowedFields:t,componentUid:r,fieldSchema:o,formErrors:s,isCreatingEntry:a,keys:l,labelAction:i,metadatas:c,onChange:p,readableFields:u,shouldNotRunValidations:m,queryInfos:f,value:g,size:E,customFieldInputs:b}){const{fields:v}=(0,h.yX)(),{formatMessage:M}=(0,H.Z)(),{contentType:D}=(0,de.PL)(),T=(0,e.useMemo)(()=>!P()(c,"editable",!0),[c]),{type:w,customField:I}=o,C=P()(s,[l],null),R=(0,e.useMemo)(()=>(0,y.Ts)(l),[l]),L=(0,e.useMemo)(()=>{const ne=sa()(o,m?[...Eo,"required","minLength"]:Eo),J=o.regex||null;if(J){const ae=new RegExp(J);ae&&(ne.regex=ae)}return ne},[o,m]),B=(0,e.useMemo)(()=>P()(L,["required"],!1),[L]),U=(0,e.useMemo)(()=>{const ne=P()(D,["attributes"],{});return P()(ne,[R[0],"type"],null)==="dynamiczone"},[D,R]),A=(0,e.useMemo)(()=>el(w),[w]),G=(0,e.useMemo)(()=>w==="media"&&!g?[]:g,[w,g]),$=(0,e.useMemo)(()=>tl(w),[w]),K=(0,e.useMemo)(()=>{const ne=R.join(".");if(t.includes(ne))return!0;if(U)return t.includes(R[0]);if(R.length>1){const ae=Ot()(R,R.length-1).join(".");return t.includes(ae)}return!1},[t,R,U]),W=(0,e.useMemo)(()=>{const ne=R.join(".");if(u.includes(ne))return!0;if(U)return u.includes(R[0]);if(R.length>1){const ae=Ot()(R,R.length-1).join(".");return u.includes(ae)}return!1},[u,R,U]),Y=(0,e.useMemo)(()=>W||K,[K,W]),q=(0,e.useMemo)(()=>a?T:W&&!K?!0:T,[T,a,K,W]),z=(0,e.useMemo)(()=>Xi(o.enum||[],B),[o,B]),{label:x,description:O,placeholder:j,visible:X}=c,k=(0,e.useMemo)(()=>{if(!c.step||A!=="datetime"&&A!=="time")return $;if(!G)return c.step;let ne;return A==="datetime"?ne=parseInt(G.substr(14,2),10):A==="time"&&(ne=parseInt(G.slice(-2),10)),ne%c.step===0?c.step:$},[A,G,c.step,$]);if(X===!1)return null;if(!Y)return e.createElement(h.X0,{description:O?{id:O,defaultMessage:O}:null,intlLabel:{id:x,defaultMessage:x},labelAction:i,error:C&&M(C),name:l,required:B});if(w==="relation")return e.createElement(Gi,{...c,...o,componentUid:r,description:c.description?M({id:c.description,defaultMessage:c.description}):void 0,intlLabel:{id:c.label,defaultMessage:c.label},labelAction:i,isUserAllowedToEditField:K,isUserAllowedToReadField:W,name:l,placeholder:c.placeholder?{id:c.placeholder,defaultMessage:c.placeholder}:null,queryInfos:f,size:E,value:g,error:C&&M(C)});const Z={uid:Ri,media:v.media,wysiwyg:gi,...v,...b};return e.createElement(h.jm,{attribute:o,autoComplete:"new-password",intlLabel:{id:x,defaultMessage:x},isNullable:A==="bool"&&[null,void 0].includes(o.default),description:O?{id:O,defaultMessage:O}:null,disabled:q,error:C,labelAction:i,contentTypeUID:D.uid,customInputs:Z,multiple:o.multiple||!1,name:l,onChange:p,options:z,placeholder:j?{id:j,defaultMessage:j}:null,required:o.required||!1,step:k,type:I||A,value:G,withDefaultValue:!1})}qn.defaultProps={componentUid:void 0,formErrors:{},labelAction:void 0,size:void 0,value:null,queryInfos:{},customFieldInputs:{}},qn.propTypes={allowedFields:n().array.isRequired,componentUid:n().string,fieldSchema:n().object.isRequired,formErrors:n().object,keys:n().string.isRequired,isCreatingEntry:n().bool.isRequired,labelAction:n().element,metadatas:n().object.isRequired,onChange:n().func.isRequired,readableFields:n().array.isRequired,size:n().number,shouldNotRunValidations:n().bool.isRequired,value:n().any,queryInfos:n().shape({containsKey:n().string,defaultParams:n().object,endPoint:n().string}),customFieldInputs:n().object};const ol=(0,e.memo)(qn,xe());var Nn=Yi(ol,rl);const wt=new Map;var jn=(t=[])=>{const[r,o]=(0,e.useState)(Object.fromEntries(wt)),s=t.filter(p=>!wt.get(p)),[a,l]=(0,e.useState)(()=>!!s.length),i=(0,h.mZ)();(0,e.useEffect)(()=>{const p=m=>{o(m),l(!1)},u=async(m,f)=>{const g=await Promise.all(f);m.forEach((E,b)=>{wt.set(E,g[b].default)}),p(Object.fromEntries(wt))};if(s.length>0){l(!0);const m=s.reduce((f,g)=>{const E=i.get(g);return E&&f.push(E.components.Input()),f},[]);m.length>0&&u(s,m)}},[s,i]);const c=(0,e.useCallback)(()=>{wt.clear(),o({})},[]);return{isLazyLoading:a,lazyComponentStore:r,cleanup:c}};const Wn=({componentUid:t,isFromDynamicZone:r,isNested:o,name:s})=>{const{getComponentLayout:a}=(0,de.PL)(),i=(0,e.useMemo)(()=>a(t),[t,a]).layouts.edit,{lazyComponentStore:c}=jn();return e.createElement(S.x,{background:r?"":"neutral100",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,hasRadius:o,borderColor:o?"neutral200":""},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:6},i.map((p,u)=>e.createElement(Te.r,{gap:4,key:u},p.map(({name:m,size:f,metadatas:g,fieldSchema:E,queryInfos:b})=>{const v=E.type==="component",M=`${s}.${m}`;if(v){const D=E.component;return e.createElement(ue.P,{col:f,s:12,xs:12,key:m},e.createElement(Xt,{componentUid:D,intlLabel:{id:g.label,defaultMessage:g.label},isNested:!0,isRepeatable:E.repeatable,max:E.max,min:E.min,name:M,required:E.required||!1}))}return e.createElement(ue.P,{col:f,key:m,s:12,xs:12},e.createElement(Nn,{componentUid:t,keys:M,fieldSchema:E,metadatas:g,queryInfos:b,size:f,customFieldInputs:c}))})))))};Wn.defaultProps={isFromDynamicZone:!1,isNested:!1},Wn.propTypes={componentUid:n().string.isRequired,isFromDynamicZone:n().bool,isNested:n().bool,name:n().string.isRequired};var sl=Wn,Ft=d(19406),al=d(41119),vo=d.n(al);const il=N.ZP.span`
  display: block;
  background-color: ${({theme:t})=>t.colors.primary100};
  outline: 1px dashed ${({theme:t})=>t.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:t})=>t.spaces[6]};
`;var ll=()=>e.createElement(il,{padding:6,background:"primary100"});const cl=(0,N.ZP)(ye.h)`
  background-color: transparent;

  svg {
    path {
      fill: ${({theme:t,expanded:r})=>r?t.colors.primary600:t.colors.neutral600};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${({theme:t})=>t.colors.primary600};
      }
    }
  }
`,dl=(0,N.ZP)(F.k)`
  & .drag-handle {
    background: unset;

    svg {
      path {
        fill: ${({theme:t,expanded:r})=>r?t.colors.primary600:void 0};
      }
    }

    &:hover {
      svg {
        path {
          /* keeps the hover style of the accordion */
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`,zn=({componentFieldName:t,componentUid:r,fields:o,index:s,isOpen:a,isReadOnly:l,mainField:i,moveComponentField:c,onClickToggle:p,toggleCollapses:u,onGrabItem:m,onDropItem:f,onCancel:g})=>{const{modifiedData:E,removeRepeatableField:b,triggerFormValidation:v}=(0,h.Wq)(),M=vo()(P()(E,[...t.split("."),i],"")),D=(0,e.useRef)(null),{formatMessage:T}=(0,H.Z)(),w=t.split(".").slice(0,-1).join("."),[{handlerId:I,isDragging:C,handleKeyDown:R},L,B,U,A]=(0,mo.Y)(!l,{type:`${y._Q.COMPONENT}_${w}`,index:s,item:{displayedValue:M},onMoveItem:c,onStart(){u()},onEnd(){v()},onGrabItem:m,onDropItem:f,onCancel:g});(0,e.useEffect)(()=>{A((0,xt.rX)(),{captureDraggingState:!1})},[A,s]);const G=(0,y.FE)(D,U),$=(0,y.FE)(L,B),{lazyComponentStore:K}=jn();return e.createElement(S.x,{ref:$},C?e.createElement(ll,null):e.createElement(mn.U,{expanded:a,onToggle:p,id:t,size:"S"},e.createElement(pn.B,{action:l?null:e.createElement(dl,{gap:0,expanded:a},e.createElement(cl,{expanded:a,noBorder:!0,onClick:()=>{b(t),u()},label:T({id:(0,y.OB)("containers.Edit.delete"),defaultMessage:"Delete"}),icon:e.createElement(He.Z,null)}),e.createElement(ye.h,{className:"drag-handle",ref:G,forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:W=>W.stopPropagation(),"data-handler-id":I,label:T({id:(0,y.OB)("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:R},e.createElement(Je.Z,null))),title:M,togglePosition:"left"}),e.createElement(gn.v,null,e.createElement(F.k,{direction:"column",alignItems:"stretch",background:"neutral100",padding:6,gap:6},o.map((W,Y)=>e.createElement(Te.r,{gap:4,key:Y},W.map(({name:q,fieldSchema:z,metadatas:x,queryInfos:O,size:j})=>{const X=z.type==="component",k=`${t}.${q}`;if(X){const Z=z.component;return e.createElement(ue.P,{col:j,s:12,xs:12,key:q},e.createElement(Xt,{componentUid:Z,intlLabel:{id:x.label,defaultMessage:x.label},isRepeatable:z.repeatable,isNested:!0,name:k,max:z.max,min:z.min,required:z.required}))}return e.createElement(ue.P,{key:k,col:j,s:12,xs:12},e.createElement(Nn,{componentUid:r,fieldSchema:z,keys:k,metadatas:x,queryInfos:O,size:j,customFieldInputs:K}))})))))))};zn.defaultProps={componentUid:void 0,fields:[],isReadOnly:!1,isOpen:!1,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0,toggleCollapses(){}},zn.propTypes={componentFieldName:n().string.isRequired,componentUid:n().string,fields:n().array,index:n().number.isRequired,isOpen:n().bool,isReadOnly:n().bool,mainField:n().string.isRequired,moveComponentField:n().func.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onClickToggle:n().func.isRequired,toggleCollapses:n().func};var ul=(0,e.memo)(zn),Co=d(861);const ml=(0,N.ZP)(S.x)`
  overflow: hidden;
  border-bottom: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-left: 1px solid ${({theme:t})=>t.colors.neutral200};
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
`,pl=(0,N.ZP)(S.x)`
  border-bottom: none;

  /* add the borders and make sure the top is transparent to avoid jumping with the hover effect  */
  & > div > div {
    border: 1px solid ${({theme:t})=>t.colors.neutral200};
    border-top-color: transparent;
  }

  /* the top accordion _does_ need a border though */
  & > div:first-child > div {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral200};
  }

  /* Reset all the border-radius' */
  & > div > div,
  & > div > div > div {
    border-radius: unset;
  }

  /* Give the border radius back to the first accordion */
  & > div:first-child > div,
  & > div:first-child > div > div {
    border-radius: ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius} 0 0;
  }

  & > div > div[data-strapi-expanded='true'] {
    border: 1px solid ${({theme:t})=>t.colors.primary600};
  }
`,Vn=({children:t,error:r})=>{const{formatMessage:o}=(0,H.Z)();return e.createElement(Co.k,{attributeName:"data-strapi-accordion-toggle"},t,r&&e.createElement(S.x,{paddingTop:1},e.createElement(Q.Z,{variant:"pi",textColor:"danger600"},o({id:r.id,defaultMessage:r.defaultMessage},{...r.values}))))};Vn.defaultProps={error:void 0},Vn.propTypes={children:n().node.isRequired,error:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object})};function gl(t,r={}){return Object.keys(r).filter(o=>o.startsWith(t)).map(o=>o.split(".").slice(0,t.split(".").length+1).join("."))}const fl=(0,N.ZP)(co.A)`
  height: 100%;
  width: 100%;
  border-radius: 0 0 4px 4px;
  display: flex;
  justify-content: center;
  span {
    font-weight: 600;
    font-size: 14px;
  }
`,Un=({componentUid:t,componentValue:r,componentValueLength:o,isReadOnly:s,max:a,min:l,name:i})=>{const{addRepeatableComponentToField:c,formErrors:p,moveComponentField:u}=(0,h.Wq)(),m=(0,h.lm)(),{formatMessage:f}=(0,H.Z)(),[g,E]=(0,e.useState)(""),[b,v]=(0,e.useState)(""),{getComponentLayout:M,components:D}=(0,de.PL)(),T=(0,e.useMemo)(()=>M(t),[t,M]),w=(0,e.useMemo)(()=>(0,y.Uo)(r||[])+1,[r]),I=gl(i,p),C=l-o,R=P()(p,i,{id:""}).id.includes("min"),L=()=>{E("")},B=()=>{s||(o<a?(c(i,T,D,R),E(w)):o>=a&&m({type:"info",message:{id:(0,y.OB)("components.notification.info.maximum-requirement")}}))},U=(x,O)=>{v(f({id:(0,y.OB)("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${i}.${O}`,position:$(x)})),u({name:i,newIndex:x,currentIndex:O})},A=P()(T,["settings","mainField"],"id"),G=x=>()=>{E(g===x?"":x)},$=x=>`${x+1} of ${o}`,K=x=>{v(f({id:(0,y.OB)("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${i}.${x}`}))},W=x=>{v(f({id:(0,y.OB)("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${i}.${x}`,position:$(x)}))},Y=x=>{v(f({id:(0,y.OB)("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${i}.${x}`,position:$(x)}))};let q=p[i];if(R?q={id:(0,y.OB)("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",values:{number:C}}:I.some(x=>x.split(".").length>1)&&!R&&(q={id:(0,y.OB)("components.RepeatableComponent.error-message"),defaultMessage:"The component(s) contain error(s)"}),o===0)return e.createElement(Vr,{error:q,isReadOnly:s,onClick:B});const z=`${i}-item-instructions`;return e.createElement(S.x,{hasRadius:!0},e.createElement(pt.T,{id:z},f({id:(0,y.OB)("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),e.createElement(pt.T,{"aria-live":"assertive"},b),e.createElement(Vn,{error:q,ariaDescribedBy:z},e.createElement(pl,{"aria-describedby":z},r.map(({__temp_key__:x},O)=>e.createElement(ul,{componentFieldName:`${i}.${O}`,componentUid:t,fields:T.layouts.edit,key:x,index:O,isOpen:g===x,isReadOnly:s,mainField:A,moveComponentField:U,onClickToggle:G(x),toggleCollapses:L,onCancel:K,onDropItem:Y,onGrabItem:W}))),e.createElement(ml,null,e.createElement(F.k,{justifyContent:"center",height:"48px",background:"neutral0"},e.createElement(fl,{disabled:s,onClick:B,startIcon:e.createElement(Ft.Z,null)},f({id:(0,y.OB)("containers.EditView.add.new-entry"),defaultMessage:"Add an entry"}))))))};Un.defaultProps={componentValue:null,componentValueLength:0,isReadOnly:!1,max:1/0,min:0},Un.propTypes={componentUid:n().string.isRequired,componentValue:n().oneOfType([n().array,n().object]),componentValueLength:n().number,isReadOnly:n().bool,max:n().number,min:n().number,name:n().string.isRequired};var hl=(0,e.memo)(Un);const Hn=({addNonRepeatableComponentToField:t,componentUid:r,intlLabel:o,isCreatingEntry:s,isFromDynamicZone:a,isRepeatable:l,isNested:i,labelAction:c,max:p,min:u,name:m,hasChildrenAllowedFields:f,hasChildrenReadableFields:g,isReadOnly:E,componentValue:b,removeComponentFromField:v,required:M})=>{const{formatMessage:D}=(0,H.Z)(),T=Ks()(b),w=b!==null||a,I=!l&&w&&!a&&f,{getComponentLayout:C,components:R}=(0,de.PL)(),L=(0,e.useMemo)(()=>C(r),[r,C]);if(!f&&s)return e.createElement(h.X0,{labelAction:c,intlLabel:o,name:m});if(!f&&!s&&!g)return e.createElement(h.X0,{labelAction:c,intlLabel:o,name:m});const B=()=>{t(m,L,R)};return e.createElement(S.x,null,e.createElement(F.k,{justifyContent:"space-between"},o&&e.createElement(na,{intlLabel:o,labelAction:c,name:m,numberOfEntries:T,showNumberOfEntries:l,required:M}),I&&e.createElement(ye.h,{label:D({id:(0,y.OB)("components.reset-entry"),defaultMessage:"Reset Entry"}),icon:e.createElement(He.Z,null),noBorder:!0,onClick:()=>{v(m,r)}})),e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:1},!l&&!w&&e.createElement(Vr,{isReadOnly:E,onClick:B}),!l&&w&&e.createElement(sl,{componentUid:r,isFromDynamicZone:a,isNested:i,name:m}),l&&e.createElement(hl,{componentValue:b,componentValueLength:T,componentUid:r,isReadOnly:E,max:p,min:u,name:m})))};Hn.defaultProps={componentValue:null,hasChildrenAllowedFields:!1,hasChildrenReadableFields:!1,intlLabel:void 0,isFromDynamicZone:!1,isReadOnly:!1,isRepeatable:!1,isNested:!1,labelAction:void 0,max:1/0,min:-1/0,required:!1},Hn.propTypes={addNonRepeatableComponentToField:n().func.isRequired,componentUid:n().string.isRequired,componentValue:n().oneOfType([n().object,n().array]),hasChildrenAllowedFields:n().bool,hasChildrenReadableFields:n().bool,isCreatingEntry:n().bool.isRequired,isFromDynamicZone:n().bool,isReadOnly:n().bool,isRepeatable:n().bool,isNested:n().bool,intlLabel:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired,values:n().object}),labelAction:n().element,max:n().number,min:n().number,name:n().string.isRequired,removeComponentFromField:n().func.isRequired,required:n().bool};const yl=(0,e.memo)(Hn,xe());var Xt=Xs(yl,ea);const bl=(0,N.ZP)(F.k)`
  /* 
    we need to remove the background from the button but we can't 
    wrap the element in styled because it breaks the forwardedAs which
    we need for drag handler to work on firefox
  */
  div[role='button'] {
    background: transparent;
  }
`,El=(0,N.ZP)(ye.h)`
  background-color: transparent;

  svg path {
    fill: ${({theme:t,expanded:r})=>r?t.colors.primary600:t.colors.neutral600};
  }
`,vl=(0,N.ZP)(S.x)`
  > div:first-child {
    box-shadow: ${({theme:t})=>t.shadows.tableShadow};
  }
`,Cl=(0,N.ZP)(S.x)`
  border-radius: 0 0 ${({theme:t})=>t.spaces[1]} ${({theme:t})=>t.spaces[1]};
`,Rl=(0,N.ZP)(S.x)`
  width: ${({theme:t})=>t.spaces[2]};
  height: ${({theme:t})=>t.spaces[4]};
`,Ml=N.ZP.span`
  display: block;
  background-color: ${({theme:t})=>t.colors.primary100};
  outline: 1px dashed ${({theme:t})=>t.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:t})=>t.spaces[6]};
`,Tl=(0,N.ZP)(S.x)`
  list-style: none;
  padding: 0;
  margin: 0;
`,Qn=({componentUid:t,formErrors:r,index:o,isFieldAllowed:s,name:a,onRemoveComponentClick:l,onMoveComponent:i,onGrabItem:c,onDropItem:p,onCancel:u})=>{const[m,f]=(0,e.useState)(!0),{formatMessage:g}=(0,H.Z)(),{getComponentLayout:E}=(0,de.PL)(),{modifiedData:b}=(0,h.Wq)(),{icon:v,friendlyName:M,mainValue:D}=(0,e.useMemo)(()=>{const W=E(t),{info:{icon:Y,displayName:q}}=W,z=P()(W,["settings","mainField"],"id"),x=P()(b,[a,o,z])??"",O=z==="id"?"":String(x).trim(),j=O.length>0?` - ${O}`:O;return{friendlyName:q,icon:Y,mainValue:j}},[t,E,b,a,o]),T=Object.keys(r).filter(W=>{const Y=W.split(".");return`${Y[0]}.${Y[1]}`==`${a}.${o}`});let w;T.length>0&&(w=g({id:(0,y.OB)("components.DynamicZone.error-message"),defaultMessage:"The component contains error(s)"}));const I=()=>{f(W=>!W)},[{handlerId:C,isDragging:R,handleKeyDown:L},B,U,A,G]=(0,de.Y9)(s,{type:`${y._Q.DYNAMIC_ZONE}_${a}`,index:o,item:{displayedValue:`${M}${D}`,icon:v},onMoveItem:i,onGrabItem:c,onDropItem:p,onCancel:u});(0,e.useEffect)(()=>{G((0,xt.rX)(),{captureDraggingState:!1})},[G,o]);const $=(0,y.FE)(B,U),K=s?e.createElement(bl,{gap:0,expanded:m},e.createElement(El,{noBorder:!0,label:g({id:(0,y.OB)("components.DynamicZone.delete-label"),defaultMessage:"Delete {name}"},{name:M}),onClick:l},e.createElement(He.Z,null)),e.createElement(ye.h,{forwardedAs:"div",role:"button",noBorder:!0,tabIndex:0,onClick:W=>W.stopPropagation(),"data-handler-id":C,ref:A,label:g({id:(0,y.OB)("components.DragHandle-label"),defaultMessage:"Drag"}),onKeyDown:L},e.createElement(Je.Z,null))):null;return e.createElement(Tl,{as:"li"},e.createElement(F.k,{justifyContent:"center"},e.createElement(Rl,{background:"neutral200"})),e.createElement(vl,{ref:$,hasRadius:!0},R?e.createElement(Ml,{padding:6,background:"primary100"}):e.createElement(mn.U,{expanded:m,onToggle:I,size:"S",error:w},e.createElement(pn.B,{action:K,title:`${M}${D}`,togglePosition:"left"}),e.createElement(gn.v,null,e.createElement(Cl,{background:"neutral0"},e.createElement(Xt,{componentUid:t,icon:v,name:`${a}.${o}`,isFromDynamicZone:!0}))))))};Qn.defaultProps={formErrors:{},index:0,isFieldAllowed:!0,onGrabItem:void 0,onDropItem:void 0,onCancel:void 0},Qn.propTypes={componentUid:n().string.isRequired,formErrors:n().object,index:n().number,isFieldAllowed:n().bool,name:n().string.isRequired,onGrabItem:n().func,onDropItem:n().func,onCancel:n().func,onMoveComponent:n().func.isRequired,onRemoveComponentClick:n().func.isRequired};var Dl=Qn;const Gn=(0,N.ZP)(zr.Z)`
  transform: ${({$isOpen:t})=>t?"rotate(45deg)":"rotate(0deg)"};
  > circle {
    fill: ${({theme:t,$hasError:r})=>r?t.colors.danger200:t.colors.neutral150};
  }
  > path {
    fill: ${({theme:t,$hasError:r})=>r?t.colors.danger600:t.colors.neutral600};
  }
`,Il=(0,N.ZP)(vn.Y)`
  border-radius: 26px;
  border-color: ${({theme:t})=>t.colors.neutral150};
  background: ${({theme:t})=>t.colors.neutral0};
  padding-top: ${({theme:t})=>t.spaces[3]};
  padding-right: ${({theme:t})=>t.spaces[4]};
  padding-bottom: ${({theme:t})=>t.spaces[3]};
  padding-left: ${({theme:t})=>t.spaces[4]};

  box-shadow: ${({theme:t})=>t.shadows.filterShadow};

  svg {
    height: ${({theme:t})=>t.spaces[6]};
    width: ${({theme:t})=>t.spaces[6]};
    > path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
  &:hover {
    color: ${({theme:t})=>t.colors.primary600} !important;
    ${Q.Z} {
      color: ${({theme:t})=>t.colors.primary600} !important;
    }

    ${Gn} {
      > circle {
        fill: ${({theme:t})=>t.colors.primary600};
      }
      > path {
        fill: ${({theme:t})=>t.colors.neutral100};
      }
    }
  }
  &:active {
    ${Q.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }
    ${Gn} {
      > circle {
        fill: ${({theme:t})=>t.colors.primary600};
      }
      > path {
        fill: ${({theme:t})=>t.colors.neutral100};
      }
    }
  }
`,kl=(0,N.ZP)(S.x)`
  height: 100%;
`,Kn=({hasError:t,hasMaxError:r,hasMinError:o,isDisabled:s,isOpen:a,label:l,missingComponentNumber:i,name:c,onClick:p})=>{const{formatMessage:u}=(0,H.Z)(),m=u({id:(0,y.OB)("components.DynamicZone.add-component"),defaultMessage:"Add a component to {componentName}"},{componentName:l||c}),f=u({id:"app.utils.close-label",defaultMessage:"Close"});let g=a?f:m;return r&&!a&&(g=u({id:"components.Input.error.validation.max",defaultMessage:"The value is too high."})),o&&!a&&(g=u({id:(0,y.OB)("components.DynamicZone.missing-components"),defaultMessage:"There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}"},{number:i})),e.createElement(F.k,{justifyContent:"center"},e.createElement(S.x,{style:{cursor:s?"not-allowed":"pointer"}},e.createElement(Il,{type:"button",onClick:p,disabled:s,hasError:t},e.createElement(F.k,null,e.createElement(kl,{"aria-hidden":!0,paddingRight:2},e.createElement(Gn,{$isOpen:a,$hasError:t&&!a})),e.createElement(Q.Z,{variant:"pi",fontWeight:"bold",textColor:t&&!a?"danger600":"neutral500"},g)))))};Kn.defaultProps={hasError:!1,hasMaxError:!1,hasMinError:!1,isDisabled:!1,isOpen:!1,label:"",missingComponentNumber:0},Kn.propTypes={label:n().string,hasError:n().bool,hasMaxError:n().bool,hasMinError:n().bool,isDisabled:n().bool,isOpen:n().bool,missingComponentNumber:n().number,name:n().string.isRequired,onClick:n().func.isRequired};var xl=Kn;const Ol=(0,N.ZP)(S.x)`
  border-radius: ${(0,h.Q1)(26)};
`,Yn=({label:t,labelAction:r,name:o,numberOfComponents:s,required:a,intlDescription:l})=>{const{formatMessage:i}=(0,H.Z)(),c=i({id:t||o,defaultMessage:t||o});return e.createElement(F.k,{justifyContent:"center"},e.createElement(S.x,null,e.createElement(Ol,{paddingTop:3,paddingBottom:3,paddingRight:4,paddingLeft:4,background:"neutral0",shadow:"filterShadow",color:"neutral500"},e.createElement(F.k,{direction:"column",justifyContent:"center"},e.createElement(F.k,{maxWidth:(0,h.Q1)(356)},e.createElement(Q.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold",ellipsis:!0},c,"\xA0"),e.createElement(Q.Z,{variant:"pi",textColor:"neutral600",fontWeight:"bold"},"(",s,")"),a&&e.createElement(Q.Z,{textColor:"danger600"},"*"),r&&e.createElement(S.x,{paddingLeft:1},r)),l&&e.createElement(S.x,{paddingTop:1,maxWidth:(0,h.Q1)(356)},e.createElement(Q.Z,{variant:"pi",textColor:"neutral600",ellipsis:!0},i(l)))))))};Yn.defaultProps={intlDescription:void 0,label:"",labelAction:void 0,numberOfComponents:0,required:!1},Yn.propTypes={intlDescription:n().shape({id:n().string.isRequired,defaultMessage:n().string.isRequired}),label:n().string,labelAction:n().element,name:n().string.isRequired,numberOfComponents:n().number,required:n().bool};var Pl=Yn,wl=d(81346),Ro=d.n(wl);const Jt=5,_t=8,Fl=(0,N.ZP)(F.k)`
  border-radius: ${({showBackground:t})=>t?"50%":0};
  color: ${({theme:t})=>t.colors.neutral600};
  height: ${({theme:t,size:r})=>t.spaces[r==="S"?Jt:_t]};
  width: ${({theme:t,size:r})=>t.spaces[r==="S"?Jt:_t]};

  svg {
    height: ${({theme:t,size:r})=>t.spaces[r==="S"?Jt-2:_t-3]};
    width: ${({theme:t,size:r})=>t.spaces[r==="S"?Jt-2:_t-3]};
  }
`;function en({showBackground:t=!0,size:r="M"}){return e.createElement(Fl,{alignItems:"center",background:t?"neutral200":null,justifyContent:"center",size:r,showBackground:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},e.createElement("path",{d:"M216.3 2c4.8-2.6 10.5-2.6 15.3 0L422.3 106c5.1 2.8 8.3 8.2 8.3 14s-3.2 11.2-8.3 14L231.7 238c-4.8 2.6-10.5 2.6-15.3 0L25.7 134c-5.1-2.8-8.3-8.2-8.3-14s3.2-11.2 8.3-14L216.3 2zM23.7 170l176 96c5.1 2.8 8.3 8.2 8.3 14V496c0 5.6-3 10.9-7.8 13.8s-10.9 3-15.8 .3L8.3 414C3.2 411.2 0 405.9 0 400V184c0-5.6 3-10.9 7.8-13.8s10.9-3 15.8-.3zm400.7 0c5-2.7 11-2.6 15.8 .3s7.8 8.1 7.8 13.8V400c0 5.9-3.2 11.2-8.3 14l-176 96c-5 2.7-11 2.6-15.8-.3s-7.8-8.1-7.8-13.8V280c0-5.9 3.2-11.2 8.3-14l176-96z",fill:"currentColor"})))}en.defaultProps={showBackground:!0,size:"M"},en.propTypes={showBackground:n().bool,size:n().string};const Ll=(0,N.ZP)(S.x)`
  flex-shrink: 0;
  height: ${(0,h.Q1)(84)};
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};

    ${Q.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    /* > Flex > ComponentIcon */
    > div > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`;function Xn({children:t,onClick:r}){return e.createElement(Ll,{as:"button",type:"button",onClick:r,hasRadius:!0},e.createElement(F.k,{direction:"column",gap:1,alignItems:"center",justifyContent:"center"},e.createElement(en,null),e.createElement(Q.Z,{variant:"pi",fontWeight:"bold",textColor:"neutral600"},t)))}Xn.defaultProps={onClick(){}},Xn.propTypes={children:n().node.isRequired,onClick:n().func};const Sl=N.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, ${140/16}rem);
  grid-gap: ${({theme:t})=>t.spaces[1]};
`,Jn=({category:t,components:r,variant:o,isOpen:s,onAddComponent:a,onToggle:l})=>{const{formatMessage:i}=(0,H.Z)(),c=()=>{l(t)};return e.createElement(mn.U,{expanded:s,onToggle:c,size:"S"},e.createElement(pn.B,{variant:o,title:i({id:t,defaultMessage:t}),togglePosition:"left"}),e.createElement(gn.v,null,e.createElement(S.x,{paddingTop:4,paddingBottom:4,paddingLeft:3,paddingRight:3},e.createElement(Sl,null,r.map(({componentUid:p,info:{displayName:u}})=>e.createElement(Xn,{key:p,onClick:a(p)},i({id:u,defaultMessage:u})))))))};Jn.defaultProps={components:[],isOpen:!1,variant:"primary"},Jn.propTypes={category:n().string.isRequired,components:n().array,isOpen:n().bool,onAddComponent:n().func.isRequired,onToggle:n().func.isRequired,variant:n().oneOf(["primary","secondary"])};var Al=Jn;const _n=({components:t,isOpen:r,onClickAddComponent:o})=>{const{formatMessage:s}=(0,H.Z)(),{getComponentLayout:a}=(0,de.PL)(),[l,i]=(0,e.useState)(""),c=(0,e.useMemo)(()=>{const m=t.map(g=>{const{category:E,info:b}=a(g);return{componentUid:g,category:E,info:b}}),f=Ro()(m,"category");return Object.keys(f).reduce((g,E)=>(g.push({category:E,components:f[E]}),g),[])},[t,a]);(0,e.useEffect)(()=>{r&&c.length>0&&i(c[0].category)},[r,c]);const p=m=>()=>{o(m),i("")},u=m=>{i(f=>f===m?"":m)};return r?e.createElement(S.x,{paddingBottom:6},e.createElement(S.x,{paddingTop:6,paddingBottom:6,paddingLeft:5,paddingRight:5,background:"neutral0",shadow:"tableShadow",borderColor:"neutral150",hasRadius:!0},e.createElement(F.k,{justifyContent:"center"},e.createElement(Q.Z,{fontWeight:"bold",textColor:"neutral600"},s({id:(0,y.OB)("components.DynamicZone.ComponentPicker-label"),defaultMessage:"Pick one component"}))),e.createElement(S.x,{paddingTop:2},e.createElement(Co.k,{attributeName:"data-strapi-accordion-toggle"},c.map(({category:m,components:f},g)=>e.createElement(Al,{key:m,category:m,components:f,onAddComponent:p,isOpen:m===l,onToggle:u,variant:g%2===1?"primary":"secondary"})))))):null};_n.defaultProps={components:[],isOpen:!1},_n.propTypes={components:n().array,isOpen:n().bool,onClickAddComponent:n().func.isRequired};var $l=_n;const er=({name:t,addComponentToDynamicZone:r,formErrors:o,isCreatingEntry:s,isFieldAllowed:a,isFieldReadable:l,labelAction:i,moveComponentField:c,removeComponentFromDynamicZone:p,dynamicDisplayedComponents:u,fieldSchema:m,metadatas:f})=>{const[g,E]=(0,e.useState)(!1),[b,v]=(0,e.useState)(""),{formatMessage:M}=(0,H.Z)(),D=(0,h.lm)(),{getComponentLayout:T,components:w}=(0,de.PL)(),I=u.length,C=f.description?{id:f.description,defaultMessage:f.description}:null,{max:R=1/0,min:L=-1/0}=m,B=(0,e.useMemo)(()=>Object.keys(o).filter(k=>k===t).map(k=>o[k]),[o,t]),U=L-I,A=B.length>0,G=B.length>0&&P()(B,[0,"id"],"").includes("min"),$=A&&P()(B,[0,"id"],"")==="components.Input.error.validation.max",K=k=>{E(!1);const Z=T(k);r(t,Z,w,A)},W=()=>{I<R?E(k=>!k):D({type:"info",message:{id:(0,y.OB)("components.notification.info.maximum-requirement")}})},Y=(k,Z)=>{v(M({id:(0,y.OB)("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:`${t}.${Z}`,position:q(k)})),c({name:t,newIndex:k,currentIndex:Z})},q=k=>`${k+1} of ${u.length}`,z=k=>{v(M({id:(0,y.OB)("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:`${t}.${k}`}))},x=k=>{v(M({id:(0,y.OB)("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:`${t}.${k}`,position:q(k)}))},O=k=>{v(M({id:(0,y.OB)("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:`${t}.${k}`,position:q(k)}))},j=(k,Z)=>()=>{p(k,Z)};if(!a&&(s||!l&&!s))return e.createElement(h.X0,{description:C,intlLabel:{id:f.label,defaultMessage:f.label},labelAction:i,name:t});const X=`${t}-item-instructions`;return e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:6},I>0&&e.createElement(S.x,null,e.createElement(Pl,{intlDescription:C,label:f.label,labelAction:i,name:t,numberOfComponents:I,required:m.required||!1}),e.createElement(pt.T,{id:X},M({id:(0,y.OB)("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})),e.createElement(pt.T,{"aria-live":"assertive"},b),e.createElement("ol",{"aria-describedby":X},u.map(({componentUid:k,id:Z},ne)=>e.createElement(Dl,{componentUid:k,formErrors:o,key:`${k}-${Z}`,index:ne,isFieldAllowed:a,name:t,onMoveComponent:Y,onRemoveComponentClick:j(t,ne),onCancel:z,onDropItem:O,onGrabItem:x})))),e.createElement(xl,{hasError:A,hasMaxError:$,hasMinError:G,isDisabled:!a,label:f.label,missingComponentNumber:U,isOpen:g,name:t,onClick:W}),e.createElement($l,{isOpen:g,components:m.components??[],onClickAddComponent:K}))};er.defaultProps={dynamicDisplayedComponents:[],fieldSchema:{max:1/0,min:-1/0},labelAction:null},er.propTypes={addComponentToDynamicZone:n().func.isRequired,dynamicDisplayedComponents:n().arrayOf(n().shape({componentUid:n().string.isRequired,id:n().number.isRequired})),fieldSchema:n().shape({components:n().array.isRequired,max:n().number,min:n().number,required:n().bool}),formErrors:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isFieldAllowed:n().bool.isRequired,isFieldReadable:n().bool.isRequired,labelAction:n().element,metadatas:n().shape({description:n().string,label:n().string}).isRequired,moveComponentField:n().func.isRequired,name:n().string.isRequired,removeComponentFromDynamicZone:n().func.isRequired};const Zl=(0,e.memo)(er,xe());var Bl=Us(Zl,Qs),ze=d(84306),_e=d(41578);const tn=()=>({type:_e.ZA}),tr=t=>({type:_e.Id,data:t}),nr=(t,r=!1)=>({type:_e.TP,rawQuery:t,isSingleType:r}),Mo=()=>({type:_e.c2}),To=(t,r)=>({type:_e.w7,componentsDataStructure:t,contentTypeDataStructure:r}),ce=t=>({type:_e.d0,status:t}),et=t=>({type:_e.t9,data:t}),ql=()=>({type:_e.tE});var rr=t=>t["content-manager_editViewCrudReducer"];const or=({allLayoutData:t,children:r,slug:o,id:s,origin:a})=>{const l=(0,st.useQueryClient)(),i=(0,h.lm)(),{setCurrentStep:c}=(0,h.c1)(),{trackUsage:p}=(0,h.rS)(),{push:u,replace:m}=(0,te.k6)(),[{rawQuery:f}]=(0,h.Kx)(),g=(0,_.I0)(),{componentsDataStructure:E,contentTypeDataStructure:b,data:v,isLoading:M,status:D}=(0,_.v9)(rr),T=(0,de.Ky)(o),{formatAPIError:w}=(0,h.So)(y.OB),I=(0,e.useRef)(!0),C=(0,e.useRef)(p),R=(0,e.useRef)(t),L=(0,h.kY)(),{put:B,post:U,del:A}=L,G=s===null,$=(0,e.useMemo)(()=>G&&!a?null:(0,y.IF)(`collection-types/${o}/${a||s}`),[o,s,G,a]),K=(0,e.useCallback)(k=>a?(0,h.w6)(k,R.current.contentType,R.current.components):k,[a]),W=(0,e.useCallback)(k=>{const Z=(0,y.kc)(k,R.current.contentType,R.current.components);return(0,h.dU)(Z,R.current.contentType,R.current.components)},[]);(0,e.useEffect)(()=>{const k=Object.keys(t.components).reduce((J,ae)=>{const V=(0,y.Di)(P()(t,["components",ae,"attributes"],{}),t.components);return J[ae]=(0,h.dU)(V,t.components[ae],t.components),J},{}),Z=(0,y.Di)(t.contentType.attributes,t.components),ne=(0,h.dU)(Z,t.contentType,t.components);g(To(k,ne))},[t,g]),(0,e.useEffect)(()=>()=>{g(Mo())},[g]),(0,e.useEffect)(()=>{const Z=ze.default.CancelToken.source(),ne=async ae=>{g(tn());try{const{data:V}=await L.get($,{cancelToken:ae.token});g(tr(W(K(V))))}catch(V){if(ze.default.isCancel(V))return;const ie=P()(V,"response.status",null);if(ie===404){u(T);return}ie===403&&(i({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}}),u(T))}},J=async()=>{await g(tn()),await g(nr(f))};return I.current?($?ne(Z):J(),()=>{Z.cancel("Operation canceled by the user.")}):()=>{}},[L,K,W,u,$,g,f,T,i]);const Y=(0,e.useCallback)(k=>{i({type:"warning",message:w(k)})},[i,w]),q=(0,e.useCallback)(async k=>{try{C.current("willDeleteEntry",k);const{data:Z}=await A((0,y.IF)(`collection-types/${o}/${s}`));return i({type:"success",message:{id:(0,y.OB)("success.record.delete")}}),C.current("didDeleteEntry",k),m(T),Promise.resolve(Z)}catch(Z){return C.current("didNotDeleteEntry",{error:Z,...k}),Promise.reject(Z)}},[s,o,i,A,T,m]),z=(0,e.useCallback)(async(k,Z)=>{const ne=`${(0,y.IF)(`collection-types/${o}`)}${f}`;try{g(ce("submit-pending"));const{data:J}=await U(ne,k);return C.current("didCreateEntry",Z),i({type:"success",message:{id:(0,y.OB)("success.record.save")}}),c("contentManager.success"),l.invalidateQueries(["relation"]),g(et(W(J))),g(ce("resolved")),m(`/content-manager/collectionType/${o}/${J.id}${f}`),Promise.resolve(J)}catch(J){return Y(J),C.current("didNotCreateEntry",{error:J,trackerProperty:Z}),g(ce("resolved")),Promise.reject(J)}},[W,Y,m,o,g,f,i,c,l,U]),x=(0,e.useCallback)(async()=>{try{C.current("willCheckDraftRelations");const k=(0,y.IF)(`collection-types/${o}/${s}/actions/numberOfDraftRelations`);g(ce("draft-relation-check-pending"));const Z=await L.get(k);return C.current("didCheckDraftRelations"),g(ce("resolved")),Z.data.data}catch(k){return Y(k),g(ce("resolved")),Promise.reject(k)}},[Y,s,o,g,L]),O=(0,e.useCallback)(async()=>{try{C.current("willPublishEntry");const k=(0,y.IF)(`collection-types/${o}/${s}/actions/publish`);g(ce("publish-pending"));const{data:Z}=await U(k);return C.current("didPublishEntry"),g(et(W(Z))),g(ce("resolved")),i({type:"success",message:{id:(0,y.OB)("success.record.publish")}}),Promise.resolve(Z)}catch(k){return Y(k),g(ce("resolved")),Promise.reject(k)}},[W,Y,s,o,g,i,U]),j=(0,e.useCallback)(async(k,Z)=>{const ne=(0,y.IF)(`collection-types/${o}/${s}`);try{C.current("willEditEntry",Z),g(ce("submit-pending"));const{data:J}=await B(ne,k);return C.current("didEditEntry",{trackerProperty:Z}),i({type:"success",message:{id:(0,y.OB)("success.record.save")}}),l.invalidateQueries(["relation"]),g(et(W(J))),g(ce("resolved")),Promise.resolve(J)}catch(J){return C.current("didNotEditEntry",{error:J,trackerProperty:Z}),Y(J),g(ce("resolved")),Promise.reject(J)}},[W,Y,o,s,g,i,l,B]),X=(0,e.useCallback)(async()=>{const k=(0,y.IF)(`collection-types/${o}/${s}/actions/unpublish`);g(ce("unpublish-pending"));try{C.current("willUnpublishEntry");const{data:Z}=await U(k);return C.current("didUnpublishEntry"),i({type:"success",message:{id:(0,y.OB)("success.record.unpublish")}}),g(et(W(Z))),g(ce("resolved")),Promise.resolve(Z)}catch(Z){return g(ce("resolved")),Y(Z),Promise.reject(Z)}},[W,Y,s,o,g,i,U]);return r({componentsDataStructure:E,contentTypeDataStructure:b,data:v,isCreatingEntry:G,isLoadingForData:M,onDelete:q,onPost:z,onPublish:O,onDraftRelationCheck:x,onPut:j,onUnpublish:X,status:D,redirectionLink:T})};or.defaultProps={id:null,origin:null},or.propTypes={allLayoutData:n().exact({components:n().object.isRequired,contentType:n().shape({apiID:n().string.isRequired,attributes:n().object.isRequired,info:n().object.isRequired,isDisplayed:n().bool.isRequired,kind:n().string.isRequired,layouts:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,pluginOptions:n().object,settings:n().object.isRequired,uid:n().string.isRequired}).isRequired}).isRequired,children:n().func.isRequired,id:n().string,origin:n().string,slug:n().string.isRequired};var Nl=(0,e.memo)(or,xe()),jl=d(86834),Re=d.n(jl),Wl=d(99381),Qe=d.n(Wl),zl=d(89793),Lt=d.n(zl),Vl=d(3040),se=d.n(Vl),sr=d(97889),Ul=d(56236),Hl=d.n(Ul),Ql=d(10268),Do=d.n(Ql),ar=d(99526),Io=(t,r,o,s)=>{const a=t.slice();return a.splice(r,1),a.splice(o,0,s),a},Gl=d(77236),Kl=d.n(Gl),Yl=d(85973),Xl=d.n(Yl);const Jl=({browserState:t,serverState:r},o,s)=>{const a=r,l=t,i=(u,m)=>P()(u,["attributes",m,"type"],""),c=(u,m)=>P()(u,["attributes",...m],""),p=(u,m,f,g)=>Object.keys(u).reduce((E,b)=>{const v=g?`${g}.${b}`:b,M=i(f,b),D=P()(u,b),T=P()(m,b),w=c(f,[b,"component"]),I=c(f,[b,"repeatable"]);let C;switch(M){case"json":C=JSON.parse(D);break;case"time":{C=D,D&&D.split(":").length<3&&(C=`${D}:00`);break}case"media":c(f,[b,"multiple"])===!0?C=D?D.filter(R=>!(R instanceof File)):null:C=P()(D,0)instanceof File?null:P()(D,"id",null);break;case"component":I?C=D&&D.map((R,L)=>p(R,(T??[])[L],s[w],`${v}.${L}`)):C=D&&p(D,T,s[w],v);break;case"relation":{const R=bo(a,l)(v).join(".");let L=P()(a,R,[]);const B=D.reduce((A,G,$,K)=>{const W=L.find(q=>q.id===G.id),Y=K[$+1];if(!W||W.__temp_key__!==G.__temp_key__){const q=Y?{before:Y.id}:{end:!0};return[...A,{id:G.id,position:q}]}return A},[]);C={disconnect:L.reduce((A,G)=>D.find($=>$.id===G.id)?A:[...A,{id:G.id}],[]),connect:B.reverse()};break}case"dynamiczone":C=D.map((R,L)=>p(R,(T??[])[L],s[R.__component],`${v}.${L}`));break;default:C=_l(D,"id")}return E[b]=C,E},{});return p(t,r,o,"")},_l=(t,r)=>Kl()(t)?t.map(o=>o[r]?o[r]:o):Xl()(t)?t[r]:t;var ec=Jl,tc=d(51355),nc=d.n(tc),rc=d(95919),oc=d.n(rc),sc=d(78746),ht=d.n(sc),pe=d(24346);function St(t){return["integer","biginteger","decimal","float","number"].includes(t)}pe.kM(pe.nK,"defined",function(){return this.test("defined",h.I0.required,t=>t!==void 0)}),pe.kM(pe.IX,"notEmptyMin",function(t){return this.test("notEmptyMin",h.I0.min,r=>Re()(r)?!0:r.length>=t)}),pe.kM(pe.Z_,"isInferior",function(t,r){return this.test("isInferior",t,function(o){return!o||Number.isNaN(ht()(o))?!0:ht()(r)>=ht()(o)})}),pe.kM(pe.Z_,"isSuperior",function(t,r){return this.test("isSuperior",t,function(o){return!o||Number.isNaN(ht()(o))?!0:ht()(o)>=ht()(r)})});const ac=t=>P()(t,["attributes"],{}),ir=(t,{components:r},o={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const s=ac(t);return pe.Ry().shape(Object.keys(s).reduce((a,l)=>{const i=s[l];if(i.type!=="relation"&&i.type!=="component"&&i.type!=="dynamiczone"){const c=ic(i.type,i,o);a[l]=c}if(i.type==="relation"&&(a[l]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(i.relationType)?pe.Ry().nullable():pe.IX().nullable()),i.type==="component"){const c=ir(r[i.component],{components:r},{...o,isFromComponent:!0});if(i.repeatable===!0){const{min:u,max:m,required:f}=i;let g=pe.Vo(E=>{let b=pe.IX().of(c);return u?f?b=b.min(u,h.I0.min):f!==!0&&Re()(E)?b=b.nullable():b=b.min(u,h.I0.min):f&&!o.isDraft&&(b=b.min(1,h.I0.required)),m&&(b=b.max(m,h.I0.max)),b});return a[l]=g,a}const p=pe.Vo(u=>u!==void 0?i.required===!0&&!o.isDraft?c.defined():c.nullable():i.required===!0?pe.Ry().defined():pe.Ry().nullable());return a[l]=p,a}if(i.type==="dynamiczone"){let c=pe.IX().of(pe.Vo(({__component:m})=>ir(r[m],{components:r},{...o,isFromComponent:!0})));const{max:p,min:u}=i;u?i.required?c=c.test("min",h.I0.min,m=>o.isCreatingEntry?m&&m.length>=u:m===void 0?!0:m!==null&&m.length>=u).test("required",h.I0.required,m=>o.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null):c=c.notEmptyMin(u):i.required&&!o.isDraft&&(c=c.test("required",h.I0.required,m=>o.isCreatingEntry?m!==null||m!==void 0:m===void 0?!0:m!==null)),p&&(c=c.max(p,h.I0.max)),a[l]=c}return a},{}))},ic=(t,r,o)=>{let s=pe.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(t)&&(s=pe.Z_()),t==="json"&&(s=pe.nK(h.I0.json).test("isJSON",h.I0.json,a=>{if(!a||!a.length)return!0;try{return JSON.parse(a),!0}catch{return!1}}).nullable().test("required",h.I0.required,a=>!(r.required&&(!a||!a.length)))),t==="email"&&(s=s.email(h.I0.email)),["number","integer","float","decimal"].includes(t)&&(s=pe.Rx().transform(a=>oc()(a)?void 0:a).typeError()),t==="biginteger"&&(s=pe.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(t)&&(s=pe.hT()),Object.keys(r).forEach(a=>{const l=r[a];if(l||!nc()(l)&&Number.isInteger(Math.floor(l))||l===0)switch(a){case"required":{o.isDraft||(t==="password"&&o.isCreatingEntry&&(s=s.required(h.I0.required)),t!=="password"&&(o.isCreatingEntry?s=s.required(h.I0.required):s=s.test("required",h.I0.required,i=>i===void 0&&!o.isFromComponent?!0:St(t)?i===0?!0:!!i:t==="boolean"?i!=null:t==="date"||t==="datetime"?typeof i=="string"?!Re()(i):!Re()(i?.toString()):!Re()(i))));break}case"max":{t==="biginteger"?s=s.isInferior(h.I0.max,l):s=s.max(l,h.I0.max);break}case"maxLength":s=s.max(l,h.I0.maxLength);break;case"min":{t==="biginteger"?s=s.isSuperior(h.I0.min,l):s=s.min(l,h.I0.min);break}case"minLength":{o.isDraft||(s=s.min(l,h.I0.minLength));break}case"regex":s=s.matches(new RegExp(l),{message:h.I0.regex,excludeEmptyString:!r.required});break;case"lowercase":["text","textarea","email","string"].includes(t)&&(s=s.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(t)&&(s=s.strict().uppercase());break;case"positive":St(t)&&(s=s.positive());break;case"negative":St(t)&&(s=s.negative());break;default:s=s.nullable()}}),s};var ko=ir;const nn=(t,r=()=>!1,o=void 0)=>{const s=(a,l,{ignoreFalseyValues:i=!1,path:c=[],parent:p=l}={})=>Object.entries(l).reduce((u,[m,f])=>{if(i&&(u==null||u[m]===void 0||u[m]===null))return u;if(r(f,{path:[...c,m],parent:p})&&(u[m]=typeof o=="function"?o(u[m],{path:[...c,m],parent:u}):o),f.type==="component"){const g=t[f.component].attributes;!f.repeatable&&u[m]&&typeof u[m]=="object"?u[m]=s(u[m],g,{ignoreFalseyValues:i,path:[...c,m],parent:l[m]}):f.repeatable&&Array.isArray(u[m])&&(u[m]=u[m].map((E,b)=>s(E,g,{ignoreFalseyValues:i,path:[...c,m,b],parent:l[m]})))}else f.type==="dynamiczone"&&Array.isArray(u[m])&&(u[m]=u[m].map((g,E)=>{const b=t[g.__component].attributes;return s(g,b,{ignoreFalseyValues:i,path:[...c,m,E],parent:l[m]})}));return u},{...a});return s},lc={componentsDataStructure:{},contentTypeDataStructure:{},formErrors:{},initialData:{},modifiedData:null,shouldCheckErrors:!1,modifiedDZName:null,publishConfirmation:{show:!1,draftCount:0}};var cc=(t,r)=>(0,sr.ZP)(t,o=>{switch(r.type){case"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD":{const{componentLayoutData:s,allComponents:a}=r,l={...t.componentsDataStructure[s.uid]},c=nn(a,p=>p.type==="relation",[])(l,s.attributes);se()(o,["modifiedData",...r.keys],c);break}case"ADD_COMPONENT_TO_DYNAMIC_ZONE":case"ADD_REPEATABLE_COMPONENT_TO_FIELD":{const{keys:s,allComponents:a,componentLayoutData:l,shouldCheckErrors:i}=r;i&&(o.shouldCheckErrors=!t.shouldCheckErrors),r.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"&&(o.modifiedDZName=s[0]);const c=P()(t,["modifiedData",...s],[]),p=r.type==="ADD_COMPONENT_TO_DYNAMIC_ZONE"?{...t.componentsDataStructure[l.uid],__component:l.uid,__temp_key__:(0,y.Uo)(c)+1}:{...t.componentsDataStructure[l.uid],__temp_key__:(0,y.Uo)(c)+1},m=nn(a,g=>g.type==="relation",[])(p,l.attributes),f=Array.isArray(c)?[...c,m]:[m];se()(o,["modifiedData",...s],f);break}case"LOAD_RELATION":{const{initialDataPath:s,modifiedDataPath:a,value:l}=r,i=P()(t,s),c=P()(t,a),p=i?l.filter(f=>!i.some(g=>g.id===f.id)):l,u=(0,ar.zJ)(null,c[0]?.__temp_key__,p.length),m=p.map((f,g)=>({...f,__temp_key__:u[g]}));se()(o,s,Do()([...m,...i],"id")),se()(o,a,Do()([...m,...c],"id"));break}case"CONNECT_RELATION":{const s=["modifiedData",...r.keys],{value:a,toOneRelation:l}=r;if(l)se()(o,s,[a]);else{const i=P()(t,s),[c]=(0,ar.zJ)(i.at(-1)?.__temp_key__,null,1),p=[...i,{...a,__temp_key__:c}];se()(o,s,p)}break}case"DISCONNECT_RELATION":{const s=["modifiedData",...r.keys],{id:a}=r,i=P()(t,[...s]).filter(c=>c.id!==a);se()(o,s,i);break}case"MOVE_COMPONENT_FIELD":case"REORDER_RELATION":{const{oldIndex:s,newIndex:a,keys:l}=r,i=["modifiedData",...l],c=P()(t,[...i]),p=c[s],u=[...c];if(r.type==="REORDER_RELATION"){const m=s>a?c[a-1]?.__temp_key__:c[a]?.__temp_key__,f=s>a?c[a]?.__temp_key__:c[a+1]?.__temp_key__,[g]=(0,ar.zJ)(m,f,1);u.splice(s,1),u.splice(a,0,{...p,__temp_key__:g})}else u.splice(s,1),u.splice(a,0,p);se()(o,i,u);break}case"INIT_FORM":{const{initialValues:s,components:a={},attributes:l={},setModifiedDataOnly:i}=r,c=Qe()(s),u=nn(a,g=>g.type==="relation",(g,{path:E})=>t.modifiedData?.id===c.id&&P()(t.modifiedData,E)?P()(t.modifiedData,E):[])(c,l),f=nn(a,g=>g.type==="dynamiczone"||g.type==="component"&&!g.repeatable,g=>Array.isArray(g)?g.map((E,b)=>({...E,__temp_key__:b})):{...g,__temp_key__:0})(u,l,{ignoreFalseyValues:!0});i||(o.initialData=f),o.modifiedData=f,o.formErrors={},o.modifiedDZName=null,o.shouldCheckErrors=!1;break}case"MOVE_COMPONENT_UP":case"MOVE_COMPONENT_DOWN":{const{currentIndex:s,dynamicZoneName:a,shouldCheckErrors:l}=r;l&&(o.shouldCheckErrors=!t.shouldCheckErrors);const i=t.modifiedData[a],c=r.type==="MOVE_COMPONENT_UP"?s-1:s+1,p=t.modifiedData[a][s],u=Io(i,s,c,p);se()(o,["modifiedData",r.dynamicZoneName],u);break}case"MOVE_FIELD":{const s=P()(t,["modifiedData",...r.keys],[]).slice(),a=P()(t,["modifiedData",...r.keys,r.dragIndex]),l=Io(s,r.dragIndex,r.overIndex,a);se()(o,["modifiedData",...r.keys],l);break}case"ON_CHANGE":{const[s]=r.keys;if(r.shouldSetInitialValue&&se()(o,["initialData",...r.keys],r.value),r.keys.length===2&&P()(t,["modifiedData",s])===null){se()(o,["modifiedData",s],{[r.keys[1]]:r.value});break}se()(o,["modifiedData",...r.keys],r.value);break}case"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE":{r.shouldCheckErrors&&(o.shouldCheckErrors=!t.shouldCheckErrors),o.modifiedData[r.dynamicZoneName].splice(r.index,1);break}case"REMOVE_COMPONENT_FROM_FIELD":{const s=["modifiedData",...r.keys];se()(o,s,null);break}case"REMOVE_PASSWORD_FIELD":{Hl()(o,["modifiedData",...r.keys]);break}case"REMOVE_REPEATABLE_FIELD":{const s=r.keys.length-1,a=["modifiedData",...Ot()(r.keys,s)];Object.keys(t.formErrors).length>0&&(o.shouldCheckErrors=!t.shouldCheckErrors);const i=P()(t,a).slice();i.splice(parseInt(r.keys[s],10),1),se()(o,a,i);break}case"SET_DEFAULT_DATA_STRUCTURES":{o.componentsDataStructure=r.componentsDataStructure,o.contentTypeDataStructure=r.contentTypeDataStructure;break}case"SET_FORM_ERRORS":{o.modifiedDZName=null,o.formErrors=r.errors;break}case"TRIGGER_FORM_VALIDATION":{Object.keys(t.formErrors).length>0&&(o.shouldCheckErrors=!t.shouldCheckErrors);break}case"SET_PUBLISH_CONFIRMATION":{o.publishConfirmation={...r.publishConfirmation};break}case"RESET_PUBLISH_CONFIRMATION":{o.publishConfirmation={...t.publishConfirmation,show:!1};break}default:return o}});const lr=({allLayoutData:t,allowedActions:{canRead:r,canUpdate:o},children:s,componentsDataStructure:a,contentTypeDataStructure:l,createActionAllowedFields:i,from:c,initialValues:p,isCreatingEntry:u,isLoadingForData:m,isSingleType:f,onPost:g,onPublish:E,onDraftRelationCheck:b,onPut:v,onUnpublish:M,readActionAllowedFields:D,redirectToPreviousPage:T,slug:w,status:I,updateActionAllowedFields:C})=>{const[R,L]=(0,e.useReducer)(cc,lc),{formErrors:B,initialData:U,modifiedData:A,modifiedDZName:G,shouldCheckErrors:$,publishConfirmation:K}=R,{setModifiedDataOnly:W}=(0,_.v9)(rr),Y=(0,_.I0)(),q=(0,h.lm)(),{lockApp:z,unlockApp:x}=(0,h.o1)(),O=P()(t,["contentType"],{}),j=(0,e.useMemo)(()=>P()(O,["options","draftAndPublish"],!1),[O]),X=(0,e.useMemo)(()=>j&&!U.publishedAt,[j,U.publishedAt]),{trackUsage:k}=(0,h.rS)(),{formatMessage:Z}=(0,H.Z)(),ne=(0,e.useRef)(k),J=(0,e.useMemo)(()=>m||u?!1:r===!1&&o===!1,[m,u,r,o]);(0,e.useEffect)(()=>{I==="resolved"?x():z()},[z,x,I]),(0,e.useEffect)(()=>{m||Be()},[$]),(0,e.useEffect)(()=>{const oe=Object.keys(B);if(oe.length>0){const ee=oe[0],le=document.getElementById(ee);le&&le.focus()}},[B]),(0,e.useEffect)(()=>{J&&q({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}})},[J,q]),(0,e.useEffect)(()=>{L({type:"SET_DEFAULT_DATA_STRUCTURES",componentsDataStructure:a,contentTypeDataStructure:l})},[a,l]);const{components:ae}=t,V=(0,de.zH)(p);(0,e.useEffect)(()=>{p&&O?.attributes&&!Lt()(V,p)&&(L({type:"INIT_FORM",initialValues:p,components:ae,attributes:O.attributes,setModifiedDataOnly:W}),W&&Y(ql()))},[p,O,ae,W,Y,V]);const ie=(0,e.useCallback)(oe=>(ee,le,Ne,ct=!1)=>{ne.current("didAddComponentToDynamicZone"),L({type:oe,keys:ee.split("."),componentLayoutData:le,allComponents:Ne,shouldCheckErrors:ct})},[]),Me=ie("ADD_COMPONENT_TO_DYNAMIC_ZONE"),Ge=(0,e.useCallback)((oe,ee,le)=>{L({type:"ADD_NON_REPEATABLE_COMPONENT_TO_FIELD",keys:oe.split("."),componentLayoutData:ee,allComponents:le})},[]),Nt=(0,e.useCallback)(({name:oe,value:ee,toOneRelation:le})=>{L({type:"CONNECT_RELATION",keys:oe.split("."),value:ee,toOneRelation:le})},[]),jt=(0,e.useCallback)(({target:{initialDataPath:oe,modifiedDataPath:ee,value:le}})=>{L({type:"LOAD_RELATION",modifiedDataPath:ee,initialDataPath:oe,value:le})},[]),Wt=ie("ADD_REPEATABLE_COMPONENT_TO_FIELD"),Ae=(0,e.useMemo)(()=>{const oe={isCreatingEntry:u,isDraft:X,isFromComponent:!1};return ko(O,{components:t.components||{}},oe)},[t.components,O,u,X]),Be=(0,e.useCallback)(async(oe={})=>{let ee={};const le=Qe()(A);Re()(le)||se()(le,oe.path,oe.value);try{await Ae.validate(le,{abortEarly:!1})}catch(Ne){ee=(0,h.CJ)(Ne),G&&(ee=Object.keys(ee).reduce((ct,jr)=>(jr.split(".")[0]!==G&&(ct[jr]=ee[jr]),ct),{}))}L({type:"SET_FORM_ERRORS",errors:ee})},[G,A,Ae]),zt=(0,e.useCallback)(({target:{name:oe,value:ee,type:le}},Ne=!1)=>{let ct=ee;if(["text","textarea","string","email","uid","select","select-one","number"].includes(le)&&!ee&&ee!==0&&(ct=null),le==="password"&&!ee){L({type:"REMOVE_PASSWORD_FIELD",keys:oe.split(".")});return}L({type:"ON_CHANGE",keys:oe.split("."),value:ct,shouldSetInitialValue:Ne})},[]),tt=(0,e.useCallback)((oe,ee)=>ec({browserState:oe,serverState:ee},O,t.components),[t.components,O]),re=(0,e.useMemo)(()=>j?X?{status:"draft"}:{}:{},[j,X]),ge=(0,e.useCallback)(async oe=>(oe.preventDefault(),L({type:"RESET_PUBLISH_CONFIRMATION"})),[]),qe=(0,e.useCallback)(async oe=>{oe.preventDefault();let ee={};try{await Ae.validate(A,{abortEarly:!1})}catch(le){ee=(0,h.CJ)(le)}try{if(Re()(ee)){const le=tt(A,U);u?await g(le,re):await v(le,re)}}catch(le){ee={...ee,...(0,h.nn)(le,{getTrad:y.OB})}}L({type:"SET_FORM_ERRORS",errors:ee})},[tt,u,A,U,g,v,re,Ae]),Nr=(0,e.useCallback)(async()=>{const oe=ko(O,{components:P()(t,"components",{})},{isCreatingEntry:u,isDraft:!1,isFromComponent:!1}),ee=await b();if(!K.show&&ee>0){L({type:"SET_PUBLISH_CONFIRMATION",publishConfirmation:{show:!0,draftCount:ee}});return}L({type:"RESET_PUBLISH_CONFIRMATION"});let le={};try{await oe.validate(A,{abortEarly:!1})}catch(Ne){le=(0,h.CJ)(Ne)}try{Re()(le)&&await E()}catch(Ne){le={...le,...(0,h.nn)(Ne,{getTrad:y.OB})}}L({type:"SET_FORM_ERRORS",errors:le})},[t,O,u,A,K.show,E,b]),nt=(0,e.useCallback)(oe=>{const ee=Object.keys(B).some(Ne=>Ne.split(".")[0]===oe);return!Re()(B)&&ee},[B]),Em=(0,e.useCallback)((oe,ee)=>{ne.current("changeComponentsOrder"),L({type:"MOVE_COMPONENT_DOWN",dynamicZoneName:oe,currentIndex:ee,shouldCheckErrors:nt(oe)})},[nt]),vm=(0,e.useCallback)((oe,ee)=>{ne.current("changeComponentsOrder"),L({type:"MOVE_COMPONENT_UP",dynamicZoneName:oe,currentIndex:ee,shouldCheckErrors:nt(oe)})},[nt]),Cm=(0,e.useCallback)(({name:oe,newIndex:ee,currentIndex:le})=>{L({type:"MOVE_COMPONENT_FIELD",keys:oe.split("."),newIndex:ee,oldIndex:le})},[]),Rm=(0,e.useCallback)(({name:oe,id:ee})=>{L({type:"DISCONNECT_RELATION",keys:oe.split("."),id:ee})},[]),Mm=(0,e.useCallback)(({name:oe,oldIndex:ee,newIndex:le})=>{L({type:"REORDER_RELATION",keys:oe.split("."),oldIndex:ee,newIndex:le})},[]),Tm=(0,e.useCallback)((oe,ee)=>{ne.current("removeComponentFromDynamicZone"),L({type:"REMOVE_COMPONENT_FROM_DYNAMIC_ZONE",dynamicZoneName:oe,index:ee,shouldCheckErrors:nt(oe)})},[nt]),Dm=(0,e.useCallback)((oe,ee)=>{L({type:"REMOVE_COMPONENT_FROM_FIELD",keys:oe.split("."),componentUid:ee})},[]),Im=(0,e.useCallback)((oe,ee)=>{L({type:"REMOVE_REPEATABLE_FIELD",keys:oe.split("."),componentUid:ee})},[]),km=(0,e.useCallback)(()=>{L({type:"TRIGGER_FORM_VALIDATION"})},[]);return J?e.createElement(te.l_,{to:c}):A?e.createElement(h.W1.Provider,{value:{addComponentToDynamicZone:Me,addNonRepeatableComponentToField:Ge,addRepeatableComponentToField:Wt,allLayoutData:t,checkFormErrors:Be,createActionAllowedFields:i,formErrors:B,hasDraftAndPublish:j,initialData:U,isCreatingEntry:u,isSingleType:f,shouldNotRunValidations:X,status:I,layout:O,modifiedData:A,moveComponentField:Cm,moveComponentDown:Em,moveComponentUp:vm,onChange:zt,onPublish:Nr,onUnpublish:M,readActionAllowedFields:D,redirectToPreviousPage:T,removeComponentFromDynamicZone:Tm,removeComponentFromField:Dm,removeRepeatableField:Im,relationConnect:Nt,relationDisconnect:Rm,relationLoad:jt,relationReorder:Mm,slug:w,triggerFormValidation:km,updateActionAllowedFields:C,onPublishPromptDismissal:ge,publishConfirmation:K}},m||!u&&!U.id?e.createElement(Ce.o,{"aria-busy":"true"},e.createElement(h.dO,null)):e.createElement(e.Fragment,null,e.createElement(te.NL,{when:!Lt()(A,U),message:Z({id:"global.prompt.unsaved"})}),e.createElement("form",{noValidate:!0,onSubmit:qe},s))):null};lr.defaultProps={from:"/",initialValues:null,redirectToPreviousPage(){}},lr.propTypes={allLayoutData:n().object.isRequired,allowedActions:n().object.isRequired,children:n().node.isRequired,componentsDataStructure:n().object.isRequired,contentTypeDataStructure:n().object.isRequired,createActionAllowedFields:n().array.isRequired,from:n().string,initialValues:n().object,isCreatingEntry:n().bool.isRequired,isLoadingForData:n().bool.isRequired,isSingleType:n().bool.isRequired,onPost:n().func.isRequired,onPublish:n().func.isRequired,onDraftRelationCheck:n().func.isRequired,onPut:n().func.isRequired,onUnpublish:n().func.isRequired,readActionAllowedFields:n().array.isRequired,redirectToPreviousPage:n().func,slug:n().string.isRequired,status:n().string.isRequired,updateActionAllowedFields:n().array.isRequired};var dc=lr,it=t=>(0,y.IF)(`single-types/${t}`),rn=d(33348),uc=t=>Object.values(t||{}).reduce((r,o)=>Object.assign(r,o),{}),xo=(t={})=>{const{plugins:r,_q:o,...s}={...t,...uc(t.plugins)};return o&&se()(s,"_q",encodeURIComponent(o)),`${(0,rn.stringify)(s,{encode:!1,addQueryPrefix:!0})}`};const Oo=({allLayoutData:t,children:r,slug:o})=>{const s=(0,st.useQueryClient)(),{trackUsage:a}=(0,h.rS)(),{push:l}=(0,te.k6)(),{setCurrentStep:i}=(0,h.c1)(),c=(0,e.useRef)(a),[p,u]=(0,e.useState)(!0),[{query:m,rawQuery:f}]=(0,h.Kx)(),g=xo(m),E=(0,h.lm)(),b=(0,_.I0)(),{formatAPIError:v}=(0,h.So)(y.OB),M=(0,h.kY)(),{post:D,put:T,del:w}=M,{componentsDataStructure:I,contentTypeDataStructure:C,data:R,isLoading:L,status:B}=(0,_.v9)(rr),U=(0,e.useCallback)(z=>{const x=(0,y.kc)(z,t.contentType,t.components);return(0,h.dU)(x,t.contentType,t.components)},[t]);(0,e.useEffect)(()=>()=>{b(Mo())},[b]),(0,e.useEffect)(()=>{const z=Object.keys(t.components).reduce((j,X)=>{const k=(0,y.Di)(P()(t,["components",X,"attributes"],{}),t.components);return j[X]=(0,h.dU)(k,t.components[X],t.components),j},{}),x=(0,y.Di)(t.contentType.attributes,t.components),O=(0,h.dU)(x,t.contentType,t.components);b(To(z,O))},[t,b]),(0,e.useEffect)(()=>{const x=ze.default.CancelToken.source();return(async j=>{b(tn()),u(!0);try{const{data:X}=await M.get(it(`${o}${g}`),{cancelToken:j.token});b(tr(U(X))),u(!1)}catch(X){if(ze.default.isCancel(X))return;const k=P()(X,"response.status",null);k===404&&b(nr(f,!0)),k===403&&(E({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}}),l("/"))}})(x),()=>x.cancel("Operation canceled by the user.")},[M,U,l,o,b,g,f,E]);const A=(0,e.useCallback)(z=>{E({type:"warning",message:v(z)})},[E,v]),G=(0,e.useCallback)(async z=>{try{c.current("willDeleteEntry",z);const{data:x}=await w(it(`${o}${g}`));return E({type:"success",message:{id:(0,y.OB)("success.record.delete")}}),c.current("didDeleteEntry",z),u(!0),b(nr(f,!0)),Promise.resolve(x)}catch(x){return c.current("didNotDeleteEntry",{error:x,...z}),A(x),Promise.reject(x)}},[w,o,A,E,g,b,f]),$=(0,e.useCallback)(async(z,x)=>{const O=it(`${o}${f}`);try{b(ce("submit-pending"));const{data:j}=await T(O,z);return c.current("didCreateEntry",x),E({type:"success",message:{id:(0,y.OB)("success.record.save")}}),i("contentManager.success"),s.invalidateQueries(["relation"]),b(et(U(j))),u(!1),b(ce("resolved")),Promise.resolve(j)}catch(j){return c.current("didNotCreateEntry",{error:j,trackerProperty:x}),A(j),b(ce("resolved")),Promise.reject(j)}},[T,U,A,o,b,f,E,i,s]),K=(0,e.useCallback)(async()=>{try{c.current("willCheckDraftRelations");const z=it(`${o}/actions/numberOfDraftRelations`);b(ce("draft-relation-check-pending"));const x=await M.get(z);return c.current("didCheckDraftRelations"),b(ce("resolved")),x.data.data}catch(z){return A(z),b(ce("resolved")),Promise.reject(z)}},[M,A,o,b]),W=(0,e.useCallback)(async()=>{try{c.current("willPublishEntry");const z=it(`${o}/actions/publish${g}`);b(ce("publish-pending"));const{data:x}=await D(z);return c.current("didPublishEntry"),E({type:"success",message:{id:(0,y.OB)("success.record.publish")}}),b(et(U(x))),b(ce("resolved")),Promise.resolve(x)}catch(z){return A(z),b(ce("resolved")),Promise.reject(z)}},[D,U,A,o,g,b,E]),Y=(0,e.useCallback)(async(z,x)=>{const O=it(`${o}${f}`);try{c.current("willEditEntry",x),b(ce("submit-pending"));const{data:j}=await T(O,z);return E({type:"success",message:{id:(0,y.OB)("success.record.save")}}),c.current("didEditEntry",{trackerProperty:x}),s.invalidateQueries(["relation"]),b(et(U(j))),b(ce("resolved")),Promise.resolve(j)}catch(j){return A(j),c.current("didNotEditEntry",{error:j,trackerProperty:x}),b(ce("resolved")),Promise.reject(j)}},[T,U,A,o,b,f,E,s]),q=(0,e.useCallback)(async()=>{const z=it(`${o}/actions/unpublish${g}`);b(ce("unpublish-pending"));try{c.current("willUnpublishEntry");const{data:x}=await D(z);c.current("didUnpublishEntry"),E({type:"success",message:{id:(0,y.OB)("success.record.unpublish")}}),b(et(U(x))),b(ce("resolved"))}catch(x){b(ce("resolved")),A(x)}},[D,U,E,A,o,b,g]);return r({componentsDataStructure:I,contentTypeDataStructure:C,data:R,isCreatingEntry:p,isLoadingForData:L,onDelete:G,onPost:$,onDraftRelationCheck:K,onPublish:W,onPut:Y,onUnpublish:q,redirectionLink:"/",status:B})};Oo.propTypes={allLayoutData:n().shape({components:n().object.isRequired,contentType:n().object.isRequired}).isRequired,children:n().func.isRequired,slug:n().string.isRequired};var mc=(0,e.memo)(Oo),pc=d(56243);function gc(t,r){return o=>{const s=r();return e.createElement(t,{...o,...s})}}var fc=gc;function hc(){const{initialData:t,hasDraftAndPublish:r}=(0,h.Wq)(),o=t.publishedAt!==void 0&&t.publishedAt!==null;return{hasDraftAndPublish:r,isPublished:o}}var yc=hc;const bc=(0,N.ZP)(pc.Z)`
  width: ${(0,h.Q1)(6)};
  height: ${(0,h.Q1)(6)};
  * {
    fill: ${({theme:t,$bulletColor:r})=>t.colors[r]};
  }
`,Po=({hasDraftAndPublish:t,isPublished:r})=>{const{formatMessage:o}=(0,H.Z)();if(!t)return null;const s={draft:{textColor:"secondary700",bulletColor:"secondary600",box:{background:"secondary100",borderColor:"secondary200"}},published:{textColor:"success700",bulletColor:"success600",box:{background:"success100",borderColor:"success200"}}},a=r?s.published:s.draft;return e.createElement(S.x,{hasRadius:!0,as:"aside",paddingTop:4,paddingBottom:4,paddingLeft:5,paddingRight:5,...a.box},e.createElement(S.x,{as:F.k},e.createElement(bc,{$bulletColor:a.bulletColor}),e.createElement(S.x,{paddingLeft:3},e.createElement(Q.Z,{textColor:a.textColor},o({id:(0,y.OB)("containers.Edit.information.editing"),defaultMessage:"Editing"}),"\xA0"),e.createElement(Q.Z,{fontWeight:"bold",textColor:a.textColor},r&&o({id:(0,y.OB)("containers.Edit.information.publishedVersion"),defaultMessage:"published version"}),!r&&o({id:(0,y.OB)("containers.Edit.information.draftVersion"),defaultMessage:"draft version"})))))};Po.propTypes={hasDraftAndPublish:n().bool.isRequired,isPublished:n().bool.isRequired};var Ec=fc(Po,yc),yt=d(66456),on=d(29439),sn=d(22342),an=d(96166),ln=d(88693);function vc(t,r){return o=>{const s=r();return e.createElement(t,{...o,...s})}}var Cc=vc;function Rc(){const{initialData:t,isCreatingEntry:r,isSingleType:o,status:s,layout:a,hasDraftAndPublish:l,modifiedData:i,onPublish:c,onUnpublish:p,publishConfirmation:u,onPublishPromptDismissal:m}=(0,h.Wq)();return{initialData:t,isCreatingEntry:r,isSingleType:o,status:s,layout:a,hasDraftAndPublish:l,modifiedData:i,onPublish:c,onUnpublish:p,publishConfirmation:u,onPublishPromptDismissal:m}}var Mc=Rc;const wo=(0,N.ZP)(F.k)`
  text-align: center;
`,Fo=({allowedActions:{canUpdate:t,canCreate:r,canPublish:o},initialData:s,isCreatingEntry:a,isSingleType:l,hasDraftAndPublish:i,layout:c,modifiedData:p,onPublish:u,onUnpublish:m,status:f,publishConfirmation:{show:g,draftCount:E},onPublishPromptDismissal:b})=>{const{goBack:v}=(0,te.k6)(),[M,D]=(0,e.useState)(!1),{formatMessage:T}=(0,H.Z)(),w=P()(c,["settings","mainField"],"id"),I=P()(c,["info","displayName"],"NOT FOUND"),C=!Lt()(s,p)||a&&!Re()(p);let L=T({id:(0,y.OB)("containers.Edit.pluginHeader.title.new"),defaultMessage:"Create an entry"});!a&&!l&&(L=s[w]||I),l&&(L=I);let B=null;if(a&&r&&(B=e.createElement(F.k,{gap:2},i&&e.createElement(me.z,{disabled:!0,startIcon:e.createElement(yt.Z,null),variant:"secondary"},T({id:"app.utils.publish",defaultMessage:"Publish"})),e.createElement(me.z,{disabled:!C,loading:f==="submit-pending",type:"submit"},T({id:(0,y.OB)("containers.Edit.submit"),defaultMessage:"Save"})))),!a&&t){const $=i&&o,K=!Re()(s.publishedAt),W=K?f==="unpublish-pending":f==="publish-pending",Y=K?{id:"app.utils.unpublish",defaultMessage:"Unpublish"}:{id:"app.utils.publish",defaultMessage:"Publish"},q=K?()=>D(!0):()=>u();B=e.createElement(F.k,null,$&&e.createElement(me.z,{disabled:C,loading:W,onClick:q,startIcon:e.createElement(yt.Z,null),variant:"secondary"},T(Y)),e.createElement(S.x,{paddingLeft:$?2:0},e.createElement(me.z,{disabled:!C,loading:f==="submit-pending",type:"submit"},T({id:(0,y.OB)("containers.Edit.submit"),defaultMessage:"Save"}))))}const U=()=>D($=>!$),A=()=>{U(),m()},G=`${T({id:(0,y.OB)("api.id"),defaultMessage:"API ID "})} : ${c.apiID}`;return e.createElement(e.Fragment,null,e.createElement(fe.T,{title:L.toString(),primaryAction:B,subtitle:G,navigationAction:e.createElement(h.rU,{startIcon:e.createElement(on.Z,null),onClick:$=>{$.preventDefault(),v()},to:"/"},T({id:"global.back",defaultMessage:"Back"}))}),e.createElement(sn.V,{onClose:U,title:"Confirmation",labelledBy:"confirmation",describedBy:"confirm-description",isOpen:M},e.createElement(an.a,{icon:e.createElement(Pt.Z,null)},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(F.k,{justifyContent:"center",style:{textAlign:"center"}},e.createElement(Q.Z,{id:"confirm-description"},T({id:(0,y.OB)("popUpWarning.warning.unpublish"),defaultMessage:"Unpublish this content will automatically change it to a draft."},{br:()=>e.createElement("br",null)}))),e.createElement(F.k,{justifyContent:"center",style:{textAlign:"center"}},e.createElement(Q.Z,{id:"confirm-description"},T({id:(0,y.OB)("popUpWarning.warning.unpublish-question"),defaultMessage:"Are you sure you want to unpublish it?"}))))),e.createElement(ln.c,{startAction:e.createElement(me.z,{onClick:U,variant:"tertiary"},T({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{variant:"danger-light",onClick:A},T({id:"components.popUpWarning.button.confirm",defaultMessage:"Confirm"}))})),e.createElement(sn.V,{onClose:b,title:T({id:(0,y.OB)("popUpWarning.warning.has-draft-relations.title"),defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:g},e.createElement(an.a,{icon:e.createElement(Pt.Z,null)},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(wo,{justifyContent:"center"},e.createElement(Q.Z,{id:"confirm-description"},E,T({id:(0,y.OB)("popUpwarning.warning.has-draft-relations.message"),defaultMessage:"<b>{count, plural, one { relation is} other { relations are}}</b> not published yet and might lead to unexpected behavior."},{b:$=>e.createElement(Q.Z,{fontWeight:"bold"},$),count:E}))),e.createElement(wo,{justifyContent:"center"},e.createElement(Q.Z,{id:"confirm-description"},T({id:(0,y.OB)("popUpWarning.warning.publish-question"),defaultMessage:"Do you still want to publish?"}))))),e.createElement(ln.c,{startAction:e.createElement(me.z,{onClick:b,variant:"tertiary"},T({id:"components.popUpWarning.button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{variant:"success",onClick:u},T({id:(0,y.OB)("popUpwarning.warning.has-draft-relations.button-confirm"),defaultMessage:"Publish"}))})))};Fo.propTypes={allowedActions:n().shape({canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canPublish:n().bool.isRequired}).isRequired,initialData:n().object.isRequired,isCreatingEntry:n().bool.isRequired,isSingleType:n().bool.isRequired,status:n().string.isRequired,layout:n().object.isRequired,hasDraftAndPublish:n().bool.isRequired,modifiedData:n().object.isRequired,onPublish:n().func.isRequired,onUnpublish:n().func.isRequired,publishConfirmation:n().shape({show:n().bool.isRequired,draftCount:n().number.isRequired}).isRequired,onPublishPromptDismissal:n().func.isRequired};const Tc=(0,e.memo)(Fo,xe());var Dc=Cc(Tc,Mc),Ic=t=>{if(!t.layouts)return[];const r=t.layouts.edit,o=t.attributes,s=i=>P()(o,[i,"type"],"");let a=0;const l=[];return r.forEach(i=>{const c=i.some(({name:p})=>s(p)==="dynamiczone");l[a]||(l[a]=[]),c?(a=a===0&&Re()(l[0])?0:a+1,l[a]||(l[a]=[]),l[a].push(i),a+=1):l[a].push(i)}),l.filter(i=>i.length>0)},kc=d(91815),xc=d.n(kc),Oc=d(3704),Lo=d.n(Oc),Pc=(t,r)=>{const o=s=>{const a=(0,h.ZT)(t,[{action:`plugin::content-manager.explorer.${s}`,subject:r}]);return xc()(Lo()(a,"properties.fields"))};return{createActionAllowedFields:o("create"),readActionAllowedFields:o("read"),updateActionAllowedFields:o("update")}},wc=t=>{if(!t)return[];const o=[...t.contentType.layouts.edit,...Object.values(t.components).flatMap(a=>a.layouts.edit)].flat().filter(a=>a.fieldSchema.customField).map(a=>a.fieldSchema.customField);return[...new Set(o)]};function Fc(t,r){return o=>{const s=r();return e.createElement(t,{...o,...s})}}var Lc=Fc;function Sc(){const{hasDraftAndPublish:t,modifiedData:r}=(0,h.Wq)();let o={};return t&&(o=Re()(r.publishedAt)?{status:"draft"}:{status:"published"}),{hasDraftAndPublish:t,trackerProperty:o}}var Ac=Sc;const So=({onDelete:t,trackerProperty:r})=>{const[o,s]=(0,e.useState)(!1),[a,l]=(0,e.useState)(!1),{formatMessage:i}=(0,H.Z)(),{formatAPIError:c}=(0,h.So)(y.OB),p=(0,h.lm)(),u=()=>s(f=>!f),m=async()=>{try{l(!0),await t(r),l(!1),u()}catch(f){l(!1),u(),p({type:"warning",message:c(f)})}};return e.createElement(e.Fragment,null,e.createElement(me.z,{onClick:u,size:"S",startIcon:e.createElement(He.Z,null),variant:"danger-light"},i({id:(0,y.OB)("containers.Edit.delete-entry"),defaultMessage:"Delete this entry"})),e.createElement(h.QH,{isConfirmButtonLoading:a,isOpen:o,onConfirm:m,onToggleDialog:u}))};So.propTypes={onDelete:n().func.isRequired,trackerProperty:n().object.isRequired};const $c=(0,e.memo)(So,xe());var Zc=Lc($c,Ac);const cr=({columns:t,customFieldInputs:r})=>e.createElement(Te.r,{gap:4},t.map(({fieldSchema:o,labelAction:s,metadatas:a,name:l,size:i,queryInfos:c})=>{if(o.type==="component"){const{component:u,max:m,min:f,repeatable:g=!1,required:E=!1}=o;return e.createElement(ue.P,{col:i,s:12,xs:12,key:u},e.createElement(Xt,{componentUid:u,labelAction:s,isRepeatable:g,intlLabel:{id:a.label,defaultMessage:a.label},max:m,min:f,name:l,required:E}))}return e.createElement(ue.P,{col:i,key:l,s:12,xs:12},e.createElement(Nn,{size:i,fieldSchema:o,keys:l,labelAction:s,metadatas:a,queryInfos:c,customFieldInputs:r}))}));cr.defaultProps={customFieldInputs:{}},cr.propTypes={columns:n().array.isRequired,customFieldInputs:n().object};var Bc=cr,dr=d(98178);const ur=t=>t["content-manager_editViewLayoutManager"].currentLayout,qc=(0,dr.P1)(ur,t=>Ic(t?.contentType??{})),Nc=(0,dr.P1)(ur,t=>wc(t)),jc=(()=>window&&window.strapi&&window.strapi.isEE?d(28243).Z:d(73710).Z)(),Ao=Ie.Z.contentManager,Wc=[{action:"plugin::content-type-builder.read",subject:null}],mr=t=>{let{allowedActions:r,isSingleType:o,goBack:s,slug:a,id:l,origin:i,userPermissions:c}=t;const{trackUsage:p}=(0,h.rS)(),{formatMessage:u}=(0,H.Z)(),{layout:m,formattedContentTypeLayout:f,customFieldUids:g}=(0,_.v9)(R=>({layout:ur(R),formattedContentTypeLayout:qc(R),customFieldUids:Nc(R)})),{isLazyLoading:E,lazyComponentStore:b}=jn(g),{createActionAllowedFields:v,readActionAllowedFields:M,updateActionAllowedFields:D}=Pc(c,a),T=o?Ao.singleTypesConfigurations:Ao.collectionTypesConfigurations,w=`/content-manager/${o?"singleType":"collectionType"}/${a}/configurations/edit`,I=o?mc:Nl,C=R=>R.every(L=>L.every(B=>B.fieldSchema.type==="dynamiczone"));return E?e.createElement(h.dO,null):e.createElement(I,{allLayoutData:m,slug:a,id:l,origin:i},R=>{let{componentsDataStructure:L,contentTypeDataStructure:B,data:U,isCreatingEntry:A,isLoadingForData:G,onDelete:$,onPost:K,onPublish:W,onDraftRelationCheck:Y,onPut:q,onUnpublish:z,redirectionLink:x,status:O}=R;return e.createElement(dc,{allowedActions:r,allLayoutData:m,createActionAllowedFields:v,componentsDataStructure:L,contentTypeDataStructure:B,from:x,initialValues:U,isCreatingEntry:A,isLoadingForData:G,isSingleType:o,onPost:K,onPublish:W,onDraftRelationCheck:Y,onPut:q,onUnpublish:z,readActionAllowedFields:M,redirectToPreviousPage:s,slug:a,status:O,updateActionAllowedFields:D},e.createElement(Ce.o,{"aria-busy":O!=="resolved"},e.createElement(Dc,{allowedActions:r}),e.createElement(Ze.D,null,e.createElement(Te.r,{gap:4},e.createElement(ue.P,{col:9,s:12},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:6},f.map((j,X)=>{if(C(j)){const{0:{0:{name:k,fieldSchema:Z,metadatas:ne,labelAction:J}}}=j;return e.createElement(S.x,{key:X},e.createElement(Te.r,{gap:4},e.createElement(ue.P,{col:12,s:12,xs:12},e.createElement(Bl,{name:k,fieldSchema:Z,labelAction:J,metadatas:ne}))))}return e.createElement(S.x,{key:X,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingLeft:6,paddingRight:6,paddingTop:6,paddingBottom:6,borderColor:"neutral150"},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:6},j.map((k,Z)=>e.createElement(Bc,{columns:k,customFieldInputs:b,key:Z}))))}))),e.createElement(ue.P,{col:3,s:12},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(Ec,null),e.createElement(S.x,{as:"aside","aria-labelledby":"additional-information",background:"neutral0",borderColor:"neutral150",hasRadius:!0,paddingBottom:4,paddingLeft:4,paddingRight:4,paddingTop:6,shadow:"tableShadow"},e.createElement(jc,null),e.createElement(Ht,{area:"contentManager.editView.informations"})),e.createElement(S.x,{as:"aside","aria-labelledby":"links"},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(Ht,{area:"contentManager.editView.right-links",slug:a}),a!=="strapi::administrator"&&e.createElement(h.jW,{permissions:Wc},e.createElement(h.Qj,{onClick:()=>{p("willEditEditLayout")},size:"S",startIcon:e.createElement(je.Z,null),style:{width:"100%"},to:`/plugins/content-type-builder/content-types/${a}`,variant:"secondary"},u({id:(0,y.OB)("link-to-ctb"),defaultMessage:"Edit the model"}))),e.createElement(h.jW,{permissions:T},e.createElement(h.Qj,{size:"S",startIcon:e.createElement(Ue.Z,null),style:{width:"100%"},to:w,variant:"secondary"},u({id:"app.links.configure-view",defaultMessage:"Configure the view"}))),r.canDelete&&!A&&e.createElement(Zc,{onDelete:$})))))))))})};mr.defaultProps={id:null,isSingleType:!1,origin:null,userPermissions:[]},mr.propTypes={allowedActions:n().shape({canRead:n().bool.isRequired,canUpdate:n().bool.isRequired,canCreate:n().bool.isRequired,canDelete:n().bool.isRequired}).isRequired,id:n().string,isSingleType:n().bool,goBack:n().func.isRequired,origin:n().string,slug:n().string.isRequired,userPermissions:n().array};var zc=(0,e.memo)(mr);const pr=t=>{const r=(0,e.useMemo)(()=>(0,y.TA)(t.slug),[t.slug]),{isLoading:o,allowedActions:s}=(0,h.ss)(r,t.userPermissions);return o?e.createElement(h.dO,null):e.createElement(zc,{...t,allowedActions:s})};pr.defaultProps={permissions:[]},pr.propTypes={permissions:n().array,slug:n().string.isRequired,userPermissions:n().array.isRequired};var Vc=(0,e.memo)(pr,xe());const $o=({layout:t,...r})=>{const o=(0,_.v9)(mt.Z),s=(0,_.I0)(),[{query:a}]=(0,h.Kx)(),{runHookWaterfall:l}=(0,h.j1)(),i=(0,de.r5)(a,r.slug,"editView");return(0,e.useEffect)(()=>{const c=l($e.Eo,{layout:t,query:a});return s(Tt(c.layout,a)),()=>{s(Mt())}},[t,s,a,l]),!o||!i?e.createElement(h.dO,null):e.createElement(Vc,{...r,userPermissions:i})};$o.propTypes={layout:n().shape({components:n().object.isRequired,contentType:n().shape({uid:n().string.isRequired,settings:n().object.isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().object.isRequired}).isRequired}).isRequired};var cn=$o,Uc=d(23940),At=d.n(Uc),Zo=d(9026);const gr=t=>t.reduce((r,o)=>r+o.size,0),Hc=t=>t.reduce((r,o,s)=>{const a={rowId:s,rowContent:o};return r.concat(a)},[]),bt=t=>t.reduce((r,o)=>{let s=[];const a=o.rowContent.reduce((c,p)=>{const u=gr(c);return p.name==="_TEMP_"||(u+p.size<=12?c.push(p):s.push(p)),c},[]),l=r.length===0?0:Math.max.apply(Math,r.map(c=>c.rowId))+1,i=gr(a);if(i<12&&a.push({name:"_TEMP_",size:12-i}),r.push({rowId:l,rowContent:a}),s.length>0){const c=gr(s);c<12&&s.push({name:"_TEMP_",size:12-c}),r.push({rowId:l+1,rowContent:s}),s=[]}return r},[]).filter(r=>r.rowContent.length>0).filter(r=>r.rowContent.length===1?r.rowContent[0].name!=="_TEMP_":!0),Qc=t=>t.reduce((r,o)=>{const s=o.rowContent.filter(a=>a.name!=="_TEMP_");return r.concat([s])},[]),Gc=(t,r=[])=>r.reduce((o,{rowContent:s})=>{const a=s.find(l=>l.name===t)?.size??null;return a&&(o=a),o},null),Kc=(t,r,o=[])=>o.map(s=>(s.rowContent=s.rowContent.map(a=>a.name===t?{...a,size:r}:a),s)),Bo=6,fr={fieldForm:{},componentLayouts:{},metaToEdit:"",initialData:{},metaForm:{},modifiedData:{}};var Yc=(t=fr,r)=>(0,sr.ZP)(t,o=>{const s=["modifiedData","layouts","edit"];switch(r.type){case"MOVE_ROW":{const a=P()(t,s,[]),{fromIndex:l,toIndex:i}=r;se()(o,s,(0,y.W3)(a,l,i));break}case"ON_ADD_FIELD":{const a=Qe()(t),l=P()(a,["modifiedData","attributes",r.name],{}),i=r.fieldSizes[l?.customField]?.default??r.fieldSizes[l?.type]?.default??Bo,c=P()(a,s,[]).length,p=[...s,c-1,"rowContent"],u=P()(a,p,[]);let m=P()(a,s,[]);Array.isArray(u)?se()(m,[c>0?c-1:0,"rowContent"],[...u,{name:r.name,size:i}]):se()(m,[c>0?c-1:0,"rowContent"],[{name:r.name,size:i}]);const f=bt(m);se()(o,s,f);break}case"ON_CHANGE":{se()(o,["modifiedData",...r.keys],r.value);break}case"ON_CHANGE_META":{se()(o,["metaForm","metadata",...r.keys],r.value);break}case"ON_CHANGE_SIZE":{se()(o,["metaForm","size"],r.value);break}case"ON_RESET":{o.modifiedData=t.initialData;break}case"REMOVE_FIELD":{const a=P()(t,[...s,r.rowIndex,"rowContent"],[]);let l=Qe()(t);if(a.length===1||a.length===2&&P()(a,[1,"name"],"")==="_TEMP_"){const c=P()(t,s,[]);se()(l,s,c.filter((p,u)=>r.rowIndex!==u))}else se()(l,[...s,r.rowIndex,"rowContent"],a.filter((c,p)=>p!==r.fieldIndex));const i=bt(P()(l,s,[]));se()(o,s,i);break}case"REORDER_DIFF_ROW":{const a=P()(t,[...s,r.dragRowIndex,"rowContent"],[]),l=P()(t,[...s,r.hoverRowIndex,"rowContent"],[]),i=P()(t,[...s,r.dragRowIndex,"rowContent",r.dragIndex],{}),c=[...l,i];let p=Qe()(t);se()(p,[...s,r.dragRowIndex,"rowContent"],a.filter((m,f)=>r.dragIndex!==f)),se()(p,[...s,r.hoverRowIndex,"rowContent"],(0,y.W3)(c,c.length-1,r.hoverIndex));const u=bt(P()(p,s,[]));se()(o,s,u);break}case"REORDER_ROW":{const a=Qe()(t),l=P()(a,[...s,r.dragRowIndex,"rowContent"],[]);se()(a,[...s,r.dragRowIndex,"rowContent"],(0,y.W3)(l,r.dragIndex,r.hoverIndex));const i=bt(P()(a,s,[]));se()(o,s,i);break}case"SET_FIELD_TO_EDIT":{o.metaToEdit=r.name,o.metaForm={metadata:P()(t,["modifiedData","metadatas",r.name,"edit"],{}),size:Gc(r.name,t.modifiedData?.layouts?.edit)??Bo};break}case"SUBMIT_META_FORM":{se()(o,["modifiedData","metadatas",t.metaToEdit,"edit"],t.metaForm.metadata);const a=Qe()(P()(t,s,[])),l=Kc(t.metaToEdit,t.metaForm.size,a);l.length>0&&se()(o,s,bt(l));break}case"SUBMIT_SUCCEEDED":{o.initialData=t.modifiedData;break}case"UNSET_FIELD_TO_EDIT":{o.metaToEdit="",o.metaForm={};break}default:return o}}),Xc=(t,r,o)=>{let s=Qe()(r);return se()(s,["layouts","edit"],bt(Hc(r.layouts.edit))),{...t,initialData:s,modifiedData:s,componentLayouts:o}},Ve=d(34853);const qo=e.createContext();function hr({attributes:t,buttonData:r,children:o,goTo:s,layout:a,metadatas:l,moveItem:i,moveRow:c,onAddData:p,relationsLayout:u,removeField:m,selectedItemName:f,setEditFieldToSelect:g,...E}){return e.createElement(qo.Provider,{value:{attributes:t,buttonData:r,goTo:s,layout:a,metadatas:l,moveItem:i,moveRow:c,onAddData:p,relationsLayout:u,removeField:m,selectedItemName:f,setEditFieldToSelect:g,...E}},o)}hr.defaultProps={attributes:{},buttonData:[],goTo(){},layout:[],metadatas:{},moveItem(){},moveRow(){},onAddData(){},relationsLayout:[],removeField(){},selectedItemName:null,setEditFieldToSelect(){}},hr.propTypes={attributes:n().object,buttonData:n().array,children:n().node.isRequired,goTo:n().func,layout:n().array,metadatas:n().object,moveItem:n().func,moveRow:n().func,onAddData:n().func,relationsLayout:n().array,removeField:n().func,selectedItemName:n().string,setEditFieldToSelect:n().func};function lt(){return e.useContext(qo)}var dn=d(74506),No=d(45112);const jo=({componentUid:t})=>{const{componentLayouts:r}=lt(),{formatMessage:o}=(0,H.Z)(),s=P()(r,[t],{}),a=P()(s,["layouts","edit"],[]);return e.createElement(S.x,{padding:3},a.map((l,i)=>e.createElement(Te.r,{gap:4,key:i},l.map(c=>e.createElement(ue.P,{key:c.name,col:c.size},e.createElement(S.x,{paddingTop:2},e.createElement(F.k,{alignItems:"center",background:"neutral0",paddingLeft:3,paddingRight:3,height:`${32/16}rem`,hasRadius:!0,borderColor:"neutral200"},e.createElement(Q.Z,{textColor:"neutral800"},c.name))))))),e.createElement(S.x,{paddingTop:2},e.createElement(h.rU,{startIcon:e.createElement(No.Z,null),to:`/content-manager/components/${t}/configurations/edit`},o({id:(0,Ee.Z)("components.FieldItem.linkToComponentLayout"),defaultMessage:"Set the component's layout"}))))};jo.propTypes={componentUid:n().string.isRequired};var Jc=jo,Et=d(14911);const _c=(0,N.ZP)(F.k)`
  text-decoration: none;

  &:focus,
  &:hover {
    ${({theme:t})=>`
      background-color: ${t.colors.primary100};
      border-color: ${t.colors.primary200};

      ${Q.Z} {
          color: ${t.colors.primary600};
      }
    `}

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Wo=({components:t})=>{const{componentLayouts:r}=lt();return e.createElement(F.k,{gap:2,overflow:"scroll hidden",padding:3},t.map(o=>e.createElement(_c,{hasRadius:!0,background:"neutral0",justifyContent:"center",alignItems:"center",height:`${84/16}rem`,minWidth:`${140/16}rem`,key:o,padding:2,direction:"column",borderColor:"neutral200",as:Et.rU,to:`/content-manager/components/${o}/configurations/edit`},e.createElement(en,null),e.createElement(S.x,{paddingTop:1},e.createElement(Q.Z,{fontSize:1,textColor:"neutral600",fontWeight:"bold"},r?.[o]?.info?.displayName??"")))))};Wo.propTypes={components:n().arrayOf(n().string).isRequired};var ed=Wo;const zo=(0,N.ZP)(ye.h)`
  background-color: transparent;
  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,yr=({attribute:t,onEditField:r,onDeleteField:o,children:s})=>{const{formatMessage:a}=(0,H.Z)();return e.createElement(S.x,{overflow:"hidden",width:"100%"},e.createElement(F.k,{paddingLeft:3,alignItems:"center",justifyContent:"space-between"},e.createElement(Q.Z,{fontWeight:"semiBold",textColor:"neutral800",ellipsis:!0},s),e.createElement(F.k,null,e.createElement(zo,{label:a({id:(0,y.OB)("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:s}),onClick:r,icon:e.createElement(je.Z,null),noBorder:!0}),e.createElement(zo,{label:a({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:s}),"data-testid":"delete-field",onClick:o,icon:e.createElement(He.Z,null),noBorder:!0}))),t?.type==="component"&&e.createElement(Jc,{componentUid:t.component}),t?.type==="dynamiczone"&&e.createElement(ed,{components:t.components}))};yr.defaultProps={attribute:void 0},yr.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),onEditField:n().func.isRequired,onDeleteField:n().func.isRequired,children:n().string.isRequired};var td=yr;const nd=(0,N.ZP)(F.k)`
  position: relative;
  ${({isFirst:t,isLast:r,hasHorizontalPadding:o})=>t?`
        padding-right: 4px;
      `:r?`
        padding-left: 4px;
      `:o?`
        padding: 0 4px;
      `:""}
  ${({showRightCarret:t,showLeftCarret:r,theme:o})=>t?`
        &:after {
          content: '';
          position: absolute;
          right: -1px;
          background-color: ${o.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:r?`
        &:before {
          content: '';
          position: absolute;
          left: -1px;
          background-color: ${o.colors.primary600};
          width: 2px;
          height: 100%;
          align-self: stretch;
          z-index: 1;
        }
      `:""};
`,rd=(0,N.ZP)(Je.Z)`
  height: ${12/16}rem;
  width: ${12/16}rem;
  path {
    fill: ${({theme:t})=>t.colors.neutral600};
  }
`,od=(0,N.ZP)(F.k)`
  display: ${({dragStart:t})=>t?"none":"flex"};
  opacity: ${({isDragging:t,isFullSize:r,isHidden:o})=>t&&!r?.2:t&&r||o?0:1};
`,sd=(0,N.ZP)(F.k)`
  cursor: all-scroll;
  border-right: 1px solid ${({theme:t})=>t.colors.neutral200};
`,br=({attribute:t,children:r,index:o,lastIndex:s,moveItem:a,moveRow:l,name:i,onDeleteField:c,onEditField:p,rowIndex:u,size:m})=>{const[f,g]=(0,e.useState)(!1),E=i==="_TEMP_",{setIsDraggingSibling:b}=lt(),v=m===12,M=(0,e.useRef)(null),D=(0,e.useRef)(null),[{clientOffset:T,isOver:w},I]=(0,dn.useDrop)({accept:y._Q.EDIT_FIELD,hover(q,z){if(!D.current||q.size!==12)return;const x=z.getItem().index,O=o,j=z.getItem().rowIndex,X=u;if(x===O&&j===X)return;const k=D.current.getBoundingClientRect(),Z=(k.bottom-k.top)/2,J=z.getClientOffset().y-k.top;j<X&&J<Z||j>X&&J>Z||(l(j,X),q.rowIndex=X,q.itemIndex=O)},drop(q,z){if(!D.current)return;const x=z.getItem().index,O=o,j=z.getItem().rowIndex,X=u;if(q.size===12||x===O&&j===X)return;const k=D.current.getBoundingClientRect();if(Math.abs(z.getClientOffset().x-k.left)>k.width/1.8){a(x,O+1,j,X),q.itemIndex=O+1,q.rowIndex=X;return}a(x,O,j,X),q.itemIndex=O,q.rowIndex=X},collect:q=>({canDrop:q.canDrop(),clientOffset:q.getClientOffset(),isOver:q.isOver(),isOverCurrent:q.isOver({shallow:!0}),itemType:q.getItemType()})}),[{isDragging:C,getItem:R},L,B]=(0,dn.useDrag)({type:y._Q.EDIT_FIELD,item(){return b(!0),{index:o,labelField:r,rowIndex:u,name:i,size:m}},canDrag(){return i!=="_TEMP_"},collect:q=>({isDragging:q.isDragging(),getItem:q.getItem()}),end(){b(!1)}});(0,e.useEffect)(()=>{B((0,xt.rX)(),{captureDraggingState:!0})},[B]);const U={dragRef:L(M),dropRef:I(D)};let A=!1,G=!1;if(D.current&&T){const q=D.current.getBoundingClientRect();A=w&&R.size!==12&&Math.abs(T.x-q.left)<q.width/2,G=w&&R.size!==12&&Math.abs(T.x-q.left)>q.width/2,i==="_TEMP_"&&(A=w&&R.size!==12,G=!1)}const $=()=>t&&v?`${74/16}rem`:`${32/16}rem`,K=o===0&&!v,W=o===s&&!v,Y=o!==0&&!v;return e.createElement(ue.P,{col:m},e.createElement(nd,{ref:U.dropRef,showLeftCarret:A,showRightCarret:G,isFirst:K,isLast:W,hasHorizontalPadding:Y,onDrag:()=>{v&&!f&&g(!0)},onDragEnd:()=>{v&&g(!1)}},f&&v&&e.createElement(S.x,{width:"100%",height:"2px",background:"primary600"}),e.createElement(od,{width:v&&f?0:"100%",borderColor:"neutral150",hasRadius:!0,background:"neutral100",minHeight:$(),alignItems:"stretch",isDragging:C,dragStart:f,isFullSize:v,isHidden:E},e.createElement(sd,{as:"span",type:"button",ref:U.dragRef,onClick:q=>q.stopPropagation(),alignItems:"center",paddingLeft:3,paddingRight:3,tabIndex:-1},e.createElement(rd,null)),!E&&e.createElement(td,{attribute:t,onEditField:p,onDeleteField:c},r))))};br.defaultProps={attribute:void 0},br.propTypes={attribute:n().shape({components:n().array,component:n().string,type:n().string}),children:n().string.isRequired,index:n().number.isRequired,moveItem:n().func.isRequired,moveRow:n().func.isRequired,name:n().string.isRequired,onDeleteField:n().func.isRequired,onEditField:n().func.isRequired,rowIndex:n().number.isRequired,lastIndex:n().number.isRequired,size:n().number.isRequired};var ad=br;const Vo=({rowItem:t,onRemoveField:r,rowId:o,rowIndex:s,index:a,lastIndex:l})=>{const{setEditFieldToSelect:i,attributes:c,modifiedData:p,moveRow:u,moveItem:m}=lt(),f=P()(c,[t.name],{}),g=P()(p,["metadatas",t.name,"edit","label"],"");return e.createElement(ad,{onEditField:()=>i(t.name),onDeleteField:()=>r(o,a),attribute:f,index:a,lastIndex:l,rowIndex:s,name:t.name,size:t.size,moveRow:u,moveItem:m},g||t.name)};Vo.propTypes={index:n().number.isRequired,lastIndex:n().number.isRequired,onRemoveField:n().func.isRequired,rowId:n().number.isRequired,rowIndex:n().number.isRequired,rowItem:n().object.isRequired};var id=Vo;const Uo=({row:t,onRemoveField:r,rowIndex:o})=>e.createElement(Te.r,null,t.rowContent.map((s,a)=>e.createElement(id,{key:s.name,rowItem:s,index:a,rowId:t.rowId,onRemoveField:r,rowIndex:o,lastIndex:t.rowContent.length-1})));Uo.propTypes={onRemoveField:n().func.isRequired,row:n().object.isRequired,rowIndex:n().number.isRequired};var ld=Uo;const cd=[{action:"plugin::content-type-builder.read",subject:null}];var dd=()=>{const{trackUsage:t}=(0,h.rS)(),{formatMessage:r}=(0,H.Z)(),{slug:o,modifiedData:s,isContentTypeView:a}=lt(),l=a?"content-types":"components",i=`/plugins/content-type-builder/${l==="content-types"?l:"component-categories"}`,c=P()(s,"category",""),p=l==="content-types"?o:`${c}/${o}`,u=()=>{t("willEditEditLayout")};return o==="strapi::administrator"?null:e.createElement(h.jW,{permissions:cd},e.createElement(h.Qj,{to:`${i}/${p}`,onClick:u,size:"S",startIcon:e.createElement(je.Z,null),variant:"secondary"},r({id:(0,Ee.Z)(`edit-settings-view.link-to-ctb.${l}`),defaultMessage:"Edit the content type"})))};const Ho=({editLayout:t,fields:r,onRemoveField:o,onAddField:s})=>{const{formatMessage:a}=(0,H.Z)();return e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(F.k,{justifyContent:"space-between"},e.createElement("div",null,e.createElement(S.x,null,e.createElement(Q.Z,{fontWeight:"bold"},a({id:(0,y.OB)("containers.ListPage.displayedFields"),defaultMessage:"Displayed fields"}))),e.createElement(S.x,null,e.createElement(Q.Z,{variant:"pi",textColor:"neutral600"},a({id:"containers.SettingPage.editSettings.description",defaultMessage:"Drag & drop the fields to build the layout"})))),e.createElement(dd,null)),e.createElement(S.x,{padding:4,hasRadius:!0,borderStyle:"dashed",borderWidth:"1px",borderColor:"neutral300"},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},t.map((l,i)=>e.createElement(ld,{key:l.rowId,row:l,rowIndex:i,onRemoveField:o})),e.createElement(Ve.O,{id:"label",label:a({id:(0,y.OB)("containers.SettingPage.add.field"),defaultMessage:"Insert another field"}),as:me.z,"data-testid":"add-field",fullWidth:!0,startIcon:e.createElement(Ft.Z,null),endIcon:null,variant:"secondary",disabled:r.length===0},r.map(l=>e.createElement(Ve.s,{key:l,onClick:()=>s(l)},l))))))};Ho.propTypes={editLayout:n().array.isRequired,fields:n().array.isRequired,onAddField:n().func.isRequired,onRemoveField:n().func.isRequired};var ud=Ho,Qo=d(85025),Go=d(55225),Ko=d(31600),Yo=d(11406),$t=d(32031),md=d(73779),un=d(88675),pd=d(22348),Xo=d(7184),Er=d(43475),gd=d(82512),vr=d(83218),fd=d(872),hd=d(17757),yd=d(1176),bd=d(15431);const Jo={biginteger:e.createElement($t.Z,null),boolean:e.createElement(md.Z,null),date:e.createElement(un.Z,null),datetime:e.createElement(un.Z,null),decimal:e.createElement($t.Z,null),email:e.createElement(pd.Z,null),enum:e.createElement(Xo.Z,null),enumeration:e.createElement(Xo.Z,null),file:e.createElement(Er.Z,null),files:e.createElement(Er.Z,null),float:e.createElement($t.Z,null),integer:e.createElement($t.Z,null),media:e.createElement(Er.Z,null),number:e.createElement($t.Z,null),relation:e.createElement(gd.Z,null),string:e.createElement(vr.Z,null),text:e.createElement(vr.Z,null),richtext:e.createElement(vr.Z,null),time:e.createElement(un.Z,null),timestamp:e.createElement(un.Z,null),json:e.createElement(fd.Z,null),uid:e.createElement(hd.Z,null),component:e.createElement(yd.Z,null),dynamiczone:e.createElement(bd.Z,null)},Cr=({type:t,customFieldUid:r})=>{const o=(0,h.mZ)();let s=Jo[t];if(r){const l=o.get(r).icon;l&&(s=e.createElement(S.x,{marginRight:3,width:7,height:6},e.createElement(l,null)))}return Jo[t]?s:null};Cr.defaultProps={customFieldUid:null},Cr.propTypes={type:n().string.isRequired,customFieldUid:n().string};var _o=Cr,Ed=t=>t.reduce((r,o)=>{const s=o?.attributes??{},a=Object.keys(s).filter(l=>!["boolean","component","dynamiczone","json","media","password","relation","text","richtext"].includes(s?.[l]?.type??""));return r[o.uid]=a,r},{}),es=t=>{let r;switch(t){case"description":case"label":case"placeholder":r="text";break;case"mainField":r="select";break;case"editable":r="bool";break;default:r=""}const o=t==="mainField"?(0,y.OB)("containers.SettingPage.editSettings.entry.title"):(0,y.OB)(`form.Input.${t}`);return{type:r,label:{id:o}}},vt=d(42882),Zt=d(9139);const Rr=({type:t,options:r,onChange:o,value:s,name:a,...l})=>{const{formatMessage:i}=(0,H.Z)();switch(t){case"text":return e.createElement(kn.o,{onChange:o,value:s,name:a,...l});case"bool":return e.createElement(Zt.s,{onChange:c=>{o({target:{name:a,value:c.target.checked}})},checked:s,name:a,onLabel:i({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),offLabel:i({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),...l});case"select":return e.createElement(We.P,{value:s,name:a,onChange:c=>o({target:{name:a,value:c}}),...l},r.map(c=>e.createElement(be.W,{key:c,value:c},c)));default:return null}};Rr.defaultProps={options:void 0},Rr.propTypes={type:n().string.isRequired,options:n().arrayOf(n().string),onChange:n().func.isRequired,value:n().oneOfType([n().string,n().bool]).isRequired,name:n().string.isRequired};var vd=Rr;const Cd=[[4,"33%"],[6,"50%"],[8,"66%"],[12,"100%"]],Rd=[1,5,10,15,30,60],Md=["datetime","time"],ts=({onMetaChange:t,onSizeChange:r})=>{const{formatMessage:o}=(0,H.Z)(),{modifiedData:s,selectedField:a,attributes:l,fieldForm:i}=lt(),c=(0,e.useMemo)(vt.Vo,[]),{schemas:p}=(0,_.v9)(I=>c(I),_.wU),u=(0,_.v9)(vt.Jg),m=(0,e.useMemo)(()=>{if(!a)return[];const I=P()(s,["metadatas",a,"edit"],{});return Object.keys(I).filter(C=>C!=="visible")},[a,s]),f=(0,e.useMemo)(()=>Ed(p),[p]),g=(0,e.useCallback)(I=>{if(I!=="relation"&&I!=="component")return[];const C=I==="component"?"component":"targetModel",R=P()(s,["attributes",a,C],"");return P()(f,[R],[])},[a,f,s]),E=m.map(I=>{const C=P()(l,[a,"type"]);return["component","dynamiczone"].includes(C)&&!["label","description"].includes(I)||C==="component"&&I!=="label"||["media","json","boolean"].includes(C)&&I==="placeholder"||I==="step"?null:e.createElement(ue.P,{col:6,key:I},e.createElement(vd,{type:es(I).type,hint:I==="mainField"?o({id:(0,Ee.Z)("containers.SettingPage.editSettings.relation-field.description")}):"",label:o({id:P()(es(I),"label.id","app.utils.defaultMessage")}),name:I,onChange:t,value:P()(i,["metadata",I],""),options:g(C)}))}),{type:b,customField:v}=l[a],{isResizable:M}=u[v]??u[b],D=e.createElement(ue.P,{col:6,key:"size"},e.createElement(We.P,{value:i?.size,name:"size",onChange:I=>{r({name:a,value:I})},label:o({id:(0,Ee.Z)("containers.SettingPage.editSettings.size.label"),defaultMessage:"Size"})},Cd.map(([I,C])=>e.createElement(be.W,{key:I,value:I},C)))),T=Md.includes(l[a].type),w=e.createElement(ue.P,{col:6,key:"step"},e.createElement(We.P,{value:P()(i,["metadata","step"],1),name:"step",onChange:I=>t({target:{name:"step",value:I}}),label:o({id:(0,Ee.Z)("containers.SettingPage.editSettings.step.label"),defaultMessage:"Time interval (minutes)"})},Rd.map(I=>e.createElement(be.W,{key:I,value:I},I))));return e.createElement(e.Fragment,null,E,M&&D,T&&w)};ts.propTypes={onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired};var Td=ts;const Dd=(0,N.ZP)(F.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:t})=>t.spaces[3]};
  }
`,Mr=({onToggle:t,onMetaChange:r,onSizeChange:o,onSubmit:s,type:a,customFieldUid:l})=>{const{selectedField:i}=lt(),{formatMessage:c}=(0,H.Z)(),p=()=>a==="timestamp"?"date":["decimal","float","integer","biginter"].includes(a)?"number":a;return e.createElement(Qo.P,{onClose:t,labelledBy:"title"},e.createElement("form",{onSubmit:s},e.createElement(Go.x,null,e.createElement(Dd,null,e.createElement(_o,{type:p(),customFieldUid:l}),e.createElement(Q.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:(0,y.OB)("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:At()(i)})))),e.createElement(Ko.f,null,e.createElement(Te.r,{gap:4},e.createElement(Td,{onMetaChange:r,onSizeChange:o}))),e.createElement(Yo.m,{startActions:e.createElement(me.z,{onClick:t,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(me.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};Mr.defaultProps={customFieldUid:null},Mr.propTypes={customFieldUid:n().string,onSubmit:n().func.isRequired,onToggle:n().func.isRequired,onMetaChange:n().func.isRequired,onSizeChange:n().func.isRequired,type:n().string.isRequired};var Id=Mr,kd=(t,r,o)=>{const{put:s}=(0,h.tg)();return s((0,y.IF)(o?`content-types/${r}/configuration`:`components/${r}/configuration`),t)};const Tr=({mainLayout:t,components:r,isContentTypeView:o,slug:s,updateLayout:a})=>{const[l,i]=(0,e.useReducer)(Yc,fr,()=>Xc(fr,t,r)),[c,p]=(0,e.useState)(!1),{trackUsage:u}=(0,h.rS)(),m=(0,h.lm)(),{goBack:f}=(0,te.k6)(),[g,E]=(0,e.useState)(!1),[b,v]=(0,e.useState)(!1),{componentLayouts:M,initialData:D,modifiedData:T,metaToEdit:w,metaForm:I}=l,{formatMessage:C}=(0,H.Z)(),R=P()(t,["info","displayName"],""),L=P()(T,["attributes"],{}),B=(0,_.v9)(vt.Jg),U=Object.keys(L).filter(V=>{const ie=P()(L,[V,"type"],"");return!["dynamiczone","json","text","relation","component","boolean","media","password","richtext","timestamp"].includes(ie)&&!!ie}),A=P()(T,["layouts","edit"],[]),G=Lo()(A,"rowContent"),$=Object.keys(T.attributes).filter(V=>P()(T,["metadatas",V,"edit","visible"],!1)===!0).filter(V=>G.findIndex(ie=>ie.name===V)===-1).sort(),K=({target:{name:V,value:ie}})=>{i({type:"ON_CHANGE",keys:V.split("."),value:ie})},W=()=>{E(V=>!V)},Y=()=>{v(V=>!V)},q=({target:{name:V,value:ie}})=>{i({type:"ON_CHANGE_META",keys:V.split("."),value:ie})},z=({name:V,value:ie})=>{i({type:"ON_CHANGE_SIZE",name:V,value:ie})},x=V=>{V.preventDefault(),i({type:"SUBMIT_META_FORM"}),W()},O=V=>{V.preventDefault(),Y()},j=(0,st.useMutation)(V=>kd(V,s,o),{onSuccess({data:V}){a&&a(V.data),i({type:"SUBMIT_SUCCEEDED"}),Y(),u("didEditEditSettings")},onError(){m({type:"warning",message:{id:"notification.error"}})}}),{isLoading:X}=j,k=()=>{const V=On()(Qe()(T),["layouts","metadatas","settings"]);se()(V,"layouts.edit",Qc(V.layouts.edit)),j.mutate(V)},Z=(V,ie)=>{i({type:"MOVE_RELATION",fromIndex:V,toIndex:ie})},ne=(V,ie)=>{i({type:"MOVE_FIELD",fromIndex:V,toIndex:ie})},J=(V,ie,Me,Ge)=>{i(Me===Ge?{type:"REORDER_ROW",dragRowIndex:Me,dragIndex:V,hoverIndex:ie}:{type:"REORDER_DIFF_ROW",dragIndex:V,hoverIndex:ie,dragRowIndex:Me,hoverRowIndex:Ge})},ae=(V,ie)=>{i({type:"MOVE_ROW",fromIndex:V,toIndex:ie})};return e.createElement(hr,{isContentTypeView:o,attributes:L,modifiedData:T,slug:s,componentLayouts:M,selectedField:w,fieldForm:I,onMoveRelation:Z,onMoveField:ne,moveRow:ae,moveItem:J,setEditFieldToSelect:V=>{i({type:"SET_FIELD_TO_EDIT",name:V}),W()},isDraggingSibling:c,setIsDraggingSibling:p},e.createElement(Ce.o,null,e.createElement("form",{onSubmit:O},e.createElement(fe.T,{title:C({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:`Configure the view - ${At()(R)}`},{name:At()(R)}),subtitle:C({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.description.edit-settings"),defaultMessage:"Customize how the edit view will look like."}),navigationAction:e.createElement(h.rU,{startIcon:e.createElement(on.Z,null),onClick:V=>{V.preventDefault(),f()},to:"/"},C({id:"global.back",defaultMessage:"Back"})),primaryAction:e.createElement(me.z,{disabled:Lt()(D,T),startIcon:e.createElement(yt.Z,null),type:"submit"},C({id:"global.save",defaultMessage:"Save"}))}),e.createElement(Ze.D,null,e.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(Q.Z,{variant:"delta",as:"h2"},C({id:(0,y.OB)("containers.SettingPage.settings"),defaultMessage:"Settings"})),e.createElement(Te.r,null,e.createElement(ue.P,{col:6,s:12},e.createElement(We.P,{label:C({id:(0,y.OB)("containers.SettingPage.editSettings.entry.title"),defaultMessage:"Entry title"}),hint:C({id:(0,y.OB)("containers.SettingPage.editSettings.entry.title.description"),defaultMessage:"Set the display field of your entry"}),onChange:V=>{K({target:{name:"settings.mainField",value:V===""?null:V}})},value:T.settings.mainField},U.map(V=>e.createElement(be.W,{key:V,value:V},V))))),e.createElement(S.x,{paddingTop:2,paddingBottom:2},e.createElement(Zo.i,null)),e.createElement(Q.Z,{variant:"delta",as:"h3"},C({id:(0,y.OB)("containers.SettingPage.view"),defaultMessage:"View"})),e.createElement(ud,{attributes:L,editLayout:A,fields:$,onAddField:V=>{i({type:"ON_ADD_FIELD",name:V,fieldSizes:B})},onRemoveField:(V,ie)=>{i({type:"REMOVE_FIELD",rowIndex:V,fieldIndex:ie})}})))),e.createElement(h.QH,{bodyText:{id:(0,y.OB)("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(yt.Z,null),isConfirmButtonLoading:X,isOpen:b,onToggleDialog:Y,onConfirm:k,variantRightButton:"success-light"})),g&&e.createElement(Id,{onSubmit:x,onToggle:W,onMetaChange:q,onSizeChange:z,type:P()(L,[w,"type"],""),customFieldUid:P()(L,[w,"customField"],"")})))};Tr.defaultProps={isContentTypeView:!1,updateLayout:null},Tr.propTypes={components:n().object.isRequired,isContentTypeView:n().bool,mainLayout:n().shape({attributes:n().object.isRequired,info:n().object.isRequired,layouts:n().shape({list:n().array.isRequired,edit:n().array.isRequired}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired}).isRequired,slug:n().string.isRequired,updateLayout:n().func};var Dr=Tr,Ct=d(37617);const xd=()=>({type:Ct.ZA}),Od=(t,r)=>({type:Ct.Id,pagination:t,data:r}),Pd=()=>({type:Ct.MP});function wd(){return{type:Ct.c2}}const Fd=({components:t,contentType:r})=>{const{layouts:o}=r;return{contentType:r,components:t,displayedHeaders:o.list,type:Ct.Zz}},Ir=t=>({type:Ct.Rp,target:t});var ns=d(6680),kr=d(94638),rs=d(99223),Ld=d(70664);const Sd=()=>t=>t["content-manager_listView"]||Ld.E,Ad=()=>(0,dr.P1)(Sd(),t=>t),os=t=>{const{displayedHeaders:r}=t["content-manager_listView"];return r};var $d=Ad,Zd=d(35658),Bd=d(94547),xr=d(19786),qd=d(82884),Nd=d(47765),jd=d(8997),Wd=d(69033);const zd=(0,N.ZP)(F.k)`
  position: relative;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral150};
  padding-left: 1px;

  span {
    line-height: 0.6rem;
    font-size: 0.6rem;
  }
`,ss=({children:t,...r})=>e.createElement(zd,{justifyContent:"center",alignItems:"center",as:"span",...r},e.createElement(Q.Z,{variant:"sigma",textColor:"neutral600"},t));ss.propTypes={children:n().string.isRequired};var as=ss;const Or=({url:t,mime:r,alternativeText:o,name:s,ext:a,formats:l})=>{const i=(0,h.CR)(t);if(r.includes("image")){const u=l?.thumbnail?.url||null,m=(0,h.CR)(u)||i;return e.createElement(Wd.q,{src:m,alt:o||s,preview:!0})}const c=(0,h.mD)(a),p=s.length>100?`${s.substring(0,100)}...`:s;return e.createElement(Gt.u,{description:p},e.createElement(as,null,c))};Or.defaultProps={alternativeText:null,formats:null},Or.propTypes={alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired};var is=Or,Vd=d(25898);const ls=({value:t})=>e.createElement(Vd.H,null,t.map((r,o)=>{const s=`${r.id}${o}`;if(o===3){const a=`+${t.length-3}`;return e.createElement(as,{key:s,preview:!1},a)}return o>3?null:e.createElement(is,{key:s,...r})}));ls.propTypes={value:n().arrayOf(n().shape({alternativeText:n().string,ext:n().string.isRequired,formats:n().object,mime:n().string.isRequired,name:n().string.isRequired,url:n().string.isRequired})).isRequired};var Ud=ls,cs=d(6518),Hd=d(23866),Qd=d(96315);const ds=({type:t,value:r})=>{const{formatDate:o,formatTime:s,formatNumber:a}=(0,H.Z)();let l=r;if(t==="date"&&(l=o((0,Qd.Z)(r),{dateStyle:"full"})),t==="datetime"&&(l=o(r,{dateStyle:"full",timeStyle:"short"})),t==="time"){const[i,c,p]=r.split(":"),u=new Date;u.setHours(i),u.setMinutes(c),u.setSeconds(p),l=s(u,{numeric:"auto",style:"short"})}return["float","decimal"].includes(t)&&(l=a(r,{maximumFractionDigits:20})),["integer","biginteger"].includes(t)&&(l=a(r,{maximumFractionDigits:0})),vo()(l)};ds.propTypes={type:n().string.isRequired,value:n().any.isRequired};var Rt=ds;const Gd=(0,N.ZP)(Q.Z)`
  max-width: 500px;
`,Kd=async(t,r,o)=>{const{data:{results:s,pagination:a}}=await o(t);return r(),{results:s,pagination:a}},us=({fieldSchema:t,metadatas:r,name:o,entityId:s,value:a,contentType:l})=>{const{formatMessage:i}=(0,H.Z)(),{notifyStatus:c}=(0,kr.G)(),p=(0,e.useMemo)(()=>(0,y.IF)(`relations/${l.uid}/${s}/${o.split(".")[0]}`),[s,o,l]),[u,m]=(0,e.useState)(!1),{get:f}=(0,h.kY)(),g=e.createElement(F.k,{gap:1,wrap:"nowrap"},e.createElement(cs.C,null,a.count),i({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:a.count})),E=()=>{const M=i({id:(0,y.OB)("DynamicTable.relation-loaded"),defaultMessage:"Relations have been loaded"});c(M)},{data:b,status:v}=(0,st.useQuery)([t.targetModel,s],()=>Kd(p,E,f),{enabled:u,staleTime:0,select:M=>({...M,results:[...M.results].reverse()})});return e.createElement(S.x,{...h.UW},e.createElement(Ve.O,{label:g,size:"S",onOpen:()=>m(!0),onClose:()=>m(!1)},v!=="success"&&e.createElement(Ve.s,{"aria-disabled":!0},e.createElement(Hd.a,{small:!0},i({id:(0,y.OB)("DynamicTable.relation-loading"),defaultMessage:"Relations are loading"}))),v==="success"&&e.createElement(e.Fragment,null,b?.results.map(M=>e.createElement(Ve.s,{key:M.id,"aria-disabled":!0},e.createElement(Gd,{ellipsis:!0},e.createElement(Rt,{type:r.mainField.schema.type,value:M[r.mainField.name]||M.id})))),b?.pagination.total>10&&e.createElement(Ve.s,{"aria-disabled":!0,"aria-label":i({id:(0,y.OB)("DynamicTable.relation-more"),defaultMessage:"This relation contains more entities than displayed"})},e.createElement(Q.Z,null,"\u2026")))))};us.propTypes={contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({relation:n().string,targetModel:n().string,type:n().string.isRequired}).isRequired,metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,name:n().string.isRequired,entityId:n().oneOfType([n().string,n().number]).isRequired,value:n().object.isRequired};var Yd=us;const Xd=(0,N.ZP)(Q.Z)`
  max-width: 500px;
`,ms=({metadatas:t,value:r})=>e.createElement(Xd,{textColor:"neutral800",ellipsis:!0},e.createElement(Rt,{type:t.mainField.schema.type,value:r[t.mainField.name]??r.id}));ms.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string.isRequired,schema:n().shape({type:n().string.isRequired}).isRequired})}).isRequired,value:n().object.isRequired};var Jd=ms;const _d=(0,N.ZP)(Q.Z)`
  max-width: 500px;
`,ps=({value:t,metadatas:r})=>{const{formatMessage:o}=(0,H.Z)(),{mainField:{type:s,name:a}}=r,l=e.createElement(e.Fragment,null,e.createElement(cs.C,null,t.length)," ",o({id:"content-manager.containers.ListPage.items",defaultMessage:"{number, plural, =0 {items} one {item} other {items}}"},{number:t.length}));return e.createElement(S.x,{...h.UW},e.createElement(Ve.O,{label:l,size:"S"},t.map(i=>e.createElement(Ve.s,{key:i.id,"aria-disabled":!0},e.createElement(_d,{ellipsis:!0},e.createElement(Rt,{type:s,value:i[a]||i.id}))))))};ps.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().array.isRequired};var eu=ps;const tu=(0,N.ZP)(Q.Z)`
  max-width: 250px;
`,gs=({value:t,metadatas:r})=>{const{mainField:o}=r,s=t[o.name];return e.createElement(Gt.u,{label:s},e.createElement(tu,{textColor:"neutral800",ellipsis:!0},e.createElement(Rt,{type:o.type,value:s})))};gs.propTypes={metadatas:n().shape({mainField:n().shape({name:n().string,type:n().string,value:n().string})}).isRequired,value:n().object.isRequired};var nu=gs,ru=d(80022),fs=d.n(ru);function hs(t){return["oneToOne","manyToOne","oneToOneMorph"].includes(t)}function ou(t,r,o,s){if(t==="component"){const{mainField:{name:a,type:l}}=o;if(s?.repeatable)return r.length>0;const i=r?.[a];return a==="id"&&![void 0,null].includes(i)?!0:St(l)&&l!=="biginteger"&&a!=="id"?fs()(i):!Re()(i)}return t==="relation"?hs(s.relation)?!Re()(r):r?.count>0:St(t)&&t!=="biginteger"?fs()(r):t==="boolean"?r!==null:!Re()(r)}const ys=(0,N.ZP)(Q.Z)`
  max-width: 300px;
`,Pr=({content:t,fieldSchema:r,metadatas:o,name:s,rowId:a,contentType:l})=>{const{type:i}=r;if(!ou(i,t,o,r))return e.createElement(Q.Z,{textColor:"neutral800"},"-");switch(i){case"media":return r.multiple?e.createElement(Ud,{value:t}):e.createElement(is,{...t});case"relation":return hs(r.relation)?e.createElement(Jd,{metadatas:o,value:t}):e.createElement(Yd,{fieldSchema:r,metadatas:o,value:t,name:s,entityId:a,contentType:l});case"component":return r.repeatable===!0?e.createElement(eu,{value:t,metadatas:o}):e.createElement(nu,{value:t,metadatas:o});case"string":return e.createElement(Gt.u,{description:t},e.createElement(ys,{ellipsis:!0,textColor:"neutral800"},e.createElement(Rt,{type:i,value:t})));default:return e.createElement(ys,{ellipsis:!0,textColor:"neutral800"},e.createElement(Rt,{type:i,value:t}))}};Pr.defaultProps={content:void 0},Pr.propTypes={content:n().any,contentType:n().shape({uid:n().string.isRequired}).isRequired,fieldSchema:n().shape({component:n().string,multiple:n().bool,type:n().string.isRequired,repeatable:n().bool,relation:n().string}).isRequired,metadatas:n().object.isRequired,name:n().string.isRequired,rowId:n().oneOfType([n().string,n().number]).isRequired};var su=Pr;const wr=({canCreate:t,canDelete:r,contentType:o,headers:s,entriesToDelete:a,onClickDelete:l,onSelectRow:i,withMainAction:c,withBulkActions:p,rows:u})=>{const{push:m,location:{pathname:f}}=(0,te.k6)(),{formatMessage:g}=(0,H.Z)(),{trackUsage:E}=(0,h.rS)(),b=(0,de.fi)();return e.createElement(Zd.p,null,u.map((v,M)=>{const D=a.findIndex(w=>w===v.id)!==-1,T=g({id:"content-manager.components.DynamicTable.row-line",defaultMessage:"item line {number}"},{number:M});return e.createElement(Bd.Tr,{key:v.id,...(0,h.X7)({fn(){E("willEditEntryFromList"),m({pathname:`${f}/${v.id}`,state:{from:f},search:b})},condition:p})},c&&e.createElement(xr.Td,{...h.UW},e.createElement(qd.C,{"aria-label":g({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,jd.Pp)(v.firstname,v.lastname)}),checked:D,onChange:()=>{i({name:v.id,value:!D})}})),s.map(({key:w,cellFormatter:I,name:C,...R})=>e.createElement(xr.Td,{key:w},typeof I=="function"?I(v,{key:w,name:C,...R}):e.createElement(su,{content:v[C.split(".")[0]],name:C,contentType:o,...R,rowId:v.id}))),p&&e.createElement(xr.Td,null,e.createElement(F.k,{justifyContent:"end",...h.UW},e.createElement(ye.h,{forwardedAs:Et.rU,onClick:()=>{E("willEditEntryFromButton")},to:{pathname:`${f}/${v.id}`,state:{from:f},search:b},label:g({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:T}),noBorder:!0,icon:e.createElement(je.Z,null)}),t&&e.createElement(S.x,{paddingLeft:1},e.createElement(ye.h,{forwardedAs:Et.rU,to:{pathname:`${f}/create/clone/${v.id}`,state:{from:f},search:b},label:g({id:"app.component.table.duplicate",defaultMessage:"Duplicate {target}"},{target:T}),noBorder:!0,icon:e.createElement(Nd.Z,null)})),r&&e.createElement(S.x,{paddingLeft:1},e.createElement(ye.h,{onClick:()=>{E("willDeleteEntryFromList"),l(v.id)},label:g({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:T}),noBorder:!0,icon:e.createElement(He.Z,null)})))))}))};wr.defaultProps={canCreate:!1,canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},wr.propTypes={canCreate:n().bool,canDelete:n().bool,contentType:n().shape({uid:n().string.isRequired}).isRequired,entriesToDelete:n().array,headers:n().array.isRequired,onClickDelete:n().func,onSelectRow:n().func,rows:n().array,withBulkActions:n().bool,withMainAction:n().bool};var au=wr;const bs=({area:t,...r})=>{const o=Ut(t);return o?e.createElement("ul",null,o.map(s=>s.Component(r)?e.createElement(S.x,{key:s.name,padding:3,style:{textAlign:"center"}},e.createElement(s.Component,{...r})):null)):null};bs.propTypes={area:n().string.isRequired};var Es=bs;const vs=({isConfirmButtonLoading:t,isOpen:r,onToggleDialog:o,onConfirm:s})=>{const{formatMessage:a}=(0,H.Z)();return e.createElement(sn.V,{onClose:o,title:a({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:r},e.createElement(an.a,{icon:e.createElement(Pt.Z,null)},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(F.k,{justifyContent:"center"},e.createElement(Q.Z,{id:"confirm-description"},a({id:(0,y.OB)("popUpWarning.bodyMessage.contentType.delete.all"),defaultMessage:"Are you sure you want to delete these entries?"}))),e.createElement(F.k,null,e.createElement(Es,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),e.createElement(ln.c,{startAction:e.createElement(me.z,{onClick:o,variant:"tertiary"},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{onClick:s,variant:"danger-light",startIcon:e.createElement(He.Z,null),id:"confirm-delete",loading:t},a({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};vs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};var iu=vs;const Cs=({isConfirmButtonLoading:t,isOpen:r,onToggleDialog:o,onConfirm:s})=>{const{formatMessage:a}=(0,H.Z)();return e.createElement(sn.V,{onClose:o,title:a({id:"app.components.ConfirmDialog.title",defaultMessage:"Confirmation"}),labelledBy:"confirmation",describedBy:"confirm-description",isOpen:r},e.createElement(an.a,{icon:e.createElement(Pt.Z,null)},e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(F.k,{justifyContent:"center"},e.createElement(Q.Z,{id:"confirm-description"},a({id:"components.popUpWarning.message",defaultMessage:"Are you sure you want to delete this?"}))),e.createElement(F.k,null,e.createElement(Es,{area:"contentManager.listView.deleteModalAdditionalInfos"})))),e.createElement(ln.c,{startAction:e.createElement(me.z,{onClick:o,variant:"tertiary"},a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endAction:e.createElement(me.z,{onClick:s,variant:"danger-light",startIcon:e.createElement(He.Z,null),id:"confirm-delete",loading:t},a({id:"app.components.Button.confirm",defaultMessage:"Confirm"}))}))};Cs.propTypes={isConfirmButtonLoading:n().bool.isRequired,isOpen:n().bool.isRequired,onConfirm:n().func.isRequired,onToggleDialog:n().func.isRequired};var lu=Cs;function Rs({isPublished:t}){const{formatMessage:r}=(0,H.Z)(),o=t?"success":"secondary";return e.createElement(Pn.q,{showBullet:!1,variant:o,size:"S",width:"min-content"},e.createElement(Q.Z,{fontWeight:"bold",textColor:`${o}700`},r({id:(0,y.OB)(`containers.List.${t?"published":"draft"}`),defaultMessage:t?"Published":"Draft"})))}Rs.propTypes={isPublished:n().bool.isRequired};const cu=(()=>window&&window.strapi&&window.strapi.isEE?d(57047).Z:d(42814).Z)(),Fr=t=>{let{canCreate:r,canDelete:o,contentTypeName:s,action:a,isBulkable:l,isLoading:i,onConfirmDelete:c,onConfirmDeleteAll:p,layout:u,rows:m}=t;const{runHookWaterfall:f}=(0,h.j1)(),g=u.contentType.options?.draftAndPublish??!1,{formatMessage:E}=(0,H.Z)(),b=(0,_.v9)(os),v=(0,e.useMemo)(()=>{const D=f($e.No,{displayedHeaders:b,layout:u}).displayedHeaders.map(w=>{const{fieldSchema:I,metadatas:C,name:R}=w;return{...w,metadatas:{...C,label:E({id:(0,y.OB)(`containers.ListPage.table-headers.${R}`),defaultMessage:C.label})},name:I.type==="relation"?`${R}.${C.mainField.name}`:R}});g&&D.push({key:"__published_at_temp_key__",name:"publishedAt",fieldSchema:{type:"custom"},metadatas:{label:E({id:(0,y.OB)("containers.ListPage.table-headers.publishedAt"),defaultMessage:"publishedAt"}),searchable:!1,sortable:!0},cellFormatter(w){let{publishedAt:I}=w;return e.createElement(Rs,{isPublished:!!I})}});const T=cu(u);return T&&D.push(T),D},[f,b,u,g,E]);return e.createElement(h.tM,{components:{ConfirmDialogDelete:lu,ConfirmDialogDeleteAll:iu},contentType:s,action:a,isLoading:i,headers:v,onConfirmDelete:c,onConfirmDeleteAll:p,onOpenDeleteAllModalTrackedEvent:"willBulkDeleteEntries",rows:m,withBulkActions:!0,withMainAction:o&&l},e.createElement(au,{canCreate:r,canDelete:o,contentType:u.contentType,headers:v,rows:m,withBulkActions:!0,withMainAction:o&&l}))};Fr.defaultProps={action:void 0},Fr.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,contentTypeName:n().string.isRequired,action:n().node,isBulkable:n().bool.isRequired,isLoading:n().bool.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,onConfirmDelete:n().func.isRequired,onConfirmDeleteAll:n().func.isRequired,rows:n().array.isRequired};var du=Fr;const uu=["json","component","media","richtext","dynamiczone","password"],mu=["createdAt","updatedAt"];var pu=(t,r)=>{const{allPermissions:o}=(0,h.vn)(),s=(0,h.ZT)(o,[{action:"plugin::content-manager.explorer.read",subject:r}]),a=P()(s,["0","properties","fields"],[]);return Object.keys(P()(t,["attributes"]),{}).filter(c=>{const p=P()(t,["attributes",c],{});return!(!p.type||uu.includes(p.type)||!a.includes(c)&&c!=="id"&&!mu.includes(c))}).sort()},gu=d(5644);const Ms=({displayedFilters:t})=>{const[r,o]=(0,e.useState)(!1),{formatMessage:s}=(0,H.Z)(),a=(0,e.useRef)(),{trackUsage:l}=(0,h.rS)(),i=()=>{r||l("willFilterEntries"),o(c=>!c)};return e.createElement(e.Fragment,null,e.createElement(S.x,{paddingTop:1,paddingBottom:1},e.createElement(me.z,{variant:"tertiary",ref:a,startIcon:e.createElement(gu.Z,null),onClick:i,size:"S"},s({id:"app.utils.filters",defaultMessage:"Filters"})),r&&e.createElement(h.J5,{displayedFilters:t,isVisible:r,onToggle:i,source:a})),e.createElement(h.W$,{filtersSchema:t}))};Ms.propTypes={displayedFilters:n().arrayOf(n().shape({name:n().string.isRequired,metadatas:n().shape({label:n().string}),fieldSchema:n().shape({type:n().string})})).isRequired};var fu=Ms;const Ts=({contentType:t,slug:r,metadatas:o})=>{const{formatMessage:s}=(0,H.Z)(),l=pu(t,r).map(i=>{const c=t.attributes[i],{type:p,enum:u}=c,m={name:"didFilterEntries",properties:{useRelation:p==="relation"}},{mainField:f,label:g}=o[i].list;return{name:i,metadatas:{label:s({id:g,defaultMessage:g})},fieldSchema:{type:p,options:u,mainField:f},trackedEvent:m}});return e.createElement(fu,{displayedFilters:l})};Ts.propTypes={contentType:n().object.isRequired,metadatas:n().object.isRequired,slug:n().string.isRequired};var hu=Ts,yu=t=>Object.keys(t).reduce((o,s)=>{const a=t[s];return(0,y.ko)(a)&&o.push(s),o},[]).sort();const Ds=({layout:t})=>{const r=(0,_.I0)(),o=(0,_.v9)(os),{trackUsage:s}=(0,h.rS)(),{formatMessage:a}=(0,H.Z)(),l=yu(t.contentType.attributes).map(p=>{const u=t.contentType.metadatas[p].list;return{name:p,intlLabel:{id:u.label,defaultMessage:u.label}}}),i=o.map(({name:p})=>p),c=p=>{if(s("didChangeDisplayedFields"),p.length<i.length){const u=i.filter(m=>p.indexOf(m)===-1);r(Ir({name:u[0],value:!0}))}else{const u=p.filter(m=>i.indexOf(m)===-1);r(Ir({name:u[0],value:!1}))}};return e.createElement(S.x,{paddingTop:1,paddingBottom:1},e.createElement(We.P,{"aria-label":"change displayed fields",value:i,onChange:c,customizeContent:p=>a({id:(0,Ee.Z)("select.currently.selected"),defaultMessage:"{count} currently selected"},{count:p.length}),multi:!0,size:"S"},l.map(p=>e.createElement(be.W,{key:p.name,value:p.name},a({id:p.intlLabel.id||p.name,defaultMessage:p.intlLabel.defaultMessage||p.name})))))};Ds.propTypes={layout:n().shape({contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired};var bu=(0,e.memo)(Ds);const Lr=({pagination:t})=>e.createElement(S.x,{paddingTop:4},e.createElement(F.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(h.v4,{trackedEvent:"willChangeNumberOfEntriesPerPage"}),e.createElement(h.tU,{pagination:t})));Lr.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},Lr.propTypes={pagination:n().shape({page:n().number,pageCount:n().number,pageSize:n().number,total:n().number})};var Eu=Lr;const vu=Ie.Z.contentManager,Cu=(0,N.ZP)(S.x)`
  svg {
    path {
      fill: ${({theme:t})=>t.colors.neutral900};
    }
  }
`;function Is({canCreate:t,canDelete:r,canRead:o,data:s,getData:a,getDataSucceeded:l,isLoading:i,layout:c,pagination:p,slug:u}){const{total:m}=p,{contentType:f}=c,{metadatas:g,settings:{bulkable:E,filterable:b,searchable:v}}=f,M=(0,h.lm)(),{trackUsage:D}=(0,h.rS)(),{refetchPermissions:T}=(0,h.vn)(),w=(0,e.useRef)(D),I=(0,e.useRef)(T),{notifyStatus:C}=(0,kr.G)(),{formatAPIError:R}=(0,h.So)(y.OB);(0,h.go)();const[{query:L}]=(0,h.Kx)(),B=xo(L),U=(0,rn.stringify)({plugins:L.plugins},{encode:!1}),{pathname:A}=(0,te.TH)(),{push:G}=(0,te.k6)(),{formatMessage:$}=(0,H.Z)(),K=f.options?.draftAndPublish??!1,W=(0,h.kY)(),{post:Y,del:q}=W,z=(0,e.useRef)(""),x=(0,e.useCallback)(async(J,ae)=>{a();try{const V=ae?{cancelToken:ae.token}:null,{data:{results:ie,pagination:Me}}=await W.get(J,V);C($({id:(0,y.OB)("utils.data-loaded"),defaultMessage:"{number, plural, =1 {# entry has} other {# entries have}} successfully been loaded"},{number:Me.count})),l(Me,ie)}catch(V){if(ze.default.isCancel(V))return;if((V?.response?.status??null)===403){await I.current(),M({type:"info",message:{id:(0,y.OB)("permissions.not-allowed.update")}}),G("/");return}M({type:"warning",message:{id:(0,y.OB)("error.model.fetch")}})}},[$,a,l,C,G,M,W]),O=(0,e.useCallback)(async J=>{try{await Y((0,y.IF)(`collection-types/${u}/actions/bulkDelete`),{ids:J});const ae=(0,y.IF)(`collection-types/${u}${B}`);x(ae),w.current("didBulkDeleteEntries")}catch(ae){M({type:"warning",message:R(ae)})}},[x,B,u,M,R,Y]),j=(0,e.useCallback)(async J=>{try{await q((0,y.IF)(`collection-types/${u}/${J}`));const ae=(0,y.IF)(`collection-types/${u}${B}`);x(ae),M({type:"success",message:{id:(0,y.OB)("success.record.delete")}})}catch(ae){M({type:"warning",message:R(ae)})}},[u,B,x,M,R,q]);(0,e.useEffect)(()=>{const ae=ze.default.CancelToken.source(),V=o,ie=(0,y.IF)(`collection-types/${u}${B}`);return V&&ie.includes(z.current)&&x(ie,ae),()=>{z.current=u,ae.cancel("Operation canceled by the user.")}},[o,a,u,B,l,x]);const X=$({id:(0,y.OB)("header.name"),defaultMessage:"Content"}),k=$({id:f.info.displayName,defaultMessage:f.info.displayName||X}),Z=o?$({id:(0,y.OB)("pages.ListView.header-subtitle"),defaultMessage:"{number, plural, =0 {# entries} one {# entry} other {# entries}} found"},{number:m}):null,ne=J=>t?e.createElement(me.z,{...J,forwardedAs:Et.rU,onClick:()=>{const ae=K?{status:"draft"}:{};w.current("willCreateEntry",ae)},to:{pathname:`${A}/create`,search:L.plugins?U:""},startIcon:e.createElement(Ft.Z,null),style:{textDecoration:"none"}},$({id:(0,y.OB)("HeaderLayout.button.label-add-entry"),defaultMessage:"Create new entry"})):null;return e.createElement(Ce.o,{"aria-busy":i},e.createElement(fe.T,{primaryAction:ne(),subtitle:Z,title:k,navigationAction:e.createElement(h.rU,{startIcon:e.createElement(on.Z,null),to:"/content-manager/"},$({id:"global.back",defaultMessage:"Back"}))}),!o&&e.createElement(rs.Z,{endActions:e.createElement(Ht,{area:"contentManager.listView.actions"})}),o&&e.createElement(rs.Z,{endActions:e.createElement(e.Fragment,null,e.createElement(Ht,{area:"contentManager.listView.actions"}),e.createElement(bu,{layout:c}),e.createElement(h.jW,{permissions:vu.collectionTypesConfigurations},e.createElement(Cu,{paddingTop:1,paddingBottom:1},e.createElement(ye.h,{onClick:()=>{D("willEditListLayout")},forwardedAs:Et.rU,to:{pathname:`${u}/configurations/list`,search:U},icon:e.createElement(No.Z,null),label:$({id:"app.links.configure-view",defaultMessage:"Configure the view"})})))),startActions:e.createElement(e.Fragment,null,v&&e.createElement(h.m,{label:$({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:k}),placeholder:$({id:"global.search",defaultMessage:"Search"}),trackedEvent:"didSearch"}),b&&e.createElement(hu,{contentType:f,slug:u,metadatas:g}))}),e.createElement(Ze.D,null,o?e.createElement(e.Fragment,null,e.createElement(du,{canCreate:t,canDelete:r,contentTypeName:k,onConfirmDeleteAll:O,onConfirmDelete:j,isBulkable:E,isLoading:i,layout:c,rows:s,action:ne({variant:"secondary"})}),e.createElement(Eu,{pagination:{pageCount:p?.pageCount||1}})):e.createElement(h.ZF,null)))}Is.propTypes={canCreate:n().bool.isRequired,canDelete:n().bool.isRequired,canRead:n().bool.isRequired,data:n().array.isRequired,layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,info:n().shape({displayName:n().string.isRequired}).isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired}).isRequired}).isRequired,isLoading:n().bool.isRequired,getData:n().func.isRequired,getDataSucceeded:n().func.isRequired,pagination:n().shape({total:n().number.isRequired,pageCount:n().number}).isRequired,slug:n().string.isRequired};const Ru=$d();function Mu(t){return(0,ns.bindActionCreators)({getData:xd,getDataSucceeded:Od,onChangeListHeaders:Ir,onResetListHeaders:Pd},t)}const Tu=(0,_.$j)(Ru,Mu);var Du=(0,ns.compose)(Tu)((0,e.memo)(Is,xe()));const Sr=t=>{const r=(0,e.useMemo)(()=>(0,y.TA)(t.slug),[t.slug]),{isLoading:o,allowedActions:s}=(0,h.ss)(r,t.permissions);return o?e.createElement(h.dO,null):e.createElement(Du,{...t,...s})};Sr.defaultProps={permissions:[]},Sr.propTypes={permissions:n().array,slug:n().string.isRequired};var Iu=(0,e.memo)(Sr,(t,r)=>{const o=(0,h.e5)(t,r);return Object.keys(o).filter(a=>a!=="state").length>0});const ks=({layout:t,...r})=>{const o=(0,_.I0)(),{replace:s}=(0,te.k6)(),[{query:a,rawQuery:l}]=(0,h.Kx)(),i=(0,de.r5)(a,r.slug,"listView"),c=(0,de.Ky)(r.slug);return(0,e.useEffect)(()=>{l||s(c)},[l,s,c]),(0,e.useEffect)(()=>{o(Fd(t))},[o,t]),(0,e.useEffect)(()=>()=>{o(wd())},[o]),i?e.createElement(Iu,{...r,layout:t,permissions:i}):null};ks.propTypes={layout:n().exact({components:n().object.isRequired,contentType:n().shape({attributes:n().object.isRequired,metadatas:n().object.isRequired,layouts:n().shape({list:n().array.isRequired}).isRequired,options:n().object.isRequired,settings:n().object.isRequired,pluginOptions:n().object}).isRequired}).isRequired,slug:n().string.isRequired};var ku=ks;const Ar=({modifiedData:t,onChange:r,sortOptions:o})=>{const{formatMessage:s}=(0,H.Z)(),{settings:a,metadatas:l}=t;return e.createElement(F.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(Q.Z,{variant:"delta",as:"h2"},s({id:(0,y.OB)("containers.SettingPage.settings"),defaultMessage:"Settings"})),e.createElement(F.k,{justifyContent:"space-between",gap:4},e.createElement(S.x,{width:"100%"},e.createElement(Zt.s,{label:s({id:(0,y.OB)("form.Input.search"),defaultMessage:"Enable search"}),onChange:i=>{r({target:{name:"settings.searchable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.searchable",checked:a.searchable})),e.createElement(S.x,{width:"100%"},e.createElement(Zt.s,{label:s({id:(0,y.OB)("form.Input.filters"),defaultMessage:"Enable filters"}),onChange:i=>{r({target:{name:"settings.filterable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.filterable",checked:a.filterable})),e.createElement(S.x,{width:"100%"},e.createElement(Zt.s,{label:s({id:(0,y.OB)("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"}),onChange:i=>{r({target:{name:"settings.bulkable",value:i.target.checked}})},onLabel:s({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:s({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"}),name:"settings.bulkable",checked:a.bulkable}))),e.createElement(Te.r,{gap:4},e.createElement(ue.P,{s:12,col:6},e.createElement(We.P,{label:s({id:(0,y.OB)("form.Input.pageEntries"),defaultMessage:"Entries per page"}),hint:s({id:(0,y.OB)("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."}),onChange:i=>r({target:{name:"settings.pageSize",value:i}}),name:"settings.pageSize",value:t.settings.pageSize||""},[10,20,50,100].map(i=>e.createElement(be.W,{key:i,value:i},i)))),e.createElement(ue.P,{s:12,col:3},e.createElement(We.P,{label:s({id:(0,y.OB)("form.Input.defaultSort"),defaultMessage:"Default sort attribute"}),onChange:i=>r({target:{name:"settings.defaultSortBy",value:i}}),name:"settings.defaultSortBy",value:t.settings.defaultSortBy||""},o.map(i=>e.createElement(be.W,{key:i,value:i},l[i].list.label||i)))),e.createElement(ue.P,{s:12,col:3},e.createElement(We.P,{label:s({id:(0,y.OB)("form.Input.sort.order"),defaultMessage:"Default sort order"}),onChange:i=>r({target:{name:"settings.defaultSortOrder",value:i}}),name:"settings.defaultSortOrder",value:t.settings.defaultSortOrder||""},["ASC","DESC"].map(i=>e.createElement(be.W,{key:i,value:i},i))))))};Ar.defaultProps={modifiedData:{},sortOptions:[]},Ar.propTypes={modifiedData:n().object,onChange:n().func.isRequired,sortOptions:n().array};var xu=Ar;const $r=(0,N.ZP)(F.k)`
  height: ${({theme:t})=>t.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:t})=>t.spaces[3]};
  }
`,Ou=(0,N.ZP)($r)`
  border-right: 1px solid
    ${({theme:t,isSibling:r})=>r?t.colors.neutral150:t.colors.primary200};

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,Pu=(0,N.ZP)(F.k)`
  border: 1px solid
    ${({theme:t,isSibling:r})=>r?t.colors.neutral150:t.colors.primary200};

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:t,isSibling:r})=>r?void 0:t.colors.primary600};
    }
  }
`,wu=(0,N.ZP)(Q.Z)`
  max-width: ${72/16}rem;
`;function Bt({labelField:t,transparent:r,isSibling:o}){return e.createElement(Pu,{background:o?"neutral100":"primary100",display:"inline-flex",gap:3,hasRadius:!0,justifyContent:"space-between",transparent:r,isSibling:o,"max-height":(0,h.Q1)(32),maxWidth:"min-content",opacity:r?0:1},e.createElement(F.k,{gap:3},e.createElement(Ou,{alignItems:"center",cursor:"all-scroll",padding:3},e.createElement(Je.Z,null)),e.createElement(wu,{textColor:o?void 0:"primary600",fontWeight:"bold",ellipsis:!0},t)),e.createElement(F.k,null,e.createElement($r,{alignItems:"center"},e.createElement(je.Z,null)),e.createElement($r,{alignItems:"center"},e.createElement(Kt.Z,null))))}Bt.defaultProps={isSibling:!1,transparent:!1},Bt.propTypes={isSibling:n().bool,labelField:n().string.isRequired,transparent:n().bool};const Zr=N.ZP.button`
  display: flex;
  align-items: center;
  height: ${({theme:t})=>t.spaces[7]};

  &:last-child {
    padding: 0 ${({theme:t})=>t.spaces[3]};
  }
`,xs=(0,N.ZP)(Zr)`
  padding: 0 ${({theme:t})=>t.spaces[3]};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral150};
  cursor: all-scroll;

  svg {
    width: ${12/16}rem;
    height: ${12/16}rem;
  }
`,Fu=(0,N.ZP)(F.k)`
  max-height: ${32/16}rem;
  cursor: pointer;

  svg {
    width: ${10/16}rem;
    height: ${10/16}rem;

    path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }

  &:hover {
    background-color: ${({theme:t})=>t.colors.primary100};
    border-color: ${({theme:t})=>t.colors.primary200};

    svg {
      path {
        fill: ${({theme:t})=>t.colors.primary600};
      }
    }

    ${Q.Z} {
      color: ${({theme:t})=>t.colors.primary600};
    }

    ${xs} {
      border-right: 1px solid ${({theme:t})=>t.colors.primary200};
    }
  }
`,Lu=(0,N.ZP)(S.x)`
  &:last-child {
    padding-right: ${({theme:t})=>t.spaces[3]};
  }
`,Os=({index:t,isDraggingSibling:r,labelField:o,onClickEditField:s,onMoveField:a,onRemoveField:l,name:i,setIsDraggingSibling:c})=>{const{formatMessage:p}=(0,H.Z)(),u=(0,e.useRef)(null),m=(0,e.useRef)(null),[,f]=(0,e.useState)(!1),g=(0,e.useRef)(),E=()=>{g.current&&g.current.click()},[,b]=(0,dn.useDrop)({accept:y._Q.FIELD,hover(w,I){if(!m.current)return;const C=w.index,R=t;if(C===R)return;const L=m.current.getBoundingClientRect(),B=(L.right-L.left)/2,A=I.getClientOffset().x-L.left;C>R&&A>B||C<R&&A<B||(a(C,R),w.index=R)}}),[{isDragging:v},M,D]=(0,dn.useDrag)({type:y._Q.FIELD,item(){return{index:t,labelField:o,name:i}},collect:w=>({isDragging:w.isDragging()}),end(){c(!1)}});(0,e.useEffect)(()=>{D((0,xt.rX)(),{captureDraggingState:!1})},[D]),(0,e.useEffect)(()=>{v&&c(!0)},[v,c]),(0,e.useEffect)(()=>{r||f(w=>!w)},[r]);const T={dragRef:M(u),dropRef:b(m)};return e.createElement(Lu,{ref:T?T.dropRef:null},v&&e.createElement(Bt,{transparent:!0,labelField:o}),!v&&r&&e.createElement(Bt,{isSibling:!0,labelField:o}),!v&&!r&&e.createElement(Fu,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:E,isDragging:v},e.createElement(F.k,{gap:3},e.createElement(xs,{as:"span","aria-label":p({id:(0,y.OB)("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:o}),onClick:w=>w.stopPropagation(),ref:T.dragRef,type:"button"},e.createElement(Je.Z,null)),e.createElement(Q.Z,{fontWeight:"bold"},o)),e.createElement(F.k,{paddingLeft:3},e.createElement(Zr,{ref:g,onClick:w=>{w.stopPropagation(),s(i)},"aria-label":p({id:(0,y.OB)("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:o}),type:"button"},e.createElement(je.Z,null)),e.createElement(Zr,{onClick:l,"data-testid":`delete-${i}`,"aria-label":p({id:(0,y.OB)("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:o}),type:"button"},e.createElement(Kt.Z,null)))))};Os.propTypes={index:n().number.isRequired,isDraggingSibling:n().bool.isRequired,labelField:n().string.isRequired,name:n().string.isRequired,onClickEditField:n().func.isRequired,onMoveField:n().func.isRequired,onRemoveField:n().func.isRequired,setIsDraggingSibling:n().func.isRequired};var Su=Os;const Ps=(0,N.ZP)(S.x)`
  flex: ${({size:t})=>t};
`,Au=(0,N.ZP)(Ps)`
  overflow-x: scroll;
  overflow-y: hidden;
`,$u=(0,N.ZP)(Ps)`
  max-width: ${32/16}rem;
`,ws=({displayedFields:t,listRemainingFields:r,metadatas:o,onAddField:s,onClickEditField:a,onMoveField:l,onRemoveField:i})=>{const{formatMessage:c}=(0,H.Z)(),[p,u]=(0,e.useState)(!1),[m,f]=(0,e.useState)(null),g=(0,e.useRef)();function E(...v){f("add"),s(...v)}function b(...v){f("remove"),i(...v)}return(0,e.useEffect)(()=>{m==="add"&&g?.current&&(g.current.scrollLeft=g.current.scrollWidth)},[t,m]),e.createElement(e.Fragment,null,e.createElement(S.x,{paddingBottom:4},e.createElement(Q.Z,{variant:"delta",as:"h2"},c({id:(0,y.OB)("containers.SettingPage.view"),defaultMessage:"View"}))),e.createElement(F.k,{paddingTop:4,paddingLeft:4,paddingRight:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0},e.createElement(Au,{size:"1",paddingBottom:4,ref:g},e.createElement(F.k,{gap:3},t.map((v,M)=>e.createElement(Su,{key:v,index:M,isDraggingSibling:p,onMoveField:l,onClickEditField:a,onRemoveField:D=>b(D,M),name:v,labelField:o[v].list.label||v,setIsDraggingSibling:u})))),e.createElement($u,{size:"auto",paddingBottom:4},e.createElement(Ve.O,{label:c({id:(0,y.OB)("components.FieldSelect.label"),defaultMessage:"Add a field"}),as:ye.h,icon:e.createElement(Ft.Z,null),disabled:r.length<=0,"data-testid":"add-field"},r.map(v=>e.createElement(Ve.s,{key:v,onClick:()=>E(v)},o[v].list.label||v))))))};ws.propTypes={displayedFields:he.PropTypes.array.isRequired,listRemainingFields:he.PropTypes.array.isRequired,metadatas:he.PropTypes.objectOf(he.PropTypes.shape({list:he.PropTypes.shape({label:he.PropTypes.string})})).isRequired,onAddField:he.PropTypes.func.isRequired,onClickEditField:he.PropTypes.func.isRequired,onMoveField:he.PropTypes.func.isRequired,onRemoveField:he.PropTypes.func.isRequired};var Zu=ws;const Bu=(0,N.ZP)(F.k)`
  svg {
    width: ${32/16}rem;
    height: ${24/16}rem;
    margin-right: ${({theme:t})=>t.spaces[3]};
  }
`,Fs=({attributes:t,fieldForm:r,fieldToEdit:o,onCloseModal:s,onChangeEditLabel:a,onSubmit:l,type:i})=>{const{formatMessage:c}=(0,H.Z)(),p=t[o].relationType;let u=!["media","relation"].includes(i);return["oneWay","oneToOne","manyToOne"].includes(p)&&(u=!0),e.createElement(Qo.P,{onClose:s,labelledBy:"title"},e.createElement("form",{onSubmit:l},e.createElement(Go.x,null,e.createElement(Bu,null,e.createElement(_o,{type:i}),e.createElement(Q.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:(0,y.OB)("containers.ListSettingsView.modal-form.edit-label"),defaultMessage:"Edit {fieldName}"},{fieldName:At()(o)})))),e.createElement(Ko.f,null,e.createElement(Te.r,{gap:4},e.createElement(ue.P,{s:12,col:6},e.createElement(kn.o,{id:"label-input",label:c({id:(0,y.OB)("form.Input.label"),defaultMessage:"Label"}),name:"label",onChange:m=>a(m),value:r.label,hint:c({id:(0,y.OB)("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"})})),u&&e.createElement(ue.P,{s:12,col:6},e.createElement(Zt.s,{"data-testid":"Enable sort on this field",checked:r.sortable,label:c({id:(0,y.OB)("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",onChange:m=>a({target:{name:"sortable",value:m.target.checked}}),onLabel:c({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"on"}),offLabel:c({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"off"})})))),e.createElement(Yo.m,{startActions:e.createElement(me.z,{onClick:s,variant:"tertiary"},c({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(me.z,{type:"submit"},c({id:"global.finish",defaultMessage:"Finish"}))})))};Fs.propTypes={attributes:n().objectOf(n().shape({relationType:n().string})).isRequired,fieldForm:n().shape({label:n().string,sortable:n().bool}).isRequired,fieldToEdit:n().string.isRequired,onChangeEditLabel:n().func.isRequired,onCloseModal:n().func.isRequired,onSubmit:n().func.isRequired,type:n().string.isRequired};var qu=Fs,Nu=(t,r)=>({...t,initialData:r,modifiedData:r});const Br={fieldForm:{},fieldToEdit:"",initialData:{},modifiedData:{}};var ju=(t=Br,r)=>(0,sr.ZP)(t,o=>{const s=["modifiedData","layouts","list"];switch(r.type){case"ADD_FIELD":{const a=P()(t,s,[]);se()(o,s,[...a,r.item]);break}case"MOVE_FIELD":{const a=P()(t,s,[]),{originalIndex:l,atIndex:i}=r;se()(o,s,(0,y.W3)(a,l,i));break}case"ON_CHANGE":{se()(o,["modifiedData",...r.keys.split(".")],r.value);break}case"ON_CHANGE_FIELD_METAS":{se()(o,["fieldForm",r.name],r.value);break}case"REMOVE_FIELD":{const a=P()(t,s,[]);se()(o,s,a.filter((l,i)=>r.index!==i));break}case"SET_FIELD_TO_EDIT":{const{fieldToEdit:a}=r;o.fieldToEdit=a,o.fieldForm.label=P()(o,["modifiedData","metadatas",a,"list","label"],""),o.fieldForm.sortable=P()(o,["modifiedData","metadatas",a,"list","sortable"],"");break}case"UNSET_FIELD_TO_EDIT":{o.fieldForm={},o.fieldToEdit="";break}case"SUBMIT_FIELD_FORM":{const a=["modifiedData","metadatas",t.fieldToEdit,"list"];se()(o,[...a,"label"],t.fieldForm.label),se()(o,[...a,"sortable"],t.fieldForm.sortable);break}default:return o}});const Wu=["media","richtext","dynamiczone","relation","component","json"],Ls=({layout:t,slug:r})=>{const{put:o}=(0,h.kY)(),{formatMessage:s}=(0,H.Z)(),{trackUsage:a}=(0,h.rS)(),l=(0,de.fi)(),i=(0,h.lm)(),{refetchData:c}=(0,e.useContext)(Le),[p,u]=(0,e.useState)(!1),m=()=>u(O=>!O),[f,g]=(0,e.useReducer)(ju,Br,()=>Nu(Br,t)),{fieldToEdit:E,fieldForm:b,initialData:v,modifiedData:M}=f,D=!Re()(b),{attributes:T}=t,w=M.layouts.list,I=()=>{const{settings:{pageSize:O,defaultSortBy:j,defaultSortOrder:X},kind:k,uid:Z}=v,ne=`${j}:${X}`,J=`${(0,rn.stringify)({page:1,pageSize:O,sort:ne},{encode:!1})}${l?`&${l}`:""}`;return`/content-manager/${k}/${Z}?${J}`},C=({target:{name:O,value:j}})=>{g({type:"ON_CHANGE",keys:O,value:O==="settings.pageSize"?parseInt(j,10):j})},R=async()=>{const O=On()(M,["layouts","settings","metadatas"]);K.mutate(O)},L=O=>{g({type:"ADD_FIELD",item:O})},B=(O,j)=>{O.stopPropagation(),w.length===1?i({type:"info",message:{id:(0,y.OB)("notification.info.minimumFields")}}):g({type:"REMOVE_FIELD",index:j})},U=O=>{O.preventDefault(),m(),a("willSaveContentTypeLayout")},A=O=>{g({type:"SET_FIELD_TO_EDIT",fieldToEdit:O})},G=()=>{g({type:"UNSET_FIELD_TO_EDIT"})},$=O=>{O.preventDefault(),g({type:"SUBMIT_FIELD_FORM"}),G()},K=(0,st.useMutation)(O=>o(`/content-manager/content-types/${r}/configuration`,O),{onSuccess(){a("didEditListSettings"),c()},onError(){i({type:"warning",message:{id:"notification.error"}})}}),{isLoading:W}=K,Y=({target:{name:O,value:j}})=>{g({type:"ON_CHANGE_FIELD_METAS",name:O,value:j})},q=Object.entries(T).filter(([O,j])=>(0,y.ko)(j)&&!w.includes(O)).map(([O])=>O).sort(),z=Object.entries(T).filter(([,O])=>!Wu.includes(O.type)).map(([O])=>O),x=(O,j)=>{g({type:"MOVE_FIELD",originalIndex:O,atIndex:j})};return e.createElement(we.A,null,e.createElement(Ce.o,{"aria-busy":W},e.createElement("form",{onSubmit:U},e.createElement(fe.T,{navigationAction:e.createElement(h.rU,{startIcon:e.createElement(on.Z,null),to:I,id:"go-back"},s({id:"global.back",defaultMessage:"Back"})),primaryAction:e.createElement(me.z,{size:"S",startIcon:e.createElement(yt.Z,null),disabled:Lt()(M,v),type:"submit"},s({id:"global.save",defaultMessage:"Save"})),subtitle:s({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:s({id:(0,y.OB)("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:At()(M.info.displayName)})}),e.createElement(Ze.D,null,e.createElement(S.x,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(xu,{modifiedData:M,onChange:C,sortOptions:z}),e.createElement(S.x,{paddingTop:6,paddingBottom:6},e.createElement(Zo.i,null)),e.createElement(Zu,{listRemainingFields:q,displayedFields:w,onAddField:L,onClickEditField:A,onMoveField:x,onRemoveField:B,metadatas:M.metadatas}))),e.createElement(h.QH,{bodyText:{id:(0,y.OB)("popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:e.createElement(yt.Z,null),isConfirmButtonLoading:W,isOpen:p,onToggleDialog:m,onConfirm:R,variantRightButton:"success-light"})),D&&e.createElement(qu,{attributes:T,fieldForm:b,fieldToEdit:E,onChangeEditLabel:Y,onCloseModal:G,onSubmit:$,type:P()(T,[E,"type"],"text")})))};Ls.propTypes={layout:n().shape({uid:n().string.isRequired,settings:n().shape({bulkable:n().bool,defaultSortBy:n().string,defaultSortOrder:n().string,filterable:n().bool,pageSize:n().number,searchable:n().bool}).isRequired,metadatas:n().object.isRequired,options:n().object.isRequired,attributes:n().objectOf(n().shape({type:n().string})).isRequired}).isRequired,slug:n().string.isRequired};var zu=(0,e.memo)(Ls),Vu=()=>e.createElement(S.x,{padding:8},e.createElement(h.Hn,null));const Ss=Ie.Z.contentManager,As=({match:{params:{slug:t},url:r}})=>{const{isLoading:o,layout:s,updateLayout:a}=(0,de.zE)(t),{rawContentTypeLayout:l,rawComponentsLayouts:i}=(0,e.useMemo)(()=>{let m={},f={};return s.contentType&&(m=(0,y.du)(s.contentType)),s.components&&(f=Object.keys(s.components).reduce((g,E)=>(g[E]=(0,y.du)(s.components[E]),g),{})),{rawContentTypeLayout:m,rawComponentsLayouts:f}},[s]);if((s?.contentType?.uid??null)!==t||o)return e.createElement(h.dO,null);const p=({location:{state:m},history:{goBack:f},match:{params:{id:g,origin:E}}},b)=>e.createElement(b,{slug:t,layout:s,state:m,goBack:f,id:g,origin:E}),u=[{path:"create/clone/:origin",comp:cn},{path:"create",comp:cn},{path:":id",comp:cn},{path:"",comp:ku}].map(({path:m,comp:f})=>e.createElement(te.AW,{key:m,path:`${r}/${m}`,render:g=>p(g,f)}));return e.createElement(Ke.ErrorBoundary,{FallbackComponent:Vu},e.createElement(Se.Provider,{value:s},e.createElement(te.rs,null,e.createElement(te.AW,{path:`${r}/configurations/list`},e.createElement(h.O4,{permissions:Ss.collectionTypesConfigurations},e.createElement(zu,{layout:l,slug:t,updateLayout:a}))),e.createElement(te.AW,{path:`${r}/configurations/edit`},e.createElement(h.O4,{permissions:Ss.collectionTypesConfigurations},e.createElement(Dr,{components:i,isContentTypeView:!0,mainLayout:l,slug:t,updateLayout:a}))),u)))};As.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};var Uu=(0,e.memo)(As),$s=d(57678);const Hu=Ie.Z.contentManager,Qu=()=>{const[{isLoading:t,data:r},o]=(0,e.useReducer)($s.Z,$s.q),s=(0,e.useMemo)(vt.Vo,[]),{schemas:a}=(0,_.v9)(c=>s(c),_.wU),{uid:l}=(0,te.UO)(),{get:i}=(0,h.kY)();return(0,e.useEffect)(()=>{const p=ze.default.CancelToken.source();return(async m=>{try{o(tn());const{data:{data:f}}=await i((0,y.IF)(`components/${l}/configuration`),{cancelToken:m.token});o(tr((0,y.w8)(f,a,"component")))}catch(f){if(ze.default.isCancel(f))return;console.error(f)}})(p),()=>{p.cancel("Operation canceled by the user.")}},[l,a,i]),t?e.createElement(h.dO,null):e.createElement(h.O4,{permissions:Hu.componentsConfigurations},e.createElement(Dr,{components:r.components,mainLayout:r.component,slug:l}))};var Gu=(0,e.memo)(Qu),Ku=d(9695),Yu=d(54725),Xu=()=>{const{formatMessage:t}=(0,H.Z)();return(0,h.go)(),e.createElement(Ce.o,null,e.createElement(fe.T,{title:t({id:(0,y.OB)("header.name"),defaultMessage:"Content"})}),e.createElement(Ze.D,null,e.createElement(Ku.x,{action:e.createElement(h.Qj,{variant:"secondary",startIcon:e.createElement(Ft.Z,null),to:"/plugins/content-type-builder/content-types/create-content-type"},t({id:"app.components.HomePage.create",defaultMessage:"Create your first Content-type"})),content:t({id:"content-manager.pages.NoContentType.text",defaultMessage:"You don't have any content yet, we recommend you to create your first Content-Type."}),hasRadius:!0,icon:e.createElement(Yu.Z,{width:"10rem"}),shadow:"tableShadow"})))},Ju=()=>{const{formatMessage:t}=(0,H.Z)();return(0,h.go)(),e.createElement(Ce.o,null,e.createElement(fe.T,{title:t({id:(0,y.OB)("header.name"),defaultMessage:"Content"})}),e.createElement(Ze.D,null,e.createElement(h.ZF,null)))};const _u=Ie.Z.contentManager,Zs=({match:{params:{slug:t},url:r}})=>{const{isLoading:o,layout:s,updateLayout:a}=(0,de.zE)(t),{rawContentTypeLayout:l,rawComponentsLayouts:i}=(0,e.useMemo)(()=>{let c={},p={};return s.contentType&&(p=(0,y.du)(s.contentType)),s.components&&(c=Object.keys(s.components).reduce((u,m)=>(u[m]=(0,y.du)(s.components[m]),u),{})),{rawContentTypeLayout:p,rawComponentsLayouts:c}},[s]);return o?e.createElement(h.dO,null):e.createElement(Se.Provider,{value:s},e.createElement(te.rs,null,e.createElement(te.AW,{path:`${r}/configurations/edit`},e.createElement(h.O4,{permissions:_u.singleTypesConfigurations},e.createElement(Dr,{components:i,isContentTypeView:!0,mainLayout:l,slug:t,updateLayout:a}))),e.createElement(te.AW,{path:r,render:({location:{state:c},history:{goBack:p}})=>e.createElement(cn,{layout:s,slug:t,isSingleType:!0,state:c,goBack:p})})))};Zs.propTypes={match:n().shape({url:n().string.isRequired,params:n().shape({slug:n().string.isRequired}).isRequired}).isRequired};var em=(0,e.memo)(Zs),tm=d(90700),nm=d(78090),rm=d(77013),om=d(79318),sm=d(66618),am=()=>{const[t,r]=(0,e.useState)(""),{formatMessage:o,locale:s}=(0,H.Z)(),a=(0,e.useMemo)(vt.KQ,[]),{collectionTypeLinks:l,singleTypeLinks:i}=(0,_.v9)(a,_.wU),{startsWith:c}=(0,h.L0)(s,{sensitivity:"base"}),p=(0,h.Xe)(s,{sensitivity:"base"}),u=(0,e.useMemo)(()=>[{id:"collectionTypes",title:{id:(0,Ee.Z)("components.LeftMenu.collection-types"),defaultMessage:"Collection Types"},searchable:!0,links:l},{id:"singleTypes",title:{id:(0,Ee.Z)("components.LeftMenu.single-types"),defaultMessage:"Single Types"},searchable:!0,links:i}].map(E=>({...E,links:E.links.filter(b=>c(b.title,t)).sort((b,v)=>p.compare(b.title,v.title)).map(b=>({...b,title:o({id:b.title,defaultMessage:b.title})}))})),[l,t,i,c,o,p]),m=()=>{r("")},f=({target:{value:E}})=>{r(E)},g=o({id:(0,Ee.Z)("header.name"),defaultMessage:"Content"});return e.createElement(tm.m,{ariaLabel:g},e.createElement(nm.p,{label:g,searchable:!0,value:t,onChange:f,onClear:m,searchLabel:o({id:"content-manager.components.LeftMenu.Search.label",defaultMessage:"Search for a content type"})}),e.createElement(rm.Z,null,u.map(E=>{const b=o({id:E.title.id,defaultMessage:E.title.defaultMessage},E.title.values);return e.createElement(om.D,{key:E.id,label:b,badgeLabel:E.links.length.toString()},E.links.map(v=>{const M=v.search?`?${v.search}`:"";return e.createElement(sm.E,{as:Et.OL,key:v.uid,to:`${v.to}${M}`},v.title)}))})))},qr=d(92886);const im=()=>({type:qr.fn}),lm=()=>({type:qr.sZ}),cm=({authorizedCollectionTypeLinks:t,authorizedSingleTypeLinks:r,contentTypeSchemas:o,components:s,fieldSizes:a})=>({type:qr.IX,data:{authorizedCollectionTypeLinks:t,authorizedSingleTypeLinks:r,components:s,contentTypeSchemas:o,fieldSizes:a}}),Bs=(t,r,o=[])=>t.filter(s=>s.isDisplayed).map(s=>{const a=[{action:"plugin::content-manager.explorer.create",subject:s.uid},{action:"plugin::content-manager.explorer.read",subject:s.uid}],l=[{action:"plugin::content-manager.explorer.read",subject:s.uid}],i=r==="collectionTypes"?a:l,c=o.find(({uid:u})=>u===s.uid);let p=null;if(c){const u={page:1,pageSize:c.settings.pageSize,sort:`${c.settings.defaultSortBy}:${c.settings.defaultSortOrder}`};p=(0,rn.stringify)(u,{encode:!1})}return{permissions:i,search:p,kind:s.kind,title:s.info.displayName,to:`/content-manager/${s.kind}/${s.uid}`,uid:s.uid,name:s.uid,isDisplayed:s.isDisplayed}});var dm=(t,r)=>{const o=Object.entries(Ro()(t,"kind")).map(([l,i])=>({name:l,links:i})),[s,a]=Oe()(o,"name");return{collectionTypeSectionLinks:Bs(s?.links||[],"collectionTypes",r),singleTypeSectionLinks:Bs(a?.links??[],"singleTypes")}},qs=(t,r)=>r.map(({permissions:o})=>(0,h.qX)(t,o)),um=async({models:t,userPermissions:r,toggleNotification:o})=>{const{get:s}=(0,h.tg)();try{const{data:{data:a}}=await s((0,y.IF)("content-types-settings")),{collectionTypeSectionLinks:l,singleTypeSectionLinks:i}=dm(t,a),c=await Promise.all(qs(r,l)),p=l.filter((f,g)=>c[g]),u=await Promise.all(qs(r,i)),m=i.filter((f,g)=>u[g]);return{authorizedCollectionTypeLinks:p,authorizedSingleTypeLinks:m}}catch(a){return console.error(a),o({type:"warning",message:{id:"notification.error"}}),{authorizedCollectionTypeLinks:[],authorizedSingleTypeLinks:[]}}},mm=()=>{const t=(0,_.I0)(),r=(0,h.lm)(),o=(0,_.v9)((0,vt.Yg)()),s=(0,e.useRef)(),{allPermissions:a}=(0,h.vn)(),{runHookWaterfall:l}=(0,h.j1)(),c=ze.default.CancelToken.source(),{notifyStatus:p}=(0,kr.G)(),{formatMessage:u}=(0,H.Z)(),{get:m}=(0,h.kY)(),f=async()=>{t(im());try{const{data:{data:{components:g,contentTypes:E,fieldSizes:b}}}=await m((0,y.IF)("init"),{cancelToken:c.token});p(u({id:(0,y.OB)("App.schemas.data-loaded"),defaultMessage:"The schemas have been successfully loaded."}));const v=await um({models:E,userPermissions:a,toggleNotification:r}),{ctLinks:M}=l($e.LK,{ctLinks:v.authorizedCollectionTypeLinks,models:E}),{stLinks:D}=l($e.dV,{stLinks:v.authorizedSingleTypeLinks,models:E}),T=cm({authorizedCollectionTypeLinks:M,authorizedSingleTypeLinks:D,contentTypeSchemas:E,components:g,fieldSizes:b});t(T)}catch(g){if(ze.default.isCancel(g))return;console.error(g),r({type:"warning",message:{id:"notification.error"}})}};return s.current=f,(0,e.useEffect)(()=>(s.current(),()=>{c.cancel("Operation canceled by the user."),t(lm())}),[t,r]),{...o,refetchData:s.current}},qt=d(25708),pm=d(16899);const gm=(0,N.ZP)(F.k)`
  border-radius: 50%;

  svg {
    height: ${6/16}rem;
    width: ${11/16}rem;
    > path {
      fill: ${({theme:t})=>t.colors.neutral600};
    }
  }
`,fm=N.ZP.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`;function Ns({displayedValue:t}){return e.createElement(F.k,{background:"neutral0",borderColor:"neutral200",justifyContent:"space-between",gap:3,padding:3,width:(0,h.Q1)(300)},e.createElement(fm,{type:"button"},e.createElement(F.k,{gap:6},e.createElement(gm,{alignItems:"center",justifyContent:"center",background:"neutral200",height:(0,h.Q1)(32),width:(0,h.Q1)(32)},e.createElement(pm.Z,null)),e.createElement(F.k,{maxWidth:(0,h.Q1)(150)},e.createElement(Q.Z,{textColor:"neutral700",ellipsis:!0},t)))),e.createElement(F.k,{gap:2},e.createElement(ye.h,{noBorder:!0},e.createElement(He.Z,null)),e.createElement(ye.h,{noBorder:!0},e.createElement(Je.Z,null))))}Ns.propTypes={displayedValue:n().string.isRequired};const js=({status:t,displayedValue:r,width:o})=>{const{formatMessage:s}=(0,H.Z)(),a={[at.DRAFT]:s({id:(0,y.OB)("relation.publicationState.draft"),defaultMessage:"Draft"}),[at.PUBLISHED]:s({id:(0,y.OB)("relation.publicationState.published"),defaultMessage:"Published"})},l=t===at.DRAFT?"secondary":"success";return e.createElement(S.x,{style:{width:o}},e.createElement(F.k,{paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:4,hasRadius:!0,borderSize:1,background:"neutral0",borderColor:"neutral200",justifyContent:"space-between"},e.createElement(po,{gap:1},e.createElement(ye.h,{noBorder:!0},e.createElement(Je.Z,null)),e.createElement(go,{maxWidth:"100%",justifyContent:"space-between"},e.createElement(S.x,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4},e.createElement(ho,null,e.createElement(Q.Z,{textColor:"primary600",ellipsis:!0},r))),t&&e.createElement(Pn.q,{variant:l,showBullet:!1,size:"S"},e.createElement(Q.Z,{fontWeight:"bold",textColor:`${l}700`},a[t])))),e.createElement(S.x,{paddingLeft:4},e.createElement(yo,{type:"button"},e.createElement(uo.J,{width:"12px",as:Kt.Z})))))};js.propTypes={status:n().string.isRequired,displayedValue:n().string.isRequired,width:n().number.isRequired};const hm=Ie.Z.contentManager;function ym({type:t,item:r}){if([qt.Z.EDIT_FIELD,qt.Z.FIELD].includes(t))return e.createElement(Bt,{labelField:r.labelField});const[o]=t.split("_");switch(o){case qt.Z.COMPONENT:case qt.Z.DYNAMIC_ZONE:return e.createElement(Ns,{displayedValue:r.displayedValue});case qt.Z.RELATION:return e.createElement(js,{displayedValue:r.displayedValue,status:r.status,width:r.width});default:return null}}const Ws=()=>{const t=(0,te.$B)("/content-manager/:kind/:uid"),{status:r,collectionTypeLinks:o,singleTypeLinks:s,models:a,refetchData:l}=mm(),i=Oe()([...o,...s],g=>g.title.toLowerCase()),{pathname:c}=(0,te.TH)(),{formatMessage:p}=(0,H.Z)(),{startSection:u}=(0,h.c1)(),m=(0,e.useRef)(u);if((0,e.useEffect)(()=>{m.current&&m.current("contentManager")},[]),r==="loading")return e.createElement(Ce.o,{"aria-busy":"true"},e.createElement(fe.T,{title:p({id:(0,Ee.Z)("header.name"),defaultMessage:"Content"})}),e.createElement(h.dO,null));const f=a.filter(({isDisplayed:g})=>g);return i.length===0&&f.length>0&&c!=="/content-manager/403"?e.createElement(te.l_,{to:"/content-manager/403"}):f.length===0&&c!=="/content-manager/no-content-types"?e.createElement(te.l_,{to:"/content-manager/no-content-types"}):!t&&i.length>0?e.createElement(te.l_,{to:`${i[0].to}${i[0].search?`?${i[0].search}`:""}`}):e.createElement(we.A,{sideNav:e.createElement(am,null)},e.createElement(Fe.r,{renderItem:ym}),e.createElement(Le.Provider,{value:{refetchData:l}},e.createElement(te.rs,null,e.createElement(te.AW,{path:"/content-manager/components/:uid/configurations/edit"},e.createElement(h.O4,{permissions:hm.componentsConfigurations},e.createElement(Gu,null))),e.createElement(te.AW,{path:"/content-manager/collectionType/:slug",component:Uu}),e.createElement(te.AW,{path:"/content-manager/singleType/:slug",component:em}),e.createElement(te.AW,{path:"/content-manager/403"},e.createElement(Ju,null)),e.createElement(te.AW,{path:"/content-manager/no-content-types"},e.createElement(Xu,null)),e.createElement(te.AW,{path:"",component:h.Hn}))))};function bm(){const{formatMessage:t}=(0,H.Z)();return e.createElement(e.Fragment,null,e.createElement(ve.q,{title:t({id:(0,Ee.Z)("plugin.name"),defaultMessage:"Content Manager"})}),e.createElement(Ws,null))}},92914:function(dt,De,d){"use strict";d.d(De,{Z:function(){return y}});var e=d(32735),ve=d(60216),te=d.n(ve),h=d(67879),Ce=d(24989),fe=d(87933),we=d(49372),H=d(72850),rt=d(9026),Oe=d(95952);const Ie=60*1e3,Ee=Ie*60,Fe=Ee*24,ke=Fe*30,Le=Fe*365;var he=_=>_<Ie?{unit:"second",value:-Math.round(_/1e3)}:_<Ee?{unit:"minute",value:-Math.round(_/Ie)}:_<Fe?{unit:"hour",value:-Math.round(_/Ee)}:_<ke?{unit:"day",value:-Math.round(_/Fe)}:_<Le?{unit:"month",value:-Math.round(_/ke)}:{unit:"year",value:-Math.round(_/Le)},n=d(8997);const ut=()=>{const{formatMessage:_}=(0,h.Z)();return e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(we.Z,{variant:"sigma",textColor:"neutral600",id:"additional-information"},_({id:(0,Oe.OB)("containers.Edit.information"),defaultMessage:"Information"})),e.createElement(H.x,null,e.createElement(rt.i,null)))},Se=({label:_,value:$e})=>e.createElement(fe.k,{justifyContent:"space-between"},e.createElement(we.Z,{as:"dt",fontWeight:"bold",textColor:"neutral800",variant:"pi"},_),e.createElement(we.Z,{as:"dd",variant:"pi",textColor:"neutral600"},$e));Se.propTypes={label:te().string.isRequired,value:te().string.isRequired};const Vt=()=>{const{formatMessage:_,formatRelativeTime:$e}=(0,h.Z)(),{initialData:Ye,isCreatingEntry:Mt}=(0,Ce.Wq)(),Tt=(0,e.useRef)(Date.now()),mt=(Ze,Te)=>{const{firstname:ue,lastname:F,username:S}=Ye[Te]??{},je=ue??"",Ue=F??"",Xe=S??(0,n.Pp)(je,Ue),It=(Ye[Ze]?new Date(Ye[Ze]).getTime():Date.now())-Tt.current,{unit:kt,value:Ut}=he(-It);return{at:$e(Ut,kt,{numeric:"auto"}),by:Mt?"-":Xe}},ot=mt("updatedAt","updatedBy"),xe=mt("createdAt","createdBy");return e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},e.createElement(Se,{label:_({id:(0,Oe.OB)("containers.Edit.information.created"),defaultMessage:"Created"}),value:xe.at}),e.createElement(Se,{label:_({id:(0,Oe.OB)("containers.Edit.information.by"),defaultMessage:"By"}),value:xe.by})),e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:2,as:"dl"},e.createElement(Se,{label:_({id:(0,Oe.OB)("containers.Edit.information.lastUpdate"),defaultMessage:"Last update"}),value:ot.at}),e.createElement(Se,{label:_({id:(0,Oe.OB)("containers.Edit.information.by"),defaultMessage:"By"}),value:ot.by})))},de=({children:_})=>e.createElement(fe.k,{direction:"column",alignItems:"stretch",gap:4},_);de.propTypes={children:te().oneOfType([te().arrayOf(te().node),te().node]).isRequired};var y={Root:de,Title:ut,Body:Vt}},73710:function(dt,De,d){"use strict";d.d(De,{Z:function(){return h}});var e=d(32735),ve=d(92914);function te(){return e.createElement(ve.Z.Root,null,e.createElement(ve.Z.Title,null),e.createElement(ve.Z.Body,null))}var h=te},75536:function(dt,De,d){"use strict";var e=d(32735);const ve=(te,h)=>{const[Ce,fe]=(0,e.useState)(te);return(0,e.useEffect)(()=>{const we=setTimeout(()=>{fe(te)},h);return()=>{clearTimeout(we)}},[te,h]),Ce};De.Z=ve},57047:function(dt,De,d){"use strict";d.d(De,{Z:function(){return ke}});var e=d(32735),ve=d(67879),te=d(49372),h=d(60216),Ce=d.n(h),fe=d(87933),we=d(72850),H=d(24989),rt=d(54504);function Oe({color:Le,name:Ke}){const{themeColorName:he}=(0,rt.k)(Le);return e.createElement(fe.k,{alignItems:"center",gap:2,maxWidth:(0,H.Q1)(300)},e.createElement(we.x,{height:2,background:Le,borderColor:he==="neutral0"?"neutral150":"transparent",hasRadius:!0,shrink:0,width:2}),e.createElement(te.Z,{fontWeight:"regular",textColor:"neutral700",ellipsis:!0},Ke))}Oe.propTypes={color:Ce().string.isRequired,name:Ce().string.isRequired};var Ie=Oe,Ee=d(47510),Fe=d(61937),ke=Le=>{const{formatMessage:Ke}=(0,ve.Z)();return(window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)&&Le.contentType.options?.reviewWorkflows)??!1?{key:"__strapi_reviewWorkflows_stage_temp_key__",name:"strapi_reviewWorkflows_stage",fieldSchema:{type:"relation"},metadatas:{label:Ke({id:(0,Ee.Z)("containers.ListPage.table-headers.reviewWorkflows.stage"),defaultMessage:"Review stage"}),searchable:!1,sortable:!0,mainField:{name:"name",schema:{type:"string"}}},cellFormatter({strapi_reviewWorkflows_stage:n}){if(!n)return e.createElement(te.Z,{textColor:"neutral800"},"-");const{color:ut,name:Se}=n;return e.createElement(Ie,{color:ut??Fe.FT,name:Se})}}:null}},28243:function(dt,De,d){"use strict";d.d(De,{Z:function(){return Ke}});var e=d(32735),ve=d(24989),te=d(87107),h=d(87933),Ce=d(28847),fe=d(23866),we=d(47851),H=d(67879),rt=d(20108),Oe=d(67350),Ie=d(28315),Ee=d(8445),Fe=d(92914);const ke="strapi_reviewWorkflows_stage";function Le(){const{initialData:he,isCreatingEntry:n,layout:{uid:ut},isSingleType:Se,onChange:Vt}=(0,ve.Wq)(),{put:de}=(0,ve.kY)(),y=he?.[ke]??null,_=Object.prototype.hasOwnProperty.call(he,ke),{formatMessage:$e}=(0,H.Z)(),{formatAPIError:Ye}=(0,ve.So)(),Mt=(0,ve.lm)(),{workflows:{data:Tt,isLoading:mt}={}}=(0,Oe.n)(),ot=Tt?.[0]??null,{error:xe,isLoading:Ze,mutateAsync:Te}=(0,rt.useMutation)(async({entityId:Ue,stageId:Xe,uid:Dt})=>{const It=Se?"single-types":"collection-types",{data:{data:kt}}=await de(`/admin/content-manager/${It}/${Dt}/${Ue}/stage`,{data:{id:Xe}});return Vt({target:{name:ke,value:kt[ke]}},!0),kt},{onSuccess(){Mt({type:"success",message:{id:"content-manager.reviewWorkflows.stage.notification.saved",defaultMessage:"Success: Review stage updated"}})}}),ue=y===null&&!mt&&!n&&$e({id:"content-manager.reviewWorkflows.stage.select.placeholder",defaultMessage:"Select a stage"}),S=xe&&Ye(xe)||ue||null,je=async({value:Ue})=>{try{await Te({entityId:he.id,stageId:Ue,uid:ut})}catch{}};return e.createElement(Fe.Z.Root,null,e.createElement(Fe.Z.Title,null),_&&!n&&e.createElement(te.g,{error:S,name:ke,id:ke},e.createElement(h.k,{direction:"column",gap:2,alignItems:"stretch"},e.createElement(Ce.Q,null,$e({id:"content-manager.reviewWorkflows.stage.label",defaultMessage:"Review stage"})),e.createElement(ve.JV,{components:{LoadingIndicator:()=>e.createElement(fe.a,{small:!0}),Option:Ie.K,SingleValue:Ee.R},error:S,inputId:ke,isLoading:Ze,isSearchable:!1,isClearable:!1,name:ke,onChange:je,options:ot?ot.stages.map(({id:Ue,color:Xe,name:Dt})=>({value:Ue,label:Dt,color:Xe})):[],value:{value:y?.id,label:y?.name,color:y?.color}}),e.createElement(we.c,null))),e.createElement(Fe.Z.Body,null))}var Ke=Le},57544:function(){},59599:function(){},42310:function(){},33842:function(){},85695:function(){}}]);
