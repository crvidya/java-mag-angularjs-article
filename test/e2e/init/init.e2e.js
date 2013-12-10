describe("A initial project", function(){

    beforeEach(function(){
        browser().navigateTo('/');
    });

    it("should contain angularjs",function(){
        expect(element('script').attr('src')).toBe('lib/angular/angular.js');
    });

    it("should bind input and span to $scope.text",function(){
        expect(element("span").html()).toBe('');
        input('text').enter("Hallo");
        expect(element("span").html()).toBe('Hallo');
    });

});