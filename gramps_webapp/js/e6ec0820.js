let e,t,i,r,s,o,a,n,l,h,d=e=>e;import{b as c,C as _,q as u,v as p,w as m,D as g,x as f,y as b,z as v,A as y,E as A,B as C,G as x,F as w,H as I,J as S,K as E,M as T,n as z,N as k,O as P}from"./80126bfe.js";import{D as R,E as O,T as L,C as $}from"./fe5344c8.js";class H extends HTMLElement{static get version(){return"1.3.2"}}customElements.define("vaadin-material-styles",H);const D=document.createElement("template");D.innerHTML='<dom-module id="material-color-light">\n  <template>\n    <style>\n      :host,\n      #host-fix {\n        /* Text colors */\n        --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));\n        --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));\n        --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));\n\n        /* Primary colors */\n        --material-primary-color: var(--primary-color, #6200ee);\n        --material-primary-contrast-color: var(--dark-theme-base-color, #fff);\n        --material-primary-text-color: var(--material-primary-color);\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #b00020);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--light-theme-background-color, #fff);\n        --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);\n        --material-disabled-color: rgba(0, 0, 0, 0.26);\n\n        /* Divider colors */\n        --material-divider-color: rgba(0, 0, 0, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: initial;\n        --_material-text-field-input-line-opacity: initial;\n        --_material-text-field-input-line-hover-opacity: initial;\n        --_material-text-field-focused-label-opacity: initial;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: initial;\n        --_material-button-outline-color: initial;\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: initial;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: initial;\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n\n      [theme~="dark"] {\n        /* Text colors */\n        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));\n        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));\n        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));\n\n        /* Primary colors */\n        --material-primary-color: var(--light-primary-color, #7e3ff2);\n        --material-primary-text-color: #b794f6;\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #de2839);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--dark-theme-background-color, #303030);\n        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);\n        --material-disabled-color: rgba(255, 255, 255, 0.3);\n\n        /* Divider colors */\n        --material-divider-color: rgba(255, 255, 255, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: #fff;\n        --_material-text-field-input-line-opacity: 0.7;\n        --_material-text-field-input-line-hover-opacity: 1;\n        --_material-text-field-focused-label-opacity: 1;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);\n        --_material-button-outline-color: rgba(255, 255, 255, 0.2);\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);\n        --_material-grid-row-selected-overlay-opacity: 0.16;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n\n      a {\n        color: inherit;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="material-color-dark">\n  <template>\n    <style>\n      :host,\n      #host-fix {\n        /* Text colors */\n        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));\n        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));\n        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));\n\n        /* Primary colors */\n        --material-primary-color: var(--light-primary-color, #7e3ff2);\n        --material-primary-text-color: #b794f6;\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #de2839);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--dark-theme-background-color, #303030);\n        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);\n        --material-disabled-color: rgba(255, 255, 255, 0.3);\n\n        /* Divider colors */\n        --material-divider-color: rgba(255, 255, 255, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: #fff;\n        --_material-text-field-input-line-opacity: 0.7;\n        --_material-text-field-input-line-hover-opacity: 1;\n        --_material-text-field-focused-label-opacity: 1;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);\n        --_material-button-outline-color: rgba(255, 255, 255, 0.2);\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);\n        --_material-grid-row-selected-overlay-opacity: 0.16;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n    </style>\n  </template>\n</dom-module><custom-style>\n  <style>\n    :root {\n      /* Text colors */\n      --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));\n      --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));\n      --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));\n\n      /* Primary colors */\n      --material-primary-color: var(--primary-color, #6200ee);\n      --material-primary-contrast-color: var(--dark-theme-base-color, #fff);\n      --material-primary-text-color: var(--material-primary-color);\n\n      /* Error colors */\n      --material-error-color: var(--error-color, #b00020);\n      --material-error-text-color: var(--material-error-color);\n\n      /* Background colors */\n      --material-background-color: var(--light-theme-background-color, #fff);\n      --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);\n      --material-disabled-color: rgba(0, 0, 0, 0.26);\n\n      /* Divider colors */\n      --material-divider-color: rgba(0, 0, 0, 0.12);\n    }\n  </style>\n</custom-style>',document.head.appendChild(D.content);const F=document.createElement("template");if(F.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Font family */\n      --material-font-family: 'Roboto', sans-serif;\n\n      /* Font sizes */\n      --material-h1-font-size: 6rem;\n      --material-h2-font-size: 3.75rem;\n      --material-h3-font-size: 3rem;\n      --material-h4-font-size: 2.125rem;\n      --material-h5-font-size: 1.5rem;\n      --material-h6-font-size: 1.25rem;\n      --material-body-font-size: 1rem;\n      --material-small-font-size: 0.875rem;\n      --material-button-font-size: 0.875rem;\n      --material-caption-font-size: 0.75rem;\n\n      /* Icon size */\n      --material-icon-font-size: 20px;\n    }\n  </style>\n</custom-style><dom-module id=\"material-typography\">\n  <template>\n    <style>\n      body {\n        font-family: var(--material-font-family);\n        font-size: var(--material-body-font-size);\n        line-height: 1.4;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: inherit;\n        line-height: 1.1;\n        margin-top: 1.5em;\n      }\n\n      h1 {\n        font-size: var(--material-h3-font-size);\n        font-weight: 300;\n        letter-spacing: -0.015em;\n        margin-bottom: 1em;\n        text-indent: -0.07em;\n      }\n\n      h2 {\n        font-size: var(--material-h4-font-size);\n        font-weight: 300;\n        letter-spacing: -0.01em;\n        margin-bottom: 0.75em;\n        text-indent: -0.07em;\n      }\n\n      h3 {\n        font-size: var(--material-h5-font-size);\n        font-weight: 400;\n        margin-bottom: 0.75em;\n        text-indent: -0.05em;\n      }\n\n      h4 {\n        font-size: var(--material-h6-font-size);\n        font-weight: 400;\n        letter-spacing: 0.01em;\n        margin-bottom: 0.75em;\n        text-indent: -0.05em;\n      }\n\n      h5 {\n        font-size: var(--material-body-font-size);\n        font-weight: 500;\n        margin-bottom: 0.5em;\n        text-indent: -0.025em;\n      }\n\n      h6 {\n        font-size: var(--material-small-font-size);\n        font-weight: 500;\n        letter-spacing: 0.01em;\n        margin-bottom: 0.25em;\n        text-indent: -0.025em;\n      }\n\n      a,\n      b,\n      strong {\n        font-weight: 500;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(F.content),!window.polymerSkipLoadingFontRoboto){const e="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",t=document.createElement("link");t.rel="stylesheet",t.type="text/css",t.crossOrigin="anonymous",t.href=e,document.head.appendChild(t)}const M=c(e||(e=d`<dom-module id="material-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        background-color: var(--material-background-color);
        font-family: var(--material-font-family);
        font-size: var(--material-small-font-size);
        line-height: 20px;
        color: var(--material-body-text-color);
      }

      [part~="cell"] {
        min-height: 48px;
        -webkit-tap-highlight-color: transparent;
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: 8px 16px;
      }

      [part~="details-cell"] ::slotted(vaadin-grid-cell-content) {
        padding: 14px 16px;
      }

      [part~="header-cell"],
      [part~="footer-cell"] {
        background-color: var(--material-background-color);
        color: var(--material-secondary-text-color);
        font-size: var(--material-caption-font-size);
        font-weight: 500;
      }

      /* Header and footer divider between body rows */

      [part~="body-cell"],
      [part~="details-cell"],
      [part~="row"]:last-child > [part~="header-cell"] {
        border-bottom: 1px solid var(--material-divider-color);
      }

      [part~="row"]:first-child > [part~="footer-cell"] {
        border-top: 1px solid var(--material-divider-color);
      }

      /* Body rows/cells */

      [part~="body-cell"] {
        background-color: var(--material-background-color);
      }

      [part~="row"]:hover > [part~="body-cell"] {
        background: linear-gradient(var(--_material-grid-row-hover-background-color, rgba(0, 0, 0, 0.04)), var(--_material-grid-row-hover-background-color, rgba(0, 0, 0, 0.04))) var(--material-background-color);
      }

      @media (hover: none) {
        [part~="row"]:hover > [part~="body-cell"] {
          background: var(--material-background-color);
        }
      }

      /* Selected row */

      [part~="body-cell"]::before {
        content: "";
        pointer-events: none;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--material-primary-color);
        opacity: 0;
        transition: opacity .1s cubic-bezier(.4, 0, .2, .1);
      }

      :host(:not([reordering])) [part~="row"][selected] > [part~="body-cell"]::before {
        opacity: var(--_material-grid-row-selected-overlay-opacity, .08);
      }

      [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
        /* NOTE(platosha): Raise cell content above background cell pseudo elements */
        position: relative;
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: var(--material-secondary-background-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--material-background-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: var(--material-background-color);
      }

      /* Frozen columns */

      [part~="cell"][last-frozen] {
        border-right: 1px solid var(--material-divider-color);
      }

      /* Column resizing */

      [part~="cell"]:not([last-frozen]) [part="resize-handle"] {
        border-right: 1px solid var(--material-divider-color);
      }

      /* Keyboard navigation */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus {
        box-shadow: inset 0 0 0 2px var(--material-primary-color);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--material-primary-color);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 3px;
        pointer-events: none;
        background: var(--material-primary-color);
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][details-opened][dragover="below"] [part~="cell"]:not([part~="details-cell"])::after,
      [part~="row"][details-opened][dragover="above"] [part~="details-cell"]::after {
        display: none;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
        opacity: 0.5;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--material-primary-color);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: 4px;
        color: var(--material-primary-contrast-color);
        background-color: var(--material-error-color);
        min-width: 24px;
        border-radius: 2px;
        font-size: var(--material-caption-font-size);
        text-align: center;
        line-height: 1;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part~="cell"][last-frozen] {
        border-right: none;
        border-left: 1px solid var(--material-divider-color);
      }

      :host([dir="rtl"]) [part~="cell"]:not([last-frozen]) [part="resize-handle"] {
        border-right: none;
        border-left: 1px solid var(--material-divider-color);
      }

      :host([dir="rtl"]) #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        left: auto;
        right: var(--_grid-drag-start-x);
      }
    </style>
  </template>
