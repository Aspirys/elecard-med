/**
 * Возвращает массив ссылок с отсортированными свойствами-объектами in по свойству t
 *
 * @param {Array} inp массив для сортировки.
 * @param {string} prop имя свойства по которому производится сортировка.
 * @param {number} t 1 - по убыванию. По умолчанию - по возрастанию
 * @return {Array} объект с отсортированными свойствами.
 */
function propertySort(inp, prop, t) {
  if (typeof inp === 'undefined' || Object.prototype.toString.call(inp) !== '[object Array]') {
      throw new Error ("Invalid parameter in");
  }
  if (typeof prop === 'undefined' || Object.prototype.toString.call(prop) !== '[object String]' || prop === "") {
      throw new Error("Invalid parameter prop");
  }
  if (typeof t !== 'undefined' && (isNaN(t = parseInt(t, 10)))) {
      throw new Error("Invalid parameter t");
  }
  var mass = [],
      i,
      it,
      comparison = function(item1, item2) {
        it = item1.window[prop].localeCompare(item2.window[prop]);
        if (t) { it = -it; }
          return it;
      };

  for (i = 0; i < inp.length ; i++) {
      mass[i] = inp[i]; //копируем ссылки на объекты
  }
  return mass.sort(comparison);
}
