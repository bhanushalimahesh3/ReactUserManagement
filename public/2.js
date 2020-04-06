(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/react/component/Validation.js":
/*!****************************************************!*\
  !*** ./resources/js/react/component/Validation.js ***!
  \****************************************************/
/*! exports provided: validateSignup, validateSignin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSignup", function() { return validateSignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSignin", function() { return validateSignin; });
function validateSignup(_ref) {
  var name = _ref.name,
      email = _ref.email,
      pwd = _ref.pwd,
      cpwd = _ref.cpwd;
  var errorCount = 0;
  var errors = {
    name: {
      valid: true,
      message: ''
    },
    email: {
      valid: true,
      message: ''
    },
    pwd: {
      valid: true,
      message: ''
    },
    cpwd: {
      valid: true,
      message: ''
    }
  };

  if (name == '' || name.length == 0) {
    errors.name = {
      valid: false,
      message: 'Name field is required'
    };
    errorCount += 1;
  } else {
    errors.name = {
      valid: true,
      message: ''
    };
  }

  if (email == '' || email.length == 0) {
    errors.email = {
      valid: false,
      message: 'Email field is required'
    };
    errorCount += 1;
  } else {
    errors.email = {
      valid: true,
      message: ''
    };
  }

  if (pwd == '' || pwd.length == 0) {
    errors.pwd = {
      valid: false,
      message: 'Password field is required'
    };
    errorCount += 1;
  } else {
    errors.pwd = {
      valid: true,
      message: ''
    };
  }

  if (cpwd == '' || cpwd.length == 0 || pwd != cpwd) {
    errors.cpwd = {
      valid: false,
      message: 'Confirm password field is required. Password & Confirm password mismatch'
    };
    errorCount += 1;
  } else {
    errors.cpwd = {
      valid: true,
      message: ''
    };
  }

  return {
    errors: errors,
    errorCount: errorCount
  };
}

function validateSignin(_ref2) {
  var email = _ref2.email,
      pwd = _ref2.pwd;
  var errorCount = 0;
  var errors = {
    email: {
      valid: true,
      message: ''
    },
    pwd: {
      valid: true,
      message: ''
    }
  };

  if (email == '' || email.length == 0) {
    errors.email = {
      valid: false,
      message: 'Email field is required'
    };
    errorCount += 1;
  } else {
    errors.email = {
      valid: true,
      message: ''
    };
  }

  if (pwd == '' || pwd.length == 0) {
    errors.pwd = {
      valid: false,
      message: 'Password field is required'
    };
    errorCount += 1;
  } else {
    errors.pwd = {
      valid: true,
      message: ''
    };
  }

  return {
    errors: errors,
    errorCount: errorCount
  };
}



/***/ }),

/***/ "./resources/js/react/pages/Signin.js":
/*!********************************************!*\
  !*** ./resources/js/react/pages/Signin.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signin; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axiosCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axiosCall */ "./resources/js/react/axiosCall.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../node_modules/toastr/build/toastr.css */ "./node_modules/toastr/build/toastr.css");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_Validation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/Validation.js */ "./resources/js/react/component/Validation.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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







var Signin =
/*#__PURE__*/
function (_Component) {
  _inherits(Signin, _Component);

  function Signin(props) {
    var _this;

    _classCallCheck(this, Signin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signin).call(this, props));
    _this.state = {
      email: '',
      pwd: '',
      showDashboard: false,
      errors: {},
      errorCount: 0
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Signin, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var data, _ref, status, message;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                data = {
                  email: this.state.email,
                  password: this.state.pwd
                };
                _context.next = 4;
                return Object(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["axiosPost"])("".concat(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["baseUrl"], "/signin"), data);

              case 4:
                _ref = _context.sent;
                status = _ref.status;
                message = _ref.message;

                if (status === 'success') {
                  this.setState({
                    showDashboard: true
                  });
                } else {
                  toastr.error(message);
                }

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      var _validateSignin = Object(_component_Validation_js__WEBPACK_IMPORTED_MODULE_5__["validateSignin"])(this.state),
          errors = _validateSignin.errors,
          errorCount = _validateSignin.errorCount;

      this.setState({
        errors: errors,
        errorCount: errorCount
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.showDashboard) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/dashboard"
      });
      var _this$state = this.state,
          errors = _this$state.errors,
          errorCount = _this$state.errorCount;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Signin form"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "email"
      }, "Email:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        id: "email",
        name: "email",
        value: this.state.email,
        onChange: this.handleChange,
        onBlur: this.handleFocus
      }), errorCount > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "text-danger errors.email.valid && 'd-none'"
      }, errors.email.message)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "pwd"
      }, "Password:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        id: "pwd",
        name: "pwd",
        value: this.state.pwd,
        onChange: this.handleChange,
        onBlur: this.handleFocus
      }), errorCount > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "text-danger errors.pwd.valid && 'd-none'"
      }, errors.pwd.message)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/signup"
      }, "Not have an account? Register now")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        disabled: errorCount > 0
      }, "Login")));
    }
  }]);

  return Signin;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

}]);