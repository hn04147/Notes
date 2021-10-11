LCS(최장 공통 부분 수열)이란 주어진 여러 개의 수열 모두의 부분 수열이 되는 수열들 중에 가장 긴 수열이다. LCS(Longest Common Subsequence)는 Longest Common Substring과 다른 의미를 가지고 있기 때문에 구분해야한다.

>두 수열 ```BDCABA```, ```ABCBDAB```가 있을 때, 두 수열의 LCS는 ```BCBA```(**B**D**C**A**BA**, A**BCB**D**A**B)이다.
두 수열의 LCS는 여러 개 존재할 수 있다.


### LCS pseudo code
``` 
LCS-LENGTH(X, Y)
  m = X.length
  n = Y.length
  let b[1..m][1..n] and c[0..m][0..n] be new tables
  for i = 1 to m
    c[i][0] = 0
  for j = 0 to n
    c[0][j] = 0
  for i = 1 to m
    for j = 1 to n
      if xi == yj
        c[i][j] = c[i-1][j-1] + 1
        b[i][j] = "left-up"
      elseif c[i-1][j] >= c[i][j-1]
        c[i][j] = c[i-1][j]
        b[i][j] = "up"
      else c[i][j] = c[i][j-1]
        b[i][j] = "left"
  return c and b
  
PRINT-LCS(b, X, i, j)
  if i == 0 or j == 0
    return
  if b[i][j] == "left-up"
    PRINT-LCS(b, X, i-1, j-1)
    print xi
  else if b[i][j] == "up"
    PRINT-LCS(b, X, i-1, j)
  else PRINT-LCS(b, X, i, j-1)  // else if b[i][j] == "left"
```
### 결과
![print_pseudo_code](https://images.velog.io/images/hn04147/post/39025a14-334a-409a-a147-5da7e1b5f3e7/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202021-10-04%20%EC%98%A4%ED%9B%84%208.01.05.png)

---

#### [백준알고리즘]9251번: LCS-Python
> 백준알고리즘의 9251번 문제가 두 수열이 주어졌을 때 LCS의 길이를 구하는 문제이다.

[백준 9251 - LCS](https://www.acmicpc.net/problem/9251)

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

