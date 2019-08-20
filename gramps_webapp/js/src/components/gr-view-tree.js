import{html as html$1,Polymer,html$1 as html,IronA11yKeysBehavior,IronFormElementBehavior,PaperInkyFocusBehavior,PaperInkyFocusBehaviorImpl,setTouchAction,LitElement,html$2,translate,connect,store,SharedStyles,activePerson,PageViewElement}from"./gr-app.js";const IronRangeBehavior={properties:{/**
     * The number that represents the current value.
     */value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},/**
     * The number that indicates the minimum value of the range.
     */min:{type:Number,value:0,notify:!0},/**
     * The number that indicates the maximum value of the range.
     */max:{type:Number,value:100,notify:!0},/**
     * Specifies the value granularity of the range's value.
     */step:{type:Number,value:1,notify:!0},/**
     * Returns the ratio of the value.
     */ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(value){return(this._clampValue(value)-this.min)/(this.max-this.min)},_clampValue:function(value){return Math.min(this.max,Math.max(this.min,this._calcStep(value)))},_calcStep:function(value){// polymer/issues/2493
value=parseFloat(value);if(!this.step){return value}var numSteps=Math.round((value-this.min)/this.step);if(1>this.step){/**
       * For small values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can divide by the reciprocal of `step`
       */return numSteps/(1/this.step)+this.min}else{return numSteps*this.step+this.min}},_validateValue:function(){var v=this._clampValue(this.value);this.value=this.oldValue=isNaN(v)?this.oldValue:v;return this.value!==v},_update:function(){this._validateValue();this._setRatio(100*this._calcRatio(this.value))}};var ironRangeBehavior={IronRangeBehavior:IronRangeBehavior};Polymer({_template:html`
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
`,is:"paper-progress",behaviors:[IronRangeBehavior],properties:{/**
     * The number that represents the current secondary progress.
     */secondaryProgress:{type:Number,value:0},/**
     * The secondary ratio
     */secondaryRatio:{type:Number,value:0,readOnly:!0},/**
     * Use an indeterminate progress indicator.
     */indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},/**
     * True if the progress is disabled.
     */disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(indeterminate){// If we use attribute/class binding, the animation sometimes doesn't
// translate properly on Safari 7.1. So instead, we toggle the class here in
// the update method.
this.toggleClass("indeterminate",indeterminate,this.$.primaryProgress)},_transformProgress:function(progress,ratio){var transform="scaleX("+ratio/100+")";progress.style.transform=progress.style.webkitTransform=transform},_mainRatioChanged:function(ratio){this._transformProgress(this.$.primaryProgress,ratio)},_progressChanged:function(secondaryProgress,value,min,max,indeterminate){secondaryProgress=this._clampValue(secondaryProgress);value=this._clampValue(value);var secondaryRatio=100*this._calcRatio(secondaryProgress),mainRatio=100*this._calcRatio(value);this._setSecondaryRatio(secondaryRatio);this._transformProgress(this.$.secondaryProgress,secondaryRatio);this._transformProgress(this.$.primaryProgress,mainRatio);this.secondaryProgress=secondaryProgress;if(indeterminate){this.removeAttribute("aria-valuenow")}else{this.setAttribute("aria-valuenow",value)}this.setAttribute("aria-valuemin",min);this.setAttribute("aria-valuemax",max)},_disabledChanged:function(disabled){this.setAttribute("aria-disabled",disabled?"true":"false")},_hideSecondaryProgress:function(secondaryRatio){return 0===secondaryRatio}});const template=html$1`
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
`;template.setAttribute("strip-whitespace","");/**
                                               Material design:
                                               [Sliders](https://www.google.com/design/spec/components/sliders.html)
                                               
                                               `paper-slider` allows user to select a value from a range of values by
                                               moving the slider thumb.  The interactive nature of the slider makes it a
                                               great choice for settings that reflect intensity levels, such as volume,
                                               brightness, or color saturation.
                                               
                                               Example:
                                               
                                                   <paper-slider></paper-slider>
                                               
                                               Use `min` and `max` to specify the slider range.  Default is 0 to 100.
                                               
                                               Example:
                                               
                                                   <paper-slider min="10" max="200" value="110"></paper-slider>
                                               
                                               ### Styling
                                               
                                               The following custom properties and mixins are available for styling:
                                               
                                               Custom property | Description | Default
                                               ----------------|-------------|----------
                                               `--paper-slider-container-color` | The background color of the bar | `--paper-grey-400`
                                               `--paper-slider-bar-color` | The background color of the slider | `transparent`
                                               `--paper-slider-active-color` | The progress bar color | `--google-blue-700`
                                               `--paper-slider-secondary-color` | The secondary progress bar color | `--google-blue-300`
                                               `--paper-slider-knob-color` | The knob color | `--google-blue-700`
                                               `--paper-slider-disabled-knob-color` | The disabled knob color | `--paper-grey-400`
                                               `--paper-slider-pin-color` | The pin color | `--google-blue-700`
                                               `--paper-slider-font-color` | The pin's text color | `#fff`
                                               `--paper-slider-markers-color` | The snaps markers color | `#000`
                                               `--paper-slider-disabled-active-color` | The disabled progress bar color | `--paper-grey-400`
                                               `--paper-slider-disabled-secondary-color` | The disabled secondary progress bar color | `--paper-grey-400`
                                               `--paper-slider-knob-start-color` | The fill color of the knob at the far left | `transparent`
                                               `--paper-slider-knob-start-border-color` | The border color of the knob at the far left | `--paper-grey-400`
                                               `--paper-slider-pin-start-color` | The color of the pin at the far left | `--paper-grey-400`
                                               `--paper-slider-height` | Height of the progress bar | `2px`
                                               `--paper-slider-input` | Mixin applied to the input in editable mode | `{}`
                                               `--paper-slider-input-container-input` | Mixin applied to the paper-input-container-input in editable mode | `{}`
                                               
                                               @group Paper Elements
                                               @element paper-slider
                                               @demo demo/index.html
                                               */Polymer({_template:template,is:"paper-slider",behaviors:[IronA11yKeysBehavior,IronFormElementBehavior,PaperInkyFocusBehavior,IronRangeBehavior],properties:{value:{type:Number,value:0},/**
     * If true, the slider thumb snaps to tick marks evenly spaced based
     * on the `step` property value.
     */snaps:{type:Boolean,value:!1,notify:!0},/**
     * If true, a pin with numeric value label is shown when the slider thumb
     * is pressed. Use for settings for which users need to know the exact
     * value of the setting.
     */pin:{type:Boolean,value:!1,notify:!0},/**
     * The number that represents the current secondary progress.
     */secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},/**
     * If true, an input is shown and user can use it to set the slider value.
     */editable:{type:Boolean,value:!1},/**
     * The immediate value of the slider.  This value is updated while the user
     * is dragging the slider.
     */immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},/**
     * The maximum number of markers
     */maxMarkers:{type:Number,value:0,notify:!0},/**
     * If true, the knob is expanded
     */expand:{type:Boolean,value:!1,readOnly:!0},/**
     * If true, a touchmove on the slider bar doesn't drag the slider thunb.
     * Tapping on the slider bar still updates the slider's position
     */ignoreBarTouch:{type:Boolean,value:!1},/**
     * True when the user is dragging the slider.
     */dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},/** @type {!Object} */keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){if(this.ignoreBarTouch){setTouchAction(this.$.sliderBar,"auto")}},/**
   * Increases value by `step` but not above `max`.
   * @method increment
   */increment:function(){this.value=this._clampValue(this.value+this.step)},/**
   * Decreases value by `step` but not below `min`.
   * @method decrement
   */decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(value,min,max,snaps,step){this.setAttribute("aria-valuemin",min);this.setAttribute("aria-valuemax",max);this.setAttribute("aria-valuenow",value);this._positionKnob(100*this._calcRatio(value))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){if(this.dragging){this.fire("immediate-value-change",{composed:!0})}else{this.value=this.immediateValue}},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob");this._setExpand(!1)},_positionKnob:function(ratio){this._setImmediateValue(this._calcStep(this._calcKnobPosition(ratio)));this._setRatio(100*this._calcRatio(this.immediateValue));this.$.sliderKnob.style.left=this.ratio+"%";if(this.dragging){this._knobstartx=this.ratio*this._w/100;this.translate3d(0,0,0,this.$.sliderKnob)}},_calcKnobPosition:function(ratio){return(this.max-this.min)*ratio/100+this.min},_onTrack:function(event){event.stopPropagation();switch(event.detail.state){case"start":this._trackStart(event);break;case"track":this._trackX(event);break;case"end":this._trackEnd();break;}},_trackStart:function(event){this._setTransiting(!1);this._w=this.$.sliderBar.offsetWidth;this._x=this.ratio*this._w/100;this._startx=this._x;this._knobstartx=this._startx;this._minx=-this._startx;this._maxx=this._w-this._startx;this.$.sliderKnob.classList.add("dragging");this._setDragging(!0)},_trackX:function(event){if(!this.dragging){this._trackStart(event)}var direction=this._isRTL?-1:1,dx=Math.min(this._maxx,Math.max(this._minx,event.detail.dx*direction));this._x=this._startx+dx;var immediateValue=this._calcStep(this._calcKnobPosition(100*(this._x/this._w)));this._setImmediateValue(immediateValue);// update knob's position
