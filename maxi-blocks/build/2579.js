"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[2579,4602],{32579:function(e,t,o){o.r(t);var n=o(51609),i=o(27723),a=o(94602),s=o(46416),c=o(2521),r=o(53499);const l=["maxi-blocks/button-maxi","maxi-blocks/image-maxi","maxi-blocks/slider-maxi","maxi-blocks/slide-maxi","maxi-blocks/video-maxi"];t.default=e=>{const{blockName:t,onChangeInline:o,onChange:u,breakpoint:m,clientId:d,prefix:p="",dropShadow:h,disableInset:b}=e;return l.includes(t)?(0,n.createElement)(a.default,{className:"toolbar-item__box-shadow",tooltip:(0,i.__)("Box shadow","maxi-blocks"),icon:c.jp2,advancedOptions:"box shadow"},(0,n.createElement)("div",{className:"toolbar-item__box-shadow__popover"},(0,n.createElement)(r.default,Object.assign({},(0,s.XW)(e,["boxShadow"],!1,p),{onChangeInline:o,onChange:u,breakpoint:m,clientId:d,disableAdvanced:!0,prefix:p,isToolbar:!0,dropShadow:h,disableInset:b})))):null}},94602:function(e,t,o){o.r(t);var n=o(23029),i=o(92901),a=o(56822),s=o(53954),c=o(85501),r=o(64467),l=o(51609),u=o(27723),m=o(86087),d=o(56427),p=o(47143),h=o(32485),b=o.n(h),f=o(66087),v=o(26287),k=o(20436),x=o(2521),_=o(8062);function A(e,t,o){return t=(0,s.A)(t),(0,a.A)(e,C()?Reflect.construct(t,o||[],(0,s.A)(e).constructor):t.apply(e,o))}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}const w=(0,v.Ay)((()=>Promise.resolve().then(o.bind(o,68145)))),g=(0,v.Ay)((()=>Promise.resolve().then(o.bind(o,98279)))),y=(0,v.Ay)((()=>Promise.resolve().then(o.bind(o,57076))));let E=function(e){function t(...e){var o;return(0,n.A)(this,t),o=A(this,t,[].concat(e)),(0,r.A)(o,"state",{isOpen:!1,onClose:()=>{o.setState({isOpen:!1})}}),o.ref=(0,m.createRef)(),o}return(0,c.A)(t,e),(0,i.A)(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"onClickOutside",value:function(e){const t=e.path||e.composedPath&&e.composedPath();this.mounted&&(this.ref.current?.ownerDocument.querySelectorAll(".toolbar-item__popover").length>=2||t&&!t.includes(this.ref.current?.ownerDocument.querySelector(".toolbar-item__popover"))&&!t.includes(this.ref.current))&&this.state.onClose()}},{key:"onToggle",value:function(){const{isOpen:e}=this.state,{defaultView:t}=this.ref.current.ownerDocument;e?t.removeEventListener("click",this.onClickOutside.bind(this),!1):t.addEventListener("click",this.onClickOutside.bind(this),!1),this.setState({isOpen:!e})}},{key:"render",value:function(){const{text:e,className:t,tooltip:o,icon:n,children:i,advancedOptions:a=!1,tab:s=0,position:c="top center",disabled:r=!1}=this.props,{isOpen:m,onClose:h}=this.state,v=b()("toolbar-item","toolbar-item__button",t),{receiveMaxiSettings:A}=(0,p.select)("maxiBlocks"),{hide_tooltips:C}=A(),E=!(0,f.isEmpty)(C)&&C,O=()=>(0,l.createElement)(w,{className:v,onClick:()=>this.onToggle(),"aria-expanded":m,action:"popup",disabled:r},(0,l.createElement)(g,{className:"toolbar-item__icon",icon:n}),(0,u.__)(e,"maxi-blocks"));return(0,l.createElement)("div",{ref:this.ref},(0,l.createElement)(_.A.Provider,{value:this.state},!E&&(0,l.createElement)(d.Tooltip,{text:o,placement:"top"},O()),E&&O(),m&&i&&(0,l.createElement)(y,{anchor:this.ref?.current?.closest(".toolbar-wrapper"),className:"toolbar-item__popover",onClose:h,position:c,useAnimationFrame:!0,useFlip:!0,useShift:!0,shiftPadding:!!a&&{right:20},shiftLimit:{mainAxis:!1},isAlternate:!0,noArrow:!0},(0,l.createElement)("div",null,i),!!a&&(0,l.createElement)(w,{className:"toolbar-item__popover__advanced-button",icon:x.P2$,onClick:()=>{(0,k.z4)(s,a)}}))))}}])}(m.Component);t.default=E},8062:function(e,t,o){const n=(0,o(86087).createContext)();t.A=n}}]);