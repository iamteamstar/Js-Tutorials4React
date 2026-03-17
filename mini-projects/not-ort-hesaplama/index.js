function ortHesapla(){
let toplam=0;
let ortalama=0
let text=document.querySelector("#btnCalculator")
for(let i=1;i<=5;i++)
{
let dersInput=document.getElementById(`lesson${i}`).value

if(dersInput===""||dersInput<0||dersInput>100||isNaN(dersInput) )
{
text.innerHTML="lütfen kutuları doldur veya alanlar geçerli ifadelerle doldur";
return;
}

toplam+=Number(dersInput);

}
ortalama=toplam/5;

if(ortalama<50)
{
text.innerHTML="ortalamanız: "+ortalama.toFixed(2) +"durumunuz: kaldı"
}
else if(ortalama>=50)
{
text.innerHTML="ortalamanız: "+ortalama.toFixed(2) +"durumunuz: geçti"
}
}