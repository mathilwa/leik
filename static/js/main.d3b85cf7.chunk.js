(this.webpackJsonpleik=this.webpackJsonpleik||[]).push([[0],{28:function(e,t,c){},30:function(e,t,c){},49:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n,r=c(2),a=c.n(r),i=c(21),s=c.n(i),o=(c(28),c(23)),u=c(9),l=c(12),d=c(3),j=c.n(d),b=(c(30),c.p+"static/media/header-picture.8280a002.svg"),f=c(22),p=c.n(f),m=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("https://leik-api.herokuapp.com/","/"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(e){e.MusicGames="MUSIKKLEKER"}(n||(n={}));var O=c(11),h=(c(49),c(5)),g=Object(h.a)({},n.MusicGames,{color:"#EA332B",borderColor:"#EA332B"}),v=Object(h.a)({},n.MusicGames,{color:"#FFF",backgroundColor:"#EA332B",borderColor:"#EA332B"}),x=c(0),k=function(e){var t=e.tag,c=e.selected,n=e.onClick,r=function(e){return g[e]}(t),a=function(e){return v[e]}(t);return Object(x.jsx)("div",{className:"tag",style:Object(O.a)(Object(O.a)({},r),{},{backgroundColor:c?a.backgroundColor:r.backgroundColor,color:c?a.color:r.color}),onClick:n,children:t})},C=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(r.useState)([]),s=Object(l.a)(i,2),d=s[0],f=s[1],p=[n.MusicGames];function O(){return(O=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]);var h=c.filter((function(e){return d.includes(e.category)}));return Object(x.jsxs)("div",{className:"pageContainer",children:[Object(x.jsx)("div",{className:"headerPictureContainer",children:Object(x.jsx)("img",{src:b,alt:"Sidetittel som bilde: Bare fordi det er g\xf8y med.."})}),Object(x.jsx)("div",{className:"categoryTagsContainer",children:p.map((function(e){return Object(x.jsx)(k,{tag:e,selected:d.includes(e),onClick:function(){return t=e,void(d.includes(t)?f(d.filter((function(e){return e!==t}))):f([].concat(Object(o.a)(d),[t])));var t}},e)}))}),Object(x.jsx)("div",{className:"gamesList",children:h.map((function(e){return Object(x.jsxs)("li",{className:"game",children:[Object(x.jsx)("div",{className:"gameTitle",children:e.title}),Object(x.jsx)("div",{className:"gameDescription",children:e.description})]},e.title)}))})]})};s.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.d3b85cf7.chunk.js.map