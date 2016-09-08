angular.module('expirit.controllers')
.controller('questController', function($scope,$rootScope) {
  $scope.title=""
  $scope.templateValue=1;
  $scope.templatePrefix='page';
  $scope.gender="none";
  $scope.checkboxGender = {
       male : true,
       female : false
  };
  $scope.checkboxPurpose = {
       lose : false,
       keep : false,
       gain : false,
  };
  $scope.checkboxLevel = {
      level : ""
  };
  $scope.checkboxPrefer = {
       free : false,
       machine : false
  };
  $scope.checkboxDay = {
       MON : false,
       TUE : false,
       WED : false,
       THR : false,
       FRI : false,
       SAT : false,
       SUN : false,
  };
  $scope.weight=75;
  $scope.maleCheck=false;
  $scope.femaleCheck=false;
  $scope.end = function(){
    alert("데이터를 보냅니다.");
    location.href="#/tab/home";
  }
})
