let tarih=new Date();// tam tarih alma saat, saniye, salise dahil
console.log(tarih)
let result=tarih.getDate();//ayın günü sayısal cinsten alma
console.log(result)
result=tarih.getDay();//haftanın gününü sayısal cinsten alma 0:pazar,6:cumartesi
console.log(result)
result=tarih.getFullYear();//yıl bilgisini almak
console.log(result)
result=tarih.getHours();//günün güncl saatini almak
console.log(result)
result=tarih.getMinutes()//güncel saatin kaçıncı dakikası bilgisi
console.log(result)
result=tarih.getMonth()//güncel ayı getirir (index o dan baslar)
console.log(result)

//tarih güncelleme(Değiştirme) metotları
tarih.setFullYear(2021)
tarih.setMonth(3)
tarih.setHours(23)
//buna göre şuan güncel olan tarih: 2021-04-16T20:53:43.014Z
result=tarih
console.log(result)

//doğum tarihinden yaş bulma
let dogumTarihi=new Date(2003,4,24);//2003 yılı 4. ay 24.gün
let guncelTarih=new Date();
result=guncelTarih.getFullYear()-dogumTarihi.getFullYear();
console.log(result)
