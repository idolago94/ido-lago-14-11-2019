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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-toast></app-toast>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'herolo-assignment';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _router_app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/app-routes */ "./src/app/router/app-routes.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_main_search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/search/search.component */ "./src/app/components/main/search/search.component.ts");
/* harmony import */ var _components_main_current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/current-weather/current-weather.component */ "./src/app/components/main/current-weather/current-weather.component.ts");
/* harmony import */ var _components_main_week_weather_week_weather_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/week-weather/week-weather.component */ "./src/app/components/main/week-weather/week-weather.component.ts");
/* harmony import */ var _pipes_full_date_time_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/full-date-time.pipe */ "./src/app/pipes/full-date-time.pipe.ts");
/* harmony import */ var _pipes_temperature_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/temperature.pipe */ "./src/app/pipes/temperature.pipe.ts");
/* harmony import */ var _components_navigation_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navigation/toggle/toggle.component */ "./src/app/components/navigation/toggle/toggle.component.ts");
/* harmony import */ var _components_favorites_single_location_single_location_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/favorites/single-location/single-location.component */ "./src/app/components/favorites/single-location/single-location.component.ts");
/* harmony import */ var _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/toast/toast.component */ "./src/app/components/toast/toast.component.ts");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _components_main_search_result_result_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/main/search/result/result.component */ "./src/app/components/main/search/result/result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _components_main_search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
                _components_main_current_weather_current_weather_component__WEBPACK_IMPORTED_MODULE_10__["CurrentWeatherComponent"],
                _components_main_week_weather_week_weather_component__WEBPACK_IMPORTED_MODULE_11__["WeekWeatherComponent"],
                _pipes_full_date_time_pipe__WEBPACK_IMPORTED_MODULE_12__["FullDateTimePipe"],
                _pipes_temperature_pipe__WEBPACK_IMPORTED_MODULE_13__["TemperaturePipe"],
                _components_navigation_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_14__["ToggleComponent"],
                _components_favorites_single_location_single_location_component__WEBPACK_IMPORTED_MODULE_15__["SingleLocationComponent"],
                _components_toast_toast_component__WEBPACK_IMPORTED_MODULE_16__["ToastComponent"],
                _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_17__["LogoComponent"],
                _components_main_search_result_result_component__WEBPACK_IMPORTED_MODULE_18__["ResultComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_router_app_routes__WEBPACK_IMPORTED_MODULE_3__["appRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/favorites/favorites.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div *ngIf=\"favouriteList.length>0\" class=\"list-box\">\n    <app-single-location (click)=\"locationSelect(location)\" *ngFor=\"let location of favouriteList\" [locationDetails]=\"location\" ></app-single-location>\n  </div>\n  <div *ngIf=\"favouriteList.length==0\" class=\"no-list\">\n    <div class=\"massege\">\n      Your favourite list is empty.\n    </div>\n    <img [src]=\"alertIcon\" class=\"alert\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .box .list-box {\n    width: 90%;\n    background-color: rgba(22, 20, 20, 0.623);\n    display: -webkit-box;\n    display: flex;\n    flex-wrap: wrap;\n    padding: 10px; }\n  .box .list-box app-single-location {\n      padding: 10px;\n      width: calc(100%/3.2);\n      background-color: rgba(46, 42, 42, 0.63);\n      border-radius: 10px;\n      margin-bottom: 10px; }\n  .box .list-box app-single-location:not(:first-child) {\n        margin-left: 10px; }\n  .box .list-box app-single-location:not(:nth-child(3n)) {\n        margin-left: 10px; }\n  .box .no-list {\n    background-color: rgba(46, 42, 42, 0.63);\n    border-radius: 10px;\n    display: -webkit-box;\n    display: flex;\n    justify-content: space-around;\n    padding: 10px;\n    width: 90%; }\n  .box .no-list .massege {\n      color: white;\n      font-size: 1.8rem;\n      margin-top: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcaGVyb2xvLWFzc2lnbm1lbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZhdm9yaXRlc1xcZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRlcy9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxoZXJvbG8tYXNzaWdubWVudC9zcmNcXGFwcFxcaGVscGVyc1xcc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFnQjtFQUNoQixxQkFBYTtFQUFiLGNBQWE7RUFDYix5QkFBdUI7VUFBdkIsd0JBQXVCLEVBNEMxQjtFQS9DRDtJQU1RLFdBQVU7SUFDViwwQ0NMb0M7SURNcEMscUJBQWE7SUFBYixjQUFhO0lBQ2IsZ0JBQWU7SUFDZixjQUFhLEVBaUJoQjtFQTNCTDtNQWFZLGNBQWE7TUFDYixzQkFBcUI7TUFDckIseUNBQXdDO01BQ3hDLG9CQUFtQjtNQUNuQixvQkFBbUIsRUFTdEI7RUExQlQ7UUFvQmdCLGtCQUFpQixFQUNwQjtFQXJCYjtRQXdCZ0Isa0JBQWlCLEVBQ3BCO0VBekJiO0lBOEJRLHlDQUF3QztJQUN4QyxvQkFBbUI7SUFDbkIscUJBQWE7SUFBYixjQUFhO0lBQ2IsOEJBQTZCO0lBQzdCLGNBQWE7SUFDYixXQUFVLEVBV2I7RUE5Q0w7TUFzQ1ksYUFBWTtNQUNaLGtCQUFpQjtNQUNqQixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL2hlbHBlcnMvc3R5bGUuc2Nzcyc7XHJcblxyXG4uYm94IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLmxpc3QtYm94IHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3ZWFodGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICAgICAgYXBwLXNpbmdsZS1sb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUvMy4yKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgNDIsIDQyLCAwLjYzKTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6bm90KDpudGgtY2hpbGQoM24pKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubm8tbGlzdCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NiwgNDIsIDQyLCAwLjYzKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgICAgICAubWFzc2VnZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5hbGVydCB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRuYXZpZ2F0aW9uLWJhY2tncm91bmQ6IHJnYmEoMTYwLCAxNTMsIDE1MywgMC41MjcpO1xyXG5cclxuJGlucHV0LWJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuJHdlYWh0ZXItYmFja2dyb3VuZDogcmdiYSgyMiwgMjAsIDIwLCAwLjYyMyk7XHJcblxyXG4kdGV4dC1jb2xvcjogd2hpdGU7Il19 */"

/***/ }),

/***/ "./src/app/components/favorites/favorites.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/favorites/favorites.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(localStorage, router) {
        this.localStorage = localStorage;
        this.router = router;
        this.alertIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_3__["ALERT"];
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        this.favouriteList = this.localStorage.getFromLocalStorage(this.localStorage.keys.LOCATIONS);
    };
    FavoritesComponent.prototype.locationSelect = function (locationDetails) {
        this.router.navigate(["/main/" + locationDetails.locationKey]);
    };
    FavoritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/components/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.scss */ "./src/app/components/favorites/favorites.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/components/favorites/single-location/single-location.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/favorites/single-location/single-location.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"location\">\n  <div class=\"content-box\">\n    <div class=\"name\">{{locationDetails.name}}</div>\n    <div *ngIf=\"currentWeather\" class=\"weather\">{{currentWeather.temperature | temperature: settings.unit}}</div>\n    <img *ngIf=\"!currentWeather\" [src]=\"loaderIcon\" class=\"loader\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/favorites/single-location/single-location.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/favorites/single-location/single-location.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".location {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .location .content-box {\n    color: white;\n    text-align: center; }\n  .location .content-box .name {\n      font-size: 2rem; }\n  .location .content-box .weather {\n      font-size: 1.5rem; }\n  .location .content-box .loader {\n      height: 27px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvc2luZ2xlLWxvY2F0aW9uL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXGhlcm9sby1hc3NpZ25tZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxmYXZvcml0ZXNcXHNpbmdsZS1sb2NhdGlvblxcc2luZ2xlLWxvY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zhdm9yaXRlcy9zaW5nbGUtbG9jYXRpb24vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcaGVyb2xvLWFzc2lnbm1lbnQvc3JjXFxhcHBcXGhlbHBlcnNcXHN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBYTtFQUFiLGNBQWE7RUFDYix5QkFBdUI7VUFBdkIsd0JBQXVCLEVBa0IxQjtFQXBCRDtJQUtRLGFDRFU7SURFVixtQkFBa0IsRUFhckI7RUFuQkw7TUFTWSxnQkFBZSxFQUNsQjtFQVZUO01BYVksa0JBQWlCLEVBQ3BCO0VBZFQ7TUFpQlksYUFBWSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXZvcml0ZXMvc2luZ2xlLWxvY2F0aW9uL3NpbmdsZS1sb2NhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9hcHAvaGVscGVycy9zdHlsZS5zY3NzJztcclxuXHJcbi5sb2NhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLmNvbnRlbnQtYm94IHtcclxuICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC53ZWF0aGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9hZGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyN3B4OztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkbmF2aWdhdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKDE2MCwgMTUzLCAxNTMsIDAuNTI3KTtcclxuXHJcbiRpbnB1dC1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiR3ZWFodGVyLWJhY2tncm91bmQ6IHJnYmEoMjIsIDIwLCAyMCwgMC42MjMpO1xyXG5cclxuJHRleHQtY29sb3I6IHdoaXRlOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/favorites/single-location/single-location.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/favorites/single-location/single-location.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SingleLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleLocationComponent", function() { return SingleLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var src_app_helpers_weather_convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/weather-convert */ "./src/app/helpers/weather-convert.ts");
/* harmony import */ var src_app_services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SingleLocationComponent = /** @class */ (function () {
    function SingleLocationComponent(weatherService, systemService, toastService) {
        this.weatherService = weatherService;
        this.systemService = systemService;
        this.toastService = toastService;
        this.loaderIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_4__["LOADER"];
    }
    SingleLocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = this.systemService.getSettings();
        this.weatherService.getCurrentWeather(this.locationDetails.locationKey).subscribe(function (response) {
            _this.currentWeather = Object(src_app_helpers_weather_convert__WEBPACK_IMPORTED_MODULE_2__["convertCurrentWeather"])(response[0]);
        }, function (err) {
            _this.toastService.handleError(err);
        });
        this.systemService.settingsChanged.subscribe(function () {
            _this.settings = _this.systemService.getSettings();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SingleLocationComponent.prototype, "locationDetails", void 0);
    SingleLocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-single-location',
            template: __webpack_require__(/*! ./single-location.component.html */ "./src/app/components/favorites/single-location/single-location.component.html"),
            styles: [__webpack_require__(/*! ./single-location.component.scss */ "./src/app/components/favorites/single-location/single-location.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"], src_app_services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], SingleLocationComponent);
    return SingleLocationComponent;
}());



/***/ }),

