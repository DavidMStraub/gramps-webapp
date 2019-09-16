import{html$2 as html,PageViewElement,SharedStyles,connect,translate,store}from"./gr-app.js";class MyViewPeople extends connect(store)(PageViewElement){render(){return html`
      <section>
        <vaadin-grid class="fullscreen" .items=${this._people} theme="row-dividers" multi-sort>
          <vaadin-grid-selection-column auto-select hidden></vaadin-grid-selection-column>
          <vaadin-grid-column ?hidden="${this._hidden}">
            <template class="header">
              <vaadin-grid-sorter path="gramps_id">ID</vaadin-grid-sorter>
            </template>
            <template>
              <a href="/person/[[item.gramps_id]]"><div>[[item.gramps_id]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header">
              <vaadin-grid-sorter path="name_given" direction="asc">${translate("Given name")}</vaadin-grid-sorter>
              <br>
              <vaadin-grid-filter path="name_given"></vaadin-grid-filter>
            </template>
            <template>
              <a href="/person/[[item.gramps_id]]"><div>[[item.name_given]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column ?hidden="true">
            <template class="header">
              <vaadin-grid-sorter path="name_surname" direction="asc">${translate("Surname")}</vaadin-grid-sorter>
              <br>
              <vaadin-grid-filter path="name_surname"></vaadin-grid-filter>
            </template>
            <template>
              <a href="/person/[[item.gramps_id]]"><div>[[item.name_surname]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column ?hidden="${this._hidden}">
            <template class="header">
              <vaadin-grid-sorter path="birthdate">${translate("Birth Date")}</vaadin-grid-sorter>
            </template>
            <template>
              <a href="/person/[[item.gramps_id]]"><div>[[item.birthdate]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column ?hidden="${this._hidden}">
            <template class="header">
              <vaadin-grid-sorter path="deathdate">${translate("Death Date")}</vaadin-grid-sorter>
            </template>
            <template>
              <a href="/person/[[item.gramps_id]]"><div>[[item.deathdate]]</div></a>
            </template>
          </vaadin-grid-column>
        </vaadin-grid>
    `}static get styles(){return[SharedStyles]}constructor(){super();this._hidden=!1}static get properties(){return{_people:{type:Object},_hidden:{type:Boolean}}}stateChanged(state){this._people=Object.values(state.api.people);this._hidden=!state.app.wideLayout}firstUpdated(){// const grid = this.shadowRoot.querySelector('vaadin-grid');
// grid.items = Object.values(store.getState().api.people);
}}window.customElements.define("gr-view-people",MyViewPeople);