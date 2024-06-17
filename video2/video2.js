console.log('Hello world from javascript')
let y = 5, z = 6;
console.log(`My name's Phuong. It's amazing`)
const x = 7
console.log(x)
console.log("Test", 'x=', x, 'y=', y, 'z=', z)
console.log("Test" + 'x=' + x + 'y=' + y + 'z=' + z)
let text = "qưertyuiop"
console.log(text.length);
console.log(`hoi dan it check string a = ${x} ,  b = ${y}`)
let obj = {
    name: "Phuong",
    age: 29
};
console.log(`My name's`, obj.name)
JSON
"{name: 'Phuong', age: '29'}"
console.log(`check object`, obj)

let d = ['cat', 'dog', 'mouse']
console.log(`check type and value`, typeof d, d)

let family = [
    { name: 'Phuong', age: 29 },
    { name: 'Phong', age: 31 }
]
console.log(`my family`, family)

let e = 5
let f = '5'
console.log(`compare: `, 'e =', e, 'f =', f, e === f)

let arr = ['MU', 'Chelsea', 'Liver', 'Mancity']
for (let i = 0; i < arr.length; i++) {
    console.log(`check variables:`, arr[i])
}


let arrTop4 = ['Phuong', 'Phong', 'Rin', 'Chung']
for (let i = 0; i < 4; i++) {
    console.log('Xinh nhat nha', i + 1, arrTop4[i])
}