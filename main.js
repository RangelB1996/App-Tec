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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class=\"container\">\n\n  <router-outlet></router-outlet>\n</div>\n"

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
        this.title = 'Tutorias';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_anexo5_anexo5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/anexo5/anexo5.component */ "./src/app/components/anexo5/anexo5.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_anexo6_anexo6_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/anexo6/anexo6.component */ "./src/app/components/anexo6/anexo6.component.ts");
/* harmony import */ var _services_conexion_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/conexion.service */ "./src/app/services/conexion.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




//Rutas






//Servico de conexion


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_anexo5_anexo5_component__WEBPACK_IMPORTED_MODULE_6__["Anexo5Component"],
                _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_anexo6_anexo6_component__WEBPACK_IMPORTED_MODULE_9__["Anexo6Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_4__["APP_ROUTING"]
            ],
            providers: [
                _services_conexion_service__WEBPACK_IMPORTED_MODULE_10__["ConexionService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_anexo5_anexo5_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/anexo5/anexo5.component */ "./src/app/components/anexo5/anexo5.component.ts");
/* harmony import */ var _components_anexo6_anexo6_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/anexo6/anexo6.component */ "./src/app/components/anexo6/anexo6.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




var APP_ROUTES = [
    { path: 'anexo5', component: _components_anexo5_anexo5_component__WEBPACK_IMPORTED_MODULE_1__["Anexo5Component"] },
    { path: 'anexo6', component: _components_anexo6_anexo6_component__WEBPACK_IMPORTED_MODULE_2__["Anexo6Component"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/components/anexo5/anexo5.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/anexo5/anexo5.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5leG81L2FuZXhvNS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/anexo5/anexo5.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/anexo5/anexo5.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"anexo5\" (ngSubmit)=\"guardarCambios()\">\n  <div class=\"element-separator\">\n    <hr><h3 class=\"section-break-title\">Datos Generales</h3>\n  </div>\n\n<div formGroupName=\"datos_generales\">\n  <div class=\"form-row\">\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationTooltip01\">Nombre del tutor</label>\n      <input formControlName=\"nombre_tutor\" type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Nombre completo\"required>\n      <div class=\"form-control-feedback\">\n        El nombre es necesario.\n      </div>\n      <div class=\"form-control-feedback\">\n        Almenos 3 caracteres.\n      </div>\n    </div>\n\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"validationTooltip01\">Fecha</label>\n      <input formControlName=\"fecha\" type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"{{fecha}}\"readonly=\"readonly\" value=\"{{fecha}}\">\n      <div class=\"valid-tooltip\">\n      </div>\n    </div>\n  </div>\n  </div>\n\n<div formGroupName=\"carrera\">\n  <div class=\"element-separator\">\n    <hr><h3 class=\"section-break-title\">Carrera</h3>\n  </div>\n\n  <div class=\"form-row\">\n    <div class=\"col-md-4 mb-3\">\n    <div class=\"input-group\">\n      <div class=\"input-group-prepend\">\n        <label>Nombre del plan de estudios</label>\n      </div>\n    </div>\n    <textarea formControlName=\"plan_estudios\" class=\"form-control\" aria-label=\"With textarea\"></textarea>\n    <div class=\"form-control-feedback\">\n      Plan de estudios necesario.\n    </div>\n    <div class=\"form-control-feedback\">\n      Almenos 3 caracteres.\n    </div>\n    </div>\n\n    <div class=\"element-radio col-md-3 mb-3\">\n      <label class=\"title\">Semestre:</label>\n      <div class=\"column column1\">\n        <label><input formControlName=\"semestre\" type=\"radio\" name=\"semestre\" value=\"Nuevo ingreso\" checked=\"\" /><span> Nuevo ingreso</span></label>\n        <label><input formControlName=\"semestre\" type=\"radio\" name=\"semestre\" value=\"Semestre 2 en adelante\" /><span> Semestre 2 en adelante</span></label>\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n  </div>\n</div>\n\n<div formGroupName=\"tipo_tutoria\">\n  <div class=\"element-separator\">\n    <hr><h3 class=\"section-break-title\">Tipo de Tutoria</h3>\n  </div>\n  <br><h4 class=\"section-break-title\">Grupal</h4>\n\n  <div formGroupName=\"grupal\">\n    <div class=\"form-row\">\n      <div class=\"col-md-3 mb-3\">\n        <label for=\"validationTooltip01\">Nº Tutorados</label>\n        <input formControlName=\"numero_tutorados\" type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Ejemplo: 1\"required>\n        <div class=\"valid-tooltip\">\n        </div>\n      </div>\n\n      <div class=\"col-md-6 mb-3\">\n        <h4>(Anexar lista con número de control)</h4>\n      </div>\n    </div>\n  </div>\n\n  <div formGroupName=\"individual\">\n    <hr><h4 class=\"section-break-title\">Individual</h4>\n    <div class=\"form-row\">\n      <div class=\"col-md-5 mb-3\">\n        <label for=\"validationTooltip01\">Nombre del tutorado</label>\n        <input formControlName=\"nombre_tutorado\" type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Nombre completo\"required>\n        <div class=\"valid-tooltip\">\n        </div>\n      </div>\n\n      <div class=\"col-md-4 mb-3\">\n        <label for=\"validationTooltip01\">Numero de control</label>\n        <input formControlName=\"numero_control\" type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Ejemplo: 14630084\"required>\n        <div class=\"valid-tooltip\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n  <div class=\"element-separator\">\n    <hr><h3 class=\"section-break-title\">Problematica Identificada</h3>\n  </div>\n\n  <textarea formControlName=\"problematica\" class=\"form-control\" aria-label=\"With textarea\" rows=\"4\"></textarea>\n\n  <div class=\"element-separator\">\n    <br><h3 class=\"section-break-title\">Objetivos</h3>\n  </div>\n\n\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n      <label>(La redacción debe estar de tal forma, que permita contestar a las siguientes\n  cuestiones: ¿Qué?, ¿Cómo? y ¿Para qué?)\n  </label>\n    </div>\n  </div>\n  <textarea formControlName=\"objetivos\" class=\"form-control\" aria-label=\"With textarea\" rows=\"4\"></textarea>\n\n  <div class=\"element-separator\">\n    <br><h3 class=\"section-break-title\">Acciones</h3>\n  </div>\n  <textarea formControlName=\"acciones\" class=\"form-control\" aria-label=\"With textarea\" rows=\"4\"></textarea>\n\n<div formGroupName=\"calendarizacion\">\n  <div class=\"element-separator\">\n    <br><h3 class=\"section-break-title\">Calendarización</h3>\n  </div>\n<div formGroupName=\"actividad_1\">\n  <div class=\"form-row\">\n    <div class=\"col-md-3 mb-3\">\n      <h5>Actividad</h5>\n      <input formControlName=\"actividad\" type=\"text\" class=\"form-control\">\n      <div class=\"valid-tooltip\">\n      </div>\n    </div>\n\n    <div class=\"element-date col-md-3 mb-3\">\n      <div class=\"item-cont\">\n        <h5>dd/mm/aa</h5>\n        <input formControlName=\"fecha_1\" class=\"small\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date3\" placeholder=\"dd/mm/aa\" class=\"form-control\" /><span class=\"icon-place\"></span>\n      </div>\n    </div>\n\n    <div class=\"element-date col-md-3 mb-3\">\n      <div class=\"item-cont\">\n        <h5>dd/mm/aa</h5>\n        <input formControlName=\"fecha_2\" class=\"small\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date3\" placeholder=\"dd/mm/aa\" class=\"form-control\" /><span class=\"icon-place\"></span>\n      </div>\n    </div>\n\n    <div class=\"element-date col-md-3 mb-3\">\n      <div class=\"item-cont\">\n        <h5>dd/mm/aa</h5>\n        <input formControlName=\"fecha_3\" class=\"small\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date3\" placeholder=\"dd/mm/aa\" class=\"form-control\" /><span class=\"icon-place\"></span>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n  <hr>\n  <div formGroupName=\"actividad_2\">\n    <div class=\"form-row\">\n      <div class=\"col-md-3 mb-3\">\n        <input formControlName=\"actividad\" type=\"text\" class=\"form-control\">\n        <div class=\"valid-tooltip\">\n        </div>\n      </div>\n\n      <div class=\"element-date col-md-3 mb-3\">\n        <div class=\"item-cont\">\n          <input formControlName=\"fecha_1\" class=\"small\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date3\" placeholder=\"dd/mm/aa\" class=\"form-control\" /><span class=\"icon-place\"></span>\n        </div>\n      </div>\n\n      <div class=\"element-date col-md-3 mb-3\">\n        <div class=\"item-cont\">\n          <input formControlName=\"fecha_2\" class=\"small\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date3\" placeholder=\"dd/mm/aa\" class=\"form-control\" /><span class=\"icon-place\"></span>\n        </div>\n      </div>\n\n      <div class=\"element-date col-md-3 mb-3\">\n        <div class=\"item-cont\">\n          <input formControlName=\"fecha_3\" class=\"small\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date3\" placeholder=\"dd/mm/aa\" class=\"form-control\" /><span class=\"icon-place\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <hr>\n\n  <div formGroupName=\"actividad_3\">\n    <div class=\"form-row\">\n      <div class=\"col-md-3 mb-3\">\n        <input formControlName=\"actividad\" type=\"text\" class=\"form-control\">\n        <div class=\"valid-tooltip\">\n        </div>\n      </div>\n\n      <div class=\"element-date col-md-3 mb-3\">\n        <div class=\"item-cont\">\n          <input formControlName=\"fecha_1\" class=\"small\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date3\" placeholder=\"dd/mm/aa\" class=\"form-control\" /><span class=\"icon-place\"></span>\n        </div>\n      </div>\n\n      <div class=\"element-date col-md-3 mb-3\">\n        <div class=\"item-cont\">\n          <input formControlName=\"fecha_2\" class=\"small\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date3\" placeholder=\"dd/mm/aa\" class=\"form-control\" /><span class=\"icon-place\"></span>\n        </div>\n      </div>\n\n      <div class=\"element-date col-md-3 mb-3\">\n        <div class=\"item-cont\">\n          <input formControlName=\"fecha_3\"class=\"small\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date3\" placeholder=\"dd/mm/aa\" class=\"form-control\" /><span class=\"icon-place\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n  <br>\n    <button  class=\"btn btn-warning\" type=\"submit\" href=\"http://localhost:8888/impresion/\">Guardar</button>\n  <br><br>\n\n</form>\n"

/***/ }),

/***/ "./src/app/components/anexo5/anexo5.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/anexo5/anexo5.component.ts ***!
  \*******************************************************/
/*! exports provided: Anexo5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anexo5Component", function() { return Anexo5Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_conexion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/conexion.service */ "./src/app/services/conexion.service.ts");




var Anexo5Component = /** @class */ (function () {
    function Anexo5Component(conexion) {
        this.conexion = conexion;
        this.dia = new Date().getDay();
        this.mes = new Date().getMonth();
        this.año = new Date().getFullYear();
        this.fecha = this.dia + "/" + this.mes + "/" + this.año;
        this.anexo5 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'datos_generales': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'nombre_tutor': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
                'fecha': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.fecha),
            }),
            'carrera': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'plan_estudios': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
                'semestre': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            }),
            'tipo_tutoria': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'grupal': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'numero_tutorados': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                }),
                'individual': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'nombre_tutorado': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    'numero_control': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                }),
            }),
            'problematica': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'objetivos': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'acciones': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'calendarizacion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'actividad_1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'actividad': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    'fecha_1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    'fecha_2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    'fecha_3': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                }),
                'actividad_2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'actividad': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    'fecha_1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    'fecha_2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    'fecha_3': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                }),
                'actividad_3': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                    'actividad': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    'fecha_1': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    'fecha_2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                    'fecha_3': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
                }),
            }),
        });
    }
    Anexo5Component.prototype.guardarCambios = function () {
        var fields = this.anexo5.value;
        var tutorship;
        if (fields.tipo_tutoria.grupal.numero_tutorados === '') {
            tutorship = fields.tipo_tutoria.individual.nombre_tutorado + ' ' + fields.tipo_tutoria.individual.numero_control;
        }
        else {
            tutorship = fields.tipo_tutoria.grupal.numero_tutorados;
        }
        var activity = fields.calendarizacion.actividad_1.actividad;
        activity += ' ' + fields.calendarizacion.actividad_1.fecha_1;
        activity += ' ' + fields.calendarizacion.actividad_1.fecha_2;
        activity += ' ' + fields.calendarizacion.actividad_1.fecha_2;
        var form = {
            name: fields.datos_generales.nombre_tutor,
            date: fields.datos_generales.fecha,
            plan: fields.carrera.plan_estudios,
            semester: fields.carrera.semestre,
            tutorship: tutorship,
            problem: fields.problematica,
            objective: fields.objetivos,
            action: fields.acciones,
            activity: activity
        };
        this.conexion.eviarDatos(form);
    };
    Anexo5Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anexo5',
            template: __webpack_require__(/*! ./anexo5.component.html */ "./src/app/components/anexo5/anexo5.component.html"),
            styles: [__webpack_require__(/*! ./anexo5.component.css */ "./src/app/components/anexo5/anexo5.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_conexion_service__WEBPACK_IMPORTED_MODULE_3__["ConexionService"]])
    ], Anexo5Component);
    return Anexo5Component;
}());



