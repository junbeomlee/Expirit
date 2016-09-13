
var trueObjectToList = function(object){
  var output=[];
  for(var key in object){
    if(object[key]==true)
      output.push(key);
  }
  return output;
}

var trueObjectToValue = function(object){
  for(var key in object){
    if(object[key]==true){
      return key;
    }
  }
}

angular.module('expirit.controllers')
.controller('questController', function($scope,$rootScope,QuestService) {
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
  $scope.end = function(){
    alert("데이터를 보냅니다.");
    var update={
      age : "",
      weight : $scope.weight,
      purpose : trueObjectToValue($scope.checkboxPurpose),
    }
    console.log(trueObjectToList($scope.checkboxDay));
    QuestService.apiUpdateUser();
    location.href="#/tab/home";
  }
})
