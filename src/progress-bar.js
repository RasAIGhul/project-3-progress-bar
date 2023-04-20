import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/count-up/count-up.js";
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";


class ProgressBar extends LitElement {
  static properties = {
    title: { type: String },
    backgroundColor: {type: String, reflect: true},
    barColorLeft: {type: String, reflect: true},
    barColorRight: {type: String, reflect: true},
    animationStyle: {type: String, reflect: true},
    counterTime: {type: String, reflect: true},
    counterLabel: {type: String, reflect: true},

  }

  static styles = css`
      .wrapper{
        display: flex; 
        justify-content: center;
        margin: 20px;
      }
      .progressBarStyling{
        border: 3px solid black;
        border-radius: 10px;
        height: 60px;
        width: 450px;
        margin-left: 40px;
        background: grey;
      }
      .title{
        margin-top: 20px; 
        font-size: 20px;  
      }
      .backgroundProgress{
        background: linear-gradient(to left, red, yellow);
        border-radius: 5px;
        width: 0%:
        height: 3.14em;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 5px;
        transition: width 2s linear;
      }
     
  `;

  constructor() {
    super();
    this.title = "my will to live";
    this.backgroundColor = "light gray";
    this.counterTime = "100";
    this.counterLabel = "100";
    
  }

  updated(propertiesChanged) {
    propertiesChanged.forEach((oldValue, propName) => {
      if (propName == "elementVisible" && this[propName]) {
        
      }
    });
  }


  render() {
    return html`
      
  <div class='wrapper'> 
        <div class='title'> 
        ${this.title} 
        </div>
        <div class='progressBarStyling'>
          <div class='backgroundProgress'>
          </div>
          <count-up class='counterClass' duration=${this.counterTime} end=${this.counterLabel}></count-up>
        </div>
  </div>
    `;
  }
}

customElements.define('progress-bar', ProgressBar);