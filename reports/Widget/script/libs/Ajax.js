function ajax(method, uri, params, callback, errback) {
    var param_str = "",
        item,
        answer = "";
    if (isObject(params)) {
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
    xhr.onreadystatechange = function () {
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


