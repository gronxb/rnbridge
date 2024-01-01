import{_ as t,c as e,o as d,U as o}from"./chunks/framework.rrjNhaCN.js";const p=JSON.parse('{"title":"linkNativeMethod","description":"","frontmatter":{},"headers":[],"relativePath":"reference/web-link-native-method.md","filePath":"reference/web-link-native-method.md"}'),a={name:"reference/web-link-native-method.md"},i=o('<h1 id="linknativemethod" tabindex="-1">linkNativeMethod <a class="header-anchor" href="#linknativemethod" aria-label="Permalink to &quot;linkNativeMethod&quot;">​</a></h1><p>The <code>linkNativeMethod</code> is used to access methods set up in the React Native bridge.</p><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table><thead><tr><th>Prop</th><th>Type</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>timeout</code></td><td>number</td><td>false</td><td>2000</td><td>Specifies the maximum time (in milliseconds) to wait for a response from the native code before timing out.</td></tr><tr><td><code>throwOnError</code></td><td>boolean</td><td>false</td><td>false</td><td>Determines whether to throw an error if the native method call fails. Default is false.</td></tr><tr><td><code>onFallback</code></td><td>(method: keyof T) =&gt; void</td><td>false</td><td>X</td><td>This event is triggered when a method is executed but not found in native, with the executed method passed as an argument.</td></tr></tbody></table>',4),n=[i];function r(h,s,c,l,m,f){return d(),e("div",null,n)}const u=t(a,[["render",r]]);export{p as __pageData,u as default};