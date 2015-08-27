<!DOCTYPE html>
<html ng-app="app">
<head>
	<title>Health App</title>
	<base href="/"></base>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.10/angular.min.js"></script>
</head>
<body>
<div ng-controller="Bmi">
	<g:form controller="user" ng-submit="computeBmi()" action="save">
		<label>Age: </label>
		<g:textField name="age"/><br />
		<label>Gender: </label>
		<g:textField name="gender"/><br />
		<label>Weight: </label>
		<g:textField name="weight"/><br />
		<label>Height: </label>
		<g:textField name="height"/><br />
		<label>Systolic: </label>
		<g:textField name="systolic"/><br />
		<label>Diastolic: </label>
		<g:textField name="diastolic"/><br />
		<label>Exercise Level: </label>
		<g:textField name="exercise"/><br />
		<g:actionSubmit value="Save"/>
	</g:form>
</div>


<div class="col-lg-4 col-md-6 col-sm-12 bmi">
	<div class="panel panel-default">
		<div class="panel-heading">Body Mass Index</div>
		<div class="panel=body">
			<span ng-show="answer"> {{ answer | number:2}}, {{ result }}</span>
			<button ng-click="getBmi()">Compute</button>
		</div>
	</div>
</div>

<div ng-include src="'assets/app/user/list/list.html'"></div>
<div ng-include ="assets/app/user/bmi/bmi.html"></div>
<div ng-include ="assets/app/user/bmr/bmr.html"></div>
<div ng-include ="assets/app/user/bprate/bprate.html"></div>
<div ng-include ="assets/app/user/dkr/dkr.html"></div>

<asset:javascript src="app/manifest.js" />
</body>
</html>