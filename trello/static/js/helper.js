var myApp = angular.module("TrelloApp", ['ngCookies'])


var dict1 = {"first":[], "second": [], "third":[]}
myApp.controller("trelloCtrl", ['$cookies', '$scope', function($cookies, $scope) {

    $scope.validationError = false;

    if ( !$cookies.get("cardslist") ) {
        $cookies.put("cardslist", JSON.stringify(dict1));
        $scope.cardslist = dict1;
    }
    else {
        $scope.cardslist = JSON.parse(($cookies.get("cardslist")))
    }

    console.log($scope.cardslist)

    $scope.createNewCard  = function() {
        var element = document.getElementById("createCardModal");
        element.style.zIndex=""
    }

    $scope.save = function() {
        var letters = /^[A-Za-z]+$/;
        if ( $scope.modal.title.match(letters) &&  $scope.modal.description && $scope.modal.description.length >= 25) {
            console.log("alphabets found");
            var selectedList = $scope.listname
            $scope.cardslist[selectedList].push({"title":$scope.modal.title, "description":$scope.modal.description});
            $cookies.put("cardslist", JSON.stringify($scope.cardslist));
            console.log($cookies.get("cardslist"));
            $scope.modal.title = "";
            $scope.modal.description = "";
            $scope.validationError = false;
            document.getElementById("closeModal").click()
        }
        else{
            console.log("numbers found")
            $scope.validationError = true;
        }
        
    }
}])