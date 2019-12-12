import { browser, by, element } from 'protractor';


describe("Super Calculator", function(){

    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/",30000);     
        
    })

    it("Open URL", function(){
        browser.getTitle().then(function(title){
            expect(title).toContain("Super Xalculator");
            console.log(title);
        });
        browser.sleep(2000);
    })


    it("Add function test",function(){
        element(by.model("first")).sendKeys("12");
        element(by.model("second")).sendKeys("3");
        element(by.id("gobutton")).click();
        
        browser.sleep(2000);
    })

})