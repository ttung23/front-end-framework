window.EditController = function ($scope, $routeParams, $http, $location) {
    const api = "http://localhost:3000/thi_thu4";
    const id = $routeParams.id;

    $http.get(api + "/" + id).then(function (reponse) {
        if(reponse.status == 200) {
            $scope.inputValue = reponse.data
        }
    })

    $scope.onEdit = () => {
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
            let updateItem = $scope.inputValue;

            $http.put(
                api + "/" + id, updateItem
            ).then(
                function (reponse) {
                    if (reponse.status == 200) {
                        $location.path("tac-gia")
                    }
                }
            )
        }
    }
}