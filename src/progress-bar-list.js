import { LitElement, html, css } from 'lit';
import "./progress-bar.js";
import "./countup.js";
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";


class ProgressBarList extends IntersectionObserverMixin(LitElement) {
    static get properties() {
      let props = {};
      if (super.properties) {
        props = super.properties;
      }
      return{
        ...props,
      barArray:{type: Array},
    }
  }



 

  static styles = css`
    
  `;

  constructor() {
    super();
    this.barArray=[];
 
  }
  


  createBars() {
    const address = '/api/progress-bars';
   fetch(address).then((response) =>{
    if(response.ok){
      return response.json();
    }
         return [];
     }).then((data)=>{
    this.bar = data;
    });
    }




  render() {
    return html`
    ${this.elementVisible ? html`
<div class="wrapper">
${this.bar.map(bars => html`
    <progress-bar title="${bars.title}" endTime="${bars.endTime}" startTime="${bars.startTime}" widthSize="${bars.widthSize}" startColor="${bars.startColor}" endColor="${bars.endColor}">
  </progress-bar>
  `)}
  </div>
 
`:``}
`
  }
}

customElements.define('progress-bar-list', ProgressBarList);