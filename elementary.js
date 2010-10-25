(function(context) {
    var $x = 10;
    context.e = context.e || {
        
        extend: function() {
            
            var target = arguments[0] || {}, 
                other, 
                property;
            
            for (var i = 1; i < arguments.length; i++) {
                
                if ((other = arguments[i]) != null) {
                    
                    for (property in other) {
                        
                        var targetProperty = target[property],
                            otherProperty = other[property];
                        
                        if (otherProperty !== undefined && targetProperty !== otherProperty) {
                            
                            target[property] = otherProperty;
                        }
                    }
                }
            }
            
            return target;
        },
        
        
    };
    
})(this);