var app = angular.module("my-app", []);

// Khai báo angular js cùng với vùng mình sử dụng
app.controller("infoController", ($scope) => {
    $scope.info = [
        {
            name: "Nguyễn Tiến Tùng",
            age: 18,
            phone: "012346890"
        },

        {
            name: "Nguyễn Tiến Tùng",
            age: 20,
            phone: "0123468901234"
        },

        {
            name: "Nguyễn Tiến Tùng",
            age: 19,
            phone: "012346890678966"
        }
    ]

    $scope.welcome = "hihi";

    $scope.sayHello = () => {
        // lấy dữ liệu từ input sau đó gán cho biến thông báo
        // $scope.thongbao = $scope.test;
        // alert($scope.doibong); // lấy ra value của select

        switch ($scope.doibong) {
            case '1':
                $scope.thongbao2 = "MU 7 0";
                break;
            case '2':
                $scope.thongbao2 = "MC bu";
                break;
            case '3':
                $scope.thongbao2 = "Arsenal vodih";
                break;
        }

        switch ($scope.gioitinh) {
            case '4':
                $scope.thongbao3 = "nam";
                break;
            case '5':
                $scope.thongbao3 = "nư";
                break;
        }
    }   

    $scope.count = 0;

    $scope.myMouse = () => {
        $scope.count++;
    }
});