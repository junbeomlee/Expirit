angular.module('expirit.services').service('ProgramService',ProgramService);

ProgramService.$inject = ['UserApi','User','Program','Exercise','ProgramManager','HistoryApi','ExerciseApi','$rootScope','DBConnector','ExerciseDao'];

function ProgramService(UserApi,User,Program,Exercise,ProgramManager,HistoryApi,ExerciseApi,$rootScope,DBConnector,ExerciseDao){

  this.apiGetProgramList = function(){
    UserApi.getProgramList().then(function(response){
      //console.log(response.status);
      if(response.status == 200){
        //console.log(response);
        //ProgramManager.clear();
        var programList = [];
        var resData = response.data.plain()[0];
        angular.forEach(resData, function(program, index){
          var exerciseJson = program.exercise;
          var exercise = Exercise.fromJson(exerciseJson);
          var program = new Program(exercise,program.day);
          programList.push(program);
          //ProgramManager.add(program);
          //console.log(ProgramManager);
        });
        ProgramManager.set(programList);
        console.log(ProgramManager);
        // 이벤트 발생 "명칭",데이터
        $rootScope.$broadcast('changeProgramManagerEvent',ProgramManager);
      }
    });
  }


  /*
  * day에 해당하는 프로그램 리스트 불러오기
  */
  this.getProgramListByDay = function (day){
    return ProgramManager.getListByDay(day);
  };

  this.deleteProgram = function (exNo){
    UserApi.deleteProgram(exNo).then(function(response){
      console.log(response.status);
      if(response.status==200){
        ProgramManager.delete(exNo);

        // 이벤트 발생
        $rootScope.$broadcast('changeProgramManagerEvent',ProgramManager);
      }
    })

    //});
  };

}
