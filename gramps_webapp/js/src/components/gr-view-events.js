import{html$2 as html,PageViewElement,SharedStyles,connect,translate,store}from"./gr-app.js";class MyViewEvents extends connect(store)(PageViewElement){render(){return html`
      <section>
        <vaadin-grid .items=${this._events} theme="row-dividers" multi-sort>
          <vaadin-grid-selection-column auto-select hidden></vaadin-grid-selection-column>
          <vaadin-grid-column ?hidden="${this._hidden}">
            <template class="header">
              <vaadin-grid-sorter path="gramps_id">ID</vaadin-grid-sorter>
            </template>
            <template>
              [[item.gramps_id]]
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header">
              <vaadin-grid-sorter path="date" direction="desc">${translate("Date")}</vaadin-grid-sorter>
              <br>
              <vaadin-grid-filter path="date"></vaadin-grid-filter>
            </template>
            <template>
              <a href="/event/[[item.handle]]"><div>[[item.date]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header">
              <vaadin-grid-sorter path="type">${translate("Type")}</vaadin-grid-sorter>
            </template>
            <template>
              [[item.type]]
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header">
              <vaadin-grid-sorter path="place_name">${translate("Place")}</vaadin-grid-sorter>
              <br>
              <vaadin-grid-filter path="place_name"></vaadin-grid-filter>
            </template>
            <template>
              <a href="/place/[[item.place]]"><div>[[item.place_name]]</div></a>
            </template>
          </vaadin-grid-column>
        </vaadin-grid>
    `}static get styles(){return[SharedStyles]}constructor(){super();this._hidden=!1}static get properties(){return{_events:{type:Object},_hidden:{type:Boolean}}}_get_place_name(state,event){if(event.place!=void 0&&""!=event.place){event.place_name=state.api.places[event.place].name};return event}stateChanged(state){this._events=Object.values(state.api.events).map(e=>this._get_place_name(state,e));this._hidden=!store.getState().app.wideLayout}firstUpdated(){}}window.customElements.define("gr-view-events",MyViewEvents);