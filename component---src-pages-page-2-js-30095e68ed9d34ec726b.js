(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{p5nM:function(n,e,a){"use strict";a.r(e);a("VRzm");var t=a("o0o1"),r=a.n(t),o=(a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("ls82"),a("q1tI")),s=a.n(o),i=a("TJpk"),c=a.n(i),p=a("4R65"),u=a.n(p),l=a("vDqi"),v=a.n(l),f=a("7oih"),d=a("SVAT");function m(n,e,a,t,r,o,s){try{var i=n[o](s),c=i.value}catch(p){return void a(p)}i.done?e(c):Promise.resolve(c).then(t,r)}function h(n){return function(){var e=this,a=arguments;return new Promise((function(t,r){var o=n.apply(e,a);function s(n){m(o,t,r,s,i,"next",n)}function i(n){m(o,t,r,s,i,"throw",n)}s(void 0)}))}}var y=[20,30];e.default=function(){function n(){return(n=h(r.a.mark((function n(e){var a,t,o,s,i,c,p,l,f;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(f=function(n,e){void 0===n&&(n={});var a,t,r=n.properties,o=void 0===r?{}:r,s="none",i=o.country,c=o.updated,p=o.cases,l=o.score;l<3.5&&(s="safe"),l>=3.5&&l<=4.5&&(s="medium"),l>4.5&&(s="unsafe"),"undefined"===(t=""+l)&&(t="?"),c&&(a=new Date(c).toDateString());var v='\n      <span class="'+s+' icon-marker ">\n        <span class="icon-marker-tooltip">\n          <h2>'+i+"</h2>\n          <ul>\n            <li><span>Travel score:</span>  <span>"+l+"</span></li>\n            <hr/>\n            <li><span>Confirmed:</span>  <span>"+p+"</span></li>\n            <li><span>Updated:</span>  <span>"+a+"</span></li>\n          </ul>\n        </span>\n        "+t+"\n        </span>\n      ";return u.a.marker(e,{icon:u.a.divIcon({className:"icon",html:v}),riseOnHover:!0})},a=(void 0===e?{}:e).leafletElement){n.next=4;break}return n.abrupt("return");case 4:return n.prev=4,n.next=7,v.a.get("https://corona.lmao.ninja/v2/countries");case 7:return t=n.sent,n.next=10,v.a.get("https://www.travel-advisory.info/api?fbclid=IwAR3SnvJQ1-dND181hi-pNwL5BH-c41Vg0j8G_FMpqHbPkhWnsbfsJQTfbYQ");case 10:o=n.sent,n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(4),console.log("E",n.t0),n.abrupt("return");case 17:if(s=t.data,i=o.data.data,c=Array.isArray(s)&&s.length>0,p=Object.keys(i).length>0,c&&p){n.next=23;break}return n.abrupt("return");case 23:s.map((function(n){void 0===n&&(n={});var e=n.countryInfo.iso2;if(i.hasOwnProperty(e)){var a=i[e].advisory.score;n.score=a}return n})),console.log(s),l={type:"FeatureCollection",features:s.map((function(n){void 0===n&&(n={});var e=n.countryInfo,a=void 0===e?{}:e,t=a.lat,r=a.long;return{type:"Feature",properties:Object.assign({},n),geometry:{type:"Point",coordinates:[r,t]}}}))},new u.a.GeoJSON(l,{pointToLayer:f}).addTo(a);case 28:case"end":return n.stop()}}),n,null,[[4,13]])})))).apply(this,arguments)}var e={center:y,defaultBaseMap:"Mapbox2",zoom:2.5,mapEffect:function(e){return n.apply(this,arguments)}};return s.a.createElement(f.a,{pageName:"home"},s.a.createElement(c.a,null,s.a.createElement("title",null,"Travel advisory")),s.a.createElement(d.a,e))}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-30095e68ed9d34ec726b.js.map