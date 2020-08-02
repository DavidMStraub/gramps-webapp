let e,t,i,n,r,s,o,a,l,p,d,c,h,u,f,_,m,y,g,b,v,w,S,x,C,E,P,k,A,T,O,N,I,R,D,L,M,H,$,z,F,B,V,j,U,K,q,Y,W,J,X,G,Z,Q,ee,te,ie,ne,re,se,oe,ae,le,pe,de,ce,he,ue,fe,_e,me,ye,ge,be,ve,we=e=>e;import{objectSpread2 as Se}from"./5522257c.js";const xe="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,Ce=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},Ee=`{{lit-${String(Math.random()).slice(2)}}}`,Pe=`\x3c!--${Ee}--\x3e`,ke=new RegExp(`${Ee}|${Pe}`);class Ae{constructor(e,t){this.parts=[],this.element=t;const i=[],n=[],r=document.createTreeWalker(t.content,133,null,!1);let s=0,o=-1,a=0;const{strings:l,values:{length:p}}=e;for(;a<p;){const e=r.nextNode();if(null!==e){if(o++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)Te(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=l[a],i=Ie.exec(t)[2],n=i.toLowerCase()+"$lit$",r=e.getAttribute(n);e.removeAttribute(n);const s=r.split(ke);this.parts.push({type:"attribute",index:o,name:i,strings:s}),a+=s.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(Ee)>=0){const n=e.parentNode,r=t.split(ke),s=r.length-1;for(let t=0;t<s;t++){let i,s=r[t];if(""===s)i=Ne();else{const e=Ie.exec(s);null!==e&&Te(e[2],"$lit$")&&(s=s.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(s)}n.insertBefore(i,e),this.parts.push({type:"node",index:++o})}""===r[s]?(n.insertBefore(Ne(),e),i.push(e)):e.data=r[s],a+=s}}else if(8===e.nodeType)if(e.data===Ee){const t=e.parentNode;null!==e.previousSibling&&o!==s||(o++,t.insertBefore(Ne(),e)),s=o,this.parts.push({type:"node",index:o}),null===e.nextSibling?e.data="":(i.push(e),o--),a++}else{let t=-1;for(;-1!==(t=e.data.indexOf(Ee,t+1));)this.parts.push({type:"node",index:-1}),a++}}else r.currentNode=n.pop()}for(const e of i)e.parentNode.removeChild(e)}}const Te=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},Oe=e=>-1!==e.index,Ne=()=>document.createComment(""),Ie=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Re(e,t){const{element:{content:i},parts:n}=e,r=document.createTreeWalker(i,133,null,!1);let s=Le(n),o=n[s],a=-1,l=0;const p=[];let d=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(p.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,s=Le(n,s),o=n[s]}p.forEach(e=>e.parentNode.removeChild(e))}const De=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},Le=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(Oe(t))return i}return-1};const Me=new WeakMap,He=e=>"function"==typeof e&&Me.has(e),$e={},ze={};class Fe{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=xe?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,s=0,o=0,a=n.nextNode();for(;s<i.length;)if(r=i[s],Oe(r)){for(;o<r.index;)o++,"TEMPLATE"===a.nodeName&&(t.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=t.pop(),a=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(a.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,r.name,r.strings,this.options));s++}else this.__parts.push(void 0),s++;return xe&&(document.adoptNode(e),customElements.upgrade(e)),e}}const Be=` ${Ee} `;class Ve{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const e=this.strings[n],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const s=Ie.exec(e);t+=null===s?e+(i?Be:Pe):e.substr(0,s.index)+s[1]+s[2]+"$lit$"+s[3]+Ee}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const je=e=>null===e||!("object"==typeof e||"function"==typeof e),Ue=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class Ke{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new qe(this)}_getValue(){const e=this.strings,t=e.length-1;let i="";for(let n=0;n<t;n++){i+=e[n];const t=this.parts[n];if(void 0!==t){const e=t.value;if(je(e)||!Ue(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class qe{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===$e||je(e)&&e===this.value||(this.value=e,He(e)||(this.committer.dirty=!0))}commit(){for(;He(this.value);){const e=this.value;this.value=$e,e(this)}this.value!==$e&&this.committer.commit()}}class Ye{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(Ne()),this.endNode=e.appendChild(Ne())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=Ne()),e.__insert(this.endNode=Ne())}insertAfterPart(e){e.__insert(this.startNode=Ne()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;He(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=$e,e(this)}const e=this.__pendingValue;e!==$e&&(je(e)?e!==this.value&&this.__commitText(e):e instanceof Ve?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):Ue(e)?this.__commitIterable(e):e===ze?(this.value=ze,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof Fe&&this.value.template===t)this.value.update(e.values);else{const i=new Fe(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const r of e)i=t[n],void 0===i&&(i=new Ye(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(r),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){Ce(this.startNode.parentNode,e.nextSibling,this.endNode)}}class We{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;He(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=$e,e(this)}if(this.__pendingValue===$e)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=$e}}class Je extends Ke{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new Xe(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Xe extends qe{}let Ge=!1;(()=>{try{const e={get capture(){return Ge=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class Ze{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;He(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=$e,e(this)}if(this.__pendingValue===$e)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=Qe(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=$e}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const Qe=e=>e&&(Ge?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);function et(e){let t=tt.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},tt.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const n=e.strings.join(Ee);return i=t.keyString.get(n),void 0===i&&(i=new Ae(e,e.getTemplateElement()),t.keyString.set(n,i)),t.stringsArray.set(e.strings,i),i}const tt=new Map,it=new WeakMap;const nt=new class{handleAttributeExpressions(e,t,i,n){const r=t[0];if("."===r){return new Je(e,t.slice(1),i).parts}if("@"===r)return[new Ze(e,t.slice(1),n.eventContext)];if("?"===r)return[new We(e,t.slice(1),i)];return new Ke(e,t,i).parts}handleTextExpression(e){return new Ye(e)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const rt=(e,...t)=>new Ve(e,t,"html",nt),st=(e,t)=>`${e}--${t}`;let ot=!0;void 0===window.ShadyCSS?ot=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ot=!1);const at=e=>t=>{const i=st(t.type,e);let n=tt.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},tt.set(i,n));let r=n.stringsArray.get(t.strings);if(void 0!==r)return r;const s=t.strings.join(Ee);if(r=n.keyString.get(s),void 0===r){const i=t.getTemplateElement();ot&&window.ShadyCSS.prepareTemplateDom(i,e),r=new Ae(t,i),n.keyString.set(s,r)}return n.stringsArray.set(t.strings,r),r},lt=["html","svg"],pt=new Set,dt=(e,t,i)=>{pt.add(e);const n=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:s}=r;if(0===s)return void window.ShadyCSS.prepareTemplateStyles(n,e);const o=document.createElement("style");for(let e=0;e<s;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{lt.forEach(t=>{const i=tt.get(st(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),Re(e,i)})})})(e);const a=n.content;i?function(e,t,i=null){const{element:{content:n},parts:r}=e;if(null==i)return void n.appendChild(t);const s=document.createTreeWalker(n,133,null,!1);let o=Le(r),a=0,l=-1;for(;s.nextNode();){l++;for(s.currentNode===i&&(a=De(t),i.parentNode.insertBefore(t,i));-1!==o&&r[o].index===l;){if(a>0){for(;-1!==o;)r[o].index+=a,o=Le(r,o);return}o=Le(r,o)}}}(i,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),Re(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const ct={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},ht=(e,t)=>t!==e&&(t==t||e==e),ut={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:ht};class ft extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=ut){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(i){const n=this[e];this[t]=i,this._requestUpdate(e,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||ut}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=ht){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||ct,r="function"==typeof n?n:n.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||ct.toAttribute)(e,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=ut){const n=this.constructor,r=n._attributeNameForProperty(e,i);if(void 0!==r){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let i=!0;if(void 0!==e){const n=this.constructor,r=n.getPropertyOptions(e);n._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}ft.finalized=!0;const _t="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol();class yt{constructor(e,t){if(t!==mt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(_t?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const gt=(e,...t)=>{const i=t.reduce((t,i,n)=>t+(e=>{if(e instanceof yt)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1],e[0]);return new yt(i,mt)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const bt={};class vt extends ft{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(void 0===e)this._styles=[];else if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),n=[];i.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=[e]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?_t?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==bt&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return bt}}vt.finalized=!0,vt.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,r=it.has(t),s=ot&&11===t.nodeType&&!!t.host,o=s&&!pt.has(n),a=o?document.createDocumentFragment():t;if(((e,t,i)=>{let n=it.get(t);void 0===n&&(Ce(t,t.firstChild),it.set(t,n=new Ye(Object.assign({templateFactory:et},i))),n.appendInto(t)),n.setValue(e),n.commit()})(e,a,Object.assign({templateFactory:at(n)},i)),o){const e=it.get(a);it.delete(a);const i=e.value instanceof Fe?e.value.template:void 0;dt(n,a,i),Ce(t,t.firstChild),t.appendChild(a),it.set(t,e)}!r&&s&&window.ShadyCSS.styleElement(t.host)},window.JSCompiler_renameProperty=function(e,t){return e};let wt,St,xt=/(url\()([^)]*)(\))/g,Ct=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function Et(e,t){if(e&&Ct.test(e))return e;if("//"===e)return e;if(void 0===wt){wt=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",wt="http://a/c%20d"===e.href}catch(e){}}if(t||(t=document.baseURI||window.location.href),wt)try{return new URL(e,t).href}catch(t){return e}return St||(St=document.implementation.createHTMLDocument("temp"),St.base=St.createElement("base"),St.head.appendChild(St.base),St.anchor=St.createElement("a"),St.body.appendChild(St.anchor)),St.base.href=t,St.anchor.href=e,St.anchor.href||e}function Pt(e,t){return e.replace(xt,(function(e,i,n,r){return i+"'"+Et(n.replace(/["']/g,""),t)+"'"+r}))}function kt(e){return e.substring(0,e.lastIndexOf("/")+1)}const At=!window.ShadyDOM||!window.ShadyDOM.inUse,Tt=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),At&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch(e){return!1}})());let Ot=window.Polymer&&window.Polymer.rootPath||kt(document.baseURI||window.location.href),Nt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,It=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1;let Rt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Dt=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Lt=window.Polymer&&window.Polymer.legacyOptimizations||!1,Mt=window.Polymer&&window.Polymer.legacyWarnings||!1,Ht=window.Polymer&&window.Polymer.syncInitialRender||!1,$t=window.Polymer&&window.Polymer.legacyUndefined||!1,zt=window.Polymer&&window.Polymer.orderedComputed||!1,Ft=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Bt=window.Polymer&&window.Polymer.fastDomIf||!1,Vt=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,jt=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Ut=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;const Kt=e=>t=>class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}};function qt(e,t,i){let n=document.head.querySelector(`meta[${e}="${t}"]`);n||(n=document.createElement("meta"),n.setAttribute(e,t),document.head.appendChild(n)),n.setAttribute("content",i||"")}const Yt=(e,t)=>i=>{switch(e){case"tree":import("./dedaf50c.js").then(e=>{});case"person":i(Xt(t)),import("./ba46dba8.js").then(e=>{}),i(Xt(t));case"event":import("./bbf5c33b.js").then(e=>{}),i(Gt(t));case"place":import("./f1ca95ae.js").then(e=>{}),i(Zt(t));case"source":import("./c1c11218.js").then(e=>{}),i(Qt(t))}i(Jt(e)),window.scrollTo(0,0)},Wt=e=>t=>{switch(e){case"dashboard":import("./710b39e8.js").then(e=>{});break;case"people":import("./ad737738.js");break;case"families":import("./6797c312.js");break;case"places":import("./f48f62fa.js");break;case"sources":import("./0148146b.js");break;case"map":import("./72f95918.js");break;case"events":import("./2049d64f.js");break;case"tree":import("./dedaf50c.js");break;case"person":import("./ba46dba8.js");break;default:e="view404",import("./4315c15e.js")}t(Jt(e))},Jt=e=>({type:"UPDATE_PAGE",page:e}),Xt=e=>({type:"ACTIVE_PERSON",id:e}),Gt=e=>({type:"ACTIVE_EVENT",id:e}),Zt=e=>({type:"ACTIVE_PLACE",id:e}),Qt=e=>({type:"ACTIVE_SOURCE",id:e}),ei=e=>({type:"ACTIVE_PERSON_IF_EMPTY",id:e});let ti;const ii=e=>(t,i)=>{e!==i().app.offline&&t(e=>{e({type:"OPEN_SNACKBAR"}),window.clearTimeout(ti),ti=window.setTimeout(()=>e({type:"CLOSE_SNACKBAR"}),3e3)}),t({type:"UPDATE_OFFLINE",offline:e})},ni=e=>(t,i)=>{const n=i().app;n.drawerOpened===e||n.wideLayout&&!e||t({type:"UPDATE_DRAWER_STATE",opened:e})},ri=(e,t,i)=>async n=>{fetch(window.APIHOST+"/api/note/"+i,{method:"GET",headers:{Authorization:"Bearer "+e}}).then(e=>{var r=e.status;return 401==r?(n(si(t)),{}):(403!=r&&422!=r||n(di()),200!=r?{gramps_id:i,content:"error"}:e.json())}).then(e=>e).then(e=>{n(pi(e))}).catch(e=>{console.log(e)})},si=e=>async t=>{fetch(window.APIHOST+"/api/refresh",{method:"POST",headers:{Authorization:"Bearer "+e,Accept:"application/json","Content-Type":"application/json"}}).then(e=>{var i=e.status;return 403!=i&&422!=i||t(di()),e.json()}).then(e=>{let i=Date.now()+9e5;t(oi(e.access_token,i))}).catch(e=>{console.log(e)})},oi=(e,t)=>({type:"TOKEN",token:e,expires:t}),ai=(e,t)=>({type:"REFRESH_TOKEN",token:e,expires:t}),li=e=>({type:"TREE",tree:e}),pi=e=>({type:"NOTE",note:e}),di=()=>({type:"LOGOUT"}),ci=["Birth Date","Death Date","Relationships","People","Families","Dashboard","Given name","Surname","Marriage Date","Name","Father","Mother","Married","Event","Place","Description","Date","Type","Events","Parents","Siblings","Children","Home Page","Details","in","Spouses","Family Tree","Database overview","Number of individuals","Number of families","Number of events","Number of places","Places","Type","and","Primary","Family","Gallery","Map","Unknown","Custom","Country","State","County","City","Parish","Locality","Street","Province","Region","Department","Neighborhood","District","Borough","Municipality","Town","Village","Hamlet","Farm","Building","Number","Number of generations:","Zoom","Author","Publication info","Source","Sources","Citation","Citations","Repository","Repositories","Note","Notes","Media"],hi=e=>({type:"STRINGS",strings:e}),ui=!(window.ShadyDOM&&window.ShadyDOM.inUse);let fi,_i;function mi(e){fi=(!e||!e.shimcssproperties)&&(ui||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(_i=window.ShadyCSS.cssBuild);const yi=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?fi=window.ShadyCSS.nativeCss:window.ShadyCSS?(mi(window.ShadyCSS),window.ShadyCSS=void 0):mi(window.WebComponents&&window.WebComponents.flags);const gi=fi;class bi{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function vi(e){return function e(t,i){let n=i.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=n.trim(),t.parent){let e=t.previous?t.previous.end:t.parent.start;n=i.substring(e,t.start-1),n=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e}))}(n),n=n.replace(Ei.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=n.trim();t.atRule=0===r.indexOf(Ai),t.atRule?0===r.indexOf(ki)?t.type=Si.MEDIA_RULE:r.match(Ei.keyframesRule)&&(t.type=Si.KEYFRAMES_RULE,t.keyframesName=t.selector.split(Ei.multipleSpaces).pop()):0===r.indexOf(Pi)?t.type=Si.MIXIN_RULE:t.type=Si.STYLE_RULE}let r=t.rules;if(r)for(let t,n=0,s=r.length;n<s&&(t=r[n]);n++)e(t,i);return t}(function(e){let t=new bi;t.start=0,t.end=e.length;let i=t;for(let n=0,r=e.length;n<r;n++)if(e[n]===xi){i.rules||(i.rules=[]);let e=i,t=e.rules[e.rules.length-1]||null;i=new bi,i.start=n+1,i.parent=e,i.previous=t,e.rules.push(i)}else e[n]===Ci&&(i.end=n+1,i=i.parent||t);return t}(e=e.replace(Ei.comments,"").replace(Ei.port,"")),e)}function wi(e,t,i=""){let n="";if(e.cssText||e.rules){let i=e.rules;if(i&&!function(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(Pi)}(i))for(let e,r=0,s=i.length;r<s&&(e=i[r]);r++)n=wi(e,t,n);else n=t?e.cssText:function(e){return function(e){return e.replace(Ei.mixinApply,"").replace(Ei.varApply,"")}(e=function(e){return e.replace(Ei.customProp,"").replace(Ei.mixinProp,"")}(e))}(e.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(e.selector&&(i+=e.selector+" "+xi+"\n"),i+=n,e.selector&&(i+=Ci+"\n\n")),i}const Si={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},xi="{",Ci="}",Ei={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Pi="--",ki="@media",Ai="@",Ti=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Oi=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Ni=/@media\s(.*)/,Ii=new Set;function Ri(e){const t=e.textContent;if(!Ii.has(t)){Ii.add(t);const e=document.createElement("style");e.setAttribute("shady-unscoped",""),e.textContent=t,document.head.appendChild(e)}}function Di(e){return e.hasAttribute("shady-unscoped")}function Li(e,t){return e?("string"==typeof e&&(e=vi(e)),t&&Hi(e,t),wi(e,gi)):""}function Mi(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=vi(e.textContent)),e.__cssRules||null}function Hi(e,t,i,n){if(!e)return;let r=!1,s=e.type;if(n&&s===Si.MEDIA_RULE){let t=e.selector.match(Ni);t&&(window.matchMedia(t[1]).matches||(r=!0))}s===Si.STYLE_RULE?t(e):i&&s===Si.KEYFRAMES_RULE?i(e):s===Si.MIXIN_RULE&&(r=!0);let o=e.rules;if(o&&!r)for(let e,r=0,s=o.length;r<s&&(e=o[r]);r++)Hi(e,t,i,n)}window.ShadyDOM&&window.ShadyDOM.wrap;function $i(e){if(void 0!==_i)return _i;if(void 0===e.__cssBuild){const t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{const t=function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const e=t.textContent.trim().split(":");if("css-build"===e[0])return e[1]}return""}(e);""!==t&&function(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=t}}return e.__cssBuild||""}function zi(e){return""!==$i(e)}function Fi(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function Bi(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}const Vi=/;\s*/m,ji=/^\s*(initial)|(inherit)\s*$/,Ui=/\s*!important/;class Ki{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let qi=null;class Yi{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Ki}detectMixin(e){return function(e){const t=Oi.test(e)||Ti.test(e);return Oi.lastIndex=0,Ti.lastIndex=0,t}(e)}gatherStyles(e){const t=function(e){const t=[],i=e.querySelectorAll("style");for(let e=0;e<i.length;e++){const n=i[e];Di(n)?ui||(Ri(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}(e.content);if(t){const i=document.createElement("style");return i.textContent=t,e.content.insertBefore(i,e.content.firstChild),i}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));const i=e._gatheredStyle;return i?this.transformStyle(i,t):null}transformStyle(e,t=""){let i=Mi(e);return this.transformRules(i,t),e.textContent=Li(i),i}transformCustomStyle(e){let t=Mi(e);return Hi(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=Li(t),t}transformRules(e,t){this._currentElement=t,Hi(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(Ti,(e,i,n,r)=>this._produceCssProperties(e,i,n,r,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;const i={};let n=!1;return Hi(t,t=>{n=n||t===e,n||t.selector===e.selector&&Object.assign(i,this._cssTextToMap(t.parsedCssText))}),i}_consumeCssProperties(e,t){let i=null;for(;i=Oi.exec(e);){let n=i[0],r=i[1],s=i.index,o=s+n.indexOf("@apply"),a=s+n.length,l=e.slice(0,o),p=e.slice(a),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(l));let c=this._atApplyToCssProperties(r,d);e=`${l}${c}${p}`,Oi.lastIndex=s+c.length}return e}_atApplyToCssProperties(e,t){e=e.replace(Vi,"");let i=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){let r,s,o;this._currentElement&&(n.dependants[this._currentElement]=!0);const a=n.properties;for(r in a)o=t&&t[r],s=[r,": var(",e,"_-_",r],o&&s.push(",",o.replace(Ui,"")),s.push(")"),Ui.test(a[r])&&s.push(" !important"),i.push(s.join(""))}return i.join("; ")}_replaceInitialOrInherit(e,t){let i=ji.exec(t);return i&&(t=i[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){let i,n,r=e.split(";"),s={};for(let e,o,a=0;a<r.length;a++)e=r[a],e&&(o=e.split(":"),o.length>1&&(i=o[0].trim(),n=o.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(i,n)),s[i]=n));return s}_invalidateMixinEntry(e){if(qi)for(let t in e.dependants)t!==this._currentElement&&qi(t)}_produceCssProperties(e,t,i,n,r){if(i&&function e(t,i){let n=t.indexOf("var(");if(-1===n)return i(t,"","","");let r=function(e,t){let i=0;for(let n=t,r=e.length;n<r;n++)if("("===e[n])i++;else if(")"===e[n]&&0==--i)return n;return-1}(t,n+3),s=t.substring(n+4,r),o=t.substring(0,n),a=e(t.substring(r+1),i),l=s.indexOf(",");return-1===l?i(o,s.trim(),"",a):i(o,s.substring(0,l).trim(),s.substring(l+1).trim(),a)}(i,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;let s=this._consumeCssProperties(""+n,r),o=e.slice(0,e.indexOf("--")),a=this._cssTextToMap(s,!0),l=a,p=this._map.get(t),d=p&&p.properties;d?l=Object.assign(Object.create(d),a):this._map.set(t,l);let c,h,u=[],f=!1;for(c in l)h=a[c],void 0===h&&(h="initial"),d&&!(c in d)&&(f=!0),u.push(`${t}_-_${c}: ${h}`);return f&&this._invalidateMixinEntry(p),p&&(p.properties=l),i&&(o=`${e};${o}`),`${o}${u.join("; ")};`}}Yi.prototype.detectMixin=Yi.prototype.detectMixin,Yi.prototype.transformStyle=Yi.prototype.transformStyle,Yi.prototype.transformCustomStyle=Yi.prototype.transformCustomStyle,Yi.prototype.transformRules=Yi.prototype.transformRules,Yi.prototype.transformRule=Yi.prototype.transformRule,Yi.prototype.transformTemplate=Yi.prototype.transformTemplate,Yi.prototype._separator="_-_",Object.defineProperty(Yi.prototype,"invalidCallback",{get:()=>qi,set(e){qi=e}});const Wi={},Ji="_applyShimCurrentVersion",Xi="_applyShimNextVersion",Gi=Promise.resolve();function Zi(e){let t=Wi[e];t&&function(e){e[Ji]=e[Ji]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[Xi]=(e[Xi]||0)+1}(t)}function Qi(e){return e[Ji]===e[Xi]}let en,tn=null,nn=window.HTMLImports&&window.HTMLImports.whenReady||null;function rn(e){requestAnimationFrame((function(){nn?nn(e):(tn||(tn=new Promise(e=>{en=e}),"complete"===document.readyState?en():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&en()})),tn.then((function(){e&&e()})))}))}const sn="__shadyCSSCachedStyle";let on=null,an=null;class ln{constructor(){this.customStyles=[],this.enqueued=!1,rn(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&an&&(this.enqueued=!0,rn(an))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[sn])return e[sn];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const i=e[t];if(i[sn])continue;const n=this.getStyleForCustomStyle(i);if(n){const e=n.__appliedElement||n;on&&on(e),i[sn]=e}}return e}}ln.prototype.addCustomStyle=ln.prototype.addCustomStyle,ln.prototype.getStyleForCustomStyle=ln.prototype.getStyleForCustomStyle,ln.prototype.processStyles=ln.prototype.processStyles,Object.defineProperties(ln.prototype,{transformCallback:{get:()=>on,set(e){on=e}},validateCallback:{get:()=>an,set(e){let t=!1;an||(t=!0),an=e,t&&this.enqueueDocumentValidation()}}});const pn=new Yi;class dn{constructor(){this.customStyleInterface=null,pn.invalidCallback=Zi}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{pn.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),zi(e))return;Wi[t]=e;let i=pn.transformTemplate(e,t);e._styleAst=i}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let i=e[t],n=this.customStyleInterface.getStyleForCustomStyle(i);n&&pn.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&Fi(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=function(e){let t=e.localName,i="",n="";return t?t.indexOf("-")>-1?i=t:(n=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,n=e.extends),{is:i,typeExtension:n}}(e),i=Wi[t];if((!i||!zi(i))&&i&&!Qi(i)){(function(e){return!Qi(e)&&e._applyShimValidatingVersion===e[Xi]})(i)||(this.prepareTemplate(i,t),function(e){e._applyShimValidatingVersion=e[Xi],e._validating||(e._validating=!0,Gi.then((function(){e[Ji]=e[Xi],e._validating=!1})))}(i));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=i._styleAst,e.textContent=Li(i._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new dn;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,i,n){e.flushCustomStyles(),e.prepareTemplate(t,i)},prepareTemplateStyles(e,t,i){window.ShadyCSS.prepareTemplate(e,t,i)},prepareTemplateDom(e,t){},styleSubtree(t,i){e.flushCustomStyles(),e.styleSubtree(t,i)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue:(e,t)=>Bi(e,t),flushCustomStyles(){e.flushCustomStyles()},nativeCss:gi,nativeShadow:ui,cssBuild:_i,disableRuntime:yi},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=pn;let cn=0;const hn=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=cn++;return function(n){let r=n.__mixinSet;if(r&&r[i])return n;let s=t,o=s.get(n);if(!o){o=e(n),s.set(n,o);let t=Object.create(o.__mixinSet||r||null);t[i]=!0,o.__mixinSet=t}return o}};let un={},fn={};function _n(e,t){un[e]=fn[e.toLowerCase()]=t}function mn(e){return un[e]||fn[e.toLowerCase()]}class yn extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let i=mn(e);return i&&t?i.querySelector(t):i}return null}attributeChangedCallback(e,t,i,n){t!==i&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Et(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=kt(t)}return this.__assetpath}register(e){if(e=e||this.id){if(Rt&&void 0!==mn(e))throw _n(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,_n(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}yn.prototype.modules=un,customElements.define("dom-module",yn);function gn(e){return yn.import(e)}function bn(e){const t=Pt((e.body?e.body:e).textContent,e.baseURI),i=document.createElement("style");return i.textContent=t,i}function vn(e){const t=e.trim().split(/\s+/),i=[];for(let e=0;e<t.length;e++)i.push(...wn(t[e]));return i}function wn(e){const t=gn(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[];e.push(...xn(t));const i=t.querySelector("template");i&&e.push(...Sn(i,t.assetpath)),t._styles=e}return t._styles}function Sn(e,t){if(!e._styles){const i=[],n=e.content.querySelectorAll("style");for(let e=0;e<n.length;e++){let r=n[e],s=r.getAttribute("include");s&&i.push(...vn(s).filter((function(e,t,i){return i.indexOf(e)===t}))),t&&(r.textContent=Pt(r.textContent,t)),i.push(r)}e._styles=i}return e._styles}function xn(e){const t=[],i=e.querySelectorAll("link[rel=import][type~=css]");for(let e=0;e<i.length;e++){let n=i[e];if(n.import){const e=n.import,i=n.hasAttribute("shady-unscoped");if(i&&!e._unscopedStyle){const t=bn(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=bn(e));t.push(i?e._unscopedStyle:e._style)}}return t}function Cn(e){let t=gn(e);if(t&&void 0===t._cssText){let e=function(e){let t="",i=xn(e);for(let e=0;e<i.length;e++)t+=i[e].textContent;return t}(t),i=t.querySelector("template");i&&(e+=function(e,t){let i="";const n=Sn(e,t);for(let e=0;e<n.length;e++){let t=n[e];t.parentNode&&t.parentNode.removeChild(t),i+=t.textContent}return i}(i,t.assetpath)),t._cssText=e||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const En=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function Pn(e){return e.indexOf(".")>=0}function kn(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function An(e,t){return 0===e.indexOf(t+".")}function Tn(e,t){return 0===t.indexOf(e+".")}function On(e,t,i){return t+i.slice(e.length)}function Nn(e,t){return e===t||An(e,t)||Tn(e,t)}function In(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let n=e[i].toString().split(".");for(let e=0;e<n.length;e++)t.push(n[e])}return t.join(".")}return e}function Rn(e){return Array.isArray(e)?In(e).split("."):e.toString().split(".")}function Dn(e,t,i){let n=e,r=Rn(t);for(let e=0;e<r.length;e++){if(!n)return;n=n[r[e]]}return i&&(i.path=r.join(".")),n}function Ln(e,t,i){let n=e,r=Rn(t),s=r[r.length-1];if(r.length>1){for(let e=0;e<r.length-1;e++){if(n=n[r[e]],!n)return}n[s]=i}else n[t]=i;return r.join(".")}const Mn={},Hn=/-[a-z]/g,$n=/([A-Z])/g;function zn(e){return Mn[e]||(Mn[e]=e.indexOf("-")<0?e:e.replace(Hn,e=>e[1].toUpperCase()))}function Fn(e){return Mn[e]||(Mn[e]=e.replace($n,"-$1").toLowerCase())}let Bn=0,Vn=0,jn=[],Un=0,Kn=!1,qn=document.createTextNode("");new window.MutationObserver((function(){Kn=!1;const e=jn.length;for(let t=0;t<e;t++){let e=jn[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}jn.splice(0,e),Vn+=e})).observe(qn,{characterData:!0});const Yn={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},Wn={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},Jn={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},Xn={run:e=>(Kn||(Kn=!0,qn.textContent=Un++),jn.push(e),Bn++),cancel(e){const t=e-Vn;if(t>=0){if(!jn[t])throw new Error("invalid async handle: "+e);jn[t]=null}}},Gn=Xn,Zn=hn(e=>class extends e{static createProperties(e){const t=this.prototype;for(let i in e)i in t||t._createPropertyAccessor(i)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,i){let n=this.__data[e],r=this._shouldPropertyChange(e,t,n);return r&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=n),this.__data[e]=t,this.__dataPending[e]=t),r}_isPropertyPending(e){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Gn.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const e=this.__data,t=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(e,t,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,i)),this.__dataCounter--}_shouldPropertiesChange(e,t,i){return Boolean(t)}_propertiesChanged(e,t,i){}_shouldPropertyChange(e,t,i){return i!==t&&(i==i||t==t)}attributeChangedCallback(e,t,i,n){t!==i&&this._attributeToProperty(e,i),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,i,n)}_attributeToProperty(e,t,i){if(!this.__serializing){const n=this.__dataAttributes,r=n&&n[e]||e;this[r]=this._deserializeValue(t,i||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,i){this.__serializing=!0,i=arguments.length<3?this[e]:i,this._valueToNodeAttribute(this,i,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,i){const n=this._serializeValue(t);"class"!==i&&"name"!==i&&"slot"!==i||(e=En(e)),void 0===n?e.removeAttribute(i):e.setAttribute(i,n)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}}),Qn={};let er=HTMLElement.prototype;for(;er;){let e=Object.getOwnPropertyNames(er);for(let t=0;t<e.length;t++)Qn[e[t]]=!0;er=Object.getPrototypeOf(er)}const tr=hn(e=>{const t=Zn(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(zn(e[t]))}static attributeNameForProperty(e){return Fn(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const i=this;i.hasAttribute(e)||this._valueToNodeAttribute(i,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){let i;switch(t){case Object:try{i=JSON.parse(e)}catch(t){i=e}break;case Array:try{i=JSON.parse(e)}catch(t){i=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+e)}break;case Date:i=isNaN(e)?String(e):Number(e),i=new Date(i);break;default:i=super._deserializeValue(e,t)}return i}_definePropertyAccessor(e,t){!function(e,t){if(!Qn[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}}),ir={"dom-if":!0,"dom-repeat":!0};let nr=!1,rr=!1;function sr(e){(function(){if(!nr){nr=!0;const e=document.createElement("textarea");e.placeholder="a",rr=e.placeholder===e.textContent}return rr})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function or(e){let t=e.getAttribute("is");if(t&&ir[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;)e.setAttribute(i.attributes[0].name,i.attributes[0].value),i.removeAttribute(i.attributes[0].name)}return e}function ar(e,t){let i=t.parentInfo&&ar(e,t.parentInfo);if(!i)return e;for(let e=i.firstChild,n=0;e;e=e.nextSibling)if(t.parentIndex===n++)return e}function lr(e,t,i,n){n.id&&(t[n.id]=i)}function pr(e,t,i){if(i.events&&i.events.length)for(let n,r=0,s=i.events;r<s.length&&(n=s[r]);r++)e._addMethodEventListenerToNode(t,n.name,n.value,e)}function dr(e,t,i,n){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=n)}const cr=hn(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let i=e._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=Boolean(t),i.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,i,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,i){return this._parseTemplateNode(e.content,t,i)}static _parseTemplateNode(e,t,i){let n=!1,r=e;return"template"!=r.localName||r.hasAttribute("preserve-content")?"slot"===r.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(r,t,i)||n,sr(r),r.firstChild&&this._parseTemplateChildNodes(r,t,i),r.hasAttributes&&r.hasAttributes()&&(n=this._parseTemplateNodeAttributes(r,t,i)||n),n||i.noted}static _parseTemplateChildNodes(e,t,i){if("script"!==e.localName&&"style"!==e.localName)for(let n,r=e.firstChild,s=0;r;r=n){if("template"==r.localName&&(r=or(r)),n=r.nextSibling,r.nodeType===Node.TEXT_NODE){let i=n;for(;i&&i.nodeType===Node.TEXT_NODE;)r.textContent+=i.textContent,n=i.nextSibling,e.removeChild(i),i=n;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:s,parentInfo:i};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&s++}}static _parseTemplateNestedTemplate(e,t,i){let n=e,r=this._parseTemplate(n,t);return(r.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),i.templateInfo=r,!0}static _parseTemplateNodeAttributes(e,t,i){let n=!1,r=Array.from(e.attributes);for(let s,o=r.length-1;s=r[o];o--)n=this._parseTemplateNodeAttribute(e,t,i,s.name,s.value)||n;return n}static _parseTemplateNodeAttribute(e,t,i,n,r){return"on-"===n.slice(0,3)?(e.removeAttribute(n),i.events=i.events||[],i.events.push({name:n.slice(3),value:r}),!0):"id"===n&&(i.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let i=(t=t||this.constructor._parseTemplate(e)).nodeInfoList,n=t.content||e.content,r=document.importNode(n,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let s=r.nodeList=new Array(i.length);r.$={};for(let e,n=0,o=i.length;n<o&&(e=i[n]);n++){let i=s[n]=ar(r,e);lr(0,r.$,i,e),dr(0,i,e,t),pr(this,i,e)}return r=r,r}_addMethodEventListenerToNode(e,t,i,n){let r=function(e,t,i){return e=e._methodHost||e,function(t){e[i]?e[i](t,t.detail):console.warn("listener method `"+i+"` not defined")}}(n=n||e,0,i);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,i){e.addEventListener(t,i)}_removeEventListenerFromNode(e,t,i){e.removeEventListener(t,i)}});let hr=0;const ur=[],fr={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},_r=/[A-Z]/;function mr(e,t,i){let n=e[t];if(n){if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),i))for(let e in n){let t=n[e],i=n[e]=Array(t.length);for(let e=0;e<t.length;e++)i[e]=t[e]}}else n=e[t]={};return n}function yr(e,t,i,n,r,s){if(t){let o=!1;const a=hr++;for(let l in i){let p=t[r?kn(l):l];if(p)for(let t,d=0,c=p.length;d<c&&(t=p[d]);d++)t.info&&t.info.lastRun===a||r&&!br(l,t.trigger)||(t.info&&(t.info.lastRun=a),t.fn(e,l,i,n,t.info,r,s),o=!0)}return o}return!1}function gr(e,t,i,n,r,s,o,a){let l=!1,p=t[o?kn(n):n];if(p)for(let t,d=0,c=p.length;d<c&&(t=p[d]);d++)t.info&&t.info.lastRun===i||o&&!br(n,t.trigger)||(t.info&&(t.info.lastRun=i),t.fn(e,n,r,s,t.info,o,a),l=!0);return l}function br(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!An(i,e))||!(!t.wildcard||!Tn(i,e))}return!0}function vr(e,t,i,n,r){let s="string"==typeof r.method?e[r.method]:r.method,o=r.property;s?s.call(e,e.__data[o],n[o]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function wr(e,t,i){let n=kn(t);if(n!==t){return Sr(e,Fn(n)+"-changed",i[t],t),!0}return!1}function Sr(e,t,i,n){let r={value:i,queueProperty:!0};n&&(r.path=n),En(e).dispatchEvent(new CustomEvent(t,{detail:r}))}function xr(e,t,i,n,r,s){let o=(s?kn(t):t)!=t?t:null,a=o?Dn(e,o):e.__data[t];o&&void 0===a&&(a=i[t]),Sr(e,r.eventName,a,o)}function Cr(e,t,i,n,r){let s=e.__data[t];Nt&&(s=Nt(s,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,s)}function Er(e,t,i,n){let r=e[fr.COMPUTE];if(r)if(zt){hr++;const s=function(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[fr.COMPUTE];let n,{counts:r,ready:s,total:o}=function(e){const t=e.__computeInfo,i={},n=e[fr.COMPUTE],r=[];let s=0;for(let e in t){const n=t[e];s+=i[e]=n.args.filter(e=>!e.literal).length+(n.dynamicFn?1:0)}for(let e in n)t[e]||r.push(e);return{counts:i,ready:r,total:s}}(e);for(;n=s.shift();){t.set(n,t.size);const e=i[n];e&&e.forEach(e=>{const t=e.info.methodInfo;--o,0==--r[t]&&s.push(t)})}if(0!==o){const t=e;console.warn(`Computed graph for ${t.localName} incomplete; circular?`)}e.constructor.__orderedComputedDeps=t}return t}(e),o=[];for(let e in t)kr(e,r,o,s,n);let a;for(;a=o.shift();)Ar(e,"",t,i,a)&&kr(a.methodInfo,r,o,s,n);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;yr(e,r,s,i,n);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}const Pr=(e,t,i)=>{let n=0,r=t.length-1,s=-1;for(;n<=r;){const o=n+r>>1,a=i.get(t[o].methodInfo)-i.get(e.methodInfo);if(a<0)n=o+1;else{if(!(a>0)){s=o;break}r=o-1}}s<0&&(s=r+1),t.splice(s,0,e)},kr=(e,t,i,n,r)=>{const s=t[r?kn(e):e];if(s)for(let t=0;t<s.length;t++){const o=s[t];o.info.lastRun===hr||r&&!br(e,o.trigger)||(o.info.lastRun=hr,Pr(o.info,i,n))}};function Ar(e,t,i,n,r){let s=Lr(e,t,i,n,r);if(s===ur)return!1;let o=r.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):(e[o]=s,!1)}function Tr(e,t,i,n,r,s,o){i.bindings=i.bindings||[];let a={kind:n,target:r,parts:s,literal:o,isCompound:1!==s.length};if(i.bindings.push(a),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:e,negate:t}=a.parts[0];a.listenerEvent=e||Fn(r)+"-changed",a.listenerNegate=t}let l=t.nodeInfoList.length;for(let i=0;i<a.parts.length;i++){let n=a.parts[i];n.compoundIndex=i,Or(e,t,a,n,l)}}function Or(e,t,i,n,r){if(!n.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let s=n.dependencies,o={index:r,binding:i,part:n,evaluator:e};for(let i=0;i<s.length;i++){let n=s[i];"string"==typeof n&&(n=Fr(n),n.wildcard=!0),e._addTemplatePropertyEffect(t,n.rootProperty,{fn:Nr,info:o,trigger:n})}}}function Nr(e,t,i,n,r,s,o){let a=o[r.index],l=r.binding,p=r.part;if(s&&p.source&&t.length>p.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let n=i[t];t=On(p.source,l.target,t),a._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(a)}else{let o=r.evaluator._evaluateBinding(e,p,t,i,n,s);o!==ur&&function(e,t,i,n,r){r=function(e,t,i,n){if(i.isCompound){let r=e.__dataCompoundStorage[i.target];r[n.compoundIndex]=t,t=r.join("")}"attribute"!==i.kind&&("textContent"!==i.target&&("value"!==i.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,r,i,n),Nt&&(r=Nt(r,i.target,i.kind,t));if("attribute"==i.kind)e._valueToNodeAttribute(t,r,i.target);else{let n=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?t[fr.READ_ONLY]&&t[fr.READ_ONLY][n]||t._setPendingProperty(n,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,r)}}(e,a,l,p,o)}}function Ir(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,r=new Array(n.length);for(let e=0;e<n.length;e++)r[e]=n[e].literal;let s=t.target;i[s]=r,t.literal&&"property"==t.kind&&("className"===s&&(e=En(e)),e[s]=t.literal)}}function Rr(e,t,i){if(i.listenerEvent){let n=i.parts[0];e.addEventListener(i.listenerEvent,(function(e){!function(e,t,i,n,r){let s,o=e.detail,a=o&&o.path;a?(n=On(i,n,a),s=o&&o.value):s=e.currentTarget[i],s=r?!s:s,t[fr.READ_ONLY]&&t[fr.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,s,!0,Boolean(a))||o&&o.queueProperty||t._invalidateProperties()}(e,t,i.target,n.source,n.negate)}))}}function Dr(e,t,i,n,r,s){s=t.static||s&&("object"!=typeof s||s[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:s};for(let r,s=0;s<t.args.length&&(r=t.args[s]);s++)r.literal||e._addPropertyEffect(r.rootProperty,i,{fn:n,info:o,trigger:r});return s&&e._addPropertyEffect(t.methodName,i,{fn:n,info:o}),o}function Lr(e,t,i,n,r){let s=e._methodHost||e,o=s[r.methodName];if(o){let n=e._marshalArgs(r.args,t,i);return n===ur?ur:o.apply(s,n)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const Mr=[],Hr=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function $r(e){let t="";for(let i=0;i<e.length;i++){t+=e[i].literal||""}return t}function zr(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:Mr};if(t[2].trim()){return function(e,t){return t.args=e.map((function(e){let i=Fr(e);return i.literal||(t.static=!1),i}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),e)}return e}return null}function Fr(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=kn(t),i.structured=Pn(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function Br(e,t,i){let n=Dn(e,i);return void 0===n&&(n=t[i]),n}function Vr(e,t,i,n){const r={indexSplices:n};$t&&!e._overrideLegacyUndefined&&(t.splices=r),e.notifyPath(i+".splices",r),e.notifyPath(i+".length",t.length),$t&&!e._overrideLegacyUndefined&&(r.indexSplices=[])}function jr(e,t,i,n,r,s){Vr(e,t,i,[{index:n,addedCount:r,removed:s,object:t,type:"splice"}])}const Ur=hn(e=>{const t=cr(tr(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return fr}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Kr.length){let e=Kr[Kr.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[fr.READ_ONLY];for(let i in e)t&&t[i]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[i]=this.__dataPending[i]=e[i])}_addPropertyEffect(e,t,i){this._createPropertyAccessor(e,t==fr.READ_ONLY);let n=mr(this,t,!0)[e];n||(n=this[t][e]=[]),n.push(i)}_removePropertyEffect(e,t,i){let n=mr(this,t,!0)[e],r=n.indexOf(i);r>=0&&n.splice(r,1)}_hasPropertyEffect(e,t){let i=this[t];return Boolean(i&&i[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,fr.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,fr.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,fr.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,fr.COMPUTE)}_setPendingPropertyOrPath(e,t,i,n){if(n||kn(Array.isArray(e)?e[0]:e)!==e){if(!n){let i=Dn(this,e);if(!(e=Ln(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,i))return function(e,t,i){let n=e.__dataLinkedPaths;if(n){let r;for(let s in n){let o=n[s];Tn(s,t)?(r=On(s,o,t),e._setPendingPropertyOrPath(r,i,!0,!0)):Tn(o,t)&&(r=On(o,s,t),e._setPendingPropertyOrPath(r,i,!0,!0))}}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,i);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,i){i===e[t]&&"object"!=typeof i||("className"===t&&(e=En(e)),e[t]=i)}_setPendingProperty(e,t,i){let n=this.__dataHasPaths&&Pn(e),r=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[fr.NOTIFY]&&this[fr.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=i),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let i=e[t];i.__dataEnabled?i.__dataPending&&i._flushProperties():i._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let i in e)!t&&this[fr.READ_ONLY]&&this[fr.READ_ONLY][i]||this._setPendingPropertyOrPath(i,e[i],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,i){let n,r=this.__dataHasPaths;this.__dataHasPaths=!1,Er(this,t,i,r),n=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,i,r),this._flushClients(),yr(this,this[fr.REFLECT],t,i,r),yr(this,this[fr.OBSERVE],t,i,r),n&&function(e,t,i,n,r){let s,o,a=e[fr.NOTIFY],l=hr++;for(let o in t)t[o]&&(a&&gr(e,a,l,o,i,n,r)||r&&wr(e,o,i))&&(s=!0);s&&(o=e.__dataHost)&&o._invalidateProperties&&o._invalidateProperties()}(this,n,t,i,r),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,i){this[fr.PROPAGATE]&&yr(this,this[fr.PROPAGATE],e,t,i),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,i)}_runEffectsForTemplate(e,t,i,n){const r=(t,n)=>{yr(this,e.propertyEffects,t,i,n,e.nodeList);for(let r=e.firstChild;r;r=r.nextSibling)this._runEffectsForTemplate(r,t,i,n)};e.runEffects?e.runEffects(r,t,n):r(t,n)}linkPaths(e,t){e=In(e),t=In(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=In(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let i={path:""};Vr(this,Dn(this,e,i),i.path,t)}get(e,t){return Dn(t||this,e)}set(e,t,i){i?Ln(i,e,t):this[fr.READ_ONLY]&&this[fr.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let i={path:""},n=Dn(this,e,i),r=n.length,s=n.push(...t);return t.length&&jr(this,n,i.path,r,t.length,[]),s}pop(e){let t={path:""},i=Dn(this,e,t),n=Boolean(i.length),r=i.pop();return n&&jr(this,i,t.path,i.length,0,[r]),r}splice(e,t,i,...n){let r,s={path:""},o=Dn(this,e,s);return t<0?t=o.length-Math.floor(-t):t&&(t=Math.floor(t)),r=2===arguments.length?o.splice(t):o.splice(t,i,...n),(n.length||r.length)&&jr(this,o,s.path,t,n.length,r),r}shift(e){let t={path:""},i=Dn(this,e,t),n=Boolean(i.length),r=i.shift();return n&&jr(this,i,t.path,0,0,[r]),r}unshift(e,...t){let i={path:""},n=Dn(this,e,i),r=n.unshift(...t);return t.length&&jr(this,n,i.path,0,t.length,[]),r}notifyPath(e,t){let i;if(1==arguments.length){let n={path:""};t=Dn(this,e,n),i=n.path}else i=Array.isArray(e)?In(e):e;this._setPendingPropertyOrPath(i,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var i;this._addPropertyEffect(e,fr.READ_ONLY),t&&(this["_set"+(i=e,i[0].toUpperCase()+i.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,i){let n={property:e,method:t,dynamicFn:Boolean(i)};this._addPropertyEffect(e,fr.OBSERVE,{fn:vr,info:n,trigger:{name:e}}),i&&this._addPropertyEffect(t,fr.OBSERVE,{fn:vr,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let i=zr(e);if(!i)throw new Error("Malformed observer expression '"+e+"'");Dr(this,i,fr.OBSERVE,Lr,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,fr.NOTIFY,{fn:xr,info:{eventName:Fn(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,fr.REFLECT,{fn:Cr,info:{attrName:t}})}_createComputedProperty(e,t,i){let n=zr(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");const r=Dr(this,n,fr.COMPUTE,Ar,e,i);mr(this,"__computeInfo")[e]=r}_marshalArgs(e,t,i){const n=this.__data,r=[];for(let s=0,o=e.length;s<o;s++){let{name:o,structured:a,wildcard:l,value:p,literal:d}=e[s];if(!d)if(l){const e=Tn(o,t),r=Br(n,i,e?t:o);p={path:e?t:o,value:r,base:e?Dn(n,o):r}}else p=a?Br(n,i,o):n[o];if($t&&!this._overrideLegacyUndefined&&void 0===p&&e.length>1)return ur;r[s]=p}return r}static addPropertyEffect(e,t,i){this.prototype._addPropertyEffect(e,t,i)}static createPropertyObserver(e,t,i){this.prototype._createPropertyObserver(e,t,i)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,i){this.prototype._createComputedProperty(e,t,i)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let i=this.constructor._parseTemplate(e),n=this.__preBoundTemplateInfo==i;if(!n)for(let e in i.propertyEffects)this._createPropertyAccessor(e);if(t)if(i=Object.create(i),i.wasPreBound=n,this.__templateInfo){const t=e._parentTemplateInfo||this.__templateInfo,n=t.lastChild;i.parent=t,t.lastChild=i,i.previousSibling=n,n?n.nextSibling=i:t.firstChild=i}else this.__templateInfo=i;else this.__preBoundTemplateInfo=i;return i}static _addTemplatePropertyEffect(e,t,i){(e.hostProps=e.hostProps||{})[t]=!0;let n=e.propertyEffects=e.propertyEffects||{};(n[t]=n[t]||[]).push(i)}_stampTemplate(e,t){t=t||this._bindTemplate(e,!0),Kr.push(this);let i=super._stampTemplate(e,t);if(Kr.pop(),t.nodeList=i.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=i.firstChild;t;t=t.nextSibling)e.push(t)}return i.templateInfo=t,function(e,t){let{nodeList:i,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let r=n[t],s=i[t],o=r.bindings;if(o)for(let t=0;t<o.length;t++){let i=o[t];Ir(s,i),Rr(s,e,i)}s.__dataHost=e}}(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),i}_removeBoundDom(e){const t=e.templateInfo,{previousSibling:i,nextSibling:n,parent:r}=t;i?i.nextSibling=n:r&&(r.firstChild=n),n?n.previousSibling=i:r&&(r.lastChild=i),t.nextSibling=t.previousSibling=null;let s=t.childNodes;for(let e=0;e<s.length;e++){let t=s[e];En(En(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,i,n){let r=t._parseTemplateNode.call(this,e,i,n);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,i);t&&(e.textContent=$r(t)||" ",Tr(this,i,n,"text","textContent",t),r=!0)}return r}static _parseTemplateNodeAttribute(e,i,n,r,s){let o=this._parseBindings(s,i);if(o){let t=r,s="property";_r.test(r)?s="attribute":"$"==r[r.length-1]&&(r=r.slice(0,-1),s="attribute");let a=$r(o);return a&&"attribute"==s&&("class"==r&&e.hasAttribute("class")&&(a+=" "+e.getAttribute(r)),e.setAttribute(r,a)),"attribute"==s&&"disable-upgrade$"==t&&e.setAttribute(r,""),"input"===e.localName&&"value"===t&&e.setAttribute(t,""),e.removeAttribute(t),"property"===s&&(r=zn(r)),Tr(this,i,n,s,r,o,a),!0}return t._parseTemplateNodeAttribute.call(this,e,i,n,r,s)}static _parseTemplateNestedTemplate(e,i,n){let r=t._parseTemplateNestedTemplate.call(this,e,i,n);const s=e.parentNode,o=n.templateInfo,a="dom-if"===s.localName,l="dom-repeat"===s.localName;Ft&&(a||l)&&(s.removeChild(e),(n=n.parentInfo).templateInfo=o,n.noted=!0,r=!1);let p=o.hostProps;if(Bt&&a)p&&(i.hostProps=Object.assign(i.hostProps||{},p),Ft||(n.parentInfo.noted=!0));else{let e="{";for(let t in p){Tr(this,i,n,"property","_host_"+t,[{mode:e,source:t,dependencies:[t],hostProp:!0}])}}return r}static _parseBindings(e,t){let i,n=[],r=0;for(;null!==(i=Hr.exec(e));){i.index>r&&n.push({literal:e.slice(r,i.index)});let s=i[1][0],o=Boolean(i[2]),a=i[3].trim(),l=!1,p="",d=-1;"{"==s&&(d=a.indexOf("::"))>0&&(p=a.substring(d+2),a=a.substring(0,d),l=!0);let c=zr(a),h=[];if(c){let{args:e,methodName:i}=c;for(let t=0;t<e.length;t++){let i=e[t];i.literal||h.push(i)}let n=t.dynamicFns;(n&&n[i]||c.static)&&(h.push(i),c.dynamicFn=!0)}else h.push(a);n.push({source:a,mode:s,negate:o,customEvent:l,signature:c,dependencies:h,event:p}),r=Hr.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,i,n,r,s){let o;return o=t.signature?Lr(e,i,n,0,t.signature):i!=t.source?Dn(e,t.source):s&&Pn(i)?Dn(e,i):e.__data[i],t.negate&&(o=!o),o}}}),Kr=[];const qr=hn(e=>{const t=Zn(e);function i(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){const i=e.properties;i&&(t=function(e){const t={};for(let i in e){const n=e[i];t[i]="function"==typeof n?{type:n}:n}return t}(i))}e.__ownProperties=t}return e.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=i(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=n(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=i(this);this.__properties=Object.assign({},e&&e._properties,n(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r}),Yr=window.ShadyCSS&&window.ShadyCSS.cssBuild,Wr=hn(e=>{const t=qr(Ur(e));function i(e,t,i,n){i.computed&&(i.readOnly=!0),i.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,i.computed,n)),i.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!i.computed):!1===i.readOnly&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),i.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):!1===i.reflectToAttribute&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),i.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):!1===i.notify&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),i.observer&&e._createPropertyObserver(t,i.observer,n[i.observer]),e._addPropertyToAttributeMap(t)}function n(e,t,i,n){if(!Yr){const r=t.content.querySelectorAll("style"),s=Sn(t),o=function(e){let t=gn(e);return t?xn(t):[]}(i),a=t.content.firstElementChild;for(let i=0;i<o.length;i++){let r=o[i];r.textContent=e._processStyleText(r.textContent,n),t.content.insertBefore(r,a)}let l=0;for(let t=0;t<s.length;t++){let i=s[t],o=r[l];o!==i?(i=i.cloneNode(!0),o.parentNode.insertBefore(i,o)):l++,i.textContent=e._processStyleText(i.textContent,n)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,i),Ut&&Yr&&Tt){const i=t.content.querySelectorAll("style");if(i){let t="";Array.from(i).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}return class extends t{static get polymerElementVersion(){return"3.4.1"}static _finalizeClass(){t._finalizeClass.call(this);const e=((i=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",i))||(i.__ownObservers=i.hasOwnProperty(JSCompiler_renameProperty("observers",i))?i.observers:null),i.__ownObservers);var i;e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):Lt||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){const i=this.prototype;for(let n=0;n<e.length;n++)i._createMethodObserver(e[n],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){const e=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;this._template=void 0!==e?e:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function(e){let t=null;if(e&&(!Rt||Dt)&&(t=yn.import(e,"template"),Rt&&!t))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+e);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=this.importMeta;if(e)this._importPath=kt(e.url);else{const e=yn.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Ot,this.importPath=this.constructor.importPath;let e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let i in t){let n=t[i];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[i]=n)}}return e.__propertyDefaults}(this.constructor);if(e)for(let t in e){let i=e[t];if(this._canApplyPropertyDefault(t)){let e="function"==typeof i.value?i.value.call(this):i.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Pt(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const i=this.importPath;n(this,t,e,i?Et(i):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){const t=En(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:"open",shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Ht&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Et(this.importPath)),Et(e,t)}static _parseTemplateContent(e,i,n){return i.dynamicFns=i.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,i,n)}static _addTemplatePropertyEffect(e,i,n){return!Mt||i in this._properties||n.info.part.signature&&n.info.part.signature.static||n.info.part.hostProp||e.nestedTemplate||console.warn(`Property '${i}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,i,n)}}});class Jr{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Xr.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Xr.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,i){return e instanceof Jr?e._cancelAsync():e=new Jr,e.setConfig(t,i),e}}let Xr=new Set;const Gr=function(e){Xr.add(e)},Zr=function(){const e=Boolean(Xr.size);return Xr.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e};let Qr="string"==typeof document.head.style.touchAction,es="__polymerGesturesHandled",ts="__polymerGesturesTouchAction",is=["mousedown","mousemove","mouseup","click"],ns=[0,1,4,2],rs=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function ss(e){return is.indexOf(e)>-1}let os=!1;function as(e){if(!ss(e)&&"touchend"!==e)return Qr&&os&&It?{passive:!0}:void 0}!function(){try{let e=Object.defineProperty({},"passive",{get(){os=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();let ls=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const ps=[],ds={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},cs={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function hs(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];let i=e.getRootNode();if(e.id){let n=i.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<n.length;e++)t.push(n[e])}}return t}let us=function(e){let t=e.sourceCapabilities;var i;if((!t||t.firesTouchEvents)&&(e[es]={skip:!0},"click"===e.type)){let t=!1,n=bs(e);for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE)if("label"===n[e].localName)ps.push(n[e]);else if(i=n[e],ds[i.localName]){let i=hs(n[e]);for(let e=0;e<i.length;e++)t=t||ps.indexOf(i[e])>-1}if(n[e]===ms.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}};function fs(e){let t=ls?["click"]:is;for(let i,n=0;n<t.length;n++)i=t[n],e?(ps.length=0,document.addEventListener(i,us,!0)):document.removeEventListener(i,us,!0)}function _s(e){let t=e.type;if(!ss(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!rs&&(t=ns[e.which]||0),Boolean(1&t)}return 0===(void 0===e.button?0:e.button)}let ms={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function ys(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function gs(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){ms.mouse.mouseIgnoreJob||fs(!0),ms.mouse.target=bs(e)[0],ms.mouse.mouseIgnoreJob=Jr.debounce(ms.mouse.mouseIgnoreJob,Yn.after(2500),(function(){fs(),ms.mouse.target=null,ms.mouse.mouseIgnoreJob=null}))}),!!os&&{passive:!0});const bs=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],vs={},ws=[];function Ss(e){const t=bs(e);return t.length>0?t[0]:e.target}function xs(e){let t,i=e.type,n=e.currentTarget.__polymerGestures;if(!n)return;let r=n[i];if(r){if(!e[es]&&(e[es]={},"touch"===i.slice(0,5))){let t=(e=e).changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(ms.touch.id=t.identifier),ms.touch.id!==t.identifier)return;Qr||"touchstart"!==i&&"touchmove"!==i||function(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)ms.touch.x=t.clientX,ms.touch.y=t.clientY,ms.touch.scrollDecided=!1;else if("touchmove"===i){if(ms.touch.scrollDecided)return;ms.touch.scrollDecided=!0;let i=function(e){let t="auto",i=bs(e);for(let e,n=0;n<i.length;n++)if(e=i[n],e[ts]){t=e[ts];break}return t}(e),n=!1,r=Math.abs(ms.touch.x-t.clientX),s=Math.abs(ms.touch.y-t.clientY);e.cancelable&&("none"===i?n=!0:"pan-x"===i?n=s>r:"pan-y"===i&&(n=r>s)),n?e.preventDefault():Ts("track")}}(e)}if(t=e[es],!t.skip){for(let i,n=0;n<ws.length;n++)i=ws[n],r[i.name]&&!t[i.name]&&i.flow&&i.flow.start.indexOf(e.type)>-1&&i.reset&&i.reset();for(let n,s=0;s<ws.length;s++)n=ws[s],r[n.name]&&!t[n.name]&&(t[n.name]=!0,n[i](e))}}}function Cs(e,t,i){return!!vs[t]&&(function(e,t,i){let n=vs[t],r=n.deps,s=n.name,o=e.__polymerGestures;o||(e.__polymerGestures=o={});for(let t,i,n=0;n<r.length;n++)t=r[n],ls&&ss(t)&&"click"!==t||(i=o[t],i||(o[t]=i={_count:0}),0===i._count&&e.addEventListener(t,xs,as(t)),i[s]=(i[s]||0)+1,i._count=(i._count||0)+1);e.addEventListener(t,i),n.touchAction&&ks(e,n.touchAction)}(e,t,i),!0)}function Es(e,t,i){return!!vs[t]&&(function(e,t,i){let n=vs[t],r=n.deps,s=n.name,o=e.__polymerGestures;if(o)for(let t,i,n=0;n<r.length;n++)t=r[n],i=o[t],i&&i[s]&&(i[s]=(i[s]||1)-1,i._count=(i._count||1)-1,0===i._count&&e.removeEventListener(t,xs,as(t)));e.removeEventListener(t,i)}(e,t,i),!0)}function Ps(e){ws.push(e);for(let t=0;t<e.emits.length;t++)vs[e.emits[t]]=e}function ks(e,t){Qr&&e instanceof HTMLElement&&Xn.run(()=>{e.style.touchAction=t}),e[ts]=t}function As(e,t,i){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,En(e).dispatchEvent(n),n.defaultPrevented){let e=i.preventer||i.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Ts(e){let t=function(e){for(let t,i=0;i<ws.length;i++){t=ws[i];for(let i,n=0;n<t.emits.length;n++)if(i=t.emits[n],i===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function Os(e,t,i,n){t&&As(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(e){return Ts(e)}})}function Ns(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),r=Math.abs(e.y-i);return n>=5||r>=5}function Is(e,t,i){if(!t)return;let n,r=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],o=s.x-e.x,a=s.y-e.y,l=0;r&&(n=s.x-r.x,l=s.y-r.y),As(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:o,dy:a,ddx:n,ddy:l,sourceEvent:i,hover:function(){return function(e,t){let i=document.elementFromPoint(e,t),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let r=n;if(n=n.shadowRoot.elementFromPoint(e,t),r===n)break;n&&(i=n)}return i}(i.clientX,i.clientY)}})}function Rs(e,t,i){let n=Math.abs(t.clientX-e.x),r=Math.abs(t.clientY-e.y),s=Ss(i||t);!s||cs[s.localName]&&s.hasAttribute("disabled")||(isNaN(n)||isNaN(r)||n<=25&&r<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;let t=Ss(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),n=e.pageX,r=e.pageY;return!(n>=i.left&&n<=i.right&&r>=i.top&&r<=i.bottom)}return!1}(t))&&(e.prevent||As(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}Ps({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){gs(this.info)},mousedown:function(e){if(!_s(e))return;let t=Ss(e),i=this;ys(this.info,(function(e){_s(e)||(Os("up",t,e),gs(i.info))}),(function(e){_s(e)&&Os("up",t,e),gs(i.info)})),Os("down",t,e)},touchstart:function(e){Os("down",Ss(e),e.changedTouches[0],e)},touchend:function(e){Os("up",Ss(e),e.changedTouches[0],e)}}),Ps({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,gs(this.info)},mousedown:function(e){if(!_s(e))return;let t=Ss(e),i=this,n=function(e){let n=e.clientX,r=e.clientY;Ns(i.info,n,r)&&(i.info.state=i.info.started?"mouseup"===e.type?"end":"track":"start","start"===i.info.state&&Ts("tap"),i.info.addMove({x:n,y:r}),_s(e)||(i.info.state="end",gs(i.info)),t&&Is(i.info,t,e),i.info.started=!0)};ys(this.info,n,(function(e){i.info.started&&n(e),gs(i.info)})),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=Ss(e),i=e.changedTouches[0],n=i.clientX,r=i.clientY;Ns(this.info,n,r)&&("start"===this.info.state&&Ts("tap"),this.info.addMove({x:n,y:r}),Is(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=Ss(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Is(this.info,t,i))}}),Ps({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){_s(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){_s(e)&&Rs(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Rs(this.info,e.changedTouches[0],e)}});const Ds=hn(e=>class extends e{_addEventListenerToNode(e,t,i){Cs(e,t,i)||super._addEventListenerToNode(e,t,i)}_removeEventListenerFromNode(e,t,i){Es(e,t,i)||super._removeEventListenerFromNode(e,t,i)}}),Ls=/:host\(:dir\((ltr|rtl)\)\)/g,Ms=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Hs=/:dir\((?:ltr|rtl)\)/,$s=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),zs=[];let Fs=null,Bs="";function Vs(){Bs=document.documentElement.getAttribute("dir")}function js(e){if(!e.__autoDirOptOut){e.setAttribute("dir",Bs)}}function Us(){Vs(),Bs=document.documentElement.getAttribute("dir");for(let e=0;e<zs.length;e++)js(zs[e])}const Ks=hn(e=>{$s||Fs||(Vs(),Fs=new MutationObserver(Us),Fs.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=tr(e);class i extends t{static _processStyleText(e,i){return e=t._processStyleText.call(this,e,i),!$s&&Hs.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Ls,':host([dir="$1"])'),t=t.replace(Ms,':host([dir="$2"]) $1'),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Fs&&Fs.takeRecords().length&&Us(),zs.push(this),js(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=zs.indexOf(this);e>-1&&zs.splice(e,1)}}}return i.__activateDir=!1,i});let qs=!1,Ys=[],Ws=[];function Js(){qs=!0,requestAnimationFrame((function(){qs=!1,function(e){for(;e.length;)Xs(e.shift())}(Ys),setTimeout((function(){!function(e){for(let t=0,i=e.length;t<i;t++)Xs(e.shift())}(Ws)}))}))}function Xs(e){const t=e[0],i=e[1],n=e[2];try{i.apply(t,n)}catch(e){setTimeout(()=>{throw e})}}function Gs(e,t,i){qs||Js(),Ys.push([e,t,i])}function Zs(e,t,i){qs||Js(),Ws.push([e,t,i])}function Qs(){document.body.removeAttribute("unresolved")}function eo(e,t,i){return{index:e,removed:t,addedCount:i}}"interactive"===document.readyState||"complete"===document.readyState?Qs():window.addEventListener("DOMContentLoaded",Qs);function to(e,t,i,n,r,s){let o,a=0,l=0,p=Math.min(i-t,s-r);if(0==t&&0==r&&(a=function(e,t,i){for(let n=0;n<i;n++)if(!no(e[n],t[n]))return n;return i}(e,n,p)),i==e.length&&s==n.length&&(l=function(e,t,i){let n=e.length,r=t.length,s=0;for(;s<i&&no(e[--n],t[--r]);)s++;return s}(e,n,p-a)),r+=a,s-=l,(i-=l)-(t+=a)==0&&s-r==0)return[];if(t==i){for(o=eo(t,[],0);r<s;)o.removed.push(n[r++]);return[o]}if(r==s)return[eo(t,[],i-t)];let d=function(e){let t=e.length-1,i=e[0].length-1,n=e[t][i],r=[];for(;t>0||i>0;){if(0==t){r.push(2),i--;continue}if(0==i){r.push(3),t--;continue}let s,o=e[t-1][i-1],a=e[t-1][i],l=e[t][i-1];s=a<l?a<o?a:o:l<o?l:o,s==o?(o==n?r.push(0):(r.push(1),n=o),t--,i--):s==a?(r.push(3),t--,n=a):(r.push(2),i--,n=l)}return r.reverse(),r}(function(e,t,i,n,r,s){let o=s-r+1,a=i-t+1,l=new Array(o);for(let e=0;e<o;e++)l[e]=new Array(a),l[e][0]=e;for(let e=0;e<a;e++)l[0][e]=e;for(let i=1;i<o;i++)for(let s=1;s<a;s++)if(no(e[t+s-1],n[r+i-1]))l[i][s]=l[i-1][s-1];else{let e=l[i-1][s]+1,t=l[i][s-1]+1;l[i][s]=e<t?e:t}return l}(e,t,i,n,r,s));o=void 0;let c=[],h=t,u=r;for(let e=0;e<d.length;e++)switch(d[e]){case 0:o&&(c.push(o),o=void 0),h++,u++;break;case 1:o||(o=eo(h,[],0)),o.addedCount++,h++,o.removed.push(n[u]),u++;break;case 2:o||(o=eo(h,[],0)),o.addedCount++,h++;break;case 3:o||(o=eo(h,[],0)),o.removed.push(n[u]),u++}return o&&c.push(o),c}function io(e,t){return to(e,0,e.length,t,0,t.length)}function no(e,t){return e===t}function ro(e){return"slot"===e.localName}let so=class{static getFlattenedNodes(e){const t=En(e);return ro(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>ro(e)?En(e=e).assignedNodes({flatten:!0}):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ro(this._target)?this._listenSlots([this._target]):En(this._target).children&&(this._listenSlots(En(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ro(this._target)?this._unlistenSlots([this._target]):En(this._target).children&&(this._unlistenSlots(En(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,Xn.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=io(t,this._effectiveNodes);for(let t,n=0;n<i.length&&(t=i[n]);n++)for(let i,n=0;n<t.removed.length&&(i=t.removed[n]);n++)e.removedNodes.push(i);for(let n,r=0;r<i.length&&(n=i[r]);r++)for(let i=n.index;i<n.index+n.addedCount;i++)e.addedNodes.push(t[i]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];ro(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];ro(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};const oo=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Zr()}while(e||t)},ao=Element.prototype,lo=ao.matches||ao.matchesSelector||ao.mozMatchesSelector||ao.msMatchesSelector||ao.oMatchesSelector||ao.webkitMatchesSelector,po=function(e,t){return lo.call(e,t)};class co{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new so(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(En(this.node).contains(e))return!0;let t=e,i=e.ownerDocument;for(;t&&t!==i&&t!==this.node;)t=En(t).parentNode||En(t).host;return t===this.node}getOwnerRoot(){return En(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?En(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=En(this.node).assignedSlot;for(;t;)e.push(t),t=En(t).assignedSlot;return e}importNode(e,t){let i=this.node instanceof Document?this.node:this.node.ownerDocument;return En(i).importNode(e,t)}getEffectiveChildNodes(){return so.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),i=[];for(let n,r=0,s=t.length;r<s&&(n=t[r]);r++)n.nodeType===Node.ELEMENT_NODE&&po(n,e)&&i.push(n);return i}get activeElement(){let e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function ho(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}class uo{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}let fo=co;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(co.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=co.prototype[t])}),ho(e.prototype,["classList"]),fo=e,Object.defineProperties(uo.prototype,{localTarget:{get(){const e=this.event.currentTarget,t=e&&_o(e).getOwnerRoot(),i=this.path;for(let e=0;e<i.length;e++){const n=i[e];if(_o(n).getOwnerRoot()===t)return n}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(let i=0;i<t.length;i++){let n=t[i];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}(co.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),ho(co.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})}}(co.prototype,["textContent","innerHTML","className"]);const _o=function(e){if((e=e||document)instanceof fo)return e;if(e instanceof uo)return e;let t=e.__domApi;return t||(t=e instanceof Event?new uo(e):new fo(e),e.__domApi=t),t},mo=window.ShadyDOM,yo=window.ShadyCSS;function go(e,t){return En(e).getRootNode()===t}const bo=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]},vo=hn(e=>{const t=Wr(e);let i=bo(t);return class extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat("disable-upgrade")}_initializeProperties(){this.hasAttribute("disable-upgrade")?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,i,n){"disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,En(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,i,n)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}});let wo=window.ShadyCSS;const So=hn(e=>{const t=Ds(Wr(e)),i=Yr?t:Ks(t),n=bo(i),r={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,i){(this.__dataAttributes&&this.__dataAttributes[e]||"disable-upgrade"===e)&&this.attributeChangedCallback(e,t,i,null)}setAttribute(e,t){if(jt&&!this._legacyForceObservedAttributes){const i=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,i,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(jt&&!this._legacyForceObservedAttributes){const t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return jt&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype),this.__observedAttributes):n.call(this).concat("disable-upgrade")}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,i,n){t!==i&&("disable-upgrade"==e?this.__isUpgradeDisabled&&null==i&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,En(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,i,n),this.attributeChanged(e,t,i)))}attributeChanged(e,t,i){}_initializeProperties(){if(Lt&&this.hasAttribute("disable-upgrade"))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),jt&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const e=this.attributes;for(let t=0,i=e.length;t<i;t++){const i=e[t];this.__attributeReaction(i.name,null,i.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,i){this._propertyToAttribute(e,t,i)}serializeValueToAttribute(e,t,i){this._valueToNodeAttribute(i||this,e,t)}extend(e,t){if(!e||!t)return e||t;let i=Object.getOwnPropertyNames(t);for(let n,r=0;r<i.length&&(n=i[r]);r++){let i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i)}return e}mixin(e,t){for(let i in t)e[i]=t[i];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,i){i=i||{},t=null==t?{}:t;let n=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});n.detail=t;let r=i.node||this;return En(r).dispatchEvent(n),n}listen(e,t,i){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),r=n.get(e);r||(r={},n.set(e,r));let s=t+i;r[s]||(r[s]=this._addMethodEventListenerToNode(e,t,i,this))}unlisten(e,t,i){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),r=t+i,s=n&&n[r];s&&(this._removeEventListenerFromNode(e,t,s),n[r]=null)}setScrollDirection(e,t){ks(t||this,r[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=En(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){const e=_o(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return _o(this).getEffectiveChildNodes()}queryDistributedElements(e){return _o(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let i,n=0;i=e[n];n++)i.nodeType!==Node.COMMENT_NODE&&t.push(i.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?_o(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&En(this).contains(e)&&En(this).getRootNode()===En(e).getRootNode()}isLocalDescendant(e){return this.root===En(e).getRootNode()}scopeSubtree(e,t=!1){return function(e,t=!1){if(!mo||!yo)return null;if(!mo.handlesDynamicScoping)return null;const i=yo.ScopingShim;if(!i)return null;const n=i.scopeForNode(e),r=En(e).getRootNode(),s=e=>{if(!go(e,r))return;const t=Array.from(mo.nativeMethods.querySelectorAll.call(e,"*"));t.push(e);for(let e=0;e<t.length;e++){const s=t[e];if(!go(s,r))continue;const o=i.currentScopeForNode(s);o!==n&&(""!==o&&i.unscopeNode(s,o),i.scopeNode(s,n))}};if(s(e),t){const t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){const i=e[t];for(let e=0;e<i.addedNodes.length;e++){const t=i.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&s(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}return null}(e,t)}getComputedStyleValue(e){return wo.getComputedStyleValue(this,e)}debounce(e,t,i){return this._debouncers=this._debouncers||{},this._debouncers[e]=Jr.debounce(this._debouncers[e],i>0?Yn.after(i):Xn,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?Yn.run(e.bind(this),t):~Xn.run(e.bind(this))}cancelAsync(e){e<0?Xn.cancel(~e):Yn.cancel(e)}create(e,t){let i=document.createElement(e);if(t)if(i.setProperties)i.setProperties(t);else for(let e in t)i[e]=t[e];return i}elementMatches(e,t){return po(t||this,e)}toggleAttribute(e,t){let i=this;return 3===arguments.length&&(i=arguments[2]),1==arguments.length&&(t=!i.hasAttribute(e)),t?(En(i).setAttribute(e,""),!0):(En(i).removeAttribute(e),!1)}toggleClass(e,t,i){i=i||this,1==arguments.length&&(t=!i.classList.contains(e)),t?i.classList.add(e):i.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,i,n){n=n||this,this.transform("translate3d("+e+","+t+","+i+")",n)}arrayDelete(e,t){let i;if(Array.isArray(e)){if(i=e.indexOf(t),i>=0)return e.splice(i,1)}else{if(i=Dn(this,e).indexOf(t),i>=0)return this.splice(e,i,1)}return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return s.prototype.is="",s}),xo={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Co={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Eo=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Co);function Po(e,t){return Oo({},So(t),e)}function ko(e,t,i,n){!function(e,t,i){const n=e._noAccessors,r=Object.getOwnPropertyNames(e);for(let s=0;s<r.length;s++){let o=r[s];if(!(o in i))if(n)t[o]=e[o];else{let i=Object.getOwnPropertyDescriptor(e,o);i&&(i.configurable=!0,Object.defineProperty(t,o,i))}}}(t,e,n);for(let e in xo)t[e]&&(i[e]=i[e]||[],i[e].push(t[e]))}function Ao(e,t){for(const i in t){const n=e[i],r=t[i];e[i]=!("value"in r)&&n&&"value"in n?Object.assign({value:n.value},r):r}}const To=So(HTMLElement);function Oo(e,t,i){let n;const r={};class s extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(let e,t=0;t<n.length;t++)e=n[t],e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const t={};if(n)for(let e=0;e<n.length;e++)Ao(t,n[e].properties);return Ao(t,e.properties),t}static get observers(){let t=[];if(n)for(let e,i=0;i<n.length;i++)e=n[i],e.observers&&(t=t.concat(e.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();const e=r.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){const e=s.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",e))){e.__hasRegisterFinished=!0,super._registered(),Lt&&o(e);const t=Object.getPrototypeOf(this);let i=r.beforeRegister;if(i)for(let e=0;e<i.length;e++)i[e].call(t);if(i=r.registered,i)for(let e=0;e<i.length;e++)i[e].call(t)}}_applyListeners(){super._applyListeners();const e=r.listeners;if(e)for(let t=0;t<e.length;t++){const i=e[t];if(i)for(let e in i)this._addMethodEventListenerToNode(this,e,i[e])}}_ensureAttributes(){const e=r.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){const i=e[t];for(let e in i)this._ensureAttribute(e,i[e])}super._ensureAttributes()}ready(){super.ready();let e=r.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=r.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=r.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,i){super.attributeChanged();let n=r.attributeChanged;if(n)for(let r=0;r<n.length;r++)n[r].call(this,e,t,i)}}if(i){Array.isArray(i)||(i=[i]);let e=t.prototype.behaviors;n=function e(t,i,n){i=i||[];for(let r=t.length-1;r>=0;r--){let s=t[r];s?Array.isArray(s)?e(s,i):i.indexOf(s)<0&&(!n||n.indexOf(s)<0)&&i.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return i}(i,null,e),s.prototype.behaviors=e?e.concat(i):n}const o=t=>{n&&function(e,t,i){for(let n=0;n<t.length;n++)ko(e,t[n],i,Eo)}(t,n,r),ko(t,e,r,Co)};return Lt||o(s.prototype),s.generatedFrom=e,s}const No=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(To):To;return i=Oo(e,i,e.behaviors),i.is=i.prototype.is=e.is,i},Io=function(e){let t;return t="function"==typeof e?e:Io.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};function Ro(e,t,i,n,r){let s;r&&(s="object"==typeof i&&null!==i,s&&(n=e.__dataTemp[t]));let o=n!==i&&(n==n||i==i);return s&&o&&(e.__dataTemp[t]=i),o}Io.Class=No;const Do=hn(e=>class extends e{_shouldPropertyChange(e,t,i){return Ro(this,e,t,i,!0)}}),Lo=hn(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,i){return Ro(this,e,t,i,this.mutableData)}});Do._mutablePropertyChange=Ro;let Mo=null;function Ho(){return Mo}Ho.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Ho,writable:!0}});const $o=Ur(Ho),zo=Do($o);const Fo=Ur(class{});function Bo(e,t){for(let i=0;i<t.length;i++){let n=t[i];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),En(En(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const e=n.__polymerReplaced__;e&&En(En(e).parentNode).replaceChild(n,e)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class Vo extends Fo{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(e&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,i(e)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,i)}}_showHideChildren(e){Bo(e,this.children)}_setUnmanagedPropertyToNode(e,t,i){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(e,t,i)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}const jo=Do(Vo);function Uo(e){let t=e.__dataHost;return t&&t._methodHost||t}function Ko(e,t,i){let n=i.mutableData?jo:Vo;Jo.mixin&&(n=Jo.mixin(n));let r=class extends n{};return r.prototype.__templatizeOptions=i,r.prototype._bindTemplate(e),function(e,t,i,n){let r=i.hostProps||{};for(let t in n.instanceProps){delete r[t];let i=n.notifyInstanceProp;i&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Wo(t,i)})}if(n.forwardHostProp&&t.__dataHost)for(let t in r)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,i){e.__dataHost._setPendingPropertyOrPath("_host_"+t,i[t],!0,!0)}})}(r,e,t,i),r}function qo(e,t,i,n){let r=i.forwardHostProp;if(r&&t.hasHostProps){const s="template"==e.localName;let o=t.templatizeTemplateClass;if(!o){if(s){let e=i.mutableData?zo:$o;class n extends e{}o=t.templatizeTemplateClass=n}else{const i=e.constructor;class n extends i{}o=t.templatizeTemplateClass=n}let a=t.hostProps;for(let e in a)o.prototype._addPropertyEffect("_host_"+e,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Yo(e,r)}),o.prototype._createNotifyingProperty("_host_"+e);Mt&&n&&function(e,t,i){const n=i.constructor._properties,{propertyEffects:r}=e,{instanceProps:s}=t;for(let e in r)if(!(n[e]||s&&s[e])){const t=r[e];for(let i=0;i<t.length;i++){const{part:n}=t[i].info;if(!n.signature||!n.signature.static){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,i,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),s)!function(e,t){Mo=e,Object.setPrototypeOf(e,t.prototype),new t,Mo=null}(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const i=t.hostProps;for(let t in i)if(t="_host_"+t,t in e){const i=e[t];delete e[t],e.__data[t]=i}}}}function Yo(e,t){return function(e,i,n){t.call(e.__templatizeOwner,i.substring("_host_".length),n[i])}}function Wo(e,t){return function(e,i,n){t.call(e.__templatizeOwner,e,i,n[i])}}function Jo(e,t,i){if(Rt&&!Uo(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:Vo)._parseTemplate(e),r=n.templatizeInstanceClass;r||(r=Ko(e,n,i),n.templatizeInstanceClass=r);const s=Uo(e);qo(e,n,i,s);let o=class extends r{};return o.prototype._methodHost=s,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=n.hostProps,o=o,o}function Xo(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=En(t).parentNode;return null}let Go=!1;function Zo(){if(Lt&&!At){if(!Go){Go=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const Qo=Ds(Lo(Ur(HTMLElement)));customElements.define("dom-bind",class extends Qo{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),Rt)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,i,n){this.mutableData=!0}connectedCallback(){Zo()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){En(En(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),!e)throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});class ea{constructor(e){this.value=e.toString()}toString(){return this.value}}function ta(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof ea)return function(e){if(e instanceof ea)return e.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+e)}(e);throw new Error("non-template value passed to Polymer's html function: "+e)}const ia=function(e,...t){const i=document.createElement("template");return i.innerHTML=t.reduce((t,i,n)=>t+ta(i)+e[n+1],e[0]),i},na=Wr(HTMLElement),ra=Lo(na);class sa extends ra{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Vt,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),Zo()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=En(En(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){const e=this;let t=this.template=e._templateInfo?e:this.querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=Jo(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(e,t){let i=this.__instances;for(let n,r=0;r<i.length&&(n=i[r]);r++)n.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,i){if(Nn(this.as,t)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=i);let r=On(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(r,i)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){let t=e,i=this.__getMethodHost();return function(){return i[t].apply(i,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths){let t=this.__observePaths;for(let i=0;i<t.length;i++)0===e.indexOf(t[i])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||("items"===e.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Jr.debounce(this.__renderDebouncer,t>0?Yn.after(t):Xn,e.bind(this)),Gr(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),oo()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const t=this.__sortAndFilterItems(e),i=this.__calculateLimit(t.length);this.__updateInstances(e,i,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>this.__continueChunking())),this._setRenderedItemCount(this.__instances.length),Vt&&!this.notifyDomChange||this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=new Array(e.length);for(let i=0;i<e.length;i++)t[i]=i;return this.__filterFn&&(t=t.filter((t,i,n)=>this.__filterFn(e[t],i,n))),this.__sortFn&&t.sort((t,i)=>this.__sortFn(e[t],e[i])),t}__calculateLimit(e){let t=e;const i=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),n=Math.max(t-i,0),this.__chunkCount=n||1):(n=Math.min(Math.max(e-i,0),this.__chunkCount),t=Math.min(i+n,e)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,i){const n=this.__itemsIdxToInstIdx={};let r;for(r=0;r<t;r++){let t=this.__instances[r],s=i[r],o=e[s];n[s]=r,t?(t._setPendingProperty(this.as,o),t._setPendingProperty(this.indexAs,r),t._setPendingProperty(this.itemsIndexAs,s),t._flushProperties()):this.__insertInstance(o,r,s)}for(let e=this.__instances.length-1;e>=r;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];const i=En(t.root);for(let e=0;e<t.children.length;e++){let n=t.children[e];i.appendChild(n)}return t}__attachInstance(e,t){let i=this.__instances[e];t.insertBefore(i.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,i){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=i,new this.__ctor(n)}__insertInstance(e,t,i){const n=this.__stampInstance(e,t,i);let r=this.__instances[t+1],s=r?r.children[0]:this;return En(En(this).parentNode).insertBefore(n.root,s),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let i=e.slice(6),n=i.indexOf("."),r=n<0?i:i.substring(0,n);if(r==parseInt(r,10)){let e=n<0?"":i.substring(n+1);this.__handleObservedPaths(e);let s=this.__itemsIdxToInstIdx[r],o=this.__instances[s];if(o){let i=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(i,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Xo(this.template,e)}}customElements.define(sa.is,sa);class oa extends na{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Jr.debounce(this.__renderDebouncer,Xn,()=>this.__render()),Gr(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=En(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||En(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Zo()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let t=e._templateInfo?e:En(e).querySelector("template");if(!t){let e=new MutationObserver(()=>{if(!En(this).querySelector("template"))throw new Error("dom-if requires a <template> child");e.disconnect(),this.__render()});return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=En(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length){if(En(this).previousSibling!==t[t.length-1])for(let i,n=0;n<t.length&&(i=t[n]);n++)En(e).insertBefore(i,this)}}else{if(!e)return!1;if(!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){oo()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),Vt&&!this.notifyDomChange||this.if==this._lastIf||(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}const aa=Bt?class extends oa{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const t=this.__dataHost||this;if(Rt&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const i=t._bindTemplate(this.__template,!0);i.runEffects=(e,t,i)=>{let n=this.__syncInfo;if(this.if)n&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(n.changedProps,t)),e(t,i);else if(this.__instance)if(n||(n=this.__syncInfo={runEffects:e,changedProps:{}}),i)for(const e in t){const t=kn(e);n.changedProps[t]=this.__dataHost[t]}else Object.assign(n.changedProps,t)},this.__instance=t._stampTemplate(this.__template,i),En(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,Bo(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}:class extends oa{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Jo(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[kn(e)]=!0))}})),this.__instance=new this.__ctor,En(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=En(e[0]).parentNode;if(t){t=En(t);for(let i,n=0;n<e.length&&(i=e[n]);n++)t.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}};customElements.define(aa.is,aa);let la=hn(e=>{let t=Wr(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let i=t.path;if(i==JSCompiler_renameProperty("items",this)){let i=t.base||[],n=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),n){let e=io(i,n);this.__applySplices(e)}this.__lastItems=i,this.__lastMulti=e}else if(t.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(t.value.indexSplices);else{let e=i.slice((JSCompiler_renameProperty("items",this)+".").length),t=parseInt(e,10);e.indexOf(".")<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let i=0;i<e.length;i++){let n=e[i];t.forEach((e,i)=>{e<n.index||(e>=n.index+n.removed.length?t.set(i,e+n.addedCount-n.removed.length):t.set(i,-1))});for(let e=0;e<n.addedCount;e++){let i=n.index+e;t.has(this.items[i])&&t.set(this.items[i],i)}}this.__updateLinks();let i=0;t.forEach((e,n)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null,t.delete(n)):i++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((i,n)=>{t==e++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){let i;this.__selectedMap.delete(e),this.multi&&(i=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),i,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(na);class pa extends la{static get is(){return"array-selector"}static get template(){return null}}customElements.define(pa.is,pa);const da=new ln;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){da.processStyles(),Fi(e,t)},styleElement(e){da.processStyles()},styleDocument(e){da.processStyles(),Fi(document.body,e)},getComputedStyleValue:(e,t)=>Bi(e,t),flushCustomStyles(){},nativeCss:gi,nativeShadow:ui,cssBuild:_i,disableRuntime:yi}),window.ShadyCSS.CustomStyleInterface=da;const ca=window.ShadyCSS.CustomStyleInterface;class ha extends HTMLElement{constructor(){super(),this._style=null,ca.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=function(e){let t=e.trim().split(/\s+/),i="";for(let e=0;e<t.length;e++)i+=Cn(t[e]);return i}(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}let ua;window.customElements.define("custom-style",ha),ua=Do._mutablePropertyChange;const fa={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,i){return ua(this,e,t,i,this.mutableData)}},_a=So(HTMLElement).prototype,ma=ia(e||(e=we`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`));ma.setAttribute("style","display: none;"),document.head.appendChild(ma.content);const ya=document.createElement("template");ya.setAttribute("style","display: none;"),ya.innerHTML="<dom-module id=\"paper-spinner-styles\">\n  <template>\n    <style>\n      /*\n      /**************************/\n      /* STYLES FOR THE SPINNER */\n      /**************************/\n\n      /*\n       * Constants:\n       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n       *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n       *                                should rotate each time, 216 gives us a\n       *                                5 pointed star shape (it's 360/5 * 3).\n       *                                For a 7 pointed star, we might do\n       *                                360/7 * 3 = 154.286)\n       *      SHRINK_TIME = 400ms\n       */\n\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        /* ARCTIME */\n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        /* 4 * ARCTIME */\n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        /* SHRINK_TIME */\n        --paper-spinner-cooldown-duration: 400ms;\n      }\n\n      #spinnerContainer {\n        width: 100%;\n        height: 100%;\n\n        /* The spinner does not have any contents that would have to be\n         * flipped if the direction changes. Always use ltr so that the\n         * style works out correctly in both cases. */\n        direction: ltr;\n      }\n\n      #spinnerContainer.active {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n      }\n\n      @-webkit-keyframes container-rotate {\n        to { -webkit-transform: rotate(360deg) }\n      }\n\n      @keyframes container-rotate {\n        to { transform: rotate(360deg) }\n      }\n\n      .spinner-layer {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n      }\n\n      .layer-1 {\n        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n      }\n\n      .layer-2 {\n        color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n      }\n\n      .layer-3 {\n        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n      }\n\n      .layer-4 {\n        color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n      }\n\n      /**\n       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n       *\n       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n       * guarantee that the animation will start _exactly_ after that value. So we avoid using\n       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it\n       * seems).\n       */\n      .active .spinner-layer {\n        -webkit-animation-name: fill-unfill-rotate;\n        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .active .spinner-layer.layer-1 {\n        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-2 {\n        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-3 {\n        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-4 {\n        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n      }\n\n      @-webkit-keyframes fill-unfill-rotate {\n        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @keyframes fill-unfill-rotate {\n        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @-webkit-keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @-webkit-keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      .circle-clipper {\n        display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      /**\n       * Patch the gap that appear between the two adjacent div.circle-clipper while the\n       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n       */\n      .spinner-layer::after {\n        content: '';\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n      }\n\n      .spinner-layer::after,\n      .circle-clipper .circle {\n        box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n      }\n\n      .circle-clipper .circle {\n        bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n      }\n\n      .circle-clipper.left .circle {\n        left: 0;\n        border-right-color: transparent !important;\n        -webkit-transform: rotate(129deg);\n        transform: rotate(129deg);\n      }\n\n      .circle-clipper.right .circle {\n        left: -100%;\n        border-left-color: transparent !important;\n        -webkit-transform: rotate(-129deg);\n        transform: rotate(-129deg);\n      }\n\n      .active .gap-patch::after,\n      .active .circle-clipper .circle {\n        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n      }\n\n      .active .circle-clipper.left .circle {\n        -webkit-animation-name: left-spin;\n        animation-name: left-spin;\n      }\n\n      .active .circle-clipper.right .circle {\n        -webkit-animation-name: right-spin;\n        animation-name: right-spin;\n      }\n\n      @-webkit-keyframes left-spin {\n        0% { -webkit-transform: rotate(130deg) }\n        50% { -webkit-transform: rotate(-5deg) }\n        to { -webkit-transform: rotate(130deg) }\n      }\n\n      @keyframes left-spin {\n        0% { transform: rotate(130deg) }\n        50% { transform: rotate(-5deg) }\n        to { transform: rotate(130deg) }\n      }\n\n      @-webkit-keyframes right-spin {\n        0% { -webkit-transform: rotate(-130deg) }\n        50% { -webkit-transform: rotate(5deg) }\n        to { -webkit-transform: rotate(-130deg) }\n      }\n\n      @keyframes right-spin {\n        0% { transform: rotate(-130deg) }\n        50% { transform: rotate(5deg) }\n        to { transform: rotate(-130deg) }\n      }\n\n      #spinnerContainer.cooldown {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      @-webkit-keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(ya.content);const ga={properties:{active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function(e,t){return[e||t?"active":"",t?"cooldown":""].join(" ")},__activeChanged:function(e,t){this.__setAriaHidden(!e),this.__coolingDown=!e&&t},__altChanged:function(e){"loading"===e?this.alt=this.getAttribute("aria-label")||e:(this.__setAriaHidden(""===e),this.setAttribute("aria-label",e))},__setAriaHidden:function(e){e?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")},__reset:function(){this.active=!1,this.__coolingDown=!1}},ba=ia(t||(t=we`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`));ba.setAttribute("strip-whitespace",""),Io({_template:ba,is:"paper-spinner-lite",behaviors:[ga]});const va=Io({_template:ia(i||(i=we`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`)),is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},timeout:{type:Number,value:150},_text:{type:String,value:""}},created:function(){va.instance||(va.instance=this),document.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),this.timeout)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});va.instance=null,va.requestAvailability=function(){va.instance||(va.instance=document.createElement("iron-a11y-announcer")),document.body?document.body.appendChild(va.instance):document.addEventListener("load",(function(){document.body.appendChild(va.instance)}))};class wa{constructor(e){wa[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return wa.types[e]&&wa.types[e][t]}set value(e){var t=this.type,i=this.key;t&&i&&(t=wa.types[t]=wa.types[t]||{},null==e?delete t[i]:t[i]=e)}get list(){if(this.type){var e=wa.types[this.type];return e?Object.keys(e).map((function(e){return Sa[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}wa[" "]=function(){},wa.types={};var Sa=wa.types;Io({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var n=new wa({type:e,key:t});return void 0!==i&&i!==n.value?n.value=i:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new wa({type:this.type,key:e}).value}});let xa=null;const Ca={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){xa=new wa({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return xa&&xa.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return void 0===e&&void 0!==this.value?this.invalid=!this._getValidity(this.value):this.invalid=!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};if(Io({_template:ia(n||(n=we`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`)),is:"iron-input",behaviors:[Ca],properties:{bindValue:{type:String,value:""},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){va.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=_o(this).observeNodes(function(e){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(_o(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":e=/[0-9.,e-]/}return e},_bindValueChanged:function(e,t){t&&(void 0===e?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){this.allowedPattern&&!this._patternAlreadyChecked&&(this._checkPatternValidity()||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput));this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,i=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||e.keyCode>32&&e.keyCode<41||e.keyCode>111&&e.keyCode<124;return!(t||0==e.charCode&&i)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var i=String.fromCharCode(e.charCode);this._isPrintable(e)&&!t.test(i)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+i+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=Ca.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}}),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}const Ea=ia(r||(r=we`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`));Ea.setAttribute("style","display: none;"),document.head.appendChild(Ea.content);const Pa={attached:function(){this.fire("addon-attached")},update:function(e){}};Io({_template:ia(s||(s=we`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`)),is:"paper-input-char-counter",behaviors:[Pa],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}});const ka=ia(o||(o=we`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`));ka.setAttribute("style","display: none;"),document.head.appendChild(ka.content);var Aa=document.createElement("style");Aa.textContent="[hidden] { display: none !important; }",document.head.appendChild(Aa);const Ta=ia(a||(a=we`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`));Ta.setAttribute("style","display: none;"),document.head.appendChild(Ta.content);const Oa=ia(l||(l=we`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`));Oa.setAttribute("style","display: none;"),document.head.appendChild(Oa.content),Io({_template:ia(p||(p=we`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`)),is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return zn(this.attrForValue)},get _inputElement(){return _o(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;t||0===t||"number"===e.type&&!e.checkValidity()?this._inputHasContent=!0:this._inputHasContent=!1,this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t);this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,i=0;t=this._addons[i];i++)t.update(e)},_computeInputContentClass:function(e,t,i,n,r){var s="input-content";if(e)r&&(s+=" label-is-hidden"),n&&(s+=" is-invalid");else{var o=this.querySelector("label");t||r?(s+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?s+=" is-invalid":i&&(s+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),n&&(s+=" is-invalid"))}return i&&(s+=" focused"),s},_computeUnderlineClass:function(e,t){var i="underline";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(e,t){var i="add-on-content";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i}}),Io({_template:ia(d||(d=we`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`)),is:"paper-input-error",behaviors:[Pa],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}});const Na={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};var Ia={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Ra={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Da={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},La=/[a-z0-9*]/,Ma=/U\+/,Ha=/^arrow/,$a=/^space(bar)?/,za=/^escape$/;function Fa(e,t){var i="";if(e){var n=e.toLowerCase();" "===n||$a.test(n)?i="space":za.test(n)?i="esc":1==n.length?t&&!La.test(n)||(i=n):i=Ha.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return i}function Ba(e,t){return e.key?Fa(e.key,t):e.detail&&e.detail.key?Fa(e.detail.key,t):(i=e.keyIdentifier,n="",i&&(i in Ia?n=Ia[i]:Ma.test(i)?(i=parseInt(i.replace("U+","0x"),16),n=String.fromCharCode(i).toLowerCase()):n=i.toLowerCase()),n||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):Ra[e]),t}(e.keyCode)||"");var i,n}function Va(e,t){return Ba(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function ja(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var i=t.split(":"),n=i[0],r=i[1];return n in Da?(e[Da[n]]=!0,e.hasModifiers=!0):(e.key=n,e.event=r||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}const Ua={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=ja(t),n=0;n<i.length;++n)if(Va(i[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var i=e[0].hasModifiers;return i===t[0].hasModifiers?0:i?-1:1}))},_addKeyBinding:function(e,t){ja(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,i,n;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],i=e[1],n=e[2],t.removeEventListener(i,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var n=e[i][0],r=e[i][1];if(Va(n,t)&&(this._triggerKeyHandler(n,r,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var n=Object.create(e);n.keyboardEvent=i;var r=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,r),r.defaultPrevented&&i.preventDefault()}},Ka={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}},qa={NextLabelID:1,NextAddonID:1,NextInputID:1},Ya={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!na&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e=e?e+" "+t:t},_onAddonAttached:function(e){var t=_o(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var i="paper-input-add-on-"+qa.NextAddonID++;t.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){Ka._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async((function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1}),1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch(t){this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e,t=_o(this.root).querySelector("label");t?(t.id?e=t.id:(e="paper-input-label-"+qa.NextLabelID++,t.id=e),this._ariaLabelledBy=e):this._ariaLabelledBy=""},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+qa.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}},Wa=[Ka,Ua,Ya];Io({is:"paper-input",_template:ia(c||(c=we`
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;
      }

      /* In 1.x, the <input> is distributed to paper-input-container, which styles it.
      In 2.x the <iron-input> is distributed to paper-input-container, which styles
      it, but in order for this to work correctly, we need to reset some
      of the native input's properties to inherit (from the iron-input) */
      iron-input > input {
        @apply --paper-input-container-shared-input-style;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        letter-spacing: inherit;
        word-spacing: inherit;
        line-height: inherit;
        text-shadow: inherit;
        color: inherit;
        cursor: inherit;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
      <iron-input bind-value="{{value}}" slot="input" class="input-element" id$="[[_inputId]]" maxlength$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
        <input aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" disabled$="[[disabled]]" title$="[[title]]" type$="[[type]]" pattern$="[[pattern]]" required$="[[required]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" min$="[[min]]" max$="[[max]]" step$="[[step]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" list$="[[list]]" size$="[[size]]" autocapitalize$="[[autocapitalize]]" autocorrect$="[[autocorrect]]" on-change="_onChange" tabindex$="[[tabIndex]]" autosave$="[[autosave]]" results$="[[results]]" accept$="[[accept]]" multiple$="[[multiple]]" role$="[[inputRole]]" aria-haspopup$="[[inputAriaHaspopup]]">
      </iron-input>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  `)),behaviors:[Wa,Na],properties:{value:{type:String},inputRole:{type:String,value:void 0},inputAriaHaspopup:{type:String,value:void 0}},get _focusableElement(){return this.inputElement._inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),this.inputElement.bindValue&&this.$.container._handleValueAndAutoValidate(this.inputElement)}});const Ja=ia(h||(h=we`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`));Ja.setAttribute("style","display: none;"),document.head.appendChild(Ja.content);const Xa=ia(u||(u=we`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`));Xa.setAttribute("style","display: none;"),document.head.appendChild(Xa.content);const Ga={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,i=_o(t).localTarget;this.isLightDescendant(i)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,i=_o(t).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Za=[Ua,Ga];var Qa={distance:function(e,t,i,n){var r=e-i,s=t-n;return Math.sqrt(r*r+s*s)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function el(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function tl(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),_o(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}el.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var i=Qa.distance(e,t,0,0),n=Qa.distance(e,t,this.width,0),r=Qa.distance(e,t,0,this.height),s=Qa.distance(e,t,this.width,this.height);return Math.max(i,n,r,s)}},tl.MAX_RADIUS=300,tl.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=Qa.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?Qa.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,i=1.1*Math.min(Math.sqrt(e+t),tl.MAX_RADIUS)+5,n=1.1-i/tl.MAX_RADIUS*.2,r=this.mouseInteractionSeconds/n,s=i*(1-Math.pow(80,-r));return Math.abs(s)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,tl.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,tl.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new el(this.element)},draw:function(){var e,t,i;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=Qa.now(),this.center?(this.xStart=t,this.yStart=i,this.slideDistance=Qa.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=i,this.slideDistance=Qa.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=Qa.now())},remove:function(){_o(_o(this.waveContainer).parentNode).removeChild(this.waveContainer)}},Io({_template:ia(f||(f=we`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`)),is:"paper-ripple",behaviors:[Ua],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){11==_o(this).parentNode.nodeType?this.keyEventTarget=_o(this).getOwnerRoot().host:this.keyEventTarget=_o(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async((function(){this.upAction()}),1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach((function(t){t.upAction(e)})),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new tl(this);return _o(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)(t=this.ripples[e]).draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0!==t&&(e?this.downAction():this.upAction())}});const il={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){Ga._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&_o(t).appendChild(this._ripple),e){var i=_o(this._rippleContainer||this),n=_o(e).rootTarget;i.deepContains(n)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){return document.createElement("paper-ripple")},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}},nl={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){Ga._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){Ga._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},rl=[Za,Ka,il,nl],sl=ia(_||(_=we`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`));sl.setAttribute("strip-whitespace",""),Io({_template:sl,is:"paper-button",behaviors:[rl],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?nl._calculateElevation.apply(this):this._setElevation(0)}});var ol=new Set;const al={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(ol.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():At||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=_o(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(ol.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?ol.delete(this):ol.add(this)}};Io({_template:ia(m||(m=we`
    <style>
      :host {
        display: block;
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        -webkit-transition-duration: var(--iron-collapse-transition-duration, 300ms);
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`)),is:"iron-collapse",behaviors:[al],properties:{horizontal:{type:Boolean,value:!1,observer:"_horizontalChanged"},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},transitioning:{type:Boolean,notify:!0,readOnly:!0},noAnimation:{type:Boolean},_desiredSize:{type:String,value:""}},get dimension(){return this.horizontal?"width":"height"},get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"},get _dimensionMaxCss(){return this.horizontal?"max-width":"max-height"},hostAttributes:{role:"group","aria-hidden":"true"},listeners:{transitionend:"_onTransitionEnd"},toggle:function(){this.opened=!this.opened},show:function(){this.opened=!0},hide:function(){this.opened=!1},updateSize:function(e,t){e="auto"===e?"":e;var i=t&&!this.noAnimation&&this.isAttached&&this._desiredSize!==e;if(this._desiredSize=e,this._updateTransition(!1),i){var n=this._calcSize();""===e&&(this.style[this._dimensionMax]="",e=this._calcSize()),this.style[this._dimensionMax]=n,this.scrollTop=this.scrollTop,this._updateTransition(!0),i=e!==n}this.style[this._dimensionMax]=e,i||this._transitionEnd()},enableTransition:function(e){_a._warn("`enableTransition()` is deprecated, use `noAnimation` instead."),this.noAnimation=!e},_updateTransition:function(e){this.style.transitionDuration=e&&!this.noAnimation?"":"0s"},_horizontalChanged:function(){this.style.transitionProperty=this._dimensionMaxCss;var e="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this.style[e]="",this.updateSize(this.opened?"auto":"0px",!1)},_openedChanged:function(){this.setAttribute("aria-hidden",!this.opened),this._setTransitioning(!0),this.toggleClass("iron-collapse-closed",!1),this.toggleClass("iron-collapse-opened",!1),this.updateSize(this.opened?"auto":"0px",!0),this.opened&&this.focus()},_transitionEnd:function(){this.style[this._dimensionMax]=this._desiredSize,this.toggleClass("iron-collapse-closed",!this.opened),this.toggleClass("iron-collapse-opened",this.opened),this._updateTransition(!1),this.notifyResize(),this._setTransitioning(!1)},_onTransitionEnd:function(e){_o(e).rootTarget===this&&this._transitionEnd()},_calcSize:function(){return this.getBoundingClientRect()[this.dimension]+"px"}});var ll=function(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),pl=function(){return Math.random().toString(36).substring(7).split("").join(".")},dl={INIT:"@@redux/INIT"+pl(),REPLACE:"@@redux/REPLACE"+pl(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+pl()}};function cl(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function hl(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}function ul(e,t){var i=t&&t.type;return"Given "+(i&&'action "'+String(i)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function fl(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _l(e,t){var i=Object.keys(e);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(e)),t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i}function ml(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?_l(i,!0).forEach((function(t){fl(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_l(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function yl(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function gl(){}function bl(e){return function(t){var i=t.dispatch,n=t.getState;return function(t){return function(r){return"function"==typeof r?r(i,n,e):t(r)}}}}"production"!==process.env.NODE_ENV&&"string"==typeof gl.name&&"isCrushed"!==gl.name&&hl('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');var vl=bl();vl.withExtraArgument=bl;const wl={page:"",offline:!1,drawerOpened:!1,lightboxOpened:!1,snackbarOpened:!1},Sl=function e(t,i,n){var r;if("function"==typeof i&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof i&&void 0===n&&(n=i,i=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(e)(t,i)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var s=t,o=i,a=[],l=a,p=!1;function d(){l===a&&(l=a.slice())}function c(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return o}function h(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var t=!0;return d(),l.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");t=!1,d();var i=l.indexOf(e);l.splice(i,1),a=null}}}function u(e){if(!cl(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,o=s(o,e)}finally{p=!1}for(var t=a=l,i=0;i<t.length;i++){(0,t[i])()}return e}function f(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");s=e,u({type:dl.REPLACE})}function _(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function i(){e.next&&e.next(c())}return i(),{unsubscribe:t(i)}}})[ll]=function(){return this},e}return u({type:dl.INIT}),(r={dispatch:u,subscribe:h,getState:c,replaceReducer:f})[ll]=_,r}(e=>e,(()=>{let e=localStorage.getItem("gramps_webapp")||"{}",t=JSON.parse(e);return t?(t.app&&(t.app.lightboxOpened=!1),t):void 0})(),yl((e=>t=>(i,n)=>{let r={};const s=t(i,n);return Object.assign({},s,{addReducers(t){const i=Object.assign({},r,t);this.replaceReducer(e(r=i))}})})((function(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var r=t[n];"production"!==process.env.NODE_ENV&&void 0===e[r]&&hl('No reducer provided for key "'+r+'"'),"function"==typeof e[r]&&(i[r]=e[r])}var s,o,a=Object.keys(i);"production"!==process.env.NODE_ENV&&(s={});try{!function(e){Object.keys(e).forEach((function(t){var i=e[t];if(void 0===i(void 0,{type:dl.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===i(void 0,{type:dl.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+dl.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(i)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;if("production"!==process.env.NODE_ENV){var n=function(e,t,i,n){var r=Object.keys(t),s=i&&i.type===dl.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!cl(e))return"The "+s+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following keys: "'+r.join('", "')+'"';var o=Object.keys(e).filter((function(e){return!t.hasOwnProperty(e)&&!n[e]}));return o.forEach((function(e){n[e]=!0})),i&&i.type===dl.REPLACE?void 0:o.length>0?"Unexpected "+(o.length>1?"keys":"key")+' "'+o.join('", "')+'" found in '+s+'. Expected to find one of the known reducer keys instead: "'+r.join('", "')+'". Unexpected keys will be ignored.':void 0}(e,i,t,s);n&&hl(n)}for(var r=!1,l={},p=0;p<a.length;p++){var d=a[p],c=i[d],h=e[d],u=c(h,t);if(void 0===u){var f=ul(d,t);throw new Error(f)}l[d]=u,r=r||u!==h}return(r=r||a.length!==Object.keys(e).length)?l:e}})),function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){var i=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},r={getState:i.getState,dispatch:function(){return n.apply(void 0,arguments)}},s=t.map((function(e){return e(r)}));return ml({},i,{dispatch:n=yl.apply(void 0,s)(i.dispatch)})}}}(vl)));Sl.subscribe(()=>{(e=>{if(null!=e.api){let t={app:e.app,api:{token:e.api.token,expires:e.api.expires,refresh_token:e.api.refresh_token}},i=JSON.stringify(t);localStorage.setItem("gramps_webapp",i)}})(Sl.getState())}),Sl.addReducers({app:(e=wl,t)=>{switch(t.type){case"UPDATE_PAGE":return Se(Se({},e),{},{page:t.page});case"ACTIVE_EVENT":return Se(Se({},e),{},{activeEvent:t.id});case"ACTIVE_PLACE":return Se(Se({},e),{},{activePlace:t.id});case"ACTIVE_SOURCE":return Se(Se({},e),{},{activeSource:t.id});case"ACTIVE_MEDIA":return Se(Se({},e),{},{activeMedia:t.media});case"ACTIVE_PERSON":return Se(Se({},e),{},{activePerson:t.id});case"ACTIVE_PERSON_IF_EMPTY":return"activePerson"in e?e:Se(Se({},e),{},{activePerson:t.id});case"UPDATE_OFFLINE":return Se(Se({},e),{},{offline:t.offline});case"UPDATE_WIDE_LAYOUT":return Se(Se({},e),{},{wideLayout:t.wideLayout});case"UPDATE_DRAWER_STATE":return Se(Se({},e),{},{drawerOpened:t.opened});case"UPDATE_LIGHTBOX_STATE":return Se(Se({},e),{},{lightboxOpened:t.opened});case"OPEN_SNACKBAR":return Se(Se({},e),{},{snackbarOpened:!0});case"CLOSE_SNACKBAR":return Se(Se({},e),{},{snackbarOpened:!1});case"LOGOUT":return Se(Se({},e),{},{token:null,refresh_token:null});default:return e}}});const xl=e=>{const t=Sl.getState().api.strings;return e in t?t[e]:e},Cl=gt(y||(y=we`:host{display:block;box-sizing:border-box}section{padding:24px;background:var(--app-section-odd-color)}section>*{margin-right:auto;margin-left:auto}section:nth-of-type(even){background:var(--app-section-even-color)}h2,h3,h4,h5{text-align:left}h2{font-size:24px;font-weight:300}h3{font-size:20px;font-weight:300}h4{font-size:16px;font-weight:400;margin:.67em 0}h5{font-size:16px;font-weight:300;margin:.67em 0}a:active,a:hover,a:link,a:visited{color:var(--app-dark-text-color);text-decoration:none;outline:0}paper-card{box-shadow:none;border:1px solid rgba(0,0,0,.12);border-radius:5px}@media (min-width:460px){h2{font-size:36px}h3{font-size:28px}h4{font-size:18px}}.circle{display:block;width:64px;height:64px;margin:0 auto;text-align:center;border-radius:50%;background:var(--app-primary-color);color:var(--app-light-text-color);font-size:30px;line-height:64px}svg{height:1em;top:.125em;position:relative}svg path{fill:#aaa}.link{cursor:pointer}.arrow svg{height:2.5em;width:2.5em}.arrow:hover svg path{fill:#fff}.arrow svg path{fill:#aaa}.arrow{position:absolute}vaadin-grid.fullscreen{height:calc(100vh - 48px)}@media (min-width:768px){vaadin-grid.fullscreen{height:calc(100vh - 48px);margin-top:0}}`)),El=rt(g||(g=we`<svg height="24" viewBox="0 0 24 24" width="24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`)),Pl=rt(b||(b=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/></svg>`)),kl=rt(v||(v=we`<svg height="24" width="24" viewBox="0 0 24 24"><path d="m5.9746 2a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm11.135 0a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm-12.635 5a2 2 0 0 0-2 2v5.5h1.5v7.5h4v-1.9805a1.2642 1.2642 0 0 1-0.47461-0.98633v-4a1.2642 1.2642 0 0 1 1.2637-1.2637h0.31445c-0.33465-0.51184-0.57812-1.086-0.57812-1.7363 0-0.90026 0.3747-1.721 0.97461-2.3145v-0.71875a2 2 0 0 0-2-2h-3zm12.635 0c-0.9 0-1.6602 0.59016-1.9102 1.4102l-0.66016 1.9355c0.30424 0.49515 0.48828 1.07 0.48828 1.6875 0 0.65032-0.24347 1.2245-0.57812 1.7363h0.31445a1.2642 1.2642 0 0 1 1.2637 1.2637v4a1.2642 1.2642 0 0 1-0.41797 0.9375v2.0293h3v-6h3l-2.5898-7.5898c-0.25-0.82-1.0102-1.4102-1.9102-1.4102zm-5.3457 3.0332c-1.1046 0-2 0.89543-2 2s0.89543 2 2 2 2-0.89543 2-2-0.89543-2-2-2zm-3 5v4h1.5v3h3v-3h1.5v-4h-6z"/></svg>`)),Al=rt(w||(w=we`<svg height="24" width="24" viewBox="0 0 24 24"> <path fill="#000000" d="M7.5,15C8.63,15 9.82,15.26 11.09,15.77C12.35,16.29 13,16.95 13,17.77V20H2V17.77C2,16.95 2.65,16.29 3.91,15.77C5.18,15.26 6.38,15 7.5,15M13,13H22V15H13V13M13,9H22V11H13V9M13,5H22V7H13V5M7.5,8A2.5,2.5 0 0,1 10,10.5A2.5,2.5 0 0,1 7.5,13A2.5,2.5 0 0,1 5,10.5A2.5,2.5 0 0,1 7.5,8Z"/> </svg>`)),Tl=rt(S||(S=we`<svg height="24" width="24" viewBox="0 0 24 24"> <path fill="#000000" d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/> </svg>`)),Ol=rt(x||(x=we`<svg height="24" width="24" viewBox="0 0 24 24"><path d="m8.748 6.4766c-3.0431 1e-6 -5.5234 2.4804-5.5234 5.5234 0 3.0431 2.4804 5.5234 5.5234 5.5234 0.93172 0 1.8089-0.23453 2.5801-0.64453-0.36367-0.29425-0.69179-0.62746-0.98242-0.99414-0.49253 0.2017-1.0307 0.31641-1.5977 0.31641-2.3282 0-4.2012-1.873-4.2012-4.2012 0-2.3282 1.873-4.2012 4.2012-4.2012 2.3282 0 4.2012 1.873 4.2012 4.2012 0 0.72003-0.19536 1.3855-0.51172 1.9766 0.26276 0.3773 0.60147 0.69303 0.99219 0.9375 0.53009-0.84757 0.8418-1.8439 0.8418-2.9141 0-3.0431-2.4804-5.5234-5.5234-5.5234zm6.5098 0c-0.93172 1e-7 -1.8089 0.23453-2.5801 0.64453 0.36367 0.29425 0.69179 0.62746 0.98242 0.99414 0.49253-0.2017 1.0307-0.31641 1.5977-0.31641 2.3282 2e-7 4.2012 1.873 4.2012 4.2012 0 2.3282-1.873 4.2012-4.2012 4.2012-2.3282 0-4.2012-1.873-4.2012-4.2012 0-0.72003 0.19536-1.3855 0.51172-1.9766-0.26276-0.3773-0.60147-0.69303-0.99219-0.9375-0.53009 0.84757-0.8418 1.8439-0.8418 2.9141 2e-7 3.0431 2.4804 5.5234 5.5234 5.5234 3.0431-2e-6 5.5234-2.4804 5.5234-5.5234 0-3.0431-2.4804-5.5234-5.5234-5.5234z"></path></svg>`)),Nl=rt(C||(C=we`<svg height="24" width="24" viewBox="0 0 24 24"> <path fill="#000000" d="M10,2H14L13.21,9.91L19.66,5.27L21.66,8.73L14.42,12L21.66,15.27L19.66,18.73L13.21,14.09L14,22H10L10.79,14.09L4.34,18.73L2.34,15.27L9.58,12L2.34,8.73L4.34,5.27L10.79,9.91L10,2Z"/> </svg>`)),Il=rt(E||(E=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M10.5,2H13.5V8H19V11H13.5V22H10.5V11H5V8H10.5V2Z"/></svg>`)),Rl=rt(P||(P=we`<svg height="24" width="24" viewBox="0 0 24 24"><path d="m17.201 6v4h4.8223v-4h-4.8223zm-5.9102 1.1582v3.9922h-3.5996v1.6992h3.5996v3.9922h4.9219v-1.7012h-3.2227v-6.2812h3.2227v-1.7012h-4.9219zm-9.3828 2.8418v4h4.8223v-4h-4.8223zm15.293 4v4h4.8223v-4h-4.8223z"/> </svg>`)),Dl=rt(k||(k=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/></svg>`)),Ll=rt(A||(A=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/></svg>`)),Ml=rt(T||(T=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>`)),Hl=rt(O||(O=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"/></svg>`)),$l=rt(N||(N=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>`)),zl=rt(I||(I=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z"/></svg>`)),Fl=rt(R||(R=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z"/></svg>`)),Bl=rt(D||(D=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M12,3L2,12H5V20H19V12H22L12,3M12,8.75A2.25,2.25 0 0,1 14.25,11A2.25,2.25 0 0,1 12,13.25A2.25,2.25 0 0,1 9.75,11A2.25,2.25 0 0,1 12,8.75M12,15C13.5,15 16.5,15.75 16.5,17.25V18H7.5V17.25C7.5,15.75 10.5,15 12,15Z"/></svg>`)),Vl=rt(L||(L=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M18,22A2,2 0 0,0 20,20V4C20,2.89 19.1,2 18,2H12V9L9.5,7.5L7,9V2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18Z"/></svg>`)),jl=rt(M||(M=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"/></svg>`)),Ul=rt(H||(H=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M16.5,6V17.5A4,4 0 0,1 12.5,21.5A4,4 0 0,1 8.5,17.5V5A2.5,2.5 0 0,1 11,2.5A2.5,2.5 0 0,1 13.5,5V15.5A1,1 0 0,1 12.5,16.5A1,1 0 0,1 11.5,15.5V6H10V15.5A2.5,2.5 0 0,0 12.5,18A2.5,2.5 0 0,0 15,15.5V5A4,4 0 0,0 11,1A4,4 0 0,0 7,5V17.5A5.5,5.5 0 0,0 12.5,23A5.5,5.5 0 0,0 18,17.5V6H16.5Z"/></svg>`)),Kl=rt($||($=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"/></svg>`)),ql=rt(z||(z=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2M10.1,11.4C10.08,11.44 9.81,13.16 8,16.09C8,16.09 4.5,17.91 5.33,19.27C6,20.35 7.65,19.23 9.07,16.59C9.07,16.59 10.89,15.95 13.31,15.77C13.31,15.77 17.17,17.5 17.7,15.66C18.22,13.8 14.64,14.22 14,14.41C14,14.41 12,13.06 11.5,11.2C11.5,11.2 12.64,7.25 10.89,7.3C9.14,7.35 9.8,10.43 10.1,11.4M10.91,12.44C10.94,12.45 11.38,13.65 12.8,14.9C12.8,14.9 10.47,15.36 9.41,15.8C9.41,15.8 10.41,14.07 10.91,12.44M14.84,15.16C15.42,15 17.17,15.31 17.1,15.64C17.04,15.97 14.84,15.16 14.84,15.16M7.77,17C7.24,18.24 6.33,19 6.1,19C5.87,19 6.8,17.4 7.77,17M10.91,10.07C10.91,10 10.55,7.87 10.91,7.92C11.45,8 10.91,10 10.91,10.07Z"/></svg>`)),Yl=rt(F||(F=we`<svg height="24" width="24" viewBox="0 0 24 24"><path fill="#000000" d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/></svg>`));window.customElements.define("gr-lightbox-element",class extends vt{render(){return this.opened?rt(V||(V=we`
      <style>
      #lightbox {
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        position:fixed;
        overflow: hidden;
        top: 0;
        left: 0;
        color: #ffffff;
        z-index: 10000;
      }

      .close-lightbox svg {
        height: 2em;
        width: 2em;
      }

      .close-lightbox:hover svg path {
        fill: #ffffff;
      }

      .close-lightbox svg path {
        fill: #aaaaaa;
      }

      .close-lightbox {
        position: absolute;
        right: 1.5em;
        top: 1.5em;
      }
      }
      </style>
      <div id="lightbox">
        <slot></slot>
      <div class="close-lightbox">
        <span @click="${0}" class="link">${0}</span>
      </div>
      </div>
      `),this._closeLightbox,Ml):rt(B||(B=we``))}static get styles(){return[Cl]}constructor(){super(),this.opened=!1}_closeLightbox(){this.opened=!1,this.dispatchEvent(new CustomEvent("lightbox-opened-changed",{bubbles:!0,composed:!0,detail:{opened:!1}})),this.dispatchEvent(new CustomEvent("medium-selected",{bubbles:!0,composed:!0,detail:{id:""}}))}firstUpdated(){}_handleKeyPress(e){"Escape"===e.key&&this._closeLightbox()}static get properties(){return{opened:{type:Boolean,notify:!0,reflectToAttribute:!0}}}_focus(){if(this.opened){this.shadowRoot.getElementById("lightbox").focus()}}updated(){this._focus()}}),Io({_template:ia(j||(j=we`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden$="[[_computeImgDivHidden(sizing)]]" aria-hidden$="[[_computeImgDivARIAHidden(alt)]]" aria-label$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt$="[[alt]]" hidden$="[[_computeImgHidden(sizing)]]" crossorigin$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`)),is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src===this._resolveSrc(this.src)&&(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src===this._resolveSrc(this.src)&&(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){return null!==this.alt?this.alt:""===this.src?"":this._resolveSrc(this.src).replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e,t){var i=this._resolveSrc(e);i!==this._resolvedSrc&&(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e||t?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=i,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage='url("'+this._resolvedSrc+'")',this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?'url("'+this.placeholder+'")':""},_transformChanged:function(){var e=this.$.sizedImgDiv.style,t=this.$.placeholder.style;e.backgroundSize=t.backgroundSize=this.sizing,e.backgroundPosition=t.backgroundPosition=this.sizing?this.position:"",e.backgroundRepeat=t.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(e){var t=Et(e,this.$.baseURIAnchor.href);return t.length>=2&&"/"===t[0]&&"/"!==t[1]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}}),Io({_template:ia(U||(U=we`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`)),is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(e){return e?"false":"true"},_headingChanged:function(e){var t=this.getAttribute("heading"),i=this.getAttribute("aria-label");"string"==typeof i&&i!==t||this.setAttribute("aria-label",e)},_computeHeadingClass:function(e){return e?" over-image":""},_computeAnimated:function(e){return e}});class Wl extends(Kt(Sl)(vt)){render(){return null==this._note?rt(K||(K=we` <p>Loading ...</p> `)):"error"==this._note.content?rt(q||(q=we` <paper-card> <div class="card-content"> <p>Error. <a class="link" @click="${0}">Reload</a></p> </div> </paper-card> `),this._reloadNote):rt(Y||(Y=we` <style>paper-card{margin:10px 0;width:100%}.card-content p{margin:1em 0}.card-content p:first-child{margin-top:0}.card-content p:last-child{margin-bottom:0}.handle{font-size:.8em;background-color:rgba(0,0,0,.05);padding:.3em .5em;margin:0 .3em;border-radius:.5em;font-weight:500;color:rgba(0,0,0,.4)}.note-head{margin-bottom:1em}.note-head svg{height:1.5em;top:.42em;position:relative}.note-head svg path{fill:rgba(0,0,0,.35)}</style> <paper-card> <div class="card-content"> <div class="note-head"> ${0} <span class="handle">${0}</span> </div> <div id="note-content"></div> </div> </paper-card> `),jl,this.grampsid)}static get styles(){return[Cl]}firstUpdated(){}static get properties(){return{grampsid:{type:String},_note:{type:Object}}}connectedCallback(){super.connectedCallback(),null!=Sl.getState().api.token&&this.getNote()}_reloadNote(){this._note=void 0,Sl.dispatch(ri(this._token,this._refresh_token,this.grampsid))}getNote(){let e=Sl.getState();this._token=e.api.token,this._refresh_token=e.api.refresh_token,Sl.dispatch(ri(this._token,this._refresh_token,this.grampsid))}stateChanged(e){if((null==this._token||this._token!=e.api.token)&&this.getNote(),null!=e.api.notes&&null!=e.api.notes[this.grampsid]){this._note=e.api.notes[this.grampsid];let t=this.shadowRoot.getElementById("note-content");null!=t&&(t.innerHTML=this._note.content)}}}window.customElements.define("gr-note-element",Wl);class Jl extends(Kt(Sl)(vt)){render(){var e=this._token,t=this._addMimeType;let i=Sl.getState();return this._citations=this.citations.map(e=>i.api.citations[e]),this._sources=this.citations.map(e=>i.api.sources[i.api.citations[e].source]),this._sources=[...new Set(this._sources)],rt(W||(W=we` <style>h4 svg{height:1.6em;top:.46em;position:relative}h5 svg{height:2em;top:.6em;position:relative}h4 svg path,h5 svg path{fill:rgba(0,0,0,.2)}.handle{font-size:.8em;background-color:rgba(0,0,0,.05);padding:.3em .5em;margin:0 .3em;border-radius:.5em;font-weight:500;color:rgba(0,0,0,.4)}div.citation{margin-left:1em}div.citation-content{margin-left:2em}</style> ${0} `),this._sources.map(i=>rt(J||(J=we` ${0} ${0} `),this.nosources?"":rt(X||(X=we` <h4><a href="/source/${0}">${0} ${0} <span style="font-size:.7em;top:-.2em;position:relative"><span class="handle">${0}</span></span></a> ${0} </h4> `),i.gramps_id,Vl,i.title,i.gramps_id,i.media.length||i.notes.length?Ul:""),this._citations.map((function(n){return n.source!=i.gramps_id?rt(G||(G=we``)):rt(Z||(Z=we` <div class="citation"> <h5>${0} ${0}</h5> <div class="citation-content"> ${0} </div> <div style="clear:left"></div> <div class="citation-content"> <gr-gallery-element .images="${0}" token="${0}"> </gr-gallery-element> </div> <div style="clear:left"></div> </div> `),Yl,n.page?n.page:xl("Citation"),n.notes.map(e=>rt(Q||(Q=we` <gr-note-element grampsid="${0}"> </gr-note-element> `),e)),t(n.media,Sl.getState()),e)})))))}static get styles(){return[Cl]}firstUpdated(){}constructor(){super(),this.nosources=!1}static get properties(){return{citations:{type:Array},nosources:{type:Boolean}}}_addMimeType(e,t){return e.map((function(e){return e.mime=t.api.media[e.ref].mime,e}))}stateChanged(e){this._token=e.api.token}}window.customElements.define("gr-citations-element",Jl);class Xl extends(Kt(Sl)(vt)){render(){return this.media?rt(ee||(ee=we` <style>div.media-container{position:absolute;width:100%;height:100%;max-height:100vh;max-width:100vw;text-align:center}div.inner-container{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:inline-block;max-height:100vh;color:rgba(255,255,255,.8)}div.inner-container img{display:block}div.inner-container a{color:rgba(255,255,255,.8)}div.rect{position:absolute;border:2px solid rgba(255,255,255,.5);box-shadow:0 0 0 1px rgba(0,0,0,.5);border-radius:6px}div.rect div.label{font-size:.7em;color:#fff;background-color:rgba(.5,.5,.5,.25);position:relative;top:100%;left:50%;padding:0 .5em;overflow:hidden;transform:translate(-50%,10px);border-radius:3px;display:block}div.media-container img{max-width:100vw;max-height:100vh}div.file{background-color:rgba(255,255,255,.1);text-align:center}div.file svg{height:70%;width:70%;top:15%}div.file svg path{fill:rgba(0,0,0,.1)}@media (hover:hover){div.rect div.label{display:none}div.rect:hover div.label{display:block}}.label{color:#777;font-size:.8em;font-weight:500;margin-bottom:.25em}div.meta-container{background-color:rgba(255,255,255,.9);color:rgba(0,0,0,.75);text-align:left;font-size:.8em;padding:1em;overflow:hidden;text-overflow:ellipsis}@media (min-width:768px){div.inner-container{left:calc(50% - 100px)}div.media-container img{max-width:calc(100vw - 200px)}div.meta-container{width:calc(200px - 2em);min-height:calc(100% - 2em);position:absolute;right:-200px;top:0}}</style> <div class="media-container" style="transform:translateX(${0}px)" @touchstart="${0}" @touchmove="${0}" @touchend="${0}"> <div class="inner-container"> ${0} <div class="meta-container"> <p class="label">${0}</p> <p>${0}</p> ${0} ${0} ${0} ${0} <gr-citations-element .citations="${0}"> </gr-citations-element> </div> </div> </div> ${0} ${0} `),this._translateX,this._handleTouchStart,this._handleTouchMove,this._handleTouchEnd,this._innerContainerContent(this._mime),xl("Description"),this._desc,this._date?rt(te||(te=we` <p class="label">${0}</p> <p>${0}</p>`),xl("Date"),this._date):"",this._notes.length?rt(ie||(ie=we`<h4>${0}</h4>`),xl("Notes")):"",this._notes.map(e=>rt(ne||(ne=we` <gr-note-element grampsid="${0}"> </gr-note-element> `),e)),this._citations.length?rt(re||(re=we`<h4>${0}</h4>`),xl("Sources")):"",this._citations,this._prev?rt(se||(se=we` <div class="arrow" style="left:5vw;top:50vh"> <span @click="${0}" class="link">${0}</span> </div> `),this._handle_left,Hl):"",this._next?rt(oe||(oe=we` <div class="arrow" style="right:5vw;top:50vh"> <span @click="${0}" class="link">${0}</span> </div> `),this._handle_right,$l):""):rt(ae||(ae=we`<p>Media object not found!</p>`))}_innerContainerContent(e){return e.startsWith("image/")?this._innerContainerContent_image():"application/pdf"==e?this._innerContainerContent_pdf():this._innerContainerContent_file(e)}_innerContainerContent_image(){return rt(le||(le=we` <img src="${0}/api/media/${0}?jwt=${0}" @error="${0}">  ${0}`),window.APIHOST,this.handle,this._token,this._errorHandler,this._personRectangles())}_innerContainerContent_pdf(){return rt(pe||(pe=we` <object data="${0}/api/media/${0}?jwt=${0}" type="application/pdf" style="width:80vw;height:90vh" @error="${0}"> ${0} </object>`),window.APIHOST,this.handle,this._token,this._errorHandler,this._innerContainerContent_file("application/pdf"))}_innerContainerContent_file(e){return rt(de||(de=we` <a mimetype="${0}" href="${0}/api/media/${0}?jwt=${0}" target="_blank"> <div class="file" style="width:50vh;height:50vh">${0} </div> <br> ${0} </a>`),e,window.APIHOST,this.handle,this._token,Kl,xl("Download"))}_personRectangles(){var e=this._closeLightbox;return this._rect.map((function(t){if(!t.rect)return"";let i=t.rect[0],n=t.rect[1],r=t.rect[2]-t.rect[0],s=t.rect[3]-t.rect[1];return rt(ce||(ce=we` <a href="person/${0}" @click="${0}"> <div class="rect" style="left:${0}%;top:${0}%;width:${0}%;height:${0}%"> <div class="label">${0} ${0}</div> </div> </a> `),t.gramps_id,e,i,n,r,s,t.name_given,t.name_surname)}))}_handle_left(){this.dispatchEvent(new CustomEvent("media-selected",{bubbles:!0,composed:!0,detail:{selected:this._prev,media:this.media}}))}_handle_right(){this.dispatchEvent(new CustomEvent("media-selected",{bubbles:!0,composed:!0,detail:{selected:this._next,media:this.media}}))}static get styles(){return[Cl]}constructor(){super(),this._translateX=0}static get properties(){return{media:{type:Object},handle:{type:String},_rect:{type:Object},_prev:{type:String},_next:{type:String},_translateX:{type:Number},_mime:{type:String}}}firstUpdated(){window.addEventListener("keydown",this._escHandler.bind(this))}_handleTouchStart(e){this._touchStartX=e.touches[0].pageX,this._touchMoveX=this._touchStartX}_handleTouchMove(e){this._touchMoveX=e.touches[0].pageX,this._translateX=this._touchMoveX-this._touchStartX}_handleTouchEnd(e){this._translateX=0;let t=this._touchMoveX-this._touchStartX;t<-10&&""!=this._next?this._handle_right():t>10&&""!=this._prev&&this._handle_left()}_escHandler(e){"Escape"===e.key?this.dispatchEvent(new CustomEvent("lightbox-opened-changed",{bubbles:!0,composed:!0,detail:{opened:!1}})):"ArrowRight"!==e.key&&"Right"!==e.key||""==this._next?"ArrowLeft"!==e.key&&"Left"!==e.key||""==this._prev||this._handle_left():this._handle_right()}_errorHandler(e){this.dispatchEvent(new CustomEvent("media-load-error",{bubbles:!0,composed:!0}))}_closeLightbox(){this.dispatchEvent(new CustomEvent("lightbox-opened-changed",{bubbles:!0,composed:!0,detail:{opened:!1}})),this.dispatchEvent(new CustomEvent("medium-selected",{bubbles:!0,composed:!0,detail:{id:""}}))}_getRect(e){var t=[];for(let i in e.api.people)if(null!=e.api.people[i].media)for(let n of e.api.people[i].media)n.ref==this.handle&&t.push({type:"person",gramps_id:e.api.people[i].gramps_id,name_given:e.api.people[i].name_given,name_surname:e.api.people[i].name_surname,rect:n.rect});return t}stateChanged(e){if(this._token=e.api.token,null!=e.app.activeMedia&&e.api.media){this.media=e.app.activeMedia.media,this.handle=e.app.activeMedia.selected,this.handle in e.api.media&&(this._mime=e.api.media[this.handle].mime,this._desc=e.api.media[this.handle].desc,this._citations=e.api.media[this.handle].citations,this._notes=e.api.media[this.handle].notes,this._date=e.api.media[this.handle].date);var t="",i="",n=this.handle;if(null!=this.media&&this.media.length)for(const[e,r]of this.media.entries()){if(r==n){i=e+1==this.media.length?"":this.media[e+1];break}t=r}this._prev=t,this._next=i,this._rect=this._getRect(e)}}}window.customElements.define("gr-media-element",Xl);const Gl={people:{},families:{},events:{},places:{},citations:{},sources:{},repositories:{},media:{},strings:{},dbinfo:{},notes:{},token:"",refresh_token:"",expires:0};Io({_template:ia(he||(he=we`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: var(--app-drawer-content-padding, 120px 0);

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`)),is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){Zs(this,(function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")})),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right")}this._setPosition(this.align)},_escKeydownHandler:function(e){27===e.keyCode&&(e.preventDefault(),this.close())},_track:function(e){if(!this.persistent&&!this.disableSwipe)switch(e.preventDefault(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackMove(e);break;case"end":this._trackEnd(e)}},_trackStart:function(e){this._drawerState=this._DRAWER_STATE.TRACKING;var t=this.$.contentContainer.getBoundingClientRect();this._savedWidth=t.width,"left"===this.position?this._translateOffset=t.left:this._translateOffset=t.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(e){this._translateDrawer(e.detail.dx+this._translateOffset),this._trackDetails.push({dx:e.detail.dx,timeStamp:Date.now()})},_trackEnd:function(e){var t=e.detail.dx+this._translateOffset,i=this.getWidth(),n="left"===this.position?t>=0||t<=-i:t<=0||t>=i;if(!n){var r=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(e,r),this._drawerState===this._DRAWER_STATE.FLINGING)return}var s=i/2;e.detail.dx<-s?this.opened="right"===this.position:e.detail.dx>s&&(this.opened="left"===this.position),n?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(e,t){for(var i,n=Date.now(),r=n-100,s=0,o=t.length-1;s<=o;){var a=s+o>>1,l=t[a];l.timeStamp>=r?(i=l,o=a-1):s=a+1}return i?(e.detail.dx-i.dx)/(n-i.timeStamp||1):0},_flingDrawer:function(e,t){var i=this._calculateVelocity(e,t);if(!(Math.abs(i)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var n,r=e.detail.dx+this._translateOffset,s=this.getWidth(),o="left"===this.position,a=i>0;n=!a&&o?-(r+s):a&&!o?s-r:-r,a?(i=Math.max(i,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(i=Math.min(i,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*n/i;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(e){this.style.transitionDuration=e+"ms",this.$.contentContainer.style.transitionDuration=e+"ms",this.$.scrim.style.transitionDuration=e+"ms"},_styleTransitionTimingFunction:function(e){this.$.contentContainer.style.transitionTimingFunction=e,this.$.scrim.style.transitionTimingFunction=e},_translateDrawer:function(e){var t=this.getWidth();"left"===this.position?(e=Math.max(-t,Math.min(e,0)),this.$.scrim.style.opacity=1+e/t):(e=Math.max(0,Math.min(e,t)),this.$.scrim.style.opacity=1-e/t),this.translate3d(e+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var e=this._drawerState;e===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this.opened?this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._drawerState=this._DRAWER_STATE.CLOSED,e!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),e!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var e=['a[href]:not([tabindex="-1"])','area[href]:not([tabindex="-1"])','input:not([disabled]):not([tabindex="-1"])','select:not([disabled]):not([tabindex="-1"])','textarea:not([disabled]):not([tabindex="-1"])','button:not([disabled]):not([tabindex="-1"])','iframe:not([tabindex="-1"])','[tabindex]:not([tabindex="-1"])','[contentEditable=true]:not([tabindex="-1"])'].join(","),t=_o(this).querySelectorAll(e);t.length>0?(this._firstTabStop=t[0],this._lastTabStop=t[t.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var i=this.getAttribute("tabindex");i&&parseInt(i,10)>-1?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(e){if(!this.noFocusTrap){this._drawerState===this._DRAWER_STATE.OPENED&&9===e.keyCode&&(e.shiftKey?this._firstTabStop&&_o(e).localTarget===this._firstTabStop&&(e.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&_o(e).localTarget===this._lastTabStop&&(e.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(e,t){this.toggleClass("visible",e&&!t,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}});const Zl=[al,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(e){_o(e).path[0]!==this&&(this.resetLayout(),e.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var e=this._updateLayoutStates.bind(this);this._layoutDebouncer=Jr.debounce(this._layoutDebouncer,Wn,e),Gr(this._layoutDebouncer),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var e=this;requestAnimationFrame((function(){e.fire("app-reset-layout")}))},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this)}}],Ql={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var i=this.domHost;this.scrollTarget=i&&i.$?i.$[e]:_o(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var i;"object"==typeof e?(i=e.left,t=e.top):i=e,i=i||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(i,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=i,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var i=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),i.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(i.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}},ep={},tp=[Ql,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(e){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Math.max(0,this._scrollTop)},attached:function(){this._scrollStateChanged()},detached:function(){this._tearDownEffects()},createEffect:function(e,t){var i=ep[e];if(!i)throw new ReferenceError(this._getUndefinedMsg(e));var n=this._boundEffect(i,t||{});return n.setUp(),n},_effectsChanged:function(e,t,i){this._tearDownEffects(),e&&i&&(e.split(" ").forEach((function(e){var i;""!==e&&((i=ep[e])?this._effects.push(this._boundEffect(i,t[e])):console.warn(this._getUndefinedMsg(e)))}),this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(e,t){t=t||{};var i=parseFloat(t.startsAt||0),n=parseFloat(t.endsAt||1),r=n-i,s=function(){},o=0===i&&1===n?e.run:function(t,n){e.run.call(this,Math.max(0,(t-i)/r),n)};return{setUp:e.setUp?e.setUp.bind(this,t):s,run:e.run?o.bind(this):s,tearDown:e.tearDown?e.tearDown.bind(this):s}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach((function(e){!1!==e.setUp()&&this._effectsRunFn.push(e.run)}),this))},_tearDownEffects:function(){this._effects&&this._effects.forEach((function(e){e.tearDown()})),this._effectsRunFn=[],this._effects=[]},_runEffects:function(e,t){this._effectsRunFn&&this._effectsRunFn.forEach((function(i){i(e,t)}))},_scrollHandler:function(){this._scrollStateChanged()},_scrollStateChanged:function(){if(!this.disabled){var e=this._clampedScrollTop;this._updateScrollState(e),this.threshold>0&&this._setThresholdTriggered(e>=this.threshold)}},_getDOMRef:function(e){console.warn("_getDOMRef","`"+e+"` is undefined")},_getUndefinedMsg:function(e){return"Scroll effect `"+e+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+e+".html ?"}}];Io({_template:ia(ue||(ue=we`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`)),is:"app-header",behaviors:[tp,Zl],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var e,t=_o(this.$.slot).getDistributedNodes(),i=0;e=t[i];i++)if(e.nodeType===Node.ELEMENT_NODE){if(e.hasAttribute("sticky")){this._stickyElRef=e;break}this._stickyElRef||(this._stickyElRef=e)}return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=0===this._height||0===e,i=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,t||this._updateScrollState(0,!0),this._mayMove()?this._dHeight=this._stickyEl?this._height-this._stickyEl.offsetHeight:0:this._dHeight=0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),t?this._updateScrollState(e,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=i}},_updateScrollState:function(e,t){if(0!==this._height){var i=0,n=0,r=this._top,s=(this._lastScrollTop,this._maxHeaderTop),o=e-this._lastScrollTop,a=Math.abs(o),l=e>this._lastScrollTop,p=performance.now();if(this._mayMove()&&(n=this._clamp(this.reveals?r+o:e,0,s)),e>=this._dHeight&&(n=this.condenses&&!this.fixed?Math.max(this._dHeight,n):n,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&a<100&&((p-this._initTimestamp>300||this._wasScrollingDown!==l)&&(this._initScrollTop=e,this._initTimestamp=p),e>=s))if(Math.abs(this._initScrollTop-e)>30||a>10){l&&e>=s?n=s:!l&&e>=this._dHeight&&(n=this.condenses&&!this.fixed?this._dHeight:0);var d=o/(p-this._lastTimestamp);this.style.transitionDuration=this._clamp((n-r)/d,0,300)+"ms"}else n=this._top;i=0===this._dHeight?e>0?1:0:n/this._dHeight,t||(this._lastScrollTop=e,this._top=n,this._wasScrollingDown=l,this._lastTimestamp=p),(t||i!==this._progress||r!==n||0===e)&&(this._progress=i,this._runEffects(i,n),this._transformHeader(n))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return this._dHeight>0&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?this._clampedScrollTop>0:this._clampedScrollTop-this._maxHeaderTop>=0},_transformHeader:function(e){this.translate3d(0,-e+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&e>=this._stickyElTop?Math.min(e,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),_o(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(e){switch(e){case"backgroundFrontLayer":return this._ensureBgContainers(),this._bgFront;case"backgroundRearLayer":return this._ensureBgContainers(),this._bgRear;case"background":return this._ensureBgContainers(),this._bgContainer;case"mainTitle":return _o(this).querySelector("[main-title]");case"condensedTitle":return _o(this).querySelector("[condensed-title]")}return null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),function(e,t){if(null!=ep[e])throw new Error("effect `"+e+"` is already registered.");ep[e]=t}("waterfall",{run:function(){this.shadow=this.isOnScreen()&&this.isContentBelow()}}),Io({_template:ia(fe||(fe=we`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`)),is:"app-toolbar"});window.customElements.define("snack-bar",class extends vt{static get properties(){return{active:{type:Boolean}}}static get styles(){return[gt(_e||(_e=we`:host{display:block;position:fixed;top:100%;left:0;right:0;padding:12px;background-color:var(--app-secondary-color);color:#fff;box-shadow:0 0 10px rgba(0,0,0,.2);text-align:center;will-change:transform;transform:translate3d(0,0,0);transition-property:visibility,transform;transition-duration:.2s;visibility:hidden}:host([active]){visibility:visible;transform:translate3d(0,-100%,0)}@media (min-width:460px){:host{width:320px;margin:auto}}`))]}render(){return rt(me||(me=we` <slot></slot> `))}}),Sl.addReducers({api:(e=Gl,t)=>{switch(t.type){case"TOKEN":return Se(Se({},e),{},{token:t.token,expires:t.expires});case"REFRESH_TOKEN":return Se(Se({},e),{},{refresh_token:t.token});case"NOTE":return Se(Se({},e),{},{notes:Se(Se({},e.notes),{},{[t.note.gramps_id]:t.note})});case"LOGOUT":return Gl;case"TREE":return Se(Se({},e),{},{people:t.tree.people,places:t.tree.places,families:t.tree.families,events:t.tree.events,citations:t.tree.citations,sources:t.tree.sources,repositories:t.tree.repositories,media:t.tree.media,dbinfo:t.tree.dbinfo});case"STRINGS":return Se(Se({},e),{},{strings:t.strings.data});default:return e}}});class ip extends(Kt(Sl)(vt)){render(){return this._token||this._refresh_token?this._loaded?rt(be||(be=we` <style>:host{--app-drawer-width:256px;display:block;--app-primary-color:#2979FF;--app-secondary-color:#5D4037;--app-dark-text-color:var(--app-secondary-color);--app-light-text-color:#EFEBE9;--app-section-even-color:white;--app-section-odd-color:white;--app-header-background-color:white;--app-header-text-color:var(--app-dark-text-color);--app-header-selected-color:var(--app-primary-color);--app-drawer-background-color:var(--app-secondary-color);--app-drawer-text-color:#BCAAA4;--app-drawer-selected-color:var(--app-light-text-color)}.app-drawer-content{background-color:var(--app-drawer-background-color)}app-header{position:fixed;top:0;left:0;right:0;text-align:center;background-color:var(--app-header-background-color);color:var(--app-header-text-color);border-bottom:1px solid #eee;z-index:3}.toolbar-top{background-color:var(--app-header-background-color)}[main-title]{font-size:30px;margin-right:44px}.menu-btn{background:0 0;border:none;fill:var(--app-header-text-color);cursor:pointer;height:44px;width:44px}.drawer-list{box-sizing:border-box;width:100%;height:100%;padding:24px;background:var(--app-drawer-background-color);position:relative;z-index:1000}.drawer-list>a,.drawer-list>span{display:block;text-decoration:none;color:var(--app-drawer-text-color);line-height:40px;padding:0 24px;outline:0}.drawer-list>a.button,.drawer-list>span.button{display:inline-block;padding:8px 0 0 24px}.drawer-list>a.button svg,.drawer-list>span.button svg{height:1.5em;width:1.5em}.drawer-list svg{height:1em;top:.125em;position:relative}.drawer-list svg path{fill:var(--app-drawer-text-color)}.drawer-list a[selected] svg path{fill:var(--app-drawer-selected-color)}.drawer-list>a[selected]{color:var(--app-drawer-selected-color)}main{display:block}.main-content{min-height:100vh;padding-top:48px}.page{display:none}.page[active]{display:block}footer{padding:24px;background:var(--app-drawer-background-color);color:var(--app-drawer-text-color);text-align:center}nav>hr{border:.5px solid rgba(255,255,255,.1);margin-left:-24px;margin-right:-24px}span.activePerson{font-weight:200;display:block;text-decoration:none;color:var(--app-drawer-text-color);line-height:40px;outline:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}@media (min-width:768px){.main-content,app-header,footer{margin-left:var(--app-drawer-width)}.main-content{padding-top:0}[main-title]{margin-right:0}}.link{cursor:pointer}</style> <app-header condenses reveals effects="waterfall" style="display:${0}"> <app-toolbar class="toolbar-top"> <button class="menu-btn" title="Menu" @click="${0}">${0}</button> </app-toolbar> </app-header> <app-drawer .opened="${0}" .persistent="${0}" @opened-changed="${0}" style="z-index:9999"> <div class="app-drawer-content" style="height:100%;overflow:auto"> <nav class="drawer-list"> <a ?selected="${0}" href="/dashboard">${0} ${0}</a> <hr> <a ?selected="${0}" href="/people">${0} ${0}</a> <a ?selected="${0}" href="/families">${0} ${0}</a> <a ?selected="${0}" href="/events">${0} ${0}</a> <a ?selected="${0}" href="/sources">${0} ${0}</a> <a ?selected="${0}" href="/places">${0} ${0}</a> <a ?selected="${0}" href="/map">${0} ${0}</a> <hr> <span class="activePerson">${0} ${0} ${0}</span> <a ?selected="${0}" href="/person/${0}">${0} ${0}</a> <a ?selected="${0}" href="/tree">${0} ${0}</a> <hr> <span class="button link" @click="${0}">${0}</span> </nav> </div> </app-drawer> <main role="main" class="main-content"> <gr-view-dashboard class="page" ?active="${0}"></gr-view-dashboard> <gr-view-people class="page" ?active="${0}"></gr-view-people> <gr-view-person class="page" ?active="${0}" id="gr-view-person"></gr-view-person> <gr-view-families class="page" ?active="${0}"></gr-view-families> <gr-view-events class="page" ?active="${0}"></gr-view-events> <gr-view-sources class="page" ?active="${0}"></gr-view-sources> <gr-view-places class="page" ?active="${0}"></gr-view-places> <gr-view-map class="page" ?active="${0}"></gr-view-map> <gr-view-tree class="page" ?active="${0}"></gr-view-tree> <gr-view-event class="page" ?active="${0}" id="gr-view-event"></gr-view-event> <gr-view-place class="page" ?active="${0}" id="gr-view-place"></gr-view-place> <gr-view-source class="page" ?active="${0}" id="gr-view-source"></gr-view-source> <gr-view404 class="page" ?active="${0}"></gr-view404> </main> <gr-lightbox-element .opened="${0}"> <gr-media-element handle="${0}"> </gr-media-element> </gr-lightbox-element> <snack-bar ?active="${0}"> You are now ${0}.</snack-bar> `),this._drawerOpened?"none":"initial",this._menuButtonClicked,El,this._drawerOpened,this._wideLayout,this._drawerOpenedChanged,"dashboard"===this._page,Tl,xl("Home Page"),"people"===this._page,Pl,xl("People"),"families"===this._page,kl,xl("Families"),"events"===this._page,Ll,xl("Events"),"sources"===this._page,Vl,xl("Sources"),"places"===this._page,Dl,xl("Places"),"map"===this._page,zl,xl("Map"),this._mainPerson?rt(ve||(ve=we`<span class="link" @click="${0}">${0}</span> `),this._setMainPersonActive,Bl):"",this._activePerson?this._activePerson.name_surname+",":"",this._activePerson?this._activePerson.name_given:"","person"===this._page,this._activePerson.gramps_id,Al,xl("Details"),"tree"===this._page,Rl,xl("Family Tree"),this._logout,Fl,"dashboard"===this._page,"people"===this._page,"person"===this._page,"families"===this._page,"events"===this._page,"sources"===this._page,"places"===this._page,"map"===this._page,"tree"===this._page,"event"===this._page,"place"===this._page,"source"===this._page,"view404"===this._page,this._lightboxOpened,this._activeMedium,this._snackbarOpened,this._offline?"offline":"online"):rt(ge||(ge=we` <style>div#outer{display:grid;height:100vh;margin:0;place-items:center center}div#inner{text-align:center}paper-spinner-lite{width:3em;height:3em;--paper-spinner-color:#5D4037}img#logo{height:5em}</style> <div id="outer"> <div id="inner"> <p><img id="logo" src="images/logo.svg"></p> <p><paper-spinner-lite active></paper-spinner-lite></p> <p>Loading family tree ...</p> </div> </div> `)):rt(ye||(ye=we` <style>div#outer{display:grid;height:100vh;margin:0;place-items:center center}</style> <div id="outer"> <div id="inner"> <form id="login-form"> <paper-input @keypress="${0}" label="username" id="login-input-user"></paper-input> <paper-input @keypress="${0}" label="password" type="password" id="login-input-pw"></paper-input> <paper-button raised @click="${0}">login</paper-button> </form> </div> </div> `),this._handleInputKeypress,this._handleInputKeypress,this._submitLogin)}static get properties(){return{appTitle:{type:String},_page:{type:String},_drawerOpened:{type:Boolean},_lightboxOpened:{type:Boolean},_snackbarOpened:{type:Boolean},_offline:{type:Boolean},_wideLayout:{type:Boolean},_people:{type:Array},_activePerson:{type:String},_loaded:{type:Boolean},_token:{type:String}}}constructor(){super(),It=!0,this._loaded=!1,this._lightboxOpened=!1,this._token="",this._loadDispatched=!1}firstUpdated(){var e,t;e=e=>{return Sl.dispatch((t=decodeURIComponent(e.pathname),e=>{const i="/"===t?"dashboard":t.slice(1),n=i.split("/")[0],r=i.split("/")[1];e(void 0!==r?Yt(n,r):Wt(n)),e(ni(!1))}));var t},document.body.addEventListener("click",t=>{if(t.defaultPrevented||0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)return;const i=t.composedPath().filter(e=>"A"===e.tagName)[0];if(!i||i.target||i.hasAttribute("download")||"external"===i.getAttribute("rel"))return;const n=i.href;if(!n||-1!==n.indexOf("mailto:"))return;const r=window.location,s=r.origin||r.protocol+"//"+r.host;0===n.indexOf(s)&&(t.preventDefault(),n!==r.href&&(window.history.pushState({},"",n),e(r,t)))}),window.addEventListener("popstate",t=>e(window.location,t)),e(window.location,null),t=e=>Sl.dispatch(ii(e)),window.addEventListener("online",()=>t(!1)),window.addEventListener("offline",()=>t(!0)),t(!1===navigator.onLine),((e,t)=>{let i=window.matchMedia(e);i.addListener(e=>t(e.matches)),t(i.matches)})("(min-width: 768px)",e=>{return Sl.dispatch((t=e,(e,i)=>{e({type:"UPDATE_WIDE_LAYOUT",wideLayout:t}),e(ni(t))}));var t}),this.addEventListener("lightbox-opened-changed",e=>this._lightboxOpenedChanged(e)),this.addEventListener("media-load-error",np(this._refreshToken,5e3)),this.addEventListener("media-selected",e=>this._mediaSelected(e))}_setMainPersonActive(){"person"===this._page&&window.history.pushState({},"","/person/"+this._mainPerson),Sl.dispatch(Xt(this._mainPerson))}_loadData(e,t){this._loadDispatched=!0,Sl.dispatch(((e,t)=>async i=>{fetch(window.APIHOST+"/api/tree",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+e}}).then(e=>{var n=e.status;return 401==n?(i(si(t)),null):(403!=n&&422!=n||i(di()),e.json())}).then(e=>e).then(e=>{if(e)if(i(li(e)),""!=e.dbinfo.default_person)i(ei(e.dbinfo.default_person));else{let t=Object.keys(e.people)[0];i(ei(e.people[t].gramps_id))}}).catch(e=>{console.log(e)})})(e,t)),Sl.dispatch(async e=>{fetch(window.APIHOST+"/api/translate?strings="+JSON.stringify(ci)).then(e=>e.json()).then(t=>e(hi(t))).catch(e=>console.log(e))})}_refreshToken(){let e=Sl.getState().api.refresh_token;e&&Sl.dispatch(si(e))}updated(e){if(e.has("_page")){const e=this.appTitle+" - "+this._page;(({title:e,description:t,url:i,image:n,imageAlt:r})=>{e&&(document.title=e,qt("property","og:title",e)),t&&(qt("name","description",t),qt("property","og:description",t)),n&&qt("property","og:image",n),r&&qt("property","og:image:alt",r),qt("property","og:url",i=i||window.location.href)})({title:e,description:e})}}_menuButtonClicked(){Sl.dispatch(ni(!0))}_logout(){this._token=null,this._refresh_token=null,this._loaded=!1,Sl.dispatch(di()),Sl.dispatch({type:"LOGOUT"})}_drawerOpenedChanged(e){Sl.dispatch(ni(e.target.opened))}_lightboxOpenedChanged(e){var t;Sl.dispatch((t=e.detail.opened,(e,i)=>{i().app.lightboxOpened!==t&&e({type:"UPDATE_LIGHTBOX_STATE",opened:t})}))}_mediaSelected(e){var t;Sl.dispatch((t=e.detail,e=>{e({type:"ACTIVE_MEDIA",media:t})}))}_toggleCollapse(e){this.shadowRoot.querySelector("#collapse-advanced").show();this.shadowRoot.querySelector("#more-options").style.display="none"}_submitLogin(e){const t=this.shadowRoot.querySelector("#login-input-user"),i=this.shadowRoot.querySelector("#login-input-pw");var n,r;Sl.dispatch((n=t.value,r=i.value,async e=>{fetch(window.APIHOST+"/api/login",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:n,password:r})}).then(e=>e.json()).then(t=>{let i=Date.now()+9e5;e(oi(t.access_token,i)),e(ai(t.refresh_token))}).catch(e=>{console.log(e)})}))}_handleInputKeypress(e){"Enter"==e.key&&this._submitLogin(e)}stateChanged(e){if(!this._token||this._loaded||this._loadDispatched?this._token==e.api.token||this._loaded||(this._loadDispatched=!1,this._loadData(e.api.token,e.api.refresh_token)):this._loadData(e.api.token,e.api.refresh_token),this._token=e.api.token,e.api.expires){e.api.expires-Date.now()<3e4&&np(this._refreshToken,5e3)()}this._loaded||("api"in e&&"people"in e.api&&Object.keys(e.api.people).length&&Object.keys(e.api.families).length&&Object.keys(e.api.events).length&&Object.keys(e.api.strings).length&&Object.keys(e.api.dbinfo).length?this._loaded=!0:this._loaded=!1),this._loaded&&(this._token=e.api.token,this._refresh_token=e.api.refresh_token,this._page=e.app.page,this._offline=e.app.offline,this._snackbarOpened=e.app.snackbarOpened,this._drawerOpened=e.app.drawerOpened,this._lightboxOpened=e.app.lightboxOpened,this._wideLayout=e.app.wideLayout,this._people=e.api.people,this._activeMedium=e.app.activeMedium,this._activePerson=e.api.people[e.app.activePerson],this._activeEvent=e.api.people[e.app.activeEvent],this._mainPerson=e.api.dbinfo.default_person)}}function np(e,t){var i=!1;return function(){i||(e.call(),i=!0,setTimeout((function(){i=!1}),t))}}window.customElements.define("gr-app",ip);export{Xn as A,_a as B,No as C,Jr as D,Zs as E,Cs as F,Ds as G,Yn as H,Ua as I,so as J,na as K,vt as L,Jo as M,At as N,Gs as O,Io as P,yn as Q,Ul as R,Cl as S,Xo as T,va as U,fa as V,Nn as W,On as X,vo as Y,Po as Z,ni as _,Xt as a,ia as b,Kt as c,Na as d,ks as e,ql as f,Kl as g,rt as h,il as i,Za as j,Ka as k,Nl as l,Il as m,_o as n,wa as o,zn as p,al as q,gt as r,Sl as s,xl as t,Ol as u,Ql as v,oo as w,Gr as x,Wn as y,Jn as z};
