# 📜 JavaScript String Metotları & Şifre Analizi

JavaScript'te metinlerle (String) uğraşırken hayat kurtaran metotları buraya topladım. İleride "Bu ne yapıyordu?" dediğimde bakmalık, temiz notlar.

---
### [🏠 Ana Sayfa](README.md) | [🛠 Kurulum Rehberi](INSTALLATION.md) | [📜 String Metotları & Güvenlik]
---

## 🧵 String Metotları (Notlarım)

### 1. `.length` (Karakter Sayısı)
Bir metnin içinde kaç karakter (boşluklar dahil!) olduğunu söyler.

<pre>
let google = "[https://www.goog](https://www.goog)    le.com ";
let youtube = "[https://www.youtube.com](https://www.youtube.com)";
let result;

result = youtube.length;
console.log("yt karakter sayısı: " + result);

result = google.length;
console.log("google karakter sayısı: " + result);
</pre>

### 2. .replace() ve .replaceAll() (Değiştirme)
Metin içindeki bir parçayı başka bir şeyle değiştirmek için kullanılır.

replace() sadece ilk bulduğunu değiştirir.

replaceAll() gördüğü her şeyi değiştirir.
<pre>
  let google = "[https://www.goog](https://www.goog)    le.com ";
// Boşlukları temizleyip uzunluğa bakmak için:
let temizGoogle = google.replace(" ", ""); 
console.log(temizGoogle.length);

// Tüm noktaları çizgi yapalım:
let yeniLink = youtube.toLowerCase().replaceAll(".", "-"); 
// Sonuç: https://www-youtube-com
</pre>

### 3. .split() (Parçalara Ayırma)
Metni belli bir karaktere göre böler ve bize bir liste (Array) verir. Kaç parça oluştuğunu anlamak için sonuna .length ekleyebiliriz.
<pre>
  let parts = youtube.split("."); 
console.log(parts.length); // ["https://www", "youtube", "com"] olduğu için 3 döner.
</pre>

### 4. .startsWith() ve .endsWith() (Başlangıç ve Bitiş Kontrolü)
Metin istediğimiz kelimeyle mi başlıyor yoksa bitiyor mu? True veya False döner. Özellikle URL kontrollerinde çok işe yarıyor.
<pre>
  let google = "[https://www.google.com](https://www.google.com)";
console.log(google.startsWith("https")); // true
console.log(youtube.endsWith(".com"));    // true
</pre>

---
## Uygulama: Şifre Güvenlik Analizi
Burada işler biraz daha ciddileşiyor. Şifrenin sadece uzun olması yetmez, içine biraz da "karakter" katmak lazım.

Güvenlik Kriterlerim:
Uzunluk: En az 12 karakter olmalı.

Özel Karakter: İçinde en az 2 tane sembol bulunmalı.
<pre>
  let password = "pasw*-ordwqewqe";

// Regex (Düzenli İfade) kullanarak özel karakterleri avlıyoruz
let bulunanKarakterler = password.match(/[*+()?=+\-]/g);

// Eğer karakter varsa ve sayısı 2 veya üzerindeyse 'güvenli' sayıyoruz
let passwordSecure = bulunanKarakterler !== null && bulunanKarakterler.length >= 2;

if (password.length > 12 && passwordSecure) {
    console.log("Durum: Güvenli ✅");
} else {
    console.log("Durum: Güvensiz ❌");
}
</pre>

## Kısa Yol: Ternary Operatörü
if-else yazmaya üşendiğimde veya kodun daha şık durmasını istediğimde kullandığım yöntem.
Mantık: koşul ? doğruysa_burası : yanlışsa_burası
<pre>
  // Şifre 7'den büyükse ve güvenliyse "güvenli", değilse "güvensiz" yazdır:
password.length > 7 && passwordSecure ? console.log("güvenli") : console.log("güvensiz");
</pre>
