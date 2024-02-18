"use strict";
let countDynamic = 0; // สร้างตัวแปร countDynamic และกำหนดค่าเป็น 0
function dynamicFibonacci() {
    let cache = {}; // สร้างตัวแปร cache และกำหนดค่าเป็น {}
    return function fibonacci(n) {
        if (n in cache) { // ถ้า n อยู่ใน cache
            return cache[n]; // คืนค่า cache[n]
        } // ปิดเงื่อนไข
        countDynamic++; // เพิ่มค่า countDynamic ขึ้น 1
        if (n < 2) // ถ้า n น้อยกว่า 2
            return n; // คืนค่า n
        cache[n] = fibonacci(n - 1) + fibonacci(n - 2); // กำหนดค่า cache[n] เป็น fibonacci(n - 1) + fibonacci(n - 2)
        return cache[n]; // คืนค่า cache[n]
    };
}
let countRecursive = 0; // สร้างตัวแปร countRecursive และกำหนดค่าเป็น 0
function recursiveFibonacci(n) {
    countRecursive++; // เพิ่มค่า countRecursive ขึ้น 1
    if (n < 2) // ถ้า n น้อยกว่า 2
        return n; // คืนค่า n
    return recursiveFibonacci(n - 1) + // คืนค่า recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
        recursiveFibonacci(n - 2);
}
let countIterative = 0; // สร้างตัวแปร countIterative และกำหนดค่าเป็น 0
function iterativeFibonacci(n) {
    let arr = [0, 1]; // สร้างตัวแปร arr และกำหนดค่าเป็น [0, 1]
    for (let i = 2; i <= n; i++) { // วนลูปเพื่อคำนวณ fibonacci โดยเริ่มจาก i เท่ากับ 2 และวนไปเรื่อยๆ จนถึง i เท่ากับ n
        countIterative++; // เพิ่มค่า countIterative ขึ้น 1
        let fibo = arr[i - 1] + arr[i - 2]; // กำหนดค่า fibo เป็น arr[i - 1] + arr[i - 2]
        arr.push(fibo); // เพิ่มค่า fibo เข้าไปใน arr
    }
    return arr[n]; // คืนค่า arr[n]
}
let target = 35; // สร้างตัวแปร target และกำหนดค่าเป็น 35
console.time("iterative");
const iterative_value = iterativeFibonacci(target); // สร้างตัวแปร iterative_value และกำหนดค่าเป็น iterativeFibonacci(target)
console.log(`iterativeFibonacci(${target}) = ${iterative_value} , count: ${countIterative}`); // แสดงผลลัพธ์ของ iterativeFibonacci(target)
console.timeEnd("iterative"); // หยุดการจับเวลา
console.time("recursive");
const recursive_value = recursiveFibonacci(target); // สร้างตัวแปร recursive_value และกำหนดค่าเป็น recursiveFibonacci(target)
console.log(`recursiveFibonacci(${target}) = ${recursive_value} , count: ${countRecursive}`); // แสดงผลลัพธ์ของ recursiveFibonacci(target)
console.timeEnd("recursive"); // หยุดการจับเวลา
console.time("dynamic"); // เริ่มการจับเวลา
const memoizedFibo = dynamicFibonacci(); // สร้างตัวแปร memoizedFibo และกำหนดค่าเป็น dynamicFibonacci()
const dynamic_value = memoizedFibo(target); // สร้างตัวแปร dynamic_value และกำหนดค่าเป็น memoizedFibo(target) 
console.log(`memoizedFibo(${target}) = ${dynamic_value} , count: ${countDynamic}`); // แสดงผลลัพธ์ของ memoizedFibo(target)
console.timeEnd("dynamic"); // หยุดการจับเวลา
