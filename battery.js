const BattryLevel = document.querySelector(".battry");  
navigator.getBattery().then(function (battery) {  
 const level = battery.level;  
const status = level*100+"%";  
 BattryLevel.innerHTML =  status;
 const img=document.querySelector(".image")
 if(level<0.05){
    document.querySelector(".battry").style.backgroundColor="red";
    document.querySelector(".battry").style.width=status; 
    img.src="blank.jpg"
    document.body.appendChild(img);
    
   }    

   if(level>0.05&level<0.25 ){
    document.querySelector(".battry").style.backgroundColor="red";
    document.querySelector(".battry").style.width=status; 
    document.querySelector(".battry").style.padding="0px"; 
    img.src="1.jpg"
    document.body.appendChild(img);
    
   }
 if(level>0.25&level<0.50){
 document.querySelector(".battry").style.backgroundColor="rgb(69, 212, 69)";
 document.querySelector(".battry").style.width=status; 
 document.querySelector(".battry").style.padding="0px"; 
 img.src="2.jpg"
 document.body.appendChild(img);
 
}
if(level>0.50&level<0.75){
  document.querySelector(".battry").style.backgroundColor="rgb(27, 179, 27)";
  document.querySelector(".battry").style.width=status; 
  document.querySelector(".battry").style.padding="0px"; 
  img.src="3.jpg"
  document.body.appendChild(img);
  
 }
if(level>0.75&level<0.95){
  document.querySelector(".battry").style.backgroundColor="rgb(11, 160, 11)";
  document.querySelector(".battry").style.width=status; 
  document.querySelector(".battry").style.padding="0px"; 
  img.src="4.jpg"
  document.body.appendChild(img);
  
 }
if(level>0.95){
  document.querySelector(".battry").style.backgroundColor="rgb(2, 138, 2)";
  document.querySelector(".battry").style.width=status; 
  document.querySelector(".battry").style.padding="0px"; 
  img.src="full.png"
  document.body.appendChild(img);
  
 }
})
 
 
     
 