import WebComponent from "https://tjb-webcomponents.github.io/tjb-webcomponent/tjb-wc.min.js";
import html from "https://tjb-webcomponents.github.io/html-template-string/html.min.js";

class tjbInput extends WebComponent() {
  // Markup
  ////////////////////////////////////////////////////////////

  HTML() {
    this.messageNode = html `
      <div class="message"></div>
    `;

    this.labelNode = html `
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

    this.inputNode = html `
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
        ${
          this.value
            ? `
          value="${this.value}"
        `
            : ``
        }
        id="input"
      />
    `;

    return html `
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
      "value",
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
    this.handleValueChange = this.reRender;
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
    if (e.key === "Enter" && !this.nosubmit)
      return this.submit(e);

    this.value = this.inputNode.value;
    this.hideMessage();
  }

  submit(e) {
    e.preventDefault();
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
