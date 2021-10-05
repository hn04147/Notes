# npm install 할 때 tar ENOENT: no such file or directory, lstat ~ 에러날 경우

```npm install``` 할 때 ```tar ENOENT: no such file or directory, lstat ...``` 와 같은 에러가 나서 ```npm install```이 안 될 경우 다음과 같은 방법을 사용하여 해결할 수 있다.
>1. npm cache를 삭제: ```npm cache clean --force```
>1. package-lock.json 파일 삭제: ```rm package-lock.json```
>1. node_modules 파일 삭제: ```rm -rf ./node_modules/```
>1. npm 재설치: ```npm --verbose install```

