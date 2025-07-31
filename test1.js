

let arr = [
  '1', '-', '5',
  '-', '3'];

let arr2 = [
    '(',
'1', '-', '5', ')',
'-', '3'];

// ((1 - 5) - 3) = -7
// (1 - (5 - 3)) = -1   

solution(arr);


function solution(arr) {
    var answer = -1;

    // 수식을 먼저 만드는 함수를 하나 만들고
    // while을 돌리면서 임시값에 넣어두고 비교하면서 계속 반복 돌게 해야할듯
    let sum = 0;
    
    arr.forEach(a=>{

        console.log(a)
        // if (/[^a-zA-Z0-9]/.test(a)) {
        //     console.log("특수문자 맞아요!" , a);
        //     //sum2 = sum2
        // } else {
        //     console.log("특수문자 아니에요!" , Number(a));
        // }
    })

    // 배열값은 무조건 홀수 니까 ()를 배열안에 넣어주면 되려나

    //console.log('sum',sum);
    
    
    return answer;
}