import{_ as e,c as t,o as a,N as o}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"Class: SpriteSheet","description":"","frontmatter":{},"headers":[],"relativePath":"dist/classes/SpriteSheet.md"}'),r={name:"dist/classes/SpriteSheet.md"},n=o(`<h1 id="class-spritesheet" tabindex="-1">Class: SpriteSheet <a class="header-anchor" href="#class-spritesheet" aria-label="Permalink to &quot;Class: SpriteSheet&quot;">​</a></h1><p>图集处理，可用于逐帧动画 配合Sprite可显示图片 配合动画组件可以处理动画</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> json </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Resource</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./example/assets/animations/Samurai/Attack.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> img </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Resource</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./example/assets/animations/Samurai/Attack.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 如果要控制动画大小可以使用父节点包裹的方式控制scale属性</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> group </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">stage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addChild</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> Transform)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">group</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scale</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> group</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addChild</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Transform</span><span style="color:#A6ACCD;">(Sprite))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sprite </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#A6ACCD;">(Sprite)</span><span style="color:#89DDFF;">!;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> spriteSheet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addComponent</span><span style="color:#A6ACCD;">(SpriteSheet)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">spriteSheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(json</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> img)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 需要在下一帧才能正常切换</span></span>
<span class="line"><span style="color:#A6ACCD;">ticker</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">once</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">update</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">spriteSheet</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">show</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resize</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./Component.html"><code>Component</code></a></p><p>↳ <strong><code>SpriteSheet</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./SpriteSheet.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./SpriteSheet.html#animations">animations</a></li><li><a href="./SpriteSheet.html#emitter">emitter</a></li><li><a href="./SpriteSheet.html#frames">frames</a></li><li><a href="./SpriteSheet.html#id">id</a></li><li><a href="./SpriteSheet.html#name">name</a></li><li><a href="./SpriteSheet.html#node">node</a></li><li><a href="./SpriteSheet.html#sprite">sprite</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./SpriteSheet.html#add">add</a></li><li><a href="./SpriteSheet.html#destroy">destroy</a></li><li><a href="./SpriteSheet.html#get">get</a></li><li><a href="./SpriteSheet.html#load">load</a></li><li><a href="./SpriteSheet.html#ondestroy">onDestroy</a></li><li><a href="./SpriteSheet.html#set">set</a></li><li><a href="./SpriteSheet.html#show">show</a></li><li><a href="./SpriteSheet.html#start">start</a></li><li><a href="./SpriteSheet.html#update">update</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new SpriteSheet</strong>(<code>transform</code>)</p><p>组件不能单独实例化，必须通过Transform.addComponent创建</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Transform</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> componet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addComponent</span><span style="color:#A6ACCD;">(Component)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>transform</code></td><td style="text-align:left;"><a href="./Transform.html"><code>Transform</code></a>&lt;<a href="./Container.html"><code>Container</code></a>&gt;</td></tr></tbody></table><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#constructor">constructor</a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/Component.ts#L37" target="_blank" rel="noreferrer">src/core/component/Component.ts:37</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="animations" tabindex="-1">animations <a class="header-anchor" href="#animations" aria-label="Permalink to &quot;animations&quot;">​</a></h3><p>• <strong>animations</strong>: <code>Record</code>&lt;<code>string</code>, <code>string</code>[]&gt; = <code>{}</code></p><p>动画配置</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/SpriteSheet.ts#L90" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:90</a></p><hr><h3 id="emitter" tabindex="-1">emitter <a class="header-anchor" href="#emitter" aria-label="Permalink to &quot;emitter&quot;">​</a></h3><p>• <strong>emitter</strong>: <code>EventEmitter</code>&lt;<code>string</code> | <code>symbol</code>, <code>any</code>&gt;</p><p>事件处理器</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#emitter">emitter</a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/Component.ts#L27" target="_blank" rel="noreferrer">src/core/component/Component.ts:27</a></p><hr><h3 id="frames" tabindex="-1">frames <a class="header-anchor" href="#frames" aria-label="Permalink to &quot;frames&quot;">​</a></h3><p>• <strong>frames</strong>: <code>Record</code>&lt;<code>string</code>, <a href="./Texture.html"><code>Texture</code></a>&lt;<a href="./../modules.html#textureresource"><code>TextureResource</code></a>&gt;&gt; = <code>{}</code></p><p>纹理集</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/SpriteSheet.ts#L86" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:86</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h3><p>• <strong>id</strong>: <code>number</code></p><p>用于表示组件的唯一标识</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#id">id</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/Component.ts#L12" target="_blank" rel="noreferrer">src/core/component/Component.ts:12</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code> = <code>&#39;&#39;</code></p><p>组件名</p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#name">name</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/Component.ts#L17" target="_blank" rel="noreferrer">src/core/component/Component.ts:17</a></p><hr><h3 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;node&quot;">​</a></h3><p>• <strong>node</strong>: <a href="./Transform.html"><code>Transform</code></a>&lt;<a href="./Container.html"><code>Container</code></a>&gt;</p><p>组件挂载节点</p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#node">node</a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/Component.ts#L22" target="_blank" rel="noreferrer">src/core/component/Component.ts:22</a></p><hr><h3 id="sprite" tabindex="-1">sprite <a class="header-anchor" href="#sprite" aria-label="Permalink to &quot;sprite&quot;">​</a></h3><p>• <strong>sprite</strong>: <a href="./Sprite.html"><code>Sprite</code></a></p><p>展示的节点</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/SpriteSheet.ts#L94" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:94</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><p>▸ <strong>add</strong>(<code>res</code>, <code>data</code>, <code>name</code>): <code>void</code></p><p>添加一个素材</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>res</code></td><td style="text-align:left;"><a href="./../modules.html#textureresource"><code>TextureResource</code></a></td><td style="text-align:left;">资源</td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><a href="./../modules.html#atlasframe"><code>AtlasFrame</code></a></td><td style="text-align:left;">配置</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">内部别名</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/SpriteSheet.ts#L122" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:122</a></p><hr><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>void</code></p><p>消毁</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#destroy">destroy</a></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/Component.ts#L56" target="_blank" rel="noreferrer">src/core/component/Component.ts:56</a></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><p>▸ <strong>get</strong>(<code>name</code>): <a href="./Texture.html"><code>Texture</code></a>&lt;<a href="./../modules.html#textureresource"><code>TextureResource</code></a>&gt;</p><p>获取素材</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./Texture.html"><code>Texture</code></a>&lt;<a href="./../modules.html#textureresource"><code>TextureResource</code></a>&gt;</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/SpriteSheet.ts#L104" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:104</a></p><hr><h3 id="load" tabindex="-1">load <a class="header-anchor" href="#load" aria-label="Permalink to &quot;load&quot;">​</a></h3><p>▸ <strong>load</strong>(<code>config</code>, <code>res?</code>): <code>void</code></p><p>加载图集 如果没有传入资源,则使用配置里面的资源路径进行加载，但是还是要提前保证路径资源已经被提前加载</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><a href="./../modules.html#sheetframes"><code>SheetFrames</code></a></td><td style="text-align:left;">配置</td></tr><tr><td style="text-align:left;"><code>res?</code></td><td style="text-align:left;"><a href="./../interfaces/IRes.html"><code>IRes</code></a></td><td style="text-align:left;">资源</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/SpriteSheet.ts#L152" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:152</a></p><hr><h3 id="ondestroy" tabindex="-1">onDestroy <a class="header-anchor" href="#ondestroy" aria-label="Permalink to &quot;onDestroy&quot;">​</a></h3><p>▸ <code>Optional</code> <strong>onDestroy</strong>(): <code>void</code></p><p>组件被销毁时触发</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#ondestroy">onDestroy</a></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/Component.ts#L63" target="_blank" rel="noreferrer">src/core/component/Component.ts:63</a></p><hr><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><p>▸ <strong>set</strong>(<code>name</code>, <code>texture</code>): <code>void</code></p><p>设置要显示的素材</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>texture</code></td><td style="text-align:left;"><a href="./Texture.html"><code>Texture</code></a>&lt;<a href="./../modules.html#textureresource"><code>TextureResource</code></a>&gt;</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/SpriteSheet.ts#L112" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:112</a></p><hr><h3 id="show" tabindex="-1">show <a class="header-anchor" href="#show" aria-label="Permalink to &quot;show&quot;">​</a></h3><p>▸ <strong>show</strong>(<code>name</code>): <code>void</code></p><p>设置要现实的素材</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">内部别名</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/SpriteSheet.ts#L142" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:142</a></p><hr><h3 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;start&quot;">​</a></h3><p>▸ <strong>start</strong>(): <code>void</code></p><p>组件被挂载到节点时触发</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#start">start</a></p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/SpriteSheet.ts#L96" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:96</a></p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h3><p>▸ <code>Optional</code> <strong>update</strong>(<code>time</code>): <code>void</code></p><p>每帧调用</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>time</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">和上一帧的间隔时间 ms</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-7" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#update">update</a></p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/2760c20/src/core/component/Component.ts#L51" target="_blank" rel="noreferrer">src/core/component/Component.ts:51</a></p>`,165),s=[n];function l(i,d,h,p,c,m){return a(),t("div",null,s)}const b=e(r,[["render",l]]);export{u as __pageData,b as default};
