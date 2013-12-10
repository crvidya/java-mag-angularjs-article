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
        expect(element('div.wrap').html()).toBeDefined();
        expect(element('div.wrap > .cube').html()).toBeDefined();
        expect(repeater('div.wrap > .cube >').count()).toBe(6);
        expect(element('div.wrap > .cube > .left').html()).toBeDefined();
        expect(element('div.wrap > .cube > .right').html()).toBeDefined();
        expect(element('div.wrap > .cube > .top').html()).toBeDefined();
        expect(element('div.wrap > .cube > .bottom').html()).toBeDefined();
        expect(element('div.wrap > .cube > .front').html()).toBeDefined();
        expect(element('div.wrap > .cube > .back').html()).toBeDefined();
    });

});