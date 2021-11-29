function mostrarResultado() {
    console.log("resultado")                
    var p1, p2, p3, p4, p5;                
    if (document.getElementById('preg11').checked==true) {p1=1}
    else {p1=0}
    if (document.getElementById('preg24').checked==true) {p2=1}
    else {p2=0}
    if (document.getElementById('preg34').checked==true) {p3=1}
    else {p3=0}
    if (document.getElementById('preg42').checked==true) {p4=1}
    else {p4=0}
    if (document.getElementById('preg54').checked==true) {p5=1}
    else {p5=0}
    
    const nota=(p1+p2+p3+p4+p5)*20;

    if (nota==0){
        alert('Tu puntaje fue: ' + nota + '\n' + 'Intentado de nuevo \n¡Vamos! Sabes que puedes hacerlo mejor.  \nRepasa nuevamente la información y podrás obtener un mejor puntaje.');
    } else if (nota==20){
        recom=' \n¡Vamos! \nSolo obtuviste una respuesta correcta, yo sé que puedes mejorar.';
    } else if (nota==40){
        recom='Casi obtuviste la mitad \n¡Tú puedes! \nVuelve a intentarlo';
    } else if (nota==60){
        recom='Bien hecho pasaste de la mitad \nAcertaste la mayor parte \n¡Vamos!, no te detengas, ¡tú puedes!';
    } else if (nota==80){
        recom='¡Casi lo logras!  \n¡Vamos! Un error no te hace tan malo. \nInténtalo una vez más.';
    } else if (nota==100){
        recom='¡Felicidades! \nTus habilidades se han visto reflejadas en tu calificación. \nSigue así';
    }

    alert('Tu puntaje fue: ' + nota + '\n' + recom);

    document.getElementById("rcP1").innerHTML = "<button align: center>Respuesta correcta: Definitiva</button>";
    document.getElementById("rcP2").innerHTML = "<button align: center>Respuesta correcta: Independientes</button>";
    document.getElementById("rcP3").innerHTML = "<button align: center>Respuesta correcta: Metas</button>";
    document.getElementById("rcP4").innerHTML = "<button align: center>Respuesta correcta: No debería</button>";
    document.getElementById("rcP5").innerHTML = "<button align: center>Respuesta correcta: Disminuye</button>";

}