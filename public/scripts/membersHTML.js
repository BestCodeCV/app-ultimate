let nameGremios = ["Observatorio", "Núcleo de I. A.", "El Arca", "Atomium"]
let nameBienes = ["Torre de Babel", "Faro de Alejandría", "Basílica de San Marcos", "Torre Galata", "Museo de la Atlántida", "Dresden Frauenkirche", "Royal Albert Hall", "Proyecto Bosque de Lluvia"]
let nameAnterior = ["Mirador Estelar"]
function loadTotal(members){

}
function loadBienes(members){
    let x = `<table class="table table-bordered border-dark">`
    x+= encabezadoBienes()
    x+=`<tbody>`
    for(let i=0; i<members.length; i++){
        x+=` <tr>`
        x+=`       <th class="text-center">${i+1}</th>`
        x+=`       <th>${members[i].nombre}</th>`
        for(let j=0; j<nameBienes.length; j++){
            x+= addRowGremio(members[i].ges, nameBienes[j])
        }
        x+= ` </tr>`
    }
    x+=`</tbody>`
    x+= `</table>`
    return x
}
function loadGremio(members){
    let x = `<table class="table table-bordered border-dark">`
    x+= encabezadoGremio()
    x+=`<tbody>`
    for(let i=0; i<members.length; i++){
        x+=` <tr>`
        x+=`       <th class="text-center">${i+1}</th>`
        x+=`       <th>${members[i].nombre}</th>`
        for(let j=0; j<nameGremios.length; j++){
            x+= addRowGremio(members[i].ges, nameGremios[j])
        }
        x+= ` </tr>`
    }
    x+=`</tbody>`
    x+= `</table>`
    return x
}
function loadAnterior(members){
    let x = `<table class="table table-bordered border-dark">`
    x+= encabezadoAnterior()
    x+=`<tbody>`
    for(let i=0; i<members.length; i++){
        x+=` <tr>`
        x+=`       <th class="text-center">${i+1}</th>`
        x+=`       <th>${members[i].nombre}</th>`
        for(let j=0; j<nameAnterior.length; j++){
            x+= addRowGremio(members[i].ges, nameAnterior[j])
        }
        x+= ` </tr>`
    }
    x+=`</tbody>`
    x+= `</table>`
    return x
}
function loadResume(members){
    
}
function addRowGremio(ges, name){
    let x =``
    for(let i=0; i<ges.length; i++){
        if(name == ges[i].nombre){
            x+= getGremio(ges[i])
            break     
        }
    }
    if(x==``){
        x+= getDefault()
    }
    return x
}
function getGremio(ge){
    let x = `   <th class="text-center">${ge.nivel}</th>`
    x+=`  <th class="text-center">${ge.bienes}</th>`
    return x
}
function getDefault(){
    let x=`            <th class="text-center"></th>`
    x+=`            <th class="text-center"></th>`
    return x
}
function encabezadoGremio(){
    let x = ``
    x+=`    <thead>`
    x+=`          <tr>`
    x+=`            <th class="text-center">#</th>`
    x+=`            <th>Nombre</th>`
    x+=`            <th colspan="2" class="text-center">Observatorio</th>`
    x+=`            <th colspan="2" class="text-center">Núcleo de I. A.</th>`
    x+=`            <th colspan="2" class="text-center">El Arca</th>`
    x+=`            <th colspan="2" class="text-center">Atomium</th>`
    x+= `         </tr>`
    x+=`          <tr>`
    x+=`            <th class="text-center"></th>`
    x+=`            <th></th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes c/u</th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes c/u</th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes c/u</th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes c/u</th>`
    x+= `         </tr>`
    x+=`    </thead>`
    return x
}


function encabezadoBienes(){
    let x = ``
    x+=`    <thead>`
    x+=`          <tr>`
    x+=`            <th class="text-center">#</th>`
    x+=`            <th>Nombre</th>`
    x+=`            <th colspan="2" class="text-center">Torre de Babel</th>`
    x+=`            <th colspan="2" class="text-center">Faro de Alejandría</th>`
    x+=`            <th colspan="2" class="text-center">Basílica de San Marcos</th>`
    x+=`            <th colspan="2" class="text-center">Torre Galata</th>`
    x+=`            <th colspan="2" class="text-center">Museo de la Atlántida</th>`
    x+=`            <th colspan="2" class="text-center">Dresden Frauenkirche</th>`
    x+=`            <th colspan="2" class="text-center">Royal Albert Hall</th>`
    x+=`            <th colspan="2" class="text-center">Proyecto Bosque de Lluvia</th>`
    x+= `         </tr>`
    x+=`          <tr>`
    x+=`            <th class="text-center"></th>`
    x+=`            <th></th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes</th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes</th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes</th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes</th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes</th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes</th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes</th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes</th>`
    x+= `         </tr>`
    x+=`    </thead>`
    return x
}
function encabezadoAnterior(){
    let x = ``
    x+=`    <thead>`
    x+=`          <tr>`
    x+=`            <th class="text-center">#</th>`
    x+=`            <th>Nombre</th>`
    x+=`            <th colspan="2" class="text-center">Mirador Estelar</th>`
    x+= `         </tr>`
    x+=`          <tr>`
    x+=`            <th class="text-center"></th>`
    x+=`            <th></th>`
    x+=`            <th class="text-center">Lv</th>`
    x+=`            <th class="text-center">Bienes</th>`
    x+= `         </tr>`
    x+=`    </thead>`
    return x
}
export {loadTotal, loadBienes, loadGremio, loadAnterior, loadResume}