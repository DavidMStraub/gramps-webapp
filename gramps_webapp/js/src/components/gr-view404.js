import{html$2 as html,PageViewElement,SharedStyles}from"./gr-app.js";class MyView404 extends PageViewElement{static get styles(){return[SharedStyles]}render(){return html`
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>
          The page you're looking for doesn't seem to exist. Head back
          <a href="/">home</a> and try again?
        </p>
      </section>
    `}}window.customElements.define("gr-view404",MyView404);