</dom-module>`));document.head.appendChild(M.content);var N=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),B=N&&N[1]>=8,V=b,G=v,W=y;const j=_({behaviors:[u,p],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_collection:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_itemsPerRow:1,_rowHeight:0,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,i){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?i-i%this._itemsPerRow:i:this.grid&&this._virtualCount-1===i?i-i%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(i,r){t<this._scrollBottom&&(e=r),t+=this._getPhysicalSizeIncrement(i)}))}this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,V),this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,i=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var r=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+r,this._physicalStart=this._physicalStart+r,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var s=this._getReusables(i);i?(this._physicalTop=s.physicalTop,this._virtualStart=this._virtualStart+s.indexes.length,this._physicalStart=this._physicalStart+s.indexes.length):(this._virtualStart=this._virtualStart-s.indexes.length,this._physicalStart=this._physicalStart-s.indexes.length),this._update(s.indexes,i?null:s.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),W)}},_getReusables:function(e){var t,i,r,s=[],o=this._hiddenContentSize*this._ratio,a=this._virtualStart,n=this._virtualEnd,l=this._physicalCount,h=this._physicalTop+this._scrollOffset,d=this._physicalBottom+this._scrollOffset,c=this._scrollTop,_=this._scrollBottom;for(e?(t=this._physicalStart,i=c-h):(t=this._physicalEnd,i=d-_);i-=r=this._getPhysicalSizeIncrement(t),!(s.length>=l||i<=o);)if(e){if(n+s.length+1>=this._virtualCount)break;if(h+r>=c-this._scrollOffset)break;s.push(t),h+=r,t=(t+1)%l}else{if(a-s.length<=0)break;if(h+this._physicalSize-r<=_)break;s.push(t),h-=r,t=0===t?l-1:t-1}return{indexes:s,physicalTop:h-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var i=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(i)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart),i=(t=this._convertIndexToCompleteRow(t))-this._physicalCount,r=Math.round(.5*this._physicalCount);if(!(i<0)){if(i>0){var s=window.performance.now();[].push.apply(this._physicalItems,this._createPool(i));for(var o=0;o<i;o++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+i,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+i),this._update(),this._templateCost=(window.performance.now()-s)/i,r=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===r||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,r)),G):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,r),W))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged:function(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._collection=(this.items,null),this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,V))},_iterateItems:function(e,t){var i,r,s,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(i=t[o],r=this._computeVidx(i),null!=(s=e.call(this,i,r)))return s}else{for(i=this._physicalStart,r=this._virtualStart;i<this._physicalCount;i++,r++)if(null!=(s=e.call(this,i,r)))return s;for(i=0;i<this._physicalStart;i++,r++)if(null!=(s=e.call(this,i,r)))return s}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics:function(e){m();var t=0,i=0,r=this._physicalAverageCount,s=this._physicalAverage;this._iterateItems((function(e,r){i+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(i=1===this._itemsPerRow?i:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-i,this._itemsPerRow=1),this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((s*r+t)/this._physicalAverageCount))},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;this._iterateItems((function(t,i){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollTop;!B&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(m(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,i=this._virtualStart,r=0,s=this._hiddenContentSize;i<e&&r<=s;)r+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,i++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+r),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this.updateViewportBoundaries(),this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),V)},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:function(e,t,i){return Math.min(i,Math.max(t,e))},_debounce:function(e,t,i){this._debouncers=this._debouncers||{},this._debouncers[e]=g.debounce(this._debouncers[e],i,t.bind(this)),f(this._debouncers[e])}});class q extends j{static get is(){return"vaadin-grid-scroller"}static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback(),this._scrollHandler()}_updateScrollerItem(e,t){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(e){this._warnPrivateAPIAccess("scrollToIndex"),e>0&&(this._pendingScrollToIndex=null),!parseInt(this.$.items.style.borderTopWidth)&&e>0&&(this._pendingScrollToIndex=e),this._scrollingToIndex=!0,e=Math.min(Math.max(e,0),this._effectiveSize-1),this.$.table.scrollTop=e/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight),this._scrollHandler(),this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(1e6),this._accessIronListAPI(()=>super.scrollToIndex(e-this._vidxOffset)),this._scrollHandler();const t=Array.from(this.$.items.children).filter(t=>t.index===e)[0];if(t){const e=t.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;Math.abs(e)>1&&(this.$.table.scrollTop+=e,this._scrollHandler())}this._scrollingToIndex=!1}_effectiveSizeChanged(e){let t,i=0;if(this._iterateItems((e,r)=>{if(r===this._firstVisibleIndex){const r=this._physicalItems[e];t=r.index,i=r.getBoundingClientRect().top}}),this.items&&e<this.items.length&&(this._scrollTop=0),!Array.isArray(this.items)){const t=this._edge||this._ie?3e4:1e5;this.items={length:Math.min(e,t)}}this._accessIronListAPI(()=>super._itemsChanged({path:"items"})),this._virtualCount=Math.min(this.items.length,e)||0,0===this._scrollTop&&(this._accessIronListAPI(()=>this._scrollToIndex(Math.min(e-1,t))),this._iterateItems((e,r)=>{const s=this._physicalItems[e];if(s.index===t&&(this.$.table.scrollTop+=Math.round(s.getBoundingClientRect().top-i)),s.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){const e=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);s.children[e].focus()}})),this._assignModels(),requestAnimationFrame(()=>this._update())}_positionItems(){let e;this._adjustScrollPosition(),isNaN(this._physicalTop)&&(e=!0,this._physicalTop=0);let t=this._physicalTop;this._iterateItems((e,i)=>{this._physicalItems[e].style.transform=`translateY(${t}px)`,t+=this._physicalSizes[e]}),e&&this._scrollToIndex(0)}_increasePoolIfNeeded(e){0===e&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize||(this._initialPoolCreated?this._optPhysicalSize!==1/0&&(this._debounceIncreasePool=g.debounce(this._debounceIncreasePool,b,()=>{this._updateMetrics();const e=this._optPhysicalSize-this._physicalSize;let t=Math.ceil(e/this._physicalAverage);this._physicalCount+t>this._effectiveSize&&(t=Math.max(0,this._effectiveSize-this._physicalCount)),this._physicalSize&&t>0&&this._optPhysicalSize!==1/0&&(super._increasePoolIfNeeded(t),this.__reorderChildNodes())})):(this._initialPoolCreated=!0,super._increasePoolIfNeeded(25)))}__reorderChildNodes(){const e=Array.from(this.$.items.childNodes);!!e.reduce((e,t,i,r)=>{if(0===i||r[i-1].index===t.index-1)return e},!0)||e.sort((e,t)=>e.index-t.index).forEach(e=>this.$.items.appendChild(e))}_createPool(e){const t=document.createDocumentFragment(),i=this._createScrollerRows(e);i.forEach(e=>t.appendChild(e)),this._getRowTarget().appendChild(t);const r=this.querySelector("[slot]");if(r){const e=r.getAttribute("slot");r.setAttribute("slot","foo-bar"),r.setAttribute("slot",e)}return this._updateHeaderFooterMetrics(),A(this,()=>this.notifyResize()),i}_assignModels(e){this._iterateItems((e,t)=>{const i=this._physicalItems[e];this._toggleAttribute("hidden",t>=this._effectiveSize,i),this._updateScrollerItem(i,t+(this._vidxOffset||0))},e)}_scrollHandler(){const e=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);const t=this._vidxOffset;this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(e),this._vidxOffset!==t&&this._update(),this._afterScroll()}_adjustVirtualIndexOffset(e){if(Math.abs(e)>1e4){if(this._noScale)return void(this._noScale=!1);const e=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),t=e*this._effectiveSize;this._vidxOffset=Math.round(t-e*this._virtualCount)}else{const e=this._vidxOffset||0,t=1e3,i=100;0===this._scrollTop?(this._vidxOffset=0,e!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<t&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,i),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex+(e-this._vidxOffset)),this._noScale=!0);const r=this._effectiveSize-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=r,e!==this._vidxOffset&&super.scrollToIndex(this._virtualCount)):this.firstVisibleIndex>this._virtualCount-t&&this._vidxOffset<r&&(this._vidxOffset+=Math.min(r-this._vidxOffset,i),e!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-e)),this._noScale=!0)}}_accessIronListAPI(e){this._warnPrivateAPIAccessAsyncEnabled=!1;const t=e.apply(this);return this._debouncerWarnPrivateAPIAccess=g.debounce(this._debouncerWarnPrivateAPIAccess,b,()=>this._warnPrivateAPIAccessAsyncEnabled=!0),t}_debounceRender(e,t){super._debounceRender(()=>this._accessIronListAPI(e),t)}_warnPrivateAPIAccess(e){this._warnPrivateAPIAccessAsyncEnabled&&console.warn(`Accessing private API (${e})!`)}_render(){this._accessIronListAPI(super._render)}_createFocusBackfillItem(){}_multiSelectionChanged(){}clearSelection(){}_itemsChanged(){}_manageFocus(){}_removeFocusedItem(){}get _firstVisibleIndex(){return this._accessIronListAPI(()=>super.firstVisibleIndex)}get _lastVisibleIndex(){return this._accessIronListAPI(()=>super.lastVisibleIndex)}_scrollToIndex(e){this._accessIronListAPI(()=>this.scrollToIndex(e))}get firstVisibleIndex(){return this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex}set firstVisibleIndex(e){this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex=e}get lastVisibleIndex(){return this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex}set lastVisibleIndex(e){this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex=e}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries"),super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler(),m()}}customElements.define(q.is,q);const Y=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(e=>e.some(e=>e._headerTemplate||e.headerRenderer||e.path||e.header)).length}_a11yGetFooterRowCount(e){return e.filter(e=>e.some(e=>e._headerTemplate||e.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(void 0===e||void 0===t)return;const i=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",i&&i.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((e,t)=>e.setAttribute("aria-rowindex",t+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((e,t)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Array.from(e.children).forEach(e=>e.setAttribute("aria-selected",Boolean(t)))}_a11yUpdateRowLevel(e,t){e.setAttribute("aria-level",t+1)}_a11yUpdateRowDetailsOpened(e,t){Array.from(e.children).forEach(e=>{"boolean"==typeof t?e.setAttribute("aria-expanded",t):e.hasAttribute("aria-expanded")&&e.removeAttribute("aria-expanded")})}_a11ySetRowDetailsCell(e,t){Array.from(e.children).forEach(e=>{e!==t&&e.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let t=e.parentNode;for(;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;if(t&&t.assignedSlot){t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")}})}},U=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,i=t?t.item:null;i&&(this.activeItem=this._itemsEqual(this.activeItem,i)?null:i)}_onClick(e){if(e.defaultPrevented)return;const t=e.composedPath(),i=t[t.indexOf(this.$.table)-3];if(!i||i.getAttribute("part").indexOf("details-cell")>-1)return;const r=i._content,s=this.getRootNode().activeElement;r.contains(s)&&(!this._ie||this._isFocusable(s))||this._isFocusable(e.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(i.parentElement)}}))}_isFocusable(e){if(!e.parentNode)return!1;const t=-1!==Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(e=>"cell body-cell"!==e.getAttribute("part")).indexOf(e);return!e.disabled&&t}},K=e=>class extends e{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(e,t,i){if(i){if(!Array.isArray(e))return null==e&&(this.size=0),void(this.dataProvider===this._arrayDataProvider&&(this.dataProvider=void 0));this.size=e.length,this.dataProvider=this.dataProvider||this._arrayDataProvider,this.clearCache(),this._ensureFirstPageLoaded()}}_arrayDataProvider(e,t){let i=(Array.isArray(this.items)?this.items:[]).slice(0);this._filters&&this._checkPaths(this._filters,"filtering",i)&&(i=this._filter(i)),this.size=i.length,e.sortOrders.length&&this._checkPaths(this._sorters,"sorting",i)&&(i=i.sort(this._multiSort.bind(this)));const r=e.page*e.pageSize,s=r+e.pageSize;t(i.slice(r,s),i.length)}_checkPaths(e,t,i){if(!i.length)return!1;let r=!0;for(var s in e){const o=e[s].path;if(!o||-1===o.indexOf("."))continue;const a=o.replace(/\.[^\.]*$/,"");void 0===C.get(a,i[0])&&(console.warn(`Path "${o}" used for ${t} does not exist in all of the items, ${t} is disabled.`),r=!1)}return r}_multiSort(e,t){return this._sorters.map(i=>"asc"===i.direction?this._compare(C.get(i.path,e),C.get(i.path,t)):"desc"===i.direction?this._compare(C.get(i.path,t),C.get(i.path,e)):0).reduce((e,t)=>e||t,0)}_normalizeEmptyValue(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}_compare(e,t){return(e=this._normalizeEmptyValue(e))<(t=this._normalizeEmptyValue(t))?-1:e>t?1:0}_filter(e){return e.filter((e,t)=>0===this._filters.filter(t=>{const i=this._normalizeEmptyValue(C.get(t.path,e)),r=this._normalizeEmptyValue(t.value).toString().toLowerCase();return-1===i.toString().toLowerCase().indexOf(r)}).length)}},Z=e=>class extends(x(e)){ready(){super.ready();const e=this.$.scroller;w(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault()),e.addEventListener("mousedown",e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())}_onHeaderTrack(e){const t=e.target;if("resize-handle"===t.getAttribute("part")){let o=t.parentElement._column;for(this._toggleAttribute("column-resizing",!0,this.$.scroller);"vaadin-grid-column-group"===o.localName;)o=Array.prototype.slice.call(o._childColumns,0).sort((function(e,t){return e._order-t._order})).filter((function(e){return!e.hidden})).pop();const a=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]'));var i=a.filter(e=>e._column===o)[0];if(i.offsetWidth){var r=window.getComputedStyle(i),s=10+parseInt(r.paddingLeft)+parseInt(r.paddingRight)+parseInt(r.borderLeftWidth)+parseInt(r.borderRightWidth)+parseInt(r.marginLeft)+parseInt(r.marginRight);const t=i.offsetWidth+(this.__isRTL?i.getBoundingClientRect().left-e.detail.x:e.detail.x-i.getBoundingClientRect().right);o.width=Math.max(s,t)+"px",o.flexGrow=0}a.sort((function(e,t){return e._column._order-t._column._order})).forEach((function(e,t,r){t<r.indexOf(i)&&(e._column.width=e.offsetWidth+"px",e._column.flexGrow=0)})),"end"===e.detail.state&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}},Q=class e{constructor(e,t,i){this.grid=e,this.parentCache=t,this.parentItem=i,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0]}getItemForIndex(e){const{cache:t,scaledIndex:i}=this.getCacheAndIndex(e);return t.items[i]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((e,t)=>{const i=this.itemCaches[t];return i.updateSize(),e+i.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){const i=new e(this.grid,this,this.items[t]);this.itemCaches[t]=i,this.grid._loadPage(0,i)}}getCacheAndIndex(e){let t=e;const i=Object.keys(this.itemCaches);for(var r=0;r<i.length;r++){const e=Number(i[r]),s=this.itemCaches[e];if(t<=e)return{cache:this,scaledIndex:t};if(t<=e+s.effectiveSize)return s.getCacheAndIndex(t-e-1);t-=s.effectiveSize}return{cache:this,scaledIndex:t}}},X=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new Q(this)}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){const t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize}_getItem(e,t){if(e>=this._effectiveSize)return;t.index=e;const{cache:i,scaledIndex:r}=this._cache.getCacheAndIndex(e),s=i.items[r];s?(this._toggleAttribute("loading",!1,t),this._updateItem(t,s),this._isExpanded(s)&&i.ensureSubCacheForScaledIndex(r)):(this._toggleAttribute("loading",!0,t),this._loadPage(this._getPageForIndex(r),i))}_expandedInstanceChangedCallback(e,t){void 0!==e.item&&(t?this.expandItem(e.item):this.collapseItem(e.item))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(e){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._assignModels()}_itemIdPathChanged(e){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach(e=>{this.__expandedKeys.add(this.getItemId(e))}))}expandItem(e){this._isExpanded(e)||this.push("expandedItems",e)}collapseItem(e){this._isExpanded(e)&&this.splice("expandedItems",this._getItemIndexInArray(e,this.expandedItems),1)}_getIndexLevel(e){let{cache:t}=this._cache.getCacheAndIndex(e),i=0;for(;t.parentCache;)t=t.parentCache,i++;return i}_canPopulate(){return this._hasData&&this._columnTree}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;const i={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this.dataProvider(i,(r,s)=>{void 0!==s?t.size=s:i.parentItem&&(t.size=r.length);const o=Array.from(this.$.items.children).map(e=>e._item);r.forEach((i,r)=>{const s=e*this.pageSize+r;t.items[s]=i,this._isExpanded(i)&&o.indexOf(i)>-1&&t.ensureSubCacheForScaledIndex(s)}),this._hasData=!0,delete t.pendingRequests[e],this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{const t=this._cache.getItemForIndex(e.index);t&&(this._toggleAttribute("loading",!1,e),this._updateItem(e,t))}),this._increasePoolIfNeeded(0),this.__itemsReceived()})}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new Q(this),Array.from(this.$.items.children).forEach(e=>{Array.from(e.children).forEach(e=>{e._instance&&e._instance._setPendingProperty("item",{},!1)})}),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this._assignModels(),this._effectiveSize||this._loadPage(0,this._cache)}_pageSizeChanged(e,t){void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(e,t){void 0!==t&&this.clearCache(),e&&this.items&&this.items.length&&this._scrollToIndex(this._firstVisibleIndex),this._ensureFirstPageLoaded(),this._debouncerCheckSize=g.debounce(this._debouncerCheckSize,I.after(2e3),this._checkSize.bind(this)),this._scrollHandler()}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache,()=>{const e=this._hasData;this._hasData=!0,e||this.notifyResize()})}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let i=-1;return t.forEach((t,r)=>{this._itemsEqual(t,e)&&(i=r)}),i}},J=e=>class extends e{ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(let t=0;t<e.length;t++)if("vaadin-grid-column-group"===e[t].localName)return!0;return!1}_getChildColumns(e){return S.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e]).reduce((e,t)=>e.concat(t),[])}_getColumnTree(){for(var e=[],t=S.getFlattenedNodes(this).filter(this._isColumnElement);e.push(t),this._hasColumnGroups(t);)t=this._flattenColumnGroups(t);return e}_updateColumnTree(){var e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new S(this,e=>{const t=e.addedNodes.filter(e=>"template"===e.localName&&e.classList.contains("row-details"))[0];t&&this._rowDetailsTemplate!==t&&(this._rowDetailsTemplate=t),(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&this._updateColumnTree(),this._debouncerCheckImports=g.debounce(this._debouncerCheckImports,I.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_arrayEquals(e,t){if(!e||!t||e.length!=t.length)return!1;for(var i=0,r=e.length;i<r;i++)if(e[i]instanceof Array&&t[i]instanceof Array){if(!this._arrayEquals(e[i],t[i]))return!1}else if(e[i]!=t[i])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{var t=this.querySelector(e);!t||t instanceof E||console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((e,t)=>e._column._order-t._column._order).forEach((e,t,i)=>{this._toggleAttribute("first-column",0===t,e),this._toggleAttribute("last-column",t===i.length-1,e)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}},ee=e=>class extends e{getEventContext(e){const t={},i=e.composedPath(),r=i[i.indexOf(this.$.table)-3];return r?(t.section=["body","header","footer","details"].filter(e=>r.getAttribute("part").indexOf(e)>-1)[0],r._column&&(t.column=r._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(r.parentElement)),t):t}},te=e=>class extends e{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){-1===this._filters.indexOf(e.target)&&this._filters.push(e.target),e.stopPropagation(),this.dataProvider&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};class ie extends class extends E{}{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super(),this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();const e=new this._TemplateClass({});return this.addInstance(e),e}addInstance(e){-1===this._templateInstances.indexOf(e)&&(this._templateInstances.push(e),requestAnimationFrame(()=>this.notifyPath("_templateInstances.*",this._templateInstances)))}removeInstance(e){const t=this._templateInstances.indexOf(e);this.splice("_templateInstances",t,1)}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=T(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(e,t){this._forwardParentProp(e,t),this._templateInstances&&this._templateInstances.forEach(i=>i.notifyPath(e,t))},notifyInstanceProp:function(e,t,i){if("index"===t||"item"===t)return;const r=`__${t}__`;if(e[r]===i)return;e[r]=i;const s=Array.from(this._grid.$.items.children).filter(t=>this._grid._itemsEqual(t._item,e.item))[0];s&&Array.from(s.children).forEach(e=>{e._instance&&(e._instance[r]=i,e._instance.notifyPath(t,i))});if(Array.isArray(this._grid.items)&&0===t.indexOf("item.")){const r=this._grid.items.indexOf(e.item),s=t.slice("item.".length);this._grid.notifyPath(`items.${r}.${s}`,i)}const o=`_${t}InstanceChangedCallback`;this._grid&&this._grid[o]&&this._grid[o](e,i)}}))}_forwardParentProp(e,t){this._parentPathValues[e]=t,this._templateInstances.forEach(i=>i.notifyPath(e,t))}_templateInstancesChanged(e,t){let i,r;if("_templateInstances"===e.path)i=0,r=this._templateInstances.length;else{if("_templateInstances.splices"!==e.path)return;i=e.value.index,r=e.value.addedCount}Object.keys(this._parentPathValues||{}).forEach(e=>{for(var t=i;t<i+r;t++)this._templateInstances[t].set(e,this._parentPathValues[e])})}}customElements.define(ie.is,ie);const re=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(e,t){if(e&&t)throw new Error("You should only use either a renderer or a template for row details");if(e||t){if(e&&!e.templatizer){var i=new ie;i._grid=this,i.dataHost=this.dataHost,i.template=e,e.templatizer=i}this._columnTree&&Array.from(this.$.items.children).forEach(e=>{e.querySelector("[part~=details-cell]")||(this._updateRow(e,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(e,!1)),delete e.querySelector("[part~=details-cell]")._instance}),this.detailsOpenedItems.length&&(Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this),this._update())}}_detailsOpenedItemsChanged(e,t,i){"detailsOpenedItems.length"!==e.path&&e.value&&Array.from(this.$.items.children).forEach(e=>{this._toggleDetailsCell(e,e._item),this._a11yUpdateRowDetailsOpened(e,this._isDetailsOpened(e._item)),this._toggleAttribute("details-opened",this._isDetailsOpened(e._item),e)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),this._toggleAttribute("frozen",!0,e)}_toggleDetailsCell(e,t){const i=e.querySelector('[part~="details-cell"]');if(!i)return;const r=!this._isDetailsOpened(t),s=!!i.hidden!==r;(i._instance||i._renderer)&&i.hidden===r||(i.hidden=r,r?e.style.removeProperty("padding-bottom"):(this.rowDetailsRenderer?(i._renderer=this.rowDetailsRenderer,i._renderer.call(this,i._content,this,{index:e.index,item:t})):this._rowDetailsTemplate&&!i._instance&&(i._instance=this._rowDetailsTemplate.templatizer.createInstance(),i._content.innerHTML="",i._content.appendChild(i._instance.root),this._updateItem(e,t)),m(),e.style.setProperty("padding-bottom",i.offsetHeight+"px"),requestAnimationFrame(()=>this.notifyResize()))),s&&(this._updateMetrics(),this._positionItems())}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach(e=>{e.parentElement.style.setProperty("padding-bottom",e.offsetHeight+"px")})}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||this.push("detailsOpenedItems",e)}closeItemDetails(e){this._isDetailsOpened(e)&&this.splice("detailsOpenedItems",this._getItemIndexInArray(e,this.detailsOpenedItems),1)}_detailsOpenedInstanceChangedCallback(e,t){super._detailsOpenedInstanceChangedCallback&&super._detailsOpenedInstanceChangedCallback(e,t),t?this.openItemDetails(e.item):this.closeItemDetails(e.item)}},se=e=>class extends e{get _timeouts(){return{SCROLL_PERIOD:1e3,WHEEL_SCROLLING:200,SCROLLING:100,IGNORE_WHEEL:500}}static get properties(){return{_frozenCells:{type:Array,value:function(){return[]}},_scrollbarWidth:{type:Number,value:function(){var e=document.createElement("div");e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.position="absolute",e.style.top="-9999px",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0}}}static get observers(){return["_scrollHeightUpdated(_estScrollHeight)","_scrollViewportHeightUpdated(_viewportHeight)"]}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollTop(){return this.$.table.scrollTop}constructor(){super(),this._scrollLineHeight=this._getScrollLineHeight()}_getScrollLineHeight(){const e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);const t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}_scrollViewportHeightUpdated(e){this._scrollPageHeight=e-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight}ready(){super.ready(),this.scrollTarget=this.$.table,this.addEventListener("wheel",e=>{this._wheelScrolling=!0,this._debouncerWheelScrolling=g.debounce(this._debouncerWheelScrolling,I.after(this._timeouts.WHEEL_SCROLLING),()=>this._wheelScrolling=!1),this._onWheel(e)}),this.$.table.addEventListener("scroll",e=>{this.$.outerscroller.outerScrolling&&e.stopImmediatePropagation()},!0),this.$.items.addEventListener("focusin",e=>{const t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]}),this.$.items.addEventListener("focusout",()=>this._rowWithFocusedElement=void 0)}scrollToIndex(e){this._accessIronListAPI(()=>super.scrollToIndex(e))}_onWheel(e){if(e.ctrlKey||this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY))return;const t=this.$.table;let i=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?i*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(i*=this._scrollPageHeight),this._wheelAnimationFrame)return this._deltaYAcc+=i,void e.preventDefault();i+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this._debouncerWheelAnimationFrame=g.debounce(this._debouncerWheelAnimationFrame,b,()=>this._wheelAnimationFrame=!1);var r=Math.abs(e.deltaX)+Math.abs(i);this._canScroll(t,e.deltaX,i)?(e.preventDefault(),t.scrollTop+=i,t.scrollLeft+=e.deltaX,this._scrollHandler(),this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=g.debounce(this._debouncerIgnoreNewWheel,I.after(this._timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)):this._hasResidualMomentum&&r<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():r>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=r}_hasScrolledAncestor(e,t,i){return"vaadin-grid-cell-content"!==e.localName&&(!(!this._canScroll(e,t,i)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,i):void 0))}_canScroll(e,t,i){return i>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||i<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this._toggleAttribute("scrolling",!0,this.$.scroller))),this._debounceScrolling=g.debounce(this._debounceScrolling,I.after(this._timeouts.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this._toggleAttribute("scrolling",!1,this.$.scroller),this.$.outerscroller.outerScrolling||this._reorderRows()}),this._scrollPeriodFrame||(this._scrollPeriodFrame=requestAnimationFrame(()=>this._toggleAttribute("scroll-period",!0,this.$.scroller))),this._debounceScrollPeriod=g.debounce(this._debounceScrollPeriod,I.after(this._timeouts.SCROLL_PERIOD),()=>{cancelAnimationFrame(this._scrollPeriodFrame),delete this._scrollPeriodFrame,this._toggleAttribute("scroll-period",!1,this.$.scroller)})}_afterScroll(){this._translateStationaryElements(),this.hasAttribute("reordering")||this._scheduleScrolling();const e=this.$.outerscroller;if(this._ios||!this._wheelScrolling&&!e.passthrough||e.syncOuterScroller(),this._ios){const t=Math.max(-e.scrollTop,0)||Math.min(0,e.scrollHeight-e.scrollTop-e.offsetHeight);this.$.items.style.transform=`translateY(${t}px)`}this._updateOverflow()}_updateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top"),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left"),this._debounceOverflow=g.debounce(this._debounceOverflow,b,()=>{const t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):0==t.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_reorderRows(){const e=this.$.items,t=e.querySelectorAll("tr");if(!t.length)return;const i=this._virtualStart+this._vidxOffset,r=this._rowWithFocusedElement||Array.from(t).filter(e=>!e.hidden)[0];if(!r)return;const s=r.index-i,o=Array.from(t).indexOf(r)-s;if(o>0)for(let i=0;i<o;i++)e.appendChild(t[i]);else if(o<0)for(let i=t.length+o;i<t.length;i++)e.insertBefore(t[i],t[0])}_frozenCellsChanged(){this._debouncerCacheElements=g.debounce(this._debouncerCacheElements,y,()=>{Array.from(this.root.querySelectorAll('[part~="cell"]')).forEach((function(e){e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._updateScrollerMeasurements(),this._translateStationaryElements()}),this._updateLastFrozen()}_updateScrollerMeasurements(){this._frozenCells.length>0&&this.__isRTL&&(this.__scrollerMetrics={scrollWidth:this.$.outerscroller.scrollWidth,clientWidth:this.$.outerscroller.clientWidth})}_updateLastFrozen(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((e,t)=>e._order-t._order);const t=e.reduce((e,t,i)=>(t._lastFrozen=!1,t.frozen&&!t.hidden?i:e),void 0);void 0!==t&&(e[t]._lastFrozen=!0)}_translateStationaryElements(){if(this._edge&&!this._scrollbarWidth?(this.$.items.style.transform=this._getTranslate(-this._scrollLeft||0,-this._scrollTop||0),this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(-this._scrollLeft||0,0)):this.$.footer.style.transform=this.$.header.style.transform=this._getTranslate(0,this._scrollTop),this._frozenCells.length>0){const i=this.__isRTL?this.__getNormalizedScrollLeft(this.$.table)+this.__scrollerMetrics.clientWidth-this.__scrollerMetrics.scrollWidth:this._scrollLeft;for(var e=this._getTranslate(i,0),t=0;t<this._frozenCells.length;t++)this._frozenCells[t].style.transform=e}}_getTranslate(e,t){return"translate("+e+"px,"+t+"px)"}_scrollHeightUpdated(e){this.$.outersizer.style.top=this.$.fixedsizer.style.top=e+"px"}},oe=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||this.push("selectedItems",e)}deselectItem(e){const t=this._getItemIndexInArray(e,this.selectedItems);t>-1&&this.splice("selectedItems",t,1)}_toggleItem(e){-1===this._getItemIndexInArray(e,this.selectedItems)?this.selectItem(e):this.deselectItem(e)}_selectedItemsChanged(e){!this.$.items.children.length||"selectedItems"!==e.path&&"selectedItems.splices"!==e.path||Array.from(this.$.items.children).forEach(e=>{this._updateItem(e,e._item)})}_selectedInstanceChangedCallback(e,t){super._selectedInstanceChangedCallback&&super._selectedInstanceChangedCallback(e,t),t?this.selectItem(e.item):this.deselectItem(e.item)}},ae=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged),window.ShadyDOM&&y.run(()=>{const e=this.querySelectorAll("vaadin-grid-sorter");Array.from(e).forEach(e=>{e instanceof E&&e.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))})})}_onSorterChanged(e){const t=e.target;this._removeArrayItem(this._sorters,t),t._order=null,this.multiSort?(t.direction&&this._sorters.unshift(t),this._sorters.forEach((e,t)=>e._order=this._sorters.length>1?t:null,this)):t.direction&&(this._sorters.forEach(e=>{e._order=null,e.direction=null}),this._sorters=[t]),e.stopPropagation(),this.dataProvider&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,t){const i=e.indexOf(t);i>-1&&e.splice(i,1)}},ne=e=>class extends e{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(e){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>this._generateCellClassNames(e,this.__getRowModel(e)))}_generateCellClassNames(e,t){Array.from(e.children).forEach(e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach(t=>e.classList.remove(t)),this.cellClassNameGenerator){const i=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=i&&i.split(" ").filter(e=>e.length>0),e.__generatedClasses&&e.__generatedClasses.forEach(t=>e.classList.add(t))}})}},le="between",he="on-top-or-between",de="on-grid",ce="on-top",_e="above",ue="below",pe="empty",me=e=>class extends e{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this._toggleAttribute("dragging-rows",!0,this),this._safari){const e=t.style.transform;t.style.top=/translateY\((.*)\)/.exec(e)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=e})}const i=t.getBoundingClientRect();window.ShadyDOM||(this._ios?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-i.left,e.clientY-i.top));let r=[t];this._isSelected(t._item)&&(r=this.__getViewportRows().filter(e=>this._isSelected(e._item)).filter(e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(r)),t.setAttribute("dragstart",r.length>1?r.length:""),this.updateStyles({"--_grid-drag-start-x":e.clientX-i.left+20+"px","--_grid-drag-start-y":e.clientY-i.top+10+"px"}),requestAnimationFrame(()=>{t.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});const s=new CustomEvent("grid-dragstart",{detail:{draggedItems:r.map(e=>e._item),setDragData:(t,i)=>e.dataTransfer.setData(t,i),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});s.originalEvent=e,this.dispatchEvent(s)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();let t=e.composedPath().filter(e=>"tr"===e.localName)[0];if(this._effectiveSize&&this.dropMode!==de)if(t&&t.parentNode===this.$.items){const i=t.getBoundingClientRect();if(this._dropLocation=ce,this.dropMode===le){const t=e.clientY-i.top<i.bottom-e.clientY;this._dropLocation=t?_e:ue}else this.dropMode===he&&(e.clientY-i.top<i.height/3?this._dropLocation=_e:e.clientY-i.top>i.height/3*2&&(this._dropLocation=ue))}else{if(t)return;if(this.dropMode!==le&&this.dropMode!==he)return;t=Array.from(this.$.items.children).filter(e=>!e.hidden).pop(),this._dropLocation=ue}else this._dropLocation=pe;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===pe?this._toggleAttribute("dragover",!0,this):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&t.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top,r=t-e+this.__dndAutoScrollThreshold,s=e-i+this.__dndAutoScrollThreshold;let o=0;if(s>0?o=2*s:r>0&&(o=2*-r),o){const e=this.$.table.scrollTop;this.$.table.scrollTop+=o;if(e!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>this.__dndAutoScrolling=!1,20),this._scrollHandler(),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(i=>{const r=i.getBoundingClientRect();return r.bottom>e&&r.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(e=>e.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(t=>({type:t,data:e.dataTransfer.getData(t)}));this._clearDragStyles();const i=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});i.originalEvent=e,this.dispatchEvent(i)}}__formatDefaultTransferData(e){return e.map(e=>Array.from(e.children).filter(e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell")).sort((e,t)=>e._column._order>t._column._order?1:-1).map(e=>e._content.textContent.trim()).filter(e=>e).join("\t")).join("\n")}_dragDropAccessChanged(e,t,i,r){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){const i=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(t),r=!this.dropMode||this.dropFilter&&!this.dropFilter(t);(window.ShadyDOM?[e]:Array.from(e.children).map(e=>e._content)).forEach(e=>{i?e.removeAttribute("draggable"):e.setAttribute("draggable",!0)}),this._toggleAttribute("drag-disabled",i,e),this._toggleAttribute("drop-disabled",r,e)}},ge=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",()=>{this._toggleAttribute("navigating",!1,this),this._isMousedown=!0}),this.addEventListener("mouseup",()=>this._isMousedown=!1))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&e.setAttribute("tabindex","0")}_onKeyDown(e){let t,i=e.key;switch("Up"!==i&&"Down"!==i&&"Left"!==i&&"Right"!==i||(i="Arrow"+i),"Esc"===i&&(i="Escape"),"Spacebar"===i&&(i=" "),i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":t="Navigation";break;case"Enter":case"Escape":case"F2":t="Interaction";break;case"Tab":t="Tab";break;case" ":t="Space"}this._detectInteracting(e),this.hasAttribute("interacting")&&"Interaction"!==t&&(t=void 0),t&&this[`_on${t}KeyDown`](e,i)}_ensureScrolledToIndex(e){Array.from(this.$.items.children).filter(t=>t.index===e)[0]||this._scrollToIndex(e)}_onNavigationKeyDown(e,t){function i(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}e.preventDefault();const r=this._lastVisibleIndex-this._firstVisibleIndex-1;let s=0,o=0;switch(t){case"ArrowRight":s=this.__isRTL?-1:1;break;case"ArrowLeft":s=this.__isRTL?1:-1;break;case"Home":s=-1/0,e.ctrlKey&&(o=-1/0);break;case"End":s=1/0,e.ctrlKey&&(o=1/0);break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":o=r;break;case"PageUp":o=-r}const a=e.composedPath()[0],n=i(a),l=this._elementMatches(a,'[part~="details-cell"]'),h=a.parentNode,d=h.parentNode,c=(d===this.$.items?this._effectiveSize:d.children.length)-1,_=d===this.$.items?void 0!==this._focusedItemIndex?this._focusedItemIndex:h.index:i(h);let u=Math.max(0,Math.min(_+o,c)),p=!1;if(d===this.$.items){const e=h._item,t=this._cache.getItemForIndex(u);p=l?0===o:1===o&&this._isDetailsOpened(e)||-1===o&&u!==_&&this._isDetailsOpened(t),p!==l&&(1===o&&p||-1===o&&!p)&&(u=_)}if(d!==this.$.items)if(u>_)for(;u<c&&d.children[u].hidden;)u++;else if(u<_)for(;u>0&&d.children[u].hidden;)u--;void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=l?0:this._getColumns(d,_).filter(e=>!e.hidden)[n]._order);const m=this._getColumns(d,u).filter(e=>!e.hidden),g=m.map(e=>e._order).sort((e,t)=>e-t),f=g.length-1,b=g.indexOf(g.slice(0).sort((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder))[0]),v=0===o&&l?b:Math.max(0,Math.min(b+s,f));v!==b&&(this._focusedColumnOrder=void 0),d===this.$.items&&this._ensureScrolledToIndex(u),this._toggleAttribute("navigating",!0,this);const y=m.reduce((e,t,i)=>(e[t._order]=i,e),{})[g[v]],A=d===this.$.items?Array.from(d.children).filter(e=>e.index===u)[0]:d.children[u];if(!A)return;const C=p?Array.from(A.children).filter(e=>this._elementMatches(e,'[part~="details-cell"]'))[0]:A.children[y];if(this._scrollHorizontallyToCell(C),d===this.$.items&&(this._focusedItemIndex=u),d===this.$.items){const e=C.getBoundingClientRect(),t=this.$.footer.getBoundingClientRect().top,i=this.$.header.getBoundingClientRect().bottom;e.bottom>t?(this.$.table.scrollTop+=e.bottom-t,this._scrollHandler()):e.top<i&&(this.$.table.scrollTop-=i-e.top,this._scrollHandler())}C.focus()}_parseEventPath(e){const t=e.indexOf(this.$.table);return{rowGroup:e[t-1],row:e[t-2],cell:e[t-3]}}_onInteractionKeyDown(e,t){const i=e.composedPath()[0],r="input"===i.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(i.type);let s;switch(t){case"Enter":s=!this.hasAttribute("interacting")||!r;break;case"Escape":s=!1;break;case"F2":s=!this.hasAttribute("interacting")}const{cell:o}=this._parseEventPath(e.composedPath());if(this.hasAttribute("interacting")!==s)if(s){const t=o._content.querySelector("[focus-target]")||o._content.firstElementChild;t&&(e.preventDefault(),t.focus(),this._toggleAttribute("interacting",!0,this),this._toggleAttribute("navigating",!1,this))}else e.preventDefault(),this._focusedColumnOrder=void 0,o.focus(),this._toggleAttribute("interacting",!1,this),this._toggleAttribute("navigating",!0,this)}_predictFocusStepTarget(e,t){const i=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let r=i.indexOf(e);for(r+=t;r>=0&&r<=i.length-1&&(!i[r]||i[r].parentNode.hidden);)r+=t;return i[r]}_onTabKeyDown(e){const t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){let i=t;const r=this._itemsFocusable.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),r.index!==this._focusedItemIndex){const e=Array.from(r.children).indexOf(this._itemsFocusable),t=Array.from(this.$.items.children).filter(e=>e.index===this._focusedItemIndex)[0];t&&(i=t.children[e])}e.preventDefault(),i.focus()}else e.preventDefault(),t.focus();this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0];t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/.test(e.key))return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const e=this.hasAttribute("navigating");t._content.firstElementChild.click(),this._toggleAttribute("navigating",e,this)}}_onFocusIn(e){this._isMousedown||this._toggleAttribute("navigating",!0,this);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._toggleAttribute("interacting",!1,this)):this._detectInteracting(e)}_onFocusOut(e){this._toggleAttribute("navigating",!1,this),this._detectInteracting(e)}_onCellFocusIn(e){if(this._detectInteracting(e),3===e.composedPath().indexOf(this.$.table)){const t=e.composedPath()[0];this._activeRowGroup=t.parentNode.parentNode,this._activeRowGroup===this.$.header?this._headerFocusable=t:this._activeRowGroup===this.$.items?this._itemsFocusable=t:this._activeRowGroup===this.$.footer&&(this._footerFocusable=t),t._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))}this._detectFocusedItemIndex(e)}_onCellFocusOut(e){if(3===e.composedPath().indexOf(this.$.table)){e.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}}_detectInteracting(e){this._toggleAttribute("interacting",e.composedPath().some(e=>"vaadin-grid-cell-content"===e.localName),this)}_detectFocusedItemIndex(e){const{rowGroup:t,row:i}=this._parseEventPath(e.composedPath());t===this.$.items&&(this._focusedItemIndex=i.index)}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this))}_getColumns(e,t){let i=this._columnTree.length-1;return e===this.$.header?i=t:e===this.$.footer&&(i=this._columnTree.length-1-t),this._columnTree[i]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(e=>!e.hidden)[0]),this.$.items.firstElementChild){const e=this._iterateItems((e,t)=>{if(this._firstVisibleIndex===t)return this.$.items.children[e]});e&&(this._itemsFocusable=Array.from(e.children).filter(e=>!e.hidden)[0])}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(e=>!e.hidden)[0])}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||this._elementMatches(e,'[part~="details-cell"]'))return;const t=e.getBoundingClientRect(),i=e.parentNode,r=Array.from(i.children).indexOf(e),s=this.$.table.getBoundingClientRect();let o=s.left,a=s.right;for(let e=r-1;e>=0;e--){const t=i.children[e];if(!t.hasAttribute("hidden")&&!this._elementMatches(t,'[part~="details-cell"]')&&t.hasAttribute("frozen")){o=t.getBoundingClientRect().right;break}}for(let e=r+1;e<i.children.length;e++){const t=i.children[e];if(!t.hasAttribute("hidden")&&!this._elementMatches(t,'[part~="details-cell"]')&&t.hasAttribute("frozen")){a=t.getBoundingClientRect().left;break}}t.left<o&&(this.$.table.scrollLeft+=Math.round(t.left-o)),t.right>a&&(this.$.table.scrollLeft+=Math.round(t.right-a))}_elementMatches(e,t){return e.matches?e.matches(t):-1!==Array.from(e.parentNode.querySelectorAll(t)).indexOf(e)}},fe=e=>class extends(x(e)){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),w(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){const t=e.composedPath(),i=t[t.indexOf(this.$.header)-2];if(!i||!i._content)return;const r=this.getRootNode().activeElement;if(i._content.contains(this.getRootNode().activeElement)&&(!this._ie||!this._isFocusable(r)))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.path||z(e).path;if(t&&t.filter(e=>e.hasAttribute&&e.hasAttribute("draggable"))[0])return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(i&&-1!==i.getAttribute("part").indexOf("header-cell")){for(this._toggleAttribute("reordering",!0,this),this._draggedColumn=i._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(i),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const i=this._getTargetColumn(t,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,i)&&this._isSwappableByPosition(i,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,i),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(e=>!e.hidden).sort((e,t)=>e._order-t._order)}_cellFromPoint(e,t){let i;if(e=e||0,t=t||0,this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller),k?i=this.shadowRoot.elementFromPoint(e,t):(i=document.elementFromPoint(e,t),"vaadin-grid-cell-content"===i.localName&&(i=i.assignedSlot.parentNode)),this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller),i&&i._column)return i}_updateGhostPosition(e,t){const i=this._reorderGhost.getBoundingClientRect(),r=e-i.width/2,s=t-i.height/2,o=parseInt(this._reorderGhost._left||0),a=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=o-(i.left-r),this._reorderGhost._top=a-(i.top-s),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_getInnerText(e){return e.localName?"none"===getComputedStyle(e).display?"":Array.from(e.childNodes).map(e=>this._getInnerText(e)).join(""):e.textContent}_updateGhost(e){const t=this._reorderGhost;t.textContent=this._getInnerText(e._content);const i=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(e=>t.style[e]=i[e]),t}_updateOrders(e,t){void 0!==e&&void 0!==t&&(e[0].forEach((e,t)=>e._order=0),e[0].forEach((e,t)=>e._order=(t+1)*this._orderBaseScope))}_setSiblingsReorderStatus(e,t){Array.from(e.parentNode.children).filter(t=>/column/.test(t.localName)&&this._isSwapAllowed(t,e)).forEach(e=>e._reorderStatus=t)}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10),this._scrollHandler()}this._draggedColumn&&this.async(this._autoScroller,10)}_isSwapAllowed(e,t){if(e&&t){const i=e!==t,r=e.parentElement===t.parentElement,s=e.frozen===t.frozen;return i&&r&&s}}_isSwappableByPosition(e,t){const i=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(t=>e.contains(t._column))[0],r=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),s=i.getBoundingClientRect();return s.left>r.left?t>s.right-r.width:t<s.left+r.width}_swapColumnOrders(e,t){const i=e._order;e._order=t._order,t._order=i,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let i=e._column;for(;i.parentElement!==t.parentElement&&i!==this;)i=i.parentElement;return i.parentElement===t.parentElement?i:e._column}}},be=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"===this.localName)return;const e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid),this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid),this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid),this._templateObserver.flush(),this._bodyTemplate||this._templateObserver.callback(),requestAnimationFrame(()=>{this._allCells.forEach(e=>{e._content.parentNode||this._grid&&this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._findHostGrid()||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}constructor(){super(),this._templateObserver=new S(this,e=>{this._headerTemplate=this._prepareHeaderTemplate(),this._footerTemplate=this._prepareFooterTemplate(),this._bodyTemplate=this._prepareBodyTemplate()})}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(e,t){if(e&&!e.templatizer){const i=new ie;i._grid=this._grid,i.dataHost=this.dataHost,i._instanceProps=t||i._instanceProps,i.template=e,e.templatizer=i}return e}_renderHeaderAndFooter(){this.headerRenderer&&this._headerCell&&this.__runRenderer(this.headerRenderer,this._headerCell),this.footerRenderer&&this._footerCell&&this.__runRenderer(this.footerRenderer,this._footerCell)}__runRenderer(e,t,i){const r=[t._content,this];i&&i.item&&r.push(i),e.apply(this,r)}__setColumnTemplateOrRenderer(e,t,i){if(e&&t)throw new Error("You should only use either a renderer or a template");i.forEach(i=>{const r=this._grid.__getRowModel(i.parentElement);if(t)i._renderer=t,(r.item||t===this.headerRenderer||t===this.footerRenderer)&&this.__runRenderer(t,i,r);else if(i._template!==e){i._template=e,i._content.innerHTML="",e.templatizer._grid=e.templatizer._grid||this._grid;const t=e.templatizer.createInstance();i._content.appendChild(t.root),i._instance=t,r.item&&i._instance.setProperties(r)}})}_setBodyTemplateOrRenderer(e,t,i,r){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,i)}_setHeaderTemplateOrRenderer(e,t,i){(e||t)&&i&&this.__setColumnTemplateOrRenderer(e,t,[i])}_setFooterTemplateOrRenderer(e,t,i){(e||t)&&i&&(this.__setColumnTemplateOrRenderer(e,t,[i]),this._grid.__updateHeaderFooterRowVisibility(i.parentElement))}_selectFirstTemplate(e=!1,t=!1){return S.getFlattenedNodes(this).filter(i=>"template"===i.localName&&i.classList.contains("header")===e&&i.classList.contains("footer")===t)[0]}_findTemplate(e,t){const i=this._selectFirstTemplate(e,t);return i&&this.dataHost&&(i._rootDataHost=this.dataHost._rootDataHost||this.dataHost),i}_flexGrowChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>t.style.flexGrow=e)}_orderChanged(e,t,i,r){this._allCells.forEach(t=>t.style.order=e)}_widthChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>t.style.width=e),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>this._toggleAttribute("frozen",e,t)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>this._toggleAttribute("last-frozen",e,t)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_pathOrHeaderChanged(e,t,i,r,s,o,a,n,l){const h=void 0!==t;if(!a&&!l&&h&&i&&this.__setTextContent(i._content,t),e&&s.value){if(!o&&!n){const t=(t,i,{item:r})=>this.__setTextContent(t,this.get(e,r));this.__setColumnTemplateOrRenderer(void 0,t,s.value)}a||l||h||!i||null===t||this.__setTextContent(i._content,this._generateHeader(e))}i&&this._grid.__updateHeaderFooterRowVisibility(i.parentElement)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,e=>e.toUpperCase())}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}_reorderStatusChanged(e,t,i,r){this._allCells.forEach(t=>t.setAttribute("reorder-status",e))}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach(t=>{if(t){const i=t.querySelector('[part~="resize-handle"]');if(i&&t.removeChild(i),e){const e=document.createElement("div");e.setAttribute("part","resize-handle"),t.appendChild(e)}}})}_textAlignChanged(e,t,i,r){if(void 0===e)return;if(-1===["start","end","center"].indexOf(e))return void console.warn('textAlign can only be set as "start", "end" or "center"');let s;"ltr"===getComputedStyle(this._grid).direction?"start"===e?s="left":"end"===e&&(s="right"):"start"===e?s="right":"end"===e&&(s="left"),this._allCells.forEach(t=>{t._content.style.textAlign=e,getComputedStyle(t._content).textAlign!==e&&(t._content.style.textAlign=s)})}_hiddenChanged(e,t,i,r){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}),this._grid._debouncerHiddenChanged=g.debounce(this._grid._debouncerHiddenChanged,b,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}};class ve extends(be(R(E))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(ve.is,ve);class ye extends class extends E{}{static get template(){return c(t||(t=d`
    <style>
      :host {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        overflow: auto;
      }

      :host([passthrough]) {
        pointer-events: none;
      }
    </style>

    <slot></slot>
