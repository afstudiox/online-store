(this["webpackJsonpsd-0x-project-frontend-online-store"]=this["webpackJsonpsd-0x-project-frontend-online-store"]||[]).push([[0],{23:function(e,t,a){e.exports=a(39)},28:function(e,t,a){},29:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),l=(a(28),a(12)),s=a(1),i=(a(29),a(2)),u=a.n(i),m=a(11),d=a(4),p=a(5),h=a(7),b=a(6);function f(){return E.apply(this,arguments)}function E(){return(E=Object(m.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.mercadolibre.com/sites/MLB/categories",e.next=3,fetch("https://api.mercadolibre.com/sites/MLB/categories");case 3:return t=e.sent,a=t.json(),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(m.a)(u.a.mark((function e(t){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.mercadolibre.com/items/".concat(t),e.next=3,fetch(a);case 3:return n=e.sent,c=n.json(),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(m.a)(u.a.mark((function e(t){var a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://api.mercadolibre.com/sites/MLB/search?q=".concat(t),e.next=3,fetch(a);case 3:return n=e.sent,c=n.json(),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t){return O.apply(this,arguments)}function O(){return(O=Object(m.a)(u.a.mark((function e(t,a){var n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.mercadolibre.com/sites/MLB/search?category=".concat(t,"&q=").concat(a),e.next=3,fetch(n);case 3:return c=e.sent,r=c.json(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).loadAPI=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:a=t.sent,e.setState({categories:a});case 4:case"end":return t.stop()}}),t)}))),e.state={categories:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.loadAPI()}},{key:"render",value:function(){var e=this.state.categories,t=this.props.loadAPICategoryAndQuery;return c.a.createElement("nav",{className:"container-categories flex-container col"},e.map((function(e){return c.a.createElement("label",{key:e.id,htmlFor:e.id,"data-testid":"category"},c.a.createElement("input",{type:"radio",id:e.id,name:"category",value:e.id,onClick:t}),e.name)})))}}]),a}(n.Component),x=["-","AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"],w=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).getProducts=function(){e.setState({cart:JSON.parse(localStorage.getItem("cart"))})},e.setCheckoutPrice=function(){var e,t=JSON.parse(localStorage.getItem("cart"));return t&&(e=t.map((function(e){return e.price*e.quantidade})).reduce((function(e,t){return e+t}))),e.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})},e.state={cart:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getProducts(),this.setCheckoutPrice()}},{key:"render",value:function(){var e=this.state.cart,t=this.setCheckoutPrice();return c.a.createElement("main",{className:"flex-container col"},c.a.createElement("div",{className:"block row"},c.a.createElement("p",{className:"block col"},"Produtos"),c.a.createElement("p",{className:"block col"},"Quantidade"),c.a.createElement("p",{className:"block col"},"Pre\xe7o")),c.a.createElement("div",{className:"block col"},e.map((function(e){return c.a.createElement("div",{key:e.id,className:"block row"},c.a.createElement("div",{className:"block row"},c.a.createElement("img",{src:e.thumbnail,alt:e.title}),c.a.createElement("p",{"data-testid":"shopping-cart-product-name"},e.title)),c.a.createElement("p",{className:"block col"},e.quantidade),c.a.createElement("p",{className:"block col"},"R$".concat(e.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}))))})),c.a.createElement("p",null,"Total: R$".concat(t))),c.a.createElement("fieldset",{className:"block col"},c.a.createElement("legend",null,"Informa\xe7\xf5es do Comprador"),c.a.createElement("div",{className:"block row"},c.a.createElement("label",{htmlFor:"checkout-fullname",className:"block row"},c.a.createElement("span",{className:"form-label-text"},"Nome Completo"),c.a.createElement("input",{type:"text",id:"checkout-fullname","data-testid":"checkout-fullname",className:"form-input"})),c.a.createElement("label",{htmlFor:"checkout-email",className:"block row"},c.a.createElement("span",{className:"form-label-text"},"Email"),c.a.createElement("input",{type:"email",id:"checkout-email","data-testid":"checkout-email",className:"form-input"}))),c.a.createElement("div",{className:"block row"},c.a.createElement("label",{htmlFor:"checkout-cpf",className:"block row"},c.a.createElement("span",{className:"form-label-text"},"CPF"),c.a.createElement("input",{type:"text",id:"checkout-cpf","data-testid":"checkout-cpf",className:"form-input"})),c.a.createElement("label",{htmlFor:"checkout-phone",className:"block row"},c.a.createElement("span",{className:"form-label-text"},"Telefone"),c.a.createElement("input",{type:"text",id:"checkout-phone","data-testid":"checkout-phone",className:"form-input"})))),c.a.createElement("fieldset",{className:"block col"},c.a.createElement("legend",null,"Endere\xe7o de Cobran\xe7a"),c.a.createElement("div",{className:"block row"},c.a.createElement("label",{htmlFor:"checkout-cep",className:"block row"},c.a.createElement("span",{className:"form-label-text"},"CEP"),c.a.createElement("input",{type:"text",id:"checkout-cep","data-testid":"checkout-cep",className:"form-input"})),c.a.createElement("label",{htmlFor:"checkout-address",className:"block row"},c.a.createElement("span",{className:"form-label-text"},"Endere\xe7o"),c.a.createElement("input",{type:"text",id:"checkout-address","data-testid":"checkout-address",className:"form-input"})),c.a.createElement("label",{htmlFor:"checkout-address-complement",className:"block row"},c.a.createElement("span",{className:"form-label-text"},"Complemento"),c.a.createElement("input",{type:"text",id:"checkout-address-complement",className:"form-input"}))),c.a.createElement("div",{className:"block row"},c.a.createElement("label",{htmlFor:"checkout-address-number",className:"block row"},c.a.createElement("span",{className:"form-label-text"},"N\xfamero"),c.a.createElement("input",{type:"text",id:"checkout-address-number",className:"form-input"})),c.a.createElement("label",{htmlFor:"checkout-address-city",className:"block row"},c.a.createElement("span",{className:"form-label-text"},"Cidade"),c.a.createElement("input",{type:"text",id:"checkout-address-city",className:"form-input"})),c.a.createElement("label",{htmlFor:"checkout-address-state",className:"block row"},c.a.createElement("span",{className:"form-label-text"},"Estado"),c.a.createElement("select",{id:"checkout-address-state",className:"form-input"},x.map((function(e){return c.a.createElement("option",{key:e,value:e},e)})))))),c.a.createElement("fieldset",{className:"block col"},c.a.createElement("legend",null,"M\xe9todo de Pagamento"),c.a.createElement("div",{className:"block"},c.a.createElement("label",{htmlFor:"checkout-boleto",className:"block row"},c.a.createElement("span",null,"Boleto"),c.a.createElement("input",{type:"radio",id:"checkout-boleto"})),c.a.createElement("label",{htmlFor:"checkout-credit-card",className:"block row"},c.a.createElement("span",null,"Cart\xe3o de Cr\xe9dito"),c.a.createElement("input",{type:"radio",id:"checkout-credit-card"})),c.a.createElement("label",{htmlFor:"checkout-credit-card",className:"block row"},c.a.createElement("span",null,"Pix"),c.a.createElement("input",{type:"radio",id:"checkout-credit-card"})))),c.a.createElement("button",{type:"button",className:"btn"},"Finalizar Compra"))}}]),a}(n.Component),j=a(16),C=a(13),P=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){var e=this.props,t=e.addProduct,a=e.product,n=e.dataTestId;return c.a.createElement("button",{type:"button","data-testid":n,onClick:function(){return t(a)}},"Adicionar ao Carrinho")}}]),a}(n.Component),I=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).addProduct=function(e){e.quantidade=1;var t=JSON.parse(localStorage.getItem("cart"));localStorage.setItem("cart",JSON.stringify([].concat(Object(C.a)(t),[e])))},e}return Object(p.a)(a,[{key:"render",value:function(){var e=this,t=this.props.results;return c.a.createElement("section",{className:"container-search flex-container"},t.map((function(t){return c.a.createElement("div",{key:t.id,"data-testid":"product",className:"container-products flex-container col"},c.a.createElement(l.b,{"data-testid":"product-detail-link",to:"/product-details/".concat(t.id)},c.a.createElement("img",{src:t.thumbnail,alt:t.title}),c.a.createElement("p",null,t.title),c.a.createElement("p",null,"R$".concat(t.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})))),c.a.createElement(P,{addProduct:e.addProduct,product:t,dataTestId:"product-add-to-cart"}))})))}}]),a}(n.Component),q=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).handleInput=function(t){var a=t.target,n=a.name,c=a.value;e.setState(Object(j.a)({},n,c))},e.loadAPIQuery=function(){var t=Object(m.a)(u.a.mark((function t(a){var n,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.value,t.next=3,y(n);case 3:c=t.sent,r=c.results,e.setState({results:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.loadAPICategoryAndQuery=function(){var t=Object(m.a)(u.a.mark((function t(a){var n,c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.target.value,t.next=3,N(n,"");case 3:c=t.sent,r=c.results,e.setState({query:n,results:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={query:"",results:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){JSON.parse(localStorage.getItem("cart"))||localStorage.setItem("cart",JSON.stringify([])),JSON.parse(localStorage.getItem("evaluations"))||localStorage.setItem("evaluations",JSON.stringify([]))}},{key:"render",value:function(){var e=this.state,t=e.query,a=e.results;return c.a.createElement("main",{className:"container-data main flex-container"},c.a.createElement(S,{loadAPICategoryAndQuery:this.loadAPICategoryAndQuery}),c.a.createElement("section",null,c.a.createElement("div",{className:"container-search-header flex-container row"},c.a.createElement("input",{type:"text",name:"query","data-testid":"query-input",value:t,onChange:this.handleInput}),c.a.createElement("button",{type:"button","data-testid":"query-button",value:t,onClick:this.loadAPIQuery},c.a.createElement("div",{className:"icon-find"})),c.a.createElement(l.b,{to:"/shopping-cart","data-testid":"shopping-cart-button"},c.a.createElement("div",{className:"icon-cart"}))),t?c.a.createElement(I,{results:a}):c.a.createElement("p",{"data-testid":"home-initial-message"},"Digite algum termo de pesquisa ou escolha uma categoria.")))}}]),a}(n.Component),A=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("p",null,"Nenhum produto foi encontrado")}}]),a}(n.Component),R=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).setEvaluation=function(){var t=e.state,a=t.email,n=t.stars,c=t.evaluation,r=e.props.match.params.id,o=JSON.parse(localStorage.getItem("evaluations"));localStorage.setItem("evaluations",JSON.stringify([].concat(Object(C.a)(o),[{id:r,email:a,stars:n,evaluation:c}]))),e.getEvaluation(),e.setState({email:"",stars:"",evaluation:""})},e.getEvaluation=function(){e.setState({evaluations:JSON.parse(localStorage.getItem("evaluations"))})},e.handleChange=function(t){var a=t.target,n=a.name,c="checkbox"===a.type||"radio"===a.type?a.checked:a.value;e.setState(Object(j.a)({},n,c))},e.addProduct=function(e){e.quantidade=1;var t=JSON.parse(localStorage.getItem("cart"));localStorage.setItem("cart",JSON.stringify([].concat(Object(C.a)(t),[e])))},e.setStars=function(t){var a=t.target.value;e.setState({stars:parseInt(a,10)})},e.rowStars=function(){for(var t=[],a=1;a<=5;a+=1){var n=c.a.createElement("button",{type:"button","data-testid":"".concat(a,"-rating"),value:a,onClick:e.setStars},a);t.push(n)}return t},e.state={product:{},attributes:[],evaluations:[],email:"",stars:0,evaluation:""},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,v(t);case 3:a=e.sent,n=a.attributes,this.setState({product:a,attributes:n}),this.getEvaluation();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.product,a=e.email,n=e.evaluation,r=e.evaluations,o=e.attributes,s=this.props.match.params.id,i=this.rowStars();return c.a.createElement("div",null,c.a.createElement("header",{className:"container-header"},c.a.createElement(l.b,{to:"/shopping-cart","data-testid":"shopping-cart-button"},c.a.createElement("div",{className:"icon-cart"}))),c.a.createElement("div",{className:"container-product-detail flex-container row"},c.a.createElement("h2",{"data-testid":"product-detail-name"},"".concat(t.title," - R$").concat(t.price)),c.a.createElement("figure",{className:"figure-container flex-container col"},c.a.createElement("img",{src:t.thumbnail,alt:"Imagem do ".concat(t.title," ")}),c.a.createElement(P,{addProduct:this.addProduct,product:t,"data-testid":"product-detail-add-to-cart"})),c.a.createElement("div",{className:"container-product-technical-detail"},c.a.createElement("h3",null,"Especifica\xe7\xf5es T\xe9cnicas"),c.a.createElement("ul",null,o.map((function(e){return c.a.createElement("li",{key:e.id},"".concat(e.name,": ").concat(e.value_name))})))),c.a.createElement("div",{className:"container-evaluation flex-container col"},c.a.createElement("h2",null,"Avalie o Produto"),c.a.createElement("input",{type:"email",placeholder:"Digite seu email","data-testid":"product-detail-email",name:"email",value:a,onChange:this.handleChange,required:!0}),c.a.createElement("div",{className:"container-stars flex-container row"},i),c.a.createElement("textarea",{placeholder:"Deixe aqui seu coment\xe1rio","data-testid":"product-detail-evaluation",name:"evaluation",value:n,onChange:this.handleChange}),c.a.createElement("button",{type:"submit","data-testid":"submit-review-btn",onClick:this.setEvaluation},"Avaliar")),c.a.createElement("div",null,"Avalia\xe7\xf5es",r.map((function(e,t){var a;return e.id===s&&(a=c.a.createElement("div",{key:t},c.a.createElement("p",null,e.email),c.a.createElement("p",null,e.stars),c.a.createElement("p",null,e.evaluation))),a})))))}}]),a}(n.Component),J=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).getProducts=function(){e.setState({cart:JSON.parse(localStorage.getItem("cart"))})},e.decreaseQuantity=function(t,a){var n=t.target.value,c=a.quantidade-parseInt(n,10),r=e.state.cart;r.filter((function(e){return e.id===a.id&&(e.quantidade>0?(e.quantidade=c,localStorage.setItem("cart",JSON.stringify(Object(C.a)(r)))):e.quantidade=0),!0})),e.getProducts()},e.increaseQuantity=function(t,a){var n=t.target.value,c=a.quantidade+parseInt(n,10),r=e.state.cart;r.filter((function(e){return e.id===a.id&&(e.quantidade=c,localStorage.setItem("cart",JSON.stringify(Object(C.a)(r)))),!0})),e.getProducts()},e.state={cart:[]},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getProducts()}},{key:"render",value:function(){var e=this,t=this.state.cart;return c.a.createElement("main",{className:"container-data"},c.a.createElement("div",{className:"block row"},c.a.createElement("p",{className:"block col"},"Produtos"),c.a.createElement("p",{className:"block col"},"Quantidade"),c.a.createElement("p",{className:"block col"},"Pre\xe7o")),!t.length&&c.a.createElement("p",{"data-testid":"shopping-cart-empty-message"},"Seu carrinho est\xe1 vazio"),t.map((function(t){return c.a.createElement("div",{key:t.id,className:"block row"},c.a.createElement("div",{className:"block row"},c.a.createElement("img",{src:t.thumbnail,alt:t.title}),c.a.createElement("p",{"data-testid":"shopping-cart-product-name"},t.title)),c.a.createElement("div",{className:"block row"},c.a.createElement("button",{type:"button",className:"btn"},"X"),"Quantidade",c.a.createElement("button",{type:"button","data-testid":"product-decrease-quantity",className:"btn",value:1,onClick:function(a){return e.decreaseQuantity(a,t)}},"-"),c.a.createElement("span",{"data-testid":"shopping-cart-product-quantity"},t.quantidade),c.a.createElement("button",{type:"button","data-testid":"product-increase-quantity",className:"btn",value:1,onClick:function(a){return e.increaseQuantity(a,t)}},"+")),c.a.createElement("span",{className:"block row"},"R$".concat(t.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}))))})),c.a.createElement("div",{className:"row"},c.a.createElement(l.b,{to:"/checkout","data-testid":"checkout-products",className:"btn"},"Finalizar Compra")))}}]),a}(n.Component);var F=function(){return c.a.createElement(l.a,{basename:"/online-store"},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/product-details/:id",component:R}),c.a.createElement(s.a,{exact:!0,path:"/checkout",component:w}),c.a.createElement(s.a,{exact:!0,path:"/shopping-cart",component:J}),c.a.createElement(s.a,{exact:!0,path:"/categories",component:S}),c.a.createElement(s.a,{exact:!0,path:"/",component:q}),c.a.createElement(s.a,{exact:!0,path:"*",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.41cf2922.chunk.js.map