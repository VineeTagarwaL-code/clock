
calculateTime = () =>{
    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm= hour <=12 ? 'AM': 'PM';
    var dayNames = ["SUN", "MON", "TUE", "WED", "THU","FRI", "SAT"];
   
   

    hour=hour%12;
    hour = hour ? hour : '12';
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  

  document.querySelector("#day").textContent = dayNames[dayNumber];
  document.querySelector("#hour").textContent = hour;
  document.querySelector("#sec").textContent=seconds;
  document.querySelector("#minute").textContent = minutes;
  document.querySelector("#ampm").textContent = ampm;

  setTimeout(calculateTime, 200);
}

window.addEventListener('load', calculateTime)
