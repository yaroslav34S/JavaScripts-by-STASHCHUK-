# Переменные и типы
***
## Переменные
```
Переменные дают возможность повторного доступа к значениям.
```
## Имена переменных
> PascalCase(Типы и классы)
 
> DB_PASSWORD(значения известны до запуска приложения и не меняются во время работы)

 > camelCase(все остальные переменные(используется чаще всего))

### Имена переменных должны быть понятными.
***
# Объявление переменных
***
### Пример:
> * let a ↶ объявление
> * const c = 10 ↶ объявление и присваивание
> * a = true ↶ Присваивание

## Какая разница между let и const?



```let          
let a = 10
a = 20     
let b          
b = false
```

```  
const 
const c = 10
c = 20                          
//TypeError:assigment to constant variable  
```
## Объявление и присваивание
### Пример
> Console.log(a) // RtferenceError: a is not defiend
 
> let a ⮪ объявление
> console.log(a) // underfiend
 
> a = true ⮪ присваивание
> console.log(a) // true
***

## Примитивные типы

> * тип переменной - определяется типом присвоенного значения

## Примеры
```
const a = 10
const b = 'abc'
```
```
                                Переменная
                                    🢃
                              Имеет значение
                                    🢃
                            Значение имеет тип
```
## Примитивные типы
### ```string (строка)``` ``` boolean (логический)``` ```number (число)```

### ```null``` ``` underfiend```

### ```sumbol (символ)```
***
## Ссылочный тип
### ```object (объект)```
## Значения примитивных типов

### ```Память```
#### ``` 'Hello World' ```   ```underfiend```
#### ```true```              ```25```   
***
## Ссылочный тип
### ```Память```
```
0x3151
  🡇   
{
a: 10 
b: true
}
```
```
  0x7213
    🡇
 [1, 2, 3]
```
## Пример
```angular2html
const objectA = {
a: 10,
b; true
}
```
***
## Статическая и Динамическая типизации
```String a = 'abc''```

```int b = 10 ```

```b = 'xyz' //Error```

``` ⮤ это не Java scripts ```

```
a = 'abc' // String

       🡇
    
 a = 10 // Number
```
> * Java Script Динамический Типизируемый язык

## Динамическая типизация в Java Script
## Примеры
```
let a = 10
a = true
a = 'Yaroslav'
a = underfiend
```
```
function a () {
  console.log('Hey there')
}
a() // 'Hey there'
a = 10
a() // Uncaught TypeError: a is not a fuction 
```
***
## const для объявления переменных
> * const позволяет предотвратить возможные проблемы, связанные с динамической типизацией
## Пример
```angular2html
const a = () => {
   console.log('Hey there')
}
a() //'Hey there'         
a = 10 // TypeError:    🠈 Переменной "a" нельзя присвоить новое значение
Assignmet to constant 
variable
a()
```
## Правила работы с переменными
> 1. Все переменные объявляют перед их использованием
> 2. Стараться использовать const везде, где это возможно


























 