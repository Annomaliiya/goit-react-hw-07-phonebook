(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={label:"ContactForm_label__jwjzs",input:"ContactForm_input__2yiix",btnAdd:"ContactForm_btnAdd__3mbAY"}},19:function(t,e,n){t.exports={section:"Section_section__2iOBs",title:"Section_title__e532S"}},20:function(t,e,n){t.exports={contactsListItem:"ContactList_contactsListItem__25Pcp",btnDelete:"ContactList_btnDelete__2o2L8"}},21:function(t,e,n){t.exports={input:"Filter_input__3CYXi",label:"Filter_label__2NDvq"}},27:function(t,e,n){t.exports={loader:"LoaderTailSpin_loader__4SjiS"}},47:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),o=n.n(r),s=n(4),i=n(28),l=n(8),u=n(1),d=n(24),b=n(5),j=Object(d.a)({reducerPath:"contacts",baseQuery:Object(b.d)({baseUrl:"https://61e16dc463f8fc0017618bef.mockapi.io/api/contacts"}),endpoints:function(t){return{fetchContacts:t.query({query:function(){return"/contacts"},providesTags:["contacts"]}),addContact:t.mutation({query:function(t){return{url:"/contacts",method:"POST",body:t}},invalidatesTags:["contacts"]}),deleteContact:t.mutation({query:function(t){return{url:"/contacts/".concat(t),method:"DELETE"}},invalidatesTags:["contacts"]})}}}),m=j.useFetchContactsQuery,h=j.useAddContactMutation,p=j.useDeleteContactMutation,O=n(18),f=n(25),x=n.n(f),_=(Object(u.b)("phoneBook/addContact",(function(t){return{payload:Object(O.a)(Object(O.a)({},t),{},{id:x.a.generate()})}})),Object(u.b)("phoneBook/deleteContact"),Object(u.b)("phoneBook/filter")),v=Object(u.d)("",Object(l.a)({},_,(function(t,e){return e.payload}))),C=Object(u.a)({reducer:Object(l.a)({filter:v},j.reducerPath,j.reducer),middleware:function(t){return[].concat(Object(i.a)(t()),[j.middleware])},devTools:!1}),g=(n(47),n(19)),y=n.n(g),N=n(2),w=function(t){var e=t.title,n=t.children;return Object(N.jsxs)("section",{className:y.a.section,children:[Object(N.jsx)("h1",{className:y.a.title,children:e}),n]})},F=n(10),S=n(11),T=n.n(S);var A=function(){var t=Object(a.useState)(""),e=Object(F.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(F.a)(r,2),s=o[0],i=o[1],l=m().data,u=h(),d=Object(F.a)(u,2),b=d[0],j=d[1].isLoading,p=function(t){var e=t.target,n=e.name,a=e.value;"name"===n?c(a):i(a)};return Object(N.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={name:t.currentTarget.name.value,number:t.currentTarget.number.value};l.some((function(t){return t.name.toLowerCase()===n.toLowerCase()}))?alert(n+" is already in contacts."):(b(e),c(""),i(""))},children:[Object(N.jsxs)("label",{className:T.a.label,children:["Name:",Object(N.jsx)("input",{type:"text",name:"name",className:T.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n,onChange:p})]}),Object(N.jsxs)("label",{className:T.a.label,children:["Phone:",Object(N.jsx)("input",{type:"tel",name:"number",className:T.a.input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:s,onChange:p})]}),Object(N.jsx)("button",{type:"submit",className:T.a.btnAdd,disabled:j,children:"ADD CONTACT"})]})},L=(j.endpoints.fetchContacts.select(),function(t){return t.filter}),k=n(20),D=n.n(k);var q=function(t){var e=t.contacts,n=Object(s.e)((function(t){return function(t,e){var n=L(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(n)}))}(t,e)})),a=p(),c=Object(F.a)(a,1)[0];return Object(N.jsx)("ul",{className:D.a.list,children:n.map((function(t){var e=t.id,n=t.name,a=t.number;return Object(N.jsxs)("li",{children:[n,": ",a,Object(N.jsx)("button",{className:D.a.btnDelete,onClick:function(){return c(e)},children:"X"})]},e)}))})},B=n(26),P=n(27),z=n.n(P),E=function(){return Object(N.jsx)("div",{className:z.a.loader,children:Object(N.jsx)(B.TailSpin,{type:"TailSpin",color:"#00BFFF",height:100,width:100})})},M=function(){var t=m(),e=t.data,n=t.isFetching;return Object(N.jsxs)("div",{children:[n&&Object(N.jsx)(E,{}),e&&Object(N.jsx)(q,{contacts:e})]})},I=n(21),J=n.n(I);var Z=function(){var t=Object(s.e)(L),e=Object(s.d)();return Object(N.jsxs)("label",{className:J.a.label,children:["Filter"," ",Object(N.jsx)("input",{type:"text",className:J.a.input,name:"filter",value:t,onChange:function(t){return e(_(t.target.value))}})]})},Q=function(){return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(w,{title:"Phonebook",children:Object(N.jsx)(A,{})}),Object(N.jsxs)(w,{title:"Contacts",children:[Object(N.jsx)(Z,{}),Object(N.jsx)(M,{})]})]})};o.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(s.a,{store:C,children:Object(N.jsx)(Q,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.fdeb877d.chunk.js.map