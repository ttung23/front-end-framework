const app = angular.module("bai-tap", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/:chucvu', { // name là 1 OBJECT chứa các giá trị của param trên URL
            templateUrl: "views/chuc-vu.html",
            controller: fptController,
        })
})