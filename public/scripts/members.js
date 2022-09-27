import {getBabel, getFaro, getSanMarcos, getGalata, getMuseo, getDresden, getRoyal, getBosque, getOrca, getNucleo, getOtomium, getMirador, getObservatorio} from '../scripts/gesDB.js'
import {Member, Ge} from '../models/modelo.js'
import {loadTotal, loadBienes, loadGremio, loadAnterior, loadResume} from '../scripts/membersHTML.js'
const dataMembers = '/api/members'
let nameBienes = ["Torre de Babel", "Faro de Alejandría", "Basílica de San Marcos", "Torre Galata", "Museo de la Atlántida", "Dresden Frauenkirche", "Royal Albert Hall", "Proyecto Bosque de Lluvia"]
let nameGremios = ["Observatorio", "Núcleo de I. A.", "El Arca", "Atomium"]
let nameAnterior = ["Mirador Estelar"]

// TIPO 1 = Bienes
// Tipo 2 = gremio 
// Tipo 3 = anterior

function loadData(url, option){
    $.ajax({
        url: url,
        method: 'GET',
        dataType: "json",
    }).then(function(data) {
        let members = []
        for(let i in data){
            let member = new Member()
            let ges = []
            member.nombre = data[i][2].responseData[0].player.name
            for(let j in data[i][2].responseData){
                if(comprobate(data[i][2].responseData[j].name)){
                    let ge = new Ge()
                    ge = createGe(data[i][2].responseData[j].name, data[i][2].responseData[j].level)
                    ges.push(ge)
                }
            }
            member.ges = ges
            member.totalBienes = total(ges, 1)
            member.totalGremio = total(ges, 2)
            member.totalAnterior = total(ges, 3)
            members.push(member)
        }
        console.log(data)
        console.log(members)
        if(option==1){
            $('#containerMembers').html(loadAnterior(members))
        }else if(option==2){
            $('#containerMembers').html(loadGremio(members))
        }else if(option==3){
            $('#containerMembers').html(loadBienes(members))
        }
    });  
}
function total(ges, tipo){
    let x = 0
    for(let i=0; i<ges.length; i++){
        if(ges[i].tipo == tipo) x+=ges[i].bienes
    }
    return x
}
function comprobate(name){
    let boo = false
    for(let i=0; i<nameBienes.length; i++){
        if(nameBienes[i]==name) boo = true
    }
    for(let i=0; i<nameGremios.length; i++){
        if(nameGremios[i]==name) boo = true
    }
    for(let i=0; i<nameAnterior.length; i++){
        if(nameAnterior[i]==name) boo = true
    }
    return boo
}

function createGe(name, level){
    let ge = new Ge()
    ge.nombre = name
    ge.nivel = level
    if(isBienes(name)){
        ge.tipo = 1
        if(name == nameBienes[0]) ge.bienes = getBabel(level)*2
        else if(name == nameBienes[1]) ge.bienes = getFaro(level)*2
        else if(name == nameBienes[2]) ge.bienes = getSanMarcos(level)*2
        else if(name == nameBienes[3]) ge.bienes = getGalata(level)*2
        else if(name == nameBienes[4]) ge.bienes = getMuseo(level)*2
        else if(name == nameBienes[5]) ge.bienes = getDresden(level)*2
        else if(name == nameBienes[6]) ge.bienes = getRoyal(level)*2
        else if(name == nameBienes[7]) ge.bienes = getBosque(level)*2
    }else if(isGremio(name)){
        ge.tipo = 2
        if(name == nameGremios[0]) ge.bienes = getObservatorio(level)
        else if(name == nameGremios[1]) ge.bienes = getNucleo(level)
        else if(name == nameGremios[2]) ge.bienes = getOrca(level)
        else if(name == nameGremios[3]) ge.bienes = getOtomium(level)
    }else if(isAnterior(name)){
        ge.tipo = 3
        ge.bienes = getMirador(level)
    }

    
    return ge
}
function isBienes(name){
    let boo = false
    for(let i=0; i<nameBienes.length; i++){
        if(name == nameBienes[i]) boo = true
    }
    return boo
}
function isGremio(name){
    let boo = false
    for(let i=0; i<nameGremios.length; i++){
        if(name == nameGremios[i]) boo = true
    }
    return boo
}
function isAnterior(name){
    let boo = false
    for(let i=0; i<nameAnterior.length; i++){
        if(name ==nameAnterior[i]) boo = true
    }
    return boo
}
loadData(dataMembers, 1)
$('#btn001').on( "click",          () => loadData(dataMembers, 1));
$('#btn002').on( "click",          () => loadData(dataMembers, 2));
$('#btn003').on( "click",          () => loadData(dataMembers, 3));