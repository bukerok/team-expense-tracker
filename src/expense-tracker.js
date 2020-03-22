import { LitElement, html, css } from 'lit-element';
import './expense-input.js';
import './expense-logs.js';
import './expense-table.js';
import './expense-settings.js';

const EXPENSE_LOGS_KEY = 'expense-logs';
const EXPENSE_SETTINGS_KEY = 'expense-settings';

class ExpenseTracker extends LitElement {
  static get properties() {
    return {
      users: { type: Array },
      initialBalance: { type: Number },
      rounding: { type: Number },
    };
  }

  static get styles() {
    return css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h1 {
        text-align: center;
      }

      .wrapper {
        max-width: 500px;
        width: 100%;
      }

      .panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `;
  }

  logs;
  settings;

  connectedCallback() {
    super.connectedCallback();

    this.settings = {
      initialBalance: 0,
      rounding: 0.5,
      ...(JSON.parse(localStorage.getItem(EXPENSE_SETTINGS_KEY)) || {}),
    };
    this.logs = JSON.parse(localStorage.getItem(EXPENSE_LOGS_KEY)) || [];
  }

  render() {
    return html`
      <div class="wrapper">
        <div class="panel">
          <h1>Expense Tracker</h1>
          <expense-settings
            .rounding="${this.settings.rounding}"
            .initialBalance="${this.settings.initialBalance}"
            @expense-settings-change="${this.settingsChange}"
          ></expense-settings>
        </div>
        <expense-input
          .users="${this.users}"
          .rounding="${this.settings.rounding}"
          @expense-log="${this.logExpense}"
        ></expense-input>
        <h3>Balances</h3>
        <expense-table
          .initialBalance="${this.settings.initialBalance}"
          .logs="${this.logs}"
        ></expense-table>
        <h3>Log</h3>
        <expense-logs .logs="${this.logs}"></expense-logs>
      </div>
    `;
  }

  logExpense(event) {
    this.logs = [
      ...this.logs,
      {
        participants: event.detail.participants,
        _metadata: {
          date: Date.now(),
        },
      },
    ];
    localStorage.setItem(EXPENSE_LOGS_KEY, JSON.stringify(this.logs));
    this.requestUpdate();
  }

  settingsChange(event) {
    this.settings = {
      ...this.settings,
      ...event.detail,
    };
    localStorage.setItem(EXPENSE_SETTINGS_KEY, JSON.stringify(this.settings));
    this.requestUpdate();
  }
}

customElements.define('expense-tracker', ExpenseTracker);