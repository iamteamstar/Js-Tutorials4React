/*Bir sayının basamak sayılarının toplamını hesaplayan
 program yazınız.
 123%10=3
 123=12
 12
 let sayi =prompt("Lütfen bir sayı giriniz:");
 let toplam=0;
 while (sayi > 0) {
    toplam += sayi % 10;
    sayi = (sayi) / 10;
}

console.log("Basamaklar toplamı:"+ toplam);
 */
let youtube="Bilgisayar Genetiği"
let url="https://www.github.com"
let result;
result=youtube.toUpperCase()
console.log( result)
result=youtube.toLowerCase()
console.log( result)
console.log(youtube.replace(" ",""))//replace: boşluğu kaldırma 
result=youtube.length;
console.log( result)
result=youtube.trim();
console.log( result)
result=youtube.slice(0,6)
console.log( result)
result=youtube.split(" ")//split: kaç karakterden oluştuğunu gösterir. boluktan sonra ne varsa arraye dahil etmesini istedik
console.log( result.length)

result=youtube.startsWith("Bilgisayar")//startsWith: bunla mı basliyor?
if(result==true)
{
    console.log("doğru giriş")
}
else
{
    console.log("hatali giris")
}
console.log(youtube.indexOf("Bilgisayar"))//bu kelime var mı. Eğer aranan öğe bulunursa, öğenin ilk bulunduğu indis numarasını döndürür. Eğer aranan öğe bulunmazsa, -1 değerini döndürür.

//udemy.com/course/aspnet-core-mvc-api-unit-test-yazma/learn/lecture/18296870?start=195 şeklinde değişkenleri "-" ile birleştirir
//öncelikle bütün urli küçük harfe çevirmemiz gerek
youtube=youtube.toLowerCase().replace(" ","-").replace("ğ","g");
console.log(youtube)

url=url.toLowerCase().replace(".com",".com/");
console.log(url)

const newUrl=url.replace(url,(url+youtube))
//alternatif
const newUrlWithBackTick= `${url}urlBu/${youtube}`
console.log(newUrlWithBackTick)