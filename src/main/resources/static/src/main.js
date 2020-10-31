(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_core/models/Pager.ts":
/*!***************************************!*\
  !*** ./src/app/_core/models/Pager.ts ***!
  \***************************************/
/*! exports provided: Pager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pager", function() { return Pager; });
class Pager {
    constructor() {
        this.totalNumberOfRows = 0;
        this.currentPage = 1;
        this.totalPages = 1;
    }
}


/***/ }),

/***/ "./src/app/_ui/loader/loader.component.ts":
/*!************************************************!*\
  !*** ./src/app/_ui/loader/loader.component.ts ***!
  \************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["loader"]], decls: 1, vars: 0, consts: [[1, "spinner"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".spinner[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  height:60px;\r\n  width:60px;\r\n  margin:0px auto;\r\n  animation: rotation .6s infinite linear;\r\n  border-left:6px solid rgba(0,174,239,.15);\r\n  border-right:6px solid rgba(0,174,239,.15);\r\n  border-bottom:6px solid rgba(0,174,239,.15);\r\n  border-top:6px solid rgba(0,174,239,.8);\r\n  border-radius:100%;\r\n}\r\n\r\n@keyframes rotation {\r\n  from {transform: rotate(0deg);}\r\n  to {transform: rotate(359deg);}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fdWkvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0VBSWYsdUNBQXVDO0VBQ3ZDLHlDQUF5QztFQUN6QywwQ0FBMEM7RUFDMUMsMkNBQTJDO0VBQzNDLHVDQUF1QztFQUN2QyxrQkFBa0I7QUFDcEI7O0FBY0E7RUFDRSxNQUFNLHVCQUF1QixDQUFDO0VBQzlCLElBQUkseUJBQXlCLENBQUM7QUFDaEMiLCJmaWxlIjoiYXBwL191aS9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBoZWlnaHQ6NjBweDtcclxuICB3aWR0aDo2MHB4O1xyXG4gIG1hcmdpbjowcHggYXV0bztcclxuICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRpb24gLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICAtbW96LWFuaW1hdGlvbjogcm90YXRpb24gLjZzIGluZmluaXRlIGxpbmVhcjtcclxuICAtby1hbmltYXRpb246IHJvdGF0aW9uIC42cyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGlvbiAuNnMgaW5maW5pdGUgbGluZWFyO1xyXG4gIGJvcmRlci1sZWZ0OjZweCBzb2xpZCByZ2JhKDAsMTc0LDIzOSwuMTUpO1xyXG4gIGJvcmRlci1yaWdodDo2cHggc29saWQgcmdiYSgwLDE3NCwyMzksLjE1KTtcclxuICBib3JkZXItYm90dG9tOjZweCBzb2xpZCByZ2JhKDAsMTc0LDIzOSwuMTUpO1xyXG4gIGJvcmRlci10b3A6NnB4IHNvbGlkIHJnYmEoMCwxNzQsMjM5LC44KTtcclxuICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGlvbiB7XHJcbiAgZnJvbSB7LXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XHJcbiAgdG8gey13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTt9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICBmcm9tIHstbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cclxuICB0byB7LW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO31cclxufVxyXG5ALW8ta2V5ZnJhbWVzIHJvdGF0aW9uIHtcclxuICBmcm9tIHstby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XHJcbiAgdG8gey1vLXRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7fVxyXG59XHJcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xyXG4gIGZyb20ge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cclxuICB0byB7dHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTt9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_ui/simple-pager/simple-pager.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_ui/simple-pager/simple-pager.component.ts ***!
  \************************************************************/
/*! exports provided: SimplePagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePagerComponent", function() { return SimplePagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SimplePagerComponent {
    constructor() {
        this.showPageSizes = false;
        this.isBusy = false; // If operation is not finished user can't click on pager button
        this.onPageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPageSizeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSizes = [10, 20, 50];
    }
    previousPage(page) {
        this.pager.currentPage = --page;
        this.onPageChanged.emit(page);
    }
    nextPage(page) {
        if (this.pager.totalPages === this.pager.currentPage)
            return;
        this.pager.currentPage = ++page;
        this.onPageChanged.emit(page);
    }
    firstPage() {
        this.pager.currentPage = 1;
        this.onPageChanged.emit(1);
    }
    lastPage() {
        this.pager.currentPage = this.pager.totalPages;
        this.onPageChanged.emit(this.pager.currentPage);
    }
    pageSizeChange(size) {
        this.pageSize = size;
        this.onPageSizeChanged.emit(size);
    }
}
SimplePagerComponent.ɵfac = function SimplePagerComponent_Factory(t) { return new (t || SimplePagerComponent)(); };
SimplePagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimplePagerComponent, selectors: [["simple-pager"]], inputs: { pager: "pager", showPageSizes: "showPageSizes", isBusy: "isBusy" }, outputs: { onPageChanged: "onPageChanged", onPageSizeChanged: "onPageSizeChanged" }, decls: 24, vars: 6, consts: [[1, "col-md-12"], ["aria-label", "..."], [1, "pagination", "pagination-sm"], [1, "page-item"], [1, "page-link", 3, "disabled", "click"], [1, "align-middle"], [1, "text-muted"]], template: function SimplePagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimplePagerComponent_Template_button_click_4_listener() { return ctx.firstPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "First Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimplePagerComponent_Template_button_click_7_listener() { return ctx.previousPage(ctx.pager.currentPage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " < Previous Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0\u00A0 Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Out Of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimplePagerComponent_Template_button_click_19_listener() { return ctx.nextPage(ctx.pager.currentPage); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Next Page >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SimplePagerComponent_Template_button_click_22_listener() { return ctx.lastPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Last Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.pager.currentPage == 1 || ctx.isBusy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.pager.currentPage == 1 || ctx.isBusy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pager.currentPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pager.totalPages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.pager.currentPage == ctx.pager.totalPages || ctx.isBusy);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.pager.currentPage == ctx.pager.totalPages || ctx.isBusy);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimplePagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'simple-pager',
                templateUrl: './simple-pager.component.html'
            }]
    }], function () { return []; }, { pager: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showPageSizes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isBusy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onPageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onPageSizeChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/_ui/ui.module.ts":
/*!**********************************!*\
  !*** ./src/app/_ui/ui.module.ts ***!
  \**********************************/
