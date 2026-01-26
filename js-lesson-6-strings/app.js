let google="https://www.goog    le.com "
let youtube="https://www.youtube.com"
let result;
// karakter sayısnı bulma
result=youtube.length;
console.log("yt karakter sayısı: "+result);
result=google.length;
console.log("google karakter sayısı: "+result);
result=google.replace(" ","").length;
console.log(result)

// kaç youtube ve google ın kaç karakterden oluştuğunu bulma
result=google.split("   ").length
console.log(result)
result=youtube.split(".").length
console.log(result)

//string başlangıç kontrol
result=google.startsWith("https")
console.log(result)
result=youtube.endsWith(",com")
console.log(result)

//değişkenleri birleştirme
result=youtube.toLowerCase().replaceAll(".","-").replace("com","com/")
console.log(result)
