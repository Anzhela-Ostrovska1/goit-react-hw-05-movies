"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[939],{939:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(439),s=t(791),c=t(689);var i={review:function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1&api_key=f71c5261a9fba20ceeb62f41ed4cce9c")).then((function(e){return e.ok?e.json():Promise.reject(new Error("There are no movies"))}))}},a=t(610),o=t(184),u=function(){var e=(0,s.useState)([]),n=(0,r.Z)(e,2),t=n[0],u=n[1],h=(0,c.UO)().movieId,l=(0,s.useState)(null),f=(0,r.Z)(l,2),v=f[0],d=f[1];return(0,s.useEffect)((function(){h&&i.review(h).then((function(e){u(e)})).catch((function(e){d(e)}))}),[h]),(0,o.jsxs)("div",{children:[v&&(0,o.jsx)("h1",{children:v.message}),t&&t.results&&t.results.length>0?t.results.map((function(e){return(0,o.jsxs)("div",{className:a.Z.ReviewsContainer,children:[(0,o.jsxs)("p",{children:[(0,o.jsx)("span",{className:a.Z.ReviewsAuthor,children:"Author:"})," ",e.author]}),(0,o.jsx)("p",{children:e.content})]},e.id)})):(0,o.jsx)("p",{children:"We don't have any reviews for this movie."})]})}}}]);
//# sourceMappingURL=939.44f573a5.chunk.js.map