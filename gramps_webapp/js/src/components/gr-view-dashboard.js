import{html$2 as html,PageViewElement,connect,store,translate,SharedStyles}from"./gr-app.js";class MyViewDashboard extends connect(store)(PageViewElement){render(){return html`
      <style>
      paper-card {
        width: 100%;
        margin-bottom: 15px;
      }    
      .card-content h3 {
        margin: 0em 0em 0.75em 0em;
        line-height: 1em;
        font-size: 24px;
      }
      .card-content table {
        width: 100%;
      }
      .card-content b {
        font-weight: 500;
      }
      section.cards {
        column-width: 300px;
        column-gap: 15px;
      }
      </style>
      <section>
      <h2>${translate("Home Page")}</h2>
      </section>
      <section class="cards">
      <paper-card>
          <div class="card-content">
            <h3>${translate("Database overview")}</h3>
            <p>${translate("Name")}: ${this._dbinfo.name}</p>
            <table>
              <tr>
                <td>${translate("Number of individuals")}</td>
                <td>${this._dbinfo.number_people}</td>
              </tr>
              <tr>
                <td>${translate("Number of families")}</td>
                <td>${this._dbinfo.number_families}</td>
              </tr>
              <tr>
                <td>${translate("Number of places")}</td>
                <td>${this._dbinfo.number_places}</td>
              </tr>
              <tr>
                <td>${translate("Number of events")}</td>
                <td>${this._dbinfo.number_events}</td>
              </tr>
            </table>
          </div>
      </paper-card>
      </section>
    `}static get styles(){return[SharedStyles]}static get properties(){return{_dbinfo:{type:Object}}}stateChanged(state){this._dbinfo=state.api.dbinfo}}window.customElements.define("gr-view-dashboard",MyViewDashboard);