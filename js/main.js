var app = angular.module('expensesApp',[]);

app.controller('ExpensesViewController',['$scope', function($scope){
    $scope.userModel  = {
        name : 'Albert',
        old : 21
    };

    $scope.title = 'Angular Exam';

    $scope.changeName = function(){
        if($scope.userModel.name == 'Albert'){
            $scope.userModel.name = 'Tam'
        }else{
            $scope.userModel.name = 'Albert'
        }
    }

    $scope.increaseOld = function(){
        $scope.userModel.old++;
    }

    $scope.decreaseOld = function(){
        $scope.userModel.old--;
    }
}])


app.controller('ListController',['$scope',function($scope){

    $scope.title_list = "List item";

    $scope.items = [
        {
            name : "Item 1",
            desc : "Desc 1"
        },
        {
            name : "Item 2",
            desc : "Desc 2"
        },
        {
            name : "Item 3",
            desc : "Desc 3"
        },
        {
            name : "Item 4",
            desc : "Desc 4"
        },
        {
            name : "Item 5",
            desc : "Desc 5"
        }
    ];

}])
