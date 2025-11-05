// 수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
// completion의 길이는 participant의 길이보다 1 작습니다.
// 참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
// 참가자 중에는 동명이인이 있을 수 있습니다.
// 입출력 예
// participant	completion	return
// ["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
// ["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
// ["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
// 입출력 예 설명
// 예제 #1
// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #2
// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

// 예제 #3
// "mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.

let participant = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];
participant = ["marina", "josipa", "nikola", "vinko", "filipa"];	
completion = ["josipa", "filipa", "marina", "nikola"];
participant = ["mislav", "stanko", "mislav", "ana"];	
completion = ["stanko", "ana", "mislav"];

solution(participant, completion);

function solution(participant, completion) {
    var answer = '';

    // map사용
    let map = new Map();

    participant.forEach(part=> {
        if(map.get(part) == undefined){
            map.set(part,1);
        }else{
            map.set(part,map.get(part)+1);
        }
    })

    completion.forEach(com=>{
        if(map.get(com)){
            map.set(com,map.get(com) -1);
        }
    })
    
    console.log(map);

    map.forEach((cnt,part)=> {
        if(cnt != 0) answer = part;
    }); 

    // 객체 사용 {}
        // let part = []; --> {}로 바꾸니 효율성 하나 해결됨
        // :: 배열은 인덱스기반(숫자) / 객체는 키-값 해시기반(문자열)
        // :: 반복,push/pop에 최적 / 해시조회, 키접근에 최적
        // :: 연속된 인덱스 빠르게 처리 / 다양한 키로 빠르게 해시 찾게
        // let part = {};

        // participant.map(par=>{
        //     if(part[par]){
        //         part[par]++;
        //     }else{
        //         part[par] = 1;
        //     }
        // })

        // completion.map(com=>{
        //     if(part[com]){
        //         part[com]--;
        //     }
        // })

        // answer = Object.keys(part).filter(p=> part[p] != 0);

    // console.log(part);

    // forEach + splice 조합
    // 시간복잡도에서 효율성 탈락함**
        // completion.forEach(com=>{
        //     participant.splice(participant.indexOf(com),1);
        // })
        // answer = participant;

    console.log(answer)

    return answer;
}