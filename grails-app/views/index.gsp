<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Health App</title>
	<base href="/"></base>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.10/angular.min.js"></script>
</head>
<body>


<div ng-include src="'assets/app/user/index.html'"></div>

<div ng-include src="'assets/app/user/list/list.html'"></div>
<div ng-include src="'assets/app/user/bmi/bmi.html'"></div>
<div ng-include src="assets/app/user/bmr/bmr.html"></div>
<div ng-include src="assets/app/user/bprate/bprate.html"></div>
<div ng-include src="assets/app/user/dkr/dkr.html"></div>

<asset:javascript src="app/manifest.js" />
</body>
</html>