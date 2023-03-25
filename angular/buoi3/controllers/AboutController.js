window.AboutController = function ($scope, $routeParams) {

    // Tạo 1 OBJECT kiểm tra dữ liệu mặc định là FALSE
    $scope.checkData = {
        // chưa có lỗi thì mặc định là false
        name: false,
        age: false,
        address: false
    }

    $scope.onSubmitForm = () => {
        // VALIDATE
        if (!$scope.inPutValue || !$scope.inPutValue.name) {
            $scope.checkData.name = true;
        } else if ($scope.inPutValue || $scope.inPutValue.name) {
            $scope.checkData.name = false;
        }

        if (!$scope.inPutValue || !$scope.inPutValue.age) {
            $scope.checkData.age = true;
        } else if ($scope.inPutValue || $scope.inPutValue.age) {
            $scope.checkData.age = false;
        }

        if (!$scope.inPutValue || !$scope.inPutValue.address) {
            $scope.checkData.address = true;
        } else if ($scope.inPutValue || $scope.inPutValue.address) {
            $scope.checkData.address = false;
        }
    }


    // $scope.user = [
    //     {
    //         id: 1,
    //         name: "Nguyễn Tiến Tùng",
    //         age: 18,
    //         address: "Hà Nội"
    //     },

    //     {
    //         id: 2,
    //         name: "Nguyễn Tiến Tùng Tùng",
    //         age: 19,
    //         address: "Hà Nội"
    //     },

    //     {
    //         id: 3,
    //         name: "Nguyễn Tiến Tùng Tùng Tùng",
    //         age: 20,
    //         address: "Hà Nội"
    //     }
    // ]
}