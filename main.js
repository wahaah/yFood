(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_sichuan_sichuan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sichuan/sichuan.component */ "./src/app/components/sichuan/sichuan.component.ts");
/* harmony import */ var _components_shanxi_shanxi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shanxi/shanxi.component */ "./src/app/components/shanxi/shanxi.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_zhejiang_zhejiang_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/zhejiang/zhejiang.component */ "./src/app/components/zhejiang/zhejiang.component.ts");
/* harmony import */ var _components_chongqing_chongqing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chongqing/chongqing.component */ "./src/app/components/chongqing/chongqing.component.ts");
/* harmony import */ var _components_ahoutours_ahoutours_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ahoutours/ahoutours.component */ "./src/app/components/ahoutours/ahoutours.component.ts");










var routes = [
    { path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
        children: [
            { path: '', component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
            { path: 'sichuan', component: _components_sichuan_sichuan_component__WEBPACK_IMPORTED_MODULE_3__["SichuanComponent"] },
            { path: 'shanxi', component: _components_shanxi_shanxi_component__WEBPACK_IMPORTED_MODULE_4__["ShanxiComponent"] },
            { path: 'zhejiang', component: _components_zhejiang_zhejiang_component__WEBPACK_IMPORTED_MODULE_7__["ZhejiangComponent"] },
            { path: 'chongqing', component: _components_chongqing_chongqing_component__WEBPACK_IMPORTED_MODULE_8__["ChongqingComponent"] },
            { path: 'aboutours', component: _components_ahoutours_ahoutours_component__WEBPACK_IMPORTED_MODULE_9__["AhoutoursComponent"] },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-container {\r\n    margin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app-demo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_calrousel_calrousel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/calrousel/calrousel.component */ "./src/app/components/calrousel/calrousel.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/stars/stars.component */ "./src/app/components/stars/stars.component.ts");
/* harmony import */ var _components_sichuan_sichuan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sichuan/sichuan.component */ "./src/app/components/sichuan/sichuan.component.ts");
/* harmony import */ var _components_shanxi_shanxi_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shanxi/shanxi.component */ "./src/app/components/shanxi/shanxi.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_zhejiang_zhejiang_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/zhejiang/zhejiang.component */ "./src/app/components/zhejiang/zhejiang.component.ts");
/* harmony import */ var _components_chongqing_chongqing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/chongqing/chongqing.component */ "./src/app/components/chongqing/chongqing.component.ts");
/* harmony import */ var _components_ahoutours_ahoutours_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ahoutours/ahoutours.component */ "./src/app/components/ahoutours/ahoutours.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _components_calrousel_calrousel_component__WEBPACK_IMPORTED_MODULE_8__["CalrouselComponent"],
                _components_product_product_component__WEBPACK_IMPORTED_MODULE_9__["ProductComponent"],
                _components_stars_stars_component__WEBPACK_IMPORTED_MODULE_10__["StarsComponent"],
                _components_sichuan_sichuan_component__WEBPACK_IMPORTED_MODULE_11__["SichuanComponent"],
                _components_shanxi_shanxi_component__WEBPACK_IMPORTED_MODULE_12__["ShanxiComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
                _components_zhejiang_zhejiang_component__WEBPACK_IMPORTED_MODULE_14__["ZhejiangComponent"],
                _components_chongqing_chongqing_component__WEBPACK_IMPORTED_MODULE_15__["ChongqingComponent"],
                _components_ahoutours_ahoutours_component__WEBPACK_IMPORTED_MODULE_16__["AhoutoursComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/ahoutours/ahoutours.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/ahoutours/ahoutours.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWhvdXRvdXJzL2Fob3V0b3Vycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/ahoutours/ahoutours.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/ahoutours/ahoutours.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ahoutours works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/ahoutours/ahoutours.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/ahoutours/ahoutours.component.ts ***!
  \*************************************************************/
/*! exports provided: AhoutoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhoutoursComponent", function() { return AhoutoursComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AhoutoursComponent = /** @class */ (function () {
    function AhoutoursComponent() {
    }
    AhoutoursComponent.prototype.ngOnInit = function () {
    };
    AhoutoursComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ahoutours',
            template: __webpack_require__(/*! ./ahoutours.component.html */ "./src/app/components/ahoutours/ahoutours.component.html"),
            styles: [__webpack_require__(/*! ./ahoutours.component.css */ "./src/app/components/ahoutours/ahoutours.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AhoutoursComponent);
    return AhoutoursComponent;
}());



/***/ }),

/***/ "./src/app/components/calrousel/calrousel.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/calrousel/calrousel.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .imgSize {\r\n    width: 100%;\r\n    height: 50%;\r\n}*/\r\nimg {\r\n    width: 100%;\r\n    /* height: 50%; */\r\n    height:200px;\r\n} \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYWxyb3VzZWwvY2Fscm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFO0FBQ0Y7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhbHJvdXNlbC9jYWxyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5pbWdTaXplIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn0qL1xyXG5pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBoZWlnaHQ6IDUwJTsgKi9cclxuICAgIGhlaWdodDoyMDBweDtcclxufSAiXX0= */"

/***/ }),

/***/ "./src/app/components/calrousel/calrousel.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/calrousel/calrousel.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--   \n <link rel=\"stylesheet\" href=\"http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n \n <script src=\"https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js\"></script>\n <script src=\"https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js\"></script>\n  \n <script src=\"https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script> -->\n\n\n\n<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n  </ol>\n\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n      <img src=\"./assets/uploads/d1.jpg\" alt=\"...\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"./assets/uploads/d2.jpg\" alt=\"...\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"./assets/uploads/d3.jpg\" alt=\"...\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"./assets/uploads/d4.jpg\" alt=\"...\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"./assets/uploads/d5.jpg\" alt=\"...\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </div>\n    <div class=\"item\">\n      <img src=\"./assets/uploads/d6.jpg\" alt=\"...\">\n      <div class=\"carousel-caption\">\n\n      </div>\n    </div>\n\n\n\n  </div>\n\n  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/calrousel/calrousel.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/calrousel/calrousel.component.ts ***!
  \*************************************************************/
/*! exports provided: CalrouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalrouselComponent", function() { return CalrouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalrouselComponent = /** @class */ (function () {
    function CalrouselComponent() {
    }
    // $('.carousel').carousel();
    CalrouselComponent.prototype.ngOnInit = function () {
        // $('.carousel').carousel();
        // $('.carousel').carousel({
        //   interval: 2000
        // });
    };
    CalrouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calrousel',
            template: __webpack_require__(/*! ./calrousel.component.html */ "./src/app/components/calrousel/calrousel.component.html"),
            styles: [__webpack_require__(/*! ./calrousel.component.css */ "./src/app/components/calrousel/calrousel.component.css")]
        })
        // declare var $: any;
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalrouselComponent);
    return CalrouselComponent;
}());



