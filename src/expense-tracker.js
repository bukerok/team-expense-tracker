import { LitElement, html, css } from 'lit-element';
import './expense-input.js';
import './expense-logs.js';
import './expense-table.js';

const EXPENSE_LOGS_KEY = 'expense-logs';

class ExpenseTracker extends LitElement {
  static get properties() {
    return {
      users: { type: Array },
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
    `;
  }

  logs;

  connectedCallback() {
    super.connectedCallback();

    this.logs = JSON.parse(localStorage.getItem(EXPENSE_LOGS_KEY)) || [];
  }

  render() {
    return html`
      <div class="wrapper">
        <h1>Expense Tracker</h1>
        <expense-input
          .users="${this.users}"
          @expense-log="${this.logExpense}"
        ></expense-input>
        <h3>Balances</h3>
        <expense-table .logs="${this.logs}"></expense-table>
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
}

customElements.define('expense-tracker', ExpenseTracker);