`))}static get is(){return"vaadin-grid-outer-scroller"}static get properties(){return{scrollTarget:{type:Object},scrollHandler:{type:Object},passthrough:{type:Boolean,reflectToAttribute:!0,value:!0},outerScrolling:Boolean,noScrollbars:Boolean,_touchDevice:Boolean}}ready(){super.ready(),this.addEventListener("scroll",()=>this._syncScrollTarget()),this.parentElement.addEventListener("mousemove",this._onMouseMove.bind(this)),this.style.webkitOverflowScrolling="touch",this.addEventListener("mousedown",e=>this.outerScrolling=!0),this.addEventListener("mouseup",e=>{this.outerScrolling=!1,this.scrollHandler._scrollHandler()})}_onMouseMove(e){this._touchDevice||(this.noScrollbars&&this.parentElement.hasAttribute("scroll-period")?this.passthrough=e.offsetY<=this.clientHeight-20&&e.offsetX<=this.clientWidth-20:this.passthrough=e.offsetY<=this.clientHeight&&e.offsetX<=this.clientWidth)}syncOuterScroller(){this.scrollTop=this.scrollTarget.scrollTop,this.scrollLeft=this.scrollTarget.scrollLeft}_syncScrollTarget(){requestAnimationFrame(()=>{this.scrollTarget.scrollTop=this.scrollTop,this.scrollTarget.scrollLeft=this.scrollLeft,this.scrollHandler._scrollHandler()})}}customElements.define(ye.is,ye);const Ae=document.createElement("dom-module");Ae.appendChild(c(i||(i=d`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: block;
      width: 100%;
      height: 100%;
      overflow: auto;
      z-index: -2;
      position: relative;
      outline: none;
    }

    #header {
      display: block;
      position: absolute;
      top: 0;
      width: 100%;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      display: block;
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    #items {
      display: block;
      width: 100%;
      position: relative;
      z-index: -1;
    }

    #items,
    #outersizer,
    #fixedsizer {
      border-top: 0 solid transparent;
      border-bottom: 0 solid transparent;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    #outerscroller {
      /* Needed (at least) for Android Chrome */
      z-index: 0;
    }

    #scroller:not([safari]) #outerscroller {
      /* Needed for Android Chrome (#1020). Can't be applied to Safari
      since it would re-introduce the sub-pixel overflow bug (#853) */
      will-change: transform;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller,
    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    [no-scrollbars]:not([safari]):not([firefox]) #outerscroller {
      pointer-events: none;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    :host([reordering]) #outerscroller {
      -webkit-overflow-scrolling: auto !important;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    .sizer {
      display: flex;
      position: relative;
      width: 100%;
      visibility: hidden;
    }

    .sizer [part~="details-cell"] {
      display: none !important;
    }

    .sizer [part~="cell"][hidden] {
      display: none !important;
    }

    .sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      margin-top: -1em;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
    }

    .sizer [part~="cell"]::before {
      content: "-";
    }

    .sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* Fixed mode (Tablet Edge) */
    #fixedsizer {
      position: absolute;
    }

    :not([edge][no-scrollbars]) #fixedsizer {
      display: none;
    }

    [edge][no-scrollbars] {
      /* Any value other than ‘none’ for the transform results in the creation of both a stacking context and
      a containing block. The object acts as a containing block for fixed positioned descendants. */
      transform: translateZ(0);
      overflow: hidden;
    }

    [edge][no-scrollbars] #header,
    [edge][no-scrollbars] #footer {
      position: fixed;
    }

    [edge][no-scrollbars] #items {
      position: fixed;
      width: 100%;
      will-change: transform;
    }

    /* RTL specific styles */

    :host([dir="rtl"]) [part~="reorder-ghost"] {
      left: auto;
      right: 0;
    }

    :host([dir="rtl"]) [part~="resize-handle"] {
      left: 0;
      right: auto;
    }

    :host([dir="rtl"]) [part~="resize-handle"]::before {
      transform: translateX(50%);
    }

    :host([dir="rtl"]) [last-column] [part~="resize-handle"]::before,
    :host([dir="rtl"]) [last-frozen] [part~="resize-handle"]::before {
      left: 0;
      right: auto;
    }
  </style>
