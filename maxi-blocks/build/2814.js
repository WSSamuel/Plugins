"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[2814,4602],{62814:function(e,t,o){o.r(t);var i=o(51609),r=o(27723),n=o(90978),a=o(98279),l=o(94602),s=o(46416),c=o(2521);t.default=e=>{const{blockName:t,onChangeInline:o,onChange:d,breakpoint:u}=e;return"maxi-blocks/divider-maxi"!==t?null:(0,i.createElement)(l.default,{className:"toolbar-item__divider",tooltip:(0,r.__)("Divider line colour","maxi-blocks"),icon:(0,i.createElement)("div",{className:"toolbar-item__divider__icon"},(0,i.createElement)(a.default,{className:"toolbar-item__divider-icon",icon:c.mfp})),advancedOptions:"line settings"},(0,i.createElement)("div",{className:"toolbar-item__divider-color__popover"},(0,i.createElement)(n.default,{label:(0,r.__)("Divider line","maxi-blocks"),color:(0,s.qw)({target:"divider-border-color",breakpoint:u,attributes:e}),prefix:"divider-border-",paletteColor:(0,s.qw)({target:"divider-border-palette-color",breakpoint:u,attributes:e}),paletteOpacity:(0,s.qw)({target:"divider-border-palette-opacity",breakpoint:u,attributes:e}),paletteStatus:(0,s.qw)({target:"divider-border-palette-status",breakpoint:u,attributes:e}),paletteSCStatus:(0,s.qw)({target:"divider-border-palette-sc-status",breakpoint:u,attributes:e}),onChangeInline:({color:e})=>o({"border-color":e}),onChange:({color:e,paletteColor:t,paletteStatus:o,paletteSCStatus:i,paletteOpacity:r})=>{d({[`divider-border-color-${u}`]:e,[`divider-border-palette-color-${u}`]:t,[`divider-border-palette-opacity-${u}`]:r,[`divider-border-palette-status-${u}`]:o,[`divider-border-palette-status-sc-${u}`]:i})},deviceType:u,disableGradient:!0,globalProps:{target:"",type:"divider"}})))}},94602:function(e,t,o){o.r(t);var i=o(23029),r=o(92901),n=o(56822),a=o(53954),l=o(85501),s=o(64467),c=o(51609),d=o(27723),u=o(86087),p=o(56427),m=o(47143),b=o(32485),v=o.n(b),h=o(66087),f=o(26287),_=o(20436),k=o(2521),C=o(8062);function g(e,t,o){return t=(0,a.A)(t),(0,n.A)(e,y()?Reflect.construct(t,o||[],(0,a.A)(e).constructor):t.apply(e,o))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}const A=(0,f.Ay)((()=>Promise.resolve().then(o.bind(o,68145)))),E=(0,f.Ay)((()=>Promise.resolve().then(o.bind(o,98279)))),x=(0,f.Ay)((()=>Promise.resolve().then(o.bind(o,57076))));let w=function(e){function t(...e){var o;return(0,i.A)(this,t),o=g(this,t,[].concat(e)),(0,s.A)(o,"state",{isOpen:!1,onClose:()=>{o.setState({isOpen:!1})}}),o.ref=(0,u.createRef)(),o}return(0,l.A)(t,e),(0,r.A)(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"onClickOutside",value:function(e){const t=e.path||e.composedPath&&e.composedPath();this.mounted&&(this.ref.current?.ownerDocument.querySelectorAll(".toolbar-item__popover").length>=2||t&&!t.includes(this.ref.current?.ownerDocument.querySelector(".toolbar-item__popover"))&&!t.includes(this.ref.current))&&this.state.onClose()}},{key:"onToggle",value:function(){const{isOpen:e}=this.state,{defaultView:t}=this.ref.current.ownerDocument;e?t.removeEventListener("click",this.onClickOutside.bind(this),!1):t.addEventListener("click",this.onClickOutside.bind(this),!1),this.setState({isOpen:!e})}},{key:"render",value:function(){const{text:e,className:t,tooltip:o,icon:i,children:r,advancedOptions:n=!1,tab:a=0,position:l="top center",disabled:s=!1}=this.props,{isOpen:u,onClose:b}=this.state,f=v()("toolbar-item","toolbar-item__button",t),{receiveMaxiSettings:g}=(0,m.select)("maxiBlocks"),{hide_tooltips:y}=g(),w=!(0,h.isEmpty)(y)&&y,O=()=>(0,c.createElement)(A,{className:f,onClick:()=>this.onToggle(),"aria-expanded":u,action:"popup",disabled:s},(0,c.createElement)(E,{className:"toolbar-item__icon",icon:i}),(0,d.__)(e,"maxi-blocks"));return(0,c.createElement)("div",{ref:this.ref},(0,c.createElement)(C.A.Provider,{value:this.state},!w&&(0,c.createElement)(p.Tooltip,{text:o,placement:"top"},O()),w&&O(),u&&r&&(0,c.createElement)(x,{anchor:this.ref?.current?.closest(".toolbar-wrapper"),className:"toolbar-item__popover",onClose:b,position:l,useAnimationFrame:!0,useFlip:!0,useShift:!0,shiftPadding:!!n&&{right:20},shiftLimit:{mainAxis:!1},isAlternate:!0,noArrow:!0},(0,c.createElement)("div",null,r),!!n&&(0,c.createElement)(A,{className:"toolbar-item__popover__advanced-button",icon:k.P2$,onClick:()=>{(0,_.z4)(a,n)}}))))}}])}(u.Component);t.default=w},8062:function(e,t,o){const i=(0,o(86087).createContext)();t.A=i}}]);