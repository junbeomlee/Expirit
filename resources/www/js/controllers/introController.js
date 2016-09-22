angular.module('expirit.controllers')
.controller('introController', function($scope,$rootScope,IntroService) {

  $scope.backpage=function(){
    $scope.templateValue--;
  }

  $scope.title=""
  $scope.templateValue=1;
  $scope.templatePrefix='page';
	//가입할때 쓰는 컨트롤러 - 미완성본 코딩 안함.

  $scope.user={
    id:"",
    password:""
  }

  $scope.login=function(){
    //console.log("login");
    //location.href='#/quest';
    // console.log($scope.user.id);
    // console.log($scope.user.password);
    // console.log(IntroService);
    IntroService.login($scope.user.id,$scope.user.password);
  }

  $scope.$on('loginSuccessEvent',function(event,obj){
    location.href="#/tab/home";
  });
})


.controller('intro2Controller', function($scope) {
$scope.options = {
  loop: false,
  effect: 'fade',
  speed: 500,
}

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // data.slider is the instance of Swiper
  $scope.slider = data.slider;
});

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  console.log('Slide change is beginning');
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  // note: the indexes are 0-based
  $scope.activeIndex = data.activeIndex;
  $scope.previousIndex = data.previousIndex;
});
})


/*질의사항에서 숫자 픽커를 관리하는 컨트롤러*/