/***/ }),

/***/ "./src/app/components/chongqing/chongqing.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/chongqing/chongqing.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hvbmdxaW5nL2Nob25ncWluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/chongqing/chongqing.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/chongqing/chongqing.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chongqing works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/chongqing/chongqing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chongqing/chongqing.component.ts ***!
  \*************************************************************/
/*! exports provided: ChongqingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChongqingComponent", function() { return ChongqingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChongqingComponent = /** @class */ (function () {
    function ChongqingComponent() {
    }
    ChongqingComponent.prototype.ngOnInit = function () {
    };
    ChongqingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chongqing',
            template: __webpack_require__(/*! ./chongqing.component.html */ "./src/app/components/chongqing/chongqing.component.html"),
            styles: [__webpack_require__(/*! ./chongqing.component.css */ "./src/app/components/chongqing/chongqing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChongqingComponent);
    return ChongqingComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr>\n  <footer>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p>@copy z_ling</p>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- <link rel=\"stylesheet\" href=\"http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n\n<script src=\"https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js\"></script>\n<script src=\"https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js\"></script>\n \n<script src=\"https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n   -->\n\n\n\n\n\n\n\n<!-- <link rel=\"stylesheet\" href=\"http://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n \n<script src=\"https://cdn.bootcss.com/jquery/3.1.1/jquery.min.js\"></script>\n<script src=\"https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js\"></script>\n \n<script src=\"https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script> -->\n<!--The content below is only a placeholder and can be replaced.-->\n<!-- <app-navbar></app-navbar> -->\n<!-- <a [routerLink]=\"[ '/path', routeParam ]\">name</a> -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <app-search></app-search>\n    </div>\n    <div class=\"col-md-9\">\n      <div class=\"row carousel-container\">\n        <!-- <app-calrousel></app-calrousel>\n      </div>\n      <div class=\"row\"> -->\n          <router-outlet></router-outlet>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse  navbar-fixed-top\">\n  <!--navbar-inverse是bootstrap3.0, 4.0版本换为navbar-dark bg-dark -->\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <!--data-target=\".navbar-ex2-collapse\" 为了能让此处与下边数据关联上  -->\n      <button  class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"navbar-ex1-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <!-- <a href=\"#\" class=\"navbar-brand\">迪丽舍饵丝富德</a> -->\n      <!-- <a [routerLink]=\"[ '/main']\" class=\"navbar-brand\">迪丽舍饵丝富德</a> -->\n      <a  class=\"navbar-brand\"  [routerLink]=\"[ '']\">迪丽舍饵丝富德</a>\n    </div>\n    <div  class=\"collapse navbar-collapse navbar-ex1-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a [routerLink]=\"[ '/shanxi']\"> 陕西</a></li>\n        <li><a [routerLink]=\"[ '/zhejiang']\"> 浙江</a></li>\n        <li><a [routerLink]=\"[ '/sichuan']\">四川</a></li>\n        <li><a [routerLink]=\"[ '/chongqing']\"> 重庆</a></li>\n        <li><a [routerLink]=\"[ '/aboutours']\">关于我们</a> </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n        <!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/product/product.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/product/product.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/product/product.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/product/product.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-calrousel></app-calrousel>\n<div *ngFor=\"let item of this.products\" class=\"col-md-4 col-sm4 col-lg-4\">\n  <div class=\"thumbnail\">\n    <img src=\"./assets/uploads/d6.jpg\" alt=\"\" srcset=\"\">\n \n    <div class=\"caption\">\n      <h4 class=\"pull-right\">{{item.title}}</h4>\n      <h4><a href=\"#\">{{item.price}}</a></h4>\n      <p>vvvv</p>\n    </div>\n  </div>\n  <div>\n    <app-stars [rating]= \"item.rating\"></app-stars>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.products = [
            new Product(1, 'yi', 150.99, 3.5, 'hahah', ['tianping', 'lingshi']),
            new Product(2, 'yi', 28.99, 1.5, 'hahah', ['tianping', 'lingshi']),
            new Product(3, 'yi', 110.99, 4.5, 'hahah', ['tianping', 'lingshi']),
            new Product(4, 'yi', 8.99, 2, 'hahah', ['tianping', 'lingshi']),
            new Product(5, 'yi', 33.99, 1, 'hahah', ['tianping', 'lingshi']),
        ];
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/components/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/components/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());

var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, cate) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.cate = cate;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/search/search.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"searchForm\" role=\"form\">\n  <div class=\"form-group\">\n    <label for=\"productTitle\">美食名称</label>\n    <input type=\"text\" id=\"productTitle\" placeholder=\"美食名称\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"productPrice\">美食价格</label>\n    <input type=\"number\" id=\"productPrice\" placeholder=\"美食价格\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"productCate\">美食类别</label>\n    <select name=\"\" id=\"productCate\" class=\"form-control\">\n      <option value=\"快餐\">快餐</option>\n      <option value=\"外卖\">外卖</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <button type=\"submit\" class=\"btn btn-primary btn-block\">搜索</button>\n  </div>\n\n\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/shanxi/shanxi.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/shanxi/shanxi.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhbnhpL3NoYW54aS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/shanxi/shanxi.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/shanxi/shanxi.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shanxi works!\n</p>\n  <!-- <div *ngFor=\"let item of this.products\" class=\"col-md-4 col-sm4 col-lg-4\"> -->\n      <!--  *ngFor=\"let item of this.products\" -->\n      <div class=\"thumbnail\">\n        <img src=\"./assets/uploads/2.jpg\" alt=\"\" srcset=\"\">\n     \n        <!-- <div class=\"caption\">\n          <h4 class=\"pull-right\">{{item.title}}</h4>\n          <h4><a href=\"#\">{{item.price}}</a></h4>\n          <p>vvvv</p>\n        </div>\n      </div>\n      <div>\n        <app-stars [rating]= \"item.rating\"></app-stars>\n      </div> -->\n    </div>\n    \n  "

/***/ }),

