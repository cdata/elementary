/* Elementary JavaScript Library
 *
 * Copyright 2010, Christopher Joel
 * Dual licensed under the MIT & GPLv2 licenses.
 * See MIT-LICENSE.txt & GPL-LICENSE.txt
 */
(function (context) {
    
    var toString = Object.prototype.toString,
        push = Array.prototype.push,
        extend = function () {
            
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
        isArray = function(value) {
            
            return toString.call(value) === '[object Array]';
        },
        isFunction = function(value) {
            
            return toString.call(value) === '[object Function]';
        },
        isObject = function(value) {
            
            return isFunction(value) || toString.call(value) == '[object Object]' && !isArray(value);
        },
        clone = function (value) {
            
            if (isArray(value))
                return value.concat();
            else
                return extend({}, value);
        },
        each = function (object, callback) {
            
            var i;
            
            if (isArray(object)) {
                
                for(i = 0; i < object.length && callback.call(object[i], i, object[i]) !== false; i++) {}
                
            } else {
                
                for (i in object) {
                    
                    if (callback.call(object[i], i, object[i]) === false) {
                        
                        break;
                    }
                }
            }
        },
        partition = function(array, filter) {
            
            var left = [],
                right = [];
              
            each(
                array,
                function(i, e) {
                    
                    filter(e) ? push.call(left, e) : push.call(right, e);
                }
            );
            
            return [left, right];
        };
    
    context.e = context.e || {
        
        extend: extend,
        isArray: isArray,
        isFunction: isFunction,
        isObject: isObject,
        clone: clone,
        each: each,
        partition: partition
    };
})(this);