"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe("Super Calculator", function () {
    beforeEach(function () {
        protractor_1.browser.get("https://juliemr.github.io/protractor-demo/", 30000);
    });
    it("Open URL", function () {
        protractor_1.browser.getTitle().then(function (title) {
            expect(title).toBe("Super Calculator");
            console.log("Browser title is " + title);
        });
        protractor_1.browser.sleep(2000);
    });
    it("Add function test: 12 + 3 = 15", function () {
        protractor_1.element(protractor_1.by.model("first")).sendKeys("12");
        protractor_1.element(protractor_1.by.model("second")).sendKeys("3");
        protractor_1.element(protractor_1.by.id("gobutton")).click();
        protractor_1.browser.sleep(3000);
        var result = protractor_1.element(protractor_1.by.tagName("h2")).getText();
        // element(by.className("ng-binding")).isPresent().then(function(result){
        //expect(result).toEqual("15");
        console.log("12 + 3 = " + result);
        //  });
    });
});
