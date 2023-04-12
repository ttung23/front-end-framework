window.QuanlynhanvienController = function ($scope, $routeParams, $http) {
    let apiURL = "http://localhost:3000/nhanvien";

    $scope.getData = function () {
        $http.get(apiURL).then(function (reponse) {
            if (reponse.status == 200) {
                $scope.nhanvien = reponse.data;
            }
        })
    }
    $scope.getData();

    $scope.save = function () {
        $scope.checkData = {
            name: false,
            gender: false,
            namsinh: false,
            level: false,
            sogiolam: false
        }

        $scope.checkData.name = !$scope.inputValue || !$scope.inputValue.name;
        $scope.checkData.gender = !$scope.inputValue || !$scope.inputValue.gender;
        $scope.checkData.namsinh = !$scope.inputValue || !$scope.inputValue.namsinh;
        $scope.checkData.level = !$scope.inputValue || !$scope.inputValue.level;
        $scope.checkData.sogiolam = !$scope.inputValue || !$scope.inputValue.sogiolam;

        let flag = false;

        for (let value in $scope.checkData) {
            if ($scope.checkData[value]) {
                flag = true;
                break;
            }
        }

        if (!flag) {

            // Sửa
            let editId = $scope.editId;
            if (editId) {
                let updateItem = {
                    name: $scope.inputValue.name,
                    gender: $scope.inputValue.gender,
                    namsinh: $scope.inputValue.namsinh,
                    sogiolam: $scope.inputValue.sogiolam,
                    level: $scope.inputValue.level,
                    tongluong: Number($scope.inputValue.level) * $scope.inputValue.sogiolam
                }
                $http.put(
                    `${apiURL}/${editId}`,
                    updateItem
                ).then(
                    function (reponse) {
                        if (reponse.status == 200) {
                            $scope.getData();
                        }
                    }
                )
                $scope.onClose();
                return;
            }

            // thêm
            let newItem = {
                name: $scope.inputValue.name,
                gender: $scope.inputValue.gender,
                namsinh: $scope.inputValue.namsinh,
                level: $scope.inputValue.level,
                sogiolam: $scope.inputValue.sogiolam,
                tongluong: Number($scope.inputValue.level) * $scope.inputValue.sogiolam
            }
            $http.post(
                apiURL,
                newItem
            )
                .then(
                    function (reponse) {
                        if (reponse.status == 201) {
                            $scope.getData();
                        }
                    }
                )
        }
    }

    $scope.delete = function (deleteId) {
        let confirm = window.confirm('Xác nhận xóa?');
        if (confirm) {
            $http.delete(`${apiURL}/${deleteId}`).then(
                function (reponse) {
                    if (reponse.status == 200) {
                        $scope.getData();
                    }
                }
            )
        }
    }

    $scope.edit = function (editId) {
        $scope.editId = editId;
        $http.get(`${apiURL}/${editId}`)
            .then(
                function (reponse) {
                    if (reponse.status == 200) {
                        $scope.inputValue = {
                            name: reponse.data.name,
                            namsinh: reponse.data.namsinh,
                            gender: reponse.data.gender,
                            level: reponse.data.level,
                            sogiolam: reponse.data.sogiolam
                        }
                    }
                }
           )
    } 

    $scope.onClose = function () {
        $scope.inputValue = {
            name: "",
            namsinh: "",
            gender: "",
            level: "",
            sogiolam: ""
        }
        $scope.editId = 0;
    }
}