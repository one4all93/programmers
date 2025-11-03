// 문제 설명
// 어느 학교에 페인트가 칠해진 길이가 n미터인 벽이 있습니다. 
// 벽에 동아리 · 학회 홍보나 회사 채용 공고 포스터 등을 게시하기 위해 테이프로 붙였다가 철거할 때 떼는 일이 많고 그 과정에서 페인트가 벗겨지곤 합니다. 
// 페인트가 벗겨진 벽이 보기 흉해져 학교는 벽에 페인트를 덧칠하기로 했습니다.

// 넓은 벽 전체에 페인트를 새로 칠하는 대신, 구역을 나누어 일부만 페인트를 새로 칠 함으로써 예산을 아끼려 합니다. 
// 이를 위해 벽을 1미터 길이의 구역 n개로 나누고, 각 구역에 왼쪽부터 순서대로 1번부터 n번까지 번호를 붙였습니다. 그리고 페인트를 다시 칠해야 할 구역들을 정했습니다.

// 벽에 페인트를 칠하는 롤러의 길이는 m미터이고, 롤러로 벽에 페인트를 한 번 칠하는 규칙은 다음과 같습니다.

// 롤러가 벽에서 벗어나면 안 됩니다.
// 구역의 일부분만 포함되도록 칠하면 안 됩니다.
// 즉, 롤러의 좌우측 끝을 구역의 경계선 혹은 벽의 좌우측 끝부분에 맞춘 후 롤러를 위아래로 움직이면서 벽을 칠합니다. 
// 현재 페인트를 칠하는 구역들을 완전히 칠한 후 벽에서 롤러를 떼며, 이를 벽을 한 번 칠했다고 정의합니다.

// 한 구역에 페인트를 여러 번 칠해도 되고 다시 칠해야 할 구역이 아닌 곳에 페인트를 칠해도 되지만 다시 칠하기로 정한 구역은 적어도 한 번 페인트칠을 해야 합니다. 
// 예산을 아끼기 위해 다시 칠할 구역을 정했듯 마찬가지로 롤러로 페인트칠을 하는 횟수를 최소화하려고 합니다.

// 정수 n, m과 다시 페인트를 칠하기로 정한 구역들의 번호가 담긴 정수 배열 section이 매개변수로 주어질 때 롤러로 페인트칠해야 하는 최소 횟수를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ m ≤ n ≤ 100,000
// 1 ≤ section의 길이 ≤ n
// 1 ≤ section의 원소 ≤ n
// section의 원소는 페인트를 다시 칠해야 하는 구역의 번호입니다.
// section에서 같은 원소가 두 번 이상 나타나지 않습니다.
// section의 원소는 오름차순으로 정렬되어 있습니다.
// 입출력 예
// n	m	section	result
// 8	4	[2, 3, 6]	2
// 5	4	[1, 3]	1
// 4	1	[1, 2, 3, 4]	4
// 입출력 예 설명
// 입출력 예 #1

// 예제 1번은 2, 3, 6번 영역에 페인트를 다시 칠해야 합니다. 
// 롤러의 길이가 4미터이므로 한 번의 페인트칠에 연속된 4개의 구역을 칠할 수 있습니다. 
// 처음에 3, 4, 5, 6번 영역에 페인트칠을 하면 칠해야 할 곳으로 2번 구역만 남고 1, 2, 3, 4번 구역에 페인트칠을 하면 2번 만에 다시 칠해야 할 곳에 모두 페인트칠을 할 수 있습니다.

// img1.png

// 2번보다 적은 횟수로 2, 3, 6번 영역에 페인트를 덧칠하는 방법은 없습니다. 따라서 최소 횟수인 2를 return 합니다.

// 입출력 예 #2

// 예제 2번은 1, 3번 영역에 페인트를 다시 칠해야 합니다. 롤러의 길이가 4미터이므로 한 번의 페인트칠에 연속된 4개의 구역을 칠할 수 있고 1, 2, 3, 4번 영역에 페인트칠을 하면 한 번에 1, 3번 영역을 모두 칠할 수 있습니다.

// img2.png

// 따라서 최소 횟수인 1을 return 합니다.

// 입출력 예 #3

// 예제 3번은 모든 구역에 페인트칠을 해야 합니다. 롤러의 길이가 1미터이므로 한 번에 한 구역밖에 칠할 수 없습니다. 구역이 4개이므로 각 구역을 한 번씩만 칠하는 4번이 최소 횟수가 됩니다.

// img3.png

// 따라서 4를 return 합니다.

// ※ 공지 - 2023년 3월 20일 문제 난이도가 Lv. 2 → Lv. 1로 변경되었습니다.
// ※ 공지 - 2023년 8월 17일 문제 지문의 오탈자를 수정했습니다.

let n = 8;
let m = 4;
let section = [2, 3, 6];
n = 5;
m = 4;
section = [1, 3];
n = 4;
m = 1;
section = [1, 2, 3, 4];
n = 10;
m = 2;
section = [1, 3, 5, 7, 9];
n = 8, m = 4, section = [2, 3, 6, 7];
// n = 15, m = 5, section = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// n = 10, m = 3, section = [8, 9, 10];
// n = 10, m = 3, section = [1,2,3,5,6,8,9,10];
// n = 20, m = 6, section = [4, 7, 10, 13, 16, 19];

solution(n, m, section);

function solution(n, m, section) { 
    var answer = 0;

    console.log('n :: ', n, ' / m :: ', m, ' / section :: ', section);

    let lastPainted = 0;

    for (const position of section) {
        console.log(position)
        if(position > lastPainted){
            answer += 1;
            lastPainted = position + m - 1;
        }else{
            console.log('이미 칠해진 구역입니다.', position);
        }
    }

    console.log('answer :: ', answer);

    // let last = 0; // 마지막으로 칠한 구역 값
    // let diff = 0;
    // let go = true;

    // // 계속 반복문돌면서 조건확인하고 최종에 마지막 로직 실행하고 종료
    // while(go){
    //     if(last == 0){
    //         last = section[0] + m - 1;
    //         diff = section[section.length-1] + 1 - last;
    //         console.log('1첫 반복문 last :: ', last);
    //         answer += 1;
    //     }else{
    //         // console.log('2반복문 last :: ', last);

    //         // console.log('색칠해야할부분에서 값 있는지',section.indexOf(last));
    //         console.log('**',last , ' ',section[section.indexOf(last)+1] , ' ', m)
    //         last = section[section.indexOf(last)] + m;
    //         diff = section[section.length-1] + 1 - last;
    //         answer += 1;
    //         console.log('2첫 반복문 last :: ', last);
    //     }

    //     // 칠한후 마지막 값이 칠해야할 마지막 값을 넘어갔는지 아닌지 확인**
    //     // 넘으면 이미 다 칠해졌다고 판단해서 종료
    //     // console.log('중간 last :: ', last, ' / section 마지막값 :: ', section[section.length-1]);
    //     if(last >= section[section.length-1]){
    //         console.log('이미 다 칠해짐')
    //         go = false;
    //         break;
    //     }

    //     // console.log('초기 last :: ', last, ' / diff :: ', diff);
    //     if(m > diff){
    //         console.log('12312321321321');
    //         answer += 1;
    //         // 가장 마지막에 이 조건을 탈꺼라서 여기서 반복이 종료되어야함
    //         go = false;
    //     }
    // }

    // console.log('최종 last :: ', last);
    // console.log('answer :: ', answer);


    return answer;
}