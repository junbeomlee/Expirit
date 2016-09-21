angular.module('expirit.services')
.service('LoginHandler', LoginHandler);

LoginHandler.$inject=['$rootScope','UserDao','User','ProgramManager','UserApi'];

function LoginHandler($rootScope,UserDao,User,ProgramManager,UserApi){
  //사용자 정보 받아오는 서비스
  this.checkLogin = function(){
    UserDao.count().then(function(count){
      console.log(count);
      if(count['COUNT(*)']==0){//로그인창
        location.href="#/intro";
        console.log("로그인 해야되!!")
      }else{ // login해서 유저 정보 받아오기
        console.log("로그인 안 해도되!!")
        UserDao.getOne().then(function(result){
          console.log(result);
          User.fromJson(result[0]);
          console.log(User);
          location.href="#/tab/home";
        });
      }
    });
  }
}
