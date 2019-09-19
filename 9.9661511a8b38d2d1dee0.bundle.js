(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{680:function(t,e,r){"use strict";var o={};function n(t){return(t+"").trim()}function a(){return(a=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(o),r.d(o,"default",(function(){return p})),r.d(o,"DEFAULT_NAMESPACE",(function(){return d})),r.d(o,"getNamespace",(function(){return h})),r.d(o,"getColor",(function(){return g})),r.d(o,"getScale",(function(){return m}));var c=function(t){function e(e,r){var o;return s(i(o=t.call(this,(function(t){return o.getColor(t)}))||this),"colors",void 0),s(i(o),"parentForcedColors",void 0),s(i(o),"forcedColors",void 0),s(i(o),"seen",void 0),o.colors=e,o.parentForcedColors=r,o.forcedColors={},o.seen={},o}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var r=e.prototype;return r.getColor=function(t){var e=n(t),r=this.parentForcedColors&&this.parentForcedColors[e];if(r)return r;var o=this.forcedColors[e];if(o)return o;var a=this.seen[e],i=this.colors.length;if(void 0!==a)return this.colors[a%i];var s=Object.keys(this.seen).length;return this.seen[e]=s,this.colors[s%i]},r.setColor=function(t,e){return this.forcedColors[n(t)]=e,this},r.getColorMap=function(){var t=this,e={},r=this.colors.length;return Object.keys(this.seen).forEach((function(o){e[o]=t.colors[t.seen[o]%r]})),a({},e,{},this.forcedColors,{},this.parentForcedColors)},e}(r(676).a),u=r(332);function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=function(){function t(t){l(this,"name",void 0),l(this,"forcedItems",void 0),l(this,"scales",void 0),this.name=t,this.scales={},this.forcedItems={}}var e=t.prototype;return e.getScale=function(t){var e=t||Object(u.a)().getDefaultKey()||"",r=this.scales[e];if(r)return r;var o=Object(u.a)().get(e),n=new c(o&&o.colors||[],this.forcedItems);return this.scales[e]=n,n},e.setColor=function(t,e){return this.forcedItems[n(t)]=e,this},t}(),f={},d="GLOBAL";function h(t){void 0===t&&(t=d);var e=f[t];if(e)return e;var r=new p(t);return f[t]=r,r}function g(t,e,r){return h(r).getScale(e).getColor(t)}function m(t,e){return h(e).getScale(t)}r.d(e,"a",(function(){return o}))},703:function(t,e,r){"use strict";var o=r(0),n=r.n(o),a=r(2),i=r.n(a),s=r(713),c=r(705),u=r(680),l=r(712),p=r(704),f=r(702),d=r(711),h=r(693),g=r(688);function m(){return(m=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var v=u.a.getScale;var y={formData:i.a.object.isRequired,mapboxApiKey:i.a.string.isRequired,setControlValue:i.a.func.isRequired,viewport:i.a.object.isRequired,getLayer:i.a.func.isRequired,getPoints:i.a.func.isRequired,payload:i.a.object.isRequired,onAddFilter:i.a.func,setTooltip:i.a.func},_=function(t){function e(e){var r;return(r=t.call(this,e)||this).state=r.getStateFromProps(e),r.getLayers=r.getLayers.bind(b(r)),r.onValuesChange=r.onValuesChange.bind(b(r)),r.onViewportChange=r.onViewportChange.bind(b(r)),r.toggleCategory=r.toggleCategory.bind(b(r)),r.showSingleCategory=r.showSingleCategory.bind(b(r)),r}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var r=e.prototype;return r.UNSAFE_componentWillReceiveProps=function(t){t.payload.form_data!==this.state.formData&&this.setState(m({},this.getStateFromProps(t)))},r.onValuesChange=function(t){this.setState({values:Array.isArray(t)?t:[t,t+this.state.getStep(t)]})},r.onViewportChange=function(t){this.setState({viewport:t})},r.getStateFromProps=function(t,e){var r=t.payload.data.features||[],o=r.map((function(t){return t.__timestamp})),n=function(t,e){var r=t.color_picker||{r:0,g:0,b:0,a:1},o=[r.r,r.g,r.b,255*r.a],n=v(t.color_scheme),a={};return e.forEach((function(e){var i;null==e.cat_color||a.hasOwnProperty(e.cat_color)||(i=t.dimension?Object(f.hexToRGB)(n(e.cat_color),255*r.a):o,a[e.cat_color]={color:i,enabled:!0})})),a}(t.formData,r);if(e&&t.payload.form_data===e.formData)return m({},e,{categories:n});var a=t.payload.form_data.time_grain_sqla||t.payload.form_data.granularity||"P1D",i=Object(d.a)(o,a);return{start:i.start,end:i.end,getStep:i.getStep,values:i.values,disabled:i.disabled,viewport:t.formData.autozoom?Object(g.b)(t.viewport,t.getPoints(r)):t.viewport,selected:[],lastClick:0,formData:t.payload.form_data,categories:n}},r.getLayers=function(t){var e=this.props,r=e.getLayer,o=e.payload,n=e.formData,a=e.onAddFilter,i=e.setTooltip,s=o.data.features?[].concat(o.data.features):[];(s=this.addColor(s,n),n.js_data_mutator)&&(s=Object(h.a)(n.js_data_mutator)(s));s=t[0]===t[1]||t[1]===this.end?s.filter((function(e){return e.__timestamp>=t[0]&&e.__timestamp<=t[1]})):s.filter((function(e){return e.__timestamp>=t[0]&&e.__timestamp<t[1]}));var c=this.state.categories;return n.dimension&&(s=s.filter((function(t){return c[t.cat_color]&&c[t.cat_color].enabled}))),[r(n,m({},o,{data:m({},o.data,{features:s})}),a,i)]},r.addColor=function(t,e){var r=e.color_picker||{r:0,g:0,b:0,a:1},o=v(e.color_scheme);return t.map((function(t){return e.dimension?m({},t,{color:Object(f.hexToRGB)(o(t.cat_color),255*r.a)}):t}))},r.toggleCategory=function(t){var e,r=this.state.categories[t],o=m({},this.state.categories,((e={})[t]=m({},r,{enabled:!r.enabled}),e));Object.values(o).every((function(t){return!t.enabled}))&&Object.values(o).forEach((function(t){t.enabled=!0})),this.setState({categories:o})},r.showSingleCategory=function(t){var e=m({},this.state.categories);Object.values(e).forEach((function(t){t.enabled=!1})),e[t].enabled=!0,this.setState({categories:e})},r.render=function(){return n.a.createElement("div",{style:{position:"relative"}},n.a.createElement(l.a,{getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,onValuesChange:this.onValuesChange,disabled:this.state.disabled,viewport:this.state.viewport,onViewportChange:this.onViewportChange,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue},n.a.createElement(p.a,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.formData.legend_position,format:this.props.formData.legend_format})))},e}(n.a.PureComponent);function O(){return(O=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}_.propTypes=y,r.d(e,"b",(function(){return w})),r.d(e,"a",(function(){return S}));var C={formData:i.a.object.isRequired,payload:i.a.object.isRequired,setControlValue:i.a.func.isRequired,viewport:i.a.object.isRequired,onAddFilter:i.a.func,setTooltip:i.a.func},E={onAddFilter:function(){},setTooltip:function(){}};function w(t,e){var r=function(r){function o(t){var o=r.call(this,t)||this,n=t.viewport,a=t.formData.autozoom?Object(g.b)(n,e(t.payload.data.features)):n;return o.state={viewport:a,layer:o.computeLayer(t)},o.onViewportChange=o.onViewportChange.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(o)),o}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(o,r);var a=o.prototype;return a.UNSAFE_componentWillReceiveProps=function(t){var e=O({},t.formData,{viewport:null}),r=O({},this.props.formData,{viewport:null});Object(s.isEqual)(e,r)&&t.payload===this.props.payload||this.setState({layer:this.computeLayer(t)})},a.onViewportChange=function(t){this.setState({viewport:t})},a.computeLayer=function(e){var r=e.formData,o=e.payload,n=e.onAddFilter,a=e.setTooltip;return t(r,o,n,a)},a.render=function(){var t=this.props,e=t.formData,r=t.payload,o=t.setControlValue,a=this.state,i=a.layer,s=a.viewport;return n.a.createElement(c.a,{mapboxApiAccessToken:r.data.mapboxApiKey,viewport:s,layers:[i],mapStyle:e.mapbox_style,setControlValue:o,onViewportChange:this.onViewportChange})},o}(n.a.PureComponent);return r.propTypes=C,r.defaultProps=E,r}function S(t,e){function r(r){var o=r.formData,a=r.payload,i=r.setControlValue,s=r.onAddFilter,c=r.setTooltip,u=r.viewport;return n.a.createElement(_,{formData:o,mapboxApiKey:a.data.mapboxApiKey,setControlValue:i,viewport:u,getLayer:t,payload:a,onAddFilter:s,setTooltip:c,getPoints:e})}return r.propTypes=C,r.defaultProps=E,r}},704:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var o=r(0),n=r.n(o),a=r(2),i=r.n(a),s=r(742);r(706);var c={categories:i.a.object,toggleCategory:i.a.func,showSingleCategory:i.a.func,format:i.a.string,position:i.a.oneOf([null,"tl","tr","bl","br"])},u=function(t){function e(){return t.apply(this,arguments)||this}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var r=e.prototype;return r.format=function(t){if(!this.props.format)return t;var e=parseFloat(t);return Object(s.a)(this.props.format,e)},r.formatCategoryLabel=function(t){if(!this.props.format)return t;if(t.includes(" - ")){var e=t.split(" - ");return this.format(e[0])+" - "+this.format(e[1])}return this.format(t)},r.render=function(){var t,e=this;if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;var r=Object.entries(this.props.categories).map((function(t){var r=t[0],o=t[1],a={color:"rgba("+o.color.join(", ")+")"},i=o.enabled?"◼":"◻";return n.a.createElement("li",{key:r},n.a.createElement("a",{href:"#",onClick:function(){return e.props.toggleCategory(r)},onDoubleClick:function(){return e.props.showSingleCategory(r)}},n.a.createElement("span",{style:a},i)," ",e.formatCategoryLabel(r)))})),o="t"===this.props.position.charAt(0)?"top":"bottom",a="r"===this.props.position.charAt(1)?"right":"left",i=((t={position:"absolute"})[o]="0px",t[a]="10px",t);return n.a.createElement("div",{className:"legend",style:i},n.a.createElement("ul",{className:"categories"},r))},e}(n.a.PureComponent);u.propTypes=c,u.defaultProps={categories:{},toggleCategory:function(){},showSingleCategory:function(){},format:null,position:"tr"}},706:function(t,e,r){var o=r(707);"string"==typeof o&&(o=[[t.i,o,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(334)(o,n);o.locals&&(t.exports=o.locals)},707:function(t,e,r){(t.exports=r(333)(!1)).push([t.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\ndiv.legend {\n    font-size: 90%;\n    position: absolute;\n    background: #fff;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n    margin: 24px;\n    padding: 12px 20px;\n    outline: none;\n    overflow-y: scroll;\n    max-height: 200px;\n}\n\nul.categories {\n    list-style: none;\n    padding-left: 0;\n    margin: 0;\n}\n\nul.categories li a {\n    color: rgb(51, 51, 51);\n    text-decoration: none;\n}\n\nul.categories li a span {\n    margin-right: 10px;\n}\n',""])},742:function(t,e,r){"use strict";var o=r(149),n=r(56),a=r(675),i=r(61),s=r(331),c=r(676);function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=function(t){function e(e){var r;l(u(r=t.call(this,(function(t){return r.format(t)}))||this),"id",void 0),l(u(r),"label",void 0),l(u(r),"description",void 0),l(u(r),"formatFunc",void 0),l(u(r),"isInvalid",void 0);var o=e.id,n=void 0===o?Object(s.a)("config.id"):o,a=e.label,i=e.description,c=void 0===i?"":i,p=e.formatFunc,f=void 0===p?Object(s.a)("config.formatFunc"):p,d=e.isInvalid;return r.id=n,r.label=a||n,r.description=c,r.formatFunc=f,r.isInvalid=void 0!==d&&d,r}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var r=e.prototype;return r.format=function(t){return null==t||Number.isNaN(t)?""+t:t===Number.POSITIVE_INFINITY?"∞":t===Number.NEGATIVE_INFINITY?"-∞":this.formatFunc(t)},r.preview=function(t){return void 0===t&&(t=12345.432),t+" => "+this.format(t)},e}(c.a);var f={DOLLAR:"$,.2f",DOLLAR_ROUND:"$,d",DOLLAR_ROUND_SIGNED:"+$,d",DOLLAR_SIGNED:"+$,.2f",FLOAT:",.2f",FLOAT_1_POINT:",.1f",FLOAT_2_POINT:",.2f",FLOAT_3_POINT:",.3f",FLOAT_SIGNED:"+,.2f",FLOAT_SIGNED_1_POINT:"+,.1f",FLOAT_SIGNED_2_POINT:"+,.2f",FLOAT_SIGNED_3_POINT:"+,.3f",INTEGER:",d",INTEGER_SIGNED:"+,d",PERCENT:",.2%",PERCENT_1_POINT:",.1%",PERCENT_2_POINT:",.2%",PERCENT_3_POINT:",.3%",PERCENT_SIGNED:"+,.2%",PERCENT_SIGNED_1_POINT:"+,.1%",PERCENT_SIGNED_2_POINT:"+,.2%",PERCENT_SIGNED_3_POINT:"+,.3%",SI:".3s",SI_1_DIGIT:".1s",SI_2_DIGIT:".2s",SI_3_DIGIT:".3s",SMART_NUMBER:"SMART_NUMBER",SMART_NUMBER_SIGNED:"SMART_NUMBER_SIGNED"},d=Object(i.a)(".3~s"),h=Object(i.a)(".2~f"),g=Object(i.a)(".4~f");function m(t){void 0===t&&(t={});var e=t,r=e.description,o=e.signed,n=void 0!==o&&o,a=e.id,i=e.label,s=n?function(t){return 0<t?"+":""}:function(){return""};return new p({description:r,formatFunc:function(t){return""+s(t)+function(t){if(0===t)return"0";var e=Math.abs(t);return 1e3<=e?d(t).replace("G","B"):1<=e?h(t):.001<=e?g(t):1e-6<e?d(1e6*t)+"µ":d(t)}(t)},id:a||n?f.SMART_NUMBER_SIGNED:f.SMART_NUMBER,label:i||"Adaptive formatter"})}var b=function(t){function e(){var e;return(e=t.call(this,{name:"NumberFormatter",overwritePolicy:n.a.WARN})||this).registerValue(f.SMART_NUMBER,m()),e.registerValue(f.SMART_NUMBER_SIGNED,m({signed:!0})),e.setDefaultKey(f.SMART_NUMBER),e}!function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}(e,t);var r=e.prototype;return r.get=function(e){var r=(""+(e||this.defaultKey)).trim();if(this.has(r))return t.prototype.get.call(this,r);var o=function(t){var e,r=t.description,o=t.formatString,n=void 0===o?Object(s.a)("config.formatString"):o,a=t.label,c=t.locale,u=!1;try{e=void 0===c?Object(i.a)(n):Object(i.b)(c).format(n)}catch(t){e=function(t){return t+" (Invalid format: "+n+")"},u=!0}return new p({description:r,formatFunc:e,id:n,isInvalid:u,label:a})}({formatString:r});return this.registerValue(r,o),o},r.format=function(t,e){return this.get(t)(e)},e}(a.a);r.d(e,"a",(function(){return y}));var v=Object(o.a)(b);function y(t,e){return v().format(t,e)}},837:function(t,e,r){"use strict";r.r(e),r.d(e,"getLayer",(function(){return d}));var o=r(699),n=r(0),a=r.n(n),i=r(679),s=r(688),c=r(693),u=r(703),l=r(700);function p(){return(p=Object.assign||function(t){for(var e,r=1;r<arguments.length;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)}function f(t){return a.a.createElement("div",{className:"deckgl-tooltip"},a.a.createElement(l.a,{label:Object(i.b)("Longitude and Latitude")+": ",value:t.object.position[0]+", "+t.object.position[1]}),a.a.createElement(l.a,{label:Object(i.b)("Height")+": ",value:""+t.object.elevationValue}))}function d(t,e,r,n){var a=t,i=a.color_picker,u=e.data.features.map((function(t){return p({},t,{color:[i.r,i.g,i.b,255*i.a]})}));a.js_data_mutator&&(u=Object(c.a)(a.js_data_mutator)(u));var l=Object(s.c)(a.js_agg_function,(function(t){return t.weight}));return new o.c(p({id:"grid-layer-"+a.slice_id,data:u,pickable:!0,cellSize:a.grid_size,minColor:[0,0,0,0],extruded:a.extruded,maxColor:[i.r,i.g,i.b,255*i.a],outline:!1,getElevationValue:l,getColorValue:l},Object(s.a)(a,n,f)))}e.default=Object(u.b)(d,(function(t){return t.map((function(t){return t.position}))}))}}]);