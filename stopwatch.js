let minutes=0;
let seconds=0;
let tens=0;
let interval=0


//selectam fiecare button in parte din HTML
let buttonStart=document.getElementById("startButton");
let buttonStop=document.getElementById("stopButton");
let buttonReset=document.getElementById("resetButton");

//Pt fiecare buton in parte vom adauga cate un eveniment click, cand butonu este apasat, functia din interiorul {} se va executa
//pentru butonul start
buttonStart.addEventListener("click", ()=>{

clearInterval(interval)//se sterge intervalul setat anterior pentru a incepe un nou interval

interval=setInterval(setTime, 10)//seteaza un nou interval prin aplearea functiei setTime la fieca 10 milisecunde
})

buttonStop.addEventListener("click", ()=>{

    clearInterval(interval)//setergem intervaul setat anterior

})

buttonReset.addEventListener("click", ()=>{
  clearInterval(interval)//stergem intervalul setat anterior si resetam fiecare minut, secunda si milisecunda cu 0, inclusiv cele din HTML
  minutes=0;
  seconds=0;
  tens=0;
  document.getElementById("minutes").innerHTML="00";
  document.getElementById("seconds").innerHTML="00";
  document.getElementById("tens").innerHTML="00";

})



function setTime () {
 tens+=10
  if(tens===1000){
    tens=0;
    seconds++
  }
  if(seconds===60){
    seconds=0
    minutes++
  }


  //daca minutele, secundele si milisecundele sunt mai mici ca 10, atunci vom adauga un "0" in fata numarului pentru a pastra formatul de 00 si egalam apoi  el din HTML cu cele data de noi
  let tensstring=tens;
  let secondsstring=seconds;
  let minutesstring=minutes;
  if(minutes<10){
   
    minutesstring = "0" + minutesstring;

  }

  if(seconds < 10){
   
    secondsstring = "0" + secondsstring;
  }

  if(tens < 10){
    tensstring= "00" + tensstring;
    
  } else if (tens <100){
    tensstring= "0" + tensstring;
  }

  document.getElementById("minutes").innerHTML=minutesstring;
  document.getElementById("seconds").innerHTML=secondsstring;
  document.getElementById("tens").innerHTML=tensstring;


}
