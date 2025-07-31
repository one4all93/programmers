/**
 * [다익스트라 알고리즘]
 * :: 다익스트라 알고리즘은 출발 노드 한 지점을 기준으로 다른 모든 노드로 가는 각각의 최단거리를 계산하는 알고리즘이다.
 * 다익스트라 알고리즘은 다음과 같은 과정을 반복한다.
 * 1.출발 지점을 지정한다.
 * 2.그래프에서 현재 노드에서 갈 수 있는 경로 중 가장 거리가 짧은 노드를 선택한다.
 * 3.해당 노드를 거친 거리가 기존 노드의 최단거리 보다 짧다면 최단거리를 갱신한다.
 * 4.이후 반복
 * (3번 과정으로 인해 다익스트라 알고리즘은 일종의 그리디 알고리즘으로 분류되기도 한다.)
 */

const graph = Array.from({ length: n + 1 }, () => []);
const d = Array.from({ length: n + 1 }, () => Infinity);

for (const v of arr) {
  const [from, to, dist] = v;
  graph[from].push([to, dist]);
}

const queue = [];
queue.push([start, 0]);
d[start] = 0;

while (queue.length !== 0) {
  const [curNode, dist] = queue.pop();

  if (d[curNode] < dist) continue;

  for (const v of graph[curNode]) {
    const node = v[0];
    const cost = dist + v[1];

    if (cost < d[node]) {
      queue.push([node, cost]);
      queue.sort((a, b) => a[1] - b[1]);
      d[node] = cost;
    }
  }
}