import angular from 'angular';
import ngRoute from 'angular-route';
import CaseDetails from './components/case/caseDetails';
import CaseList from './components/case/caseList';
import CaseItem from './components/case/caseItem';

const angularApp = angular.module('angularApp', [ngRoute])
.component('caseList', CaseList)
.component('caseItem', CaseItem)
.component('caseDetails', CaseDetails);

angularApp.config([
  '$routeProvider',
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
      redirectTo: '/case/list',
    }).when('/case/list', {
      template: '<case-list/>'
    }).when('/case/:id', {
      template: '<case-details />'
    });
  }
]);

export default angularApp;
