let time = document.getElementById("time");

    
    setInterval(() => {
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString([], {hour12: false,});
    }, 1000);