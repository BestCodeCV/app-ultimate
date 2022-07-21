function membersHTML(members){
    let x = ``
    for(let m in members){
        console.log(members[m].clan_id)
        if(m%2==0){
            if(members[m].active==false || members[m].active=="undefined"){
                x += `<div class="row bg bg-danger text-white" id="user${members[m].id}" clan="user${members[m].clan_id}">`
            }else{
                x += `<div class="row bg bg-gris" id="user${members[m].id}" clan="user${members[m].clan_id}">`
            }
        }else{
            if(members[m].active==false || members[m].active=="undefined"){
                x += `<div class="row bg bg-danger text-white" id="user${members[m].id}" clan="user${members[m].clan_id}">`
            }else{
                x += `<div class="row" id="user${members[m].id}" clan="user${members[m].clan_id}">`
            }
        }
        x += `<div class="col col-1 single-line d-center">${members[m].rank}</div>`
        x += `<div class="col col-3 single-line d-left">${members[m].name}</div>`
        x += `<div class="col col-2 single-line d-center">${members[m].battles}</div>`
        x += `<div class="col col-3 single-line d-center">${members[m].points}</div>`
        x += `<div class="col col-2 single-line d-center">${members[m].age}</div>`
        x += `<a href="${members[m].forge_db}" class="col col-1 single-line btn btn-success m-0" target="_blank">Ver</a>`
        x += `</div>`
        x += `<hr style="margin: 0px;">`
    }
    return x
}
function historialHTML(members1, members2){
    let x = ``
    for(let m in members1){
        if(members1[m].active==false || members1[m].active=="undefined"){
            x += `<div class="row bg bg-danger text-white">`
        }else{
            x += `<div class="row">`
        }
        x += `<div class="col col-1 single-line d-center">${members1[m].rank}</div>`
        x += `<div class="col col-3 single-line d-left">${members1[m].name}</div>`

        x += `<div class="col col-2 single-line d-center">${searchBattles(members1[m], members2)}</div>`
        x += `<div class="col col-3 single-line d-center">${searchPoints(members1[m], members2)}</div>`

        x += `<div class="col col-2 single-line d-center">${members1[m].age}</div>`
        x += `<a href="${members1[m].forge_db}" class="col col-1 single-line btn btn-success m-0" target="_blank">Ver</a>`
        x += `</div>`
        x += `<hr style="margin: 0px;">`
    }
    return x
}
function searchBattles(member, members){
    for(let m in members){
        if(members[m].id == member.id){
            let x = ``
            let b = (member.battles.replaceAll(",","") - members[m].battles.replaceAll(",",""))
            
            if(b>0){
                x += `${member.battles}<span class="text-success col">(+${b.toLocaleString('en')})</span>`
            }else{
                x += `${member.battles}`
            }
            return  x
        }
    }
    return member.battles
}
function searchPoints(member, members){
    for(let m in members){
        if(members[m].id == member.id){
            let x = ``
            let b = (member.points.replaceAll(",","") - members[m].points.replaceAll(",",""))
            console.log("m 1: ", member.points.replaceAll(",",""))
            console.log("m 2: ", members[m].points.replaceAll(",",""))
            console.log("b: ", b)
            if(b>0){
                x += `${member.points} <span class="text-success col h6">(+${b.toLocaleString('en')})</span>`
            }else{
                x += `${member.points}`
            }
            return  x
        }
    }
    return member.points
}
function guildHTML(guild){
    let actives = 0
    let inactives = 0
    for(let m in guild.members){
        if(guild.members[m].active == true){
            actives+=1
        }else{
            inactives+=1
        }
    }
    let x = ``
    x += `<div class="row">`
    x += `<div class="col col-4 text-start">Descripción:</div>`
    x += `<div class="col col-8 text-start">${guild.description}</div>`
    x += `</div>`
    
    x += `<div class="row">`
    x += `<div class="col col-4 text-start">Total de miembros: </div>`
    x += `<div class="col col-8 text-start">${guild.membersNum}</div>`
    x += `</div>`

    x += `<div class="row">`
    x += `<div class="col col-4 text-start">Nivel del Gremio:</div>`
    x += `<div class="col col-8 text-start">${guild.level}</div>`
    x += `</div>`

    x += `<div class="row">`
    x += `<div class="col col-4 text-start"># Activos ultimas 24hrs: </div>`
    x += `<div class="col col-8 text-start">${actives}</div>`
    x += `</div>`

    x += `<div class="row">`
    x += `<div class="col col-4 text-start"># Inactivos ultimas 24hrs: </div>`
    x += `<div class="col col-8 text-start">${inactives}</div>`
    x += `</div>`
    return x
}
function detailHTML(members){
    let x = ``
    for(let m in members){
        x+=`   <div class="row">`
        x+=`         <div class="col col-2 single-line mt-1">${members[m].date}</div>`
        x+=`         <div class="col col-3 single-line mt-1">${members[m].battles}</div>`
        x+=`         <div class="col col-4 single-line mt-1">${members[m].points}</div>`
        x+=`         <div class="col col-3 single-line mt-1">${members[m].age}</div>`
        x+=`     </div>`
    }
    return x
}
function cityHTML(member){
    let x = ``
    x += `<div class="row">`
    x += `<div class="col col-4 text-start">Nombre de Ciudad:</div>`
    x += `<div class="col col-8 text-start">${member.city_name}</div>`
    x += `</div>`
    
    x += `<div class="row">`
    x += `<div class="col col-4 text-start">Descripción de Ciudad: </div>`
    x += `<div class="col col-8 text-start">${member.profile_text}</div>`
    x += `</div>`

    x += `<div class="row">`
    x += `<div class="col col-4 text-start">Forge-db:</div>`
    x += `<a href="${member.forge_db}" class="col col-8 single-line btn btn-success m-0" target="_blank">Ver</a>`
    x += `</div>`
    return x
}
export {membersHTML, guildHTML, historialHTML, detailHTML, cityHTML}