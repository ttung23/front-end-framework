const app = angular.module("nhap", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/detail/:detail", {
            templateUrl: "detail.html",
            controller: js
        })
})