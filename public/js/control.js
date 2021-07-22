//var root1 = 'http://localhost:3000/usuarios';
//var root2 = 'http://localhost:3000/edificios';
var root1 = 'https://app-ultimate.herokuapp.com/usuarios';
var root2 = 'https://app-ultimate.herokuapp.com/edificios';

class Usuario{
    constructor(posicion, avatar, nombre, puntos, batallas, id, avance24){
        this.posicion = posicion
        this.avatar = avatar
        this.nombre = nombre
        this.puntos = puntos
        this.batallas = batallas
        this.id = id;
        this.avance24 = avance24
    }
}
class Edificios{
    constructor(posicion, avatar, nombreUsuario, era, era2, nombreGE, nivel, pfActual, pfTotal, id, pfFaltante){
        this.posicion = posicion
        this.avatar = avatar
        this.nombreUsuario = nombreUsuario
        this.era = era
        this.era2 = era2
        this.nombreGE = nombreGE;
        this.nivel = nivel
        this.pfActual = pfActual
        this.pfTotal = pfTotal
        this.id = id;
        this.pfFaltante = pfFaltante
    }
}
$.ajax({
    url: root1,
    method: 'GET',
    dataType: "json",
}).then(function(data) {
    let pos = 1
    let valores = data.data
    var datos = []
    for (let i in valores) {
        let user = new Usuario(valores[i][0],valores[i][1],valores[i][2],valores[i][3],valores[i][4],valores[i][5],valores[i][6])
        datos.push(user)
    }
    datos =  datos.sort(function(a, b) {
        return a.posicion-b.posicion
    })
    let tableBody=""
    for(let i in datos){
           tableBody += `<div class="row mb-3">`;
           tableBody += `<div class="col col-1 single-line">${pos}</div>`;
           tableBody += `<div class="col col-4 single-line">${datos[i].nombre}</div>`;
           tableBody += `<div class="col col-3 single-line">${datos[i].batallas}</div>`;
           tableBody += `<div class="col col-4 single-line">${datos[i].puntos}</div>`;
           tableBody += `</div>`;
           pos+=1
    }
    console.log(datos)
    document.getElementById("contenedor").innerHTML += tableBody;
    //aqui empieza otro 
    $.ajax({
        url: root2,
        method: 'GET',
        dataType: "json",
    }).then(function(dat) {
        let vals = dat.data
        var datos2 = []
        for (let i in vals) {
            let user = new Edificios(vals[i][0],vals[i][1],vals[i][2],vals[i][3],vals[i][4],vals[i][5],vals[i][6],vals[i][7],vals[i][8],vals[i][9],vals[i][10])
            datos2.push(user)
        }
        let tableBody2=""
        for(let i in datos){
            let edificio1 = datos2.find(x=>x.id===datos[i].id && x.nombreGE==="Observatorio");
            let edificio2 = datos2.find(x=>x.id===datos[i].id && x.nombreGE==="El Arca")
            let edificio3 = datos2.find(x=>x.id===datos[i].id && x.nombreGE==="Alcatraz")
            tableBody2 += `<div class="row mb-3">`;
            if(edificio1!=null && typeof edificio1 != 'undefined') tableBody2 += `<div class="col">${edificio1.nivel}</div>`;
            else tableBody2 += `<div class="col">NO</div>`;
            if(edificio2!=null && typeof edificio2 != 'undefined') tableBody2 += `<div class="col">${edificio2.nivel}</div>`;
            else tableBody2 += `<div class="col">NO</div>`;
            if(edificio3!=null && typeof edificio3 != 'undefined') tableBody2 += `<div class="col">${edificio3.nivel}</div>`;
            else tableBody2 += `<div class="col">NO</div>`;
            tableBody2 += `<div class="col"></div>`;
            tableBody2 += `</div>`;
        }
        document.getElementById("contenedor2").innerHTML += tableBody2;
    });
});