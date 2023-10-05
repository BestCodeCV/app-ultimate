//import {DataGuild, Guild, Member, Good, Building, Sector} from '../models/classes.js'
import { DataGuild, Guild, Member, Good, Building, Sector } from '../models/classes.js';
import {bienesArca, bienesMirador, bienesObs} from '../scripts/Util.js'
import {membersHTML, guildHTML, historialHTML} from '../scripts/serviceHTML.js'

const dataGuilds = '/api/guilds'
const forge = "https://www.forge-db.com/mx/mx4/players/profile/?server=mx4&world=Dinegu&id="
const ULTIME_DAY = 1
const ORIGEN = 2

let url2 = "/userdata"
let database = []
let users = []
let g = 0

$('#btnByob').on( "click",          () => changeGuild("B.Y.O.B", 0));
$('#btnLeones').on( "click",        () => changeGuild("Leones Blancos", 1));
$('#btnKraken').on( "click",        () => changeGuild("Kraken", 2));
$('#btnPraetorians').on( "click",   () => changeGuild("Praetorians", 3));
$('#btnElClanDeLosD').on( "click",  () => changeGuild("El Clan de los D.", 4));

$('#btnH1').on( "click",  () => {
    console.log("click boton 1")
    console.log("g", g)
    showData(g)
});
$('#btnH2').on( "click",  () => showDataHistorial(g, ULTIME_DAY));
$('#btnH3').on( "click",  () => showDataHistorial(g, ORIGEN));

function changeGuild(name, id){
    g = id
    $('#nombreClan').text(name)
    showData(id)
}

function loadData(url){
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
                            member.clan = x.clan.name
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
        showData(0)
    });  
}

function showData(guild){
    $('#dataContainer').html(membersHTML(database[guild].guilds[0].members))
    $('#resumen').html(guildHTML(database[guild].guilds[0]))
    const botons = document.querySelectorAll(".row")
    const cuando = function(evento){
        if(this.id!=null && this.id!='undefined' && this.id!=''){
            let id = this.id.slice(4)
            let clan = $(this).attr('clan').slice(4)
            detailMember(id, clan)
        }
    }
    botons.forEach(boton=>{
        boton.addEventListener("click", cuando)
    })
}
function showDataHistorial(guild, origen){
    let size = database[guild].guilds.length
    if(origen == ULTIME_DAY){
        if(size==1){
            showData(guild)
        }else{
            $('#dataContainer').html(historialHTML(database[guild].guilds[0].members, database[guild].guilds[1].members))
        }
    }else if(origen == ORIGEN){
        if(size==1){
            showData(guild)
        }else{
            $('#dataContainer').html(historialHTML(database[guild].guilds[0].members, database[guild].guilds[size-1].members))
        }
    }
    $('#resumen').html(guildHTML(database[guild].guilds[0]))
}
function detailMember(id, clan){
    $.ajax({
        url: url2,
        method: 'POST',
        dataType: "json",
        contentType: 'application/json',
        data: JSON.stringify({"id": id, "clan": clan})
    }).done((data)=>{
        if(data.status == 200){
            $(location).attr('href', '/userid='+data.id)
        }else if(data.status == 500){
        }
    })
}
loadData(dataGuilds)