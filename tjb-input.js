import WebComponent from 'https://tjb-webcomponents.github.io/tjb-webcomponent/tjb-wc.min.js';
import html from 'https://tjb-webcomponents.github.io/html-template-string/html.min.js';

class tjbInput extends WebComponent {
  // CSS
  ////////////////////////////////////////////////////////////

  CSS() {
    return html `<style>
      :host {
        --color-error: #fa354c;
        --input-padding: 10px;
        --input-margin: 0 0 30px 0;
        --input-width: 100%;
        --input-font-size: 1rem;
        --info-color: grey;
        --info-font-size: 0.8rem;
      }

      .message {
        font-size: 0.8rem;
      }

      .message.error {
        color: var(--color-error);
      }

      input {
        display: block;
        font-size: var(--input-font-size);
        padding: var(--input-padding);
        margin: var(--input-margin);
        width: var(--input-width);
        box-sizing: border-box;
        transition: border-color 250ms ease-in-out;
      }

      input.error {
        border: 1px solid var(--color-error);
      }


      .info {
        color: var(--info-color);
        font-size: var(--info-font-size);
      }

      label {
        display: block;
      }
    </style>`;
  }

  // Markup
  ////////////////////////////////////////////////////////////

  HTML() {
    this.messageNode = html `
      <div class="message"></div>
    `;

    this.labelNode = html `
      <label for="input">
        ${this.label}
        ${this.info ? html`
          <span class="info">${this.info}</span>
        ` : ''}
        ${this.messageNode}
      </label>
    `;

    this.inputNode = html `
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
        ${this.required ? `
          required
        ` : ``}
        id="input"
      />
    `;

    return html `
      <data-fragment>
        ${this.label ? this.labelNode : ''}
        ${this.inputNode}
      </data-fragment>
    `;
  }

  // Attribute Handling
  ////////////////////////////////////////////////////////////
  static get observedAttributes() {
    return [
      'message',
      'messagetype',
      'label',
      'info',
      'type',
      'name',
      'placeholder',
      'pattern',
      'required'
    ];
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

  checkValidity() {
    const inputValidity = this.inputNode.checkValidity();
    if(!inputValidity) this.messagetype = 'error';
    return this.inputNode.checkValidity();
  }

}

customElements.define("tjb-input", tjbInput);