`)));const Ce=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),xe=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;if(Ce||xe){const e=document.createElement("style");e.textContent="\n    [scrolling][safari] #outerscroller,\n    [scrolling][firefox] #outerscroller {\n      pointer-events: auto;\n    }\n\n    [ios] #outerscroller {\n      pointer-events: auto;\n      z-index: -3;\n    }\n\n    [ios][scrolling] #outerscroller {\n      z-index: 0;\n    }\n\n    [ios] [frozen] {\n      will-change: auto;\n    }\n  ",Ae.querySelector("template").content.appendChild(e)}Ae.register("vaadin-grid-styles");const we=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();class Ie extends(O(L(X(K(J(U(se(oe(ae(re(ge(Y(te(fe(Z(ee(me(ne(q))))))))))))))))))){static get template(){return c(r||(r=d`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" no-scrollbars\$="[[!_scrollbarWidth]]" wheel-scrolling\$="[[_wheelScrolling]]" safari\$="[[_safari]]" ios\$="[[_ios]]" loading\$="[[loading]]" edge\$="[[_edge]]" firefox\$="[[_firefox]]" ie\$="[[_ie]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="fixedsizer" class="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
      <vaadin-grid-outer-scroller id="outerscroller" _touch-device="[[_touchDevice]]" scroll-target="[[scrollTarget]]" scroll-handler="[[_this]]" no-scrollbars="[[!_scrollbarWidth]]">
        <div id="outersizer" class="sizer" part="row"></div>
      </vaadin-grid-outer-scroller>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`))}static get is(){return"vaadin-grid"}static get version(){return"5.6.6"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_this:{type:Object,value:function(){return this}},_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},_edge:{type:Boolean,value:"undefined"!=typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!(!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:we},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_heightByRowsChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.recalculateColumnWidths()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),"dir"===e&&(this.__isRTL="rtl"===i,this._updateScrollerMeasurements())}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(e=>e.clientHeight).length}__itemsReceived(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(e){e.forEach(e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0}),e.forEach(e=>{e._currentWidth=0,e._allCells.forEach(t=>{const i=t.offsetWidth+1;e._currentWidth=Math.max(e._currentWidth,i)})}),e.forEach(e=>{e.width=e._currentWidth+"px",e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0})}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading())this._recalculateColumnWidthOnceLoadingFinished=!0;else{const e=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(e)}}_createScrollerRows(e){const t=[];for(var i=0;i<e;i++){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this._columnTree&&this._updateRow(e,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(e)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(e=>e.notifyPath&&e.notifyPath("_cells.*",e._cells)),P(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation()}),t}_getRowTarget(){return this.$.items}_createCell(e){const t="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),i=document.createElement("vaadin-grid-cell-content");i.setAttribute("slot",t);const r=document.createElement(e);r.id=t.replace("-content-","-"),r.setAttribute("tabindex","-1"),r.setAttribute("role","td"===e?"gridcell":"columnheader");const s=document.createElement("slot");return s.setAttribute("name",t),r.appendChild(s),r._content=i,i.addEventListener("mousedown",()=>{if(window.chrome){const e=()=>{i.contains(this.getRootNode().activeElement)||r.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout(()=>{i.contains(this.getRootNode().activeElement)||r.focus()})}),r}_updateRow(e,t,i,r,s){i=i||"body";const o=document.createDocumentFragment();Array.from(e.children).forEach(e=>e._vacant=!0),e.innerHTML="","outersizer"!==e.id&&"fixedsizer"!==e.id&&(e.hidden=!0),t.filter(e=>!e.hidden).forEach((t,a,n)=>{let l;if("body"===i){if(t._cells=t._cells||[],l=t._cells.filter(e=>e._vacant)[0],l||(l=this._createCell("td"),t._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),a===n.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];const t=this._detailsCells.filter(e=>e._vacant)[0]||this._createCell("td");-1===this._detailsCells.indexOf(t)&&this._detailsCells.push(t),t._content.parentElement||o.appendChild(t._content),this._configureDetailsCell(t),e.appendChild(t),this._a11ySetRowDetailsCell(e,t),t._vacant=!1}t.notifyPath&&!s&&t.notifyPath("_cells.*",t._cells)}else{const s="header"===i?"th":"td";r||"vaadin-grid-column-group"===t.localName?(l=t[`_${i}Cell`]||this._createCell(s),l._column=t,e.appendChild(l),t[`_${i}Cell`]=l):(t._emptyCells=t._emptyCells||[],l=t._emptyCells.filter(e=>e._vacant)[0]||this._createCell(s),l._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.setAttribute("part",`cell ${i}-cell`),this.__updateHeaderFooterRowVisibility(e)}l._content.parentElement||o.appendChild(l._content),l._vacant=!1,l._column=t}),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__updateHeaderFooterRowVisibility(e){if(!e)return;const t=Array.from(e.children).filter(t=>{const i=t._column;if(i._emptyCells&&i._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(i.headerRenderer||i._headerTemplate)return!0;if(null===i.header)return!1;if(i.path||void 0!==i.header)return!0}else if(i.footerRenderer||i._footerTemplate)return!0});e.hidden!==!t.length&&(e.hidden=!t.length,this.notifyResize())}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._toggleAttribute("first",0===t,e),this._toggleAttribute("odd",t%2,e),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e,t){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach(t=>this._updateRow(t,e[e.length-1],null,!1,!0));this.$.header.children.length<e.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((t,i)=>this._updateRow(t,e[i],"header",i===e.length-1)),Array.from(this.$.footer.children).forEach((t,i)=>this._updateRow(t,e[e.length-1-i],"footer",0===i)),this._updateRow(this.$.outersizer,e[e.length-1],null,!1,!0),this._updateRow(this.$.fixedsizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_updateItem(e,t){e._item=t;const i=this.__getRowModel(e);this._toggleAttribute("selected",i.selected,e),this._a11yUpdateRowSelected(e,i.selected),this._a11yUpdateRowLevel(e,i.level),this._toggleAttribute("expanded",i.expanded,e),(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(e,t),this._generateCellClassNames(e,i),this._filterDragAndDrop(e,i),Array.from(e.children).forEach(e=>{if(e._renderer){const t=e._column||this;e._renderer.call(t,e._content,t,i)}else e._instance&&(e._instance.__detailsOpened__=i.detailsOpened,e._instance.__selected__=i.selected,e._instance.__level__=i.level,e._instance.__expanded__=i.expanded,e._instance.setProperties(i))}),this._debouncerUpdateHeights=g.debounce(this._debouncerUpdateHeights,I.after(1),()=>{this._updateMetrics(),this._positionItems(),this._updateScrollerSize()})}_resizeHandler(){this._updateDetailsCellHeights(),this._accessIronListAPI(super._resizeHandler,!0),this._updateScrollerMeasurements(),this._updateHeaderFooterMetrics()}_updateHeaderFooterMetrics(){const e=this.$.header.clientHeight+"px",t=this.$.footer.clientHeight+"px";[this.$.outersizer,this.$.fixedsizer,this.$.items].forEach(i=>{i.style.borderTopWidth=e,i.style.borderBottomWidth=t}),A(this.$.header,()=>{this._pendingScrollToIndex&&this._scrollToIndex(this._pendingScrollToIndex)})}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(this._render(),this._updateHeaderFooterMetrics(),e.stopPropagation(),this.notifyResize(),this.__itemsReceived())}_toggleAttribute(e,t,i){i.hasAttribute(e)===!t&&(t?i.setAttribute(e,""):i.removeAttribute(e))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(e._item)}}render(){this._columnTree&&(this._columnTree.forEach(e=>{e.forEach(e=>e._renderHeaderAndFooter())}),this._update())}notifyResize(){super.notifyResize()}_heightByRowsChanged(e,t){(e||t)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=g.debounce(this._debouncerForceReflow,b,()=>{this.$.scroller.style.overflow="hidden",setTimeout(()=>this.$.scroller.style.overflow="")})}}customElements.define(Ie.is,Ie);const Se=document.createElement("template");Se.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(Se.content);class Ee extends(L(R(E))){static get template(){return c(s||(s=d`
    <style>
      :host {
        display: inline-flex;
        cursor: pointer;
        max-width: 100%;
      }

      [part="content"] {
        flex: 1 1 auto;
      }

      [part="indicators"] {
        position: relative;
        align-self: center;
        flex: none;
      }

      [part="order"] {
        display: inline;
        vertical-align: super;
      }

      [part="indicators"]::before {
        font-family: 'vaadin-grid-sorter-icons';
        display: inline-block;
      }

      :host(:not([direction])) [part="indicators"]::before {
        content: "\\e901";
      }

      :host([direction=asc]) [part="indicators"]::before {
        content: "\\e900";
      }

      :host([direction=desc]) [part="indicators"]::before {
        content: "\\e902";
      }
    </style>

    <div part="content">
      <slot></slot>
    </div>
    <div part="indicators">
      <span part="order">[[_getDisplayOrder(_order)]]</span>
    </div>
`))}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,value:!1}}}static get observers(){return["_pathOrDirectionChanged(path, direction, _isConnected)","_directionOrOrderChanged(direction, _order)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1}_pathOrDirectionChanged(e,t,i){void 0!==e&&void 0!==t&&void 0!==i&&i&&this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc")}_directionOrOrderChanged(e,t){void 0!==e&&void 0!==t&&(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&this.root.querySelectorAll("*").forEach((function(e){e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})))}}customElements.define(Ee.is,Ee);class Te extends class extends E{}{static get template(){return c(o||(o=d`
    <style>
      :host {
        display: inline-flex;
        max-width: 100%;
      }

      #filter {
        width: 100%;
        box-sizing: border-box;
      }
    </style>
    <slot name="filter">
      <vaadin-text-field id="filter" value="{{value}}"></vaadin-text-field>
    </slot>
