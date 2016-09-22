angular.module('expirit.services')
.service('SessionService', SessionService);

SessionService.$inject=[];

function SessionService(){

    var userIsAuthenticated = false;

    this.setUserAuthenticated = function(value){
        userIsAuthenticated = value;
    };

    this.getUserAuthenticated = function(){
        return userIsAuthenticated;
    };

}
