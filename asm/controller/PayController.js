window.PayController = function ($scope, $routeParams, $http) {
    const api_room = "http://localhost:3000/room";
    const api_order = "http://localhost:3000/order";

    // lấy dữ liệu phòng
    $http.get(
        api_room + "/" + $routeParams.id
    ).then(
        function (reponse) {
            $scope.roomPay = reponse.data;
        }
    )

    // lấy dữ liệu đơn hàng
    $scope.getData = function () {
        $http.get(api_order).then(
            function (reponse) {
                $scope.orderList = reponse.data;
            }
        )
    }
    $scope.getData();

    $scope.checkData = {
        name: false,
        address: false,
        cccd: false,
        cccdFomat: false,
        email: false,
        emailFomat: false,
        phone: false,
        phoneFomat: false,
        date: false,
        check_in: false,
        check_out: false,
        quantity_guests: false,
        payment: false
    }

    $scope.pay = function () {
        let flag = false;
        
        // validate
        $scope.checkData.name = !$scope.inputValue || !$scope.inputValue.name;
        $scope.checkData.address = !$scope.inputValue || !$scope.inputValue.address;
        $scope.checkData.cccd = !$scope.inputValue || !$scope.inputValue.cccd;
        $scope.checkData.email = !$scope.inputValue || !$scope.inputValue.email;
        if (!$scope.checkData.email) {
            if ($scope.inputValue.email == /!$scope.inputValue || !$scope.inputValue.email/) {
                console.log(111);
                $scope.checkData.emailFomat = true;
            }
        }

        $scope.checkData.phone = !$scope.inputValue || !$scope.inputValue.phone;
        $scope.checkData.date = !$scope.inputValue || !$scope.inputValue.date;
        $scope.checkData.check_in = !$scope.inputValue || !$scope.inputValue.check_in;
        $scope.checkData.check_out = !$scope.inputValue || !$scope.inputValue.check_out;
        $scope.checkData.quantity_guests = !$scope.inputValue || !$scope.inputValue.quantity_guests;
        $scope.checkData.payment = !$scope.inputValue || !$scope.inputValue.payment;

        for (let value in $scope.checkData) {
            if ($scope.checkData[value]) {
                flag = true;
                break;
            }
        }

        if (!flag) {
            let newOrder = {
                name: $scope.inputValue.name,
                address: $scope.inputValue.address,
                cccd: $scope.inputValue.cccd,
                email: $scope.inputValue.email,
                phone: $scope.inputValue.phone,
                date: new Date($scope.inputValue.date).toLocaleDateString(),
                check_in: new Date($scope.inputValue.check_in).toLocaleDateString(),
                check_out: new Date($scope.inputValue.check_out).toLocaleDateString(),
                quantity_guests: $scope.inputValue.quantity_guests,
                id_phong: $routeParams.id
            }

            $http.post(
                api_order,
                newOrder
            ).then(
                function (reponse) {
                    if (reponse.status == 201) {
                        $scope.getData()
                    }
                }
            )
            $scope.onClose();
            return;
        }
    }

    $scope.onClose = function () {
        $scope.inputValue = {
            name: "",
            address: "",
            cccd: "",
            email: "",
            phone: "",
            date: "",
            check_in: "",
            check_out: "",
            quantity_guests: "",
        }

        $scope.editId = 0;
    }
}