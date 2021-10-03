## iframe 에서 도메인이 다른 경우 부모, 자식창 제어

<br/>

>```Iframe```을 사용할 때 부모와 자식간 도메인이 서로 다른 경우 부모창-자식창 통신은 ```window``` 객체를 이용하여 할 수 있다.

<br/>

**1. 자식창에서 부모창으로 데이터를 보낼 때**

* 자식창(데이터 송신 코드):
```javascript
componentDidUpdate() {
  window.parent.postMessage({ childData: 'child_data' }, "localhost:8000")
  // 주소창이 "*"이면 부모창에 있는 모든 링크를 다 포함시킴
}
// Or
React.useEffect(() => {
  window.parent.postMessage({ childData: 'child_data' }, "*")
}, [])
```

* 부모창(데이터 수신 코드):
```javascript
React.useEffect(() => {
  window.addEventListener('message', function(e) {
    if (e.data.childData === 'child_data') {
      // 실행 할 함수
    }
  })
}, [])
```
<br/><br/>
**2. 부모창에서 자식창으로 데이터를 보낼 때**
* 부모창(데이터 송신 코드):
```javascript
function sendMessageIframe() {
  let iframe = document.getElementById('child_iframe').contentWindow
  iframe.postMessage({ parentData: 'parent_data' }, 'https://localhost:8080')
  // 주소창에 특정 주소가 아닌 '*'를 입력하면 iframe내에 있는 모든 링크를 다 포함한다.
}

React.useEffect(() => {
  sendMessageIframe()
}, [])
```

* 자식창(데이터 수신 코드):
```javascript
React.useEffect(() => {
  window.addEventListener('message', function(e) {
    console.log(e.data)         // { parentData: 'parent_data' }
    console.log(e.origin)       // 부모창 도메인
    if (e.data.parentData === 'parent_data') {
      // 실행 할 함수
    }
  })
}, [])
```