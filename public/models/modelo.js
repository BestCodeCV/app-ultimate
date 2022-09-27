class Member{
    constructor(nombre, ges, totalGremio, totalAnterior, totalBienes, doble){
        this.nombre = nombre
        this.ges = ges
        this.totalGremio = totalGremio
        this.totalAnterior = totalAnterior
        this.totalBienes = totalBienes
        this.doble = doble
    }
}
class Ge{
    constructor(nombre, nivel, bienes, tipo){
        this.nombre = nombre
        this.nivel = nivel
        this.bienes = bienes
        this.tipo = tipo
    }
}
export {Member, Ge}