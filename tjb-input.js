import WebComponent from "https://tjb-webcomponents.github.io/tjb-webcomponent/tjb-wc.min.js";
import html from "https://tjb-webcomponents.github.io/html-template-string/html.min.js";

class tjbInput extends WebComponent() {
  // CSS
  ////////////////////////////////////////////////////////////

  CSS() {
    return html`
      <style>
        :host {
          --color-error: #fa354c;
          --color-success: limegreen;
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

        .message.success {
          color: var(--color-success);
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
        input.success {
          border: 1px solid var(--color-success);
        }

        .info {
          color: var(--info-color);
          font-size: var(--info-font-size);
        }

        label {
          display: block;
        }
      </style>
    `;
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
        ${
          this.info
            ? html`
                <span class="info">${this.info}</span>
              `
            : ""
        }
        ${this.messageNode}
      </label>
    `;

    this.inputNode = html`
      <input
        onkeyup="${e => this._handleKeyUp(e)}"
        ${
          this.name
            ? `
          name="${this.name}"
        `
            : ``
        }
        ${
          this.type
            ? `
          type="${this.type}"
        `
            : ``
        }
        ${
          this.placeholder
            ? `
          placeholder="${this.placeholder}"
        `
            : ``
        }
        ${
          this.pattern
            ? `
          pattern="${this.pattern}"
        `
            : ``
        }
        ${
          this.required
            ? `
          required
        `
            : ``
        }
        id="input"
      />
    `;

    return html`
      <data-fragment>
        ${this.label ? this.labelNode : ""} ${this.inputNode}
      </data-fragment>
    `;
  }

  // Attribute Handling
  ////////////////////////////////////////////////////////////
  static get observedAttributes() {
    return [
      "errormessage",
      "successmessage",
      "nosubmit",
      "label",
      "info",
      "type",
      "name",
      "placeholder",
      "pattern",
      "required"
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
    this.handleRequiredChange = this.reRender;
  }

  // Logic
  ////////////////////////////////////////////////////////////

  showMessage(type) {
    this.messageNode.innerHTML = this[`${type}message`];
    this.messageNode.className = `message ${type}`;
    this.inputNode.className = `input ${type}`;
  }

  hideMessage() {
    this.messageNode.innerHTML = "";
    this.messageNode.className = `message`;
    this.inputNode.className = `input`;
  }

  _handleKeyUp(e) {
    if (e.key === "Enter" && !this.nosubmit) return this.submit();

    this.value = this.inputNode.value;
    this.hideMessage();
  }

  submit() {
    if (!this.checkValidity()) return false;
    const form = this.closest("form");
    return form && form.dispatchEvent(new Event("submit"));
  }

  checkValidity() {
    const inputValidity = this.inputNode.checkValidity();
    this.showMessage(inputValidity ? "success" : "error");
    return this.inputNode.checkValidity();
  }
}

customElements.define("tjb-input", tjbInput);