/***/ }),

/***/ "./src/app/components/anexo6/anexo6.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/anexo6/anexo6.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5leG82L2FuZXhvNi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/anexo6/anexo6.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/anexo6/anexo6.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"title\">\n    <h2 align=\"center\">Anexo 6 <br/>FICHA DE IDENTIFICACIÓN DEL TUTORADO</h2>\n  </div>\n\n  <p align=\"center\">Este documento es confidencial, tus respuestas serán utilizadas para mejorar el servicio que puede brindar el Instituto tecnológico.<br/>Por lo que se te pide contestar todas las preguntas con la mayor sinceridad.</p>\n\n<div class=\"form-row\">\n  <div class=\"col-md-4 mb-3\">\n    <div class=\"element-select\">\n      <label class=\"title\">Carrera a la que perteneces:</label>\n      <div class=\"form-row align-items-center\">\n            <label class=\"mr-sm-2 sr-only\" for=\"inlineFormCustomSelect\">Preference</label>\n            <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\n              <option value=\"Ingeniería en Gestión Empresarial\">Ingeniería en Gestión Empresarial</option>\n              <option value=\"Ingeniería Industrial\">Ingeniería Industrial</option>\n              <option value=\"Ingeniería en Sistemas Computacionales\">Ingeniería en Sistemas Computacionales</option>\n              <option value=\"Ingeniería Electromecánica\">Ingeniería Electromecánica</option>\n              <option value=\"Ingeniería en Logística\">Ingeniería en Logística</option>\n              <option value=\"Contador Público\">Contador Público</option>\n            </select>\n        </div>\n      </div>\n    </div>\n\n  <div class=\"col-md-4 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Número de control:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Ejemplo: 14630084\"required>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4 mb-3\">\n    <div class=\"element-select\">\n      <label class=\"title\">Semestre:</label>\n\n      <div class=\"form-row align-items-center\">\n          <label class=\"mr-sm-2 sr-only\" for=\"inlineFormCustomSelect\">Preference</label>\n          <select class=\"custom-select mr-sm-2\" id=\"inlineFormCustomSelect\">\n            <option value=\"1er Semestre\">1er Semestre</option>\n            <option value=\"2do Semestre\">2do Semestre</option>\n            <option value=\"3ro Semestre\">3ro Semestre</option>\n            <option value=\"4to Semestre\">4to Semestre</option>\n            <option value=\"5to Semestre\">5to Semestre</option>\n            <option value=\"6to Semestre\">6to Semestre</option>\n            <option value=\"7mo Semestre\">7mo Semestre</option>\n            <option value=\"8vo Semestre\">8vo Semestre</option>\n            <option value=\"9no Semestre\">9no Semestre</option>\n          </select>\n\n    </div>\n  </div>\n</div>\n\n</div>\n\n<div class=\"form-row\">\n  <div class=\"col-md-4 mb-3\">\n    <label class=\"title\">Grupo</label>\n    <br>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"A\">\n      <label class=\"form-check-label\" for=\"inlineRadio1\">\"A\"</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"B\">\n      <label class=\"form-check-label\" for=\"inlineRadio2\">\"B\"</label>\n    </div>\n  </div>\n\n  <div class=\"col-md-4 mb-3\">\n    <label class=\"title\">Fecha:</label>\n    <div class=\"item-cont\">\n      <input class=\"small\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date3\" placeholder=\"dd/mm/aa\" class=\"form-control\" /><span class=\"icon-place\"></span>\n    </div>\n  </div>\n</div>\n\n\n\n  <div class=\"element-separator\">\n    <hr><h3 class=\"section-break-title\">Datos Generales</h3>\n  </div>\n<div class=\"form-row\">\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Apellido Paterno:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Paterno\"required>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Apellido Materno</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Materno\"required>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n      <div class=\"element-input\">\n        <label class=\"title\">Nombre(s):</label>\n        <div class=\"item-cont\">\n          <input class=\"form-control\" type=\"text\" name=\"input1\" placeholder=\"Nombre(s)\"/>\n        </div>\n      </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <label class=\"title\">Sexo</label>\n    <br>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio1\" value=\"H\">\n      <label class=\"form-check-label\" for=\"inlineRadio1\">H</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"inlineRadioOptions\" id=\"inlineRadio2\" value=\"M\">\n      <label class=\"form-check-label\" for=\"inlineRadio2\">M</label>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"form-row\">\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-email\">\n      <label class=\"title\">Correo electrónico:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" type=\"email\" name=\"email\" value=\"\" placeholder=\"ejemplo@ejemplo.com\"/>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-phone\">\n      <label class=\"title\">Teléfono:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" type=\"tel\" maxlength=\"24\" name=\"phone\" placeholder=\"000-00-00\" value=\"\"/>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-phone\">\n      <label class=\"title\">Celular 1:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" type=\"tel\"  maxlength=\"24\" name=\"phone1\" placeholder=\"000-000-00-00\" value=\"\"/>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-phone\">\n      <label class=\"title\">Celular 2:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" type=\"tel\" maxlength=\"24\" name=\"phone2\" placeholder=\"000-000-00-00\" value=\"\"/>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"form-row\">\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-date\">\n      <label class=\"title\">Fecha de Nacimiento:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" data-format=\"dd-mm-yyyy\" type=\"date\" name=\"date1\" placeholder=\"dd/mm/aa\"/>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Ciudad de Nacimiento:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Ciudad\"required>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Estado de Nacimiento:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Estado\"required>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Pais de Nacimiento:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Pais\"required>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"form-row\">\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-radio\">\n      <label class=\"title\">Estado Civil:</label>\n      <div class=\"column column4\">\n        <label><input type=\"radio\" name=\"radio2\" value=\"Casado(a)\" checked=\"\" />\n          <span> Casado(a)</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label><input type=\"radio\" name=\"radio2\" value=\"Soltero(a)\" />\n          <span> Soltero(a)</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label><input type=\"radio\" name=\"radio2\" value=\"Otro\" />\n          <span> Otro</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Numero de hijos:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Ejemplo: 2\"required>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"element-separator\">\n  <hr><h3 class=\"section-break-title\">Domicilio</h3>\n</div>\n\n<div class=\"form-row\">\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Calle:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Calle\"required>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-2 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Numero:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Numero\"required>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Colonia:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Colonia\"required>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Ciudad:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Ciudad\" required>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"form-row\">\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">Estado/Provincia:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"Estado/Provincia\" required>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-input\">\n      <div class=\"item-cont\">\n        <label class=\"title\">País:</label>\n        <input type=\"text\" class=\"form-control\" id=\"validationTooltip01\" placeholder=\"País\" required>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"element-separator\">\n  <hr><h3 class=\"section-break-title\">Grado de estudios</h3>\n</div>\n\n<div class=\"form-row\">\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-radio\">\n      <label class=\"title\">Escolaridad:</label>\n      <div class=\"column column2\">\n        <label>\n          <input type=\"radio\" name=\"radio3\" value=\"Preparatoria\" checked=\"\" />\n          <span> Preparatoria</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column2\">\n        <label>\n          <input type=\"radio\" name=\"radio3\" value=\"Bachillerato Técnico\" />\n          <span> Bachillerato Técnico</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n\n    <div class=\"element-input\">\n      <label class=\"title\"> Nombre de la Institución:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" type=\"text\" name=\"input2\"/>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3 mb-3\">\n    <div class=\"element-radio\">\n      <label class=\"title\">Has estado becado:</label>\n      <div class=\"column column1\">\n        <label>\n          <input type=\"radio\" name=\"radio4\" value=\"Sí\" checked=\"\" />\n          <span> Sí</span>\n        </label>\n<br>\n        <label>\n          <input type=\"radio\" name=\"radio4\" value=\"No\" />\n          <span> No</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n  </div>\n\n  <div class=\"col-md3 mb-3\">\n    <label class=\"title\">Si la respuesta es si mencione la dependencia:</label>\n    <div class=\"element-radio\">\n      <label class=\"title\"></label>\n      <div class=\"column column3\">\n        <label>\n          <input type=\"radio\" name=\"radio5\" value=\"Gobierno Federal\" />\n          <span>Gobierno Federal</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column3\">\n        <label><input type=\"radio\" name=\"radio5\" value=\"Gobierno Estatal\" />\n          <span>Gobierno Estatal</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column3\">\n        <label>\n          <input type=\"radio\" name=\"radio5\" value=\"Esfuerzos de Bachillerato\" />\n          <span>Esfuerzos de Bachillerato</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n\n    <div class=\"element-input\">\n      <label class=\"title\">Nombre de la Institución:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" type=\"text\" name=\"input3\" placeholder=\"\"/>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"form-row\">\n  <div class=\"col-md2 mb-3\">\n    <div class=\"element-radio\">\n      <label class=\"title\">En el transcurso de tus estudios vivirás...</label>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio6\" value=\"Con mi familia\" checked=\"\" />\n          <span> Con mi familia</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio6\" value=\"Con familiares cercanos\" />\n          <span> Con familiares cercanos</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio6\" value=\"Con otros estudiantes\" />\n          <span> Con otros estudiantes</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio6\" value=\"Solo\" />\n          <span> Solo</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n  </div>\n  <div class=\"col-md3 mb-3\">\n    <div class=\"element-radio\">\n      <label class=\"title\">Trabajas:</label>\n      <div class=\"column column1\">\n        <label>\n          <input type=\"radio\" name=\"radio7\" value=\"Sí:\" checked=\"\" />\n          <span> Sí</span>\n        </label>\n        <br>\n        <label>\n          <input type=\"radio\" name=\"radio7\" value=\"No\" />\n          <span> No</span>\n        </label>\n\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n  </div>\n\n  <div class=\"col-md3 mb-3\">\n    <div class=\"element-input\">\n      <label class=\"title\">Nombre de la Empresa:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" type=\"text\" name=\"input4\" placeholder=\"Nombre\"/>\n      </div>\n    </div>\n\n    <div class=\"element-input\">\n      <label class=\"title\">Horario:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" type=\"text\" name=\"input5\" placeholder=\"Ejemplo 8-15\"/>\n      </div>\n    </div>\n    <p></p>\n  </div>\n\n</div>\n\n<div class=\"form-row\">\n  <div class=\"col-md3 mb-3\">\n    <div class=\"element-radio\">\n      <label class=\"title\">Máximo grado de escolaridad de Padre:</label>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio8\" value=\"Primaria\" checked=\"\" />\n          <span> Primaria-</span>\n        </label>\n        <label>\n          <input type=\"radio\" name=\"radio8\" value=\"Licenciatura\" />\n          <span> Licenciatura </span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio8\" value=\"Secundaria\" />\n          <span> Secundaria-</span>\n        </label>\n        <label>\n          <input type=\"radio\" name=\"radio8\" value=\"Posgrado\" />\n          <span> Posgrado </span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio8\" value=\"Preparatoria\" />\n          <span> Preparatoria-</span>\n        </label>\n        <label>\n          <input type=\"radio\" name=\"radio8\" value=\"Sin estudios\" />\n          <span> Sin estudios </span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio8\" value=\"Técnico\" />\n          <span> Técnico </span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n    <div class=\"element-radio\">\n      <label class=\"title\">Actualmente él:</label>\n      <div class=\"column column2\">\n        <label>\n          <input type=\"radio\" name=\"radio9\" value=\"Vive\" checked=\"\" />\n          <span> Vive</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column2\">\n        <label>\n          <input type=\"radio\" name=\"radio9\" value=\"Finado\" />\n          <span> Finado</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n\n    <div class=\"element-input\">\n      <label class=\"title\">Nombre del lugar de trabajo:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" type=\"text\" name=\"input6\" placeholder=\"\"/>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md3 mb-3\">\n    <div class=\"element-radio\">\n      <label class=\"title\">Máximo grado de escolaridad de Madre:</label>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio10\" value=\"Primaria\" checked=\"\" />\n          <span> Primaria-</span>\n        </label>\n        <label>\n          <input type=\"radio\" name=\"radio10\" value=\"Licenciatura\" />\n          <span> Licenciatura</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio10\" value=\"Secundaria\" />\n          <span> Secundaria-</span>\n        </label>\n        <label>\n          <input type=\"radio\" name=\"radio10\" value=\"Posgrado\" />\n          <span> Posgrado</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio10\" value=\"Preparatoria\" />\n          <span> Preparatoria-</span>\n        </label>\n        <label>\n          <input type=\"radio\" name=\"radio10\" value=\"Sin estudios\" />\n          <span> Sin estudios</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column4\">\n        <label>\n          <input type=\"radio\" name=\"radio10\" value=\"Técnico\" />\n          <span> Técnico</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n\n    <div class=\"element-radio\">\n      <label class=\"title\">Actualmente ella:</label>\n      <div class=\"column column2\">\n        <label>\n          <input type=\"radio\" name=\"radio11\" value=\"Vive\" checked=\"\" />\n          <span> Vive</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n      <div class=\"column column2\">\n        <label>\n          <input type=\"radio\" name=\"radio11\" value=\"Finado\" />\n          <span> Finada</span>\n        </label>\n      </div>\n      <span class=\"clearfix\"></span>\n    </div>\n\n    <div class=\"element-input\">\n      <label class=\"title\">Nombre del lugar de trabajo:</label>\n      <div class=\"item-cont\">\n        <input class=\"form-control\" type=\"text\" name=\"input7\" placeholder=\"\"/>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"element-separator\">\n  <hr><h3 class=\"section-break-title\">Emergencia</h3>\n</div>\n\n  <div class=\"element-input\">\n    <div class=\"form-row\">\n      <div class=\"col-md3 mb-3\">\n            <label class=\"title\">En caso de accidente avisar:</label>\n        <div class=\"item-cont\">\n          <input class=\"form-control\" type=\"text\" name=\"input8\" placeholder=\"Nombre\"/>\n        </div>\n      </div>\n\n      <div class=\"col-md3 mb-3\">\n        <div class=\"element-phone\">\n          <label class=\"title\">Celular:</label>\n          <div class=\"item-cont\">\n            <input class=\"form-control\" type=\"tel\" maxlength=\"24\" name=\"phone3\" placeholder=\"Teléfono\" value=\"\"/>\n          </div>\n        </div>\n      </div>\n\n      </div>\n    </div>\n\n<button class=\"btn btn-success\" type=\"submit\">Guardar</button>\n<br><br>\n"

