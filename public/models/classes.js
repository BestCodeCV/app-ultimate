class DataGuild{
    constructor(id, guilds){
        this.id = id;
        this.guilds = guilds
    }
    getName(){
        console.log("HOla mundo nuevo")
    }
}
class Guild{
    constructor(id, name, rank, level, membersNum, description, members, date){
        this.id = id;
        this.name = name
        this.rank = rank
        this.level = level 
        this.membersNum = membersNum
        this.description = description
        this.members = members
        this.date = date
    }
    getName(){
        console.log("HOla mundo nuevo")
    }
}
class Member{
    constructor(id, name, points, battles, age, city_name, clan_id, profile_text, forge_db, rank, active, date){
        this.id = id
        this.name = name
        this.points = points
        this.battles = battles 
        this.age = age
        this.city_name = city_name
        this.clan_id = clan_id
        this.profile_text = profile_text
        this.forge_db = forge_db
        this.rank = rank
        this.active = active
        this.date = date
    }
}
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
export {DataGuild, Guild, Member, Good, Sector, Building}