# Обработка ошибок
***
## Что происходит в случае ошибок
```
const fnWithError = () => {
    throw new Error('Some error')
}
fnWithError()

console.log('Continue...')
```
## Try/Catch
```
try {
    // Выполнение блока кода
} catch (error) {
    // Это блок выполняется в случае возникновения ошибок в блоке try
}
```
```
const fnWithError = () => {
    throw new Error('Some error')
}

try {
fnWithError()
} catch (error) {
  console.error(error) 
  console.error(error.message) 

console.log('Continue...')
```






















