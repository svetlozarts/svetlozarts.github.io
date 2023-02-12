document.addEventListener("keydown", function(event) {
    if (event.shiftKey && event.key === "S") {
        const website2 = document.getElementById("website2").innerHTML;
        localStorage.setItem("website2", website2);
    }
  });