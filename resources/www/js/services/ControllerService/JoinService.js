angular.module('expirit.services').service('JoinService',JoinService);

JoinService.$inject = ['UserApi','Exercise','$rootScope','User','UserDao','ProgramManager','Program'];

function JoinService(UserApi,Exercise,$rootScope,User,UserDao,ProgramManager,Program){

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
  };

  this.signUp = function (user){
    console.log("signUp joinService call");
    //api call -> 성공시 -> db update
    UserApi.signUp(user).then(function(response){
      if(response.status==200){
        var exerciseList=[];
        var resData = response.data.plain()[0];
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
    "programs":[\
      {\
        "email": "frontalnh@naver.com",\
        "exercise": {\
          "exNo": "41",\
          "exName": "벤치프레스",\
          "restSecond": 50,\
          "method": "1. 벤치에 누워 어깨 넓이보다 넓게 그립을 잡는다.<BR>2. 기구에 올려있는 바벨을 들어 팔을 편 상태로 가슴 위에 위치시킨다.<BR>3. 가슴이 앞으로 말리지 않게 가슴을 펴주고 어깨의 양끝 지점과 양 쪽 귀가 최대한 멀어지게 만들어 가슴을 편다.<BR>4. 팔꿈치를 몸 쪽으로 당겨준다는 생각을 하며 바벨이 가슴에 닿을 때 까지 내린다.<BR>5. 다시 바벨을 처음 위치로 밀어낸다.",\
          "exImage": null,\
          "exUrl": null,\
          "exImgSysName": null,\
          "exDefaultSet": null,\
          "exImgPath": null,\
          "exEtc": "NULL",\
          "exDesc": "간편한운동입니다.",\
          "exLevel": "3",\
          "exDepth1": "005004",\
          "exDepth2": "006003",\
          "exDepth3": "007001"\
        },\
        "day": "WED"\
      },\
      {\
        "email": "frontalnh@naver.com",\
        "exercise": {\
          "exNo": "41",\
          "exName": "벤치프레스",\
          "restSecond": 50,\
          "method": "1. 벤치에 누워 어깨 넓이보다 넓게 그립을 잡는다.<BR>2. 기구에 올려있는 바벨을 들어 팔을 편 상태로 가슴 위에 위치시킨다.<BR>3. 가슴이 앞으로 말리지 않게 가슴을 펴주고 어깨의 양끝 지점과 양 쪽 귀가 최대한 멀어지게 만들어 가슴을 편다.<BR>4. 팔꿈치를 몸 쪽으로 당겨준다는 생각을 하며 바벨이 가슴에 닿을 때 까지 내린다.<BR>5. 다시 바벨을 처음 위치로 밀어낸다.",\
          "exImage": null,\
          "exUrl": null,\
          "exImgSysName": null,\
          "exDefaultSet": null,\
          "exImgPath": null,\
          "exEtc": "NULL",\
          "exDesc": "간편한운동입니다.",\
          "exLevel": "3",\
          "exDepth1": "005004",\
          "exDepth2": "006003",\
          "exDepth3": "007001"\
        },\
        "day": "WED"\
      },\
      {\
        "email": "frontalnh@naver.com",\
        "exercise": {\
          "exNo": "41",\
          "exName": "벤치프레스",\
          "restSecond": 50,\
          "method": "1. 벤치에 누워 어깨 넓이보다 넓게 그립을 잡는다.<BR>2. 기구에 올려있는 바벨을 들어 팔을 편 상태로 가슴 위에 위치시킨다.<BR>3. 가슴이 앞으로 말리지 않게 가슴을 펴주고 어깨의 양끝 지점과 양 쪽 귀가 최대한 멀어지게 만들어 가슴을 편다.<BR>4. 팔꿈치를 몸 쪽으로 당겨준다는 생각을 하며 바벨이 가슴에 닿을 때 까지 내린다.<BR>5. 다시 바벨을 처음 위치로 밀어낸다.",\
          "exImage": null,\
          "exUrl": null,\
          "exImgSysName": null,\
          "exDefaultSet": null,\
          "exImgPath": null,\
          "exEtc": "NULL",\
          "exDesc": "간편한운동입니다.",\
          "exLevel": "3",\
          "exDepth1": "005004",\
          "exDepth2": "006003",\
          "exDepth3": "007001"\
        },\
        "day": "WED"\
      }\
    ],\
    "records": []}';
    var user= JSON.parse(stringTest);
    var resData = user.programs;
    ProgramManager.set(convert(resData,Exercise,Program));
    console.log(ProgramManager.programList[0]);
    //console.log(ProgramManager);
    //User.fromJson(JSON.parse(stringTest));
    //UserDao.insert(User);
    //UserDao.update(User);
    // console.log(User);
    // console.log(User);*/
  }
