import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class ProgressBar extends LitElement {
  static properties = {
    title: { type: String },
    colorGradient: { type: String},


  }

  static styles = css`
      .wrapper{
        display: flex; 
        justify-content: center;
      }
      .progressBarStyling{
        border: 3px solid black;
        border-radius: 1px;
        height: 50px;
        width: 500px;
        background-color: red;
      }
  `;

  constructor() {
    super();
    this.title = "my will to live";
    
  }

  render() {
    return html`
      
      <div class='wrapper'> 
      ${this.title} <div class='progressBarStyling'></div>
      </div>

    `;
  }
}

customElements.define('progress-bar', ProgressBar);