# Markdown 사용법

1. Header(제목)
```
# 제목 1단계
## 제목 2단계
### 제목 3단계
#### 제목 4단계
##### 제목 5단계
###### 제목 6단계
```
# 제목 1단계
## 제목 2단계
### 제목 3단계
#### 제목 4단계
##### 제목 5단계
###### 제목 6단계

2. 수평선
```
---
```
---

3. List(목록)
```
1. 첫번 째
1. 두번 째
1. 세번 째

+ 순서 없음
  - 순서 없음
    * 순서 없음
      + 순서 없음
```
1. 첫번 째
1. 두번 째
1. 세번 째

+ 순서 없음
  - 순서 없음
    * 순서 없음
      + 순서 없음
      
4. 강조
```
__진하게__
_이탤릭체_
~~취소선~~
<u>밑줄</u>
```
__진하게__
_이탤릭체_
~~취소선~~
<u>밑줄</u>

5. 인용
```
> 인용하기
>> 인용하기
>>> 인용하기
```
> 인용하기
>> 인용하기
>>> 인용하기

6. 링크
```
[네이버로 이동하기](https://naver.com)
<https://naver.com>
[(1.제목)으로 이동](#1._Header(제목))
```
[네이버로 이동하기](https://naver.com)
<https://naver.com>
[(1.제목)으로 이동](#1._Header(제목))

7. Table 그리기
```
|  |2018|2019|2020|2021|
|---|---|:---|---:|:---:|
|a|1|2|3|4|
|b|100000|200000|300000|400000|
|c|11|22|33|44|
```
|  |2018|2019|2020|2021|
|---|---|:---|---:|:---:|
|a|1|2|3|4|
|b|100000|200000|300000|400000|
|c|11|22|33|44|

8. Code Block
``````
``` python
import sys

a = sys.stdin.readline().strip()
b = sys.stdin.readline().strip()

def lcs(a, b):
  c = [[0] * (len(a) + 1) for _ in range(len(b) + 1)]
  for i in range(1, len(b) + 1):
    for j in range(1, len(a) + 1):
      if b[i - 1] == a[j - 1]:
        c[i][j] = c[i - 1][j - 1] + 1
      else:
        c[i][j] = max(c[i][j -1], c[i - 1][j])
  return c

print(lcs(a, b)[-1][-1])
```
``````
``` python
import sys

a = sys.stdin.readline().strip()
b = sys.stdin.readline().strip()

def lcs(a, b):
  c = [[0] * (len(a) + 1) for _ in range(len(b) + 1)]
  for i in range(1, len(b) + 1):
    for j in range(1, len(a) + 1):
      if b[i - 1] == a[j - 1]:
        c[i][j] = c[i - 1][j - 1] + 1
      else:
        c[i][j] = max(c[i][j -1], c[i - 1][j])
  return c

print(lcs(a, b)[-1][-1])

```
> `뒤에 강조하고 싶은 프로그래밍 언어를 쓰면 스타일에 맞게 구문이 강조된다.

9. 수식
```
$$f(x)= if x < x_{min} : (x/x_{min})^a$$  
$$otherwise : 0$$  
$$P(w)=U(x/2)(7/5)/Z$$  
$$p_{\theta}(x) = \int p_{\theta}(2z)p_{\theta}(y\mid k)dz$$  
$$x = argmax_k((x_t-x_u+x_v)^T*x_m)/(||x_b-x_k+x_l||)$$ 
```
$$f(x)= if x < x_{min} : (x/x_{min})^a$$  
$$otherwise : 0$$  
$$P(w)=U(x/2)(7/5)/Z$$  
$$p_{\theta}(x) = \int p_{\theta}(2z)p_{\theta}(y\mid k)dz$$  
$$x = argmax_k((x_t-x_u+x_v)^T*x_m)/(||x_b-x_k+x_l||)$$ 