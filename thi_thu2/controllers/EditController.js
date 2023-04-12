window.EditController = function ($scope, $routeParams, $http) {
    const api = "http://localhost:3000/thithu";
    const id = $routeParams.id;

    $http.get(
        api + "/" + id
    ).then (
        function (reponse) {
            if (reponse.status == 200) {
                $scope.inputValue = reponse.data;
            }
        }
    )

    $scope.onEdit = () => {
        $scope.checkData = {
            name: false,
            price: false,
            priceFomat: false,
            cateName: false
        }

        let flag = false;

        $scope.checkData.name = !$scope.inputValue || !$scope.inputValue.name;
        $scope.checkData.price = !$scope.inputValue || !$scope.inputValue.price;
        if (!$scope.checkData.price) {
            if (!($scope.inputValue.price > 100 && Number.isInteger($scope.inputValue.price))) {
                $scope.checkData.priceFomat = true;
            }
        }

        $scope.checkData.categoryName = !$scope.inputValue || !$scope.inputValue.categoryName;

        for (value in $scope.checkData) {
            if ($scope.checkData[value]) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            let UpdateItem = $scope.inputValue;
            $http.put(
                api + "/" + id,
                UpdateItem
            ).then (
                function (reponse) {
                    if (reponse.status == 200) {
                        location.href = "#!/list";
                    }
                }
            )
        }
    }
}