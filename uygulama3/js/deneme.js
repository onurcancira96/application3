var ritim = 0;
var sonuc = 0;
var dizi=[];
var  degisim=0;
var dizidegisim=1;

document.getElementById('num0').addEventListener("click", numjs0);
function numjs0(){
    ritim=0;
    document.querySelector('.sayi').textContent+=0;
    document.querySelector('.sayi3').textContent+=0;

}
document.getElementById('num1').addEventListener("click", numjs1);
function numjs1(){
    ritim=0;
    document.querySelector('.sayi').textContent+=1;
    document.querySelector('.sayi3').textContent+=1;


}
document.getElementById('num2').addEventListener("click", numjs2);
function numjs2(){
    ritim=0;
    document.querySelector('.sayi').textContent+=2;
    document.querySelector('.sayi3').textContent+=2;

}
document.getElementById('num3').addEventListener("click", numjs3);
function numjs3(){
    ritim=0;
    document.querySelector('.sayi').textContent+=3;
    document.querySelector('.sayi3').textContent+=3;

}
document.getElementById('num4').addEventListener("click", numjs4);
function numjs4(){
    ritim=0;
    document.querySelector('.sayi').textContent+=4;
    document.querySelector('.sayi3').textContent+=4;

}
document.getElementById('num5').addEventListener("click", numjs5);
function numjs5(){
    ritim=0;
    document.querySelector('.sayi').textContent+=5;
    document.querySelector('.sayi3').textContent+=5;

}
document.getElementById('num6').addEventListener("click", numjs6);
function numjs6(){
    ritim=0;
    document.querySelector('.sayi').textContent+=6;
    document.querySelector('.sayi3').textContent+=6;

}
document.getElementById('num7').addEventListener("click", numjs7);
function numjs7(){
    ritim=0;
    document.querySelector('.sayi').textContent+=7;
    document.querySelector('.sayi3').textContent+=7;

}
document.getElementById('num8').addEventListener("click", numjs8);
function numjs8(){
    ritim=0;
    document.querySelector('.sayi').textContent+=8;
    document.querySelector('.sayi3').textContent+=8;

}
document.getElementById('num9').addEventListener("click", numjs9);
function numjs9(){
    ritim=0;
    document.querySelector('.sayi').textContent+=9;
    document.querySelector('.sayi3').textContent+=9;

}
document.getElementById('numsil').addEventListener("click", numsiljs);
function numsiljs(){

}
document.getElementById('sil').addEventListener("click", siljs);
function siljs(){
    var sayi =document.querySelector('.sayi').textContent;

    dizi=[];
    sonuc=0;
document.querySelector('.sayi').textContent = '';
document.querySelector('.sayi2').textContent = '';
document.querySelector('.sayi3').textContent ='';
document.querySelector('.sayi4').textContent ='';
}