/*! exports provided: UIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIModule", function() { return UIModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-pager/simple-pager.component */ "./src/app/_ui/simple-pager/simple-pager.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/_ui/loader/loader.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class UIModule {
}
UIModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UIModule });
UIModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UIModule_Factory(t) { return new (t || UIModule)(); }, providers: [
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UIModule, { declarations: [_simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_2__["SimplePagerComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]], exports: [_simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_2__["SimplePagerComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UIModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_2__["SimplePagerComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ],
                exports: [
                    _simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_2__["SimplePagerComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"],
                ],
                providers: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/administration/synonym/components/synonym-edit/synonym-edit.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/administration/synonym/components/synonym-edit/synonym-edit.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SynonymEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynonymEditComponent", function() { return SynonymEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_SynonymWord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/SynonymWord */ "./src/app/administration/synonym/models/SynonymWord.ts");
/* harmony import */ var _models_CreateSynonym__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/CreateSynonym */ "./src/app/administration/synonym/models/CreateSynonym.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_synonym_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/synonym.service */ "./src/app/administration/synonym/services/synonym.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function SynonymEditComponent_h1_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SynonymEditComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SynonymEditComponent_div_13_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Word can not be empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SynonymEditComponent_div_13_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Word field must be at least 2 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SynonymEditComponent_div_13_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Word field must be 255 characters max! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SynonymEditComponent_div_13_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only letters are allowed without space!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SynonymEditComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynonymEditComponent_div_13_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SynonymEditComponent_div_13_p_2_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SynonymEditComponent_div_13_p_3_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SynonymEditComponent_div_13_p_4_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.fw.wordText.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.fw.wordText.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.fw.wordText.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.fw.wordText.errors.pattern);
} }
function SynonymEditComponent_div_26_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Synonym can not be empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SynonymEditComponent_div_26_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Synonym field must be at least 2 characters! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SynonymEditComponent_div_26_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Synonym field must be 255 characters max! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SynonymEditComponent_div_26_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Only letters are allowed without space!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SynonymEditComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynonymEditComponent_div_26_p_1_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SynonymEditComponent_div_26_p_2_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SynonymEditComponent_div_26_p_3_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SynonymEditComponent_div_26_p_4_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fs.synonym.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fs.synonym.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fs.synonym.errors.maxlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.fs.synonym.errors.pattern);
} }
function SynonymEditComponent_div_31_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SynonymEditComponent_div_31_ul_3_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.removeSynonym(item_r15.synonymId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r15.synonymText, " ");
} }
function SynonymEditComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SynonymEditComponent_div_31_ul_3_Template, 6, 1, "ul", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.synonymWord.synonyms);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class SynonymEditComponent {
    constructor(formBuilder, toastr, service, route, router) {
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.service = service;
        this.route = route;
        this.router = router;
        this.submittedFormWord = false;
        this.submittedFormSynonym = false;
    }
    //returnValue: ReturnObject;
    get fw() { return this.formWord.controls; } // just for easy access from template
    get fs() { return this.formSynonym.controls; }
    ngOnInit() {
        this.initializeForm();
        this.wordId = this.route.snapshot.params['wordId'] || 0; // If id is not in query string set 0
        if (this.wordId > 0) { // Edit, go to backend and get some data
            this.service.find(this.wordId).subscribe((result) => {
                this.synonymWord = result;
                this.formWord.patchValue(this.synonymWord); // Store intial value of reactive form 
            }, error => {
                this.toastr.error(error); // errors from API
            }); // Edit
        }
    }
    initializeForm() {
        this.synonymWord = new _models_SynonymWord__WEBPACK_IMPORTED_MODULE_2__["SynonymWord"];
        this.synonymWord.synonyms = new Array;
        this.formWord = this.formBuilder.group({
            wordText: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]*$')]],
        });
        this.formSynonym = this.formBuilder.group({
            synonym: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z]*$')]],
            synonyms: this.formBuilder.group({
                synonymId: [''],
                synonymText: [''],
            }),
        });
    }
    updateForm() {
        this.submittedFormWord = true;
        if (this.formWord.invalid) {
            return;
        } // form must be valid to create request to back end
        if (this.synonymWord.synonyms.length === 0) {
            this.toastr.error('Word must have at least one synonym.');
            return;
        } // Also at least one synonym must exist
        const retWord = this.formWord.value;
        retWord.wordId = this.wordId;
        this.synonymWord.wordId = 0;
        this.synonymWord.wordText = retWord.wordText;
        if (this.wordId > 0) { // EDIT Word
            this.synonymWord.wordId = this.wordId;
            this.editWord(this.synonymWord);
        }
        else { // ADD word
            this.createWord(this.synonymWord);
        }
    }
    // Post new word with synonyms to the backend and return message
    createWord(data) {
        this.service.create(data).subscribe((result) => {
            if (result.isError) {
                this.toastr.error(result.errorMessage); // Show error message
            }
            else {
                this.toastr.success('Word is updated successfully!'); // Show succes message when data is successfully submited
                this.router.navigate(['word']); // Navigate to word grid
            }
        }, error => {
            this.toastr.error(error); // errors from API
        }); // Create user data using CRUD API
    }
    editWord(word) {
        this.service.update(word).subscribe((result) => {
            if (result.isError) {
                this.toastr.error(result.errorMessage); // Show error message
            }
            else {
                this.toastr.success('Word is added successfully!'); // Show succes message when data is successfully submited
            }
        }, error => {
            this.toastr.error(error); // errors from API
        }); // Create user data using CRUD API
    }
    removeSynonym(id) {
        if (this.synonymWord.synonyms.length > 1) {
            this.service.deleteSynonym(id).subscribe((result) => {
                this.synonymWord.synonyms = this.synonymWord.synonyms.filter(obj => obj.synonymId !== id); // remove synonym from list
            }, error => {
                this.toastr.error(error); // errors from API
            }); // Delete synonym
        }
        else {
            this.toastr.error('At least one synonym must exist for a word!');
        }
    }
    addSynonym() {
        this.submittedFormSynonym = true;
        if (this.formSynonym.invalid) {
            return;
        } // form must be valid to create request to back end
        const selectedName = this.formSynonym.get('synonym').value; // get entered value
        if (this.synonymWord.synonyms.length > 0) { // validation if nothing is added skip this step
            const synArray = this.synonymWord.synonyms.map(x => x.synonymText.toLowerCase());
            if (synArray.includes(selectedName === null || selectedName === void 0 ? void 0 : selectedName.toLowerCase())) { // check if is already added synonym 
                this.toastr.error('Synonym is already added!');
                return;
            }
        } // Validation
        if (this.wordId > 0) { // EDIT WORD --> ADD SYNONYM 
            this.addSynonymWithWord(selectedName);
        }
        else {
            this.synonymWord.synonyms.push({ synonymId: 0, synonymText: selectedName }); // ADD WORD - when we add synonym we set id to zero
            this.resetForm(this.formSynonym);
        }
    }
    addSynonymWithWord(selectedName) {
        const data = new _models_CreateSynonym__WEBPACK_IMPORTED_MODULE_3__["CreateSynonym"]();
        data.synonymText = selectedName;
        data.wordId = this.wordId;
        this.service.createSynonym(data).subscribe((result) => {
            if (result.isError) {
                this.toastr.error(result.errorMessage); // Show error message
            }
            else {
                this.synonymWord.synonyms.push({ synonymId: result.id, synonymText: selectedName }); // add synonym to ui
                this.resetForm(this.formSynonym);
                this.toastr.success('Synonym is added successfully!'); // Show succes message when data is successfully submited
            }
        }, error => {
            this.toastr.error(error); // errors from API
        }); // Create synonym using CRUD API
    }
    resetForm(form) {
        form.reset();
        Object.keys(form.controls).forEach(key => {
            form.get(key).setErrors(null);
        });
    }
}
SynonymEditComponent.ɵfac = function SynonymEditComponent_Factory(t) { return new (t || SynonymEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_synonym_service__WEBPACK_IMPORTED_MODULE_5__["SynonymService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
SynonymEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SynonymEditComponent, selectors: [["app-synonym-edit"]], decls: 35, vars: 13, consts: [[1, "container"], [4, "ngIf", "ngIfElse"], ["elseNew", ""], ["novalidate", "", 3, "formGroup", "ngSubmit"], [1, "form-row"], [1, "col-md-10"], [1, "form-group", "row"], ["for", "wordText", 1, "col-md-1", "col-form-label"], [1, "col-md-11"], ["formControlName", "wordText", "id", "wordText", 1, "form-control", 3, "ngClass"], [1, "mt-1"], [4, "ngIf"], [1, "col-md-2"], ["type", "button", "type", "submit", 1, "btn", "btn-primary", "btn-block", "float-right"], ["for", "synonym", 1, "col-md-1", "col-form-label"], ["formControlName", "synonym", "id", "synonym", 1, "form-control", 3, "ngClass"], ["type", "submit", 1, "btn", "btn-outline-secondary", "btn-block", "float-right", "text-left"], ["aria-hidden", "true", 1, "fa", "fa-plus"], ["class", "jumbotron jumbotron-fluid", 4, "ngIf"], [1, "form-group", "text-right"], ["href", "#", "routerLink", "/word", 1, "btn", "btn-light"], ["class", "text-danger", 4, "ngIf"], [1, "text-danger"], [1, "jumbotron", "jumbotron-fluid"], [1, "card"], ["class", "list-group", 4, "ngFor", "ngForOf"], [1, "list-group"], [1, "list-group-item", "align-text-bottom"], [1, "btn", "btn-danger", "fa-pull-right", 3, "click"], [1, "fa", "fa-trash-o"]], template: function SynonymEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SynonymEditComponent_h1_1_Template, 2, 0, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SynonymEditComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SynonymEditComponent_Template_form_ngSubmit_4_listener() { return ctx.updateForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Word:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SynonymEditComponent_div_13_Template, 5, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SynonymEditComponent_Template_form_ngSubmit_17_listener() { return ctx.addSynonym(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Synonym:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SynonymEditComponent_div_26_Template, 5, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Add Synonym ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SynonymEditComponent_div_31_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wordId > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formWord);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submittedFormWord && ctx.fw.wordText.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedFormWord && ctx.fw.wordText.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formSynonym);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submittedFormSynonym && ctx.fs.synonym.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittedFormSynonym && ctx.fs.synonym.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.synonymWord == null ? null : ctx.synonymWord.synonyms == null ? null : ctx.synonymWord.synonyms.length) > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: ["@media (min-width: 576px){\r\n    .jumbotron[_ngcontent-%COMP%] {\r\n        padding: 0.75rem 0.0rem !important;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hZG1pbmlzdHJhdGlvbi9zeW5vbnltL2NvbXBvbmVudHMvc3lub255bS1lZGl0L3N5bm9ueW0tZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7UUFDSSxrQ0FBa0M7SUFDdEM7QUFDSiIsImZpbGUiOiJhcHAvYWRtaW5pc3RyYXRpb24vc3lub255bS9jb21wb25lbnRzL3N5bm9ueW0tZWRpdC9zeW5vbnltLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgICAuanVtYm90cm9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDAuMHJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SynonymEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-synonym-edit',
                templateUrl: './synonym-edit.component.html',
                styleUrls: ['./synonym-edit.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _services_synonym_service__WEBPACK_IMPORTED_MODULE_5__["SynonymService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/administration/synonym/components/synonym-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/administration/synonym/components/synonym-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SynonymListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynonymListComponent", function() { return SynonymListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Pager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/Pager */ "./src/app/_core/models/Pager.ts");
/* harmony import */ var _services_synonym_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/synonym.service */ "./src/app/administration/synonym/services/synonym.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_ui/simple-pager/simple-pager.component */ "./src/app/_ui/simple-pager/simple-pager.component.ts");
/* harmony import */ var _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_ui/loader/loader.component */ "./src/app/_ui/loader/loader.component.ts");









const _c0 = function (a1) { return ["/word/edit/", a1]; };
function SynonymListComponent_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SynonymListComponent_tr_20_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.deleteWord(item_r2.wordId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.wordText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formatTableCell(item_r2.synonyms));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r2.wordId));
} }
function SynonymListComponent_loader_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "loader");
} }
class SynonymListComponent {
    constructor(service, toastr, router) {
        this.service = service;
        this.toastr = toastr;
        this.router = router;
        this.showLoading = true;
    }
    ngOnInit() {
        this.pager = new _models_Pager__WEBPACK_IMPORTED_MODULE_1__["Pager"];
        this.pageNumber = this.pager.currentPage;
        this.getSynonyms(this.pageNumber);
    }
    onPageChanged(newPage) {
        this.pageNumber = newPage;
        this.getSynonyms(newPage);
    }
    getSynonyms(currentPage) {
        this.service.getAll(currentPage)
            .subscribe((result) => {
            this.processResponseGrid(result);
            this.showLoading = false; //chain
        }, error => {
            this.toastr.error(error); // errors from API
            this.showLoading = false;
        });
    } // return Synonyms
    processResponseGrid(result) {
        if (!result.isError) { // map data
            this.synonymGrid = result.data;
            this.pager = result.pager;
        }
        else {
            this.toastr.error('Something gone wrong!'); // Show error message
        }
    }
    deleteWord(id) {
        this.service.deleteWord(id).subscribe((result) => {
            this.toastr.success('Successfully deleted word!');
            this.getSynonyms(1); // reset grid or stay with this.pageNumber
        }, error => {
            this.toastr.error(error); // errors from API
        }); // Delete synonym
    }
    formatTableCell(syn) {
        return syn.map(o => o.synonymText).join(", ");
    }
    onPageSizeChanged(newSize) {
        this.pageNumber = newSize;
    } // not in use
}
SynonymListComponent.ɵfac = function SynonymListComponent_Factory(t) { return new (t || SynonymListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_synonym_service__WEBPACK_IMPORTED_MODULE_2__["SynonymService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
SynonymListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SynonymListComponent, selectors: [["synonym-list"]], decls: 24, vars: 3, consts: [[1, "card-header"], [1, "row"], [1, "col-md-12"], [1, "float-right"], ["routerLink", "/word/new", 1, "btn", "btn-outline-secondary", "btn-block", "float-right", "text-left"], ["aria-hidden", "true", 1, "fa", "fa-plus"], [1, "table-responsive"], [1, "table", "table-striped"], [1, "thead-light"], [1, "text-center", 2, "width", "120px"], [4, "ngFor", "ngForOf"], [1, "row", "float-right"], [3, "pager", "onPageChanged", "onPageSizeChanged"], [4, "ngIf"], ["alt", "Edit", 1, "btn", "btn-light", 3, "routerLink"], [1, "fa", "fa-edit"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "fa", "fa-trash"]], template: function SynonymListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Add new word");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Word");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Synonyms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SynonymListComponent_tr_20_Template, 11, 5, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "simple-pager", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onPageChanged", function SynonymListComponent_Template_simple_pager_onPageChanged_22_listener($event) { return ctx.onPageChanged($event); })("onPageSizeChanged", function SynonymListComponent_Template_simple_pager_onPageSizeChanged_22_listener($event) { return ctx.onPageSizeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SynonymListComponent_loader_23_Template, 1, 0, "loader", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.synonymGrid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pager", ctx.pager);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoading);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ui_simple_pager_simple_pager_component__WEBPACK_IMPORTED_MODULE_6__["SimplePagerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__["LoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYWRtaW5pc3RyYXRpb24vc3lub255bS9jb21wb25lbnRzL3N5bm9ueW0tbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SynonymListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'synonym-list',
                templateUrl: './synonym-list.component.html',
                styleUrls: ['./synonym-list.component.css']
            }]
    }], function () { return [{ type: _services_synonym_service__WEBPACK_IMPORTED_MODULE_2__["SynonymService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/administration/synonym/models/CreateSynonym.ts":
/*!****************************************************************!*\
  !*** ./src/app/administration/synonym/models/CreateSynonym.ts ***!
  \****************************************************************/
/*! exports provided: CreateSynonym */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSynonym", function() { return CreateSynonym; });
class CreateSynonym {
}


/***/ }),

/***/ "./src/app/administration/synonym/models/SynonymWord.ts":
/*!**************************************************************!*\
  !*** ./src/app/administration/synonym/models/SynonymWord.ts ***!
  \**************************************************************/
/*! exports provided: SynonymWord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynonymWord", function() { return SynonymWord; });
class SynonymWord {
}


/***/ }),

