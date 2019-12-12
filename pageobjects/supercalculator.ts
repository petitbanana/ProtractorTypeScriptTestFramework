import { browser, by, element } from 'protractor';


export class superCalculator {

    header = element(by.css("body > div > div > h3"));
    result = element(by.css("ng-binding"))
    addition(a,b: number){
        element(by.id("first")).sendKeys(a);
        element(by.id("operator")).element(by.cssContainingText("+")).click();
        element(bv.id("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }

    subtraction(a,b:number){
        element(by.id("first")).sendKeys(a);
        element(by.id("operator")).element(by.cssContainingText("-")).click();
        element(bv.id("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }



}
const calculator = element(by.id("CalcCtrl"));
