"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[4005],{94005:function(e,n,a){a.r(n);var t=a(4942),o=a(69307),i=(a(99196),a(9818)),l=a(65736),r=a(34261),c=a(69663);n.default=function(e){var n=e.accordionLayout,a=e.onChange,u=e.autoPaneClose,s=e.isCollapsible,m=e.animationDuration,b=e.breakpoint,p=e.clientId,g=(0,i.select)("core/block-editor").getBlockCount(p)>1;return(0,o.createElement)(o.Fragment,null,"general"===b&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(r.Yw,{label:(0,l.__)("Accordion layout","maxi-blocks"),value:n,options:[{label:"Simple",value:"simple"},{label:"Boxed",value:"boxed"}],onChange:function(e){return a({accordionLayout:e})}}),(0,o.createElement)(r.Zh,{label:(0,l.__)("Collapsible","maxi-blocks"),selected:s,onChange:function(e){return a({isCollapsible:e})}}),(0,o.createElement)(r.Zh,{label:(0,l.__)("Pane closes when another opens","maxi-blocks"),selected:u,onChange:function(e){return a({autoPaneClose:e})}})),g&&(0,o.createElement)(r.u,{label:(0,l.__)("Spacing","maxi-blocks"),minMaxSettings:{px:{min:0,max:999,step:1},em:{min:0,max:99,step:1},vh:{min:0,max:99,step:1}},value:(0,c.OR)({target:"row-gap",breakpoint:b,attributes:e}),unit:(0,c.OR)({target:"row-gap-unit",breakpoint:b,attributes:e}),enableUnit:!0,allowedUnits:["px","em","vh"],onChangeValue:function(e){a((0,t.Z)({},"row-gap-".concat(b),void 0!==e?e:""))},onChangeUnit:function(e){a((0,t.Z)({},"row-gap-unit-".concat(b),e))},onReset:function(){var e;return a((e={},(0,t.Z)(e,"row-gap-".concat(b),(0,c.oG)("row-gap-".concat(b))),(0,t.Z)(e,"isReset",!0),e))}}),(0,o.createElement)(r.u,{label:(0,l.__)("Animation duration","maxi-blocks"),min:0,max:10,step:.1,value:m,onChangeValue:function(e){a({animationDuration:void 0!==e?e:""})},onReset:function(){return a({animationDuration:(0,c.oG)("animationDuration"),isReset:!0})}}))}}}]);