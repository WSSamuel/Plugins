"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[4858,6199,4602],{6199:function(t,e,n){n.r(e);var o=n(51609),l=n(27723),s=n(47143),a=n(86087),i=n(90726),r=n(27261),c=n(8062),u=n(94602),m=n(46416),d=n(47091),f=n(47520),p=n(66087),b=n(2521),k=n(71236),h=n(2742),g=n(76856);const x=["maxi-blocks/divider-maxi","maxi-blocks/accordion-maxi","maxi-blocks/text-maxi","maxi-blocks/list-item-maxi","maxi-blocks/slider-maxi"];e.default=t=>{var e;const{blockName:n,onChange:v,linkSettings:y,clientId:E,disableCustomFormats:_=!1,"dc-status":C,"dc-link-status":O,"dc-link-target":A,"dc-type":V,"dc-field":L}=t,[N,w]=(0,a.useState)([]),{contextLoop:j}=null!==(e=(0,a.useContext)(d.WX))&&void 0!==e?e:{},{"cl-status":S,"cl-type":W}=null!=j?j:{},F=S&&f.A.includes(n),T=C||F,D=null!=V?V:W;if(x.includes(n)&&!_)return null;let P=!1;if(y?.disabled)P=!0;else{const t=(0,s.select)("core/block-editor").getClientIdsOfDescendants([E]);t?.length&&t.forEach((t=>{const e=(0,s.select)("core/block-editor").getBlockAttributes(t);(!(0,p.isEmpty)(e.linkSettings?.url)||"maxi-blocks/text-maxi"===(0,s.select)("core/block-editor").getBlockName(t)&&(e.content.includes("<a ")||e["dc-content"]?.includes("<a ")))&&(P=!0)}))}(0,a.useEffect)((()=>{O&&w((0,g.T8)(D,L))}),[D,L,O]);const B=(0,s.select)("maxiBlocks/dynamic-content").getCustomTaxonomies();return(0,o.createElement)("div",{className:"toolbar-item toolbar-item__link"},(0,o.createElement)(u.default,{icon:b.S6$,tooltip:(0,l.__)("Link","maxi-blocks"),className:(!(0,p.isNil)(y)&&!(0,p.isEmpty)(y.url)||O)&&"toolbar-item__link--active",disabled:P},!P&&(0,o.createElement)("div",{className:"toolbar-item__link-popover"},T&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(r.default,{label:(0,l.__)("Use dynamic content link","maxi-blocks"),selected:O,onChange:async e=>{const n=e&&await(0,d.eL)((0,d.o1)((0,m.XW)(t,"dynamicContent")),E);v(e?Object.assign({},y,{url:n,title:n}):Object.assign({},y,{url:null,title:null}),Object.assign({"dc-link-status":e},F&&{"dc-status":e}))}}),(k.Nt.includes(D)||k.uc.includes(L)||B.includes(L))&&O&&(0,o.createElement)(h.default,{label:(0,l.__)("Link target","maxi-blocks"),value:A,options:N,newStyle:!0,onChange:async e=>{const n=e&&await(0,d.eL)((0,d.o1)((0,m.XW)(Object.assign({},t,{"dc-link-target":e}),"dynamicContent")),E);v(Object.assign({},y,{url:n,title:n}),{"dc-link-target":e})}})),(0,o.createElement)(c.A.Consumer,null,(t=>(0,o.createElement)(i.A,{linkValue:y,isDCLinkActive:T&&O,onChangeLink:v,onRemoveLink:()=>{v({url:""}),t.onClose()}}))))))}},94858:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var o=n(51609),l=n(27723),s=n(50876),a=n(86087),i=n(90726),r=n(46416),c=n(8062),u=n(94602),m=n(66087);const d=({url:t,type:e,id:n,opensInNewTab:o,noFollow:l,sponsored:s,ugc:a,title:i="",linkValue:r})=>{const c={url:t,rel:"",title:i};return e&&(c.type=e),n&&(c.id=n),o&&(c.target="_blank",c.rel+="noreferrer noopener"),l&&(c.rel+=" nofollow"),s&&(c.rel+=" sponsored"),a&&(c.rel+=" ugc"),"_blank"===c.target||l||s||a?c.rel=c.rel.trim():delete c.rel,Object.entries(c).forEach((([t,e])=>{(0,m.isEmpty)(e)&&delete c[t],c[t]=(0,m.trim)(e)})),t!==r?.url&&i===r?.title&&(c.title=""),c},f=({formatOptions:t,formatValue:e})=>{if(!t||(0,m.isEmpty)(e))return{url:""};const{attributes:{url:n,target:o,id:l,rel:s,title:a=""}}=t;return{url:n,opensInNewTab:"_blank"===o,id:l,noFollow:s&&s.indexOf("nofollow")>=0,sponsored:s&&s.indexOf("sponsored")>=0,ugc:s&&s.indexOf("ugc")>=0,title:a}};var p=n(86329),b=n(6199),k=n(2521);const h=["maxi-blocks/text-maxi","maxi-blocks/list-item-maxi"],g=t=>{const{onChange:e,isList:n,textLevel:l,onClose:c,blockStyle:u,styleCard:b}=t,k=Object.assign({},(0,r.XW)(t,"typography")),h="maxi-blocks/text-link",{formatValue:g,onChangeTextFormat:x}=(0,a.useContext)(p.hE),v=()=>{let t;const e=(0,m.isEqual)((0,p.Dc)({formatValue:g,formatName:"maxi-blocks/text-link",formatClassName:null,formatAttributes:null}),[0,g?.formats?.length])&&g?.formats?.every((e=>e.every((e=>e.type!==h||(t||(t=e.attributes.url),"maxi-blocks/text-link"===e.type&&e.attributes.url===t))))),n=g?.end||(g?.formats?.length||0)+1,o=e&&g?.start===g?.end?0:g?.start;return(0,s.getActiveFormat)(Object.assign({},g,{start:o,end:n}),h)},y=(0,a.useRef)(v()),[E,_]=(0,a.useState)(f({formatOptions:y.current,formatValue:g}));(0,a.useEffect)((()=>{if(y.current=v(),y.current){const t=f({formatOptions:y.current,formatValue:g});(0,m.isEqual)(E,t)||_(t)}}),[g.start,g.end]),(0,a.useEffect)((()=>{(0,m.isEmpty)(E.url)&&Object.keys(E).length>1&&c()}),[E.url]);const C=(t,e)=>{var n;const[o]=(0,p.Dc)({formatValue:t,formatName:h,formatClassName:null,formatAttributes:y.current?.attributes})||[null!==(n=t.start)&&void 0!==n?n:0];return t?.formats?.[o]?.forEach(((n,l)=>{"maxi-blocks/text-link"===n.type&&(t.formats[o][l].attributes=e)})),t};return(0,o.createElement)(i.A,{linkValue:E,onChangeLink:t=>{const o=(t=>{const{url:e}=t;return!e||e.startsWith("#")||e.startsWith("http")||e.startsWith("localhost")||e.startsWith("tel:")||e.startsWith("mailto:")||e.startsWith("sftp:")||e.startsWith("magnet:")||(e.includes("http:")?e.includes("http:")&&(t.url=e.replace(/^http:\/\//i,"https://")):t.url=`https://${e}`),t})(t),s=d(Object.assign({},o,{linkValue:E}));y.current||(0,m.isEmpty)(o.url)?(t=>{const o=d(Object.assign({},t,{linkValue:E})),l=(0,p.a4)({formatValue:C(g,o),isList:n});e(o,{content:l})})(o):((t,o)=>{const{start:s,end:a}=g,i=s===a,r=C(g,t),c=(0,p.uE)({formatValue:i?Object.assign({},r,{start:0,end:r.formats.length}):r,typography:k,linkAttributes:d(Object.assign({},t,{newLinkValue:o})),isList:n,textLevel:l,saveFormatValue:!0,onChangeTextFormat:x,returnFormatValue:!0});x(Object.assign({},c.formatValue,{start:r.start,end:r.end})),delete c.formatValue,e(o,c)})(o,s);const a=f({formatOptions:{attributes:s},formatValue:g});_(a)},onRemoveLink:()=>{const t=(0,p.G$)({formatValue:g,isList:n,typography:k,textLevel:l,attributes:E,blockStyle:u,styleCard:b}),o=d({url:"",linkValue:E}),s=f({formatOptions:{attributes:o},formatValue:g});_(s),e(o,t)}})};var x=t=>{const{blockName:e,isCaptionToolbar:n=!1,"dc-status":s=!1,"dc-field":i="",linkSettings:r}=t,d=s&&"static_text"!==i;let f;if(p.hE){const t=(0,a.useContext)(p.hE);f=t?.formatValue?t?.formatValue:{}}else f={};const x=!(0,m.isEmpty)(f)&&!(0,m.isEmpty)(f?.formats)&&f?.formats?.some((t=>t.some((t=>!(0,m.isEmpty)(t?.attributes?.url)))));return h.includes(e)||n?d?(0,o.createElement)(b.default,Object.assign({},t)):(0,o.createElement)(u.default,{icon:k.S6$,tooltip:(0,l.__)("Link","maxi-blocks"),className:!(0,m.isNil)(r)&&!(0,m.isEmpty)(r.url)||x?"toolbar-item__link--active toolbar-item__text-link":"toolbar-item__text-link"},(0,o.createElement)(c.A.Consumer,null,(({isOpen:e,onClose:n})=>e?(0,o.createElement)(g,Object.assign({isOpen:e,onClose:n},t)):null))):null}},94602:function(t,e,n){n.r(e);var o=n(23029),l=n(92901),s=n(56822),a=n(53954),i=n(85501),r=n(64467),c=n(51609),u=n(27723),m=n(86087),d=n(56427),f=n(47143),p=n(32485),b=n.n(p),k=n(66087),h=n(26287),g=n(20436),x=n(2521),v=n(8062);function y(t,e,n){return e=(0,a.A)(e),(0,s.A)(t,E()?Reflect.construct(e,n||[],(0,a.A)(t).constructor):e.apply(t,n))}function E(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(E=function(){return!!t})()}const _=(0,h.Ay)((()=>Promise.resolve().then(n.bind(n,68145)))),C=(0,h.Ay)((()=>Promise.resolve().then(n.bind(n,98279)))),O=(0,h.Ay)((()=>Promise.resolve().then(n.bind(n,57076))));let A=function(t){function e(...t){var n;return(0,o.A)(this,e),n=y(this,e,[].concat(t)),(0,r.A)(n,"state",{isOpen:!1,onClose:()=>{n.setState({isOpen:!1})}}),n.ref=(0,m.createRef)(),n}return(0,i.A)(e,t),(0,l.A)(e,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"onClickOutside",value:function(t){const e=t.path||t.composedPath&&t.composedPath();this.mounted&&(this.ref.current?.ownerDocument.querySelectorAll(".toolbar-item__popover").length>=2||e&&!e.includes(this.ref.current?.ownerDocument.querySelector(".toolbar-item__popover"))&&!e.includes(this.ref.current))&&this.state.onClose()}},{key:"onToggle",value:function(){const{isOpen:t}=this.state,{defaultView:e}=this.ref.current.ownerDocument;t?e.removeEventListener("click",this.onClickOutside.bind(this),!1):e.addEventListener("click",this.onClickOutside.bind(this),!1),this.setState({isOpen:!t})}},{key:"render",value:function(){const{text:t,className:e,tooltip:n,icon:o,children:l,advancedOptions:s=!1,tab:a=0,position:i="top center",disabled:r=!1}=this.props,{isOpen:m,onClose:p}=this.state,h=b()("toolbar-item","toolbar-item__button",e),{receiveMaxiSettings:y}=(0,f.select)("maxiBlocks"),{hide_tooltips:E}=y(),A=!(0,k.isEmpty)(E)&&E,V=()=>(0,c.createElement)(_,{className:h,onClick:()=>this.onToggle(),"aria-expanded":m,action:"popup",disabled:r},(0,c.createElement)(C,{className:"toolbar-item__icon",icon:o}),(0,u.__)(t,"maxi-blocks"));return(0,c.createElement)("div",{ref:this.ref},(0,c.createElement)(v.A.Provider,{value:this.state},!A&&(0,c.createElement)(d.Tooltip,{text:n,placement:"top"},V()),A&&V(),m&&l&&(0,c.createElement)(O,{anchor:this.ref?.current?.closest(".toolbar-wrapper"),className:"toolbar-item__popover",onClose:p,position:i,useAnimationFrame:!0,useFlip:!0,useShift:!0,shiftPadding:!!s&&{right:20},shiftLimit:{mainAxis:!1},isAlternate:!0,noArrow:!0},(0,c.createElement)("div",null,l),!!s&&(0,c.createElement)(_,{className:"toolbar-item__popover__advanced-button",icon:x.P2$,onClick:()=>{(0,g.z4)(a,s)}}))))}}])}(m.Component);e.default=A},8062:function(t,e,n){const o=(0,n(86087).createContext)();e.A=o}}]);