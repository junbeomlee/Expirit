angular.module('expirit.services').service('User',User)

User.$inject=['ProgramManager'];
/*
( email varchar primary key NOT NULL, \
	name varchar, \
	tel varchar, \
	userGender varchar, \
	userType varchar, \
	height integer, \
	weight integer, \
	purpose varchar, \
	userAge integer, \
	userLevel varchar, \
	joinType varchar, \
	weightPurpose varchar)");
	*/
function User(ProgramManager){

	this.email="";
	this.userName="";
	this.userTel="";
	this.userGender="";
	this.userType="";
	this.height=0;
	this.weight=0;
	this.purpose="";
	this.userAge=0;
	this.userLevel="";
	this.joinType="";
	this.weightPurpose="";
	this.ProgramManager=ProgramManager;

	this.fromJson = function(user){
		for(var propertyName in user) {
			// propertyName is what you want
			// you can get the value like this: myObject[propertyName]
			if(propertyName in this){
				if(propertyName == 'programs'){

					var programList = [];
	        var resData = user[programs];
	        angular.forEach(resData, function(program, index){
	          var exerciseJson = program.exercise;
	          var exercise = Exercise.fromJson(exerciseJson);
	          var program = new Program(exercise,program.day);
	          programList.push(program);
	          //ProgramManager.add(program);
	          //console.log(ProgramManager);
	        });
	        this.ProgramManager.set(programList);
					break;
				}
				this[propertyName]=user[propertyName];
			}
		}
	};
	// this.getOne = function(id){
	//   return DBConnector.query();
	// }
	//console.log($cordovaSQLite);
	//var db = $cordovaSQLite.openDB({ name: 'expirit.db' });
	//$cordovaSQLite.execute(db,'CREATE TABLE IF NOT EXISTS CREATE TABLE "tb_exercise" ("EX_NO" varchar(6) NOT NULL,`EX_NM` varchar(100) NOT NULL,`REST_SECOND` int(11) DEFAULT NULL,`METHOD` longtext,`EX_IMAGE_NM` varchar(100) DEFAULT NULL,`EX_URL` varchar(100) DEFAULT NULL,`EX_IMG_SYS_NM` varchar(200) DEFAULT NULL,`DEL_YN` varchar(1) DEFAULT NULL,`CRE_DT` datetime DEFAULT NULL,`CRE_ID` varchar(50) DEFAULT NULL,`UPD_DT` datetime DEFAULT NULL,`UPD_ID` varchar(50) DEFAULT NULL,`EX_IMG_PATH` varchar(200) DEFAULT NULL,`EX_DEFAULT_SET` int(11) DEFAULT NULL,`EX_ETC` varchar(100) DEFAULT NULL,`EX_DESC` text,`EX_LEVEL` int(11) DEFAULT NULL,`EX_DEPTH2` varchar(6) DEFAULT NULL,`EX_DEPTH3` varchar(6) DEFAULT NULL,`EX_DEPTH1` varchar(6) DEFAULT NULL,`EX_TYPE` varchar(255) DEFAULT NULL,PRIMARY KEY (`EX_NO`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;');
}
