var assert = require('assert');

describe("AgilonWeek", function () {
    var target;
    
    beforeEach(function () {
        target = require('../libs/AgilonWeek.js');
    });
    
    it("should return the current date in expected format", function () {
        assert.equal('6 dicembre 2015', target.getCurrentDate());
    });
    
    it('should return the correct sequence', function () {
       assert.deepEqual(['Manu', 'Cris', 'Nik'], target.getSequence()); 
    });
});
