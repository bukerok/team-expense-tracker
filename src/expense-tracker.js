function t(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const e=new WeakMap,s=t=>"function"==typeof t&&e.has(t),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},r={},a={},o=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${o}--\x3e`,p=new RegExp(`${o}|${l}`);class c{constructor(t,e){this.parts=[],this.element=e;const s=[],i=[],n=document.createTreeWalker(e.content,133,null,!1);let r=0,a=-1,l=0;const{strings:c,values:{length:h}}=t;for(;l<h;){const t=n.nextNode();if(null!==t){if(a++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)d(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=c[l],s=g.exec(e)[2],i=s.toLowerCase()+"$lit$",n=t.getAttribute(i);t.removeAttribute(i);const r=n.split(p);this.parts.push({type:"attribute",index:a,name:s,strings:r}),l+=r.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(o)>=0){const i=t.parentNode,n=e.split(p),r=n.length-1;for(let e=0;e<r;e++){let s,r=n[e];if(""===r)s=u();else{const t=g.exec(r);null!==t&&d(t[2],"$lit$")&&(r=r.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),s=document.createTextNode(r)}i.insertBefore(s,t),this.parts.push({type:"node",index:++a})}""===n[r]?(i.insertBefore(u(),t),s.push(t)):t.data=n[r],l+=r}}else if(8===t.nodeType)if(t.data===o){const e=t.parentNode;null!==t.previousSibling&&a!==r||(a++,e.insertBefore(u(),t)),r=a,this.parts.push({type:"node",index:a}),null===t.nextSibling?t.data="":(s.push(t),a--),l++}else{let e=-1;for(;-1!==(e=t.data.indexOf(o,e+1));)this.parts.push({type:"node",index:-1}),l++}}else n.currentNode=i.pop()}for(const t of s)t.parentNode.removeChild(t)}}const d=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},h=t=>-1!==t.index,u=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class m{constructor(t,e,s){this.__parts=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.__parts)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],s=this.template.parts,n=document.createTreeWalker(t,133,null,!1);let r,a=0,o=0,l=n.nextNode();for(;a<s.length;)if(r=s[a],h(r)){for(;o<r.index;)o++,"TEMPLATE"===l.nodeName&&(e.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=e.pop(),l=n.nextNode());if("node"===r.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));a++}else this.__parts.push(void 0),a++;return i&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const _=` ${o} `;class x{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",s=!1;for(let i=0;i<t;i++){const t=this.strings[i],n=t.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===t.indexOf("--\x3e",n+1);const r=g.exec(t);e+=null===r?t+(s?_:l):t.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+o}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const f=t=>null===t||!("object"==typeof t||"function"==typeof t),y=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class v{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new b(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(f(t)||!y(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===r||f(t)&&t===this.value||(this.value=t,s(t)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const t=this.value;this.value=r,t(this)}this.value!==r&&this.committer.commit()}}class w{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(u()),this.endNode=t.appendChild(u())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=u()),t.__insert(this.endNode=u())}insertAfterPart(t){t.__insert(this.startNode=u()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}const t=this.__pendingValue;t!==r&&(f(t)?t!==this.value&&this.__commitText(t):t instanceof x?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):y(t)?this.__commitIterable(t):t===a?(this.value=a,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.__commitNode(document.createTextNode(s)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===e)this.value.update(t.values);else{const s=new m(e,t.processor,this.options),i=s._clone();s.update(t.values),this.__commitNode(i),this.value=s}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new w(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class S{constructor(t,e,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=r}}class C extends v{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends b{}let P=!1;try{const t={get capture(){return P=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class E{constructor(t,e,s){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;s(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=r,t(this)}if(this.__pendingValue===r)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),n=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=A(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=r}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(P?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const T=new class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new C(t,e.slice(1),s).parts}return"@"===n?[new E(t,e.slice(1),i.eventContext)]:"?"===n?[new S(t,e.slice(1),s)]:new v(t,e,s).parts}handleTextExpression(t){return new w(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function $(t){let e=k.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},k.set(t.type,e));let s=e.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(o);return s=e.keyString.get(i),void 0===s&&(s=new c(t,t.getTemplateElement()),e.keyString.set(i,s)),e.stringsArray.set(t.strings,s),s}const k=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const V=(t,...e)=>new x(t,e,"html",T)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function B(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let r=R(i),a=i[r],o=-1,l=0;const p=[];let c=null;for(;n.nextNode();){o++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),e.has(t)&&(p.push(t),null===c&&(c=t)),null!==c&&l++;void 0!==a&&a.index===o;)a.index=null!==c?-1:a.index-l,r=R(i,r),a=i[r]}p.forEach(t=>t.parentNode.removeChild(t))}const M=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},R=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(h(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const U=(t,e)=>`${t}--${e}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const z=t=>e=>{const s=U(e.type,t);let i=k.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},k.set(s,i));let n=i.stringsArray.get(e.strings);if(void 0!==n)return n;const r=e.strings.join(o);if(n=i.keyString.get(r),void 0===n){const s=e.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(s,t),n=new c(e,s),i.keyString.set(r,n)}return i.stringsArray.set(e.strings,n),n},L=["html","svg"],j=new Set,q=(t,e,s)=>{j.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,t);const a=document.createElement("style");for(let t=0;t<r;t++){const e=n[t];e.parentNode.removeChild(e),a.textContent+=e.textContent}(t=>{L.forEach(e=>{const s=k.get(U(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),B(t,s)})})})(t);const o=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const r=document.createTreeWalker(i,133,null,!1);let a=R(n),o=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===s&&(o=M(e),s.parentNode.insertBefore(e,s));-1!==a&&n[a].index===l;){if(o>0){for(;-1!==a;)n[a].index+=o,a=R(n,a);return}a=R(n,a)}}}(s,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(s){o.insertBefore(a,o.firstChild);const t=new Set;t.add(a),B(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const I={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},F=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:F},J=Promise.resolve(!0);class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=J,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[s]},set(e){const i=this[t];this[s]=e,this._requestUpdate(t,i)},configurable:!0,enumerable:!0})}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=F){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||I,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||I.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=H){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s._classProperties.get(i)||H;this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i._classProperties.get(t)||H;i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){let t,e;this._updateState=4|this._updateState;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{t=s,e=i});try{await s}catch(t){}this._hasConnected||await new Promise(t=>this._hasConnectedResolver=t);try{const t=this.performUpdate();null!=t&&await t}catch(t){e(t)}t(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t&&this.update(e)}catch(e){throw t=!1,e}finally{this._markUpdated()}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0)}updated(t){}firstUpdated(t){}}W.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const G="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const X=(t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof Q)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new Q(s,K)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const Y=t=>t.flat?t.flat(1/0):function t(e,s=[]){for(let i=0,n=e.length;i<n;i++){const n=e[i];Array.isArray(n)?t(n,s):s.push(n)}return s}(t);class Z extends W{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const t=this.styles,e=[];if(Array.isArray(t)){Y(t).reduceRight((t,e)=>(t.add(e),t),new Set).forEach(t=>e.unshift(t))}else t&&e.push(t);return e}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){super.update(t);const e=this.render();e instanceof x&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){}}Z.finalized=!0,Z.render=(t,e,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,r=O.has(e),a=D&&11===e.nodeType&&!!e.host,o=a&&!j.has(i),l=o?document.createDocumentFragment():e;if(((t,e,s)=>{let i=O.get(e);void 0===i&&(n(e,e.firstChild),O.set(e,i=new w(Object.assign({templateFactory:$},s))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:z(i)},s)),o){const t=O.get(l);O.delete(l);const s=t.value instanceof m?t.value.template:void 0;q(i,l,s),n(e,e.firstChild),e.appendChild(l),O.set(e,t)}!r&&a&&window.ShadyCSS.styleElement(e.host)};customElements.define("expense-input",class extends Z{constructor(...e){super(...e),t(this,"users",[]),t(this,"rounding",.5),t(this,"additionalData",[]),t(this,"resultData",{})}static get properties(){return{users:{type:Array},rounding:{type:Number}}}static get styles(){return X`
      .wrapper {
        display: flex;
        flex-direction: column;
      }

      .table {
        margin-bottom: 16px;
        border-collapse: collapse;
      }

      .table__head {
        border-bottom: 2px solid #BDBDBD;
      }

      .header-cell {
        padding: 8px 0;
      }

      .row {
        border-bottom: 1px solid #BDBDBD;
      }

      .cell {
        padding: 2px 0;
        text-align: center;
      }

      .cell__name {
        text-align: left;
      }

      .checkbox {
        width: 20px;
        height: 20px;
      }

      .number-input {
        width: 50px;
        height: 20px;
        text-align: center;
      }

      .submit {
        height: 30px;
        background-color: white;
        border: none;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
          rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
        cursor: pointer;
      }
    `}render(){return V`
      <div class="wrapper">
        <table class="table">
          <thead class="table__head">
            <tr>
              <th class="header-cell">User</th>
              <th class="header-cell">Joined</th>
              <th class="header-cell">Paid</th>
              <th class="header-cell">Result</th>
            </tr>
          </thead>
          <tbody @change="${this.inputChangeListener}">
            ${this.users.map(({name:t})=>V`
                <tr class="row">
                  <td class="cell__name">${t}</td>
                  <td class="cell">
                    <input
                      data-type="participated"
                      data-id="${t}"
                      type="checkbox"
                      class="checkbox"
                    >
                    </td>
                  <td class="cell">
                    <input
                      data-type="paid"
                      data-id="${t}"
                      type="number"
                      class="number-input"
                    >
                  </td>
                  <td class="cell">${this.resultData[t]}</td>
                </tr>
              `)}
          </tbody>
        </table>
        <button
          class="submit"
          @click="${this.logListener}"
        >Add</button>
      </div>
    `}inputChangeListener(t){const{dataset:e}=t.target;let s,i=this.additionalData.find(t=>t.id===e.id);i||(i={id:e.id,[e.type]:s},this.additionalData.push(i)),"participated"===e.type?s=t.target.checked:"paid"===e.type&&(s=+t.target.value),i[e.type]=s,this.updateResult()}logListener(){const t=Object.keys(this.resultData).map(t=>[t,this.resultData[t]]).filter(([,t])=>!!t);0!==t.length&&(this.dispatchEvent(new CustomEvent("expense-log",{bubbles:!0,composed:!0,detail:{participants:t}})),this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach(t=>{t.checked=!1}),this.shadowRoot.querySelectorAll('input[type="number"]').forEach(t=>{t.value=""}),this.resultData={},this.additionalData=[],this.requestUpdate())}updateResult(){let t=0,e=0;this.additionalData.forEach(({paid:s,participated:i})=>{s&&(t+=s),i&&(e+=1)});let s=t/e;0!==this.rounding&&(s=Math.ceil(s/this.rounding)*this.rounding),this.additionalData.forEach(({id:t,paid:e=0,participated:i})=>{let n=e;i&&(n-=s),this.resultData[t]=n||void 0}),this.requestUpdate()}});
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const tt=new WeakMap,et=(st=t=>e=>{if(!(e instanceof b)||e instanceof N||"class"!==e.committer.name||e.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:s}=e,{element:i}=s;tt.has(e)||(i.className=s.strings.join(" "));const{classList:n}=i,r=tt.get(e);for(const e in r)e in t||n.remove(e);for(const e in t){const s=t[e];r&&s===r[e]||n[s?"add":"remove"](e)}tt.set(e,t)},(...t)=>{const s=st(...t);return e.set(s,!0),s});var st;customElements.define("expense-logs",class extends Z{static get properties(){return{logs:{type:Array}}}static get styles(){return X`
      p {
        margin: 0;
      }

      .logs {
        list-style-type: none;
        margin: 0;
        padding: 8px;
      }

      .log-item {
        padding: 16px;
        margin-bottom: 8px;
        border-radius: 4px;
        background-color: white;
        box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
          0px 1px 1px 0px rgba(0,0,0,0.14),
          0px 1px 3px 0px rgba(0,0,0,0.12);
      }

      .log-item__participants {
        display: flex;
        flex-wrap: wrap;
      }

      .log-item__participant {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px;
      }

      .log-item__value {
        margin-top: 4px;
        font-size: 1.1rem;
        font-weight: bold;
        color: #1B5E20;
      }

      .log-item__value_negative {
        color: #B71C1C;
      }

      .log-item__date {
        font-size: 0.8rem;
        opacity: 0.8;
      }
    `}render(){return 0===this.logs.length?V`
        No logs.
      `:V`
      <ul class="logs">
        ${this.logs.map(({_metadata:t,participants:e})=>V`
            <li class="log-item">
              <div class="log-item__participants">
                ${e.map(([t,e])=>V`
                  <div class="log-item__participant">
                    <p>${t}</p>
                    <p
                      class="${et({"log-item__value":!0,"log-item__value_negative":e<0})}"
                    >
                      ${e}
                    </p>
                  </div>
                `)}
              </div>
              <div class="log-item__date">
                ${new Date(t.date).toDateString()}
              <div>
            </li>
          `)}
      </ul>
    `}});customElements.define("expense-table",class extends Z{static get properties(){return{logs:{type:Array},initialBalance:{type:Number}}}static get styles(){return X`
      .wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 8px;
      }

      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        border-radius: 16px;
        padding: 8px;
        background-color: white;
        box-shadow: 0px 3px 5px -1px rgba(0,0,0,0.2),
          0px 5px 8px 0px rgba(0,0,0,0.14),
          0px 1px 14px 0px rgba(0,0,0,0.12);
      }

      .card_big {
        font-size: 1.5rem;
        grid-column: 1 / 3;
        grid-row: 1 / 3;
      }

      .card__value {
        margin-top: 4px;
        font-size: 1.5em;
        font-weight: bold;
        color: #1B5E20;
      }

      .card__value_negative {
        color: #B71C1C;
      }
    `}render(){const t=this.getAccumulatedTable(this.logs),e=this.getAccumulation(t);return V`
      <div class="wrapper">
        <div class="card card_big">
          <span>GORSHOK</span>
          <span
            class="${et({card__value:!0,card__value_negative:e<0})}"
          >${e.toFixed(2)}</span>
        </div>
        ${Object.keys(t).map(e=>{const s=t[e];return V`
                <div class="card">
                  <span>${e}</span>
                  <span
                    class="${et({card__value:!0,card__value_negative:s<0})}"
                  >${s.toFixed(2)}</span>
                </div>
              `})}
      </div>
    `}getAccumulatedTable(t){return t.reduce((t,{participants:e})=>(e.forEach(([e,s])=>{t[e]=(t[e]||0)+s}),t),{})}getAccumulation(t){let e=this.initialBalance||0;return Object.keys(t).forEach(s=>{e-=t[s]}),e}});customElements.define("expense-settings",class extends Z{static get properties(){return{initialBalance:{type:Number},rounding:{type:Number},_isOpened:{type:Boolean}}}static get styles(){return X`
      :host {
        position: relative;
      }

      .toggle {
        display: flex;
        padding: 8px;
        margin: 0;
        border: none;
        border-radius: 50%;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
          rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
          cursor: pointer;
      }

      .wrapper {
        position: absolute;
        right: 0;
        background-color: white;
        padding: 8px;
        border-radius: 4px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px -1px,
          rgba(0, 0, 0, 0.14) 0px 5px 8px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 14px 0px;
      }

      .control {
        display: block;
        margin-bottom: 4px;
      }

      .control__input {
        width: 100px;
      }
    `}render(){return V`
      <button
        class="toggle"
        @click="${this.toggleOpened}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
      </button>
      ${this.getMenuHTML()}
    `}getMenuHTML(){if(this._isOpened)return V`
      <div class="wrapper">
        <label class="control">
          Rounding
          <input
            class="control__input"
            type="number"
            min="0"
            .value="${this.rounding}"
            @change="${this.getChangeListener("rounding")}"
          >
        </label>
        <label class="control">
          Initial balance
          <input
            class="control__input"
            type="number"
            .value="${this.initialBalance}"
            @change="${this.getChangeListener("initialBalance")}"
          >
        </label>
      </div>
    `}toggleOpened(){this._isOpened=!this._isOpened}getChangeListener(t){return e=>{this.dispatchEvent(new CustomEvent("expense-settings-change",{composed:!0,detail:{[t]:+e.target.value}}))}}});customElements.define("expense-tracker",class extends Z{constructor(...e){super(...e),t(this,"logs",void 0),t(this,"settings",void 0)}static get properties(){return{users:{type:Array},initialBalance:{type:Number},rounding:{type:Number}}}static get styles(){return X`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      h1 {
        text-align: center;
      }

      .wrapper {
        max-width: 500px;
        width: 100%;
      }

      .panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `}connectedCallback(){super.connectedCallback(),this.settings={initialBalance:0,rounding:.5,...JSON.parse(localStorage.getItem("expense-settings"))||{}},this.logs=JSON.parse(localStorage.getItem("expense-logs"))||[]}render(){return V`
      <div class="wrapper">
        <div class="panel">
          <h1>Expense Tracker</h1>
          <expense-settings
            .rounding="${this.settings.rounding}"
            .initialBalance="${this.settings.initialBalance}"
            @expense-settings-change="${this.settingsChange}"
          ></expense-settings>
        </div>
        <expense-input
          .users="${this.users}"
          .rounding="${this.settings.rounding}"
          @expense-log="${this.logExpense}"
        ></expense-input>
        <h3>Balances</h3>
        <expense-table
          .initialBalance="${this.settings.initialBalance}"
          .logs="${this.logs}"
        ></expense-table>
        <h3>Log</h3>
        <expense-logs .logs="${this.logs}"></expense-logs>
      </div>
    `}logExpense(t){this.logs=[...this.logs,{participants:t.detail.participants,_metadata:{date:Date.now()}}],this.logs.sort((t,e)=>e._metadata.date-t._metadata.date),localStorage.setItem("expense-logs",JSON.stringify(this.logs)),this.requestUpdate()}settingsChange(t){this.settings={...this.settings,...t.detail},localStorage.setItem("expense-settings",JSON.stringify(this.settings)),this.requestUpdate()}});
//# sourceMappingURL=expense-tracker.js.map