`))}static get is(){return"vaadin-grid-filter"}static get properties(){return{path:String,value:{type:String,notify:!0},_connected:Boolean}}connectedCallback(){super.connectedCallback(),this._connected=!0}static get observers(){return["_filterChanged(path, value, _connected)"]}ready(){super.ready();const e=z(this).firstElementChild;e&&"filter"!==e.getAttribute("slot")&&(console.warn('Make sure you have assigned slot="filter" to the child elements of <vaadin-grid-filter>'),e.setAttribute("slot","filter"))}_filterChanged(e,t,i){void 0!==e&&void 0!==t&&i&&(void 0===this._previousValue&&""===t||(this._previousValue=t,this._debouncerFilterChanged=g.debounce(this._debouncerFilterChanged,I.after(200),()=>{this.dispatchEvent(new CustomEvent("filter-changed",{bubbles:!0}))})))}focus(){this.$.filter.focus()}}customElements.define(Te.is,Te);class ze extends ve{static get template(){return c(a||(a=d`
    <template class="header" id="headerTemplate">
      <vaadin-grid-filter path="[[path]]" value="[[_filterValue]]">
        <vaadin-text-field theme="small" focus-target="" style="max-width: 100%;" slot="filter" value="{{_filterValue}}" label="[[_getHeader(header, path)]]"></vaadin-text-field>
      </vaadin-grid-filter>
    </template>
