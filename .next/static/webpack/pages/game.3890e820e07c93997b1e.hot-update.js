webpackHotUpdate_N_E("pages/game",{

/***/ "./pages/game.js":
/*!***********************!*\
  !*** ./pages/game.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
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
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Question */ "./components/Question.js");
/* harmony import */ var _components_Hint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Hint */ "./components/Hint.js");
/* harmony import */ var _components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AnsAlert */ "./components/AnsAlert.js");
/* harmony import */ var _components_Answer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Answer */ "./components/Answer.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _env_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../env.json */ "./env.json");
var _env_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../env.json */ "./env.json", 1);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");







var _jsxFileName = "/home/rishav4101/Screencast/pages/game.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

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
      console.log(_this.state.answer);
      console.log("JOJOJOJOJOJ");

      _this.checkAns(_this.state.answer);
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
        return _objectSpread(_objectSpread({}, prevState), {}, {
          answer: e
        });
      });
    });

    _this.state = {
      answer: "",
      questions: "",
      qsNo: 1,
      audio: "",
      image: "",
      isLoggedIn: false,
      hint: "",
      day: "",
      end: "",
      message: "",
      v: "",
      loaded: false
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
    value: function componentDidMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_15__.api + "/api/status").then(function (response) {
        console.log(response);
        var temp3 = new Date(response.data.start_time);
        var temp2 = new Date(response.data.end_time);
        localStorage.setItem('end', temp2.getTime() + temp2.getTimezoneOffset() * 60000);
        localStorage.setItem("start", temp3.getTime() + temp3.getTimezoneOffset() * 60000);
        var temp = localStorage.getItem('end') - Date.now();
        localStorage.setItem("day", response.data.current_day);
        console.log(temp);
        console.log(localStorage.getItem('end'));
        console.log(localStorage.getItem('day'));

        _this2.setState({
          v: setTimeout(function () {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(9);

            if (localStorage.getItem('day') == 3 || response.data.error) {
              next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/finale');
            } else {
              next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/finale');
            }
          }, temp)
        });

        console.log(localStorage.getItem('end'));

        _this2.setState({
          day: localStorage.getItem('day'),
          end: localStorage.getItem('end')
        }, function () {
          if (localStorage.getItem('day') == 3 && localStorage.getItem('end') < Date.now()) next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/game_finale');
          console.log(_this2.state.day + _this2.state.end);

          if (!localStorage.getItem("email")) {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(8);
            next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/');
          } else if (!(localStorage.getItem('start') <= Date.now())) {
            Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(8);
            next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/");
          } else {
            console.log("YOOOOOOO");

            _this2.getQuestions();
          }
        });
      });
    }
  }, {
    key: "getQuestions",
    value: function getQuestions() {
      var _this3 = this;

      console.log(this.state.qsNo);
      console.log(localStorage.getItem("token")); //get questions from api and updates state

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_15__.api + "/api/question", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(function (response) {
        console.log("YOOO+" + response); //if (response.data.error) Router.push("/finale2");

        if (response.data.quiz_finished) {
          clearTimeout(_this3.state.v);
          next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/finale");
        }

        _this3.setState(function (prevState) {
          return _objectSpread(_objectSpread({}, prevState), {}, {
            questions: response.data.question,
            hint: response.data.hint,
            qsNo: response.data.question_no,
            audio: response.data.audio,
            image: response.data.image
          });
        });
      }).then(function () {
        _this3.setState({
          loaded: true
        });
      });
      console.log(localStorage.getItem("token"));
    }
  }, {
    key: "checkAns",
    value: function checkAns(ans //check answer from api and send for correct alert
    ) {
      var _this4 = this;

      console.log(ans);
      console.log(this.state.qsNo);
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(_env_json__WEBPACK_IMPORTED_MODULE_15__.api + "/api/checkanswer", {
        answer: ans
      }, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }).then(function (response) {
        var r = response.data.result;
        console.log(response);

        if (r && !response.data.quiz_finished) {
          _this4.setState(function (prevState) {
            return _objectSpread(_objectSpread({}, prevState), {}, {
              qsNo: prevState.qsNo + 1,
              answer: ""
            });
          });

          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(1); //where does the effing control go after this?

          console.log("SANTA");

          _this4.setState({
            answer: ""
          });

          _this4.getQuestions();
        } else if (r && response.data.quiz_finished) {
          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(1);
          clearTimeout(_this4.state.v);
          next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push("/finale");
        } else {
          /*this.setState({
            answer: ""
          });*/
          Object(_components_AnsAlert__WEBPACK_IMPORTED_MODULE_12__["default"])(0);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, null, loaded === true ? __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 7
        }
      }, __jsx("div", {
        style: {
          marginRight: "auto",
          marginLeft: "auto",
          textAlign: "center",
          minHeight: "100vh-100px"
        },
        questions: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 7
        }
      }, __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_10__["default"], {
        qs: this.state.questions,
        qsNo: this.state.qsNo,
        audio: this.state.audio,
        image: this.state.image,
        day: this.state.day,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-4141458270",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 9
        }
      }, __jsx(_components_Answer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        change: this.change,
        answer: this.state.answer,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 11
        }
      }), __jsx(_components_Hint__WEBPACK_IMPORTED_MODULE_11__["default"], {
        hint: this.state.hint,
        submit: this.submit,
        submit2: this.submit2,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 11
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4141458270",
        __self: this
      }, "div.jsx-4141458270{text-align:center;margin:5px;margin-bottom:100px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jpc2hhdjQxMDEvU2NyZWVuY2FzdC9wYWdlcy9nYW1lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThOc0IsQUFHaUMsa0JBQ1AsV0FDUSxvQkFDckIiLCJmaWxlIjoiL2hvbWUvcmlzaGF2NDEwMS9TY3JlZW5jYXN0L3BhZ2VzL2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBIaW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hpbnRcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiXG5pbXBvcnQgQW5zd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc3dlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Vudi5qc29uJztcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlclwiXG5cbmNsYXNzIGdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5zd2VyOiBcIlwiLFxuICAgICAgcXVlc3Rpb25zOiBcIlwiLFxuICAgICAgcXNObzogMSxcbiAgICAgIGF1ZGlvOiBcIlwiLFxuICAgICAgaW1hZ2U6IFwiXCIsXG4gICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgIGhpbnQ6IFwiXCIsXG4gICAgICBkYXk6IFwiXCIsXG4gICAgICBlbmQ6XCJcIixcbiAgICAgIG1lc3NhZ2U6XCJcIixcbiAgICAgIHY6XCJcIixcbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICBcbiAgICAgIFxuICAgIH07XG5cbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXQyID0gdGhpcy5zdWJtaXQyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tBbnMgPSB0aGlzLmNoZWNrQW5zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRRdWVzdGlvbnMgPSB0aGlzLmdldFF1ZXN0aW9ucy5iaW5kKHRoaXMpO1xuICB9XG4gIFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFxuICAgIGF4aW9zXG4gICAgICAuZ2V0KGRhdGEuYXBpK1wiL2FwaS9zdGF0dXNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgdmFyIHRlbXAzPW5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuc3RhcnRfdGltZSk7XG4gICAgICAgICAgICBsZXQgdGVtcDIgPSBuZXcgRGF0ZShyZXNwb25zZS5kYXRhLmVuZF90aW1lKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbmQnLHRlbXAyLmdldFRpbWUoKSArICh0ZW1wMi5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXJ0XCIsIHRlbXAzLmdldFRpbWUoKSArICh0ZW1wMy5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKTtcbiAgICAgICAgICAgIGxldCB0ZW1wPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKS1EYXRlLm5vdygpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXlcIixyZXNwb25zZS5kYXRhLmN1cnJlbnRfZGF5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2OnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgQW5zQWxlcnQoOSk7XG4gICAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKT09MyB8fCByZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSx0ZW1wKX0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXk6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpLCBlbmQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpfSwoKT0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKT09MyAmJiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpIDwgRGF0ZS5ub3coKSkpXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZ2FtZV9maW5hbGUnKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRheSt0aGlzLnN0YXRlLmVuZCk7XG4gICAgICAgICAgICAgIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpKSB7XG4gICAgICAgICAgICAgICAgQW5zQWxlcnQoOClcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykgPD0gRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgICAgICBBbnNBbGVydCg4KVxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllPT09PT09PXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIFxuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucXNObyk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7IC8vZ2V0IHF1ZXN0aW9ucyBmcm9tIGFwaSBhbmQgdXBkYXRlcyBzdGF0ZVxuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoZGF0YS5hcGkrXCIvYXBpL3F1ZXN0aW9uXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJZT09PK1wiK3Jlc3BvbnNlKTtcbiAgICAgICAgLy9pZiAocmVzcG9uc2UuZGF0YS5lcnJvcikgUm91dGVyLnB1c2goXCIvZmluYWxlMlwiKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZClcbiAgICAgICAge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnYpO1xuICAgICAgICAgIFxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2ZpbmFsZVwiKTtcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uczogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbixcbiAgICAgICAgICAgIGhpbnQ6IHJlc3BvbnNlLmRhdGEuaGludCxcbiAgICAgICAgICAgIHFzTm86IHJlc3BvbnNlLmRhdGEucXVlc3Rpb25fbm8sXG4gICAgICAgICAgICBhdWRpbzogcmVzcG9uc2UuZGF0YS5hdWRpbyxcbiAgICAgICAgICAgIGltYWdlOiByZXNwb25zZS5kYXRhLmltYWdlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZWQ6IHRydWV9KTtcbiAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpO1xuICB9XG5cbiAgc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgLy9zZW5kIGZpbmFsIGFuc3dlciBmb3IgY2hlY2tpbmdcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSk9KT0pPSk9KT0pcIik7XG4gICAgICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICBcbiAgfTtcbiAgc3VibWl0MiA9ICgpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuXG4gICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gIH07XG5cbiAgY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgLy9rZWVwIHVwZGF0aW5nIGFuc3dlclxuICAgIGxldCBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBhbnN3ZXI6IGUgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0FucyhcbiAgICBhbnMgLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgKSB7XG4gICAgY29uc29sZS5sb2coYW5zKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgZGF0YS5hcGkrXCIvYXBpL2NoZWNrYW5zd2VyXCIsXG4gICAgICAgIHsgYW5zd2VyOiBhbnMgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IHIgPSByZXNwb25zZS5kYXRhLnJlc3VsdDtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgIGlmIChyICYmICFyZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgcXNObzogcHJldlN0YXRlLnFzTm8gKyAxLCBhbnN3ZXI6IFwiXCIgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBBbnNBbGVydCgxKTsgLy93aGVyZSBkb2VzIHRoZSBlZmZpbmcgY29udHJvbCBnbyBhZnRlciB0aGlzP1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0FOVEFcIik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICB9IGVsc2UgaWYgKHIgJiYgcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgQW5zQWxlcnQoMSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudik7XG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTsqL1xuICAgICAgICAgIEFuc0FsZXJ0KDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIHsgKGxvYWRlZCA9PT0gdHJ1ZSkgP1xuICAgICAgPExheW91dD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtaW5IZWlnaHQ6IFwiMTAwdmgtMTAwcHhcIiB9fVxuICAgICAgICBxdWVzdGlvbnNcbiAgICAgID5cblxuICAgICAgICA8UXVlc3Rpb24gcXM9e3RoaXMuc3RhdGUucXVlc3Rpb25zfSBxc05vPXt0aGlzLnN0YXRlLnFzTm99IGF1ZGlvPXt0aGlzLnN0YXRlLmF1ZGlvfSBpbWFnZT17dGhpcy5zdGF0ZS5pbWFnZX0gZGF5PXt0aGlzLnN0YXRlLmRheX0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QW5zd2VyXG4gICAgICAgICAgICBjaGFuZ2U9e3RoaXMuY2hhbmdlfVxuXG4gICAgICAgICAgICBhbnN3ZXI9e3RoaXMuc3RhdGUuYW5zd2VyfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8SGludCBoaW50PXt0aGlzLnN0YXRlLmhpbnR9XG4gICAgICAgICAgICBzdWJtaXQ9e3RoaXMuc3VibWl0fVxuICAgICAgICAgICAgc3VibWl0Mj17dGhpcy5zdWJtaXQyfVxuXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3RlckJ1ZmYnPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgOiA8TG9hZGVyLz4gfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiXX0= */\n/*@ sourceURL=/home/rishav4101/Screencast/pages/game.js */")), __jsx("div", {
        className: "footerBuff",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 9
        }
      }))) : __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 9
        }
      }));
    }
  }]);

  return game;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (game);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS5qcyJdLCJuYW1lcyI6WyJnYW1lIiwicHJvcHMiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsImFuc3dlciIsImNoZWNrQW5zIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJxdWVzdGlvbnMiLCJxc05vIiwiYXVkaW8iLCJpbWFnZSIsImlzTG9nZ2VkSW4iLCJoaW50IiwiZGF5IiwiZW5kIiwibWVzc2FnZSIsInYiLCJsb2FkZWQiLCJzdWJtaXQiLCJiaW5kIiwic3VibWl0MiIsImNoYW5nZSIsImdldFF1ZXN0aW9ucyIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImFwaSIsInRoZW4iLCJyZXNwb25zZSIsInRlbXAzIiwiRGF0ZSIsInN0YXJ0X3RpbWUiLCJ0ZW1wMiIsImVuZF90aW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldFRpbWUiLCJnZXRUaW1lem9uZU9mZnNldCIsInRlbXAiLCJnZXRJdGVtIiwibm93IiwiY3VycmVudF9kYXkiLCJzZXRUaW1lb3V0IiwiQW5zQWxlcnQiLCJlcnJvciIsIlJvdXRlciIsInB1c2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInF1aXpfZmluaXNoZWQiLCJjbGVhclRpbWVvdXQiLCJxdWVzdGlvbiIsInF1ZXN0aW9uX25vIiwiYW5zIiwicG9zdCIsInIiLCJyZXN1bHQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJ0ZXh0QWxpZ24iLCJtaW5IZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4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b0YsYUFBSyxFQUFFLEtBQUtWLEtBQUwsQ0FBV1csS0FBdEc7QUFBNkcsV0FBRyxFQUFFLEtBQUtYLEtBQUwsQ0FBV2MsR0FBN0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQywyREFBRDtBQUNFLGNBQU0sRUFBRSxLQUFLUSxNQURmO0FBR0UsY0FBTSxFQUFFLEtBQUt0QixLQUFMLENBQVdDLE1BSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQU9FLE1BQUMseURBQUQ7QUFBTSxZQUFJLEVBQUUsS0FBS0QsS0FBTCxDQUFXYSxJQUF2QjtBQUNFLGNBQU0sRUFBRSxLQUFLTSxNQURmO0FBRUUsZUFBTyxFQUFFLEtBQUtFLE9BRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQRjtBQUFBO0FBQUE7QUFBQSxtelNBTkYsRUEyQkU7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTNCRixDQURBLENBREUsR0FrQ0EsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBbkNGLENBREY7QUF1Q0Q7Ozs7RUFuT2dCeUMsNENBQUssQ0FBQ0MsUzs7QUFxT1ZwRSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYW1lLjM4OTBlODIwZTA3YzkzOTk3YjFlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVlc3Rpb25cIjtcbmltcG9ydCBIaW50IGZyb20gXCIuLi9jb21wb25lbnRzL0hpbnRcIjtcbmltcG9ydCBBbnNBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9BbnNBbGVydFwiXG5pbXBvcnQgQW5zd2VyIGZyb20gXCIuLi9jb21wb25lbnRzL0Fuc3dlclwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uL2Vudi5qc29uJztcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRlclwiXG5cbmNsYXNzIGdhbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5zd2VyOiBcIlwiLFxuICAgICAgcXVlc3Rpb25zOiBcIlwiLFxuICAgICAgcXNObzogMSxcbiAgICAgIGF1ZGlvOiBcIlwiLFxuICAgICAgaW1hZ2U6IFwiXCIsXG4gICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgIGhpbnQ6IFwiXCIsXG4gICAgICBkYXk6IFwiXCIsXG4gICAgICBlbmQ6XCJcIixcbiAgICAgIG1lc3NhZ2U6XCJcIixcbiAgICAgIHY6XCJcIixcbiAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICBcbiAgICAgIFxuICAgIH07XG5cbiAgICB0aGlzLnN1Ym1pdCA9IHRoaXMuc3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdWJtaXQyID0gdGhpcy5zdWJtaXQyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hlY2tBbnMgPSB0aGlzLmNoZWNrQW5zLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRRdWVzdGlvbnMgPSB0aGlzLmdldFF1ZXN0aW9ucy5iaW5kKHRoaXMpO1xuICB9XG4gIFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFxuICAgIGF4aW9zXG4gICAgICAuZ2V0KGRhdGEuYXBpK1wiL2FwaS9zdGF0dXNcIilcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgdmFyIHRlbXAzPW5ldyBEYXRlKHJlc3BvbnNlLmRhdGEuc3RhcnRfdGltZSk7XG4gICAgICAgICAgICBsZXQgdGVtcDIgPSBuZXcgRGF0ZShyZXNwb25zZS5kYXRhLmVuZF90aW1lKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdlbmQnLHRlbXAyLmdldFRpbWUoKSArICh0ZW1wMi5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0YXJ0XCIsIHRlbXAzLmdldFRpbWUoKSArICh0ZW1wMy5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDApKTtcbiAgICAgICAgICAgIGxldCB0ZW1wPWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdlbmQnKS1EYXRlLm5vdygpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkYXlcIixyZXNwb25zZS5kYXRhLmN1cnJlbnRfZGF5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRlbXApO1xuICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2OnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgQW5zQWxlcnQoOSk7XG4gICAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKT09MyB8fCByZXNwb25zZS5kYXRhLmVycm9yKVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9maW5hbGUnKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2ZpbmFsZScpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSx0ZW1wKX0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW5kJykpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXk6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RheScpLCBlbmQ6bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpfSwoKT0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXknKT09MyAmJiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VuZCcpIDwgRGF0ZS5ub3coKSkpXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvZ2FtZV9maW5hbGUnKVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmRheSt0aGlzLnN0YXRlLmVuZCk7XG4gICAgICAgICAgICAgIGlmICghKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZW1haWxcIikpKSB7XG4gICAgICAgICAgICAgICAgQW5zQWxlcnQoOClcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKCEobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXJ0JykgPD0gRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgICAgICBBbnNBbGVydCg4KVxuICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllPT09PT09PXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRRdWVzdGlvbnMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIFxuICB9XG5cbiAgZ2V0UXVlc3Rpb25zKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucXNObyk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7IC8vZ2V0IHF1ZXN0aW9ucyBmcm9tIGFwaSBhbmQgdXBkYXRlcyBzdGF0ZVxuXG4gICAgYXhpb3NcbiAgICAgIC5nZXQoZGF0YS5hcGkrXCIvYXBpL3F1ZXN0aW9uXCIsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJZT09PK1wiK3Jlc3BvbnNlKTtcbiAgICAgICAgLy9pZiAocmVzcG9uc2UuZGF0YS5lcnJvcikgUm91dGVyLnB1c2goXCIvZmluYWxlMlwiKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucXVpel9maW5pc2hlZClcbiAgICAgICAge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnYpO1xuICAgICAgICAgIFxuICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2ZpbmFsZVwiKTtcbiAgICAgICAgfSBcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgICAgIHF1ZXN0aW9uczogcmVzcG9uc2UuZGF0YS5xdWVzdGlvbixcbiAgICAgICAgICAgIGhpbnQ6IHJlc3BvbnNlLmRhdGEuaGludCxcbiAgICAgICAgICAgIHFzTm86IHJlc3BvbnNlLmRhdGEucXVlc3Rpb25fbm8sXG4gICAgICAgICAgICBhdWRpbzogcmVzcG9uc2UuZGF0YS5hdWRpbyxcbiAgICAgICAgICAgIGltYWdlOiByZXNwb25zZS5kYXRhLmltYWdlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkZWQ6IHRydWV9KTtcbiAgICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpO1xuICB9XG5cbiAgc3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgLy9zZW5kIGZpbmFsIGFuc3dlciBmb3IgY2hlY2tpbmdcbiAgICBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSk9KT0pPSk9KT0pcIik7XG4gICAgICB0aGlzLmNoZWNrQW5zKHRoaXMuc3RhdGUuYW5zd2VyKTtcbiAgICBcbiAgfTtcbiAgc3VibWl0MiA9ICgpID0+IHtcbiAgICAvL3NlbmQgZmluYWwgYW5zd2VyIGZvciBjaGVja2luZ1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5hbnN3ZXIpO1xuXG4gICAgdGhpcy5jaGVja0Fucyh0aGlzLnN0YXRlLmFuc3dlcik7XG4gIH07XG5cbiAgY2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgLy9rZWVwIHVwZGF0aW5nIGFuc3dlclxuICAgIGxldCBlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xuICAgICAgcmV0dXJuIHsgLi4ucHJldlN0YXRlLCBhbnN3ZXI6IGUgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjaGVja0FucyhcbiAgICBhbnMgLy9jaGVjayBhbnN3ZXIgZnJvbSBhcGkgYW5kIHNlbmQgZm9yIGNvcnJlY3QgYWxlcnRcbiAgKSB7XG4gICAgY29uc29sZS5sb2coYW5zKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnFzTm8pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChcbiAgICAgICAgZGF0YS5hcGkrXCIvYXBpL2NoZWNrYW5zd2VyXCIsXG4gICAgICAgIHsgYW5zd2VyOiBhbnMgfSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgbGV0IHIgPSByZXNwb25zZS5kYXRhLnJlc3VsdDtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgIGlmIChyICYmICFyZXNwb25zZS5kYXRhLnF1aXpfZmluaXNoZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXZTdGF0ZSwgcXNObzogcHJldlN0YXRlLnFzTm8gKyAxLCBhbnN3ZXI6IFwiXCIgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBBbnNBbGVydCgxKTsgLy93aGVyZSBkb2VzIHRoZSBlZmZpbmcgY29udHJvbCBnbyBhZnRlciB0aGlzP1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0FOVEFcIik7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdldFF1ZXN0aW9ucygpO1xuICAgICAgICB9IGVsc2UgaWYgKHIgJiYgcmVzcG9uc2UuZGF0YS5xdWl6X2ZpbmlzaGVkKSB7XG4gICAgICAgICAgQW5zQWxlcnQoMSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuc3RhdGUudik7XG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvZmluYWxlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhbnN3ZXI6IFwiXCJcbiAgICAgICAgICB9KTsqL1xuICAgICAgICAgIEFuc0FsZXJ0KDApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIHsgKGxvYWRlZCA9PT0gdHJ1ZSkgP1xuICAgICAgPExheW91dD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLCBtYXJnaW5MZWZ0OiBcImF1dG9cIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtaW5IZWlnaHQ6IFwiMTAwdmgtMTAwcHhcIiB9fVxuICAgICAgICBxdWVzdGlvbnNcbiAgICAgID5cblxuICAgICAgICA8UXVlc3Rpb24gcXM9e3RoaXMuc3RhdGUucXVlc3Rpb25zfSBxc05vPXt0aGlzLnN0YXRlLnFzTm99IGF1ZGlvPXt0aGlzLnN0YXRlLmF1ZGlvfSBpbWFnZT17dGhpcy5zdGF0ZS5pbWFnZX0gZGF5PXt0aGlzLnN0YXRlLmRheX0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QW5zd2VyXG4gICAgICAgICAgICBjaGFuZ2U9e3RoaXMuY2hhbmdlfVxuXG4gICAgICAgICAgICBhbnN3ZXI9e3RoaXMuc3RhdGUuYW5zd2VyfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8SGludCBoaW50PXt0aGlzLnN0YXRlLmhpbnR9XG4gICAgICAgICAgICBzdWJtaXQ9e3RoaXMuc3VibWl0fVxuICAgICAgICAgICAgc3VibWl0Mj17dGhpcy5zdWJtaXQyfVxuXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3RlckJ1ZmYnPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgOiA8TG9hZGVyLz4gfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZ2FtZTsiXSwic291cmNlUm9vdCI6IiJ9