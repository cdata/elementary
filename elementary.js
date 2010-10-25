(function (context) {
    
    context.e = context.e || {
        
        extend: function () {
            
            var options = arguments,
                target = options[0] || {}, 
                other, 
                property,
                i;
            
            for (i = 1; i < options.length; i++) {
                
                if ((other = options[i]) != null) {
                    
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
        }
    };
})(this);