/***/ }),

/***/ "./src/app/components/anexo6/anexo6.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/anexo6/anexo6.component.ts ***!
  \*******************************************************/
/*! exports provided: Anexo6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Anexo6Component", function() { return Anexo6Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Anexo6Component = /** @class */ (function () {
    function Anexo6Component() {
    }
    Anexo6Component.prototype.ngOnInit = function () {
    };
    Anexo6Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anexo6',
            template: __webpack_require__(/*! ./anexo6.component.html */ "./src/app/components/anexo6/anexo6.component.html"),
            styles: [__webpack_require__(/*! ./anexo6.component.css */ "./src/app/components/anexo6/anexo6.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Anexo6Component);
    return Anexo6Component;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n\n<a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/img/itoR.png\" width=\"50\" height=\"50\" alt=\"\">\n  </a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]= \"['home']\">Tutorias</a>\n      </li>\n\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" [routerLink]= \"['anexo5']\">Anexo 5</a>\n      </li>\n\n\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]= \"['anexo6']\">Anexo 6</a>\n      </li>\n\n    </ul>\n\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Guardar</button>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
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
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/shared/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/conexion.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/conexion.service.ts ***!
  \**********************************************/
/*! exports provided: ConexionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConexionService", function() { return ConexionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ConexionService = /** @class */ (function () {
    function ConexionService(http) {
        this.http = http;
        this.url = 'http://localhost:4002/api/formulario';
    }
    ConexionService.prototype.obtenerDatos = function () {
        this.http.get(this.url).subscribe(function (res) { return console.log(res); });
    };
    ConexionService.prototype.eviarDatos = function (datos) {
        this.http.post(this.url, datos).subscribe(function (res) { return console.log(res); });
    };
    ConexionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConexionService);
    return ConexionService;
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

module.exports = __webpack_require__(/*! /Users/bryanfernando/Desktop/TEC/8vo Semestre/Lenguajes de programacion para la web/Proyecto/Proyecto para Institucion/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map