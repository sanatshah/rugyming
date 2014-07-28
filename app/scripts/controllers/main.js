'use strict';

var rugym=angular.module('rugymingApp');

rugym.controller('MainCtrl', function($scope, $http){
   

    $scope.timeCheck=function(){

	$scope.meetingareas=times["Busch Campus"]["Sonny Werblin Recreation Center"].meetingareas["Fitness Center"];

	var today=new Date();
	var dd=today.getDate();
	var mm=today.getMonth()+1;
	var yyyy=today.getFullYear();
	var hour=today.getHours();
	var min=today.getMinutes();

	dd=25;
//	hour=18;

	today = mm.toString()+'/'+dd.toString()+'/'+yyyy.toString();

	var opentime=times["Busch Campus"]["Sonny Werblin Recreation Center"].meetingareas["Fitness Center"][today];
	var begintime=parseInt(opentime.charAt(0));
	var endtime=parseInt(opentime.charAt(9))+12;

	if ((hour>=begintime)&&(hour<=endtime)){

	    $scope.answer=true;
	    var x=endtime-hour; 

	    if (x<2) { 
		$scope.hurry="Hurry though, it closes in " + x + " hour.";
		$scope.check="It is open."; 
	    } else {
		$scope.check="Open. 'The only limitations one has, are the ones they place on themselves' - Muhammad Ali. ";

	    }

	} else {
	  
	    $scope.answer=true;
	    $scope.check="closed"
	    
	}
    }


});
