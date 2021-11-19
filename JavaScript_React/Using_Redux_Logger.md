## Redux Logger
<br/>

```react-redux```, ```redux```, ```redux-logger``` 설치
```
yarn add react-redux
yarn add redux redux-logger
```

index.js 파일에
```
import { Provider } from "react-redux"
import { applyMiddleware, createStore } from "redux"
import logger from "redux-logger"
import rootReducer from "../redux/modules"  //리덕스 폴더에 index.js에 생성한 rootReducer import

const Index = () => {
  const middlewares = [logger]
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  //store 확인
  console.log(store.getState())
  
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Index
```

