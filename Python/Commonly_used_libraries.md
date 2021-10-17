## 자주 쓰이는 파이썬 라이브러리

### 라이브러리
> **라이브러리**란 다른 프로그램의 구성 요소로 사용하기 위해 미리 만들어 둔 프로그램 조각이다. 즉, 자주 사용하는 기능을 모듈-패키지로 만들어 둔 것이다. 한 번 만들어 놓으면 여러 프로그램에서 재사용할 수 있고, 다른 사람과 공유할 수도 있다.

라이브러리는 **표준 라이브러리**와 **외부 라이브러리**가 있다.
* **표준 라이브러리**는 파이썬에서 기본적으로 제공하는 라이브러리이며, 파이썬 설치시 기본으로 설치된다.
* **외부 라이브러리**는 개발자가 필요에 의해 개발한 패키지와 모듈의 집합니다.
<br/>
### 자주 쓰이는 파이썬 라이브러리
* sys
* math
* heapq
* pprint
* collections
* itertools
* bisect

<br/>

### sys
>sys 모듈은 파이썬 인터프리터가 제공하는 변수와 함수를 직접 제어할 수 있게 해주는 모듈이다.

* sys.stdin.readline()
한 번에 읽어와 버퍼에 저장하는 sys.stdin.readline()이 하나 씩 누를 때마다 데이터를 버퍼에 보관하는 input()보다 처리 속도가 빠르다. 입력을 많이 받아야 하는 상황이라면 input()보다 sys.stdin.readline()을 사용하자.
``` python
import sys

a = sys.stdin.readline()        # 입력 'Hello World!'
print(a)                        # 출력 'Hello World!'

b = sys.stdin.readline(8)      # 입력 'Hello World!'
print(b)                        # 출력 'Hello Wo'
```

### math
>math 모듈은 C 표준에서 정의된 수학 함수에 대한 엑세스를 제공한다.

``` python
>>> import math
```

* math.ceil(): 올림 함수이다.
``` python
print(math.ceil(3.14))              # 4
```
* math.floor(): 내림 함수이다.
``` python
print(math.floor(3.14))             # 3
```
* math.abs(): 절댓값을 반환한다.
``` python
print(math.abs(-3.14))              # 3.14
```
* math.factorial(): 팩토리얼을 반환한다.
``` python
print(math.factorial(5))            # 120
```
* 삼각함수
``` python
>>> import math

>>> math.cos(x)                     # 코사인
>>> math.sin(x)                     # 사인
>>> math.tan(x)                     # 탄젠트
>>> math.acos(x)                    # 아크코사인
>>> math.asin(x)                    # 아크사인
>>> math.atan(x)                    # 아크탄젠트
>>> math.atan2(y, x)                # y/x 아크탄젠트
```
* 상수
``` python
>>> import math

>>> math.pi                         # 원주율, 3.1415926...
>>> math.e                          # 자연 상수, 2.7182818...
>>> math.tau                        # 타우, 6.2831853...
```

### heapq
>힙(heap) 큐 알고리즘의 구현을 제공한다.

* heapq.heappush(): 원소 삽입
* heapq.heappop(): 원소 꺼내기

``` python
import heapq

# 최소 힙 생성
heap = []

# 힙에 원소 삽입
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 4)
heapq.heappush(heap, 2)

print(heap)                    # [1, 2, 4, 3]

# 힙에서 원소 꺼내기
print(heap.heappop(heap))      # 1
print(heap)                    # [2, 3, 4]
```

* heap.heapify(): 기존 리스트를 힙으로 변환
``` python
import heapq

heap = [2, 4, 6, 3, 5, 7, 1, 8]
heapq.heapify(heap)
print(heap)                   # [1, 3, 2, 4, 5, 7, 6, 8]
```

* 최대 힙 만들기
파이썬에서는 최대 힙을 제공하지 않는다. 원소의 부호를 변경해서 최대 힙으로 사용한다.
``` python
import heapq

nums = [2, 4, 6, 3, 5, 7, 1, 8]
heap = []

for num in nums:
  heapq.heappush(heap, (-num, num)) # (우선순위, 값) 형태로 힙에 저장
  
while heap:
  print(heapq.heappop(heap)[1])     # 8, 7, 6, 5, 4, 3, 2, 1
```

* 힙 정렬
``` python
import heapq

def heap_sort(nums):
  heap = []
  for num in nums:
    heap.heappush(heap, num)
  
  sorted = []
  while heap:
    sorted.append(heap.heappop(heap))
    
  return sorted
  
print(heap_sort([2, 4, 6, 3, 5, 7, 1, 8]))     # 1, 2, 3, 4, 5, 6, 7, 8
```

### pprint
>pprint 모듈은 임의의 파이썬 데이터 구조를 인터프리터의 입력으로 사용할 수 있는 형태로 '예쁘게 인쇄'할 수 있는 기능을 제공한다.

