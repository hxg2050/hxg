import{_ as e,c as t,o as a,N as l}from"./chunks/framework.0799945b.js";const u=JSON.parse('{"title":"hxg","description":"","frontmatter":{},"headers":[],"relativePath":"dist/modules.md"}'),o={name:"dist/modules.md"},r=l(`<h1 id="hxg" tabindex="-1">hxg <a class="header-anchor" href="#hxg" aria-label="Permalink to &quot;hxg&quot;">​</a></h1><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="enumerations" tabindex="-1">Enumerations <a class="header-anchor" href="#enumerations" aria-label="Permalink to &quot;Enumerations&quot;">​</a></h3><ul><li><a href="./enums/TextAlgin.html">TextAlgin</a></li><li><a href="./enums/TouchEvent.html">TouchEvent</a></li></ul><h3 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to &quot;Classes&quot;">​</a></h3><ul><li><a href="./classes/Animation.html">Animation</a></li><li><a href="./classes/Application.html">Application</a></li><li><a href="./classes/Audio.html">Audio</a></li><li><a href="./classes/AudioLoader.html">AudioLoader</a></li><li><a href="./classes/BaseContainer.html">BaseContainer</a></li><li><a href="./classes/BaseTexture.html">BaseTexture</a></li><li><a href="./classes/Button.html">Button</a></li><li><a href="./classes/Component.html">Component</a></li><li><a href="./classes/Container.html">Container</a></li><li><a href="./classes/EventSystem.html">EventSystem</a></li><li><a href="./classes/Graphics.html">Graphics</a></li><li><a href="./classes/GroupLoader.html">GroupLoader</a></li><li><a href="./classes/ImageLoader.html">ImageLoader</a></li><li><a href="./classes/JsonLoader.html">JsonLoader</a></li><li><a href="./classes/Layout.html">Layout</a></li><li><a href="./classes/Mask.html">Mask</a></li><li><a href="./classes/Matrix.html">Matrix</a></li><li><a href="./classes/NinePanel.html">NinePanel</a></li><li><a href="./classes/Node.html">Node</a></li><li><a href="./classes/Rect.html">Rect</a></li><li><a href="./classes/Renderer.html">Renderer</a></li><li><a href="./classes/Resource.html">Resource</a></li><li><a href="./classes/Sprite.html">Sprite</a></li><li><a href="./classes/SpriteSheet.html">SpriteSheet</a></li><li><a href="./classes/SpriteSheetAnimation.html">SpriteSheetAnimation</a></li><li><a href="./classes/Text.html">Text</a></li><li><a href="./classes/Texture.html">Texture</a></li><li><a href="./classes/Thing.html">Thing</a></li><li><a href="./classes/Ticker.html">Ticker</a></li><li><a href="./classes/Transform.html">Transform</a></li><li><a href="./classes/Vector2.html">Vector2</a></li></ul><h3 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h3><ul><li><a href="./interfaces/IComponent.html">IComponent</a></li><li><a href="./interfaces/IContainer.html">IContainer</a></li><li><a href="./interfaces/ILoader.html">ILoader</a></li><li><a href="./interfaces/IRes.html">IRes</a></li></ul><h3 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h3><ul><li><a href="./modules.html#atlasframe">AtlasFrame</a></li><li><a href="./modules.html#constructor">Constructor</a></li><li><a href="./modules.html#loadoptions">LoadOptions</a></li><li><a href="./modules.html#loadreslistconfig">LoadResListConfig</a></li><li><a href="./modules.html#options">Options</a></li><li><a href="./modules.html#sheetframes">SheetFrames</a></li><li><a href="./modules.html#textureresource">TextureResource</a></li><li><a href="./modules.html#transformevent">TransformEvent</a></li></ul><h3 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h3><ul><li><a href="./modules.html#ticker">ticker</a></li></ul><h3 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h3><ul><li><a href="./modules.html#canvas2d">canvas2d</a></li><li><a href="./modules.html#ishitpoint">isHitPoint</a></li><li><a href="./modules.html#request">request</a></li><li><a href="./modules.html#toucheventlistener">touchEventListener</a></li></ul><h2 id="type-aliases-1" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases-1" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="atlasframe" tabindex="-1">AtlasFrame <a class="header-anchor" href="#atlasframe" aria-label="Permalink to &quot;AtlasFrame&quot;">​</a></h3><p>Ƭ <strong>AtlasFrame</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>frame</code></td><td style="text-align:left;">{ <code>h</code>: <code>number</code> ; <code>w</code>: <code>number</code> ; <code>x</code>: <code>number</code> ; <code>y</code>: <code>number</code> }</td><td style="text-align:left;">原图裁剪参数</td></tr><tr><td style="text-align:left;"><code>frame.h</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>frame.w</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>frame.x</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>frame.y</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>pivot</code></td><td style="text-align:left;">{ <code>x</code>: <code>number</code> ; <code>y</code>: <code>number</code> }</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>pivot.x</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>pivot.y</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>rotated</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>sourceSize</code></td><td style="text-align:left;">{ <code>h</code>: <code>number</code> ; <code>w</code>: <code>number</code> }</td><td style="text-align:left;">即将渲染的画布尺寸(不确定)</td></tr><tr><td style="text-align:left;"><code>sourceSize.h</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>sourceSize.w</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>spriteSourceSize</code></td><td style="text-align:left;">{ <code>h</code>: <code>number</code> ; <code>w</code>: <code>number</code> ; <code>x</code>: <code>number</code> ; <code>y</code>: <code>number</code> }</td><td style="text-align:left;">裁剪后的修正尺寸(放到即将渲染的画布的实际位置和尺寸)（不确定）</td></tr><tr><td style="text-align:left;"><code>spriteSourceSize.h</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>spriteSourceSize.w</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>spriteSourceSize.x</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>spriteSourceSize.y</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/component/SpriteSheet.ts#L8" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:8</a></p><hr><h3 id="constructor" tabindex="-1">Constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;Constructor&quot;">​</a></h3><p>Ƭ <strong>Constructor</strong>&lt;<code>T</code>&gt;: (...<code>args</code>: <code>any</code>[]) =&gt; <code>T</code></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><p>• (<code>...args</code>)</p><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>any</code>[]</td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/transform/Transform.ts#L8" target="_blank" rel="noreferrer">src/core/transform/Transform.ts:8</a></p><hr><h3 id="loadoptions" tabindex="-1">LoadOptions <a class="header-anchor" href="#loadoptions" aria-label="Permalink to &quot;LoadOptions&quot;">​</a></h3><p>Ƭ <strong>LoadOptions</strong>: <code>Object</code></p><p>资源加载参数</p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>loader?</code></td><td style="text-align:left;"><a href="./interfaces/ILoader.html"><code>ILoader</code></a></td><td style="text-align:left;">当前资源的独特加载器</td></tr><tr><td style="text-align:left;"><code>type</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">类型</td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/resource/Resource.ts#L19" target="_blank" rel="noreferrer">src/core/resource/Resource.ts:19</a></p><hr><h3 id="loadreslistconfig" tabindex="-1">LoadResListConfig <a class="header-anchor" href="#loadreslistconfig" aria-label="Permalink to &quot;LoadResListConfig&quot;">​</a></h3><p>Ƭ <strong>LoadResListConfig</strong>: (<code>string</code> | [<code>string</code>, <code>string</code>])[]</p><p>资源列表</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/resource/GroupLoader.ts#L7" target="_blank" rel="noreferrer">src/core/resource/GroupLoader.ts:7</a></p><hr><h3 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h3><p>Ƭ <strong>Options</strong>: <code>Partial</code>&lt;{ <code>height</code>: <code>number</code> ; <code>width</code>: <code>number</code> }&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/Application.ts#L5" target="_blank" rel="noreferrer">src/core/Application.ts:5</a></p><hr><h3 id="sheetframes" tabindex="-1">SheetFrames <a class="header-anchor" href="#sheetframes" aria-label="Permalink to &quot;SheetFrames&quot;">​</a></h3><p>Ƭ <strong>SheetFrames</strong>: <code>Object</code></p><h4 id="type-declaration-3" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-3" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>animations</code></td><td style="text-align:left;">{ <code>Attack</code>: <code>string</code>[] }</td></tr><tr><td style="text-align:left;"><code>animations.Attack</code></td><td style="text-align:left;"><code>string</code>[]</td></tr><tr><td style="text-align:left;"><code>frames</code></td><td style="text-align:left;"><code>Record</code>&lt;<code>string</code>, <a href="./modules.html#atlasframe"><code>AtlasFrame</code></a>&gt;</td></tr><tr><td style="text-align:left;"><code>meta</code></td><td style="text-align:left;">{ <code>app</code>: <code>string</code> ; <code>format</code>: <code>string</code> ; <code>image</code>: <code>string</code> ; <code>scale</code>: <code>number</code> ; <code>size</code>: { <code>h</code>: <code>number</code> ; <code>w</code>: <code>number</code> } ; <code>version</code>: <code>string</code> }</td></tr><tr><td style="text-align:left;"><code>meta.app</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>meta.format</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>meta.image</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>meta.scale</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>meta.size</code></td><td style="text-align:left;">{ <code>h</code>: <code>number</code> ; <code>w</code>: <code>number</code> }</td></tr><tr><td style="text-align:left;"><code>meta.size.h</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>meta.size.w</code></td><td style="text-align:left;"><code>number</code></td></tr><tr><td style="text-align:left;"><code>meta.version</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/component/SpriteSheet.ts#L43" target="_blank" rel="noreferrer">src/core/component/SpriteSheet.ts:43</a></p><hr><h3 id="textureresource" tabindex="-1">TextureResource <a class="header-anchor" href="#textureresource" aria-label="Permalink to &quot;TextureResource&quot;">​</a></h3><p>Ƭ <strong>TextureResource</strong>: <code>HTMLImageElement</code> | <code>HTMLCanvasElement</code> | <code>ImageBitmap</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/texture/Texture.ts#L4" target="_blank" rel="noreferrer">src/core/texture/Texture.ts:4</a></p><hr><h3 id="transformevent" tabindex="-1">TransformEvent <a class="header-anchor" href="#transformevent" aria-label="Permalink to &quot;TransformEvent&quot;">​</a></h3><p>Ƭ <strong>TransformEvent</strong>: <code>ValueOf</code>&lt;typeof <a href="./classes/Transform.html#event"><code>Event</code></a>&gt; | \`\${TouchEvent}\`</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/transform/Transform.ts#L9" target="_blank" rel="noreferrer">src/core/transform/Transform.ts:9</a></p><h2 id="variables-1" tabindex="-1">Variables <a class="header-anchor" href="#variables-1" aria-label="Permalink to &quot;Variables&quot;">​</a></h2><h3 id="ticker" tabindex="-1">ticker <a class="header-anchor" href="#ticker" aria-label="Permalink to &quot;ticker&quot;">​</a></h3><p>• <code>Const</code> <strong>ticker</strong>: <a href="./classes/Ticker.html"><code>Ticker</code></a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/ticker/Ticker.ts#L91" target="_blank" rel="noreferrer">src/core/ticker/Ticker.ts:91</a></p><h2 id="functions-1" tabindex="-1">Functions <a class="header-anchor" href="#functions-1" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="canvas2d" tabindex="-1">canvas2d <a class="header-anchor" href="#canvas2d" aria-label="Permalink to &quot;canvas2d&quot;">​</a></h3><p>▸ <strong>canvas2d</strong>(<code>canvas</code>): (<code>app</code>: <a href="./classes/Application.html"><code>Application</code></a>) =&gt; <code>void</code></p><p>canvas2d相关工作</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>canvas</code></td><td style="text-align:left;"><code>HTMLCanvasElement</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>fn</code></p><p>▸ (<code>app</code>): <code>void</code></p><h5 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>app</code></td><td style="text-align:left;"><a href="./classes/Application.html"><code>Application</code></a></td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/canvas2d/index.ts#L23" target="_blank" rel="noreferrer">src/core/canvas2d/index.ts:23</a></p><hr><h3 id="ishitpoint" tabindex="-1">isHitPoint <a class="header-anchor" href="#ishitpoint" aria-label="Permalink to &quot;isHitPoint&quot;">​</a></h3><p>▸ <strong>isHitPoint</strong>(<code>point</code>, <code>transform</code>): <code>boolean</code></p><p>判断点是否落在某个tansform区域</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建节点</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Transform</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置位置</span></span>
<span class="line"><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">position</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置大小</span></span>
<span class="line"><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 插入到舞台</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">stage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addChild</span><span style="color:#A6ACCD;">(node)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 落点判定</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> isHit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">isHitPoint</span><span style="color:#A6ACCD;">(node</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">isHit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> isHit)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>point</code></td><td style="text-align:left;"><a href="./classes/Vector2.html"><code>Vector2</code></a></td><td style="text-align:left;">要判断的点</td></tr><tr><td style="text-align:left;"><code>transform</code></td><td style="text-align:left;"><a href="./classes/Transform.html"><code>Transform</code></a>&lt;<a href="./classes/Container.html"><code>Container</code></a>&gt;</td><td style="text-align:left;">节点位置信息</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/utils/hitTest.ts#L23" target="_blank" rel="noreferrer">src/core/utils/hitTest.ts:23</a></p><hr><h3 id="request" tabindex="-1">request <a class="header-anchor" href="#request" aria-label="Permalink to &quot;request&quot;">​</a></h3><p>▸ <strong>request</strong>(<code>url</code>): <code>Promise</code>&lt;<code>XMLHttpRequest</code>&gt;</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>url</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>XMLHttpRequest</code>&gt;</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/utils/request.ts#L1" target="_blank" rel="noreferrer">src/core/utils/request.ts:1</a></p><hr><h3 id="toucheventlistener" tabindex="-1">touchEventListener <a class="header-anchor" href="#toucheventlistener" aria-label="Permalink to &quot;touchEventListener&quot;">​</a></h3><p>▸ <strong>touchEventListener</strong>(<code>canvas</code>): (<code>app</code>: <a href="./classes/Application.html"><code>Application</code></a>) =&gt; <code>void</code></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>canvas</code></td><td style="text-align:left;"><code>HTMLCanvasElement</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>fn</code></p><p>▸ (<code>app</code>): <code>void</code></p><h5 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>app</code></td><td style="text-align:left;"><a href="./classes/Application.html"><code>Application</code></a></td></tr></tbody></table><h5 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/29d888a/src/core/event/touchEventListener.ts#L39" target="_blank" rel="noreferrer">src/core/event/touchEventListener.ts:39</a></p>`,122),s=[r];function n(d,i,c,h,p,f){return a(),t("div",null,s)}const y=e(o,[["render",n]]);export{u as __pageData,y as default};
