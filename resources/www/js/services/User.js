angular.module('expirit.factories').factory('User',User)
Program.$inject = [];
function User(){
	var userEmail = 'none';
	var userName = 'none';
	var userPassword = 'none';
	var userPassword2='none';
	var userBirthday = 'none';
	var userGender = 'none';
	var userWeight=50;
	var userWeightPurpose='none';
	var userExPrefer='007001';
	var userExLevel='none';
	var userExDay='none';
	var userTest1='Y';//테스트1 티폴트로 통과
	var userTest2='Y';//테스트2 디폴트로 통과
	var userExDay_MON='';
	var userExDay_TUE='';
	var userExDay_WED='';
	var userExDay_THUR='';
	var userExDay_FRI='';
	var userExDay_SAT='';
	var userExDay_SUN='';

	var User = function (email, name, password, birthday, gender, weight, weightPurpose, exPrefer, exLevel, exDay, test1, test2){
		this.userEmail=email;
		this.userName=name;
		this.userPassword=password;
		this.userBirthday=birthday;
		this.userGender=gender;
		this.userWeight=weight;
		this.userWeightPurpose=weightPurpose;
		this.userExPrefer=exPrefer;
		this.userExLevel=exLevel;
		this.userExDay=exDay;
		this.userTest1=test1;
		this.userTest2=test2;
	};

	User.fromJson=function(json){
		var obj = JSON.parse(json);
	};
	User.prototype={
		getUserEmail:function(){
			return this.userEmail;
		},
		getUserExDay:function(){
			return this.userExDay;
		}
	};

	return User;
};

