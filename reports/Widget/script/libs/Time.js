/**
 * Возвращает начало недели, отсчет может начинаться с любого дня
 *
 * @param {(object|string)} date текушее дата и время.
 * @param {number} weekStart начало недели.
 * @return {object} объект Date c датой начала недели.
 */

function getWeekStart (date, weekStart) {
    var stampString,
        d = new Date(),
        dif;

    if (Object.prototype.toString.call(date) === '[object String]') {
        stampString = parseInt(date, 10);
        if (stampString === NaN) {
            console.log("Wrong function call: date should contain only numbers");
        }
    }
    if (Object.prototype.toString.call(date) === '[object Number]') {
        stampString = date;
    }
    if (stampString) {
        d.setTime(stampString);
    }
    if (Object.prototype.toString.call(date) === '[object Object]') {
        d.setDate(date.getDate());
    }

    if (weekStart === undefined) {
        weekStart = 1;
    } else {
        if (Object.prototype.toString.call(weekStart) !== '[object Number]') {
            throw new Error("Wrong function call: type mismatch");
        } else {
            if (!(weekStart >= 0 && weekStart <= 6)) {
                throw new Error("weekStart must be a number of [0,6]");
            }
        }
    }

    dif = d.getDay() - weekStart;
    if (weekStart > d.getDay()) { dif += 7; }
    d.setDate(d.getDate()-dif);
    return d;
}




