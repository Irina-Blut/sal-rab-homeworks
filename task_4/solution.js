// Задание 4.1. Вывод карточек товаров
// Закончите функцию parseProducts(). Аргументом функции parseProducts является JSON.
javascript
let data = JSON.parse(json); // Верните как результат функции свойство products объекта data. Верните с помощью return как результат функции parseProducts переменную products.
products = parseProducts(json);

function parseProducts(json) {// Преобразуйте строку json, переданную как аргумент функции,
    let data = JSON.parse(json); // Создайте переменную data. Присвойте переменной data результат преобразования аргумента в объект — JSON.parse(json).в объект с помощью функции JSON.parse(json)и запишите в переменную data
    let products = data.products;//Создайте переменную products. Присвойте products значение свойства data.products.
    return products;
    }

 function renderProductsCards(json){ // Напишите функцию renderProductsCards(json)
       // дальнейшие действия требуется выполнять тут
        clearProducts();
        let products = parseProducts(json); //Присвойте переменной products результат выполнения функции parseProducts, передав в неё JSON-аргумент функции 4
        length = products.length;// Запишите в переменную length значение свойства products.length 5
        for (let i = 0; i < length; i +=1) {// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
            addProduct(products[i]); //7
            }
        return products;
        }

        


