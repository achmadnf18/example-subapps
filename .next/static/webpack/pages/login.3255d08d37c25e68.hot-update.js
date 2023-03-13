"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/notistack.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Login() {\n    var _router_query, _router_query1;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        loginName: \"\",\n        password: \"\",\n        error: \"\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const { enqueueSnackbar , closeSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_8__.useSnackbar)();\n    const cookiesToken = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n    const paramsToken = (_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.token;\n    const paramsEmail = (_router_query1 = router.query) === null || _router_query1 === void 0 ? void 0 : _router_query1.email;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (cookiesToken) next_router__WEBPACK_IMPORTED_MODULE_7___default().push(\"/profile\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Set cookies if params are present\n        if (paramsToken && paramsEmail) {\n            enqueueSnackbar(\"Logging you in...\", {\n                variant: \"info\",\n                anchorOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"center\"\n                }\n            });\n        // login({ token: paramsToken, loginName: paramsEmail})\n        }\n        ;\n    }, [\n        paramsToken,\n        paramsEmail\n    ]);\n    async function handleSubmit(event) {\n        event.preventDefault();\n        setUserData(Object.assign({}, userData, {\n            error: \"\"\n        }));\n        const loginName = userData.loginName;\n        const password = userData.password;\n        const url = \"/api/login\";\n        try {\n            const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    loginName,\n                    password\n                })\n            });\n            if (response.status === 200) {\n                const { token  } = await response.json();\n                await (0,_utils_auth__WEBPACK_IMPORTED_MODULE_5__.login)({\n                    token,\n                    loginName\n                });\n            } else {\n                console.log(\"Login failed.\");\n                // https://github.com/developit/unfetch#caveats\n                let error = new Error(response.statusText);\n                error.response = response;\n                throw error;\n            }\n        } catch (error) {\n            console.error(\"You have an error in your code or there are Network issues.\", error);\n            const { response  } = error;\n            setUserData(Object.assign({}, userData, {\n                error: response ? response.statusText : error.message\n            }));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(notistack__WEBPACK_IMPORTED_MODULE_8__.SnackbarProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-e0db7cb020e37394\" + \" \" + \"login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"jsx-e0db7cb020e37394\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"loginName\",\n                                className: \"jsx-e0db7cb020e37394\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"loginName\",\n                                name: \"loginName\",\n                                value: userData.loginName,\n                                onChange: (event)=>setUserData(Object.assign({}, userData, {\n                                        loginName: event.target.value\n                                    })),\n                                className: \"jsx-e0db7cb020e37394\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"jsx-e0db7cb020e37394\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\",\n                                value: userData.password,\n                                onChange: (event)=>setUserData(Object.assign({}, userData, {\n                                        password: event.target.value\n                                    })),\n                                className: \"jsx-e0db7cb020e37394\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"jsx-e0db7cb020e37394\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this),\n                            userData.error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-e0db7cb020e37394\" + \" \" + \"error\",\n                                children: [\n                                    \"Error: \",\n                                    userData.error\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 103,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"e0db7cb020e37394\",\n                    children: \".login.jsx-e0db7cb020e37394{max-width:340px;margin:0 auto;padding:1rem;border:1px solid#ccc;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}form.jsx-e0db7cb020e37394{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-flow:column;flex-flow:column}label.jsx-e0db7cb020e37394{font-weight:600}input.jsx-e0db7cb020e37394{padding:8px;margin:.3rem 0 1rem;border:1px solid#ccc;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.error.jsx-e0db7cb020e37394{margin:.5rem 0 0;color:brown}\"\n                }, void 0, false, void 0, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"IxICQUM4H5VWp8Wlu1t4bVPOWGw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        notistack__WEBPACK_IMPORTED_MODULE_8__.useSnackbar\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Um5CLFlBQ0VxQixPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFHdkIsVUFBVTt3Q0FBRUUsV0FBV2tCLE1BQU02QixNQUFNLENBQUNGLEtBQUs7b0NBQUM7Ozs7Ozs7MENBS2xFLDhEQUFDTjtnQ0FBTUMsU0FBUTs7MENBQVc7Ozs7OzswQ0FDMUIsOERBQUNDO2dDQUNDQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxNQUFLO2dDQUNMQyxPQUFPL0MsU0FBU0csUUFBUTtnQ0FDeEI2QyxVQUFVNUIsQ0FBQUEsUUFDUm5CLFlBQ0VxQixPQUFPQyxNQUFNLENBQUMsQ0FBQyxHQUFHdkIsVUFBVTt3Q0FBRUcsVUFBVWlCLE1BQU02QixNQUFNLENBQUNGLEtBQUs7b0NBQUM7Ozs7Ozs7MENBS2pFLDhEQUFDRztnQ0FBT04sTUFBSzs7MENBQVM7Ozs7Ozs0QkFFckI1QyxTQUFTSSxLQUFLLGtCQUFJLDhEQUFDK0M7MEVBQVk7O29DQUFRO29DQUFRbkQsU0FBU0ksS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0MxRTtHQWxJU047O1FBRVFILGtEQUFTQTtRQUNtQkUsa0RBQVdBOzs7S0FIL0NDO0FBb0lULCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZ2luLmpzPzgxYjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgbG9naW4gfSBmcm9tICcuLi91dGlscy9hdXRoJ1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIsIHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcblxuZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoeyBsb2dpbk5hbWU6ICcnLCBwYXNzd29yZDogJycsIGVycm9yOiAnJyB9KVxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciwgY2xvc2VTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcbiAgY29uc3QgY29va2llc1Rva2VuID0gQ29va2llcy5nZXQoJ3Rva2VuJyk7XG4gIGNvbnN0IHBhcmFtc1Rva2VuID0gcm91dGVyLnF1ZXJ5Py50b2tlbjtcbiAgY29uc3QgcGFyYW1zRW1haWwgPSByb3V0ZXIucXVlcnk/LmVtYWlsO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNvb2tpZXNUb2tlbikgUm91dGVyLnB1c2goJy9wcm9maWxlJylcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2V0IGNvb2tpZXMgaWYgcGFyYW1zIGFyZSBwcmVzZW50XG4gICAgaWYgKHBhcmFtc1Rva2VuICYmIHBhcmFtc0VtYWlsKSB7XG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ0xvZ2dpbmcgeW91IGluLi4uJywgeyB2YXJpYW50OiAnaW5mbycsIGFuY2hvck9yaWdpbjogeyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdjZW50ZXInfSB9KTtcbiAgICAgIC8vIGxvZ2luKHsgdG9rZW46IHBhcmFtc1Rva2VuLCBsb2dpbk5hbWU6IHBhcmFtc0VtYWlsfSlcbiAgICB9O1xuICB9LCBbcGFyYW1zVG9rZW4sIHBhcmFtc0VtYWlsXSlcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgc2V0VXNlckRhdGEoT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHsgZXJyb3I6ICcnIH0pKVxuXG4gICAgY29uc3QgbG9naW5OYW1lID0gdXNlckRhdGEubG9naW5OYW1lXG4gICAgY29uc3QgcGFzc3dvcmQgPSB1c2VyRGF0YS5wYXNzd29yZFxuICAgIGNvbnN0IHVybCA9ICcvYXBpL2xvZ2luJ1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxvZ2luTmFtZSwgcGFzc3dvcmQgfSksXG4gICAgICB9KVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBhd2FpdCBsb2dpbih7IHRva2VuLCBsb2dpbk5hbWUgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbiBmYWlsZWQuJylcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC91bmZldGNoI2NhdmVhdHNcbiAgICAgICAgbGV0IGVycm9yID0gbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgJ1lvdSBoYXZlIGFuIGVycm9yIGluIHlvdXIgY29kZSBvciB0aGVyZSBhcmUgTmV0d29yayBpc3N1ZXMuJyxcbiAgICAgICAgZXJyb3JcbiAgICAgIClcblxuICAgICAgY29uc3QgeyByZXNwb25zZSB9ID0gZXJyb3JcbiAgICAgIHNldFVzZXJEYXRhKFxuICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB1c2VyRGF0YSwge1xuICAgICAgICAgIGVycm9yOiByZXNwb25zZSA/IHJlc3BvbnNlLnN0YXR1c1RleHQgOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFNuYWNrYmFyUHJvdmlkZXI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxvZ2luTmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJsb2dpbk5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibG9naW5OYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJEYXRhLmxvZ2luTmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+XG4gICAgICAgICAgICAgICAgc2V0VXNlckRhdGEoXG4gICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB1c2VyRGF0YSwgeyBsb2dpbk5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJEYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cbiAgICAgICAgICAgICAgICBzZXRVc2VyRGF0YShcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHVzZXJEYXRhLCB7IHBhc3N3b3JkOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG5cbiAgICAgICAgICAgIHt1c2VyRGF0YS5lcnJvciAmJiA8cCBjbGFzc05hbWU9XCJlcnJvclwiPkVycm9yOiB7dXNlckRhdGEuZXJyb3J9PC9wPn1cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmxvZ2luIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzQwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwLjNyZW0gMCAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMCAwO1xuICAgICAgICAgICAgY29sb3I6IGJyb3duO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9TbmFja2JhclByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImZldGNoIiwiTGF5b3V0IiwibG9naW4iLCJDb29raWVzIiwiUm91dGVyIiwidXNlUm91dGVyIiwiU25hY2tiYXJQcm92aWRlciIsInVzZVNuYWNrYmFyIiwiTG9naW4iLCJyb3V0ZXIiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwibG9naW5OYW1lIiwicGFzc3dvcmQiLCJlcnJvciIsImVucXVldWVTbmFja2JhciIsImNsb3NlU25hY2tiYXIiLCJjb29raWVzVG9rZW4iLCJnZXQiLCJwYXJhbXNUb2tlbiIsInF1ZXJ5IiwidG9rZW4iLCJwYXJhbXNFbWFpbCIsImVtYWlsIiwicHVzaCIsInZhcmlhbnQiLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwicmVzcG9uc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwic3RhdHVzVGV4dCIsIm1lc3NhZ2UiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});