(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{543:function(t,e,o){var content=o(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("4e209ec6",content,!0,{sourceMap:!1})},548:function(t,e,o){"use strict";o(543)},549:function(t,e,o){var n=o(10)(!1);n.push([t.i,".complete{border-left:4px solid #3cd1c2!important}.ongoing{border-left:4px solid orange!important}.overdue{border-left:4px solid tomato!important}.v-chip.complete{background:#3cd1c2!important}.v-chip.ongoing{background:#ffaa2c!important}.v-chip.overdue{background:#f83e70!important}",""]),t.exports=n},574:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{projects:[{title:"Design a new website",person:"The Net Ninja",due:"1st Jan 2019",status:"ongoing",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Code up the homepage",person:"Chun Li",due:"10th Jan 2019",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Design video thumbnails",person:"Ryu",due:"20th Dec 2018",status:"complete",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"},{title:"Create a community forum",person:"Gouken",due:"20th Oct 2018",status:"overdue",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!"}]}},methods:{sortBy:function(t){this.projects.sort((function(a,b){return a[t]<b[t]?-1:1}))}}},r=(o(548),o(4)),c=o(5),l=o.n(c),m=o(353),d=o(211),v=o(568),_=o(533),f=o(534),x=o(202),y=o(535),h=o(569),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("v-container",{staticClass:"my-5"},[o("v-row",{staticClass:"mb-3"},[o("v-col",{attrs:{xs:"6",md:"2",sm:"4"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{small:"",color:"gray"},on:{click:function(e){return t.sortBy("title")}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-folder")]),t._v(" "),o("span",{staticClass:"caption text-lowercase"},[t._v("By Project Name")])],1)]}}])},[t._v(" "),o("span",[t._v("Sort Project By Project Name")])])],1),t._v(" "),o("v-col",{attrs:{xs:"6",md:"2",sm:"4"}},[o("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{small:"",color:"gray"},on:{click:function(e){return t.sortBy("person")}}},"v-btn",r,!1),n),[o("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-human-male")]),t._v(" "),o("span",{staticClass:"caption text-lowercase"},[t._v("By Project Person")])],1)]}}])},[t._v(" "),o("span",[t._v("Sort Project By Person")])])],1)],1),t._v(" "),t._l(t.projects,(function(e){return o("v-card",{key:e.title,attrs:{flat:""}},[o("v-container",{attrs:{wrap:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{xs:"12",md:"6"}},[o("div",{staticClass:"caption grey--text"},[t._v("Project title")]),t._v(" "),o("div",[t._v(t._s(e.title))])]),t._v(" "),o("v-col",{attrs:{xs:"6",md:"2",sm:"4"}},[o("div",{staticClass:"caption grey--text"},[t._v("Person")]),t._v(" "),o("div",[t._v(t._s(e.person))])]),t._v(" "),o("v-col",{attrs:{xs:"6",md:"2",sm:"4"}},[o("div",{staticClass:"caption grey--text"},[t._v("Due by")]),t._v(" "),o("div",[t._v(t._s(e.due))])]),t._v(" "),o("v-col",{attrs:{xs:"2",md:"2",sm:"4"}},[o("div",{staticClass:"caption grey--text"},[t._v("Status")]),t._v(" "),o("v-chip",{class:e.status+" white--text my-2 caption",attrs:{small:""}},[t._v(t._s(e.status))])],1)],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VCard:d.a,VChip:v.a,VCol:_.a,VContainer:f.a,VIcon:x.a,VRow:y.a,VTooltip:h.a})}}]);