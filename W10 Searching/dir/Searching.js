"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BinarySearchTree_instances, _BinarySearchTree_insertNode, _BinarySearchTree_searchNode, _BinarySearchTree_searchDeleteNode, _BinarySearchTree_removeNode;
class BTNode {
    constructor(data) {
        this.left = null; // ลูกทางด้านซ้าย
        this.right = null; // ลูกทางด้านขวา
        this.data = data; // กำหนดค่าให้กับ node
    }
}
class BinarySearchTree {
    constructor() {
        _BinarySearchTree_instances.add(this);
        this.root = null; // กำหนดค่า root ให้เป็น null
        //https://docs.oracle.com/html/E79061_01/Content/Reference/Truth_tables.htm
    }
    insert(data) {
        const newNode = new BTNode(data); // สร้าง node ใหม่
        if (this.root === null) // ถ้าไม่มี root
            this.root = newNode; // กำหนดให้ root เป็น node ใหม่
        else // ถ้ามี root
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insertNode).call(this, this.root, newNode); // เรียกใช้ method insertNode
    }
    search(data) {
        if (this.root === null) // ถ้าไม่มี root
            return null; // คืนค่า null
        else // ถ้ามี root
            return __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_searchNode).call(this, this.root, data); // เรียกใช้ method searchNode
    }
    remove(data) {
        if (this.root === null) // ถ้าไม่มี root
            return null; // คืนค่า null
        const [deleteNode, parentNode] = __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_searchDeleteNode).call(this, data, this.root, null); // ค้นหา node ที่ต้องการลบ
        if (deleteNode === null) // ถ้าไม่พบ node ที่ต้องการลบ
            return null; // คืนค่า null
        return __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_removeNode).call(this, deleteNode, parentNode); // เรียกใช้ method removeNode
    }
    //! ส่วนของการค้นหาข้อมูลแบบค้นหาแบบความลึกและความกว้าง
    breadthFirstSearch() {
        if (this.root === null) // ถ้าไม่มี root
            return null; // คืนค่า null
        let currentNode = this.root; // กำหนดค่า currentNode เป็น root
        let bfs = []; // สร้างตัวแปร bfs เป็น array
        let queue = []; // สร้างตัวแปร queue เป็น array
        queue.push(currentNode); // เพิ่ม currentNode เข้าไปใน queue
        while (queue.length > 0) { // วนลูปเมื่อ queue ยังมีค่า
            currentNode = queue.shift(); // กำหนดค่า currentNode เป็นค่าแรกของ queue และลบค่าแรกของ queue
            bfs.push(currentNode.data); // เพิ่มค่าของ currentNode เข้าไปใน bfs
            if (currentNode.left !== null) // ถ้ามีลูกทางด้านซ้าย
                queue.push(currentNode.left); // เพิ่มลูกทางด้านซ้ายเข้าไปใน queue
            if (currentNode.right !== null) // ถ้ามีลูกทางด้านขวา
                queue.push(currentNode.right); // เพิ่มลูกทางด้านขวาเข้าไปใน queue
        }
        return bfs; // คืนค่า bfs
    }
    breadthFirstSearchRecusive(queue = [this.root], bfs = []) {
        if (queue.length < 1) // ถ้า queue มีค่าน้อยกว่า 1
            return bfs; // คืนค่า bfs
        const currentNode = queue.shift(); // กำหนดค่า currentNode เป็นค่าแรกของ queue และลบค่าแรกของ queue
        bfs.push(currentNode.value); // เพิ่มค่าของ currentNode เข้าไปใน bfs
        if (currentNode.left !== null) // ถ้ามีลูกทางด้านซ้าย
            queue.push(currentNode.left); // เพิ่มลูกทางด้านซ้ายเข้าไปใน queue
        if (currentNode.right !== null) // ถ้ามีลูกทางด้านขวา
            queue.push(currentNode.right); // เพิ่มลูกทางด้านขวาเข้าไปใน queue
        return this.breadthFirstSearchRecusive(queue, bfs); // เรียกใช้ method breadthFirstSearchRecusive
    }
}
_BinarySearchTree_instances = new WeakSet(), _BinarySearchTree_insertNode = function _BinarySearchTree_insertNode(RootNode, newNode) {
    if (newNode.data < RootNode.data) { // ถ้าค่าของ node ใหม่น้อยกว่าค่าของ node ปัจจุบัน 
        if (RootNode.left === null) // ถ้าไม่มีลูกทางด้านซ้าย
            RootNode.left = newNode; // กำหนดให้ node ปัจจุบัน เป็นลูกทางด้านซ้ายของ 
        else // ถ้ามีลูกทางด้านซ้าย
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insertNode).call(this, RootNode.left, newNode); // เรียกใช้ method insertNode
    }
    else { // ถ้าค่าของ node ใหม่มากกว่าค่าของ node ปัจจุบัน
        if (RootNode.right === null) // ถ้าไม่มีลูกทางด้านขวา
            RootNode.right = newNode; // กำหนดให้ node ปัจจุบัน เป็นลูกทางด้านขวา
        else // ถ้ามีลูกทางด้านขวา
            __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_insertNode).call(this, RootNode.right, newNode); // เรียกใช้ method insertNode
    }
}, _BinarySearchTree_searchNode = function _BinarySearchTree_searchNode(RootNode, data) {
    if (data < RootNode.data && RootNode.left !== null) { // ถ้าค่าของ node ที่เราต้องการหาน้อยกว่าค่าของ node ปัจจุบัน และ มีลูกทางด้านซ้าย True && True = True แปลว่าเข้าเงื่อนไขนี้   
        // (30 < 40 && ทางด้านซ้ายของ 40 ต้องไม่ว่าง ) เงื้อนไขนี้จะเป็น True ถ้าเป็น False จะไม่เข้าเงื่อนไขนี้
        return __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_searchNode).call(this, RootNode.left, data); // เรียกใช้ method searchNode 
    }
    else if (data > RootNode.data && RootNode.right !== null) { // ถ้าค่าของ node ที่เราต้องการหามากกว่าค่าของ node ปัจจุบัน และ มีลูกทางด้านขวา  //*!   || 
        return __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_searchNode).call(this, RootNode.right, data); // เรียกใช้ method searchNode
    }
    else if (data === RootNode.data) { // ถ้าค่าของ node ที่เราต้องการหาเท่ากับค่าของ node ปัจจุบัน
        return RootNode; // คืนค่า node ปัจจุบัน
    }
    return null; // คืนค่า null
}, _BinarySearchTree_searchDeleteNode = function _BinarySearchTree_searchDeleteNode(data, RootNode, parentNode) {
    if (data < RootNode.data && RootNode.left !== null) { // ถ้าค่าของ node ที่เราต้องการหาน้อยกว่าค่าของ node ปัจจุบัน และ มีลูกทางด้านซ้าย
        parentNode = RootNode; // กำหนดค่า node ปัจจุบันให้เป็น node ก่อนหน้า
        RootNode = RootNode.left; // กำหนดค่า node ปัจจุบันให้เป็นลูกทางด้านซ้าย
        return __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_searchDeleteNode).call(this, data, RootNode, parentNode); // เรียกใช้ method searchDeleteNode
    }
    else if (data > RootNode.data && RootNode.right !== null) { // ถ้าค่าของ node ที่เราต้องการหามากกว่าค่าของ node ปัจจุบัน และ มีลูกทางด้านขวา
        parentNode = RootNode; // กำหนดค่า node ปัจจุบันให้เป็น node ก่อนหน้า
        RootNode = RootNode.right; // กำหนดค่า node ปัจจุบันให้เป็นลูกทางด้านขวา
        return __classPrivateFieldGet(this, _BinarySearchTree_instances, "m", _BinarySearchTree_searchDeleteNode).call(this, data, RootNode, parentNode); // เรียกใช้ method searchDeleteNode
    }
    else if (data === RootNode.data) // ถ้าค่าของ node ที่เราต้องการหาเท่ากับค่าของ node ปัจจุบัน
        return [RootNode, parentNode]; // คืนค่า node ปัจจุบัน และ node ก่อนหน้า
    return [null, null]; // คืนค่า null
    // ถ้าเราต้องการลบ node ที่มีลูก 2 ตัว ให้เราหา leftmost ของลูกด้านขวา แล้วเอาค่าของ leftmost มาแทนที่ค่าของ node ที่เราจะลบ
}, _BinarySearchTree_removeNode = function _BinarySearchTree_removeNode(deleteNode, parentNode) {
    //Option 1 ไม่มีด้านขวา 
    if (deleteNode.right === null) { // ถ้าไม่มีลูกด้านขวา
        if (parentNode === null) // ถ้าไม่มี node ก่อนหน้า parent คือ root
            this.root = deleteNode.left; // กำหนดให้ root เป็นลูกด้านซ้าย
        else { // ถ้ามี node ก่อนหน้า
            if (parentNode.data > deleteNode.data) // ถ้าค่าของ node ก่อนหน้ามากกว่าค่าของ node ที่จะลบ
                parentNode.left = deleteNode.left; // กำหนดให้ node ก่อนหน้า เป็นลูกด้านซ้าย
            if (parentNode.data < deleteNode.data) // ถ้าค่าของ node ก่อนหน้าน้อยกว่าค่าของ node ที่จะลบ
                parentNode.right = deleteNode.left; // กำหนดให้ node ก่อนหน้า เป็นลูกด้านขวา
        }
        // ถ้าเราต้องการลบ node ที่มีลูก 1 ตัว ให้เราหา leftmost ของลูกด้านขวา แล้วเอาค่าของ leftmost มาแทนที่ค่าของ node ที่เราจะลบ
    }
    //Option 2 ด้านขวาของตัวที่เราจะลบ ไม่มีลูกด้านซ้าย
    else if (deleteNode.right.left === null) { // ถ้าไม่มีลูกด้านซ้าย
        deleteNode.right.left = deleteNode.left; // กำหนดให้ลูกด้านซ้ายของตัวที่เราจะลบ เป็นลูกด้านซ้ายของลูกด้านขวาของตัวที่เราจะลบ
        if (parentNode === null) // ถ้าไม่มี node ก่อนหน้า
            this.root = deleteNode.right; // กำหนดให้ root เป็นลูกด้านขวา
        else { // ถ้ามี node ก่อนหน้า
            if (parentNode.data > deleteNode.data) // ถ้าค่าของ node ก่อนหน้ามากกว่าค่าของ node ที่จะลบ
                parentNode.left = deleteNode.right; // กำหนดให้ node ก่อนหน้า เป็นลูกด้านซ้าย
            if (parentNode.data < deleteNode.data) // ถ้าค่าของ node ก่อนหน้าน้อยกว่าค่าของ node ที่จะลบ
                parentNode.right = deleteNode.right; // กำหนดให้ node ก่อนหน้า เป็นลูกด้านขวา
        }
    } // ถ้าเราต้องการลบ node ที่มีลูก 1 ตัว ให้เราหา leftmost ของลูกด้านขวา แล้วเอาค่าของ leftmost มาแทนที่ค่าของ node ที่เราจะลบ
    // option 3 ด้านขวาของตัวที่เราจะลบ มี ลูกด้านซ้าย
    else {
        let leftmost = deleteNode.right.left; // กำหนดค่า leftmost เป็นลูกด้านซ้ายของลูกด้านขวาของตัวที่เราจะลบ
        let leftmostParent = deleteNode.right; // กำหนดค่า leftmostParent เป็นลูกด้านขวาของตัวที่เราจะลบ
        while (leftmost.left !== null) { // วนลูปเพื่อหา leftmost ที่มีลูกด้านซ้าย
            leftmostParent = leftmost; // กำหนดค่า leftmostParent เป็น leftmost
            leftmost = leftmost.left; // กำหนดค่า leftmost เป็นลูกด้านซ้ายของ leftmost
        }
        leftmostParent.left = leftmost.right; // กำหนดให้ลูกด้านซ้ายของ leftmostParent เป็นลูกด้านขวาของ leftmost
        leftmost.left = deleteNode.left; // กำหนดให้ leftmost เป็นลูกด้านซ้ายของตัวที่เราจะลบ
        leftmost.right = deleteNode.right; // กำหนดให้ leftmost เป็นลูกด้านขวาของตัวที่เราจะลบ
        if (parentNode === null) // ถ้าไม่มี node ก่อนหน้า
            this.root = leftmost; // กำหนดให้ root เป็น leftmost
        else {
            if (parentNode.data > deleteNode.data) // ถ้าค่าของ node ก่อนหน้ามากกว่าค่าของ node ที่จะลบ
                parentNode.left = leftmost; // กำหนดให้ parentNode เป็น leftmost
            if (parentNode.data < deleteNode.data) // ถ้าค่าของ node ก่อนหน้าน้อยกว่าค่าของ node ที่จะลบ
                parentNode.right = leftmost; // กำหนดให้ parentNode เป็น leftmost
        }
    }
    // ถ้าเราต้องการลบ node ที่มีลูก 2 ตัว ให้เราหา leftmost ของลูกด้านขวา แล้วเอาค่าของ leftmost มาแทนที่ค่าของ node ที่เราจะลบ
};
const bst = new BinarySearchTree(); // สร้าง object ใหม่
bst.insert(40);
bst.insert(50);
bst.insert(30);
bst.insert(25);
bst.insert(35);
bst.insert(45);
bst.insert(60);
const bfs1 = bst.breadthFirstSearch();
console.log(bfs1); // [ 40, 30, 50, 25, 35, 45, 60 ]
const bfs2 = bst.breadthFirstSearchRecusive();
console.log(bfs2); // [ 40, 30, 50, 25, 35, 45, 60 ]
function breadthFirstSearch(tree) {
    function traverse(queue, bfs) {
        if (queue.length < 1) // ถ้า queue มีค่าน้อยกว่า 1
            return bfs; // คืนค่า bfs 
        const currentNode = queue.shift(); // กำหนดค่า currentNode เป็นค่าแรกของ queue และลบค่าแรกของ queue
        bfs.push(currentNode.value); // เพิ่มค่าของ currentNode เข้าไปใน bfs
        if (currentNode.left !== null) // ถ้ามีลูกทางด้านซ้าย
            queue.push(currentNode.left); // เพิ่มลูกทางด้านซ้ายเข้าไปใน queue
        if (currentNode.right !== null) // ถ้ามีลูกทางด้านขวา
            queue.push(currentNode.right); // เพิ่มลูกทางด้านขวาเข้าไปใน queue
        return traverse(queue, bfs); // เรียกใช้ function traverse
    }
    return traverse([tree.root], []); // เรียกใช้ function traverse
}
const bfs = breadthFirstSearch(bst);
console.log(bfs);
// ====================================================================================================================
//
function depthFirstSearchInOrder(tree) {
    if (tree.root === null) // ถ้าไม่มี root
        return []; // คืนค่า array ว่าง
    function traverseInOrder(node, dfs) {
        if (node.left !== null) { // ถ้ามีลูกทางด้านซ้าย
            traverseInOrder(node.left, dfs); // เรียกใช้ function traverseInOrder
        }
        dfs.push(node.data); // เพิ่มค่าของ node เข้าไปใน dfs
        if (node.right !== null) { // ถ้ามีลูกทางด้านขวา
            traverseInOrder(node.right, dfs); // เรียกใช้ function traverseInOrder
        }
        return dfs; // คืนค่า dfs
    }
    return traverseInOrder(tree.root, []); // เรียกใช้ function traverseInOrder
}
function depthFirstSearchPreOrder(tree) {
    if (tree.root === null) // ถ้าไม่มี root
        return []; // คืนค่า array ว่าง
    function traversePreOrder(node, dfs) {
        dfs.push(node.data); // เพิ่มค่าของ node เข้าไปใน dfs
        if (node.left !== null) { // ถ้ามีลูกทางด้านซ้าย
            traversePreOrder(node.left, dfs); // เรียกใช้ function traversePreOrder
        }
        if (node.right !== null) { // ถ้ามีลูกทางด้านขวา
            traversePreOrder(node.right, dfs); // เรียกใช้ function traversePreOrder
        }
        return dfs; // คืนค่า dfs
    }
    return traversePreOrder(tree.root, []); // เรียกใช้ function traversePreOrder
}
function depthFirstSearchPostOrder(tree) {
    if (tree.root === null) // ถ้าไม่มี root
        return [];
    function traversePostOrder(node, dfs) {
        if (node.left !== null) { // ถ้ามีลูกทางด้านซ้าย
            traversePostOrder(node.left, dfs); // เรียกใช้ function traversePostOrder  
        }
        if (node.right !== null) { // ถ้ามีลูกทางด้านขวา
            traversePostOrder(node.right, dfs);
        } // เรียกใช้ function traversePostOrder  
        dfs.push(node.data); // เพิ่มค่าของ node เข้าไปใน dfs
        return dfs; // คืนค่า dfs
    }
    return traversePostOrder(tree.root, []); // เรียกใช้ function traversePostOrder
}
const dfs = depthFirstSearchInOrder(bst); // [ 25, 30, 35, 40, 45, 50, 60 ]
console.log(dfs);
const dfs2 = depthFirstSearchPreOrder(bst); // [ 40, 30, 25, 35, 50, 45, 60 ]
console.log(dfs2);
const dfs3 = depthFirstSearchPostOrder(bst); // [ 25, 35, 30, 45, 60, 50, 40 ]
console.log(dfs3);
