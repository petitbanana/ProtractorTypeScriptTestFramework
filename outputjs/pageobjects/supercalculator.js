"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var superCalculator = /** @class */ (function () {
    function superCalculator() {
        this.header = protractor_1.element(protractor_1.by.css("body > div > div > h3"));
        this.result = protractor_1.element(protractor_1.by.css("ng-binding"));
    }
    superCalculator.prototype.addition = function (a, b) {
        protractor_1.element(protractor_1.by.model("first")).sendKeys(a);
        //element(by.model("operator")).element(by.("+")).click();
        protractor_1.element(protractor_1.by.model("second")).sendKeys(b);
        protractor_1.element(protractor_1.by.model("gobutton")).click();
    };
    ;
    superCalculator.prototype.subtraction = function (a, b) {
        protractor_1.element(protractor_1.by.model("first")).sendKeys(a);
        //element(by.model("operator")).element(by.cssContainingText("-")).click();
        protractor_1.element(protractor_1.by.model("second")).sendKeys(b);
        protractor_1.element(protractor_1.by.model("gobutton")).click();
    };
    ;
    return superCalculator;
}());
exports.superCalculator = superCalculator;
var calculator = protractor_1.element(protractor_1.by.id("CalcCtrl"));
