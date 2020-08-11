let e,t,a,i,r,o,s,n,l,c,d,m,h,p,g,u,f,b,v,y,_,k=e=>e;import{b as $,L as x,h as w,t as j,S,l as z,m as B,r as D,c as E,s as R,u as T}from"./b4d29789.js";import"./8bec0ded.js";import"./a6e36716.js";import"./96e9395f.js";const A=$(e||(e=k`<dom-module id="lumo-grid-sorter" theme-for="vaadin-grid-sorter">
  <template>
    <style>
      :host {
        justify-content: flex-start;
        align-items: baseline;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="content"] {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="indicators"] {
        margin-left: var(--lumo-space-s);
      }

      :host(:not([direction])) [part="indicators"]::before {
        opacity: 0.2;
      }

      :host([direction]) {
        color: var(--lumo-primary-text-color);
      }

      [part="order"] {
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="indicators"] {
        margin-right: var(--lumo-space-s);
        margin-left: 0;
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(A.content);const C=$(t||(t=k`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius-s);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"]:not([empty]) {
        margin: 0.1875em 0.375em 0.1875em 0.875em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(C.content);window.customElements.define("gr-children-element",class extends x{render(){return w(a||(a=k` <vaadin-grid .items="${0}" theme="row-dividers"> <vaadin-grid-column path="name_given" header="${0}"> <template> <a href="/person/[[item.gramps_id]]"><div>[[item.name_given]]</div></a> </template> </vaadin-grid-column> <vaadin-grid-column path="birthdate" header="${0}"></vaadin-grid-column> <vaadin-grid-column path="deathdate" header="${0}"></vaadin-grid-column> </vaadin-grid> `),this.items,j("Given name"),j("Birth Date"),j("Death Date"))}static get styles(){return[S]}static get properties(){return{items:{type:Array}}}firstUpdated(){this.shadowRoot.querySelector("vaadin-grid").heightByRows=!0}});window.customElements.define("gr-person-element",class extends x{render(){return w(i||(i=k` <style>svg{height:1em;top:.125em;position:relative}svg path{fill:#aaa}.gray{font-size:.9em}</style> <a href="/person/${0}"> ${0}${0} ${0}</a> <span class="gray"> ${0} ${0} </span> <span class="gray"> ${0} ${0} </span> `),this.person.gramps_id,this.person.name_surname,this.person.name_surname&&this.person.name_given?",":"",this.person.name_given,this.person.birthdate?w(r||(r=k`&nbsp;&nbsp; ${0} ${0}`),z,this.person.birthdate):"",this.person.birthplace?w(o||(o=k` ${0} ${0}`),j("in"),this.person.birthplace):"",this.person.deathdate?w(s||(s=k`&nbsp;&nbsp; ${0} ${0}`),B,this.person.deathdate):"",this.person.deathplace?w(n||(n=k` ${0} ${0}`),j("in"),this.person.deathplace):"")}static get styles(){return[S]}static get properties(){return{person:{type:Array}}}});const L=D(l||(l=k`
vaadin-grid-cell-content {
    white-space: normal;
    vertical-align: text-top;
   }
}
`));window.customElements.define("gr-events-element",class extends x{render(){return w(c||(c=k` <vaadin-grid .items="${0}" theme="row-dividers"> <vaadin-grid-column path="date" header="${0}"></vaadin-grid-column> <vaadin-grid-column> <template class="header">${0}</template> <template> <a href="/event/[[item.gramps_id]]"><div>[[item.type]]</div></a> <template is="dom-if" if="[[item.role]]"> ([[item.role]]) </template> </template> </vaadin-grid-column> <vaadin-grid-column path="description" header="${0}"></vaadin-grid-column> ${0} </vaadin-grid> `),this.items,j("Date"),j("Type"),j("Description"),this.place?w(d||(d=k` <vaadin-grid-column> <template class="header"> <vaadin-grid-sorter path="place_name">${0}</vaadin-grid-sorter> <vaadin-grid-filter path="place_name"></vaadin-grid-filter> </template> <template> <a href="/place/[[item.place]]"><div>[[item.place_name]]</div></a> </template> </vaadin-grid-column> `),j("Place")):"")}static get styles(){return[L,S]}constructor(){super(),this.items=[],this.place=!1}firstUpdated(){this.shadowRoot.querySelector("vaadin-grid").heightByRows=!0}static get properties(){return{items:{type:Array},place:{type:Boolean}}}});class M extends(E(R)(x)){render(){const e=R.getState();return"families"in e.api?(this._family=e.api.families[this.gramps_id],"undefined"!=this._family.marriageplace&&""!=this._family.marriageplace&&(this._marriageplace_name=e.api.places[this._family.marriageplace].name),this._father=e.api.people[this._family.father_id],this._mother=e.api.people[this._family.mother_id],this._children=this._family.children.map(t=>e.api.people[t]),this._events=this._family.events.map(t=>e.api.events[t]),this._events=this._events.map(t=>this._get_place_name(e,t)),this._media=this._addMimeType(this._family.media,e),this._citations=this._family.citations,this._notes=this._family.notes,w(h||(h=k` <div style="float:left"> <gr-pedigree-card .person="${0}" width="200px" link="person" token="${0}"></gr-pedigree-card> </div> <span style="display:block;float:left;padding:.8em 2em;text-align:center"> ${0} ${0} </span> <div style="float:left"> <gr-pedigree-card .person="${0}" width="200px" link="person" token="${0}"></gr-pedigree-card> </div> <p></p> <div style="clear:left"> </div> ${0} ${0} ${0} <gr-gallery-element .images="${0}" token="${0}"> </gr-gallery-element> ${0} ${0} ${0} <gr-citations-element .citations="${0}"> </gr-citations-element> `),this._father,this._token,this._family.marriagedate?w(p||(p=k`${0} ${0}`),T,this._family.marriagedate):"",this._family.marriageplace?w(g||(g=k`<br>${0} <a href="/place/${0}">${0}</a>`),j("in"),this._family.marriageplace,this._marriageplace_name):"",this._mother,this._token,this._family.children.length>0?w(u||(u=k` <h3>${0}</h3> <gr-children-element .items="${0}"></gr-children-element>`),this.siblings?j("Siblings"):j("Children"),this._children):"",this._family.events.length>0?w(f||(f=k`<h3>${0}</h3> <gr-events-element .items="${0}" place></gr-events-element> `),j("Events"),this._events):"",this._media.length?w(b||(b=k`<h3>${0}</h3>`),j("Media")):"",this._media,this._token,this._notes.length?w(v||(v=k`<h3>${0}</h3>`),j("Notes")):"",this._notes.map(e=>w(y||(y=k` <gr-note-element grampsid="${0}"> </gr-note-element> `),e)),this._citations.length?w(_||(_=k`<h3>${0}</h3>`),j("Sources")):"",this._citations)):w(m||(m=k`Loading...`))}static get styles(){return[S]}constructor(){super(),this._family={},this._father={},this._mother={}}static get properties(){return{gramps_id:{type:String},father:{type:Boolean},mother:{type:Boolean},siblings:{type:Boolean},_family:{type:Object},_father:{type:Object},_mother:{type:Object},_children:{type:Array},_token:{type:String}}}_get_place_name(e,t){return null!=t.place&&""!=t.place&&e.api&&e.api.places&&(t.place_name=e.api.places[t.place].name),t}_addMimeType(e,t){return e.map((function(e){let a={ref:e};return a.mime=t.api.media[a.ref].mime,a}))}stateChanged(e){this._token=e.api.token}}window.customElements.define("gr-family-element",M);