/***/ "./src/app/components/logo/logo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.mobile]=\"mobile\" class=\"logo-box\">\n  <img [src]=\"weatherIcon\" class=\"icon\">\n  <div class=\"app-name\">Weather App</div>\n</div>"

/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end; }\n  .logo-box .icon {\n    height: 35px; }\n  .logo-box .app-name {\n    font-size: 1rem;\n    font-family: 'Alata', sans-serif; }\n  .mobile .icon {\n  height: 20px; }\n  .mobile .app-name {\n  font-size: .75rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXGhlcm9sby1hc3NpZ25tZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dvXFxsb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWE7RUFBYixjQUFhO0VBQ2IsdUJBQXFCO1VBQXJCLHNCQUFxQixFQVV4QjtFQVpEO0lBS1EsYUFBWSxFQUNmO0VBTkw7SUFTUSxnQkFBZTtJQUNmLGlDQUFnQyxFQUNuQztFQUdMO0VBR1EsYUFBWSxFQUNmO0VBSkw7RUFPUSxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBbGF0YScsIHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tb2JpbGUge1xyXG5cclxuICAgIC5pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcC1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
        this.weatherIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_1__["WEATHER"];
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LogoComponent.prototype, "mobile", void 0);
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/components/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/components/main/current-weather/current-weather.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/main/current-weather/current-weather.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n    <div class=\"weather-box\" *ngIf=\"currentWeather\">\n      <div class=\"title\">\n        <div class=\"title-box\">\n          <div class=\"location-name\">{{locationName}}</div>\n          <div class=\"time\">{{currentWeather.dateTime}}</div>\n        </div>\n      </div>\n      <div class=\"temperature\">{{currentWeather.temperature | temperature: settings.unit}}</div>\n    </div>\n    <img (click)=\"locationSelect()\" *ngIf=\"currentWeather\" [src]=\"starIcon\" class=\"star\">\n    <img *ngIf=\"!currentWeather\" [src]=\"loaderIcon\" class=\"loader\">\n</div>"

/***/ }),

/***/ "./src/app/components/main/current-weather/current-weather.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/main/current-weather/current-weather.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 20px;\n  position: relative; }\n  .box .weather-box {\n    color: white;\n    display: -webkit-box;\n    display: flex;\n    padding: 10px;\n    border-radius: 10px;\n    width: 95%;\n    background-color: rgba(22, 20, 20, 0.623);\n    justify-content: space-around; }\n  .box .weather-box .title {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center; }\n  .box .weather-box .title .title-box .location-name {\n        font-size: 2rem;\n        font-weight: bold; }\n  .box .weather-box .title .title-box .time {\n        margin-left: 20px;\n        font-size: .8rem; }\n  .box .weather-box .temperature {\n      font-size: 5rem;\n      padding: 20px;\n      font-weight: bold;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center; }\n  .box .star {\n    position: absolute;\n    height: 23px;\n    right: 3.5%;\n    top: 7%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL2N1cnJlbnQtd2VhdGhlci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxoZXJvbG8tYXNzaWdubWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpblxcY3VycmVudC13ZWF0aGVyXFxjdXJyZW50LXdlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9jdXJyZW50LXdlYXRoZXIvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcaGVyb2xvLWFzc2lnbm1lbnQvc3JjXFxhcHBcXGhlbHBlcnNcXHN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBYTtFQUFiLGNBQWE7RUFDYix5QkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLGlCQUFnQjtFQUNoQixtQkFBa0IsRUE4Q3JCO0VBbEREO0lBT1ksYUNITTtJRElOLHFCQUFhO0lBQWIsY0FBYTtJQUNiLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsV0FBVTtJQUNWLDBDQ1ZnQztJRFdoQyw4QkFBNkIsRUE2QnBDO0VBMUNMO01BZ0JnQixxQkFBYTtNQUFiLGNBQWE7TUFDYiwwQkFBbUI7Y0FBbkIsb0JBQW1CLEVBZXRCO0VBaENiO1FBc0J3QixnQkFBZTtRQUNmLGtCQUFpQixFQUNwQjtFQXhCckI7UUEyQndCLGtCQUFpQjtRQUNqQixpQkFBZ0IsRUFDbkI7RUE3QnJCO01BbUNnQixnQkFBZTtNQUNmLGNBQWE7TUFDYixrQkFBaUI7TUFDakIscUJBQWE7TUFBYixjQUFhO01BQ2IseUJBQXVCO2NBQXZCLHdCQUF1QjtNQUN2QiwwQkFBbUI7Y0FBbkIsb0JBQW1CLEVBQ3RCO0VBekNiO0lBNkNRLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osWUFBVztJQUNYLFFBQU8sRUFDViIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9jdXJyZW50LXdlYXRoZXIvY3VycmVudC13ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9oZWxwZXJzL3N0eWxlLnNjc3MnO1xyXG5cclxuLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAud2VhdGhlci1ib3gge1xyXG4gICAgICAgICAgICBjb2xvcjogJHRleHQtY29sb3I7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3ZWFodGVyLWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlLWJveCB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5sb2NhdGlvbi1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZW1wZXJhdHVyZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgcmlnaHQ6IDMuNSU7XHJcbiAgICAgICAgdG9wOiA3JTtcclxuICAgIH1cclxufSIsIiRuYXZpZ2F0aW9uLWJhY2tncm91bmQ6IHJnYmEoMTYwLCAxNTMsIDE1MywgMC41MjcpO1xyXG5cclxuJGlucHV0LWJhY2tncm91bmQ6IHdoaXRlO1xyXG5cclxuJHdlYWh0ZXItYmFja2dyb3VuZDogcmdiYSgyMiwgMjAsIDIwLCAwLjYyMyk7XHJcblxyXG4kdGV4dC1jb2xvcjogd2hpdGU7Il19 */"

/***/ }),

/***/ "./src/app/components/main/current-weather/current-weather.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/main/current-weather/current-weather.component.ts ***!
  \******************************************************************************/
