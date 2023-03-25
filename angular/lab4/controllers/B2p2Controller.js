window.B2p2Controller = function ($scope) {
    $scope.tinh = () => {
        if ($scope.diem < 5) {
            $scope.ketqua = "Trượt";
        } else if ($scope.diem >= 5) {
            $scope.ketqua = "Đạt";
        }
    }
}