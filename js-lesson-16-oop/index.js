//object
/*let araba={
    hiz:12,
    renk:"mavi"
}
console.log(araba.hiz)*/


//method:obje içinde kullanılan fonsiyonel işlemler

/*let araba={
    hiz:12,
    renk:"mavi",
    hizlandir: function(deger){
        this.hiz +=deger
    },
}
araba.hizlandir(12)
console.log(araba.hiz)*/


//constructor:baslangic degeri veririz. kullanmak için obje yaratmak gerek. bu kısım ES5 versiyonudur

/*function Araba(renk)
{
    this.renk=renk
    this.hiz=0
}

let araba1=new Araba("turuncu")
console.log(araba1)

//Araba classı içine yeni bir metot tanımlamak için prototype kullanılır!! ClassAdi.prototype.EklenecekMethodAdi

/*Araba.prototype.hizlandir=function(deger){
    this.hiz +=deger
}

araba1.hizlandir();
console.log(araba1)

//çıktı
Araba { renk: 'turuncu', hiz: 0 }
Araba { renk: 'turuncu', hiz: 20 }
*/

/* constructor ES6 da function diye ayrı belirtmemize gerek yok başlangıçta (function Araba(renk)...) bunun yerine class anahtar kelimesini kullanırız
aynı zamanda contructor ı  this.renk=renk, this.hiz=0 şeklinde değil, direkt constructor anahatar kelimesi kullanabiliriz. çoğu tarayıcı es6 değil es5i 
okuyor es6 yazıldığı zaman bunu bir bundle(çevirici) ile es5 e çeviriyor

class Araba{
constructor(renk){
    this.renk=renk
}
}
let araba2=new Araba("kırmızı");
console.log(araba2)
*/

/*classlar es6 ile gelen gelen özellik. okumabilirlik arttırır functiona göre direkt class scopeları içinde metot yazılabilir

class Araba{
    constructor(renk){
        this.renk=renk,
        this.hiz=12
    }
    hizlandır(deger){
        this.hiz +=deger
    }
}
let araba3=new Araba("sarı")//sınıftan nesne oluşturma : instantiation (örnekleme)
araba3.hizlandır(12);
console.log(araba3)
*/

/*inheritance

class Araba {
    constructor(renk,model){//buradaki özellikleri yani renk ve modeli başka bir yerde tekrar tanımlamak yerine bu sınıftan kaltım alacağız
        this.renk=renk;
        this.model=model;
    }
}
class SuvAraba extends Araba{
    constructor(renk,model,hiz){//ilk önce alınacak özellikler,sonrasında kendisine ait özellikler yazılır
        super(renk,model);//super() nedir? Bu özel fonksiyon, miras aldığın üst sınıfın (yani Araba sınıfının) constructor'ını çalıştıran "Ana Şalter"dir. üst sınıfa verileri ayrı ayrı değil, tek bir pakette, aralarına virgül koyarak göndermeliyiz
        this.hiz=hiz;
    }
}
let suvArac=new SuvAraba("siyah","qasqai",12);
console.log(suvArac);

let araba4=new Araba("mavi","juke")
console.log(araba4)
*/

// encapsulation :belli bir özelliği sadece belirli yerlerde(classlarda) kullanılmasına izin vermek için kullanılır. özelliğin önüne belli olması adına # konulur

class Araba{
    #renk;
    constructor(renk){
        this.#renk=renk
    }
    getRenk(){
        return this.#renk
    }
    setRenk(renk){
        return this.#renk=renk
    }
}

let araba=new Araba("yeşil")
//çıktı: undefined
console.log(araba.renk)//bu şekilde direkt özelliğin kendisine ulaşamıyoruz. ulaşmak için bir metot tanımlayıp metotdu çağırarak ulaşablilirz 

console.log(araba.getRenk())//bu şekilde okuyabiliriz. değiştirmek içinse set metodu yazabilriz:

araba.setRenk("masmavi")
console.log(araba.getRenk())