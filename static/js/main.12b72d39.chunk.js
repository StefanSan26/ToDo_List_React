(this.webpackJsonpcurso_intro_react=this.webpackJsonpcurso_intro_react||[]).push([[0],[,,,,,,,,,,function(e,t,o){},,,,,,function(e,t,o){},function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(2),c=o.n(n),a=o(7),r=o.n(a),s=(o(16),o(6)),i=o(3);function d(){var e=function(e,t){var o=c.a.useState(!1),n=Object(i.a)(o,2),a=n[0],r=n[1],s=c.a.useState(!0),d=Object(i.a)(s,2),l=d[0],u=d[1],j=c.a.useState(!0),b=Object(i.a)(j,2),O=b[0],m=b[1],h=c.a.useState(t),x=Object(i.a)(h,2),f=x[0],p=x[1];return c.a.useEffect((function(){setTimeout((function(){try{var o,n=localStorage.getItem(e);n?o=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),o=t),p(o),m(!1),u(!0)}catch(a){r(a)}}),1e3)}),[l]),{item:f,saveItem:function(t){try{var o=JSON.stringify(t);localStorage.setItem(e,o),p(t)}catch(a){r(a)}},loading:O,error:a,sincronize:function(){m(!0),u(!1)}}}("TODOS_V1",[]),t=e.item,o=e.saveItem,n=e.loading,a=e.sincronize,r=e.error,d=c.a.useState(""),l=Object(i.a)(d,2),u=l[0],j=l[1],b=c.a.useState(!1),O=Object(i.a)(b,2),m=O[0],h=O[1],x=c.a.useState(!1),f=Object(i.a)(x,2),p=f[0],T=f[1],g=c.a.useState(""),v=Object(i.a)(g,2),S=v[0],N=v[1],C=c.a.useState(-1),E=Object(i.a)(C,2),I=E[0],y=E[1],V=t.filter((function(e){return!!e.completed})).length,k=t.length,D=[];D=u<1?t:t.filter((function(e){var t=e.text.toLowerCase(),o=u.toLowerCase();return t.includes(o)}));return{loading:n,error:r,totalTodos:k,completedTodos:V,searchValue:u,setSearchValue:j,searchedTodo:D,completeTodo:function(e){var n=t.findIndex((function(t){return t.text===e})),c=Object(s.a)(t);c[n].completed?c[n].completed=!1:c[n].completed=!0,o(c)},addTodo:function(e){var n=Object(s.a)(t);n.push({completed:!1,text:e}),o(n)},deleteTodo:function(e){var n=t.findIndex((function(t){return t.text===e})),c=Object(s.a)(t);c.splice(n,1),o(c)},openModal:m,setOpenModal:h,edit:p,onEdit:function(e){var o=t.findIndex((function(t){return t.text===e}));y(o),T(!0),N(e)},setEdit:T,setEditValue:N,editValue:S,editTodo:function(e){var n=Object(s.a)(t);n[I]&&(console.log(n),n[I].text=e),o(n)},eraseAll:function(){o([])},sincronizeTodos:a}}o(17);var l=o(1);var u=function(e){return Object(l.jsxs)("section",{children:[Object(l.jsxs)("h2",{className:"TodoCounter ".concat(e.loading&&"TodoCounter--loading"),children:["Has completado ",e.completedTodos," de ",e.totalTodos," ToDos"]}),e.children]})},j=(o(19),o(11)),b=o(5);var O=function(e){return Object(l.jsxs)("li",{className:"TodoItem",children:[Object(l.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:Object(l.jsx)(j.a,{})}),Object(l.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(l.jsx)("span",{className:"Icon Icon-edit",onClick:e.onEdit,children:Object(l.jsx)(b.a,{})}),Object(l.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:Object(l.jsx)(b.b,{})})]})};o(20);var m=function(e){var t=e.render||e.children;return Object(l.jsxs)("section",{className:"TodoList-container",children:[e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySearchResults(e.searchText),Object(l.jsx)("ul",{children:!e.loading&&!e.error&&e.searchedTodos.map(t)})]})};o(21);var h=function(e){var t=e.searchValue,o=e.setSearchValue,n=e.loading;return[Object(l.jsx)("input",{className:"TodoSearch",type:"text",placeholder:"Buscar tarea",value:t,onChange:function(e){o(e.target.value)},disabled:n},"{searchValue}")]};function x(){return Object(l.jsx)("p",{children:"Desesp\xe9rate, hubo un error..."})}o(22);function f(){return Object(l.jsxs)("div",{className:"LoadingTodo-container",children:[Object(l.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(l.jsx)("p",{className:"LoadingTodo-text",children:"Cargando TODOs..."}),Object(l.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function p(){return Object(l.jsx)("p",{className:"App-text",children:"\xa1Crea tu primer TODO!"})}o(23);var T=function(e){return Object(l.jsx)("button",{className:"CreateTodoButton",type:"button",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})};o(24);function g(e){return r.a.createPortal(Object(l.jsx)("div",{className:"ModalBackground",children:e.children}),document.getElementById("modal"))}o(10);function v(e){var t=e.addTodo,o=e.setOpenModal,n=c.a.useState(""),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r),o(!1)},children:[Object(l.jsx)("label",{children:"Escribe tu nuevo ToDo"}),Object(l.jsx)("textarea",{value:r,onChange:function(e){s(e.target.value)},placeholder:"Cortar la cebolla para el almuerzo"}),Object(l.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(l.jsx)("button",{type:"button",onClick:function(){o(!1)},className:"TodoForm-button TodoForm-button--cancel",children:"Cancelar"}),Object(l.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"A\xf1adir"})]})]})}function S(e){var t=e.setEdit,o=e.editValue,n=e.editTodo,a=c.a.useState(""),r=Object(i.a)(a,2),s=r[0],d=r[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(s||o),t(!1)},children:[Object(l.jsx)("textarea",{value:s||o,onChange:function(e){d(e.target.value)}}),Object(l.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(l.jsx)("button",{type:"button",onClick:function(){t(!1)},className:"TodoForm-button TodoForm-button--cancel",children:"Cancelar"}),Object(l.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",children:"Editar"})]})]})}o(25),o(26);function N(e){var t=e.eraseAll;return Object(l.jsx)("button",{className:"eraseAllBtn",onClick:t,children:Object(l.jsx)(b.b,{})})}function C(e){var t=e.searchText;return Object(l.jsx)("div",{children:Object(l.jsxs)("p",{className:"App-text",children:["No hay resultado para ",t]})})}o(27);function E(e){var t=e.children,o=e.loading;return Object(l.jsx)("header",{children:c.a.Children.toArray(t).map((function(e){return c.a.cloneElement(e,{loading:o})}))})}o(28);function I(e){var t=function(e){var t=c.a.useState(!1),o=Object(i.a)(t,2),n=o[0],a=o[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&(console.log("Hubo cambios en TODOS_v1"),a(!0))})),{show:n,toggleShow:function(){e(),a(!1)}}}(e.sincronize),o=t.show,n=t.toggleShow;return o?Object(l.jsx)("div",{className:"ChangeAlert-bg",children:Object(l.jsxs)("div",{className:"ChangeAlert-container",children:[Object(l.jsx)("p",{children:"Parece que cambiaste tus TODOs en otra pesta\xf1a o ventana del navegador."}),Object(l.jsx)("p",{children:"\xbfQuieres sincronizar tus TODOs?"}),Object(l.jsx)("button",{className:"TodoForm-button TodoForm-button--add",onClick:n,children:"Yes!"})]})}):null}var y=function(){var e=d(),t=e.error,o=e.loading,n=e.searchedTodo,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,i=e.setOpenModal,j=e.edit,b=e.onEdit,y=e.setEdit,V=e.editValue,k=e.editTodo,D=e.completedTodos,F=e.totalTodos,A=e.addTodo,w=e.eraseAll,L=e.searchValue,M=e.setSearchValue,z=e.sincronizeTodos;return Object(l.jsxs)(c.a.Fragment,{children:[Object(l.jsxs)(E,{loading:o,children:[Object(l.jsx)(u,{completedTodos:D,totalTodos:F}),Object(l.jsx)(h,{searchValue:L,setSearchValue:M})]}),Object(l.jsx)(m,{error:t,loading:o,searchedTodos:n,totalTodos:F,searchText:L,onError:function(){return Object(l.jsx)(x,{})},onLoading:function(){return Object(l.jsx)(f,{})},onEmptyTodos:function(){return Object(l.jsx)(p,{})},onEmptySearchResults:function(e){return Object(l.jsx)(C,{searchText:e})},children:function(e){return Object(l.jsx)(O,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)},onEdit:function(){return b(e.text)}},e.text)}}),j&&Object(l.jsx)(g,{children:Object(l.jsx)(S,{setEdit:y,editValue:V,editTodo:k})}),s&&Object(l.jsx)(g,{children:Object(l.jsx)(v,{addTodo:A,setOpenModal:i})}),Object(l.jsx)(N,{eraseAll:w}),Object(l.jsx)(T,{setOpenModal:i}),Object(l.jsx)(I,{sincronize:z})]})};r.a.render(Object(l.jsx)(y,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.12b72d39.chunk.js.map