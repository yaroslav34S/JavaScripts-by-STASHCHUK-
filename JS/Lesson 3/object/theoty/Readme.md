# Объекты
***
> * Практически все сущности в Java Script - объекты
> * Объект - это набор свойств 'Имя значение"
> * Объект - это тип хначений
> * обект - тип переменных

### Пример
```
const myCity = {
   city: 'NewYork', ⇦ (New York - значение Свойства)
   popular: true,
   country: 'USA' ⇦ (country - Свойство)
}
```
> * Порядок свойств не имеет значения
### Пример
```
const myCity = {
   city: 'NewYork', 
   popular: true,
   country: 'USA' 
}
```
```
const myCity = {
   popular: true,
   country: 'USA',
   city: 'NewYork'
}
```
***
## Получение значений свойств
### Пример
```
const myCity = {
   city: 'NewYork', 
   popular: true,
   country: 'USA' 
}
console.log(myCity.city) // NewYork
console.log(myCity.popular) // true
```
***
## Создание и удаление свойств объектов
### Добавление новых свойств
```
const myCity = {
city: `New York`
}
myCity.popular = true
console.log(myCity) // {city: `New York`, popular: true}

myCity.country = 'USA'
 console.log(myCity) // {city: `New York`, popular: true, country: 'USA'} 
```
***
## Удаление свойств
```
const myCity = {
   city: 'NewYork', 
   popular: true,
   country: 'USA' 
}
delete myCity.country ⇦(delete - оператор "удаления")

consolt.log(myCity)
// {city: 'New York', popular: true}
```
*** 
## Доступ значению свойства с использованием скобок
```
const myCity = {
   city: 'New York'
}
myCity['popular'] = true
console.log(myCity) // {city: 'New York', popular: true}
const country PropertyName = 'country'
myCity[countryPropertyName] = 'USA'
console.log(myCity) //{city: 'New York', popular: true, country: 'USA'}  
```
***
## Вложенные свойства
```
const myCity = {
   city: 'New York',
   info: {
     isPopular: true, ⇦ Вложенный объект
     country: 'USA'
   }
}
console.log(myCity.info.isPopular) // true
delete myCity.info['isPopular']
console.log(myCity) // {city: 'New York', info: {country: 'USA'}}
```
***
## Сокращенный формат записи свойств
### Использование перменных
```
const name = 'Yaroslav'
const postsQty = 14

const userProfile = {
    name: name,
    postsQty: postsQty,
    hasSignedAgreement: false
}
```
## Сокращенный формат записи
```angular2html
const name = 'Yaroslav'
const postsQty = 14

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}
```
## Глобальные объекты
# ```window``` ```global```
> * window -для Веб браузеров
> * global - для Node.js

> globalThis - унифицированный объект
## Свойства глобальных объектов
### ```console```
### ```window.console```
### ```global.console```
## Примеры
```
console.log('Hello')
```
```
window.console.log('Hello')🢦 Веб браузеры
```
```
global.console.log('Hello')
```
***
## Методы объекта
> * Метод - свойство объекта значение которого - функция
### Пример
```
const myCity = {
    city: 'New York',
    cityGreeting:  function () {
        console.log('Greetings!!')
    }
}

myCity.cityGreting()🢦 Вызов метода  // 'Greetings!!'
(cityGreeting - метод)
```
***
## Методы VS Объекты
```myCity.city```🢦 доступ к значению свойства

```myCity.cityGreeting()```🢦 Вызов метода
***
## JSON-JavaScript object notation
### Пример
```angular2html
{
"userId": 1,
"id": 1,
"title": "Test title",
"status": {
    "completed": false
    }
}
```
## Конверция JSON в Объект
```
{
   userId: 1,
   id: 1,
   title: 'Test   title',
   status: {
     comleted:false,
   },
}
```

































