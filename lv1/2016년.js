// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// 입출력 예
// a	b	result
// 5	24	"TUE"

let a = 5;
let b = 24;
a = 9;
b = 1;

solution(a, b);

function solution(a, b) {
    var answer = '';

    console.log(a,'/',b);
    
    let totalDays = 0;
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    const days = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

    // 일수에서 7로 나눈 나머지가 1이면 금요일이 , 2이면 토요일
    // 01월01일 금요일을 기준으로 하니까 1을 뺴주는 식으로 진행해야함
    // 제시된 일수 - 기준일 = 차이나는 일수
    // 차이나는 일수를 7로 나눈 나머지가 0이면 금요일
    // 다른값이면 금요일 + 나머지값 = 요일

    // 7월까지는 나머지 0인 경우는 31일인데, 
    // 8월부터 31일로 시작 :: 8 31 // 9 30 // 10 31 // 11 30 // 12 31
    for(let i=0; i<(a-1); i++){
        console.log(months[i]);
        if(["January","March","May","July","August","October","December"].includes(months[i])){
            totalDays += 31;
        }else if("February" === months[i]){
            totalDays += 29;
        }else{
            totalDays += 30;
        }
    }

    // 주먹달력을 사용해서 30/31일 구분을 했는데, 7,8월 연속으로 31일인줄 모르고 8월을 30일로 생각해서 계산식이 틀렸다.....

    answer = days[(totalDays + b-1)%7];

    return answer;
}

