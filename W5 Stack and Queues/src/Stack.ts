class StackNode {
    value: any
    next: StackNode | null
    constructor(value: any) {
        this.value = value
        this.next = null
    }
}

class Stack {
    top: StackNode | null = null
    bottom: StackNode | null = null
    length: number = 0

    peek() { 
        return this.top // ดูค่าบนสุด
    }

    push(value: any) {
        const newNode = new StackNode(value) // สร้าง node ใหม่
        if (this.top === null) { // ถ้ายังไม่มี node ใน stack
            this.top = newNode // ให้ top และ bottom เป็น node นั้น
            this.bottom = newNode // ให้ top และ bottom เป็น node นั้น
        } else { // ถ้ามี node อยู่แล้ว
            const holding = this.top // ให้ holding เก็บค่า top เดิมไว้
            this.top = newNode // ให้ top เป็น node ใหม่
            this.top.next = holding // ให้ node ใหม่ชี้ไปที่ holding
        }
        this.length++ // เพิ่มค่า length
        return this // return sthack
    }

    pop() { // ลบ node บนสุดออก
        if (this.top === null) { // ถ้ายังไม่มี node ใน stack
            return null; // return null
        }
        if (this.top === this.bottom) { // ถ้ามี node อยู่แค่ตัวเดียว
            this.bottom = null // ให้ bottom เป็น null
        }
        this.top = this.top!.next //step-2 // ให้ top เป็น node ถัดไป
        this.length-- // ลดค่า length
        return this // return stack
    }
}




let myStack = new Stack() // สร้าง stack ใหม่

myStack.push('A')
myStack.push('B')
myStack.push('C')
myStack.push('D')

myStack.pop()
console.log(myStack.peek());
console.log(myStack);


class StackArray {
    array = new Array
    peek() { // ดูค่าบนสุด
        return this.array[this.array.length - 1] // [1,2,3,4,5] => [5]
    }
    push(value: any) {  // เพิ่มค่าบนสุด
        this.array.push(value) // function push ของ array
        return this
    }
    pop() {
        this.array.pop()
        return this
    }
}

const stack = new StackArray()
stack.push('google') // [google]
stack.push('udemy') // [google, udemy]
stack.push('discord') // [google, udemy, discord]
stack.push('youtube') // [google, udemy, discord, youtube]
stack.push('facebook') // [google, udemy, discord, youtube, facebook]
stack.pop() // [google, udemy, discord, youtube]

console.log(stack.peek());
