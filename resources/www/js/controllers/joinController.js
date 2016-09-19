angular.module('expirit.controllers')
.controller('joinController', function($scope,JoinService) {
  $scope.user={
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  }

  $scope.backpage=function(){
    location.href="#/intro";
  }

  $scope.signUp = function(){
    console.log($scope.user);
    JoinService.signUp($scope.user);
  }
})
