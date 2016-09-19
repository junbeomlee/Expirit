angular.module('expirit.controllers')
.controller('profileController', function($scope,CONFIG,Chats) {
  $scope.appName=CONFIG.APP_NAME;
	
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
