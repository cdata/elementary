(function (context) {
    
    var extend = function () {
        
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
    };
    
    var clone = function (value) {
        
        if (typeof value == 'object') {
            
            if (valuet.length)
                return value.concat();
            else
                return e.extend({}, value);
        }
        
        return value;
    };
    
    context.e = context.e || {
        
        extend: extend,
        clone: clone
    };
})(this);