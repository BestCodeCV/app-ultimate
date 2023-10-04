<<<<<<< HEAD
class Guild {
=======
export class Guild {
>>>>>>> 80a455c60d852ff0661d0f9d066940658ab71dd2
    constructor(info, members) {
        this.description = info.description || '';
        this.membersNum = info.membersNum || 0;
        this.name = info.name || '';
        this.rank = info.rank || '';
        this.level = info.level || 0;
        this.id = info.id || '';
        this.members = members || [];
    }
    getName(){
        console.log("Hola perro")
    }
}
<<<<<<< HEAD
exports.Guild = Guild;
=======
>>>>>>> 80a455c60d852ff0661d0f9d066940658ab71dd2
