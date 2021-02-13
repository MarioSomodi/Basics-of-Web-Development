function myContactValidator() {
    var txt, txt1, txt2, txt3 = "";
    if (document.getElementById("name").value == "") {
        txt = "Niste upisali ime!";
    }
    else {
        txt="";
    }
    document.getElementById("msg1").innerHTML = txt;

    if (document.getElementById("email").value == "") {
        txt1 = "Niste upisali email!";
        
    }
    else {
        txt1="";
    }
    document.getElementById("msg2").innerHTML = txt1;

    if (document.getElementById("poruka").value == "") {
        txt2 = "Niste upisali poruku!";
    }
    else {
        txt="";
    }
    document.getElementById("msg3").innerHTML = txt2;

}

