import { LitElement, html, css } from 'lit-element';

class ExpenseInput extends LitElement {
  static get properties() {
    return {
      users: { type: Array },
      rounding: { type: Number },
    };
  }

  static get styles() {
    return css`
      .wrapper {
        display: flex;
        flex-direction: column;
      }

      .table {
        margin-bottom: 16px;
        border-collapse: collapse;
      }

      .table__head {
        border-bottom: 2px solid #BDBDBD;
      }

      .header-cell {
        padding: 8px 0;
      }

      .row {
        border-bottom: 1px solid #BDBDBD;
      }

      .cell {
        padding: 2px 0;
        text-align: center;
      }

      .cell__name {
        text-align: left;
      }

      .checkbox {
        width: 20px;
        height: 20px;
      }

      .number-input {
        width: 50px;
        height: 20px;
        text-align: center;
      }
    `;
  }

  users = [];
  rounding = 0.5;
  additionalData = [];
  resultData = {};

  render(){
    return html`
      <div class="wrapper">
        <table class="table">
          <thead class="table__head">
            <tr>
              <th class="header-cell">User</th>
              <th class="header-cell">Joined</th>
              <th class="header-cell">Paid</th>
              <th class="header-cell">Result</th>
            </tr>
          </thead>
          <tbody @change="${this.inputChangeListener}">
            ${this.users.map(({ name }) => {
              return html`
                <tr class="row">
                  <td class="cell__name">${name}</td>
                  <td class="cell">
                    <input
                      data-type="participated"
                      data-id="${name}"
                      type="checkbox"
                      class="checkbox"
                    >
                    </td>
                  <td class="cell">
                    <input
                      data-type="paid"
                      data-id="${name}"
                      type="number"
                      class="number-input"
                    >
                  </td>
                  <td class="cell">${this.resultData[name]}</td>
                </tr>
              `;
            })}
          </tbody>
        </table>
        <button @click="${this.logListener}">Add</button>
      </div>
    `;
  }

  inputChangeListener(event) {
    const {
      dataset,
    } = event.target;
    let value;

    let item = this.additionalData.find((entry) => entry.id === dataset.id);

    if (!item) {
      item = {
        id: dataset.id,
        [dataset.type]: value,
      };
      this.additionalData.push(item);
    }

    if (dataset.type === 'participated') {
      value = event.target.checked;
    } else if (dataset.type === 'paid') {
      value = +event.target.value;
    }
    item[dataset.type] = value;
    this.updateResult();
  }

  logListener() {
    const participants= Object.keys(this.resultData)
      .map((key) => [key, this.resultData[key]])
      .filter(([, value]) => !!value);

    if (participants.length === 0) {
      return;
    }

    this.dispatchEvent(new CustomEvent('expense-log', {
      bubbles: true,
      composed: true,
      detail: {
        participants,
      },
    }));
    // TODO reset input table
  }

  updateResult() {
    let totalPaid = 0;
    let totalParticipated = 0;

    this.additionalData.forEach(({ paid, participated }) => {
      if (paid) {
        totalPaid += paid;
      }

      if (participated) {
        totalParticipated += 1;
      }
    });

    let share = totalPaid / totalParticipated;

    if (this.rounding !== 0) {
      share = Math.ceil(share / this.rounding) * this.rounding;
    }

    this.additionalData.forEach(({ id, paid = 0, participated }) => {
      let result = paid;

      if (participated) {
        result -= share;
      }

      this.resultData[id] = result ? result : undefined;
    });
    this.requestUpdate();
  }
}

customElements.define('expense-input', ExpenseInput);
