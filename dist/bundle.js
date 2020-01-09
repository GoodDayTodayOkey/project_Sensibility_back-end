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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App/App.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App/App.ts":
/*!************************!*\
  !*** ./src/App/App.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar cors = __webpack_require__(/*! cors */ \"cors\");\nvar graphqlHTTP = __webpack_require__(/*! express-graphql */ \"express-graphql\");\nvar schema_1 = __webpack_require__(/*! ../schema */ \"./src/schema/index.ts\");\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nmongoose_1.connect('mongodb://localhost/sensibility', { useUnifiedTopology: true, useNewUrlParser: true });\nmongoose_1.connection.on(\"open\", function () { return console.log(\"Connection to DB!\"); });\nvar app = express();\napp.use(cors());\napp.use('/graphql', graphqlHTTP({ schema: schema_1.schema, graphiql: true }));\napp.listen(8000, function () { console.log('Server listening on port 8000!'); });\n\n\n//# sourceURL=webpack:///./src/App/App.ts?");

/***/ }),

/***/ "./src/models/Comment/Comment.ts":
/*!***************************************!*\
  !*** ./src/models/Comment/Comment.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar CommentSchema = new mongoose_1.Schema({\n    message: String,\n    authorID: String,\n    companyLogo: String,\n    time: Date,\n    isShowed: Boolean,\n});\nvar Comment = mongoose_1.model(\"Comment\", CommentSchema);\nexports.default = Comment;\n\n\n//# sourceURL=webpack:///./src/models/Comment/Comment.ts?");

/***/ }),

/***/ "./src/models/Company/Company.ts":
/*!***************************************!*\
  !*** ./src/models/Company/Company.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar CompanySchema = new mongoose_1.Schema({\n    name: String,\n    address: String,\n    phone: String,\n    stashID: mongoose_1.Schema.Types.Mixed,\n    logo: String,\n});\nvar Company = mongoose_1.model(\"Company\", CompanySchema);\nexports.default = Company;\n\n\n//# sourceURL=webpack:///./src/models/Company/Company.ts?");

/***/ }),

/***/ "./src/models/Sensibility/Sensibility.ts":
/*!***********************************************!*\
  !*** ./src/models/Sensibility/Sensibility.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar SensibilitySchema = new mongoose_1.Schema({\n    availableGoodwill: Number,\n    availableHostility: Number,\n    commonGoodwill: Number,\n    commonHostility: Number,\n    commentsHistoryID: [String],\n});\nvar Sensibility = mongoose_1.model(\"Sensibility\", SensibilitySchema);\nexports.default = Sensibility;\n\n\n//# sourceURL=webpack:///./src/models/Sensibility/Sensibility.ts?");

/***/ }),

/***/ "./src/models/User/User.ts":
/*!*********************************!*\
  !*** ./src/models/User/User.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar UserSchema = new mongoose_1.Schema({\n    id: String,\n    login: String,\n    password: String,\n    name: String,\n    email: String,\n    phone: String,\n    commentsID: [String],\n    availableGoodwill: Number,\n    availableHostility: Number,\n    companyID: String,\n    status: String,\n});\nvar User = mongoose_1.model(\"User\", UserSchema);\nexports.default = User;\n\n\n//# sourceURL=webpack:///./src/models/User/User.ts?");

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Comment_1 = __webpack_require__(/*! ./Comment/Comment */ \"./src/models/Comment/Comment.ts\");\nexports.Comment = Comment_1.default;\nvar Company_1 = __webpack_require__(/*! ./Company/Company */ \"./src/models/Company/Company.ts\");\nexports.Company = Company_1.default;\nvar Sensibility_1 = __webpack_require__(/*! ./Sensibility/Sensibility */ \"./src/models/Sensibility/Sensibility.ts\");\nexports.Sensibility = Sensibility_1.default;\nvar User_1 = __webpack_require__(/*! ./User/User */ \"./src/models/User/User.ts\");\nexports.User = User_1.default;\n\n\n//# sourceURL=webpack:///./src/models/index.ts?");

/***/ }),

