angular.module('expirit.services').service('UserDao',UserDao)

UserDao.$inject=['$cordovaSQLite','DBConnector'];

function toArray(obj)
{
  var res=[];
  for(var propertyName in obj) {
    if (typeof obj[propertyName] != 'function'){
      res.push(obj[propertyName]);
    }
  }
  return res;
}
/*
this.email="";
this.name="";
this.tel="";
this.userGender="";
this.userType="";
this.height;
this.weight;
this.purpose="";
this.userAge;
this.userLevel="";
this.joinType="";
this.weightPurpose="";

*/

function UserDao($cordovaSQLite,DBConnector){

  this.insert = function(user){
      var userlist =[];
      var arrayUser= toArray(user);
      console.log(toArray(user));
      return DBConnector.query("INSERT INTO user (email,userName,tel,userGender,userType,height,weight,purpose,userAge,userLevel,joinType,weightPurpose) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",arrayUser);
  }
  this.update = function(user){
    return DBConnector.query("UPDATE user \
                              SET \
                              userName='"+user.userName+"' ,\
                              tel='"+user.tel+"' ,\
                              userGender='"+user.userGender+"' ,\
                              userType='"+user.userType+"' ,\
                              height='"+user.height+"' ,\
                              weight='"+user.weight+"' ,\
                              purpose='"+user.purpose+"' ,\
                              userAge='"+user.userAge+"' ,\
                              userLevel='"+user.userLevel+"' ,\
                              joinType='"+user.joinType+"' ,\
                              weightPurpose='"+user.weightPurpose+"' \
                              WHERE email='"+user.email+"'");
  }

  //남훈 작성 부분.
  //사용자 정보 수정
  //this.update



  // this.getOne = function(id){
  //   return DBConnector.query();
  // }
  //console.log($cordovaSQLite);
  //var db = $cordovaSQLite.openDB({ name: 'expirit.db' });
  //$cordovaSQLite.execute(db,'CREATE TABLE IF NOT EXISTS CREATE TABLE "tb_exercise" ("EX_NO" varchar(6) NOT NULL,`EX_NM` varchar(100) NOT NULL,`REST_SECOND` int(11) DEFAULT NULL,`METHOD` longtext,`EX_IMAGE_NM` varchar(100) DEFAULT NULL,`EX_URL` varchar(100) DEFAULT NULL,`EX_IMG_SYS_NM` varchar(200) DEFAULT NULL,`DEL_YN` varchar(1) DEFAULT NULL,`CRE_DT` datetime DEFAULT NULL,`CRE_ID` varchar(50) DEFAULT NULL,`UPD_DT` datetime DEFAULT NULL,`UPD_ID` varchar(50) DEFAULT NULL,`EX_IMG_PATH` varchar(200) DEFAULT NULL,`EX_DEFAULT_SET` int(11) DEFAULT NULL,`EX_ETC` varchar(100) DEFAULT NULL,`EX_DESC` text,`EX_LEVEL` int(11) DEFAULT NULL,`EX_DEPTH2` varchar(6) DEFAULT NULL,`EX_DEPTH3` varchar(6) DEFAULT NULL,`EX_DEPTH1` varchar(6) DEFAULT NULL,`EX_TYPE` varchar(255) DEFAULT NULL,PRIMARY KEY (`EX_NO`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;');
}
