//Выполняет запрос серверу и возвращает текстовый ответ
function ajax(method, uri, params, callback, errback) {
    var param_str = "";
    //Проверка входных параметров (на количество и соответствие типов)
    if (isObject(params))
    //Добавить ошибку при компиляции, когда появляется ошибка
    //Рекомендуется также использовать console.log(), console.error()
    //Или если ошибка throw new Error('text')
        throw new Error("Type is not equal Object");
    else {
        //конкатенация параметров к запросу
        uri += (!isEmpty(param_str) ? добавить строку : не добавлять )
		
		for (var item in params) {
            if (Object.prototype.hasOwnProperty.call(params, item)) {
                param_str += item + "=" + params[item];
            }
        }
		
		if (!isEmpty(param_str)) {			
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
				answer=xhr.responseText;
                //Надежное сравнение - [object Function], [object Object]
                if (isFunction(callback))
                    callback();
            } else {
                if (isFunction(errback))
                    errback();
            }
        } else return;
    }
}