

function datoemergente(){
    alert("Curriculum Vitae de Oscar Steeves");
}

function ejecuta() {
    document.getElementsByTagName("img")[0].onclick = datoemergente;
}

document.getElementById("p1").addEventListener("mouseover", function(){
    document.getElementById("p1").style.backgroundColor = 'lightblue';
})

document.getElementById("p1").addEventListener("mouseout", function(){
    document.getElementById("p1").style.backgroundColor = 'white';
})

document.getElementById("p2").addEventListener("mouseover", function(){
    document.getElementById("p2").style.backgroundColor = 'lightblue';
})

document.getElementById("p2").addEventListener("mouseout", function(){
    document.getElementById("p2").style.backgroundColor = 'white';
})
document.getElementById("p3").addEventListener("mouseover", function(){
    document.getElementById("p3").style.backgroundColor = 'lightblue';
})

document.getElementById("p3").addEventListener("mouseout", function(){
    document.getElementById("p3").style.backgroundColor = 'white';
})
document.getElementById("p4").addEventListener("mouseover", function(){
    document.getElementById("p4").style.backgroundColor = 'lightblue';
})

document.getElementById("p4").addEventListener("mouseout", function(){
    document.getElementById("p4").style.backgroundColor = 'white';
})

window.onload=ejecuta;