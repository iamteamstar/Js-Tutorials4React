//maps : verilerşn saklanması ve erişilmesi için kullanışlıdır key value peraleri saklar ve hızlıca erişilebilir

const map=new Map()
map.set("name","azad")//set ile yeni özellikler eklenebilir 
map.set("age",43)
map.set("job","developer")
console.log(map)//Map(3) { 'name' => 'azad', 'age' => 43, 'job' => 'developer' }
//map in içinde get kullanmak daha doğrudur
console.log(map.get("name"))
let deleteJob=map.delete("job")
console.log(map) //Map(2) { 'name' => 'azad', 'age' => 43 }
let valuesMap=map.values()//sadece değerleri dön
console.log(valuesMap)//[Map Iterator] { 'azad', 43 } 
let keysMap=map.keys()//sadece keyleri dön
console.log(keysMap)//[Map Iterator] { 'name', 'age' }
let entriesMap=map.entries()//value-keyleri ayrı dizilerde verir
console.log(entriesMap);//[Map Entries] { [ 'name', 'azad' ], [ 'age', 43 ] }


//sets: unique değerlerin saklanması için kullanılan yöntem
const set =new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(2)//tekrar ekleme yapmaz 
console.log(set);//Set(3) { 1, 2, 3 }
//has: içinde var mı
console.log(set.has(2));//true

//delete: silme yapar
set.delete(2)
console.log(set);//Set(2) { 1, 3 }

//forech: elemanları döner
set.forEach(value=>console.log(value))//1,3