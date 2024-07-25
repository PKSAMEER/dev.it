function sidebar() {
    const xyz = document.querySelector(".sidebar")
    xyz.style.display = 'flex';
}
function band() {
    const xyz = document.querySelector(".sidebar")
    xyz.style.display = 'none';
}
function funone() {
    let x = document.getElementById("name1").value;
    let y = document.getElementById("vld1");

    if (x.length == 0) {
        y.innerHTML = 'please fill the field.';
        y.style.color = 'red';
        return false;
    }
    else {
        y.innerHTML = '';
    }

}
function funtwo() {
    let x = document.getElementById("name2").value;
    let y = document.getElementById("vld2");

    if (x.length == 0) {
        y.innerHTML = 'please fill the field.';
        y.style.color = 'red';
        return false;
    }
    else {
        y.innerHTML = '';
    }

}

function funthree() {
    let x = document.getElementById("phno1").value;
    let y = document.getElementById("vld3");

    if (x.length < 10) {
        y.innerHTML = 'please give a valid phone no.';
        y.style.color = 'red';
        return false;
    }
    else {
        y.innerHTML = '';
    }

}

function subm() {
    let x = document.getElementById("em1").value;
    let y = document.getElementById("vld4");

    if (!x.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        y.innerHTML = 'please give a valid email id.';
        y.style.color = 'red';
        return false;
    }
    else {
        y.innerHTML = '';
    }

}

function funfive() {
    let x = document.getElementById("msg1").value;
    let y = document.getElementById("vld5");

    if (x.length < 25) {
        y.innerHTML = 'please describe it properly in more detail.';
        y.style.color = 'red';
        return false;
    }
    else {
        y.innerHTML = '';
    }
}