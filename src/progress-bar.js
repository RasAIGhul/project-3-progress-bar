import { LitElement, html, css } from 'lit';

import "./stopwatch-component.js";

class ProgressBar extends LitElement {
  static properties = {
    title: { type: String },
    colorGradient: { type: String},
    backgroundColor: {type: String},


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
      }
      .title{
        margin-top: 20px; 
        font-size: 20px;  
      }
      .backgroundProgress{
        background: linear-gradient(to left, var(--background-of-bar, red), var(--background-of-bar, yellow));
        border-radius: 5px;
        height: 50px;
        width: 440px;
        margin-left: 5px;
        margin-top: 5px;
        animation: backgroundProgress var(--speed-of-bar, 5s) linear forwards;
      }

      @keyframes backgroundProgress{
        0% {width: 0%; }
        100% {width: 97.8%; }
      }
  `;

  constructor() {
    super();
    this.title = "my will to live";
    this.backgroundColor = "light gray";
    
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
        <stopwatch-component>
        </stopwatch-comonent>
        </div>
  </div>

    `;
  }
}

customElements.define('progress-bar', ProgressBar);