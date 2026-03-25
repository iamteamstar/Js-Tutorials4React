//modern js methodları ile ilgili proje

let products=[
   { id:1, isim:"urun1",katogori:"k1",fiyat:123,stokAdedi:2,puan:3,kargoBedava:true},
   { id:2, isim:"urun2",katogori:"k4",fiyat:445,stokAdedi:4,puan:1,kargoBedava:true},
   { id:3, isim:"urun3",katogori:"k3",fiyat:48,stokAdedi:0,puan:2,kargoBedava:false},
   { id:4, isim:"urun4",katogori:"k2",fiyat:188,stokAdedi:1,puan:3,kargoBedava:true},
   { id:5, isim:"urun5",katogori:"k2",fiyat:778,stokAdedi:8,puan:2,kargoBedava:false},
   { id:6, isim:"urun6",katogori:"k2",fiyat:1296,stokAdedi:80,puan:2,kargoBedava:false},
   { id:7, isim:"urun7",katogori:"k3",fiyat:69,stokAdedi:0,puan:4,kargoBedava:true},
   { id:8, isim:"urun10",katogori:"k4",fiyat:24,stokAdedi:3,puan:2,kargoBedava:true},
   { id:9, isim:"urun8",katogori:"k1",fiyat:89,stokAdedi:0,puan:3,kargoBedava:false},
   { id:10, isim:"urun9",katogori:"k1",fiyat:78,stokAdedi:11,puan:5,kargoBedava:true}
]

/* 
Kullanıcılar e-ticaret sitelerinde binlerce ürünü aynı anda görmek istemez, daraltmak isterler.
Sadece "k2" kategorisindeki ürünleri listele.
Stokta olmayan ürünleri (stokAdedi === 0) ürün listesinden çıkar ki müşteriler hayal kırıklığına uğramasın.
Müşterinin seçtiği fiyat aralığına (örneğin 100 TL - 500 TL) uyan ürünleri getir.
*/

const categoryFilter=products.filter(x=>x.katogori==="k2"&&x.stokAdedi!==0&&x.fiyat>100&&x.fiyat<500)
console.log(categoryFilter);

/*
Aşama: map() ile Veri Dönüştürme ve İndirim
Elindeki products dizisini kullanarak şu iki görevi map() metodu ile çözmeni istiyorum:
Görev 2.1 (Arayüz Hazırlığı): Bütün ürünleri dolaşarak, ekranda sadece isim ve fiyat gösterecek şekilde basit birer metin haline getir.
(Örn: ["urun1 - 123 TL", "urun2 - 445 TL", ...]) +
Görev 2.2 (Kampanya Uygulaması): "k1" kategorisindeki ürünlerin fiyatına %20 indirim yap. Diğer kategorilerdeki ürünlerin fiyatları aynı kalsın.
(İpucu: map içinde bir if/else mantığı veya Ternary Operator ? : kullanabilirsin. Yeni nesneyi döndürürken spread operatörü ... kullanmak çok işine yarar).
*/
let onlyNameAndPrice=products.map((get)=>{
    return get.isim + "-"+get.fiyat
})
console.log(onlyNameAndPrice);

let kampanyaUygulanmisUrunler = products.map((urun) => {
    if (urun.katogori === "k1") {
        return { 
            ...urun,
            fiyat: (urun.fiyat * 0.8).toFixed(4) // Sadece fiyatı %20 düşürerek ez
        };
    } else {
        return urun; 
    }
});

console.log(kampanyaUygulanmisUrunler);
/*let categorySelect=products.filter(x=>x.katogori==="k1")

console.log(categorySelect)

let discountCategory=categorySelect.map(x=>x.fiyat -=x.fiyat*0.2)

console.log(discountCategory); */



/*
Finansal Hesaplamalar ve Gruplama
Burası paranın ve verinin özetlendiği kısımdır. Sepet toplamları her zaman reduce ile yapılır.
Görevler:
Kullanıcının cart (sepet) dizisindeki tüm ürünlerin fiyatlarını toplayarak "Ödenecek Toplam Tutar"ı bul.
Zorlayıcı Görev: Tüm mağazadaki ürünleri alıp kategorilerine göre grupla. 
Yani elinde şöyle bir çıktı olsun: { elektronik: 15, giyim: 30, evAletleri: 10 }. (Bunu Admin paneli istatistikleri için yapacaksın).
*/
let cart = [
   { id: 1, isim: "urun1", fiyat: 123, adet: 2 }, 
   { id: 4, isim: "urun4", fiyat: 188, adet: 1 }, 
   { id: 10, isim: "urun9", fiyat: 78, adet: 3 }  
]

let totalPrice=cart.reduce((kasa,urun)=>{
    return kasa +(urun.fiyat*urun.adet)
},0)

console.log(`Ödenecek Toplam Tutar: ${totalPrice} TL`);

/*
Görev 3.2 (Kategori Gruplama - Zorlayıcı / İleri Seviye): Bu görevde sepeti bırakıp tekrar yukarıdaki products dizisine dönüyoruz.
reduce() kullanarak mağazadaki ürünlerin kategorilerine göre sayısını bul ve şöyle bir nesne (object) oluştur:
Beklenen Çıktı: { k1: 3, k4: 2, k3: 2, k2: 3 }
*/

const kategoriSayilari = products.reduce((kasa, urun) => {
    
    let kategoriAdi = urun.katogori; // Örn: "k1", "k2", vb.

    // Eğer 'kasa' nesnesinin içinde bu kategori önceden tanımlanmışsa:
    if (kasa[kategoriAdi]) {
        kasa[kategoriAdi] += 1; // Sayısını 1 artır
    } 
    // Eğer bu kategoriyle ilk defa karşılaşıyorsak:
    else {
        kasa[kategoriAdi] = 1; // Kasada bu isimle bir özellik aç ve 1 eşitle
    }
    return kasa; // Güncellenmiş nesneyi bir sonraki adıma aktar
}, {}); 

console.log(kategoriSayilari);

