(function(){
    
    var out = function(message) {
            
            try { console.log(message); } catch(e) {}
        },
        test = function(title, execution) {
            
            var passed = 0,
                failed = 0;
            
            out('TEST: ' + title);
            
            this.result = function(pass, message) {
                
                pass ? passed++ : failed++;
                out((pass ? 'PASS: ' : 'FAIL: ') + message);
            };
            
            execution.call();
            
            out('RESULT: ' + passed + '/' + (passed + failed) + ' tests passed.');
        };
    
    test(
        'Elementary "extend"',
        function() {
            
            var basicObject = {
                one: 'One'
            },
            basicClone = $.extend(
                {},
                basicObject
            ),
            extendedClone = $.extend(
                {
                    two: 2
                },
                basicClone
            );
            
            $.extend(
                basicObject,
                {
                    one: 'NotOne',
                    three: true
                }
            );
            
            result(basicObject.one == 'NotOne' && basicObject.three, 'Basic extension');
            result(basicClone.one == 'One' && !basicClone.three, 'Object cloning');
            result(extendedClone.one == 'One' && extendedClone.two == 2, 'Object cloning with extension');
        }
    );
    
    test(
        'Elementary "isArray"',
        function() {
            
            function myFunc() {};
            
            result($.isArray([]), 'Check against shorthand array');
            result($.isArray(new Array()), 'Check against "new Array()"');
            result(!$.isArray(1), 'Check against number');
            result(!$.isArray('string'), 'Check against string');
            result(!$.isArray({}), 'Check against shorthand object');
            result(!$.isArray(new Object()), 'Check against "new Object()"');
            result(!$.isArray(function(){}), 'Check against anonymous function object');
            result(!$.isArray(myFunc), 'Check against inline function object');
        }
    );
    
    test(
        'Elementary "isFunction"',
        function() {
            
            function myFunc(){};
            
            result($.isFunction(function(){}), 'Check against anonymous function object');
            result($.isFunction(myFunc), 'Check against inline function object');
            result(!$.isFunction([]), 'Check against shorthand array');
            result(!$.isFunction(new Array()), 'Check against "new Array()"');
            result(!$.isFunction(1), 'Check against number');
            result(!$.isFunction('string'), 'Check against string');
            result(!$.isFunction({}), 'Check against shorthand object');
            result(!$.isFunction(new Object()), 'Check against "new Object()"');
        }
    );
    
    test(
        'Elementary "isObject"',
        function() {
            
            function myFunc(){};
            
            result($.isObject({}), 'Check against shorthand object');
            result($.isObject(new Object()), 'Check against "new Object()"');
            result($.isObject(function(){}), 'Check against anonymous function object');
            result($.isObject(myFunc), 'Check against inline function object');
            result(!$.isObject([]), 'Check against shorthand array');
            result(!$.isObject(new Array()), 'Check against "new Array()"');
            result(!$.isObject(1), 'Check against number');
            result(!$.isObject('string'), 'Check against string');
        }
    );
    
    test(
        'Elmentary "clone"',
        function() {
            
            var myArray = [1, 2, 3],
                myObject = {one: 'one', two: 2, three: true},
                cloneArray = $.clone(myArray),
                cloneObject = $.clone(myObject),
                arrayResult = true,
                objectResult = true,
                iter;
            
            for(iter in myArray) { arrayResult = arrayResult && (myArray[iter] == cloneArray[iter]); }
            
            for(iter in myObject) { objectResult = objectResult && (myObject[iter] == cloneObject[iter]); }
            
            result(arrayResult, 'Array cloning');
            result(objectResult, 'Object cloning');
        }
    );
    
    test(
        'Elementary "each"',
        function() {
            
            var myArray = [1, 2, 3],
                myObject = {one: 1, two: 'two', three: true},
                arrayResult = true,
                objectResult = true;
            
            $.each(
                myArray,
                function(i, e) {
                    arrayResult = arrayResult && (myArray[i] == e);
                }
            );
            
            $.each(
                myObject,
                function(i, e) {
                    objectResult = objectResult && (myObject[i] == e);
                }
            );
            
            result(arrayResult, 'Array iteration');
            result(objectResult, 'Object iteration');
        }
    );
    
    test(
        'Elementary "map"',
        function() {
            
            
        }
    );
    
    test(
        'Elementary "partition"',
        function() {
            
            var myArray = [1, 2, 3, 2, 5, 2, 6, 2, true, true, false],
                myObject = {one: 1, two: 'two', three: true},
                partition;
            
            partition = $.partition(
                myArray,
                function(value) {
                    
                    return value == 2 || value === true;
                }
            );
            
            result(partition[0].length == 6 && partition[1].length == 5, 'Partition of array');
            
            partition = $.partition(
                myObject,
                function(value) {
                    
                    return value == 'two';
                }
            );
            
            result(partition[0].length == 1 && partition[1].length == 2, 'Partition of object');
        }
    );
    
    test(
        'Elementary "flatten"',
        function() {
            
            var myArray = [false, 1, 2, 3, [4, 5, [6, "seven", 8], 9], function(){ return 10 }, [11], [[[[[[12]]]]]]],
                flatArray = $.flatten(myArray),
                arrayResult = true,
                iter;
            
            for(iter in flatArray) {
                
                arrayResult = arrayResult && !$.isArray(flatArray[iter]);
            }
            
            result(arrayResult && flatArray.length == 13, "Array flattening");
        }
    );
    
    test(
        'Elementary "reduce"',
        function() {
            
            
        }
    );
    
    test(
        'Elementary "trim"',
        function() {
            
            var testString = "   Hello, this is some <p>text</p>, and it con   tains lots of   weird whitespacing             \
                                    \
                                                ",
                controlString = "Hello, this is some <p>text</p>, and it con   tains lots of   weird whitespacing",
                resultString = $.trim(testString);
            
            result(controlString == resultString, "Whitespace trimming");
        }
    );
    
    test(
        'Elementary "classify"',
        function() {
            
            
        }
    );
})();
