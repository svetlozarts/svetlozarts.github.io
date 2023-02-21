var startTimes = ["07:30", "08:10", "08:20", "09:00", "09:10", "09:50", "10:15", "10:55", "11:05", "11:45", "11:55", "12:35", "12:40", "13:20"];
var countdownElement = document.getElementById("timer");
var predmet = 0;

    function getNextStartTime(now) {
      var startTime = new Date();
      for (var i = 0; i < startTimes.length; i++) {
        var [hour, minute] = startTimes[i].split(":");
        startTime.setHours(hour, minute, 0, 0);
        if (startTime.getTime() >= now.getTime()) {
          return startTime;
        }
      }
      return null;
    }

    function isClassTime() {
      var now = new Date();
      var nextStartTime = getNextStartTime(now);
      var index = startTimes.indexOf(`${nextStartTime.getHours().toString().padStart(2, "0")}:${nextStartTime.getMinutes().toString().padStart(2, "0")}`);
      predmet = Math.floor(index / 2);
      return index % 2 === 0;
    }

    function updateCountdown() {
      var now = new Date();
      var startTime = getNextStartTime(now);

      time.innerHTML = now.toLocaleTimeString([], {hour12: false,});

      if (!startTime) {
        countdownElement.innerHTML = "40:00";
        countdownElement.style.color = "#009DFF";
        countdownElement.style.textShadow = "none";
        return;
      }
      var timeRemaining = startTime.getTime() - now.getTime();
      var minutesRemaining = Math.floor(timeRemaining / 1000 / 60);
      var secondsRemaining = Math.floor((timeRemaining / 1000) % 60);

      countdownElement.innerHTML = minutesRemaining.toString().padStart(2, "0") + ":" + secondsRemaining.toString().padStart(2, "0");

      if (isClassTime()) {
        countdownElement.style.color = "lime";
        countdownElement.style.textShadow = "1px 1px 5px black";
      } else {
        countdownElement.style.color = "red";
        countdownElement.style.textShadow = "1px 1px 5px white";
      }
    }
   
    updateCountdown();
    setInterval(updateCountdown, 1000);