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

    it("should contain three input-elements of type range",function(){
        expect(element('div > input').html()).toBeDefined();
        expect(repeater('div > input[type="range"]').count()).toBe(3);
    });

    it("should contain three input-elements with bindings to x,y and z",function(){
        expect(input('x').val()).toBeDefined();
        expect(input('y').val()).toBeDefined();
        expect(input('z').val()).toBeDefined();
    });

    it("should bind x,y,z to css attribute transform of the cube",function(){
        var testTemplate = "-webkit-transform: rotateX({{x}}deg) rotateY({{y}}deg) rotate({{z}}deg)",
            testString;

        expect(element('.cube').css("-webkit-transform")).toBeDefined();

        testString = testTemplate.replace("{{x}}","").replace("{{y}}","").replace("{{z}}","");
        expect(element('.cube').attr("style")).toBe(testString);

        input('x').enter("1");
        input('y').enter("2");
        input('z').enter("3");

        testString = testTemplate.replace("{{x}}","1").replace("{{y}}","2").replace("{{z}}","3");
        expect(element('.cube').attr("style")).toBe(testString);
    });

});