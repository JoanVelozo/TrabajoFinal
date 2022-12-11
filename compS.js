var boton=document.getElementById("boton")
boton.onclick=function(e){
    var usuario=prompt("Cúal es el precio del articulo?")
    var precio=parseInt(usuario)
    var san_nicolas=0
    var caba=800
    var precio_final
    precio_final= precio + san_nicolas
    precio_final=parseInt(precio_final)
    alert("Si vives en San Nicolas o al rededor de los 40km, tu valor estimado es de: $" + precio_final)

    var precio_final2
    precio_final2= precio + caba
    precio_final2=parseInt(precio_final2)
    alert("Si vives pasando el radio de los 40km, tu valor estimado es de: $" + precio_final2)
}