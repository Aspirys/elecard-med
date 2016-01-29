//Создание объекта параметров
var params = {
	lpu = '001',
	status: '1'
}
//Выполняет запрос серверу и возвращает текстовый ответ
function ajax(method, URI, params{}, sucess(), error()) {
	var item;
	//Проверка входных параметров (на количество и соответствие типов)
	if (Object.prototype.toString.call(params) !==  '[object Object]')
		//Добавить ошибку при компиляции, когда появляется ошибка
		//Рекомендуется также использовать console.log(), console.error()
		//Или если ошибка throw new Error('text')
		throw new Error("Type is not equal Object");
	else {
		for (item in params) {			
		 	if (Object.prototype.hasOwnProperty.call(params, item)
				&& item) {
				if (item)
					URI+= "?";
				else
					URI+="&";
				URI+= item.toString + '=' + params.item;
			}
		}
	}
	var xhr = new XMLHttpRequest();
	xhr.open(method, URI, false);
	xhr.send();
	if (xhr.status != 200) {
		if (Object.prototype.toString.call(error) ===  '[object Function]')
			callback error();
		alert(xhr.status + ': ' + xhr.statusText);
	} else {
		//Надежное сравнение - функция или нет
		if (Object.prototype.toString.call(sucess) ===  '[object Function]')
			callback sucess();
	}
}