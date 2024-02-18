"use strict";
function iterativeFactorial(n) {
    let factorial = 1; // กำหนดตัวแปร factorial ให้เท่ากับ 1
    for (let i = 2; i <= n; i++) { // วนลูปเพื่อคำนวณ factorial โดยเริ่มจาก i เท่ากับ 2 และวนไปเรื่อยๆ จนถึง i เท่ากับ n
        factorial = factorial * i; // คูณ factorial ด้วย i แล้วเก็บค่าใหม่ไว้ในตัวแปร factorial
    }
    return factorial; // คืนค่า factorial
}
console.log(iterativeFactorial(0));
console.log(iterativeFactorial(4));
function recursiveFactorial(n) {
    if (n < 2) // ถ้า n น้อยกว่า 2
        return 1; // คืนค่า 1
    return n * recursiveFactorial(n - 1); // คูณ n ด้วย recursiveFactorial ที่เรียกตัวเองโดยลดค่า n ลง 1
}
console.log(recursiveFactorial(0));
console.log(recursiveFactorial(5));
