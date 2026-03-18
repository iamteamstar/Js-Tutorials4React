var kullanici="Global user"
function Write()
{
    var kullanici="function local user"
    console.log(kullanici)
}
console.log(kullanici)
Write();
if(1)
{
    var kullanici="Global if user"
    console.log(kullanici)
}
/* 
aynı isimde aynı tipte değişkenler scope alanı içinde etki eder, function kendi scopeları içindeki aynı değişken globali ezer
bu function, if,for,while... içerisinde blok içi scope oluşturulabilir.
bu eskiden var tipinde yapılmıyordu sadece function eziyordu if içindeki globali eziyordu. şuan öyle bir problem yok fakat modern js de let ve constun ortaya 
çıkışı bu soruna dayanmaktadır. let ve const ile block içi scope oluşturulurdu, şuan hepsi için geçerli (var da dahil yani)
*/