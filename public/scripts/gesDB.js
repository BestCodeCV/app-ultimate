
function getBabel(nivel){
    return nivel + 5
}
function getFaro(nivel){
    if(nivel>0 && nivel <=3) return nivel +7
    else if(nivel>3 && nivel <=7) return nivel +8
    else if(nivel>7) return nivel + 9
}
function getSanMarcos(nivel){
    if(nivel>0 && nivel <=2) return 8 + 2*nivel
    else if(nivel>2 && nivel <=5) return 7 + 2*nivel
    else if(nivel>5 && nivel <=9) return 6 + 2*nivel
    else if(nivel>9) return nivel + 15
}
function getGalata(nivel){
    if(nivel<3) return 5
    else if(nivel>=3 && nivel <=5) return nivel + 3
    else if(nivel>5) return nivel + 2
}
function getMuseo(nivel){
    if(nivel>0 && nivel <=3) return 8 + 2*nivel
    else if(nivel>3 && nivel <=7) return 7 + 2*nivel
    else if(nivel>7 && nivel <=10) return 6 + 2*nivel
    else if(nivel>10) return nivel + 16
}
function getDresden(nivel){
    if(nivel>0 && nivel <=8) return nivel + 6
    else if(nivel>8) return nivel + 7
}
function getRoyal(nivel){
    if(nivel>0 && nivel <=2) return nivel + 10
    else if(nivel>2 && nivel <=6) return 8 + 2*nivel
    else if(nivel>6 && nivel <=10) return 7 + 2*nivel
    else if(nivel>10) return nivel + 17
}
function getBosque(nivel){
    if(nivel==1) return nivel + 12
    else if(nivel>1 && nivel <=5) return 12 + 2*nivel
    else if(nivel>5 && nivel <=9) return 13 + 2*nivel
    else if(nivel>9) return nivel + 24
}
function getOrca(nivel){
    if(nivel>0&& nivel <=2) return nivel + 8
    else if(nivel>2 && nivel <=6) return nivel + 9
    else if(nivel>6 && nivel <=8) return nivel + 11
    else if(nivel>8 && nivel <=10) return nivel + 12
    else if(nivel>10) return 2 + 2*nivel
}
function getNucleo(nivel){
    if(nivel>0 && nivel <=2) return nivel + 11
    else if(nivel>2 && nivel <=4) return nivel + 12
    else if(nivel>4 && nivel <=6) return nivel + 13
    else if(nivel>6 && nivel <=8) return nivel + 14
    else if(nivel>8 && nivel <=10) return nivel + 15
    else if(nivel>10) return 5 + 2*nivel
}
function getOtomium(nivel){
    if(nivel>0&& nivel <=4) return nivel + 5
    else if(nivel>4 && nivel <=9) return nivel + 6
    else if(nivel>9) return -3 + 2*nivel
}
function getMirador(nivel){
    if(nivel>0 && nivel <=10) return nivel*5
    else if(nivel>10 && nivel <=28) {
        if(nivel%2==0) return ((nivel/2)+5)*5
        else return ((((nivel-1)/2)+6)*5)-2
    }
    else if(nivel>28 && nivel <=32) return 39 + 2*nivel
    else if(nivel>32 && nivel <=36) return 40 + 2*nivel
    else if(nivel>36 && nivel <=40) return 39 + 2*nivel

    else if(nivel>40 && nivel <=42) return 38 + 2*nivel
    else if(nivel==43) return 123
    else if(nivel>43 && nivel <=46) return 81 + nivel
    else if(nivel>46 && nivel <=56) return 82 + nivel
    else if(nivel>56 && nivel <=58) return 81 + nivel
    else if(nivel>58 && nivel <=66){
        if(nivel%2==0) return 110 + (nivel/2)
        else return 111 + ((nivel-1)/2)
    }
    else if(nivel>66 && nivel <=69) return 144
    else if(nivel>69 && nivel <=72) return 145
    else if(nivel>72 && nivel <=76) return 146
    else if(nivel>76 && nivel <=81) return 147
    else if(nivel>81 && nivel <=88) return 148
    else if(nivel>89) return 149
}
function getObservatorio(nivel){
    if(nivel==1) return 3
    else if(nivel>1 && nivel <=3) return 4
    else if(nivel==4) return 5
    else if(nivel>4 && nivel <=6) return 6
    else if(nivel>6 && nivel <=8) return 7
    else if(nivel>8 && nivel <=10) return 8
    else if(nivel>10) return 2*nivel - 12
}
export {getBabel, getFaro, getSanMarcos, getGalata, getMuseo, getDresden, getRoyal, getBosque, getOrca, getNucleo, getOtomium, getMirador, getObservatorio}