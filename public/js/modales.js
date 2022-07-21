//const modalAlumno = new bootstrap.Modal(document.getElementById('modalAlumno'))
const url = '/bcg/byob';
const urlByob = '/nbcg/byob';
const urlKraken = '/nbcg/kraken';
const botons = document.querySelectorAll(".name")
const cuando = function(evento){
    detailSector(this.innerText)
    console.log("El texto es", this.innerText)
}
botons.forEach(boton=>{
    boton.addEventListener("click", cuando)
})
let dataTesore = []
let dataGuild = []

let datos = []

let sectors = []
let tesore = []

let tesoreData = []
let sectorsForData = []
let bienesTesore = []

let listGoods = []
let listSectors = []

class Good{
    constructor(name, quantity, show, status){
        this.name = name
        this.quantity = quantity
        this.show = show
        this.status = status
    }
}
class Sector{
    constructor(name, buildings){
        this.name = name
        this.buildings = buildings
    }
}
class Building{
    constructor(name, goods){
        this.name = name;
        this.goods = goods;
    }
}
$('#a11').on( "click", function( event ) {
    bienes("A1 MATI TUDOKK")
});
$('#hola').on( "click", function( event ) {
    bienes("A1 MATI TUDOKK")
});
function bienes(sector){
    modalAlumno.show();
}
function addCard(building){
    let h = ``
    h+=`<div class="card border-secondary mb-3" >`
    h+=`                 <div class="card-header">${building.name}</div>`
    h+=`                 <ul class="list-group list-group-flush">`
    for(good in building.goods){
        h+=`                   <li class="list-group-item bg-success text-white">`
        h+=`                      <div class="row">`
        h+=`                           <div class="col col-6">${building.goods[good].name}</div>`
        h+=`                            <div class="col col-6">${building.goods[good].show}</div>`
        h+=`                       </div>`
        h+=`                  </li>`
    }
    h+=`                   </ul>`
    h+=`           </div>`
    return h
}
function showData(url){
    $.ajax({
        url: url,
        method: 'GET',
        dataType: "json"
    }).then(data=>{
        
        dataTesore = []
        dataGuild = []

        listGoods = []

        datos = []
        sectors = []
        tesore = []
        tesoreData = []
        sectorsForData = []
        
        dataGuild = data.sectors
        dataTesore = data.tesore

        console.log("sectors: " , dataGuild)

        for(i in dataTesore){
            if(dataTesore[i].requestMethod == "getTreasury" && dataTesore[i].responseData.__class__== "Resources"){
                tesore = dataTesore[i].responseData.resources
                for(var t in tesore){
                    let bien = new Good(t, tesore[t])
                    listGoods.push(bien)
                }
            }
        }

        console.log(listGoods)

        for(i in dataGuild){
            for(j in dataGuild[i]){
                if(dataGuild[i][j].requestMethod == "getBuildings" && dataGuild[i][j].responseData.__class__== "GuildBattlegroundProvinceBuildings"){
                    let sector = new Sector()
                    sector.name = i
                    console.log("Nombre " + sector.name)
                    let buildings = []

                    for(k in dataGuild[i][j].responseData.availableBuildings){
                        building = new Building()
                        building.name = dataGuild[i][j].responseData.availableBuildings[k].buildingId
                        let g = []
                        for(m in dataGuild[i][j].responseData.availableBuildings[k].costs.resources){
                            let txName = m
                            let txQuantity = dataGuild[i][j].responseData.availableBuildings[k].costs.resources[m]
                            let txShow = ""
                            let txStatus = 0

                            for(x in listGoods){
                                if(listGoods[x].name == txName){
                                    if(txQuantity<listGoods[x].quantity){
                                        if(listGoods[x].quantity*2>=txQuantity){
                                            txShow = txQuantity + " / " + listGoods[x].quantity
                                            txStatus = 2
                                        }else{
                                            txShow = txQuantity + " / " + listGoods[x].quantity
                                            txStatus = 1
                                        }
                                    }else if(txQuantity >= listGoods[x].quantity){
                                        txShow = txQuantity + " / " + listGoods[x].quantity
                                        txStatus = 0
                                    }
                                }
                            }
                            let bien = new Good(txName, txQuantity, txShow, txStatus)
                            g.push(bien)
                        }
                        building.goods = g
                        buildings.push(building)
                    }
                    sector.buildings = buildings
                    sectors.push(sector)
                }
            }
            
        }
        //let msj = ``
        //for(var i = 0; i<20; i++){
        //    msj += addCard()
        //}
        //$('#cardBuildings').html(msj)
        detailSector("X1X")
        console.log(sectors)
        //console.log(bienesTesore)

        //console.log(tesore)
    })
}
function detailSector(name){
    let sec = searchSector(name)
    let msj = ``
    for(let b in sec.buildings){
        msj += addCard(sec.buildings[b])
    }
    $('#cardBuildings').html(msj)
}
function searchSector(name){
    for(miSector in sectors){
        if(sectors[miSector].name == name){
            return sectors[miSector]
        }
    }
}
function goByob(){
    showData(urlByob)
}
function goKraken(){
    showData(urlKraken)
}
goByob()

