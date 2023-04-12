window.EditController = function ($scope, $routeParams, $http) {
    const api = "http://localhost:3000/thithu";
    let id = $routeParams.id;
    $scope.getData = function () {
        $http.get (
            api + "/" + id
        ).then(
            function (rep) {
                if (rep.status == 200) {
                    $scope.inputValue = rep.data;
                }
            }
        )
    }

    $scope.getData();

    $scope.onEdit = function () {
        let updateItem = {
            name: $scope.inputValue.name,
            price: $scope.inputValue.price,
            categoryName: $scope.inputValue.categoryName,
        }

        $http.put (
            api + "/" + id,
            updateItem
        ).then (
            function (reponse) {
                if (reponse.status == 200) {
                    location.href = "#!/list";
                }
            }
        )
    }
}