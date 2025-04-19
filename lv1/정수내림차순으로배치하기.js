// 문제 설명
// 함수 solution은 정수 n을 매개변수로 입력받습니다. 
// n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
// n	return
// 118372	873211

// => n을 문자열로 변환한 후, 각 자릿수를 배열에 담고,
//    sort() 와 reverse()를 메서드체이닝하여 내림차순으로 정렬한 후,
//    join()을 사용하여 문자열로 변환 + Number()를 사용하여 숫자로 변환하여 리턴하였다.

function solution(n) {
    var answer = 0;
    let str = n.toString();
    let arr = [];
    
    for(let i=0; i<str.length; i++){
        arr[i]=str[i];
    }
    
    arr.sort().reverse();
    answer = Number(arr.join(''));

    return answer;
}