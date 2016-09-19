angular.module('expirit.services').service('User',User)

User.$inject=[];

function User(){

	this.email="";
	this.name="";
	this.tel="";
	this.userGender="";
	this.userType="";
	this.height="";
	this.weight="";
	this.age="";
	this.level="";
	this.weightPurpose="";

	this.fromJson = function(user){
		for(var propertyName in user) {
			// propertyName is what you want
			// you can get the value like this: myObject[propertyName]
			if(propertyName in this){
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