/***/ "./src/app/administration/synonym/services/synonym.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/administration/synonym/services/synonym.service.ts ***!
  \********************************************************************/
/*! exports provided: SynonymService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynonymService", function() { return SynonymService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







class SynonymService {
    constructor(http) {
        this.http = http;
    }
    getAll(currentPage) {
        if (!currentPage) {
            currentPage = 1;
        }
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({ fromObject: { pageNumber: currentPage.toString() } });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/word/grid`, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(results => {
            console.log(results);
            return results;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        // let res: SearchResult[] = [
        //   {
        //     wordId: 1, wordText: 'Bossy', synonyms: [
        //       { synonymText: 'controlling' },
        //       { synonymText: 'tyrannical' }
        //     ]
        //   },
        //   {
        //     wordId: 2, wordText: 'Hardworking', synonyms: [
        //       { synonymText: 'diligent' },
        //       { synonymText: 'determined' },
        //       { synonymText: 'industrious' },
        //       { synonymText: 'enterprising' }
        //     ]
        //   }
        // ];
        // let ret: ResponseGrid<SearchResult> = {
        //   data: res,
        //   isError: false,
        //   pager: new Pager
        // }
        // return of(ret);
    }
    find(wordId) {
        const para = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]({ fromString: 'wordId=' + wordId.toString() });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/word/edit`, { params: para }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => { return result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    create(sw) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/word/create`, sw).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => { return result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    update(sw) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/word/update`, sw).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => { return result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    createSynonym(syn) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/synonym/create`, syn).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => { return result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteSynonym(synonymId) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/synonym/delete/${synonymId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteWord(wordId) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}/word/delete/${wordId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something is wrong! Please try again later.');
    }
    ;
}
SynonymService.ɵfac = function SynonymService_Factory(t) { return new (t || SynonymService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
SynonymService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SynonymService, factory: SynonymService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SynonymService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/administration/synonym/synonym.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/administration/synonym/synonym.module.ts ***!
  \**********************************************************/
