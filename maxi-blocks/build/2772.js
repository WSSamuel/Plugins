"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[2772,4602],{72772:function(e,t,n){n.r(t);var o=n(51609),i=n(27723),a=n(2114),s=n(27261),l=n(2742),r=n(94602),c=n(46416),u=n(2521);t.default=e=>{const{onChange:t,isLoop:n,isAutoplay:d,pauseOnHover:p,pauseOnInteraction:m,attributes:h}=e;return(0,o.createElement)(r.default,{className:"toolbar-item__size",tooltip:(0,i.__)("Slider settings","maxi-blocks"),icon:u.c1p,advancedOptions:"slider settings"},(0,o.createElement)("div",{className:"toolbar-item__size__popover"},(0,o.createElement)(s.default,{label:(0,i.__)("Autoplay","maxi-blocks"),selected:d,onChange:e=>{t({isAutoplay:e})}}),d&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(s.default,{label:(0,i.__)("Pause on hover","maxi-blocks"),selected:p,onChange:e=>{t({pauseOnHover:e})}}),(0,o.createElement)(s.default,{label:(0,i.__)("Pause on interaction","maxi-blocks"),selected:m,onChange:e=>{t({pauseOnInteraction:e})}}),(0,o.createElement)(a.default,{label:(0,i.__)("Autoplay speed (ms)","maxi-blocks"),min:500,max:1e4,initial:1,step:1,value:e["slider-autoplay-speed"],onChangeValue:e=>{t({"slider-autoplay-speed":void 0!==e&&""!==e?e:""})},onReset:()=>t({"slider-autoplay-speed":(0,c.Ar)("autoplay-speed")})})),(0,o.createElement)(s.default,{label:(0,i.__)("Infinite loop","maxi-blocks"),selected:n,onChange:e=>{t({isLoop:e})}}),(0,o.createElement)(l.default,{label:(0,i.__)("Transition","maxi-blocks"),options:[{label:(0,i.__)("Slide","maxi-blocks"),value:"slide"},{label:(0,i.__)("Fade","maxi-blocks"),value:"fade"}],value:(0,c.qw)({target:"slider-transition",attributes:h}),onChange:e=>{t({"slider-transition":e})}}),(0,o.createElement)(a.default,{label:(0,i.__)("Transition speed (ms)","maxi-blocks"),min:0,max:1e4,initial:200,step:1,value:e["slider-transition-speed"],onChangeValue:e=>{t({"slider-transition-speed":void 0!==e&&""!==e?e:""})},onReset:()=>t({"slider-transition-speed":(0,c.Ar)("slider-transition-speed")})})))}},94602:function(e,t,n){n.r(t);var o=n(23029),i=n(92901),a=n(56822),s=n(53954),l=n(85501),r=n(64467),c=n(51609),u=n(27723),d=n(86087),p=n(56427),m=n(47143),h=n(32485),b=n.n(h),_=n(66087),f=n(26287),v=n(20436),k=n(2521),A=n(8062);function x(e,t,n){return t=(0,s.A)(t),(0,a.A)(e,y()?Reflect.construct(t,n||[],(0,s.A)(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}const C=(0,f.Ay)((()=>Promise.resolve().then(n.bind(n,68145)))),E=(0,f.Ay)((()=>Promise.resolve().then(n.bind(n,98279)))),g=(0,f.Ay)((()=>Promise.resolve().then(n.bind(n,57076))));let O=function(e){function t(...e){var n;return(0,o.A)(this,t),n=x(this,t,[].concat(e)),(0,r.A)(n,"state",{isOpen:!1,onClose:()=>{n.setState({isOpen:!1})}}),n.ref=(0,d.createRef)(),n}return(0,l.A)(t,e),(0,i.A)(t,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"onClickOutside",value:function(e){const t=e.path||e.composedPath&&e.composedPath();this.mounted&&(this.ref.current?.ownerDocument.querySelectorAll(".toolbar-item__popover").length>=2||t&&!t.includes(this.ref.current?.ownerDocument.querySelector(".toolbar-item__popover"))&&!t.includes(this.ref.current))&&this.state.onClose()}},{key:"onToggle",value:function(){const{isOpen:e}=this.state,{defaultView:t}=this.ref.current.ownerDocument;e?t.removeEventListener("click",this.onClickOutside.bind(this),!1):t.addEventListener("click",this.onClickOutside.bind(this),!1),this.setState({isOpen:!e})}},{key:"render",value:function(){const{text:e,className:t,tooltip:n,icon:o,children:i,advancedOptions:a=!1,tab:s=0,position:l="top center",disabled:r=!1}=this.props,{isOpen:d,onClose:h}=this.state,f=b()("toolbar-item","toolbar-item__button",t),{receiveMaxiSettings:x}=(0,m.select)("maxiBlocks"),{hide_tooltips:y}=x(),O=!(0,_.isEmpty)(y)&&y,P=()=>(0,c.createElement)(C,{className:f,onClick:()=>this.onToggle(),"aria-expanded":d,action:"popup",disabled:r},(0,c.createElement)(E,{className:"toolbar-item__icon",icon:o}),(0,u.__)(e,"maxi-blocks"));return(0,c.createElement)("div",{ref:this.ref},(0,c.createElement)(A.A.Provider,{value:this.state},!O&&(0,c.createElement)(p.Tooltip,{text:n,placement:"top"},P()),O&&P(),d&&i&&(0,c.createElement)(g,{anchor:this.ref?.current?.closest(".toolbar-wrapper"),className:"toolbar-item__popover",onClose:h,position:l,useAnimationFrame:!0,useFlip:!0,useShift:!0,shiftPadding:!!a&&{right:20},shiftLimit:{mainAxis:!1},isAlternate:!0,noArrow:!0},(0,c.createElement)("div",null,i),!!a&&(0,c.createElement)(C,{className:"toolbar-item__popover__advanced-button",icon:k.P2$,onClick:()=>{(0,v.z4)(s,a)}}))))}}])}(d.Component);t.default=O},8062:function(e,t,n){const o=(0,n(86087).createContext)();t.A=o}}]);