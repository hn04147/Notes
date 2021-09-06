# Javascript Code Conventions
<br/>

## 목차
* [들여쓰기](#1-들여쓰기)
* [문장의 종료](#2-문장의-종료)
* [명명 규칙](#3-명명-규칙)
* [블록 구문](#4-블록-구문)
* [조건 확인하기](#5-조건-확인하기)
* [반환하기](#6-반환하기)
* [주석](#7-주석)
* [공백](#8-공백)
<br/>

### 1. 들여쓰기
>space와 tab을 섞어서 사용하지 않는다. <br/>
>tab은 공백 문자 2개를 사용한다.
``` javascript
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i] / 2);
  };
};
```
<br/>

### 2. 문장의 종료
>한 줄에 하나의 문장만 허용하며, 문자 종료 시에는 반드시 세미콜론(;)을 사용한다.
<br/>

### 3. 명명 규칙
* 예약어를 사용하지 않는다.
``` javascript
// Bad
let class;
let enum;
let extends;
let super;
```
* 상수는 영문 대문자 스네이크 표기법(Snake case)을 사용한다.
``` javascript
SYMBOLIC_CONSTANTS;
```
* 생성자는 대문자 카멜 케이스를 사용한다.
``` javascript
class ConstructorName {
  ...
};
```
* 변수, 함수에는 카멜 케이스르 사용한다.
``` javascript
// 숫자, 문자, 불린
let dog;
let variableName;

// 배열 - 배열은 복수형 이름을 사용
const dogs = [];

// 정규표현식 - 정규표현식은 'r'로 시작
const rDesc = /.*/;

// 함수
function getPropertyName() {
  ...
}

// 이벤트 핸들러 - 이벤트 핸들러는 'on'으로 시작
const onClick = () => {};
const onKeyDown = () => {};

// 불린 반환 함수 - 반환 값이 불린인 함수는 'is'로 시작
let isAvailable = false;
```
* 지역 변수 or private 변수명은 '_' 로 시작한다.
``` javascript
let _privateVariableName;
let _privateFunctionName;

// 객체일 경우
const customObjectName = {};
customObjectName.propertyName;
customObjectName._privatePropertyName;
_privateCustomObjectName;
_privateCustomObjectName._privatePropertyName;
```
* URL, HTML 같은 범용적인 대문자 약어는 대문자 그대로 사용한다.
``` javascript
parseHTML
parseXML
```
<br/>

### 4. 블록 구문
* 한 줄짜리 블록일 경우라도 {}를 생략하지 않으며 명확히 줄 바꿈 하여 사용한다.
``` javascript
// Bad
if(condition) doSomething();

// Bad
if (condition) doSomething();
else doAnything();

// Bad
for(let prop in object) someIterativeFn();

// Bad
while(condition) iterating += 1;

// Good
if (condition) {
  ...
}

// Good
if (condition) {
  ...
} else {
  ...
}
```
* 키워드와 조건문 사이에 빈칸을 사용한다.
``` javascript
// Bad
var i = 0;
for(;i<100;i+=1) {
  someIterativeFn();
} 

// Good
let i = 0;
for(; i < 100; i += 1) {
  someIterativeFn();
} 
```
<br/>

### 5. 조건 확인하기
> 삼중 등호 연산자인 ```===```, ```!==```만 사용한다.
``` javascript
const numberB = 777;

// Bad
if (numberB == '777') {
  ...
}

// Good
if (numberB === 777) {
  ...
}
```
<br/>

### 6. 반환하기
* 함수 내에서 반환은 한 번만 한다.
> 특정 값을 반환해야 하는 경우, 함수 맨 마지막에서 한 번만 반환한다. 단, 예외로 빠져나가는 경우는 제외한다. 코드를 예측하기 쉬우며 흐름이 간결한 함수를 작성할 수 있다.
``` javascript
// Bad
function getResult() {
  ...
  if (condition) {
    ...
    return someDataInTrue;
  }
  ...
  return someDataInFalse;
}

// Allow
function foo(isValid) {
  ...
  // 예외처리로 바로 빠져나감
  if (!isValid) {
    return;
  }
  ...
  
  return someDataInTrue;
}

// Good
function getResult() {
  let resultData;
  ...

  if (condition) {
    ...
    resultData = someDataInTrue;
  } else {
    ...
    resultData = someDataInFalse;
  }

  return resultData;
}
```
* ```return```문 바로 위는 한 칸 비워놓는다.
``` javascript
// Bad
function getResult() {
  ...
  return someDataInFalse;
}

// Good
function getResult() {
  ...

  return someDataInFalse;
}
```
<br/>

### 7. 주석
* 주석은 설명하려는 구문에 맞춰 들여쓰기 한다.
``` javascript
// Bad
function someFunction() {
  ...

// statement에 관한 주석
  statements
}

// Good
function someFunction() {
  ...

  // statement에 관한 주석
  statements
}
```
* 문장 끝에 주석을 작성 할 경우, ```한 줄 주석```을 사용하며 공백을 추가한다.
``` javascript
// Bad
var someValue = data1;//주석 표시 전후 공백

// Bad
var someValue = data1; /* 여러 줄 주석 */

// Good
var someValue = data1; // 주석 표시 전후 공백
```
* ```여러 줄 주석```을 작성 할 때는 ```*```의 들여쓰기를 맞춘다. 주석의 첫 줄과 마지막 줄은 비워둔다.
``` javascript
// Bad - '*' 표시의 정렬
/*
* 주석내용
*/

// Bad - 주석의 첫 줄에는 기술하지 않는다
...
/* var foo = '';
 * var bar = '';
 * var quux;
 */

// Good - '*' 표시의 정렬을 맞춘다
/*
 * 주석내용 
 */
```
* ```코드 블럭 주석 처리```를 위해서는 한 줄 주석을 사용한다.
``` javascript
// Bad - 여러 줄 주석을 사용
...
/*
 * var foo = '';
 * var bar = '';
 * var quux;
 */

// Good - 한 줄 주석 사용
...
// var foo = '';
// var bar = '';
// var quux;
```
<br/>

### 8. 공백
* 키워드, 연산자와 다른 코드 사이에 공백이 있어야 한다.
``` javascript
// Bad
var value;
if(typeof str==='string') {
  value=(a+b);
}

// Good
var value;
if (typeof str === 'string') {
  value = (a + b);
}
```
* 시작 괄호 바로 다음과 끝 괄호 바로 이전에 공백이 있으면 안 된다.
``` javascript
// Bad - 괄호 안에 공백
if ( typeof str === 'string' )

// Bad - 괄호 안 공백
var arr = [ 1, 2, 3, 4 ];

// Good
if (typeof str === 'string') {
  ...
}

// Good
var arr = [1, 2, 3, 4];
```
* 콤마 다음에 값이 올 경우 공백이 있어야 한다.
``` javascript
// Bad - 콤마 뒤 공백
var arr = [1,2,3,4];

// Good
var arr = [1, 2, 3, 4];
```
