// 문제 설명
// 자연수 n이 매개변수로 주어집니다. 
// n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 
// return 하도록 solution 함수를 완성해주세요. 
// 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 10	3
// 12	11
// 입출력 예 설명
// 입출력 예 #1

// 10을 3으로 나눈 나머지가 1이고, 
// 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 
// 3을 return 해야 합니다.
// 입출력 예 #2

// 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.

// => 나머지가 1인 자연수들 중에 가장 작은 값을 찾아야해서, 
// 배열에 넣은다음 0번째 인덱스값을 리턴해주었다.

function solution(n) {
    var answer = [];
    let temp = 0;
    for(let i=0; i<n; i++){
        if(n%i == 1 && i !=0){
            answer.push(i)
        }
        
    }
    return answer[0];
}