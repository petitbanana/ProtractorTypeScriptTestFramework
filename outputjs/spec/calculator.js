"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Super Calculator", function () {
    beforeEach(function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/", 30000);
    });
    it("Open URL", function () {
        protractor_1.browser.getTitle().then(function (title) {
            expect(title).toContain("Super Xalculator");
            console.log(title);
        });
        protractor_1.browser.sleep(2000);
    });
    it("Add function test", function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("12");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("3");
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(2000);
    });
});
//# sourceMappingURL=calculator.js.map