``` python
from pprint import pprint

data = {'count': 3, 'records': [{'id': 1, 'value': 'First'}, {'id': 2, 'value': {'result': 'Second', 'repeat': False}}]}

print(data)
# {'count': 3, 'records': [{'id': 1, 'value': 'First'}, {'id': 2, 'value': {'result': 'Second', 'repeat': False}}]}

pprint(data)
# {'count': 3,
# 'records': [{'id': 1, 'value': 'First'},
#             {'id': 2, 'value': {'repeat': False, 'result': 'Second'}}]}
```

다차원 배열을 다룰 때 pprint를 사용하면 효율적으로 데이터를 확인할 수 있다.
``` python
from pprint import pprint

arr = [[[2, 4, 3, 6], [8, 55, 3, 21], [1, 12, 6, 3]], [[2, 4, 56, 1], [1, -1, 5, 0], [5, 2, 1, 25]], [[11, 12, 16, 31], [-6, -11, 4, -5], [4, 1, 1, 15]]]

print(arr)
# [[[2, 4, 3, 6], [8, 55, 3, 21], [1, 12, 6, 3]], [[2, 4, 56, 1], [1, -1, 5, 0], [5, 2, 1, 25]], [[11, 12, 16, 31], [-6, -11, 4, -5], [4, 1, 1, 15]]]

pprint(arr)
# [[[2, 4, 3, 6], [8, 55, 3, 21], [1, 12, 6, 3]],
# [[2, 4, 56, 1], [1, -1, 5, 0], [5, 2, 1, 25]],
# [[11, 12, 16, 31], [-6, -11, 4, -5], [4, 1, 1, 15]]]
```

### collections
>파이썬에 내장된 일반 자료형의(dict, list, set, tuple) 컨테이너 타입을 조금 더 발전시킨 형태의 구현체이다.

* Counter
자료형의 데이터 요소 개수를 딕셔너리 형태로 반환하는 자료구조이다.
``` python
from collections import Counter

list = ['black', 'yellow', 'green', 'yellow', 'red', 'yellow', 'red']
print(Counter(list))                      # {'yellow': 3, 'red': 2, 'black': 1, 'green': 1}

# elements(): 입력된 값의 요소에 해당하는 값을 풀어서 반환한다.
string = Counter('hello')
print(list(string.elements()))            # ['h', 'e', 'l', 'l', 'o']

# most_common(n): 입력된 값의 요소들 중 빈도수가 가장 높은 순으로 상위 n개를 반환한다.
list = ['black', 'yellow', 'green', 'yellow', 'red', 'yellow', 'red']
print(Counter(list).most_common(2))       # [('yellow', 3), ('red', 2)]
```

* deque
  * append(): 마지막에 원소 삽입
  * pop(): 마지막 원소 제거 및 반환
  * appendleft(): 첫 번째 원소 삽입
  * popleft(): 첫 번째 원소 제거 및 반환
  
> 양방향에서 삽입과 제거가 일어나는 자료구조이다.
> list는 배열의 형태이기 때문에 index의 앞 부분에서 삽입, 삭제가 일어나면 비효율 적이다.
> deque는 데이터의 시작이나 끝부분에 삽입, 삭제를 할 때 $$O(1)$$의 시간이 걸리기 때문에 효율적이다.

```python
from collections import deque

data = deque([])
data.append(2)
data.append(3)
print(data)            # deque([2, 3])
print(data.pop())      # 3
data.appendleft(5)
print(data)            # deque([5, 2])
print(data.popleft())  # 5
```

### itertools
>python에서 제공하는 자신만의 반복자를 만드는 모듈이다.

* combinations(iterable, r)
iterable에서 원소의 개수가 r개인 조합 뽑기
``` python
from itertools import combinations

data = [1, 2, 3]
result = list(combinations(data, 2))
print(result)
# [(1, 2), (1, 3), (2, 3)]
```

* combinations_with_replacement(iterable, r)
iterable에서 원소 개수가 r개인 중복 조합 뽑기
``` python
from itertools import combinations_with_replacement

data = [1, 2, 3]
result = list(combinations_with_replacement(data, 2))
print(result)
# [(1, 1), (1, 2), (1, 3), (2, 2), (2, 3), (3, 3)]
```

* permutations(iterable, r=None)
iterable에서 원소 개수가 r개인 순열 뽑기
``` python
from itertools import permutations

data = [1, 2, 3]
result = list(permutations(data, 2))
print(result)
# [(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]
```

### bisect
>이진 탐색 알고리즘을 구현한 모듈이다.

* 정렬된 배열에서 특정 원소를 찾을 때 $$O(logN)$$에 동작한다.
* bisect_left(data, x): 정렬된 순서를 유지하면서 리스트 data에 x를 삽입할 가장 왼쪽 인덱스 찾기
* bisect_right(data, x): 정렬된 순서를 유지하면서 리스트 data에 x를 삽입할 가장 오른쪽 인덱스 찾기

``` python
from bisect import bisect_left, bisect_right

data = [1, 2, 3, 3, 3, 4, 4, 6, 7]
print(bisect_left(data, 3))       # 2
print(bisect_right(data, 3))      # 5
```

