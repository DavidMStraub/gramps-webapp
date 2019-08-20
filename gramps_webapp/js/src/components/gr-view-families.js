import{html$2 as html,PageViewElement,SharedStyles,connect,translate,store}from"./gr-app.js";class MyViewFamilies extends connect(store)(PageViewElement){render(){return html`
      <section>
        <vaadin-grid .items=${this._families} theme="row-dividers" multi-sort>
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
              <vaadin-grid-sorter path="father_name" direction="asc">${translate("Father")}</vaadin-grid-sorter>
              <br>
              <vaadin-grid-filter path="father_name"></vaadin-grid-filter>
            </template>
            <template>
              <a href="/person/[[item.father_id]]"><div>[[item.father_name]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header">
              <vaadin-grid-sorter path="mother_name">${translate("Mother")}</vaadin-grid-sorter>
              <br>
              <vaadin-grid-filter path="mother_name"></vaadin-grid-filter>
            </template>
            <template>
              <a href="/person/[[item.mother_id]]"><div>[[item.mother_name]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column ?hidden="${this._hidden}">
            <template class="header">
              <vaadin-grid-sorter path="marriagedate">${translate("Marriage Date")}</vaadin-grid-sorter>
            </template>
            <template>
              [[item.marriagedate]]
            </template>
          </vaadin-grid-column>
        </vaadin-grid>
    `}static get styles(){return[SharedStyles]}static get properties(){return{_families:{type:Object},_hidden:{type:Boolean}}}stateChanged(state){this._families=Object.values(state.api.families);this._hidden=!state.app.wideLayout}firstUpdated(){// const grid = this.shadowRoot.querySelector('vaadin-grid');
// grid.items = Object.values(store.getState().api.families);
}}window.customElements.define("gr-view-families",MyViewFamilies);