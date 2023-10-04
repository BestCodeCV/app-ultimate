class Guild{
    constructor(id, description, members, name, quantity, show, status){
        this.name = name
        this.quantity = quantity
        this.show = show
        this.status = status
    }
    getName(){
        console.log("HOla mundo nuevo")
    }
}
export { Guild };