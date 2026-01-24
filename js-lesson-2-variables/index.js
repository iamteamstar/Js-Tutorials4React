// Değişken tanımlama ve tür kontrolü
let stdName="Azad Koçak";
let stdAge=25;
console.log(typeof stdName);
console.log(typeof stdAge); 
   
// Tür dönüşümleri
let num1=57;
let num2=43;
let sumString=num1.toString()+" " +num2.toString();
console.log("Sum: " +sumString);

let num3="57";
let num4="43";
let sumInt=Number(num3)+Number(num4);
console.log("Student Name: " + stdName);
console.log("Student Age: " + stdAge);
console.log("Sum: " +sumInt);
 
//Boolen türü ve karşılaştırma operatörleri
let sayi1= 15;
let sayi2= 34;
console.log("(sayi1>sayi2)" + (sayi1>sayi2));
console.log("(sayi1<sayi2)" + (sayi1<sayi2));
console.log("(sayi1>=sayi2)" + (sayi1>=sayi2));
console.log("(sayi1<=sayi2)" + (sayi1<=sayi2));
console.log("(sayi1==sayi2)" + (sayi1==sayi2));
console.log("(sayi1!=sayi2)" + (sayi1!=sayi2));

//Undefined türü
let ogrNot;
console.log(typeof ogrNot);