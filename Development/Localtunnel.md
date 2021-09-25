### 1. Localtunnel 설치
Localtunnel은 nodejs 기반으로 개발되어 있어 npm을 먼저 설치하고 localtunnel 설치를 진행합니다.

Windows: ```sudo apt install npm```
Mac: ```brew install node```
```sudo npm install -g localtunel```

### 2. Localtunnel 실행
진행중인 프로젝트를 localhost를 통하여 실행합니다.
이 후 lt 명령어를 사용하여 localtunnel을 실행합니다.
```$ lt --port [포트번호]```
```$ lt --port 8080```

### 3. 도메인 설정
옵션을 통하여 도메인 이름을 설정할 수 있습니다.
``` lt --port [포트번호] --subdomain [도메인 이름]```
> ```lt --port 8080 --subdomain localtunnelme``` 로 실행하면 ```https://localtunnelme.loca.lt```로 외부 망에서 localhost 접속이 가능합니다.

### 4. Localtunnel 제거
```npm uninstall -g localtunnel```