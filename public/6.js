(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1Kue":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("TuUD"),l=n("55Ip");n("0wR0");function u(e){return 401===e}var s=n("PSD3"),c=n.n(s);n("muqG");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",(function(){return b}));var b=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=f(t).call(this,e))||"object"!==i(r)&&"function"!=typeof r?m(a):r).state={users:[],usersLoaded:!1,noData:!1},n.getUserList=n.getUserList.bind(m(n)),n.deleteHandler=n.deleteHandler.bind(m(n)),n}var n,a,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"getUserList",value:function(){var e=this;Object(o.b)("".concat(o.d,"/users")).then((function(t){var n=t.status,a=t.message,r=t.data;u(t.statusCode)&&e.setState({isLoggedOut:!0}),"success"===n?e.setState({users:r,usersLoaded:!0,noData:!1}):(e.setState({users:r,usersLoaded:!0,noData:!0}),toastr.error(a))}))}},{key:"deleteHandler",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";c.a.fire({title:"Are you sure?",text:"You want to delete",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(n){n.value&&Object(o.a)("".concat(o.d,"/users/").concat(t)).then((function(t){var n=t.status,a=t.message;t.data,u(t.statusCode)&&e.props.updateLogout(),"success"===n&&e.getUserList(),toastr.error(a)}))}))}},{key:"componentDidMount",value:function(){this.getUserList()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,{users:this.state.users,loaded:this.state.usersLoaded,noData:this.state.noData,deleteHandler:this.deleteHandler,userInfo:this.props.userInfo}))}}])&&d(n.prototype,a),l&&d(n,l),t}(a.Component);function y(e){return r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h2",null,"Dashboard"),r.a.createElement(h,{users:e.users,loaded:e.loaded,noData:e.noData,deleteHandler:e.deleteHandler,userInfo:e.userInfo}))))}function h(e){var t=e.loaded?e.noData?r.a.createElement("tr",null,r.a.createElement("td",null,"No data found")):e.users.map((function(t,n){return r.a.createElement(E,{rowData:t,key:t.id,deleteHandler:e.deleteHandler,userInfo:e.userInfo})})):r.a.createElement("tr",null,r.a.createElement("td",null,"Loading..."));return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Role"),r.a.createElement("th",null))),r.a.createElement("tbody",null,t))}function E(e){var t=e.userInfo.role;return r.a.createElement("tr",null,r.a.createElement("td",null,e.rowData.id),r.a.createElement("td",null,e.rowData.name),r.a.createElement("td",null,e.rowData.email),r.a.createElement("td",null,e.rowData.role),r.a.createElement("td",null,r.a.createElement(l.b,{to:"/users/profile/".concat(e.rowData.id),className:"btn btn-primary"},"View"),t&&"parent"===t&&r.a.createElement("button",{type:"button",className:"btn btn-danger ml-1",onClick:function(){return e.deleteHandler(e.rowData.id)}},"Delete")))}}}]);
//# sourceMappingURL=6.js.map