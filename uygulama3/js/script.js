var sinir = 0;
var dizi = [];
var dizisembol = [];
document.getElementById('num0').addEventListener("click", numjs0);
function numjs0(){
    sinir=0;
    document.querySelector('.sayi').textContent+=0;
}
document.getElementById('num1').addEventListener("click", numjs1);
function numjs1(){
    sinir=0;
    document.querySelector('.sayi').textContent+=1;
}
document.getElementById('num2').addEventListener("click", numjs2);
function numjs2(){
    sinir=0;
    document.querySelector('.sayi').textContent+=2;
}
document.getElementById('num3').addEventListener("click", numjs3);
function numjs3(){
    sinir=0;
    document.querySelector('.sayi').textContent+=3;
}
document.getElementById('num4').addEventListener("click", numjs4);
function numjs4(){
    sinir=0;
    document.querySelector('.sayi').textContent+=4;
}
document.getElementById('num5').addEventListener("click", numjs5);
function numjs5(){
    sinir=0;
    document.querySelector('.sayi').textContent+=5;
}
document.getElementById('num6').addEventListener("click", numjs6);
function numjs6(){
    sinir=0;
    document.querySelector('.sayi').textContent+=6;
}
document.getElementById('num7').addEventListener("click", numjs7);
function numjs7(){
    sinir=0;
    document.querySelector('.sayi').textContent+=7;
}
document.getElementById('num8').addEventListener("click", numjs8);
function numjs8(){
    sinir=0;
    document.querySelector('.sayi').textContent+=8;
}
document.getElementById('num9').addEventListener("click", numjs9);
function numjs9(){
    sinir=0;
    document.querySelector('.sayi').textContent+=9;
}
document.getElementById('numsil').addEventListener("click", numsiljs);
function numsiljs(){
    //Back space----------------
    sinir=0;
    var sayi = document.querySelector('.sayi').textContent;
    if(sayi.charAt(sayi.length-1)==' '){
    document.querySelector('.sayi').textContent = sayi.slice(0,sayi.length-3);
    }
    else
    document.querySelector('.sayi').textContent = sayi.slice(0,sayi.length-1);
}
document.getElementById('sil').addEventListener("click", siljs);
function siljs(){
    document.querySelector('.sayi').textContent='';
    document.querySelector('.sayi3').textContent='';
    sinir=0;
    dizi = [];
    dizisembol = [];
}
document.getElementById('nokta').addEventListener("click", noktajs);
function noktajs(){
    sinir=0;
    document.querySelector('.sayi').textContent+='.';
}

//İşaretler---------------------------------------------------------------
document.getElementById('plus').addEventListener("click", plusjs);
function plusjs(){ 
    var sayi=document.querySelector('.sayi').textContent;
    if(sinir==0 && sayi.length!=0){
    document.querySelector('.sayi').textContent+=' + ';
    sinir=1;
    }
};
//çıkarmaaa
document.getElementById('minus').addEventListener("click", minusjs);
function minusjs(){ 
    var sayi=document.querySelector('.sayi').textContent;
    if(sinir==0 && sayi.length!=0){
        document.querySelector('.sayi').textContent+=' - ';
        sinir=1;
        }
};
document.getElementById('cross').addEventListener("click", crossjs);
function crossjs(){ 
    var sayi=document.querySelector('.sayi').textContent;
    if(sinir==0 && sayi.length!=0){
        document.querySelector('.sayi').textContent+=' * ';
        sinir=1;
        }
};
document.getElementById('slash').addEventListener("click", slashjs);
function slashjs(){ 
    var sayi=document.querySelector('.sayi').textContent;
    if(sinir==0 && sayi.length!=0){
        document.querySelector('.sayi').textContent+=' / ';
        sinir=1;
        }
};
//ESİT-----
document.getElementById('esit').addEventListener("click", esitjs);
function esitjs(){
//işlemler üst üste binmesin diye önlem.
    sinir=0;
//sayılar diziye atıldı
    var sayi = document.querySelector('.sayi').textContent;
    dizi = sayi.split(' ');
    console.log('ilk dizi'+dizi);
//-------bitti
//sembolleri diğer diziye aktarma.
for(let i=0; i<dizi.length;i++){
if(dizi[i]=='+'||dizi[i]=='-'||dizi[i]=='*'||dizi[i]=='/')
{
dizisembol.push(dizi[i]);
console.log('semboldizi' + dizisembol);    
dizi.splice(i,1);
console.log('yenidizi son hali' + dizi);
}}
var uzunluk= dizi.length;
//-------bitti
for(let i=0;i<uzunluk-1;i++)
{
     if(dizisembol[0]=='+'){var sonuc = parseFloat(dizi[0]) + parseFloat(dizi[1]);
        dizisembol.splice(0,1);}
else if(dizisembol[0]=='-'){var sonuc = parseFloat(dizi[0]) - parseFloat(dizi[1]);
        dizisembol.splice(0,1);}
else if(dizisembol[0]=='*'){var sonuc = parseFloat(dizi[0]) * parseFloat(dizi[1]);
        dizisembol.splice(0,1);}
else if(dizisembol[0]=='/'){var sonuc = parseFloat(dizi[0]) / parseFloat(dizi[1]);
        dizisembol.splice(0,1);}

    console.log(sonuc);
    dizi.splice(0,2);
    console.log(dizi);
    dizi.splice(0,0,sonuc);
    console.log(dizi);
    document.querySelector('.sayi3').textContent=dizi[0];


}    
document.querySelector('.sayi').textContent='';
sinir=0;
dizi = [];
dizisembol = [];
}
