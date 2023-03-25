
window.B1p2Controller = function ($scope) {
    $scope.tinh = () => {
        $scope.dientich = $scope.chieudai * $scope.chieurong;
        $scope.chuvi = ($scope.chieudai + $scope.chieurong) * 2;
    }
}