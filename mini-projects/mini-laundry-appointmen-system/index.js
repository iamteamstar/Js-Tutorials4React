let makineler = [
    { id: 1, ad: "Makine A", kapasite: "9kg", durum: "Boş" },
    { id: 2, ad: "Makine B", kapasite: "9kg", durum: "Dolu" },
    { id: 3, ad: "Makine C", kapasite: "12kg", durum: "Boş" },
    { id: 4, ad: "Makine D", kapasite: "7kg", durum: "Bakımda" },
    { id: 5, ad: "Makine E", kapasite: "9kg", durum: "Boş" }
];
console.log(makineler)
//Görev 1: Boş Makineleri Listele
let emptyMachines=makineler.filter((bos)=>{
   return bos.durum==="Boş"
});
console.log(emptyMachines)
//Görev 2: Sistem İstatistikleri (Sayaç) Dolu, boş, bakımda sayısı

let fullMachines=makineler.filter((dolu)=>{
  return  dolu.durum==="Dolu"
})
console.log(fullMachines)

let reviewMachines=makineler.filter((bakim)=>{
  return  bakim.durum==="Bakımda"
})
console.log(reviewMachines)

console.log("boş sayısı: "+emptyMachines.length + " dolu sayisi "+fullMachines.length+ " bakımda sayısı "+reviewMachines.length)

/*Görev 3: Randevu Oluştur (Validasyonlu)
Kontrol 1: Girilen id sistemde (dizide) hiç yoksa "Hata: Böyle bir makine bulunamadı!" uyarısı ver ve işlemi durdur. +

Kontrol 2: Makine bulunduysa ama durumu "Dolu" veya "Bakımda" ise "Hata: Bu makine şu an kullanılamaz!" uyarısı ver.

Başarılı Senaryo: Şartlar sağlanıyorsa (makine varsa ve boşsa), o makinenin durum özelliğini "Dolu" olarak güncelle ve ekrana "Makine başarıyla rezerve edildi." yazdır.
*/

let selectMachineId = 1;

let secilenMakine = makineler.find((makine) => {
    return makine.id === selectMachineId;
});

if (secilenMakine === undefined) {
    console.log("Hata: Böyle bir makine bulunamadı!");

} else if (secilenMakine.durum === "Dolu" || secilenMakine.durum === "Bakımda") {
    console.log("Hata: Bu makine şu an kullanılamaz! (Mevcut Durum: " + secilenMakine.durum + ")");

} else {
    secilenMakine.durum = "Dolu";
    console.log(secilenMakine.ad + " başarıyla rezerve edildi.");
}
console.log(makineler)