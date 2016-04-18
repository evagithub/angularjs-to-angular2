module app.learnApp{
    
    
        function jqSpinner() {
            var directive = {
                restrict: 'EAC',
                require:'ngModel',
                link: function(scope, element, attrs, c){
                    element.spinner({
                        spin:function(event, ui){
                            c.$setViewValue(ui.value);
                            scope.$apply();
                        }
                    });
                }
                
                
            };
            return directive;
        }
       
        angular.module('learnApp')
            .directive('jqSpinner', jqSpinner);
    
    
}