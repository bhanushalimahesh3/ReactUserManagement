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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axiosCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../axiosCall */ "./resources/js/react/axiosCall.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../node_modules/toastr/build/toastr.css */ "./node_modules/toastr/build/toastr.css");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AuthHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthHandler */ "./resources/js/react/component/AuthHandler.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      noData: false
    };
    _this.getUserList = _this.getUserList.bind(_assertThisInitialized(_this));
    _this.deleteHandler = _this.deleteHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dashboard, [{
    key: "getUserList",
    value: function () {
      var _getUserList = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _ref, status, message, data, statusCode, isGuest;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["axiosGet"])("".concat(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["baseUrl"], "/users"));

              case 2:
                _ref = _context.sent;
                status = _ref.status;
                message = _ref.message;
                data = _ref.data;
                statusCode = _ref.statusCode;
                isGuest = Object(_AuthHandler__WEBPACK_IMPORTED_MODULE_5__["default"])(statusCode);
                if (isGuest) this.setState({
                  isLoggedOut: true
                });

                if (status === 'success') {
                  this.setState({
                    users: data,
                    usersLoaded: true,
                    noData: false
                  });
                } else {
                  this.setState({
                    users: data,
                    usersLoaded: true,
                    noData: true
                  });
                  toastr.error(message);
                }

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserList() {
        return _getUserList.apply(this, arguments);
      }

      return getUserList;
    }()
  }, {
    key: "deleteHandler",
    value: function () {
      var _deleteHandler = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var id,
            _ref2,
            confirmation,
            _ref3,
            status,
            message,
            data,
            statusCode,
            isGuest,
            _args2 = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '';
                _context2.next = 3;
                return sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                  title: 'Are you sure?',
                  text: 'You want to delete',
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonText: 'Yes, delete it!',
                  cancelButtonText: 'No, keep it'
                });

              case 3:
                _ref2 = _context2.sent;
                confirmation = _ref2.value;

                if (!confirmation) {
                  _context2.next = 17;
                  break;
                }

                _context2.next = 8;
                return Object(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["axiosDelete"])("".concat(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["baseUrl"], "/users/").concat(id));

              case 8:
                _ref3 = _context2.sent;
                status = _ref3.status;
                message = _ref3.message;
                data = _ref3.data;
                statusCode = _ref3.statusCode;
                isGuest = Object(_AuthHandler__WEBPACK_IMPORTED_MODULE_5__["default"])(statusCode);
                if (isGuest) this.props.updateLogout();

                if (status === 'success') {
                  this.getUserList();
                }

                toastr.error(message);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function deleteHandler() {
        return _deleteHandler.apply(this, arguments);
      }

      return deleteHandler;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getUserList();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableContainer, {
        users: this.state.users,
        loaded: this.state.usersLoaded,
        noData: this.state.noData,
        deleteHandler: this.deleteHandler,
        userInfo: this.props.userInfo
      }));
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



function TableContainer(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mt-3"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-12"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Table, {
    users: props.users,
    loaded: props.loaded,
    noData: props.noData,
    deleteHandler: props.deleteHandler,
    userInfo: props.userInfo
  }))));
}

function Table(props) {
  var rows = props.loaded ? props.noData ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "No data found")) : props.users.map(function (obj, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableRow, {
      rowData: obj,
      key: obj.id,
      deleteHandler: props.deleteHandler,
      userInfo: props.userInfo
    });
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Loading..."));
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "table"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Id"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Email"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Role"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, rows));
}

function TableRow(props) {
  var role = props.userInfo.role;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, props.rowData.id), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, props.rowData.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, props.rowData.email), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, props.rowData.role), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/users/profile/".concat(props.rowData.id),
    className: "btn btn-primary"
  }, "View"), role && role === 'parent' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
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