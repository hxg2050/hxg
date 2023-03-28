import{_ as e,c as s,o as a,a as n}from"./app.dba61eb2.js";const y=JSON.parse('{"title":"Class: GroupLoader","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"count","slug":"count","link":"#count","children":[]},{"level":3,"title":"emitter","slug":"emitter","link":"#emitter","children":[]},{"level":3,"title":"index","slug":"index","link":"#index","children":[]},{"level":3,"title":"list","slug":"list","link":"#list","children":[]},{"level":3,"title":"loaded","slug":"loaded","link":"#loaded","children":[]},{"level":3,"title":"workerCount","slug":"workercount","link":"#workercount","children":[]},{"level":3,"title":"Event","slug":"event","link":"#event","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"add","slug":"add","link":"#add","children":[]},{"level":3,"title":"load","slug":"load","link":"#load","children":[]},{"level":3,"title":"start","slug":"start","link":"#start","children":[]}]}],"relativePath":"dist/classes/GroupLoader.md"}'),o={name:"dist/classes/GroupLoader.md"},r=n(`<h1 id="class-grouploader" tabindex="-1">Class: GroupLoader <a class="header-anchor" href="#class-grouploader" aria-hidden="true">#</a></h1><p>资源组加载</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建资源组加载器</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> loader </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GroupLoader</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置最大可同时加载4个</span></span>
<span class="line"><span style="color:#A6ACCD;">loader</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">workerCount </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 监听单个资源加载完成事件</span></span>
<span class="line"><span style="color:#A6ACCD;">loader</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">emitter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(GroupLoader</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">LOADED</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">({</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">count</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">loaded</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">资源加载中:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">loaded</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 监听所有资源加载完成事件</span></span>
<span class="line"><span style="color:#A6ACCD;">loader</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">emitter</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">on</span><span style="color:#A6ACCD;">(GroupLoader</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Event</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">COMPLATE</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">资源加载完成</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置待加载资源列表</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LoadResListConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 只设置路径</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./assets/photo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 设置路径加别名</span></span>
<span class="line"><span style="color:#A6ACCD;">     [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./assets/bmg.mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bgm_mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 加入待加载列表</span></span>
<span class="line"><span style="color:#A6ACCD;">loader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(list)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 开始加载资源</span></span>
<span class="line"><span style="color:#A6ACCD;">loader</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">start</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./GroupLoader.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><ul><li><a href="./GroupLoader.html#count">count</a></li><li><a href="./GroupLoader.html#emitter">emitter</a></li><li><a href="./GroupLoader.html#index">index</a></li><li><a href="./GroupLoader.html#list">list</a></li><li><a href="./GroupLoader.html#loaded">loaded</a></li><li><a href="./GroupLoader.html#workercount">workerCount</a></li><li><a href="./GroupLoader.html#event">Event</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./GroupLoader.html#add">add</a></li><li><a href="./GroupLoader.html#load">load</a></li><li><a href="./GroupLoader.html#start">start</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new GroupLoader</strong>()</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L38" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:38</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><h3 id="count" tabindex="-1">count <a class="header-anchor" href="#count" aria-hidden="true">#</a></h3><p>• <strong>count</strong>: <code>number</code> = <code>0</code></p><p>资源总数</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L57" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:57</a></p><hr><h3 id="emitter" tabindex="-1">emitter <a class="header-anchor" href="#emitter" aria-hidden="true">#</a></h3><p>• <strong>emitter</strong>: <code>StoreEmitter</code>&lt;<code>&quot;loaded&quot;</code> | <code>&quot;complate&quot;</code>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L48" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:48</a></p><hr><h3 id="index" tabindex="-1">index <a class="header-anchor" href="#index" aria-hidden="true">#</a></h3><p>• <strong>index</strong>: <code>number</code> = <code>0</code></p><p>当前处理的位置</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L65" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:65</a></p><hr><h3 id="list" tabindex="-1">list <a class="header-anchor" href="#list" aria-hidden="true">#</a></h3><p>• <strong>list</strong>: <a href="./../modules.html#loadreslistconfig"><code>LoadResListConfig</code></a> = <code>[]</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L37" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:37</a></p><hr><h3 id="loaded" tabindex="-1">loaded <a class="header-anchor" href="#loaded" aria-hidden="true">#</a></h3><p>• <strong>loaded</strong>: <code>number</code> = <code>0</code></p><p>已经加载数量</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L61" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:61</a></p><hr><h3 id="workercount" tabindex="-1">workerCount <a class="header-anchor" href="#workercount" aria-hidden="true">#</a></h3><p>• <strong>workerCount</strong>: <code>number</code> = <code>1</code></p><p>同时加载最大数量</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L53" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:53</a></p><hr><h3 id="event" tabindex="-1">Event <a class="header-anchor" href="#event" aria-hidden="true">#</a></h3><p>▪ <code>Static</code> <strong>Event</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>COMPLATE</code></td><td style="text-align:left;"><code>&quot;complate&quot;</code></td></tr><tr><td style="text-align:left;"><code>LOADED</code></td><td style="text-align:left;"><code>&quot;loaded&quot;</code></td></tr></tbody></table><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L41" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:41</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-hidden="true">#</a></h3><p>▸ <strong>add</strong>(<code>list</code>): <code>void</code></p><p>添加需要加载的资源</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> list</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">LoadResListConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 只设置路径</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./assets/photo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">     </span><span style="color:#676E95;font-style:italic;">// 设置路径加别名</span></span>
<span class="line"><span style="color:#A6ACCD;">     [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./assets/bmg.mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bgm_mp3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>list</code></td><td style="text-align:left;"><a href="./../modules.html#loadreslistconfig"><code>LoadResListConfig</code></a></td><td style="text-align:left;">资源列表</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L117" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:117</a></p><hr><h3 id="load" tabindex="-1">load <a class="header-anchor" href="#load" aria-hidden="true">#</a></h3><p>▸ <strong>load</strong>(): <code>void</code></p><p>顺序加载资源</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L71" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:71</a></p><hr><h3 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-hidden="true">#</a></h3><p>▸ <strong>start</strong>(): <code>void</code></p><p>启动加载</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/1fff1dc/src/core/resource/GroupLoader.ts#L99" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:99</a></p>`,83),t=[r];function l(p,c,d,i,h,D){return a(),s("div",null,t)}const f=e(o,[["render",l]]);export{y as __pageData,f as default};
