(()=>{"use strict";var e={862:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,d){function r(e){try{s(n.next(e))}catch(e){d(e)}}function u(e){try{s(n.throw(e))}catch(e){d(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,u)}s((n=n.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=i(o(147)),r=new class{constructor(e){this.fileName=e,this.route=`./data/${e}.txt`,this.encode="utf-8"}save(e,t,o,i,r,u){return n(this,void 0,void 0,(function*(){let n,s=[],c={name:e,description:t,code:o,imgUrl:i,price:r,stock:u},a=yield d.default.promises.readFile("./data/products.txt","utf-8");try{if(!(a.length>0))return console.log("case new"),s.push(Object.assign(Object.assign({},c),{id:0})),console.log("El id del producto es: 0"),0;{let e=yield JSON.parse(a),t=e[e.length-1].id+1;console.log("case full"),s.push(...e,Object.assign(Object.assign({},c),{id:t})),console.log(`El id del producto creado es: ${e.length}`),n=t}let e=JSON.stringify(s);return yield d.default.promises.writeFile("./data/products.txt",e),n}catch(e){console.log(e)}}))}}("products");t.default=r},220:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,d){function r(e){try{s(n.next(e))}catch(e){d(e)}}function u(e){try{s(n.throw(e))}catch(e){d(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,u)}s((n=n.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=i(o(860)),{Router:r}=d.default,u=r();u.post("/",((e,t)=>n(void 0,void 0,void 0,(function*(){t.send("cart created")})))),u.delete("/:id",((e,t)=>n(void 0,void 0,void 0,(function*(){t.send("cart empty/deleted")})))),u.get("/:id/products",((e,t)=>n(void 0,void 0,void 0,(function*(){t.send("products in cart list")})))),u.post("/:id/products",((e,t)=>n(void 0,void 0,void 0,(function*(){t.send("product added to cart")})))),u.delete("/:id/productos/:id_prod",((e,t)=>n(void 0,void 0,void 0,(function*(){t.send("product deleted from cart")})))),t.default=u},18:function(e,t,o){var n=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(i,d){function r(e){try{s(n.next(e))}catch(e){d(e)}}function u(e){try{s(n.throw(e))}catch(e){d(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(r,u)}s((n=n.apply(e,t||[])).next())}))},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const d=i(o(860)),r=i(o(862)),{Router:u}=d.default,s=u();s.get("/:id?",((e,t)=>n(void 0,void 0,void 0,(function*(){t.send("products list / product")})))),s.post("/",((e,t)=>n(void 0,void 0,void 0,(function*(){console.log(e.body),t.send(r.default.save(e.body.name,e.body.description,e.body.code,e.body.imgUrl,e.body.price,e.body.stock))})))),s.put("/:id?",((e,t)=>n(void 0,void 0,void 0,(function*(){t.send("product updated")})))),s.delete("/:id?",((e,t)=>n(void 0,void 0,void 0,(function*(){t.send("product deleted")})))),t.default=s},505:function(e,t,o){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(o(860)),d=n(o(18)),r=n(o(220)),u=(0,i.default)();u.listen(8080,(()=>{console.log("Servidor http escuchando en el puerto 8080")})).on("error",(e=>console.log(`Error en el servidor ${e}`))),u.use(i.default.json()),u.use(i.default.urlencoded({extended:!0})),u.set("view engine","ejs"),u.set("views","./views"),u.use(i.default.static("./public")),u.use("/api/products",d.default),u.use("/api/cart",r.default)},860:e=>{e.exports=require("express")},147:e=>{e.exports=require("fs")}},t={};!function o(n){var i=t[n];if(void 0!==i)return i.exports;var d=t[n]={exports:{}};return e[n].call(d.exports,d,d.exports,o),d.exports}(505)})();