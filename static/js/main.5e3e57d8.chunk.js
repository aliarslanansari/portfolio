(this["webpackJsonpaliarslan-portfolio"]=this["webpackJsonpaliarslan-portfolio"]||[]).push([[0],{18:function(n,t,e){},19:function(n,t,e){},23:function(n,t,e){"use strict";e.r(t);var r,o,i,c,a,s,l,f,d,p=e(1),u=e.n(p),j=e(8),b=e.n(j),h=(e(18),e(2)),m=(e(19),e(3)),x=function(){return Object(m.b)(r||(r=Object(h.a)(["\n    display: inline-block;\n    position: relative;\n    width: max-content;\n    &:after {\n      content: '';\n      position: absolute;\n      width: 100%;\n      transform: scaleX(0);\n      height: 1.5px;\n      bottom: 0;\n      left: 0;\n      background-color: #3355ff;\n      transform-origin: bottom right;\n      transition: transform 0.25s ease-out;\n    }\n    &:hover:after {\n      transform: scaleX(1);\n      transform-origin: bottom left;\n    }\n  "])))},g=e(13),O=e(0),w=m.c.nav(o||(o=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #fff;\n  transform: ",";\n  height: 100vh;\n  width: 15rem;\n  text-align: right;\n  padding: 0 2rem 0 2rem;\n  position: absolute;\n  top: 0;\n  right: 0;\n  transition: transform 0.3s ease-in-out;\n\n  @media (max-width: 576px) {\n    width: 100%;\n    padding: 0;\n  }\n\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: #0d0c1d;\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: 576px) {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: #343078;\n    }\n  }\n"])),(function(n){return n.open?"scaleX(100%)":"scaleX(0)"})),v=m.c.li(i||(i=Object(h.a)(["\n  font-size: 1.5rem;\n  color: #3355ff;\n  margin: 1rem 5rem;\n  ","\n  @media (max-width: 576px) {\n    /* text-align: center; */\n  }\n"])),x()),y=function(n){var t=n.open;return Object(O.jsxs)(w,{open:t,children:[Object(O.jsx)(v,{href:"/",children:"Blog"}),Object(O.jsx)(v,{href:"/",children:"Project"}),Object(O.jsx)(v,{href:"/",children:"About"}),Object(O.jsx)(v,{href:"/",children:"Contact"})]})},k=m.c.button(c||(c=Object(h.a)(["\n  position: absolute;\n  top: 1rem;\n  right: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"])),(function(n){n.open;return"black"}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),F=function(n){var t=n.open,e=n.setOpen;return Object(O.jsxs)(k,{open:t,onClick:function(){return e(!t)},children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})},C=function(n){n.navigationMenuOptions;var t=u.a.useState(!1),e=Object(g.a)(t,2),r=e[0],o=e[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(F,{open:r,setOpen:o}),Object(O.jsx)(y,{open:r,setOpen:o})]})},z=e(12),S=m.c.nav(a||(a=Object(h.a)(["\n  user-select: none;\n  background-color: white;\n  height: 4rem;\n  display: flex;\n  padding: 0 5rem 0 5rem;\n  position: sticky;\n  top: 0;\n  align-items: center;\n  justify-content: space-between;\n  background: #ffffff;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.04);\n"]))),X=m.c.h1(s||(s=Object(h.a)(["\n  font-weight: 400;\n  cursor: pointer;\n  font-family: 'DM Serif Text';\n  font-size: 2rem;\n  white-space: nowrap;\n"]))),B=m.c.ul(l||(l=Object(h.a)(["\n  list-style-type: none;\n  color: #3355ff;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: row;\n"]))),M=m.c.li(f||(f=Object(h.a)(["\n  font-size: 1.2rem;\n  color: #3355ff;\n  cursor: pointer;\n  margin-left: 3rem;\n  ","\n"])),x()),A=function(){var n=Object(z.useMediaQuery)({maxWidth:700});return Object(O.jsxs)(S,{children:[Object(O.jsx)(X,{children:"Ali Arslan"}),n?Object(O.jsx)(C,{}):Object(O.jsxs)(B,{children:[Object(O.jsx)(M,{children:"Blog"}),Object(O.jsx)(M,{children:"Project"}),Object(O.jsx)(M,{children:"About"}),Object(O.jsx)(M,{children:"Contact"})]})]})},P=Object(m.a)(d||(d=Object(h.a)(["\n  @import url('http://fonts.cdnfonts.com/css/segoe-ui-4');\n  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap');\n  body {\n    background-color: #F9F9FB;\n    font-family: 'Segoe UI', sans-serif;\n  }\n"])));var T=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(P,{whiteColor:!0}),Object(O.jsx)(A,{})]})},D=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,24)).then((function(t){var e=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;e(n),r(n),o(n),i(n),c(n)}))};b.a.render(Object(O.jsx)(u.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),D()}},[[23,1,2]]]);
//# sourceMappingURL=main.5e3e57d8.chunk.js.map