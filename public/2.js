(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/react/component/Signup.js":
/*!************************************************!*\
  !*** ./resources/js/react/component/Signup.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axiosCall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../axiosCall */ "./resources/js/react/axiosCall.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../node_modules/toastr/build/toastr.css */ "./node_modules/toastr/build/toastr.css");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Validation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Validation.js */ "./resources/js/react/component/Validation.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Signup =
/*#__PURE__*/
function (_Component) {
  _inherits(Signup, _Component);

  function Signup(props) {
    var _this;

    _classCallCheck(this, Signup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signup).call(this, props));
    _this.state = {
      name: '',
      email: '',
      pwd: '',
      cpwd: '',
      showSignIn: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Signup, [{
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      var data = {
        email: this.state.email,
        name: this.state.name,
        password: this.state.pwd,
        password_confirm: this.state.cpwd
      };
      Object(_axiosCall__WEBPACK_IMPORTED_MODULE_1__["axiosPost"])("".concat(_axiosCall__WEBPACK_IMPORTED_MODULE_1__["baseUrl"], "/signup"), data).then(function (_ref) {
        var status = _ref.status,
            message = _ref.message;

        if (status == 'success') {
          toastr.success(message);

          _this2.setState({
            showSignIn: true
          }); //console.log(this.state);

        } else {
          toastr.error(message);
        }
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
    /* 	validate({name, email, pwd, cpwd}) {
    		let errorCount = 0;
    		const errors  =  {
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
    
    		if(name == '' || name.length == 0){
    			errors.name = {
    				valid:false,
    				message:'Name field is required'
    			};
    			errorCount += 1;
    		}else{
    			errors.name = {
    				valid:true,
    				message:''
    			};
    		}
    
    		if(email == '' || email.length == 0){
    			errors.email = {
    				valid:false,
    				message:'Email field is required'
    			};
    			errorCount += 1;
    
    		}else{
    			errors.email = {
    				valid:true,
    				message:''
    			};
    		}
    
    		if(pwd == '' || pwd.length == 0){
    			errors.pwd = {
    				valid:false,
    				message:'Password field is required'
    			};
    			errorCount += 1;
    		}else{
    			errors.pwd = {
    				valid:true,
    				message:''
    			};
    		}
    
    		if(cpwd == '' || cpwd.length == 0 || pwd != cpwd){
    			errors.cpwd = {
    				valid:false,
    				message:'Confirm password field is required. Password & Confirm password mismatch'
    			};
    			errorCount += 1;
    		}else{
    			errors.cpwd = {
    				valid:true,
    				message:''
    			};
    		}
    
    		return {errors, errorCount};
    	} */

  }, {
    key: "render",
    value: function render() {
      if (this.state.showSignIn) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: "/signin"
      });

      var _validate = Object(_Validation_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this.state),
          errors = _validate.errors,
          errorCount = _validate.errorCount;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Signup form"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "name"
      }, "Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "name",
        name: "name",
        value: this.state.name,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-danger errors.name.valid && 'd-none'"
      }, errors.name.message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "email"
      }, "Email:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        className: "form-control",
        id: "email",
        name: "email",
        value: this.state.email,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-danger errors.email.valid && 'd-none'"
      }, errors.email.message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "pwd"
      }, "Password:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        id: "pwd",
        name: "pwd",
        value: this.state.pwd,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-danger errors.pwd.valid && 'd-none'"
      }, errors.pwd.message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "cpwd"
      }, "Confirm Password:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        className: "form-control",
        id: "cpwd",
        name: "cpwd",
        value: this.state.cpwd,
        onChange: this.handleChange
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-danger errors.cpwd.valid && 'd-none'"
      }, errors.cpwd.message)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/signin"
      }, "Already have an account? Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-primary",
        disabled: errorCount > 0
      }, "Signup")));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./resources/js/react/component/Validation.js":
/*!****************************************************!*\
  !*** ./resources/js/react/component/Validation.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
function validate(_ref) {
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

/***/ })

}]);
//# sourceMappingURL=2.js.map