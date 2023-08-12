
let time = false;
let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let s_str = "0";
let h_str = "0";
let m_str = "0";
let ms_str = "0";
let counter = 0;
let r =0;

window.addEventListener("keydown",(Pressedkeys)=>{
    if(Pressedkeys.key == " "){

        Pressedkeys.preventDefault();
        spcae(Pressedkeys.key);
    }
});

function spcae(spcae){  
    if(spcae ==" "){
        if(counter % 2 == 0 ){
            start();     
        }
        else {
            stop();
        }
    }
}

function start() {
    if (!time) {
        time = true;
        counter++;
        stopwatch();
    }
}

function stop() {
    if(time){
        counter++
        time = false;
    }
}

function reset() {
    time = false;
    m = s = h = ms = counter =0;
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("ms").innerHTML = "00";
}

function stopwatch() {
    if (time) {
        if (ms > 99) {
            s++;
            ms = 0;
            s_str = s.toString();
            s_str = s_str.padStart(2, "0");
            document.getElementById("sec").innerHTML = s_str;
        }
        if (s >60) {
            m++;
            s = 0;
            m_str = m.toString();
            m_str = m_str.padStart(2, "0");
            document.getElementById("min").innerHTML = m_str;
        }
        if (m > 60) {
            h++;
            m = 0;
            h_str = h.toString();
            h_str = h_str.padStart(2, "0");;
            document.getElementById("hr").innerHTML = h_str;
        }
        ms++;
        ms_str = ms.toString();
        ms_str = ms_str.padStart(2, "0");
        document.getElementById("ms").innerHTML = ms_str;
        setTimeout(stopwatch, 10);
    }
}