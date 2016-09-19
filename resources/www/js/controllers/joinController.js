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
.controller('joinController', function($scope,$rootScope,QuestService,ionicDatePicker) {
  
  $scope.backpage=function(){
    location.href="#/intro";  
  }

  $scope.title=""
  $scope.templateValue=1;
  $scope.templatePrefix='page';





  $scope.join = function(){
    alert("데이터를 보냅니다.");
    var update={
      age : "",
      weight : $scope.weight,
      purpose : trueObjectToValue($scope.checkboxPurpose),
    }
    console.log(trueObjectToList($scope.checkboxDay));
    //QuestService.apiUpdateUser();
    location.href="#/tab/home";
  }
})
