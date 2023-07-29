import{_ as e,c as t,o as a,N as r}from"./chunks/framework.2075e729.js";const p=JSON.parse('{"title":"Class: Ticker","description":"","frontmatter":{},"headers":[],"relativePath":"dist/classes/Ticker.md"}'),d={name:"dist/classes/Ticker.md"},o=r('<h1 id="class-ticker" tabindex="-1">Class: Ticker <a class="header-anchor" href="#class-ticker" aria-label="Permalink to &quot;Class: Ticker&quot;">​</a></h1><p>刷新器</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><code>EventEmitter</code></p><p>↳ <strong><code>Ticker</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./Ticker.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./Ticker.html#_steptime">_stepTime</a></li><li><a href="./Ticker.html#animationframe">animationFrame</a></li><li><a href="./Ticker.html#deltatime">deltaTime</a></li><li><a href="./Ticker.html#filltime">fillTime</a></li><li><a href="./Ticker.html#lastframetime">lastFrameTime</a></li><li><a href="./Ticker.html#lasttime">lastTime</a></li><li><a href="./Ticker.html#paused">paused</a></li><li><a href="./Ticker.html#prefixed">prefixed</a></li></ul><h3 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-label="Permalink to &quot;Accessors&quot;">​</a></h3><ul><li><a href="./Ticker.html#fps">FPS</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./Ticker.html#addlistener">addListener</a></li><li><a href="./Ticker.html#destroy">destroy</a></li><li><a href="./Ticker.html#emit">emit</a></li><li><a href="./Ticker.html#eventnames">eventNames</a></li><li><a href="./Ticker.html#listenercount">listenerCount</a></li><li><a href="./Ticker.html#listeners">listeners</a></li><li><a href="./Ticker.html#off">off</a></li><li><a href="./Ticker.html#on">on</a></li><li><a href="./Ticker.html#once">once</a></li><li><a href="./Ticker.html#removealllisteners">removeAllListeners</a></li><li><a href="./Ticker.html#removelistener">removeListener</a></li><li><a href="./Ticker.html#start">start</a></li><li><a href="./Ticker.html#stop">stop</a></li><li><a href="./Ticker.html#update">update</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new Ticker</strong>()</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.constructor</p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="steptime" tabindex="-1">_stepTime <a class="header-anchor" href="#steptime" aria-label="Permalink to &quot;\\_stepTime&quot;">​</a></h3><p>• <strong>_stepTime</strong>: <code>number</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L27" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:27</a></p><hr><h3 id="animationframe" tabindex="-1">animationFrame <a class="header-anchor" href="#animationframe" aria-label="Permalink to &quot;animationFrame&quot;">​</a></h3><p>• <strong>animationFrame</strong>: <code>number</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L38" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:38</a></p><hr><h3 id="deltatime" tabindex="-1">deltaTime <a class="header-anchor" href="#deltatime" aria-label="Permalink to &quot;deltaTime&quot;">​</a></h3><p>• <strong>deltaTime</strong>: <code>number</code> = <code>1</code></p><p>上一帧和当前帧间隔时间 ms</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L51" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:51</a></p><hr><h3 id="filltime" tabindex="-1">fillTime <a class="header-anchor" href="#filltime" aria-label="Permalink to &quot;fillTime&quot;">​</a></h3><p>• <strong>fillTime</strong>: <code>number</code> = <code>0</code></p><p>需要填补的时间</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L60" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:60</a></p><hr><h3 id="lastframetime" tabindex="-1">lastFrameTime <a class="header-anchor" href="#lastframetime" aria-label="Permalink to &quot;lastFrameTime&quot;">​</a></h3><p>• <strong>lastFrameTime</strong>: <code>number</code> = <code>0</code></p><p>上一次屏幕刷新的时间</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L55" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:55</a></p><hr><h3 id="lasttime" tabindex="-1">lastTime <a class="header-anchor" href="#lasttime" aria-label="Permalink to &quot;lastTime&quot;">​</a></h3><p>• <strong>lastTime</strong>: <code>number</code> = <code>0</code></p><p>记录上一帧的时间</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L25" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:25</a></p><hr><h3 id="paused" tabindex="-1">paused <a class="header-anchor" href="#paused" aria-label="Permalink to &quot;paused&quot;">​</a></h3><p>• <strong>paused</strong>: <code>boolean</code> = <code>false</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L92" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:92</a></p><hr><h3 id="prefixed" tabindex="-1">prefixed <a class="header-anchor" href="#prefixed" aria-label="Permalink to &quot;prefixed&quot;">​</a></h3><p>▪ <code>Static</code> <strong>prefixed</strong>: <code>string</code> | <code>boolean</code></p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.prefixed</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:9</p><h2 id="accessors-1" tabindex="-1">Accessors <a class="header-anchor" href="#accessors-1" aria-label="Permalink to &quot;Accessors&quot;">​</a></h2><h3 id="fps" tabindex="-1">FPS <a class="header-anchor" href="#fps" aria-label="Permalink to &quot;FPS&quot;">​</a></h3><p>• <code>get</code> <strong>FPS</strong>(): <code>number</code></p><p>每秒帧数<br> 最大帧数不会超过浏览器刷新率<br> 默认每秒60帧</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L14" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:14</a></p><p>• <code>set</code> <strong>FPS</strong>(<code>val</code>): <code>void</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>val</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L17" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:17</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="addlistener" tabindex="-1">addListener <a class="header-anchor" href="#addlistener" aria-label="Permalink to &quot;addListener&quot;">​</a></h3><p>▸ <strong>addListener</strong>&lt;<code>T</code>&gt;(<code>event</code>, <code>fn</code>, <code>context?</code>): <a href="./Ticker.html"><code>Ticker</code></a></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(...<code>args</code>: <code>any</code>[]) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>context?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./Ticker.html"><code>Ticker</code></a></p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.addListener</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:45</p><hr><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>void</code></p><p>销毁</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L105" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:105</a></p><hr><h3 id="emit" tabindex="-1">emit <a class="header-anchor" href="#emit" aria-label="Permalink to &quot;emit&quot;">​</a></h3><p>▸ <strong>emit</strong>&lt;<code>T</code>&gt;(<code>event</code>, <code>...args</code>): <code>boolean</code></p><p>Calls each of the listeners registered for a given event.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.emit</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:32</p><hr><h3 id="eventnames" tabindex="-1">eventNames <a class="header-anchor" href="#eventnames" aria-label="Permalink to &quot;eventNames&quot;">​</a></h3><p>▸ <strong>eventNames</strong>(): (<code>string</code> | <code>symbol</code>)[]</p><p>Return an array listing the events for which the emitter has registered<br> listeners.</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>(<code>string</code> | <code>symbol</code>)[]</p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.eventNames</p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:15</p><hr><h3 id="listenercount" tabindex="-1">listenerCount <a class="header-anchor" href="#listenercount" aria-label="Permalink to &quot;listenerCount&quot;">​</a></h3><p>▸ <strong>listenerCount</strong>(<code>event</code>): <code>number</code></p><p>Return the number of listeners listening to a given event.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>string</code> | <code>symbol</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.listenerCount</p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:27</p><hr><h3 id="listeners" tabindex="-1">listeners <a class="header-anchor" href="#listeners" aria-label="Permalink to &quot;listeners&quot;">​</a></h3><p>▸ <strong>listeners</strong>&lt;<code>T</code>&gt;(<code>event</code>): (...<code>args</code>: <code>any</code>[]) =&gt; <code>void</code>[]</p><p>Return the listeners registered for a given event.</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>(...<code>args</code>: <code>any</code>[]) =&gt; <code>void</code>[]</p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.listeners</p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:20</p><hr><h3 id="off" tabindex="-1">off <a class="header-anchor" href="#off" aria-label="Permalink to &quot;off&quot;">​</a></h3><p>▸ <strong>off</strong>&lt;<code>T</code>&gt;(<code>event</code>, <code>fn?</code>, <code>context?</code>, <code>once?</code>): <a href="./Ticker.html"><code>Ticker</code></a></p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>fn?</code></td><td style="text-align:left;">(...<code>args</code>: <code>any</code>[]) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>context?</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>once?</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./Ticker.html"><code>Ticker</code></a></p><h4 id="inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-7" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.off</p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:69</p><hr><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-label="Permalink to &quot;on&quot;">​</a></h3><p>▸ <strong>on</strong>&lt;<code>T</code>&gt;(<code>event</code>, <code>fn</code>, <code>context?</code>): <a href="./Ticker.html"><code>Ticker</code></a></p><p>Add a listener for a given event.</p><h4 id="type-parameters-4" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-4" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(...<code>args</code>: <code>any</code>[]) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>context?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./Ticker.html"><code>Ticker</code></a></p><h4 id="inherited-from-8" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-8" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.on</p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:40</p><hr><h3 id="once" tabindex="-1">once <a class="header-anchor" href="#once" aria-label="Permalink to &quot;once&quot;">​</a></h3><p>▸ <strong>once</strong>&lt;<code>T</code>&gt;(<code>event</code>, <code>fn</code>, <code>context?</code>): <a href="./Ticker.html"><code>Ticker</code></a></p><p>Add a one-time listener for a given event.</p><h4 id="type-parameters-5" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-5" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">(...<code>args</code>: <code>any</code>[]) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>context?</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./Ticker.html"><code>Ticker</code></a></p><h4 id="inherited-from-9" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-9" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.once</p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:54</p><hr><h3 id="removealllisteners" tabindex="-1">removeAllListeners <a class="header-anchor" href="#removealllisteners" aria-label="Permalink to &quot;removeAllListeners&quot;">​</a></h3><p>▸ <strong>removeAllListeners</strong>(<code>event?</code>): <a href="./Ticker.html"><code>Ticker</code></a></p><p>Remove all listeners, or those of the specified event.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event?</code></td><td style="text-align:left;"><code>string</code> | <code>symbol</code></td></tr></tbody></table><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./Ticker.html"><code>Ticker</code></a></p><h4 id="inherited-from-10" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-10" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.removeAllListeners</p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:79</p><hr><h3 id="removelistener" tabindex="-1">removeListener <a class="header-anchor" href="#removelistener" aria-label="Permalink to &quot;removeListener&quot;">​</a></h3><p>▸ <strong>removeListener</strong>&lt;<code>T</code>&gt;(<code>event</code>, <code>fn?</code>, <code>context?</code>, <code>once?</code>): <a href="./Ticker.html"><code>Ticker</code></a></p><p>Remove the listeners of a given event.</p><h4 id="type-parameters-6" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-6" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <code>string</code> | <code>symbol</code></td></tr></tbody></table><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>event</code></td><td style="text-align:left;"><code>T</code></td></tr><tr><td style="text-align:left;"><code>fn?</code></td><td style="text-align:left;">(...<code>args</code>: <code>any</code>[]) =&gt; <code>void</code></td></tr><tr><td style="text-align:left;"><code>context?</code></td><td style="text-align:left;"><code>any</code></td></tr><tr><td style="text-align:left;"><code>once?</code></td><td style="text-align:left;"><code>boolean</code></td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./Ticker.html"><code>Ticker</code></a></p><h4 id="inherited-from-11" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-11" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p>EE.removeListener</p><h4 id="defined-in-20" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-20" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>node_modules/eventemitter3/index.d.ts:63</p><hr><h3 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;start&quot;">​</a></h3><p>▸ <strong>start</strong>(): <code>void</code></p><p>开始</p><h4 id="returns-13" tabindex="-1">Returns <a class="header-anchor" href="#returns-13" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-21" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-21" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L32" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:32</a></p><hr><h3 id="stop" tabindex="-1">stop <a class="header-anchor" href="#stop" aria-label="Permalink to &quot;stop&quot;">​</a></h3><p>▸ <strong>stop</strong>(): <code>void</code></p><p>暂停</p><h4 id="returns-14" tabindex="-1">Returns <a class="header-anchor" href="#returns-14" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-22" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-22" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L97" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:97</a></p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h3><p>▸ <strong>update</strong>(<code>time</code>): <code>void</code></p><p>每次刷新要执行的内容</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>time</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-15" tabindex="-1">Returns <a class="header-anchor" href="#returns-15" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-23" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-23" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/dd3e8cb/src/core/ticker/Ticker.ts#L65" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:65</a></p>',243),i=[o];function n(l,s,h,c,f,m){return a(),t("div",null,i)}const u=e(d,[["render",n]]);export{p as __pageData,u as default};
