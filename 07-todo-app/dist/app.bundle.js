/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar todo_list_view_1 = __webpack_require__(/*! ./todo-list-view */ \"./src/todo-list-view.ts\");\nvar app;\n(function (app) {\n    app.init = function () {\n        var todos$ = document.getElementById('todos');\n        var input$ = document.getElementById('todo-input');\n        var addButton$ = document.getElementById('add-todo');\n        var todoListView = todo_list_view_1[\"default\"](todos$, 'write 500 words', 'read ts docs');\n        todoListView.render();\n        addButton$.addEventListener('click', function (event) {\n            console.log('add todo');\n        });\n        input$.addEventListener('keypress', function (event) {\n            if (event['keyCode'] === 13) {\n                console.log('add todo (keypress)');\n            }\n        });\n        console.log(\"Hello Todo App\");\n    };\n})(app || (app = {}));\napp.init();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/todo-collection.ts":
/*!********************************!*\
  !*** ./src/todo-collection.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nexports.__esModule = true;\nvar todo_model_1 = __webpack_require__(/*! ./todo-model */ \"./src/todo-model.ts\");\nvar todoCollection = function () {\n    var titleArr = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        titleArr[_i] = arguments[_i];\n    }\n    var collection = titleArr.map(function (title, index) {\n        return todo_model_1[\"default\"](index + 1, title);\n    });\n    var get = function () {\n        return collection;\n    };\n    var add = function (title) {\n        var id = collection.length + 1;\n        collection = collection.concat([todo_model_1[\"default\"](id, title)]);\n    };\n    var remove = function (id) {\n        collection = collection.filter(function (todo) {\n            return todo['id'] !== id;\n        });\n    };\n    var getItemById = function (id) {\n        var item;\n        collection.forEach(function (todo) {\n            if (todo['id'] === id) {\n                item = todo;\n            }\n        });\n        return item;\n    };\n    var toggleCompleted = function (id) {\n        collection = collection.map(function (todo) {\n            if (todo['id'] === id) {\n                return __assign({}, todo, { completed: !todo['completed'] });\n            }\n            return todo;\n        });\n    };\n    return {\n        get: get,\n        add: add,\n        remove: remove,\n        getItemById: getItemById,\n        toggleCompleted: toggleCompleted\n    };\n};\nexports[\"default\"] = todoCollection;\n\n\n//# sourceURL=webpack:///./src/todo-collection.ts?");

/***/ }),

/***/ "./src/todo-list-view.ts":
/*!*******************************!*\
  !*** ./src/todo-list-view.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar todo_collection_1 = __webpack_require__(/*! ./todo-collection */ \"./src/todo-collection.ts\");\nvar todo_view_1 = __webpack_require__(/*! ./todo-view */ \"./src/todo-view.ts\");\nvar todoViewCollection = function (el$) {\n    var titleArr = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        titleArr[_i - 1] = arguments[_i];\n    }\n    var todoCollection = todo_collection_1[\"default\"].apply(void 0, titleArr);\n    var render = function () {\n        var list$ = todoCollection.get().map(function (todo) {\n            return todo_view_1[\"default\"](todo).render();\n        }).join('');\n        el$.innerHTML = \"<ul class=\\\"list-group\\\">\" + list$ + \"</ul>\";\n        attachEvents();\n    };\n    var attachEvents = function () {\n        var todos$ = el$.querySelectorAll('.list-group-item');\n        todos$.forEach(function (todo$) {\n            var id = parseInt(todo$.getAttribute('data-id'));\n            var checkbox$ = todo$.querySelector('.toggleCompleted');\n            var removeButton$ = todo$.querySelector('.remove');\n            checkbox$.addEventListener('click', function (event) {\n                console.log(\"toggle Completed task \" + id);\n            });\n            removeButton$.addEventListener('click', function (event) {\n                console.log(\"remove task \" + id);\n            });\n        });\n    };\n    return {\n        render: render\n    };\n};\nexports[\"default\"] = todoViewCollection;\n\n\n//# sourceURL=webpack:///./src/todo-list-view.ts?");

/***/ }),

/***/ "./src/todo-model.ts":
/*!***************************!*\
  !*** ./src/todo-model.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar todoModel = function (id, title, completed) {\n    if (completed === void 0) { completed = false; }\n    return {\n        id: id,\n        title: title,\n        completed: completed\n    };\n};\nexports[\"default\"] = todoModel;\n\n\n//# sourceURL=webpack:///./src/todo-model.ts?");

/***/ }),

/***/ "./src/todo-view.ts":
/*!**************************!*\
  !*** ./src/todo-view.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar todoView = function (todo) {\n    var render = function () {\n        var id = todo.id, title = todo.title, completed = todo.completed;\n        var title$ = (completed) ?\n            \"<del class=\\\"w-75 text-truncate\\\">\" + title + \"</del>\" :\n            \"<span class=\\\"w-75 text-truncate\\\">\" + title + \"</span>\";\n        return \"<li class=\\\"list-group-item\\\" data-id=\" + id + \">\\n                 <input type=\\\"checkbox\\\" class=\\\"toggleCompleted\\\" \" + (completed ? \"checked\" : \"\") + \"/>\\n                 <button class=\\\"remove text-danger\\\">&times;</button>\\n                 \" + title + \"\\n               </li>\";\n    };\n    return {\n        render: render\n    };\n};\nexports[\"default\"] = todoView;\n\n\n//# sourceURL=webpack:///./src/todo-view.ts?");

/***/ })

/******/ });