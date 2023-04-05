window.AboutController = function ($scope, $routeParams, $http) {
    // tham số $http là giao thức để gọi api
    let apiURL = "http://localhost:3000/posts";
    $scope.getData = function () {
        $http.get(apiURL).then(function (reponse) {
            // khi gọi API thành công cực reponse sẽ nhận dữ liệu
            // console.log(reponse);
            if (reponse.status == 200) {
                $scope.danhsach = reponse.data
            }
        })
    }

    // Tạo 1 OBJECT kiểm tra dữ liệu mặc định là FALSE
    $scope.checkData = {
        // chưa có lỗi thì mặc định là false
        name: false,
        age: false,
    }

    $scope.getData();

    $scope.onSubmitForm = function () {
        let flag = false;
        // VALIDATE
        if (!$scope.inputValue || !$scope.inputValue.name) {
            $scope.checkData.name = true;
            flag = true;
        } else if ($scope.inputValue || $scope.inputValue.name) {
            $scope.checkData.name = false;
        }

        if (!$scope.inputValue || !$scope.inputValue.age) {
            $scope.checkData.age = true;
            flag = true;
        } else if ($scope.inputValue || $scope.inputValue.age) {
            $scope.checkData.age = false;
        }

        // ko có lỗi thì xử lý thêm
        if (!flag) {
            // xử lý sửa
            let editId = $scope.editId;

            // kiểm tra nếu tồn tại editId thì sẽ sửa
            if (editId) {
                // for (let i = 0; i < $scope.danhsach.length; i++) {
                //     // console.log($scope.danhsach[i]);
                //     if ($scope.danhsach[i].id == editId) {
                //         // $scope.danhsach[i].name = $scope.inputValue.name;
                //         // $scope.danhsach[i].age = $scope.inputValue.age;
                        
                //     }

                    
                // }

                const updateItem = {
                    name: $scope.inputValue.name,
                    age: $scope.inputValue.age
                }

                $http.put (
                    apiURL + "/" + editId, // đường link cập nhật theo ID
                    updateItem // dữ liệu dùng để update
                ).then(
                    function (reponse) {
                        if (reponse.status == 200) {
                            $scope.getData(); // gọi lại hàm getData để update lại bảng
                        }
                    }
                )

                $scope.onClose();
                return;
            }

            // let ds = $scope.danhsach;

            // // fake id tăng tự động
            // let newId = ds.length > 0 ? ds[ds.length - 1].id + 1 : 1;

            let newUser = {
                name: $scope.inputValue.name,
                age: $scope.inputValue.age,
            }

            $http.post(
                apiURL, // đường dẫn API tạo ở trên
                newUser // dữ liệu thêm
            ).then(
                function (reponse) {
                    if (reponse.status == 201) {
                        $scope.getData()
                    }
                }
            )

            // $scope.danhsach.push(newUser);
        }

        $scope.onClose();
    }

    $scope.onClose = function () {
        $scope.inputValue = {
            name: "",
            age: ""
        }

        $scope.editId = 0;
    }

    $scope.onEdit = function (editId) {
        $scope.editId = editId;

        //Tạo đối tượng editItem
        // let editItem = {
        //     name: "",
        //     age: ""
        // }
        // $scope.inputValue = {}

        // for (let i = 0; i < $scope.danhsach.length; i++) {
        //     if ($scope.danhsach[i].id == editId) {
        //         editItem.name = $scope.danhsach[i].name;
        //         editItem.age = $scope.danhsach[i].age;
        //     }
        // }

        // gọi API để lấy dữ theo editID và đổ dữ liệu lên form
        $http.get(
            apiURL + "/" + editId, // đường dẫn API tạo ở trên
        ).then(
            function (reponse) {
                // bắt trạng thái thành công
                if (reponse.status == 200) {
                    $scope.inputValue = reponse.data;
                }

                // console.log($scope.inputValue.name);
                // console.log(reponse.data);
            }, 
        )

        
    }

    $scope.onDelete = function (deleteId) { 
        let confirm = window.confirm("Xác nhận xóa?"); 
        // xóa
        if(confirm){
            // $scope.danhsach = $scope.danhsach.filter(function(item){
            //     return item.id !== deleteId;
            // });

            $http.delete(
                apiURL + "/" + deleteId, // đường dẫn API tạo ở trên
            ).then(
                function (reponse) {
                    if (reponse.status == 200) {
                        $scope.getData()
                    }
                }
            )
        }
    }


    // $scope.danhsach = [
    //     {
    //         id: 1,
    //         name: "Nguyễn Tiến Tùng",
    //         age: 18,
    //     },

    //     {
    //         id: 2,
    //         name: "Nguyễn Tiến Tùng Tùng",
    //         age: 19,
    //     },

    //     {
    //         id: 3,
    //         name: "Nguyễn Tiến Tùng Tùng Tùng",
    //         age: 20,
    //     }
    // ]
}