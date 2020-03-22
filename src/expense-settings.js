import { LitElement, html, css } from 'lit-element';

class ExpenseSettings extends LitElement {
  static get properties() {
    return {
      initialBalance: { type: Number },
      rounding: { type: Number },
      _isOpened: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        position: relative;
      }

      .toggle {
        display: flex;
        padding: 8px;
        margin: 0;
        border: none;
        border-radius: 50%;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
          rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
          cursor: pointer;
      }

      .wrapper {
        position: absolute;
        right: 0;
        background-color: white;
        padding: 8px;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
          rgba(0, 0, 0, 0.14) 0px 5px 8px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
      }

      .control {
        display: block;
        margin-bottom: 4px;
      }

      .control__input {
        width: 100px;
      }
    `;
  }

  render() {
    return html`
      <button
        class="toggle"
        @click="${this.toggleOpened}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </button>
      ${this.getMenuHTML()}
    `;
  }

  getMenuHTML() {
    if (!this._isOpened) {
      return;
    }

    return html`
      <div class="wrapper">
        <label class="control">
          Rounding
          <input
            class="control__input"
            type="number"
            min="0"
            .value="${this.rounding}"
            @change="${this.getChangeListener('rounding')}"
          >
        </label>
        <label class="control">
          Initial balance
          <input
            class="control__input"
            type="number"
            .value="${this.initialBalance}"
            @change="${this.getChangeListener('initialBalance')}"
          >
        </label>
      </div>
    `;
  }

  toggleOpened() {
    this._isOpened = !this._isOpened;
  }

  getChangeListener(prop) {
    return (event) => {
      this.dispatchEvent(new CustomEvent('expense-settings-change', {
        composed: true,
        detail: {
          [prop]: +event.target.value,
        },
      }));
    };
  }
}

customElements.define('expense-settings', ExpenseSettings);
