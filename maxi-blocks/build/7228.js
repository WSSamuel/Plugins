"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[7228],{47228:function(e,t,n){n.r(t);var r=n(51609),a=n(27723),o=n(32485),u=n.n(o),c=n(26287),l=n(46416);const i=(0,c.Ay)((()=>Promise.resolve().then(n.bind(n,2114)))),s=(0,c.Ay)((()=>Promise.resolve().then(n.bind(n,90978)))),b=(0,c.Ay)((()=>Promise.resolve().then(n.bind(n,33108)))),m=(0,c.Ay)((()=>Promise.resolve().then(n.bind(n,32542)))),p=(0,c.Ay)((()=>Promise.resolve().then(n.bind(n,2742)))),g=(0,c.Ay)((()=>Promise.resolve().then(n.bind(n,27261))));t.default=e=>{const{className:t,breakpoint:n,onChangeInline:o,onChange:c}=e,_=u()("maxi-number-counter-control",t),d=(0,l.qw)({target:"number-counter-width-auto",breakpoint:n,attributes:e});return(0,r.createElement)("div",{className:_},!e["number-counter-circle-status"]&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(g,{label:(0,a.__)("Auto width","maxi-blocks"),selected:d,onChange:e=>c({[`number-counter-width-auto-${n}`]:e})}),!d&&(0,r.createElement)(i,{label:(0,a.__)("Width","maxi-blocks"),className:"maxi-number-counter-control__width",enableUnit:!0,unit:(0,l.qw)({target:"number-counter-width-unit",breakpoint:n,attributes:e}),onChangeUnit:e=>c({[`number-counter-width-unit-${n}`]:e}),value:(0,l.qw)({target:"number-counter-width",breakpoint:n,attributes:e}),onChangeValue:e=>c({[`number-counter-width-${n}`]:e}),onReset:()=>c({[`number-counter-width-${n}`]:(0,l.Ar)(`number-counter-width-${n}`),[`number-counter-width-unit-${n}`]:(0,l.Ar)(`number-counter-width-unit-${n}`),isReset:!0}),minMaxSettings:{px:{min:0,max:3999},vw:{min:0,max:999},"%":{min:0,max:100}},optionType:"string"})),(0,r.createElement)(g,{label:(0,a.__)("Preview","maxi-blocks"),selected:e["number-counter-preview"],onChange:e=>c({"number-counter-preview":e})}),(0,r.createElement)(p,{label:(0,a.__)("Start animation","maxi-blocks"),className:"maxi-number-counter-control__start-animation",value:e["number-counter-start-animation"],newStyle:!0,options:[{label:(0,a.__)("Page Load","maxi-blocks"),value:"page-load"},{label:(0,a.__)("View On Scroll","maxi-blocks"),value:"view-scroll"}],onChange:e=>c({"number-counter-start-animation":e})}),"view-scroll"===e["number-counter-start-animation"]&&(0,r.createElement)(i,{label:(0,a.__)("Offset","maxi-blocks"),min:50,max:100,initial:100,step:1,value:e["number-counter-start-animation-offset"],onChangeValue:e=>c({"number-counter-start-animation-offset":e}),onReset:()=>c({"number-counter-start-animation-offset":(0,l.Ar)("number-counter-start-animation-offset"),isReset:!0})}),e["number-counter-start"]>=e["number-counter-end"]&&(0,r.createElement)("div",{className:"maxi-number-counter-control__alert-warning"},(0,r.createElement)("i",null,(0,a.__)("Start Number ","maxi-blocks")),(0,a.__)("can not be grater than ","maxi-blocks"),(0,r.createElement)("i",null,(0,a.__)("End Number ","maxi-blocks"))),(0,r.createElement)(i,{className:"number-counter-control__start-end",label:(0,a.__)("Start number","maxi-blocks"),min:0,max:e["number-counter-end"],initial:0,step:1,value:e["number-counter-start"],onChangeValue:e=>c({"number-counter-start":e}),onReset:()=>c({"number-counter-start":(0,l.Ar)("number-counter-start"),isReset:!0})}),(0,r.createElement)(i,{className:"number-counter-control__start-end",label:(0,a.__)("End number","maxi-blocks"),min:1,max:e["number-counter-circle-status"]?9999999999:100,initial:100,step:1,value:e["number-counter-end"],onChangeValue:e=>c({"number-counter-end":e}),onReset:()=>c({"number-counter-end":(0,l.Ar)("number-counter-end"),isReset:!0})}),!e["number-counter-circle-status"]&&e["number-counter-end"]>=100&&(0,r.createElement)("div",{className:"maxi-number-counter-control__alert-warning"},(0,r.createElement)("i",null,(0,a.__)("End Number can't be grater than 100 when circle is enabled","maxi-blocks"))),(0,r.createElement)(i,{label:(0,a.__)("Duration","maxi-blocks"),min:1,max:10,initial:1,step:1,value:e["number-counter-duration"],onChangeValue:e=>c({"number-counter-duration":e}),onReset:()=>c({"number-counter-duration":(0,l.Ar)("number-counter-duration"),isReset:!0})}),!e["number-counter-circle-status"]&&(0,r.createElement)(i,{label:(0,a.__)("Stroke","maxi-blocks"),min:1,max:99,initial:8,step:1,value:e["number-counter-stroke"],onChangeValue:e=>c({"number-counter-stroke":e}),onReset:()=>c({"number-counter-stroke":(0,l.Ar)("number-counter-stroke"),isReset:!0})}),(0,r.createElement)(b,{className:"maxi-typography-control__font-family",defaultValue:(0,l.Ar)(`font-family-${n}`),font:(0,l.qw)({target:"font-family",breakpoint:n,attributes:e}),onChange:e=>c({[`font-family-${n}`]:e.value}),breakpoint:n}),(0,r.createElement)(m,{onChange:e=>{c({[`font-weight-${n}`]:e})},onReset:()=>{c({[`font-weight-${n}`]:(0,l.Ar)(`font-weight-${n}`),isReset:!0})},fontWeight:(0,l.qw)({target:"font-weight",breakpoint:n,attributes:e})||"400",fontName:(0,l.qw)({target:"font-family",breakpoint:n,attributes:e}),breakpoint:n}),(0,r.createElement)(i,{className:"maxi-number-counter-control__font-size",label:(0,a.__)("Title font size","maxi-blocks"),min:0,max:999,initial:32,step:1,value:(0,l.qw)({target:"number-counter-title-font-size",breakpoint:n,attributes:e}),onChangeValue:e=>c({[`number-counter-title-font-size-${n}`]:e}),onReset:()=>c({[`number-counter-title-font-size-${n}`]:(0,l.Ar)(`number-counter-title-font-size-${n}`),isReset:!0})}),(0,r.createElement)(g,{className:"number-counter-percentage-sign-status",label:(0,a.__)("Show percentage sign","maxi-blocks"),selected:e["number-counter-percentage-sign-status"],onChange:e=>c({"number-counter-percentage-sign-status":e})}),!0===e["number-counter-percentage-sign-status"]&&(0,r.createElement)(g,{className:"number-counter-percentage-sign-position",label:(0,a.__)("Centre percentage sign","maxi-blocks"),selected:e["number-counter-percentage-sign-position-status"],onChange:e=>c({"number-counter-percentage-sign-position-status":e})}),(0,r.createElement)(g,{className:"number-counter-circle-status",label:(0,a.__)("Hide circle","maxi-blocks"),selected:e["number-counter-circle-status"],onChange:t=>{c(Object.assign({"number-counter-circle-status":t},!t&&Object.assign({},e["number-counter-end"]>100&&{"number-counter-end":100},e["number-counter-start"]>100&&{"number-counter-start":0})))}}),!e["number-counter-circle-status"]&&(0,r.createElement)(g,{className:"number-counter-rounded-status",label:(0,a.__)("Rounded bar","maxi-blocks"),selected:e["number-counter-rounded-status"],onChange:e=>c({"number-counter-rounded-status":e})}),(0,r.createElement)("hr",null),(0,r.createElement)(s,{label:(0,a.__)("Text","maxi-blocks"),paletteStatus:(0,l.qw)({target:"number-counter-text-palette-status",breakpoint:n,attributes:e}),paletteSCStatus:(0,l.qw)({target:"number-counter-text-palette-sc-status",breakpoint:n,attributes:e}),paletteColor:(0,l.qw)({target:"number-counter-text-palette-color",breakpoint:n,attributes:e}),paletteOpacity:(0,l.qw)({target:"number-counter-text-palette-opacity",breakpoint:n,attributes:e}),color:(0,l.qw)({target:"number-counter-text-color",breakpoint:n,attributes:e}),prefix:"number-counter-text-",deviceType:n,onChangeInline:({color:e})=>o({color:e},".maxi-number-counter__box__text"),onChange:({paletteStatus:e,paletteSCStatus:t,paletteColor:r,paletteOpacity:a,color:o})=>c({[`number-counter-text-palette-status-${n}`]:e,[`number-counter-text-palette-sc-status-${n}`]:t,[`number-counter-text-palette-color-${n}`]:r,[`number-counter-text-palette-opacity-${n}`]:a,[`number-counter-text-color-${n}`]:o},".maxi-number-counter__box__text")}),(0,r.createElement)("hr",null),!e["number-counter-circle-status"]&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(s,{label:(0,a.__)("Circle background","maxi-blocks"),paletteStatus:e["number-counter-circle-background-palette-status"],paletteSCStatus:e["number-counter-circle-background-palette-sc-status"],paletteColor:e["number-counter-circle-background-palette-color"],paletteOpacity:e["number-counter-circle-background-palette-opacity"],color:e["number-counter-circle-background-color"],prefix:"number-counter-circle-background-",onChangeInline:({color:e})=>o({color:e},".maxi-number-counter__box__background"),onChange:({paletteStatus:e,paletteSCStatus:t,paletteColor:n,paletteOpacity:r,color:a})=>c({"number-counter-circle-background-palette-status":e,"number-counter-circle-background-palette-sc-status":e,"number-counter-circle-background-palette-color":n,"number-counter-circle-background-palette-opacity":r,"number-counter-circle-background-color":a},".maxi-number-counter__box__background")}),(0,r.createElement)("hr",null),(0,r.createElement)(s,{label:(0,a.__)("Circle bar","maxi-blocks"),paletteStatus:(0,l.qw)({target:"number-counter-circle-bar-palette-status",breakpoint:n,attributes:e}),paletteSCStatus:(0,l.qw)({target:"number-counter-circle-bar-palette-sc-status",breakpoint:n,attributes:e}),paletteColor:(0,l.qw)({target:"number-counter-circle-bar-palette-color",breakpoint:n,attributes:e}),paletteOpacity:(0,l.qw)({target:"number-counter-circle-bar-palette-opacity",breakpoint:n,attributes:e}),color:(0,l.qw)({target:"number-counter-circle-bar-color",breakpoint:n,attributes:e}),prefix:"number-counter-circle-bar-",onChangeInline:({color:e})=>o({stroke:e},".maxi-number-counter__box__circle"),onChange:({paletteStatus:e,paletteSCStatus:t,paletteColor:r,paletteOpacity:a,color:o})=>c({[`number-counter-circle-bar-palette-status-${n}`]:e,[`number-counter-circle-bar-palette-sc-status-${n}`]:t,[`number-counter-circle-bar-palette-color-${n}`]:r,[`number-counter-circle-bar-palette-opacity-${n}`]:a,[`number-counter-circle-bar-color-${n}`]:o},".maxi-number-counter__box__circle")})))}}}]);