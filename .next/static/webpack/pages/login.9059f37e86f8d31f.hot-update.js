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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/auth */ \"./utils/auth.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! notistack */ \"./node_modules/notistack/notistack.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Login() {\n    var _router_query, _router_query1;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        loginName: \"\",\n        password: \"\",\n        error: \"\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const { enqueueSnackbar , closeSnackbar  } = (0,notistack__WEBPACK_IMPORTED_MODULE_8__.useSnackbar)();\n    const cookiesToken = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"token\");\n    const paramsToken = (_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query.token;\n    const paramsEmail = (_router_query1 = router.query) === null || _router_query1 === void 0 ? void 0 : _router_query1.email;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (cookiesToken) next_router__WEBPACK_IMPORTED_MODULE_7___default().push(\"/profile\");\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        // Set cookies if params are present\n        if (paramsToken && paramsEmail) {\n            enqueueSnackbar(\"Logging you in...\", {\n                variant: \"info\",\n                autoHideDuration: 0,\n                anchorOrigin: {\n                    vertical: \"top\",\n                    horizontal: \"center\"\n                }\n            });\n        // login({ token: paramsToken, loginName: paramsEmail})\n        }\n        ;\n    }, [\n        paramsToken,\n        paramsEmail\n    ]);\n    async function handleSubmit(event) {\n        event.preventDefault();\n        setUserData(Object.assign({}, userData, {\n            error: \"\"\n        }));\n        const loginName = userData.loginName;\n        const password = userData.password;\n        const url = \"/api/login\";\n        try {\n            const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    loginName,\n                    password\n                })\n            });\n            if (response.status === 200) {\n                const { token  } = await response.json();\n                await (0,_utils_auth__WEBPACK_IMPORTED_MODULE_5__.login)({\n                    token,\n                    loginName\n                });\n            } else {\n                console.log(\"Login failed.\");\n                // https://github.com/developit/unfetch#caveats\n                let error = new Error(response.statusText);\n                error.response = response;\n                throw error;\n            }\n        } catch (error) {\n            console.error(\"You have an error in your code or there are Network issues.\", error);\n            const { response  } = error;\n            setUserData(Object.assign({}, userData, {\n                error: response ? response.statusText : error.message\n            }));\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(notistack__WEBPACK_IMPORTED_MODULE_8__.SnackbarProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"jsx-e0db7cb020e37394\" + \" \" + \"login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"jsx-e0db7cb020e37394\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"loginName\",\n                                className: \"jsx-e0db7cb020e37394\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                id: \"loginName\",\n                                name: \"loginName\",\n                                value: userData.loginName,\n                                onChange: (event)=>setUserData(Object.assign({}, userData, {\n                                        loginName: event.target.value\n                                    })),\n                                className: \"jsx-e0db7cb020e37394\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"password\",\n                                className: \"jsx-e0db7cb020e37394\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"password\",\n                                id: \"password\",\n                                name: \"password\",\n                                value: userData.password,\n                                onChange: (event)=>setUserData(Object.assign({}, userData, {\n                                        password: event.target.value\n                                    })),\n                                className: \"jsx-e0db7cb020e37394\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"jsx-e0db7cb020e37394\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this),\n                            userData.error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-e0db7cb020e37394\" + \" \" + \"error\",\n                                children: [\n                                    \"Error: \",\n                                    userData.error\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                                lineNumber: 103,\n                                columnNumber: 32\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: \"e0db7cb020e37394\",\n                    children: \".login.jsx-e0db7cb020e37394{max-width:340px;margin:0 auto;padding:1rem;border:1px solid#ccc;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}form.jsx-e0db7cb020e37394{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-flow:column;flex-flow:column}label.jsx-e0db7cb020e37394{font-weight:600}input.jsx-e0db7cb020e37394{padding:8px;margin:.3rem 0 1rem;border:1px solid#ccc;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px}.error.jsx-e0db7cb020e37394{margin:.5rem 0 0;color:brown}\"\n                }, void 0, false, void 0, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\React\\\\Ecomindo\\\\cookie-based-authentication-nextjs-react-forked\\\\pages\\\\login.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"IxICQUM4H5VWp8Wlu1t4bVPOWGw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        notistack__WEBPACK_IMPORTED_MODULE_8__.useSnackbar\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU1QixDQUFBQSxRQUNScEIsWUFDRXNCLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUd4QixVQUFVO3dDQUFFRSxXQUFXbUIsTUFBTTZCLE1BQU0sQ0FBQ0YsS0FBSztvQ0FBQzs7Ozs7OzswQ0FLbEUsOERBQUNOO2dDQUFNQyxTQUFROzswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xDLE9BQU9oRCxTQUFTRyxRQUFRO2dDQUN4QjhDLFVBQVU1QixDQUFBQSxRQUNScEIsWUFDRXNCLE9BQU9DLE1BQU0sQ0FBQyxDQUFDLEdBQUd4QixVQUFVO3dDQUFFRyxVQUFVa0IsTUFBTTZCLE1BQU0sQ0FBQ0YsS0FBSztvQ0FBQzs7Ozs7OzswQ0FLakUsOERBQUNHO2dDQUFPTixNQUFLOzswQ0FBUzs7Ozs7OzRCQUVyQjdDLFNBQVNJLEtBQUssa0JBQUksOERBQUNnRDswRUFBWTs7b0NBQVE7b0NBQVFwRCxTQUFTSSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQzFFO0dBbElTTjs7UUFFUUgsa0RBQVNBO1FBQ21CRSxrREFBV0E7OztLQUgvQ0M7QUFvSVQsK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/ODFiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL3V0aWxzL2F1dGgnXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciwgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snO1xuXG5mdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7IGxvZ2luTmFtZTogJycsIHBhc3N3b3JkOiAnJywgZXJyb3I6ICcnIH0pXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyLCBjbG9zZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xuICBjb25zdCBjb29raWVzVG9rZW4gPSBDb29raWVzLmdldCgndG9rZW4nKTtcbiAgY29uc3QgcGFyYW1zVG9rZW4gPSByb3V0ZXIucXVlcnk/LnRva2VuO1xuICBjb25zdCBwYXJhbXNFbWFpbCA9IHJvdXRlci5xdWVyeT8uZW1haWw7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY29va2llc1Rva2VuKSBSb3V0ZXIucHVzaCgnL3Byb2ZpbGUnKVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBTZXQgY29va2llcyBpZiBwYXJhbXMgYXJlIHByZXNlbnRcbiAgICBpZiAocGFyYW1zVG9rZW4gJiYgcGFyYW1zRW1haWwpIHtcbiAgICAgIGVucXVldWVTbmFja2JhcignTG9nZ2luZyB5b3UgaW4uLi4nLCB7IHZhcmlhbnQ6ICdpbmZvJywgYXV0b0hpZGVEdXJhdGlvbjogMCwgYW5jaG9yT3JpZ2luOiB7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2NlbnRlcid9IH0pO1xuICAgICAgLy8gbG9naW4oeyB0b2tlbjogcGFyYW1zVG9rZW4sIGxvZ2luTmFtZTogcGFyYW1zRW1haWx9KVxuICAgIH07XG4gIH0sIFtwYXJhbXNUb2tlbiwgcGFyYW1zRW1haWxdKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBzZXRVc2VyRGF0YShPYmplY3QuYXNzaWduKHt9LCB1c2VyRGF0YSwgeyBlcnJvcjogJycgfSkpXG5cbiAgICBjb25zdCBsb2dpbk5hbWUgPSB1c2VyRGF0YS5sb2dpbk5hbWVcbiAgICBjb25zdCBwYXNzd29yZCA9IHVzZXJEYXRhLnBhc3N3b3JkXG4gICAgY29uc3QgdXJsID0gJy9hcGkvbG9naW4nXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG5cbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbG9naW5OYW1lLCBwYXNzd29yZCB9KSxcbiAgICAgIH0pXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIGF3YWl0IGxvZ2luKHsgdG9rZW4sIGxvZ2luTmFtZSB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0xvZ2luIGZhaWxlZC4nKVxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3VuZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgICAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAnWW91IGhhdmUgYW4gZXJyb3IgaW4geW91ciBjb2RlIG9yIHRoZXJlIGFyZSBOZXR3b3JrIGlzc3Vlcy4nLFxuICAgICAgICBlcnJvclxuICAgICAgKVxuXG4gICAgICBjb25zdCB7IHJlc3BvbnNlIH0gPSBlcnJvclxuICAgICAgc2V0VXNlckRhdGEoXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHVzZXJEYXRhLCB7XG4gICAgICAgICAgZXJyb3I6IHJlc3BvbnNlID8gcmVzcG9uc2Uuc3RhdHVzVGV4dCA6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8U25hY2tiYXJQcm92aWRlcj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5cIj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9naW5OYW1lXCI+VXNlcm5hbWU8L2xhYmVsPlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cImxvZ2luTmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJsb2dpbk5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dXNlckRhdGEubG9naW5OYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cbiAgICAgICAgICAgICAgICBzZXRVc2VyRGF0YShcbiAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHVzZXJEYXRhLCB7IGxvZ2luTmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dXNlckRhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxuICAgICAgICAgICAgICAgIHNldFVzZXJEYXRhKFxuICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdXNlckRhdGEsIHsgcGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cblxuICAgICAgICAgICAge3VzZXJEYXRhLmVycm9yICYmIDxwIGNsYXNzTmFtZT1cImVycm9yXCI+RXJyb3I6IHt1c2VyRGF0YS5lcnJvcn08L3A+fVxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubG9naW4ge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzNDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW46IDAuM3JlbSAwIDFyZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDA7XG4gICAgICAgICAgICBjb2xvcjogYnJvd247XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmV0Y2giLCJMYXlvdXQiLCJsb2dpbiIsIkNvb2tpZXMiLCJSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJTbmFja2JhclByb3ZpZGVyIiwidXNlU25hY2tiYXIiLCJMb2dpbiIsInJvdXRlciIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJsb2dpbk5hbWUiLCJwYXNzd29yZCIsImVycm9yIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsImNvb2tpZXNUb2tlbiIsImdldCIsInBhcmFtc1Rva2VuIiwicXVlcnkiLCJ0b2tlbiIsInBhcmFtc0VtYWlsIiwiZW1haWwiLCJwdXNoIiwidmFyaWFudCIsImF1dG9IaWRlRHVyYXRpb24iLCJhbmNob3JPcmlnaW4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwicmVzcG9uc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIkVycm9yIiwic3RhdHVzVGV4dCIsIm1lc3NhZ2UiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});