const ad="Azad";
const soyad="Koçak";
const yas =22;
const sehir="Bursa";
const meslek="Backend Developer";

const bio="Benim adım "+ad+" soyadım "+soyad+". "+sehir+"'da yaşıyorum. "+yas+" yaşındayım"
console.log(bio);

//backtick : string ifadelerde değişken kullanılacağı zaman `` arasında kullanılır.

const newBio=`Benim adım ${ad} soyadım ${soyad}. ${sehir}'da yasiyorum. ${yas} yaşındayım`
console.log(newBio);
//let değiştirilibelir, const değişken atanıp değiştirilemez 