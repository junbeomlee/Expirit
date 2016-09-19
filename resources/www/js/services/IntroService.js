angular.module('expirit.services')
.service('IntroService', IntroService);

IntroService.$inject=['$rootScope'];

function IntroService($rootScope){
  //사용자 정보 받아오는 서비스
  this.setUserGender = function(gender){
	$rootScope.userGender=gender;
	console.log($rootScope.userGender);
  };
  

}