/*! exports provided: SynonymModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynonymModule", function() { return SynonymModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_synonym_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/synonym-list.component */ "./src/app/administration/synonym/components/synonym-list.component.ts");
/* harmony import */ var _components_synonym_edit_synonym_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/synonym-edit/synonym-edit.component */ "./src/app/administration/synonym/components/synonym-edit/synonym-edit.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_ui/ui.module */ "./src/app/_ui/ui.module.ts");
/* harmony import */ var _synonym_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./synonym.router */ "./src/app/administration/synonym/synonym.router.ts");









class SynonymModule {
}
SynonymModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SynonymModule });
SynonymModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SynonymModule_Factory(t) { return new (t || SynonymModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UIModule"],
            _synonym_router__WEBPACK_IMPORTED_MODULE_7__["SynonymRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SynonymModule, { declarations: [_components_synonym_list_component__WEBPACK_IMPORTED_MODULE_4__["SynonymListComponent"],
        _components_synonym_edit_synonym_edit_component__WEBPACK_IMPORTED_MODULE_5__["SynonymEditComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UIModule"],
        _synonym_router__WEBPACK_IMPORTED_MODULE_7__["SynonymRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SynonymModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_synonym_list_component__WEBPACK_IMPORTED_MODULE_4__["SynonymListComponent"],
                    _components_synonym_edit_synonym_edit_component__WEBPACK_IMPORTED_MODULE_5__["SynonymEditComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UIModule"],
                    _synonym_router__WEBPACK_IMPORTED_MODULE_7__["SynonymRoutingModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/administration/synonym/synonym.router.ts":
/*!**********************************************************!*\
  !*** ./src/app/administration/synonym/synonym.router.ts ***!
  \**********************************************************/
/*! exports provided: SynonymRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SynonymRoutingModule", function() { return SynonymRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_synonym_edit_synonym_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/synonym-edit/synonym-edit.component */ "./src/app/administration/synonym/components/synonym-edit/synonym-edit.component.ts");
/* harmony import */ var _components_synonym_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/synonym-list.component */ "./src/app/administration/synonym/components/synonym-list.component.ts");






const routes = [
    { path: 'word', component: _components_synonym_list_component__WEBPACK_IMPORTED_MODULE_3__["SynonymListComponent"] },
    { path: 'word/new', component: _components_synonym_edit_synonym_edit_component__WEBPACK_IMPORTED_MODULE_2__["SynonymEditComponent"] },
    { path: 'word/edit/:wordId', component: _components_synonym_edit_synonym_edit_component__WEBPACK_IMPORTED_MODULE_2__["SynonymEditComponent"] },
];
class SynonymRoutingModule {
}
SynonymRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SynonymRoutingModule });
SynonymRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SynonymRoutingModule_Factory(t) { return new (t || SynonymRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SynonymRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SynonymRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _administration_synonym_components_synonym_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administration/synonym/components/synonym-list.component */ "./src/app/administration/synonym/components/synonym-list.component.ts");
/* harmony import */ var _home_components_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/components/home.component */ "./src/app/home/components/home.component.ts");






const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_components_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'word', component: _administration_synonym_components_synonym_list_component__WEBPACK_IMPORTED_MODULE_2__["SynonymListComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.title = 'test-synonyms';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["id", "wrapper", 1, "d-flex"], ["id", "page-content-wrapper"], [1, "container-fluid", "mt-2"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "side-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_1__["SideBarComponent"], _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__["NavMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["#wrapper[_ngcontent-%COMP%] {\r\n    overflow-x: hidden;\r\n}\r\n\r\n#page-content-wrapper[_ngcontent-%COMP%] {\r\n    min-width: 100vw;\r\n}\r\n\r\n#wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    #page-content-wrapper[_ngcontent-%COMP%] {\r\n        min-width: 0;\r\n        width: 100%;\r\n    }\r\n\r\n    #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n        margin-left: -15rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI3dyYXBwZXIudG9nZ2xlZCAjc2lkZWJhci13cmFwcGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./side-bar/side-bar.component */ "./src/app/side-bar/side-bar.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _administration_synonym_synonym_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./administration/synonym/synonym.module */ "./src/app/administration/synonym/synonym.module.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
            _administration_synonym_synonym_module__WEBPACK_IMPORTED_MODULE_10__["SynonymModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
        _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["SideBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
        _administration_synonym_synonym_module__WEBPACK_IMPORTED_MODULE_10__["SynonymModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
                    _side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_8__["SideBarComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
                    _administration_synonym_synonym_module__WEBPACK_IMPORTED_MODULE_10__["SynonymModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/components/home-filter/home-filter.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/home/components/home-filter/home-filter.component.ts ***!
  \**********************************************************************/
/*! exports provided: HomeFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFilterComponent", function() { return HomeFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _models_HomeFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/HomeFilter */ "./src/app/home/models/HomeFilter.ts");





/**
 * Here we create a search for the home page
 */
class HomeFilterComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onClear = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get f() { return this.filterForm.controls; }
    ngOnInit() {
        this.initializeFilterForm();
    }
    initializeFilterForm() {
        this.filterForm = this.formBuilder.group({
            searchTerm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(255), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]),
            includeTransitive: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ; // init. search form and set "silent" validations, don't go at the backend
    clearForm() {
        this.filterForm.patchValue({ searchTerm: '' }); // empty search field
        this.onClear.emit();
    } // empty search filed and emit an event
    submitForm(values) {
        this.submitted = true;
        if (this.filterForm.invalid) {
            this.onClear.emit(); // clear search
            return;
        } // form must be valid to create request to back end
        const filter = new _models_HomeFilter__WEBPACK_IMPORTED_MODULE_2__["HomeFilter"]();
        filter.searchTerm = values && values.searchTerm ? values.searchTerm : "";
        filter.includeTransitive = values && values.includeTransitive ? values.includeTransitive : false;
        this.onSubmit.emit(filter);
    }
}
HomeFilterComponent.ɵfac = function HomeFilterComponent_Factory(t) { return new (t || HomeFilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
HomeFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeFilterComponent, selectors: [["home-filter"]], outputs: { onSubmit: "onSubmit", onClear: "onClear" }, decls: 21, vars: 1, consts: [[3, "formGroup", "ngSubmit"], [1, "mt-1"], [1, "form-row"], [1, "input-group", "input-group-lg", "col-md-9"], [1, "input-group-prepend"], ["id", "inputGroup-sizing-lg", 1, "input-group-text"], [1, "fa", "fa-search"], ["type", "text", "formControlName", "searchTerm", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", "placeholder", "Search by Word Or Synonym", 1, "form-control"], ["role", "group", "aria-label", "...", 1, "btn-group", "btn-group-lg", "col-md-3"], ["type", "button", "type", "submit", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "row", "mt-1"], [1, "col-md-9"], [1, "col-md-3", "float-left", "custom-control-pos"], [1, "custom-control-lg", "custom-control", "custom-checkbox"], ["id", "checkbox-large", "type", "checkbox", "formControlName", "includeTransitive", 1, "custom-control-input"], ["for", "checkbox-large", 1, "custom-control-label", "text-secondary"]], template: function HomeFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeFilterComponent_Template_form_ngSubmit_0_listener() { return ctx.submitForm(ctx.filterForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeFilterComponent_Template_button_click_11_listener() { return ctx.clearForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Include transative rule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.filterForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: [".custom-control-lg[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::before, .custom-control-lg[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%]::after {\r\n    top: 0.1rem !important;\r\n    left: -2rem !important;\r\n    width: 1.25rem !important;\r\n    height: 1.25rem !important;\r\n}\r\n\r\n.custom-control-lg[_ngcontent-%COMP%]   .custom-control-label[_ngcontent-%COMP%] {\r\n    margin-left: 0.5rem !important;\r\n    font-size: 1rem !important;\r\n}\r\n\r\n.custom-control-pos[_ngcontent-%COMP%] {\r\n    padding-left: 0.0rem !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2NvbXBvbmVudHMvaG9tZS1maWx0ZXIvaG9tZS1maWx0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksK0JBQStCO0FBQ25DIiwiZmlsZSI6ImFwcC9ob21lL2NvbXBvbmVudHMvaG9tZS1maWx0ZXIvaG9tZS1maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tY29udHJvbC1sZyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSxcclxuLmN1c3RvbS1jb250cm9sLWxnIC5jdXN0b20tY29udHJvbC1sYWJlbDo6YWZ0ZXIge1xyXG4gICAgdG9wOiAwLjFyZW0gIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IC0ycmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1sZyAuY3VzdG9tLWNvbnRyb2wtbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbC1wb3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjByZW0gIWltcG9ydGFudDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeFilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home-filter',
                templateUrl: './home-filter.component.html',
                styleUrls: ['./home-filter.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { onSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/components/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/components/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/home.service */ "./src/app/home/services/home.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _home_filter_home_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-filter/home-filter.component */ "./src/app/home/components/home-filter/home-filter.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_ui/loader/loader.component */ "./src/app/_ui/loader/loader.component.ts");







function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No search results!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_div_3_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const synonym_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, synonym_r5.synonymText));
} }
function HomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_div_3_ul_6_Template, 7, 3, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const search_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](search_r3.wordText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", search_r3.synonyms);
} }
function HomeComponent_loader_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "loader");
} }
class HomeComponent {
    constructor(service, toastr) {
        this.service = service;
        this.toastr = toastr;
        this.showLoading = false;
        this.emptyResult = false;
    }
    ngOnInit() {
    }
    filterWords(filter) {
        this.filter = filter;
        this.getSearchResult(filter);
    } // click on filter button
    clearResults() {
        this.searchResults = [];
    } // click on clear button
    getSearchResult(filter) {
        this.showLoading = true;
        this.service.search(filter)
            .subscribe((result) => {
            this.searchResults = result.data;
            this.showLoading = false;
            this.emptyResult = result == null || result.data.length === 0;
        }, error => {
            this.toastr.error(error); // user friendly errors from API
            this.showLoading = false;
        });
    } // return data for grid
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 3, consts: [[3, "onSubmit", "onClear"], ["class", "mt-1", 4, "ngIf"], [1, "card-columns"], ["class", "card mb-3 mt-3 text-left", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mt-1"], [1, "card", "mb-3", "mt-3", "text-left"], [1, "card-header"], [1, "fa", "fa-list"], ["class", "list-group list-group-flush", 4, "ngFor", "ngForOf"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "fa", "fa-minus"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "home-filter", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSubmit", function HomeComponent_Template_home_filter_onSubmit_0_listener($event) { return ctx.filterWords($event); })("onClear", function HomeComponent_Template_home_filter_onClear_0_listener() { return ctx.clearResults(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_div_3_Template, 7, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_loader_4_Template, 1, 0, "loader", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emptyResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoading);
    } }, directives: [_home_filter_home_filter_component__WEBPACK_IMPORTED_MODULE_3__["HomeFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html'
            }]
    }], function () { return [{ type: _services_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home.component */ "./src/app/home/components/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_home_filter_home_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-filter/home-filter.component */ "./src/app/home/components/home-filter/home-filter.component.ts");
/* harmony import */ var _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_ui/ui.module */ "./src/app/_ui/ui.module.ts");







class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UIModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_components_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        _components_home_filter_home_filter_component__WEBPACK_IMPORTED_MODULE_4__["HomeFilterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UIModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                    _components_home_filter_home_filter_component__WEBPACK_IMPORTED_MODULE_4__["HomeFilterComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _app_ui_ui_module__WEBPACK_IMPORTED_MODULE_5__["UIModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/models/HomeFilter.ts":
/*!*******************************************!*\
  !*** ./src/app/home/models/HomeFilter.ts ***!
  \*******************************************/
/*! exports provided: HomeFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeFilter", function() { return HomeFilter; });
/**
 * Search fields
 */
class HomeFilter {
    constructor() {
        this.searchTerm = "";
    }
}


/***/ }),

/***/ "./src/app/home/services/home.service.ts":
/*!***********************************************!*\
  !*** ./src/app/home/services/home.service.ts ***!
  \***********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_HomeFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/HomeFilter */ "./src/app/home/models/HomeFilter.ts");








class HomeService {
    constructor(http) {
        this.http = http;
    }
    search(filter) {
        if (!filter) {
            filter = new _models_HomeFilter__WEBPACK_IMPORTED_MODULE_5__["HomeFilter"]();
        }
        const { searchTerm } = filter;
        const para = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: 'searchTerm=' + searchTerm + '&includeTransitive=' + filter.includeTransitive });
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/word/search`, { params: para })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => { return result; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        // let ret: ResponseSearch = {
        //   data: [{
        //     wordId: 1, wordText: 'Bossy', synonyms: [
        //       { synonymText: 'controlling' },
        //       { synonymText: 'tyrannical' }
        //     ]
        //   }
        //   ],
        //   isError: false
        // };
        // return of(ret);
    }
    // Handle API errors
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Code ${error.status}, ` + `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something is wrong! Please try again later.');
    }
    ;
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["link-active"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return ["/"]; };
function NavMenuComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
} }
function NavMenuComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Synonyms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c3 = function (a0) { return { show: a0 }; };
class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    ngOnInit() {
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(); };
NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["nav-menu"]], decls: 12, vars: 9, consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "bg-white", "border-bottom", "box-shadow", "mb-3"], [1, "text-left"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "d-sm-inline-flex", "flex-sm-row-reverse", 3, "ngClass"], [1, "navbar-nav", "flex-grow"], ["class", "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions", 4, "ngIf"], ["class", "nav-item", 3, "routerLinkActive", 4, "ngIf"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "flex-sm-row-reverse", 3, "ngClass"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", "text-dark", 3, "routerLink"], [1, "nav-item", 3, "routerLinkActive"], ["routerLink", "/synonym", 1, "nav-link", "text-dark"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Synonyms search tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavMenuComponent_Template_button_click_5_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavMenuComponent_li_9_Template, 3, 6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavMenuComponent_li_10_Template, 3, 2, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, ctx.isExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx.isExpanded));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["a.navbar-brand[_ngcontent-%COMP%] {\r\n    white-space: normal;\r\n    text-align: center;\r\n    word-break: break-all;\r\n  }\r\n  \r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    html[_ngcontent-%COMP%] {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  \r\n  .box-shadow[_ngcontent-%COMP%] {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUNBO0lBQ0U7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7O0VBRUE7SUFDRSw4Q0FBOEM7RUFDaEQiLCJmaWxlIjoiYXBwL25hdi1tZW51L25hdi1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLm5hdmJhci1icmFuZCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIH1cclxuICBcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBodG1sIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuYm94LXNoYWRvdyB7XHJcbiAgICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nav-menu',
                templateUrl: './nav-menu.component.html',
                styleUrls: ['./nav-menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/side-bar/side-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/side-bar/side-bar.component.ts ***!
  \************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SideBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SideBarComponent.ɵfac = function SideBarComponent_Factory(t) { return new (t || SideBarComponent)(); };
SideBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideBarComponent, selectors: [["side-bar"]], decls: 10, vars: 0, consts: [["id", "sidebar-wrapper", 1, "bg-light", "border-right"], [1, "sidebar-heading"], [1, "list-group", "list-group-flush"], ["routerLink", "/home", 1, "list-group-item", "list-group-item-action", "bg-light"], ["routerLink", "/word", 1, "list-group-item", "list-group-item-action", "bg-light"]], template: function SideBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Administration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#sidebar-wrapper[_ngcontent-%COMP%] {\r\n    min-height: 100vh;\r\n    margin-left: -15rem;\r\n    transition: margin .25s ease-out;\r\n}\r\n\r\n    #sidebar-wrapper[_ngcontent-%COMP%]   .sidebar-heading[_ngcontent-%COMP%] {\r\n        padding: 0.875rem 1.25rem;\r\n        font-size: 1.2rem;\r\n    }\r\n\r\n    #sidebar-wrapper[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\r\n        width: 15rem;\r\n    }\r\n\r\n    #page-content-wrapper[_ngcontent-%COMP%] {\r\n    min-width: 100vw;\r\n}\r\n\r\n    #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n}\r\n\r\n    @media (min-width: 768px) {\r\n    #sidebar-wrapper[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n    }\r\n}\r\n\r\n    #sidebar-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaWRlLWJhci9zaWRlLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUluQixnQ0FBZ0M7QUFDcEM7O0lBRUk7UUFDSSx5QkFBeUI7UUFDekIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFSjtJQUNJLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLGNBQWM7QUFDbEI7O0lBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7SUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJhcHAvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cmVtO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIC4yNXMgZWFzZS1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOiBtYXJnaW4gLjI1cyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbiAuMjVzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4gICAgI3NpZGViYXItd3JhcHBlciAuc2lkZWJhci1oZWFkaW5nIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjg3NXJlbSAxLjI1cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG5cclxuICAgICNzaWRlYmFyLXdyYXBwZXIgLmxpc3QtZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxNXJlbTtcclxuICAgIH1cclxuXHJcbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4jd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNzaWRlYmFyLXdyYXBwZXIgdWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'side-bar',
                templateUrl: './side-bar.component.html',
                styleUrls: ['./side-bar.component.css']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
    production: false,
    apiUrl: 'http://localhost:8080/api',
    secure: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Testing Ground\TestSynonyms\test-synonyms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map