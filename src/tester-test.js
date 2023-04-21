import { LitElement, html, css } from 'lit';

class TesterTest extends LitElement {
  static properties = {

  }

  static styles = css`
      .box {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: width 2s;
  }

  .box:hover {
    width: 200px;
  }
  `;

  constructor() {
    super();
  }

  handleClick() {
    const wrapper = this.shadowRoot.querySelector('.wrapper');
    wrapper.style.width = '500px';
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
