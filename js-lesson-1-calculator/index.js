const a = 8;
const b = 20;
const toplam = a + b;
console.log("iki sayinin toplami: " + toplam);
if(toplam > 0) {
    console.log("Toplam pozitif");
}
if(a > b) {
    const fark = a - b;
    console.log("iki sayinin farki:"+fark);
}
else{
    const fark = b - a;
    console.log("iki sayinin farki:"+fark);
}
const carpim=a*b;
console.log("iki sayinin carpimi"+carpim);
const bolum=b/a;
if(a!==0) {
    const bolum=b/a;
    console.log("iki sayinin bolumu:"+bolum);
}
else {
    console.log("Bolme isleminde payda sifir olamaz");
}