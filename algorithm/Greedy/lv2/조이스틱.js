// 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
// ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

// 조이스틱을 각 방향으로 움직이면 아래와 같습니다.

// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
// 예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

// - 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
// - 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
// - 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
// 따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

// 제한 사항
// name은 알파벳 대문자로만 이루어져 있습니다.
// name의 길이는 1 이상 20 이하입니다.
// 입출력 예
// name	return
// "JEROEN"	56
// "JAN"	23

let name = "JEROEN";
name = "JAN";
name = "JAZ";

solution(name);

// 처음에는 주어진 name길이만큼 A로 채워짐
// A = 65;
// Z = 90;

function solution(name) {
    var answer = 0;

    // 90을 넘어가면 65로 초기화
    // 65보다 낮으면 90으로

    // 처음 시작 A
    // let temp = "A".charCodeAt(0);
    // console.log('temp', temp);
    // console.log(temp.charCodeAt(0));
    // console.log(String.fromCharCode(temp.charCodeAt(0)));
    // String.fromCharCode(code);

    // 알파벳으로 접근안하고 숫자로 먼저 접근
    // 아래로가 빠른지 위로가 빠른지만 판별하면 됨

    let strings = [...name];

    let temp = new Array(name.length).fill(false);

    for(let i=0; i<strings.length; i++){
        console.log(i,strings[i]);

        let up = strings[i].charCodeAt(0) - 65;
        let down = 26 - up;

        // 위/아래 이동
        if(up == down){
            // console.log('같으면 아무쪽으로나 이동', up)
            answer+=up;
        }else if(up > down){
            // console.log('아래로 ', down);
            answer+=down;
        }else if(up < down){
            // console.log('위로 ', up);
            answer+=up;
        }
    }

    let move = strings.length - 1;
    for(let i=0; i<strings.length; i++){
        let next = i + 1;

        while(next < strings.length && strings[next] === 'A') next++;

        move = Math.min(move, i + strings.length - next + Math.min(i,n-next));
    }

    // console.log(temp)

    // for(let a of name){
    //     // 1) 우선 만들어야할 이름의 문자들에 아스키값을 도출
    //     let aa = a.charCodeAt(0);
        
    //     let up = aa - 65;
    //     let down = 26 - up;

    //     if(up == 0){
    //         console.log('좌/우 이동만 가능')
    //     }else if(up > down){
    //         console.log('아래로 ', down);
    //         answer+=down;
    //     }else if(up < down){
    //         console.log('위로 ', up);
    //         answer+=up;
    //     }

    //     console.log('a',a)
    // }

    console.log(answer,'번 이동')

    // console.log("Z",'//',"Z".charCodeAt(0),'//',65 , '//',"Z".charCodeAt(0)-65 , 65 + (25 + 65-90))

    // 64 -> 90 / 65 ... 90 / 91-> 65
    // 90-65 = 35 - 9 = 24 + 65 :: 역방향




    return answer;
}