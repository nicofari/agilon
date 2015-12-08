var assert = require('assert');
var sinon = require('sinon');

describe("AgilonWeek", function () {
    var target;
    
    beforeEach(function () {
        target = require('../libs/AgilonWeek.js');
    });
    
    it('should return the correct sequence', function () {
       assert.deepEqual(['Manu', 'Cris', 'Nik'], target.getSequence()); 
    });
    
    it('should return the driver based on date passed', function () {
       assert.equal('Manu', target.getDriverAtDate(new Date(2015, 10, 30)));
       assert.equal('Manu', target.getDriverAtDate(new Date(2015, 11, 4)));
       
       assert.equal('Cris', target.getDriverAtDate(new Date(2015, 11, 7)));
       assert.equal('Cris', target.getDriverAtDate(new Date(2015, 11, 11)));
       
       assert.equal('Nik', target.getDriverAtDate(new Date(2015, 11, 14)));
    });
});
