"use strict";
const numbers1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]; // เก็บตัวเลขไว้ใน array
console.log(`original: ${numbers1}`); // แสดงผลตัวเลขเริ่มต้น
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left > right) // ถ้า left มากกว่า right
        return arr;
    const pivot = right; // สร้างตัวแปร pivot เท่ากับ right
    const partitionIndex = partition(arr, pivot, left, right); // สร้างตัวแปร partitionIndex เท่ากับ partition ที่รับค่า arr, pivot, left, right
    quickSort(arr, left, partitionIndex - 1); // ส่งค่า arr, left, และ partitionIndex - 1 ไปที่ function quickSort
    quickSort(arr, partitionIndex + 1); // ส่งค่า arr, partitionIndex + 1, และ right ไปที่ function quickSort
}
function partition(arr, pivot, left, right) {
    const pivotValue = arr[pivot]; // สร้างตัวแปร pivotValue เท่ากับ arr ตำแหน่ง pivot
    let partitionIndex = left; // สร้างตัวแปร partitionIndex เท่ากับ left
    for (let i = left; i < right; i++) { // สร้าง loop โดยให้ i เท่ากับ left ถ้า i น้อยกว่า right ให้ i บวก 1
        if (arr[i] < pivotValue) { // ถ้า arr ตำแหน่ง i น้อยกว่า pivotValue
            swap(arr, i, partitionIndex); // ให้ส่งค่า arr, i, และ partitionIndex ไปที่ function swap
            partitionIndex++; // ให้ partitionIndex บวก 1
        }
    }
    swap(arr, right, partitionIndex); // ส่งค่า arr, right, และ partitionIndex ไปที่ function swap
    return partitionIndex; // ส่งค่า partitionIndex ออกจาก function
}
function swap(arr, index1, index2) {
    const holding = arr[index1]; // สร้างตัวแปร holding เท่ากับ arr ตำแหน่ง index1 
    arr[index1] = arr[index2]; // ให้ arr ตำแหน่ง index1 เท่ากับ arr ตำแหน่ง index2
    arr[index2] = holding; // ให้ arr ตำแหน่ง index2 เท่ากับ holding
}
quickSort(numbers1);
console.log(`quickSort: ${numbers1}`);
// Path: src/SortingSelection.ts