var translateX=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(translateX+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var s=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging");this._setDragging(!1);this._resetKnob();this.value=this.immediateValue;s.transform=s.webkitTransform="";this.fire("change",{composed:!0})},_knobdown:function(event){this._expandKnob();// cancel selection
event.preventDefault();// set the focus manually because we will called prevent default
this.focus()},_bartrack:function(event){if(this._allowBarEvent(event)){this._onTrack(event)}},_barclick:function(event){this._w=this.$.sliderBar.offsetWidth;var rect=this.$.sliderBar.getBoundingClientRect(),ratio=100*((event.detail.x-rect.left)/this._w);if(this._isRTL){ratio=100-ratio}var prevRatio=this.ratio;this._setTransiting(!0);this._positionKnob(ratio);// if the ratio doesn't change, sliderKnob's animation won't start
// and `_knobTransitionEnd` won't be called
// Therefore, we need to manually update the `transiting` state
if(prevRatio===this.ratio){this._setTransiting(!1)}this.async(function(){this.fire("change",{composed:!0})});// cancel selection
event.preventDefault();// set the focus manually because we will called prevent default
this.focus()},_bardown:function(event){if(this._allowBarEvent(event)){this.debounce("expandKnob",this._expandKnob,60);this._barclick(event)}},_knobTransitionEnd:function(event){if(event.target===this.$.sliderKnob){this._setTransiting(!1)}},_updateMarkers:function(maxMarkers,min,max,snaps){if(!snaps){this._setMarkers([])}var steps=Math.round((max-min)/this.step);if(steps>maxMarkers){steps=maxMarkers}if(0>steps||!isFinite(steps)){steps=0}this._setMarkers(Array(steps))},_mergeClasses:function(classes){return Object.keys(classes).filter(function(className){return classes[className]}).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(event){return!this.ignoreBarTouch||event.detail.sourceEvent instanceof MouseEvent},get _isRTL(){if(this.__isRTL===void 0){this.__isRTL="rtl"===window.getComputedStyle(this).direction}return this.__isRTL},_leftKey:function(event){if(this._isRTL)this._incrementKey(event);else this._decrementKey(event)},_rightKey:function(event){if(this._isRTL)this._decrementKey(event);else this._incrementKey(event)},_incrementKey:function(event){if(!this.disabled){if("end"===event.detail.key){this.value=this.max}else{this.increment()}this.fire("change");event.preventDefault()}},_decrementKey:function(event){if(!this.disabled){if("home"===event.detail.key){this.value=this.min}else{this.decrement()}this.fire("change");event.preventDefault()}},_changeValue:function(event){this.value=event.target.value;this.fire("change",{composed:!0})},_inputKeyDown:function(event){event.stopPropagation()},// create the element ripple inside the `sliderKnob`
_createRipple:function(){this._rippleContainer=this.$.sliderKnob;return PaperInkyFocusBehaviorImpl._createRipple.call(this)},// Hide the ripple when user is not interacting with keyboard.
// This behavior is different from other ripple-y controls, but is
// according to spec:
// https://www.google.com/design/spec/components/sliders.html
_focusedChanged:function(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple()}if(this.hasRipple()){// note, ripple must be un-hidden prior to setting `holdDown`
if(receivedFocusFromKeyboard){this._ripple.style.display=""}else{this._ripple.style.display="none"}this._ripple.holdDown=receivedFocusFromKeyboard}}/**
     * Fired when the slider's value changes.
     *
     * @event value-change
     */ /**
         * Fired when the slider's immediateValue changes. Only occurs while the
         * user is dragging.
         *
         * To detect changes to immediateValue that happen for any input (i.e.
         * dragging, tapping, clicking, etc.) listen for immediate-value-changed
         * instead.
         *
         * @event immediate-value-change
         */ /**
             * Fired when the slider's value changes due to user interaction.
             *
             * Changes to the slider's value due to changes in an underlying
             * bound variable will not trigger this event.
             *
             * @event change
             */});class MyPedigreeElement extends connect(store)(LitElement){render(){return html$2`
      <style>
      div#container {
        position: relative;
      }
      div.card {
        position: absolute;
      }
      div.branch-right, div.branch-left {
        position: absolute;
        border-color: #aaa;
        border-style: solid;
        border-width: 0px;
      }
      div.branch-right.male {
        border-top-left-radius: 15px;
        border-left-width: 1px;
        border-top-width: 1px;
      }
      div.branch-right.female {
        border-bottom-left-radius: 15px;
        border-left-width: 1px;
        border-bottom-width: 1px;
      }
      div.branch-left.male {
        border-bottom-width: 1px;
      }
      div.branch-left.female {
        border-top-width: 1px;
      }
      div.icon svg path {
        fill: #ccc;
      }
      .gray {
        color: #aaa;
      }
      </style>
      <div id="container" style="height: ${100*2**(this.depth-1)}px;">
      ${this._people.map((g,i)=>i>this.depth-1?"":html$2`
        ${g.map((p,j)=>Object.keys(p).length?html$2`
          <div
          class="card"
          style="
            left: ${230*i}px;
            top: ${100*(2**(this.depth-i-1)*(j+.5)-.5)}px;
          ">
            <gr-pedigree-card
              .person=${p}
              @person-selected="${this._personSelected}"
              host=${this._host}
              token=${this._token}
            >
            </gr-pedigree-card>
            ${0==i?"":html$2`
            <div
            class="branch-right ${1===p.gender?"male":"female"}"
            style="
            left: 0px;
            top: ${1===p.gender?45:100*-(2**(this.depth-i-2))+45}px;
            margin-left:-20px;
            width: 20px;
            height: ${100*2**(this.depth-i-2)}px;
            "
            >
            </div>
            <div
            class="branch-left ${1===p.gender?"male":"female"}"
            style="
            left: 0px;
            top: ${1===p.gender?45:100*-(2**(this.depth-i-2))+45}px;
            margin-left:-40px;
            width: 20px;
            height: ${100*2**(this.depth-i-2)}px;
            "
            >
            </div>
            `}
          </div>
        `:"")}
      `)}
      ${this._children.map((p,i)=>Object.keys(p).length?html$2`
        <div
        style="
          height:20px;
          left:0px;
          ${p.families.length?"font-weight:bold;":"font-weight:normal;"}
          font-size:0.8em;
          position: absolute;
          top: ${100*(2**(this.depth-0-1)*(0+.5)-.5+1)+20*i}px;
        ">
        <a @click="${()=>this._selectPerson(p.gramps_id)}" href="tree"><span class="gray">└</span>&nbsp; ${p.name_given}</a>
        </div>
      `:"")}
      </div>
      `}static get styles(){return[SharedStyles]}static get properties(){return{_people:{type:Array},_children:{type:Array},_host:{type:String},_token:{type:String},depth:{type:Number}}}stateChanged(state){this._host=state.app.host;this._token=state.api.token;this._people=this._getTree(state,state.app.activePerson,6);this._children=this._getChildren(state,state.app.activePerson)}_personSelected(e){store.dispatch(activePerson(e.detail.gramps_id))}_selectPerson(gramps_id){store.dispatch(activePerson(gramps_id))}_getTree(state,start_id,depth){var _people=[[this._getPerson(state,start_id)]];if(1==depth){return _people}_people.push(this._getParents(state,start_id));if(2==depth){return _people}for(var i=3;i<=depth;i++){_people.push(_people.slice(-1)[0].map(p=>this._getParents(state,p.gramps_id)).flat())}return _people}_getPerson(state,gramps_id){if(gramps_id==void 0){return{}}return state.api.people[gramps_id]}_getParents(state,gramps_id){if(gramps_id==void 0){return[{},{}]}const _person=state.api.people[gramps_id];if(""==_person.parents){return[{},{}]}const _parents=state.api.families[_person.parents];if(_parents.father_id){var _father=this._getPerson(state,_parents.father_id)}else{var _father={}}if(_parents.mother_id){var _mother=this._getPerson(state,_parents.mother_id)}else{var _mother={}}return[_father,_mother]}_getChildren(state,gramps_id){if(gramps_id==void 0){return[]}const _person=state.api.people[gramps_id];if([]==_person.families){return[]}var _children=_person.families.flatMap(f=>state.api.families[f].children);_children=_children.map(id=>state.api.people[id]);return _children}//
//   var _person = state.api.people[state.app.activePerson];
//   this._people.push(_person);
//   var _arr = this.addParents(state, _person.gramps_id, this._people);
//   var _father = _arr[0];
//   var _mother = _arr[1];
//   this._people = _arr[2];
//   if (_father){
//     var _arr = this.addParents(state, _father, this._people);
//     var _father = _arr[0];
//     var _mother = _arr[1];
//     this._people = _arr[2];
//   }
//   if (_mother){
//     var _arr = this.addParents(state, _mother, this._people);
//     var _father = _arr[0];
//     var _mother = _arr[1];
//     this._people = _arr[2];
//   }
// }
//
// addParents(state, gramps_id, people_arr) {
//   var _person = state.api.people[gramps_id];
//   if (!_person.parents) {
//     return ['', '', people_arr];
//   }
//   var _parents = state.api.families[_person.parents];
//   if (!_parents.father_id) {
//     people_arr.push({})
//   } else {
//     people_arr.push(state.api.people[_parents.father_id])
//   }
//   if (!_parents.mother_id) {
//     people_arr.push({})
//   } else {
//     people_arr.push(state.api.people[_parents.mother_id])
//   }
//   return [_parents.father_id, _parents.mother_id, people_arr];
// }
}window.customElements.define("gr-pedigree-element",MyPedigreeElement);class MyViewTree extends connect(store)(PageViewElement){render(){if(this._gramps_id==void 0){return html$2`
      <section>
        <p>Loading ...</p>
      </section>
      `}return html$2`
      <style>
      .label {
        font-size: 0.8em;
        color: #666666;
        padding-top: 0.4em;
      }
      </style>
      <section id="pedigree-section">
        <div>
          <span class="label">${translate("Number of generations:")}</span>
          <paper-slider min="2" max="6" .value="${this._depth}" @value-changed="${this._updateDepth}" pin step="1" snaps>
          </paper-slider>
        </div>
        <div style="transform: scale(${this._zoom}); transform-origin: top left;" id="pedigree-container">
          <gr-pedigree-element .depth="${this._depth}" id="pedigree">
          </gr-pedigree-element>
        </div>
      </section>
    `}static get properties(){return{_gramps_id:{type:String},_depth:{type:Number},_zoom:{type:Number}}}_updateDepth(event){if(event.detail.value){this._depth=event.detail.value}}constructor(){super();this._depth=4;this._zoom=1}static get styles(){return[SharedStyles]}getZoom(){let sec=this.shadowRoot.getElementById("pedigree-section"),sec_width=sec.offsetWidth,tree_width=230*this._depth*this._zoom,new_zoom=(sec_width-24)/tree_width*this._zoom;if(1<new_zoom){return 1}else if(.2>new_zoom){return .2}else{return new_zoom}}setZoom(){this._zoom=this.getZoom()}_resizeHandler(e){clearTimeout(this._resizeTimer);var self=this;this._resizeTimer=setTimeout(function(){self.setZoom()},250)}firstUpdated(){window.addEventListener("resize",this._resizeHandler.bind(this));var state=store.getState();if(state.app.wideLayout){this._depth=4}else{this._depth=3}this.setZoom()}stateChanged(state){this._gramps_id=state.app.activePerson}updated(changedProps){if(changedProps.has("_depth")){this.setZoom()}}}window.customElements.define("gr-view-tree",MyViewTree);export{ironRangeBehavior as $ironRangeBehavior,IronRangeBehavior};