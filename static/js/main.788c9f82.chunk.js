(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={li:"ContactList_li__25njb"}},16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),i=(n(16),n(11)),o=n(2),s=n(3),u=n(5),l=n(4),b=(n(17),n(8)),m=n(9),d=n.n(m),h=n(0),j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={number:"",name:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(b.a)({},a,r))},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state),e.setState({number:"",name:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{children:["Enter your name",Object(h.jsx)("input",{type:"text",name:"name",value:t,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{children:["Enter your tel",Object(h.jsx)("input",{type:"tel",name:"number",onChange:this.handleChange,value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(h.jsx)("button",{type:"submit",className:d.a.cord,children:"Add contact"})]})]})}}]),n}(a.Component);function f(e){var t=e.value,n=e.onChangeFilter;return Object(h.jsx)("div",{children:Object(h.jsx)("input",{type:"text",className:"input-filter",value:t,onChange:function(e){return n(e.target.value)}})})}var v=n(10),p=n.n(v);function O(e){var t=e.contacts,n=e.onRemove;return Object(h.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(h.jsxs)("li",{className:p.a.li,children:[a," : ",r,Object(h.jsx)("button",{onClick:function(){return n(t)},children:"delete"})]},t)}))})}var C=n(21),x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.onSubmit=function(t){var n=t.name,a=t.number,r=n;if(e.state.contacts.some((function(e){return e.name.toLowerCase()===r.toLowerCase()})))alert("user with name ".concat(n," is already exists!"));else{var c={id:Object(C.a)(),name:n,number:a};e.setState((function(e){return{contacts:[].concat(Object(i.a)(e.contacts),[c])}}))}},e.onChangeFilter=function(t){e.setState({filter:t})},e.getNamesVisible=function(){var t=e.state,n=t.contacts,a=t.filter;return a?n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())})):[]},e.onRemoveContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.filter,t=this.getNamesVisible();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(j,{onSubmit:this.onSubmit}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(f,{value:e,onChangeFilter:this.onChangeFilter}),Object(h.jsx)(O,{contacts:t,onRemove:this.onRemoveContact})]})}}]),n}(a.Component);c.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))},9:function(e,t,n){e.exports={cord:"ContactForm_cord__Wcx-R"}}},[[19,1,2]]]);
//# sourceMappingURL=main.788c9f82.chunk.js.map