import {DataGuild, Guild, Member, Good, Building, Sector} from '../models/classes.js'
import {bienesArca, bienesMirador, bienesObs} from '../scripts/Util.js'
import {membersHTML, guildHTML, historialHTML, detailHTML, cityHTML} from '../scripts/serviceHTML.js'

const url2 = "/modeluser"
const url = '/api/guilds'
let database = []
const forge = "https://www.forge-db.com/mx/mx4/players/profile/?server=mx4&world=Dinegu&id="
const ULTIME_DAY = 1
const ORIGEN = 2

function loadData(){
    $.ajax({
        url: url2,
        method: 'GET',
        dataType: "json",
    }).then(function(user) {
        console.log(user)
        if(user!=null){
            $.ajax({
                url: url,
                method: 'GET',
                dataType: "json",
            }).then(function(data) {
                for(let i in data){
                    let guilds = []
                    let dataGuild = new DataGuild()
                    dataGuild.id = data[i].id
                    for(let j in data[i].historial){
                        let guild = new Guild()
                        guild.date = j
                        for(let k in data[i].historial[j]){
                            
                            if(data[i].historial[j][k].requestClass == "ClanService"){
                                let info = data[i].historial[j][k].responseData
                                let members = []
                                for(let m in info.members){
                                    let x = info.members[m]
                                    let member = new Member()
                                    member.id = x.player_id
                                    member.name = x.name
                                    member.points = x.score.toLocaleString('en')
                                    member.battles = x.won_battles.toLocaleString('en')
                                    member.age = x.era
                                    member.city_name = x.city_name
                                    member.clan_id = x.clan_id
                                    member.profile_text = x.profile_text
                                    member.forge_db = forge + x.player_id
                                    member.rank = x.rank
                                    member.date = j
                                    if(x.is_active==true) member.active = x.is_active
                                    else member.active = false
                                    members.push(member)
                                }
                                guild.description = info.description
                                guild.membersNum = info.membersNum
                                guild.name = info.name
                                guild.rank = info.rank
                                guild.level = info.level
                                guild.id = info.id
                                guild.members = members
                                guilds.push(guild)
                            }
                        }
                    }
                    dataGuild.guilds = guilds
                    database.push(dataGuild)
                }
                let datos = database[0].guilds.length
                if(datos==1){
                    $('#btn002').html(`Desde el ` + database[0].guilds[0].date)
                    $('#btn003').html("Desde el (" + database[0].guilds[0].date +")")
                }else if(datos==2){
                    $('#btn002').html("Desde el " + database[0].guilds[1].date)
                    $('#btn003').html("Desde el " + database[0].guilds[1].date)
                }else{
                    $('#btn002').html("Desde el " + database[0].guilds[1].date)
                    $('#btn003').html("Desde el " + database[0].guilds[datos-1].date)
                }
                console.log("datos: ", database[0].guilds.length)
                console.log(database[0].guilds[0].date)
                console.log(database)
                console.log(user.id)
                console.log(user.clan)
                let dataGuild = getGuild(user.clan)
                let members = getMembers(user.id, dataGuild)
                showData(members)
                showHistorial(members)
                showInfo(members[0])
                console.log(dataGuild)
            });   
        }
    });  
}
function showInfo(member){
    $('#resumen').html(cityHTML(member))
}
function showData(members){
    $('#nombreClan').html(members[0].name)
}
function showHistorial(members){
    $('#dataContainer').html(detailHTML(members))
}
function getGuild(clan){
    for(let g in database){
        if(database[g].id == clan){
            return database[g]
        }
    }
}
function getMembers(id, dataGuild){
    let m = []
    for(let g in dataGuild.guilds){
        for(let h in dataGuild.guilds[g].members){
            if(dataGuild.guilds[g].members[h].id == id){
                m.push(dataGuild.guilds[g].members[h])
            }
        }
    }
    console.log(m)
    return m
}
loadData()