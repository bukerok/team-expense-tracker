import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

class ExpenseTable extends LitElement {
  static get properties() {
    return {
      logs: { type: Array },
      initialBalance: { type: Number },
    };
  }

  static get styles() {
    return css`
      .wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 8px;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: 16px;
        padding: 8px;
        background-color: white;
        box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
          0px 5px 8px 0px rgba(0,0,0,0.14),
          0px 1px 14px 0px rgba(0,0,0,0.12);
      }

      .card_big {
        font-size: 1.5rem;
        grid-column: 1 / 3;
        grid-row: 1 / 3;
      }

      .card__value {
        margin-top: 4px;
        font-size: 1.5em;
        font-weight: bold;
        color: #1B5E20;
      }

      .card__value_negative {
        color: #B71C1C;
      }
    `;
  }

  render() {
    const table = this.getAccumulatedTable(this.logs);
    const accumulation = this.getAccumulation(table);

    return html`
      <div class="wrapper">
        <div class="card card_big">
          <span>GORSHOK</span>
          <span
            class="${classMap({
              'card__value': true,
              'card__value_negative': accumulation < 0,
            })}"
          >${accumulation.toFixed(2)}</span>
        </div>
        ${
          Object.keys(table)
            .map((name) => {
              const value = table[name];

              return html`
                <div class="card">
                  <span>${name}</span>
                  <span
                    class="${classMap({
                      'card__value': true,
                      'card__value_negative': value < 0,
                    })}"
                  >${value.toFixed(2)}</span>
                </div>
              `;
            })
        }
      </div>
    `;
  }

  getAccumulatedTable(logs) {
    return logs.reduce((acc, { participants }) => {
      participants.forEach(([name, value]) => {
        acc[name] = (acc[name] || 0) + value;
      });

      return acc;
    }, {});
  }

  getAccumulation(map) {
    let result = this.initialBalance || 0;

    Object.keys(map)
      .forEach((key) => {
        result -= map[key];
      });

    return result;
  }
}

customElements.define('expense-table', ExpenseTable);
