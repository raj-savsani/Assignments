"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[548],{424:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),a=r.n(t),o=r(645),i=r.n(o)()(a());i.push([n.id,"*{\r\n    margin: 0;padding: 0;\r\n}\r\n#root{\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n.logodiv{\r\n    height: 50px;\r\n}\r\n.logodiv>img{\r\n    height: 100%;\r\n}\r\n.inputdiv{\r\n    padding:5px;\r\n    margin: 1%;\r\n}\r\n.inputdiv input{\r\n    margin: 1%;\r\n    padding:10px;\r\n    font-size:15px;\r\n}\r\n\r\n.inputdiv button{\r\n    margin: 1%;\r\n    padding:10px;\r\n    border-radius: 5px;\r\n    font-size:15px;\r\n}\r\n\r\n.task{\r\n    padding:5px;\r\n    margin: 5px;\r\n    color:chocolate\r\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<n.length;u++){var p=[].concat(n[u]);t&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},548:(n,e,r)=>{r.r(e),r.d(e,{default:()=>g});var t=r(379),a=r.n(t),o=r(795),i=r.n(o),c=r(569),s=r.n(c),u=r(565),p=r.n(u),d=r(216),l=r.n(d),f=r(589),v=r.n(f),h=r(424),m={};m.styleTagTransform=v(),m.setAttributes=p(),m.insert=s().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),a()(h.Z,m);const g=h.Z&&h.Z.locals?h.Z.locals:void 0},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],u=t.base?s[0]+t.base:s[0],p=o[u]||0,d="".concat(u," ").concat(p);o[u]=p+1;var l=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(f);else{var v=a(f,t);t.byIndex=c,e.splice(c,0,{identifier:d,updater:v,references:1})}i.push(d)}return i}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=r(o[i]);e[c].references--}for(var s=t(n,a),u=0;u<o.length;u++){var p=r(o[u]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);