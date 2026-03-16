let products=["note21","iphone","samgun3","oppo","redmi","general mobile","samsung J5"]
let result=products
console.log(result)

result=products.pop()//dizinin son elemanını siler
console.log("pop metodu: "+result)
console.log(products)

console.log(products[2])

result=products.toString()//[ ] olmadan listeler
console.log(result)

result=products.at(2)//2.index yani 3. öğeyi bulur products[2] ile aynı şey
console.log("at metodu: "+result)

result=products.join("*")//aralarına belirtilen karakteri koyarak birleştirme yapar
console.log("join metodu: "+result)

result=products.shift()//ilk ürünü silme. sonrasında da sildiği itemi yazdırır
console.log("shift metodu: "+result)
console.log(products)

result=products.splice(2,1)//2.indexteki elemanı bul, oradan itibaren 1 tane eleman sil
console.log("splice metodu: "+result)
console.log(products)

result=products.push("renault")//dizinin SONUNA yeni eleman ekler ve kaç item olduğunu döner
console.log(result)
console.log(products)

result=products.unshift("mercedes")//dizinin BAŞINA yeni eleman ekler ve kaç item olduğunu döner
console.log(result)
console.log(products)

result=products.splice(3,0,"NOKIA")//dizinin 3. indisine nokia ürününü ekle,"3.indexe git, 0 tane eleman sil, oraya 'nokia' ekle"
console.log(result)
console.log(products)

let pcProduct=["asus","huawei","monster","acer","hp","teknopc","casper","sony"]
result=products.concat(pcProduct)//iki diziyi birleştirmeyi sağlar. 3 dizi birleştirecek olsaydım: const myChildren = arr1.concat(arr2, arr3);
console.log(result)

console.log(products+pcProduct)//düz liste oalrak yan yana yazar : mercedes,iphone,samgun3,NOKIA,redmi..

result=products.reverse()//diziyi tersine çevir
console.log("reverse metodu: "+result)
