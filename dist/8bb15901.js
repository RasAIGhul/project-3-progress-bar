import{i as s,x as a,s as i}from"./84d09ff8.js";import"./c7845c35.js";import{I as n}from"./44ca686d.js";var b=Object.defineProperty,p=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r,t)=>(p(e,typeof r!="symbol"?r+"":r,t),t);class o extends n(i){static get properties(){let r={};return super.properties&&(r=super.properties),{...r,barArray:{type:Array}}}constructor(){super(),this.barArray=[],this.mapThroughBars()}mapThroughBars(){fetch("/api/progress-bars").then(r=>r.ok?r.json():[]).then(r=>{this.barArray=r})}render(){return a` ${this.elementVisible?a` <div class="wrapper"> ${this.barArray.map(r=>a` <progress-bar title="${barsArray.title}" counterStartTime="${r.counterStartTime}" counterEndTime="${r.counterEndTime}" counterLabel="${r.counterLabel}" duration="${r.duration}" barWidth="${r.barWidth}" barColorLeft="${r.barColorLeft}" barColorRight="${r.barColorRight}" backgroundColor="${r.backgroundColor}"></progress-bar> `)} </div> `:""} `}}l(o,"styles",s``),customElements.define("progress-bar-list",o);