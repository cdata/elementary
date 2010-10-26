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
            basicClone = e.extend(
                {},
                basicObject
            ),
            extendedClone = e.extend(
                {
                    two: 2
                },
                basicClone
            );
            
            e.extend(
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
            
            result(e.isArray([]), 'Check against shorthand array');
            result(e.isArray(new Array()), 'Check against "new Array()"');
            result(!e.isArray(1), 'Check against number');
            result(!e.isArray('string'), 'Check against string');
            result(!e.isArray({}), 'Check against shorthand object');
            result(!e.isArray(new Object()), 'Check against "new Object()"');
            result(!e.isArray(function(){}), 'Check against anonymous function object');
            result(!e.isArray(myFunc), 'Check against inline function object');
        }
    );
    
    test(
        'Elementary "isFunction"',
        function() {
            
            function myFunc(){};
            
            result(e.isFunction(function(){}), 'Check against anonymous function object');
            result(e.isFunction(myFunc), 'Check against inline function object');
            result(!e.isFunction([]), 'Check against shorthand array');
            result(!e.isFunction(new Array()), 'Check against "new Array()"');
            result(!e.isFunction(1), 'Check against number');
            result(!e.isFunction('string'), 'Check against string');
            result(!e.isFunction({}), 'Check against shorthand object');
            result(!e.isFunction(new Object()), 'Check against "new Object()"');
        }
    );
    
    test(
        'Elementary "isObject"',
        function() {
            
            function myFunc(){};
            
            result(e.isObject({}), 'Check against shorthand object');
            result(e.isObject(new Object()), 'Check against "new Object()"');
            result(e.isObject(function(){}), 'Check against anonymous function object');
            result(e.isObject(myFunc), 'Check against inline function object');
            result(!e.isObject([]), 'Check against shorthand array');
            result(!e.isObject(new Array()), 'Check against "new Array()"');
            result(!e.isObject(1), 'Check against number');
            result(!e.isObject('string'), 'Check against string');
        }
    );
    
    test(
        'Elmentary "clone"',
        function() {
            
            var myArray = [1, 2, 3],
                myObject = {one: 'one', two: 2, three: true},
                cloneArray = e.clone(myArray),
                cloneObject = e.clone(myObject),
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
            
            e.each(
                myArray,
                function(i, e) {
                    arrayResult = arrayResult && (myArray[i] == e);
                }
            );
            
            e.each(
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
        'Elementary "partition"',
        function() {
            
            var myArray = [1, 2, 3, 2, 5, 2, 6, 2, true, true, false],
                myObject = {one: 1, two: 'two', three: true},
                partition;
            
            partition = e.partition(
                myArray,
                function(value) {
                    
                    return value == 2 || value === true;
                }
            );
            
            result(partition[0].length == 6 && partition[1].length == 5, 'Partition of array');
            
            partition = e.partition(
                myObject,
                function(value) {
                    
                    return value == 'two';
                }
            );
            
            result(partition[0].length == 1 && partition[1].length == 2, 'Partition of object');
        }
    );
    
    test(
        'Elementary "string"',
        function() {
            
            var testString = "   Hello, this is some <p>text</p>, and it con   tains lots of   weird whitespacing             \
                                    \
                                                ",
                controlString = "Hello, this is some <p>text</p>, and it con   tains lots of   weird whitespacing",
                resultString = e.string.trim(testString);
            
            result(controlString == resultString, "Whitespace trimming");
        }
    );
})();
