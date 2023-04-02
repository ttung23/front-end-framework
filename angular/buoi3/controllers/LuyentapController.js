window.LuyentapController = function ($scope) {
    $scope.checkData = {
        tensp: false,
        soluong: false,
        dongia: false,
        kichhoat: false
    }

    $scope.onSubmit = function () {
        let ds = $scope.danhsach;

        // validate
        let flag = false;

        if (!$scope.inputValue || !$scope.inputValue.tensp) {
            $scope.checkData.tensp = true;
            flag = true;
        } else if ($scope.inputValue || $scope.inputValue.tensp) {
            $scope.checkData.tensp = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.soluong) {
            $scope.checkData.soluong = true;
            flag = true;
        } else if ($scope.inputValue || $scope.inputValue.soluong) {
            $scope.checkData.soluong = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.dongia) {
            $scope.checkData.dongia = true;
            flag = true;
        } else if ($scope.inputValue || $scope.inputValue.dongia) {
            $scope.checkData.dongia = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.kichhoat) {
            $scope.checkData.kichhoat = true;
            flag = true;
        } else if ($scope.inputValue || $scope.inputValue.kichhoat) {
            $scope.checkData.kichhoat = false;
        }

        console.log(flag);

        if (!flag) {
            console.log(111);
            let nextId = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;
            let newSp = {
                id: nextId,
                tensp: $scope.inputValue.tensp,
                soluong: $scope.inputValue.soluong,
                dongia: $scope.inputValue.dongia,
                trangthai: $scope.inputValue.trangthai,
            }
    
            ds.push(newSp);
        }

        
    }

    $scope.danhsach = [
        {
            id: 1,
            tensp: "aaa",
            soluong: 1,
            dongia: "1000",
            trangthai: 0,
        },

        {
            id: 2,
            tensp: "bbb",
            soluong: 2,
            dongia: "2000",
            trangthai: 1,
        },

        {
            id: 3,
            tensp: "ccc",
            soluong: 3,
            dongia: "3000",
            trangthai: 0,
        }
    ]
}