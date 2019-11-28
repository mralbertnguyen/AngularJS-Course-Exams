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
