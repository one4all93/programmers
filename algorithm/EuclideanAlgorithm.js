// 유클리드 알고리즘 :: 최대공약수(GCD, Greatest Common Divisor)를 구하는 가장 효율적인 방법

// 아이디어:
    // 두 수 a와 b의 최대공약수는
    // GCD(a, b) = GCD(b, a % b)
    // 나머지가 0이 될 때까지 반복

// 원리:
    // 만약 a = b * q + r이면, GCD(a, b) = GCD(b, r)
    // 계속 나머지를 구하면 마지막 0이 아닌 수가 최대공약수

// 나머지가 0일떄까지 계속 나누기 
// 나머지 0 직전 값이 최대공약수(GCD)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(48, 18)); // 6

// 재귀변형***
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

console.log(gcd(48, 18)); // 6

// 최소공배수는 ( a * b / gcd(a, b));

