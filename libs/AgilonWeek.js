var AgilonWeeks = function () {};

var MONTH_NAMES = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
var SEPARATOR = ' ';
var _START_DATE = new Date(2015, 10, 30);

function _dayDiff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

function _getWeekNumber(date) {
    var diffDay = _dayDiff(_START_DATE, date);
    return Math.trunc(diffDay / 7);
}

AgilonWeeks.prototype.getDriverAtDate = function (d) {
    var wn = _getWeekNumber(d);
    return this.getSequence()[wn % 7];
};

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

AgilonWeeks.prototype.getNextDriver = function (driver) {
    var seq = this.getSequence();
    for (var i = 0; i < seq.length; i++) {
        if (seq[i] === driver) {
            return i < seq.length - 1 ? seq[i+1] : seq[0];
        }
    }
};

module.exports = new AgilonWeeks();