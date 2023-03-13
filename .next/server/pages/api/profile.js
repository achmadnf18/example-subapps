"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/profile";
exports.ids = ["pages/api/profile"];
exports.modules = {

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("isomorphic-unfetch");;

/***/ }),

/***/ "(api)/./pages/api/profile.js":
/*!******************************!*\
  !*** ./pages/api/profile.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__]);\nisomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (!(\"authorization\" in req.headers)) {\n        return res.status(401).send(\"Authorization header missing\");\n    }\n    const Authorization = await req.headers.authorization;\n    const { loginName  } = await req.body;\n    try {\n        const url = `https://apim-mydashboardbinusmaya-dev.azure-api.net/func-mydashboardbinusmaya-profile-dev/Person`;\n        const response = await (0,isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization\n            },\n            body: JSON.stringify({\n                loginName\n            })\n        });\n        if (response.ok) {\n            const data = await response.json();\n            return res.status(200).json({\n                data\n            });\n        } else {\n            // https://github.com/developit/unfetch#caveats\n            const error = new Error(response.statusText);\n            error.response = response;\n            throw error;\n        }\n    } catch (error) {\n        const { response  } = error;\n        return response ? res.status(response.status).json({\n            message: response.statusText\n        }) : res.status(400).json({\n            message: error.message\n        });\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzQztBQUV0QyxpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQ2pDLElBQUksQ0FBRSxvQkFBbUJELElBQUlFLE9BQU8sR0FBRztRQUNyQyxPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxNQUFNQyxnQkFBZ0IsTUFBTUwsSUFBSUUsT0FBTyxDQUFDSSxhQUFhO0lBQ3JELE1BQU0sRUFBRUMsVUFBUyxFQUFFLEdBQUcsTUFBTVAsSUFBSVEsSUFBSTtJQUVwQyxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxDQUFDLGdHQUFnRyxDQUFDO1FBRTlHLE1BQU1DLFdBQVcsTUFBTVgsOERBQUtBLENBQUNVLEtBQUs7WUFDaENFLFFBQVE7WUFDUlQsU0FBUztnQkFDUCxnQkFBZ0I7Z0JBQ2hCRztZQUNGO1lBQ0FHLE1BQU1JLEtBQUtDLFNBQVMsQ0FBQztnQkFBRU47WUFBVTtRQUNuQztRQUVBLElBQUlHLFNBQVNJLEVBQUUsRUFBRTtZQUNmLE1BQU1DLE9BQU8sTUFBTUwsU0FBU00sSUFBSTtZQUNoQyxPQUFPZixJQUFJRSxNQUFNLENBQUMsS0FBS2EsSUFBSSxDQUFDO2dCQUFFRDtZQUFLO1FBQ3JDLE9BQU87WUFDTCwrQ0FBK0M7WUFDL0MsTUFBTUUsUUFBUSxJQUFJQyxNQUFNUixTQUFTUyxVQUFVO1lBQzNDRixNQUFNUCxRQUFRLEdBQUdBO1lBQ2pCLE1BQU1PLE1BQUs7UUFDYixDQUFDO0lBQ0gsRUFBRSxPQUFPQSxPQUFPO1FBQ2QsTUFBTSxFQUFFUCxTQUFRLEVBQUUsR0FBR087UUFDckIsT0FBT1AsV0FDSFQsSUFBSUUsTUFBTSxDQUFDTyxTQUFTUCxNQUFNLEVBQUVhLElBQUksQ0FBQztZQUFFSSxTQUFTVixTQUFTUyxVQUFVO1FBQUMsS0FDaEVsQixJQUFJRSxNQUFNLENBQUMsS0FBS2EsSUFBSSxDQUFDO1lBQUVJLFNBQVNILE1BQU1HLE9BQU87UUFBQyxFQUFFO0lBQ3REO0FBQ0YsR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nvb2tpZS1iYXNlZC1hdXRoZW50aWNhdGlvbi1uZXh0anMtcmVhY3QvLi9wYWdlcy9hcGkvcHJvZmlsZS5qcz8xNmMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAoISgnYXV0aG9yaXphdGlvbicgaW4gcmVxLmhlYWRlcnMpKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCdBdXRob3JpemF0aW9uIGhlYWRlciBtaXNzaW5nJylcbiAgfVxuXG4gIGNvbnN0IEF1dGhvcml6YXRpb24gPSBhd2FpdCByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uXG4gIGNvbnN0IHsgbG9naW5OYW1lIH0gPSBhd2FpdCByZXEuYm9keTtcblxuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaW0tbXlkYXNoYm9hcmRiaW51c21heWEtZGV2LmF6dXJlLWFwaS5uZXQvZnVuYy1teWRhc2hib2FyZGJpbnVzbWF5YS1wcm9maWxlLWRldi9QZXJzb25gXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb24sXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsb2dpbk5hbWUgfSksXG4gICAgfSlcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3VuZmV0Y2gjY2F2ZWF0c1xuICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnN0IHsgcmVzcG9uc2UgfSA9IGVycm9yXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICA/IHJlcy5zdGF0dXMocmVzcG9uc2Uuc3RhdHVzKS5qc29uKHsgbWVzc2FnZTogcmVzcG9uc2Uuc3RhdHVzVGV4dCB9KVxuICAgICAgOiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfSlcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZldGNoIiwicmVxIiwicmVzIiwiaGVhZGVycyIsInN0YXR1cyIsInNlbmQiLCJBdXRob3JpemF0aW9uIiwiYXV0aG9yaXphdGlvbiIsImxvZ2luTmFtZSIsImJvZHkiLCJ1cmwiLCJyZXNwb25zZSIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJFcnJvciIsInN0YXR1c1RleHQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/profile.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/profile.js"));
module.exports = __webpack_exports__;

})();