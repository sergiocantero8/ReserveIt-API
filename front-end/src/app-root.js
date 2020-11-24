import { customElement, property, LitElement, html, css } from 'lit-element';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property() message = 'Mi Github';

  static get styles() {
    return css`
      h1 {
        font-size: 4rem;
      }
      .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
        background-color: #2196f3;
        background: linear-gradient(315deg, #b4d2ea 0%, #2196f3 100%);
        font-size: 24px;
      }
      .link {
        color: white;
      }
    `;
  }

  render() {
    return html`
      <div class="wrapper">
        <h1>Pistas deportivas más baratas</h1>
        <form name="form_pistas" action="https://compara-precios.netlify.app/.netlify/functions/precio/" method="GET" data-netlify="true">
          <label">Provincia:</label><br>
          <select name="provincia">
            <option>Granada</option>
            <option>Jaén</option>
            <option>Málaga</option>
        </select><br>
        <label>Tipo:</label><br>
          <select name="tipo">
          <option>Pádel</option>
          <option>Fútbol 11</option>
          <option>Tenis</option>
        </select><br>
        <label>Orden de precio:</label><br>
        <select name="orden_precio">
        <option>Más barato</option>
        <option>Más caro</option>
      </select>
        <input type="submit" value="Enviar datos">
        </form>
        <a
          class="link"
          href="https://github.com/sergiocantero8/reserve-it"
          target="_blank"
          rel="noopener noreferrer"
        >
        <p>
          ${this.message}
        </p>
        </a>
      </div>
    `;
  }
}
