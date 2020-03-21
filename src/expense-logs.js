import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

class ExpenseLogs extends LitElement {
  static get properties() {
    return {
      logs: { type: Array },
    };
  }

  static get styles() {
    return css`
      p {
        margin: 0;
      }

      .logs {
        max-width: 500px;
        list-style-type: none;
        margin: 0;
        padding: 8px;
      }

      .log-item {
        padding: 16px;
        margin-bottom: 8px;
        border-radius: 4px;
        background-color: white;
        box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
          0px 1px 1px 0px rgba(0,0,0,0.14),
          0px 1px 3px 0px rgba(0,0,0,0.12);
      }

      .log-item__participants {
        display: flex;
        flex-wrap: wrap;
      }

      .log-item__participant {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px;
      }

      .log-item__value {
        margin-top: 4px;
        font-size: 1.1rem;
        font-weight: bold;
        color: #1B5E20;
      }

      .log-item__value_negative {
        color: #B71C1C;
      }

      .log-item__date {
        font-size: 0.8rem;
        opacity: 0.8;
      }
    `;
  }

  render() {
    return html`
      <ul class="logs">
        ${this.logs.map(({ _metadata, participants }) => {
          return html`
            <li class="log-item">
              <div class="log-item__participants">
                ${participants.map(([name, value]) => html`
                  <div class="log-item__participant">
                    <p>${name}</p>
                    <p
                      class="${classMap({
                        'log-item__value': true,
                        'log-item__value_negative': value < 0,
                      })}"
                    >
                      ${value}
                    </p>
                  </div>
                `)}
              </div>
              <div class="log-item__date">
                ${(new Date(_metadata.date).toDateString())}
              <div>
            </li>
          `;
        })}
      </ul>
    `;
  }
}

customElements.define('expense-logs', ExpenseLogs);
