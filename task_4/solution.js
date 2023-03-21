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
        function renderProductsCards(json) {//Создайте функцию renderProductsCards(json). Аргументом функции renderProductsCards является JSON.
        clearProducts();
        let products = parseProducts(json);
        return products;
            }
         }

javascript
    clearProducts();// Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются

let products = data.products; // Создайте в функции renderProductsCards переменную products.

javascript
    for (let i = 0; i < length; i += 1) {
        products = parseProducts(json);//Присвойте переменной products результат выполнения функции parseProducts, передав в неё JSON-аргумент функции следующим образом:
  // Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
        length = products.length;// Запишите в переменную length значение свойства products.length
        for (let i = 0; i < length; i +=1) {// Напишите цикл, в котором перебираете все products от 0 до (length - 1)
        addProduct(products[i]);
        }
          // место для пункта 7
    }

// и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
//Каждую итерацию цикла вызывайте функцию addProduct, передавая элемент массива, как аргумент:
javascript
addProduct(products[i]);