/***/ "./src/schema/Comment/Comment.ts":
/*!***************************************!*\
  !*** ./src/schema/Comment/Comment.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/schema/index.ts\");\nvar CommentSchema = (function () {\n    function CommentSchema() {\n        this.name = 'Comment';\n        this.fields = function () { return (commentFields); };\n    }\n    return CommentSchema;\n}());\nvar commentType = new graphql_1.GraphQLObjectType(new CommentSchema());\nexports.commentType = commentType;\nvar commentFields = {\n    commentId: { type: graphql_1.GraphQLID },\n    message: { type: graphql_1.GraphQLString },\n    authorID: {\n        type: graphql_1.GraphQLString,\n        resolve: function (parent, args) {\n            return index_1.User.find({});\n        }\n    },\n    companyLogo: {\n        type: graphql_1.GraphQLString,\n        resolve: function (parent, args) {\n            return index_1.Company.find({});\n        }\n    },\n    time: { type: graphql_1.GraphQLString },\n    isShowed: { type: graphql_1.GraphQLBoolean },\n};\nexports.commentFields = commentFields;\nvar commentQuery = {\n    authComment: {\n        type: commentType,\n        args: { login: { type: graphql_1.GraphQLString }, password: { type: graphql_1.GraphQLString } },\n        resolve: function (parent, args) {\n            return index_1.Comment.findOne(__assign({}, args));\n        }\n    },\n};\nexports.commentQuery = commentQuery;\n\n\n//# sourceURL=webpack:///./src/schema/Comment/Comment.ts?");

/***/ }),

/***/ "./src/schema/Company/Company.ts":
/*!***************************************!*\
  !*** ./src/schema/Company/Company.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/schema/index.ts\");\nvar uuidv1 = __webpack_require__(/*! uuid/v1 */ \"uuid/v1\");\nvar CompanySchema = (function () {\n    function CompanySchema() {\n        this.name = 'Company';\n        this.fields = function () { return (companyFields); };\n    }\n    return CompanySchema;\n}());\nvar companyType = new graphql_1.GraphQLObjectType(new CompanySchema());\nvar companyFields = {\n    id: { type: graphql_1.GraphQLID },\n    name: { type: graphql_1.GraphQLString },\n    address: { type: graphql_1.GraphQLString },\n    phone: { type: graphql_1.GraphQLString },\n    logo: { type: graphql_1.GraphQLString },\n    stashID: {\n        type: new graphql_1.GraphQLList(graphql_1.GraphQLString),\n        resolve: function (parent, args) {\n            return index_1.User.find({});\n        }\n    },\n};\nexports.companyFields = companyFields;\nvar companyMutation = {\n    createCompany: {\n        type: companyType,\n        args: __assign({}, companyFields),\n        resolve: function (parent, args) {\n            var newCompany = new index_1.Company(__assign({ id: uuidv1() }, args));\n            newCompany.save();\n            return { status: \"Company created \" + new Date(Date.now()) };\n        }\n    },\n    updateCompany: {\n        type: companyType,\n        args: {\n            id: { type: graphql_1.GraphQLID },\n            name: { type: graphql_1.GraphQLString },\n            address: { type: graphql_1.GraphQLString },\n            phone: { type: graphql_1.GraphQLString },\n            logo: { type: graphql_1.GraphQLString },\n        },\n        resolve: function (parent, args) {\n            var id = args.id, restArgs = __rest(args, [\"id\"]);\n            index_1.Company.findOneAndUpdate({ id: id }, __assign(__assign({}, restArgs), { status: \"User updated \" + new Date(Date.now()) })).then(function (data) { return data; });\n            return { status: \"Company created \" + new Date(Date.now()) };\n        }\n    },\n    deleteCompany: {\n        type: companyType,\n        args: { id: { type: graphql_1.GraphQLID } },\n        resolve: function (parent, args) {\n            var id = args.id;\n            index_1.Company.findOneAndDelete({ id: id }).then(function (data) { return data; });\n            return { status: \"Company with \" + id + \" deleted\" };\n        }\n    }\n};\nexports.companyMutation = companyMutation;\nvar companyQuery = {\n    findCompany: {\n        type: companyType,\n        args: { id: { type: graphql_1.GraphQLID } },\n        resolve: function (parent, args) {\n            return index_1.Company.findOne(__assign({}, args));\n        }\n    },\n};\nexports.companyQuery = companyQuery;\n\n\n//# sourceURL=webpack:///./src/schema/Company/Company.ts?");

/***/ }),

/***/ "./src/schema/Mutation/Mutation.ts":
/*!*****************************************!*\
  !*** ./src/schema/Mutation/Mutation.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/schema/index.ts\");\nvar Mutation = (function () {\n    function Mutation() {\n        this.name = 'Mutation';\n        this.fields = __assign(__assign({}, index_1.userMutation), index_1.companyMutation);\n    }\n    return Mutation;\n}());\nvar mutation = new graphql_1.GraphQLObjectType(new Mutation());\nexports.default = mutation;\n\n\n//# sourceURL=webpack:///./src/schema/Mutation/Mutation.ts?");

/***/ }),

