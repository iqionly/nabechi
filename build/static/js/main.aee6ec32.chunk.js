(this.webpackJsonpnabechi=this.webpackJsonpnabechi||[]).push([[0],{93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(26),o=n.n(r),s=n(13),c=n(144),d=n(143),j=n(2);var l=n(6),u=n(145),b=n(146),m=n(147),p=n(148),h=n(69),x=n.n(h),g=Object(l.a)(u.a)((function(e){return{zIndex:e.theme.zIndex.drawer+1}}));function O(e){return Object(j.jsx)(g,{position:"fixed",open:e.open,children:Object(j.jsxs)(b.a,{children:[Object(j.jsx)(m.a,{color:"inherit","aria-label":"open drawer",onClick:e.handle,edge:"start",sx:{mr:2},children:Object(j.jsx)(x.a,{})}),Object(j.jsx)(p.a,{variant:"h6",noWrap:!0,component:"div",children:document.title})]})})}var f=n(75),y=Object(f.a)({palette:{primary:{light:"#e6f5e8",main:"#007a27",dark:"#004c00"},secondary:{light:"#f6e5f1",main:"#ac2a90",dark:"#790062"},mode:"light"}}),v=n(33);function k(){var e=Object(l.a)("div")((function(e){var t=e.theme;return Object(v.a)(Object(v.a)({display:"flex",alignItems:"center",padding:t.spacing(0,1)},t.mixins.toolbar),{},{justifyContent:"flex-end"})}));return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsx)(e,{})})}var w=n(137),I=n(149),L=n(150),S=n(139),E=n(151),C=n(152),_=n(71),z=n.n(_),B=n(72),F=n.n(B),G=n(73),M=n.n(G),R=n(74),W=n.n(R);function D(e){var t=Object(a.useRef)();function n(t){"Escape"===t.key&&e.open&&e.handle()}return Object(a.useEffect)((function(){return document.body.addEventListener("keydown",n),function(){document.body.removeEventListener("keydown",n)}})),Object(j.jsxs)(w.a,{theme:y,sx:{width:240,flexShrink:0,"& .MuiDrawer-paper":{width:240,boxSizing:"border-box"}},open:e.open,anchor:"left",variant:"persistent",ref:t,children:[Object(j.jsx)(k,{}),Object(j.jsx)(I.a,{}),Object(j.jsxs)(L.a,{children:[Object(j.jsxs)(S.a,{button:!0,children:[Object(j.jsx)(E.a,{children:Object(j.jsx)(z.a,{})}),Object(j.jsx)(C.a,{primary:"Home"})]},"Home"),Object(j.jsxs)(S.a,{button:!0,children:[Object(j.jsx)(E.a,{children:Object(j.jsx)(F.a,{})}),Object(j.jsx)(C.a,{primary:"Genre"})]},"Genre"),Object(j.jsxs)(S.a,{button:!0,children:[Object(j.jsx)(E.a,{children:Object(j.jsx)(M.a,{})}),Object(j.jsx)(C.a,{primary:"Setting"})]},"Setting"),Object(j.jsxs)(S.a,{button:!0,children:[Object(j.jsx)(E.a,{children:Object(j.jsx)(W.a,{})}),Object(j.jsx)(C.a,{primary:"Logout"})]},"")]})]})}var H=n(29),J=n(153),P=n(142),T=n(154);function A(e){Object(H.a)();var t=Object(l.a)(J.a)((function(e){return{textAlign:"left",padding:e.theme.spacing(1),borderRadius:"8px"}}));return Object(j.jsx)(P.a,{item:!0,xs:2,children:Object(j.jsxs)(t,{children:[Object(j.jsx)(T.a,{sx:{width:"100%",height:"auto",padding:0,borderRadius:"8px"},children:Object(j.jsx)("img",{src:e.data.featured_image,alt:e.data.judul,width:"100%",className:"list-image"})}),Object(j.jsx)(p.a,{mt:1,variant:"subtitle1",alt:e.data.judul,noWrap:!0,gutterBottom:!0,children:e.data.judul}),Object(j.jsx)(p.a,{variant:"body2",noWrap:!0,children:e.data.rating})]})},e.data.id)}function K(){var e=Object(a.useState)(["not found"]),t=Object(s.a)(e,2),n=t[0],i=t[1];return console.log(n),Object(a.useEffect)((function(){i([{judul:"Cinta Dipucuk Pohon",detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",kategori:"manga",featured_image:"https://via.placeholder.com/190x240",rating:4,id:1},{judul:"Solo Farming",detail:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",kategori:"manhwa",featured_image:"https://via.placeholder.com/190x240",rating:5,id:2},{judul:"Tales of Kocheng and Miau",detail:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",kategori:"manga",featured_image:"https://via.placeholder.com/190x240",rating:2.5,id:3},{judul:"Manusia Satu Sundulan",detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",kategori:"manga",featured_image:"https://via.placeholder.com/190x240",rating:4.5,id:4}]),console.log(n)}),[]),Object(j.jsx)(P.a,{container:!0,spacing:1,children:n.map((function(e){return Object(j.jsx)(A,{data:e})}))})}var N=Object(l.a)("main",{shouldForwardProp:function(e){return"open"!==e}})((function(e){var t=e.theme,n=e.open;return Object(v.a)(Object(v.a)({flexGrow:1,padding:t.spacing(3),transition:t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),marginLeft:"-".concat(240,"px")},n&&{transition:t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen}),marginLeft:0}),{},{background:function(e){return"dark"!==e.palette.mode?e.palette.grey(500):null}})}));function q(e){return Object(j.jsxs)(N,{open:e.open,children:[Object(j.jsx)(k,{}),Object(j.jsx)(K,{})]})}function Q(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)("light"),o=Object(s.a)(r,2);o[0],o[1];function l(e){i(!n)}return Object(j.jsxs)(d.a,{sx:{display:"flex"},children:[Object(j.jsx)(c.a,{}),Object(j.jsx)(O,{open:n,handle:l}),Object(j.jsx)(D,{open:n,handle:l}),Object(j.jsx)(q,{open:n})]})}var U=n(141);n(93);o.a.render(Object(j.jsx)(U.a,{theme:y,children:Object(j.jsx)(Q,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.aee6ec32.chunk.js.map