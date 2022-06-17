let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

// calls a function at specified intervals
setInterval(() => {
    let day = new Date();
    // make max hh mm ss = 360 degrees for rotation
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    
    console.log(day + " -- " + hh + " -- " + mm + " -- " + ss);
    
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
})

