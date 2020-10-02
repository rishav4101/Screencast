webpackHotUpdate_N_E("pages/leaderboard",{

/***/ "./components/Leadertable.js":
/*!***********************************!*\
  !*** ./components/Leadertable.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Leadertable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _env_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../env.json */ "./env.json");
var _env_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../env.json */ "./env.json", 1);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Navbar.module.css */ "./components/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/home/rishav4101/Screencast/components/Leadertable.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var StyledTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    head: {
      backgroundColor: "#000044",
      color: "white",
      border: "none",
      fontFamily: "Russo One",
      fontSize: 16
    },
    body: {
      fontFamily: "Russo One",
      fontSize: 14,
      color: "#fff",
      border: "none"
    }
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"]);
var StyledTableRow = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    root: {
      "&:nth-of-type(1)": {
        backgroundColor: "rgba(0,255,0,0.35) !important",
        color: "#000 !important"
      },
      "&:nth-of-type(2)": {
        backgroundColor: "rgba(0,255,0,0.35) !important",
        color: "#000 !important"
      },
      "&:nth-of-type(3)": {
        backgroundColor: "rgba(0,255,0,0.35) !important",
        color: "#000 !important"
      },
      "&:nth-of-type(odd)": {
        backgroundColor: "rgba(55,55,100,0.3)",
        color: "#000 !important"
      },
      "&:nth-of-type(even)": {
        backgroundColor: "rgba(0,0,0,0.6)",
        color: "white !important"
      }
    }
  };
})(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"]);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  table: {
    marginTop: "15px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "auto",
    maxWidth: "900px",
    position: "relative",
    marginBottom: "0px"
  }
});
function Leadertable() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      RankList = _useState[0],
      setRankList = _useState[1];

  var classes = useStyles();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(_env_json__WEBPACK_IMPORTED_MODULE_9__.api + "/api/leaderboard"
    /*, {
    headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    },
    }*/
    ).then(function (response) {
      setRankList(response.data);
      console.log(response.data);
      console.log(RankList);
    });
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "rtable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table,
    "aria-label": "customized table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, "Rank"), __jsx(StyledTableCell, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 15
    }
  }, "Player"), __jsx(StyledTableCell, {
    align: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, "Points"))), RankList.length ? __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: {
      fontFamily: "'Barlow', sans-serif"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, RankList.map(function (row, index) {
    return __jsx(StyledTableRow, {
      key: index,
      style: {
        fontFamily: "'Barlow', sans-serif"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, __jsx(StyledTableCell, {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 19
      }
    }, row.rank, "."), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 19
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      alt: name,
      src: row.imgurl,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 21
      }
    })), __jsx(StyledTableCell, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, row.name), __jsx(StyledTableCell, {
      align: "left",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 19
      }
    }, row.score));
  })) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    className: classes.title,
    style: {
      fontFamily: "'Russo One', sans-serif",
      fontSize: 18,
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "\xA0\xA0\xA0Loading..."))));
}

_s(Leadertable, "1G8/aO6V87q6UDrL4l4VNidnfz0=", false, function () {
  return [useStyles];
});

_c = Leadertable;

var _c;

