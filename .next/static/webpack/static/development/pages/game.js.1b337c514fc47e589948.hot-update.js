webpackHotUpdate("static/development/pages/game.js",{

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Question */ "./components/Question.js");
/* harmony import */ var _components_Hint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Hint */ "./components/Hint.js");
/* harmony import */ var _components_Submit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Submit */ "./components/Submit.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-particles-js */ "./node_modules/react-particles-js/index.js");
/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Answer */ "./components/Answer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "/home/anwesha/Desktop/screencast/pages/game.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var game = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(game, _React$Component);

  var _super = _createSuper(game);

  function game(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, game);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submit", function (event) {
      //send final answer for checking
      if (event.key === "Enter") {
        console.log(_this.state.answer);
        console.log("JOJOJOJOJOJ");

        _this.checkAns(_this.state.answer);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "submit2", function () {
      //send final answer for checking
      console.log(_this.state.answer);

      _this.checkAns(_this.state.answer);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "change", function (event) {
      //keep updating answer
      var e = event.target.value;

      _this.setState(function (prevState) {
        return _objectSpread({}, prevState, {
          answer: e
        });
      });
    });

    _this.state = {
      answer: "",
      questions: "",
      qsNo: 1,
      isLoggedIn: false,
      hint: ""
    };
    _this.submit = _this.submit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.submit2 = _this.submit2.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.change = _this.change.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.checkAns = _this.checkAns.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.getQuestions = _this.getQuestions.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(game, [{
    key: "componentDidMount",
    value: function componentDidMount() //at the beginning sets the qs
    {
      //after getting appropiate data from backend about that email in local storage
      console.log(this.state.qsNo);
      console.log(localStorage.getItem('email')); //email available here

      /*   axios.get('https://jsonplaceholder.typicode.com/users/email?=Nathan@yesenia.net').then((response)=>
      {
          console.log("yesssss"+this.state.qsNo+response.json);
          this.setState(prevState=>{
              return{ ...prevState, questions:response.data.id}
            });
      }
      )*/
      //next qs/completed/error

      this.getQuestions();
    }
  }, {
    key: "getQuestions",
    value: function getQuestions() {
      var _this2 = this;

      console.log(this.state.qsNo);
      console.log("CLAUS"); //get questions from api and updates state

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://jsonplaceholder.typicode.com/posts/' + this.state.qsNo).then(function (response) {
        var r = response.data.title;
        console.log(r);

        _this2.setState(function (prevState) {
          return _objectSpread({}, prevState, {
            questions: r,
            hint: response.data.body
          });
        });
      });
    }
  }, {
    key: "checkAns",
    value: function checkAns(answer) //check answer from api and send for correct alert
    {
      var _this3 = this;

      console.log(answer);
      console.log(this.state.qsNo);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://jsonplaceholder.typicode.com/posts/' + this.state.qsNo).then(function (response) {
        var r = response.data.id;
        console.log(r);

        if (_this3.state.qsNo < 5) {
          if (answer == r) {
            _this3.setState(function (prevState) {
              return _objectSpread({}, prevState, {
                qsNo: prevState.qsNo + 1
              });
            });

            alert("Correct"); //where does the effing control go after this?

            console.log("SANTA");

            _this3.getQuestions();
          } else {
            alert("Wrong");

            _this3.getQuestions();
          }
        } else {
          alert("Completed yay");
          next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push('/finale');
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }
      }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_15___default.a, {
        params: {
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 900
              }
            },
            color: {
              value: ['#cc0000']
            },
            line_linked: {
              color: '#aa0044',
              opacity: 1
            }
          }
        },
        style: {
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          position: "fixed",
          index: "-10"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }
      }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 13
        }
      }), __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_12__["default"], {
        qs: this.state.questions,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }
      }), __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_16__["default"], {
        change: this.change,
        submit: this.submit,
        submit2: this.submit2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 13
        }
      }), __jsx("div", {
        className: "jsx-1891829302",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }
      }, __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_13__["default"], {
        hint: this.state.hint,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 13
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1891829302",
        __self: this
      }, "div.jsx-1891829302{text-align:center;margin:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE00QixBQUcwQixrQkFDUCxXQUNkIiwiZmlsZSI6Ii9ob21lL2Fud2VzaGEvRGVza3RvcC9zY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSdheGlvcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvUXVlc3Rpb24nXG5pbXBvcnQgSGludCBmcm9tICcuLi9jb21wb25lbnRzL0hpbnQnXG5pbXBvcnQgU3VibWl0IGZyb20gJy4uL2NvbXBvbmVudHMvU3VibWl0J1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tICdyZWFjdC1wYXJ0aWNsZXMtanMnO1xuaW1wb3J0IEFuc3dlciBmcm9tICcuLi9jb21wb25lbnRzL0Fuc3dlcic7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcblxuXG5cblxuY2xhc3MgZ2FtZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAgICB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZT17XG4gICAgICAgICAgICBhbnN3ZXI6XCJcIixcbiAgICAgICAgICAgIHF1ZXN0aW9uczpcIlwiLFxuICAgICAgICAgICAgcXNObzoxLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaXNMb2dnZWRJbjpmYWxzZSxcbiAgICAgICAgICAgIGhpbnQ6XCJcIlxuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN1Ym1pdD10aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN1Ym1pdDI9dGhpcy5zdWJtaXQyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlPXRoaXMuY2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tBbnM9dGhpcy5jaGVja0Fucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucz10aGlzLmdldFF1ZXN0aW9ucy5iaW5kKHRoaXMpO1xuICAgICAgICBcbiAgICB9XG4gICAgXG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpLy9hdCB0aGUgYmVnaW5uaW5nIHNldHMgdGhlIHFzXG4gICAgey8vYWZ0ZXIgZ2V0dGluZyBhcHByb3BpYXRlIGRhdGEgZnJvbSBiYWNrZW5kIGFib3V0IHRoYXQgZW1haWwgaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW1haWwnKSk7Ly9lbWFpbCBhdmFpbGFibGUgaGVyZVxuXG4gICAgICAgIC8qICAgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvZW1haWw/PU5hdGhhbkB5ZXNlbmlhLm5ldCcpLnRoZW4oKHJlc3BvbnNlKT0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwieWVzc3Nzc1wiK3RoaXMuc3RhdGUucXNObytyZXNwb25zZS5qc29uKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlPT57XG4gICAgICAgICAgICAgICAgcmV0dXJueyAuLi5wcmV2U3RhdGUsIHF1ZXN0aW9uczpyZXNwb25zZS5kYXRhLmlkfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICApKi9cblxuICAgICAgICAvL25leHQgcXMvY29tcGxldGVkL2Vycm9yXG5cbiAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIGdldFF1ZXN0aW9ucygpe1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgICAgICBcbiAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJDTEFVU1wiKTsvL2dldCBxdWVzdGlvbnMgZnJvbSBhcGkgYW5kIHVwZGF0ZXMgc3RhdGVcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvJyt0aGlzLnN0YXRlLnFzTm8pLnRoZW4oKHJlc3BvbnNlKT0+XG4gICAgICAgIHtcbiAgICAgICAgICBsZXQgcj1yZXNwb25zZS5kYXRhLnRpdGxlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlPT57XG4gICAgICAgICAgICByZXR1cm57IC4uLnByZXZTdGF0ZSwgcXVlc3Rpb25zOnIsaGludDpyZXNwb25zZS5kYXRhLmJvZHl9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgXG4gICAgICAgICAgXG5cbiAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXQ9KGV2ZW50KT0+ey8vc2VuZCBmaW5hbCBhbnN3ZXIgZm9yIGNoZWNraW5nXG4gICAgICAgIGlmKGV2ZW50LmtleT09PVwiRW50ZXJcIilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJKT0pPSk9KT0pPSlwiKTtcbiAgICAgICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgc3VibWl0Mj0oKT0+ey8vc2VuZCBmaW5hbCBhbnN3ZXIgZm9yIGNoZWNraW5nXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2hlY2tBbnModGhpcy5zdGF0ZS5hbnN3ZXIpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICBjaGFuZ2U9KGV2ZW50KT0+ey8va2VlcCB1cGRhdGluZyBhbnN3ZXJcbiAgICAgICAgbGV0IGU9IGV2ZW50LnRhcmdldC52YWx1ZTsgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlPT4ge1xuICAgICAgICByZXR1cm4geyAuLi5wcmV2U3RhdGUsIGFuc3dlcjplIH1cbiAgICAgICAgXG4gICAgfSk7XG4gICAgXG4gICAgfVxuXG4gICAgXG4gICAgIFxuICAgXG5cbiAgICBjaGVja0FucyhhbnN3ZXIpLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgICB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhhbnN3ZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLycrdGhpcy5zdGF0ZS5xc05vKS50aGVuKChyZXNwb25zZSk9PlxuICAgICAgICB7XG4gICAgICAgICAgICAgbGV0IHI9cmVzcG9uc2UuZGF0YS5pZDtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgICAgXG4gICAgICAgIGlmKHRoaXMuc3RhdGUucXNObyA8IDUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGFuc3dlcj09cilcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm57IC4uLnByZXZTdGF0ZSwgcXNObzpwcmV2U3RhdGUucXNObysxfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBhbGVydChcIkNvcnJlY3RcIik7Ly93aGVyZSBkb2VzIHRoZSBlZmZpbmcgY29udHJvbCBnbyBhZnRlciB0aGlzP1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTQU5UQVwiKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UXVlc3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiV3JvbmdcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYWxlcnQoXCJDb21wbGV0ZWQgeWF5XCIpO1xuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9KTtcblxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKVxuICAgIHtcblxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UGFydGljbGVzXG5cbiAgICAgICAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiA5MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogWycjY2MwMDAwJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lX2xpbmtlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2FhMDA0NCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBcIi0xMFwiXG5cblxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICAgIDxRdWVzdGlvbiBxcz17dGhpcy5zdGF0ZS5xdWVzdGlvbnN9IC8+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxBbnN3ZXIgY2hhbmdlPXt0aGlzLmNoYW5nZX0gc3VibWl0PXt0aGlzLnN1Ym1pdH0gc3VibWl0Mj17dGhpcy5zdWJtaXQyfSAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDxIaW50IGhpbnQ9e3RoaXMuc3RhdGUuaGludH0vPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICBkaXZ7XG4gICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICBtYXJnaW46NXB4O1xuICAgIH1cbiAgICBgfTwvc3R5bGU+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgICAgICA8L2RpdiA+XG4gICAgKTtcbn1cbn1cbmV4cG9ydCBkZWZhdWx0IGdhbWU7Il19 */\n/*@ sourceURL=/home/anwesha/Desktop/screencast/pages/game.js */")), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 13
        }
      }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 17
        }
      })));
    }
  }]);

  return game;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (game);

/***/ })

})
//# sourceMappingURL=game.js.1b337c514fc47e589948.hot-update.js.map