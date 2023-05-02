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
    this.mapThroughBars();
  }
  


  mapThroughBars() {
    const address = '/api/progress-bars';
   fetch(address).then((response) =>{
    if(response.ok){
      return response.json();
    }
         return [];
     }).then((data)=>{
    this.barArray = data;
    });
    }




  render() {
    return html`
    ${this.elementVisible ? html`
        <div class="wrapper">
            ${this.barArray.map(barArray => html`
            <progress-bar 
            title="${barArray.title}" 
            counterStartTime = "${barArray.counterStartTime}"
            counterEndTime = "${barArray.counterEndTime}" 
            counterLabel ="${barArray.counterLabel}" 
            duration = "${barArray.duration}" 
            barWidth = "${barArray.barWidth}" 
            barColorLeft = "${barArray.barColorLeft}"
            barColorRight = "${barArray.barColorRight}" 
            backgroundColor ="${barArray.backgroundColor}"></progress-bar>
        </progress-bar>
        `)}
        </div>
        `:``}
    `
  }
}

customElements.define('progress-bar-list', ProgressBarList);