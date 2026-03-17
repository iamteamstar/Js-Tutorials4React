/* Object mantığı key value şeklindedir. sol anahtar sağ değer. bir değere degiskenAdi.deger seklinde ulaşabiliriz */
let customer1={
    "ad":"Azad",
    "soyad":"Koçak",
    "tcno":"1111111111111",
    "sehir":"Bursa",
    "products":
        {
            "phone":"iphone",
            "price":250,
        }
}
console.log("hosgeldiniz "+customer1.ad +" "+customer1.soyad+", tc no: "+customer1.tcno+", sehir: "+customer1.sehir)
console.log("aldığınız urun: "+customer1.products.phone +" fiyatı bu şekilde: "+customer1.products.price)
let customer2={
    "ad":"Ayse",
    "soyad":"Nue",
    "tcno":"222222222222",
    "sehir":"Antalya",
    "products":["bilgisayar","klavye","mause"]

}
console.log("merhaba "+customer2.ad+" aldığınız ürünler: "+customer2.products)

let customers=[
    customer1,
    customer2,
    customer1.products
]
console.log(customers)

//api mantığında kapsayıcı bir array olur, içine objeler açılır
let urunler=[
    {
        "id":1,
        "urunAdi":"iphone",
        "urunFiyat":2323
    },
    {
        "id":2,
        "urunAdi":"oppo",
        "urunFiyat":2111
    },
    {
        "id":3,
        "urunAdi":"redmi",
        "urunFiyat":2111
    },
    {
        "id":4,
        "urunAdi":"nokia",
        "urunFiyat":1232
    }
]
console.log(urunler[2].urunAdi)