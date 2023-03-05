function locfunc(event) {
    event.preventDefault();

    var website = document.getElementById("web").value;
    var pwd = document.getElementById("pwd").value;

    localStorage.setItem('ls_website', web)
    localStorage.setItem('ls_pwd',pwd)
}