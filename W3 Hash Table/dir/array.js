"use strict";
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(_index) {
        return this.data[_index];
    }
    push(_data) {
        this.data[this.length] = _data; //บอกว่า index นั้นมีค่าเท่าไหร่
        this.length++; //บอกว่ามีกี่ตัว
        return this.length; //return ค่า length ให้
    }
    pop() {
        this.length--; //ลบค่า length ลง
        const lastItem = this.data[this.length]; //เอาค่า length มาเก็บไว้ในตัวแปร lastItem
        delete this.data[this.length]; //ลบค่า length ออก
        return lastItem; //return ค่า lastItem ให้
    }
    delete(_index) {
        const lastItem = this.data[_index]; //เอาค่า index มาเก็บไว้ในตัวแปร lastItem
        this.shift(_index); //เรียกใช้ function shift โดยใส่ค่า index ที่ต้องการลบ
        this.pop(); //เรียกใช้ function pop เพื่อลบค่าตัวสุดท้ายออก
        return lastItem; //return ค่า lastItem ให้
    }
    shift(_index) {
        for (let index = _index; index < this.length - 1; index++) { //วนลูปเพื่อเอาค่า index ที่ต้องการลบมาแทนที่ค่า index ก่อนหน้า
            this.data[index] = this.data[index + 1]; //เอาค่า index ที่ต้องการลบมาแทนที่ค่า index ก่อนหน้า
        }
    }
    insert(_index, _item) {
        this.push(_item); //เพิ่มค่า _item ใน array
        for (let index = this.length - 1; index > _index; index--) { //ใช้วนลูปเพื่อเอาค่า index ที่ต้องการเพิ่มมาแทนที่ค่า index ก่อนหน้า
            const item = this.data[index]; //สรา้งตัวแปร item เพื่อเก็บค่า index ที่ต้องการเพิ่ม
            this.data[index] = this.data[index - 1];
            this.data[index - 1] = item;
        }
        return this.length;
    }
}
const arr = new MyArray();
console.log("============================================");
arr.push('20');
arr.push('30');
arr.push('40');
console.log(arr);
console.log("============================================");
console.log("============================================");
arr.insert(1, '25');
console.log(arr);
console.log("============================================");