/*! exports provided: CurrentWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentWeatherComponent", function() { return CurrentWeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var src_app_helpers_weather_convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/weather-convert */ "./src/app/helpers/weather-convert.ts");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_app_services_system_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/locations.service */ "./src/app/services/locations.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CurrentWeatherComponent = /** @class */ (function () {
    function CurrentWeatherComponent(weatherService, localStorageService, systemService, locationService, toastService) {
        this.weatherService = weatherService;
        this.localStorageService = localStorageService;
        this.systemService = systemService;
        this.locationService = locationService;
        this.toastService = toastService;
        this.starIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_3__["STAR"];
        this.loaderIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_3__["LOADER"];
    }
    CurrentWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = this.systemService.getSettings();
        this.systemService.settingsChanged.subscribe(function () {
            _this.settings = _this.systemService.getSettings();
        });
    };
    CurrentWeatherComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.locationKey) {
            if (this.localStorageService.checkIfInList(this.localStorageService.keys.LOCATIONS, this.locationKey)) {
                this.starIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_3__["YELLOW_STAR"];
            }
            else {
                this.starIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_3__["STAR"];
            }
            this.locationService.getLocationByKey(this.locationKey).subscribe(function (response) {
                _this.locationName = response.LocalizedName;
            }, function (err) {
                _this.toastService.handleError(err);
            });
            this.weatherService.getCurrentWeather(this.locationKey).subscribe(function (response) {
                _this.currentWeather = Object(src_app_helpers_weather_convert__WEBPACK_IMPORTED_MODULE_2__["convertCurrentWeather"])(response[0]);
            }, function (err) {
                _this.toastService.handleError(err);
            });
        }
    };
    CurrentWeatherComponent.prototype.locationSelect = function () {
        var locationDetails = {
            name: this.locationName,
            locationKey: this.locationKey
        };
        if (this.starIcon == src_assets_variables__WEBPACK_IMPORTED_MODULE_3__["STAR"]) {
            this.starIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_3__["YELLOW_STAR"];
            this.localStorageService.saveToLocalStorage(this.localStorageService.keys.LOCATIONS, locationDetails);
        }
        else {
            this.starIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_3__["STAR"];
            this.localStorageService.removeFromLocalStorage(this.localStorageService.keys.LOCATIONS, locationDetails);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CurrentWeatherComponent.prototype, "locationKey", void 0);
    CurrentWeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-weather',
            template: __webpack_require__(/*! ./current-weather.component.html */ "./src/app/components/main/current-weather/current-weather.component.html"),
            styles: [__webpack_require__(/*! ./current-weather.component.scss */ "./src/app/components/main/current-weather/current-weather.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"],
            src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            src_app_services_system_service__WEBPACK_IMPORTED_MODULE_5__["SystemService"],
            src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_6__["LocationsService"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]])
    ], CurrentWeatherComponent);
    return CurrentWeatherComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search></app-search>\r\n\r\n\r\n<app-current-weather [locationKey]=\"currentLocation\"></app-current-weather>\r\n\r\n<app-week-weather [locationKey]=\"currentLocation\"></app-week-weather>"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/locations.service */ "./src/app/services/locations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MainComponent = /** @class */ (function () {
    function MainComponent(locationService, route, toastService) {
        this.locationService = locationService;
        this.route = route;
        this.toastService = toastService;
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.locationKey == 'current') {
                _this.findMe();
            }
            else {
                _this.currentLocation = params.locationKey;
            }
        });
    };
    MainComponent.prototype.findMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var currentPosition = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                _this.locationService.searchGeoLocation(currentPosition)
                    .subscribe(function (response) {
                    _this.currentLocation = response.Key;
                }, function (err) {
                    _this.toastService.handleError(err);
                });
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_1__["LocationsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/main/search/result/result.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/main/search/result/result.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"result\">\n  <img *ngIf=\"isFavourite\" [src]=\"yellowStarIcon\" class=\"yellow-star\">\n  <div class=\"content\">\n    {{details.name}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/main/search/result/result.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/main/search/result/result.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result {\n  padding: 10px;\n  border-bottom: 1px solid gray;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n  .result:hover {\n    background-color: rgba(150, 147, 147, 0.699); }\n  .result .yellow-star {\n    height: 19px;\n    margin-right: 5px; }\n  .result .content {\n    font-size: 1rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlYXJjaC9yZXN1bHQvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcaGVyb2xvLWFzc2lnbm1lbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1haW5cXHNlYXJjaFxccmVzdWx0XFxyZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsOEJBQTZCO0VBQzdCLHFCQUFhO0VBQWIsY0FBYTtFQUNiLDBCQUFtQjtVQUFuQixvQkFBbUIsRUFjdEI7RUFsQkQ7SUFPUSw2Q0FBNEMsRUFDL0M7RUFSTDtJQVdRLGFBQVk7SUFDWixrQkFBaUIsRUFDcEI7RUFiTDtJQWdCUSxnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWFyY2gvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHQge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTAsIDE0NywgMTQ3LCAwLjY5OSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnllbGxvdy1zdGFyIHtcclxuICAgICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/main/search/result/result.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/main/search/result/result.component.ts ***!
  \*******************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = /** @class */ (function () {
    function ResultComponent(localStorageService) {
        this.localStorageService = localStorageService;
        this.yellowStarIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["YELLOW_STAR"];
        this.isFavourite = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.isFavourite = this.localStorageService.checkIfInList(this.localStorageService.keys.LOCATIONS, this.details.locationKey);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResultComponent.prototype, "details", void 0);
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/components/main/search/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/components/main/search/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/components/main/search/search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/main/search/search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\" [class.open-results]=\"allResults\">\n  <div class=\"search-box\">\n    <input  (keyup)=\"search()\" #inputSearch type=\"text\" class=\"input\">\n    <img (click)=\"clearInput()\" [src]=\"inputIcon\" class=\"icon\">\n  </div>\n</div>\n<div *ngIf=\"allResults\" class=\"results-box\">\n  <div class=\"content-box\">\n    <!-- <div (click)=\"resultSelect(result)\" *ngFor=\"let result of allResults\" class=\"result\">\n      <div class=\"result-name\">{{result.name}}</div>\n    </div> -->\n    <app-result [details]=\"result\" (click)=\"resultSelect(result)\" *ngFor=\"let result of allResults\"></app-result>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/main/search/search.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/main/search/search.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  margin-top: 20px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .box .search-box {\n    width: 90%;\n    display: -webkit-box;\n    display: flex; }\n  .box .search-box .input {\n      -webkit-box-flex: 1;\n              flex-grow: 1;\n      background-color: white;\n      border-top-left-radius: 20px;\n      border-bottom-left-radius: 20px;\n      border: none;\n      padding: 10px; }\n  .box .search-box .icon {\n      background-color: white;\n      border-top-right-radius: 20px;\n      border-bottom-right-radius: 20px;\n      height: 40px;\n      padding: 10px;\n      cursor: pointer; }\n  .box.open-results .search-box .input {\n  border-bottom-left-radius: 0; }\n  .box.open-results .search-box .icon {\n  border-bottom-right-radius: 0; }\n  .results-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center; }\n  .results-box .content-box {\n    width: 90%;\n    background-color: white;\n    border-bottom-right-radius: 20px;\n    border-bottom-left-radius: 20px;\n    padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3NlYXJjaC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxoZXJvbG8tYXNzaWdubWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpblxcc2VhcmNoXFxzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWFyY2gvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcaGVyb2xvLWFzc2lnbm1lbnQvc3JjXFxhcHBcXGhlbHBlcnNcXHN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBZ0I7RUFDaEIscUJBQWE7RUFBYixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QixFQXdCMUI7RUEzQkQ7SUFNUSxXQUFVO0lBQ1YscUJBQWE7SUFBYixjQUFhLEVBbUJoQjtFQTFCTDtNQVVZLG9CQUFZO2NBQVosYUFBWTtNQUNaLHdCQ1hZO01EWVosNkJBQTRCO01BQzVCLGdDQUErQjtNQUMvQixhQUFZO01BQ1osY0FBYSxFQUNoQjtFQWhCVDtNQW1CWSx3QkNuQlk7TURvQlosOEJBQTZCO01BQzdCLGlDQUFnQztNQUNoQyxhQUFZO01BQ1osY0FBYTtNQUNiLGdCQUFlLEVBQ2xCO0VBSVQ7RUFHUSw2QkFBNEIsRUFDL0I7RUFKTDtFQU9RLDhCQUE2QixFQUNoQztFQUdMO0VBQ0kscUJBQWE7RUFBYixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QixFQVMxQjtFQVhEO0lBS1EsV0FBVTtJQUNWLHdCQzlDZ0I7SUQrQ2hCLGlDQUFnQztJQUNoQyxnQ0FBK0I7SUFDL0IsY0FBYSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9oZWxwZXJzL3N0eWxlLnNjc3MnO1xyXG5cclxuLmJveCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIC5zZWFyY2gtYm94IHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5pbnB1dCB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQ7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYm94Lm9wZW4tcmVzdWx0cyB7XHJcblxyXG4gICAgLnNlYXJjaC1ib3ggLmlucHV0IHtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYm94IC5pY29uIHtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIH1cclxufVxyXG5cclxuLnJlc3VsdHMtYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAuY29udGVudC1ib3gge1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGlucHV0LWJhY2tncm91bmQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59IiwiJG5hdmlnYXRpb24tYmFja2dyb3VuZDogcmdiYSgxNjAsIDE1MywgMTUzLCAwLjUyNyk7XHJcblxyXG4kaW5wdXQtYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4kd2VhaHRlci1iYWNrZ3JvdW5kOiByZ2JhKDIyLCAyMCwgMjAsIDAuNjIzKTtcclxuXHJcbiR0ZXh0LWNvbG9yOiB3aGl0ZTsiXX0= */"

/***/ }),

/***/ "./src/app/components/main/search/search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/main/search/search.component.ts ***!
  \************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
/* harmony import */ var src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/locations.service */ "./src/app/services/locations.service.ts");
/* harmony import */ var src_app_helpers_location_convert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/location-convert */ "./src/app/helpers/location-convert.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = /** @class */ (function () {
    function SearchComponent(locationService, router, toastService) {
        this.locationService = locationService;
        this.router = router;
        this.toastService = toastService;
        this.inputIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_1__["CLOSE"];
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        this.locationService.searchLocation(this.inputSearch.nativeElement.value).subscribe(function (response) {
            if (response) {
                _this.allResults = [];
                response.map(function (result) {
                    var newData = Object(src_app_helpers_location_convert__WEBPACK_IMPORTED_MODULE_3__["convertDataToClient"])(result);
                    _this.allResults.push(newData);
                });
            }
        }, function (err) {
            _this.toastService.handleError(err);
        });
    };
    SearchComponent.prototype.clearInput = function () {
        this.allResults = null;
        this.inputSearch.nativeElement.value = '';
    };
    SearchComponent.prototype.resultSelect = function (result) {
        this.clearInput();
        this.router.navigate(["/main/" + result.locationKey]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('inputSearch'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "inputSearch", void 0);
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/components/main/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/components/main/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_locations_service__WEBPACK_IMPORTED_MODULE_2__["LocationsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/main/week-weather/week-weather.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/week-weather/week-weather.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\r\n    <div *ngIf=\"weekWeather\" class=\"week-box\">\r\n        <div *ngFor=\"let day of weekWeather\" class=\"day\">\r\n            <div class=\"date\">\r\n                {{day.dateTime | fullDateTime}}\r\n            </div>\r\n            <div class=\"temperature\">\r\n                {{day.temperature | temperature: settings.unit}} - {{day.maxTemperature | temperature: settings.unit}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <img *ngIf=\"!weekWeather\" [src]=\"loaderIcon\" class=\"loader\">\r\n</div>"

/***/ }),

/***/ "./src/app/components/main/week-weather/week-weather.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/week-weather/week-weather.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 20px; }\n  .box .week-box {\n    display: -webkit-box;\n    display: flex;\n    padding: 10px;\n    border-radius: 10px;\n    width: 95%;\n    background-color: rgba(22, 20, 20, 0.623);\n    color: white; }\n  .box .week-box .day {\n      padding: 10px;\n      width: 20%;\n      background-color: rgba(100, 97, 97, 0.61); }\n  .box .week-box .day:not(:first-child) {\n        margin-left: 15px; }\n  .box .week-box .day .date {\n        text-align: center;\n        font-size: 2rem; }\n  .box .week-box .day .temperature {\n        font-size: 1.3rem;\n        text-align: center;\n        margin: 15px; }\n  @media screen and (max-width: 700px) {\n  .box .week-box {\n    display: block; }\n    .box .week-box .day {\n      width: 100%;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n              align-items: center; }\n      .box .week-box .day:not(:first-child) {\n        margin-left: 0;\n        border-top: 1px solid gray; }\n      .box .week-box .day .date {\n        font-size: 2rem; }\n      .box .week-box .day .temperature {\n        margin: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL3dlZWstd2VhdGhlci9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxoZXJvbG8tYXNzaWdubWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbWFpblxcd2Vlay13ZWF0aGVyXFx3ZWVrLXdlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi93ZWVrLXdlYXRoZXIvQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcaGVyb2xvLWFzc2lnbm1lbnQvc3JjXFxhcHBcXGhlbHBlcnNcXHN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBYTtFQUFiLGNBQWE7RUFDYix5QkFBdUI7VUFBdkIsd0JBQXVCO0VBQ3ZCLGlCQUFnQixFQStCbkI7RUFsQ0Q7SUFNUSxxQkFBYTtJQUFiLGNBQWE7SUFDYixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLFdBQVU7SUFDViwwQ0NSb0M7SURTcEMsYUNQVSxFRDZCYjtFQWpDTDtNQWNZLGNBQWE7TUFDYixXQUFVO01BQ1YsMENBQXlDLEVBZ0I1QztFQWhDVDtRQW1CZ0Isa0JBQWlCLEVBQ3BCO0VBcEJiO1FBdUJnQixtQkFBa0I7UUFDbEIsZ0JBQWUsRUFDbEI7RUF6QmI7UUE0QmdCLGtCQUFpQjtRQUNqQixtQkFBa0I7UUFDbEIsYUFBWSxFQUNmO0VBS2I7RUFDSTtJQUdRLGVBQWMsRUFxQmpCO0lBeEJMO01BTVksWUFBVztNQUNYLHFCQUFhO01BQWIsY0FBYTtNQUNiLDBCQUE4QjtjQUE5QiwrQkFBOEI7TUFDOUIsMEJBQW1CO2NBQW5CLG9CQUFtQixFQWN0QjtNQXZCVDtRQVlnQixlQUFjO1FBQ2QsMkJBQTBCLEVBQzdCO01BZGI7UUFpQmdCLGdCQUFlLEVBQ2xCO01BbEJiO1FBcUJnQixhQUFZLEVBQ2YsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi93ZWVrLXdlYXRoZXIvd2Vlay13ZWF0aGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL2FwcC9oZWxwZXJzL3N0eWxlLnNjc3MnO1xyXG5cclxuLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG5cclxuICAgIC53ZWVrLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2VhaHRlci1iYWNrZ3JvdW5kO1xyXG4gICAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcclxuXHJcbiAgICAgICAgLmRheSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAwLCA5NywgOTcsIDAuNjEpO1xyXG5cclxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGVtcGVyYXR1cmUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAuYm94IHtcclxuICAgIFxyXG4gICAgICAgIC53ZWVrLWJveCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5kYXkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC50ZW1wZXJhdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiJG5hdmlnYXRpb24tYmFja2dyb3VuZDogcmdiYSgxNjAsIDE1MywgMTUzLCAwLjUyNyk7XHJcblxyXG4kaW5wdXQtYmFja2dyb3VuZDogd2hpdGU7XHJcblxyXG4kd2VhaHRlci1iYWNrZ3JvdW5kOiByZ2JhKDIyLCAyMCwgMjAsIDAuNjIzKTtcclxuXHJcbiR0ZXh0LWNvbG9yOiB3aGl0ZTsiXX0= */"

/***/ }),

