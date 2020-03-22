function e(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}
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
 */const t=new WeakMap,s=e=>"function"==typeof e&&t.has(e),i=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,s=null)=>{for(;t!==s;){const s=t.nextSibling;e.removeChild(t),t=s}},r={},a={},o=`{{lit-${String(Math.random()).slice(2)}}}`,l=`\x3c!--${o}--\x3e`,p=new RegExp(`${o}|${l}`);class c{constructor(e,t){this.parts=[],this.element=t;const s=[],i=[],n=document.createTreeWalker(t.content,133,null,!1);let r=0,a=-1,l=0;const{strings:c,values:{length:h}}=e;for(;l<h;){const e=n.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:s}=t;let i=0;for(let e=0;e<s;e++)d(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=c[l],s=g.exec(t)[2],i=s.toLowerCase()+"$lit$",n=e.getAttribute(i);e.removeAttribute(i);const r=n.split(p);this.parts.push({type:"attribute",index:a,name:s,strings:r}),l+=r.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const i=e.parentNode,n=t.split(p),r=n.length-1;for(let t=0;t<r;t++){let s,r=n[t];if(""===r)s=u();else{const e=g.exec(r);null!==e&&d(e[2],"$lit$")&&(r=r.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(r)}i.insertBefore(s,e),this.parts.push({type:"node",index:++a})}""===n[r]?(i.insertBefore(u(),e),s.push(e)):e.data=n[r],l+=r}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&a!==r||(a++,t.insertBefore(u(),e)),r=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(s.push(e),a--),l++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1}),l++}}else n.currentNode=i.pop()}for(const e of s)e.parentNode.removeChild(e)}}const d=(e,t)=>{const s=e.length-t.length;return s>=0&&e.slice(s)===t},h=e=>-1!==e.index,u=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
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
class m{constructor(e,t,s){this.__parts=[],this.template=e,this.processor=t,this.options=s}update(e){let t=0;for(const s of this.__parts)void 0!==s&&s.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=i?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let r,a=0,o=0,l=n.nextNode();for(;a<s.length;)if(r=s[a],h(r)){for(;o<r.index;)o++,"TEMPLATE"===l.nodeName&&(t.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=t.pop(),l=n.nextNode());if("node"===r.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,r.name,r.strings,this.options));a++}else this.__parts.push(void 0),a++;return i&&(document.adoptNode(e),customElements.upgrade(e)),e}}
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
 */const _=` ${o} `;class x{constructor(e,t,s,i){this.strings=e,this.values=t,this.type=s,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",s=!1;for(let i=0;i<e;i++){const e=this.strings[i],n=e.lastIndexOf("\x3c!--");s=(n>-1||s)&&-1===e.indexOf("--\x3e",n+1);const r=g.exec(e);t+=null===r?e+(s?_:l):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+o}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
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
 */const f=e=>null===e||!("object"==typeof e||"function"==typeof e),y=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class v{constructor(e,t,s){this.dirty=!0,this.element=e,this.name=t,this.strings=s,this.parts=[];for(let e=0;e<s.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new b(this)}_getValue(){const e=this.strings,t=e.length-1;let s="";for(let i=0;i<t;i++){s+=e[i];const t=this.parts[i];if(void 0!==t){const e=t.value;if(f(e)||!y(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class b{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r||f(e)&&e===this.value||(this.value=e,s(e)||(this.committer.dirty=!0))}commit(){for(;s(this.value);){const e=this.value;this.value=r,e(this)}this.value!==r&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}const e=this.__pendingValue;e!==r&&(f(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):y(e)?this.__commitIterable(e):e===a?(this.value=a,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,s="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=s:this.__commitNode(document.createTextNode(s)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof m&&this.value.template===t)this.value.update(e.values);else{const s=new m(t,e.processor,this.options),i=s._clone();s.update(e.values),this.__commitNode(i),this.value=s}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let s,i=0;for(const n of e)s=t[i],void 0===s&&(s=new w(this.options),t.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(t[i-1])),s.setValue(n),s.commit(),i++;i<t.length&&(t.length=i,this.clear(s&&s.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class S{constructor(e,t,s){if(this.value=void 0,this.__pendingValue=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=s}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=r}}class C extends v{constructor(e,t,s){super(e,t,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends b{}let P=!1;try{const e={get capture(){return P=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class E{constructor(e,t,s){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=s,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;s(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=A(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=r}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const A=e=>e&&(P?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
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
 */;const T=new class{handleAttributeExpressions(e,t,s,i){const n=t[0];if("."===n){return new C(e,t.slice(1),s).parts}return"@"===n?[new E(e,t.slice(1),i.eventContext)]:"?"===n?[new S(e,t.slice(1),s)]:new v(e,t,s).parts}handleTextExpression(e){return new w(e)}};
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
 */function $(e){let t=k.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},k.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const i=e.strings.join(o);return s=t.keyString.get(i),void 0===s&&(s=new c(e,e.getTemplateElement()),t.keyString.set(i,s)),t.stringsArray.set(e.strings,s),s}const k=new Map,O=new WeakMap;
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
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const V=(e,...t)=>new x(e,t,"html",T)
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
 */;function B(e,t){const{element:{content:s},parts:i}=e,n=document.createTreeWalker(s,133,null,!1);let r=R(i),a=i[r],o=-1,l=0;const p=[];let c=null;for(;n.nextNode();){o++;const e=n.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(p.push(e),null===c&&(c=e)),null!==c&&l++;void 0!==a&&a.index===o;)a.index=null!==c?-1:a.index-l,r=R(i,r),a=i[r]}p.forEach(e=>e.parentNode.removeChild(e))}const M=e=>{let t=11===e.nodeType?0:1;const s=document.createTreeWalker(e,133,null,!1);for(;s.nextNode();)t++;return t},R=(e,t=-1)=>{for(let s=t+1;s<e.length;s++){const t=e[s];if(h(t))return s}return-1};
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
const U=(e,t)=>`${e}--${t}`;let D=!0;void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1);const z=e=>t=>{const s=U(t.type,e);let i=k.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},k.set(s,i));let n=i.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(o);if(n=i.keyString.get(r),void 0===n){const s=t.getTemplateElement();D&&window.ShadyCSS.prepareTemplateDom(s,e),n=new c(t,s),i.keyString.set(r,n)}return i.stringsArray.set(t.strings,n),n},L=["html","svg"],j=new Set,q=(e,t,s)=>{j.add(e);const i=s?s.element:document.createElement("template"),n=t.querySelectorAll("style"),{length:r}=n;if(0===r)return void window.ShadyCSS.prepareTemplateStyles(i,e);const a=document.createElement("style");for(let e=0;e<r;e++){const t=n[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{L.forEach(t=>{const s=k.get(U(t,e));void 0!==s&&s.keyString.forEach(e=>{const{element:{content:t}}=e,s=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{s.add(e)}),B(e,s)})})})(e);const o=i.content;s?function(e,t,s=null){const{element:{content:i},parts:n}=e;if(null==s)return void i.appendChild(t);const r=document.createTreeWalker(i,133,null,!1);let a=R(n),o=0,l=-1;for(;r.nextNode();){for(l++,r.currentNode===s&&(o=M(t),s.parentNode.insertBefore(t,s));-1!==a&&n[a].index===l;){if(o>0){for(;-1!==a;)n[a].index+=o,a=R(n,a);return}a=R(n,a)}}}(s,a,o.firstChild):o.insertBefore(a,o.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(s){o.insertBefore(a,o.firstChild);const e=new Set;e.add(a),B(s,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const I={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},H=(e,t)=>t!==e&&(t==t||e==e),F={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:H},J=Promise.resolve(!0);class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=J,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,s)=>{const i=this._attributeNameForProperty(s,t);void 0!==i&&(this._attributeToPropertyMap.set(i,s),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=F){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const s="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[s]},set(t){const i=this[e];this[s]=t,this._requestUpdate(e,i)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const s of t)this.createProperty(s,e[s])}}static _attributeNameForProperty(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,s=H){return s(e,t)}static _propertyValueFromAttribute(e,t){const s=t.type,i=t.converter||I,n="function"==typeof i?i:i.fromAttribute;return n?n(e,s):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const s=t.type,i=t.converter;return(i&&i.toAttribute||I.toAttribute)(e,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,s){t!==s&&this._attributeToProperty(e,s)}_propertyToAttribute(e,t,s=F){const i=this.constructor,n=i._attributeNameForProperty(e,s);if(void 0!==n){const e=i._propertyValueToAttribute(t,s);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(n):this.setAttribute(n,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(e);if(void 0!==i){const e=s._classProperties.get(i)||F;this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let s=!0;if(void 0!==e){const i=this.constructor,n=i._classProperties.get(e)||F;i._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):s=!1}!this._hasRequestedUpdate&&s&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const s=this._updatePromise;this._updatePromise=new Promise((s,i)=>{e=s,t=i});try{await s}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}W.finalized=!0;
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
const G="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(e,t){if(t!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const X=(e,...t)=>{const s=t.reduce((t,s,i)=>t+(e=>{if(e instanceof Q)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+e[i+1],e[0]);return new Q(s,K)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const Y=e=>e.flat?e.flat(1/0):function e(t,s=[]){for(let i=0,n=t.length;i<n;i++){const n=t[i];Array.isArray(n)?e(n,s):s.push(n)}return s}(e);class Z extends W{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){Y(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof x&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}Z.finalized=!0,Z.render=(e,t,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,r=O.has(t),a=D&&11===t.nodeType&&!!t.host,o=a&&!j.has(i),l=o?document.createDocumentFragment():t;if(((e,t,s)=>{let i=O.get(t);void 0===i&&(n(t,t.firstChild),O.set(t,i=new w(Object.assign({templateFactory:$},s))),i.appendInto(t)),i.setValue(e),i.commit()})(e,l,Object.assign({templateFactory:z(i)},s)),o){const e=O.get(l);O.delete(l);const s=e.value instanceof m?e.value.template:void 0;q(i,l,s),n(t,t.firstChild),t.appendChild(l),O.set(t,e)}!r&&a&&window.ShadyCSS.styleElement(t.host)};customElements.define("expense-input",class extends Z{constructor(...t){super(...t),e(this,"users",[]),e(this,"rounding",.5),e(this,"additionalData",[]),e(this,"resultData",{})}static get properties(){return{users:{type:Array},rounding:{type:Number}}}static get styles(){return X`
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
            ${this.users.map(({name:e})=>V`
                <tr class="row">
                  <td class="cell__name">${e}</td>
                  <td class="cell">
                    <input
                      data-type="participated"
                      data-id="${e}"
                      type="checkbox"
                      class="checkbox"
                    >
                    </td>
                  <td class="cell">
                    <input
                      data-type="paid"
                      data-id="${e}"
                      type="number"
                      class="number-input"
                    >
                  </td>
                  <td class="cell">${this.resultData[e]}</td>
                </tr>
              `)}
          </tbody>
        </table>
        <button
          class="submit"
          @click="${this.logListener}"
        >Add</button>
      </div>
    `}inputChangeListener(e){const{dataset:t}=e.target;let s,i=this.additionalData.find(e=>e.id===t.id);i||(i={id:t.id,[t.type]:s},this.additionalData.push(i)),"participated"===t.type?s=e.target.checked:"paid"===t.type&&(s=+e.target.value),i[t.type]=s,this.updateResult()}logListener(){const e=Object.keys(this.resultData).map(e=>[e,this.resultData[e]]).filter(([,e])=>!!e);0!==e.length&&(this.dispatchEvent(new CustomEvent("expense-log",{bubbles:!0,composed:!0,detail:{participants:e}})),this.shadowRoot.querySelectorAll('input[type="checkbox"]').forEach(e=>{e.checked=!1}),this.shadowRoot.querySelectorAll('input[type="number"]').forEach(e=>{e.value=""}),this.resultData={},this.requestUpdate())}updateResult(){let e=0,t=0;this.additionalData.forEach(({paid:s,participated:i})=>{s&&(e+=s),i&&(t+=1)});let s=e/t;0!==this.rounding&&(s=Math.ceil(s/this.rounding)*this.rounding),this.additionalData.forEach(({id:e,paid:t=0,participated:i})=>{let n=t;i&&(n-=s),this.resultData[e]=n||void 0}),this.requestUpdate()}});
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
const ee=new WeakMap,te=(se=e=>t=>{if(!(t instanceof b)||t instanceof N||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:s}=t,{element:i}=s;ee.has(t)||(i.className=s.strings.join(" "));const{classList:n}=i,r=ee.get(t);for(const t in r)t in e||n.remove(t);for(const t in e){const s=e[t];r&&s===r[t]||n[s?"add":"remove"](t)}ee.set(t,e)},(...e)=>{const s=se(...e);return t.set(s,!0),s});var se;customElements.define("expense-logs",class extends Z{static get properties(){return{logs:{type:Array}}}static get styles(){return X`
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
        ${this.logs.map(({_metadata:e,participants:t})=>V`
            <li class="log-item">
              <div class="log-item__participants">
                ${t.map(([e,t])=>V`
                  <div class="log-item__participant">
                    <p>${e}</p>
                    <p
                      class="${te({"log-item__value":!0,"log-item__value_negative":t<0})}"
                    >
                      ${t}
                    </p>
                  </div>
                `)}
              </div>
              <div class="log-item__date">
                ${new Date(e.date).toDateString()}
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
    `}render(){const e=this.getAccumulatedTable(this.logs),t=this.getAccumulation(e);return V`
      <div class="wrapper">
        <div class="card card_big">
          <span>GORSHOK</span>
          <span
            class="${te({card__value:!0,card__value_negative:t<0})}"
          >${t}</span>
        </div>
        ${Object.keys(e).map(t=>{const s=e[t];return V`
                <div class="card">
                  <span>${t}</span>
                  <span
                    class="${te({card__value:!0,card__value_negative:s<0})}"
                  >${s}</span>
                </div>
              `})}
      </div>
    `}getAccumulatedTable(e){return e.reduce((e,{participants:t})=>(t.forEach(([t,s])=>{e[t]=(e[t]||0)+s}),e),{})}getAccumulation(e){let t=this.initialBalance||0;return Object.keys(e).forEach(s=>{t-=e[s]}),t}});customElements.define("expense-settings",class extends Z{static get properties(){return{initialBalance:{type:Number},rounding:{type:Number},_isOpened:{type:Boolean}}}static get styles(){return X`
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
    `}toggleOpened(){this._isOpened=!this._isOpened}getChangeListener(e){return t=>{this.dispatchEvent(new CustomEvent("expense-settings-change",{composed:!0,detail:{[e]:+t.target.value}}))}}});customElements.define("expense-tracker",class extends Z{constructor(...t){super(...t),e(this,"logs",void 0),e(this,"settings",void 0)}static get properties(){return{users:{type:Array},initialBalance:{type:Number},rounding:{type:Number}}}static get styles(){return X`
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
    `}logExpense(e){this.logs=[...this.logs,{participants:e.detail.participants,_metadata:{date:Date.now()}}],localStorage.setItem("expense-logs",JSON.stringify(this.logs)),this.requestUpdate()}settingsChange(e){this.settings={...this.settings,...e.detail},localStorage.setItem("expense-settings",JSON.stringify(this.settings)),this.requestUpdate()}});
//# sourceMappingURL=expense-tracker.js.map
