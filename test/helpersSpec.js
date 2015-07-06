describe('Test suite', function(){
  var $rootScope,
      $scope,
      parisApiFactory;


  beforeEach(function(){
    module('homework');
  });

  describe('for helper', function(){
    it('should test the helper', function(){
      expect(Tools.helpers.htmlDecode('La Belle et la B&ecirc;te')).toBe('La Belle et la Bête');
    })
  })
});