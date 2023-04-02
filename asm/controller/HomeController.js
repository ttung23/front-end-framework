window.HomeController = function ($scope, $http) {
    $http.get(
        "http://localhost:3000/room"
    ). then(
        function (reponse) {
            $scope.room = reponse.data;
        }
    )
}