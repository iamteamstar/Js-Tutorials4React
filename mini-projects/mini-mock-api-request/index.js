/* Görev-1: Dışarıdan aldığı ham bayt değerini matematiksel olarak hesaplayıp KB (Kilobayt) veya MB (Megabayt) cinsinden okunabilir bir metne dönüştürecek. */
let ornekDosya = { 
    id: 101, 
    ad: "sunum_taslagi.pptx", 
    boyutBayt: 5432100, // API'ler boyutu hep bayt cinsinden yollar
    olusturanRol: "admin",
    gizliMi: true
};

function boyutFormatla(baytDeger)
{
    let esikDeger=1048576;//bir bayt karsiligi
    if(baytDeger<=esikDeger)
    {
        let kbDeger=baytDeger/1024
        return kbDeger.toFixed(2)+" KB"
    }
    else
    {
         let mbDeger=baytDeger/1024
        return mbDeger.toFixed(2)+" MB"
    }
   
}
let hesaplananBoyut=boyutFormatla(ornekDosya.boyutBayt)
console.log(hesaplananBoyut)

/*
Görev 2: Dosya Tipi Analizcisi (String Metotları Pratiği)
Görevi: Dosya adının sonundaki uzantıyı (.pptx, .jpg, .pdf) bulup, sistemin anlayacağı bir kategoriye çevirecek.
Kural: Eğer dosya .jpg veya .png ise geriye "Görsel", .pdf veya .docx ise "Doküman", tanınmıyorsa "Bilinmeyen Format" yazısı (return) dönecek.
*/
function tipBelirleyici(dosyaTipi)
{
let tipBelirtec=dosyaTipi.toLowerCase();
console.log(tipBelirtec)
if(dosyaTipi.endsWith(".jpg")||dosyaTipi.endsWith(".png"))
    return "görsel";
else if(dosyaTipi.endsWith(".pptx"))
   return "sunum"
else if(dosyaTipi.endsWith(".docx"))
    return "dokuman"
else if(dosyaTipi.endsWith(".csv"))
    return "veri dosyası"
else 
    return "bilinmeyen dosya"
}
let result=tipBelirleyici(ornekDosya.ad)
console.log(tipBelirleyici("vesikalik.jpg"));      // Çıktı: Görsel
console.log(tipBelirleyici("fatura.PDF"));
console.log(result)

/*
Görev 3: Yetki Kontrolcüsü (Mantıksal Operatör Pratiği)
Görevi: Sistemi kullanan kişinin o dosyayı görüp göremeyeceğine karar verecek.
Kural: Eğer dosya gizliMi: true ise, bu dosyayı SADECE aktif kullanıcı rolü "admin" olanlar görebilir. Diğerleri için false, admin için true dönecek.
*/

function yetkiKontrol(rol,dosyaTipi)
{
if(rol!=="admin" && rol!=="user" && rol!=="tester")
{
    return false
}
else if(dosyaTipi==="gizli"&&rol !="admin")
    return false
else
    return true
}

let state=yetkiKontrol(ornekDosya.olusturanRol,ornekDosya.gizliMi)
console.log(state)