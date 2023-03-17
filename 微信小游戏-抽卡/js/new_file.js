function showPage2()
{
document.getElementById("div1").style.display="none";
document.getElementById("div2").style.display="block";
}

function showPage3()
{
document.getElementById("div2").style.display="none";
document.getElementById("div3").style.display="block";
}

function showPage4(num)
{
document.getElementById("div3").style.display="none";
document.getElementById("div4").style.display="block";
if(num==1){
	document.getElementById("div4").style.backgroundImage="url(img/charm1.jpg)";
}else if(num==2){
	document.getElementById("div4").style.backgroundImage="url(img/charm2.jpg)";
}else if(num==3){
	document.getElementById("div4").style.backgroundImage="url(img/charm3.jpg)";
}else if(num==4){
	document.getElementById("div4").style.backgroundImage="url(img/charm4.jpg)";
}else if(num==5){
	document.getElementById("div4").style.backgroundImage="url(img/charm5.jpg)";
}else if(num==6){
	document.getElementById("div4").style.backgroundImage="url(img/charm6.jpg)";
}else if(num==7){
	document.getElementById("div4").style.backgroundImage="url(img/charm7.jpg)";
}
}

function  back()
{
document.getElementById("div4").style.display="none";
document.getElementById("div3").style.display="block";	
}
