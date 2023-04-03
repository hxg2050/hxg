import{_ as e,c as t,o as a,N as o}from"./chunks/framework.2075e729.js";const u=JSON.parse('{"title":"Class: Rect","description":"","frontmatter":{},"headers":[],"relativePath":"dist/classes/Rect.md"}'),r={name:"dist/classes/Rect.md"},n=o(`<h1 id="class-rect" tabindex="-1">Class: Rect <a class="header-anchor" href="#class-rect" aria-label="Permalink to &quot;Class: Rect&quot;">​</a></h1><p>矩形绘制，必须挂载Graphics节点上才能生效</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">stage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addChild</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Transform</span><span style="color:#A6ACCD;">(Graphics))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> rect </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addComponent</span><span style="color:#A6ACCD;">(Rect)</span><span style="color:#89DDFF;">!;</span></span>
<span class="line"><span style="color:#A6ACCD;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">radius </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fill </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#0000FF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">storke </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#ff0000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">rect</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">storkeWidth </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./Component.html"><code>Component</code></a></p><p>↳ <strong><code>Rect</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./Rect.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./Rect.html#emitter">emitter</a></li><li><a href="./Rect.html#fill">fill</a></li><li><a href="./Rect.html#id">id</a></li><li><a href="./Rect.html#name">name</a></li><li><a href="./Rect.html#node">node</a></li><li><a href="./Rect.html#radius">radius</a></li><li><a href="./Rect.html#storke">storke</a></li><li><a href="./Rect.html#storkewidth">storkeWidth</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./Rect.html#addcomponent">addComponent</a></li><li><a href="./Rect.html#destroy">destroy</a></li><li><a href="./Rect.html#getcomponent">getComponent</a></li><li><a href="./Rect.html#getcomponents">getComponents</a></li><li><a href="./Rect.html#getcomponentsinchildren">getComponentsInChildren</a></li><li><a href="./Rect.html#ondestroy">onDestroy</a></li><li><a href="./Rect.html#removeallcomponent">removeAllComponent</a></li><li><a href="./Rect.html#removecomponent">removeComponent</a></li><li><a href="./Rect.html#start">start</a></li><li><a href="./Rect.html#update">update</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new Rect</strong>(<code>transform</code>)</p><p>组件不能单独实例化，必须通过Transform.addComponent创建</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Transform</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> componet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addComponent</span><span style="color:#A6ACCD;">(Component)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>transform</code></td><td style="text-align:left;"><a href="./Transform.html"><code>Transform</code></a>&lt;<a href="./Container.html"><code>Container</code></a>&gt;</td></tr></tbody></table><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#constructor">constructor</a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L37" target="_blank" rel="noreferrer">src/core/component/Component.ts:37</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="emitter" tabindex="-1">emitter <a class="header-anchor" href="#emitter" aria-label="Permalink to &quot;emitter&quot;">​</a></h3><p>• <strong>emitter</strong>: <code>StoreEmitter</code>&lt;<code>string</code>&gt;</p><p>事件处理器</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#emitter">emitter</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L27" target="_blank" rel="noreferrer">src/core/component/Component.ts:27</a></p><hr><h3 id="fill" tabindex="-1">fill <a class="header-anchor" href="#fill" aria-label="Permalink to &quot;fill&quot;">​</a></h3><p>• <code>Optional</code> <strong>fill</strong>: <code>string</code> = <code>&#39;#000000&#39;</code></p><p>填充颜色</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Rect.ts#L26" target="_blank" rel="noreferrer">src/core/component/Rect.ts:26</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h3><p>• <strong>id</strong>: <code>number</code></p><p>用于表示组件的唯一标识</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#id">id</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L12" target="_blank" rel="noreferrer">src/core/component/Component.ts:12</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code> = <code>&#39;&#39;</code></p><p>组件名</p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#name">name</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L17" target="_blank" rel="noreferrer">src/core/component/Component.ts:17</a></p><hr><h3 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;node&quot;">​</a></h3><p>• <strong>node</strong>: <a href="./Transform.html"><code>Transform</code></a>&lt;<a href="./Container.html"><code>Container</code></a>&gt;</p><p>组件挂载节点</p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#node">node</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L22" target="_blank" rel="noreferrer">src/core/component/Component.ts:22</a></p><hr><h3 id="radius" tabindex="-1">radius <a class="header-anchor" href="#radius" aria-label="Permalink to &quot;radius&quot;">​</a></h3><p>• <strong>radius</strong>: <code>number</code> = <code>0</code></p><p>圆角大小</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Rect.ts#L22" target="_blank" rel="noreferrer">src/core/component/Rect.ts:22</a></p><hr><h3 id="storke" tabindex="-1">storke <a class="header-anchor" href="#storke" aria-label="Permalink to &quot;storke&quot;">​</a></h3><p>• <strong>storke</strong>: <code>string</code> = <code>&#39;#FFFFFF&#39;</code></p><p>边框颜色</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Rect.ts#L30" target="_blank" rel="noreferrer">src/core/component/Rect.ts:30</a></p><hr><h3 id="storkewidth" tabindex="-1">storkeWidth <a class="header-anchor" href="#storkewidth" aria-label="Permalink to &quot;storkeWidth&quot;">​</a></h3><p>• <strong>storkeWidth</strong>: <code>number</code> = <code>0</code></p><p>边框大小</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Rect.ts#L34" target="_blank" rel="noreferrer">src/core/component/Rect.ts:34</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="addcomponent" tabindex="-1">addComponent <a class="header-anchor" href="#addcomponent" aria-label="Permalink to &quot;addComponent&quot;">​</a></h3><p>▸ <strong>addComponent</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code></p><p>添加一个组件</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./Component.html"><code>Component</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">要挂载的组件</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#addcomponent">addComponent</a></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L60" target="_blank" rel="noreferrer">src/core/component/Component.ts:60</a></p><hr><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>void</code></p><p>消毁</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#destroy">destroy</a></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L106" target="_blank" rel="noreferrer">src/core/component/Component.ts:106</a></p><hr><h3 id="getcomponent" tabindex="-1">getComponent <a class="header-anchor" href="#getcomponent" aria-label="Permalink to &quot;getComponent&quot;">​</a></h3><p>▸ <strong>getComponent</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code></p><p>获取单个组件，获取首个匹配到的组件</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./Component.html"><code>Component</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">组件</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-7" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#getcomponent">getComponent</a></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L83" target="_blank" rel="noreferrer">src/core/component/Component.ts:83</a></p><hr><h3 id="getcomponents" tabindex="-1">getComponents <a class="header-anchor" href="#getcomponents" aria-label="Permalink to &quot;getComponents&quot;">​</a></h3><p>▸ <strong>getComponents</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code>[]</p><p>获取所有组件</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">组件</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code>[]</p><h4 id="inherited-from-8" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-8" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#getcomponents">getComponents</a></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L91" target="_blank" rel="noreferrer">src/core/component/Component.ts:91</a></p><hr><h3 id="getcomponentsinchildren" tabindex="-1">getComponentsInChildren <a class="header-anchor" href="#getcomponentsinchildren" aria-label="Permalink to &quot;getComponentsInChildren&quot;">​</a></h3><p>▸ <strong>getComponentsInChildren</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code>[]</p><p>从子节点获取所有组件，不会包含当前节点</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">组件</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code>[]</p><h4 id="inherited-from-9" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-9" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#getcomponentsinchildren">getComponentsInChildren</a></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L99" target="_blank" rel="noreferrer">src/core/component/Component.ts:99</a></p><hr><h3 id="ondestroy" tabindex="-1">onDestroy <a class="header-anchor" href="#ondestroy" aria-label="Permalink to &quot;onDestroy&quot;">​</a></h3><p>▸ <strong>onDestroy</strong>(): <code>void</code></p><p>组件被销毁时触发</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#ondestroy">onDestroy</a></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Rect.ts#L66" target="_blank" rel="noreferrer">src/core/component/Rect.ts:66</a></p><hr><h3 id="removeallcomponent" tabindex="-1">removeAllComponent <a class="header-anchor" href="#removeallcomponent" aria-label="Permalink to &quot;removeAllComponent&quot;">​</a></h3><p>▸ <strong>removeAllComponent</strong>(): <code>void</code></p><p>移除所有组件</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-10" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-10" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#removeallcomponent">removeAllComponent</a></p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L75" target="_blank" rel="noreferrer">src/core/component/Component.ts:75</a></p><hr><h3 id="removecomponent" tabindex="-1">removeComponent <a class="header-anchor" href="#removecomponent" aria-label="Permalink to &quot;removeComponent&quot;">​</a></h3><p>▸ <strong>removeComponent</strong>(<code>component</code>): <code>void</code></p><p>移除一个组件</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>component</code></td><td style="text-align:left;"><a href="./Component.html"><code>Component</code></a></td><td style="text-align:left;">将要移除的组件</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-11" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-11" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#removecomponent">removeComponent</a></p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Component.ts#L68" target="_blank" rel="noreferrer">src/core/component/Component.ts:68</a></p><hr><h3 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;start&quot;">​</a></h3><p>▸ <strong>start</strong>(): <code>void</code></p><p>组件被挂载到节点时触发</p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="overrides-1" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-1" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#start">start</a></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Rect.ts#L37" target="_blank" rel="noreferrer">src/core/component/Rect.ts:37</a></p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h3><p>▸ <strong>update</strong>(<code>time</code>): <code>void</code></p><p>每帧调用</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>time</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">和上一帧的间隔时间 ms</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="overrides-2" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-2" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#update">update</a></p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/f790258/src/core/component/Rect.ts#L61" target="_blank" rel="noreferrer">src/core/component/Rect.ts:61</a></p>`,199),s=[n];function l(i,d,h,c,p,m){return a(),t("div",null,s)}const b=e(r,[["render",l]]);export{u as __pageData,b as default};
