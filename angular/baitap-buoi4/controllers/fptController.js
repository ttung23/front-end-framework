window.fptController = function ($scope, $routeParams) {
    $scope.checkData = {
        name: false,
        gender: false,
        level: false,
        dayCount: false
    }

    switch ($routeParams.chucvu) {
        case 'nhan-vien':
            $scope.per = "nhân viên";
            $scope.tien = [700, 1200, 2400];
            break;
        case 'can-bo':
            $scope.per = "cán bộ";
            $scope.tien = [1000, 2000, 3000];
            break;
        case 'quan-ly':
            $scope.per = "quản lý";
            $scope.tien =  [2000, 4000, 6000];
            break;
    }

    $scope.show = false;

    $scope.check = () => {

        if (!$scope.inputValue || !$scope.inputValue.name) {
            $scope.checkData.name = true;
        } else if ($scope.inputValue || $scope.inputValue.name) {
            $scope.checkData.name = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.gender) {
            $scope.checkData.gender = true;
        } else if ($scope.inputValue || $scope.inputValue.gender) {
            $scope.checkData.gender = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.level) {
            $scope.checkData.level = true;
        } else if ($scope.inputValue || $scope.inputValue.level) {
            $scope.checkData.level = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.dayCount) {
            $scope.checkData.dayCount = true;
        } else if ($scope.inputValue || $scope.inputValue.dayCount) {
            $scope.checkData.dayCount = false;
        }

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