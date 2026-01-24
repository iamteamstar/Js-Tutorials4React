/*
Uygulama: Akıllı Kargo Ücret Hesaplama Sistemi
Senaryo

Bir e-ticaret sitesinde kargo ücreti;

mesafe

paket ağırlığı

müşteri tipi

kampanya durumu

hava koşulu

gibi faktörlere göre değişiyor. */

let kargoUcret = 30;
let agirlik = 23;
let mesafe_km = 203;
let musteriTipi = "silver";
let kampanya = "yok";
let hava_kosulu = "firtina";

// 1️⃣ İPTAL KONTROLÜ
if (mesafe_km > 200 && agirlik > 20 && hava_kosulu === "firtina") {
    console.log("Sipariş teslim edilemiyor");
} else {

    // 2️⃣ Mesafe
    if (mesafe_km <= 50)
        kargoUcret += 10;
    else if (mesafe_km <= 200)
        kargoUcret += 25;
    else
        kargoUcret += 50;

    // 3️⃣ Ağırlık
    if (agirlik >= 6 && agirlik <= 20)
        kargoUcret += 20;
    else if (agirlik > 20)
        kargoUcret += 40;

    // 4️⃣ Müşteri tipi
    if (musteriTipi === "gold")
        kargoUcret -= kargoUcret * 0.30;
    else if (musteriTipi === "silver")
        kargoUcret -= kargoUcret * 0.15;

    // 5️⃣ Kampanya
    if (kampanya === "var")
        kargoUcret -= 20;

    // 6️⃣ Hava koşulu
    if (hava_kosulu === "kar")
        kargoUcret += 25;
    else if (hava_kosulu === "firtina")
        kargoUcret += 40;

    console.log("Toplam kargo ücretiniz: " + kargoUcret + " TL");
}

