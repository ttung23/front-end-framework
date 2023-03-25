const app = angular.module("lab4", ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
        .when('/b1p1', {
            templateUrl: "views/b1p1.html",
            controller: B1p1Controller
        })
        .when('/b2p1', {
            templateUrl: "views/b2p1.html",
            controller: B2p1Controller
        })
        .when('/b3p1', {
            templateUrl: "views/b3p1.html",
            controller: B3p1Controller
        })
        .when('/b1p2', {
            templateUrl: "views/b1p2.html",
            controller: B1p2Controller
        })
        .when('/b2p2', {
            templateUrl: "views/b2p2.html",
            controller: B2p2Controller
        })
})

// const app = angular.module("app-route", ['ngRoute']);
// app.config(function ($routeProvider) {
//     $routeProvider
//         .when('/trang-chu', { // đang định nghĩa tên router (trang-chu)
//             templateUrl: "views/home.html", // đường dẫn đến view
//             controller: HomeController,
//             title: "Trang chủ"
//         })
//         .when('/gioi-thieu', {
//             templateUrl: "views/about.html",
//             controller: AboutController,
//             title: "Giới thiệu"
//         })
// })