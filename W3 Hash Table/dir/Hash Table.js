"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HashTable_instances, _HashTable_hashfunction;
class HashTable {
    constructor(size) {
        _HashTable_instances.add(this);
        this.keys = [];
        this.datas = new Array(size);
    }
    set(key, value) {
        this.keys.push(key);
        let index = __classPrivateFieldGet(this, _HashTable_instances, "m", _HashTable_hashfunction).call(this, key); //หา index ของข้อมูล
        //no collision
        if (this.datas[index] === undefined) { //ถ้ายังไม่มีข้อมูลใน index นั้น
            this.datas[index] = []; //สร้าง bucket ใน index นั้น
        }
        //collision
        this.datas[index].push([key, value]); //เพิ่มข้อมูลลงใน bucket ใน index นั้น
    }
    get(key) {
        let index = __classPrivateFieldGet(this, _HashTable_instances, "m", _HashTable_hashfunction).call(this, key); //หา index ของข้อมูล
        const bucket = this.datas[index]; //ดึงข้อมูลใน index นั้นออกมา
        if (bucket !== undefined) { //ถ้ามีข้อมูล
            for (let i = 0; i < bucket.length; i++) { //วนลูปเพื่อหาข้อมูล
                const item = bucket[i]; //ดึงข้อมูลใน bucket ออกมา
                const item_key = item[0]; // key ของข้อมูล red
                if (key == item_key) { //ถ้า key ที่รับเข้ามาตรงกับ key ของข้อมูล red
                    const value = item[1]; //ดึง value ของข้อมูล red ออกมา
                    return value; //return value ของข้อมูล red
                }
            }
        }
        return undefined; //ถ้าไม่มีข้อมูล return undefined
    }
    // keyall() {    //get all keys of hash table
    //     const _keys = [] //สร้าง array เพื่อเก็บ key ทั้งหมด
    //     for (let i = 0; i < this.datas.length; i++) { //วนลูปตามจำนวน index ของ datas
    //         const bucket = this.datas[i] //ดึงข้อมูลใน index นั้นออกมา
    //         if (bucket !== undefined) { //ถ้ามีข้อมูล
    //             for (let j = 0; j < bucket.length; j++) { //วนลูปเพื่อหา key ของข้อมูล
    //                 const key = bucket[j][0] //ดึง key ของข้อมูลออกมา
    //                 _keys.push(key) //เพิ่ม key ลงใน array
    //             }
    //         }
    //     }
    //     return _keys    //return array ของ key ทั้งหมด
    // }
    delete(key) {
        let index = __classPrivateFieldGet(this, _HashTable_instances, "m", _HashTable_hashfunction).call(this, key); //สร้างตัวแปร index เพื่อเก็บ index ของข้อมูล
        const bucket = this.datas[index]; //สร้างตัวแปร bucket เพื่อเก็บข้อมูลใน index นั้น
        if (bucket !== undefined) { //ถ้ามีข้อมูล
            for (let i = 0; i < bucket.length; i++) { //วนลูปเพื่อหาข้อมูล
                const item = bucket[i]; //ดึงข้อมูลใน bucket ออกมา
                const item_key = item[0]; // key ของข้อมูล green
                if (key === item_key) { //ถ้า key ที่รับเข้ามาตรงกับ key ของข้อมูล green มันตรงกัน
                    bucket.splice(item, 1); //ลบข้อมูลออกจาก bucket
                }
            }
        }
    }
}
_HashTable_instances = new WeakSet(), _HashTable_hashfunction = function _HashTable_hashfunction(key) {
    let hashValue = 0; //เริ่มต้นที่ 0
    for (let index = 0; index < key.length; index++) { //วนลูปตามจำนวนตัวอักษรใน key
        hashValue += (key.charCodeAt(index) * index + 1); //เพิ่มค่า hashValue ด้วยค่า charCode ของตัวอักษรแต่ละตัว
        hashValue = hashValue % this.datas.length; //หา modulus ของ hashValue ด้วยขนาดของ datas
    }
    return hashValue; //return ค่า hashValue
};
const hashTable = new HashTable(3);
hashTable.set("green", "#00FF00");
hashTable.set("blue", "#0000FF");
hashTable.set("red", "#FF0000");
hashTable.set("white", "#FFFFFF");
console.log(hashTable.datas);
console.log("=========================================================================");
hashTable.delete('green');
hashTable.delete('blue');
const keys = hashTable.keys;
// console.log(keys)
console.log(hashTable.datas);
// console.log(hashTable.keyall());
