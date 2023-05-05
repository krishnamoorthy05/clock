
// CLOCK -------------------------------------------

setInterval(settime,1000)
var hr=document.getElementById("hr")
var mi=document.getElementById("min")
var se=document.getElementById("sec")
var a=document.getElementById("ampm")

function settime(){
    var date=new Date()
    var hour=date.getHours()
    var min=date.getMinutes()
    var sec=date.getSeconds()
    var opt=document.getElementById("select").value
if(opt=="12"){                                      // for 12 hours format
    if(hour<10){
        hour='0'+hour
        hr.textContent=hour
    }
    else if(hour>=12){
        hour=hour-12
        if(hour<10){
        hour='0'+hour
        }
        hr.textContent=hour
        a.textContent="PM"
        }
   else if(hour==0){
    hour=12
    hr.textContent=hour
   }
    if(min<10){
        min='0'+min
        mi.textContent=min
    }
    if(sec<10){
        sec='0'+sec
        se.textContent=sec
    }
}
else{                                      // for 24 hours format

    if(hour<10){
        hour='0'+hour
        hr.textContent=hour
    }

    if(min<10){
        min='0'+min
        mi.textContent=min
    }
    if(sec<10){
        sec='0'+sec
        se.textContent=sec
    }
}
    hr.textContent=hour
    mi.textContent=min 
    se.textContent=sec   
} 