/***/ "./src/schema/Query/Query.ts":
/*!***********************************!*\
  !*** ./src/schema/Query/Query.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/schema/index.ts\");\nvar Query = (function () {\n    function Query() {\n        this.name = 'Query';\n        this.fields = __assign(__assign(__assign(__assign({}, index_1.userQuery), index_1.companyQuery), index_1.commentQuery), index_1.sensibilityQuery);\n    }\n    return Query;\n}());\nvar query = new graphql_1.GraphQLObjectType(new Query());\nexports.default = query;\n\n\n//# sourceURL=webpack:///./src/schema/Query/Query.ts?");

/***/ }),

/***/ "./src/schema/Sensibility/Sensibility.ts":
/*!***********************************************!*\
  !*** ./src/schema/Sensibility/Sensibility.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/schema/index.ts\");\nvar SensibilitySchema = (function () {\n    function SensibilitySchema() {\n        this.name = 'Sensibility';\n        this.fields = function () { return (sensibilityFields); };\n    }\n    return SensibilitySchema;\n}());\nvar sensibilityType = new graphql_1.GraphQLObjectType(new SensibilitySchema());\nexports.sensibilityType = sensibilityType;\nvar sensibilityFields = {\n    id: { type: graphql_1.GraphQLID },\n    availableGoodwill: {\n        type: graphql_1.GraphQLFloat,\n        resolve: function (parent, args) {\n            return index_1.User.find({});\n        }\n    },\n    availableHostility: {\n        type: graphql_1.GraphQLFloat,\n        resolve: function (parent, args) {\n            return index_1.User.find({});\n        }\n    },\n    commonGoodwill: {\n        type: graphql_1.GraphQLFloat,\n        resolve: function (parent, args) {\n            return index_1.Company.find({});\n        }\n    },\n    commonHostility: {\n        type: graphql_1.GraphQLFloat,\n        resolve: function (parent, args) {\n            return index_1.Company.find({});\n        }\n    },\n    commentsHistoryID: {\n        type: new graphql_1.GraphQLList(index_1.commentType),\n        resolve: function (parent, args) {\n            return index_1.Comment.find({});\n        }\n    },\n};\nexports.sensibilityFields = sensibilityFields;\nvar sensibilityQuery = {\n    findSensibility: {\n        type: sensibilityType,\n        args: { login: { type: graphql_1.GraphQLString }, password: { type: graphql_1.GraphQLString } },\n        resolve: function (parent, args) {\n            return index_1.Sensibility.findOne(__assign({}, args));\n        }\n    },\n};\nexports.sensibilityQuery = sensibilityQuery;\n\n\n//# sourceURL=webpack:///./src/schema/Sensibility/Sensibility.ts?");

/***/ }),

