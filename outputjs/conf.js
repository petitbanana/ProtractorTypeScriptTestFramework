"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: "jasmine",
    capabilities: {
        browserName: "chrome"
    },
    specs: ["./spec/calculator.js"],
    seleniumAddress: "http://localhost:4444/wd/hub"
};
//# sourceMappingURL=conf.js.map