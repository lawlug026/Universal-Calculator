"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var IntCalcComponent = /** @class */ (function () {
    function IntCalcComponent() {
        this.principal = 0;
        this.rate = 0;
        this.time = 0;
    }
    IntCalcComponent.prototype.calculateSI = function () {
        this.si = this.principal * this.rate * this.time / 100;
    };
    IntCalcComponent.prototype.calculateCI = function () {
        this.ci = this.principal * this.rate * this.time / 100;
    };
    IntCalcComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'int-ap',
            templateUrl: 'intcalc.component.html'
        })
    ], IntCalcComponent);
    return IntCalcComponent;
}());
exports.IntCalcComponent = IntCalcComponent;
//# sourceMappingURL=intcalc.component.js.map