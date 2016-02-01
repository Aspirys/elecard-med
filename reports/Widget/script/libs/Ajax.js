var parameter = {
    lpu:'0001',
    status :1
}
//Выполняет запрос серверу и возвращает текстовый ответ
function ajax(method, uri, params, callback, errback) {
    var item;
    var param_str = "";
    var trg = false;
    //Проверка входных параметров (на количество и соответствие типов)
    if (Object.prototype.toString.call(params) !== '[object Object]')
    //Добавить ошибку при компиляции, когда появляется ошибка
    //Рекомендуется также использовать console.log(), console.error()
    //Или если ошибка throw new Error('text')
        throw new Error("Type is not equal Object");
    else {
        //конкатинация параметров к запросу
        for (item in params) {
            if (Object.prototype.hasOwnProperty.call(params, item)) {
                if (trg) {
                    param_str += "&";
                }
                param_str += item + '=' + params[item];
                trg = true;
            }
        }
        if (param_str !== "") {
            uri += "?" + param_str;
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.open(method, uri, true);
    xhr.send();
    //Выполняем пока есть загрузка
    xhr.onreadystatechange = function () {
        //xhr.setRequestHeader ('Header','content') - Добавить заголовок к запросу
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                //Надежное сравнение - [object Function], [object Object]
                if (Object.prototype.toString.call(callback) === '[object Function]')
                    callback(console.log(xhr.responseText));
            } else {
                if (Object.prototype.toString.call(errback) === '[object Function]')
                    errback();
            }
        } else return;
    }
}