$.ajax({
    url: url,
    method: 'GET',
    dataType: "json",
}).then(function(data) {
    datos = data
    let total = 0
let bienesColonial = ["steel", "paper", "wire","tar","porcelain"]
let bienesPostmoderna = ["semiconductors", "filters","dna_data", "steel","renewable_resources"]
let bienesContemporanea = ["robots", "electromagnets","bionics", "gas","plastics"]
let bienesManana = ["translucent_concrete", "preservatives","papercrete", "smart_materials","nutrition_research"]
let bienesFuturo = ["algae", "superconductors","biogeochemical_data", "purified_water","nanoparticles"]
let bienesArtico = ["ai_data", "transester_gas","nanowire", "paper_batteries","bioplastics"]
let bienesOceanico = ["biolight", "artificial_scales","pearls", "corals","plankton"]
let bienesVirtual = ["cryptocash", "tea_silk","golden_rice", "data_crystals","nanites"]
let bienesMarte = ["lubricants", "data_crystals","superalloys", "mars_microbes","fusion_reactors"]
let bienesEspacial = ["microgreen_supplement", "glowing_seaweed","herbal_snack", "sugar_crystals","soy_proteins"]
let bienes = [bienesColonial, bienesPostmoderna, bienesContemporanea, bienesManana, bienesFuturo, bienesArtico, bienesOceanico, bienesVirtual, bienesMarte, bienesEspacial]
let contadores = [0,0,0,0,0,0,0,0,0,0]
let cantidades = [0,0,0,0,0,0,0,0,0,0]
let contadores1 = [0,0,0,0,0,0,0,0,0,0]
let cantidades1 = [0,0,0,0,0,0,0,0,0,0]
let eras = ["Colonial", "Postmoderna", "Contempóranea", "Mañana", "Futuro", "Ártico", "Océanico", "Virtual", "Marte", "Espacial"]
for(i in data){
    //console.log(data[i].nombre)
    total = 0
    contadores1 = [0,0,0,0,0,0,0,0,0,0]
    cantidades1 = [0,0,0,0,0,0,0,0,0,0]
    for(j in data[i].edificios){
        for(k in data[i].edificios[j].bienes){
            total+=data[i].edificios[j].bienes[k]
            for(m in bienes){
                let a = bienes[m].find(x=>x==k)
                if(a!=null || typeof a !='undefined'){
                    contadores1[m]+=1
                    cantidades1[m]+=data[i].edificios[j].bienes[k]
                    contadores[m]+=1
                    cantidades[m]+=data[i].edificios[j].bienes[k]
                }
            }
        }
    }
    for(y in contadores1){
        //console.log("Era: " + eras[y] + " => "+cantidades1[y])
    }
    //console.log("")
}
//console.log("Total de bienes por sector: "+ total+"\n")
//console.log("RESUMEN: ")
for(i in contadores){
    //console.log("Era: " + eras[i] + " => " + cantidades[i])
    //console.log("Número de solicitudes: "+contadores[i])
    //console.log("")
}
}); 
//Datos a mostrar