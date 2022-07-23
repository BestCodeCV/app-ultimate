const data = require("../js/temporal.json");
let total = 0
let bienesHierro = ["cloth", "ebony", "iron", "gems", "limestone"]
let bienesPrincipios = ["marble", "gold", "granite", "honey", "bronze"]
let bienesPlena = ["brick", "herbs", "glass", "salt", "ropes"]
let bienesFinales = ["basalt", "brass", "gunpowder", "silk", "talc"]
let bienesColonial = ["steel", "paper", "wire","tar","porcelain"]
let bienesIndustrial = ["fertilizer", "rubber", "coke", "textiles", "whaleoil"]
let bienesProgreso = ["asbestos", "petroleum", "machineparts", "explosives", "tinplate"]
let bienesModerna = ["flavorants", "convenience_food", "luxury_materials", "ferroconcrete", "packaging"]
let bienesPostmoderna = ["semiconductors", "filters","dna_data", "steel","renewable_resources"]
let bienesContemporanea = ["robots", "electromagnets","bionics", "gas","plastics"]
let bienesManana = ["translucent_concrete", "preservatives","papercrete", "smart_materials","nutrition_research"]
let bienesFuturo = ["algae", "superconductors","biogeochemical_data", "purified_water","nanoparticles"]
let bienesArtico = ["ai_data", "transester_gas","nanowire", "paper_batteries","bioplastics"]
let bienesOceanico = ["biolight", "artificial_scales","pearls", "corals","plankton"]
let bienesVirtual = ["cryptocash", "tea_silk","golden_rice", "data_crystals","nanites"]
let bienesMarte = ["lubricants", "data_crystals","superalloys", "mars_microbes","fusion_reactors"]
//let bienesEspacial = ["microgreen_supplement", "glowing_seaweed","herbal_snack", "sugar_crystals","soy_proteins"]
let bienesAsteroides = ["nickel", "processed_material", "compound_fluid", "bromine", "platinum_crystals"]
let bienesVenus= ["microgreen_supplement", "glowing_seaweed","herbal_snack", "sugar_crystals","soy_proteins"]
let bienesJupiter = ["advanced_dna_data", "bio_creatures", "enhanced_porifera", "red_algae", "topological_records"]
let bienes = [bienesColonial, bienesPostmoderna, bienesContemporanea, bienesManana, bienesFuturo, bienesArtico, bienesOceanico, bienesVirtual, bienesMarte, bienesEspacial]
let contadores = [0,0,0,0,0,0,0,0,0,0]
let cantidades = [0,0,0,0,0,0,0,0,0,0]
let contadores1 = [0,0,0,0,0,0,0,0,0,0]
let cantidades1 = [0,0,0,0,0,0,0,0,0,0]
let eras = ["Colonial", "Postmoderna", "Contempóranea", "Mañana", "Futuro", "Ártico", "Océanico", "Virtual", "Marte", "Espacial"]
for(i in data){
    console.log(data[i].nombre)
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
        console.log("Era: " + eras[y] + " => "+cantidades1[y])
    }
    console.log("")
}
console.log("Total de bienes por sector: "+ total+"\n")
console.log("RESUMEN: ")
for(i in contadores){
    console.log("Era: " + eras[i] + " => " + cantidades[i])
    console.log("Número de solicitudes: "+contadores[i])
    console.log("")
}