`))}static get is(){return"vaadin-grid-filter-column"}static get properties(){return{path:String,header:String}}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this.$.headerTemplate);return e.templatizer.dataHost=this,e}_getHeader(e,t){return e||this._generateHeader(t)}}customElements.define(ze.is,ze);class ke extends ve{static get template(){return c(n||(n=d`
    <template class="header" id="headerTemplate">
      <vaadin-grid-sorter path="[[path]]" direction="{{direction}}">[[_getHeader(header, path)]]</vaadin-grid-sorter>
    </template>
`))}static get is(){return"vaadin-grid-sort-column"}static get properties(){return{path:String,direction:{type:String,notify:!0}}}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this.$.headerTemplate);return e.templatizer.dataHost=this,e}_getHeader(e,t){return e||this._generateHeader(t)}}customElements.define(ke.is,ke);class Pe extends(O($(L(x(E))))){static get template(){return c(l||(l=d`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`))}static get is(){return"vaadin-checkbox"}static get version(){return"2.3.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();const e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){const e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(e))}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(Pe.is,Pe);class Re extends ve{static get template(){return c(h||(h=d`
    <template class="header" id="defaultHeaderTemplate">
      <vaadin-checkbox class="vaadin-grid-select-all-checkbox" aria-label="Select All" hidden\$="[[_selectAllHidden]]" on-checked-changed="_onSelectAllCheckedChanged" checked="[[_isChecked(selectAll, _indeterminate)]]" indeterminate="[[_indeterminate]]"></vaadin-checkbox>
    </template>
    <template id="defaultBodyTemplate">
      <vaadin-checkbox aria-label="Select Row" checked="{{selected}}"></vaadin-checkbox>
    </template>
