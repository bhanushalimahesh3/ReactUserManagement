(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/react/pages/AddChild.js":
/*!**********************************************!*\
  !*** ./resources/js/react/pages/AddChild.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddChild; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axiosCall__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../axiosCall */ "./resources/js/react/axiosCall.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../../node_modules/toastr/build/toastr.css */ "./node_modules/toastr/build/toastr.css");
/* harmony import */ var _node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_toastr_build_toastr_css__WEBPACK_IMPORTED_MODULE_4__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var AddChild =
/*#__PURE__*/
function (_Component) {
  _inherits(AddChild, _Component);

  function AddChild(props) {
    var _this;

    _classCallCheck(this, AddChild);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AddChild).call(this, props));
    _this.state = {
      name: '',
      email: '',
      role: 'child',
      fileUpload: null,
      isAdded: false
    };
    _this.handleFileUpload = _this.handleFileUpload.bind(_assertThisInitialized(_this));
    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AddChild, [{
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
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;
      this.setState(function (prevState, props) {
        return _defineProperty({}, name, value);
      });
    }
  }, {
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var formData, _this$state, name, email, role, fileUpload, _ref2, status, message, _ref2$data, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                formData = new FormData();
                _this$state = this.state, name = _this$state.name, email = _this$state.email, role = _this$state.role, fileUpload = _this$state.fileUpload;
                formData.append('name', name);
                formData.append('email', email);
                formData.append('role', role);
                formData.append('avatar', fileUpload);
                _context.next = 9;
                return Object(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["axiosPost"])("".concat(_axiosCall__WEBPACK_IMPORTED_MODULE_2__["baseUrl"], "/users/children"), formData, {
                  'content-type': 'multipart/form-data'
                });

              case 9:
                _ref2 = _context.sent;
                status = _ref2.status;
                message = _ref2.message;
                _ref2$data = _ref2.data;
                data = _ref2$data === void 0 ? '' : _ref2$data;

                if (status === 'success') {
                  toastr.success(message);
                  this.setState({
                    isAdded: true
                  });
                } else {
                  toastr.error(message);
                }

              case 15:
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
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          name = _this$state2.name,
          role = _this$state2.role,
          email = _this$state2.email,
          isAdded = _this$state2.isAdded;
      if (isAdded) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
        to: "/dashboard"
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mt-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Add Child"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "https://www.w3schools.com/bootstrap4/cinqueterre.jpg",
        loading: "lazy",
        className: "img-thumbnail",
        alt: "Cinque Terre",
        width: "304",
        height: "236"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "avatar"
      }, "Select avatar:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "file",
        className: "form-control",
        id: "avatar",
        onChange: this.handleFileUpload
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "userName"
      }, "Name:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "userName",
        name: "name",
        value: name,
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "email"
      }, "Email:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "email",
        value: email,
        name: "email",
        onChange: this.handleInputChange
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "role"
      }, "Role:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        id: "role",
        value: role,
        readOnly: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "btn btn-primary",
        type: "submit"
      }, "Add"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/dashboard",
        className: "btn btn-primary ml-3"
      }, "Back to Dashboard"))));
    }
  }]);

  return AddChild;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ })

}]);