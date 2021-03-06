function isObject(item) {
	return Object.prototype.toString.call(item) === '[object Object]';
}

function isFunction(item) {
	return Object.prototype.toString.call(item) === '[object Function]';
}

function isString(item) {
	return Object.prototype.toString.call(item) === '[object String]';	
}

function isNumber(item) {
	return Object.prototype.toString.call(item) === '[object Number]';	
}

function isBoolean(item) {
	return Object.prototype.toString.call(item) === '[object Boolean]';
}

function isArray(item) {
	return Object.prototype.toString.call(item) === '[object Array]';	
}

function isEmpty(item) {
	if (isObject(item)) {
		var empty = true, fld;
		for (fld in item) {
			empty = false;
			break;
		}
		return empty;
	}

	if (isString(item)) {
		return item === "";
	}

	if (isNumber(item)) {
		return item === null;
	}

	if (isArray(item)) {
		return item.length == 0;
	}
}
