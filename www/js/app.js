// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.inicio', {
      url: "/inicio",
      views: {
        'menuContent' :{
          templateUrl: "templates/inicio.html"
        }
      }
    })
    
    .state('app.perfil', {
      url: "/perfil",
      views: {
        'menuContent' :{
          templateUrl: "templates/perfil.html"
        }
      }
    })
    
    .state('app.noticias', {
      url: "/noticias",
      views: {
        'menuContent' :{
          templateUrl: "templates/noticias.html"
        }
      }
    })
    .state('app.noticias-comentarios', {
      url: "/noticias-comentarios",
      views: {
        'menuContent' :{
          templateUrl: "templates/noticias-comentarios.html"
        }
      }
    })  
    .state('app.turma', {
      url: "/turma",
      views: {
        'menuContent' :{
          templateUrl: "templates/turma.html"
        }
      }
    })
    
    .state('app.formando', {
      url: "/formando",
      views: {
        'menuContent' :{
          templateUrl: "templates/formando.html"
        }
      }
    })
    
    .state('app.contato', {
      url: "/contato",
      views: {
        'menuContent' :{
          templateUrl: "templates/contato.html"
        }
      }
    })
    
    .state('app.faq', {
      url: "/faq",
      views: {
        'menuContent' :{
          templateUrl: "templates/faq.html"
        }
      }
    })
    .state('app.faq-duvidas', {
      url: "/faq-duvidas",
      views: {
        'menuContent' :{
          templateUrl: "templates/faq-duvidas.html"
        }
      }
    })
    
    .state('app.faq-respostas', {
      url: "/faq-respostas",
      views: {
        'menuContent' :{
          templateUrl: "templates/faq-respostas.html"
        }
      }
    })      
    .state('app.contato-history', {
      url: "/contato-history",
      views: {
        'menuContent' :{
          templateUrl: "templates/contato-history.html"
        }
      }
    })    

    .state('app.contato-chat', {
      url: "/contato-chat",
      views: {
        'menuContent' :{
          templateUrl: "templates/contato-chat.html"
        }
      }
    }) 
    .state('app.financeiro', {
      url: "/financeiro",
      views: {
        'menuContent' :{
          templateUrl: "templates/financeiro.html"
        }
      }
    })
    
    .state('app.pagina', {
      url: "/pagina",
      views: {
        'menuContent' :{
          templateUrl: "templates/pagina.html"
        }
      }      
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});

