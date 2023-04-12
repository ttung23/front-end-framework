window.ListController = function ($scope, $http) {
    const api = "http://localhost:3000/thithu";

    const getData = () => {
        $http.get(
            api
        ).then(
            function (reponse) {
                if(reponse.status == 200) {
                    $scope.danhsach = reponse.data;
                }
            }
        )
    }

    getData();

    $scope.onDelete = function (id) {
        let confirm = window.confirm("Ban chac chan muon xoa?");

        if (confirm) {
            $http.delete(
                api + "/" + id
            ).then(
                function (reponse) {
                    if (reponse.status == 200) {
                        getData();
                    }
                }
            )
        }
    }
}