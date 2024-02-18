"use strict";
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]; // เก็บตัวเลขไว้ใน array
console.log(`original: ${numbers}`); // แสดงผลตัวเลขเริ่มต้น
function mergeSort(arr) {
    if (arr.length === 1) // ถ้า arr มีความยาวเท่ากับ 1
        return arr;
    const middle = Math.floor(arr.length / 2); // หารความยาวของ arr ด้วย 2 แล้วปัดเศษลง ใช้สำหรับหาค่ากึ่งกลางของ arr
    const left = arr.slice(0, middle); // สร้างตัวแปร left มีค่าเท่ากับ arr ตั้งแต่ index 0 ถึง middle   [99, 44, 6, 2, 1]
    const right = arr.slice(middle); // สร้างตัวแปร right มีค่าเท่ากับ arr ตั้งแต่ middle ถึงตัวสุดท้าย  [5, 63, 87, 283, 4, 0]
    return merge(mergeSort(left), mergeSort(right)); // ส่งค่า left และ right ไปที่ function merge แล้วส่งค่าที่ได้ไปที่ function mergeSort แล้ว return ค่าที่ได้
}
function merge(left, right) {
    const result = []; // สร้างตัวแปร result เป็น array ของตัวเลข
    let leftIndex = 0; // สร้างตัวแปร leftIndex เป็นตัวเลข
    let rightIndex = 0; // สร้างตัวแปร rightIndex เป็นตัวเลข
    while (leftIndex < left.length && rightIndex < right.length) { // ถ้า leftIndex น้อยกว่าความยาวของ left และ rightIndex น้อยกว่าความยาวของ right สมมุติว่า leftIndex = 0 และ rightIndex = 0 ความยาวของ left = 5 และความยาวของ right = 6 จะเข้า loop
        const leftValue = left[leftIndex]; // สร้างตัวแปร leftValue เท่ากับ left ตำแหน่ง leftIndex  [99]
        const rightValue = right[rightIndex]; // สร้างตัวแปร rightValue เท่ากับ right ตำแหน่ง rightIndex  [5]
        if (leftValue < rightValue) { // ถ้า leftValue น้อยกว่า rightValue จะเข้าเงื่อนไข
            result.push(leftValue); // ให้เพิ่ม leftValue เข้าไปใน result  [5]
            leftIndex++; // ให้ leftIndex บวก 1  [1]
        }
        else { // ถ้าไม่ใช่
            result.push(rightValue); // ให้เพิ่ม rightValue เข้าไปใน result  [5]
            rightIndex++; // ให้ rightIndex บวก 1  [1]
        }
    }
    const remainingLeft = left.slice(leftIndex); // สร้างตัวแปร remainingLeft เท่ากับ left ตั้งแต่ leftIndex ถึงตัวสุดท้าย  [44, 6, 2, 1]
    const remainingRight = right.slice(rightIndex); // สร้างตัวแปร remainingRight เท่ากับ right ตั้งแต่ rightIndex ถึงตัวสุดท้าย  [63, 87, 283, 4, 0]
    const remaining = remainingLeft.concat(remainingRight); // สร้างตัวแปร remaining เท่ากับ remainingLeft ต่อด้วย remainingRight  [44, 6, 2, 1, 63, 87, 283, 4, 0]
    return result.concat(remaining); // [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]
}
const sort = mergeSort(numbers);
console.log(`mergeSort: ${sort}`);
