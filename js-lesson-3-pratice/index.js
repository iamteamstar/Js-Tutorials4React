/* 
Öğrenci Bilgi Formu
Aşağıdaki görevleri yerine getiren bir JavaScript programı yazın:
Öğrencinin adını, doğum tarihini ve notunu değişkenler olarak tanımlayın.
doğum tarihindan yas hesaplansin
ders notu 50'den büyükse "Geçti", değilse "Kaldı" mesajı verilsin
*/
let date=new Date.getFullYear();
let passingGrade=50;
let student1Name = "Mert Demir";
let studuent1BirthYear = 2001;
let student1Grade1 = 100;
let student1Grade2=90;
let student1Grade3=10;
let student1Age=date-studuent1BirthYear;
let noteAvg=(student1Grade1+student1Grade2+student1Grade3)/3;
if(noteAvg>=passingGrade){
   console.log("Öğrenci Adı : "+student1Name+" , Öğrencinin Yaşı : "+ student1Age +"\nÖğrencinin Ders Ortalaması : "+noteAvg + " Dersi Geçmiştir.");
}
else{
   console.log("Öğrenci Adı : "+student1Name+" , Öğrencinin Yaşı : "+ student1Age +"\nÖğrencinin Ders Ortalaması : "+noteAvg + " Dersten Kalmıştır.");
}


let student2Name="Eylül Demir";
let student2BirthYear=2002;
let student2Grade1=60;
let student2Grade2=30;
let student2Grade3=50;
let student2Age=date-student2BirthYear;
let noteAvg2=(student2Grade1+student2Grade2+student2Grade3)/3;
if(noteAvg2>=passingGrade){
console.log("Öğrenci Adı : "+student2Name+" , Öğrencinin Yaşı : "+ student2Age +"\nÖğrencinin Ders Ortalaması : "+noteAvg2 + " Dersi Geçmiştir.");
}
else{
console.log("Öğrenci Adı : "+student2Name+" , Öğrencinin Yaşı : "+ student2Age +"\nÖğrencinin Ders Ortalaması : "+noteAvg2 + " Dersten Kalmıştır.");
    
}
