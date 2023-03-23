//stirng lenght
function length()
{
let count =String(document.getElementById("text").value);
let length =count.length;
document.getElementById("demo1").innerHTML=length;
}

//strig slice

function slice()
{
    let count1 = String(document.getElementById("textslice").value);
    let a =Number(document.getElementById("first-slice").value);
    let b =Number(document.getElementById("end-slice").value);
    let c =count1.slice(a,b);
    document.getElementById("demo2").innerHTML=c;
}


//string substr
function str()
{
let str =String(document.getElementById("textstr").value);
let a= Number(document.getElementById("Firstslc").value);
let b= Number(document.getElementById("Endslc").value);
let c=str.substring(a,b);
document.getElementById("demo3").innerHTML=c;
}


//replacing string content
function replaceme()
{
    let count =String(document.getElementById("replace").value);
    let a= String(document.getElementById("firstword").value);
    let b = String(document.getElementById("secondword").value);
    let c= count.replace(a,b);
document.getElementById("demo4").innerHTML=c;
}


//replace all
function replaceall()
{
    let count =String(document.getElementById("replace-all").value);
    let a= String(document.getElementById("first-para").value);
    let b = String(document.getElementById("second-para").value);
    let c= count.replaceAll(a,b);
document.getElementById("demo5").innerHTML=c;
}

//text upper case
function textupper()
{
let count =String(document.getElementById("textcase").value)
let textupper =count.toUpperCase();
document.getElementById("demo6").innerHTML=textupper;
}
// text lower case 
function textlower()
{
let count =String(document.getElementById("textcase").value)
let textlower =count.toLowerCase();
document.getElementById("demo7").innerHTML=textlower;
}

//concat
function concatword()
{

let a = String(document.getElementById("first concat").value);
let b = String(document.getElementById("second concat").value);
let c = a.concat("",b);
document.getElementById("demo8").innerHTML=c;

}


// trim
function trimword()
{
    let text1 =String(document.getElementById("trim").value);
let text2 = text1.trim();
let c = "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
document.getElementById("demo9").innerHTML= text2
document.getElementById("demo10").innerHTML= c
}

//trim start
function trimstart()
{
    let text1 =String(document.getElementById("trim").value);
let text2 = text1.trimStart();
let c ="Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
document.getElementById("demo9").innerHTML =text2
document.getElementById("demo9").innerHTML =c

}

//trim end
function trimend()
{
    let text1 =String(document.getElementById("trim").value);
let text2 = text1.trimEnd();
let c ="Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;
document.getElementById("demo11").innerHTML =text2
document.getElementById("demo11").innerHTML =c
}

//padding start
 function paddingstart()
 {
    let count=String(document.getElementById("paddingstart").value);
    let a=Number(document.getElementById("padword").value);
    let b=String(document.getElementById("padtext").value);
    let c=count.padStart(a,b);
    document.getElementById("demo12").innerHTML=c;
}

//padding end
function paddingend()
{
   let count=String(document.getElementById("paddingstart").value);
   let a=Number(document.getElementById("padword").value);
   let b=String(document.getElementById("padtext").value);
   let c=count.padEnd(a,b);
   document.getElementById("demo12").innerHTML=c;
}