Modern JavaScript konuları arasında öne çıkanlar şunlardır:
Arrow Function
JavaScript dili için yayınlanan ES6 sürümü ile birlikte, kodların yazılması ve okunması daha kolay hale gelmiştir. Bunlardan biri de arrow fonksiyonlarıdır. Arrow fonksiyonlar, kodların daha okunaklı ve anlaşılır olmasını sağlar.
Öncelikle, eski JavaScript sürümlerinde fonksiyonları tanımlarken kullandığımız "function" anahtar kelimesi, arrow fonksiyonlar ile => şeklinde tanımlanır. Aşağıdaki örnekte, arrow fonksiyon ile "hello" yazdıran bir fonksiyon tanımlanmıştır:

const sayHello=function(){
    console.log("hello")
}

Modern js de fonskiyonlar "=>" seklinde tanımlanır

cont sayHello=()=> {
    console.log("hello");
}

veya daha kısa:
let say=()=>console.log("hello");

Arrow fonksiyonlar, parametre alan fonksiyonlar için de kullanılabilir.
Örneğin, aşağıdaki örnekte, name parametresi alan ve "Hello, [name]" yazdıran bir fonksiyon tanımlanmıştır:

const sayHello = (name) => {
  console.log(`Hello, ${name}`);
}

Bu kod, eski JavaScript sürümlerinde şöyle yazılabilirdi:

const sayHello = function(name) {
  console.log(`Hello, ${name}`);
}

Arrow fonksiyonlar, kodların okunması ve yazılması açısından daha anlaşılır ve kolay hale getirir. Ayrıca, this anahtar kelimesi ile de kolay kullanım sağlar. Bu nedenle, modern JavaScript geliştirmelerinde sıklıkla kullanılmaktadır.

Array Methods
Modern JavaScript ile birlikte, birçok yeni ve kullanışlı array methodları ortaya çıkmıştır. Bu methodlar, array işlemlerini daha kolay ve hızlı hale getirir. Aşağıda, en yaygın kullanılan bazı array methodlarının örnekleri verilmektedir:
- map(): Bu method, array içindeki her eleman için belirli bir işlem yapar.
Örneğin, aşağıdaki örnekte, array içindeki sayıların karesini alan bir fonksiyon tanımlanmıştır:

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(x => x * x);
console.log(squares); // [1, 4, 9, 16, 25]

- filter(): Bu method, array içinde belirli kriterlere uyan elemanları seçer.
Örneğin, aşağıdaki örnekte, array içindeki çift sayıları seçen bir fonksiyon tanımlanmıştır:

const evenNumbers=numbers.filter(x=>x%2==0)
console.log(evenNumbers)

- reduce(): Bu method, array içindeki elemanları tek bir değere dönüştürür.
Örneğin, aşağıdaki örnekte, array içindeki sayıların toplamını alan bir fonksiyon tanımlanmıştır:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // 15

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // 15

- find(): Bu method, array içinde ilk kriterlere uyan elemanı döndürür.
Örneğin, aşağıdaki örnekte, array içinde ilk çift sayıyı döndüren bir fonksiyon tanımlanmıştır:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstEvenNumber = numbers.find(x => x % 2 === 0);
console.log(firstEvenNumber); // 2

- some(): Bu method, array içinde belirli bir kritere uyan eleman var mı yok mu kontrol eder.
Örneğin, aşağıdaki örnekte, array içinde 10'dan yüksek bir sayı var mı kontrol eden bir fonksiyon tanımlanmıştır:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isBigNumberExist = numbers.some(x => x > 10);
console.log(isBigNumberExist); // false

- every(): Bu method, array içindeki tüm elemanların belirli bir kritere uyup uymadığını kontrol eder.
Örneğin, aşağıdaki örnekte, array içindeki tüm sayıların çift olup olmadığını kontrol eden bir fonksiyon tanımlanmıştır:

const numbers = [2, 4, 6, 8, 10];
const isAllEven = numbers.every(x => x % 2 == 0);
console.log(isAllEven)//false