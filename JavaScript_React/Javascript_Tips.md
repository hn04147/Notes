### 1. Border 안쪽으로 주기
``` Javascript
border: 1px solid black
```
으로 하면 ```div``` 바깥으로 border가 잡혀 4방향으로의 크기가 두께만큼 늘어나게 된다.
``` Javascript
border: 1px solid black;
box-sizing: border-box;
```
이렇게 하면  ```div``` 안쪽으로 border가 잡히게 되어 ```div``` 크기가 늘어나지 않는다. 단, ```div``` 안쪽으로 두깨만큼 줄어든다.

<br/>

### 2. 글자가 ```div``` 길이보다 길 때
``` Javascript
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```
글자가```div```의 길이보다 길 때, 위 코드를 css에 추가해주면 ```ABCDE...``` 이런식으로 보인다.

<br/>

### 3. 스크롤바 꾸미기
``` Javascript
overflow: scroll;      // none
overflow-x: scroll;    // none
overflow-y: scroll;    // none

::-webkit-scrollbar {
  width: 5px;          // 세로축 스크롤바 길이 
  height: 100px;       // 가로축 스크롤바 길이
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {      // 스크롤바
  border-radius: 50%;  
  background-color: gray;
}
::-webkit-scrollbar-button {     // 위, 아래 버튼
  display: none;       
}

// styled component에서 사용 시 &::-webkit-scrollbar {}
```
css에 위 코드를 추가해주자.

<br/>

4. 좌표 구하기
* Element의 좌표
``` Javascript
const element = document.getElementById('element id')
const elementPos = element.getBoundingClientRect()
```
* 마우스 절대 위치
``` Javascript
(event) => clientX
(event) => clientY
```
