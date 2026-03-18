function sayiTopla(sayi1,sayi2)//burada paramtreye tür belirtilmez
{
console.log(sayi1+sayi2)
}
//sayiTopla(2,3)

function sayiToplaWithArray(sayi)
{
let lastIndex=sayi.length-1
let toplam=0;
for(let i=0;i<=lastIndex;i++)
{
     toplam +=sayi[i];
}
for(let c of sayi)//girilen sayılari bulma (hatirlama amacli)
{
    console.log(c)
}
console.log("sayiların toplamı: "+toplam)
}
sayiToplaWithArray([2,3,4,2,2,2,2])//eğer parametre kısmında Rest Operatörü kullanmazsak böyle bir sonuç alırz Rest Operatörü : ...sayi

function sayiCarpWithArray(...sayi)
{
    let carpim=1;
    let sonIndex=sayi.length-1;
    for(let i=0;i<=sonIndex;i++)
    {
        carpim*=sayi[i];
    }
    console.log("sayilarin carpimi: "+carpim)
}

sayiCarpWithArray(2,2,2)

function yasHesapla(dogumYili)
{
let guncel=new Date().getFullYear();
let fark=guncel-dogumYili
console.log("yasiniz: "+fark)
}
yasHesapla(2016)