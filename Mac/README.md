## 1. 맥에서 분할 압축 푸는 방법

1. ```zip -FF 분할압축된원본파일명.zip --out 한개로압축될파일명.zip```  
2. ```unzip -qt 한개로압축될파일명.zip```  

EX) 파일명이 ```data.zip```, ```data.z01```, ```data.z02``` 이렇게 되어있을 때  
1. ```zip -FF data.zip --out data_concat.zip``` 으로 압축 파일 합치기
2. ```unzip -qt data_concat.zip``` 으로 합친 파일 압축 풀기 
