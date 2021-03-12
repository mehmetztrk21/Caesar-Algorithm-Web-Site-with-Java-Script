const message=document.querySelector("#message");
const sessiz=["b","c","ç","d","f","g","ğ","h","j","k","l","m","n","p","r","s","ş","t","v","y","z"]
const sesli=["a","e","ı","i","o","ö","u","ü"]

var a="sahdjksa";


document.querySelector("#coz").addEventListener("click",function(){
    var mesaj=message.value;
    mesaj=mesaj.toLowerCase();
    let sonuc="";
    
    var x=0;
    for (let index = 0; index < mesaj.length; index++) {
        let sayac=0;
        x+=1;
        if(mesaj.charAt(index)=="b"){
                sonuc+="z";
        }
        else if(mesaj.charAt(index)=="a"){
                sonuc+="ü";
        }
        else if(mesaj.charAt(index)==" "){
            sonuc+=" ";
    }
    else{
        for (let i = 0; i < sessiz.length; i++) {
            let a=0;
            if(sessiz[i]==mesaj.charAt(index)){
                sonuc=sonuc+sessiz[sayac-1]
                a+=1;
                break;
            }
            else{
                let sayac2=0;
                for (let k = 0; k < sesli.length; k++) {

                    if(mesaj.charAt(index)==sesli[k]){
                        a+=1;
                        sonuc+=sesli[sayac2-1];
                        break;
                    }
                    sayac2+=1;
                    
                }
                if(a!=0){
                    break;
                }
            }
            sayac+=1;
            
        }
    }
        
    }
    document.querySelector("#sonuc").value=sonuc;


});



document.querySelector("#kodla").addEventListener("click",function(){
    var mesaj=message.value;
    mesaj=mesaj.toLowerCase();
    let sonuc="";
    
    var x=0;
    for (let index = 0; index < mesaj.length; index++) {
        let sayac=0;
        x+=1;
        if(mesaj.charAt(index)=="z"){
                sonuc+="b";
        }
        else if(mesaj.charAt(index)=="ü"){
                sonuc+="a";
        }
        else if(mesaj.charAt(index)==" "){
            sonuc+=" ";
    }
    else{
        for (let i = 0; i < sessiz.length; i++) {
            let a=0;
            if(sessiz[i]==mesaj.charAt(index)){
                sonuc=sonuc+sessiz[sayac+1]
                a+=1;
                break;
            }
            else{
                let sayac2=0;
                for (let k = 0; k < sesli.length; k++) {

                    if(mesaj.charAt(index)==sesli[k]){
                        a+=1;
                        sonuc+=sesli[sayac2+1];
                        break;
                    }
                    sayac2+=1;
                    
                }
                if(a!=0){
                    break;
                }
            }
            sayac+=1;
            
        }
    }
        
    }
    document.querySelector("#sonuc").value=sonuc;
});
