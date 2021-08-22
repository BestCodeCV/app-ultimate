var root1 = '/usuarios2';
var root2 = '/edificios2';
var datosByob = '/usuarios/byob2'
var datosLeones = '/usuarios/leones2'
var datosPraetorians = '/usuarios/praetorians2'
var datosKraken = '/usuarios/kraken2'
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
$('#btnByob').on( "click", function( event ) {
    $('#nombreClan').text("B.Y.O.B.")
    cargarDatos(datosByob)
  });
  $('#btnLeones').on( "click", function( event ) {
    $('#nombreClan').text("Leones Blancos")
    cargarDatos(datosLeones)
  });
  $('#btnKraken').on( "click", function( event ) {
    $('#nombreClan').text("Kraken")
    cargarDatos(datosKraken)
  });
  $('#btnPraetorians').on( "click", function( event ) {
    $('#nombreClan').text("Praetorians")
    cargarDatos(datosPraetorians)
  });
function bienesArca(nivel){
    let valor = parseInt(nivel)
    if(valor==1) return 9
    else if(valor==2) return 10
    else if(valor==3) return 12
    else if(valor==4) return 13
    else if(valor==5) return 15
    else if(valor==6) return 16
    else if(valor==7) return 18
    else if(valor==8) return 19
    else if(valor==9) return 21
    else if(valor==10) return 22
    else if(valor>10){
        return 22+2*(valor-10)
    }
}
function bienesObs(nivel){
    let valor = parseInt(nivel)
    if(valor==1) return 3
    else if(valor==2) return 4
    else if(valor==3) return 4
    else if(valor==4) return 5
    else if(valor==5) return 6
    else if(valor==6) return 6
    else if(valor==7) return 7
    else if(valor==8) return 7
    else if(valor==9) return 8
    else if(valor==10) return 8
    else if(valor>10){
        return 8+2*(valor-10)
    }
}
function bienesMirador(nivel){
    let valor = parseInt(nivel)
    if(valor==1) return 5
    else if(valor==2) return 10
    else if(valor==3) return 15
    else if(valor==4) return 20
    else if(valor==5) return 25
    else if(valor==6) return 30
    else if(valor==7) return 35
    else if(valor==8) return 40
    else if(valor==9) return 45
    else if(valor==10) return 50
    else if(valor==11) return 53
    else if(valor==12) return 55
    else if(valor==13) return 58
    else if(valor==14) return 60
    else if(valor==15) return 63
    else if(valor==16) return 65
    else if(valor==17) return 68
    else if(valor==18) return 70
    else if(valor==19) return 73
    else if(valor==20) return 75
    else if(valor==21) return 77
    else if(valor==22) return 80
    else if(valor==23) return 82
    else if(valor==24) return 85
    else if(valor==25) return 87
    else if(valor==26) return 90
    else if(valor==27) return 92
    else if(valor==28) return 95
    else if(valor==29) return 97
    else if(valor==30) return 99
    else if(valor==31) return 101
    else if(valor==32) return 103
    else if(valor==33) return 106
    else if(valor==34) return 108
    else if(valor==35) return 110
    else if(valor==36) return 112
    else if(valor==37) return 113
    else if(valor==38) return 115
    else if(valor==39) return 117
    else if(valor==40) return 119
    else if(valor==41) return 120
    else if(valor==42) return 122
    else if(valor==43) return 123
    else if(valor==44) return 125
    else if(valor==45) return 126
    else if(valor==46) return 127
    else if(valor==47) return 129
    else if(valor==48) return 130
    else if(valor==49) return 131
    else if(valor==50) return 132
    else if(valor==51) return 133
    else if(valor==52) return 134
    else if(valor==53) return 135
    else if(valor==54) return 136
    else if(valor==55) return 137
    else if(valor==56) return 138
    else if(valor==57) return 138
    else if(valor==58) return 139
    else if(valor==59) return 140
    else if(valor==60) return 140
    else if(valor==61) return 141
    else if(valor==62) return 141
    else if(valor==63) return 142
    else if(valor==64) return 142
    else if(valor==65) return 143
    else if(valor==66) return 144
    else if(valor==67) return 144
    else if(valor==68) return 144
    else if(valor==69) return 144
    else if(valor==70) return 145
    else if(valor==71) return 145
    else if(valor==72) return 145
    else if(valor==73) return 146
    else if(valor==74) return 146
    else if(valor==75) return 146
    else if(valor==76) return 146
    else if(valor==77) return 147
    else if(valor==78) return 147
    else if(valor==79) return 147
    else if(valor==80) return 147
    else if(valor>80){
        return 148
    }
}
function cargarDatos(url){
    $.ajax({
        url: url,
        method: 'GET',
        dataType: "json",
    }).then(function(data) {
        let valores = data.data
        var datos = []
        for (let i in valores) {
            let user = new Usuario(valores[i][0].toString().replace(/ /g,"").replace(/\s+/g,"").replace(",",""),valores[i][1],valores[i][2],valores[i][3],valores[i][4],valores[i][5],valores[i][6])
            datos.push(user)
        }
        datos =  datos.sort(function(a, b) {
            return parseInt(a.posicion.toString().replace(/ /g,"").replace(/\s+/g,"").replace(".",""))-parseInt(b.posicion.toString().replace(/ /g,"").replace(/\s+/g,"").replace(".",""))
        })
        $.ajax({
            url: root2,
            method: 'GET',
            dataType: "json",
        }).then(function(dat) {

            let pos = 1
            
            let vals = dat.data
            var datos2 = []
            for (let i in vals) {
                let user = new Edificios(vals[i][0],vals[i][1],vals[i][2],vals[i][3],vals[i][4],vals[i][5],vals[i][6],vals[i][7],vals[i][8],vals[i][9],vals[i][10])
                datos2.push(user)
            }
            let cM = 0
            let cB = 0
            let cAr = 0
            let cOb = 0
            let cMi = 0
            let cAl = 0
            let activos = 0
            let inactivos = 0
            let tableBody2=""
            for(let i in datos){
                cM+=1
                let total = 0
                let edificio1 = datos2.find(x=>x.id===datos[i].id && x.nombreGE==="Observatorio");
                let edificio2 = datos2.find(x=>x.id===datos[i].id && x.nombreGE==="El Arca")
                let edificio3 = datos2.find(x=>x.id===datos[i].id && x.nombreGE==="Mirador Estelar")
                let edificio4 = datos2.find(x=>x.id===datos[i].id && x.nombreGE==="Alcatraz")

                tableBody2 += `<div class="row mb-0 border border-secondary">`;
                tableBody2 += `<div class="col col-1 single-line">${datos[i].posicion}</div>`;
                if(datos[i].avance24>0) tableBody2 += `<div class="col col-2 single-line">${datos[i].nombre}</div>`;
                else tableBody2 += `<div class="col col-2 single-line bg-danger text-white">${datos[i].nombre}</div>`;
                tableBody2 += `<div class="col col-1 single-line">${datos[i].batallas}</div>`;
                tableBody2 += `<div class="col col-2 single-line">${datos[i].puntos}</div>`;
                if(edificio1!=null && typeof edificio1 != 'undefined'){
                    cOb+=1
                    total+=bienesObs(edificio1.nivel)
                    tableBody2 += `<div class="col col-1 single-line">${edificio1.nivel}</div>`;
                }
                else tableBody2 += `<div class="col col-1 mb-0 single-line bg-danger text-white">NO</div>`;
                if(edificio2!=null && typeof edificio2 != 'undefined'){
                    cAr+=1
                    total+=bienesArca(edificio2.nivel)
                    tableBody2 += `<div class="col col-1 single-line">${edificio2.nivel}</div>`;
                }
                else tableBody2 += `<div class="col col-1 single-line bg-danger text-white">NO</div>`;
                if(edificio3!=null && typeof edificio3 != 'undefined'){
                    cMi+=1
                    total+=bienesMirador(edificio3.nivel)
                    tableBody2 += `<div class="col col-1 single-line">${edificio3.nivel}</div>`;
                } 
                else tableBody2 += `<div class="col col-1 single-line bg-danger text-white">NO</div>`;
                if(edificio4!=null && typeof edificio4 != 'undefined'){
                    cAl+=1
                    tableBody2 += `<div class="col col-1 single-line">${edificio4.nivel}</div>`;
                }
                else tableBody2 += `<div class="col col-1 single-line bg-danger text-white">NO</div>`;
                tableBody2 += `<div class="col col-2 single-line">${total}</div>`;
                tableBody2 += `</div>`;
                cB+=total
                if(datos[i].avance24>0) activos+=1
                else inactivos+=1
                pos+=1
            }
            let resu = ""
            resu+=`<div>Total de miembros: ${cM}</div>`
            resu+=`<div>Total de bienes por día: ${cB}</div>`
            resu+=`<div># Arcas: ${cAr}</div>`
            resu+=`<div># Observatorios: ${cOb}</div>`
            resu+=`<div># Miradores Estelar: ${cMi}</div>`
            resu+=`<div># Alcatraces: ${cAl}</div>`
            resu+=`<div># Activos ultimas 24hrs: ${activos}</div>`
            resu+=`<div># Inactivos ultimas 24hrs: ${inactivos}</div>`
            document.getElementById("container").innerHTML = tableBody2;
            document.getElementById("resumen").innerHTML = resu;
        });
    });  
}
cargarDatos(datosByob)