/***/ "./src/app/components/main/week-weather/week-weather.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/main/week-weather/week-weather.component.ts ***!
  \************************************************************************/
/*! exports provided: WeekWeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekWeatherComponent", function() { return WeekWeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var src_app_helpers_weather_convert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/weather-convert */ "./src/app/helpers/weather-convert.ts");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
/* harmony import */ var src_app_services_system_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeekWeatherComponent = /** @class */ (function () {
    function WeekWeatherComponent(weatherService, systemService, toastService) {
        this.weatherService = weatherService;
        this.systemService = systemService;
        this.toastService = toastService;
        this.loaderIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_3__["LOADER"];
    }
    WeekWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = this.systemService.getSettings();
        this.systemService.settingsChanged.subscribe(function () {
            _this.settings = _this.systemService.getSettings();
        });
    };
    WeekWeatherComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.locationKey) {
            this.weatherService.get5DayWeather(this.locationKey).subscribe(function (response) {
                _this.weekWeather = [];
                response.DailyForecasts.map(function (el) {
                    _this.weekWeather.push(Object(src_app_helpers_weather_convert__WEBPACK_IMPORTED_MODULE_2__["convertWeekWeather"])(el));
                });
            }, function (err) {
                _this.toastService.handleError(err);
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], WeekWeatherComponent.prototype, "locationKey", void 0);
    WeekWeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-week-weather',
            template: __webpack_require__(/*! ./week-weather.component.html */ "./src/app/components/main/week-weather/week-weather.component.html"),
            styles: [__webpack_require__(/*! ./week-weather.component.scss */ "./src/app/components/main/week-weather/week-weather.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"], src_app_services_system_service__WEBPACK_IMPORTED_MODULE_4__["SystemService"], src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], WeekWeatherComponent);
    return WeekWeatherComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n  <div class=\"header\">\n    <app-logo></app-logo>\n    <div [routerLink]=\"appRoutes.MAIN\" class=\"btn-box\">\n      <img [src]=\"targetIcon\" class=\"current btn\">\n    </div>\n    <div  class=\"btn-box\">\n      <img (click)=\"settingsClick()\" [src]=\"settingsIcon\" class=\"settings btn\">\n      <div *ngIf=\"openSettings\" class=\"settings-box\">\n        <div class=\"option-box\">\n          <div class=\"label\">unit:</div>\n          <app-toggle></app-toggle>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"tabs-box\">\n    <div class=\"tab-box\"><a [routerLink]=\"appRoutes.MAIN\" class=\"tab\">{{appRoutes.MAIN}}</a></div>\n    <div class=\"tab-box\"><a [routerLink]=\"appRoutes.FAVOURITE\" class=\"tab\">{{appRoutes.FAVOURITE}}</a></div>\n  </div>\n\n  <div class=\"menu-mobile-box\">\n    <img (click)=\"mobileMenuClick()\" *ngIf=\"!mobileMenuOpen\" [src]=\"menuIcon\" class=\"menu-icon\">\n    <div [class.open]=\"mobileMenuOpen\" class=\"menu-content\">\n      <div (click)=\"mobileMenuClick()\" class=\"background-box\"></div>\n      <div class=\"side-menu\">\n        <div class=\"close-box\">\n          <app-logo [mobile]=\"true\"></app-logo>\n          <img (click)=\"mobileMenuClick()\" [src]=\"closeIcon\" class=\"close\">\n        </div>\n      <div class=\"tabs-box\">\n        <div class=\"tab-box\"><a (click)=\"mobileMenuClick()\" [routerLink]=\"appRoutes.MAIN\" class=\"tab\">{{appRoutes.MAIN}}</a></div>\n        <div class=\"tab-box\"><a (click)=\"mobileMenuClick()\" [routerLink]=\"appRoutes.FAVOURITE\" class=\"tab\">{{appRoutes.FAVOURITE}}</a></div>\n      </div>\n      <div class=\"settings-box\">\n        <div class=\"option-box\">\n          <div class=\"label\">unit:</div>\n          <app-toggle></app-toggle>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  display: -webkit-box;\n  display: flex;\n  background-color: rgba(160, 153, 153, 0.527);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px; }\n  .nav .menu-mobile-box {\n    display: none; }\n  .nav .header {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  .nav .header .title {\n      font-size: 2rem;\n      margin-right: 40px; }\n  .nav .header app-logo {\n      margin-right: 40px; }\n  .nav .header .btn-box {\n      width: 34px;\n      margin-right: 15px;\n      background-color: gray;\n      border-radius: 99px;\n      padding: 4px;\n      position: relative; }\n  .nav .header .btn-box .btn {\n        cursor: pointer; }\n  .nav .header .btn-box .settings-box {\n        background-color: gray;\n        position: absolute;\n        padding: 8px;\n        margin-top: 15px;\n        right: -24px;\n        border-radius: 10px;\n        box-shadow: 2px 2px 5px 0px black;\n        width: 150px; }\n  .nav .header .btn-box .settings-box::before {\n          left: 85px;\n          content: '';\n          width: 30%;\n          position: absolute;\n          height: 15px;\n          background-color: gray;\n          top: -7px;\n          -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n                  clip-path: polygon(50% 0%, 0% 100%, 100% 100%); }\n  .nav .header .btn-box .settings-box .option-box {\n          display: -webkit-box;\n          display: flex;\n          justify-content: space-around;\n          -webkit-box-align: center;\n                  align-items: center; }\n  .nav .header .btn-box .settings-box .option-box .label {\n            font-size: 1rem;\n            text-transform: capitalize;\n            font-weight: bold; }\n  .nav .tabs-box {\n    display: -webkit-box;\n    display: flex;\n    position: relative; }\n  .nav .tabs-box .tab-box {\n      margin-right: 30px; }\n  .nav .tabs-box .tab-box .tab {\n        text-decoration: none;\n        font-size: 1.5rem;\n        text-transform: capitalize;\n        color: black; }\n  @media screen and (max-width: 570px) {\n  .btn-box {\n    display: none; }\n  .nav .tabs-box {\n    display: none; }\n  .nav .menu-mobile-box {\n    display: -webkit-box;\n    display: flex; }\n    .nav .menu-mobile-box .menu-icon {\n      height: 30px;\n      margin-right: 10px; }\n    .nav .menu-mobile-box .menu-content {\n      position: absolute;\n      top: 0;\n      right: 0;\n      z-index: 999;\n      -webkit-transition: all 1s;\n      transition: all 1s;\n      visibility: hidden; }\n      .nav .menu-mobile-box .menu-content .side-menu {\n        padding: 10px;\n        background-color: rgba(95, 95, 95, 0.901);\n        width: 140px;\n        -webkit-transition: all 1s;\n        transition: all 1s;\n        -webkit-transform: translateX(145px);\n                transform: translateX(145px);\n        position: absolute;\n        top: 0;\n        right: 0;\n        height: 100vh; }\n      .nav .menu-mobile-box .menu-content .background-box {\n        background-color: black;\n        opacity: 0;\n        -webkit-transition: all 1s;\n        transition: all 1s;\n        position: absolute;\n        top: 0;\n        right: 0;\n        width: 100vw;\n        height: 100vh; }\n      .nav .menu-mobile-box .menu-content.open {\n        visibility: inherit; }\n        .nav .menu-mobile-box .menu-content.open .side-menu {\n          -webkit-transform: translateX(0px);\n                  transform: translateX(0px); }\n        .nav .menu-mobile-box .menu-content.open .background-box {\n          opacity: 0.3; }\n      .nav .menu-mobile-box .menu-content .close-box {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-pack: justify;\n                justify-content: space-between; }\n        .nav .menu-mobile-box .menu-content .close-box .close {\n          height: 15px; }\n      .nav .menu-mobile-box .menu-content .tabs-box {\n        display: block; }\n        .nav .menu-mobile-box .menu-content .tabs-box .tab-box {\n          margin-right: 0;\n          padding: 5px 0;\n          text-align: center; }\n          .nav .menu-mobile-box .menu-content .tabs-box .tab-box:not(:last-child) {\n            border-bottom: 1px solid black; }\n          .nav .menu-mobile-box .menu-content .tabs-box .tab-box .tab {\n            font-size: 1.2rem;\n            font-weight: bold; }\n      .nav .menu-mobile-box .menu-content .settings-box {\n        padding: 5px 0;\n        position: absolute;\n        bottom: 5px; }\n        .nav .menu-mobile-box .menu-content .settings-box .option-box {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-pack: justify;\n                  justify-content: space-between;\n          -webkit-box-align: center;\n                  align-items: center; }\n          .nav .menu-mobile-box .menu-content .settings-box .option-box .label {\n            font-size: 1rem;\n            font-weight: bold;\n            text-transform: capitalize;\n            margin-right: 7px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL0M6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcRnVsbCBTdGFjayBEZXZlbG9wZXJcXGhlcm9sby1hc3NpZ25tZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxGdWxsIFN0YWNrIERldmVsb3BlclxcaGVyb2xvLWFzc2lnbm1lbnQvc3JjXFxhcHBcXGhlbHBlcnNcXHN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBYTtFQUFiLGNBQWE7RUFDYiw2Q0NKOEM7RURLOUMsMEJBQThCO1VBQTlCLCtCQUE4QjtFQUM5QiwwQkFBbUI7VUFBbkIsb0JBQW1CO0VBQ25CLGNBQWEsRUFxRmhCO0VBMUZEO0lBUVEsY0FBYSxFQUNoQjtFQVRMO0lBWVEscUJBQWE7SUFBYixjQUFhO0lBQ2IsMEJBQW1CO1lBQW5CLG9CQUFtQixFQTBEdEI7RUF2RUw7TUFnQlksZ0JBQWU7TUFDZixtQkFBa0IsRUFDckI7RUFsQlQ7TUFxQlksbUJBQWtCLEVBQ3JCO0VBdEJUO01BeUJZLFlBQVc7TUFDWCxtQkFBa0I7TUFDbEIsdUJBQXNCO01BQ3RCLG9CQUFtQjtNQUNuQixhQUFZO01BQ1osbUJBQWtCLEVBd0NyQjtFQXRFVDtRQWtDZ0IsZ0JBQWUsRUFDbEI7RUFuQ2I7UUFzQ2dCLHVCQUFzQjtRQUN0QixtQkFBa0I7UUFDbEIsYUFBWTtRQUNaLGlCQUFnQjtRQUNoQixhQUFZO1FBQ1osb0JBQW1CO1FBQ25CLGtDQUFpQztRQUNqQyxhQUFZLEVBd0JmO0VBckViO1VBZ0RvQixXQUFVO1VBQ1YsWUFBVztVQUNYLFdBQVU7VUFDVixtQkFBa0I7VUFDbEIsYUFBWTtVQUNaLHVCQUFzQjtVQUN0QixVQUFTO1VBQ1QsdURBQThDO2tCQUE5QywrQ0FBOEMsRUFDakQ7RUF4RGpCO1VBMkRvQixxQkFBYTtVQUFiLGNBQWE7VUFDYiw4QkFBNkI7VUFDN0IsMEJBQW1CO2tCQUFuQixvQkFBbUIsRUFPdEI7RUFwRWpCO1lBZ0V3QixnQkFBZTtZQUNmLDJCQUEwQjtZQUMxQixrQkFBaUIsRUFDcEI7RUFuRXJCO0lBMEVRLHFCQUFhO0lBQWIsY0FBYTtJQUNiLG1CQUFrQixFQWNyQjtFQXpGTDtNQThFWSxtQkFBa0IsRUFTckI7RUF2RlQ7UUFpRmdCLHNCQUFxQjtRQUNyQixrQkFBaUI7UUFFakIsMkJBQTBCO1FBQzFCLGFBQVksRUFDZjtFQU1iO0VBQ0k7SUFDSSxjQUFhLEVBQ2hCO0VBRUQ7SUFDSSxjQUFhLEVBQ2hCO0VBRUQ7SUFDSSxxQkFBYTtJQUFiLGNBQWEsRUFrR2hCO0lBbkdEO01BSVEsYUFBWTtNQUNaLG1CQUFrQixFQUNyQjtJQU5MO01BU1EsbUJBQWtCO01BQ2xCLE9BQU07TUFDTixTQUFRO01BQ1IsYUFBWTtNQUNaLDJCQUFrQjtNQUFsQixtQkFBa0I7TUFDbEIsbUJBQWtCLEVBb0ZyQjtNQWxHTDtRQWtCWSxjQUFhO1FBQ2IsMENBQXlDO1FBQ3pDLGFBQVk7UUFDWiwyQkFBa0I7UUFBbEIsbUJBQWtCO1FBQ2xCLHFDQUE0QjtnQkFBNUIsNkJBQTRCO1FBQzVCLG1CQUFrQjtRQUNsQixPQUFNO1FBQ04sU0FBUTtRQUNSLGNBQWEsRUFDaEI7TUEzQlQ7UUE4Qlksd0JBQXVCO1FBQ3ZCLFdBQVU7UUFDViwyQkFBa0I7UUFBbEIsbUJBQWtCO1FBQ2xCLG1CQUFrQjtRQUNsQixPQUFNO1FBQ04sU0FBUTtRQUNSLGFBQVk7UUFDWixjQUFhLEVBQ2hCO01BdENUO1FBeUNZLG9CQUFtQixFQVN0QjtRQWxEVDtVQTRDZ0IsbUNBQTBCO2tCQUExQiwyQkFBMEIsRUFDN0I7UUE3Q2I7VUFnRGdCLGFBQVksRUFDZjtNQWpEYjtRQXFEWSxxQkFBYTtRQUFiLGNBQWE7UUFDYiwwQkFBOEI7Z0JBQTlCLCtCQUE4QixFQUtqQztRQTNEVDtVQXlEZ0IsYUFBWSxFQUNmO01BMURiO1FBOERZLGVBQWMsRUFnQmpCO1FBOUVUO1VBaUVnQixnQkFBZTtVQUNmLGVBQWM7VUFDZCxtQkFBa0IsRUFVckI7VUE3RWI7WUFzRW9CLCtCQUE4QixFQUNqQztVQXZFakI7WUEwRW9CLGtCQUFpQjtZQUNqQixrQkFBaUIsRUFDcEI7TUE1RWpCO1FBaUZZLGVBQWM7UUFDZCxtQkFBa0I7UUFDbEIsWUFBVyxFQWNkO1FBakdUO1VBc0ZnQixxQkFBYTtVQUFiLGNBQWE7VUFDYiwwQkFBOEI7a0JBQTlCLCtCQUE4QjtVQUM5QiwwQkFBbUI7a0JBQW5CLG9CQUFtQixFQVF0QjtVQWhHYjtZQTJGb0IsZ0JBQWU7WUFDZixrQkFBaUI7WUFDakIsMkJBQTBCO1lBQzFCLGtCQUFpQixFQUNwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvYXBwL2hlbHBlcnMvc3R5bGUuc2Nzcyc7XHJcblxyXG4ubmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2aWdhdGlvbi1iYWNrZ3JvdW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICAgIC5tZW51LW1vYmlsZS1ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFwcC1sb2dvIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuYnRuLWJveCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2V0dGluZ3MtYm94IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0yNHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDBweCBibGFjaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDg1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDAlIDEwMCUsIDEwMCUgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm9wdGlvbi1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50YWJzLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnRhYi1ib3gge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICAudGFiIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTcwcHgpIHtcclxuICAgIC5idG4tYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYgLnRhYnMtYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYgLm1lbnUtbW9iaWxlLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgLm1lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUtY29udGVudCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcblxyXG4gICAgICAgICAgICAuc2lkZS1tZW51IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk1LCA5NSwgOTUsIDAuOTAxKTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNDVweCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5iYWNrZ3JvdW5kLWJveCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYub3BlbiB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBpbmhlcml0O1xyXG5cclxuICAgICAgICAgICAgICAgIC5zaWRlLW1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5iYWNrZ3JvdW5kLWJveCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2xvc2UtYm94IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50YWJzLWJveCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLnRhYi1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC50YWIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2V0dGluZ3MtYm94IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLm9wdGlvbi1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkbmF2aWdhdGlvbi1iYWNrZ3JvdW5kOiByZ2JhKDE2MCwgMTUzLCAxNTMsIDAuNTI3KTtcclxuXHJcbiRpbnB1dC1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiR3ZWFodGVyLWJhY2tncm91bmQ6IHJnYmEoMjIsIDIwLCAyMCwgMC42MjMpO1xyXG5cclxuJHRleHQtY29sb3I6IHdoaXRlOyJdfQ== */"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_router_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/router/routes */ "./src/app/router/routes.ts");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
        this.appRoutes = src_app_router_routes__WEBPACK_IMPORTED_MODULE_1__;
        this.targetIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["TARGET"];
        this.settingsIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["SETTINGS"];
        this.menuIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["MENU"];
        this.closeIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["CLOSE"];
        this.openSettings = false;
        this.mobileMenuOpen = false;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.settingsClick = function () {
        this.openSettings = !this.openSettings;
    };
    NavigationComponent.prototype.mobileMenuClick = function () {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/toggle/toggle.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/navigation/toggle/toggle.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"fahrenheit unit\">°F</div>\n  <div class=\"toggle-box\">\n    <input [checked]=\"settings.unit == unitOptions.CELSIUS\" (click)=\"unitClick()\" type=\"checkbox\" id=\"toggle\" class=\"checkbox\" />\n    <label for=\"toggle\" class=\"switch\"></label> \n  </div>\n  <div class=\"celsius unit\">°C</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/navigation/toggle/toggle.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/navigation/toggle/toggle.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".switch {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  background-color: #eee;\n  border-radius: 20px;\n  cursor: pointer; }\n  .switch::after {\n    content: '';\n    position: absolute;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background-color: white;\n    top: 1px;\n    left: 1px;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .checkbox:checked + .switch::after {\n  left: 20px; }\n  .checkbox:checked + .switch {\n  background-color: #7983ff; }\n  .checkbox {\n  display: none; }\n  .box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n  .box .unit {\n    font-size: 1rem;\n    font-weight: bold; }\n  .box .toggle-box {\n    margin: 0 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZpZ2F0aW9uL3RvZ2dsZS9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxoZXJvbG8tYXNzaWdubWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcdG9nZ2xlXFx0b2dnbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQixnQkFBZSxFQWFsQjtFQXBCRDtJQVVRLFlBQVc7SUFDWCxtQkFBa0I7SUFDbEIsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsd0JBQXVCO0lBQ3ZCLFNBQVE7SUFDUixVQUFTO0lBQ1QsNkJBQW9CO0lBQXBCLHFCQUFvQixFQUNuQjtFQUdUO0VBQ0ksV0FBVyxFQUNkO0VBQ0Q7RUFDSSwwQkFBeUIsRUFDNUI7RUFFRDtFQUNHLGNBQWEsRUFDZjtFQUVEO0VBQ0kscUJBQWE7RUFBYixjQUFhO0VBQ2IsMEJBQW1CO1VBQW5CLG9CQUFtQixFQVV0QjtFQVpEO0lBS1EsZ0JBQWU7SUFDZixrQkFBaUIsRUFDcEI7RUFQTDtJQVVRLGNBQWEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24vdG9nZ2xlL3RvZ2dsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2ggeyBcclxuICAgIHBvc2l0aW9uIDogcmVsYXRpdmUgO1xyXG4gICAgZGlzcGxheSA6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoIDogNDBweDtcclxuICAgIGhlaWdodCA6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuLmNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoOjphZnRlciB7XHJcbiAgICBsZWZ0IDogMjBweDsgXHJcbn1cclxuLmNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTgzZmY7XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLnVuaXQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAudG9nZ2xlLWJveCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/navigation/toggle/toggle.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/navigation/toggle/toggle.component.ts ***!
  \******************************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var src_app_helpers_system_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/helpers/system-variables */ "./src/app/helpers/system-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToggleComponent = /** @class */ (function () {
    function ToggleComponent(systemService) {
        this.systemService = systemService;
        this.unitOptions = src_app_helpers_system_variables__WEBPACK_IMPORTED_MODULE_2__["units"];
    }
    ToggleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settings = this.systemService.getSettings();
        this.systemService.settingsChanged.subscribe(function () {
            _this.settings = _this.systemService.getSettings();
        });
    };
    ToggleComponent.prototype.unitClick = function () {
        this.systemService.changeUnit();
    };
    ToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toggle',
            template: __webpack_require__(/*! ./toggle.component.html */ "./src/app/components/navigation/toggle/toggle.component.html"),
            styles: [__webpack_require__(/*! ./toggle.component.scss */ "./src/app/components/navigation/toggle/toggle.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_system_service__WEBPACK_IMPORTED_MODULE_1__["SystemService"]])
    ], ToggleComponent);
    return ToggleComponent;
}());



