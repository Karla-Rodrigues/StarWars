(this["webpackJsonpstarwars-app"]=this["webpackJsonpstarwars-app"]||[]).push([[0],{29:function(e,t,r){},65:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(0),a=r.n(c),s=r(21),i=r.n(s),o=(r(29),r(39),r(6)),u=r(17),j=r(32),h=r(28),l=r(5),p="LOAD1_PEOPLE",b="LOADN_PEOPLE",O="LOAD_SHIPS",f="LOAD_CHARACTER",d="LOAD_STARSHIP",x="LOAD_ERROR",v={swapi:[]};var m=function(e){return e.people},y=function(e){return e.ships},g=function(e){return e.character},k=function(e){return e.starship},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),{},{people:t.people});case b:return Object(l.a)(Object(l.a)({},e),{},{people:[].concat(Object(h.a)(e.people),Object(h.a)(t.people))});case O:return Object(l.a)(Object(l.a)({},e),{},{ships:t.ships});case f:return Object(l.a)(Object(l.a)({},e),{},{character:t.character});case d:return Object(l.a)(Object(l.a)({},e),{},{starship:t.starship});case x:return Object(l.a)(Object(l.a)({},e),{},{error:t.error});default:return e}},C=r(7),N=r(8),D=r(10),A=r(9),S=r(16),_=r(4),P=r.p+"static/media/logo.206d045b.png",M=function(e){Object(D.a)(r,e);var t=Object(A.a)(r);function r(){var e;Object(C.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(N.a)(r,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"banner",children:Object(n.jsx)("img",{src:P,alt:"logo"})})}}]),r}(c.Component),E=r(14),L=r.n(E),R=r(18);function F(e,t){return 1===e?{type:p,people:t}:{type:b,people:t}}function T(e){return{type:x,error:e}}var H=function(e){return function(){var t=Object(R.a)(L.a.mark((function t(r){var n,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=function(e){return r(T(e)),e},n=function(e,t){return r(F(e,t)),t},t.prev=2,fetch("https://swapi.dev/api/people/?page="+e).then((function(e){return e.json()})).then((function(t){var r=t.results.map((function(e){return[e.name,e.height,e.mass,e.birth_year,e.url.substring(28)]}));return n(e,r)})).catch((function(e){c(e)})),t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(2),t.abrupt("return",c(t.t0));case 9:case"end":return t.stop()}}),t,null,[[2,6]])})));return function(e){return t.apply(this,arguments)}}()},B=r(19),W=r.n(B),I=function(e){Object(D.a)(r,e);var t=Object(A.a)(r);function r(){return Object(C.a)(this,r),t.apply(this,arguments)}return Object(N.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.fetchPeople;e(1),e(2),e(3),e(4),e(5),e(6),e(7),e(8)}},{key:"render",value:function(){var e=this.props.people;if(!e)return Object(n.jsx)(W.a,{type:"ThreeDots",color:"#F4DC39",height:40,width:40});var t=8*this.props.item,r=t+8;return Object(n.jsx)("div",{className:"list",children:e.slice(t,r).map((function(e){return Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{class:"far fa-user fa-2x"}),Object(n.jsx)("h3",{children:Object(n.jsx)(S.b,{className:"link-style",to:"/character/".concat(e[4]),children:e[0]})}),Object(n.jsxs)("h4",{children:[" Height: ",e[1]," "]}),Object(n.jsxs)("h4",{children:[" Mass: ",e[2]," "]}),Object(n.jsxs)("h4",{children:[" Birth Year: ",e[3]," "]})]})},e[4])}))})}}]),r}(c.Component),J=Object(u.b)((function(e){return{people:m(e)}}),(function(e){return Object(o.bindActionCreators)({fetchPeople:H},e)}))(I);var K=function(){return function(){var e=Object(R.a)(L.a.mark((function e(t){var r,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){return t(T(e)),e},r=function(e){return t({type:O,ships:e}),e},e.prev=2,e.next=5,fetch("https://swapi.dev/api/starships/").then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return[e.name,e.model,e.starship_class,e.url.substring(31)]}));return r(t)})).catch((function(e){n(e)}));case 5:e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(2),e.abrupt("return",n(e.t0));case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},Y=function(e){Object(D.a)(r,e);var t=Object(A.a)(r);function r(){return Object(C.a)(this,r),t.apply(this,arguments)}return Object(N.a)(r,[{key:"componentDidMount",value:function(){(0,this.props.fetchShips)()}},{key:"render",value:function(){var e=this.props.ships;if(!e)return Object(n.jsx)(W.a,{type:"ThreeDots",color:"#F4DC39",height:40,width:40});var t=this.props.item,r=t+1;return Object(n.jsx)("div",{className:"list",children:e.slice(t,r).map((function(e){return Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{children:[Object(n.jsx)("i",{class:"far fa-star fa-2x"}),Object(n.jsx)("h3",{children:Object(n.jsx)(S.b,{className:"link-style",to:"/starship/".concat(e[3]),children:e[0]})}),Object(n.jsxs)("h4",{children:[" Model: ",e[1]," "]}),Object(n.jsxs)("h4",{children:[" Class: ",e[2]," "]})]})},e[3])}))})}}]),r}(c.Component),q=Object(u.b)((function(e){return{ships:y(e)}}),(function(e){return Object(o.bindActionCreators)({fetchShips:K},e)}))(Y),G=function(e){Object(D.a)(r,e);var t=Object(A.a)(r);function r(){return Object(C.a)(this,r),t.apply(this,arguments)}return Object(N.a)(r,[{key:"render",value:function(){var e=this.props,t=e.item,r=e.onNext,c=e.onPrevious;return Object(n.jsxs)("div",{children:[0!==t&&Object(n.jsx)("span",{onClick:function(){return c()},className:"pageButton",children:Object(n.jsx)("i",{class:"fas fa-chevron-circle-left"})}),11!==t&&Object(n.jsx)("span",{onClick:function(){return r()},className:"pageButton",children:Object(n.jsx)("i",{class:"fas fa-chevron-circle-right"})})]})}}]),r}(c.Component);var z=function(e){return function(){var t=Object(R.a)(L.a.mark((function t(r){var n,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(e){return r(T(e)),e},n=function(e){return r({type:f,character:e}),e},t.prev=2,t.next=5,fetch("https://swapi.dev/api/people/"+e).then((function(e){return e.json()})).then((function(e){var t=[e.name,e.height,e.mass,e.hair_color,e.skin_color,e.eye_color,e.birth_year,e.gender];return n(t)})).catch((function(e){c(e)}));case 5:t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(2),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()},Q=function(e){Object(D.a)(r,e);var t=Object(A.a)(r);function r(){return Object(C.a)(this,r),t.apply(this,arguments)}return Object(N.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;(0,this.props.fetchCharacter)(e)}},{key:"render",value:function(){var e=this.props.character;return e?Object(n.jsx)("div",{className:"gray-box",children:Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("i",{class:"far fa-user fa-2x"}),Object(n.jsxs)("h3",{children:[" ",e[0]," "]}),Object(n.jsxs)("h4",{children:[" Height: ",e[1]," "]}),Object(n.jsxs)("h4",{children:[" Mass: ",e[2]," "]}),Object(n.jsxs)("h4",{children:[" Hair Color: ",e[3]," "]}),Object(n.jsxs)("h4",{children:[" Skin Color: ",e[4]," "]}),Object(n.jsxs)("h4",{children:[" Eye Color: ",e[5]," "]}),Object(n.jsxs)("h4",{children:[" Birth Year: ",e[6]," "]}),Object(n.jsxs)("h4",{children:[" Gender: ",e[7]," "]}),Object(n.jsx)(S.b,{className:"link-style",to:"/StarWars",children:Object(n.jsx)("i",{class:"fas fa-reply"})})]})}):Object(n.jsx)(W.a,{type:"ThreeDots",color:"#F4DC39",height:40,width:40})}}]),r}(c.Component),U=Object(u.b)((function(e){return{character:g(e)}}),(function(e){return Object(o.bindActionCreators)({fetchCharacter:z},e)}))(Q);var V=function(e){return function(){var t=Object(R.a)(L.a.mark((function t(r){var n,c;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(e){return r(T(e)),e},n=function(e){return r({type:d,starship:e}),e},t.prev=2,t.next=5,fetch("https://swapi.dev/api/starships/"+e).then((function(e){return e.json()})).then((function(e){var t=[e.name,e.model,e.starship_class];return n(t)})).catch((function(e){c(e)}));case 5:t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(2),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()},X=function(e){Object(D.a)(r,e);var t=Object(A.a)(r);function r(){return Object(C.a)(this,r),t.apply(this,arguments)}return Object(N.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;(0,this.props.fetchStarship)(e)}},{key:"render",value:function(){var e=this.props.starship;return e?Object(n.jsx)("div",{className:"gray-box",children:Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("i",{class:"far fa-star fa-2x"}),Object(n.jsxs)("h3",{children:[" ",e[0]," "]}),Object(n.jsxs)("h4",{children:[" Model: ",e[1]," "]}),Object(n.jsxs)("h4",{children:[" Class: ",e[2]," "]}),Object(n.jsx)(S.b,{className:"link-style",to:"/StarWars",children:Object(n.jsx)("i",{class:"fas fa-reply"})})]})}):Object(n.jsx)(W.a,{type:"ThreeDots",color:"#F4DC39",height:80,width:80})}}]),r}(c.Component),Z=Object(u.b)((function(e){return{starship:k(e)}}),(function(e){return Object(o.bindActionCreators)({fetchStarship:V},e)}))(X),$=function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col",children:[Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/2karla/",children:Object(n.jsx)("i",{class:"fab fa-linkedin fa-2x"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:'"https://github.com/Karla-Rodrigues',children:Object(n.jsx)("i",{class:"fab fa-github-square fa-2x"})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"mailto:karlaadautor@gmail.com",children:Object(n.jsx)("i",{class:"fas fa-envelope fa-2x"})})})]}),Object(n.jsx)("p",{className:"footer",children:"\xa9\xa0Copyright Karla Rodrigues"})]})})})},ee=function(e){Object(D.a)(r,e);var t=Object(A.a)(r);function r(){var e;Object(C.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={item:0},e.handleNext=function(){var t=e.state.item;t+=1,e.setState({item:t})},e.handlePrevious=function(){var t=e.state.item;t>0&&(t-=1),e.setState({item:t})},e}return Object(N.a)(r,[{key:"render",value:function(){var e=this;return Object(n.jsx)(S.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(_.a,{exact:!0,path:"/StarWars",render:function(t){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(M,{}),Object(n.jsx)(J,{item:e.state.item}),Object(n.jsx)(q,{item:e.state.item}),Object(n.jsx)(G,{onNext:e.handleNext,onPrevious:e.handlePrevious}),Object(n.jsx)($,{})]})}}),Object(n.jsx)(_.a,{exact:!0,path:"/character/:id",render:function(e){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(M,{}),Object(n.jsx)(U,Object(l.a)({},e)),Object(n.jsx)($,{})]})}}),Object(n.jsx)(_.a,{exact:!0,path:"/starship/:id",render:function(e){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(M,{}),Object(n.jsx)(Z,Object(l.a)({},e)),Object(n.jsx)($,{})]})}})]})})})}}]),r}(c.Component),te=r(33),re=Object(o.createStore)(w,Object(te.composeWithDevTools)(Object(o.applyMiddleware)(j.a)));t.default=re;i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(u.a,{store:re,children:Object(n.jsx)(ee,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.cfeef6ec.chunk.js.map