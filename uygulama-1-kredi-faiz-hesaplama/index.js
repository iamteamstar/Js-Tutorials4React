function KrediHesapla()
{
    let cekilecekTutar,vadeSayisi;
    let aylikTaksit,odenecekTutar;

    //bu değeri nerden alıyoruz id si :txtKrediTutari olan yerde ne yazıyosa onu al(value)
    //bu idye erişmek için document ile getElementById ile çağırıyourz
    cekilecekTutar=document.getElementById("txtKrediTutari").value; //bu elemanı yakala (txtKrediTutari) bunun içindeki value i al (value)
    //listemizi bir değişkenin içerisine al,her seferinde document.getElementById yazmamak için kısalttık sadece
    let liste=document.getElementById("listVade")//burada idleri optionların valuesinden alacağız her birine ayrı işlem yapacağız. bunun için önce listeyi elde edelim(select içindeki id),elemanlarından seçili olanı alalım
    //listeden seççili olanının valuesini al
    vadeSayisi=liste.options[liste.selectedIndex].value//vade sayısını listenin seçili elemanlarından value si     üzerinden al

    if(vadeSayisi==12)
     odenecekTutar=(cekilecekTutar*1.1);
    else if(vadeSayisi==24)
        odenecekTutar=(cekilecekTutar*1.2);
    else if(vadeSayisi==36)
        odenecekTutar=(cekilecekTutar*1.3);
    else if(vadeSayisi==48)
        odenecekTutar=(cekilecekTutar*1.4);

     aylikTaksit=odenecekTutar/vadeSayisi;

     //sonuçolark bunu yazdıracğız
     document.querySelector("#sonuc").innerHTML="geri ödeme toplamı: "+odenecekTutar +" <br> Aylık taksit tutarı: "+aylikTaksit.toFixed(2)//idsi sonuc olanı yakala #sonuc. toFixed(2) virgülden sonra 2 basamak olsun

     //olay yönlendirmesi yapma zamanı. bunu yapmazsak çalışmaz. oolay yönlendirmesini input button iinde onclick olayına yaparız onclick="FonskiyonAdi()"
    }