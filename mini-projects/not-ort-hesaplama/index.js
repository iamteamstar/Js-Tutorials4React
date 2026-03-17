function ortHesapla(){

let dersInput1=document.getElementById("lesson1").value
let dersInput2=document.getElementById("lesson2").value
let dersInput3=document.getElementById("lesson3").value
let dersInput4=document.getElementById("lesson4").value
let dersInput5=document.getElementById("lesson5").value

if(dersInput1===""||dersInput1<0||dersInput1>100 ||dersInput2==""||dersInput2<0||dersInput2>100 ||dersInput3===""||
    dersInput3<0||dersInput3>100 ||dersInput4===""||dersInput4<0||dersInput4>100 ||dersInput5===""||dersInput5<0||dersInput5>100 )
{
document.querySelector("#btnCalculator").innerHTML="lütfen kutuları doldur veya alanlar geçerli ifadelerle doldur";
return;
}

let ders1=Number(dersInput1);
let ders2=Number(dersInput2);
let ders3=Number(dersInput3);
let ders4=Number(dersInput4);
let ders5=Number(dersInput5);

let ortalama=(ders1+ders2+ders3+ders4+ders5)/5;

if(ortalama<50)
{
document.querySelector("#btnCalculator").innerHTML="ortalamanız: "+ortalama.toFixed(2) +"durumunuz: kaldı"
}
else if(ortalama>=50)
{
document.querySelector("#btnCalculator").innerHTML="ortalamanız: "+ortalama.toFixed(2) +"durumunuz: geçti"
}
}