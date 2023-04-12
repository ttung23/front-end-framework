angular.module("thithu", ["ngRoute"]).config(function ($routeProvider) {
    $routeProvider
    .when("/tac-gia", {
        templateUrl: "views/list.html",
        controller: ListController
    })
    .when("/tac-gia/add", {
        templateUrl: "views/add.html",
        controller: AddController
    })
    .when("/tac-gia/:id/edit", {
        templateUrl: "views/edit.html",
        controller: EditController
    })
    .when("/page", {
        templateUrl: "views/page.html",
    })
    .otherwise({
        redirectTo: "/tac-gia"
    })
})