# Все о Java Scripts
## Lesson 1
***
### Самое важное в Java Scripts:
+ Выражения 
+ Функции
+ Объекты

В JS почти все сущности являются объектами


```
 Обект - это набор свойств "ИМЯ: ЗНАЧЕНИЕ".
```
***
Пример объекта:
```
{
  visible: true,
  colorDepth: 24,
  title: 'My Image',
  orientation: {
   angle: 0,
   type: 'landscape'
   },
  pixelDepth: 24,
  width: 1440  
}
```
*** 

### ``` Массив - это Объект ```

### ``` Функция - это Объект  ```  

### ``` Число - это Объект* ```

### ``` Строка - это Объект* ```

> ###### * ведут себя как объекты 

---
### Что такое console.log:
```
 console.log() - нужен для того, чтобы отображать
входные данные в консоли браузера.
```

> console.log('Hello World')

* ``` console - это объект ```
* ```. - это точечная запись ```
* ``` log - это метод(функция) объекта ```
* ``` () - это Вызов метода ``` 
* ``` "Hello World" - это значение "String" ```

### Существуют другие отображения объектов 

> console.dir() 

###### 🡅 Отображает все свойства Объекта 🡅

> console.table()
 
###### 🡅 Отображает все свойства Объекта в табличном втиде 🡅

***
### Выражения 
> ⬥ Любое выражение всегда ↶возвращает значение
***
⭔ Примеры
> * Результатом каждого выражения является значение

``` 'abc' ``` // 'adc'

``` 10 ``` // 10

``` 5 + 2 ``` // Сумма "a" и "b"

``` c =10 ``` 

``` 'Good' + 'Evening' ``` // 'Good Evening'

``` a <= b || c !== d ``` // true или false

``` myFunction(c, d) ```  результат фнкции

---

## Выражение присваивания
Пример

``` a = 20 ```

🡅Выражение в которм значение присваивается переменной🡅

---

## Выражения с побочными действиями    

``` a = 5``` 
```b++```
```myFunction(c,d)```

🡅Не только возвращает выражение, но и впыолняет другие действия🡅