$RefreshReg$(_c, "Leadertable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MZWFkZXJ0YWJsZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWRUYWJsZUNlbGwiLCJ3aXRoU3R5bGVzIiwidGhlbWUiLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJib2R5IiwiVGFibGVDZWxsIiwiU3R5bGVkVGFibGVSb3ciLCJyb290IiwiVGFibGVSb3ciLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGFibGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJwb3NpdGlvbiIsIm1hcmdpbkJvdHRvbSIsIkxlYWRlcnRhYmxlIiwidXNlU3RhdGUiLCJSYW5rTGlzdCIsInNldFJhbmtMaXN0IiwiY2xhc3NlcyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwiZGF0YSIsImFwaSIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtYXAiLCJyb3ciLCJpbmRleCIsInJhbmsiLCJuYW1lIiwiaW1ndXJsIiwic2NvcmUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxlQUFlLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDN0NDLFFBQUksRUFBRTtBQUNKQyxxQkFBZSxFQUFFLFNBRGI7QUFFSkMsV0FBSyxFQUFFLE9BRkg7QUFHSkMsWUFBTSxFQUFFLE1BSEo7QUFJSkMsZ0JBQVUsRUFBQyxXQUpQO0FBS0pDLGNBQVEsRUFBRTtBQUxOLEtBRHVDO0FBUTdDQyxRQUFJLEVBQUU7QUFDSkYsZ0JBQVUsRUFBQyxXQURQO0FBRUpDLGNBQVEsRUFB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QUM7QUFBNUQsS0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQXBDSixDQURGLENBREYsQ0FERjtBQXFERDs7R0F2RXVCbUIsVztVQUVOVixTOzs7S0FGTVUsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sZWFkZXJib2FyZC5jMDYyNjQ1Yjc1NGUxNzc1NWJmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdpdGhTdHlsZXMsIG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgVGFibGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCI7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vZW52Lmpzb24nO1xuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL05hdmJhci5tb2R1bGUuY3NzXCI7XG5jb25zdCBTdHlsZWRUYWJsZUNlbGwgPSB3aXRoU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgaGVhZDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDQ0XCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGZvbnRGYW1pbHk6XCJSdXNzbyBPbmVcIixcbiAgICBmb250U2l6ZTogMTZcbiAgfSxcbiAgYm9keToge1xuICAgIGZvbnRGYW1pbHk6XCJSdXNzbyBPbmVcIixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgY29sb3I6XCIjZmZmXCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgfSxcbn0pKShUYWJsZUNlbGwpO1xuXG5jb25zdCBTdHlsZWRUYWJsZVJvdyA9IHdpdGhTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgXCImOm50aC1vZi10eXBlKDEpXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMjU1LDAsMC4zNSkgIWltcG9ydGFudFwiLFxuICAgICAgY29sb3I6XCIjMDAwICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOm50aC1vZi10eXBlKDIpXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMjU1LDAsMC4zNSkgIWltcG9ydGFudFwiLFxuICAgICAgY29sb3I6XCIjMDAwICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOm50aC1vZi10eXBlKDMpXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsMjU1LDAsMC4zNSkgIWltcG9ydGFudFwiLFxuICAgICAgY29sb3I6XCIjMDAwICFpbXBvcnRhbnRcIlxuICAgIH0sXG4gICAgXCImOm50aC1vZi10eXBlKG9kZClcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoNTUsNTUsMTAwLDAuMylcIixcbiAgICAgIGNvbG9yOlwiIzAwMCAhaW1wb3J0YW50XCJcbiAgICB9LFxuICAgIFwiJjpudGgtb2YtdHlwZShldmVuKVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLDAsMCwwLjYpXCIsXG4gICAgICBjb2xvcjogXCJ3aGl0ZSAhaW1wb3J0YW50XCIsXG4gICAgfSxcbiAgfSxcbn0pKShUYWJsZVJvdyk7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICB0YWJsZToge1xuICAgIG1hcmdpblRvcDogXCIxNXB4XCIsXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXG4gICAgbWFyZ2luUmlnaHQ6IFwiYXV0b1wiLFxuICAgIGRpc3BsYXk6IFwiYXV0b1wiLFxuICAgIG1heFdpZHRoOiBcIjkwMHB4XCIsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICBtYXJnaW5Cb3R0b206IFwiMHB4XCJcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZWFkZXJ0YWJsZSgpIHtcbiAgY29uc3QgW1JhbmtMaXN0LCBzZXRSYW5rTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KGRhdGEuYXBpK1wiL2FwaS9sZWFkZXJib2FyZFwiLyosIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSxcbiAgICAgICAgfSxcbiAgICAgIH0qLylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRSYW5rTGlzdChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFJhbmtMaXN0KTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJydGFibGVcIj5cbiAgICAgICAgPFRhYmxlIGNsYXNzTmFtZT17Y2xhc3Nlcy50YWJsZX0gYXJpYS1sYWJlbD1cImN1c3RvbWl6ZWQgdGFibGVcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93PlxuXG4gICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGw+UmFuazwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsPjwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlBsYXllcjwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlBvaW50czwvU3R5bGVkVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cblxuICAgICAgICAgIHtSYW5rTGlzdC5sZW5ndGggPyAoXG4gICAgICAgICAgICA8VGFibGVCb2R5IHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ0JhcmxvdycsIHNhbnMtc2VyaWZcIiB9fT5cbiAgICAgICAgICAgICAge1JhbmtMaXN0Lm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZVJvd1xuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwiJ0JhcmxvdycsIHNhbnMtc2VyaWZcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7cm93LnJhbmt9LlxuICAgICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICBzcmM9e3Jvdy5pbWd1cmx9XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8+PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYmxlQ2VsbD57cm93Lm5hbWV9PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8U3R5bGVkVGFibGVDZWxsIGFsaWduPVwibGVmdFwiPntyb3cuc2NvcmV9PC9TdHlsZWRUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWRUYWJsZVJvdz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIidSdXNzbyBPbmUnLCBzYW5zLXNlcmlmXCIsIGZvbnRTaXplOjE4LCBjb2xvcjond2hpdGUnfX1cbiAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7Jm5ic3A7TG9hZGluZy4uLlxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=