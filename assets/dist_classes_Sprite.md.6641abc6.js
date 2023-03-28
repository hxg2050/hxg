import{_ as e,c as t,o as a,N as r}from"./chunks/framework.2075e729.js";const u=JSON.parse('{"title":"Class: Sprite","description":"","frontmatter":{},"headers":[],"relativePath":"dist/classes/Sprite.md"}'),o={name:"dist/classes/Sprite.md"},n=r(`<h1 id="class-sprite" tabindex="-1">Class: Sprite <a class="header-anchor" href="#class-sprite" aria-label="Permalink to &quot;Class: Sprite&quot;">​</a></h1><p>图片显示组件</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建一个图片节点</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Transform</span><span style="color:#A6ACCD;">(Sprite)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取图片组件</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sprite </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#A6ACCD;">(Sprite)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 加载图片资源</span></span>
<span class="line"><span style="color:#A6ACCD;">Resource</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IRes</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 设置纹理素材</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">texture</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ImageTexture</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 根据纹理重新设置挂载节点的尺寸</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resize</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./BaseContainer.html"><code>BaseContainer</code></a></p><p>↳ <strong><code>Sprite</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./Sprite.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./Sprite.html#emitter">emitter</a></li><li><a href="./Sprite.html#id">id</a></li><li><a href="./Sprite.html#name">name</a></li><li><a href="./Sprite.html#node">node</a></li><li><a href="./Sprite.html#texture">texture</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./Sprite.html#addcomponent">addComponent</a></li><li><a href="./Sprite.html#destroy">destroy</a></li><li><a href="./Sprite.html#getcomponent">getComponent</a></li><li><a href="./Sprite.html#getcomponents">getComponents</a></li><li><a href="./Sprite.html#getcomponentsinchildren">getComponentsInChildren</a></li><li><a href="./Sprite.html#ondestroy">onDestroy</a></li><li><a href="./Sprite.html#removeallcomponent">removeAllComponent</a></li><li><a href="./Sprite.html#removecomponent">removeComponent</a></li><li><a href="./Sprite.html#resize">resize</a></li><li><a href="./Sprite.html#start">start</a></li><li><a href="./Sprite.html#update">update</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new Sprite</strong>(<code>transform</code>)</p><p>显示图片</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>transform</code></td><td style="text-align:left;"><a href="./Transform.html"><code>Transform</code></a>&lt;<a href="./Container.html"><code>Container</code></a>&gt;</td><td style="text-align:left;">挂载的节点</td></tr></tbody></table><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#constructor">constructor</a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Sprite.ts#L26" target="_blank" rel="noreferrer">src/core/component/Sprite.ts:26</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="emitter" tabindex="-1">emitter <a class="header-anchor" href="#emitter" aria-label="Permalink to &quot;emitter&quot;">​</a></h3><p>• <strong>emitter</strong>: <code>StoreEmitter</code>&lt;<code>string</code>&gt;</p><p>事件处理器</p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#emitter">emitter</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L27" target="_blank" rel="noreferrer">src/core/component/Component.ts:27</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h3><p>• <strong>id</strong>: <code>number</code></p><p>用于表示组件的唯一标识</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#id">id</a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L12" target="_blank" rel="noreferrer">src/core/component/Component.ts:12</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code> = <code>&#39;&#39;</code></p><p>组件名</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#name">name</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L17" target="_blank" rel="noreferrer">src/core/component/Component.ts:17</a></p><hr><h3 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;node&quot;">​</a></h3><p>• <strong>node</strong>: <a href="./Transform.html"><code>Transform</code></a>&lt;<a href="./Container.html"><code>Container</code></a>&gt;</p><p>组件挂载节点</p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#node">node</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L22" target="_blank" rel="noreferrer">src/core/component/Component.ts:22</a></p><hr><h3 id="texture" tabindex="-1">texture <a class="header-anchor" href="#texture" aria-label="Permalink to &quot;texture&quot;">​</a></h3><p>• <code>Optional</code> <strong>texture</strong>: <a href="./ImageTexture.html"><code>ImageTexture</code></a></p><p>图片纹理，储存图片的相关信息</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Sprite.ts#L33" target="_blank" rel="noreferrer">src/core/component/Sprite.ts:33</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="addcomponent" tabindex="-1">addComponent <a class="header-anchor" href="#addcomponent" aria-label="Permalink to &quot;addComponent&quot;">​</a></h3><p>▸ <strong>addComponent</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code></p><p>添加一个组件</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./Component.html"><code>Component</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">要挂载的组件</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#addcomponent">addComponent</a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L60" target="_blank" rel="noreferrer">src/core/component/Component.ts:60</a></p><hr><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>void</code></p><p>消毁</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#destroy">destroy</a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L106" target="_blank" rel="noreferrer">src/core/component/Component.ts:106</a></p><hr><h3 id="getcomponent" tabindex="-1">getComponent <a class="header-anchor" href="#getcomponent" aria-label="Permalink to &quot;getComponent&quot;">​</a></h3><p>▸ <strong>getComponent</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code></p><p>获取单个组件，获取首个匹配到的组件</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./Component.html"><code>Component</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">组件</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#getcomponent">getComponent</a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L83" target="_blank" rel="noreferrer">src/core/component/Component.ts:83</a></p><hr><h3 id="getcomponents" tabindex="-1">getComponents <a class="header-anchor" href="#getcomponents" aria-label="Permalink to &quot;getComponents&quot;">​</a></h3><p>▸ <strong>getComponents</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code>[]</p><p>获取所有组件</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">组件</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code>[]</p><h4 id="inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-7" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#getcomponents">getComponents</a></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L91" target="_blank" rel="noreferrer">src/core/component/Component.ts:91</a></p><hr><h3 id="getcomponentsinchildren" tabindex="-1">getComponentsInChildren <a class="header-anchor" href="#getcomponentsinchildren" aria-label="Permalink to &quot;getComponentsInChildren&quot;">​</a></h3><p>▸ <strong>getComponentsInChildren</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code>[]</p><p>从子节点获取所有组件，不会包含当前节点</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">组件</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code>[]</p><h4 id="inherited-from-8" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-8" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#getcomponentsinchildren">getComponentsInChildren</a></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L99" target="_blank" rel="noreferrer">src/core/component/Component.ts:99</a></p><hr><h3 id="ondestroy" tabindex="-1">onDestroy <a class="header-anchor" href="#ondestroy" aria-label="Permalink to &quot;onDestroy&quot;">​</a></h3><p>▸ <strong>onDestroy</strong>(): <code>void</code></p><p>组件被销毁时触发</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-9" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-9" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#ondestroy">onDestroy</a></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L113" target="_blank" rel="noreferrer">src/core/component/Component.ts:113</a></p><hr><h3 id="removeallcomponent" tabindex="-1">removeAllComponent <a class="header-anchor" href="#removeallcomponent" aria-label="Permalink to &quot;removeAllComponent&quot;">​</a></h3><p>▸ <strong>removeAllComponent</strong>(): <code>void</code></p><p>移除所有组件</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-10" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-10" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#removeallcomponent">removeAllComponent</a></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L75" target="_blank" rel="noreferrer">src/core/component/Component.ts:75</a></p><hr><h3 id="removecomponent" tabindex="-1">removeComponent <a class="header-anchor" href="#removecomponent" aria-label="Permalink to &quot;removeComponent&quot;">​</a></h3><p>▸ <strong>removeComponent</strong>(<code>component</code>): <code>void</code></p><p>移除一个组件</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>component</code></td><td style="text-align:left;"><a href="./Component.html"><code>Component</code></a></td><td style="text-align:left;">将要移除的组件</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-11" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-11" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#removecomponent">removeComponent</a></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L68" target="_blank" rel="noreferrer">src/core/component/Component.ts:68</a></p><hr><h3 id="resize" tabindex="-1">resize <a class="header-anchor" href="#resize" aria-label="Permalink to &quot;resize&quot;">​</a></h3><p>▸ <strong>resize</strong>(): <code>void</code></p><p>根据当前图片纹理，重置节点尺寸信息</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Transform</span><span style="color:#A6ACCD;">(Sprite)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sprite </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#A6ACCD;">(Sprite)</span><span style="color:#89DDFF;">!;</span></span>
<span class="line"><span style="color:#A6ACCD;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resize</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Sprite.ts#L47" target="_blank" rel="noreferrer">src/core/component/Sprite.ts:47</a></p><hr><h3 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;start&quot;">​</a></h3><p>▸ <strong>start</strong>(): <code>void</code></p><p>组件被挂载到节点时触发</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="overrides-1" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-1" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#start">start</a></p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Sprite.ts#L35" target="_blank" rel="noreferrer">src/core/component/Sprite.ts:35</a></p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h3><p>▸ <strong>update</strong>(<code>time</code>): <code>void</code></p><p>每帧调用</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>time</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">和上一帧的间隔时间 ms</td></tr></tbody></table><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-12" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-12" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./BaseContainer.html">BaseContainer</a>.<a href="./BaseContainer.html#update">update</a></p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/component/Component.ts#L52" target="_blank" rel="noreferrer">src/core/component/Component.ts:52</a></p>`,189),s=[n];function l(i,d,h,c,p,m){return a(),t("div",null,s)}const b=e(o,[["render",l]]);export{u as __pageData,b as default};