/***/ "./src/schema/User/User.ts":
/*!*********************************!*\
  !*** ./src/schema/User/User.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar index_1 = __webpack_require__(/*! ../index */ \"./src/schema/index.ts\");\nvar uuidv1 = __webpack_require__(/*! uuid/v1 */ \"uuid/v1\");\nvar UserSchema = (function () {\n    function UserSchema() {\n        this.name = 'User';\n        this.fields = function () { return (userFields); };\n    }\n    return UserSchema;\n}());\nvar userType = new graphql_1.GraphQLObjectType(new UserSchema());\nvar userFields = {\n    id: { type: graphql_1.GraphQLID },\n    login: { type: graphql_1.GraphQLString },\n    password: { type: graphql_1.GraphQLString },\n    name: { type: graphql_1.GraphQLString },\n    email: { type: graphql_1.GraphQLString },\n    phone: { type: graphql_1.GraphQLString },\n    status: { type: graphql_1.GraphQLString },\n    commentsID: {\n        type: new graphql_1.GraphQLList(graphql_1.GraphQLString),\n        resolve: function (parent, args) {\n            return index_1.Comment.find({});\n        }\n    },\n    companyID: {\n        type: graphql_1.GraphQLString,\n        resolve: function (parent, args) {\n            return index_1.Company.find({});\n        }\n    },\n    availableGoodwill: { type: graphql_1.GraphQLFloat },\n    availableHostility: { type: graphql_1.GraphQLFloat },\n};\nexports.userFields = userFields;\nvar userMutation = {\n    createUser: {\n        type: userType,\n        args: __assign({}, userFields),\n        resolve: function (parent, args) {\n            var newUser = new index_1.User(__assign(__assign({ id: uuidv1() }, args), { status: \"User created \" + new Date(Date.now()) }));\n            newUser.save();\n            return { status: \"User created \" + new Date(Date.now()) };\n        }\n    },\n    updateUser: {\n        type: userType,\n        args: {\n            id: { type: graphql_1.GraphQLID },\n            login: { type: graphql_1.GraphQLString },\n            password: { type: graphql_1.GraphQLString },\n            name: { type: graphql_1.GraphQLString },\n            email: { type: graphql_1.GraphQLString },\n            phone: { type: graphql_1.GraphQLString },\n        },\n        resolve: function (parent, args) {\n            var id = args.id, restArgs = __rest(args, [\"id\"]);\n            index_1.User.findOneAndUpdate({ id: id }, __assign(__assign({}, restArgs), { status: \"User updated \" + new Date(Date.now()) })).then(function (data) { return data; });\n            return { status: \"User created \" + new Date(Date.now()) };\n        }\n    },\n    deleteUser: {\n        type: userType,\n        args: { id: { type: graphql_1.GraphQLID } },\n        resolve: function (parent, args) {\n            var id = args.id;\n            index_1.User.findOneAndDelete({ id: id }).then(function (data) { return data; });\n            return { status: \"User with \" + id + \" deleted\" };\n        }\n    }\n};\nexports.userMutation = userMutation;\nvar userQuery = {\n    authUser: {\n        type: userType,\n        args: { login: { type: graphql_1.GraphQLString }, password: { type: graphql_1.GraphQLString } },\n        resolve: function (parent, args) {\n            return index_1.User.findOne(__assign({}, args));\n        }\n    },\n};\nexports.userQuery = userQuery;\n\n\n//# sourceURL=webpack:///./src/schema/User/User.ts?");

/***/ }),

/***/ "./src/schema/index.ts":
/*!*****************************!*\
  !*** ./src/schema/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar graphql_1 = __webpack_require__(/*! graphql */ \"graphql\");\nvar User_1 = __webpack_require__(/*! ./User/User */ \"./src/schema/User/User.ts\");\nexports.userQuery = User_1.userQuery;\nexports.userFields = User_1.userFields;\nexports.userMutation = User_1.userMutation;\nvar Company_1 = __webpack_require__(/*! ./Company/Company */ \"./src/schema/Company/Company.ts\");\nexports.companyQuery = Company_1.companyQuery;\nexports.companyFields = Company_1.companyFields;\nexports.companyMutation = Company_1.companyMutation;\nvar Comment_1 = __webpack_require__(/*! ./Comment/Comment */ \"./src/schema/Comment/Comment.ts\");\nexports.commentQuery = Comment_1.commentQuery;\nexports.commentFields = Comment_1.commentFields;\nexports.commentType = Comment_1.commentType;\nvar Sensibility_1 = __webpack_require__(/*! ./Sensibility/Sensibility */ \"./src/schema/Sensibility/Sensibility.ts\");\nexports.sensibilityQuery = Sensibility_1.sensibilityQuery;\nexports.sensibilityFields = Sensibility_1.sensibilityFields;\nexports.sensibilityType = Sensibility_1.sensibilityType;\nvar Query_1 = __webpack_require__(/*! ./Query/Query */ \"./src/schema/Query/Query.ts\");\nvar Mutation_1 = __webpack_require__(/*! ./Mutation/Mutation */ \"./src/schema/Mutation/Mutation.ts\");\nvar models_1 = __webpack_require__(/*! ../models */ \"./src/models/index.ts\");\nexports.User = models_1.User;\nexports.Company = models_1.Company;\nexports.Sensibility = models_1.Sensibility;\nexports.Comment = models_1.Comment;\nvar schema = new graphql_1.GraphQLSchema({ query: Query_1.default, mutation: Mutation_1.default });\nexports.schema = schema;\n\n\n//# sourceURL=webpack:///./src/schema/index.ts?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql\");\n\n//# sourceURL=webpack:///external_%22graphql%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "uuid/v1":
/*!**************************!*\
  !*** external "uuid/v1" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v1\");\n\n//# sourceURL=webpack:///external_%22uuid/v1%22?");

/***/ })

/******/ });