import{_ as e,c as a,o as t,a as s}from"./app.f4fb069f.js";const g=JSON.parse('{"title":"Class: Application","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"config","slug":"config","link":"#config","children":[]},{"level":3,"title":"eventSystem","slug":"eventsystem","link":"#eventsystem","children":[]},{"level":3,"title":"stage","slug":"stage","link":"#stage","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"use","slug":"use","link":"#use","children":[]},{"level":3,"title":"run","slug":"run","link":"#run","children":[]}]}],"relativePath":"dist/classes/Application.md"}'),n={name:"dist/classes/Application.md"},r=s(`<h1 id="class-application" tabindex="-1">Class: Application <a class="header-anchor" href="#class-application" aria-hidden="true">#</a></h1><p>应用</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 方式一</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Applaction</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 方式二</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Applaction</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">run</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Application.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><ul><li><a href="./Application.html#config">config</a></li><li><a href="./Application.html#eventsystem">eventSystem</a></li><li><a href="./Application.html#stage">stage</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Application.html#use">use</a></li><li><a href="./Application.html#run">run</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new Application</strong>(<code>config?</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/Application.ts#L43" target="_blank" rel="noreferrer">core/Application.ts:43</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-hidden="true">#</a></h3><p>• <strong>config</strong>: <a href="./../modules.html#options"><code>Options</code></a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/Application.ts#L28" target="_blank" rel="noreferrer">core/Application.ts:28</a></p><hr><h3 id="eventsystem" tabindex="-1">eventSystem <a class="header-anchor" href="#eventsystem" aria-hidden="true">#</a></h3><p>• <strong>eventSystem</strong>: <a href="./EventSystem.html"><code>EventSystem</code></a></p><p>全局事件处理器</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/Application.ts#L41" target="_blank" rel="noreferrer">core/Application.ts:41</a></p><hr><h3 id="stage" tabindex="-1">stage <a class="header-anchor" href="#stage" aria-hidden="true">#</a></h3><p>• <strong>stage</strong>: <a href="./Transform.html"><code>Transform</code></a>&lt;<a href="./Container.html"><code>Container</code></a>&gt;</p><p>舞台，根节点</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/Application.ts#L36" target="_blank" rel="noreferrer">core/Application.ts:36</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="use" tabindex="-1">use <a class="header-anchor" href="#use" aria-hidden="true">#</a></h3><p>▸ <strong>use</strong>(<code>install</code>): <a href="./Application.html"><code>Application</code></a></p><p>插件拓展<br> 可注入到app</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>install</code></td><td style="text-align:left;">(<code>app</code>: <a href="./Application.html"><code>Application</code></a>) =&gt; <code>void</code></td><td style="text-align:left;">插件入口函数</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./Application.html"><code>Application</code></a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/Application.ts#L70" target="_blank" rel="noreferrer">core/Application.ts:70</a></p><hr><h3 id="run" tabindex="-1">run <a class="header-anchor" href="#run" aria-hidden="true">#</a></h3><p>▸ <code>Static</code> <strong>run</strong>(<code>config?</code>): <a href="./Application.html"><code>Application</code></a></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>Partial</code>&lt;<a href="./../modules.html#options"><code>Options</code></a>&gt;</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><a href="./Application.html"><code>Application</code></a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/Application.ts#L75" target="_blank" rel="noreferrer">core/Application.ts:75</a></p>`,54),l=[r];function o(i,c,p,d,h,f){return t(),a("div",null,l)}const y=e(n,[["render",o]]);export{g as __pageData,y as default};
