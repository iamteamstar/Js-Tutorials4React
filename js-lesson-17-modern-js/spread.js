//spread operatoru: bir dizi veya objedeki elemanları başka bir dizi veya objeye kopyalamamızı sağlar. normalde concat ile yaptığımız işlemi daha basit yapmamızı sağlar

let firstNumbers=[1,2,3,4]
let lastNumbers=[...firstNumbers, 5,6,7]
console.log(lastNumbers)

//parametre olarak da kullanilabilir
let sum=(x,y,z,t)=> console.log(x+y+z+t);
// sum(firstNumbers[0],firstNumbers[1],firstNumbers[2],firstNumbers[3]) yerine ;
sum(...firstNumbers)


const person1={
    name:"azad",
    age:22
}
const statu={
    ...person1,
    job:"developer"
}
console.log(statu);//{ name: 'azad', age: 22, job: 'developer' }


//bir objede olup diğer objede bazı kısımlar farklı bir değere sahipse (mesela isim,yaş) ve bir objedeki sadece ortak olan kısımları almak istiyosak bu şekilde kullanabiliriz:
//yani ... yı yeni objenin sağına attığımızda üzeirne yazmış oldu
const obj1={
    name:"john",
    age:23
}
const obj2={
    name:"mike",
    job:"engineer",
    ...obj1
}
console.log(obj2);//{ name: 'john', job: 'engineer', age: 23 } yani onj 2 de yazan name kısmını ezmiş oldu ve ilk objemizi yazdı obj2 nin job kısmını alarak


//daha düzenli olrak, bir obje içinden belli kısımları alıp başka bir objede kullanabiliriz:

const myProduct={
    name:"product1",
    price:233,
    catogry:"shirt",
    piece:2
}

//kullanmak istediğim özellikler:
const {name,price}=myProduct;
//kullanım
const newProduct={name,price}
console.log(newProduct);

const obj = {name: "John", age: 30};
const {name: firstName} = obj;//keyi değiştirdik artık benim için name keyi firstName olarak değişti**
console.log(firstName); // "John"
