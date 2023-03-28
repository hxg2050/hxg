import{_ as e,c as t,o as a,N as o}from"./chunks/framework.2075e729.js";const f=JSON.parse('{"title":"Class: Entiy","description":"","frontmatter":{},"headers":[],"relativePath":"dist/classes/ECS.Entiy.md"}'),r={name:"dist/classes/ECS.Entiy.md"},n=o('<h1 id="class-entiy" tabindex="-1">Class: Entiy <a class="header-anchor" href="#class-entiy" aria-label="Permalink to &quot;Class: Entiy&quot;">​</a></h1><p><a href="./../modules/ECS.html">ECS</a>.Entiy</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./ECS.Entiy.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./ECS.Entiy.html#components">components</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./ECS.Entiy.html#addcomponent">addComponent</a></li><li><a href="./ECS.Entiy.html#getcomponent">getComponent</a></li><li><a href="./ECS.Entiy.html#removecomponent">removeComponent</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new Entiy</strong>(<code>word</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>word</code></td><td style="text-align:left;"><a href="./ECS.Word.html"><code>Word</code></a></td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/ecs/ECS.ts#L28" target="_blank" rel="noreferrer">src/core/ecs/ECS.ts:28</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="components" tabindex="-1">components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;components&quot;">​</a></h3><p>• <strong>components</strong>: typeof <a href="./ECS.Component.html"><code>Component</code></a>[] = <code>[]</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/ecs/ECS.ts#L26" target="_blank" rel="noreferrer">src/core/ecs/ECS.ts:26</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="addcomponent" tabindex="-1">addComponent <a class="header-anchor" href="#addcomponent" aria-label="Permalink to &quot;addComponent&quot;">​</a></h3><p>▸ <strong>addComponent</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./ECS.Component.html"><code>Component</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><code>Constructor</code>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/ecs/ECS.ts#L39" target="_blank" rel="noreferrer">src/core/ecs/ECS.ts:39</a></p><hr><h3 id="getcomponent" tabindex="-1">getComponent <a class="header-anchor" href="#getcomponent" aria-label="Permalink to &quot;getComponent&quot;">​</a></h3><p>▸ <strong>getComponent</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code></p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./ECS.Component.html"><code>Component</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><code>Constructor</code>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/ecs/ECS.ts#L32" target="_blank" rel="noreferrer">src/core/ecs/ECS.ts:32</a></p><hr><h3 id="removecomponent" tabindex="-1">removeComponent <a class="header-anchor" href="#removecomponent" aria-label="Permalink to &quot;removeComponent&quot;">​</a></h3><p>▸ <strong>removeComponent</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>boolean</code></p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./ECS.Component.html"><code>Component</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><code>Constructor</code>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/163805d/src/core/ecs/ECS.ts#L55" target="_blank" rel="noreferrer">src/core/ecs/ECS.ts:55</a></p>',54),d=[n];function l(s,h,c,i,m,p){return a(),t("div",null,d)}const u=e(r,[["render",l]]);export{f as __pageData,u as default};
