/*
let envanter = [
    { id: 1, ad: "Filtre Kahve", kategori: "İçecek", stok: 45 },
    { id: 2, ad: "Cheesecake", kategori: "Tatlı", stok: 12 },
    { id: 3, ad: "Espresso", kategori: "İçecek", stok: 0 },
    { id: 4, ad: "Tavuklu Sandviç", kategori: "Yiyecek", stok: 20 },
    { id: 5, ad: "Su", kategori: "İçecek", stok: 150 }
];
Görevler
Yeni Ürün Ekleme: Envanterin sonuna { id: 6, ad: "Havuçlu Kek", kategori: "Tatlı", stok: 30 } objesini ekle. +

Stok Kontrolü (Filtreleme): Stok miktarı 0 olan ürünleri bulup, "Tükendi" uyarısı vermek için orijinal diziyi bozmadan sadece stoğu bitenleri içeren yeni bir dizi oluştur.+

Ürün Arama: Müşteri "Cheesecake" siparişi verdi. Dizinin içinde sadece adını kullanarak bu ürünün tüm objesini bul ve bir değişkene ata. +

Menü Çıkarma: Ekranda (frontend) sadece ürün isimlerini listeleyeceğin bir alan var. Sana stok veya kategori lazım değil. Orijinal diziden yola çıkarak sadece ürün adlarından oluşan yeni, basit bir dizi oluştur. (Örn: ["Filtre Kahve", "Cheesecake", ...])

Silme İşlemi: Menüden "Tavuklu Sandviç" kaldırıldı. Bu ürünün dizideki sırasını (indeksini) bul ve o sıradaki elemanı diziden tamamen sil.
*/
let envanter = [
    { id: 1, ad: "Filtre Kahve", kategori: "İçecek", stok: 45 },
    { id: 2, ad: "Cheesecake", kategori: "Tatlı", stok: 12 },
    { id: 3, ad: "Espresso", kategori: "İçecek", stok: 0 },
    { id: 4, ad: "Tavuklu Sandviç", kategori: "Yiyecek", stok: 20 },
    { id: 5, ad: "Su", kategori: "İçecek", stok: 150 }
];
console.log(envanter)

let result=envanter.push({ id: 6, ad: "Havuçlu Kek", kategori: "Tatlı", stok: 30 })
console.log(result)
console.log(envanter)

let tukenennUrunler=envanter.filter((urun)=>{return urun.stok===0});
console.log(tukenennUrunler)

let arananUrun=envanter.find((urun)=>{return urun.ad==="Cheesecake"})//filter da kullanilabilirdi
console.log(arananUrun)

let sadeceIsimler=envanter.map((urun)=>{return urun.ad})
console.log(sadeceIsimler)

let silinenUrunIndex=envanter.findIndex((urun)=>{return urun.ad==="Tavuklu Sandviç"})
if(silinenUrunIndex !== -1)
{
    envanter.splice(silinenUrunIndex,1)
}
console.log(envanter)