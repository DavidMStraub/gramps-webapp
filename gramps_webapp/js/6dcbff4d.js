let e,t,r,i,a,s,n,o,l,d=e=>e;import{c as p,s as c,L as h,h as g,S as u,a as m,P as b,b as f,I as v,d as _,e as y,t as k}from"./6cc4148d.js";import{P as x}from"./434fb578.js";import"./4641923e.js";import"./afe1b6f3.js";import{P as w,a as P}from"./bc7887fc.js";class $ extends(p(c)(h)){render(){return g(e||(e=d` <style>div#container{position:relative}div.card{position:absolute}div.branch-left,div.branch-right{position:absolute;border-color:#aaa;border-style:solid;border-width:0}div.branch-right.male{border-top-left-radius:15px;border-left-width:1px;border-top-width:1px}div.branch-right.female{border-bottom-left-radius:15px;border-left-width:1px;border-bottom-width:1px}div.branch-left.male{border-bottom-width:1px}div.branch-left.female{border-top-width:1px}div.icon svg path{fill:#ccc}.gray{color:#aaa}</style> <div id="container" style="height:${0}px"> ${0} ${0} </div> `),2**(this.depth-1)*100,this._people.map((e,a)=>a>this.depth-1?"":g(t||(t=d` ${0} `),e.map((e,t)=>Object.keys(e).length?g(r||(r=d` <div class="card" style="left:${0}px;top:${0}px"> <gr-pedigree-card .person="${0}" @person-selected="${0}" token="${0}"> </gr-pedigree-card> ${0} </div> `),230*a,100*(2**(this.depth-a-1)*(t+.5)-.5),e,this._personSelected,this._token,0==a?"":g(i||(i=d` <div class="branch-right ${0}" style="left:0;top:${0}px;margin-left:-20px;width:20px;height:${0}px"> </div> <div class="branch-left ${0}" style="left:0;top:${0}px;margin-left:-40px;width:20px;height:${0}px"> </div> `),1===e.gender?"male":"female",1===e.gender?45:100*-(2**(this.depth-a-2))+45,2**(this.depth-a-2)*100,1===e.gender?"male":"female",1===e.gender?45:100*-(2**(this.depth-a-2))+45,2**(this.depth-a-2)*100)):""))),this._children.map((e,t)=>Object.keys(e).length?g(a||(a=d` <div style="height:20px;left:0;${0} font-size:.8em;position:absolute;top:${0}px"> <a @click="${0}" href="tree"><span class="gray">└</span>&nbsp; ${0}</a> </div> `),e.families.length?"font-weight:bold;":"font-weight:normal;",100*(2**(this.depth-0-1)*.5-.5+1)+20*t,()=>this._selectPerson(e.gramps_id),e.name_given):""))}static get styles(){return[u]}static get properties(){return{_people:{type:Array},_children:{type:Array},_token:{type:String},depth:{type:Number}}}stateChanged(e){this._token=e.api.token,this._people=this._getTree(e,e.app.activePerson,6),this._children=this._getChildren(e,e.app.activePerson)}_personSelected(e){c.dispatch(m(e.detail.gramps_id))}_selectPerson(e){c.dispatch(m(e))}_getTree(e,t,r){var i=[];if(i.push([this._getPerson(e,t)]),1==r)return i;if(i.push(this._getParents(e,t)),2==r)return i;for(var a=3;a<=r;a++)i.push(i.slice(-1)[0].map(t=>this._getParents(e,t.gramps_id)).flat());return i}_getPerson(e,t){return null==t?{}:e.api.people[t]}_getParents(e,t){if(null==t)return[{},{}];const r=e.api.people[t];if(""==r.parents)return[{},{}];const i=e.api.families[r.parents];if(i.father_id)var a=this._getPerson(e,i.father_id);else a={};if(i.mother_id)var s=this._getPerson(e,i.mother_id);else s={};return[a,s]}_getChildren(e,t){if(null==t)return[];const r=e.api.people[t];if(r.families==[])return[];var i=r.families.flatMap(t=>e.api.families[t].children);return i=i.map(t=>e.api.people[t])}}window.customElements.define("gr-pedigree-element",$);const X={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(e){return(this._clampValue(e)-this.min)/(this.max-this.min)},_clampValue:function(e){return Math.min(this.max,Math.max(this.min,this._calcStep(e)))},_calcStep:function(e){if(e=parseFloat(e),!this.step)return e;var t=Math.round((e-this.min)/this.step);return this.step<1?t/(1/this.step)+this.min:t*this.step+this.min},_validateValue:function(){var e=this._clampValue(this.value);return this.value=this.oldValue=isNaN(e)?this.oldValue:e,this.value!==e},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}};b({_template:f(s||(s=d`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`)),is:"paper-progress",behaviors:[X],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(e){this.toggleClass("indeterminate",e,this.$.primaryProgress)},_transformProgress:function(e,t){var r="scaleX("+t/100+")";e.style.transform=e.style.webkitTransform=r},_mainRatioChanged:function(e){this._transformProgress(this.$.primaryProgress,e)},_progressChanged:function(e,t,r,i,a){e=this._clampValue(e),t=this._clampValue(t);var s=100*this._calcRatio(e),n=100*this._calcRatio(t);this._setSecondaryRatio(s),this._transformProgress(this.$.secondaryProgress,s),this._transformProgress(this.$.primaryProgress,n),this.secondaryProgress=e,a?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",t),this.setAttribute("aria-valuemin",r),this.setAttribute("aria-valuemax",i)},_disabledChanged:function(e){this.setAttribute("aria-disabled",e?"true":"false")},_hideSecondaryProgress:function(e){return 0===e}});const K=f(n||(n=d`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`));K.setAttribute("strip-whitespace",""),b({_template:K,is:"paper-slider",behaviors:[v,_,w,X],properties:{value:{type:Number,value:0},snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&y(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(e,t,r,i,a){this.setAttribute("aria-valuemin",t),this.setAttribute("aria-valuemax",r),this.setAttribute("aria-valuenow",e),this._positionKnob(100*this._calcRatio(e))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(e){this._setImmediateValue(this._calcStep(this._calcKnobPosition(e))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(e){return(this.max-this.min)*e/100+this.min},_onTrack:function(e){switch(e.stopPropagation(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd()}},_trackStart:function(e){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(e){this.dragging||this._trackStart(e);var t=this._isRTL?-1:1,r=Math.min(this._maxx,Math.max(this._minx,e.detail.dx*t));this._x=this._startx+r;var i=this._calcStep(this._calcKnobPosition(this._x/this._w*100));this._setImmediateValue(i);var a=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(a+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var e=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,e.transform=e.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(e){this._expandKnob(),e.preventDefault(),this.focus()},_bartrack:function(e){this._allowBarEvent(e)&&this._onTrack(e)},_barclick:function(e){this._w=this.$.sliderBar.offsetWidth;var t=this.$.sliderBar.getBoundingClientRect(),r=(e.detail.x-t.left)/this._w*100;this._isRTL&&(r=100-r);var i=this.ratio;this._setTransiting(!0),this._positionKnob(r),i===this.ratio&&this._setTransiting(!1),this.async((function(){this.fire("change",{composed:!0})})),e.preventDefault(),this.focus()},_bardown:function(e){this._allowBarEvent(e)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(e))},_knobTransitionEnd:function(e){e.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(e,t,r,i){i||this._setMarkers([]);var a=Math.round((r-t)/this.step);a>e&&(a=e),(a<0||!isFinite(a))&&(a=0),this._setMarkers(new Array(a))},_mergeClasses:function(e){return Object.keys(e).filter((function(t){return e[t]})).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(e){return!this.ignoreBarTouch||e.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(e){this._isRTL?this._incrementKey(e):this._decrementKey(e)},_rightKey:function(e){this._isRTL?this._decrementKey(e):this._incrementKey(e)},_incrementKey:function(e){this.disabled||("end"===e.detail.key?this.value=this.max:this.increment(),this.fire("change"),e.preventDefault())},_decrementKey:function(e){this.disabled||("home"===e.detail.key?this.value=this.min:this.decrement(),this.fire("change"),e.preventDefault())},_changeValue:function(e){this.value=e.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(e){e.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,P._createRipple.call(this)},_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=e?"":"none",this._ripple.holdDown=e)}});class T extends(p(c)(x)){render(){return null==this._gramps_id?g(o||(o=d` <section> <p>Loading ...</p> </section> `)):g(l||(l=d` <style>.label{font-size:.8em;color:#666;padding-top:.4em}</style> <section id="pedigree-section"> <div> <span class="label">${0}</span> <paper-slider min="2" max="6" .value="${0}" @value-changed="${0}" pin step="1" snaps> </paper-slider> </div> <div style="transform:scale(${0});transform-origin:top left" id="pedigree-container"> <gr-pedigree-element .depth="${0}" id="pedigree"> </gr-pedigree-element> </div> </section> `),k("Number of generations:"),this._depth,this._updateDepth,this._zoom,this._depth)}static get properties(){return{_gramps_id:{type:String},_depth:{type:Number},_zoom:{type:Number}}}_updateDepth(e){e.detail.value&&(this._depth=e.detail.value)}constructor(){super(),this._depth=4,this._zoom=1}static get styles(){return[u]}getZoom(){let e=(this.shadowRoot.getElementById("pedigree-section").offsetWidth-24)/(230*this._depth*this._zoom)*this._zoom;return e>1?1:e<.2?.2:e}setZoom(){this._zoom=this.getZoom()}_resizeHandler(e){clearTimeout(this._resizeTimer);var t=this;this._resizeTimer=setTimeout((function(){t.setZoom()}),250)}firstUpdated(){window.addEventListener("resize",this._resizeHandler.bind(this)),c.getState().app.wideLayout?this._depth=4:this._depth=3,this.setZoom()}stateChanged(e){this._gramps_id=e.app.activePerson}updated(e){e.has("_depth")&&this.setZoom()}}window.customElements.define("gr-view-tree",T);
