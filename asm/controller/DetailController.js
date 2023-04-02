window.DetailController = function ($scope, $routeParams, $http) {
    const api = "http://localhost:3000/room";

    $http.get(
        api + "/" + $routeParams.id
    ).then (
        function (reponse) {
            $scope.roomDetail = reponse.data;
        }
    )
}