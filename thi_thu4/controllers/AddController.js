window.AddController = function ($scope, $http, $location) {
    const api = "http://localhost:3000/thi_thu4";

    $scope.onAdd = () => {
        $scope.checkData = {
            ten: false,
            diaChi: false,
        }

        $scope.checkData.ten = !$scope.inputValue || !$scope.inputValue.ten;
        $scope.checkData.diaChi = !$scope.inputValue || !$scope.inputValue.diaChi;

        let flag = false;

        for (value in $scope.checkData) {
            if ($scope.checkData[value]) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            let newItem = $scope.inputValue;

            $http.post(
                api, newItem
            ).then(
                function (reponse) {
                    if (reponse.status == 201) {
                        $location.path("tac-gia")
                    }
                }
            )
        }
    }
}