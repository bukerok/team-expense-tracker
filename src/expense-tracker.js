import { LitElement, html, css } from 'lit-element';
import './expense-input.js';
import './expense-logs.js';

const EXPENSE_LOGS_KEY = 'expense-logs';

class ExpenseTracker extends LitElement {
  static get properties() {
    return {
      users: { type: Array },
    };
  }

  static get styles() {
    return css`
      h1 {
        text-align: center;
      }
    `;
  }

  logs;

  connectedCallback() {
    super.connectedCallback();

    this.logs = JSON.parse(localStorage.getItem(EXPENSE_LOGS_KEY)) || [];
  }

  render() {
    return html`
      <h1>Expense Tracker</h1>
      <div>
        <a href="#/logger">Logger</a>
        <a href="#/stats">Stats</a>
      </div>
      <expense-input
        .users="${this.users}"
        @expense-log="${this.logExpense}"
      ></expense-input>
      <h3>History</h3>
      <expense-logs .logs="${this.logs}"></expense-logs>
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
}

customElements.define('expense-tracker', ExpenseTracker);