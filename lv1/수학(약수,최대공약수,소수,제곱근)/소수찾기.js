// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3
// 입출력 예 설명
// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

let n = 10;
// n = 5;

solution(n);

function solution(n) {
    var answer = 0;

    console.log('!!!',n, Math.sqrt(n));

    // 주어진 수만큼 체크배열 만들기 = 모두 소수라는 가정하에 true지정
    let check = Array(n + 1).fill(true);

    check[0] = false;   // 0은 소수 아님
    check[1] = false;   // 1은 소수 아님

    for(let i=2; i<Math.sqrt(n); i++){
        // 소수라고 잠정적으로 확인(제곱근사용) 
        // :: 잠정적 소수라하는 이유 : 합성수가 들어있을 수 있고, 나중에 소수의 배수들이 들어있어 제외를 해줘야할 수도 있어서
        if(check[i]){
            console.log('잠정적 소수',i);
            // 잠정소수라고 정해진 i값들의 배수를 걸러내는 반복문을 돌려주기
            // 잠정적 소수값의 배수들을 제거
            for(let j=i*i;j<=n; j+=i){
                check[j] = false;
            }
        }
    }

    // filter는 새로운 배열 생성 :: 메모리 생성 (메모리낭비)
    // answer = check.filter(c=> c === true).length;
    answer = check.reduce((acc,cur)=> acc + (cur === true ? 1 : 0),0);

    console.log(answer)

    return answer;
}