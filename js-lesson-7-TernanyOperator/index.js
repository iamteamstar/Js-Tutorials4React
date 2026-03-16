let userName = "azadkocak";
let password = "pasw*-ordwqewqe";

// Sonuna 'g' ekledik. Artık bize eşleşen karakterlerin bir listesini (array) verecek.
let bulunanKarakterler = password.match(/[*+()?=+\-]/g);

// Eğer hiç özel karakter yoksa null döner. Bu yüzden önce null olmadığını, 
// sonra da listedeki eleman sayısının (length) 2 veya daha büyük olduğunu kontrol ediyoruz.
let passwordSecure = bulunanKarakterler !== null && bulunanKarakterler.length >= 2;

if (password.length > 12 && passwordSecure) {
    console.log("güvenli");
} else {
    console.log("güvensiz");
}
//---------------------------- Ternany Operatörü ----------------------------------------\\
// ? if e denk gelir : elseye denk gelir. diyoruz ki password 7 karakterden uzunsa ve passwordSecure sağlıyorsa(?) güvenli değilse(else :) güvensiz
password.length>7 && passwordSecure ? console.log("güvenli") :   console.log("güvensiz");