/***/ }),

/***/ "./src/app/components/toast/toast.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/toast/toast.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"toastShow\" class=\"toast-box\">\n  <div class=\"toast\">\n    <div class=\"content\">\n      {{toastContent}}\n    </div>\n    <img [src]=\"alertIcon\" class=\"alert\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/toast/toast.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/toast/toast.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toast-box {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 20px; }\n  .toast-box .toast {\n    width: 36%;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    background-color: #f57d0d;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding: 10px;\n    -webkit-box-align: center;\n            align-items: center;\n    border-radius: 5px;\n    box-shadow: 2px 2px 5px -1px black;\n    position: relative;\n    z-index: 999; }\n  .toast-box .toast::before {\n      content: '';\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      right: 0;\n      -webkit-animation: showAlert 1s;\n              animation: showAlert 1s; }\n  .toast-box .toast .content {\n      color: white;\n      font-size: 0.9rem;\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\n  .toast-box .toast .alert {\n      width: 10%; }\n  @-webkit-keyframes showAlert {\n  0% {\n    background-color: rgba(236, 231, 231, 0.445); }\n  80% {\n    -webkit-transform: scale(2);\n            transform: scale(2); }\n  100% {\n    background-color: transparent; } }\n  @keyframes showAlert {\n  0% {\n    background-color: rgba(236, 231, 231, 0.445); }\n  80% {\n    -webkit-transform: scale(2);\n            transform: scale(2); }\n  100% {\n    background-color: transparent; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2FzdC9DOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXEZ1bGwgU3RhY2sgRGV2ZWxvcGVyXFxoZXJvbG8tYXNzaWdubWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcdG9hc3RcXHRvYXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixZQUFXO0VBQ1gscUJBQWE7RUFBYixjQUFhO0VBQ2IseUJBQXVCO1VBQXZCLHdCQUF1QjtFQUN2QixjQUFhLEVBbUNoQjtFQXpDRDtJQVNRLFdBQVU7SUFDViw0QkFBbUI7SUFBbkIseUJBQW1CO0lBQW5CLG9CQUFtQjtJQUNuQiwwQkFBbUM7SUFDbkMscUJBQWE7SUFBYixjQUFhO0lBQ2IsMEJBQThCO1lBQTlCLCtCQUE4QjtJQUM5QixjQUFhO0lBQ2IsMEJBQW1CO1lBQW5CLG9CQUFtQjtJQUNuQixtQkFBa0I7SUFDbEIsbUNBQWtDO0lBQ2xDLG1CQUFrQjtJQUNsQixhQUFZLEVBcUJmO0VBeENMO01Bc0JZLFlBQVc7TUFDWCxZQUFXO01BQ1gsYUFBWTtNQUNaLG1CQUFrQjtNQUNsQixPQUFNO01BQ04sU0FBUTtNQUNSLGdDQUF1QjtjQUF2Qix3QkFBdUIsRUFDMUI7RUE3QlQ7TUFnQ1ksYUFBWTtNQUNaLGtCQUFpQjtNQUNqQixvQkFBWTtjQUFaLGFBQVksRUFDZjtFQW5DVDtNQXNDWSxXQUFVLEVBQ2I7RUFJVDtFQUNJO0lBQ0ksNkNBQTRDLEVBQUE7RUFHaEQ7SUFDSSw0QkFBbUI7WUFBbkIsb0JBQW1CLEVBQUE7RUFHdkI7SUFDSSw4QkFBNkIsRUFBQSxFQUFBO0VBVnJDO0VBQ0k7SUFDSSw2Q0FBNEMsRUFBQTtFQUdoRDtJQUNJLDRCQUFtQjtZQUFuQixvQkFBbUIsRUFBQTtFQUd2QjtJQUNJLDhCQUE2QixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvYXN0L3RvYXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvYXN0LWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgLnRvYXN0IHtcclxuICAgICAgICB3aWR0aDogMzYlO1xyXG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTI1LCAxMyk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAtMXB4IGJsYWNrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2hvd0FsZXJ0IDFzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWxlcnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzaG93QWxlcnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyMzEsIDIzMSwgMC40NDUpO1xyXG4gICAgfVxyXG5cclxuICAgIDgwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/toast/toast.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/toast/toast.component.ts ***!
  \*****************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var src_assets_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/variables */ "./src/assets/variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastComponent = /** @class */ (function () {
    function ToastComponent(toastService) {
        this.toastService = toastService;
        this.alertIcon = src_assets_variables__WEBPACK_IMPORTED_MODULE_2__["ALERT"];
        this.toastShow = false;
        this.toastContent = '';
    }
    ToastComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.toastService.showToast.subscribe(function (msg) {
            _this.toastContent = msg;
            _this.toastShow = true;
            // setTimeout(() => {
            //   this.toastShow = false;
            // }, 5000);
        });
    };
    ToastComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toast',
            template: __webpack_require__(/*! ./toast.component.html */ "./src/app/components/toast/toast.component.html"),
            styles: [__webpack_require__(/*! ./toast.component.scss */ "./src/app/components/toast/toast.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_1__["ToastService"]])
    ], ToastComponent);
    return ToastComponent;
}());



