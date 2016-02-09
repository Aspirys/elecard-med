/* function (timestamp(или)Date, weekStart(0,1...6), ) //Начало недели - любой день
недели //Понадобится для расписаний
Возвращает дату начала недели
# 25 августа, начало недели - вторник -> Вычисление даты вторника (24 августа если 25ое среда)
- Смотрим Date (для начала только Date, на сервере timestamp в милисекундах ?, браузер понимает timestamp в микросекундах)
*/
//объявить в глобальном scope getDay
//Интерпретатор проходится по local scope(только функцией) -> global objects
//getWeekStart(строка/объект/т.д.,start) - пример вызова

//проверки: пришел ли curTime (иначе искл. undefined или null)
//если пришел -> приводим к integer (parseInt), либо Date
//if weekStart undefined - 1, иначе мои проверки, иначе ненормальный вызов функции

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
        if (Object.prototype.toString.call(weekStart) === '[object Number]') {
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


