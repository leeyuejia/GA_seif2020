
const graph = [
    [0, 1, 2, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, 11, 0, 0],
    [0, 0, 0, 0, 9, 5, 16, 0],
    [0, 0, 0, 0, 0, 0, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 18],
    [0, 0, 0, 0, 0, 0, 0, 13],
    [0, 0, 0, 0, 0, 0, 0, 2],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

function printOutPath(d, N) {
    let k = 0;
    console.log(k);
    while(d[k] < N - 1) { 
        k = d[k];
        console.log(k);
    }
    console.log(N - 1);
}

function shortestDist(graph) {
    const N = graph.length;
    const costs = new Array(N).fill(10**9);
    costs[N - 1] = 0;
    const d = new Array(N).fill(N - 1);
    for(let i = N - 2; i >= 0; i--) {
        for(let j = i + 1; j < N; j++) {
            if(graph[i][j] !== 0) {
                if(costs[i] > graph[i][j] + costs[j]) {
                    costs[i] = graph[i][j] + costs[j];
                    d[i] = j;
                }
            }
        }
    }

    printOutPath(d, N);
    return costs[0];
}

const dist = shortestDist(graph);
console.log(dist)

