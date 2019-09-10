import{html$2 as html,PageViewElement,connect,store,translate,SharedStyles}from"./gr-app.js";var placeType={"-1":"Unknown",0:"Custom",1:"Country",2:"State",3:"County",4:"City",5:"Parish",6:"Locality",7:"Street",8:"Province",9:"Region",10:"Department",11:"Neighborhood",12:"District",13:"Borough",14:"Municipality",15:"Town",16:"Village",17:"Hamlet",18:"Farm",19:"Building",20:"Number"};class MyViewPlace extends connect(store)(PageViewElement){render(){if(this._place==void 0){return html`
      <section>
        <p>Loading ...</p>
      </section>
      `}return html`
      <style>
      h2 {
      }
      div.item {
        float:left; margin:5px;
      }
      svg {
          height: 1em;
          top: .125em;
          position: relative;
      }
      svg path {
          fill: #aaa;
      }
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
      :host {
        --paper-tab-ink: var(--app-secondary-color);
        --paper-tabs-selection-bar-color: var(--app-secondary-color);
        --paper-badge-background:  var(--app-primary-color);
        --paper-badge-margin-left: 20px;
      }
      paper-tabs {
        /* background-color: var(--app-section-even-color); */
        color: var(--app-dark-text-color);
        font-weight: 400;
        font-size: 15px;
      }
      </style>
      <section>
        <div id="title">
          <h2>${this._place.name}</h2>
        </div>

        <table width="100%">
          ${Object.entries(this._place.hierarchy).sort((a,b)=>b[0]>a[0]?1:-1).map(function(t){return html`
            <tr>
              <th>${translate(placeType[t[0]])}</th>
              <td>${t[1]}</td>
            </tr>
          `})}
        </table>

        ${this._media.length?html`<h3>${translate("Media")}</h3>`:""}
        <gr-gallery-element .images=${this._media} host="${this._host}" token="${this._token}">
        </gr-gallery-element>


        ${this._place.geolocation&&this._place.geolocation[0]?html`<h3>${translate("Map")}</h3>
        <gr-leaflet-map
          width="100%"
          height="500px"
          latitude=${this._place.geolocation[0]}
          longitude=${this._place.geolocation[1]}
          zoom=13
          mapid="map-place"
        >
          <gr-leaflet-map-marker
            latitude=${this._place.geolocation[0]}
            longitude=${this._place.geolocation[1]}
          >
          </gr-leaflet-map-marker>
        </gr-leaflet-map>
        `:""}

        ${this._notes.length?html`<h3>${translate("Notes")}</h3>`:""}
        ${this._notes.map(n=>html`
        <gr-note-element grampsid=${n}>
        </gr-note-element>
        `)}

        ${this._citations.length?html`<h3>${translate("Sources")}</h3>`:""}
        <gr-citations-element .citations=${this._citations}>
        </gr-citations-element>
        
      </section>

    `}static get styles(){return[SharedStyles]}constructor(){super();this._selected=0;this._media=[]}static get properties(){return{_place:{type:Object},_gramps_id:{type:String},_host:{type:String},_token:{type:String},_events:{type:Object},_media:{type:Object},_hierarchy:{type:Object},_selected:{type:Number}}}_handleSelected(ev){this._selected=ev.detail.selected;window.location.hash=this._selected}_onHashChange(ev){this._selected=ev.newURL.split("#")[1]}firstUpdated(){window.addEventListener("hashchange",this._onHashChange);if(window.location.hash.split("#")[1]!=void 0){this._selected=window.location.hash.split("#")[1]}}_personLink(p,lastItem){if(p==void 0){return""}return html`
      <a href="/person/${p.gramps_id}">${p.name_given}
      ${p.name_surname}</a>${lastItem?"":", "}
      `}// _get_place_name(state, event) {
//   if (event.place != undefined && event.place != '' && state.api && state.api.places) {
//     event.place_name = state.api.places[event.place].name;
//   };
//   return event;
// }
_addMimeType(mhandles,state){return mhandles.map(function(mobj){mobj.mime=state.api.media[mobj.ref].mime;return mobj})}stateChanged(state){this._host=state.app.host;this._token=state.api.token;this._gramps_id=state.app.activePlace;this._place=state.api.places[this._gramps_id];if(this._place!=void 0){this._media=this._addMimeType(this._place.media,state);this._hierarchy=this._place._hierarchy;this._citations=this._place.citations;this._notes=this._place.notes}// this._events = Object.values(state.api.events).filter((e) => e.place == this._gramps_id);
// this._events = this._events.map((e) => this._get_place_name(state, e));
}}window.customElements.define("gr-view-place",MyViewPlace);