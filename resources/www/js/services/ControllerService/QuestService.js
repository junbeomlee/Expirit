angular.module('expirit.services').service('QuestService',QuestService);

QuestService.$inject = ['UserApi','$rootScope','User','UserDao'];

function QuestService(UserApi,$rootScope,User,UserDao){
  this.setUp = function(updateInfo,days){
    console.log(updateInfo);
    UserApi.setUp(updateInfo,days).then(function(response){
      if(response.status==200){
        var exerciseList=[];
        var resData = response.data.plain()[0];
        //console.log("signUp succecc data:");
        //console.log(resData);
        User.fromJson(resData); //->모든 정보를 User에 저장된다
        UserDao.update(User); //-> update를 해야 한다.
        $rootScope.$broadcast('setUpSuccessEvent',"");
      }
    });
  }
}
