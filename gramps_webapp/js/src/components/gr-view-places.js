import{html$2 as html,PageViewElement,SharedStyles,connect,translate,store}from"./gr-app.js";class MyViewPlaces extends connect(store)(PageViewElement){render(){return html`
      <section>
        <vaadin-grid class="fullscreen" .items=${this._places} theme="row-dividers" multi-sort>
          <vaadin-grid-selection-column auto-select hidden></vaadin-grid-selection-column>
          <vaadin-grid-column ?hidden="${this._hidden}">
            <template class="header">
              <vaadin-grid-sorter path="gramps_id">ID</vaadin-grid-sorter>
            </template>
            <template>
              <a href="/place/[[item.gramps_id]]"><div>[[item.gramps_id]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header">
              <vaadin-grid-sorter path="name" direction="asc">${translate("Name")}</vaadin-grid-sorter>
              <br>
              <vaadin-grid-filter path="name"></vaadin-grid-filter>
            </template>
            <template>
              <a href="/place/[[item.gramps_id]]"><div>[[item.name]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header">
              <vaadin-grid-sorter path="type_string">${translate("Type")}</vaadin-grid-sorter>
            </template>
            <template>
              [[item.type_string]]
            </template>
          </vaadin-grid-column>
        </vaadin-grid>
    `}static get styles(){return[SharedStyles]}constructor(){super();this._hidden=!1}static get properties(){return{_places:{type:Object},_hidden:{type:Boolean}}}stateChanged(state){this._places=Object.values(state.api.places);this._hidden=!store.getState().app.wideLayout}firstUpdated(){}}window.customElements.define("gr-view-places",MyViewPlaces);