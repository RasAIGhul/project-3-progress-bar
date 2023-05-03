import { LitElement, html, css } from 'lit';
import '@lrnwebcomponents/count-up/src/count-up.js';
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js";


class ProgressBar extends IntersectionObserverMixin(LitElement) {
  static properties = {
    duration: { type: Number, reflect: true },
    elementVisible: { type: Boolean, reflect:true, attribute: "element-visible" },
    title: { type: String, reflect: true},
    backgroundColor: {type: String, reflect: true},
    barColorLeft: {type: String, reflect: true},
    barColorRight: {type: String, reflect: true},
    counterStartTime: {type: Number, reflect: true},
    counterEndTime: {type: Number, reflect: true},
    counterLabel: {type: String, reflect: true},
    barWidth: {type: String, reflect: true},
    goodToRender: {type: Boolean, reflect: true},
    durationOfBar: {type: Number, reflect: true},
    durationOfCountUp: {type: Number, reflect: true},
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
        width: 6.5em;
        font-size: 20px;  
      }
      .backgroundProgress{
        background: linear-gradient(to left, var(--bar-color-left, red), var(--bar-color-right, yellow));
        border-radius: 5px;
        height: 3.14em;
        width: var(--bar-width, 0%);
        margin-left: 5px;
        margin-top: 5px;
        transition: width var(--duration-of-transition, 2s) linear;
        
      }
      .counterClass{
        position: absolute;
        right: 30%;
        margin-top: 25px;
      }

    @media (prefers-reduced-motion: reduce) {
      .backgroundProgress {
        transition-timing-function: steps(4,jump-end);
      }
    }


     
  `;

  constructor() {
    super();
    this.title = "my will to live";
    this.counterStartTime = 5;  // The value you want the timer to start at
    this.counterEndTime = 10;  // The value you want the timer to end at
    this.counterLabel = "10";  // What physical number you want the timer to be at when it finishes NOT TIME
    this.barWidth = "97.8%";
    this.barColorLeft = "red";
    this.barColorRight = "green";
    this.backgroundColor = "grey"; 
    this.goodToRender = false;
    
    
  }


  

  updated(propertiesChanged) {
     if(propertiesChanged.has("counterStartTime") || propertiesChanged.has("counterEndTime"))
    {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if(!prefersReducedMotion){
          this.durationOfCountUp = this.counterEndTime - this.counterStartTime;
        }
        else
        {
          this.durationOfCountUp = 0;
        }
        this.durationOfBar = this.counterEndTime - this.counterStartTime;
        this.goodToRender = true;
        
     }

    propertiesChanged.forEach((oldValue, propName) => {
      if (propName == "elementVisible" && this[propName]) {
        const backgroundProgress = this.shadowRoot.querySelector('.backgroundProgress');
        backgroundProgress.style.setProperty('--bar-color-left',this.barColorLeft);
        backgroundProgress.style.setProperty('--bar-color-right',this.barColorRight);
        backgroundProgress.style.setProperty('--duration-of-transition', this.durationOfBar + "s");
        backgroundProgress.style.setProperty('--bar-width', this.barWidth);
        this.shadowRoot.querySelector('.progressBarStyling').style.background = this.backgroundColor;
      }
    });
  
  }

  

   render() {
    if(this.goodToRender){
      return html`
      <div class='wrapper'> 
               <div class='title'> 
                 ${this.title} 
               </div>   
             <div class='progressBarStyling'>
               <div class='backgroundProgress'>
               </div>
             </div>
            <count-up id='countUpID' class='counterClass' start=${this.counterStartTime} end=${this.counterLabel} duration=${this.durationOfCountUp} noeasing=true></count-up>
       </div>
        `;
    }

   }
}

customElements.define('progress-bar', ProgressBar);