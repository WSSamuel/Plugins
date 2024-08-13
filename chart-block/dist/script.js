!function(){"use strict";var t,e,n,o,a,i={596:function(t,e,n){var o=n(533);e.s=o.createRoot,o.hydrateRoot},533:function(t){t.exports=ReactDOM}},r={};function c(t){var e=r[t];if(void 0!==e)return e.exports;var n=r[t]={exports:{}};return i[t](n,n.exports,c),n.exports}t=c(596),e=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=t||{},i=a.type,r=void 0===i?"solid":i,c=a.color,l=void 0===c?"#000000b3":c,d=a.gradient,s=void 0===d?"linear-gradient(135deg, #4527a4, #8344c5)":d,u=a.image,b=void 0===u?{}:u,v=a.position,g=void 0===v?"center center":v,p=a.attachment,m=void 0===p?"initial":p,h=a.repeat,f=void 0===h?"no-repeat":h,y=a.size,R=void 0===y?"cover":y,C=a.overlayColor,k=void 0===C?"#000000b3":C;return"gradient"===r&&n?"background: ".concat(s,";"):"image"===r&&o?"background: url(".concat(null==b?void 0:b.url,");\n\t\t\t\tbackground-color: ").concat(k,";\n\t\t\t\tbackground-position: ").concat(g,";\n\t\t\t\tbackground-size: ").concat(R,";\n\t\t\t\tbackground-repeat: ").concat(f,";\n\t\t\t\tbackground-attachment: ").concat(m,";\n\t\t\t\tbackground-blend-mode: overlay;"):e&&"background: ".concat(l,";")},n=function(t){var n=t.attributes,o=t.clientId,a=n.background,i=n.width,r=n.height,c=n.alignment,l="#bChart-".concat(o),d="".concat(l," .bChart");return React.createElement("style",{dangerouslySetInnerHTML:{__html:"\n\t\t".concat(l,"{\n\t\t\ttext-align: ").concat(c,";\n\t\t}\n\t\t").concat(d,"{\n\t\t\theight: ").concat(r,";\n\t\t}\n\t\t").concat(d,",\n\t\t").concat(l," .downloadArea{\n\t\t\twidth: ").concat(i,";\n\t\t}\n\t\t").concat(d," canvas{\n\t\t\t").concat(e(a),";\n\t\t}\n\t\t").replace(/\s+/g," ")}})},o=React,a=function(t){var e=t.attributes,n=t.clientId,a=t.isBackend,i=void 0!==a&&a,r=e.data,c=e.type,l=e.textColor,d=e.isXScale,s=e.isXGridLine,u=e.isYScale,b=e.isYGridLine,v=e.gridLineColor,g=e.isTitle,p=e.title,m=e.titleFontSize,h=e.titleColor,f=e.isSubtitle,y=e.subtitle,R=e.subtitleFontSize,C=e.subtitleColor,k=e.isDownload,S=(0,o.useRef)(null),E=(0,o.useRef)(null),w=i?[r,c,l,d,s,u,b,v,g,p,m,h,f,y,R,C,k]:[];return(0,o.useEffect)((function(){i&&(S.current.innerHTML="",S.current.innerHTML="<canvas>Your browser does not support the canvas element.</canvas>");var t=document.querySelector("#bChart-".concat(n," .bChart canvas")),o=t&&new Chart(t,function(t){var e=t.data,n=t.type,o=t.textColor,a=t.isXScale,i=t.isXGridLine,r=t.isYScale,c=t.isYGridLine,l=t.gridLineColor,d=t.isTitle,s=t.title,u=t.titleFontSize,b=t.titleColor,v=t.isSubtitle,g=t.subtitle,p=t.subtitleFontSize;return{type:n,data:e,options:{maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{usePointStyle:!0,color:o}},title:{display:d,text:s,color:b,font:{size:u,family:"Roboto"},padding:{bottom:10}},subtitle:{display:v,text:g,color:t.subtitleColor,font:{size:p,family:"Roboto"},padding:{bottom:15}},tooltip:{position:"nearest",usePointStyle:!0}},scales:{x:{display:a,ticks:{color:o},grid:{display:i,color:l}},y:{display:r,beginAtZero:!0,ticks:{color:o},grid:{display:c,color:l}}}}}}(e));k&&(null==E||E.current.addEventListener("click",(function(){var t=document.createElement("a");t.href=o.toBase64Image(),t.download="b-chart.png",t.click()})))}),w),React.createElement(React.Fragment,null,k&&React.createElement("div",{className:"downloadArea"},React.createElement("div",{className:"downloadChart",ref:E},"Download Chart")),React.createElement("div",{className:"bChart",ref:S},React.createElement("canvas",null,"Your browser does not support the canvas element.")))},document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".wp-block-b-chart-chart").forEach((function(e){var o=JSON.parse(e.dataset.attributes);(0,t.s)(e).render(React.createElement(React.Fragment,null,React.createElement(n,{attributes:o,clientId:o.cId}),React.createElement(a,{attributes:o,clientId:o.cId}))),null==e||e.removeAttribute("data-attributes")}))}))}();
//# sourceMappingURL=script.js.map