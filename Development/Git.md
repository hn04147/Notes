# Git ID/Access-token 매번 입력하기 귀찮을 때
CLI 환경에서 Git을 사용하는 경우 push를 하면 ID/Access-token을 매번 입력해야 하는데, 이는 매우 귀찮으므로 아래와 같은 방법으로 해결하자.

**Credential 정보를 반영구 저장**
1. ```git config --unset credential.helper``` : 기존에 세팅된 credential.helper 데이터를 해제할 때 사용
2. ```git config credential.helper store```
* ```--global``` 옵션을 추가 할 경우 모든 repository에 대하여 적용할 수 있다.

**Credential 정보를 git cache에 임시로 특정 시간동안 저장**
1. ```git config --unset credential.helper```
2. ```git config credential.helper cache```
3. ```git config credential.helper 'cache --timeout 3600'``` : default는 900초
