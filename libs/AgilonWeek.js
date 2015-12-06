var AgilonWeeks = function () {};

var MONTH_NAMES = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
var SEPARATOR = ' ';

AgilonWeeks.prototype.getCurrentDate = function () {
    var d = new Date();
    var day = d.getDate();
    var monthIndex = d.getMonth();
    var year = d.getFullYear();
    return day + SEPARATOR + MONTH_NAMES[monthIndex] + SEPARATOR + year;
};

AgilonWeeks.prototype.getSequence = function () {
    return ['Manu', 'Cris', 'Nik'];
};

module.exports = new AgilonWeeks();