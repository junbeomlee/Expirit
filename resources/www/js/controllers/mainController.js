var trueObjectToList = function(object){
  var output=[];
  for(var key in object){
    if(object[key]==true)
      output.push(key);
  }
  return output;
}

var trueObjectToValue = function(object){
  for(var key in object){
    if(object[key]==true){
      return key;
    }
  }
}

angular.module('expirit.controllers')
.controller('mainController', function($scope,$rootScope,MainService,$timeout,HomeService) {

	$scope.userName="이남훈";
	$scope.userWeight="50";
	$scope.title=""
	$scope.templateValue=1;
	$scope.templatePrefix='page';
	$scope.exName="데드리프트";
	$scope.exSet="1";
	$scope.oneRep="80";
	$scope.recordVal="070060040";
	$scope.exFreq="0";//어플을 사용하면서총 운동을 한 횟수
	//$scope.exName=MainService.exName; 운동 받아오는 부분
	console.log(HomeService.exName);
	$scope.exSet="1";//현재 세트 수

	$scope.exAvg="50"

	$scope.exRoutine = {
		one_weight:50,
		one_rep:10,
		two_weight:0,
		two_rep:10,
		three_weight:0,
		three_rep:10,
		four_weight:0,
		four_rep:10,
		five_weight:0,
		five_rep:10,
	};



/*
	//운동 회차를 기준으로 프로그램을 세팅하는 함수.
	$scope.setProgram = function(){
		if($scope.exFreq==1){
			$scope.exRoutine.one_weight=

		}else if($scope.exFreq==2){

		}else if($scope.edFreq>2){

		}
	}

	//몸무게를 통해 초기 운동 무게를 받아오는 함수.
	/*서비스에 작성 해야함
	$scope.getDefault = function($scope.userWeight){

	}
*/



	//뒤로가기 버튼 유무
	$scope.backButton=function(){
		if($scope.templateValue==2){
			return false;
		}else if($scope.templateValue==3){
			return false;
		}else{
			return true;
		}
	}


	//뒤로가기 버튼 페이지 전환
	$scope.backpage=function(){
		if($scope.templateValue==1){
			console.log("Sdf");
			location.href="#/tab/home";
		}else if($scope.templateValue==5){
			console.log("이남훈");
			$scope.templateValue=1;
		}else if($scope.templateValue==2){
			$scope.templateValue=5;
			$scope.exSet=1;
		}else if($scope.templateValue==4){
			$scope.templateValue=2;
			$scope.exSet=5;
		}else if($scope.templateValue==3){
			$scope.exSet--;
			$scope.templateValue=2;
		}
	}

	//page1 버튼 컨트롤

	$scope.page1_button=function(){
		if($scope.exFreq==0){
			$scope.templateValue=5;
		}else{
			$scope.templateValue=2;
		}
	}

	//page2 버튼 컨트롤
	$scope.page2_button=function(){
		if($scope.exSet==5){
			$scope.exSet=1;
			$scope.templateValue=4;

		}else{
			$scope.exSet++;
			$scope.templateValue=3;
			$scope.start();
		}
	}


	//운동 횟수 업다운 입력창
	$scope.repUp=function(){
		if($scope.exSet==1){
			if($scope.exRoutine.one_rep<1){
				$scope.exRoutine=0;
			}else{
				$scope.exRoutine.one_rep++;
			}
		}else if($scope.exSet==2){
			$scope.exRoutine.two_rep++;
		}else if($scope.exSet==3){
			$scope.exRoutine.three_rep++;
		}else if($scope.exSet==4){
			$scope.exRoutine.four_rep++;
		}else if($scope.exSet==5){
			$scope.exRoutine.five_rep++;
		}
	}
	$scope.repDown=function(){
		console.log("sdf");
		if($scope.exSet==1){
			if($scope.exRoutine.one_rep<1){
				$scope.exRoutine.one_rep=0;
			}else{
				$scope.exRoutine.one_rep--;
			}

		}else if($scope.exSet==2){
			$scope.exRoutine.two_rep--;
		}else if($scope.exSet==3){
			$scope.exRoutine.three_rep--;
		}else if($scope.exSet==4){
			$scope.exRoutine.four_rep--;
		}else if($scope.exSet==5){
			$scope.exRoutine.five_rep--;
		}
	}

	//몸무게 업다운 입력창
	$scope.weightUp=function(){
		$scope.exRoutine.three_weight++;
	}
	$scope.weightDown=function(){
		$scope.exRoutine.three_weight--;
	}
	//프로세스 바
	$scope.processBar=function(){
		if($scope.templateValue==5){
			return false;
		}else if($scope.templateValue==1){
			return false;
		}else if($scope.templateValue==4){
			return false;

		}else{
			return true;
		}
	}
	$scope.processUp=function(){
		$scope.exSet++;
		$scope.templateValue=2;
	}
	$scope.processDown=function(){
		$scope.exSet--;
		$scope.templateValue=2;
	}


/*
	$scope.up=function(set){
		var setFreq=set+"_freq";
		exRoutine.(setFreq)=exRoutine.(setFreq)+1;
	};

	$scope.down=function(set){
		var setFreq=set+"_freq";
		exRoutine.(setFreq)=exRoutine.(setFreq)-1;
	};

*/
  $scope.end = function(){
    alert("데이터를 보냅니다.");
    var update={
      age : "",
      weight : $scope.weight,
      purpose : trueObjectToValue($scope.checkboxPurpose),
    }
    console.log(trueObjectToList($scope.checkboxDay));
    QuestService.apiUpdateUser();
    location.href="#/tab/home";
  }



	$scope.elemId="set";
	console.log($scope.elemId);
	$scope.y =document.getElementById($scope.elemId);

	$scope.myTimerFixed=50;
	$scope.myTimer=50;
	$scope.radius = 300;

	var myTimerVariable;
	$scope.numberPickerObject = {
		inputValue: 0, //Optional
		minValue: 0,
		maxValue: 15,
		precision: 3,  //Optional
		decimalStep: 0.25,  //Optional
		format: "DECIMAL",  //Optional - "WHOLE" or "DECIMAL"
		unit: "",  //Optional - "m", "kg", "℃" or whatever you want
		titleLabel: 'Number Picker',  //Optional
		setLabel: 'Set',  //Optional
		closeLabel: 'Close',  //Optional
		setButtonType: 'button-positive',  //Optional
		closeButtonType: 'button-stable',  //Optional
		callback: function (val) {    //Mandatory
			timePickerCallback(val);
		}
	};

	$scope.myCustomTimer=function(){
		$scope.myTimer--;
		if($scope.myTimer == 0){
			$timeout.cancel(myTimerVariable);
			$scope.complete(false);
			return false;
		}
		myTimerVariable = $timeout($scope.myCustomTimer, 1000);
	}
	$scope.start=function(){
		myTimerVariable = $timeout($scope.myCustomTimer, 1000);
	}
	$scope.stop=function(){
		$timeout.cancel(myTimerVariable);
	}
    $scope.getStyle = function(){
                var transform =  'translateY(-50%) translateX(-50%)';

                return {
                    'top':  '50%',
                    'bottom': 'auto',
                    'left': '50%',
                    'transform': transform,
                    '-moz-transform': transform,
                    '-webkit-transform': transform,
                    'font-size': $scope.radius/3.5 + 'px'
                };
            };


	/*차트 부분*/
	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
})
