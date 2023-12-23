class BTNode {
    data: any // ค่าของ node
    left: null | BTNode = null // ลูกทางด้านซ้าย
    right: null | BTNode = null // ลูกทางด้านขวา

    constructor(data: any) { // สร้าง node ใหม่
        this.data = data // กำหนดค่าให้กับ node
    }
}

class BinarySearchTree { // สร้าง class BinarySearchTree
    root: null | BTNode = null // กำหนดค่า root ให้เป็น null

    insert(data: any) { // สร้าง method insert
        const newNode = new BTNode(data) // สร้าง node ใหม่
        if (this.root === null) // ถ้าไม่มี root
            this.root = newNode // กำหนดให้ root เป็น node ใหม่
        else // ถ้ามี root
            this.#insertNode(this.root, newNode) // เรียกใช้ method insertNode
    }

    #insertNode(RootNode: BTNode, newNode: BTNode) { // สร้าง method insertNode 
        if (newNode.data < RootNode.data) { // ถ้าค่าของ node ใหม่น้อยกว่าค่าของ node ปัจจุบัน 
            if (RootNode.left === null) // ถ้าไม่มีลูกทางด้านซ้าย
                RootNode.left = newNode // กำหนดให้ node ปัจจุบัน เป็นลูกทางด้านซ้ายของ 
            else // ถ้ามีลูกทางด้านซ้าย
                this.#insertNode(RootNode.left, newNode) // เรียกใช้ method insertNode
        } else { // ถ้าค่าของ node ใหม่มากกว่าค่าของ node ปัจจุบัน
            if (RootNode.right === null) // ถ้าไม่มีลูกทางด้านขวา
                RootNode.right = newNode // กำหนดให้ node ปัจจุบัน เป็นลูกทางด้านขวา
            else // ถ้ามีลูกทางด้านขวา
                this.#insertNode(RootNode.right, newNode) // เรียกใช้ method insertNode
        }
    }


    search(data: any) {// สร้าง method search
        if (this.root === null) // ถ้าไม่มี root
            return null // คืนค่า null
        else // ถ้ามี root
            return this.#searchNode(this.root, data) // เรียกใช้ method searchNode
    }

    #searchNode(RootNode: BTNode, data: any): BTNode | null { // สร้าง method searchNode 
        if (data < RootNode.data && RootNode.left !== null) { // ถ้าค่าของ node ที่เราต้องการหาน้อยกว่าค่าของ node ปัจจุบัน และ มีลูกทางด้านซ้าย True && True = True แปลว่าเข้าเงื่อนไขนี้   
            // (30 < 40 && ทางด้านซ้ายของ 40 ต้องไม่ว่าง ) เงื้อนไขนี้จะเป็น True ถ้าเป็น False จะไม่เข้าเงื่อนไขนี้
            return this.#searchNode(RootNode.left, data) // เรียกใช้ method searchNode 
        } else if (data > RootNode.data && RootNode.right !== null) { // ถ้าค่าของ node ที่เราต้องการหามากกว่าค่าของ node ปัจจุบัน และ มีลูกทางด้านขวา  //*!   || 
            return this.#searchNode(RootNode.right, data) // เรียกใช้ method searchNode
        } else if (data === RootNode.data) { // ถ้าค่าของ node ที่เราต้องการหาเท่ากับค่าของ node ปัจจุบัน
            return RootNode // คืนค่า node ปัจจุบัน
        }
        return null // คืนค่า null
    }

    remove(data: any) { // สร้าง method remove
        if (this.root === null) // ถ้าไม่มี root
            return null // คืนค่า null
        const [deleteNode, parentNode] = this.#searchDeleteNode(data, this.root, null) // ค้นหา node ที่ต้องการลบ
        if (deleteNode === null) // ถ้าไม่พบ node ที่ต้องการลบ
            return null // คืนค่า null
        return this.#removeNode(deleteNode, parentNode) // เรียกใช้ method removeNode
    }
    #searchDeleteNode(data: any, RootNode: BTNode, parentNode: BTNode | null): [null | BTNode, null | BTNode] { // สร้าง method searchDeleteNode
        if (data < RootNode.data && RootNode.left !== null) { // ถ้าค่าของ node ที่เราต้องการหาน้อยกว่าค่าของ node ปัจจุบัน และ มีลูกทางด้านซ้าย
            parentNode = RootNode // กำหนดค่า node ปัจจุบันให้เป็น node ก่อนหน้า
            RootNode = RootNode.left // กำหนดค่า node ปัจจุบันให้เป็นลูกทางด้านซ้าย
            return this.#searchDeleteNode(data, RootNode, parentNode) // เรียกใช้ method searchDeleteNode
        } else if (data > RootNode.data && RootNode.right !== null) { // ถ้าค่าของ node ที่เราต้องการหามากกว่าค่าของ node ปัจจุบัน และ มีลูกทางด้านขวา
            parentNode = RootNode // กำหนดค่า node ปัจจุบันให้เป็น node ก่อนหน้า
            RootNode = RootNode.right // กำหนดค่า node ปัจจุบันให้เป็นลูกทางด้านขวา
            return this.#searchDeleteNode(data, RootNode, parentNode) // เรียกใช้ method searchDeleteNode
        } else if (data === RootNode.data) // ถ้าค่าของ node ที่เราต้องการหาเท่ากับค่าของ node ปัจจุบัน
            return [RootNode, parentNode] // คืนค่า node ปัจจุบัน และ node ก่อนหน้า
        return [null, null] // คืนค่า null

        // ถ้าเราต้องการลบ node ที่มีลูก 2 ตัว ให้เราหา leftmost ของลูกด้านขวา แล้วเอาค่าของ leftmost มาแทนที่ค่าของ node ที่เราจะลบ
    }
    #removeNode(deleteNode: BTNode, parentNode: BTNode | null) { // สร้าง method removeNode
        //Option 1 ไม่มีด้านขวา 
        if (deleteNode.right === null) { // ถ้าไม่มีลูกด้านขวา
            if (parentNode === null) // ถ้าไม่มี node ก่อนหน้า parent คือ root
                this.root = deleteNode.left // กำหนดให้ root เป็นลูกด้านซ้าย
            else { // ถ้ามี node ก่อนหน้า
                if (parentNode.data > deleteNode.data) // ถ้าค่าของ node ก่อนหน้ามากกว่าค่าของ node ที่จะลบ
                    parentNode.left = deleteNode.left // กำหนดให้ node ก่อนหน้า เป็นลูกด้านซ้าย
                if (parentNode.data < deleteNode.data) // ถ้าค่าของ node ก่อนหน้าน้อยกว่าค่าของ node ที่จะลบ
                    parentNode.right = deleteNode.left // กำหนดให้ node ก่อนหน้า เป็นลูกด้านขวา
            }

            // ถ้าเราต้องการลบ node ที่มีลูก 1 ตัว ให้เราหา leftmost ของลูกด้านขวา แล้วเอาค่าของ leftmost มาแทนที่ค่าของ node ที่เราจะลบ
        }
        //Option 2 ด้านขวาของตัวที่เราจะลบ ไม่มีลูกด้านซ้าย
        else if (deleteNode.right.left === null) { // ถ้าไม่มีลูกด้านซ้าย
            deleteNode.right.left = deleteNode.left // กำหนดให้ลูกด้านซ้ายของตัวที่เราจะลบ เป็นลูกด้านซ้ายของลูกด้านขวาของตัวที่เราจะลบ
            if (parentNode === null) // ถ้าไม่มี node ก่อนหน้า
                this.root = deleteNode.right // กำหนดให้ root เป็นลูกด้านขวา
            else { // ถ้ามี node ก่อนหน้า
                if (parentNode.data > deleteNode.data) // ถ้าค่าของ node ก่อนหน้ามากกว่าค่าของ node ที่จะลบ
                    parentNode.left = deleteNode.right // กำหนดให้ node ก่อนหน้า เป็นลูกด้านซ้าย
                if (parentNode.data < deleteNode.data) // ถ้าค่าของ node ก่อนหน้าน้อยกว่าค่าของ node ที่จะลบ
                    parentNode.right = deleteNode.right // กำหนดให้ node ก่อนหน้า เป็นลูกด้านขวา
            }
        } // ถ้าเราต้องการลบ node ที่มีลูก 1 ตัว ให้เราหา leftmost ของลูกด้านขวา แล้วเอาค่าของ leftmost มาแทนที่ค่าของ node ที่เราจะลบ
        // option 3 ด้านขวาของตัวที่เราจะลบ มี ลูกด้านซ้าย
        else {
            let leftmost = deleteNode.right.left // กำหนดค่า leftmost เป็นลูกด้านซ้ายของลูกด้านขวาของตัวที่เราจะลบ
            let leftmostParent = deleteNode.right // กำหนดค่า leftmostParent เป็นลูกด้านขวาของตัวที่เราจะลบ
            while (leftmost.left !== null) { // วนลูปเพื่อหา leftmost ที่มีลูกด้านซ้าย
                leftmostParent = leftmost // กำหนดค่า leftmostParent เป็น leftmost
                leftmost = leftmost.left // กำหนดค่า leftmost เป็นลูกด้านซ้ายของ leftmost
            }
            leftmostParent.left = leftmost.right // กำหนดให้ลูกด้านซ้ายของ leftmostParent เป็นลูกด้านขวาของ leftmost
            leftmost.left = deleteNode.left // กำหนดให้ leftmost เป็นลูกด้านซ้ายของตัวที่เราจะลบ
            leftmost.right = deleteNode.right // กำหนดให้ leftmost เป็นลูกด้านขวาของตัวที่เราจะลบ
            if (parentNode === null) // ถ้าไม่มี node ก่อนหน้า
                this.root = leftmost // กำหนดให้ root เป็น leftmost
            else {
                if (parentNode.data > deleteNode.data) // ถ้าค่าของ node ก่อนหน้ามากกว่าค่าของ node ที่จะลบ
                    parentNode.left = leftmost // กำหนดให้ parentNode เป็น leftmost
                if (parentNode.data < deleteNode.data) // ถ้าค่าของ node ก่อนหน้าน้อยกว่าค่าของ node ที่จะลบ
                    parentNode.right = leftmost // กำหนดให้ parentNode เป็น leftmost
            }
        }

        // ถ้าเราต้องการลบ node ที่มีลูก 2 ตัว ให้เราหา leftmost ของลูกด้านขวา แล้วเอาค่าของ leftmost มาแทนที่ค่าของ node ที่เราจะลบ
    }


    //https://docs.oracle.com/html/E79061_01/Content/Reference/Truth_tables.htm

}

let tree = new BinarySearchTree() // สร้างต้นไม้ใหม่

tree.insert(40) // เพิ่ม node ใหม่ 
tree.insert(30) // เพิ่ม node ใหม่
tree.insert(25) // เพิ่ม node ใหม่
tree.insert(35) // เพิ่ม node ใหม่
tree.insert(50) // เพิ่ม node ใหม่
tree.insert(45) // เพิ่ม node ใหม่
tree.insert(60) // เพิ่ม node ใหม่


console.log(tree.search(60)); // ค้นหา node ที่มีค่าเท่ากับ 40
console.log(tree); 