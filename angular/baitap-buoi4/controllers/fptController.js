window.fptController = function ($scope, $routeParams) {
    $scope.checkData = {
        name: false,
        gender: false,
        level: false,
        dayCount: false
    }

    switch ($routeParams.chucvu) {
        case 'nhanVien':
            $scope.per = "nhân viên";
            $scope.tien = [700, 1200, 2400];
            break;
        case 'canBo':
            $scope.per = "cán bộ";
            $scope.tien = [1000, 2000, 3000];
            break;
        case 'quanLy':
            $scope.per = "quan lý";
            $scope.tien =  [2000, 4000, 6000];
            break;
    }

    $scope.show = false;

    $scope.check = () => {

        $scope.result = {};

        $scope.result.name = $scope.inputValue.name;
        if ($scope.inputValue.gender == 1) {
            $scope.result.gender = "ông";
        } else if ($scope.inputValue.gender == 2) {
            $scope.result.gender = "bà";
        }

        $scope.show = true;

        $scope.result.tien = $scope.tien[$scope.inputValue.level - 1] * $scope.inputValue.dayCount;
    }   
}   