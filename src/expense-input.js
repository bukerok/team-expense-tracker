import { LitElement, html } from 'lit-element';

class ExpenseInput extends LitElement {
  static get properties() {
    return {
      users: { type: Array },
      rounding: { type: Number },
    };
  }

  users = [];
  rounding = 0.5;
  additionalData = [];
  resultData = {};

  render(){
    return html`
      <div>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Participated</th>
              <th>Paid</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody @change="${this.inputChangeListener}">
            ${this.users.map(({ name }) => {
              return html`
                <tr>
                  <td>${name}</td>
                  <td><input data-type="participated" data-id="${name}" type="checkbox"></td>
                  <td><input data-type="paid" type="number" data-id="${name}"></td>
                  <td>${this.resultData[name]}</td>
                </tr>
              `;
            })}
          </tbody>
        </table>
        <button @click="${this.logListener}">Log</button>
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
    console.log('result', this.resultData);
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

    const share = Math.ceil((totalPaid / totalParticipated) / this.rounding) * this.rounding;

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
