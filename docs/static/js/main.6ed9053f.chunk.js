(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],[,,,function(_,e,a){"use strict";a(1);var r=a(0);e.a=function(_){var e=_.num,a=_.handleChange;return Object(r.jsx)("div",{className:"result",children:Object(r.jsx)("div",{id:"output",children:Object(r.jsx)("input",{value:e,onChange:a})})})}},,function(module,__webpack_exports__,__webpack_require__){"use strict";var A_Programate_Proyecto_calculadora_calculadora_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),_Api_Number_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_Api_Number_json__WEBPACK_IMPORTED_MODULE_3___namespace=__webpack_require__.t(6,1),_componente_Botones__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7),_contenedor_Container__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_contenedor_Calculadora__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(9),_contenedor_Result__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(3),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(A_Programate_Proyecto_calculadora_calculadora_react_calculadora_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),num=_useState2[0],setNum=_useState2[1],handleAdd=function handleAdd(e){var id=e.target.id;if("="===id){var result=eval(num);setNum(result),setNum(result.toString())}else setNum("C"===id?num.slice(0,num.length-1):"CE"===id?"":num.concat(id))};function handleChange(_){setNum(_.target.id)}return console.log(num),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_contenedor_Container__WEBPACK_IMPORTED_MODULE_5__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_contenedor_Calculadora__WEBPACK_IMPORTED_MODULE_6__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_contenedor_Result__WEBPACK_IMPORTED_MODULE_7__.a,{handleChange:handleChange,num:num}),_Api_Number_json__WEBPACK_IMPORTED_MODULE_3__.a.map((function(_){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_componente_Botones__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.className,id:_.id,value:_.value,handleAdd:handleAdd},_.id)}))]})})})}__webpack_exports__.a=App},function(_){_.exports=JSON.parse('{"a":[{"className":"operator","id":"C","value":"C"},{"className":"operator","id":"CE","value":"CE"},{"className":"operator","id":"%","value":"%","operador":"%"},{"className":"operator","id":"/","value":"/","operador":"/"},{"className":"number","id":"7","value":"7"},{"className":"number","id":"8","value":"8"},{"className":"number","id":"9","value":"9"},{"className":"operator","id":"*","value":"*"},{"className":"number","id":"4","value":"4"},{"className":"number","id":"5","value":"5"},{"className":"number","id":"6","value":"6"},{"className":"operator","id":"-","value":"-"},{"className":"number","id":"1","value":"1"},{"className":"number","id":"2","value":"2"},{"className":"number","id":"3","value":"3"},{"className":"operator","id":"+","value":"+"},{"className":"number1","id":"0","value":"0"},{"className":"operator1","id":"=","value":"="}]}')},function(_,e,a){"use strict";a(1),a(3);var r=a(0);e.a=function(_){var e=_.className,a=_.id,t=_.value,c=_.handleAdd;return Object(r.jsx)("button",{onClick:c,className:e,id:a,children:t})}},function(_,e,a){"use strict";a(1);var r=a(0);e.a=function(_){var e=_.children;return Object(r.jsx)("div",{className:"container",children:e})}},function(_,e,a){"use strict";a(1);var r=a(0);e.a=function(_){var e=_.children;return Object(r.jsx)("div",{className:"calculator",children:e})}},,,,,,function(_,e,a){},function(_,e,a){},,function(_,e,a){"use strict";a.r(e);var r=a(1),t=a.n(r),c=a(4),n=a.n(c),u=(a(15),a(5)),s=function(_){_&&_ instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(e){var a=e.getCLS,r=e.getFID,t=e.getFCP,c=e.getLCP,n=e.getTTFB;a(_),r(_),t(_),c(_),n(_)}))},l=a(0);n.a.render(Object(l.jsx)(t.a.StrictMode,{children:Object(l.jsx)(u.a,{})}),document.getElementById("root")),s()}],[[18,1,2]]]);
//# sourceMappingURL=main.6ed9053f.chunk.js.map