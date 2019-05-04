(function(){
'use strict'
	
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
    $scope.checkDishes = function(){
        // $scope.changeDivColor = {
        //     "color" : "red"
        // }
        var num = countDishes($scope.dishes);
        var myArray = buildMessageStyle(num);  
        $scope.message = myArray[0];
        $scope.changeDivColor = {"color" :myArray[1]};
        $scope.changeTextBoxBorderColor = {"border-color" : myArray[1]};
	}
}

function countDishes(dishes){
	if (dishes){
		var dishArray = dishes.split(',');
		var dishArrayFiltered = dishArray.filter(function (temp) {
			return temp.trim() !=='';
		})
		return dishArrayFiltered.length;
	}
	else{
		return 0;
	}
}

function buildMessageStyle(count) {
	if (count===0) {

		return ["Please enter data first","red"]
	}
	else if (count <= 3) {
		return ["Enjoy","green"]
	} 
	else if(count >=4){
		return ["Too much","green"]
	}
}


})();