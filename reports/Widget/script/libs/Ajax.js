//Выполняет запрос серверу и возвращает текстовый ответ
function ajax(method, uri, params, callback, errback) {
    var param_str = "",
        item,
        answer = "";
    //Проверка входных параметров (на количество и соответствие типов)
    if (isObject(params)) {
        //конкатенация параметров к запросу
        for (item in params) {
            if (Object.prototype.hasOwnProperty.call(params, item)) {
                param_str += item + "=" + params[item] + "&";
            }
        }
        if (!isEmpty(param_str)) {
            param_str = param_str.substring(0, param_str.length - 1);
            uri += "?" + param_str;
        }
    }
    var xhr = new XMLHttpRequest();
    xhr.open(method, uri, true);
    xhr.send();
    //Выполняем пока идёт загрузка
    xhr.onreadystatechange = function () {
        //xhr.setRequestHeader ('Header','content') - Добавить заголовок к запросу
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
				answer=JSON.parse(xhr.responseText);
                if (isFunction(callback)) {
                    callback(answer);
                }
            } else {
                if (isFunction(errback)) {
                    errback();
                }
            }
        } else return;
    }
}