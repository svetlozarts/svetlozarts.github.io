function validate() {
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Hard-coded local user and password
    var localUsername = "Zpgeditmode@#95";
    var localPassword = "AdminP002213";
    
    // Compare entered username and password with local user and password
    if (username == localUsername && password == localPassword) {
        // Remove the overlay and show the page content if login is successful
        document.getElementById("overlay").style.display = "none";
        return false;
    } 
}