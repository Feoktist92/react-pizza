"use strict";(self.webpackChunkreact_pizza=self.webpackChunkreact_pizza||[]).push([[72],{4152:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var s=n(1413),o=n(9439),r=n(2791),i=n(9434),a=n(1087),c=n(9004),l=n(2451),d=n(5355),h=n(5229),u="Modal_wrap__P0Cyp",p="Modal_overlay__b+zEz",x="Modal_modal__yEgVW",j="Modal_title__KuCmT",k="Modal_form__Kth9F",_="Modal_animated__J-z9x",v="Modal_show__1CfSF",C=n(7689),m=n(184),w=function(t){var e=t.open,n=t.setOpen,s=(0,i.I0)(),a=(0,C.s0)(),l=r.useState(""),d=(0,o.Z)(l,2),h=d[0],w=d[1],f=r.useState(""),g=(0,o.Z)(f,2),b=g[0],L=g[1],M=r.useState(""),N=(0,o.Z)(M,2),B=N[0],y=N[1],H=(0,i.v9)(c.KY).totalPrice;return(0,m.jsx)("div",{className:"".concat(p," ").concat(_," ").concat(e?"".concat(v):""),children:(0,m.jsx)("div",{className:u,children:(0,m.jsxs)("div",{className:x,children:[(0,m.jsxs)("svg",{height:"200",viewBox:"0 0 200 200",width:"200",onClick:function(){return n(!1)},children:[(0,m.jsx)("title",{}),(0,m.jsx)("path",{d:"M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"})]}),(0,m.jsx)("h3",{className:j,children:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443"}),(0,m.jsxs)("div",{className:k,children:[(0,m.jsx)("input",{value:h,onChange:function(t){return w(t.target.value)},type:"text",placeholder:"\u0418\u043c\u044f"}),(0,m.jsx)("input",{value:b,onChange:function(t){return L(t.target.value)},type:"tel",placeholder:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,m.jsx)("input",{value:B,onChange:function(t){return y(t.target.value)},type:"text",placeholder:"E-mail"}),(0,m.jsxs)("b",{children:[H," \u20bd"]}),(0,m.jsx)("input",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",className:"button pay-btn",onClick:function(){h&&b&&B?(alert("\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437! \u0421\u043a\u043e\u0440\u043e \u043c\u044b \u0441\u0432\u044f\u0436\u0435\u043c\u0441\u044f \u0441 \u0412\u0430\u043c\u0438!"),n(!1),w(""),L(""),y(""),s((0,c.kH)()),a("/cart")):alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f")}})]})]})})})},f=function(){var t=(0,i.I0)(),e=(0,i.v9)(c.KY),n=e.products,u=e.totalPrice,p=(0,r.useState)(!1),x=(0,o.Z)(p,2),j=x[0],k=x[1],_=n.reduce((function(t,e){return e.count+t}),0);return u?(0,m.jsxs)("div",{className:"container container--cart",children:[(0,m.jsxs)("div",{className:"cart",children:[(0,m.jsxs)("div",{className:"cart__top",children:[(0,m.jsxs)("h2",{className:"content__title",children:[(0,m.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),(0,m.jsxs)("div",{className:"cart__clear",onClick:function(){window.confirm("\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?")&&t((0,c.kH)())},children:[(0,m.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,m.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,m.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,m.jsx)("span",{children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),(0,m.jsx)("div",{className:"content__items",children:n.map((function(t){return t.count>0&&(0,r.createElement)(l.b,(0,s.Z)((0,s.Z)({},t),{},{key:"".concat(t.id,"_").concat(t.type,"_").concat(t.size)}))}))}),(0,m.jsxs)("div",{className:"cart__bottom",children:[(0,m.jsxs)("div",{className:"cart__bottom-details",children:[(0,m.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",(0,m.jsxs)("b",{children:[_," \u0448\u0442."]})]}),(0,m.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",(0,m.jsxs)("b",{children:[u," \u20bd"]})]})]}),(0,m.jsxs)("div",{className:"cart__bottom-buttons",children:[(0,m.jsxs)(a.rU,{onClick:function(){t((0,h.gI)(""))},to:"/",className:"button button--outline button--add go-back-btn",children:[(0,m.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,m.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,m.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),(0,m.jsx)("div",{className:"button pay-btn open-modal-btn",onClick:function(){return k(!0)},children:(0,m.jsx)("span",{children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})})]})]})]}),(0,m.jsx)(w,{open:j,setOpen:k})]}):(0,m.jsx)(d.S,{})}}}]);
//# sourceMappingURL=Cart.2716158a.chunk.js.map