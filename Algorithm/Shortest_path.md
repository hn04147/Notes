``` python
import sys
import heapq
input = sys.stdin.readline

INF = 1e9

n, m = map(int, input().rstrip().split()) # n: 노드의 개수, m: 경로의 개수

for _ in range(m):
  u, v, w = map(int, input().rstrip().split()) # u: 시작 노드, v: 도착 노드, w: 경로의 가중치
  graph[u].append((v, w))

graph = [[] for _ in range(n+1)]

def dijkstra(start):
    q = []
    dist = [INF] * (n+1)
    dist[start] = 0
    
    heapq.heappush(q, (0, start))

    while q:
        distance, now = heapq.heappop(q)

        if distance > dist[now]:
            continue

        for v, w in graph[now]:
            if distance + w < dist[v]:
                dist[v] = distance + w
                heapq.heappush(q, (distance + w, v))

    return dist
```