/***/ }),

/***/ "./src/app/helpers/location-convert.ts":
/*!*********************************************!*\
  !*** ./src/app/helpers/location-convert.ts ***!
  \*********************************************/
/*! exports provided: convertDataToClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertDataToClient", function() { return convertDataToClient; });
var convertDataToClient = function (data) {
    return {
        name: data.LocalizedName,
        locationKey: data.Key
    };
};


/***/ }),

/***/ "./src/app/helpers/system-variables.ts":
/*!*********************************************!*\
  !*** ./src/app/helpers/system-variables.ts ***!
  \*********************************************/
/*! exports provided: units, themes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "units", function() { return units; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themes", function() { return themes; });
var units = {
    FAHRENHEIT: 'fahrenheit',
    CELSIUS: 'celsius'
};
var themes = {
    DARK: 'dark',
    LIGHT: 'light'
};


/***/ }),

/***/ "./src/app/helpers/weather-convert.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/weather-convert.ts ***!
  \********************************************/
/*! exports provided: convertCurrentWeather, convertWeekWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertCurrentWeather", function() { return convertCurrentWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertWeekWeather", function() { return convertWeekWeather; });
var convertCurrentWeather = function (data) {
    return {
        temperature: data.Temperature.Value,
        dateTime: new Date(data.DateTime)
    };
};
var convertWeekWeather = function (data) {
    return {
        temperature: data.Temperature.Minimum.Value,
        maxTemperature: data.Temperature.Maximum.Value,
        dateTime: new Date(data.Date)
    };
};


/***/ }),

