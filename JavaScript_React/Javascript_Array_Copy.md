## Array copy in Javascript
<br/>

* Shallow copy: 복사 된 배열에도 영향을 미침. 한 쪽의 값이 바뀌면 다른 한 쪽도 값이 바뀜.
* Deep copy: 어느 한 쪽의 수정으로 다른 쪽에 영향을 미치지 않음.

1. Spread Operator (shallow copy)
```javascript
array = [1, 2, [3]]
array_copy = [...array]
```

2. for 문 (shallow copy)
```javascript
array = [1, 2, [3]]
array_copy = []

for (let i < 0; i < array.length; i++) {
  array_copy[i] = array[i]
}
```

3. Array.filter() (shallow copy)
```javascript
array = [1, 2, [3]]
array_copy = array.filter(() => true)
```

4. JSON.parse and JSON stringify (deep copy)
```javascript
array = [1, 2, [3]]
array_copy = JSON.parse(JSON.stringify(array))
```