`))}static get is(){return"vaadin-grid-selection-column"}static get properties(){return{width:{type:String,value:"58px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},autoSelect:{type:Boolean,value:!1},_indeterminate:Boolean,_previousActiveItem:Object,_selectAllHidden:Boolean}}static get observers(){return["_onSelectAllChanged(selectAll)"]}_pathOrHeaderChanged(e,t,i,r,s,o,a,n,l){!s.value||void 0===e&&void 0===o||(this._bodyTemplate=n=void 0,this.__cleanCellsOfTemplateProperties(s.value)),!i||void 0===t&&void 0===a||(this._headerTemplate=l=void 0,this.__cleanCellsOfTemplateProperties([i])),super._pathOrHeaderChanged(e,t,i,r,s,o,a,n,l)}__cleanCellsOfTemplateProperties(e){e.forEach(e=>{e._content.innerHTML="",delete e._instance,delete e._template})}_prepareHeaderTemplate(){const e=this._prepareTemplatizer(this._findTemplate(!0)||this.$.defaultHeaderTemplate);return e.templatizer.dataHost=e===this.$.defaultHeaderTemplate?this:this.dataHost,e}_prepareBodyTemplate(){const e=this._prepareTemplatizer(this._findTemplate()||this.$.defaultBodyTemplate);return e.templatizer.dataHost=e===this.$.defaultBodyTemplate?this:this.dataHost,e}constructor(){super(),this._boundOnActiveItemChanged=this._onActiveItemChanged.bind(this),this._boundOnDataProviderChanged=this._onDataProviderChanged.bind(this),this._boundOnSelectedItemsChanged=this._onSelectedItemsChanged.bind(this)}disconnectedCallback(){this._grid.removeEventListener("active-item-changed",this._boundOnActiveItemChanged),this._grid.removeEventListener("data-provider-changed",this._boundOnDataProviderChanged),this._grid.removeEventListener("filter-changed",this._boundOnSelectedItemsChanged),this._grid.removeEventListener("selected-items-changed",this._boundOnSelectedItemsChanged);if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.ShadyDOM&&this.parentElement){const e=this.parentElement,t=this.nextElementSibling;e.removeChild(this),t?e.insertBefore(this,t):e.appendChild(this)}super.disconnectedCallback()}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("active-item-changed",this._boundOnActiveItemChanged),this._grid.addEventListener("data-provider-changed",this._boundOnDataProviderChanged),this._grid.addEventListener("filter-changed",this._boundOnSelectedItemsChanged),this._grid.addEventListener("selected-items-changed",this._boundOnSelectedItemsChanged))}_onSelectAllChanged(e){void 0!==e&&this._grid&&(this._selectAllChangeLock||(this._grid.selectedItems=e&&Array.isArray(this._grid.items)?this._grid._filter(this._grid.items):[]))}_arrayContains(e,t){for(var i=0;e&&t&&t[i]&&e.indexOf(t[i])>=0;i++);return i==t.length}_onSelectAllCheckedChanged(e){this.selectAll=this._indeterminate||e.target.checked}_isChecked(e,t){return t||e}_onActiveItemChanged(e){const t=e.detail.value;if(this.autoSelect){const e=t||this._previousActiveItem;e&&this._grid._toggleItem(e)}this._previousActiveItem=t}_onSelectedItemsChanged(e){this._selectAllChangeLock=!0,Array.isArray(this._grid.items)&&(this._grid.selectedItems.length?this._arrayContains(this._grid.selectedItems,this._grid._filter(this._grid.items))?(this.selectAll=!0,this._indeterminate=!1):(this.selectAll=!1,this._indeterminate=!0):(this.selectAll=!1,this._indeterminate=!1)),this._selectAllChangeLock=!1}_onDataProviderChanged(e){this._selectAllHidden=!Array.isArray(this._grid.items)}}customElements.define(Re.is,Re);
