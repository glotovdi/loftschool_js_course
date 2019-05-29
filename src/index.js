/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (var index = 0; index < array.length; index++) {
        fn(array[index], index, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
    var newArr = [];

    for (var index = 0; index < array.length; index++) {
        newArr[index] = fn(array[index], index, array);
    }

    return newArr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var acc = initial || array[0];
    var index = !initial ? 1 : 0;

    for (index; index < array.length; index++) {
        acc = fn(acc, array[index], index, array);
    }

    return acc;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    return Object.keys(obj).map(key => key.toUpperCase());
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to = array.length) {
    var resultArray = [];

    /** Если аргументы отрицательные, то элементы берутся с конца */
    if (from < 0) {
        from = array.length + from;
    }

    if (to < 0) {
        to = array.length + to;
    }

    if (from < 0) {
        from = 0;
    }

    if (to > array.length) {
        to = array.length;
    }

    for (var index = from; index < to; index++) {
        resultArray.push(array[index]);
    }

    return resultArray;
}

/*
Задание 6  *: 

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    let proxy = new Proxy(obj, {

        set(target, prop, value) {
            target[prop] = value * value;

            return true;
        }
    });

    return proxy;
}

export { forEach, map, reduce, upperProps, slice, createProxy };

