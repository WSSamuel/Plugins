"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[8169],{58169:function(t,e,n){n.r(e);var o=n(4942),a=n(70885),i=n(69307),c=(n(99196),n(65736)),r=n(94184),l=n.n(r),s=n(92819),u=n(40684),p=n(69663),d=n(23543),b=n(19848),m=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,46006))})),g=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,75655))})),v=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,37063))})),f=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,7360))})),k=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,59017))})),h=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,9054))})),Z=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,86799))})),x=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,47561))})),C=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,38207))})),y=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,65622))})),O=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,81320))})),_=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,27910))})),S=(0,u.ZP)((function(){return Promise.resolve().then(n.bind(n,78759))}));e.default=function(t){var e,n=t.className,r=t.onChangeInline,u=void 0===r?null:r,w=t.onChange,E=t.svgType,P=void 0===E?"Filled":E,H=t.breakpoint,j=t.blockStyle,z=t.isHover,R=void 0!==z&&z,F=t.prefix,I=t.clientId,V=(0,p.OR)({target:"".concat(F,"background-active-media"),breakpoint:H,attributes:t,isHover:R}),A=(0,i.useState)("color"),L=(0,a.Z)(A,2),G=L[0],N=L[1],X=(0,i.useState)(V||"none"),B=(0,a.Z)(X,2),D=B[0],M=B[1],T=l()("maxi-icon-control",n),W=function(){var t=[];return"Shape"!==P?t.push({icon:(0,i.createElement)(m,{icon:b.IPj}),value:"color"}):"color"===G&&N("fill"),"Line"!==P?t.push({icon:(0,i.createElement)(m,{icon:b.YlK}),value:"fill"}):"fill"===G&&N("color"),t},K="navigation-arrow-",U="navigation-dot-",Y="navigation-arrow-both-icon-"===F?K:U,q=F.includes("active"),J="".concat("navigation-dot-"===Y?"dotIcon":"arrowIcon").concat(q?"Active":"").concat(R?"Hover":""),Q=Y.includes("dot")?"dots":"arrows";return(0,i.createElement)("div",{className:T},!R&&!q&&"general"===H&&Y===K&&["first","second"].map((function(e){return(0,i.createElement)(_,{type:"navigation-icon",label:(0,c.__)((0,c.sprintf)("Add %s icon",Q),"maxi-blocks"),style:j,onSelect:function(t){return w(t)},onRemove:function(t){return w(t)},icon:t["".concat(Y).concat(e,"-icon-content")],prefix:"".concat(Y).concat(e,"-")})})),!R&&!q&&"general"===H&&Y===U&&(0,i.createElement)(_,{type:"navigation-icon",title:(0,c.__)("Add dot icon","maxi-blocks"),style:j,onSelect:function(t){return w(t)},onRemove:function(t){return w(t)},icon:t["".concat(Y,"icon-content")],prefix:Y}),(t["navigation-arrow-first-icon-content"]||t["navigation-arrow-second-icon-content"]||t["navigation-dot-icon-content"])&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(g,{breakpoint:H},(0,i.createElement)(i.Fragment,null,!q&&(0,i.createElement)(v,Object.assign({},(0,p.t5)(t,J,R),{onChange:w,prefix:F,customLabel:"".concat((0,s.capitalize)(Q)," size"),breakpoint:H,isHover:R,disableHeightFitContent:!0})),"Shape"!==P&&(0,i.createElement)(f,Object.assign({},(0,p.t5)(t,J,R),{onChange:function(e){Y===K&&w(Object.assign({},e,["first","second"].reduce((function(n,a){return Object.assign({},n,(0,o.Z)({},"navigation-arrow-".concat(a,"-icon-content"),(0,d.hb)(t["navigation-arrow-".concat(a,"-icon-content")],e[(0,p.m2)("stroke",R,F,H)])))})))),Y===U&&w(Object.assign({},e,!q&&{"navigation-dot-icon-content":(0,d.hb)(t["navigation-dot-icon-content"],e[(0,p.m2)("stroke",R,F,H)])}))},prefix:F,customLabel:"".concat((0,s.capitalize)(Q)," stroke width"),breakpoint:H,isHover:R})),!R&&!q&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(k,{label:(0,c.__)("".concat((0,s.capitalize)(Q)," horizontal spacing"),"maxi-blocks"),min:-300,max:300,initial:1,step:1,breakpoint:H,value:(0,p.OR)({target:"".concat(F,"spacing-horizontal"),breakpoint:H,attributes:t,isHover:R}),onChangeValue:function(t){w((0,o.Z)({},(0,p.m2)("spacing-horizontal",R,F,H),void 0!==t&&""!==t?t:""))},onReset:function(){return w((0,o.Z)({},(0,p.m2)("spacing-horizontal",R,F,H),(0,p.oG)((0,p.m2)("spacing-horizontal",R,F,H))))},isHover:R}),(0,i.createElement)(k,{label:(0,c.__)("".concat((0,s.capitalize)(Q)," vertical spacing"),"maxi-blocks"),min:-100,max:200,initial:1,step:1,breakpoint:H,value:(0,p.OR)({target:"".concat(F,"spacing-vertical"),breakpoint:H,attributes:t,isHover:R}),onChangeValue:function(t){w((0,o.Z)({},(0,p.m2)("spacing-vertical",R,F,H),void 0!==t&&""!==t?t:""))},onReset:function(){return w((0,o.Z)({},(0,p.m2)("spacing-vertical",R,F,H),(0,p.oG)((0,p.m2)("spacing-vertical",R,F,H))))},isHover:R}),F.includes("dot")&&(0,i.createElement)(k,{label:(0,c.__)("Spacing between dots","maxi-blocks"),min:-10,max:100,initial:1,step:1,breakpoint:H,value:(0,p.OR)({target:"".concat(F,"spacing-between"),breakpoint:H,attributes:t,isHover:R}),onChangeValue:function(t){w((0,o.Z)({},(0,p.m2)("spacing-between",R,F,H),void 0!==t&&""!==t?t:""))},onReset:function(){return w((0,o.Z)({},(0,p.m2)("spacing-between",R,F,H),(0,p.oG)((0,p.m2)("spacing-between",R,F,H))))},isHover:R})),!R&&(0,i.createElement)(h,Object.assign({},(0,p.t5)(t,"padding",!1,F),{label:(0,c.__)("".concat((0,s.capitalize)(Q)," padding"),"maxi-blocks"),onChange:w,breakpoint:H,target:"padding",disableAuto:!0,optionType:"string",minMaxSettings:{px:{min:0,max:999},em:{min:0,max:999},vw:{min:0,max:999},"%":{min:0,max:100}},prefix:F,noResponsiveTabs:!0})))),W().length>1&&(0,i.createElement)(Z,{label:"",className:"maxi-icon-styles-control",type:"buttons",fullWidthMode:!0,selected:G,items:W(),onChange:function(t){return N(t)}}),"color"===G&&"Shape"!==P&&(0,i.createElement)(x,{label:(0,c.__)("".concat((0,s.capitalize)(Q)," line"),"maxi-blocks"),color:t[(0,p.m2)("stroke-color",R,F)],prefix:"".concat(F,"stroke-"),avoidBreakpointForDefault:!0,paletteColor:t[(0,p.m2)("stroke-palette-color",R,F)],paletteOpacity:t[(0,p.m2)("stroke-palette-opacity",R,F)],paletteStatus:t[(0,p.m2)("stroke-palette-status",R,F)],paletteSCStatus:t[(0,p.m2)("stroke-palette-sc-status",R,F)],onChangeInline:function(t){var e=t.color;return u&&u({stroke:e},"[data-stroke]",!0)},onChange:function(e){var n,a=e.color,i=e.paletteColor,c=e.paletteStatus,r=e.paletteSCStatus,l=e.paletteOpacity,s=(0,p.zL)(r?{firstVar:"color-".concat(i).concat(R?"-hover":""),opacity:l,blockStyle:j}:{firstVar:(0,p.m2)("stroke",R,F),secondVar:"color-".concat(i).concat(R?"-hover":""),opacity:l,blockStyle:j}),u=(n={},(0,o.Z)(n,(0,p.m2)("stroke-color",R,F),a),(0,o.Z)(n,(0,p.m2)("stroke-palette-color",R,F),i),(0,o.Z)(n,(0,p.m2)("stroke-palette-status",R,F),c),(0,o.Z)(n,(0,p.m2)("stroke-palette-sc-status",R,F),r),(0,o.Z)(n,(0,p.m2)("stroke-palette-opacity",R,F),l),n);Y===K&&w(Object.assign({},u,["first","second"].reduce((function(e,n){return Object.assign({},e,(0,o.Z)({},"navigation-arrow-".concat(n,"-icon-content"),(R?d.el:d.Xj)(t["navigation-arrow-".concat(n,"-icon-content")],c?s:a,"stroke")))}),{})),"[data-stroke]"),Y===U&&w(Object.assign({},u,!q&&{"navigation-dot-icon-content":(R?d.el:d.Xj)(t["navigation-dot-icon-content"],c?s:a,"stroke")}),"[data-stroke]")},isHover:R}),"fill"===G&&"Line"!==P&&(0,i.createElement)(x,{label:(0,c.__)("".concat((0,s.capitalize)(Q)," fill"),"maxi-blocks"),color:t[(0,p.m2)("fill-color",R,F)],prefix:"".concat(F,"fill-"),avoidBreakpointForDefault:!0,paletteColor:t[(0,p.m2)("fill-palette-color",R,F)],paletteOpacity:t[(0,p.m2)("fill-palette-opacity",R,F)],paletteStatus:t[(0,p.m2)("fill-palette-status",R,F)],paletteSCStatus:t[(0,p.m2)("fill-palette-sc-status",R,F)],onChangeInline:function(t){var e=t.color;return u&&u({fill:e},"[data-fill]",!0)},onChange:function(e){var n,a=e.color,i=e.paletteColor,c=e.paletteStatus,r=e.paletteSCStatus,l=e.paletteOpacity,s=(0,p.zL)(r?{firstVar:"color-".concat(i).concat(R?"-hover":""),opacity:l,blockStyle:j}:{firstVar:(0,p.m2)("fill",R,F),secondVar:"color-".concat(i).concat(R?"-hover":""),opacity:l,blockStyle:j}),u=(n={},(0,o.Z)(n,(0,p.m2)("fill-color",R,F),a),(0,o.Z)(n,(0,p.m2)("fill-palette-color",R,F),i),(0,o.Z)(n,(0,p.m2)("fill-palette-status",R,F),c),(0,o.Z)(n,(0,p.m2)("fill-palette-sc-status",R,F),r),(0,o.Z)(n,(0,p.m2)("fill-palette-opacity",R,F),l),n);Y===K&&w(Object.assign({},u,["first","second"].reduce((function(e,n){return Object.assign({},e,(0,o.Z)({},"navigation-arrow-".concat(n,"-icon-content"),(R?d.el:d.Xj)(t["navigation-arrow-".concat(n,"-icon-content")],c?s:a,"fill")))}),{})),"[data-fill]"),Y===U&&w(Object.assign({},u,!q&&{"navigation-dot-icon-content":(R?d.el:d.Xj)(t["navigation-dot-icon-content"],c?s:a,"fill")}),"[data-fill]")},isHover:R}),(0,i.createElement)(C,{label:(0,c.__)((0,c.sprintf)("Add %s border",Q),"maxi-blocks"),selected:t["".concat(F,"status-border")],onChange:function(t){return w((0,o.Z)({},"".concat(F,"status-border"),t))}}),t["".concat(F,"status-border")]&&(0,i.createElement)(y,Object.assign({},(0,p.t5)(t,["border","borderWidth","borderRadius"],R,F),{prefix:F,onChange:w,breakpoint:H,clientId:I,isHover:R})),(0,i.createElement)(C,{label:(0,c.__)((0,c.sprintf)("Add %s background",Q),"maxi-blocks"),selected:t["".concat(F,"status-background")],onChange:function(t){return w((0,o.Z)({},"".concat(F,"status-background"),t))}}),t["".concat(F,"status-background")]&&(0,i.createElement)(i.Fragment,null,(0,i.createElement)(Z,{type:"buttons",fullWidthMode:!0,selected:D,items:(e=[],e.push({icon:(0,i.createElement)(m,{icon:b.OcU}),value:"none"}),e.push({icon:(0,i.createElement)(m,{icon:b.Czw}),value:"color"}),e.push({icon:(0,i.createElement)(m,{icon:b.eFN}),value:"gradient"}),e),onChange:function(t){M(t),w((0,o.Z)({},(0,p.m2)("background-active-media",R,F,H),t))}}),"color"===D&&(0,i.createElement)(x,{label:(0,c.__)("".concat((0,s.capitalize)(Q)," background"),"maxi-blocks"),paletteStatus:(0,p.OR)({target:"".concat(F,"background-palette-status"),breakpoint:H,attributes:t,isHover:R}),paletteSCStatus:(0,p.OR)({target:"".concat(F,"background-palette-sc-status"),breakpoint:H,attributes:t,isHover:R}),paletteColor:(0,p.OR)({target:"".concat(F,"background-palette-color"),breakpoint:H,attributes:t,isHover:R}),paletteOpacity:(0,p.OR)({target:"".concat(F,"background-palette-opacity"),breakpoint:H,attributes:t,isHover:R}),color:(0,p.OR)({target:"".concat(F,"background-color"),breakpoint:H,attributes:t,isHover:R}),prefix:"".concat(F,"background-"),avoidBreakpointForDefault:!0,onChangeInline:function(t){var e=t.color;return u&&u({background:e},".maxi-slider-block__".concat(Y===K?"arrow":"dot"))},onChange:function(t){var e,n=t.paletteStatus,a=t.paletteSCStatus,i=t.paletteColor,c=t.paletteOpacity,r=t.color;w((e={},(0,o.Z)(e,(0,p.m2)("background-palette-status",R,F,H),n),(0,o.Z)(e,(0,p.m2)("background-palette-sc-status",R,F,H),a),(0,o.Z)(e,(0,p.m2)("background-palette-color",R,F,H),i),(0,o.Z)(e,(0,p.m2)("background-palette-opacity",R,F,H),c),(0,o.Z)(e,(0,p.m2)("background-color",R,F,H),r),e),Y===K?".maxi-slider-block__arrow":".maxi-slider-block__dot")},isHover:R}),"gradient"===D&&(0,i.createElement)(S,{label:(0,c.__)("".concat((0,s.capitalize)(Q)," background gradient"),"maxi-blocks"),gradient:(0,p.OR)({target:"".concat(F,"background-gradient"),breakpoint:H,attributes:t,isHover:R}),gradientOpacity:(0,p.OR)({target:"".concat(F,"background-gradient-opacity"),breakpoint:H,attributes:t,isHover:R}),defaultGradient:(0,p.oG)((0,p.m2)("background-gradient",R,F,H)),onChange:function(t){return w((0,o.Z)({},(0,p.m2)("background-gradient",R,F,H),t))},onChangeOpacity:function(t){return w((0,o.Z)({},(0,p.m2)("background-gradient-opacity",R,F,H),t))},isHover:R})),(0,i.createElement)(C,{label:(0,c.__)((0,c.sprintf)("Add %s shadow",Q),"maxi-blocks"),selected:t["".concat(F,"status-shadow")],onChange:function(t){return w((0,o.Z)({},"".concat(F,"status-shadow"),t))}}),t["".concat(F,"status-shadow")]&&(0,i.createElement)(O,Object.assign({},(0,p.t5)(t,"boxShadow",R,F),{prefix:F,label:"".concat((0,s.capitalize)(Q)," box shadow"),onChange:w,breakpoint:H,clientId:I,isHover:R}))))}}}]);