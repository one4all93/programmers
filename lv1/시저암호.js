// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
// 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

let s = "AB";
let n = 1;
s = "z";
n = 1;
s = "Z";
n = 1;
s = "a B z";
n = 4;
s = "aBZ"
n = 20;
s = "Hello World";
n = 3;
s = "y X Z";
n = 4;
s = " . h z"
b = 20;

// 특수문자가 케이스에 들어올수 있음**
// => 특수문자가 들어올 수 있다는 생각을 못해서 처음 테스트 계속 실패함
// => 추가적으로 대/소문자 범위 초기화해줄때 -26을 해줄 생각을 못했었음
// ==> a/A 아스키코드를 기준으로 계산하려고 해서 계산이 이상해짐**


solution(s, n);

function solution(s, n) {
    var answer = '';

    // 소문자 범위 97~122 : 122넘으면 97초기화
    // console.log('a', 'a'.charCodeAt(0));    // 97
    // console.log('z', 'z'.charCodeAt(0));    // 122

    // 대문자 범위 65~90 : 90넘으면 65초기화
    // console.log('A', 'A'.charCodeAt(0));    // 65
    // console.log('Z', 'Z'.charCodeAt(0));    // 90

    // 공백체크 정규식
    // const regExp = /\s/g;
    // const regex = /[A-Z]/;

    s.split('').forEach(c=>{
        // 공백확인 없으면
        if(/[a-zA-Z0-9]/.test(c)){
            // 대문자인지 소문자인지 확인하고 
            // 대문자일경우
            if(/[A-Z]/.test(c)){
                // 대문자 범위 65~90 : 90넘으면 65초기화
                answer += (c.charCodeAt(0)+n > 90 ? String.fromCharCode((c.charCodeAt(0)+n-26)) : String.fromCharCode(c.charCodeAt(0)+n));
            }else{
                // 소문자 범위 97~122 : 122넘으면 97초기화
                // console.log(c ,String.fromCharCode(c.charCodeAt(0)+n - c.charCodeAt(0) + 97), String.fromCharCode(c.charCodeAt(0)+n - 26));
                answer += (c.charCodeAt(0)+n > 122 ? String.fromCharCode((c.charCodeAt(0)+n-26)) : String.fromCharCode(c.charCodeAt(0)+n));             
            }
        }else{
        // 공백이면 그냥 answer에 붙이기
            answer += c;
        }
    })

    console.log('answer',answer);

    return answer;
}