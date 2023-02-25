# Мутация в JavaScript
***
## значения примитивных типов
```
const a = 10
let b = a
b = 30
console.log(a) // 10
console.log(b) // 30
```
***
## Значения ссылочного типа
```
const person = {
    name: 'Bob',
    age: 21
}                   Мутация объекта, на которой ссылается перменная "person"
                  ↙  
person.age = 22
person.isAdult = true

console.lg(person.age) // 22
console.lg(person.isAdult) // true
```
***
## Мутирование копий
```
const person = {
    name: 'Bob',
    age: 25
}
                       
const person2 = person

person2.age = 26
person2.isAdult = true

console.log(person.age) // 26
console.log(person.isAdult) // true
```
***
## Как избежать мутации?
```
    ВАРИАНТ 1
const person = {                           
    name: 'Bob',
    age: 25
}

const person2 = Object.assign({}, person)

person2.age = 26

console.log(person2.age) // 26
console.log(person.age) // 25
```
> * Если у объекта есть вложенные объекты, то ссылки на них сохраняются
```
    ВАРИАНТ 1
const person = {
    name: 'Bob',
    age: 25
}
     Оператор разделения объектов
                   ⇩
const person2 = { ...person }

person2.name = 'Alice'

console.log(person2.name) // Alice
console.log(person.name) // Bob
```
```
    ВАРИАНТ 3
const person = {
    name: 'Bob',
    age: 25
}
            Конверция в объект    Конверция в строку
                       ⇩             ⇩
const person2 = JSON.parse(JSON.stringify(person))⇦ Ссылки на вложенные объекты не сохраняются

person2.name = 'Alice'

console.log(person2.name) // Alice
console.log(person.name) // Bob
```





































































