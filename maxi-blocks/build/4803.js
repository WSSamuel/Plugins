"use strict";(self.webpackChunkmaxi_blocks=self.webpackChunkmaxi_blocks||[]).push([[4803],{66389:function(n,t,e){e.d(t,{d:function(){return u}});var r=e(99196);function u(n,t){const e=(0,r.useRef)(t);(0,r.useEffect)((function(){t!==e.current&&null!=n.attributionControl&&(null!=e.current&&n.attributionControl.removeAttribution(e.current),null!=t&&n.attributionControl.addAttribution(t)),e.current=t}),[n,t])}},28129:function(n,t,e){function r(n,t,e){t.center!==e.center&&n.setLatLng(t.center),null!=t.radius&&t.radius!==e.radius&&n.setRadius(t.radius)}e.d(t,{T:function(){return r}})},99534:function(n,t,e){e.d(t,{G5:function(){return a},LE:function(){return i},RA:function(){return c}});var r=e(99196),u=e(91850),o=e(1410);function c(n){function t(t,e){const{instance:u,context:c}=n(t).current;return(0,r.useImperativeHandle)(e,(()=>u)),null==t.children?null:r.createElement(o.UO,{value:c},t.children)}return(0,r.forwardRef)(t)}function i(n){function t(t,e){const[o,c]=(0,r.useState)(!1),{instance:i}=n(t,c).current;(0,r.useImperativeHandle)(e,(()=>i)),(0,r.useEffect)((function(){o&&i.update()}),[i,o,t.children]);const a=i._contentNode;return a?(0,u.createPortal)(t.children,a):null}return(0,r.forwardRef)(t)}function a(n){function t(t,e){const{instance:u}=n(t).current;return(0,r.useImperativeHandle)(e,(()=>u)),null}return(0,r.forwardRef)(t)}},77418:function(n,t,e){e.d(t,{y:function(){return o}});var r=e(99196),u=e(1410);function o(n){return function(t){const e=(0,u.mE)(),o=n(t,e),{instance:c}=o.current,i=(0,r.useRef)(t.position),{position:a}=t;return(0,r.useEffect)((function(){return c.addTo(e.map),function(){c.remove()}}),[e.map,c]),(0,r.useEffect)((function(){null!=a&&a!==i.current&&(c.setPosition(a),i.current=a)}),[c,a]),o}}},93461:function(n,t,e){e.d(t,{W:function(){return i}});var r=e(66389),u=e(1410),o=e(60620),c=e(81802);function i(n,t){return function(e,i){const a=(0,u.mE)(),l=n((0,c.q)(e,a),a);return(0,r.d)(a.map,e.attribution),(0,o.t)(l.current,e.eventHandlers),t(l.current,a,e,i),l}}},14677:function(n,t,e){e.d(t,{KZ:function(){return i},rP:function(){return c},yn:function(){return o}});var r=e(45243);function u(n){return n.split(" ").filter(Boolean)}function o(n,t){u(t).forEach((t=>{r.DomUtil.addClass(n,t)}))}function c(n,t){u(t).forEach((t=>{r.DomUtil.removeClass(n,t)}))}function i(n,t,e){null!=n&&e!==t&&(null!=t&&t.length>0&&c(n,t),null!=e&&e.length>0&&o(n,e))}},27999:function(n,t,e){e.d(t,{I:function(){return o},O:function(){return u}});var r=e(99196);function u(n,t,e){return Object.freeze({instance:n,context:t,container:e})}function o(n,t){return null==t?function(t,e){return(0,r.useRef)(n(t,e))}:function(e,u){const o=(0,r.useRef)(n(e,u)),c=(0,r.useRef)(e),{instance:i}=o.current;return(0,r.useEffect)((function(){c.current!==e&&(t(i,e,c.current),c.current=e)}),[i,e,u]),o}}},60620:function(n,t,e){e.d(t,{t:function(){return u}});var r=e(99196);function u(n,t){const e=(0,r.useRef)();(0,r.useEffect)((function(){return null!=t&&n.instance.on(t),e.current=t,function(){null!=e.current&&n.instance.off(e.current),e.current=null}}),[n,t])}},74579:function(n,t,e){e.d(t,{Au:function(){return p},Lf:function(){return d},SO:function(){return f},dW:function(){return s},vm:function(){return l}});var r=e(99534),u=e(77418),o=e(27999),c=e(83655),i=e(93461),a=e(78840);function l(n){const t=(0,o.I)((function(t,e){return(0,o.O)(n(t),e)})),e=(0,u.y)(t);return(0,r.G5)(e)}function s(n,t){const e=(0,o.I)(n,t),u=(0,c.u)(e);return(0,r.RA)(u)}function f(n,t){const e=(0,o.I)(n),u=(0,i.W)(e,t);return(0,r.LE)(u)}function p(n,t){const e=(0,o.I)(n,t),u=(0,a.n)(e);return(0,r.RA)(u)}function d(n,t){const e=(0,o.I)(n,t),u=(0,c.u)(e);return(0,r.G5)(u)}},71469:function(n,t,e){function r(n,t,e){const{opacity:r,zIndex:u}=t;null!=r&&r!==e.opacity&&n.setOpacity(r),null!=u&&u!==e.zIndex&&n.setZIndex(u)}e.d(t,{I:function(){return r}})},83655:function(n,t,e){e.d(t,{g:function(){return a},u:function(){return l}});var r=e(99196),u=e(66389),o=e(1410),c=e(60620),i=e(81802);function a(n,t){(0,r.useEffect)((function(){return(t.layerContainer??t.map).addLayer(n.instance),function(){t.layerContainer?.removeLayer(n.instance),t.map.removeLayer(n.instance)}}),[t,n])}function l(n){return function(t){const e=(0,o.mE)(),r=n((0,i.q)(t,e),e);return(0,u.d)(e.map,t.attribution),(0,c.t)(r.current,t.eventHandlers),a(r.current,e),r}}},11698:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(45243);function u(n,t,e){t.bounds instanceof r.LatLngBounds&&t.bounds!==e.bounds&&n.setBounds(t.bounds),null!=t.opacity&&t.opacity!==e.opacity&&n.setOpacity(t.opacity),null!=t.zIndex&&t.zIndex!==e.zIndex&&n.setZIndex(t.zIndex)}},81802:function(n,t,e){function r(n,t){const e=n.pane??t.pane;return e?{...n,pane:e}:n}e.d(t,{q:function(){return r}})},78840:function(n,t,e){e.d(t,{_:function(){return a},n:function(){return l}});var r=e(99196),u=e(1410),o=e(60620),c=e(83655),i=e(81802);function a(n,t){const e=(0,r.useRef)();(0,r.useEffect)((function(){if(t.pathOptions!==e.current){const r=t.pathOptions??{};n.instance.setStyle(r),e.current=r}}),[n,t])}function l(n){return function(t){const e=(0,u.mE)(),r=n((0,i.q)(t,e),e);return(0,o.t)(r.current,t.eventHandlers),(0,c.g)(r.current,e),a(r.current,t),r}}},54803:function(n,t,e){e.r(t),e.d(t,{AttributionControl:function(){return c},Circle:function(){return s},CircleMarker:function(){return f},FeatureGroup:function(){return p},GeoJSON:function(){return d},ImageOverlay:function(){return m},LayerGroup:function(){return v},LayersControl:function(){return g},MapContainer:function(){return P},Marker:function(){return R},Pane:function(){return z},Polygon:function(){return M},Polyline:function(){return T},Popup:function(){return G},Rectangle:function(){return _},SVGOverlay:function(){return q},ScaleControl:function(){return H},TileLayer:function(){return $},Tooltip:function(){return D},VideoOverlay:function(){return F},WMSTileLayer:function(){return J},ZoomControl:function(){return K},useMap:function(){return r.Sx},useMapEvent:function(){return r.$_},useMapEvents:function(){return r.zV}});var r=e(39153),u=e(74579),o=e(45243);const c=(0,u.vm)((function(n){return new o.Control.Attribution(n)}));var i=e(27999),a=e(1410),l=e(28129);const s=(0,u.Au)((function({center:n,children:t,...e},r){const u=new o.Circle(n,e);return(0,i.O)(u,(0,a.sj)(r,{overlayContainer:u}))}),l.T),f=(0,u.Au)((function({center:n,children:t,...e},r){const u=new o.CircleMarker(n,e);return(0,i.O)(u,(0,a.sj)(r,{overlayContainer:u}))}),l.T),p=(0,u.Au)((function({children:n,...t},e){const r=new o.FeatureGroup([],t);return(0,i.O)(r,(0,a.sj)(e,{layerContainer:r,overlayContainer:r}))})),d=(0,u.Au)((function({data:n,...t},e){const r=new o.GeoJSON(n,t);return(0,i.O)(r,(0,a.sj)(e,{overlayContainer:r}))}),(function(n,t,e){t.style!==e.style&&(null==t.style?n.resetStyle():n.setStyle(t.style))}));var y=e(11698);const m=(0,u.dW)((function({bounds:n,url:t,...e},r){const u=new o.ImageOverlay(t,n,e);return(0,i.O)(u,(0,a.sj)(r,{overlayContainer:u}))}),(function(n,t,e){(0,y.Z)(n,t,e),t.url!==e.url&&n.setUrl(t.url)})),v=(0,u.dW)((function({children:n,...t},e){const r=new o.LayerGroup([],t);return(0,i.O)(r,(0,a.sj)(e,{layerContainer:r}))}));var O=e(77418),b=e(99534),h=e(99196);const w=(0,i.I)((function({children:n,...t},e){const r=new o.Control.Layers(void 0,void 0,t);return(0,i.O)(r,(0,a.sj)(e,{layersControl:r}))}),(function(n,t,e){t.collapsed!==e.collapsed&&(!0===t.collapsed?n.collapse():n.expand())})),C=(0,O.y)(w),g=(0,b.RA)(C);function L(n){return function(t){const e=(0,a.mE)(),r=(0,h.useRef)(t),[u,o]=(0,h.useState)(null),{layersControl:c,map:i}=e,l=(0,h.useCallback)((t=>{null!=c&&(r.current.checked&&i.addLayer(t),n(c,t,r.current.name),o(t))}),[c,i]),s=(0,h.useCallback)((n=>{c?.removeLayer(n),o(null)}),[c]),f=(0,h.useMemo)((()=>(0,a.sj)(e,{layerContainer:{addLayer:l,removeLayer:s}})),[e,l,s]);return(0,h.useEffect)((()=>{null!==u&&r.current!==t&&(!0!==t.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=t.checked&&!1!==t.checked||i.removeLayer(u):i.addLayer(u),r.current=t)})),t.children?h.createElement(a.UO,{value:f},t.children):null}}function E(){return E=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},E.apply(this,arguments)}function I({bounds:n,boundsOptions:t,center:e,children:r,className:u,id:c,placeholder:i,style:l,whenReady:s,zoom:f,...p},d){const[y]=(0,h.useState)({className:u,id:c,style:l}),[m,v]=(0,h.useState)(null);(0,h.useImperativeHandle)(d,(()=>m?.map??null),[m]);const O=(0,h.useCallback)((r=>{if(null!==r&&null===m){const u=new o.Map(r,p);null!=e&&null!=f?u.setView(e,f):null!=n&&u.fitBounds(n,t),null!=s&&u.whenReady(s),v((0,a.Hb)(u))}}),[]);(0,h.useEffect)((()=>()=>{m?.map.remove()}),[m]);const b=m?h.createElement(a.UO,{value:m},r):i??null;return h.createElement("div",E({},y,{ref:O}),b)}g.BaseLayer=L((function(n,t,e){n.addBaseLayer(t,e)})),g.Overlay=L((function(n,t,e){n.addOverlay(t,e)}));const P=(0,h.forwardRef)(I),R=(0,u.dW)((function({position:n,...t},e){const r=new o.Marker(n,t);return(0,i.O)(r,(0,a.sj)(e,{overlayContainer:r}))}),(function(n,t,e){t.position!==e.position&&n.setLatLng(t.position),null!=t.icon&&t.icon!==e.icon&&n.setIcon(t.icon),null!=t.zIndexOffset&&t.zIndexOffset!==e.zIndexOffset&&n.setZIndexOffset(t.zIndexOffset),null!=t.opacity&&t.opacity!==e.opacity&&n.setOpacity(t.opacity),null!=n.dragging&&t.draggable!==e.draggable&&(!0===t.draggable?n.dragging.enable():n.dragging.disable())}));var k=e(14677),x=e(91850);const S=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"];function A(n,t){const{[t]:e,...r}=n;return r}function j(n,t){const[e]=(0,h.useState)(n.name),[r,u]=(0,h.useState)(null);(0,h.useImperativeHandle)(t,(()=>r),[r]);const o=(0,a.mE)(),c=(0,h.useMemo)((()=>({...o,pane:e})),[o]);return(0,h.useEffect)((()=>(u(function(n,t,e){if(-1!==S.indexOf(n))throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${n}`);if(null!=e.map.getPane(n))throw new Error(`A pane with this name already exists: ${n}`);const r=t.pane??e.pane,u=r?e.map.getPane(r):void 0,o=e.map.createPane(n,u);return null!=t.className&&(0,k.yn)(o,t.className),null!=t.style&&Object.keys(t.style).forEach((n=>{o.style[n]=t.style[n]})),o}(e,n,o)),function(){const n=o.map.getPane(e);n?.remove?.(),null!=o.map._panes&&(o.map._panes=A(o.map._panes,e),o.map._paneRenderers=A(o.map._paneRenderers,e))})),[]),null!=n.children&&null!=r?(0,x.createPortal)(h.createElement(a.UO,{value:c},n.children),r):null}const z=(0,h.forwardRef)(j),M=(0,u.Au)((function({positions:n,...t},e){const r=new o.Polygon(n,t);return(0,i.O)(r,(0,a.sj)(e,{overlayContainer:r}))}),(function(n,t,e){t.positions!==e.positions&&n.setLatLngs(t.positions)})),T=(0,u.Au)((function({positions:n,...t},e){const r=new o.Polyline(n,t);return(0,i.O)(r,(0,a.sj)(e,{overlayContainer:r}))}),(function(n,t,e){t.positions!==e.positions&&n.setLatLngs(t.positions)})),G=(0,u.SO)((function(n,t){const e=new o.Popup(n,t.overlayContainer);return(0,i.O)(e,t)}),(function(n,t,{position:e},r){(0,h.useEffect)((function(){const{instance:u}=n;function o(n){n.popup===u&&(u.update(),r(!0))}function c(n){n.popup===u&&r(!1)}return t.map.on({popupopen:o,popupclose:c}),null==t.overlayContainer?(null!=e&&u.setLatLng(e),u.openOn(t.map)):t.overlayContainer.bindPopup(u),function(){t.map.off({popupopen:o,popupclose:c}),t.overlayContainer?.unbindPopup(),t.map.removeLayer(u)}}),[n,t,r,e])})),_=(0,u.Au)((function({bounds:n,...t},e){const r=new o.Rectangle(n,t);return(0,i.O)(r,(0,a.sj)(e,{overlayContainer:r}))}),(function(n,t,e){t.bounds!==e.bounds&&n.setBounds(t.bounds)})),H=(0,u.vm)((function(n){return new o.Control.Scale(n)}));var Z=e(83655);const W=(0,i.I)((function(n,t){const{attributes:e,bounds:r,...u}=n,c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("xmlns","http://www.w3.org/2000/svg"),null!=e&&Object.keys(e).forEach((n=>{c.setAttribute(n,e[n])}));const a=new o.SVGOverlay(c,r,u);return(0,i.O)(a,t,c)}),y.Z),N=(0,Z.u)(W);function U({children:n,...t},e){const{instance:r,container:u}=N(t).current;return(0,h.useImperativeHandle)(e,(()=>r)),null==u||null==n?null:(0,x.createPortal)(n,u)}const q=(0,h.forwardRef)(U);var B=e(81802),V=e(71469);const $=(0,u.Lf)((function({url:n,...t},e){const r=new o.TileLayer(n,(0,B.q)(t,e));return(0,i.O)(r,e)}),V.I),D=(0,u.SO)((function(n,t){const e=new o.Tooltip(n,t.overlayContainer);return(0,i.O)(e,t)}),(function(n,t,{position:e},r){(0,h.useEffect)((function(){const u=t.overlayContainer;if(null==u)return;const{instance:o}=n,c=n=>{n.tooltip===o&&(null!=e&&o.setLatLng(e),o.update(),r(!0))},i=n=>{n.tooltip===o&&r(!1)};return u.on({tooltipopen:c,tooltipclose:i}),u.bindTooltip(o),function(){u.off({tooltipopen:c,tooltipclose:i}),null!=u._map&&u.unbindTooltip()}}),[n,t,r,e])})),F=(0,u.dW)((function({bounds:n,url:t,...e},r){const u=new o.VideoOverlay(t,n,e);return!0===e.play&&u.getElement()?.play(),(0,i.O)(u,(0,a.sj)(r,{overlayContainer:u}))}),(function(n,t,e){(0,y.Z)(n,t,e),"string"==typeof t.url&&t.url!==e.url&&n.setUrl(t.url);const r=n.getElement();null!=r&&(!0!==t.play||e.play?t.play||!0!==e.play||r.pause():r.play())})),J=(0,u.Lf)((function({params:n={},url:t,...e},r){const u=new o.TileLayer.WMS(t,{...n,...(0,B.q)(e,r)});return(0,i.O)(u,r)}),(function(n,t,e){(0,V.I)(n,t,e),null!=t.params&&t.params!==e.params&&n.setParams(t.params)})),K=(0,u.vm)((function(n){return new o.Control.Zoom(n)}))}}]);