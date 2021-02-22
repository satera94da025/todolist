(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{123:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),i=n(10),o=n.n(i);n(92),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(93);var r,s,u=n(166),d=n(167),l=n(168),j=n(125),O=n(161),b=n(76),f=n.n(b),T=n(169),h=n(170),k=n(18),g=n(51),m=n(8),p=n(71),v=n.n(p).a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists",withCredentials:!0,headers:{"API-KEY":"63e080d1-f004-48f7-ae2d-df9d85d2ae65"}});!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var S=function(t,e){return v.put("/".concat(t),{title:e})},I=function(){return v.get("")},x=function(t){return v.delete("/".concat(t))},L=function(t){return v.post("",{title:t})},C=function(t){return v.get("/".concat(t,"/tasks"))},y=function(t,e){return v.post("/".concat(t,"/tasks"),{title:e})},E=function(t,e){return v.delete("/".concat(t,"/tasks/").concat(e))},A=function(t,e,n){return v.put("/".concat(t,"/tasks/").concat(e),n)},D={status:"idle",error:null},w=function(t){return{type:"APP/SET-STATUS",status:t}},N=function(t){return{type:"APP/SET-ERROR",error:t}},P=function(t,e){t.messages.length?e(N(t.messages[0])):e(N("Some error occurred")),e(w("failed"))},R=function(t,e){e(N(t.message)),e(w("failed"))},F=[],K=function(t,e){return{type:"CHANGE-TODOLIST-ENTITY-STATUS",todoListId:t,entityStatus:e}},H=n(26),U={},M=function(t){return function(e){e(w("loading")),C(t).then((function(n){e(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(n.data.items,t)),e(w("succeeded"))})).catch((function(t){R(t,e)}))}},G=function(t,e,n){return function(c,a){var i=a().tasks[n].find((function(e){return e.id===t}));i&&(c(w("loading")),A(n,t,Object(m.a)({title:i.title,startDate:i.startDate,priority:i.priority,description:i.description,deadline:i.deadline,status:i.status},e)).then((function(){c(function(t,e,n){return{type:"UPDATE-TASK",taskId:t,model:e,todolistId:n}}(t,{},n)),c(w("succeeded"))})).catch((function(t){R(t,c)})))}},V=n(165),B=n(124),Y=n(38),J=n(171),W=n(162),q=n(5),z=a.a.memo((function(t){var e=Object(c.useState)(""),n=Object(Y.a)(e,2),a=n[0],i=n[1],o=Object(c.useState)(null),r=Object(Y.a)(o,2),s=r[0],u=r[1],d=function(){var e=a.trim();e?t.addItem(e):u("Title is required!"),i("")};return Object(q.jsxs)("div",{children:[Object(q.jsx)(J.a,{value:a,onChange:function(t){u(null),i(t.currentTarget.value)},onKeyPress:function(t){null!==s&&u(null),"Enter"===t.key&&d()},variant:"outlined",error:!!s,label:"Input your title",helperText:s,disabled:"loading"===t.entityStatus}),Object(q.jsx)(O.a,{color:"primary",onClick:d,disabled:"loading"===t.entityStatus,children:Object(q.jsx)(W.a,{})})]})})),$=a.a.memo((function(t){var e=Object(c.useState)(!1),n=Object(Y.a)(e,2),a=n[0],i=n[1],o=Object(c.useState)(t.value),r=Object(Y.a)(o,2),s=r[0],u=r[1];return a?Object(q.jsx)(J.a,{variant:"outlined",value:s,onBlur:function(){i(!1),s.trim()&&t.getNewTitle(s.trim())},autoFocus:!0,onChange:function(t){u(t.currentTarget.value)}}):Object(q.jsx)("span",{onDoubleClick:function(){return i(!0)},children:t.value})})),Q=n(164),X=n(163),Z=n(173),_=a.a.memo((function(t){var e=Object(c.useCallback)((function(){return t.removeTask(t.task.id,t.todoListId)}),[t.removeTask,t.task.id,t.todoListId]),n=Object(c.useCallback)((function(e){t.changeStatus(t.task.id,e.currentTarget.checked?r.Completed:r.New,t.todoListId)}),[t.changeStatus,t.task.id,t.todoListId]),a=Object(c.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todoListId)}),[t.changeTaskTitle,t.task.id,t.todoListId]);return Object(q.jsxs)("li",{className:t.task.status===r.Completed?"is-done":"",children:[Object(q.jsx)(Z.a,{onChange:n,color:"primary",checked:t.task.status===r.Completed}),Object(q.jsx)($,{value:t.task.title,getNewTitle:a}),Object(q.jsx)(O.a,{onClick:e,children:Object(q.jsx)(X.a,{})})]},t.task.id)})),tt=a.a.memo((function(t){var e=Object(k.b)();Object(c.useEffect)((function(){e(M(t.id))}),[e(M(t.id))]);var n=t.tasks;"active"===t.filter&&(n=t.tasks.filter((function(t){return t.status===r.New}))),"completed"===t.filter&&(n=t.tasks.filter((function(t){return t.status===r.Completed})));var a=n.map((function(e){return Object(q.jsx)(_,{todoListId:t.id,changeStatus:t.changeStatus,removeTask:t.removeTask,changeTaskTitle:t.changeTaskTitle,task:e},t.id)})),i=Object(c.useCallback)((function(){return t.removeTodoList(t.id)}),[t.removeTodoList,t.id]),o=Object(c.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.changeFilter,t.id]),s=Object(c.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.changeFilter,t.id]),u=Object(c.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.changeFilter,t.id]),d=Object(c.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),l=Object(c.useCallback)((function(e){t.changeTodoListTitle(e,t.id)}),[t.changeTodoListTitle,t.id]);return Object(q.jsxs)("div",{children:[Object(q.jsxs)("h3",{children:[Object(q.jsx)($,{value:t.title,getNewTitle:l}),Object(q.jsx)(j.a,{onClick:i,disabled:"loading"===t.entityStatus,children:Object(q.jsx)(X.a,{})})]}),Object(q.jsx)(z,{addItem:d,entityStatus:t.entityStatus}),Object(q.jsx)("div",{children:a}),Object(q.jsx)("div",{children:Object(q.jsxs)(Q.a,{size:"small",children:[Object(q.jsx)(j.a,{variant:"all"===t.filter?"contained":"outlined",onClick:o,children:"All"}),Object(q.jsx)(j.a,{color:"primary",variant:"active"===t.filter?"contained":"outlined",onClick:s,children:"Active"}),Object(q.jsx)(j.a,{color:"secondary",variant:"completed"===t.filter?"contained":"outlined",onClick:u,children:"Completed"})]})})]})})),et=function(){var t=Object(k.c)((function(t){return t.todoLists})),e=Object(k.c)((function(t){return t.tasks})),n=Object(k.b)();Object(c.useEffect)((function(){n((function(t){t(w("loading")),I().then((function(e){t({type:"SET-TODOLIST",todolist:e.data}),t(w("succeeded"))})).catch((function(e){R(e,t)}))}))}),[]);var a=Object(c.useCallback)((function(t,e){var c,a;n((c=t,a=e,function(t){t(w("loading")),E(a,c).then((function(){t(function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(c,a)),t(w("succeeded"))})).catch((function(e){R(e,t)}))}))}),[n]),i=Object(c.useCallback)((function(t,e){n(function(t,e){return function(n){n(w("loading")),y(e,t).then((function(t){0===t.data.resultCode?(n({type:"ADD-TASK",task:t.data.data.item}),n(w("succeeded"))):P(t.data,n)})).catch((function(t){R(t,n)}))}}(t,e))}),[n]),o=Object(c.useCallback)((function(t,e,c){n(G(t,{status:e},c))}),[n]),r=Object(c.useCallback)((function(t,e,c){n(G(t,{title:e},c))}),[n]),s=Object(c.useCallback)((function(t){var e;n((e=t,function(t){t(K(e,"loading")),t(w("loading")),x(e).then((function(){t({type:"REMOVE-TODOLIST",id:e}),t(w("succeeded")),t(K(e,"succeeded"))})).catch((function(e){R(e,t)}))}))}),[n]),u=Object(c.useCallback)((function(t){n(function(t){return function(e){e(w("loading")),L(t).then((function(t){0===t.data.resultCode?(e({type:"ADD-TODOLIST",todoList:t.data.data.item}),e(w("succeeded"))):P(t.data,e)})).catch((function(t){R(t,e)}))}}(t))}),[n]),d=Object(c.useCallback)((function(t,e){n(function(t,e){return function(n){n(w("loading")),S(e,t).then((function(){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",title:t,todoListId:e}}(t,e)),n(w("succeeded"))})).catch((function(t){R(t,n)}))}}(t,e))}),[n]),l=Object(c.useCallback)((function(t,e){n(function(t,e){return{type:"CHANGE-TODOLIST-FILTER",filter:t,todoListId:e}}(t,e))}),[n]);return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(V.a,{container:!0,style:{padding:"20px"},children:Object(q.jsx)(z,{addItem:u})}),Object(q.jsx)(V.a,{container:!0,spacing:3,children:t.map((function(t){var n=e[t.id];return Object(q.jsx)(V.a,{item:!0,children:Object(q.jsx)(B.a,{style:{padding:"10px"},children:Object(q.jsx)(tt,{id:t.id,title:t.title,entityStatus:t.entityStatus,tasks:n,removeTask:a,removeTodoList:s,changeFilter:l,addTask:i,changeStatus:o,filter:t.filter,changeTaskTitle:r,changeTodoListTitle:d},t.id)})})}))})]})},nt=n(175),ct=n(172);function at(t){return Object(q.jsx)(ct.a,Object(m.a)({elevation:6,variant:"filled"},t))}function it(){var t=Object(k.c)((function(t){return t.app.error})),e=Object(k.b)(),n=function(t,n){"clickaway"!==n&&e(N(null))};return Object(q.jsx)(nt.a,{open:null!==t,autoHideDuration:6e3,onClose:n,children:Object(q.jsx)(at,{onClose:n,severity:"error",children:t})})}var ot=a.a.memo((function(){var t=Object(k.c)((function(t){return t.app.status}));return Object(q.jsxs)("div",{className:"App",children:[Object(q.jsxs)(u.a,{position:"static",children:[Object(q.jsx)(it,{}),Object(q.jsxs)(d.a,{children:[Object(q.jsx)(O.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(q.jsx)(f.a,{})}),Object(q.jsx)(l.a,{variant:"h6",children:"News"}),Object(q.jsx)(j.a,{color:"inherit",children:"Login"})]})]}),"loading"===t&&Object(q.jsx)(T.a,{}),Object(q.jsx)(h.a,{fixed:!0,children:Object(q.jsx)(et,{})})]})})),rt=n(35),st=n(77),ut=Object(rt.c)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TASKS":return Object(m.a)(Object(m.a)({},t),{},Object(H.a)({},e.todolistId,e.tasks));case"SET-TODOLIST":var n=Object(m.a)({},t);return e.todolist.forEach((function(t){n[t.id]=[]})),n;case"REMOVE-TASK":return Object(m.a)(Object(m.a)({},t),{},Object(H.a)({},e.todolistId,t[e.todolistId].filter((function(t){return t.id!==e.taskId}))));case"ADD-TASK":return Object(m.a)(Object(m.a)({},t),{},Object(H.a)({},e.task.todoListId,[e.task].concat(Object(g.a)(t[e.task.todoListId]))));case"UPDATE-TASK":return Object(m.a)(Object(m.a)({},t),{},Object(H.a)({},e.todolistId,t[e.todolistId].map((function(t){return t.id===e.taskId?Object(m.a)(Object(m.a)({},t),e.model):t}))));case"ADD-TODOLIST":return Object(m.a)(Object(m.a)({},t),{},Object(H.a)({},e.todoList.id,[]));case"REMOVE-TODOLIST":var c=Object(m.a)({},t);return delete c[e.id],c;default:return t}},todoLists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET-TODOLIST":return e.todolist.map((function(t){return Object(m.a)(Object(m.a)({},t),{},{filter:"all",entityStatus:"idle"})}));case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":return[Object(m.a)(Object(m.a)({},e.todoList),{},{filter:"all",entityStatus:"idle"})].concat(Object(g.a)(t));case"CHANGE-TODOLIST-TITLE":return t.map((function(t){return t.id===e.todoListId?Object(m.a)(Object(m.a)({},t),{},{title:e.title}):t}));case"CHANGE-TODOLIST-FILTER":return t.map((function(t){return t.id===e.todoListId?Object(m.a)(Object(m.a)({},t),{},{filter:e.filter}):t}));case"CHANGE-TODOLIST-ENTITY-STATUS":return t.map((function(t){return t.id===e.todoListId?Object(m.a)(Object(m.a)({},t),{},{entityStatus:e.entityStatus}):t}));default:return t}},app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"APP/SET-STATUS":return Object(m.a)(Object(m.a)({},t),{},{status:e.status});case"APP/SET-ERROR":return Object(m.a)(Object(m.a)({},t),{},{error:e.error});default:return t}}}),dt=Object(rt.d)(ut,Object(rt.a)(st.a));window.store=dt,o.a.render(Object(q.jsx)(k.a,{store:dt,children:Object(q.jsx)(ot,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},92:function(t,e,n){},93:function(t,e,n){}},[[123,1,2]]]);
//# sourceMappingURL=main.d7af1d54.chunk.js.map