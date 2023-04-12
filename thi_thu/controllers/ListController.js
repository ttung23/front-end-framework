window.ListController = function ($scope, $http) {
    const api = "http://localhost:3000/thithu";
    
    $scope.getData = function () {
        $http.get(
            api
        ).then(
            function(reponse) {
                if (reponse.status == 200) {
                    $scope.danhsach = reponse.data;
                }
            }
        )
    }

    $scope.getData();

    $scope.onDelete = function (id) {

    }
}