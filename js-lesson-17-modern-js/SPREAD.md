Spread operator
Spread operator, array veya object içindeki elemanların başka bir array veya object içine kopyalanmasını sağlar. Örneğin, aşağıdaki örnekte, bir array içindeki elemanlar başka bir array içine kopyalanmıştır:

<pre>
const numbers1 = [1, 2, 3];
const numbers2 = [...numbers1, 4, 5, 6];
console.log(numbers2); // [1, 2, 3, 4, 5, 6]
</pre>

Ayrıca, spread operator ile bir arrayin elemanlarını bir fonksiyona veya metoda parametre olarak geçirmek için kullanılabilir. Örneğin, aşağıdaki örnekte, bir array içindeki elemanlar bir fonksiyonun parametreleri olarak geçirilmiştir:

<pre>
const numbers = [1, 2, 3];
const add = (x, y, z) => x + y + z;
console.log(add(...numbers)); // 6
</pre>

Spread operator ile bir objectin içindeki key-value pair'larının başka bir object içine kopyalanmasını sağlar. Örneğin, aşağıdaki örnekte, bir object içindeki key-value pair'lar başka bir object içine kopyalanmıştır:

<pre>
const obj1 = {name: "John", age: 30};
const obj2 = {...obj1, job: "Developer"};
console.log(obj2); // { name: "John", age: 30, job: "Developer" }
</pre>

Spread operator ile bir objectin içindeki key-value pair'larının başka bir object içine kopyalanmasını sağlar. Örneğin, aşağıdaki örnekte, obj1 içindeki key-value pair'lar obj2 içine kopyalanmıştır. obj2 içinde aynı key'lere sahip key-value pair'ların üstüne yazılmıştır.

<pre>
const obj1 = {name: "John", age: 30};
const obj2 = {name: "Mike", job: "Developer", ...obj1};
console.log(obj2); // { name: "John", job: "Developer", age: 30 }
</pre>


## Spread operator ve destructuring

Spread operator, array ve object manipülasyonlarını daha kolay hale getirir ve kodların daha okunaklı ve anlaşılır olmasını sağlar. Bu nedenle, modern JavaScript geliştirmelerinde sıklıkla kullanılmaktadır. Ayrıca spread operator, destructuring ile birlikte kullanıldığında daha da güçlü hale gelir. Örneğin, aşağıdaki örnekte, bir object içindeki belirli key-value pair'ların destructuring ile çıkarılması ve başka bir object içine kopyalanması işlemi gerçekleştirilmiştir:

<pre>
const obj = {name: "John", age: 30, job: "Developer"};
const {name, age} = obj;
const newObj = {name, age, location: "New York"};
console.log(newObj); // { name: "John", age: 30, location: "New York" }
</pre>

## Destructuring
Modern JavaScript ile birlikte, destructuring özellikle object ve array içindeki verilerin çekilmesi ve kullanılması için çok kullanışlı bir araç haline gelmiştir.
Destructuring, object içindeki belirli key-value pair'ların çekilmesini ve değişkenlere atanmasını sağlar. Örneğin, aşağıdaki örnekte, bir object içindeki "name" ve "age" key'lerinin değerleri değişkenlere atanmıştır:

<pre>
const obj = {name: "John", age: 30};
const {name, age} = obj;
console.log(name); // "John"
console.log(age); // 30
</pre>

Ayrıca, destructuring ile object içindeki key'lere değişik isimler verebiliriz. Örneğin, aşağıdaki örnekte, obj içindeki "name" key'inin değeri "firstName" değişkenine atanmıştır:

<pre>
const obj = {name: "John", age: 30};
const {name: firstName} = obj;
console.log(firstName); // "John"
</pre>

### Array Destructuring

Destructuring, array içindeki elemanların çekilmesini ve değişkenlere atanmasını sağlar. Örneğin, aşağıdaki örnekte, bir array içindeki ilk ve son elemanlar değişkenlere atanmıştır:

<pre>
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
</pre>

Destructuring, object ve array içindeki verilerin çekilmesini ve kullanılmasını kolaylaştırır ve kodların daha okunaklı ve anlaşılır olmasını sağlar. Bu nedenle, modern JavaScript geliştirmelerinde sıklıkla kullanılmaktadır.

Ayrıca destructuring ile spread operator birlikte kullanıldığında daha güçlü hale gelir. Örneğin, aşağıdaki örnekte, bir object içindeki belirli key-value pair’ların destructuring ile çıkarılması ve başka bir object içine kopyalanması işlemi gerçekleştirilmiştir:

<pre>
const obj = {name: "John", age: 30, job: "Developer"};
const {name, age} = obj;
const newObj = {name, age, location: "New York", ...obj};
console.log(newObj); 
// { name: "John", age: 30, location: "New York", job: "Developer" }
</pre>

Bu örnekte, obj içindeki "name" ve "age" key-value pair’ları destructuring ile çıkarılmış ve newObj içine kopyalanmıştır. Aynı zamanda spread operator kullanarak obj’nin geri kalan key-value pair’ları da newObj içine kopyalanmıştır. Bu şekilde, object içindeki verilerin çekilmesi ve kullanılması daha kolay hale gelir.
