(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/react/component/AuthHandler.js":
/*!*****************************************************!*\
  !*** ./resources/js/react/component/AuthHandler.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthHandler; });
function AuthHandler(statusCode) {
  return statusCode === 401;
}

/***/ }),

/***/ "./resources/js/react/component/Dashboard.js":
/*!***************************************************!*\
  !*** ./resources/js/react/component/Dashboard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dashboard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axiosCall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../axiosCall */ "./resources/js/react/axiosCall.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../node_modules/toastr/build/toastr.css */ "./node_modules/toastr/build/toastr.css");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AuthHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthHandler */ "./resources/js/react/component/AuthHandler.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ "./resources/js/react/component/Header.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Dashboard =
/*#__PURE__*/
function (_Component) {
  _inherits(Dashboard, _Component);

  function Dashboard(props) {
    var _this;

    _classCallCheck(this, Dashboard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dashboard).call(this, props));
    _this.state = {
      users: [],
      usersLoaded: false,
      //isLoggedOut : false,
      noData: false
    };
    _this.getUserList = _this.getUserList.bind(_assertThisInitialized(_this)); //this.logoutHandler = this.logoutHandler.bind(this);

    _this.deleteHandler = _this.deleteHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dashboard, [{
    key: "getUserList",
    value: function getUserList() {
      var _this2 = this;

      Object(_axiosCall__WEBPACK_IMPORTED_MODULE_1__["axiosGet"])("".concat(_axiosCall__WEBPACK_IMPORTED_MODULE_1__["baseUrl"], "/users")).then(function (_ref) {
        var status = _ref.status,
            message = _ref.message,
            data = _ref.data,
            statusCode = _ref.statusCode;
        var isGuest = Object(_AuthHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(statusCode);
        if (isGuest) _this2.setState({
          isLoggedOut: true
        });

        if (status === 'success') {
          _this2.setState({
            users: data,
            usersLoaded: true,
            noData: false
          });
        } else {
          _this2.setState({
            users: data,
            usersLoaded: true,
            noData: true
          });

          toastr.error(message);
        }
      });
    }
    /*logoutHandler() {
    	axiosGet(`${baseUrl}/logout`)
    	.then(({status, message, data = ''}) => {			
    		if(status == 'success'){
    			this.setState({ isLoggedOut: true});
    		}else{
    			toastr.error(message);
    		}
    	 });
    }*/

  }, {
    key: "deleteHandler",
    value: function deleteHandler() {
      var _this3 = this;

      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
        title: 'Are you sure?',
        text: 'You want to delete',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then(function (result) {
        if (result.value) {
          Object(_axiosCall__WEBPACK_IMPORTED_MODULE_1__["axiosDelete"])("".concat(_axiosCall__WEBPACK_IMPORTED_MODULE_1__["baseUrl"], "/users/").concat(id)).then(function (_ref2) {
            var status = _ref2.status,
                message = _ref2.message,
                data = _ref2.data,
                statusCode = _ref2.statusCode;
            var isGuest = Object(_AuthHandler__WEBPACK_IMPORTED_MODULE_4__["default"])(statusCode);
            if (isGuest) _this3.props.updateLogout(); //this.setState({ isLoggedOut: true});

            if (status === 'success') {
              _this3.getUserList();
            }

            toastr.error(message);
          });
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUserList();
    }
  }, {
    key: "render",
    value: function render() {
      /*		if(this.state.isLoggedOut)
      			return <Redirect to="/" />*/
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableContainer, {
        users: this.state.users,
        loaded: this.state.usersLoaded,
        noData: this.state.noData,
        deleteHandler: this.deleteHandler,
        userInfo: this.props.userInfo
      }));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



function TableContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Table, {
    users: props.users,
    loaded: props.loaded,
    noData: props.noData,
    deleteHandler: props.deleteHandler,
    userInfo: props.userInfo
  }))));
}

function Table(props) {
  var rows = props.loaded ? props.noData ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "No data found")) : props.users.map(function (obj, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableRow, {
      rowData: obj,
      key: obj.id,
      deleteHandler: props.deleteHandler,
      userInfo: props.userInfo
    });
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Loading..."));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Role"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, rows));
}

function TableRow(props) {
  var role = props.userInfo.role;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.rowData.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.rowData.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.rowData.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, props.rowData.role), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/users/profile/".concat(props.rowData.id),
    className: "btn btn-primary"
  }, "View"), role && role === 'parent' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-danger ml-1",
    onClick: function onClick() {
      return props.deleteHandler(props.rowData.id);
    }
  }, "Delete")));
}

/***/ })

}]);
//# sourceMappingURL=1.js.map