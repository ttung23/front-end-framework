// app-route là tên của ng-app trong file html
// ngRoute mặc định có sẵn
//
// muốn sử dụng được route trong angular js thì phải sử dụng đoạn code dưới
const app = angular.module("app-route", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/trang-chu', { // đang định nghĩa tên router (trang-chu)
            templateUrl: "views/home.html", // đường dẫn đến view
            controller: HomeController,
            title: "Trang chủ"
        })
        .when('/gioi-thieu', { // name là 1 OBJECT chứa các giá trị của param trên URL
            templateUrl: "views/about.html",
            controller: AboutController,
            title: "Giới thiệu"
        })
        .when('/luyen-tap', {
            templateUrl: "views/luyenTap.html",
            controller: LuyentapController,
            title: "Bài tập luyện tập"
        })
})

app.run(function ($rootScope, $route) {
    $rootScope.$on("$routeChangeSuccess", function () {
        // Code sẽ được viết ở bước tiếp theo
        document.title = $route.current.title;
    });
});