import{html$2 as html,PageViewElement,SharedStyles,connect,translate,store}from"./gr-app.js";class MyViewSources extends connect(store)(PageViewElement){render(){return html`
      <section>
        <vaadin-grid .items=${this._sources} theme="row-dividers" multi-sort>
          <vaadin-grid-selection-column auto-select hidden></vaadin-grid-selection-column>
          <vaadin-grid-column ?hidden="${this._hidden}">
            <template class="header">
              <vaadin-grid-sorter path="gramps_id">ID</vaadin-grid-sorter>
            </template>
            <template>
              <a href="/source/[[item.gramps_id]]"><div>[[item.gramps_id]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header">
              <vaadin-grid-sorter path="title" direction="asc">${translate("Name")}</vaadin-grid-sorter>
              <br>
              <vaadin-grid-filter path="title"></vaadin-grid-filter>
            </template>
            <template>
              <a href="/source/[[item.gramps_id]]"><div>[[item.title]]</div></a>
            </template>
          </vaadin-grid-column>
          <vaadin-grid-column>
            <template class="header">
              <vaadin-grid-sorter path="author">${translate("Author")}</vaadin-grid-sorter>
            </template>
            <template>
              [[item.author]]
            </template>
          </vaadin-grid-column>
        </vaadin-grid>
    `}static get styles(){return[SharedStyles]}constructor(){super();this._hidden=!1}static get properties(){return{_sources:{type:Object},_hidden:{type:Boolean}}}stateChanged(state){this._sources=Object.values(state.api.sources);this._hidden=!store.getState().app.wideLayout}firstUpdated(){}}window.customElements.define("gr-view-sources",MyViewSources);