import{i as a,x as s,s as o}from"./84d09ff8.js";import"./c7845c35.js";import{I as p}from"./44ca686d.js";var n=Object.defineProperty,l=(r,e,t)=>e in r?n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,b=(r,e,t)=>(l(r,typeof e!="symbol"?e+"":e,t),t);class i extends p(o){static get properties(){let e={};return super.properties&&(e=super.properties),{...e,barArray:{type:Array}}}constructor(){super(),this.barArray=[]}createBars(){fetch("/api/progress-bars").then(e=>e.ok?e.json():[]).then(e=>{this.bar=e})}render(){return s` ${this.elementVisible?s` <div class="wrapper"> ${this.bar.map(e=>s` <progress-bar title="${e.title}" endTime="${e.endTime}" startTime="${e.startTime}" widthSize="${e.widthSize}" startColor="${e.startColor}" endColor="${e.endColor}"> </progress-bar> `)} </div> `:""} `}}b(i,"styles",a``),customElements.define("progress-bar-list",i);