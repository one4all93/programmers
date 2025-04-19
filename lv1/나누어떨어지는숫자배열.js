// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]
// 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

//=> 제공받은 배열을 반복문돌려주면서 divisor로 나누어 0d으로 떨어지는 수들을
// answer 배열에 담아주었고, 반복문이 다 돌고 난 후에 배열의 크기가 0이면
// 나누어진값이 없다고 판단을 하여 -1을 담아주었다.
// 그 후 answer 배열을 오름차순으로 정렬하여 반환하였다.

function solution(arr, divisor) {
    var answer = [];
    console.log(arr, divisor)
    arr.forEach(a=>{
        if(a%divisor == 0){
            answer.push(Number(a))
        }
    })
    
    if(answer.length == 0) answer = [-1];
    
    answer.sort((a,b)=>{
        return a-b;
    });
    console.log(answer)
    return answer;
}