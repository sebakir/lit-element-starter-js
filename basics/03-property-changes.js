import {LitElement, html} from 'lit-element';

class PropertyChanges extends LitElement {
  static get properties() {
    return {
      sayac: {type: Number},
    };
  }
  constructor() {
    super();
    this.sayac = 0;

    setInterval(() => {
      this.sayac = this.sayac < 15 ? this.sayac + 1 : 0;
    }, 500);
  }

  render() {
    return html`
      <div>
        Sayac : [${this.sayac}]
      </div>
    `;
  }
}
customElements.define('property-change', PropertyChanges);
