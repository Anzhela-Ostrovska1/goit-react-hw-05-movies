"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[138],{138:function(e,n,s){s.r(n),s.d(n,{default:function(){return d}});var i=s(439),r=s(791),t=s(689),c=s(87),o=s(610);var a={movieInfo:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US&api_key=f71c5261a9fba20ceeb62f41ed4cce9c")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There are no movies"))}))}},l=s(184),d=function(){var e,n,s=(0,t.TH)(),d=(0,r.useRef)(null!==(e=null===(n=s.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),h=(0,r.useState)([]),u=(0,i.Z)(h,2),v=u[0],j=u[1],p=(0,t.UO)().movieId;(0,r.useEffect)((function(){p&&a.movieInfo(p).then((function(e){j(e)})).catch((function(e){console.log(e)}))}),[p]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(c.rU,{to:d.current,className:o.Z.ButtonBack,children:"Go back"}),(0,l.jsxs)("div",{className:o.Z.MovieInfoContainer,children:[(0,l.jsx)("img",{src:v.poster_path?"https://image.tmdb.org/t/p/w500".concat(v.poster_path):"<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>",width:250,alt:"poster"}),(0,l.jsxs)("div",{className:o.Z.MovieInfo,children:[(0,l.jsx)("h2",{children:v.original_title}),(0,l.jsxs)("p",{children:["User Score: ",Math.round(v.vote_average/10*100),"%"]}),(0,l.jsx)("h3",{children:"Overview"}),(0,l.jsx)("p",{children:v.overview}),(0,l.jsx)("h4",{children:"Genres"}),v.genres?(0,l.jsx)("p",{children:v.genres.map((function(e){return e.name})).join(", ")}):(0,l.jsx)("p",{children:v.genres})]})]}),(0,l.jsxs)("div",{className:o.Z.Container,children:[(0,l.jsx)("h3",{children:"Additional information "}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{className:o.Z.CastAndReviews,to:"cast",children:(0,l.jsx)("p",{children:"Cast"})},p)}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{className:o.Z.CastAndReviews,to:"reviews",children:(0,l.jsx)("p",{children:"Reviews"})},p)})]})]}),(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(t.j3,{})})]})}}}]);
//# sourceMappingURL=138.f0e1535a.chunk.js.map