/***/ "./src/app/pipes/full-date-time.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/full-date-time.pipe.ts ***!
  \**********************************************/
/*! exports provided: FullDateTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullDateTimePipe", function() { return FullDateTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullDateTimePipe = /** @class */ (function () {
    function FullDateTimePipe() {
    }
    FullDateTimePipe.prototype.transform = function (value, args) {
        var day = value.getDate();
        var month = value.getMonth() + 1;
        var dayName = '';
        switch (value.getDay()) {
            case 0: dayName = 'Sun';
            case 1: dayName = 'Mon';
            case 2: dayName = 'Tue';
            case 3: dayName = 'Wed';
            case 4: dayName = 'Thu';
            case 5: dayName = 'Fri';
            case 6: dayName = 'Sat';
        }
        return day + "/" + month + "  " + dayName;
    };
    FullDateTimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'fullDateTime'
        })
    ], FullDateTimePipe);
    return FullDateTimePipe;
}());



/***/ }),

/***/ "./src/app/pipes/temperature.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/temperature.pipe.ts ***!
  \*******************************************/
/*! exports provided: TemperaturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperaturePipe", function() { return TemperaturePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_helpers_system_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/system-variables */ "./src/app/helpers/system-variables.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TemperaturePipe = /** @class */ (function () {
    function TemperaturePipe() {
    }
    TemperaturePipe.prototype.transform = function (value, args) {
        if (args == src_app_helpers_system_variables__WEBPACK_IMPORTED_MODULE_1__["units"].CELSIUS) {
            var celsiusValue = (value - 32) * 5 / 9;
            celsiusValue = Math.round(celsiusValue * 10) / 10;
            return celsiusValue + "\u00B0C";
        }
        return value + "\u00B0F";
    };
    TemperaturePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'temperature'
        })
    ], TemperaturePipe);
    return TemperaturePipe;
}());



