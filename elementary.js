/* Elementary JavaScript Library
 *
 * Copyright 2010, Christopher Joel
 * Dual licensed under the MIT & GPLv2 licenses.
 * See MIT-LICENSE.txt & GPL-LICENSE.txt
 */
(function (context) {
    
    var toString = Object.prototype.toString,
        push = Array.prototype.push,
        concat = Array.prototype.concat,
        extend = function () {
            
            var options = arguments,
                target = options[0] || {}, 
                other, 
                property,
                iter;
            
            for (iter = 1; iter < options.length; iter++) {
                
                if ((other = options[iter]) != null) {
                    
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
        isArray = function (value) {
            
            return toString.call(value) === '[object Array]';
        },
        isFunction = function (value) {
            
            return toString.call(value) === '[object Function]';
        },
        isObject = function (value) {
            
            return isFunction(value) || toString.call(value) == '[object Object]';
        },
        clone = function (value) {
            
            return isArray(value) ? value.concat() : extend({}, value);
        },
        each = function (object, callback) {
            
            var iter;
            
            if (isArray(object)) {
                
                for (iter = 0; iter < object.length && callback.call(object[iter], iter, object[iter]) !== false; iter++) {}
                
            } else {
                
                for (iter in object)
                    if (callback.call(object[iter], iter, object[iter]) === false)
                        break;
            }
        },
        map = function (array, filter) {
            
            var result = [];
            
            each(
                array,
                function(index, element) {
                    
                    push.call(result, filter.call(array, index, element));
                }
            );
            
            return result;
        },
        partition = function (object, filter) {
            
            var left = [],
                right = [];
              
            each(
                object,
                function (index, element) {
                    
                    filter(element) ? push.call(left, element) : push.call(right, element);
                }
            );
            
            return [left, right];
        },
        flatten = function (object) {
            
            var result = [];
            
            each(
                object,
                function (index, element) {
                    
                    if (isArray(element))
                        result = concat.call(result, flatten(element));
                    else
                        push.call(result, element);
                }
            );
            
            return result;
        },
        reduce = function (array, filter) {
            
            var result;
            
            each(
                array,
                function (index, element) {
                    
                    result = filter.call(array, index, element, result);
                }
            );
        },
        trim = function (string) {
            
            return string.replace(/^\s*|\s*$/g, "");
        },
        elementary = {
            extend: extend,
            isArray: isArray,
            isFunction: isFunction,
            isObject: isObject,
            clone: clone,
            each: each,
            map: map,
            partition: partition,
            flatten: flatten,
            reduce: reduce,
            trim: trim
        };
    
    context.elementary = context.elementary || elementary;
    context.$ = context.$ || {};
    
    for(var property in elementary) {
        
        $[property] = $[property] || elementary[property];
    }
    
})(this);