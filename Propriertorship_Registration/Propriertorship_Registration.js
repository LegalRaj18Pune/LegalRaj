'use strict';

var appView=angular.module('myApp.Propriertorship_Registration', ['ngRoute'])

appView.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Propriertorship_Registration', {
    templateUrl: 'Propriertorship_Registration/Propriertorship_Registration.html',
    controller: 'Propriertorship_RegistrationCtrl'
  });
}])

appView.controller('Propriertorship_RegistrationCtrl', function($scope) {

  $scope.isCollapsed=true;

  $scope.panelData=
  [
    {
      heading:"Easy to start",
      content:"Proprietorship is the easiest forms of business entity to start with. However, after starting up a Proprietorship, it is relatively harder to open a bank account or obtain a payment gateway in the name of the business since more registrations like VAT or Service Tax or GST Registration may be required."
    },
    {
      heading:"Buisness Name",
      content:"A proprietor can choose any name as long as it does not infringe on a registered trademark. However, since the name is not registered, any other person can also use the same business name unless trademark registration is obtained."
    },
    {
      heading:"Lower Taxes",
      content:"Proprietorship having turnover below the applicable tax slabs of income tax then it is not required to pay any income tax, as proprietorship&#39;s are taxed as the individual owing the business. However, unlike a company or LLP, a proprietorship cannot enjoy some of the tax deductions, which may potentially increase the tax liability."
    },
    {
      heading:"Single Promoter",
      content:"Only single person is required to register a proprietorship. For all other types of entities like company except One Person Company or LLP or partnership firm, at least two or more promoters are required."
    },
    {
      heading:"Easy to Close",
      content:"As the Proprietor and the proprietorship are one and the same for all purposes, there is no formality for winding up or closing a proprietorship. The tax registrations obtained in the name of the proprietor are required to be cancelled in most cases."
    },

  ]

  $scope.showContent=function(index)
  {
    
  }

});