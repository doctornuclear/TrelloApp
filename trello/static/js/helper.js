var myApp = angular.module("TrelloApp", ['ngCookies'])


var dict1 = {"first":[], "second": [], "third":[]}
myApp.controller("trelloCtrl", ['$cookies', '$scope', function($cookies, $scope) {


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
    $scope.validationError = false;
    $scope.editMode = false;
    $scope.editIndex = null;

    $scope.save = function() {
        var letters = /^[A-Za-z ]+$/;
        var selectedList = $scope.modal.listname
        if ( $scope.modal.title.match(letters) &&  $scope.modal.description && $scope.modal.description.length >= 25 && selectedList) {
            console.log("alphabets found");
            if ($scope.editIndex !== null){
                $scope.cardslist[selectedList].splice($scope.editIndex,1);
                // $scope.cardslist[selectedList][$scope.editIndex] = {"title": $scope.modal.title, "description": $scope.modal.description}
                $scope.editIndex = null;
                $scope.editMode = false;
                console.log("editmdode");
            }
            if( !$scope.deleteBool ){
                $scope.cardslist[selectedList].push({"title":$scope.modal.title, "description":$scope.modal.description});
            }
            $cookies.put("cardslist", JSON.stringify($scope.cardslist));
            console.log($cookies.get("cardslist"));
            $scope.modal.title = "";
            $scope.modal.description = "";
            $scope.modal.listname = "";
            $scope.validationError = false;
            document.getElementById("closeModal").click()
            $scope.deleteBool = false
        }
        else{
            console.log("numbers found")
            $scope.validationError = true;
        }
        
    }
    $scope.editCard = function(columnName, columnList, index) {
        $scope.modal = {}
        $scope.editMode = true;
        $scope.editIndex = index;
        document.getElementById("createCard").click();
        $scope.modal.title = columnList[index].title;
        $scope.modal.description = columnList[index].description;
        $scope.modal.listname = columnName;
    }

    $scope.closeModal = function(){
        $scope.modal.title = "";
        $scope.modal.listname = "";
        $scope.modal.description = "";
        $scope.editMode = false;
    }

    $scope.deleteCard = function() {
        $scope.deleteBool = true;
        $scope.save()
    }
}])