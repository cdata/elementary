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
})();
