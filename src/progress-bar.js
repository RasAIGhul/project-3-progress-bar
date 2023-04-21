import { LitElement, html, css } from 'lit';
import "./count-up.js";
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";


class ProgressBar extends IntersectionObserverMixin(LitElement) {
  static properties = {
    title: { type: String },
    backgroundColor: {type: String, reflect: true},
    barColorLeft: {type: String, reflect: true},
    barColorRight: {type: String, reflect: true},
    animationStyle: {type: String, reflect: true},
    counterTime: {type: String, reflect: true},
    counterLabel: {type: String, reflect: true},
    barWidth: {type: String, reflect: true},

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
        height: 3.14em;
        width: 0%;
        margin-left: 5px;
        margin-top: 5px;
        transition: width 2s linear;

      }
      .loaded{
        width: 0%;
        transition: width 2s linear;
      }
      .counterClass{
        margin-left: 40px;
        margin-top: 25px;
      }

     
  `;

  constructor() {
    super();
    this.title = "my will to live";
    this.counterTime = "1";
    this.counterLabel = "100";
    this.barWidth = "97.6%";
    
  }

  updated(propertiesChanged) {
    propertiesChanged.forEach((oldValue, propName) => {
      if (propName == "elementVisible" && this[propName]) {
        const barID = this.shadowRoot.querySelector('#barID');
        const backgroundProgress = this.shadowRoot.querySelector('.backgroundProgress');
        backgroundProgress.style.width = this.barWidth;
        backgroundProgress.style.transition = "width " + this.counterTime + "s linear";
        barID.classList.add('loaded')

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
          <div id='barID' class='backgroundProgress'>
          </div>
        </div>
        <count-up class='counterClass' duration=${this.counterTime} end=${this.counterLabel} noeasing=true></count-up>
  </div>
    `;
  }
}

customElements.define('progress-bar', ProgressBar);