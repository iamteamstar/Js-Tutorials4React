/*
PROJE: “Akıllı Görev (Task) Yönetim Sistemi”
Amaç

Kullanıcıların görevlerini:

filtreleyebildiği
gruplayabildiği
analiz edebildiği
istatistik çıkarabildiği

bir sistem yapacağım.
*/

const tasks = [
  { id: 1, title: "JS çalış", category: "education", completed: true, priority: 3, date: "2026-03-25" },
  { id: 2, title: "Spor yap", category: "health", completed: false, priority: 2, date: "2026-03-26" },
  { id: 3, title: "Proje geliştir", category: "work", completed: false, priority: 5, date: "2026-03-26" },
  { id: 4, title: "Kitap oku", category: "education", completed: true, priority: 1, date: "2026-03-24" },
];

//Tamamlanmamış görevleri al + sadece title listesi çıkar
let result=tasks.filter(x=>x.completed==true)
let titleSelect=result.map((x)=>x.title)
console.log(titleSelect);

//Toplam priority puanı : reduce
let point=tasks.reduce((toplam,sayi)=>{
    return toplam + sayi.priority
},0)
console.log(point);

//Hiç tamamlanmamış görev var mı?
let taskStatus=tasks.some(x=>x.completed==false)
console.log(taskStatus);

//Hepsi tamamlandı mı?
let taskAllStatus=tasks.every(x=>x.completed==true)
    console.log(taskAllStatus);

//En yüksek priority görev
let priortyMax=tasks.reduce((max,mevcut)=> mevcut.priority>max.priority ? mevcut : max)
console.log(priortyMax)

//taskleri hızlı bulmak için index ekleme
const taskMap = new Map();
tasks.forEach(task => {
  taskMap.set(task.id, task);
});
console.log(taskMap.get(2));

//category listesi
let categories= new Set(tasks.map(x=>x.category))
console.log(categories)

const dailyStats = tasks.reduce((acc, task) => {
  acc[task.date] = (acc[task.date] || 0) + 1;
  return acc;
}, {});

const mostActiveDay = Object.entries(dailyStats)
  .reduce((max, current) => current[1] > max[1] ? current : max);
  console.log(mostActiveDay);
  