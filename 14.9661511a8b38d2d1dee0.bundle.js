(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{704:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(2),i=n.n(a),s=n(742);n(706);var l={categories:i.a.object,toggleCategory:i.a.func,showSingleCategory:i.a.func,format:i.a.string,position:i.a.oneOf([null,"tl","tr","bl","br"])},c=function(e){function t(){return e.apply(this,arguments)||this}!function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(t,e);var n=t.prototype;return n.format=function(e){if(!this.props.format)return e;var t=parseFloat(e);return Object(s.a)(this.props.format,t)},n.formatCategoryLabel=function(e){if(!this.props.format)return e;if(e.includes(" - ")){var t=e.split(" - ");return this.format(t[0])+" - "+this.format(t[1])}return this.format(e)},n.render=function(){var e,t=this;if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;var n=Object.entries(this.props.categories).map((function(e){var n=e[0],r=e[1],a={color:"rgba("+r.color.join(", ")+")"},i=r.enabled?"◼":"◻";return o.a.createElement("li",{key:n},o.a.createElement("a",{href:"#",onClick:function(){return t.props.toggleCategory(n)},onDoubleClick:function(){return t.props.showSingleCategory(n)}},o.a.createElement("span",{style:a},i)," ",t.formatCategoryLabel(n)))})),r="t"===this.props.position.charAt(0)?"top":"bottom",a="r"===this.props.position.charAt(1)?"right":"left",i=((e={position:"absolute"})[r]="0px",e[a]="10px",e);return o.a.createElement("div",{className:"legend",style:i},o.a.createElement("ul",{className:"categories"},n))},t}(o.a.PureComponent);c.propTypes=l,c.defaultProps={categories:{},toggleCategory:function(){},showSingleCategory:function(){},format:null,position:"tr"}},706:function(e,t,n){var r=n(707);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(334)(r,o);r.locals&&(e.exports=r.locals)},707:function(e,t,n){(e.exports=n(333)(!1)).push([e.i,'/**\n * Licensed to the Apache Software Foundation (ASF) under one\n * or more contributor license agreements.  See the NOTICE file\n * distributed with this work for additional information\n * regarding copyright ownership.  The ASF licenses this file\n * to you under the Apache License, Version 2.0 (the\n * "License"); you may not use this file except in compliance\n * with the License.  You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing,\n * software distributed under the License is distributed on an\n * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\n * KIND, either express or implied.  See the License for the\n * specific language governing permissions and limitations\n * under the License.\n */\ndiv.legend {\n    font-size: 90%;\n    position: absolute;\n    background: #fff;\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);\n    margin: 24px;\n    padding: 12px 20px;\n    outline: none;\n    overflow-y: scroll;\n    max-height: 200px;\n}\n\nul.categories {\n    list-style: none;\n    padding-left: 0;\n    margin: 0;\n}\n\nul.categories li a {\n    color: rgb(51, 51, 51);\n    text-decoration: none;\n}\n\nul.categories li a span {\n    margin-right: 10px;\n}\n',""])},847:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),s=n(699),l=n(712),c=n(704),u=n(700),p=n(701),f=n(844),d=n(98),h=n(335),g=n(702),m=10;function b(e,t,n){var r=e.break_points,o=e.num_buckets;if(!t)return[];if(void 0===r||0===r.length){var a=o?parseInt(o,10):m,i=Object(p.extent)(t,n),s=i[0],l=i[1];if(void 0===s)return[];var c=(l-s)/a,u=0===c?0:Math.max(0,Math.ceil(Math.log10(1/c))),f=l>l.toFixed(u)?1:0;return Array(a+1+f).fill().map((function(e,t){return(s+t*c).toFixed(u)}))}return r.sort((function(e,t){return parseFloat(e)-parseFloat(t)}))}function v(e,t,n){var r,o,a=e.break_points,i=e.num_buckets,s=e.linear_color_scheme,l=e.opacity,c=a||i?b({break_points:a,num_buckets:i},t,n):null,u=Array.isArray(s)?new d.a({colors:s,id:"custom"}):Object(h.a)().get(s);if(null!==c){var m=c.length-1,v=1<m?u.getColors(m):[u.colors[u.colors.length-1]],y=v[0],_=v[v.length-1];v.unshift(y),v.push(_);var w=c.map((function(e){return parseFloat(e)}));r=Object(f.a)().domain(w).range(v),o=function(e){return e>c[m]||e<c[0]}}else r=u.createLinearScale(Object(p.extent)(t,n)),o=function(){return!1};return function(e){var t=n(e),a=Object(g.hexToRGB)(r(t));return a[3]=o(t)?0:l/100*255,a}}var y=n(688),_=n(711),w=n(693);function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(){return(S=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)}n.d(t,"getLayer",(function(){return x}));function x(e,t,n,r,a,i,l){var c=e,p=c.fill_color_picker,f=c.stroke_color_picker,d=[].concat(t.data.features);if(null!=l&&l.forEach((function(e){d=d.filter(e)})),c.js_data_mutator){var h=Object(w.a)(c.js_data_mutator);d=h(d)}var g=c.metric?c.metric.label||c.metric:null,m=null===c.metric?function(){return[p.r,p.g,p.b,255*p.a]}:v(c,d,(function(e){return e[g]})),b=function(e){var t=m(e);return 0<a.length&&-1===a.indexOf(e[c.line_column])&&(t[3]/=2),t},_=c.line_column&&c.metric&&0<=["geohash","zipcode"].indexOf(c.line_type)?function(e){return function(t){var n=e.metric.label||e.metric;return o.a.createElement("div",{className:"deckgl-tooltip"},o.a.createElement(u.a,{label:e.line_column+": ",value:""+t.object[e.line_column]}),e.metric&&o.a.createElement(u.a,{label:n+": ",value:""+t.object[n]}))}}(c):void 0;return new s.f(S({id:"path-layer-"+c.slice_id,data:d,pickable:!0,filled:c.filled,stroked:c.stroked,getPolygon:function(e){return e.polygon},getFillColor:b,getLineColor:[f.r,f.g,f.b,255*f.a],getLineWidth:c.line_width,extruded:c.extruded,getElevation:function(e){return function(e,t){return 0===t(e)[3]?0:e.elevation}(e,b)},elevationScale:c.multiplier,fp64:!0},Object(y.a)(c,r,_,i)))}var O={formData:i.a.object.isRequired,payload:i.a.object.isRequired,setControlValue:i.a.func.isRequired,viewport:i.a.object.isRequired,onAddFilter:i.a.func,setTooltip:i.a.func},j=function(e){function t(n){var r;return(r=e.call(this,n)||this).state=t.getDerivedStateFromProps(n),r.getLayers=r.getLayers.bind(C(r)),r.onSelect=r.onSelect.bind(C(r)),r.onValuesChange=r.onValuesChange.bind(C(r)),r.onViewportChange=r.onViewportChange.bind(C(r)),r}(function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t})(t,e),t.getDerivedStateFromProps=function(e,t){if(t&&e.payload.form_data===t.formData)return null;var n=e.payload.data.features||[],r=n.map((function(e){return e.__timestamp})),o=e.payload.form_data.time_grain_sqla||e.payload.form_data.granularity||"P1D",a=Object(_.a)(r,o);return{start:a.start,end:a.end,getStep:a.getStep,values:a.values,disabled:a.disabled,viewport:e.formData.autozoom?Object(y.b)(e.viewport,function(e){return e.map((function(e){return e.polygon})).flat()}(n)):e.viewport,selected:[],lastClick:0,formData:e.payload.form_data}};var n=t.prototype;return n.onSelect=function(e){var t=this.props,n=t.formData,r=t.onAddFilter,o=new Date,a=o-this.state.lastClick<=250,i=[].concat(this.state.selected);if(a)i.splice(0,i.length,e);else if(n.toggle_polygons){var s=i.indexOf(e);-1===s?i.push(e):i.splice(s,1)}else i.splice(0,1,e);this.setState({selected:i,lastClick:o}),n.table_filter&&r(n.line_column,i,!1,!0)},n.onValuesChange=function(e){this.setState({values:Array.isArray(e)?e:[e,e+this.state.getStep(e)]})},n.onViewportChange=function(e){this.setState({viewport:e})},n.getLayers=function(e){if(void 0===this.props.payload.data.features)return[];var t=[];return e[0]===e[1]||e[1]===this.end?t.push((function(t){return t.__timestamp>=e[0]&&t.__timestamp<=e[1]})):t.push((function(t){return t.__timestamp>=e[0]&&t.__timestamp<e[1]})),[x(this.props.formData,this.props.payload,this.props.onAddFilter,this.props.setTooltip,this.state.selected,this.onSelect,t)]},n.render=function(){var e=this.props,t=e.payload,n=e.formData,r=e.setControlValue,a=this.state,i=a.start,s=a.end,u=a.getStep,p=a.values,f=a.disabled,d=a.viewport,h=n,g=h.metric?h.metric.label||h.metric:null,m=function(e,t,n){var r=b(e,t,n),o=v(e,t,n),a={};return r.slice(1).forEach((function(t,n){var i,s=r[n]+" - "+r[n+1],l=.5*(parseFloat(r[n])+parseFloat(r[n+1])),c=e.metric?e.metric.label||e.metric:null;a[s]={color:o((i={},i[c||e.metric]=l,i)),enabled:!0}})),a}(n,t.data.features,(function(e){return e[g]}));return o.a.createElement("div",{style:{position:"relative"}},o.a.createElement(l.a,{getLayers:this.getLayers,start:i,end:s,getStep:u,values:p,onValuesChange:this.onValuesChange,disabled:f,viewport:d,onViewportChange:this.onViewportChange,mapboxApiAccessToken:t.data.mapboxApiKey,mapStyle:n.mapbox_style,setControlValue:r,aggregation:!0},null!==n.metric&&o.a.createElement(c.a,{categories:m,position:n.legend_position,format:n.legend_format})))},t}(o.a.Component);j.propTypes=O,j.defaultProps={onAddFilter:function(){},setTooltip:function(){}};t.default=j}}]);