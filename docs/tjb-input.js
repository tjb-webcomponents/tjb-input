import WebComponent from 'https://tjb-webcomponents.github.io/tjb-WebComponent/tjb-wc.min.js';
import html from 'https://tjb-webcomponents.github.io/html-template-string/html.min.js';

class tjbInput extends WebComponent {
  // CSS
  ////////////////////////////////////////////////////////////

  CSS() {
    return html`<style>
      .message {
        font-size: 0.8rem;
      }

      .message.error {
        color: #fa354c;
      }

      input {
        display: block;
        font-family: "Lato", sans-serif;
        font-size: 1rem;
        padding: 10px;
        margin-bottom: 30px;
        width: 100%;
        box-sizing: border-box;
        transition: border 250ms ease-in-out;
      }

      input.error {
        border: 1px solid #fa354c;
      }


      .info {
        color: grey;
        font-size: 0.8rem;
      }


      label {
        position: relative;
        display: block;
        margin-top: -1rem;
        transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
      }
    </style>`;
  }

  // Markup
  ////////////////////////////////////////////////////////////

  HTML() {
    this.messageNode = html`
      <div class="message"></div>
    `;

    this.labelNode = html`
      <label for="input">
        ${this.label}
        ${this.info ? html`
          <span class="info">${this.info}</span>
        ` : ''}
        ${this.messageNode}
      </label>
    `;

    this.inputNode = html`
      <input
        onkeyup="${e => this.handleKeyUp()}"
        ${this.name ? `
          name="${this.name}"
        ` : ``}
        ${this.type ? `
          type="${this.type}"
        ` : ``}
        ${this.placeholder ? `
          placeholder="${this.placeholder}"
        ` : ``}
        ${this.pattern ? `
          pattern="${this.pattern}"
        ` : ``}
        id="input"
      />
    `;

    return html`
      <data-fragment>
        ${this.labelNode}
        ${this.inputNode}
      </data-fragment>
    `;
  }

  // Attribute Handling
  ////////////////////////////////////////////////////////////
  static get observedAttributes() {
    return ['message', 'messagetype', 'label', 'info', 'type', 'name', 'placeholder', 'pattern'];
  }

  connectedCallback() {
    super.connectedCallback();
    // rerenders
    this.handleLabelChange = this.reRender;
    this.handleInfoChange = this.reRender;
    this.handleTypeChange = this.reRender;
    this.handleNameChange = this.reRender;
    this.handlePlaceholderChange = this.reRender;
    this.handlePatternChange = this.reRender;
  }

  // Logic
  ////////////////////////////////////////////////////////////

  handleMessageChange(newValue) {
    this.messageNode.innerHTML = newValue;
  }

  handleMessagetypeChange(newValue) {
    this.messageNode.className = `message ${newValue}`;
    this.inputNode.className = `input ${newValue}`;
  }

  handleKeyUp() {
    this.value = this.inputNode.value;
    this.messageNode.innerHTML = '';
    this.messageNode.className = 'message';
    this.inputNode.className = 'input';
  }

}

customElements.define("tjb-input", tjbInput);
