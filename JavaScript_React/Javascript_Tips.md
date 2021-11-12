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