//İşaretler---------------------------------------------------------------
document.getElementById('plus').addEventListener("click", plusjs);
function plusjs(){ 
    

    if(ritim==0){
        document.querySelector('.sayi3').textContent+=' + ';
        ritim=1;
        
    }
    var sayi =document.querySelector('.sayi').textContent;
    degisim = 1;
    dizidegisim = 1;


    var deneme = sayi.slice(0,sayi.length);
    dizi.push(...[deneme]);
    document.querySelector('.sayi').textContent =''; 

    if(dizi[dizi.length-1]==''){
        dizi.pop();
    }


    if(dizi.length>1){
        if(degisim==1){
            sonuc = parseInt(dizi[0]) + parseInt(dizi[1])
            document.querySelector('.sayi2').textContent=sonuc;

            dizi=[];
            dizi= [sonuc];
        document.querySelector('.sayi').textContent ='';  //sıfırlamak için hepsine koy
        }
        else if(degisim==2){
            sonuc = parseInt(dizi[0]) - parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;
            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';
        }
        else if(degisim==3){
            sonuc = parseInt(dizi[0]) * parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;

            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';
        }
        else if(degisim==4){
            sonuc = parseInt(dizi[0]) / parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;

            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent =''; 
        }
    }
    document.querySelector('.sayi2').textContent=sonuc;
};
//çıkarmaaa
document.getElementById('minus').addEventListener("click", minusjs);
function minusjs(){ 

    if(ritim==0){
        document.querySelector('.sayi3').textContent+=' - ';
        ritim=1;
    }
    var sayi =document.querySelector('.sayi').textContent;
    degisim = 2;
    dizidegisim = 2;



    var deneme = sayi.slice(0,sayi.length);
    dizi.push(...[deneme]);
    document.querySelector('.sayi').textContent =''; 

    if(dizi[dizi.length-1]==''){
        dizi.pop();
    }


    if(dizi.length>1){
        if(degisim==1){
            
            sonuc = parseInt(dizi[0]) + parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;


            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';  //sıfırlamak için hepsine koy
        }
        else if(degisim==2){
            sonuc = parseInt(dizi[0]) - parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;


            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';
        }
        else if(degisim==3){
            sonuc = parseInt(dizi[0]) * parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;


            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';
        }
        else if(degisim==4){
            sonuc = parseInt(dizi[0]) / parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;


            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent =''; 
        }
    }

    document.querySelector('.sayi2').textContent=sonuc;
};
document.getElementById('cross').addEventListener("click", crossjs);
function crossjs(){ 

    if(ritim==0){
        document.querySelector('.sayi3').textContent+=' * ';
        ritim=1;
    }
    var sayi =document.querySelector('.sayi').textContent;
    degisim = 3;
    dizidegisim = 3;



    var deneme = sayi.slice(0,sayi.length);
    dizi.push(...[deneme]);
    document.querySelector('.sayi').textContent =''; 

    if(dizi[dizi.length-1]==''){
        dizi.pop();
    }

    if(dizi.length>1){
        if(degisim==1){
            sonuc = parseInt(dizi[0]) + parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;


            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';  //sıfırlamak için hepsine koy
        }
        else if(degisim==2){
            sonuc = parseInt(dizi[0]) - parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;


            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';
        }
        else if(degisim==3){
            sonuc = parseInt(dizi[0]) * parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;


            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';
        }
        else if(degisim==4){
            sonuc = parseInt(dizi[0]) / parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;


            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent =''; 
        }
    }
    document.querySelector('.sayi2').textContent=sonuc;
};
document.getElementById('slash').addEventListener("click", slashjs);
function slashjs(){ 
    if(ritim==0){
        document.querySelector('.sayi3').textContent+=' / ';
        ritim=1;
    }
    var sayi =document.querySelector('.sayi').textContent;
    degisim = 4;
    dizidegisim = 4;



    var deneme = sayi.slice(0,sayi.length);
    dizi.push(...[deneme]);
    document.querySelector('.sayi').textContent =''; 

    if(dizi[dizi.length-1]==''){
        dizi.pop();
    }

    if(dizi.length>1){
        if(degisim==1){
               var deneme = sayi.slice(0,sayi.length);
    dizi.push(...[deneme]);
    document.querySelector('.sayi').textContent =''; 

    if(dizi[dizi.length-1]==''){
        dizi.pop();
    }
            sonuc = parseInt(dizi[0]) + parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;
     

            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';  //sıfırlamak için hepsine koy
        }
        else if(degisim==2){
            sonuc = parseInt(dizi[0]) - parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;
    
            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';
        }
        else if(degisim==3){
            sonuc = parseInt(dizi[0]) * parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;
 

            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent ='';
        }
        else if(degisim==4){
            sonuc = parseInt(dizi[0]) / parseInt(dizi[1]);
            document.querySelector('.sayi2').textContent=sonuc;
    

            dizi=[];
            dizi= [sonuc];
            document.querySelector('.sayi').textContent =''; 
        }
    }
    document.querySelector('.sayi2').textContent=sonuc;
};
//ESİT-----
document.getElementById('esit').addEventListener("click", esitjs);
function esitjs(){

var sayi =document.querySelector('.sayi').textContent;
if (dizidegisim==1){
a = '+';
}
else if(dizidegisim==2){
a = '-';
}
else if(dizidegisim==3){
a = '*';
 }
else if(dizidegisim==4){
a = '/';
}
//---------------------


var deneme = sayi.slice(0,sayi.length);
    dizi.push(...[deneme]);
    document.querySelector('.sayi').textContent =''; 

    if(dizi[dizi.length-1]==''){
        dizi.pop();
    }
if(dizi.length=2){
    if(degisim==1){
        sonuc = parseInt(dizi[0]) + parseInt(dizi[1])
        document.querySelector('.sayi2').textContent=sonuc;
        document.querySelector('.sayi4').textContent=sonuc;

        dizi=[];
        dizi= [sonuc];
        document.querySelector('.sayi').textContent ='';  //sıfırlamak için hepsine koy
    }
    else if(degisim==2){
        sonuc = parseInt(dizi[0]) - parseInt(dizi[1]);
        document.querySelector('.sayi2').textContent=sonuc;
        document.querySelector('.sayi4').textContent=sonuc;
        dizi=[];
        dizi= [sonuc];
        document.querySelector('.sayi').textContent ='';  //sıfırlamak için hepsine koy
    }
    else if(degisim==3){
        sonuc = parseInt(dizi[0]) * parseInt(dizi[1]);
        document.querySelector('.sayi2').textContent=sonuc;
        document.querySelector('.sayi4').textContent=sonuc;
        dizi=[];
        dizi= [sonuc];
        document.querySelector('.sayi').textContent =''; 
    }
    else if(degisim==4){
        sonuc = parseInt(dizi[0]) / parseInt(dizi[1]);
        document.querySelector('.sayi2').textContent=sonuc;
        document.querySelector('.sayi4').textContent=sonuc;
        dizi=[];
        dizi= [sonuc];
        document.querySelector('.sayi').textContent =''; 
    }
}


document.querySelector('.sayi').textContent = '';
document.querySelector('.sayi2').textContent ='';
document.querySelector('.sayi3').textContent ='';
dizi=[];
sonuc=0;
}
