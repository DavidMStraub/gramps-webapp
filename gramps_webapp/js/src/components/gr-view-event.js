import{html$2 as html,PageViewElement,connect,store,translate,SharedStyles}from"./gr-app.js";class MyViewEvent extends connect(store)(PageViewElement){render(){if(this._event==void 0){return html``}return html`
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
      }
      td {
        margin: 0;
      }
      </style>
      <section>
        <div id="title">
          <h2>${this._event.type}:
          ${this._participants[translate("Primary")]?html`
          ${this._participants[translate("Primary")].map((p,i,arr)=>this._participantLink(p,i==arr.length-1))}
          `:""}
          ${this._participants[translate("Family")]?html`
          ${this._participants[translate("Family")].map((p,i,arr)=>this._participantLink(p,i==arr.length-1))}
          `:""}
          </h2>
        </div>
        <p>
          <table width="100%">
          ${this._event.date?html`
            <tr>
              <th>${translate("Date")}</th>
              <td>${this._event.date}</td>
            </tr>
            `:""}
          ${this._event.place?html`
            <tr>
              <th>${translate("Place")}</th>
              <td><a href="/place/${this._event.place}">${this._event.place_name}</a></td>
            </tr>
            `:""}
          ${Object.keys(this._participants).map(role=>{if(role!=translate("Primary")&&role!=translate("Family")){return html`
              <tr>
                <th>${role}</th>
                <td>${this._participants[role].map((p,i,arr)=>this._participantLink(p,i==arr.length-1))}</td>
              </tr>
              `}})}
          </table>
          </p>
        <p>${this._event.description}</p>

        ${this._media.length?html`<h3>${translate("Gallery")}</h3>`:""}
        <gr-gallery-element .images=${this._media} host=${this._host} token=${this._token}>
        </gr-gallery-element>

        ${this._notes.length?html`<h3>${translate("Notes")}</h3>`:""}
        ${this._notes.map(n=>html`
        <gr-note-element grampsid=${n}>
        </gr-note-element>
        `)}

        ${this._citations.length?html`<h3>${translate("Sources")}</h3>`:""}
        <gr-citations-element .citations=${this._citations}>
        </gr-citations-element>


      </section>
    `}static get styles(){return[SharedStyles]}constructor(){super();this._media=[]}static get properties(){return{_event:{type:Object},_handle:{type:String},_token:{type:String},_host:{type:String},_media:{type:Object}}}firstUpdated(){}_participantLink(p,lastItem){if(p==void 0){return""}if("Person"==p.type){return html`
        <a href="/person/${p.person.gramps_id}">${p.person.name_given}
        ${p.person.name_surname}</a>${lastItem?"":", "}
        `}else if("Family"==p.type){return html`
        <a href="/person/${p.family.father_id}">${p.family.father_name}</a>
        ${translate("and")}
        <a href="/person/${p.family.mother_id}">${p.family.mother_name}</a>${lastItem?"":", "}
        `}}stateChanged(state){this._host=state.app.host;this._token=state.api.token;this._handle=state.app.activeEvent;this._event=state.api.events[this._handle];if(this._event!=void 0){if(""!=this._event.place&&state.api.places[this._event.place]!=void 0){this._event.place_name=state.api.places[this._event.place].name}this._media=this._event.media;this._citations=this._event.citations;this._notes=this._event.notes;this._participants=Object.assign({},this._event.participants);Object.keys(this._participants).map(role=>{this._participants[role]=this._participants[role].map(function(p){if("Person"==p.type){return{type:p.type,person:state.api.people[p.gramps_id]}}else if("Family"==p.type){return{type:p.type,family:state.api.families[p.gramps_id]}}})})}}}window.customElements.define("gr-view-event",MyViewEvent);