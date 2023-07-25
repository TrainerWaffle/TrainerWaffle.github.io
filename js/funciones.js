function advertir(){
    alert("¡No te vayas!")
}

function saludopersonalizado(){
    var name;
    var edad;
    name=prompt("Escribe tu nombre:")
    edad=prompt("Escribe tu edad:")
    alert("¡Hola! "+name+", yo también tengo"  +edad+  "años")

}
function adivinar1(){
    var res=0;
    res=prompt("¿Cuánto es 10x10?")
    // Respuesta //
    if(res==100){
        alert("Felicidades, eres un genio!")
    }
    // Respuesta incorrecta//
    else{
        alert("Eres un burro!")
    }
}

function adivinar2(){
    var res=
    res=prompt("¿Si hoy es lunes, qué día será el proximo lunes?")
    // Respuesta //
    if(res=="lunes"){
        alert("Felicidades, eres un genio!")
    }
    // Respuesta incorrecta//
    else{
        alert("Buuu!")
    }
}

function adivinar3(){
    var res=
    res=prompt("¿4+4?")
    // Respuesta //
    if(res=="Pez"){
        alert("Efectivamente, es pez!")
    }
    // Respuesta incorrecta//
    else{
        alert("Buuurroooo!")
    }
}