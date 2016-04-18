var app;
(function (app) {
    var learnApp;
    (function (learnApp) {
        var ExampleDirectivesCtrl = (function () {
            function ExampleDirectivesCtrl() {
                this.title = "Examples Directives";
                this.spinnerValue = 5;
            }
            return ExampleDirectivesCtrl;
        }());
        angular.module("learnApp").controller("ExampleDirectivesCtrl", ExampleDirectivesCtrl);
    })(learnApp = app.learnApp || (app.learnApp = {}));
})(app || (app = {}));
