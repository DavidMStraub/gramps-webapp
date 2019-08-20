import{IronA11yKeysBehavior,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior,Polymer,dom,Templatizer,animationFrame,microTask,idlePeriod,timeOut,Debouncer,flush,enqueueDebouncer,html$1 as html,matches as matches$1,translate$1 as translate,templatize,ElementMixin,dedupingMixin,PolymerElement,ThemableMixin,afterNextRender,FlattenedNodesObserver,mixinBehaviors,IronA11yAnnouncer,ControlStateMixin,ThemePropertyMixin,ElementMixin$1,html$2 as html$1,PageViewElement,SharedStyles,connect,translate as translate$1,store,updateDrawerState}from"./gr-app.js";var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),IOS_TOUCH_SCROLLING=IOS&&8<=IOS[1],DEFAULT_PHYSICAL_COUNT=3,HIDDEN_Y="-10000px",SECRET_TABINDEX=-100;/**
                            
                            `iron-list` displays a virtual, 'infinite' list. The template inside
                            the iron-list element represents the DOM to create for each list item.
                            The `items` property specifies an array of list item data.
                            
                            For performance reasons, not every item in the list is rendered at once;
                            instead a small subset of actual template elements *(enough to fill the
                            viewport)* are rendered and reused as the user scrolls. As such, it is important
                            that all state of the list template is bound to the model driving it, since the
                            view may be reused with a new model at any time. Particularly, any state that
                            may change as the result of a user interaction with the list item must be bound
                            to the model to avoid view state inconsistency.
                            
                            ### Sizing iron-list
                            
                            `iron-list` must either be explicitly sized, or delegate scrolling to an
                            explicitly sized parent. By "explicitly sized", we mean it either has an
                            explicit CSS `height` property set via a class or inline style, or else is sized
                            by other layout means (e.g. the `flex` or `fit` classes).
                            
                            #### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)
                            
                            ```html
                            <template is="x-list">
                              <style>
                                :host {
                                  display: block;
                                  height: 100vh;
                                  display: flex;
                                  flex-direction: column;
                                }
                            
                                iron-list {
                                  flex: 1 1 auto;
                                }
                              </style>
                              <app-toolbar>App name</app-toolbar>
                              <iron-list items="[[items]]">
                                <template>
                                  <div>
                                    ...
                                  </div>
                                </template>
                              </iron-list>
                            </template>
                            ```
                            #### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
                            ```html
                            <template is="x-list">
                              <style>
                                :host {
                                  display: block;
                                }
                            
                                iron-list {
                                  height: 100vh; /* don't use % values unless the parent element is sized.
                            *\/
                                }
                              </style>
                              <iron-list items="[[items]]">
                                <template>
                                  <div>
                                    ...
                                  </div>
                                </template>
                              </iron-list>
                            </template>
                            ```
                            #### Main document scrolling -
                            [jsbin](https://jsbin.com/wevirow/edit?html,output)
                            ```html
                            <head>
                              <style>
                                body {
                                  height: 100vh;
                                  margin: 0;
                                  display: flex;
                                  flex-direction: column;
                                }
                            
                                app-toolbar {
                                  position: fixed;
                                  top: 0;
                                  left: 0;
                                  right: 0;
                                }
                            
                                iron-list {
                                  /* add padding since the app-toolbar is fixed at the top *\/
                                  padding-top: 64px;
                                }
                              </style>
                            </head>
                            <body>
                              <app-toolbar>App name</app-toolbar>
                              <iron-list scroll-target="document">
                                <template>
                                  <div>
                                    ...
                                  </div>
                                </template>
                              </iron-list>
                            </body>
                            ```
                            
                            `iron-list` must be given a `<template>` which contains exactly one element. In
                            the examples above we used a `<div>`, but you can provide any element (including
                            custom elements).
                            
                            ### Template model
                            
                            List item templates should bind to template models of the following structure:
                            
                            ```js
                            {
                              index: 0,        // index in the item array
                              selected: false, // true if the current item is selected
                              tabIndex: -1,    // a dynamically generated tabIndex for focus management
                              item: {}         // user data corresponding to items[index]
                            }
                            ```
                            
                            Alternatively, you can change the property name used as data index by changing
                            the `indexAs` property. The `as` property defines the name of the variable to
                            add to the binding scope for the array.
                            
                            For example, given the following `data` array:
                            
                            ##### data.json
                            
                            ```js
                            [
                              {"name": "Bob"},
                              {"name": "Tim"},
                              {"name": "Mike"}
                            ]
                            ```
                            
                            The following code would render the list (note the name property is bound from
                            the model object provided to the template scope):
                            
                            ```html
                            <iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
                            <iron-list items="[[data]]" as="item">
                              <template>
                                <div>
                                  Name: [[item.name]]
                                </div>
                              </template>
                            </iron-list>
                            ```
                            
                            ### Grid layout
                            
                            `iron-list` supports a grid layout in addition to linear layout by setting
                            the `grid` attribute.  In this case, the list template item must have both fixed
                            width and height (e.g. via CSS). Based on this, the number of items
                            per row are determined automatically based on the size of the list viewport.
                            
                            ### Accessibility
                            
                            `iron-list` automatically manages the focus state for the items. It also
                            provides a `tabIndex` property within the template scope that can be used for
                            keyboard navigation. For example, users can press the up and down keys to move
                            to previous and next items in the list:
                            
                            ```html
                            <iron-list items="[[data]]" as="item">
                              <template>
                                <div tabindex$="[[tabIndex]]">
                                  Name: [[item.name]]
                                </div>
                              </template>
                            </iron-list>
                            ```
                            
                            ### Styling
                            
                            You can use the `--iron-list-items-container` mixin to style the container of
                            items:
                            
                            ```css
                            iron-list {
                             --iron-list-items-container: {
                                margin: auto;
                              };
                            }
                            ```
                            
                            ### Resizing
                            
                            `iron-list` lays out the items when it receives a notification via the
                            `iron-resize` event. This event is fired by any element that implements
                            `IronResizableBehavior`.
                            
                            By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
                            trigger this event automatically. If you hide the list manually (e.g. you use
                            `display: none`) you might want to implement `IronResizableBehavior` or fire
                            this event manually right after the list became visible again. For example:
                            
                            ```js
                            document.querySelector('iron-list').fire('iron-resize');
                            ```
                            
                            ### When should `<iron-list>` be used?
                            
                            `iron-list` should be used when a page has significantly more DOM nodes than the
                            ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
                            at a time. This is why we refer to it as a `virtual` list. In this case, a
                            `dom-repeat` will still create 500 nodes which could slow down the web app, but
                            `iron-list` will only create 20.
                            
                            However, having an `iron-list` does not mean that you can load all the data at
                            once. Say you have a million records in the database, you want to split the data
                            into pages so you can bring in a page at the time. The page could contain 500
                            items, and iron-list will only render 20.
                            
                            @group Iron Element
                            @element iron-list
                            @demo demo/index.html
                            
                            */Polymer({_template:html`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{/**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */items:{type:Array},/**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */as:{type:String,value:"item"},/**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */indexAs:{type:String,value:"index"},/**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */selectedAs:{type:String,value:"selected"},/**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},/**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */selectionEnabled:{type:Boolean,value:!1},/**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */selectedItem:{type:Object,notify:!0},/**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */selectedItems:{type:Object,notify:!0},/**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */multiSelection:{type:Boolean,value:!1},/**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Templatizer,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior],/**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */_ratio:.5,/**
   * The padding-top value for the list.
   */_scrollerPaddingTop:0,/**
   * This value is the same as `scrollTop`.
   */_scrollPosition:0,/**
   * The sum of the heights of all the tiles in the DOM.
   */_physicalSize:0,/**
   * The average `offsetHeight` of the tiles observed till now.
   */_physicalAverage:0,/**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */_physicalAverageCount:0,/**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */_physicalTop:0,/**
   * The number of items in the list.
   */_virtualCount:0,/**
   * The estimated scroll height based on `_physicalAverage`
   */_estScrollHeight:0,/**
   * The scroll height of the dom node
   */_scrollHeight:0,/**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */_viewportHeight:0,/**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */_viewportWidth:0,/**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!TemplateInstanceBase>}
   */_physicalItems:null,/**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */_physicalSizes:null,/**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */_firstVisibleIndexVal:null,/**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */_lastVisibleIndexVal:null,/**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */_maxPages:2,/**
   * The currently focused physical item.
   */_focusedItem:null,/**
   * The virtual index of the focused item.
   */_focusedVirtualIndex:-1,/**
   * The physical index of the focused item.
   */_focusedPhysicalIndex:-1,/**
   * The the item that is focused if it is moved offscreen.
   * @private {?TemplatizerNode}
   */_offscreenFocusedItem:null,/**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   */_focusBackfillItem:null,/**
   * The maximum items per row
   */_itemsPerRow:1,/**
   * The width of each grid item
   */_itemWidth:0,/**
   * The height of the row in grid layout.
   */_rowHeight:0,/**
   * The cost of stamping a template in ms.
   */_templateCost:0,/**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */_parentModel:!0,/**
   * The bottom of the physical content.
   */get _physicalBottom(){return this._physicalTop+this._physicalSize},/**
   * The bottom of the scroll.
   */get _scrollBottom(){return this._scrollPosition+this._viewportHeight},/**
   * The n-th item rendered in the last physical item.
   */get _virtualEnd(){return this._virtualStart+this._physicalCount-1},/**
   * The height of the physical content that isn't on the screen.
   */get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},/**
   * The parent node for the _userTemplate.
   */get _itemsParent(){return dom(dom(this._userTemplate).parentNode)},/**
   * The maximum scroll top value.
   */get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},/**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},/**
   * The k-th tile that is at the top of the scrolling list.
   */set _physicalStart(val){val=val%this._physicalCount;if(0>val){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},/**
   * The k-th tile that is at the bottom of the scrolling list.
   */get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},/**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},/**
   * True if the current list is visible.
   */get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},/**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(null==idx){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems(function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}// Handle a partially rendered final row in grid mode
if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}})||0;this._firstVisibleIndexVal=idx}return idx},/**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(null==idx){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems(function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)})}this._lastVisibleIndexVal=idx}return idx},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,animationFrame);// `iron-resize` is fired when the list is attached if the event is added
// before attached causing unnecessary work.
this.listen(this,"iron-resize","_resizeHandler");this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler");this.unlisten(this,"keydown","_keydownHandler")},/**
   * Set the overflow property if this element has its own scrolling region
   */_setOverflow:function(scrollTarget){this.style.webkitOverflowScrolling=scrollTarget===this?"touch":"";this.style.overflowY=scrollTarget===this?"auto":"";// Clear cache.
this._lastVisibleIndexVal=null;this._firstVisibleIndexVal=null;this._debounce("_render",this._render,animationFrame)},/**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=!!("rtl"===styles.direction);this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},/**
   * Recycles the physical items when needed.
   */_scrollHandler:function(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),delta=scrollTop-this._scrollPosition,isScrollingDown=0<=delta;// Track the current scroll position.
this._scrollPosition=scrollTop;// Clear indexes for first and last visible indexes.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;// Random access.
if(Math.abs(delta)>this._physicalSize&&0<this._physicalSize){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;// Estimate new physical offset.
this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;this._update()}else if(0<this._physicalCount){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),microTask)}},/**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */_getReusables:function(fromTop){var ith,lastIth,offsetContent,physicalItemHeight,idxs=[],protectedOffsetContent=this._hiddenContentSize*this._ratio,virtualStart=this._virtualStart,virtualEnd=this._virtualEnd,physicalCount=this._physicalCount,top=this._physicalTop+this._scrollOffset,bottom=this._physicalBottom+this._scrollOffset,scrollTop=this._scrollTop,scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;lastIth=this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;lastIth=this._physicalStart;offsetContent=bottom-scrollBottom}while(!0){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){// Check that index is within the valid range.
if(virtualEnd+idxs.length+1>=this._virtualCount){break}// Check that the index is not visible.
if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{// Check that index is within the valid range.
if(0>=virtualStart-idxs.length){break}// Check that the index is not visible.
if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=0===ith?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},/**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */_update:function(itemSet,movingUp){if(itemSet&&0===itemSet.length||0===this._physicalCount){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);// Adjust offset after measuring.
if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},/**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */_createPool:function(size){this._ensureTemplatized();var i,inst,physicalItems=Array(size);for(i=0;i<size;i++){inst=this.stamp(null);// TODO(blasten):
// First element child is item; Safari doesn't support children[0]
// on a doc fragment. Test this to see if it still matters.
physicalItems[i]=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}return physicalItems},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},/**
   * Increases the pool size.
   */_increasePoolIfNeeded:function(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);if(this.grid){var correction=nextPhysicalCount%this._itemsPerRow;if(correction&&nextPhysicalCount-correction<=this._physicalCount){nextPhysicalCount+=this._itemsPerRow}nextPhysicalCount-=correction}var delta=nextPhysicalCount-this._physicalCount,nextIncrease=Math.round(.5*this._physicalCount);if(0>delta){return}if(0<delta){var ts=window.performance.now();// Concat arrays in place.
[].push.apply(this._physicalItems,this._createPool(delta));// Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
// support it.
for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;// Update the physical start if it needs to preserve the model of the
// focused item. In this situation, the focused item is currently rendered
// and its model would have changed after increasing the pool if the
// physical start remained unchanged.
if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(.5*this._physicalCount)}// The upper bounds is not fixed when dealing with a grid that doesn't
// fill it's last row with the exact number of items per row.
if(this._virtualEnd>=this._virtualCount-1||0===nextIncrease){// Do nothing.
}else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),microTask)}else if(this._physicalSize<this._optPhysicalSize){// Yield and increase the pool during idle time until the physical size is
// optimal.
this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),idlePeriod)}},/**
   * Renders the a new list.
   */_render:function(){if(!this.isAttached||!this._isVisible){return}if(0!==this._physicalCount){var reusables=this._getReusables(!0);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(0<this._virtualCount){// Initial render
this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},/**
   * Templetizes the user template.
   */_ensureTemplatized:function(){if(this.ctor){return}this._userTemplate=this.queryEffectiveChildren("template");if(!this._userTemplate){console.warn("iron-list requires a template to be provided in light-dom")}var instanceProps={__key__:!0};instanceProps[this.as]=!0;instanceProps[this.indexAs]=!0;instanceProps[this.selectedAs]=!0;instanceProps.tabIndex=!0;this._instanceProps=instanceProps;this.templatize(this._userTemplate,this.mutableData)},_gridChanged:function(newGrid,oldGrid){if("undefined"===typeof oldGrid)return;this.notifyResize();flush();newGrid&&this._updateGridMetrics()},/**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */_itemsChanged:function(change){if("items"===change.path){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,animationFrame)}else if("items.splices"===change.path){this._adjustVirtualIndex(change.value.indexSplices);this._virtualCount=this.items?this.items.length:0;// Only blur if at least one item is added or removed.
var itemAddedOrRemoved=change.value.indexSplices.some(function(splice){return 0<splice.addedCount||0<splice.removed.length});if(itemAddedOrRemoved){// Only blur activeElement if it is a descendant of the list (#505,
// #507).
var activeElement=this._getActiveElement();if(this.contains(activeElement)){activeElement.blur()}}// Render only if the affected index is rendered.
var affectedIndexRendered=change.value.indexSplices.some(function(splice){return splice.index+splice.addedCount>=this._virtualStart&&splice.index<=this._virtualEnd},this);if(!this._isClientFull()||affectedIndexRendered){this._debounce("_render",this._render,animationFrame)}}else if("items.length"!==change.path){this._forwardItemPath(change.path,change.value)}},_forwardItemPath:function(path,value){path=path.slice(6);// 'items.'.length == 6
var dot=path.indexOf(".");if(-1===dot){dot=path.length}var isIndexRendered,pidx,inst,offscreenInstance=this.modelForElement(this._offscreenFocusedItem),vidx=parseInt(path.substring(0,dot),10);isIndexRendered=this._isIndexRendered(vidx);if(isIndexRendered){pidx=this._getPhysicalIndex(vidx);inst=this.modelForElement(this._physicalItems[pidx])}else if(offscreenInstance){inst=offscreenInstance}if(!inst||inst[this.indexAs]!==vidx){return}path=path.substring(dot+1);path=this.as+(path?"."+path:"");inst._setPendingPropertyOrPath(path,value,!1,!0);inst._flushProperties&&inst._flushProperties(!0);// TODO(blasten): V1 doesn't do this and it's a bug
if(isIndexRendered){this._updateMetrics([pidx]);this._positionItems();this._updateScrollerSize()}},/**
   * @param {!Array<!Object>} splices
   */_adjustVirtualIndex:function(splices){splices.forEach(function(splice){// deselect removed items
splice.removed.forEach(this._removeItem,this);// We only need to care about changes happening above the current position
if(splice.index<this._virtualStart){var delta=Math.max(splice.addedCount-splice.removed.length,splice.index-this._virtualStart);this._virtualStart=this._virtualStart+delta;if(0<=this._focusedVirtualIndex){this._focusedVirtualIndex=this._focusedVirtualIndex+delta}}},this)},_removeItem:function(item){this.$.selector.deselect(item);// remove the current focused item
if(this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===item){this._removeFocusedItem()}},/**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(2===arguments.length&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if(null!=(rtn=fn.call(this,pidx,vidx))){return rtn}}}},/**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},/**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */_assignModels:function(itemSet){this._iterateItems(function(pidx,vidx){var el=this._physicalItems[pidx],item=this.items&&this.items[vidx];if(null!=item){var inst=this.modelForElement(el);inst.__key__=null;this._forwardProperty(inst,this.as,item);this._forwardProperty(inst,this.selectedAs,this.$.selector.isSelected(item));this._forwardProperty(inst,this.indexAs,vidx);this._forwardProperty(inst,"tabIndex",this._focusedVirtualIndex===vidx?0:-1);this._physicalIndexForKey[inst.__key__]=pidx;inst._flushProperties&&inst._flushProperties(!0);el.removeAttribute("hidden")}else{el.setAttribute("hidden","")}},itemSet)},/**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */_updateMetrics:function(itemSet){// Make sure we distributed all the physical items
// so we can measure them.
flush();var newPhysicalSize=0,oldPhysicalSize=0,prevAvgCount=this._physicalAverageCount,prevPhysicalAvg=this._physicalAverage;this._iterateItems(function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0},itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=1===this._itemsPerRow?oldPhysicalSize:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}// Update the average if it measured something.
if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_updateGridMetrics:function(){this._itemWidth=0<this._physicalCount?this._physicalItems[0].getBoundingClientRect().width:200;this._rowHeight=0<this._physicalCount?this._physicalItems[0].offsetHeight:200;this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},/**
   * Updates the position of the physical items.
   */_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;if(this.grid){var totalItemWidth=this._itemsPerRow*this._itemWidth,rowOffset=(this._viewportWidth-totalItemWidth)/2;this._iterateItems(function(pidx,vidx){var modulus=vidx%this._itemsPerRow,x=Math.floor(modulus*this._itemWidth+rowOffset);if(this._isRTL){x=-1*x}this.translate3d(x+"px",y+"px",0,this._physicalItems[pidx]);if(this._shouldRenderNextRow(vidx)){y+=this._rowHeight}})}else{this._iterateItems(function(pidx,vidx){this.translate3d(0,y+"px",0,this._physicalItems[pidx]);y+=this._physicalSizes[pidx]})}},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},/**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */_shouldRenderNextRow:function(vidx){return vidx%this._itemsPerRow===this._itemsPerRow-1},/**
   * Adjusts the scroll position when it was overestimated.
   */_adjustScrollPosition:function(){var deltaHeight=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);// Note: the delta can be positive or negative.
if(0!==deltaHeight){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollTop;// juking scroll position during interial scrolling on iOS is no bueno
if(!IOS_TOUCH_SCROLLING&&0<scrollTop){this._resetScrollPosition(scrollTop-deltaHeight)}}},/**
   * Sets the position of the scroll.
   */_resetScrollPosition:function(pos){if(this.scrollTarget&&0<=pos){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},/**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||0===this._scrollHeight;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;// Amortize height adjustment, so it won't trigger large repaints too often.
if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},/**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */scrollToItem:function(item){return this.scrollToIndex(this.items.indexOf(item))},/**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */scrollToIndex:function(idx){if("number"!==typeof idx||0>idx||idx>this.items.length-1){return}flush();// Items should have been rendered prior scrolling to an index.
if(0===this._physicalCount){return}idx=this._clamp(idx,0,this._virtualCount-1);// Update the virtual start only when needed.
if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-2*this._itemsPerRow:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();// Estimate new physical offset.
this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart,currentVirtualItem=this._virtualStart,targetOffsetTop=0,hiddenContentSize=this._hiddenContentSize;// scroll to the item as much as we can.
while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(!0);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},/**
   * Reset the physical average and the average count.
   */_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},/**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */_resizeHandler:function(){this._debounce("_render",function(){// clear cached visible index.
this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(this._isVisible){this.updateViewportBoundaries();// Reinstall the scroll event listener.
this.toggleScrollListener(!0);this._resetAverage();this._render()}else{// Uninstall the scroll event listener.
this.toggleScrollListener(!1)}},animationFrame)},/**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */selectItem:function(item){return this.selectIndex(this.items.indexOf(item))},/**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */selectIndex:function(index){if(0>index||index>=this._virtualCount){return}if(!this.multiSelection&&this.selectedItem){this.clearSelection()}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);if(model){model[this.selectedAs]=!0}this.updateSizeForIndex(index)}this.$.selector.selectIndex(index)},/**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */deselectItem:function(item){return this.deselectIndex(this.items.indexOf(item))},/**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */deselectIndex:function(index){if(0>index||index>=this._virtualCount){return}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);model[this.selectedAs]=!1;this.updateSizeForIndex(index)}this.$.selector.deselectIndex(index)},/**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */toggleSelectionForItem:function(item){return this.toggleSelectionForIndex(this.items.indexOf(item))},/**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */toggleSelectionForIndex:function(index){var isSelected=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(index):this.$.selector.isSelected(this.items[index]);isSelected?this.deselectIndex(index):this.selectIndex(index)},/**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */clearSelection:function(){this._iterateItems(function(pidx,vidx){this.modelForElement(this._physicalItems[pidx])[this.selectedAs]=!1});this.$.selector.clearSelection()},/**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */_selectionEnabledChanged:function(selectionEnabled){var handler=selectionEnabled?this.listen:this.unlisten;handler.call(this,this,"tap","_selectionHandler")},/**
   * Select an item from an event object.
   */_selectionHandler:function(e){var model=this.modelForElement(e.target);if(!model){return}var modelTabIndex,activeElTabIndex,target=dom(e).path[0],activeEl=this._getActiveElement(),physicalItem=this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];// Safari does not focus certain form controls via mouse
// https://bugs.webkit.org/show_bug.cgi?id=118043
if("input"===target.localName||"button"===target.localName||"select"===target.localName){return}// Set a temporary tabindex
modelTabIndex=model.tabIndex;model.tabIndex=SECRET_TABINDEX;activeElTabIndex=activeEl?activeEl.tabIndex:-1;model.tabIndex=modelTabIndex;// Only select the item if the tap wasn't on a focusable child
// or the element bound to `tabIndex`
if(activeEl&&physicalItem!==activeEl&&physicalItem.contains(activeEl)&&activeElTabIndex!==SECRET_TABINDEX){return}this.toggleSelectionForItem(model[this.as])},_multiSelectionChanged:function(multiSelection){this.clearSelection();this.$.selector.multi=multiSelection},/**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */updateSizeForItem:function(item){return this.updateSizeForIndex(this.items.indexOf(item))},/**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */updateSizeForIndex:function(index){if(!this._isIndexRendered(index)){return null}this._updateMetrics([this._getPhysicalIndex(index)]);this._positionItems();return null},/**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */_manageFocus:function(){var fidx=this._focusedVirtualIndex;if(0<=fidx&&fidx<this._virtualCount){// if it's a valid index, check if that index is rendered
// in a physical item.
if(this._isIndexRendered(fidx)){this._restoreFocusedItem()}else{this._createFocusBackfillItem()}}else if(0<this._virtualCount&&0<this._physicalCount){// otherwise, assign the initial focused index.
this._focusedPhysicalIndex=this._physicalStart;this._focusedVirtualIndex=this._virtualStart;this._focusedItem=this._physicalItems[this._physicalStart]}},/**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */_convertIndexToCompleteRow:function(idx){// when grid == false _itemPerRow can be unset.
this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_isIndexVisible:function(idx){return idx>=this.firstVisibleIndex&&idx<=this.lastVisibleIndex},_getPhysicalIndex:function(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},focusItem:function(idx){this._focusPhysicalItem(idx)},_focusPhysicalItem:function(idx){if(0>idx||idx>=this._virtualCount){return}this._restoreFocusedItem();// scroll to index to make sure it's rendered
if(!this._isIndexRendered(idx)){this.scrollToIndex(idx)}var physicalItem=this._physicalItems[this._getPhysicalIndex(idx)],model=this.modelForElement(physicalItem),focusable;// set a secret tab index
model.tabIndex=SECRET_TABINDEX;// check if focusable element is the physical item
if(physicalItem.tabIndex===SECRET_TABINDEX){focusable=physicalItem}// search for the element which tabindex is bound to the secret tab index
if(!focusable){focusable=dom(physicalItem).querySelector("[tabindex=\""+SECRET_TABINDEX+"\"]")}// restore the tab index
model.tabIndex=0;// focus the focusable element
this._focusedVirtualIndex=idx;focusable&&focusable.focus()},_removeFocusedItem:function(){if(this._offscreenFocusedItem){this._itemsParent.removeChild(this._offscreenFocusedItem)}this._offscreenFocusedItem=null;this._focusBackfillItem=null;this._focusedItem=null;this._focusedVirtualIndex=-1;this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var fpidx=this._focusedPhysicalIndex;if(this._offscreenFocusedItem||0>this._focusedVirtualIndex){return}if(!this._focusBackfillItem){// Create a physical item.
var inst=this.stamp(null);this._focusBackfillItem=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}// Set the offcreen focused physical item.
this._offscreenFocusedItem=this._physicalItems[fpidx];this.modelForElement(this._offscreenFocusedItem).tabIndex=0;this._physicalItems[fpidx]=this._focusBackfillItem;this._focusedPhysicalIndex=fpidx;// Hide the focused physical.
this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem)},_restoreFocusedItem:function(){if(!this._offscreenFocusedItem||0>this._focusedVirtualIndex){return}// Assign models to the focused index.
this._assignModels();// Get the new physical index for the focused index.
var fpidx=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),onScreenItem=this._physicalItems[fpidx];if(!onScreenItem){return}var onScreenInstance=this.modelForElement(onScreenItem),offScreenInstance=this.modelForElement(this._offscreenFocusedItem);// Restores the physical item only when it has the same model
// as the offscreen one. Use key for comparison since users can set
// a new item via set('items.idx').
if(onScreenInstance[this.as]===offScreenInstance[this.as]){// Flip the focus backfill.
this._focusBackfillItem=onScreenItem;onScreenInstance.tabIndex=-1;// Restore the focused physical item.
this._physicalItems[fpidx]=this._offscreenFocusedItem;// Hide the physical item that backfills.
this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem)}else{this._removeFocusedItem();this._focusBackfillItem=null}this._offscreenFocusedItem=null},_didFocus:function(e){var targetModel=this.modelForElement(e.target),focusedModel=this.modelForElement(this._focusedItem),hasOffscreenFocusedItem=null!==this._offscreenFocusedItem,fidx=this._focusedVirtualIndex;if(!targetModel){return}if(focusedModel===targetModel){// If the user focused the same item, then bring it into view if it's not
// visible.
if(!this._isIndexVisible(fidx)){this.scrollToIndex(fidx)}}else{this._restoreFocusedItem();// Restore tabIndex for the currently focused item.
if(focusedModel){focusedModel.tabIndex=-1}// Set the tabIndex for the next focused item.
targetModel.tabIndex=0;fidx=targetModel[this.indexAs];this._focusedVirtualIndex=fidx;this._focusedPhysicalIndex=this._getPhysicalIndex(fidx);this._focusedItem=this._physicalItems[this._focusedPhysicalIndex];if(hasOffscreenFocusedItem&&!this._offscreenFocusedItem){this._update()}}},_keydownHandler:function(e){switch(e.keyCode){case/* ARROW_DOWN */40:if(this._focusedVirtualIndex<this._virtualCount-1)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case/* ARROW_RIGHT */39:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case/* ARROW_UP */38:if(0<this._focusedVirtualIndex)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case/* ARROW_LEFT */37:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case/* ENTER */13:this._focusPhysicalItem(this._focusedVirtualIndex);if(this.selectionEnabled)this._selectionHandler(e);break;}},_clamp:function(v,min,max){return Math.min(max,Math.max(min,v))},_debounce:function(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name])},_forwardProperty:function(inst,name,value){inst._setPendingProperty(name,value)},/* Templatizer bindings for v2 */_forwardHostPropV2:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).forwardHostProp(prop,value)}},this)},_notifyInstancePropV2:function(inst,prop,value){if(matches$1(this.as,prop)){var idx=inst[this.indexAs];if(prop==this.as){this.items[idx]=value}this.notifyPath(translate(this.as,"items."+idx,prop),value)}},/* Templatizer bindings for v1 */_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(inst,path,value){if(0===path.indexOf(this.as+".")){this.notifyPath("items."+inst.__key__+"."+path.slice(this.as.length+1),value)}},_forwardParentPath:function(path,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item).notifyPath(path,value,!0)}},this)},_forwardParentProp:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach(function(item){if(item){this.modelForElement(item)[prop]=value}},this)},/* Gets the activeElement of the shadow root/host that contains the list. */_getActiveElement:function(){var itemsHost=this._itemsParent.node.domHost;return dom(itemsHost?itemsHost.root:document).activeElement}});const DISABLED_ATTR="disable-upgrade",DisableUpgradeMixin=dedupingMixin(base=>{/**
   * @constructor
   * @implements {Polymer_ElementMixin}
   * @extends {HTMLElement}
   * @private
   */const superClass=ElementMixin(base);/**
                                             * @polymer
                                             * @mixinClass
                                             * @implements {Polymer_DisableUpgradeMixin}
                                             */class DisableUpgradeClass extends superClass{/**
     * @suppress {missingProperties} go/missingfnprops
     */static get observedAttributes(){return super.observedAttributes.concat(DISABLED_ATTR)}/**
       * @override
       * @param {string} name Attribute name.
       * @param {?string} old The previous value for the attribute.
       * @param {?string} value The new value for the attribute.
       * @param {?string} namespace The XML namespace for the attribute.
       * @return {void}
       */attributeChangedCallback(name,old,value,namespace){if(name==DISABLED_ATTR){if(!this.__dataEnabled&&null==value&&this.isConnected){super.connectedCallback()}}else{super.attributeChangedCallback(name,old,value,/** @type {null|string} */namespace)}}/*
        NOTE: cannot gate on attribute because this is called before
        attributes are delivered. Therefore, we stub this out and
        call `super._initializeProperties()` manually.
      */ /** @override */_initializeProperties(){}// prevent user code in connected from running
/** @override */connectedCallback(){if(this.__dataEnabled||!this.hasAttribute(DISABLED_ATTR)){super.connectedCallback()}}// prevent element from turning on properties
/** @override */_enableProperties(){if(!this.hasAttribute(DISABLED_ATTR)){if(!this.__dataEnabled){super._initializeProperties()}super._enableProperties()}}// only go if "enabled"
/** @override */disconnectedCallback(){if(this.__dataEnabled){super.disconnectedCallback()}}}return DisableUpgradeClass});/**
                                          * Element class mixin that allows the element to boot up in a non-enabled
                                          * state when the `disable-upgrade` attribute is present. This mixin is
                                          * designed to be used with element classes like PolymerElement that perform
                                          * initial startup work when they are first connected. When the
                                          * `disable-upgrade` attribute is removed, if the element is connected, it
                                          * boots up and "enables" as it otherwise would; if it is not connected, the
                                          * element boots up when it is next connected.
                                          *
                                          * Using `disable-upgrade` with PolymerElement prevents any data propagation
                                          * to the element, any element DOM from stamping, or any work done in
                                          * connected/disconnctedCallback from occuring, but it does not prevent work
                                          * done in the element constructor.
                                          *
                                          * Note, this mixin must be applied on top of any element class that
                                          * itself implements a `connectedCallback` so that it can control the work
                                          * done in `connectedCallback`. For example,
                                          *
                                          *     MyClass = DisableUpgradeMixin(class extends BaseClass {...});
                                          *
                                          * @mixinFunction
                                          * @polymer
                                          * @appliesMixin ElementMixin
                                          * @template T
                                          * @param {function(new:T)} superClass Class to apply mixin to.
                                          * @return {function(new:T)} superClass with mixin applied.
                                          */var disableUpgradeMixin={DisableUpgradeMixin:DisableUpgradeMixin};/**
   @license
   Copyright (c) 2018 Vaadin Ltd.
   This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
   */ /*
       * Placeholder object class representing items being loaded.
       *
       * @private
       */const ComboBoxPlaceholder=class ComboBoxPlaceholder{toString(){return""}};var vaadinComboBoxPlaceholder={ComboBoxPlaceholder:ComboBoxPlaceholder};const ComboBoxDataProviderMixin=superClass=>class DataProviderMixin extends superClass{static get properties(){return{/**
       * Number of items fetched at a time from the dataprovider.
       */pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},/**
       * Total number of items.
       */size:{type:Number,observer:"_sizeChanged"},/**
       * Function that provides items lazily. Receives arguments `params`, `callback`
       *
       * `params.page` Requested page index
       *
       * `params.pageSize` Current page size
       *
       * `params.filter` Currently applied filter
       *
       * `callback(items, size)` Callback function with arguments:
       *   - `items` Current page of items
       *   - `size` Total number of items.
       */dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>{return{}}},__placeHolder:{value:new ComboBoxPlaceholder}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(dataProvider,opened,value){// Can't depend on filter in this obsever as we don't want
// to clear the filter whenever it's set
if(dataProvider&&this.filter){this.size=void 0;this._pendingRequests={};this.filter="";this.clearCache()}}ready(){super.ready();this.clearCache();this.$.overlay.addEventListener("index-requested",e=>{const index=e.detail.index;if(index!==void 0){const page=this._getPageForIndex(index);if(this._shouldLoadPage(page)){this._loadPage(page)}}})}_dataProviderFilterChanged(){if(this.dataProvider&&this.opened){this.size=void 0;this._pendingRequests={};this.clearCache()}}_ensureFirstPage(opened){if(opened&&this._shouldLoadPage(0)){this._loadPage(0)}}_shouldLoadPage(page){if(!this.filteredItems||this._forceNextRequest){this._forceNextRequest=!1;return!0}const loadedItem=this.filteredItems[page*this.pageSize];if(loadedItem!==void 0){return loadedItem instanceof ComboBoxPlaceholder}else{return this.size===void 0}}_loadPage(page){// make sure same page isn't requested multiple times.
if(!this._pendingRequests[page]&&this.dataProvider){this.loading=!0;const params={page,pageSize:this.pageSize,filter:this.filter},callback=(items,size)=>{if(this._pendingRequests[page]===callback){if(!this.filteredItems){const filteredItems=[];filteredItems.splice(params.page*params.pageSize,items.length,...items);this.filteredItems=filteredItems}else{this.splice("filteredItems",params.page*params.pageSize,items.length,...items)}// Update selectedItem from filteredItems if value is set
if(this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value){this._selectItemForValue(this.value)}this.size=size;delete this._pendingRequests[page];if(0===Object.keys(this._pendingRequests).length){this.loading=!1}if(0===page&&this.__repositionOverlayDebouncer&&items.length>(this.__maxRenderedItems||0)){setTimeout(()=>this.__repositionOverlayDebouncer.flush());this.__maxRenderedItems=items.length}}};this._pendingRequests[page]=callback;this.dataProvider(params,callback)}}_getPageForIndex(index){return Math.floor(index/this.pageSize)}/**
     * Clears the cached pages and reloads data from dataprovider when needed.
     */clearCache(){if(!this.dataProvider){return}this._pendingRequests={};const filteredItems=[];for(let i=0;i<(this.size||0);i++){filteredItems.push(this.__placeHolder)}this.filteredItems=filteredItems;if(this.opened){this._loadPage(0)}else{this._forceNextRequest=!0}}_sizeChanged(size=0){const filteredItems=(this.filteredItems||[]).slice(0,size);for(let i=0;i<size;i++){filteredItems[i]=filteredItems[i]!==void 0?filteredItems[i]:this.__placeHolder}this.filteredItems=filteredItems}_pageSizeChanged(pageSize,oldPageSize){if(Math.floor(pageSize)!==pageSize||0===pageSize){this.pageSize=oldPageSize;throw new Error("`pageSize` value must be an integer > 0")}this.clearCache()}_dataProviderChanged(dataProvider,oldDataProvider){this._ensureItemsOrDataProvider(()=>{this.dataProvider=oldDataProvider})}_ensureItemsOrDataProvider(restoreOldValueCallback){if(this.items!==void 0&&this.dataProvider!==void 0){restoreOldValueCallback();throw new Error("Using `items` and `dataProvider` together is not supported")}else if(this.dataProvider&&!this.filteredItems){this.filteredItems=[]}}_warnDataProviderValue(dataProvider,value){if(dataProvider&&""!==value&&(this.selectedItem===void 0||null===this.selectedItem)){const valueIndex=this._indexOfValue(value,this.filteredItems);if(0>valueIndex||!this._getItemLabel(this.filteredItems[valueIndex])){/* eslint-disable no-console */console.warn("Warning: unable to determine the label for the provided `value`. "+"Nothing to display in the text field. This usually happens when "+"setting an initial `value` before any items are returned from "+"the `dataProvider` callback. Consider setting `selectedItem` "+"instead of `value`");/* eslint-enable no-console */}}}};var vaadinComboBoxDataProviderMixin={ComboBoxDataProviderMixin:ComboBoxDataProviderMixin};class ComboBoxItemElement extends ThemableMixin(PolymerElement){static get template(){return html`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`}static get is(){return"vaadin-combo-box-item"}static get properties(){return{/**
       * The index of the item
       */index:Number,/**
       * The item to render
       * @type {(String|Object)}
       */item:Object,/**
       * The text label corresponding to the item
       */label:String,/**
       * True when item is selected
       */selected:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * True when item is focused
       */focused:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * The template instance corresponding to the item
       */_itemTemplateInstance:Object,/**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */renderer:Function,/**
       * Saved instance of a custom renderer function.
       */_oldRenderer:Function}}static get observers(){return["_rendererOrItemChanged(renderer, index, item.*)","_updateLabel(label, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"index\", index, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"item\", item, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"selected\", selected, _itemTemplateInstance)","_updateTemplateInstanceVariable(\"focused\", focused, _itemTemplateInstance)"]}connectedCallback(){super.connectedCallback();if(!this._itemTemplateInstance){// 2.0 has __dataHost. Might want to consider assigning combobox reference directly to item.
const overlay=this.getRootNode().host.getRootNode().host,dropdown=overlay.__dataHost,comboBoxOverlay=dropdown.getRootNode().host;this._comboBox=comboBoxOverlay.getRootNode().host;this._comboBox._ensureTemplatized();if(this._comboBox._TemplateClass){this._itemTemplateInstance=new this._comboBox._TemplateClass({});this.$.content.textContent="";this.$.content.appendChild(this._itemTemplateInstance.root)}}}_render(){if(!this.renderer){return}const model={index:this.index,item:this.item};this.renderer(this.$.content,this._comboBox,model)}_rendererOrItemChanged(renderer,index,item){if(item===void 0||index===void 0){return}if(this._oldRenderer!==renderer){this.$.content.innerHTML=""}if(renderer){this._oldRenderer=renderer;this._render()}}_updateLabel(label,_itemTemplateInstance){if(_itemTemplateInstance===void 0&&this.$.content&&!this.renderer){// Only set label to textContent no template
this.$.content.textContent=label}}_updateTemplateInstanceVariable(variable,value,_itemTemplateInstance){if(variable===void 0||value===void 0||_itemTemplateInstance===void 0){return}_itemTemplateInstance[variable]=value}}customElements.define(ComboBoxItemElement.is,ComboBoxItemElement);const p=Element.prototype,matches=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,FocusablesHelper={/**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the children,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */getTabbableNodes:function(node){const result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);// If there is at least one element with tabindex > 0, we need to sort
// the final array by tabindex.
if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result},/**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */isFocusable:function(element){// From http://stackoverflow.com/a/1600194/4228703:
// There isn't a definite list, it's up to the browser. The only
// standard we have is DOM Level 2 HTML
// https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
// only elements that have a focus() method are HTMLInputElement,
// HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
// notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
// tests with tabbables in different browsers
// http://allyjs.io/data-tables/focusable.html
// Elements that cannot be focused if they have [disabled] attribute.
if(matches.call(element,"input, select, textarea, button, object")){return matches.call(element,":not([disabled])")}// Elements that can be focused even if they have [disabled] attribute.
return matches.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")},/**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */isTabbable:function(element){return this.isFocusable(element)&&matches.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)},/**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */_normalizedTabIndex:function(element){if(this.isFocusable(element)){const tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1},/**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result` if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */_collectTabbableNodes:function(node,result){// If not an element or not visible, no need to explore children.
if(node.nodeType!==Node.ELEMENT_NODE||!this._isVisible(node)){return!1}const element=/** @type {!HTMLElement} */node,tabIndex=this._normalizedTabIndex(element);let needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}// In ShadowDOM v1, tab order is affected by the order of distribution.
// E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
// in ShadowDOM v0 tab order is not affected by the distribution order,
// in fact getTabbableNodes(#root) returns [#B, #A].
//  <div id="root">
//   <!-- shadow -->
//     <slot name="a">
//     <slot name="b">
//   <!-- /shadow -->
//   <input id="A" slot="a">
//   <input id="B" slot="b" tabindex="1">
//  </div>
let children;if("slot"===element.localName){children=element.assignedNodes({flatten:!0})}else{// Use shadow root if possible, will check for distributed nodes.
children=(element.shadowRoot||element).children}if(children){for(let i=0;i<children.length;i++){// Ensure method is always invoked to collect tabbable children.
needsSort=this._collectTabbableNodes(children[i],result)||needsSort}}return needsSort},/**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */_isVisible:function(element){// Check inline style first to save a re-flow. If looks good, check also
// computed style.
let style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1},/**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */_sortByTabIndex:function(tabbables){// Implement a merge sort as Array.prototype.sort does a non-stable sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const len=tabbables.length;if(2>len){return tabbables}const pivot=Math.ceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)},/**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */_mergeSortByTabIndex:function(left,right){const result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)},/**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */_hasLowerTabOrder:function(a,b){// Normalize tabIndexes
// e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
const ati=Math.max(a.tabIndex,0),bti=Math.max(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}};var vaadinFocusablesHelper={FocusablesHelper:FocusablesHelper};let overlayContentCounter=0;const overlayContentCache={},createOverlayContent=cssText=>{const is=overlayContentCache[cssText]||processOverlayStyles(cssText);return document.createElement(is)},processOverlayStyles=cssText=>{overlayContentCounter++;const is=`vaadin-overlay-content-${overlayContentCounter}`,styledTemplate=document.createElement("template"),style=document.createElement("style");style.textContent=":host { display: block; }"+cssText;styledTemplate.content.appendChild(style);if(window.ShadyCSS){window.ShadyCSS.prepareTemplate(styledTemplate,is)}// NOTE(platosha): Have to use an awkward IIFE returning class here
// to prevent this class from showing up in analysis.json & API docs.
/** @private */const klass=(()=>class extends HTMLElement{static get is(){return is}connectedCallback(){if(window.ShadyCSS){window.ShadyCSS.styleElement(this)}if(!this.shadowRoot){this.attachShadow({mode:"open"});this.shadowRoot.appendChild(document.importNode(styledTemplate.content,!0))}}})();customElements.define(klass.is,klass);overlayContentCache[cssText]=is;return is};/**
    *
    * `<vaadin-overlay>` is a Web Component for creating overlays. The content of the overlay
    * can be populated in two ways: imperatively by using renderer callback function and
    * declaratively by using Polymer's Templates.
    *
    * ### Rendering
    *
    * By default, the overlay uses the content provided by using the renderer callback function.
    *
    * The renderer function provides `root`, `owner`, `model` arguments when applicable.
    * Generate DOM content by using `model` object properties if needed, append it to the `root`
    * element and control the state of the host element by accessing `owner`. Before generating new
    * content, users are able to check if there is already content in `root` for reusing it.
    *
    * ```html
    * <vaadin-overlay id="overlay"></vaadin-overlay>
    * ```
    * ```js
    * const overlay = document.querySelector('#overlay');
    * overlay.renderer = function(root) {
    *  root.textContent = "Overlay content";
    * };
    * ```
    *
    * Renderer is called on the opening of the overlay and each time the related model is updated.
    * DOM generated during the renderer call can be reused
    * in the next renderer call and will be provided with the `root` argument.
    * On first call it will be empty.
    *
    * **NOTE:** when the renderer property is defined, the `<template>` content is not used.
    *
    * ### Templating
    *
    * Alternatively, the content can be provided with Polymer Template.
    * Overlay finds the first child template and uses that in case renderer callback function
    * is not provided. You can also set a custom template using the `template` property.
    *
    * After the content from the template is stamped, the `content` property
    * points to the content container.
    *
    * The overlay provides `forwardHostProp` when calling
    * `Polymer.Templatize.templatize` for the template, so that the bindings
    * from the parent scope propagate to the content.  You can also pass
    * custom `instanceProps` object using the `instanceProps` property.
    *
    * ```html
    * <vaadin-overlay>
    *   <template>Overlay content</template>
    * </vaadin-overlay>
    * ```
    *
    * **NOTE:** when using `instanceProps`: because of the Polymer limitation,
    * every template can only be templatized once, so it is important
    * to set `instanceProps` before the `template` is assigned to the overlay.
    *
    * ### Styling
    *
    * To style the overlay content, use styles in the parent scope:
    *
    * - If the overlay is used in a component, then the component styles
    *   apply the overlay content.
    * - If the overlay is used in the global DOM scope, then global styles
    *   apply to the overlay content.
    *
    * See examples for styling the overlay content in the live demos.
    *
    * The following Shadow DOM parts are available for styling the overlay component itself:
    *
    * Part name  | Description
    * -----------|---------------------------------------------------------|
    * `backdrop` | Backdrop of the overlay
    * `overlay`  | Container for position/sizing/alignment of the content
    * `content`  | Content of the overlay
    *
    * The following state attributes are available for styling:
    *
    * Attribute | Description | Part
    * ---|---|---
    * `opening` | Applied just after the overlay is attached to the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
    * `closing` | Applied just before the overlay is detached from the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
    *
    * The following custom CSS properties are available for styling:
    *
    * Custom CSS property | Description | Default value
    * ---|---|---
    * `--vaadin-overlay-viewport-bottom` | Bottom offset of the visible viewport area | `0` or detected offset
    *
    * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
    *
    * @memberof Vaadin
    * @mixes Vaadin.ThemableMixin
    * @demo demo/index.html
    */class OverlayElement extends ThemableMixin(PolymerElement){static get template(){return html`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},/**
       * Owner element passed with renderer function
       */owner:Element,/**
       * Custom function for rendering the content of the overlay.
       * Receives three arguments:
       *
       * - `root` The root container DOM element. Append your content to it.
       * - `owner` The host element of the renderer function.
       * - `model` The object with the properties related with rendering.
       */renderer:Function,/**
       * The template of the overlay content.
       */template:{type:Object,notify:!0},/**
       * Optional argument for `Polymer.Templatize.templatize`.
       */instanceProps:{type:Object},/**
       * References the content container after the template is stamped.
       */content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Object with properties that is passed to `renderer` function
       */model:Object,/**
       * When true the overlay won't disable the main content, showing
       * it doesn’t change the functionality of the user interface.
       */modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},/**
       * When set to true, the overlay is hidden. This also closes the overlay
       * immediately in case there is a closing animation in progress.
       */hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},/**
       * When true move focus to the first focusable element in the overlay,
       * or to the overlay if there are no focusable elements.
       */focusTrap:{type:Boolean,value:!1},/**
       * Set to true to enable restoring of focus when overlay is closed.
       */restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super();this._boundMouseDownListener=this._mouseDownListener.bind(this);this._boundMouseUpListener=this._mouseUpListener.bind(this);this._boundOutsideClickListener=this._outsideClickListener.bind(this);this._boundKeydownListener=this._keydownListener.bind(this);this._observer=new FlattenedNodesObserver(this,info=>{this._setTemplateFromNodes(info.addedNodes)});// Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.
this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this);if(/iPad|iPhone|iPod/.test(navigator.userAgent)){this._boundIosResizeListener=()=>this._detectIosNavbar()}}ready(){super.ready();this._observer.flush();// Need to add dummy click listeners to this and the backdrop or else
// the document click event listener (_outsideClickListener) may never
// get invoked on iOS Safari (reproducible in <vaadin-dialog>
// and <vaadin-context-menu>).
this.addEventListener("click",()=>{});this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(!this.opened){return}const innerHeight=window.innerHeight,innerWidth=window.innerWidth,landscape=innerWidth>innerHeight,clientHeight=document.documentElement.clientHeight;if(landscape&&clientHeight>innerHeight){this.style.setProperty("--vaadin-overlay-viewport-bottom",clientHeight-innerHeight+"px")}else{this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}}_setTemplateFromNodes(nodes){this.template=nodes.filter(node=>node.localName&&"template"===node.localName)[0]||this.template}/**
     * @event vaadin-overlay-close
     * fired before the `vaadin-overlay` will be closed. If canceled the closing of the overlay is canceled as well.
     */close(sourceEvent){var evt=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:sourceEvent}});this.dispatchEvent(evt);if(!evt.defaultPrevented){this.opened=!1}}connectedCallback(){super.connectedCallback();if(this._boundIosResizeListener){this._detectIosNavbar();window.addEventListener("resize",this._boundIosResizeListener)}}disconnectedCallback(){super.disconnectedCallback();this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(event){event.preventDefault()}_mouseDownListener(event){this._mouseDownInside=0<=event.composedPath().indexOf(this.$.overlay)}_mouseUpListener(event){this._mouseUpInside=0<=event.composedPath().indexOf(this.$.overlay)}/**
     * We need to listen on 'click' / 'tap' event and capture it and close the overlay before
     * propagating the event to the listener in the button. Otherwise, if the clicked button would call
     * open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
     *
     * @event vaadin-overlay-outside-click
     * fired before the `vaadin-overlay` will be closed on outside click. If canceled the closing of the overlay is canceled as well.
     */_outsideClickListener(event){if(-1!==event.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1;this._mouseUpInside=!1;return}if(!this._last){return}const evt=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event)}}/**
     * @event vaadin-overlay-escape-press
     * fired before the `vaadin-overlay` will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
     */_keydownListener(event){if(!this._last){return}// TAB
if("Tab"===event.key&&this.focusTrap){// if only tab key is pressed, cycle forward, else cycle backwards.
this._cycleTab(event.shiftKey?-1:1);event.preventDefault();// ESC
}else if("Escape"===event.key||"Esc"===event.key){const evt=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:event}});this.dispatchEvent(evt);if(this.opened&&!evt.defaultPrevented){this.close(event)}}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}/**
     * @event vaadin-overlay-open
     * fired after the `vaadin-overlay` is opened.
     */_openedChanged(opened,wasOpened){if(!this._instance){this._ensureTemplatized()}if(opened){// Store focused node.
this.__restoreFocusNode=this._getActiveElement();this._animatedOpening();afterNextRender(this,()=>{if(this.focusTrap&&!this.contains(document._activeElement||document.activeElement)){this._cycleTab(0,0)}const evt=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(evt)});if(!this.modeless){this._addGlobalListeners()}}else if(wasOpened){this._animatedClosing();if(!this.modeless){this._removeGlobalListeners()}}}_hiddenChanged(hidden){if(hidden&&this.hasAttribute("closing")){this._flushAnimation("closing")}}_shouldAnimate(){const name=getComputedStyle(this).getPropertyValue("animation-name"),hidden="none"===getComputedStyle(this).getPropertyValue("display");return!hidden&&name&&"none"!=name}_enqueueAnimation(type,callback){const handler=`__${type}Handler`,listener=()=>{callback();this.removeEventListener("animationend",listener);delete this[handler]};this[handler]=listener;this.addEventListener("animationend",listener)}_flushAnimation(type){const handler=`__${type}Handler`;if("function"===typeof this[handler]){this[handler]()}}_animatedOpening(){if(this.parentNode===document.body&&this.hasAttribute("closing")){this._flushAnimation("closing")}this._attachOverlay();this.setAttribute("opening","");const finishOpening=()=>{this.removeAttribute("opening");document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener);if(!this.modeless){this._enterModalState()}};if(this._shouldAnimate()){this._enqueueAnimation("opening",finishOpening)}else{finishOpening()}}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder");this.parentNode.insertBefore(this._placeholder,this);document.body.appendChild(this)}_animatedClosing(){if(this.hasAttribute("opening")){this._flushAnimation("opening")}if(this._placeholder){this.setAttribute("closing","");const finishClosing=()=>{this.shadowRoot.querySelector("[part=\"overlay\"]").style.removeProperty("pointer-events");this._exitModalState();document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener);this._detachOverlay();this.removeAttribute("closing");if(this.restoreFocusOnClose&&this.__restoreFocusNode){// If the activeElement is `<body>` or inside the overlay,
// we are allowed to restore the focus. In all the other
// cases focus might have been moved elsewhere by another
// component or by the user interaction (e.g. click on a
// button outside the overlay).
const activeElement=this._getActiveElement();if(activeElement===document.body||this._deepContains(activeElement)){this.__restoreFocusNode.focus()}this.__restoreFocusNode=null}};if(this._shouldAnimate()){this._enqueueAnimation("closing",finishClosing)}else{finishClosing()}}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder);this._placeholder.parentNode.removeChild(this._placeholder)}/**
     * Returns all attached overlays.
     */static get __attachedInstances(){return Array.from(document.body.children).filter(el=>el instanceof OverlayElement)}/**
     * returns true if this is the last one in the opened overlays stack
     */get _last(){return this===OverlayElement.__attachedInstances.pop()}_modelessChanged(modeless){if(!modeless){if(this.opened){this._addGlobalListeners();this._enterModalState()}}else{this._removeGlobalListeners();this._exitModalState()}}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener);document.addEventListener("mouseup",this._boundMouseUpListener);// Firefox leaks click to document on contextmenu even if prevented
// https://bugzilla.mozilla.org/show_bug.cgi?id=990614
document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0);document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){if("none"!==document.body.style.pointerEvents){// Set body pointer-events to 'none' to disable mouse interactions with
// other document nodes.
this._previousDocumentPointerEvents=document.body.style.pointerEvents;document.body.style.pointerEvents="none"}// Disable pointer events in other attached overlays
OverlayElement.__attachedInstances.forEach(el=>{if(el!==this&&!el.hasAttribute("opening")&&!el.hasAttribute("closing")){el.shadowRoot.querySelector("[part=\"overlay\"]").style.pointerEvents="none"}})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener);document.removeEventListener("mouseup",this._boundMouseUpListener);document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0);document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){if(this._previousDocumentPointerEvents!==void 0){// Restore body pointer-events
document.body.style.pointerEvents=this._previousDocumentPointerEvents;delete this._previousDocumentPointerEvents}// Restore pointer events in the previous overlay(s)
const instances=OverlayElement.__attachedInstances;let el;// Use instances.pop() to ensure the reverse order
while(el=instances.pop()){if(el===this){// Skip the current instance
continue}el.shadowRoot.querySelector("[part=\"overlay\"]").style.removeProperty("pointer-events");if(!el.modeless){// Stop after the last modal
break}}}_removeOldContent(){if(!this.content||!this._contentNodes){return}this._observer.disconnect();this._contentNodes.forEach(node=>{if(node.parentNode===this.content){this.content.removeChild(node)}});if(this._originalContentPart){// Restore the original <div part="content">
this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content);this.$.content=this._originalContentPart;this._originalContentPart=void 0}this._observer.connect();this._contentNodes=void 0;this.content=void 0}_stampOverlayTemplate(template,instanceProps){this._removeOldContent();if(!template._Templatizer){template._Templatizer=templatize(template,this,{instanceProps:instanceProps,forwardHostProp:function(prop,value){if(this._instance){this._instance.forwardHostProp(prop,value)}}})}this._instance=new template._Templatizer({});this._contentNodes=Array.from(this._instance.root.childNodes);const templateRoot=template._templateRoot||(template._templateRoot=template.getRootNode()),_isScoped=templateRoot!==document;if(_isScoped){const isShady=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;if(!this.$.content.shadowRoot){this.$.content.attachShadow({mode:"open"})}let scopeCssText=Array.from(templateRoot.querySelectorAll("style")).reduce((result,style)=>result+style.textContent,"");if(isShady){// NOTE(platosha): ShadyCSS removes <style>’s from templates, so
// we have to use these protected APIs to get their contents back
const styleInfo=window.ShadyCSS.ScopingShim._styleInfoForNode(templateRoot.host);if(styleInfo){scopeCssText+=styleInfo._getStyleRules().parsedCssText;scopeCssText+="}"}}// The overlay root’s :host styles should not apply inside the overlay
scopeCssText=scopeCssText.replace(/:host/g,":host-nomatch");if(scopeCssText){if(isShady){// ShadyDOM: replace the <div part="content"> with a generated
// styled custom element
const contentPart=createOverlayContent(scopeCssText);contentPart.id="content";contentPart.setAttribute("part","content");this.$.content.parentNode.replaceChild(contentPart,this.$.content);// NOTE(platosha): carry the style scope of the content part
contentPart.className=this.$.content.className;this._originalContentPart=this.$.content;this.$.content=contentPart}else{// Shadow DOM: append a style to the content shadowRoot
const style=document.createElement("style");style.textContent=scopeCssText;this.$.content.shadowRoot.appendChild(style);this._contentNodes.unshift(style)}}this.$.content.shadowRoot.appendChild(this._instance.root);this.content=this.$.content.shadowRoot}else{this.appendChild(this._instance.root);this.content=this}}_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this.template=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}/**
     * Manually invoke existing renderer.
     */render(){if(this.renderer){this.renderer.call(this.owner,this.content,this.owner,this.model)}}_templateOrRendererChanged(template,renderer,owner,model,instanceProps,opened){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for overlay content")}const ownerOrModelChanged=this._oldOwner!==owner||this._oldModel!==model;this._oldModel=model;this._oldOwner=owner;const templateOrInstancePropsChanged=this._oldInstanceProps!==instanceProps||this._oldTemplate!==template;this._oldInstanceProps=instanceProps;this._oldTemplate=template;const rendererChanged=this._oldRenderer!==renderer;this._oldRenderer=renderer;const openedChanged=this._oldOpened!==opened;this._oldOpened=opened;if(template&&templateOrInstancePropsChanged){this._stampOverlayTemplate(template,instanceProps)}else if(renderer&&(rendererChanged||openedChanged||ownerOrModelChanged)){this.content=this;if(rendererChanged){while(this.content.firstChild){this.content.removeChild(this.content.firstChild)}}if(opened){this.render()}}}_isFocused(element){return element&&element.getRootNode().activeElement===element}_focusedIndex(elements){elements=elements||this._getFocusableElements();return elements.indexOf(elements.filter(this._isFocused).pop())}_cycleTab(increment,index){const focusableElements=this._getFocusableElements();if(index===void 0){index=this._focusedIndex(focusableElements)}index+=increment;// rollover to first item
if(index>=focusableElements.length){index=0;// go to last item
}else if(0>index){index=focusableElements.length-1}focusableElements[index].focus()}_getFocusableElements(){// collect all focusable elements
return FocusablesHelper.getTabbableNodes(this.$.overlay)}_getActiveElement(){let active=document._activeElement||document.activeElement;// document.activeElement can be null
// https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
// In IE 11, it can also be an object when operating in iframes
// or document.documentElement (when overlay closed on outside click).
// In these cases, default it to document.body.
if(!active||active===document.documentElement||!1===active instanceof Element){active=document.body}while(active.shadowRoot&&active.shadowRoot.activeElement){active=active.shadowRoot.activeElement}return active}_deepContains(node){if(this.contains(node)){return!0}let n=node;const doc=node.ownerDocument;// walk from node to `this` or `document`
while(n&&n!==doc&&n!==this){n=n.parentNode||n.host}return n===this}}customElements.define(OverlayElement.is,OverlayElement);var vaadinOverlay={OverlayElement:OverlayElement};class ComboBoxOverlayElement extends OverlayElement{static get is(){return"vaadin-combo-box-overlay"}ready(){super.ready();const loader=document.createElement("div");loader.setAttribute("part","loader");const content=this.shadowRoot.querySelector(["[part~=\"content\"]"]);content.parentNode.insertBefore(loader,content)}}customElements.define(ComboBoxOverlayElement.is,ComboBoxOverlayElement);/**
                                                                           * Element for internal use only.
                                                                           *
                                                                           * @memberof Vaadin
                                                                           * @private
                                                                           */class ComboBoxDropdownElement extends DisableUpgradeMixin(mixinBehaviors(IronResizableBehavior,PolymerElement)){static get template(){return html`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`}static get is(){return"vaadin-combo-box-dropdown"}static get properties(){return{opened:{type:Boolean,observer:"_openedChanged"},template:{type:Object,notify:!0},/**
       * The element to position/align the dropdown by.
       */positionTarget:{type:Object},/**
       * If `true`, overlay is aligned above the `positionTarget`
       */alignedAbove:{type:Boolean,value:!1},/**
       * Used to propagate the `theme` attribute from the host element.
       */theme:String}}constructor(){super();this._boundSetPosition=this._setPosition.bind(this);this._boundOutsideClickListener=this._outsideClickListener.bind(this)}connectedCallback(){super.connectedCallback();this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready();// Preventing the default modal behaviour of the overlay on input clicking
this.$.overlay.addEventListener("vaadin-overlay-outside-click",e=>{e.preventDefault()})}disconnectedCallback(){super.disconnectedCallback();this.removeEventListener("iron-resize",this._boundSetPosition);// Making sure the overlay is closed and removed from DOM after detaching the dropdown.
this.opened=!1}notifyResize(){super.notifyResize();if(this.positionTarget&&this.opened){this._setPosition();// Schedule another position update (to cover virtual keyboard opening for example)
requestAnimationFrame(this._setPosition.bind(this))}}/**
     * Fired after the `vaadin-combo-box-dropdown` opens.
     *
     * @event vaadin-combo-box-dropdown-opened
     */ /**
         * Fired after the `vaadin-combo-box-dropdown` closes.
         *
         * @event vaadin-combo-box-dropdown-closed
         */_openedChanged(opened,oldValue){if(!!opened===!!oldValue){return}if(opened){this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute";this._setPosition();window.addEventListener("scroll",this._boundSetPosition,!0);document.addEventListener("click",this._boundOutsideClickListener,!0);this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))}else{window.removeEventListener("scroll",this._boundSetPosition,!0);document.removeEventListener("click",this._boundOutsideClickListener,!0);this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))}}// We need to listen on 'click' event and capture it and close the overlay before
// propagating the event to the listener in the button. Otherwise, if the clicked button would call
// open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
_outsideClickListener(event){const eventPath=event.composedPath();if(0>eventPath.indexOf(this.positionTarget)&&0>eventPath.indexOf(this.$.overlay)){this.opened=!1}}_isPositionFixed(element){const offsetParent=this._getOffsetParent(element);return"fixed"===window.getComputedStyle(element).position||offsetParent&&this._isPositionFixed(offsetParent)}_getOffsetParent(element){if(element.assignedSlot){return element.assignedSlot.parentElement}else if(element.parentElement){return element.offsetParent}const parent=element.parentNode;if(parent&&11===parent.nodeType&&parent.host){return parent.host;// parent is #shadowRoot
}}_verticalOffset(overlayRect,targetRect){return this.alignedAbove?-overlayRect.height:targetRect.height}_shouldAlignAbove(targetRect){const spaceBelow=(window.innerHeight-targetRect.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight;return .3>spaceBelow}_setPosition(e){if(this.hidden){return}if(e&&e.target){const target=e.target===document?document.body:e.target,parent=this.$.overlay.parentElement;if(!(target.contains(this.$.overlay)||target.contains(this.positionTarget))||parent!==document.body){return}}const targetRect=this.positionTarget.getBoundingClientRect();this.alignedAbove=this._shouldAlignAbove(targetRect);const overlayRect=this.$.overlay.getBoundingClientRect();this._translateX=targetRect.left-overlayRect.left+(this._translateX||0);this._translateY=targetRect.top-overlayRect.top+(this._translateY||0)+this._verticalOffset(overlayRect,targetRect);const _devicePixelRatio=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*_devicePixelRatio)/_devicePixelRatio;this._translateY=Math.round(this._translateY*_devicePixelRatio)/_devicePixelRatio;this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`;this.$.overlay.style.width=this.positionTarget.clientWidth+"px";this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start";// TODO: fire only when position actually changes changes
this.dispatchEvent(new CustomEvent("position-changed"))}}customElements.define(ComboBoxDropdownElement.is,ComboBoxDropdownElement);const TOUCH_DEVICE=(()=>{try{document.createEvent("TouchEvent");return!0}catch(e){return!1}})();/**
       * Element for internal use only.
       *
       * @memberof Vaadin
       * @private
       */class ComboBoxDropdownWrapperElement extends class extends PolymerElement{}{static get template(){return html`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`}static get is(){return"vaadin-combo-box-dropdown-wrapper"}static get properties(){return{/**
       * True if the device supports touch events.
       */touchDevice:{type:Boolean,value:TOUCH_DEVICE},opened:Boolean,/**
       * The element to position/align the dropdown by.
       */positionTarget:{type:Object},/**
       * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
       */renderer:Function,/**
       * `true` when new items are being loaded.
       */loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},/**
       * Used to propagate the `theme` attribute from the host element.
       */theme:String,_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String}}static get observers(){return["_selectorChanged(_selector)","_loadingChanged(loading)","_openedChanged(opened, _items, loading)"]}_fireTouchAction(sourceEvent){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:sourceEvent}}))}_getItems(opened,items){return opened?items:[]}_openedChanged(opened,items,loading){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!opened){return}else{this._initDropdown()}}// Do not attach if no items
