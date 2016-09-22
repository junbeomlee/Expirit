angular.module('expirit.controllers')

.controller('homeController', function($scope,CONFIG,$rootScope,FacebookLogin,DropDownList,HomeService,HistoryApi) {
  $scope.appName=CONFIG.APP_NAME;
  $scope.userName=User.userName;

  var dropDownList = new DropDownList();

  function getTodayLabel(){
    var week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
    var today = new Date().getDay();
    var todayLabel = week[today];
    return todayLabel;
  }

  $rootScope.$on('changeUserEvent',function(event,User){
    $scope.userName=User.userName;
  });

  $rootScope.$on('changeProgramManagerEvent',function(event,programManager){
    var programListByDay=programManager.getListByDay(getTodayLabel());
    $scope.programs=dropDownList.fromProgramList(programListByDay);
  });

  /*
    test code
  */
  /*var history={
    exNo: 78,
    set : 12,
    exWeight : 123456123456123
  }
  HistoryApi.add(history).then(function(result){
    console.log(result);
  });*/
})
