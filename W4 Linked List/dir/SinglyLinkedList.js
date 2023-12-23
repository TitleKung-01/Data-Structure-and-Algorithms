"use strict";
// สร้าง Node ของ Singly Linked List
class SinglyNode {
    constructor(data) {
        this.data = data; // กำหนดค่าให้กับตัวแปร data
        this.next = null; // กำหนดค่าให้กับตัวแปร next เป็น null
    }
}
// สร้าง Singly Linked List ชี้หัวและหางเป็น null เป็นค่าเริ่มต้น
class SinglyLinkedList {
    constructor() {
        this.length = 0; // ตัวแปรเก็บค่าของจำนวน Node ทั้งหมดใน Linked List
        this.head = null; // กำหนดค่าให้กับตัวแปร head เป็น null
        this.tail = null; // กำหนดค่าให้กับตัวแปร tail เป็น null
    }
    append(value) {
        const newNode = new SinglyNode(value); // สร้าง Node ใหม่
        if (this.head === null) { // ถ้า Linked List ยังไม่มี Node ใดๆ
            this.head = newNode; // ให้ Head และ Tail ชี้ไปที่ Node ใหม่
            this.tail = this.head; // ให้ Head และ Tail ชี้ไปที่ Node ใหม่
        }
        else { // ถ้า Linked List มี Node อยู่แล้ว
            this.tail.next = newNode; // ให้ Node ตัวสุดท้ายชี้ไปที่ Node ใหม่
            this.tail = newNode; // ให้ Tail ชี้ไปที่ Node ใหม่
        }
        this.length++; // เพิ่มค่าของ length ขึ้น 1
    }
    appendLeft(value) {
        const newNode = new SinglyNode(value); // สร้าง Node ใหม่
        if (this.head === null) { // ถ้า Linked List ยังไม่มี Node ใดๆ
            this.head = newNode; // ให้ Head และ Tail ชี้ไปที่ Node ใหม่
            this.tail = this.head; // ให้ Head และ Tail ชี้ไปที่ Node ใหม่
        }
        else { // ถ้า Linked List มี Node อยู่แล้ว
            newNode.next = this.head; // ให้ Node ใหม่ชี้ไปที่ Node แรก 
            this.head = newNode; // ให้ Head ชี้ไปที่ Node ใหม่
        }
        this.length++; // เพิ่มค่าของ length ขึ้น 1
    }
    toArray() {
        const array = []; // สร้างตัวแปร array เป็น Array เปล่า
        let node = this.head; // สร้างตัวแปร node เก็บค่าของ Node แรกของ Linked List 
        while (node !== null) { // วนลูปเพื่อเก็บค่าของ Node ทุกตัวใน Linked List ไว้ในอาร์เรย์
            array.push(node === null || node === void 0 ? void 0 : node.data); // เพิ่มค่าของ Node ลงในอาร์เรย์  เครื่องหมาย ? คือ ถ้า node ไม่ใช่ null ให้เพิ่มค่าของ Node ลงในอาร์เรย์
            node = node === null || node === void 0 ? void 0 : node.next; // ให้ตัวแปร node ชี้ไปยัง Node ถัดไป
        }
        return array; // ส่งค่าอาร์เรย์กลับ
    }
    traverseToIndex(index) {
        // Class SinglyLinkedList ที่รับค่า index : number เพื่อค้นหา Node ตาม index ที่รับเข้ามา
        let counter = 0; // สร้างตัวแปร counter เพื่อนับจำนวน Node ที่ผ่านมา > 0 + 1 = 1
        let currentNode = this.head; // สร้างตัวแปร currentNode เพื่อเก็บค่าของ Node แรกของ Linked List
        while (counter < index) { // วนลูปเพื่อเลื่อน Node ไปยังตำแหน่งที่ต้องการ // ไม่เข้าเงื่อนไขเพราะ counter = 1 และ index = 1
            currentNode = currentNode.next; // ให้ตัวแปร currentNode ชี้ไปยัง Node ถัดไป
            counter++; // เพิ่มค่าของ counter ขึ้น 1 + 1
        }
        return currentNode; // ส่งค่า Node ที่ต้องการกลับ
    }
    insert(index, value) {
        if (index >= this.length) // ถ้า index มากกว่าหรือเท่ากับจำนวนของ Linked List ให้เพิ่ม Node ต่อท้าย // *! [20, 55, 5] 3 > 2 [20, 55, 5, 10]
            return this.append(value); // เพิ่ม Node ต่อท้าย
        if (index === 0) // ถ้า index เป็น 0 ให้เพิ่ม Node ไปที่ต้น Linked List //  * ! (ใส่ 10 ในตำแหน่งที่ 0) [20, 55, 5] 0 = 0 [10, 20, 55, 5]  
            return this.appendLeft(value); // เพิ่ม Node ไปที่ต้น Linked List
        const newNode = new SinglyNode(value); // สร้าง Node ใหม่
        const leftNode = this.traverseToIndex(index - 1);
        // ค้นหา Node ก่อน Node ที่ต้องการแทรก -1 เพื่อให้ได้ Node ก่อนหน้า Node ที่ต้องการแทรก
        const holdingPointer = leftNode.next; // กำหนดตัวแปรเก็บ Node ที่ต้องการแทรก
        leftNode.next = newNode; // ให้ Node ก่อน Node ที่ต้องการแทรก ชี้ไปยัง Node ใหม่
        newNode.next = holdingPointer; // ให้ Node ใหม่ ชี้ไปยัง Node ที่ต้องการแทรก
        this.length++; // เพิ่มค่าของ length ขึ้น 1
        return this; // ส่งค่า Linked List กลับ
    }
    remove(index) {
        var _a;
        if (this.head === null) // ถ้า Linked List ยังไม่มี Node ใดๆ ถ้า this.head === [ ]
            return; // ให้ส่งค่า้ปล่าๆกลับไป
        if (index > this.length) // ถ้า index มากกว่าความยาวของ Linked List // * (ใส่ 10 ในตำแหน่งที่ 3) [20, 55, 5] || 3 > 2  || [20, 55] 
            this.traverseToIndex(this.length - 1); // 3 - 1 = 2 ให้ค้นหา Node ที่ต้องการลบจากตำแหน่งสุดท้าย
        if (index < 1) { // ถ้า index น้อยกว่า 1
            this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.next; // ให้ Head ชี้ไปยัง Node ถัดไป
        }
        else { // ถ้า index มากกว่าหรือเท่ากับ 1
            const leftNode = this.traverseToIndex(index - 1); // ค้นหา Node ก่อน Node ที่ต้องการลบ -1 เพื่อให้ได้ Node ก่อนหน้า Node ที่ต้องการลบ
            const deleteNode = leftNode.next; // กำหนดตัวแปรเก็บ Node ที่ต้องการลบ
            leftNode.next = deleteNode.next; // ให้ Node ก่อน Node ที่ต้องการลบ ชี้ไปยัง Node หลัง Node ที่ต้องการลบ
            // this.tail = leftNode
            // ให้ Tail ชี้ไปยัง Node ก่อน Node ที่ต้องการลบ 
        }
        this.length--; // ลดค่าของ length ลง 1
        return this; // ส่งค่า Linked List กลับ
    }
}
let linkedList = new SinglyLinkedList();
linkedList.append(20);
linkedList.append(55);
linkedList.append(15);
linkedList.append(5);
linkedList.remove(3);
console.log(linkedList);
