class sayWithClassicAndModernJs{
    
   static sayWithStandart(){
         let say=function(){
             console.log("hello with classic")
        }
        say();
    }

    static sayWithStandartsInParameters(){
        let say1=function(name){
            console.log(`hello, ${name}` )
        }
        say1("azad")
    }

 static   sayWithModern(){
        let say=()=>{
            console.log("hello with modern js")
        }
    say();
    }
    static sayWithModernInParamaters(){
        let say1=(name)=>{console.log(`welcome, ${name}`)}
        say1("kullanici");
        }
    }


sayWithClassicAndModernJs.sayWithStandart();
sayWithClassicAndModernJs.sayWithModern();
sayWithClassicAndModernJs.sayWithStandartsInParameters();
sayWithClassicAndModernJs.sayWithModernInParamaters();



let say=()=>console.log("hii");
say()