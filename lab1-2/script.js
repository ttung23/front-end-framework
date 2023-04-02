const app = angular.module("lab1", []);

app.controller('formController', function ($scope) {
    $scope.checkData = {
        ten: false,
        ngaysinh: false,
        gioitinh: false,
        dantoc: false,
        cccd: false,
        ngaycap: false,
        noicap: false
    }

    $scope.sign_up = () => {
        if (!$scope.inputValue || !$scope.inputValue.ten) {
            $scope.checkData.ten = true;
        } else if ($scope.inputValue || $scope.inputValue.ten) {
            $scope.checkData.ten = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.ngaysinh) {
            $scope.checkData.ngaysinh = true;
        } else if ($scope.inputValue || $scope.inputValue.ngaysinh) {
            $scope.checkData.ngaysinh = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.gioitinh) {
            $scope.checkData.gioitinh = true;
        } else if ($scope.inputValue || $scope.inputValue.gioitinh) {
            $scope.checkData.gioitinh = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.dantoc) {
            $scope.checkData.dantoc = true;
        } else if ($scope.inputValue || $scope.inputValue.dantoc) {
            $scope.checkData.dantoc = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.cccd) {
            $scope.checkData.cccd = true;
        } else if ($scope.inputValue || $scope.inputValue.cccd) {
            $scope.checkData.cccd = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.ngaycap) {
            $scope.checkData.ngaycap = true;
        } else if ($scope.inputValue || $scope.inputValue.ngaycap) {
            $scope.checkData.ngaycap = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.noicap) {
            $scope.checkData.noicap = true;
        } else if ($scope.inputValue || $scope.inputValue.noicap) {
            $scope.checkData.noicap = false;
        }
    }
})