import{_ as e,c as a,o as n,N as t}from"./chunks/framework.2075e729.js";const u=JSON.parse('{"title":"Class: NinePanel","description":"","frontmatter":{},"headers":[],"relativePath":"dist/classes/NinePanel.md"}'),o={name:"dist/classes/NinePanel.md"},r=t(`<h1 id="class-ninepanel" tabindex="-1">Class: NinePanel <a class="header-anchor" href="#class-ninepanel" aria-label="Permalink to &quot;Class: NinePanel&quot;">​</a></h1><p>九宫格绘制<br> 将原图拆分9部分</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建一个图片节点</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Transform</span><span style="color:#A6ACCD;">(Sprite)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取图片组件</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sprite </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#A6ACCD;">(Sprite)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 加载图片资源</span></span>
<span class="line"><span style="color:#A6ACCD;">Resource</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IRes</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 设置纹理素材</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">texture</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">ImageTexture</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 根据纹理重新设置挂载节点的尺寸</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">sprite</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resize</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ninePanel</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addComponent</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">NinePanel</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">ninePanel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">ninePanel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">ninePanel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">ninePanel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bottom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">7</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">400</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./Component.html"><code>Component</code></a></p><p>↳ <strong><code>NinePanel</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./NinePanel.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./NinePanel.html#emitter">emitter</a></li><li><a href="./NinePanel.html#id">id</a></li><li><a href="./NinePanel.html#name">name</a></li><li><a href="./NinePanel.html#node">node</a></li><li><a href="./NinePanel.html#redraw">redraw</a></li><li><a href="./NinePanel.html#texture">texture</a></li></ul><h3 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-label="Permalink to &quot;Accessors&quot;">​</a></h3><ul><li><a href="./NinePanel.html#bottom">bottom</a></li><li><a href="./NinePanel.html#left">left</a></li><li><a href="./NinePanel.html#right">right</a></li><li><a href="./NinePanel.html#top">top</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./NinePanel.html#destroy">destroy</a></li><li><a href="./NinePanel.html#ondestroy">onDestroy</a></li><li><a href="./NinePanel.html#start">start</a></li><li><a href="./NinePanel.html#toredraw">toRedraw</a></li><li><a href="./NinePanel.html#update">update</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new NinePanel</strong>()</p><p>组件不能单独实例化，必须通过Transform.addComponent创建</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Transform</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> componet </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addComponent</span><span style="color:#A6ACCD;">(Component)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#constructor">constructor</a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/Component.ts#L37" target="_blank" rel="noreferrer">src/core/component/Component.ts:37</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="emitter" tabindex="-1">emitter <a class="header-anchor" href="#emitter" aria-label="Permalink to &quot;emitter&quot;">​</a></h3><p>• <strong>emitter</strong>: <code>EventEmitter</code>&lt;<code>string</code> | <code>symbol</code>, <code>any</code>&gt;</p><p>事件处理器</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#emitter">emitter</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/Component.ts#L27" target="_blank" rel="noreferrer">src/core/component/Component.ts:27</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-label="Permalink to &quot;id&quot;">​</a></h3><p>• <strong>id</strong>: <code>number</code></p><p>用于表示组件的唯一标识</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#id">id</a></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/Component.ts#L12" target="_blank" rel="noreferrer">src/core/component/Component.ts:12</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code> = <code>&#39;&#39;</code></p><p>组件名</p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#name">name</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/Component.ts#L17" target="_blank" rel="noreferrer">src/core/component/Component.ts:17</a></p><hr><h3 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-label="Permalink to &quot;node&quot;">​</a></h3><p>• <strong>node</strong>: <a href="./Transform.html"><code>Transform</code></a>&lt;<a href="./Container.html"><code>Container</code></a>&gt;</p><p>组件挂载节点</p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#node">node</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/Component.ts#L22" target="_blank" rel="noreferrer">src/core/component/Component.ts:22</a></p><hr><h3 id="redraw" tabindex="-1">redraw <a class="header-anchor" href="#redraw" aria-label="Permalink to &quot;redraw&quot;">​</a></h3><p>• <strong>redraw</strong>: <code>boolean</code> = <code>false</code></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L84" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:84</a></p><hr><h3 id="texture" tabindex="-1">texture <a class="header-anchor" href="#texture" aria-label="Permalink to &quot;texture&quot;">​</a></h3><p>• <code>Optional</code> <strong>texture</strong>: <a href="./Texture.html"><code>Texture</code></a>&lt;<a href="./../modules.html#textureresource"><code>TextureResource</code></a>&gt;</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L68" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:68</a></p><h2 id="accessors-1" tabindex="-1">Accessors <a class="header-anchor" href="#accessors-1" aria-label="Permalink to &quot;Accessors&quot;">​</a></h2><h3 id="bottom" tabindex="-1">bottom <a class="header-anchor" href="#bottom" aria-label="Permalink to &quot;bottom&quot;">​</a></h3><p>• <code>get</code> <strong>bottom</strong>(): <code>number</code></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L60" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:60</a></p><p>• <code>set</code> <strong>bottom</strong>(<code>val</code>): <code>void</code></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>val</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L63" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:63</a></p><hr><h3 id="left" tabindex="-1">left <a class="header-anchor" href="#left" aria-label="Permalink to &quot;left&quot;">​</a></h3><p>• <code>get</code> <strong>left</strong>(): <code>number</code></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L33" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:33</a></p><p>• <code>set</code> <strong>left</strong>(<code>val</code>): <code>void</code></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>val</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L36" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:36</a></p><hr><h3 id="right" tabindex="-1">right <a class="header-anchor" href="#right" aria-label="Permalink to &quot;right&quot;">​</a></h3><p>• <code>get</code> <strong>right</strong>(): <code>number</code></p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L51" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:51</a></p><p>• <code>set</code> <strong>right</strong>(<code>val</code>): <code>void</code></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>val</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L54" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:54</a></p><hr><h3 id="top" tabindex="-1">top <a class="header-anchor" href="#top" aria-label="Permalink to &quot;top&quot;">​</a></h3><p>• <code>get</code> <strong>top</strong>(): <code>number</code></p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>number</code></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L42" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:42</a></p><p>• <code>set</code> <strong>top</strong>(<code>val</code>): <code>void</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>val</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L45" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:45</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>void</code></p><p>消毁</p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#destroy">destroy</a></p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/Component.ts#L55" target="_blank" rel="noreferrer">src/core/component/Component.ts:55</a></p><hr><h3 id="ondestroy" tabindex="-1">onDestroy <a class="header-anchor" href="#ondestroy" aria-label="Permalink to &quot;onDestroy&quot;">​</a></h3><p>▸ <code>Optional</code> <strong>onDestroy</strong>(): <code>void</code></p><p>组件被销毁时触发</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#ondestroy">onDestroy</a></p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/Component.ts#L62" target="_blank" rel="noreferrer">src/core/component/Component.ts:62</a></p><hr><h3 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;start&quot;">​</a></h3><p>▸ <strong>start</strong>(): <code>void</code></p><p>组件被挂载到节点时触发</p><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#start">start</a></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L70" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:70</a></p><hr><h3 id="toredraw" tabindex="-1">toRedraw <a class="header-anchor" href="#toredraw" aria-label="Permalink to &quot;toRedraw&quot;">​</a></h3><p>▸ <strong>toRedraw</strong>(): <code>void</code></p><p>重新生成</p><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/NinePanel.ts#L81" target="_blank" rel="noreferrer">src/core/component/NinePanel.ts:81</a></p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-label="Permalink to &quot;update&quot;">​</a></h3><p>▸ <code>Optional</code> <strong>update</strong>(<code>time</code>): <code>void</code></p><p>每帧调用</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>time</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">和上一帧的间隔时间 ms</td></tr></tbody></table><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-7" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./Component.html">Component</a>.<a href="./Component.html#update">update</a></p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/3f1f471/src/core/component/Component.ts#L50" target="_blank" rel="noreferrer">src/core/component/Component.ts:50</a></p>`,171),s=[r];function l(i,c,p,d,h,f){return n(),a("div",null,s)}const b=e(o,[["render",l]]);export{u as __pageData,b as default};