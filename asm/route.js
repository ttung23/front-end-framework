const app = angular.module("asm", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "views/home.html",
            controller: HomeController,
            title: "Trang chủ"
        })
        .when('/trang-chu', {
            templateUrl: "views/home.html",
            controller: HomeController,
            title: "Trang chủ"
        })
        .when('/chi-tiet', {
            templateUrl: "views/detail.html",
            controller: DetailController,
            title: "Chi tiết phòng"
        })
        .when('/thanh-toan', {
            templateUrl: "views/pay.html",
            controller: PayController,
            title: "Thanh toán"
        })
        .when('/about-us', {
            templateUrl: "views/aboutUs.html",
            controller: AboutUsController,
            title: "Về chúng tôi"
        })
        .when('/lien-he', {
            templateUrl: "views/contact.html",
            controller: ContactController,
            title: "Liên hệ"
        })
        .otherwise({
            redirectTo: '/'
        });
})

app.run(function ($rootScope, $route) {
    $rootScope.$on("$routeChangeSuccess", function () {
        document.title = $route.current.title;
    });
});