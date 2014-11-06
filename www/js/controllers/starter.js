angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};
  $scope.refreshing = false;
  
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  
    // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
  
  

    // Create the password generate modal that we will use later
  $ionicModal.fromTemplateUrl('templates/generate-password.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.generatePasswordModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeGeneratePasswordModal = function() {
    $scope.generatePasswordModal.hide();
  };

  // Open the login modal
  $scope.openGeneratePassword = function() {
    $scope.generatePasswordModal.show();
  };
  
  
  
  // Perform the login action when the user submits the login form
  $scope.generatePassword = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeGeneratePasswordModal();
    }, 1000);
  };
  
  //Exit application
  $scope.exitApp = function() {
      if(navigator.app){
          navigator.app.exitApp();
      }else if(navigator.device){
          navigator.device.exitApp();
      }
  };
  
  
    //Exit application
  $scope.logout = function() {
      $scope.modal.show();
  };
  
  
  
  // Funções
  
    // Perform the login action when the user submits the login form
  $scope.atualizarFeed = function() {
    $scope.refreshing = true;
    $timeout(function() {
      $scope.refreshing = false;
    }, 5000);
  };
  
  
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
