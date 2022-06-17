let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

// calls a function at specified intervals
setInterval(() => {
    let day = new Date();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    // make max hh mm ss = 360 degrees for rotation
    let hh = h * 30;
    let mm = m * 6;
    let ss = s * 6;
    
    console.log(day + " -- " + hh + " -- " + mm + " -- " + ss);
    
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // digital clock
    let hours = document.querySelector("#hour");
    let minutes = document.querySelector("#minute");
    let seconds = document.querySelector("#second");
    let am_pm = document.querySelector("#am_pm");

    let am_or_pm = "";
    if(h > 12){
        am_or_pm = "PM";
    }
    else {
        am_or_pm = "AM";
    }

    // convert 24 hr to 12 hr clock
    if(h > 12){
        h -= 12;
    }

    // add 0 before single digit number
    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s = "0" + s;
    }

    // h, m, s are obtained above
    hours.innerHTML =  h;
    minutes.innerHTML =  m;
    seconds.innerHTML =  s;
    am_pm.innerHTML = am_or_pm;
})

