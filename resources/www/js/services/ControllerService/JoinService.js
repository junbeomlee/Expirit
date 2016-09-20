angular.module('expirit.services').service('JoinService',JoinService);

JoinService.$inject = ['UserApi','Exercise','$rootScope','User','UserDao'];

function JoinService(UserApi,Exercise,$rootScope,User,UserDao){

 /*
  * day에 해당하는 프로그램 리스트 불러오기
  */
  this.apiGetHistoryList = function (exNo){
    HistoryApi.getAll().then(function(response){
      console.log(response.status);
      if(response.status==200){
        var exerciseList=[];
        var resData = response.data.plain()[0];
        angular.forEach(resData, function(histories, index){
          var exerciseJson = histories.exercise;
          var exercise = Exercise.fromJson(exerciseJson);
          exerciseList.push(exercise);
          //ProgramManager.add(program);
          //console.log(ProgramManager);
        });
        $rootScope.$broadcast('changeHistoryEvent',exerciseList);
        //console.log(response);
        // ProgramManager.delete(exNo);
        //
        // // 이벤트 발생
        // $rootScope.$broadcast('changeProgramManagerEvent',ProgramManager);
      }
    });

    //});
  };

  this.signUp = function (user){
    console.log("signUp joinService call");
    //api call -> 성공시 -> db update
    UserApi.signUp(user).then(function(response){
      if(response.status==200){
        var exerciseList=[];
        var resData = response.data.plain()[0];
        console.log("signUp succecc data:");
        console.log(resData);
        User.fromJson(resData); //->모든 정보를 User에 저장된다
        UserDao.insert(User);
        $rootScope.$broadcast('signUpSuccessEvent',"");
      }
    });
  }

  /*var stringTest=' {\
    "email": "asd",\
    "userName": "이남훈",\
    "userTel": "010-4299-2920",\
    "userGender": "10011",\
    "userType": "003001",\
    "height": 181,\
    "weight": 80,\
    "purpose": "",\
    "userAge": 25,\
    "withdrawYN": null,\
    "userLevel": "",\
    "joinType": "002002",\
    "weightPurpose": "",\
    "programs": [],\
    "records": []}';

  User.fromJson(JSON.parse(stringTest));
  UserDao.insert(User);
  UserDao.update(User);
  console.log(User);*/
  console.log(User);
}
