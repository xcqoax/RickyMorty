(this["webpackJsonpapp-rick-and-morty"]=this["webpackJsonpapp-rick-and-morty"]||[]).push([[0],{101:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(28),c=n.n(l),o=(n(87),n(78)),i=n(13),m=(n(88),n(70)),s=n(71),u=n(43),p=n(81),E=n(80),d=n(72),h=n(51),g=n(30),v=n(46),f=(n(89),n(36)),b=n(76),y=n(77),j=n(75),w=n(52),O=n(33);function k(){var e=Object(d.a)(['\n        query{\n          characters (filter:{name:"','"}){\n            results{\n              name\n              image\n              type\n              gender\n              species\n            }\n          }        \n        }\n    ']);return k=function(){return e},e}function C(e){var a,n=Object(t.useState)({nombre:"",imagen:"",tipo:"",genero:"",especies:""}),l=Object(h.a)(n,2),c=l[0],o=l[1],i=Object(t.useState)(!1),m=Object(h.a)(i,2),s=m[0],u=m[1],p=function(){return u(!1)};function E(e){var n=e.target.innerText;a.find((function(e){e.name===n&&o({nombre:e.name,imagen:e.image,tipo:e.type,genero:e.gender,especies:e.species})})),u(!0)}var d=Object(g.gql)(k(),e.name),C=Object(g.useQuery)(d),N=C.loading,B=C.error,x=C.data;if(N)return r.a.createElement(f.a,null,r.a.createElement("div",{className:"row justify-content-center mt50"},r.a.createElement(j.a,{animation:"border",variant:"primary"})));if(B)return r.a.createElement("p",null,"Error");var I=x.characters.results;return a=I,r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(b.a,{className:"justify-content-md-center"},I.map((function(e){return r.a.createElement(y.a,{md:6,xs:12},r.a.createElement(v.a,{style:{width:"18rem"},className:"mt-2 alinear"},r.a.createElement(v.a.Img,{variant:"top",src:e.image}),r.a.createElement(v.a.Body,{className:"btnInfo"},r.a.createElement(w.a,{onClick:E,variant:"outline-primary"}," ",e.name," "))))}))),r.a.createElement(O.a,{show:s,onHide:p},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,null,c.nombre)),r.a.createElement(O.a.Body,{className:"informacionGeneralPersonaje"},r.a.createElement("img",{src:c.imagen}),r.a.createElement("ul",{className:"infoPersonaje"},r.a.createElement("li",null," ",r.a.createElement("strong",null,"Especie:")," ",c.especies," "),r.a.createElement("li",null," ",r.a.createElement("strong",null,"Genero:")," ",c.genero," "),r.a.createElement("li",null," ",r.a.createElement("strong",null,"Tipo:")," ",c.tipo," "))),r.a.createElement(O.a.Footer,null,r.a.createElement(w.a,{variant:"secondary",onClick:p},"Close")))))}var N=function(e){Object(p.a)(n,e);var a=Object(E.a)(n);function n(e){var t;return Object(m.a)(this,n),(t=a.call(this,e)).state={inputName:""},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t}return Object(s.a)(n,[{key:"handleChange",value:function(e){this.setState({inputName:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"navPersonaje"},r.a.createElement(f.a,null,r.a.createElement("input",{type:"text",placeholder:"Escribe el personaje",value:this.state.inputName,onChange:this.handleChange}))),r.a.createElement(C,{name:this.state.inputName}))}}]),n}(t.Component);function B(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{path:"/",component:N}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=new g.ApolloClient({uri:"https://rickandmortyapi.com/graphql",cache:new g.InMemoryCache});c.a.render(r.a.createElement(g.ApolloProvider,{client:x},r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,a,n){e.exports=n(101)},87:function(e,a,n){},88:function(e,a,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.01615262.chunk.js.map