/***/ "./src/app/components/shanxi/shanxi.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/shanxi/shanxi.component.ts ***!
  \*******************************************************/
/*! exports provided: ShanxiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShanxiComponent", function() { return ShanxiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShanxiComponent = /** @class */ (function () {
    function ShanxiComponent() {
    }
    ShanxiComponent.prototype.ngOnInit = function () {
    };
    ShanxiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shanxi',
            template: __webpack_require__(/*! ./shanxi.component.html */ "./src/app/components/shanxi/shanxi.component.html"),
            styles: [__webpack_require__(/*! ./shanxi.component.css */ "./src/app/components/shanxi/shanxi.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShanxiComponent);
    return ShanxiComponent;
}());



/***/ }),

/***/ "./src/app/components/sichuan/sichuan.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sichuan/sichuan.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2ljaHVhbi9zaWNodWFuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/sichuan/sichuan.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sichuan/sichuan.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sichuan works!\n</p>\n<!-- <div *ngFor=\"let item of this.products\" class=\"col-md-4 col-sm4 col-lg-4\"> -->\n<!--  *ngFor=\"let item of this.products\" -->\n<div class=\"thumbnail\">\n  <img src=\"./assets/uploads/1.jpg\" alt=\"\" srcset=\"\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/sichuan/sichuan.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sichuan/sichuan.component.ts ***!
  \*********************************************************/
