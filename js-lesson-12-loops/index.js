let meyve= ["karpuz","muz","armut","elma","soğan","sucuk","mandalina"]
let gercekMeyveler=meyve.filter((meyve)=>{return meyve !=="sucuk"&&meyve!=="soğan"})
console.log(gercekMeyveler)
for(let x=0;x<=(gercekMeyveler.length)-1;x++)
{
    console.log(gercekMeyveler[`${x}`]);
}

let sayilar=[10,20,30,40,50]
let toplam=0;

for(let i in sayilar)//indexleri getirir dizi içinden
{
    console.log(toplam +=sayilar[i])//burada da indexe göre toplama yapıyoruz
}

let sayilar2=[10,20,30,40,50]
let toplam2=0;
for(let i of sayilar2)//direkt indexler içindeki değerleri getirir
{
    console.log(toplam2 +=i)
}