describe("A initial project", function(){

    beforeEach(function(){
        browser().navigateTo('/');
    });

    it("should include angularjs",function(){
        expect(element('script').attr('src')).toBe('lib/angular/angular.js');
    });

    it("should include cube styles",function(){
        expect(element('link').attr('href')).toBe('styles/cube.css');
    });

    it("should contain cube html-elements",function(){
        expect(element('div.perspective').html()).toBeDefined();
        expect(element('div.perspective > .cube').html()).toBeDefined();
        expect(repeater('div.perspective > .cube >').count()).toBe(6);
        expect(element('div.perspective > .cube > .left').html()).toBeDefined();
        expect(element('div.perspective > .cube > .right').html()).toBeDefined();
        expect(element('div.perspective > .cube > .top').html()).toBeDefined();
        expect(element('div.perspective > .cube > .bottom').html()).toBeDefined();
        expect(element('div.perspective > .cube > .front').html()).toBeDefined();
        expect(element('div.perspective > .cube > .back').html()).toBeDefined();
    });

});