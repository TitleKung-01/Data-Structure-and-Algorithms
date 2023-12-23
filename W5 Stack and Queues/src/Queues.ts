class QueueNode {
    value: any
    next: QueueNode | null
    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

class Queue {
    first: QueueNode | null = null
    last: QueueNode | null = null
    length: number = 0

    peek() {
        return this.first?.value // ดูค่าบนสุด
    }

    enqueue(value: any) { // เพิ่ม node ใน queue
        const newNode = new QueueNode(value) // สร้าง node ใหม่
        if (this.first === null) { // ถ้ายังไม่มี node ใน queue
            this.first = newNode //step-1 // ให้ first และ last เป็น node นั้น
            this.last = newNode //step-1 // ให้ first และ last เป็น node นั้น
        } else { // ถ้ามี node อยู่แล้ว
            this.last!.next = newNode //step-2 //   ให้ last ชี้ไปที่ node ใหม่
            this.last = newNode //step-3 // ให้ last เป็น node ใหม่
        }
        this.length++ // เพิ่มค่า length
        return this // return queue
    }

    dequeue() { // ลบ node บนสุดออก
        if (this.first === null) { // ถ้ายังไม่มี node ใน queue
            return null // return null
        } // ถ้ามี node อยู่แล้ว
        if (this.first === this.last) { // ถ้ามี node อยู่แค่ตัวเดียว
            this.last = null // ให้ last เป็น null
        } // ถ้ามี node อยู่มากกว่า 1 ตัว
        this.first = this.first.next //step-2 // ให้ first เป็น node ถัดไป
        this.length-- // ลดค่า length    
        return this // return queue
    }

}

let myQueue = new Queue() // สร้าง queue ใหม่

myQueue.enqueue('Joy')
myQueue.enqueue('Matt')
myQueue.enqueue('Pavel')
myQueue.enqueue('Samir')

myQueue.dequeue()
myQueue.peek()

console.log(myQueue);
console.log(myQueue.peek());
   // Queue { first: QueueNode { value: 'Joy', next: QueueNode { value: 'Matt', next: [QueueNode] } }, last: QueueNode { value: 'Samir', next: null }, length: 4 }