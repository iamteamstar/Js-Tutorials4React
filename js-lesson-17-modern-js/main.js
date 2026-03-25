//Array Methods

//map
let numbers=[0,1,2,3,4,5,6,7,8,9]
const squares=numbers.map(x=>x*x);//her bir index in karesini alır
console.log(squares) //[ 1, 4, 9, 16, 25... ]

//filter:belirli kriterle uyan elemanları seçiyoruz

const evenNumbers=numbers.filter(x=>x%2===0)//çift sayılar
console.log(evenNumbers)//[ 2, 4, 6, 8 ]

//reduce 
const sum=numbers.reduce((acc,x)=>acc+x,0)//dizideki elemanların toplamı. burada 0 başlangıç değeri olur ve acc değerine atanır
console.log(sum)//45

//find:filterdan farklı olarak içersinde tek bir eleman döndürüyor 
const findNumber=numbers.find(x=>x >2)//2 den büyük tek bir eleman getir (genelde ilk bulduğu)
console.log(findNumber)//3

//some:dizide belirli bir kritere uyan değerler var mı yok mu kontrolu için kullanılşır

const bigThanFive=numbers.some(x=>x>5)//dizide 5 den büyük değer var mı
console.log(bigThanFive)//true

//every : tüm elemanların belli bir kurala uyup uymadığının kontrolünü yapar

const isAllPositive=numbers.every(x=>x>0)
console.log(isAllPositive);//true