/***/ }),

/***/ "./src/app/router/app-routes.ts":
/*!**************************************!*\
  !*** ./src/app/router/app-routes.ts ***!
  \**************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/app/router/routes.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/favorites/favorites.component */ "./src/app/components/favorites/favorites.component.ts");



var appRoutes = [
    { path: '', redirectTo: "/" + _routes__WEBPACK_IMPORTED_MODULE_0__["MAIN"] + "/current", pathMatch: 'full' },
    { path: "" + _routes__WEBPACK_IMPORTED_MODULE_0__["MAIN"], redirectTo: "/" + _routes__WEBPACK_IMPORTED_MODULE_0__["MAIN"] + "/current", pathMatch: 'full' },
    { path: _routes__WEBPACK_IMPORTED_MODULE_0__["MAIN"] + "/:locationKey", component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] },
    { path: _routes__WEBPACK_IMPORTED_MODULE_0__["FAVOURITE"], component: _components_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_2__["FavoritesComponent"] }
];


/***/ }),

/***/ "./src/app/router/routes.ts":
/*!**********************************!*\
  !*** ./src/app/router/routes.ts ***!
  \**********************************/
/*! exports provided: MAIN, FAVOURITE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN", function() { return MAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAVOURITE", function() { return FAVOURITE; });
var MAIN = 'main';
var FAVOURITE = 'favourite';


/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        this.listChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keys = {
            LOCATIONS: 'locations'
        };
    }
    LocalStorageService.prototype.saveToLocalStorage = function (key, value) {
        var newList = this.getFromLocalStorage(key);
        newList.push(value);
        localStorage.setItem(key, JSON.stringify(newList));
        this.listChanged.next();
    };
    LocalStorageService.prototype.removeFromLocalStorage = function (key, value) {
        var newList = this.getFromLocalStorage(key);
        newList = newList.filter(function (el) { return el.locationKey != value.locationKey; });
        localStorage.setItem(key, JSON.stringify(newList));
        this.listChanged.next();
    };
    LocalStorageService.prototype.getFromLocalStorage = function (key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    };
    LocalStorageService.prototype.checkIfInList = function (key, value) {
        var list = this.getFromLocalStorage(key);
        var found = list.findIndex(function (el) { return el.locationKey === value; });
        if (found != -1) {
            return true;
        }
        return false;
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/services/locations.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/locations.service.ts ***!
  \***********************************************/
/*! exports provided: LocationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationsService", function() { return LocationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocationsService = /** @class */ (function () {
    function LocationsService(http) {
        this.http = http;
        this.url = 'http://dataservice.accuweather.com/locations/v1';
        this.API_KEY = 'oM2dep6TrQA07ALL4kxnFdBxdmj10zcy';
    }
    LocationsService.prototype.searchLocation = function (searchWord) {
        return this.http.get(this.url + "/cities/autocomplete?apikey=" + this.API_KEY + "&q=" + searchWord);
    };
    LocationsService.prototype.searchGeoLocation = function (position) {
        return this.http.get(this.url + "/cities/geoposition/search?apikey=" + this.API_KEY + "&q=" + position.lat + "," + position.lng);
    };
    LocationsService.prototype.getLocationByKey = function (key) {
        return this.http.get(this.url + "/" + key + "?apikey=" + this.API_KEY);
    };
    LocationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LocationsService);
    return LocationsService;
}());



/***/ }),

/***/ "./src/app/services/system.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/system.service.ts ***!
  \********************************************/
/*! exports provided: SystemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemService", function() { return SystemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_helpers_system_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/helpers/system-variables */ "./src/app/helpers/system-variables.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SystemService = /** @class */ (function () {
    function SystemService() {
        this.settings = {
            unit: src_app_helpers_system_variables__WEBPACK_IMPORTED_MODULE_1__["units"].CELSIUS,
            theme: src_app_helpers_system_variables__WEBPACK_IMPORTED_MODULE_1__["themes"].LIGHT
        };
        this.settingsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SystemService.prototype.getSettings = function () {
        return Object.assign(this.settings);
    };
    SystemService.prototype.changeUnit = function () {
        if (this.settings.unit == src_app_helpers_system_variables__WEBPACK_IMPORTED_MODULE_1__["units"].FAHRENHEIT) {
            this.settings.unit = src_app_helpers_system_variables__WEBPACK_IMPORTED_MODULE_1__["units"].CELSIUS;
        }
        else {
            this.settings.unit = src_app_helpers_system_variables__WEBPACK_IMPORTED_MODULE_1__["units"].FAHRENHEIT;
        }
        this.settingsChanged.next();
    };
    SystemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SystemService);
    return SystemService;
}());



/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = /** @class */ (function () {
    function ToastService() {
        this.showToast = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ToastService.prototype.handleError = function (error) {
        if (error.status == 0 ||
            error.status == 400 ||
            error.status == 401 ||
            error.status == 403 ||
            error.status == 404 ||
            error.status == 500) {
            this.showToast.next('Connection Error...');
        }
        else
            this.showToast.next(error.message);
    };
    ToastService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.weatherUrl = 'http://dataservice.accuweather.com/forecasts/v1';
        this.API_KEY = 'oM2dep6TrQA07ALL4kxnFdBxdmj10zcy';
    }
    WeatherService.prototype.getCurrentWeather = function (locationKey) {
        return this.http.get(this.weatherUrl + "/hourly/1hour/" + locationKey + "?apikey=" + this.API_KEY);
    };
    WeatherService.prototype.get5DayWeather = function (locationKey) {
        return this.http.get(this.weatherUrl + "/daily/5day/" + locationKey + "?apikey=" + this.API_KEY);
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/assets/variables.ts":
/*!*********************************!*\
  !*** ./src/assets/variables.ts ***!
  \*********************************/
/*! exports provided: TARGET, LOADER, STAR, YELLOW_STAR, CLOSE, SETTINGS, MENU, ALERT, WEATHER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TARGET", function() { return TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADER", function() { return LOADER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAR", function() { return STAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YELLOW_STAR", function() { return YELLOW_STAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE", function() { return CLOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT", function() { return ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEATHER", function() { return WEATHER; });
var TARGET = 'assets/target.svg';
var LOADER = 'assets/loader.svg';
var STAR = 'assets/star.svg';
var YELLOW_STAR = 'assets/yellow-star.svg';
var CLOSE = 'assets/close.svg';
var SETTINGS = 'assets/settings.svg';
var MENU = 'assets/menu.svg';
var ALERT = 'assets/alert.svg';
var WEATHER = 'assets/weather.svg';


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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\User\Desktop\Full Stack Developer\herolo-assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map