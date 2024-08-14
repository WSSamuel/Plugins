"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[3041,3035],{83041:function(e,t,n){n.r(t);var o=n(69307),i=(n(99196),n(65736)),r=n(13035),a=n(9054),l=n(69663),c=n(19848);t.default=function(e){var t=e.blockName,n=e.breakpoint,s=e.disableMargin,u=void 0!==s&&s,d=e.disablePadding,m=void 0!==d&&d,p=e.isIconToolbar,f=void 0!==p&&p,v=e.marginTarget,h=void 0===v?"margin":v,b=e.onChange,g=e.paddingTarget,_=void 0===g?"padding":g;return"maxi-blocks/button-maxi"===t||f?(0,o.createElement)(r.default,{className:"toolbar-item__padding-margin",tooltip:(0,i.__)("Padding","maxi-blocks"),position:"bottom center",icon:c.HFP,advancedOptions:f?"icon":"margin / padding"},(0,o.createElement)("div",{className:"toolbar-item__padding-margin__popover"},!m&&(0,o.createElement)(a.default,Object.assign({},(0,l.t5)(e,f?"iconPadding":"padding"),{label:(0,i.__)("Icon padding","maxi-blocks"),onChange:b,breakpoint:n,target:_,optionType:"string",disableAuto:!0,disableSync:!0})),!u&&(0,o.createElement)(a.default,Object.assign({},(0,l.t5)(e,"margin"),{label:(0,i.__)("Margin","maxi-blocks"),onChange:b,breakpoint:n,target:h,optionType:"string"})))):null}},13035:function(e,t,n){n.r(t);var o=n(15671),i=n(43144),r=n(97326),a=n(60136),l=n(82963),c=n(61120),s=n(4942),u=n(69307),d=(n(99196),n(65736)),m=n(55609),p=n(9818),f=n(94184),v=n.n(f),h=n(92819),b=n(40684),g=n(88442),_=n(19848),k=n(19693);var y=(0,b.ZP)((function(){return Promise.resolve().then(n.bind(n,87570))})),x=(0,b.ZP)((function(){return Promise.resolve().then(n.bind(n,46006))})),C=(0,b.ZP)((function(){return Promise.resolve().then(n.bind(n,39909))})),E=function(e){(0,a.Z)(b,e);var t,n,f=(t=b,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=(0,c.Z)(t);if(n){var i=(0,c.Z)(this).constructor;e=Reflect.construct(o,arguments,i)}else e=o.apply(this,arguments);return(0,l.Z)(this,e)});function b(){var e;(0,o.Z)(this,b);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e=f.call.apply(f,[this].concat(n)),(0,s.Z)((0,r.Z)(e),"state",{isOpen:!1,onClose:function(){e.setState({isOpen:!1})}}),e.ref=(0,u.createRef)(),e}return(0,i.Z)(b,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"onClickOutside",value:function(e){var t,n,o=e.path||e.composedPath&&e.composedPath();this.mounted&&((null===(t=this.ref.current)||void 0===t?void 0:t.ownerDocument.querySelectorAll(".toolbar-item__popover").length)>=2||o&&!o.includes(null===(n=this.ref.current)||void 0===n?void 0:n.ownerDocument.querySelector(".toolbar-item__popover"))&&!o.includes(this.ref.current))&&this.state.onClose()}},{key:"onToggle",value:function(){var e=this.state.isOpen,t=this.ref.current.ownerDocument.defaultView;e?t.removeEventListener("click",this.onClickOutside.bind(this),!1):t.addEventListener("click",this.onClickOutside.bind(this),!1),this.setState({isOpen:!e})}},{key:"render",value:function(){var e,t,n=this,o=this.props,i=o.text,r=o.className,a=o.tooltip,l=o.icon,c=o.children,s=o.advancedOptions,f=void 0!==s&&s,b=o.tab,E=void 0===b?0:b,P=o.position,O=void 0===P?"top center":P,Z=o.disabled,w=void 0!==Z&&Z,N=this.state,T=N.isOpen,A=N.onClose,R=v()("toolbar-item","toolbar-item__button",r),S=(0,(0,p.select)("maxiBlocks").receiveMaxiSettings)().hide_tooltips,B=!(0,h.isEmpty)(S)&&S,D=function(){return(0,u.createElement)(y,{className:R,onClick:function(){return n.onToggle()},"aria-expanded":T,action:"popup",disabled:w},(0,u.createElement)(x,{className:"toolbar-item__icon",icon:l}),(0,d.__)(i,"maxi-blocks"))};return(0,u.createElement)("div",{ref:this.ref},(0,u.createElement)(k.Z.Provider,{value:this.state},!B&&(0,u.createElement)(m.Tooltip,{text:a,placement:"top"},D()),B&&D(),T&&c&&(0,u.createElement)(C,{anchor:null===(e=this.ref)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.closest(".toolbar-wrapper"),className:"toolbar-item__popover",onClose:A,position:O,useAnimationFrame:!0,useFlip:!0,useShift:!0,shiftPadding:!!f&&{right:20},shiftLimit:{mainAxis:!1},isAlternate:!0,noArrow:!0},(0,u.createElement)("div",null,c),!!f&&(0,u.createElement)(y,{className:"toolbar-item__popover__advanced-button",icon:_.vV$,onClick:function(){(0,g.RB)(E,f)}}))))}}]),b}(u.Component);t.default=E},19693:function(e,t,n){var o=(0,n(69307).createContext)();t.Z=o}}]);