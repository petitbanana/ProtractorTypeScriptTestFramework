import { browser, by, element } from 'protractor';


export class superCalculator {

    header = element(by.css("body > div > div > h3"));
    result = element(by.css("ng-binding"));
    addition(a: number, b: number) {
        element(by.model("first")).sendKeys(a);
        //element(by.model("operator")).element(by.("+")).click();
        element(by.model("second")).sendKeys(b);
        element(by.model("gobutton")).click();
    };

    subtraction(a: number, b: number) {
        element(by.model("first")).sendKeys(a);
        //element(by.model("operator")).element(by.cssContainingText("-")).click();
        element(by.model("second")).sendKeys(b);
        element(by.model("gobutton")).click();
    };

}
const calculator = element(by.id("CalcCtrl"));
