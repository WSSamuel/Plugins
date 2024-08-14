"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[5026,4602],{65026:function(t,e,o){o.r(e);var a=o(51609),n=o(27723),l=o(86087),r=o(90978),i=o(98279),s=o(94602),c=o(86329),p=o(46416),u=o(2521),m=o(96721);const d=["maxi-blocks/text-maxi","maxi-blocks/list-item-maxi"];e.default=t=>{const{blockName:e,onChangeInline:o,onChange:h,breakpoint:f,clientId:b,isList:y,textLevel:v,styleCard:_,isCaptionToolbar:k=!1,disableCustomFormats:x}=t;if(!d.includes(e)&&!k)return null;const{formatValue:C,onChangeTextFormat:g}=(0,l.useContext)(c.hE),E=(0,l.useContext)(c.EF),A=(0,p.XW)(t,"typography"),O=E?(0,m.nO)(E,A):Object.assign({},A),L=(0,c.IB)({typography:O,formatValue:C,prop:"color",breakpoint:f,textLevel:v,styleCard:_}),S=(0,c.IB)({typography:O,formatValue:C,prop:"palette-status",breakpoint:f,textLevel:v,styleCard:_}),V=(0,c.IB)({typography:O,formatValue:C,prop:"palette-sc-status",breakpoint:f,textLevel:v,styleCard:_}),N=(0,c.IB)({typography:O,formatValue:C,prop:"palette-color",breakpoint:f,textLevel:v,styleCard:_}),w=(0,c.IB)({typography:O,formatValue:C,prop:"palette-opacity",breakpoint:f,textLevel:v,styleCard:_}),P=(0,l.useRef)();return(0,a.createElement)(s.default,{className:"toolbar-item__text-options toolbar-item__text-color",tooltip:(0,n.__)("Text Colour","maxi-blocks"),icon:(0,a.createElement)("div",{className:"toolbar-item__text-options__icon",ref:P,style:{background:S?(0,p.dO)({firstVar:`color-${N}`,opacity:w,blockStyle:(0,p.zD)(b)}):L}},(0,a.createElement)(i.default,{className:"toolbar-item__text-options__inner-icon",icon:u.Cwf}))},(0,a.createElement)("div",{className:"toolbar-item__text-color__popover"},(0,a.createElement)(r.default,{label:(0,n.__)("Text","maxi-blocks"),color:L,paletteColor:N,paletteStatus:S,paletteSCStatus:V,paletteOpacity:w,onChangeInline:({color:t})=>{o({color:t}),P.current.style.background=t},onChange:({color:t,paletteColor:e,paletteStatus:o,paletteSCStatus:a,paletteOpacity:n})=>(t=>{const e=(0,c.ML)({formatValue:C,isList:y,typography:O,value:t,breakpoint:f,textLevel:v,returnFormatValue:!0,disableCustomFormats:x}),o=Object.assign({},e.formatValue);delete e?.formatValue,g(o),h(e)})({color:t,"palette-color":e,"palette-status":o,"palette-sc-status":a,"palette-opacity":n}),globalProps:{target:"",type:v},textLevel:v})))}},94602:function(t,e,o){o.r(e);var a=o(23029),n=o(92901),l=o(56822),r=o(53954),i=o(85501),s=o(64467),c=o(51609),p=o(27723),u=o(86087),m=o(56427),d=o(47143),h=o(32485),f=o.n(h),b=o(66087),y=o(26287),v=o(20436),_=o(2521),k=o(8062);function x(t,e,o){return e=(0,r.A)(e),(0,l.A)(t,C()?Reflect.construct(e,o||[],(0,r.A)(t).constructor):e.apply(t,o))}function C(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(C=function(){return!!t})()}const g=(0,y.Ay)((()=>Promise.resolve().then(o.bind(o,68145)))),E=(0,y.Ay)((()=>Promise.resolve().then(o.bind(o,98279)))),A=(0,y.Ay)((()=>Promise.resolve().then(o.bind(o,57076))));let O=function(t){function e(...t){var o;return(0,a.A)(this,e),o=x(this,e,[].concat(t)),(0,s.A)(o,"state",{isOpen:!1,onClose:()=>{o.setState({isOpen:!1})}}),o.ref=(0,u.createRef)(),o}return(0,i.A)(e,t),(0,n.A)(e,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"onClickOutside",value:function(t){const e=t.path||t.composedPath&&t.composedPath();this.mounted&&(this.ref.current?.ownerDocument.querySelectorAll(".toolbar-item__popover").length>=2||e&&!e.includes(this.ref.current?.ownerDocument.querySelector(".toolbar-item__popover"))&&!e.includes(this.ref.current))&&this.state.onClose()}},{key:"onToggle",value:function(){const{isOpen:t}=this.state,{defaultView:e}=this.ref.current.ownerDocument;t?e.removeEventListener("click",this.onClickOutside.bind(this),!1):e.addEventListener("click",this.onClickOutside.bind(this),!1),this.setState({isOpen:!t})}},{key:"render",value:function(){const{text:t,className:e,tooltip:o,icon:a,children:n,advancedOptions:l=!1,tab:r=0,position:i="top center",disabled:s=!1}=this.props,{isOpen:u,onClose:h}=this.state,y=f()("toolbar-item","toolbar-item__button",e),{receiveMaxiSettings:x}=(0,d.select)("maxiBlocks"),{hide_tooltips:C}=x(),O=!(0,b.isEmpty)(C)&&C,L=()=>(0,c.createElement)(g,{className:y,onClick:()=>this.onToggle(),"aria-expanded":u,action:"popup",disabled:s},(0,c.createElement)(E,{className:"toolbar-item__icon",icon:a}),(0,p.__)(t,"maxi-blocks"));return(0,c.createElement)("div",{ref:this.ref},(0,c.createElement)(k.A.Provider,{value:this.state},!O&&(0,c.createElement)(m.Tooltip,{text:o,placement:"top"},L()),O&&L(),u&&n&&(0,c.createElement)(A,{anchor:this.ref?.current?.closest(".toolbar-wrapper"),className:"toolbar-item__popover",onClose:h,position:i,useAnimationFrame:!0,useFlip:!0,useShift:!0,shiftPadding:!!l&&{right:20},shiftLimit:{mainAxis:!1},isAlternate:!0,noArrow:!0},(0,c.createElement)("div",null,n),!!l&&(0,c.createElement)(g,{className:"toolbar-item__popover__advanced-button",icon:_.P2$,onClick:()=>{(0,v.z4)(r,l)}}))))}}])}(u.Component);e.default=O},8062:function(t,e,o){const a=(0,o(86087).createContext)();e.A=a}}]);