// Do not dettach if opened but user types an invalid search
this.$.dropdown.opened=!!(opened&&(loading||this.$.dropdown.opened||items&&items.length))}_initDropdown(){this.$.dropdown.removeAttribute("disable-upgrade");this._templateChanged();this._loadingChanged(this.loading);this.$.dropdown.$.overlay.addEventListener("touchend",e=>this._fireTouchAction(e));this.$.dropdown.$.overlay.addEventListener("touchmove",e=>this._fireTouchAction(e));// Prevent blurring the input when clicking inside the overlay.
this.$.dropdown.$.overlay.addEventListener("mousedown",e=>e.preventDefault());// IE11: when scrolling with mouse, the focus goes to the scroller.
// This causes the overlay closing due to defocusing the input field.
// Prevent focusing the scroller by setting `unselectable="on"`.
if(/Trident/.test(navigator.userAgent)){this._scroller.setAttribute("unselectable","on")}}_templateChanged(e){if(this.$.dropdown.hasAttribute("disable-upgrade")){return}this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector");this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller")}_loadingChanged(loading){if(this.$.dropdown.hasAttribute("disable-upgrade")){return}if(loading){this.$.dropdown.$.overlay.setAttribute("loading","")}else{this.$.dropdown.$.overlay.removeAttribute("loading")}}_selectorChanged(selector){this._patchWheelOverScrolling()}_setOverlayHeight(){if(!this.opened||!this.positionTarget||!this._selector){return}const targetRect=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=(window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-max-height"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height"))||"65vh";const maxHeight=this._maxOverlayHeight(targetRect);// overlay max height is restrained by the #scroller max height which is set to 65vh in CSS.
this.$.dropdown.$.overlay.style.maxHeight=maxHeight;// we need to set height for iron-list to make its `firstVisibleIndex` work correctly.
this._selector.style.maxHeight=maxHeight;this.updateViewportBoundaries()}_maxOverlayHeight(targetRect){const margin=8,minHeight=116,bottom=Math.min(window.innerHeight,document.body.scrollHeight-document.body.scrollTop);if(this.$.dropdown.alignedAbove){return Math.max(targetRect.top-margin+Math.min(document.body.scrollTop,0),minHeight)+"px"}else{return Math.max(bottom-targetRect.bottom-margin,minHeight)+"px"}}_getFocusedItem(focusedIndex){if(0<=focusedIndex){return this._items[focusedIndex]}}_isItemSelected(item,selectedItem,itemIdPath){if(item instanceof ComboBoxPlaceholder){return!1}else if(itemIdPath&&item!==void 0&&selectedItem!==void 0){return this.get(itemIdPath,item)===this.get(itemIdPath,selectedItem)}else{return item===selectedItem}}_onItemClick(e){if(e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.stopPropagation){this._stopPropagation(e.detail.sourceEvent)}this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.model.item}}))}/**
     * Gets the index of the item with the provided label.
     * @return {Number}
     */indexOfLabel(label){if(this._items&&label){for(let i=0;i<this._items.length;i++){if(this.getItemLabel(this._items[i]).toString().toLowerCase()===label.toString().toLowerCase()){return i}}}return-1}/**
     * If dataProvider is used, dispatch a request for the item’s index if
     * the item is a placeholder object.
     *
     * @return {Number}
     */__requestItemByIndex(item,index){if(item instanceof ComboBoxPlaceholder&&index!==void 0){this.dispatchEvent(new CustomEvent("index-requested",{detail:{index}}))}return index}/**
     * Gets the label string for the item based on the `_itemLabelPath`.
     * @return {String}
     */getItemLabel(item,itemLabelPath){itemLabelPath=itemLabelPath||this._itemLabelPath;let label=item&&itemLabelPath?this.get(itemLabelPath,item):void 0;if(label===void 0||null===label){label=item?item.toString():""}return label}_isItemFocused(focusedIndex,itemIndex){return focusedIndex==itemIndex}_getAriaSelected(focusedIndex,itemIndex){return this._isItemFocused(focusedIndex,itemIndex).toString()}_getAriaRole(itemIndex){return itemIndex!==void 0?"option":!1}_focusedIndexChanged(index){if(0<=index){this._scrollIntoView(index)}}_scrollIntoView(index){if(!(this.opened&&0<=index)){return}const visibleItemsCount=this._visibleItemsCount();if(visibleItemsCount===void 0){// Scroller is not visible. Moving is unnecessary.
return}let targetIndex=index;if(index>this._selector.lastVisibleIndex-1){// Index is below the bottom, scrolling down. Make the item appear at the bottom.
// First scroll to target (will be at the top of the scroller) to make sure it's rendered.
this._selector.scrollToIndex(index);// Then calculate the index for the following scroll (to get the target to bottom of the scroller).
targetIndex=index-visibleItemsCount+1}else if(index>this._selector.firstVisibleIndex){// The item is already visible, scrolling is unnecessary per se. But we need to trigger iron-list to set
// the correct scrollTop on the scrollTarget. Scrolling to firstVisibleIndex.
targetIndex=this._selector.firstVisibleIndex}this._selector.scrollToIndex(Math.max(0,targetIndex));// Sometimes the item is partly below the bottom edge, detect and adjust.
const pidx=this._selector._getPhysicalIndex(index),physicalItem=this._selector._physicalItems[pidx];if(!physicalItem){return}const physicalItemRect=physicalItem.getBoundingClientRect(),scrollerRect=this._scroller.getBoundingClientRect(),scrollTopAdjust=physicalItemRect.bottom-scrollerRect.bottom+this._viewportTotalPaddingBottom;if(0<scrollTopAdjust){this._scroller.scrollTop+=scrollTopAdjust}}ensureItemsRendered(){this._selector._render()}adjustScrollPosition(){if(this.opened&&this._items){this._scrollIntoView(this._focusedIndex)}}/**
     * We want to prevent the kinetic scrolling energy from being transferred from the overlay contents over to the parent.
     * Further improvement ideas: after the contents have been scrolled to the top or bottom and scrolling has stopped, it could allow
     * scrolling the parent similarly to touch scrolling.
     */_patchWheelOverScrolling(){const selector=this._selector;selector.addEventListener("wheel",e=>{const scroller=selector._scroller||selector.scrollTarget,scrolledToTop=0===scroller.scrollTop,scrolledToBottom=1>=scroller.scrollHeight-scroller.scrollTop-scroller.clientHeight;if(scrolledToTop&&0>e.deltaY){e.preventDefault()}else if(scrolledToBottom&&0<e.deltaY){e.preventDefault()}})}updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0;this._selector.updateViewportBoundaries()}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const itemsStyle=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[itemsStyle.paddingBottom,itemsStyle.borderBottomWidth].map(v=>{return parseInt(v,10)}).reduce((sum,v)=>{return sum+v})}return this._cachedViewportTotalPaddingBottom}_visibleItemsCount(){if(!this._selector){return}// Ensure items are rendered
this._selector.flushDebouncer("_debounceTemplate");// Ensure items are positioned
this._selector.scrollToIndex(this._selector.firstVisibleIndex);// Ensure viewport boundaries are up-to-date
this.updateViewportBoundaries();return this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}_selectItem(item){item="number"===typeof item?this._items[item]:item;if(this._selector.selectedItem!==item){this._selector.selectItem(item)}}_preventDefault(e){if(e.cancelable){e.preventDefault()}}_stopPropagation(e){e.stopPropagation()}_hidden(itemsChange){return!this.loading&&(!this._items||!this._items.length)}}customElements.define(ComboBoxDropdownWrapperElement.is,ComboBoxDropdownWrapperElement);const ComboBoxMixin=subclass=>class VaadinComboBoxMixinElement extends subclass{static get properties(){return{/**
       * True if the dropdown is open, false otherwise.
       */opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},/**
       * Set to true to disable this element.
       */disabled:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * When present, it specifies that the element field is read-only.
       */readonly:{type:Boolean,value:!1,reflectToAttribute:!0},/**
       * Custom function for rendering the content of every item.
       * Receives three arguments:
       *
       * - `root` The `<vaadin-combo-box-item>` internal container DOM element.
       * - `comboBox` The reference to the `<vaadin-combo-box>` element.
       * - `model` The object with the properties related with the rendered
       *   item, contains:
       *   - `model.index` The index of the rendered item.
       *   - `model.item` The item.
       */renderer:Function,/**
       * A full set of items to filter the visible options from.
       * The items can be of either `String` or `Object` type.
       */items:{type:Array,observer:"_itemsChanged"},/**
       * If `true`, the user can input a value that is not present in the items list.
       * `value` property will be set to the input value in this case.
       * Also, when `value` is set programmatically, the input value will be set
       * to reflect that value.
       */allowCustomValue:{type:Boolean,value:!1},/**
       * A subset of items, filtered based on the user input. Filtered items
       * can be assigned directly to omit the internal filtering functionality.
       * The items can be of either `String` or `Object` type.
       */filteredItems:{type:Array},/**
       * The `String` value for the selected item of the combo box. Provides
       * the value for `iron-form`.
       *
       * When there’s no item selected, the value is an empty string.
       *
       * Use `selectedItem` property to get the raw selected item from
       * the `items` array.
       */value:{type:String,observer:"_valueChanged",notify:!0,value:""},/**
       * Used to detect user value changes and fire `change` events.
       */_lastCommittedValue:String,/*
       * When set to `true`, "loading" attribute is added to host and the overlay element.
       */loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},/**
       * Filtering string the user has typed into the input field.
       */filter:{type:String,value:"",notify:!0},/**
       * The selected item from the `items` array.
       */selectedItem:{type:Object,notify:!0},/**
       * Path for label of the item. If `items` is an array of objects, the
       * `itemLabelPath` is used to fetch the displayed string label for each
       * item.
       *
       * The item label is also used for matching items when processing user
       * input, i.e., for filtering and selecting items.
       *
       * When using item templates, the property is still needed because it is used
       * for filtering, and for displaying the selected item value in the input box.
       */itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},/**
       * Path for the value of the item. If `items` is an array of objects, the
       * `itemValuePath:` is used to fetch the string value for the selected
       * item.
       *
       * The item value is used in the `value` property of the combo box,
       * to provide the form value.
       */itemValuePath:{type:String,value:"value"},/**
       * Path for the id of the item. If `items` is an array of objects,
       * the `itemIdPath` is used to compare and identify the same item
       * in `selectedItem` and `filteredItems` (items given by the
       * `dataProvider` callback).
       */itemIdPath:String,/**
       * The name of this element.
       */name:{type:String},/**
       * Set to true if the value is invalid.
       */invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String,_itemTemplate:Object}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_templateOrRendererChanged(_itemTemplate, renderer)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}ready(){super.ready();this.addEventListener("focusout",e=>{// Fixes the problem with `focusout` happening when clicking on the scroll bar on Edge
const dropdown=this.$.overlay.$.dropdown;if(dropdown&&dropdown.$&&e.relatedTarget===dropdown.$.overlay){e.composedPath()[0].focus();return}if(!this._closeOnBlurIsPrevented){this.close()}});this._lastCommittedValue=this.value;IronA11yAnnouncer.requestAvailability();// 2.0 does not support 'overlay.selection-changed' syntax in listeners
this.$.overlay.addEventListener("selection-changed",this._overlaySelectedItemChanged.bind(this));this.addEventListener("vaadin-combo-box-dropdown-closed",this.close.bind(this));this.addEventListener("vaadin-combo-box-dropdown-opened",this._onOpened.bind(this));this.addEventListener("keydown",this._onKeyDown.bind(this));this.addEventListener("click",this._onClick.bind(this));this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._onOverlayTouchAction.bind(this));this.addEventListener("touchend",e=>{if(!this._clearElement||e.composedPath()[0]!==this._clearElement){return}e.preventDefault();this._clear()});this._observer=new FlattenedNodesObserver(this,info=>{this._setTemplateFromNodes(info.addedNodes)})}/**
     * Manually invoke existing renderer.
     */render(){if(this.$.overlay._selector){this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach(item=>item._render())}}_setTemplateFromNodes(nodes){this._itemTemplate=nodes.filter(node=>node.localName&&"template"===node.localName)[0]||this._itemTemplate}_removeNewRendererOrTemplate(template,oldTemplate,renderer,oldRenderer){if(template!==oldTemplate){this._itemTemplate=void 0}else if(renderer!==oldRenderer){this.renderer=void 0}}_templateOrRendererChanged(template,renderer){if(template&&renderer){this._removeNewRendererOrTemplate(template,this._oldTemplate,renderer,this._oldRenderer);throw new Error("You should only use either a renderer or a template for combo box items")}this._oldTemplate=template;this._oldRenderer=renderer}/**
     * Opens the dropdown list.
     */open(){// Prevent _open() being called when input is disabled or read-only
if(!this.disabled&&!this.readonly){this.opened=!0}}/**
     * Closes the dropdown list.
     */close(){this.opened=!1}_openedChanged(value,old){// Prevent _close() being called when opened is set to its default value (false).
if(old===void 0){return}if(this.opened){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");// For touch devices, we don't want to popup virtual keyboard unless input is explicitly focused by the user.
if(!this.hasAttribute("focused")&&!this.$.overlay.touchDevice){this.focus()}}else{this._onClosed();if(this._openedWithFocusRing&&this.hasAttribute("focused")){this.focusElement.setAttribute("focus-ring","")}}}_onOverlayTouchAction(event){// On touch devices, blur the input on touch start inside the overlay, in order to hide
// the virtual keyboard. But don't close the overlay on this blur.
this._closeOnBlurIsPrevented=!0;this.inputElement.blur();this._closeOnBlurIsPrevented=!1}_onClick(e){this._closeOnBlurIsPrevented=!0;const path=e.composedPath(),isClearElement=-1!==path.indexOf(this._clearElement)||"clear-button"===path[0].getAttribute("part");if(isClearElement){this._clear();this.focus()}else if(-1!==path.indexOf(this.inputElement)){if(-1<path.indexOf(this._toggleElement)&&this.opened){this.close()}else{this.open()}}this._closeOnBlurIsPrevented=!1}/**
     * Keyboard navigation
     */_onKeyDown(e){if(this._isEventKey(e,"down")){this._closeOnBlurIsPrevented=!0;this._onArrowDown();this._closeOnBlurIsPrevented=!1;// prevent caret from moving
e.preventDefault()}else if(this._isEventKey(e,"up")){this._closeOnBlurIsPrevented=!0;this._onArrowUp();this._closeOnBlurIsPrevented=!1;// prevent caret from moving
e.preventDefault()}else if(this._isEventKey(e,"enter")){this._onEnter(e)}else if(this._isEventKey(e,"esc")){this._onEscape(e)}}_isEventKey(e,k){return IronA11yKeysBehavior.keyboardEventMatchesKeys(e,k)}_getItemLabel(item){return this.$.overlay.getItemLabel(item)}_getItemValue(item){let value=item&&this.itemValuePath?this.get(this.itemValuePath,item):void 0;if(value===void 0){value=item?item.toString():""}return value}_onArrowDown(){if(this.opened){if(this.$.overlay._items){this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1);this._prefillFocusedItemLabel()}}else{this.open()}}_onArrowUp(){if(this.opened){if(-1<this._focusedIndex){this._focusedIndex=Math.max(0,this._focusedIndex-1)}else{if(this.$.overlay._items){this._focusedIndex=this.$.overlay._items.length-1}}this._prefillFocusedItemLabel()}else{this.open()}}_prefillFocusedItemLabel(){if(-1<this._focusedIndex){// Reset the input value asyncronously to prevent partial value changes
// announce. Makes OSX VoiceOver to announce the complete value instead.
this._inputElementValue="";// 1ms delay needed for OSX VoiceOver to realise input value was reset
setTimeout(()=>{this._inputElementValue=this._getItemLabel(this.$.overlay._focusedItem);this._markAllSelectionRange()},1)}}_setSelectionRange(start,end){// vaadin-text-field does not implement setSelectionRange, hence we need the native input
const input=this._nativeInput||this.inputElement;// Setting selection range focuses and/or moves the caret in some browsers,
// and there's no need to modify the selection range if the input isn't focused anyway.
// This affects Safari. When the overlay is open, and then hiting tab, browser should focus
// the next focusable element instead of the combo-box itself.
// Checking the focused property here is enough instead of checking the activeElement.
if(this.hasAttribute("focused")&&input&&input.setSelectionRange){try{input.setSelectionRange(start,end)}catch(ignore){// IE11 randomly fails when running tests in Sauce.
}}}_markAllSelectionRange(){if(this._inputElementValue!==void 0){this._setSelectionRange(0,this._inputElementValue.length)}}_clearSelectionRange(){if(this._inputElementValue!==void 0){const pos=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(pos,pos)}}_onEnter(e){// should close on enter when custom values are allowed, input field is cleared, or when an existing
// item is focused with keyboard.
if(this.opened&&(this.allowCustomValue||""===this._inputElementValue||-1<this._focusedIndex)){this.close();// Do not submit the surrounding form.
e.preventDefault();// Do not trigger global listeners
e.stopPropagation()}}_onEscape(e){if(this.opened){this._stopPropagation(e);if(-1<this._focusedIndex){this._focusedIndex=-1;this._revertInputValue()}else{this.cancel()}}}_toggleElementChanged(toggleElement){if(toggleElement){// Don't blur the input on toggle mousedown
toggleElement.addEventListener("mousedown",e=>e.preventDefault());// Unfocus previously focused element if focus is not inside combo box (on touch devices)
toggleElement.addEventListener("click",e=>{if(this.$.overlay.touchDevice&&!this.hasAttribute("focused")){document.activeElement.blur()}})}}/**
     * Clears the current value.
     */_clear(){this.selectedItem=null;if(this.allowCustomValue){this.value=""}this._detectAndDispatchChange()}/**
     * Reverts back to original value.
     */cancel(){this._revertInputValueToValue();// In the next _detectAndDispatchChange() call, the change detection should not pass
this._lastCommittedValue=this.value;this.close()}_onOpened(){// Pre P2 iron-list used a debouncer to render. Now that we synchronously render items,
// we need to flush the DOM to make sure it doesn't get flushed in the middle of _render call
// because that will cause problems to say the least.
flush();// With iron-list v1.3.9, calling `notifyResize()` no longer renders
// the items synchronously. It is required to have the items rendered
// before we update the overlay and the list positions and sizes.
this.$.overlay.ensureItemsRendered();this.$.overlay._selector.toggleScrollListener(!0);// Ensure metrics are up-to-date
this.$.overlay.updateViewportBoundaries();// Force iron-list to create reusable nodes. Otherwise it will only start
// doing that in scroll listener, which is especially slow in Edge.
this.$.overlay._selector._increasePoolIfNeeded();setTimeout(()=>this._resizeDropdown(),1);// Defer scroll position adjustment to prevent freeze in Edge
window.requestAnimationFrame(()=>this.$.overlay.adjustScrollPosition());// _detectAndDispatchChange() should not consider value changes done before opening
this._lastCommittedValue=this.value}_onClosed(){// Happens when the overlay is closed by clicking outside
if(this.opened){this.close()}if(this.$.overlay._items&&-1<this._focusedIndex){const focusedItem=this.$.overlay._items[this._focusedIndex];if(this.selectedItem!==focusedItem){this.selectedItem=focusedItem}// make sure input field is updated in case value doesn't change (i.e. FOO -> foo)
this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||this._inputElementValue===void 0){this.selectedItem=null;if(this.allowCustomValue){this.value=""}}else{if(this.allowCustomValue){const e=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(e);if(!e.defaultPrevented){const customValue=this._inputElementValue;this._selectItemForValue(customValue);this.value=customValue}}else{this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):""}}this._detectAndDispatchChange();this._clearSelectionRange();if(!this.dataProvider){this.filter=""}}get _propertyForValue(){return"value"}/**
     *  Filtering and items handling
     */_inputValueChanged(e){// Handle only input events from our inputElement.
if(-1!==e.composedPath().indexOf(this.inputElement)){this._inputElementValue=this.inputElement[this._propertyForValue];this._filterFromInput(e)}}_filterFromInput(e){if(!this.opened&&!e.__fromClearButton){this.open()}if(this.filter===this._inputElementValue){// Filter and input value might get out of sync, while keyboard navigating for example.
// Afterwards, input value might be changed to the same value as used in filtering.
// In situation like these, we need to make sure all the filter changes handlers are run.
this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath)}else{this.filter=this._inputElementValue}}_itemLabelPathChanged(itemLabelPath,oldItemLabelPath){if("string"!==typeof itemLabelPath){console.error("You should set itemLabelPath to a valid string")}}_filterChanged(filter,itemValuePath,itemLabelPath){if(filter===void 0){return}if(this.items){this.filteredItems=this._filterItems(this.items,filter)}else{// With certain use cases (e. g., external filtering), `items` are
// undefined. Filtering is unnecessary per se, but the filteredItems
// observer should still be invoked to update focused item.
this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},itemValuePath,itemLabelPath)}}_loadingChanged(loading){if(loading){this._focusedIndex=-1}}_revertInputValue(){if(""!==this.filter){this._inputElementValue=this.filter}else{this._revertInputValueToValue()}this._clearSelectionRange()}_revertInputValueToValue(){if(this.allowCustomValue&&!this.selectedItem){this._inputElementValue=this.value}else{this._inputElementValue=this._getItemLabel(this.selectedItem)}}_resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}_updateHasValue(hasValue){if(hasValue){this.setAttribute("has-value","")}else{this.removeAttribute("has-value")}}_selectedItemChanged(selectedItem,itemLabelPath){if(null===selectedItem||selectedItem===void 0){if(this.filteredItems){if(!this.allowCustomValue){this.value=""}this._updateHasValue(""!==this.value);this._inputElementValue=this.value}}else{const value=this._getItemValue(selectedItem);if(this.value!==value){this.value=value;if(this.value!==value){// The value was changed to something else in value-changed listener,
// so prevent from resetting it to the previous value.
return}}this._updateHasValue(!0);this._inputElementValue=this._getItemLabel(selectedItem);// Could not be defined in 1.x because ready is called after all prop-setters
if(this.inputElement){this.inputElement[this._propertyForValue]=this._inputElementValue}}this.$.overlay._selectedItem=selectedItem;if(this.filteredItems&&this.$.overlay._items){this._focusedIndex=this.filteredItems.indexOf(selectedItem)}}_valueChanged(value,oldVal){if(""===value&&oldVal===void 0){// initializing, no need to do anything (#554)
return}if(this._isValidValue(value)){let item;if(this._getItemValue(this.selectedItem)!==value){this._selectItemForValue(value)}else{item=this.selectedItem}if(!item&&this.allowCustomValue){this._inputElementValue=value}this._updateHasValue(""!==this.value)}else{this.selectedItem=null}// In the next _detectAndDispatchChange() call, the change detection should pass
this._lastCommittedValue=void 0}_detectAndDispatchChange(){if(this.value!==this._lastCommittedValue){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}));this._lastCommittedValue=this.value}}_itemsChanged(items,oldItems){this._ensureItemsOrDataProvider(()=>{this.items=oldItems})}_itemsOrPathsChanged(e,itemValuePath,itemLabelPath){if(e.value===void 0){return}if("items"===e.path||"items.splices"===e.path){this.filteredItems=this.items?this.items.slice(0):this.items;const valueIndex=this._indexOfValue(this.value,this.items);this._focusedIndex=valueIndex;const item=-1<valueIndex&&this.items[valueIndex];if(item){this.selectedItem=item}}}_filteredItemsChanged(e,itemValuePath,itemLabelPath){if(e.value===void 0){return}if("filteredItems"===e.path||"filteredItems.splices"===e.path){this._setOverlayItems(this.filteredItems);this._focusedIndex=this.opened?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems);if(this.opened){this._repositionOverlay()}}}_filterItems(arr,filter){if(!arr){return arr}return arr.filter(item=>{filter=filter?filter.toString().toLowerCase():"";// Check if item contains input value.
return-1<this._getItemLabel(item).toString().toLowerCase().indexOf(filter)})}_selectItemForValue(value){const valueIndex=this._indexOfValue(value,this.filteredItems),previouslySelectedItem=this.selectedItem;this.selectedItem=0<=valueIndex?this.filteredItems[valueIndex]:this.dataProvider&&this.selectedItem===void 0?void 0:null;if(null===this.selectedItem&&null===previouslySelectedItem){this._selectedItemChanged(this.selectedItem)}}_setOverlayItems(items){this.$.overlay.set("_items",items)}_repositionOverlay(){// async needed to reposition correctly after filtering
// (especially when aligned on top of input)
this.__repositionOverlayDebouncer=Debouncer.debounce(this.__repositionOverlayDebouncer,// Long debounce: sizing updates invoke multiple styling rounds,
// which is very slow in Edge
timeOut.after(500),()=>{const selector=this.$.overlay._selector;if(!selector._isClientFull()){// Due to the mismatch of the Y position of the item rendered
// at the top of the scrolling list with some specific scroll
// position values (2324, 3486, 6972, 60972, 95757 etc.)
// iron-list loops the increasing of the pool and adds
// too many items to the DOM.
// Adjusting scroll position to equal the current scrollTop value
// to avoid looping.
selector._resetScrollPosition(selector._physicalTop)}this._resizeDropdown();this.$.overlay.updateViewportBoundaries();this.$.overlay.ensureItemsRendered();selector.notifyResize();flush()})}_indexOfValue(value,items){if(items&&this._isValidValue(value)){for(let i=0;i<items.length;i++){if(this._getItemValue(items[i])===value){return i}}}return-1}/**
     * Checks if the value is supported as an item value in this control.
     *
     * @return {boolean}
     */_isValidValue(value){return value!==void 0&&null!==value}_overlaySelectedItemChanged(e){// stop this private event from leaking outside.
e.stopPropagation();if(e.detail.item instanceof ComboBoxPlaceholder){// Placeholder items should not be selectable.
return}if(this.opened){this._focusedIndex=this.filteredItems.indexOf(e.detail.item);this.close()}else if(this.selectedItem!==e.detail.item){this.selectedItem=e.detail.item;this._detectAndDispatchChange()}}/**
     * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
     *
     * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
     */validate(){return!(this.invalid=!this.checkValidity())}/**
     * Returns true if the current input value satisfies all constraints (if any)
     *
     * You can override the `checkValidity` method for custom validations.
     */checkValidity(){if(this.inputElement.validate){return this.inputElement.validate()}}get _instanceProps(){return{item:!0,index:!0,selected:!0,focused:!0}}_ensureTemplatized(){if(!this._TemplateClass){const tpl=this._itemTemplate||this._getRootTemplate();if(tpl){this._TemplateClass=templatize(tpl,this,{instanceProps:this._instanceProps,forwardHostProp:function(prop,value){const items=this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item");Array.prototype.forEach.call(items,item=>{if(item._itemTemplateInstance){item._itemTemplateInstance.set(prop,value);item._itemTemplateInstance.notifyPath(prop,value,!0)}})}})}}}_getRootTemplate(){return Array.prototype.filter.call(this.children,elem=>"TEMPLATE"===elem.tagName)[0]}_preventInputBlur(){if(this._toggleElement){this._toggleElement.addEventListener("click",this._preventDefault)}if(this._clearElement){this._clearElement.addEventListener("click",this._preventDefault)}}_restoreInputBlur(){if(this._toggleElement){this._toggleElement.removeEventListener("click",this._preventDefault)}if(this._clearElement){this._clearElement.removeEventListener("click",this._preventDefault)}}_preventDefault(e){e.preventDefault()}_stopPropagation(e){e.stopPropagation()}/**
     * Fired when the value changes.
     *
     * @event value-changed
     * @param {Object} detail
     *  @param {String} detail.value the combobox value
     */ /**
         * Fired when selected item changes.
         *
         * @event selected-item-changed
         * @param {Object} detail
         *  @param {Object|String} detail.value the selected item. Type is the same as the type of `items`.
         */ /**
             * Fired when the user sets a custom value.
             * @event custom-value-set
             * @param {String} detail the custom value
             */ /**
                 * Fired when value changes.
                 * To comply with https://developer.mozilla.org/en-US/docs/Web/Events/change
                 * @event change
                 */};var vaadinComboBoxMixin={ComboBoxMixin:ComboBoxMixin};class ComboBoxElement extends ElementMixin$1(ControlStateMixin(ThemePropertyMixin(ThemableMixin(ComboBoxDataProviderMixin(ComboBoxMixin(PolymerElement)))))){static get template(){return html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>

    <vaadin-text-field part="text-field" id="input" pattern="[[pattern]]" prevent-invalid-input="[[preventInvalidInput]]" value="{{_inputElementValue}}" autocomplete="off" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" autocapitalize="none" autofocus="[[autofocus]]" on-change="_stopPropagation" on-input="_inputValueChanged" clear-button-visible="[[clearButtonVisible]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>

      <div part="toggle-button" id="toggleButton" slot="suffix" role="button" aria-label="Toggle"></div>

    </vaadin-text-field>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" renderer="[[renderer]]" position-target="[[_getPositionTarget()]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}constructor(){super();/**
              * @property
              */this.theme}static get is(){return"vaadin-combo-box"}static get version(){return"5.0.6"}static get properties(){return{/**
       * The label for this element.
       */label:{type:String,reflectToAttribute:!0},/**
       * Set to true to mark the input as required.
       */required:{type:Boolean,value:!1},/**
       * Set to true to disable this input.
       */disabled:{type:Boolean,value:!1},/**
       * Set to true to prevent the user from entering invalid input.
       */preventInvalidInput:{type:Boolean},/**
       * A pattern to validate the `input` with.
       */pattern:{type:String},/**
       * The error message to display when the input is invalid.
       */errorMessage:{type:String},autofocus:{type:Boolean},/**
       * A placeholder string in addition to the label.
       */placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},/**
       * Set to true to display the clear icon which clears the input.
       */clearButtonVisible:{type:Boolean,value:!1}}}static get observers(){return["_updateAriaExpanded(opened)"]}attributeChanged(name,type){// Safari has an issue with repainting shadow root element styles when a host attribute changes.
// Need this workaround (toggle any inline css property on and off) until the issue gets fixed.
const isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if(isSafari&&this.root){Array.prototype.forEach.call(this.root.querySelectorAll("*"),el=>{el.style["-webkit-backface-visibility"]="visible";el.style["-webkit-backface-visibility"]=""})}}ready(){super.ready();this._nativeInput=this.inputElement.focusElement;this._toggleElement=this.$.toggleButton;this._clearElement=this.inputElement.shadowRoot.querySelector("[part=\"clear-button\"]");// Stop propagation of Esc in capturing phase so that
// vaadin-text-field will not handle Esc as a shortcut
// to clear the value.
// We need to set this listener for "this.inputElement"
// instead of just "this", otherwise keyboard navigation behaviour
// breaks a bit on Safari and some related tests fail.
this.inputElement.addEventListener("keydown",e=>{if(this._isEventKey(e,"esc")){this._stopPropagation(e);// Trigger _onEscape method of vaadin-combo-box-mixin because
// bubbling phase is not reached.
this._onEscape(e)}},!0);this._nativeInput.setAttribute("role","combobox");this._nativeInput.setAttribute("aria-autocomplete","list");this._updateAriaExpanded()}connectedCallback(){super.connectedCallback();this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback();this._restoreInputBlur()}_getPositionTarget(){return this.$.input}_updateAriaExpanded(){if(this._nativeInput){this._nativeInput.setAttribute("aria-expanded",this.opened);this._toggleElement.setAttribute("aria-expanded",this.opened)}}get inputElement(){return this.$.input}/**
     * Focusable element used by vaadin-control-state-mixin
     */get focusElement(){// inputElement might not be defined on property changes before ready.
return this.inputElement||this}}customElements.define(ComboBoxElement.is,ComboBoxElement);var vaadinComboBox={ComboBoxElement:ComboBoxElement};const $_documentContainer=document.createElement("template");$_documentContainer.innerHTML=`<dom-module id="lumo-overlay">
  <template>
    <style>
      :host {
        top: var(--lumo-space-m);
        right: var(--lumo-space-m);
        bottom: var(--lumo-space-m);
        left: var(--lumo-space-m);
        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
        outline: 0px solid transparent;
      }

      [part="overlay"] {
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        border-radius: var(--lumo-border-radius);
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
        color: var(--lumo-body-text-color);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-m);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      [part="content"] {
        padding: var(--lumo-space-xs);
      }

      [part="backdrop"] {
        background-color: var(--lumo-shade-20pct);
        animation: 0.2s lumo-overlay-backdrop-enter both;
        will-change: opacity;
      }

      @keyframes lumo-overlay-backdrop-enter {
        0% {
          opacity: 0;
        }
      }

      :host([closing]) [part="backdrop"] {
        animation: 0.2s lumo-overlay-backdrop-exit both;
      }

      @keyframes lumo-overlay-backdrop-exit {
        100% {
          opacity: 0;
        }
      }

      @keyframes lumo-overlay-dummy-animation {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 1;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer.content);const $_documentContainer$1=html`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$1.content);const $_documentContainer$2=document.createElement("template");$_documentContainer$2.innerHTML=`<dom-module id="lumo-menu-overlay-core">
  <template>
    <style>
      :host([opening]),
      :host([closing]) {
        animation: 0.14s lumo-overlay-dummy-animation;
      }

      [part="overlay"] {
        will-change: opacity, transform;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.1s lumo-menu-overlay-enter ease-out both;
      }

      @keyframes lumo-menu-overlay-enter {
        0% {
          opacity: 0;
          transform: translateY(-4px);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s lumo-menu-overlay-exit both;
      }

      @keyframes lumo-menu-overlay-exit {
        100% {
          opacity: 0;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-menu-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      /* Small viewport (bottom sheet) styles */
      /* Use direct media queries instead of the state attributes (\`[phone]\` and \`[fullscreen]\`) provided by the elements */
      @media (max-width: 420px), (max-height: 420px) {
        :host {
          top: 0 !important;
          right: 0 !important;
          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
          left: 0 !important;
          align-items: stretch !important;
          justify-content: flex-end !important;
        }

        [part="overlay"] {
          max-height: 50vh;
          width: 100vw;
          border-radius: 0;
          box-shadow: var(--lumo-box-shadow-xl);
        }

        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
        [part="content"] {
          padding: 30px var(--lumo-space-m);
          max-height: inherit;
          box-sizing: border-box;
          -webkit-overflow-scrolling: touch;
          overflow: auto;
          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
        }

        [part="backdrop"] {
          display: block;
        }

        /* Animations */

        :host([opening]) [part="overlay"] {
          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;
        }

        :host([closing]),
        :host([closing]) [part="backdrop"] {
          animation-delay: 0.14s;
        }

        :host([closing]) [part="overlay"] {
          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.550, .055, .675, .19) both;
        }
      }

      @keyframes lumo-mobile-menu-overlay-enter {
        0% {
          transform: translateY(150%);
        }
      }

      @keyframes lumo-mobile-menu-overlay-exit {
        100% {
          transform: translateY(150%);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$2.content);/* Split as a separate module because combo box can only use the "fullscreen" styles */ /*
                                                                                                                                                  FIXME(polymer-modulizer): the above comments were extracted
                                                                                                                                                  from HTML and may be out of place here. Review them and
                                                                                                                                                  then delete this comment!
                                                                                                                                                  */;const $_documentContainer$3=html`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$3.content);const $_documentContainer$4=html`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$4.content);/**
                                                          @license
                                                          Copyright (c) 2017 Vaadin Ltd.
                                                          This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
                                                          */ /**
                                                              * A mixin providing `focused`, `focus-ring`, `active`, `disabled` and `selected`.
                                                              *
                                                              * `focused`, `active` and `focus-ring` are set as only as attributes.
                                                              * @polymerMixin
                                                              */const ItemMixin=superClass=>class VaadinItemMixin extends superClass{static get properties(){return{/**
       * Used for mixin detection because `instanceof` does not work with mixins.
       * e.g. in VaadinListMixin it filters items by using the
       * `element._hasVaadinItemMixin` condition.
       */_hasVaadinItemMixin:{value:!0},/**
       * If true, the user cannot interact with this element.
       */disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},/**
       * If true, the item is in selected state.
       */selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(value){this._value=value}ready(){super.ready();const attrValue=this.getAttribute("value");if(null!==attrValue){this.value=attrValue}this.addEventListener("focus",e=>this._setFocused(!0),!0);this.addEventListener("blur",e=>this._setFocused(!1),!0);this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);const mouseUpListener=()=>{this._setActive(this._mousedown=!1);document.removeEventListener("mouseup",mouseUpListener)};document.addEventListener("mouseup",mouseUpListener)});this.addEventListener("keydown",e=>this._onKeydown(e));this.addEventListener("keyup",e=>this._onKeyup(e))}/**
     * @protected
     */disconnectedCallback(){super.disconnectedCallback();// in Firefox and Safari, blur does not fire on the element when it is removed,
// especially between keydown and keyup events, being active at the same time.
// reproducible in `<vaadin-select>` when closing overlay on select.
if(this.hasAttribute("active")){this._setFocused(!1)}}_selectedChanged(selected){this.setAttribute("aria-selected",selected)}_disabledChanged(disabled){if(disabled){this.selected=!1;this.setAttribute("aria-disabled","true");this.blur()}else{this.removeAttribute("aria-disabled")}}_setFocused(focused){if(focused){this.setAttribute("focused","");if(!this._mousedown){this.setAttribute("focus-ring","")}}else{this.removeAttribute("focused");this.removeAttribute("focus-ring");this._setActive(!1)}}_setActive(active){if(active){this.setAttribute("active","")}else{this.removeAttribute("active")}}_onKeydown(event){if(/^( |SpaceBar|Enter)$/.test(event.key)&&!event.defaultPrevented){event.preventDefault();this._setActive(!0)}}_onKeyup(event){if(this.hasAttribute("active")){this._setActive(!1);this.click()}}};var vaadinItemMixin={ItemMixin:ItemMixin};class ItemElement extends ItemMixin(ThemableMixin(PolymerElement)){static get template(){return html`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.1.1"}constructor(){super();/**
              * Submittable string value. The default value is the trimmed text content of the element.
              * @type {string}
              */this.value}}customElements.define(ItemElement.is,ItemElement);var vaadinItem={ItemElement:ItemElement};const $_documentContainer$5=html`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$5.content);const $_documentContainer$6=html`<dom-module id="lumo-combo-box" theme-for="vaadin-combo-box">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild($_documentContainer$6.content);class MyViewMap extends connect(store)(PageViewElement){render(){if(this._places==void 0){return html$1``}var center=this._getMapCenter();return html$1`
      <style>
      #searchbox {
        position: absolute;
        float: left;
        top: 72px;
        z-index: 1;
      }
      :host {
        --lumo-contrast-10pct: #ffffff;
      }
      :host [part="value"] {
        color: red;
        font-weight: normal !important;
      }
      #tiramisu {
        margin-top: -48px;
      }
      @media (min-width: 768px) {
        #tiramisu {
          margin-top: 0;
        }
        #searchbox {
          top: 20px;
        }
      }
      </style>
      <div id="tiramisu">
      </div>
      <div id="searchbox" style="
      left: ${this._drawer?"276px":"20px"};
      ">
        <vaadin-combo-box id="mapsearch" class="mapsearch"
        placeholder="${translate$1("Filter")}" item-label-path="name"
        @value-changed="${this._valueChange}"
        >
        </vaadin-combo-box>
      </div>
      <gr-leaflet-map
        height="100vh"
        width="100%"
        latitude="${center[0]}"
        longitude="${center[1]}"
        zoom="6"
        mapid="map-mapview"
      >
      ${this._selected?html$1`
        <gr-leaflet-map-marker
          latitude="${this._places[this._selected].geolocation[0]}"
          longitude="${this._places[this._selected].geolocation[1]}"
          popup="<a href='place/${this._places[this._selected].gramps_id}'>${this._places[this._selected].name}</a>"
        >
        </gr-leaflet-map-marker>
        `:this.sortValues(this._places).map(function(p){if(p.geolocation&&p.geolocation[0]){return html$1`
            <gr-leaflet-map-marker
              latitude="${p.geolocation[0]}"
              longitude="${p.geolocation[1]}"
              popup="<a href='place/${p.gramps_id}'>${p.name}</a>"
            >
            </gr-leaflet-map-marker>
            `}})}
      </gr-leaflet-map>
    `}static get styles(){return[SharedStyles]}constructor(){super();this._selected=""}static get properties(){return{_places:{type:Object},_drawer:{type:Boolean},_selected:{type:String// _hidden: { type: Boolean }
}}}_menuButtonClicked(){store.dispatch(updateDrawerState(!0))}_valueChange(e){let combobox=this.shadowRoot.querySelector("#mapsearch");if(!combobox.selectedItem){this._selected=""}else{this._selected=combobox.selectedItem.gramps_id}}sortValues(places){return Object.values(places).sort((a,b)=>a.name>b.name?1:-1).filter(p=>p.geolocation[0])}_getMapCenter(){if(!this._places){return[0,0]}else if(this._selected){return this._places[this._selected].geolocation}else{return this._getCenterOfGravity(Object.values(this._places))}}_getCenterOfGravity(places){if(!places){return[0,0]}for(var x=0,y=0,n=0,i=0;i<places.length;i++){let p=places[i];if(!p.geolocation[0]){continue}else{x+=parseFloat(p.geolocation[0]);y+=parseFloat(p.geolocation[1]);n++}}x=x/n;y=y/n;return[x,y]}stateChanged(state){this._places=state.api.places;this._drawer=state.app.drawerOpened}firstUpdated(){let combobox=this.shadowRoot.querySelector("#mapsearch");combobox.items=this.sortValues(this._places);combobox.itemValuePath="name"}}window.customElements.define("gr-view-map",MyViewMap);export{disableUpgradeMixin as $disableUpgradeMixin,vaadinComboBox as $vaadinComboBox,vaadinComboBoxDataProviderMixin as $vaadinComboBoxDataProviderMixin,vaadinComboBoxMixin as $vaadinComboBoxMixin,vaadinComboBoxPlaceholder as $vaadinComboBoxPlaceholder,vaadinFocusablesHelper as $vaadinFocusablesHelper,vaadinItem as $vaadinItem,vaadinItemMixin as $vaadinItemMixin,vaadinOverlay as $vaadinOverlay,ComboBoxDataProviderMixin,ComboBoxElement,ComboBoxMixin,ComboBoxPlaceholder,DisableUpgradeMixin,FocusablesHelper,ItemElement,ItemMixin,OverlayElement};