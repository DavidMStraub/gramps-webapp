let t,e=t=>t;import{c as s,s as d,h as i,t as r,S as a}from"./8144a6f8.js";import{P as n}from"./373bcc3c.js";class o extends(s(d)(n)){render(){return i(t||(t=e` <style>paper-card{width:100%;margin-bottom:15px}.card-content h3{margin:0 0 .75em 0;line-height:1em;font-size:24px}.card-content table{width:100%}.card-content b{font-weight:500}section.cards{column-width:300px;column-gap:15px}</style> <section> <h2>${0}</h2> </section> <section class="cards"> <paper-card> <div class="card-content"> <h3>${0}</h3> <p>${0}: ${0}</p> <table> <tr> <td>${0}</td> <td>${0}</td> </tr> <tr> <td>${0}</td> <td>${0}</td> </tr> <tr> <td>${0}</td> <td>${0}</td> </tr> <tr> <td>${0}</td> <td>${0}</td> </tr> </table> </div> </paper-card> </section> `),r("Home Page"),r("Database overview"),r("Name"),this._dbinfo.name,r("Number of individuals"),this._dbinfo.number_people,r("Number of families"),this._dbinfo.number_families,r("Number of places"),this._dbinfo.number_places,r("Number of events"),this._dbinfo.number_events)}static get styles(){return[a]}static get properties(){return{_dbinfo:{type:Object}}}stateChanged(t){this._dbinfo=t.api.dbinfo}}window.customElements.define("gr-view-dashboard",o);
