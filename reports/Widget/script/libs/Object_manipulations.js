//--------------------------Способы создания объектов----------------------------------------------------//
// -------С нуля----------------------//
    var o = new Object()
    var o = {}

    //Добавление свойств
    o.test = 5
    o["test"] = 5
    Object.defineProperty(obj,prop,descriptors)
    //Общие ключи (enumerable,configurable)
    //Ключи дескрипотора данных (value, writable)
    //Ключи дескриптора свойств (get, set)

    //Если свойство инициализировано переменной
    var name = 'test'
    o[name] = 5

//-----Клонирование объектов--------------//
    //Создаем объект o
    var o = {
        value : 5,
        name : "Obj1",
        hhh: {as: 666}
    };

    //Объект clone клонирует o
    var clone = {};
    for (var key in o) {
        clone[key] = o[key];
    }
    //В clone хранятся скопированные примитивы и ссылки на объекты
    clone.hhh.dd = {dd: 88};

    //---Сделать глубокое копирование объекта--------//
    //Mетоды jQuery - не пользуемся
    //var clone = jQuery.extend(true, {}, o);
    //Рекурсивное копирование obj2 в obj1
    function deepCopy (obj1, obj2) {
        var key,
            i;
        for (key in obj2) {
            if (typeof obj2 === "undefined") {
                console.log("Second deepCopy parameter is not an object");
                break;
            }
            if (typeof obj2[key] !== "object")  {
                obj1[key] = obj2[key];
                continue;
            }
            if (isArray(obj2[key])) {
                for (i = 0; i < obj2[key].length; i++) {
                    if (isObject(obj2[key][i])) {
                        deepCopy (obj1[key][i],obj2[key][i]);
                    } else {
                        obj1[key][i] = obj2[key][i];
                    }
                }
                continue;
            }
            if (isObject(obj2[key])) {
                deepCopy (obj1[key],obj2[key]);
                continue;
            }
        }
    }


//-----------С помощью функции-конструктора--------//
    function Person(name) {
        this.name = name;
        this.level = 1;
        this.showName = function () {
            console.log ("Person name is " + this.name);
        }
    }

    var person1 = new Person("Jack");
    person1.showName();

    //Либо с помощью call
    var person2 = {};
    Person.call (person2,"Dima");
    person2.showName();

//-----------Создание метода прототипным стилем-----------------//
    Person.prototype.showName = function () {console.log("Person name is " + this.name)};

    //При помощи prototype можно расширять нативные классы (Object, String, Array и т.д.)
    //Не рекомендуется делать!!
    String.prototype.addSymbol = function(s) {return this+s;}  //str.addSymbol(s);

    //Object.prototype.hasOwnProperty.call(params, item) - проверка, является ли свойство объекта собственным, либо оно
    //клонировано с другого объекта

    var param_str = Object.keys(params).map(function(key){ return key + '=' + params[key];}).join('&');
    //keys - ключи ассоциативного массива свойств объекта params
    //метод map() - для ассоциативного массива свойств создает новый массив. По __proto__ переходит к
    //методам Array

