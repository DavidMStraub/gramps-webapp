import{html$2 as html,PageViewElement,asteriskIcon,crossIcon,connect,store,translate,SharedStyles}from"./gr-app.js";class MyViewPerson extends connect(store)(PageViewElement){render(){if(this._person==void 0){return html`
      <section>
        <p>Loading ...</p>
      </section>
      `}return html`
      <style>
      h2 {
        margin: 0em;
      }
      div#photo {
        padding:10px 30px;
        width:230px;
      }
      svg {
          height: 1em;
          top: .125em;
          position: relative;
      }
      svg path {
          fill: #aaa;
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
      /* Wide layout */
      @media (min-width: 768px) {
        div#photo {
          float:right;
        }
        div#title {
          margin-right: 230px;
          min-height: 150px;
        }
        div#tabs {
          margin-right: 230px;
        }
      }
      </style>
      <section>
        ${this._media&&this._media.length?html`
        <div id="photo">
          <gr-img-element
            token="${this._token}"
            host="${this._host}"
            handle="${this._media[0].ref}"
            size="200"
            circle square
            .rect="${this._media[0].rect}">
          </gr-img-element>
        </div>
        `:""}
        <div id="title">
          <h2> ${this._person.name_given} ${this._person.name_surname}</h2>
          <p>${this._person.birthdate?html`
            ${asteriskIcon} ${this._person.birthdate}
            `:""}
            ${this._person.birthplace?html`
              ${translate("in")} <a href="place/${this._person.birthplace}">${this._person.birthplace_name}</a>
              `:""}
          </p>
          <p>${this._person.deathdate?html`
            ${crossIcon} ${this._person.deathdate}
            `:""}
            ${this._person.deathplace?html`
              ${translate("in")} <a href="place/${this._person.deathplace}">${this._person.deathplace_name}</a>
              `:""}
          </p>
          </div>
          <div id="tabs">
        <paper-tabs
          autoselect
          .selected="${this._selected}"
          @iron-activate="${this._handleSelected}">
          <paper-tab>${translate("Events")}</paper-tab>
          <paper-tab>${translate("Parents")}</paper-tab>
          <paper-tab>${translate("Families")}</paper-tab>
          <paper-tab><div style="display:inline-block"><span>${translate("Gallery")}</span>${this._media.length?html` <paper-badge label="${this._media.length}"></paper-badge>
          `:""}</div></paper-tab>
          <paper-tab>${translate("Sources")}</paper-tab>
        </paper-tabs>
        </div>
      </section>

      <section  ?hidden=${0!=this._selected} style="clear:left;">
        ${this._events?html`
          <gr-events-element .items="${this._events}" place></gr-events-element>`:""}
      </section>

      <section  ?hidden=${1!=this._selected}>
      ${this._parents?html`<gr-family-element
        gramps_id="${this._parents}"
        siblings father mother></gr-family-element>`:""}
      </section>
      <section  ?hidden=${2!=this._selected}>
      ${this._person.families?this._person.families.map(f=>html`
        <gr-family-element
        gramps_id="${f}"
        father
        mother></gr-family-element>`):""}
      </section>

      <section  ?hidden=${3!=this._selected}>
      <gr-gallery-element .images=${this._media} host=${this._host} token=${this._token}>
      </gr-gallery-element>
      </section>

      <section  ?hidden=${4!=this._selected}>
      <gr-citations-element .citations=${this._citations}>
      </gr-citations-element>
        </section>
      `}static get styles(){return[SharedStyles]}constructor(){super();this._selected=0}static get properties(){return{_gramps_id:{type:String},_person:{type:Object},_parents:{type:String},_host:{type:String},_token:{type:String},_events:{type:Object},_selected:{type:Number}}}_handleSelected(ev){this._selected=ev.detail.selected;window.location.hash=this._selected}_onHashChange(ev){this._selected=ev.newURL.split("#")[1]}firstUpdated(){window.addEventListener("hashchange",this._onHashChange);if(window.location.hash.split("#")[1]!=void 0){this._selected=window.location.hash.split("#")[1]}}_get_place_name(state,event){if(event.place!=void 0&&""!=event.place&&state.api&&state.api.places){event.place_name=state.api.places[event.place].name};return event}stateChanged(state){this._host=state.app.host;this._token=state.api.token;this._gramps_id=state.app.activePerson;this._person=state.api.people[this._gramps_id];this._hidden=!store.getState().app.wideLayout;if(this._person!=void 0){this._parents=this._person.parents;this._events=this._person.events.map(function(r){let obj=state.api.events[r.ref];if(r.role==translate("Primary")){obj.role=""}else{obj.role=r.role}return obj});this._events=this._events.map(e=>this._get_place_name(state,e));if(""!=this._person.birthplace){this._person.birthplace_name=state.api.places[this._person.birthplace].name}if(""!=this._person.deathplace){this._person.deathplace_name=state.api.places[this._person.deathplace].name}this._media=this._person.media;this._citations=this._person.citations}}}window.customElements.define("gr-view-person",MyViewPerson);