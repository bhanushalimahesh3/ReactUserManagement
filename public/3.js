(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/react/component/BasicInfo.js":
/*!***************************************************!*\
  !*** ./resources/js/react/component/BasicInfo.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function BasicInfo(props) {
  var handleSubmit = props.handleSubmit,
      handleFileUpload = props.handleFileUpload,
      handleInputChange = props.handleInputChange,
      _props$profile = props.profile,
      name = _props$profile.name,
      email = _props$profile.email,
      role = _props$profile.role;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://www.w3schools.com/bootstrap4/cinqueterre.jpg",
    loading: "lazy",
    className: "img-thumbnail",
    alt: "Cinque Terre",
    width: "304",
    height: "236"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "avatar"
  }, "Select avatar:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    className: "form-control",
    id: "avatar",
    onChange: handleFileUpload
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "userName"
  }, "Name:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "userName",
    name: "userName",
    value: name,
    onChange: handleInputChange
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "email"
  }, "Email:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "email",
    value: email,
    readOnly: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "role"
  }, "Role:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    id: "role",
    value: role,
    readOnly: true
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary",
    type: "submit"
  }, "Update"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/dashboard",
    className: "btn btn-primary ml-3"
  }, "Back to Dashboard")));
}

/***/ }),

/***/ "./resources/js/react/pages/UserProfile.js":
/*!*************************************************!*\
  !*** ./resources/js/react/pages/UserProfile.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserProfile; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axiosCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axiosCall */ "./resources/js/react/axiosCall.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../node_modules/toastr/build/toastr.css */ "./node_modules/toastr/build/toastr.css");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_BasicInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../component/BasicInfo.js */ "./resources/js/react/component/BasicInfo.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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







var UserProfile =
/*#__PURE__*/
function (_Component) {
  _inherits(UserProfile, _Component);

  function UserProfile(props) {
    var _this;

    _classCallCheck(this, UserProfile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserProfile).call(this, props));
    var loadingMsg = 'Loading...';
    _this.state = {
      profile: {
        name: loadingMsg,
        email: loadingMsg,
        role: loadingMsg,
        id: loadingMsg,
        file: null
      },
      fileUpload: null,
      myProfile: false
    };
    _this.handleFileUpload = _this.handleFileUpload.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UserProfile, [{
    key: "getProfile",
    value: function () {
      var _getProfile = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id,
            _ref,
            status,
            message,
            _ref$data,
            data,
            _data$user,
            name,
            email,
            role,
            _id,
            _args = arguments;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                _context.next = 3;
                return Object(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["axiosPost"])("".concat(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["baseUrl"], "/users/profile/").concat(id));

              case 3:
                _ref = _context.sent;
                status = _ref.status;
                message = _ref.message;
                _ref$data = _ref.data;
                data = _ref$data === void 0 ? '' : _ref$data;

                if (status == 'success') {
                  _data$user = data.user, name = _data$user.name, email = _data$user.email, role = _data$user.role, _id = _data$user.id;
                  this.setState(function (prevState, props) {
                    return {
                      profile: _objectSpread({}, prevState.profile, {
                        name: name,
                        email: email,
                        role: role,
                        id: _id
                      })
                    };
                  });
                } else {
                  toastr.error(message);
                }

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getProfile() {
        return _getProfile.apply(this, arguments);
      }

      return getProfile;
    }()
  }, {
    key: "handleFileUpload",
    value: function handleFileUpload(e) {
      var target = e.target;
      this.setState({
        fileUpload: target.files[0]
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange(e) {
      var target = e.target;
      this.setState(function (prevState, props) {
        return {
          profile: _objectSpread({}, prevState.profile, {
            name: target.value
          })
        };
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var formData, _this$state, _this$state$profile, name, email, role, id, fileUpload, _ref2, status, message, _ref2$data, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e.preventDefault();
                formData = new FormData();
                _this$state = this.state, _this$state$profile = _this$state.profile, name = _this$state$profile.name, email = _this$state$profile.email, role = _this$state$profile.role, id = _this$state$profile.id, fileUpload = _this$state.fileUpload;
                formData.append('name', name);
                formData.append('email', email);
                formData.append('role', role);
                formData.append('avatar', fileUpload);
                formData.append('id', id);
                formData.append('_method', 'PUT');
                _context2.next = 11;
                return Object(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["axiosPost"])("".concat(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["baseUrl"], "/users/profile"), formData, {
                  'content-type': 'multipart/form-data'
                });

              case 11:
                _ref2 = _context2.sent;
                status = _ref2.status;
                message = _ref2.message;
                _ref2$data = _ref2.data;
                data = _ref2$data === void 0 ? '' : _ref2$data;

                if (status === 'success') {
                  toastr.success(message);
                  this.getProfile(id);
                } else {
                  toastr.error(message);
                }

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      }

      return handleSubmit;
    }()
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var id = this.props.match.params.userId;
      this.getProfile(id);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Profile"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_BasicInfo_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        handleSubmit: this.handleSubmit,
        handleFileUpload: this.handleFileUpload,
        handleInputChange: this.handleInputChange,
        profile: this.state.profile
      }));
    }
  }]);

  return UserProfile;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

}]);