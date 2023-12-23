class DoublyNode {
    data: any //data
    next: DoublyNode | null
    prev: DoublyNode | null //<--
    constructor(value: any) {
        this.data = value
        this.next = null
        this.prev = null //<--
    }
}

class DoublyLinkedList {
    head: DoublyNode | null
    tail: DoublyNode | null
    length: number = 0
    constructor() {
        this.head = null
        this.tail = null
    }

    append(value: any) {
        const newNode = new DoublyNode(value) //<--
        if (this.head === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.prev = this.tail //<--
            this.tail!.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    appendLeft(value: any) {
        const newNode = new DoublyNode(value) //<--
        if (this.head === null) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head.prev = newNode //<--
            this.head = newNode
        }
        this.length++
    }


    toArray() {
        const array: any[] = []
        let node = this.head
        while (node !== null) { //time complexity = O(n)
            array.push(node?.data)
            node = node?.next
        }
        return array
    }

    traverseToIndex(index: number) {
        let counter = 0
        let currentNode = this.head
        while (counter < index) { //a little bug, some situation has a runtime error occurred
            currentNode = currentNode!.next
            counter++
        }
        return currentNode
    }

    insert(index: number, value: any) {
        if (index >= this.length)
            return this.append(value)
        if (index === 0)
            return this.appendLeft(value)
        const newNode = new DoublyNode(value)
        const leftNode = this.traverseToIndex(index - 1)
        const rightNode = leftNode!.next //<-- 
        leftNode!.next = newNode //<--
        newNode.prev = leftNode //<--
        newNode.next = rightNode //<--
        rightNode!.prev = newNode //<--

        this.length++
        return this
    }

    remove(index: number) {
        if (this.head === null)
            return
        if (index > this.length)
            index = this.length - 1
        if (index < 1) {
            this.head = this.head?.next
            this.head!.prev = null //<--
        } else { //<--
            let deleteNode = this.tail
            if (index < this.length - 1)
                deleteNode = this.traverseToIndex(index)
            if (deleteNode!.prev != null)
                deleteNode!.prev.next = deleteNode!.next
            if (deleteNode!.next != null)
                deleteNode!.next.prev = deleteNode!.prev
            else
                this.tail = deleteNode!.prev
        }
        this.length--
        return this
    }
}

let DoublyList = new DoublyLinkedList()
DoublyList.append(5)
DoublyList.append(7)
DoublyList.appendLeft(17)
DoublyList.insert(1, 99)
DoublyList.remove(3)
DoublyList.remove(2)
console.log(DoublyList)
console.log(DoublyList.toArray())