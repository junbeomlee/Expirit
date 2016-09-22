angular.module('expirit.services').service('HomeService',HomeService);

HomeService.$inject = [];

function HomeService(){
	var exName='';
	this.setExName=function(exName){
		this.exName=exName;
		console.log(this.exName);
	}
	this.getExName=function(){
		console.log("get ex name:"+this.exName);
		return this.exName;
	}
}
