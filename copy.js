setInterval(() => {
    const website2 = localStorage.getItem("website2");
    if (website2) {
      document.getElementById("website1").innerHTML = website2;
    }
}, 1000);
