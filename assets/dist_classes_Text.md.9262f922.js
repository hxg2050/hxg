import{_ as e,c as t,o as a,a as n}from"./app.f4fb069f.js";const g=JSON.parse('{"title":"Class: Text","description":"","frontmatter":{},"headers":[{"level":2,"title":"Hierarchy","slug":"hierarchy","link":"#hierarchy","children":[]},{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Properties","slug":"properties","link":"#properties","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Properties","slug":"properties-1","link":"#properties-1","children":[{"level":3,"title":"algin","slug":"algin","link":"#algin","children":[]},{"level":3,"title":"autoWarp","slug":"autowarp","link":"#autowarp","children":[]},{"level":3,"title":"bold","slug":"bold","link":"#bold","children":[]},{"level":3,"title":"color","slug":"color","link":"#color","children":[]},{"level":3,"title":"emitter","slug":"emitter","link":"#emitter","children":[]},{"level":3,"title":"fontFamily","slug":"fontfamily","link":"#fontfamily","children":[]},{"level":3,"title":"fontSize","slug":"fontsize","link":"#fontsize","children":[]},{"level":3,"title":"height","slug":"height","link":"#height","children":[]},{"level":3,"title":"id","slug":"id","link":"#id","children":[]},{"level":3,"title":"italic","slug":"italic","link":"#italic","children":[]},{"level":3,"title":"letterPacing","slug":"letterpacing","link":"#letterpacing","children":[]},{"level":3,"title":"lineSpace","slug":"linespace","link":"#linespace","children":[]},{"level":3,"title":"name","slug":"name","link":"#name","children":[]},{"level":3,"title":"node","slug":"node","link":"#node","children":[]},{"level":3,"title":"value","slug":"value","link":"#value","children":[]},{"level":3,"title":"width","slug":"width","link":"#width","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"addComponent","slug":"addcomponent","link":"#addcomponent","children":[]},{"level":3,"title":"destroy","slug":"destroy","link":"#destroy","children":[]},{"level":3,"title":"getComponent","slug":"getcomponent","link":"#getcomponent","children":[]},{"level":3,"title":"getComponents","slug":"getcomponents","link":"#getcomponents","children":[]},{"level":3,"title":"getComponentsInChildren","slug":"getcomponentsinchildren","link":"#getcomponentsinchildren","children":[]},{"level":3,"title":"onDestroy","slug":"ondestroy","link":"#ondestroy","children":[]},{"level":3,"title":"removeAllComponent","slug":"removeallcomponent","link":"#removeallcomponent","children":[]},{"level":3,"title":"removeComponent","slug":"removecomponent","link":"#removecomponent","children":[]},{"level":3,"title":"start","slug":"start","link":"#start","children":[]},{"level":3,"title":"update","slug":"update","link":"#update","children":[]}]}],"relativePath":"dist/classes/Text.md"}'),r={name:"dist/classes/Text.md"},o=n(`<h1 id="class-text" tabindex="-1">Class: Text <a class="header-anchor" href="#class-text" aria-hidden="true">#</a></h1><p>文字显示组件</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 创建一个文字节点</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> node </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Transform</span><span style="color:#A6ACCD;">(Text)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置组件宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">node</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取文字组件</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> text </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> node</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getComponent</span><span style="color:#A6ACCD;">(Text)</span><span style="color:#89DDFF;">!;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置文字间距为5像素</span></span>
<span class="line"><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">letterPacing </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置行间距为5像素</span></span>
<span class="line"><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">lineSpace </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 文字居中显示</span></span>
<span class="line"><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">algin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> TextAlgin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">CENTER</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置要显示的文字内容</span></span>
<span class="line"><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">创建了一个文字组件</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置字体跟随系统</span></span>
<span class="line"><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fontFamily </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">system</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置文字大小</span></span>
<span class="line"><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fontSize </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置文字为斜体</span></span>
<span class="line"><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">italic </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置文字加粗</span></span>
<span class="line"><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bold </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置文字超过宽度后自动换行，前提是设置了节点的宽度</span></span>
<span class="line"><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">autoWarp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 设置文字显示颜色为红色</span></span>
<span class="line"><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">color </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#FF0000</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a></h2><ul><li><p><a href="./Container.html"><code>Container</code></a></p><p>↳ <strong><code>Text</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./Text.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h3><ul><li><a href="./Text.html#algin">algin</a></li><li><a href="./Text.html#autowarp">autoWarp</a></li><li><a href="./Text.html#bold">bold</a></li><li><a href="./Text.html#color">color</a></li><li><a href="./Text.html#emitter">emitter</a></li><li><a href="./Text.html#fontfamily">fontFamily</a></li><li><a href="./Text.html#fontsize">fontSize</a></li><li><a href="./Text.html#height">height</a></li><li><a href="./Text.html#id">id</a></li><li><a href="./Text.html#italic">italic</a></li><li><a href="./Text.html#letterpacing">letterPacing</a></li><li><a href="./Text.html#linespace">lineSpace</a></li><li><a href="./Text.html#name">name</a></li><li><a href="./Text.html#node">node</a></li><li><a href="./Text.html#value">value</a></li><li><a href="./Text.html#width">width</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./Text.html#addcomponent">addComponent</a></li><li><a href="./Text.html#destroy">destroy</a></li><li><a href="./Text.html#getcomponent">getComponent</a></li><li><a href="./Text.html#getcomponents">getComponents</a></li><li><a href="./Text.html#getcomponentsinchildren">getComponentsInChildren</a></li><li><a href="./Text.html#ondestroy">onDestroy</a></li><li><a href="./Text.html#removeallcomponent">removeAllComponent</a></li><li><a href="./Text.html#removecomponent">removeComponent</a></li><li><a href="./Text.html#start">start</a></li><li><a href="./Text.html#update">update</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <strong>new Text</strong>(<code>transform</code>)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>transform</code></td><td style="text-align:left;"><a href="./Transform.html"><code>Transform</code></a>&lt;<a href="./Container.html"><code>Container</code></a>&gt;</td></tr></tbody></table><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#constructor">constructor</a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Container.ts#L5" target="_blank" rel="noreferrer">core/component/Container.ts:5</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-hidden="true">#</a></h2><h3 id="algin" tabindex="-1">algin <a class="header-anchor" href="#algin" aria-hidden="true">#</a></h3><p>• <strong>algin</strong>: <a href="./../enums/TextAlgin.html"><code>TextAlgin</code></a> = <code>TextAlgin.LEFT</code></p><p>水平对齐方式</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L52" target="_blank" rel="noreferrer">core/component/Text.ts:52</a></p><hr><h3 id="autowarp" tabindex="-1">autoWarp <a class="header-anchor" href="#autowarp" aria-hidden="true">#</a></h3><p>• <strong>autoWarp</strong>: <code>boolean</code> = <code>false</code></p><p>是否自动换行<br> 前提条件，设置了宽度，如果没设置宽度自动换行将不生效</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L75" target="_blank" rel="noreferrer">core/component/Text.ts:75</a></p><hr><h3 id="bold" tabindex="-1">bold <a class="header-anchor" href="#bold" aria-hidden="true">#</a></h3><p>• <strong>bold</strong>: <code>boolean</code> = <code>false</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L70" target="_blank" rel="noreferrer">core/component/Text.ts:70</a></p><hr><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-hidden="true">#</a></h3><p>• <strong>color</strong>: <code>string</code> = <code>&#39;#000000&#39;</code></p><p>文字颜色</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L79" target="_blank" rel="noreferrer">core/component/Text.ts:79</a></p><hr><h3 id="emitter" tabindex="-1">emitter <a class="header-anchor" href="#emitter" aria-hidden="true">#</a></h3><p>• <strong>emitter</strong>: <a href="./Emitter.html"><code>Emitter</code></a>&lt;<code>string</code>&gt;</p><p>事件处理器</p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#emitter">emitter</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L27" target="_blank" rel="noreferrer">core/component/Component.ts:27</a></p><hr><h3 id="fontfamily" tabindex="-1">fontFamily <a class="header-anchor" href="#fontfamily" aria-hidden="true">#</a></h3><p>• <strong>fontFamily</strong>: <code>string</code> = <code>&#39;Arial&#39;</code></p><p>字体</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L60" target="_blank" rel="noreferrer">core/component/Text.ts:60</a></p><hr><h3 id="fontsize" tabindex="-1">fontSize <a class="header-anchor" href="#fontsize" aria-hidden="true">#</a></h3><p>• <strong>fontSize</strong>: <code>number</code> = <code>14</code></p><p>字体大小</p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L64" target="_blank" rel="noreferrer">core/component/Text.ts:64</a></p><hr><h3 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-hidden="true">#</a></h3><p>• <strong>height</strong>: <code>number</code> = <code>0</code></p><p>记录文本实际高度,需要动态计算</p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L88" target="_blank" rel="noreferrer">core/component/Text.ts:88</a></p><hr><h3 id="id" tabindex="-1">id <a class="header-anchor" href="#id" aria-hidden="true">#</a></h3><p>• <strong>id</strong>: <code>number</code></p><p>用于表示组件的唯一标识</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#id">id</a></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L12" target="_blank" rel="noreferrer">core/component/Component.ts:12</a></p><hr><h3 id="italic" tabindex="-1">italic <a class="header-anchor" href="#italic" aria-hidden="true">#</a></h3><p>• <strong>italic</strong>: <code>boolean</code> = <code>false</code></p><p>斜体</p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L68" target="_blank" rel="noreferrer">core/component/Text.ts:68</a></p><hr><h3 id="letterpacing" tabindex="-1">letterPacing <a class="header-anchor" href="#letterpacing" aria-hidden="true">#</a></h3><p>• <strong>letterPacing</strong>: <code>number</code> = <code>0</code></p><p>字间距</p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L44" target="_blank" rel="noreferrer">core/component/Text.ts:44</a></p><hr><h3 id="linespace" tabindex="-1">lineSpace <a class="header-anchor" href="#linespace" aria-hidden="true">#</a></h3><p>• <strong>lineSpace</strong>: <code>number</code> = <code>0</code></p><p>行间距</p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L48" target="_blank" rel="noreferrer">core/component/Text.ts:48</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-hidden="true">#</a></h3><p>• <strong>name</strong>: <code>string</code> = <code>&#39;&#39;</code></p><p>组件名</p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#name">name</a></p><h4 id="defined-in-13" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-13" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L17" target="_blank" rel="noreferrer">core/component/Component.ts:17</a></p><hr><h3 id="node" tabindex="-1">node <a class="header-anchor" href="#node" aria-hidden="true">#</a></h3><p>• <strong>node</strong>: <a href="./Transform.html"><code>Transform</code></a>&lt;<a href="./Container.html"><code>Container</code></a>&gt;</p><p>组件挂载节点</p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#node">node</a></p><h4 id="defined-in-14" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-14" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L22" target="_blank" rel="noreferrer">core/component/Component.ts:22</a></p><hr><h3 id="value" tabindex="-1">value <a class="header-anchor" href="#value" aria-hidden="true">#</a></h3><p>• <strong>value</strong>: <code>string</code> = <code>&#39;&#39;</code></p><p>文字内容</p><h4 id="defined-in-15" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-15" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L56" target="_blank" rel="noreferrer">core/component/Text.ts:56</a></p><hr><h3 id="width" tabindex="-1">width <a class="header-anchor" href="#width" aria-hidden="true">#</a></h3><p>• <strong>width</strong>: <code>number</code> = <code>0</code></p><p>记录文本实际宽度,需要动态计算</p><h4 id="defined-in-16" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-16" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Text.ts#L84" target="_blank" rel="noreferrer">core/component/Text.ts:84</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="addcomponent" tabindex="-1">addComponent <a class="header-anchor" href="#addcomponent" aria-hidden="true">#</a></h3><p>▸ <strong>addComponent</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code></p><p>添加一个组件</p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./Component.html"><code>Component</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">要挂载的组件</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><code>T</code></p><h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#addcomponent">addComponent</a></p><h4 id="defined-in-17" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-17" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L60" target="_blank" rel="noreferrer">core/component/Component.ts:60</a></p><hr><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-hidden="true">#</a></h3><p>▸ <strong>destroy</strong>(): <code>void</code></p><p>消毁</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#destroy">destroy</a></p><h4 id="defined-in-18" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-18" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L106" target="_blank" rel="noreferrer">core/component/Component.ts:106</a></p><hr><h3 id="getcomponent" tabindex="-1">getComponent <a class="header-anchor" href="#getcomponent" aria-hidden="true">#</a></h3><p>▸ <strong>getComponent</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code></p><p>获取单个组件，获取首个匹配到的组件</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">extends <a href="./Component.html"><code>Component</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">组件</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><code>T</code></p><h4 id="inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-7" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#getcomponent">getComponent</a></p><h4 id="defined-in-19" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-19" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L83" target="_blank" rel="noreferrer">core/component/Component.ts:83</a></p><hr><h3 id="getcomponents" tabindex="-1">getComponents <a class="header-anchor" href="#getcomponents" aria-hidden="true">#</a></h3><p>▸ <strong>getComponents</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code>[]</p><p>获取所有组件</p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">组件</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><code>T</code>[]</p><h4 id="inherited-from-8" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-8" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#getcomponents">getComponents</a></p><h4 id="defined-in-20" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-20" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L91" target="_blank" rel="noreferrer">core/component/Component.ts:91</a></p><hr><h3 id="getcomponentsinchildren" tabindex="-1">getComponentsInChildren <a class="header-anchor" href="#getcomponentsinchildren" aria-hidden="true">#</a></h3><p>▸ <strong>getComponentsInChildren</strong>&lt;<code>T</code>&gt;(<code>classConstructor</code>): <code>T</code>[]</p><p>从子节点获取所有组件，不会包含当前节点</p><h4 id="type-parameters-3" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-3" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>classConstructor</code></td><td style="text-align:left;"><a href="./../modules.html#constructor"><code>Constructor</code></a>&lt;<code>T</code>&gt;</td><td style="text-align:left;">组件</td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><code>T</code>[]</p><h4 id="inherited-from-9" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-9" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#getcomponentsinchildren">getComponentsInChildren</a></p><h4 id="defined-in-21" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-21" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L99" target="_blank" rel="noreferrer">core/component/Component.ts:99</a></p><hr><h3 id="ondestroy" tabindex="-1">onDestroy <a class="header-anchor" href="#ondestroy" aria-hidden="true">#</a></h3><p>▸ <strong>onDestroy</strong>(): <code>void</code></p><p>组件被销毁时触发</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="inherited-from-10" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-10" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#ondestroy">onDestroy</a></p><h4 id="defined-in-22" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-22" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L113" target="_blank" rel="noreferrer">core/component/Component.ts:113</a></p><hr><h3 id="removeallcomponent" tabindex="-1">removeAllComponent <a class="header-anchor" href="#removeallcomponent" aria-hidden="true">#</a></h3><p>▸ <strong>removeAllComponent</strong>(): <code>void</code></p><p>移除所有组件</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="inherited-from-11" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-11" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#removeallcomponent">removeAllComponent</a></p><h4 id="defined-in-23" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-23" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L75" target="_blank" rel="noreferrer">core/component/Component.ts:75</a></p><hr><h3 id="removecomponent" tabindex="-1">removeComponent <a class="header-anchor" href="#removecomponent" aria-hidden="true">#</a></h3><p>▸ <strong>removeComponent</strong>(<code>component</code>): <code>void</code></p><p>移除一个组件</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>component</code></td><td style="text-align:left;"><a href="./Component.html"><code>Component</code></a></td><td style="text-align:left;">将要移除的组件</td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="inherited-from-12" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-12" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#removecomponent">removeComponent</a></p><h4 id="defined-in-24" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-24" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L68" target="_blank" rel="noreferrer">core/component/Component.ts:68</a></p><hr><h3 id="start" tabindex="-1">start <a class="header-anchor" href="#start" aria-hidden="true">#</a></h3><p>▸ <strong>start</strong>(): <code>void</code></p><p>组件被挂载到节点时触发</p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="inherited-from-13" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-13" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#start">start</a></p><h4 id="defined-in-25" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-25" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/BaseContainer.ts#L11" target="_blank" rel="noreferrer">core/component/BaseContainer.ts:11</a></p><hr><h3 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-hidden="true">#</a></h3><p>▸ <strong>update</strong>(<code>time</code>): <code>void</code></p><p>每帧调用</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>time</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">和上一帧的间隔时间 ms</td></tr></tbody></table><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-hidden="true">#</a></h4><p><code>void</code></p><h4 id="inherited-from-14" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-14" aria-hidden="true">#</a></h4><p><a href="./Container.html">Container</a>.<a href="./Container.html#update">update</a></p><h4 id="defined-in-26" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-26" aria-hidden="true">#</a></h4><p><a href="https://github.com/hxg2050/hxg/blob/99c2c58/src/core/component/Component.ts#L52" target="_blank" rel="noreferrer">core/component/Component.ts:52</a></p>`,244),s=[o];function l(i,d,h,c,p,f){return a(),t("div",null,s)}const u=e(r,[["render",l]]);export{g as __pageData,u as default};