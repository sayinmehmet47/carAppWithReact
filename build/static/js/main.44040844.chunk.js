(this.webpackJsonpgenelreactcalismam=this.webpackJsonpgenelreactcalismam||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(24),a=c.n(s),i=(c(36),c(37),c(8)),o=c(7),j=c(13),l=c(14),d=c.p+"static/media/logo.764de6d5.svg",b=c(12),h=c(31),u=c(19),O=c.n(u),x=function(e,t){switch(t.type){case"ADD_FAVORITE":return[].concat(Object(h.a)(e),[{name:t.cars.name,body:t.cars.body,link:t.cars.link,id:O()()}]);case"REMOVE_FAVORITE":return e.filter((function(e){return e.id!==t.cars.id}));default:return e}};console.log(x);var m=c(1),f=Object(n.createContext)(),p=function(e){var t=Object(n.useReducer)(x,[]),c=Object(b.a)(t,2),r=c[0],s=c[1];return Object(m.jsx)(f.Provider,{value:{favorites:r,dispatch:s},children:e.children})},g=function(){var e=Object(n.useContext)(f).favorites,t=Object(n.useRef)();return Object(n.useEffect)((function(){console.log(t.current),window.addEventListener("scroll",(function(){window.scrollY>t.current.offsetHeight+150?t.current.classList.add(".active"):t.current.classList.remove(".active")}))})),Object(m.jsxs)("nav",{ref:t,className:"navbar fixed-top bg-primary",children:[Object(m.jsx)(i.b,{to:"/",children:Object(m.jsx)("img",{src:d,className:"App-logo",alt:"logo"})}),Object(m.jsx)(i.b,{to:"/",children:"Home"}),Object(m.jsx)(i.b,{to:"/about",children:"About"}),Object(m.jsx)(i.b,{to:"/contact",children:"Contact"}),Object(m.jsx)(i.b,{to:"/create",children:"Create"}),Object(m.jsxs)(i.b,{to:"/favorites",children:["\ud83d\udc9aFavorites(",e.length,")"]})]})};j.a,l.a;var v=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("fieldset",{children:[Object(m.jsx)("h2",{children:"Lorem ipsum dolor sit amet."}),Object(m.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt nesciunt sapiente sed exercitationem molestias cumque perferendis, sequi atque quia corporis!"}),Object(m.jsx)(i.b,{to:"/",children:"Turn back to home"})]})})},N=c(53),y=(c(22),function(){return Object(m.jsx)("div",{children:Object(m.jsx)(N.a,{children:"gfsfg"})})}),w=function(e){var t=Object(n.useState)(null),c=Object(b.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)(!0),i=Object(b.a)(a,2),o=i[0],j=i[1],l=Object(n.useState)(null),d=Object(b.a)(l,2),h=d[0],u=d[1];return Object(n.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){j(!1),s(e),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(j(!1),u(e.message))}))}),1e3),function(){return t.abort()}}),[e]),{data:r,isPending:o,error:h}},C=function(e){var t=e.cars,c=Object(n.useContext)(f),r=c.favorites,s=c.dispatch,a=Object(o.f)();return console.log(r),Object(m.jsx)("div",{className:"img-group",children:t.map((function(e){return Object(m.jsxs)("figure",{className:"img-item d-flex flex-column text-center",children:[Object(m.jsxs)(i.b,{to:"/cars/".concat(e.id),children:[Object(m.jsx)("div",{className:"flip-card",children:Object(m.jsxs)("div",{className:"flip-card-inner",children:[Object(m.jsx)("div",{className:"flip-card-front",children:Object(m.jsx)("img",{src:e.img,width:"440px",height:"240",alt:""})}),Object(m.jsxs)("div",{class:"flip-card-back",children:[Object(m.jsx)("h1",{children:e.name}),Object(m.jsx)("p",{children:e.body}),Object(m.jsx)("p",{children:"We love that guy"})]})]})}),Object(m.jsx)("figcaption",{children:e.name})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)(i.b,{to:"/cars/".concat(e.id),children:Object(m.jsx)(N.a,{className:"btn btn-info",children:"Take Info"})}),Object(m.jsx)(N.a,{className:"btn btn-danger",onClick:function(){return t=e.id,fetch("http://localhost:8000/cars/"+t,{method:"DELETE"}).then((function(){})),void a.go(0);var t},children:"Remove"}),Object(m.jsx)(N.a,{onClick:function(){return s({type:"ADD_FAVORITE",cars:{name:e.name,body:e.body,link:e.img}})},className:"btn btn-success",children:"Add to Favorite"})]})]},e.id)}))})},k=function(){var e=w("http://localhost:8000/cars"),t=e.error,c=e.isPending,n=e.data;return Object(m.jsxs)(m.Fragment,{children:[t&&Object(m.jsx)("div",{children:t}),c&&Object(m.jsxs)("div",{className:"loading",children:["Loading ",Object(m.jsx)(j.a,{className:"spinner",icon:l.b})]}),n&&Object(m.jsx)(C,{cars:n})]})},E=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Your link is wrong..."}),Object(m.jsx)(i.b,{to:"/",children:"turn back to home"})]})},S=c(52),A=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(b.a)(s,2),i=a[0],j=a[1],l=Object(n.useState)(""),d=Object(b.a)(l,2),h=d[0],u=d[1],x=Object(o.f)();return Object(m.jsxs)(S.a,{className:"border shadow border-dark bg-dark rounded text-white mt-3 p-5",action:"submit",onSubmit:function(e){e.preventDefault();var t={name:c,img:i,body:h,id:O()()};fetch("http://localhost:8000/cars/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){x.push("/")}))},style:{width:"20rem",margin:"auto auto"},children:[Object(m.jsxs)(S.a.Group,{controlId:"formBasicName",children:[Object(m.jsx)(S.a.Label,{children:"Create your Own Car"}),Object(m.jsx)("hr",{}),Object(m.jsx)(S.a.Control,{onChange:function(e){return r(e.target.value)},value:c,type:"text",placeholder:"Enter car name"})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(S.a.Group,{children:[Object(m.jsx)(S.a.Label,{children:"Png Link"}),Object(m.jsx)(S.a.Control,{type:"text",onChange:function(e){return j(e.target.value)},value:i,placeholder:"Link"})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)(S.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(m.jsx)(S.a.Label,{children:"Info about the car"}),Object(m.jsx)(S.a.Control,{type:"text",onChange:function(e){return u(e.target.value)},value:h,as:"textarea",rows:3})]}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{className:"btn btn-outline-light",children:"Submit"})]})},L=function(){var e=Object(o.g)().id,t=w("http://localhost:8000/cars/"+e),c=t.data,n=t.isPending,r=t.error;return Object(m.jsxs)("div",{className:"car-details",children:[n&&Object(m.jsxs)("div",{className:"loading",children:["Downlading ",Object(m.jsx)(j.a,{className:"spinner",icon:l.b})]}),r&&Object(m.jsx)("div",{children:"Something goes wrong!!!"}),c&&Object(m.jsxs)("div",{className:"car-body",children:[Object(m.jsx)("p",{children:c.body}),Object(m.jsx)("figure",{children:Object(m.jsx)("img",{src:c.img,alt:""})})]})]})},T=function(){var e=Object(n.useContext)(f),t=e.dispatch,c=e.favorites;return console.log(c),Object(m.jsx)("div",{className:"d-flex mt-5",children:c&&c.map((function(e){return Object(m.jsxs)("div",{className:"card text-center",style:{width:"18rem"},children:[Object(m.jsx)("img",{width:"20px",height:"200px",className:"card-img-top",src:e.link}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("p",{className:"card-text",children:e.body}),Object(m.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return t({type:"REMOVE_FAVORITE",cars:{id:e.id}})},children:"Remove"})]})]})}))})};var R=function(){return Object(m.jsx)(i.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(p,{children:[Object(m.jsx)(g,{}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(k,{})}),Object(m.jsx)(o.a,{path:"/about",children:Object(m.jsx)(v,{})}),Object(m.jsx)(o.a,{path:"/contact",children:Object(m.jsx)(y,{})}),Object(m.jsx)(o.a,{path:"/create",children:Object(m.jsx)(A,{})}),Object(m.jsx)(o.a,{path:"/favorites",children:Object(m.jsx)(T,{})}),Object(m.jsx)(o.a,{path:"/cars/:id",children:Object(m.jsx)(L,{})}),Object(m.jsx)(o.a,{path:"*",children:Object(m.jsx)(E,{})})]})]})})})};a.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.44040844.chunk.js.map