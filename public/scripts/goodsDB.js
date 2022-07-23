import {Good} from '../models/classes.js'
let bienesHierro = ["cloth", "ebony", "iron", "gems", "limestone"]
let bienesPrincipios = ["marble", "gold", "granite", "honey", "bronze"]
let bienesPlena = ["brick", "herbs", "glass", "salt", "ropes"]
let bienesFinales = ["basalt", "brass", "gunpowder", "silk", "talc"]
let bienesColonial = ["coffee", "paper", "wire","tar","porcelain"]
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
let bienesMarte = ["lubricants", "biotech_crops","superalloys", "mars_microbes","fusion_reactors"]
let bienesAsteroides = ["nickel", "processed_material", "compound_fluid", "bromine", "platinum_crystals"]
let bienesVenus= ["microgreen_supplement", "glowing_seaweed","herbal_snack", "sugar_crystals","soy_proteins"]
let bienesJupiter = ["advanced_dna_data", "bio_creatures", "enhanced_porifera", "red_algae", "topological_records"]

class fakeGood{
    constructor(en, es, age, url){
        this.en = en
        this.es = es 
        this.url = url
        this.age = age
    }
}
let goods = [
    new fakeGood(bienesHierro[0], "Tela", "Edad de Hierro", "https://en.wiki.forgeofempires.com/images/thumb/c/c4/Fine_cloth.png/45px-Fine_cloth.png"),
    new fakeGood(bienesHierro[1], "Ébano", "Edad de Hierro", "https://en.wiki.forgeofempires.com/images/thumb/0/09/Fine_ebony.png/45px-Fine_ebony.png"),
    new fakeGood(bienesHierro[2], "Hierro", "Edad de Hierro", "https://en.wiki.forgeofempires.com/images/thumb/9/92/Fine_lead.png/45px-Fine_lead.png"),
    new fakeGood(bienesHierro[3], "Joyas", "Edad de Hierro", "https://en.wiki.forgeofempires.com/images/thumb/9/93/Fine_gems.png/45px-Fine_gems.png"),
    new fakeGood(bienesHierro[4], "Caliza", "Edad de Hierro", "https://en.wiki.forgeofempires.com/images/thumb/b/b0/Fine_limestone.png/45px-Fine_limestone.png"),
    new fakeGood(bienesPrincipios[0], "Alabastro", "Principios", "https://en.wiki.forgeofempires.com/images/thumb/5/5a/Fine_marble.png/45px-Fine_marble.png"),
    new fakeGood(bienesPrincipios[1], "Oro", "Principios", "https://en.wiki.forgeofempires.com/images/thumb/c/c5/Fine_gold.png/45px-Fine_gold.png"),
    new fakeGood(bienesPrincipios[2], "Granito", "Principios", "https://en.wiki.forgeofempires.com/images/thumb/9/90/Fine_granite.png/45px-Fine_granite.png"),
    new fakeGood(bienesPrincipios[3], "Miel", "Principios", "https://en.wiki.forgeofempires.com/images/thumb/b/b4/Fine_honey.png/45px-Fine_honey.png"),
    new fakeGood(bienesPrincipios[4], "Cobre", "Principios", "https://en.wiki.forgeofempires.com/images/thumb/4/43/Fine_bronze.png/45px-Fine_bronze.png"),
    new fakeGood(bienesPlena[0], "Ladrillos", "Plena edad media", "https://en.wiki.forgeofempires.com/images/thumb/d/da/Fine_brick.png/45px-Fine_brick.png"),
    new fakeGood(bienesPlena[1], "Hierba seca", "Plena edad media", "https://en.wiki.forgeofempires.com/images/thumb/c/cf/Fine_herbs.png/45px-Fine_herbs.png"),
    new fakeGood(bienesPlena[2], "Vidrio", "Plena edad media", "https://en.wiki.forgeofempires.com/images/thumb/b/b6/Fine_glass.png/45px-Fine_glass.png"),
    new fakeGood(bienesPlena[3], "Sal", "Plena edad media", "https://en.wiki.forgeofempires.com/images/thumb/8/85/Fine_salt.png/45px-Fine_salt.png"),
    new fakeGood(bienesPlena[4], "Cuerda", "Plena edad media", "https://en.wiki.forgeofempires.com/images/thumb/3/3d/Fine_ropes.png/45px-Fine_ropes.png"),
    new fakeGood(bienesFinales[0], "Basalto", "Finales edad media", "https://en.wiki.forgeofempires.com/images/thumb/f/f7/Fine_basalt.png/45px-Fine_basalt.png"),
    new fakeGood(bienesFinales[1], "Latón", "Finales edad media", "https://en.wiki.forgeofempires.com/images/thumb/6/66/Fine_brass.png/45px-Fine_brass.png"),
    new fakeGood(bienesFinales[2], "Pólvora", "Finales edad media", "https://en.wiki.forgeofempires.com/images/thumb/d/d3/Fine_gunpowder.png/45px-Fine_gunpowder.png"),
    new fakeGood(bienesFinales[3], "Seda", "Finales edad media", "https://en.wiki.forgeofempires.com/images/thumb/2/2d/Fine_silk.png/45px-Fine_silk.png"),
    new fakeGood(bienesFinales[4], "Talco", "Finales edad media", "https://en.wiki.forgeofempires.com/images/thumb/5/5c/Fine_talc.png/45px-Fine_talc.png"),
    new fakeGood(bienesColonial[0], "Café", "Edad Colonial", "https://en.wiki.forgeofempires.com/images/thumb/4/4d/Fine_coffee.png/45px-Fine_coffee.png"),
    new fakeGood(bienesColonial[1], "Papel", "Edad Colonial", "https://en.wiki.forgeofempires.com/images/thumb/8/86/Fine_paper.png/45px-Fine_paper.png"),
    new fakeGood(bienesColonial[2], "Alambre", "Edad Colonial", "https://en.wiki.forgeofempires.com/images/thumb/d/d5/Fine_wire.png/45px-Fine_wire.png"),
    new fakeGood(bienesColonial[3], "Brea", "Edad Colonial", "https://en.wiki.forgeofempires.com/images/thumb/4/47/Fine_tar.png/45px-Fine_tar.png"),
    new fakeGood(bienesColonial[4], "Porcelana", "Edad Colonial", "https://en.wiki.forgeofempires.com/images/thumb/5/56/Fine_porcelain.png/45px-Fine_porcelain.png"),
    new fakeGood(bienesIndustrial[0], "Fertilizante", "Edad Industrial", "https://en.wiki.forgeofempires.com/images/thumb/3/39/Fine_fertilizer.png/45px-Fine_fertilizer.png"),
    new fakeGood(bienesIndustrial[1], "Caucho", "Edad Industrial", "https://en.wiki.forgeofempires.com/images/thumb/0/08/Fine_rubber.png/45px-Fine_rubber.png"),
    new fakeGood(bienesIndustrial[2], "Coque", "Edad Industrial", "https://en.wiki.forgeofempires.com/images/thumb/a/a6/Fine_coke.png/45px-Fine_coke.png"),
    new fakeGood(bienesIndustrial[3], "Textil", "Edad Industrial", "https://en.wiki.forgeofempires.com/images/thumb/2/26/Fine_textiles.png/45px-Fine_textiles.png"),
    new fakeGood(bienesIndustrial[4], "Aceite Ballena", "Edad Industrial", "https://en.wiki.forgeofempires.com/images/thumb/8/8d/Fine_whaleoil.png/45px-Fine_whaleoil.png"),
    new fakeGood(bienesProgreso[0], "Asbesto", "Progreso", "https://en.wiki.forgeofempires.com/images/thumb/2/2e/Fine_asbestos.png/45px-Fine_asbestos.png"),
    new fakeGood(bienesProgreso[1], "Gasolina", "Progreso", "https://en.wiki.forgeofempires.com/images/thumb/4/40/Fine_petroleum.png/45px-Fine_petroleum.png"),
    new fakeGood(bienesProgreso[2], "Piezas de Máquina", "Progreso", "https://en.wiki.forgeofempires.com/images/thumb/c/cb/Fine_machineparts.png/45px-Fine_machineparts.png"),
    new fakeGood(bienesProgreso[3], "Explosivos", "Progreso", "https://en.wiki.forgeofempires.com/images/thumb/b/b0/Fine_explosives.png/45px-Fine_explosives.png"),
    new fakeGood(bienesProgreso[4], "Estaño", "Progreso", "https://en.wiki.forgeofempires.com/images/thumb/7/71/Fine_tinplate.png/45px-Fine_tinplate.png"),
    new fakeGood(bienesModerna[0], "Saborizantes", "Edad Moderna", "https://en.wiki.forgeofempires.com/images/thumb/c/c7/Fine_flavorants.png/45px-Fine_flavorants.png"),
    new fakeGood(bienesModerna[1], "Alimentos", "Edad Moderna", "https://en.wiki.forgeofempires.com/images/thumb/1/18/Fine_convenience_food.png/45px-Fine_convenience_food.png"),
    new fakeGood(bienesModerna[2], "Mat. de Lujo", "Edad Moderna", "https://en.wiki.forgeofempires.com/images/thumb/9/90/Fine_luxury_materials.png/45px-Fine_luxury_materials.png"),
    new fakeGood(bienesModerna[3], "Ferroconcreto", "Edad Moderna", "https://en.wiki.forgeofempires.com/images/thumb/5/5b/Fine_ferroconcrete.png/45px-Fine_ferroconcrete.png"),
    new fakeGood(bienesModerna[4], "Empaques", "Edad Moderna", "https://en.wiki.forgeofempires.com/images/thumb/2/27/Fine_packaging.png/45px-Fine_packaging.png"),
    new fakeGood(bienesPostmoderna[0], "Semiconductores","Postmoderna",  "https://en.wiki.forgeofempires.com/images/thumb/9/94/Fine_semiconductors.png/45px-Fine_semiconductors.png"),
    new fakeGood(bienesPostmoderna[1], "Filtros","Postmoderna",  "https://en.wiki.forgeofempires.com/images/thumb/3/36/Fine_filters.png/45px-Fine_filters.png"),
    new fakeGood(bienesPostmoderna[2], "Datos genoma","Postmoderna",  "https://en.wiki.forgeofempires.com/images/thumb/3/3d/Fine_dna_data.png/45px-Fine_dna_data.png"),
    new fakeGood(bienesPostmoderna[3], "Acero","Postmoderna",  "https://en.wiki.forgeofempires.com/images/thumb/2/20/Fine_steel.png/45px-Fine_steel.png"),
    new fakeGood(bienesPostmoderna[4], "Recursos renov.", "Postmoderna", "https://en.wiki.forgeofempires.com/images/thumb/3/3e/Fine_renewable_resources.png/45px-Fine_renewable_resources.png"),
    new fakeGood(bienesContemporanea[0], "Robots","Contemporánea",  "https://en.wiki.forgeofempires.com/images/thumb/3/34/Fine_robots.png/45px-Fine_robots.png"),
    new fakeGood(bienesContemporanea[1],  "Electroimanes", "Contemporánea","https://en.wiki.forgeofempires.com/images/thumb/2/2b/Fine_electromagnets.png/45px-Fine_electromagnets.png"),
    new fakeGood(bienesContemporanea[2], "Datos Biónicos","Contemporánea",  "https://en.wiki.forgeofempires.com/images/thumb/d/da/Fine_bionics.png/45px-Fine_bionics.png"),
    new fakeGood(bienesContemporanea[3], "Gas","Contemporánea",  "https://en.wiki.forgeofempires.com/images/thumb/d/d8/Fine_gas.png/45px-Fine_gas.png"),
    new fakeGood(bienesContemporanea[4], "PLástico","Contemporánea",  "https://en.wiki.forgeofempires.com/images/thumb/a/a0/Fine_plastics.png/45px-Fine_plastics.png"),
    new fakeGood(bienesManana[0], "Concreto Trans","Era del Mañana",  "https://en.wiki.forgeofempires.com/images/thumb/c/cf/Fine_translucent_concrete.png/45px-Fine_translucent_concrete.png"),
    new fakeGood(bienesManana[1], "Conservantes","Era del Mañana",  "https://en.wiki.forgeofempires.com/images/thumb/7/7a/Fine_preservatives.png/45px-Fine_preservatives.png"),
    new fakeGood(bienesManana[2], "Papelmigón","Era del Mañana",  "https://en.wiki.forgeofempires.com/images/thumb/0/09/Fine_papercrete.png/45px-Fine_papercrete.png"),
    new fakeGood(bienesManana[3],  "Mat. Inteligentes","Era del Mañana", "https://en.wiki.forgeofempires.com/images/thumb/1/1f/Fine_smart_materials.png/45px-Fine_smart_materials.png"),
    new fakeGood(bienesManana[4], "Invest. Nutrición","Era del Mañana",  "https://en.wiki.forgeofempires.com/images/thumb/6/6b/Fine_nutrition_research.png/45px-Fine_nutrition_research.png"),
    new fakeGood(bienesFuturo[0], "Algas", "Futuro", "https://en.wiki.forgeofempires.com/images/thumb/d/d6/Fine_algae.png/45px-Fine_algae.png"),
    new fakeGood(bienesFuturo[1], "Superconductores","Futuro",  "https://en.wiki.forgeofempires.com/images/thumb/d/d7/Fine_superconductors.png/45px-Fine_superconductors.png"),
    new fakeGood(bienesFuturo[2], "Datos Biogeoq.", "Futuro", "https://en.wiki.forgeofempires.com/images/thumb/0/02/Fine_biogeochemical_data.png/45px-Fine_biogeochemical_data.png"),
    new fakeGood(bienesFuturo[3],  "Agua","Futuro", "https://en.wiki.forgeofempires.com/images/thumb/4/44/Fine_purified_water.png/45px-Fine_purified_water.png"),
    new fakeGood(bienesFuturo[4], "Nanopartículas","Futuro",  "https://en.wiki.forgeofempires.com/images/thumb/b/bf/Fine_nanoparticles.png/45px-Fine_nanoparticles.png"),
    new fakeGood(bienesArtico[0], "Datos I.A.","Futuro Ártico",  "https://en.wiki.forgeofempires.com/images/thumb/4/4c/Fine_ai_data.png/45px-Fine_ai_data.png"),
    new fakeGood(bienesArtico[1], "Gas Transesfer", "Futuro Ártico", "https://en.wiki.forgeofempires.com/images/thumb/d/d2/Fine_transester_gas.png/45px-Fine_transester_gas.png"),
    new fakeGood(bienesArtico[2], "Nanoparticulas","Futuro Ártico",  "https://en.wiki.forgeofempires.com/images/thumb/b/b4/Fine_nanowire.png/45px-Fine_nanowire.png"),
    new fakeGood(bienesArtico[3],  "Baterias de papel","Futuro Ártico", "https://en.wiki.forgeofempires.com/images/thumb/4/40/Fine_paper_batteries.png/45px-Fine_paper_batteries.png"),
    new fakeGood(bienesArtico[4], "Bioplásticos","Futuro Ártico",  "https://en.wiki.forgeofempires.com/images/thumb/9/9f/Fine_bioplastics.png/45px-Fine_bioplastics.png"),
    new fakeGood(bienesOceanico[0], "Bioluces","Oceánico",  "https://en.wiki.forgeofempires.com/images/thumb/a/a1/Fine_biolight.png/45px-Fine_biolight.png"),
    new fakeGood(bienesOceanico[1], "Escamas artificiales","Oceánico",  "https://en.wiki.forgeofempires.com/images/thumb/0/0b/Fine_artificial_scales.png/45px-Fine_artificial_scales.png"),
    new fakeGood(bienesOceanico[2], "Perlas","Oceánico",  "https://en.wiki.forgeofempires.com/images/thumb/d/dc/Fine_pearls.png/45px-Fine_pearls.png"),
    new fakeGood(bienesOceanico[3], "Coral","Oceánico",  "https://en.wiki.forgeofempires.com/images/thumb/e/e2/Fine_corals.png/45px-Fine_corals.png"),
    new fakeGood(bienesOceanico[4], "Plancton","Oceánico",  "https://en.wiki.forgeofempires.com/images/thumb/1/15/Fine_plankton.png/45px-Fine_plankton.png"),
    new fakeGood(bienesVirtual[0], "Criptomonedas","F. Virtual",  "https://static.wikia.nocookie.net/forgeofempires/images/a/a5/Cryptocash.png/revision/latest/scale-to-width-down/20?cb=20180506075013"),
    new fakeGood(bienesVirtual[1], "Sedas de Tè","F. Virtual",  "https://static.wikia.nocookie.net/forgeofempires/images/9/9e/Tea_Silk.png/revision/latest/scale-to-width-down/20?cb=20180506075223"),
    new fakeGood(bienesVirtual[2], "Arroz de oro", "F. Virtual", "https://static.wikia.nocookie.net/forgeofempires/images/d/d1/Golden_Rice.png/revision/latest/scale-to-width-down/20?cb=20180506075016"),
    new fakeGood(bienesVirtual[3], "Cristales de Datos","F. Virtual",  "https://static.wikia.nocookie.net/forgeofempires/images/2/2e/Data_Crystals.png/revision/latest/scale-to-width-down/20?cb=20180506075015"),
    new fakeGood(bienesVirtual[4], "Nanites","F. Virtual",  "https://static.wikia.nocookie.net/forgeofempires/images/a/a8/Nanites.png/revision/latest/scale-to-width-down/20?cb=20180516111101"),
    new fakeGood(bienesMarte[0],"Lubricantes", "Marte",  "https://static.wikia.nocookie.net/forgeofempires/images/7/77/Lubricant.png/revision/latest/scale-to-width-down/20?cb=20190424110717"),
    new fakeGood(bienesMarte[1], "Cultivos de biotecnologìa","Marte",  "https://static.wikia.nocookie.net/forgeofempires/images/e/ef/BioTech_Crops.png/revision/latest/scale-to-width-down/20?cb=20190424110716"),
    new fakeGood(bienesMarte[2], "Superaleaciones", "Marte", "https://static.wikia.nocookie.net/forgeofempires/images/b/bc/Superalloys.png/revision/latest/scale-to-width-down/20?cb=20190424110718"),
    new fakeGood(bienesMarte[3], "Microbios de Marte","Marte",  "https://static.wikia.nocookie.net/forgeofempires/images/4/40/Mars_Microbes.png/revision/latest/scale-to-width-down/20?cb=20190424110717"),
    new fakeGood(bienesMarte[4], "Energìa de fusiòn","Marte",  "https://static.wikia.nocookie.net/forgeofempires/images/6/61/Fusion_Power.png/revision/latest/scale-to-width-down/20?cb=20190424110716"),
    new fakeGood(bienesAsteroides[0], "Niquel","Asteroides",  "https://static.wikia.nocookie.net/forgeofempires/images/0/00/Nickel.png/revision/latest/scale-to-width-down/20?cb=20200320083027"),
    new fakeGood(bienesAsteroides[1], "Mat. procesados", "Asteroides", "https://static.wikia.nocookie.net/forgeofempires/images/8/83/Processed_Materials.png/revision/latest/scale-to-width-down/20?cb=20200320083028"),
    new fakeGood(bienesAsteroides[2], "Fluidos Compuestos", "Asteroides", "https://static.wikia.nocookie.net/forgeofempires/images/c/c7/Compound_Fluid.png/revision/latest/scale-to-width-down/20?cb=20200320083027"),
    new fakeGood(bienesAsteroides[3], "Bromo","Asteroides",  "https://static.wikia.nocookie.net/forgeofempires/images/a/ad/Bromine.png/revision/latest/scale-to-width-down/20?cb=20200320083026"),
    new fakeGood(bienesAsteroides[4], "Cristales de Platino","Asteroides",  "https://static.wikia.nocookie.net/forgeofempires/images/4/49/Platinum_Crystals.png/revision/latest/scale-to-width-down/20?cb=20200320083028"),
    new fakeGood(bienesVenus[0], "Suplementos microverdes","Venus",  "https://static.wikia.nocookie.net/forgeofempires/images/9/92/Microgreen_Supplement.png/revision/latest/scale-to-width-down/20?cb=20210306150914"),
    new fakeGood(bienesVenus[1], "Algas brillantes","Venus",  "https://static.wikia.nocookie.net/forgeofempires/images/b/b7/Glowing_Seaweed.png/revision/latest/scale-to-width-down/20?cb=20210306150842"),
    new fakeGood(bienesVenus[2], "Aperitivos de hierba","Venus",  "https://static.wikia.nocookie.net/forgeofempires/images/c/c8/Herbal_Snack.png/revision/latest/scale-to-width-down/20?cb=20210306150850"),
    new fakeGood(bienesVenus[3], "Cristales de azùcar", "Venus", "https://static.wikia.nocookie.net/forgeofempires/images/d/d3/Sugar_Crystals.png/revision/latest/scale-to-width-down/20?cb=20210306151005"),
    new fakeGood(bienesVenus[4], "Proteinas de soya", "Venus", "https://static.wikia.nocookie.net/forgeofempires/images/8/86/Soy_Proteins.png/revision/latest/scale-to-width-down/20?cb=20210306150954"),
    new fakeGood(bienesJupiter[0],  "Inf. de ADN avanzada","Júpiter", "https://static.wikia.nocookie.net/forgeofempires/images/4/46/Advanced_DNA_Data.png/revision/latest/scale-to-width-down/20?cb=20220307201005"),
    new fakeGood(bienesJupiter[1], "Criaturas biològicas", "Júpiter", "https://static.wikia.nocookie.net/forgeofempires/images/9/95/Bio_Creatures.png/revision/latest/scale-to-width-down/20?cb=20220307201004"),
    new fakeGood(bienesJupiter[2], "Poriferas mejoradas","Júpiter",  "https://static.wikia.nocookie.net/forgeofempires/images/b/b7/Enhanced_Porifera.png/revision/latest/scale-to-width-down/20?cb=20220307201003"),
    new fakeGood(bienesJupiter[3], "Algas rojas","Júpiter",  "https://static.wikia.nocookie.net/forgeofempires/images/3/36/Red_Algae.png/revision/latest/scale-to-width-down/20?cb=20220307201002"),
    new fakeGood(bienesJupiter[4], "Registros topològicos", "Júpiter",  "https://static.wikia.nocookie.net/forgeofempires/images/3/38/Topological_Records.png/revision/latest/scale-to-width-down/20?cb=20220307201001")
]
function getFakeGood(name){
    for(let g in goods){
        if(goods[g].en == name){
            return goods[g]
        }
    }
}
function createGood(name, quantity, show, status){
    let bien = new Good()
    bien.name = name
    bien.quantity = quantity
    bien.show = show
    bien.status = status
    bien.en_name = name
    let fake = getFakeGood(name)
    bien.es_name = fake.es
    bien.age = fake.age
    bien.url = fake.url
    return bien
}
export {createGood}