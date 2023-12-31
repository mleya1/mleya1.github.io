document.cookie = "_title=DELETED; data=this page was deleted;";

function checkCookie() {
    let data = getCookie("data");
    document.getElementById("main").innerHTML = data
}