window.AddController = function ($scope, $http) {
    $scope.onAdd = function () {
        let newItem = {
            name: $scope.inputValue.name,
            price: $scope.inputValue.price,
            categoryName: $scope.inputValue.categoryName,
        }

        $http.post (
            "http://localhost:3000/thithu",
            newItem
        ).then (
            function (reponse) {
                if (reponse.status == 201) {
                    location.href = "#!/list";
                }
            }
        )
    }
}