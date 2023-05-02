import { LitElement, html, css } from 'lit';

class TesterTest extends LitElement {
  static properties = {

  }

  static styles = css`
      .box {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: width 1000s;
  }

  .box:hover {
    width: 1000px;
  }
  `;

  constructor() {
    super();
  }

  handleClick() {
    const wrapper = this.shadowRoot.querySelector('.wrapper');
  }

  render() {
    return html`
      <div>
        <div class="box"></div>
      </div>
    `;
  }
}

customElements.define('tester-test', TesterTest);
