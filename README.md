#  JavaScript Gelişimi

Bu depo, JavaScript öğrenme sürecimde aldığım notları ve yaptığım uygulamaları içermektedir.

---
### [🏠 Ana Sayfa] | [🛠 Kurulum Rehberi](INSTALLATION.md) | [📜 String Metotları & Ternany](STRING_METHODS.md)
---

##  Değişkenler
JavaScript’te değişken tanımlamak için kullanılan temel anahtar kelimeler var, let ve const'dir. Ancak, bu anahtar kelimeler arasında bazı önemli farklar bulunmaktadır.

**1. Var Anahtar Kelimesi**
ES5 (ECMAScript 5) ve önceki sürümlerde kullanılan var anahtar kelimesi, genelde fonksiyon kapsamında tanımlanır. Yani, bir değişken bir fonksiyon içinde tanımlandığında, sadece o fonksiyonun içinde erişilebilirdir. Ayrıca, aynı isimde bir değişken birden fazla kez tanımlanabilir, bu da hata olasılığını artırır.
<pre>
function example() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); // 20
  }
  console.log(x); // 20
}
example();
</pre>

**2. Let Anahtar Kelimesi**
ES6 (ECMAScript 2015) ile birlikte tanıtılan let, blok kapsamında tanımlanan bir değişken tipidir. Yani, bir blok içinde tanımlanan bir değişken, sadece o blok içinde geçerlidir. Bu özellik, var'ın yol açtığı kapsam sorunlarını çözmeye yardımcı olur.

<pre>
  function example() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // 20
  }
  console.log(x); // 10
}

example();
</pre>

**3. Const Anahtar Kelimesi**
const da let gibi blok kapsamlıdır, ancak bir kez değer atandıktan sonra değiştirilemez (immutable). Bu özellik, sabit değerlerin tanımlanmasında kullanışlıdır. Ancak, dikkat edilmesi gereken bir nokta, const ile bir nesne tanımlandığında, nesnenin kendisi değiştirilemez, ancak içindeki özellikler değiştirilebilir.

<pre>
  const PI = 3.14;
PI = 3.14159; // Hata! Değiştirilemez.

const person = {
  name: "John",
  age: 30
};
person.age = 35; // Değiştirilebilir
</pre>

<img width="1280" height="600" alt="image" src="https://github.com/user-attachments/assets/5f86d89f-0a8d-463e-80cc-b05841df97d0" />

---

# ⚖️ Operatörler ve Karar Yapıları (If-Else)

Bu bölümde verileri nasıl karşılaştıracağımızı ve bu karşılaştırmalara göre kodumuzun akışını nasıl değiştireceğimizi (karar mekanizmalarını) öğreneceğiz.

---
### [🏠 Ana Sayfa](README.md) | [🛠 Kurulum Rehberi](INSTALLATION.md) | [📜 String Metotları](STRING_METHODS.md) | [⚖️ Operatörler & Karar Yapıları]
---

## 🔢 Karşılaştırma Operatörleri
Değerler arasındaki ilişkiyi kontrol etmek için kullanılır ve sonuç her zaman `Boolean` (true/false) döner.

| Operatör | Açıklama | Örnek (`sayi1=15, sayi2=34`) | Sonuç |
| :--- | :--- | :--- | :--- |
| `>` | Büyüktür | `sayi1 > sayi2` | `false` |
| `<` | Küçüktür | `sayi1 < sayi2` | `true` |
| `>=` | Büyük veya Eşit | `sayi1 >= sayi2` | `false` |
| `<=` | Küçük veya Eşit | `sayi1 <= sayi2` | `true` |
| `==` | Eşittir (Değer kontrolü) | `sayi1 == sayi2` | `false` |
| `!=` | Eşit Değildir | `sayi1 != sayi2` | `true` |

---

## 🛠 Karar Yapıları (If - Else)

Kodun belirli bir şart gerçekleştiğinde çalışmasını sağlar.

### 1. Temel Kullanım: Öğrenci Geçti/Kaldı Kontrolü
Doğum yılından yaş hesaplama ve ortalamaya göre sonuç üretme örneği:

```javascript
let birthYear = 2001;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

let grade1 = 100, grade2 = 90, grade3 = 10;
let average = (grade1 + grade2 + grade3) / 3;

if (average >= 50) {
    console.log(`Yaş: ${age} - Ortalaması: ${average}. Dersi Geçti! ✅`);
} else {
    console.log(`Yaş: ${age} - Ortalaması: ${average}. Dersten Kaldı! ❌`);
}
