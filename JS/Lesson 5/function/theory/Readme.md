# Функции
***
> * Функция - это блок кода, который можно выполнять многократно.
## Примеры
```
let a = 5
let b = 3

let c
c = a + b
console.log(c) // 8

a = 8
b = 12

c = a + b
console.log(c) // 20
```
```
let a = 5
let b = 3

function sum(a, b) {
    const c = a+ b
    console.log(c)
}

sum(a, b) // 8

a = 8
b = 12

sum(a, b) // 20
```
## Функция может быть...
```...именованной``` ```...присвоена переменной```
```...анонимной``` ```...аргументом при вызове другой функции```
```...значением свойства (метода) объекта```

## Функция - это объект
```
function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
```
> using console.dir(myFn) чтобы отобразились свойства объекта
*** 
## Объявление и вызов функции
> * Функция всегда возвращает UNDEFIEND если нет инструкции RETURN
## Вызов функции
```
function myFn(a, b) {
    let c
    a = a + 1 
    c = a + b
    return c 
}

myFn(10, 3) // 14 ⇦(Вызов функции)
```
***
## Этапы вызова функции
> 1. Параметрам "a" и "b" присваиваются значения 10 и 3.
> 2. Объявляется переменная "c".
> 3. Значение "a" увеличивается на 1.
> 4. Сумма значений "a" и "b" присваиваются "c".

> * Параметры функции опциональны
***
## Самая короткая функция
```
function myFn() {}
myFn() // undefiend
```
*** 
# Передача значения по ссылке
***
### Пример
```
const personOne = {
    name: 'Bob',
    age: 21
>

function increasePersonOneAge(person) {
    person.age += 1
    return person
}

increasePersinAge(personOne)
console.log(personOne.age) // 22
```
> * Внутри функции не рекомендуется мутировать внешние объекты
## Создание копии объекта
```
const person = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = incerasePersonAge(personOne)
console.log(personOne.age) // 21
console.log(updatedPersonOne.age) // 22
```
> Объект "personOne" не изменился!
***
# Колбэк функции
### Пример
```
function anotherFunction() {
    // Действия...
}
fuction fnWithCallback (callbackFunction) {
    callbackFunction()
}

fnWithCallback(anotherFunction)
```
```
function printMyName() {
    console.log('Bogdan')
}
setTimeout(printMyName, 1000)
```
***
## Правила работы с функциями
> 1. Называть функции исходя из выполняемых задач.
> 2. дна функция должна выполнять одну задачу.
> 3. Не рекомендуется изменять внешние относительно функции переменные.















































































































