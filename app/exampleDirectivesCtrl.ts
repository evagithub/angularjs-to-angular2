module app.learnApp{
    
    interface IExampleDirectivesModel{
        title: string;
        spinnerValue: number;
    }
    class ExampleDirectivesCtrl implements IExampleDirectivesModel{
        title: string;
        spinnerValue: number;
        
        constructor(){
            this.title = "Examples Directives";
            this.spinnerValue = 5;
        }
    }
    
    angular.module("learnApp").controller("ExampleDirectivesCtrl",ExampleDirectivesCtrl)
}