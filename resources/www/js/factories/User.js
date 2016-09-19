angular.module('expirit.factories').factory('User',User)
User.$inject = ['Program'];
function User(){
  var User = function(email, userName, userPassword, weight, weightPurpose, userBirthday, userGender, userTel, userType, userLevel, exPrefer, exDay, point, validDate){
    this.email=email;
    this.userName=userName;
    this.userPassword=userPassword;
    this.weight=weight;
    this.weightPurpose=weightPurpose;
    this.userBirthday=userBirthday;//생년월일 현재 데이터베이스에 나이로 되어있음
    this.userGender=userGender;
    this.userTel=userTel;
    this.userType=userType;
    this.userLevel=userLevel;
    this.point=point;
    this.validDate=validDate;
    this.exPrefer=exPrefer; //데이터 테이블에는 없는 정보임. 유저가 어떤 운동을 선호하는지 저장.
    this.exDay=exDay; //데이터 테이블에는 없는 정보임. 어떤 요일에 운동을 하는지 저장.
  }

  Exercise.fromJson = function(obj){
    //var obj = JSON.parse(json);
    return new User(obj.email,obj.userName,obj.userPassword,obj.weight,obj.weightPurpose,obj.userBirthday,obj.userGender,obj.userTel,obj.userType,obj.userLevel,obj.exPrefer,obj.exDay,obj.point,obj.validDate);
  };

  Exercise.prototype={
    getEmail: function(){
      return this.email;
    },
    getUserName: function(){
      return this.userName;
    },
    getWeight : function(){
      return this.weight;
    },
    getUserGender : function(){
      return this.userGender;
    },
    getUserLevel : function(){
    	return this.userLevel;
    },
    getExPrefer : function(){
    	return this.exPrefer;
    },
    getExDay : function(){
    	return this.exDay;
    }
  };
  return User;
}
