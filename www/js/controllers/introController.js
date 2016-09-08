angular.module('expirit.controllers')

.service('QuestService',function($rootScope){
  this.setBirth = function(birth){
	$rootScope.birth=birth;
	console.log($rootScope.birth);
  };
  
  this.setSex = function(sex){
	$rootScope.sex=sex;
	console.log($rootScope.sex);
  };
  this.getSex=function(){
	  return $rootScope.sex;
  }
  
  this.setWeight= function(weight){
	$rootScope.weight=weight;
	console.log($rootScope.weight);
  };
  this.setPurpose= function(purpose){
	$rootScope.purpose=purpose;
	console.log($rootScope.purpose);
  };
	this.setPrefer= function(prefer){
		$rootScope.prefer=prefer;
		console.log($rootScope.prefer);
	};
})

.controller('introController', function($scope,ionicDatePicker,QuestService,UserApi,User) {
	console.log("wait 3s.");
	/*
	setTimeout(function() {
		window.location.href="http://localhost:8100/#/intro2";
	}, 3000);
*/

	/*운동 요일 체크 단일선택 컨트롤러*/
	$scope.introday_mon = function(){
		console.log("월");
	}

	$scope.introday_tue = function(){
			console.log("화");
		if(document.getElementById("intro_tue").checked==true){
			document.getElementById("intro_tue").checked=true;
		}else{
			document.getElementById("intro_tue").checked=true;
		};
		document.getElementById("intro_mon").checked = false;
		document.getElementById("intro_wed").checked = false;
		document.getElementById("intro_thur").checked = false;
		document.getElementById("intro_fri").checked = false;
		document.getElementById("intro_sat").checked = false;
		document.getElementById("intro_sun").checked = false;
	}

	$scope.introday_wed = function(){
			console.log("SDF");
		if(document.getElementById("intro_wed").checked==true){
			document.getElementById("intro_wed").checked=true;
		}else{
			document.getElementById("intro_wed").checked=true;
		};
		document.getElementById("intro_tue").checked = false;
		document.getElementById("intro_mon").checked = false;
		document.getElementById("intro_thur").checked = false;
		document.getElementById("intro_fri").checked = false;
		document.getElementById("intro_sat").checked = false;
		document.getElementById("intro_sun").checked = false;
	}

	$scope.introday_thur = function(){
			console.log("목");
		if(document.getElementById("intro_thur").checked==true){
			document.getElementById("intro_thur").checked=true;
		}else{
			document.getElementById("intro_thur").checked=true;
		};
		document.getElementById("intro_tue").checked = false;
		document.getElementById("intro_wed").checked = false;
		document.getElementById("intro_mon").checked = false;
		document.getElementById("intro_fri").checked = false;
		document.getElementById("intro_sat").checked = false;
		document.getElementById("intro_sun").checked = false;
	}

	$scope.introday_fri = function(){
			console.log("SDF");
		if(document.getElementById("intro_fri").checked==true){
			document.getElementById("intro_fri").checked=true;
		}else{
			document.getElementById("intro_fri").checked=true;
		};
		document.getElementById("intro_tue").checked = false;
		document.getElementById("intro_wed").checked = false;
		document.getElementById("intro_thur").checked = false;
		document.getElementById("intro_mon").checked = false;
		document.getElementById("intro_sat").checked = false;
		document.getElementById("intro_sun").checked = false;
	}

	$scope.introday_sat = function(){
		if(document.getElementById("intro_sat").checked==true){
			document.getElementById("intro_sat").checked=true;
		}else{
			document.getElementById("intro_sat").checked=true;
		};
		document.getElementById("intro_tue").checked = false;
		document.getElementById("intro_wed").checked = false;
		document.getElementById("intro_thur").checked = false;
		document.getElementById("intro_fri").checked = false;
		document.getElementById("intro_mon").checked = false;
		document.getElementById("intro_sun").checked = false;
	}

	$scope.introday_sun = function(){
			console.log("SDF");
		if(document.getElementById("intro_sat").checked==true){
			document.getElementById("intro_sat").checked=true;
		}else{
			document.getElementById("intro_sat").checked=true;
		};
		document.getElementById("intro_tue").checked = false;
		document.getElementById("intro_wed").checked = false;
		document.getElementById("intro_thur").checked = false;
		document.getElementById("intro_fri").checked = false;
		document.getElementById("intro_sat").checked = false;
		document.getElementById("intro_mon").checked = false;
	}


	//데이트 피커 관리하는 컨트롤러 부분
	$scope.userBirthday = new Date();
	$scope.minDate = new Date(2105, 6, 1);
	$scope.maxDate = new Date(2015, 6, 31);
    var ipObj1 = {
		callback: function (val) {  //Mandatory
			console.log('Return value from the datepicker popup is : ' + val, new Date(val));
			$scope.userBirthday=new Date(val);
		},
		disabledDates: [            //Optional
		new Date(2016, 2, 16),
		new Date(2015, 3, 16),
		new Date(2015, 4, 16),
		new Date(2015, 5, 16),
		new Date('Wednesday, August 12, 2015'),
		new Date("08-16-2016"),
		new Date(1439676000000)
		],
		from: new Date(1920, 1, 1), //Optional
		to: new Date(2016, 10, 30), //Optional
		inputDate: new Date(),      //Optional
		mondayFirst: true,          //Optional
		//disableWeekdays: ,       //Optional
		closeOnSelect: false,       //Optional
		templateType: 'modal'       //Optional
    };

    $scope.openDatePicker = function(){
		ionicDatePicker.openDatePicker(ipObj1);
    };

	$scope.next = function(){
		QuestService.setBirth($scope.userBirthday);
		location.href="#/quest3";
	}

	//넘버피커 관리하는 컨트롤러 부분 몸무게 구하는데 쓰임
	$scope.userWeight=50;
	$scope.up = function(){
      $scope.userWeight++;
    };
	$scope.down = function(){
      $scope.userWeight--;
    };
	$scope.next = function(){
		QuestService.setWeight($scope.userWeight);
		location.href="#/quest5";
	}


	//퀘스트 부분 컨트롤러
	$scope.lose_checked = function(){
		if(document.getElementById("lose").checked==true){
			$scope.purpose="lose";
			document.getElementById("lose").checked=true;
		}else{
			document.getElementById("lose").checked=false;
		};
		document.getElementById("keep").checked = false;
		document.getElementById("gain").checked = false;
	}

	$scope.keep_checked = function(){
		if(document.getElementById("keep").checked==true){
			$scope.purpose="keep";
			document.getElementById("keep").checked=true;
		}else{
			document.getElementById("keep").checked=false;
		};
		document.getElementById("lose").checked = false;
		document.getElementById("gain").checked = false;
	}

	$scope.gain_checked = function(){
		if(document.getElementById("gain").checked==true){
			$scope.purpose="gain";
			document.getElementById("gain").checked=true;
		}else{
			document.getElementById("gain").checked=false;
		};
		document.getElementById("lose").checked = false;
		document.getElementById("keep").checked = false;
	}


/*남자 여자 체크 단일선택 컨트롤러*/
	$scope.male_checked = function(){
			console.log("SDF");
		if(document.getElementById("male").checked==true){
			$scope.sex="male";
			document.getElementById("male").checked=true;
		}else{
			document.getElementById("male").checked=false;
		};
		document.getElementById("female").checked = false;
	}

	$scope.female_checked = function(){
		if(document.getElementById("female").checked==true){
			$scope.sex="female";
			document.getElementById("female").checked=true;
		}else{
			document.getElementById("female").checked=false;
		};
		document.getElementById("male").checked = false;
	}

	/*머신운동 및 프리웨이트 단일 체크 컨트롤러*/
	$scope.freeweight_checked = function(){
		if(document.getElementById("freeweight").checked==true){
			$scope.prefer="freeweight";
			document.getElementById("freeweight").checked=true;
		}else{
			document.getElementById("freeweight").checked=false;
		};
		document.getElementById("machine").checked = false;
	}

	$scope.machine_checked = function(){
		if(document.getElementById("machine").checked==true){
			$scope.prefer="machine";
			document.getElementById("machine").checked=true;
		}else{
			document.getElementById("machine").checked=false;
		};
		document.getElementById("freeweight").checked = false;
	}





	$scope.next = function(){
		console.log(QuestService.getSex());
		location.href="#/quest8";
	}
	$scope.next3 = function(){
		QuestService.setSex($scope.sex);
		location.href="#/quest4";
	}
	$scope.next5 = function(){
		QuestService.setPurpose($scope.purpose);
		location.href="#/quest6";
	}
	$scope.next6 = function(){
		QuestService.setPrefer($scope.prefer);
		location.href="#/quest7";
	}

	//가입할때 쓰는 컨트롤러 - 미완성본 코딩 안함.
	$scope.join = function(){
		if(userPassword==userPassword2){
			UserApi.join($scope.name,$scope.email,$scope.passwd).then(function(res){

				console.log(res.data[0].email);
			})
			location.href="#/quest1";
		}else{
			console.log("password is not equal");
		}    
	}


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



.controller('loginController', function ($scope,UserApi) {
	$scope.email='';
	$scope.passwd='';
	$scope.login = function(){
		$scope.email= document.getElementById('email').value;
		$scope.passwd= document.getElementById('passwd').value;
		UserApi.login($scope.email,$scope.passwd).then(function(res){
			console.log(res.data[0].email);
			location.href="#/quest1";
		})
	}
})
.controller('joinController', function ($scope,UserApi) {
	$scope.name='';
	$scope.email='';
	$scope.passwd='';
	$scope.passwd2='';

})


/*퀘스트 컨트롤러*/
.controller('questController', function ($scope,QuestService,UserApi) {
	

})