/*! exports provided: SichuanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SichuanComponent", function() { return SichuanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SichuanComponent = /** @class */ (function () {
    function SichuanComponent() {
    }
    SichuanComponent.prototype.ngOnInit = function () {
    };
    SichuanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sichuan',
            template: __webpack_require__(/*! ./sichuan.component.html */ "./src/app/components/sichuan/sichuan.component.html"),
            styles: [__webpack_require__(/*! ./sichuan.component.css */ "./src/app/components/sichuan/sichuan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SichuanComponent);
    return SichuanComponent;
}());



/***/ }),

/***/ "./src/app/components/stars/stars.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/stars/stars.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnMvc3RhcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/stars/stars.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/stars/stars.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    <span *ngFor=\"let star of stars\" class=\"glyphicon glyphicon-star\"\n    [class.glyphicon-star-empty]=\"star\"\n    ></span>\n    <span>{{rating}}</span>\n</p>\n"

/***/ }),

/***/ "./src/app/components/stars/stars.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/stars/stars.component.ts ***!
  \*****************************************************/
/*! exports provided: StarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsComponent", function() { return StarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.rating = 0;
    }
    StarsComponent.prototype.ngOnInit = function () {
        this.stars = [];
        for (var i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
        // this.stars = [ true, true, true, false, false ]
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StarsComponent.prototype, "rating", void 0);
    StarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stars',
            template: __webpack_require__(/*! ./stars.component.html */ "./src/app/components/stars/stars.component.html"),
            styles: [__webpack_require__(/*! ./stars.component.css */ "./src/app/components/stars/stars.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StarsComponent);
    return StarsComponent;
}());



/***/ }),

/***/ "./src/app/components/zhejiang/zhejiang.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/zhejiang/zhejiang.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvemhlamlhbmcvemhlamlhbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/zhejiang/zhejiang.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/zhejiang/zhejiang.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  zhejiang works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/zhejiang/zhejiang.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/zhejiang/zhejiang.component.ts ***!
  \***********************************************************/
/*! exports provided: ZhejiangComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZhejiangComponent", function() { return ZhejiangComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZhejiangComponent = /** @class */ (function () {
    function ZhejiangComponent() {
    }
    ZhejiangComponent.prototype.ngOnInit = function () {
    };
    ZhejiangComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-zhejiang',
            template: __webpack_require__(/*! ./zhejiang.component.html */ "./src/app/components/zhejiang/zhejiang.component.html"),
            styles: [__webpack_require__(/*! ./zhejiang.component.css */ "./src/app/components/zhejiang/zhejiang.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ZhejiangComponent);
    return ZhejiangComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    // production: false
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular-test-demo\app-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map