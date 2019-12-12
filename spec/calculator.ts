import { browser, by, element } from 'protractor';


describe("Super Calculator", function(){

    beforeEach(function(){
        browser.get("https://juliemr.github.io/protractor-demo/",30000);     
        
    })

    it("Check URL Open and Title is Super Calculator", function(){
        browser.getTitle().then(function(title){
            expect(title).toBe("Super Calculator");
            console.log("Browser title is "+title);
        });
        browser.sleep(2000);
    })


    it("Add function test: 12 + 3 = 15",function(){
        element(by.model("first")).sendKeys("12");
        element(by.model("second")).sendKeys("3");
        element(by.id("gobutton")).click();
        browser.sleep(3000);
        var result = element(by.tagName("h2")).getText();

       // element(by.className("ng-binding")).isPresent().then(function(result){
            //expect(result).toEqual("15");
            console.log("12 + 3 = " + result);
      //  });
    })

})