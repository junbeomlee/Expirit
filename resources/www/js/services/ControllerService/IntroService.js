angular.module('expirit.services')
.service('IntroService', IntroService);

IntroService.$inject=['$rootScope','UserApi','SessionService','User','Exercise','Program','ProgramManager'];

function IntroService($rootScope,UserApi,SessionService,User,Exercise,Program,ProgramManager){
  //사용자 정보 받아오는 서비스
  this.login = function(id,password){
    UserApi.login(id,password).then(function(response){
      if(response.status==200){

        var resData = response.data.plain()[0];
        User.fromJson(resData); //->모든 정보를 User에 저장된다
        var programData = resData.programs;
        ProgramManager.set(convert(programData,Exercise,Program));
        SessionService.setUserAuthenticated(true);
        $rootScope.$broadcast('loginSuccessEvent',"");
        $rootScope.$broadcast('changeProgramManagerEvent',ProgramManager);
        $rootScope.$broadcast('changeUserEvent',User);
      }
    })
  };
}
