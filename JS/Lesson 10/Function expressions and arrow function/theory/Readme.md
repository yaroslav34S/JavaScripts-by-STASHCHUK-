# Стрелочные функции
***
## Стрелочная функция
```
(a, b) => {
    let c 
    a = a + 1
    c = a + b
    return c
}
```
> Стрелочная функция - выражение
> Стрелочные функции всегда анонимные
## Как дать имя стрелочной Функции?
### Пример
```
const myFunction = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}
myFunction(5, 3) //9
```
## Стрелочная функция в вызове другой функции
```
setTimeout(() => {
    console.log('Отложенное сообщение')
}, 1000)

// 'Отложенное сообщение' будет выведено в консоль через 1000 мс (1 сек)
```
## Сокращения в стрелочной функциях
```
a => {
    // Тело функции
}
```
```
(a, b) => a + b
```
***
## Значения параметров функции по умолчанию
### Пример
```
function multByFactor(value, multiplier = 1) {
    return value * multiplier
}

multByFactor(10, 2) // 20
multByFactor(5) // 5
```
### Пример 2
```
const new Post = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Yaroslav',
}

newPost(firstPost)
```



