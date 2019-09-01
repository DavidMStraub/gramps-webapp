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
              <vaadin-grid-sorter path="date_sortval" direction="desc">${translate("Date")}</vaadin-grid-sorter>
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
              <vaadin-grid-sorter path="primary_participants">${translate("Participants")}</vaadin-grid-sorter>
              <br>
              <vaadin-grid-filter path="primary_participants"></vaadin-grid-filter>
            </template>
            <template>
              [[item.primary_participants]]
            </template>
          </vaadin-grid-column>
        </vaadin-grid>
    `}static get styles(){return[SharedStyles]}constructor(){super();this._hidden=!1}static get properties(){return{_events:{type:Object},_hidden:{type:Boolean}}}_get_event_participants(state,event){if(event.participants!=void 0&&event.participants[translate("Primary")]!=void 0){var p_people=event.participants[translate("Primary")].map(function(p,index){if("Person"==p.type){return state.api.people[p.gramps_id].name_given+" "+state.api.people[p.gramps_id].name_surname}}).join(", ")}else{var p_people=""}if(event.participants!=void 0&&event.participants[translate("Family")]!=void 0){var p_families=event.participants[translate("Family")].map(function(p,index){if("Family"==p.type){return state.api.families[p.gramps_id].father_name+", "+state.api.families[p.gramps_id].mother_name}}).join(", ")}else{var p_families=""}event.primary_participants=p_people+p_families;return event}stateChanged(state){this._events=Object.values(state.api.events).map(e=>this._get_event_participants(state,e));this._hidden=!store.getState().app.wideLayout}firstUpdated(){}}window.customElements.define("gr-view-events",MyViewEvents);