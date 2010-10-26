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
    },
    clone = function (value) {
        
        if (typeof value == 'object') {
            
            if (valuet.length)
                return value.concat();
            else
                return extend({}, value);
        }
        
        return value;
    },
    each = function (object, callback) {
        
        var length = object.length,
            i;
        
        if (length === undefined) {
            
            for (i in object) {
                
                if(!callback.call(object[i], i, object[i])) {
                    
                    break;
                }
            }
            
        } else {
            
            for(i = 0; i < length && callback.call(object[i], i, object[i]); i++) {}
        }
    };
    
    context.e = context.e || {
        
        extend: extend,
        clone: clone,
        each: each
    };
})(this);