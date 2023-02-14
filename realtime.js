let time = document.getElementById("time");

    
    setInterval(() => {
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString('it-IT', {hour12: false,});
    }, 1000);