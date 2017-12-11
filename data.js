locked = true;

var state = document.getElementById("state");
function getLocation() {

    if (state.innerText == "Computer Unlocked") {
        return
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(validateLocation);
    } else {
        state.innerText = "Geolocation is not supported by this browser.";
    }
}

function validateLocation(position) {

    var comp_lat = 38.03;
    var comp_long = -30;

    if (Math.abs(comp_lat-position.coords.latitude) > .25 || Math.abs(comp_long-position.coords.longitude) > .25) {
        state.innerText = "Geolocation failure";
    }

    else {
        state.innerText = "Computer Unlocked";
        document.getElementById("logout").style.visibility = "visible";
        document.getElementById("login").style.visibility = "hidden";
        document.getElementById("state2").style.visibility = "hidden";
        login();
    }
}



function logout(){
    window.open("https://www.tenforums.com/attachments/customization/26003d1485953070t-customize-windows-10-log-log-off-screen-off.png", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");
    state.innerText = "Unlock Computer";
    document.getElementById("logout").style.visibility = "hidden";
    document.getElementById("login").style.visibility = "visible";
    document.getElementById("state2").style.visibility = "visible";


}

function login(){
    window.open("https://fthmb.tqn.com/sCPVYnhEJiqZZzpk0E4DngmtCIk=/1024x768/filters:fill(auto,1)/windows-7-post-login-welcome-56a6f8b65f9b58b7d0e5c101.jpg", "_blank", "location=yes,height=570,width=520,scrollbars=yes,status=yes");

}
