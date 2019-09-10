import{html$2 as html,PageViewElement,connect,store,translate,SharedStyles}from"./gr-app.js";class MyViewSource extends connect(store)(PageViewElement){render(){if(this._source==void 0){return html`
      <section>
        <p>Loading ...</p>
      </section>
      `}return html`
      <style>
      th {
        color: #777;
        font-size: 0.75em;
        font-weight: 500;
        text-align: right;
        max-width: 20em;
        padding-right: 1em;
        padding-top:0.3em;
      }
      td {
        margin: 0;
      }
      </style>
      <section>
        <div id="title">
          <h2>${this._source.title}</h2>
        </div>


        <table width="100%">
          ${""==this._source.author?"":html`
            <tr>
              <th>${translate("Author")}</th>
              <td>${this._source.author}</td>
            </tr>
          `}
          ${""==this._source.pubinfo?"":html`
            <tr>
              <th>${translate("Publication Information")}</th>
              <td>${this._source.pubinfo}</td>
            </tr>
          `}
          ${""==this._source.repositories?"":html`
            <tr>
              <th>${translate("Repositories")}</th>
              <td>${this._repositories.join(", ")}</td>
            </tr>
          `}
        </table>

        ${this._media.length?html`<h3>${translate("Media")}</h3>`:""}
        <gr-gallery-element .images=${this._media} host="${this._host}" token="${this._token}">
        </gr-gallery-element>


        ${this._notes.length?html`<h3>${translate("Notes")}</h3>`:""}
        ${this._notes.map(n=>html`
        <gr-note-element grampsid=${n}>
        </gr-note-element>
        `)}

        </section>

    `}static get styles(){return[SharedStyles]}constructor(){super();this._media=[]}static get properties(){return{_source:{type:Object},_gramps_id:{type:String},_host:{type:String},_token:{type:String},_media:{type:Object}}}firstUpdated(){}_addMimeType(mhandles,state){return mhandles.map(function(mobj){mobj.mime=state.api.media[mobj.ref].mime;return mobj})}stateChanged(state){this._host=state.app.host;this._token=state.api.token;this._gramps_id=state.app.activeSource;this._source=state.api.sources[this._gramps_id];if(this._source!=void 0){this._media=this._addMimeType(this._source.media,state);this._notes=this._source.notes;this._repositories=this._source.repositories.map(repo=>state.api.repositories[repo].title)}}}window.customElements.define("gr-view-source",MyViewSource);