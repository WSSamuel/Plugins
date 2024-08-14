"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[5003,3035],{65003:function(e,t,o){o.r(t);var i=o(45987),n=o(69307),a=(o(99196),o(65736)),r=o(13035),c=o(34261),l=o(19848),s=["blockName"],u=["maxi-blocks/container-maxi","maxi-blocks/row-maxi","maxi-blocks/column-maxi","maxi-blocks/group-maxi","maxi-blocks/pane-maxi","maxi-blocks/slide-maxi","maxi-blocks/accordion-maxi","maxi-blocks/slider-maxi"];t.default=function(e){var t=e.blockName,o=(0,i.Z)(e,s);return u.includes(t)?(0,n.createElement)(r.default,{className:"toolbar-item__context-loop",tooltip:(0,a.__)("Context loop","maxi-blocks"),icon:l.mp9,advancedOptions:"context loop"},(0,n.createElement)(c.W6,Object.assign({className:"toolbar-item__context-loop__popover",contentType:{"maxi-blocks/container-maxi":"container","maxi-blocks/row-maxi":"row","maxi-blocks/column-maxi":"column","maxi-blocks/group-maxi":"group","maxi-blocks/pane-maxi":"pane","maxi-blocks/slide-maxi":"slide","maxi-blocks/accordion-maxi":"accordion","maxi-blocks/slider-maxi":"slider"}[t],isToolbar:!0},o))):null}},13035:function(e,t,o){o.r(t);var i=o(15671),n=o(43144),a=o(97326),r=o(60136),c=o(82963),l=o(61120),s=o(4942),u=o(69307),m=(o(99196),o(65736)),d=o(55609),p=o(9818),f=o(94184),v=o.n(f),x=o(92819),b=o(40684),h=o(88442),k=o(19848),_=o(19693);var y=(0,b.ZP)((function(){return Promise.resolve().then(o.bind(o,87570))})),C=(0,b.ZP)((function(){return Promise.resolve().then(o.bind(o,46006))})),Z=(0,b.ZP)((function(){return Promise.resolve().then(o.bind(o,39909))})),g=function(e){(0,r.Z)(b,e);var t,o,f=(t=b,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=(0,l.Z)(t);if(o){var n=(0,l.Z)(this).constructor;e=Reflect.construct(i,arguments,n)}else e=i.apply(this,arguments);return(0,c.Z)(this,e)});function b(){var e;(0,i.Z)(this,b);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return e=f.call.apply(f,[this].concat(o)),(0,s.Z)((0,a.Z)(e),"state",{isOpen:!1,onClose:function(){e.setState({isOpen:!1})}}),e.ref=(0,u.createRef)(),e}return(0,n.Z)(b,[{key:"componentDidMount",value:function(){this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"onClickOutside",value:function(e){var t,o,i=e.path||e.composedPath&&e.composedPath();this.mounted&&((null===(t=this.ref.current)||void 0===t?void 0:t.ownerDocument.querySelectorAll(".toolbar-item__popover").length)>=2||i&&!i.includes(null===(o=this.ref.current)||void 0===o?void 0:o.ownerDocument.querySelector(".toolbar-item__popover"))&&!i.includes(this.ref.current))&&this.state.onClose()}},{key:"onToggle",value:function(){var e=this.state.isOpen,t=this.ref.current.ownerDocument.defaultView;e?t.removeEventListener("click",this.onClickOutside.bind(this),!1):t.addEventListener("click",this.onClickOutside.bind(this),!1),this.setState({isOpen:!e})}},{key:"render",value:function(){var e,t,o=this,i=this.props,n=i.text,a=i.className,r=i.tooltip,c=i.icon,l=i.children,s=i.advancedOptions,f=void 0!==s&&s,b=i.tab,g=void 0===b?0:b,E=i.position,w=void 0===E?"top center":E,O=i.disabled,P=void 0!==O&&O,N=this.state,R=N.isOpen,A=N.onClose,S=v()("toolbar-item","toolbar-item__button",a),T=(0,(0,p.select)("maxiBlocks").receiveMaxiSettings)().hide_tooltips,B=!(0,x.isEmpty)(T)&&T,D=function(){return(0,u.createElement)(y,{className:S,onClick:function(){return o.onToggle()},"aria-expanded":R,action:"popup",disabled:P},(0,u.createElement)(C,{className:"toolbar-item__icon",icon:c}),(0,m.__)(n,"maxi-blocks"))};return(0,u.createElement)("div",{ref:this.ref},(0,u.createElement)(_.Z.Provider,{value:this.state},!B&&(0,u.createElement)(d.Tooltip,{text:r,placement:"top"},D()),B&&D(),R&&l&&(0,u.createElement)(Z,{anchor:null===(e=this.ref)||void 0===e||null===(t=e.current)||void 0===t?void 0:t.closest(".toolbar-wrapper"),className:"toolbar-item__popover",onClose:A,position:w,useAnimationFrame:!0,useFlip:!0,useShift:!0,shiftPadding:!!f&&{right:20},shiftLimit:{mainAxis:!1},isAlternate:!0,noArrow:!0},(0,u.createElement)("div",null,l),!!f&&(0,u.createElement)(y,{className:"toolbar-item__popover__advanced-button",icon:k.vV$,onClick:function(){(0,h.RB)(g,f)}}))))}}]),b}(u.Component);t.default=g},19693:function(e,t,o){var i=(0,o(69307).createContext)();t.Z=i}}]);