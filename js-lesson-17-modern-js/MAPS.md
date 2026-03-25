## Maps
Modern JavaScript ile birlikte, Map yapısı özellikle verilerin saklanması ve erişilmesi için çok kullanışlı bir araç haline gelmiştir. Map yapısı, key-value pair’ları saklar ve bu pair’lara hızlı bir şekilde erişilebilir.

Map yapısını oluşturmak için new Map() kullanılır. Örneğin, aşağıdaki örnekte bir Map yapısı oluşturulmuş ve key-value pair’ları eklenmiştir:

<pre>
const map = new Map();
map.set("name", "John");
map.set("age", 30);
map.set("job", "Developer");
</pre>

Map yapısındaki verilere erişmek için get() metodu kullanılır. Örneğin, aşağıdaki örnekte "name" key’inin değeri alınmıştır:

<pre>
console.log(map.get("name")); // "John"
</pre>

Map yapısındaki verileri silmek için delete() metodu kullanılır. Örneğin, aşağıdaki örnekte "job" key’inin değeri silinmiştir:

<pre>
map.delete("job");
console.log(map); // Map { 'name' => 'John', 'age' => 30 }
</pre>

Map yapısındaki verileri iterate etmek için forEach() metodu kullanılır. Örneğin, aşağıdaki örnekte map içindeki tüm key-value pair’lar yazdırılmıştır:

<pre>
map.forEach((value, key) => console.log(`${key}: ${value}`));
</pre>

Map yapısı, verilerin saklanması ve erişilmesi için daha kolay ve hızlı bir yol sunar. Ayrıca, Map yapısı ile key-value pair’ların değerleri değiştirilebilir ve silinebilir. Bu nedenle, modern JavaScript geliştirmelerinde sıklıkla kullanılmaktadır.


## Sets
Modern JavaScript ile birlikte, Set yapısı özellikle unique (benzersiz) değerlerin saklanması ve erişilmesi için çok kullanışlı bir araç haline gelmiştir. Set yapısı, benzersiz değerleri saklar ve bu değerlere hızlı bir şekilde erişilebilir.

Set yapısını oluşturmak için new Set() kullanılır. Örneğin, aşağıdaki örnekte bir Set yapısı oluşturulmuş ve değerler eklenmiştir:

<pre>
const set = new Set();
set.add(1);
set.add(2);
</pre>

Set yapısındaki verilere erişmek için has() metodu kullanılır. Örneğin, aşağıdaki örnekte 2 değerinin set içinde olup olmadığı kontrol edilmiştir:

<pre>
console.log(set.has(2)); // true
console.log(set.has(4)); // false
</pre>

Set yapısındaki verileri silmek için delete() metodu kullanılır. Örneğin, aşağıdaki örnekte 2 değeri silinmiştir:

<pre>
set.delete(2);
console.log(set); // Set { 1, 3 }
</pre>

Set yapısındaki verileri iterate etmek için forEach() metodu kullanılır. Örneğin, aşağıdaki örnekte set içindeki tüm değerler yazdırılmıştır:

<pre>
set.forEach(value => console.log(value));
</pre>