var app = angular.module("app", ["kendo.directives", "ngRoute", "ngResource"]);

app.value('api_url', 'http://localhost:3000/shipments');

/**
 * ngRoute allows routing to different pages in application
 *
 * @see https://docs.angularjs.org/api/ngRoute
 */
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "templates/search.html",
            controller: 'SearchCtrl'
        })
        .when("/shipment/:reference", {
            templateUrl: "templates/shipment.html",
            controller: 'ShipmentCtrl'
        })
});

/**
 * Search for shipment by using Kendo UI Grid
 *
 * @see http://demos.telerik.com/kendo-ui/grid/angular
 */
app.controller("SearchCtrl", function ($scope) {
    $scope.title = 'Search';
});

/**
 * Show shipment information in bootstrap CSS form, with two binding
 * and persist any changes to remote API
 *
 * @see http://getbootstrap.com/css/#forms
 */
app.controller("ShipmentCtrl", function ($scope) {
    $scope.title = 'Shipment';
});