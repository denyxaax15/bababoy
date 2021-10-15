function sumNumber(){
    var fstnum= parseInt(document.getElementById("real1").value);
    var secnum= parseInt(document.getElementById("real2").value);
    var sum= fstnum + secnum;

    console.log(fstnum + secnum);
    window.alert("O resultado da soma foi " + sum);
};

function subNumber(){
    var fstnum= parseInt(document.getElementById("real1").value);
    var secnum= parseInt(document.getElementById("real2").value);
    var sub= fstnum - secnum;
    console.log(fstnum - secnum)
    window.alert("O resultado da subtração foi " + sub);
};

function divNumber(){
    var fstnum= parseInt(document.getElementById("real1").value);
    var secnum= parseInt(document.getElementById("real2").value);
    var div= fstnum / secnum;

    console.log(fstnum / secnum);
    window.alert("O resultado da divisão foi " + div);
};

function mulNumber(){
    var fstnum= parseInt(document.getElementById("real1").value);
    var secnum= parseInt(document.getElementById("real2").value);
    var mul= fstnum * secnum;

    console.log(fstnum * secnum);
    window.alert("O resultado da multiplicação foi " + mul);
};