/*
DOM(data object model), js kodlarımızın tarayıcı üzerinde çalışmasını sağlar. Console'da js çalıştırmak için node kurmamız gerekmişti, tarayıcı tarafında çalıştırmak için ise
herhangi bir eklentiye veya modüle gerek yoktur. örneğin chrome, kendi içinde zaten js yi barındıran bir tarayıcıdır. herhangi bir sitede sağ tık incele yaptığımız zaman console
kısmında js kodlarımızı yazabilir veya orada hatalrımızı, gönderiğimiz istekleri vb bir çok şeyi yapabiliriz. chrome, tarayıcıda js kullanmak için V8 Engine adlı bir motor kullanır
DOM, js yi html de kullanmamızı sağlar. js temelde stringler, objeler ve arraylerle  çalışır. DOM tam olarak html etiketlerini, js nin çalışabileceği arraylere,stringlere,objectlere
çevir. Örneğin <header> a DOM ile ulaştık diyelim. bu tagi alır js ile çalışabileceğim object olarak kullancaksam objecte array olarak kullanacaksam arraye string olarak kullanacaksam
stringe dönüştürür. Bu tagler, seçiciler ile seçmemiz gerekir. bu seçiciler "document" içinde yer alır.querySelectorAll, getElementById. GetElementsByName... 
querySelector: ilk bulduğunu alır.

*/
console.log("hello")