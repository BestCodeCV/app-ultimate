function bienesArca(nivel){
    let valor = parseInt(nivel)
    if(valor==1) return 9
    else if(valor==2) return 10
    else if(valor==3) return 12
    else if(valor==4) return 13
    else if(valor==5) return 15
    else if(valor==6) return 16
    else if(valor==7) return 18
    else if(valor==8) return 19
    else if(valor==9) return 21
    else if(valor==10) return 22
    else if(valor>10){
        return 22+2*(valor-10)
    }
}
function bienesObs(nivel){
    let valor = parseInt(nivel)
    if(valor==1) return 3
    else if(valor==2) return 4
    else if(valor==3) return 4
    else if(valor==4) return 5
    else if(valor==5) return 6
    else if(valor==6) return 6
    else if(valor==7) return 7
    else if(valor==8) return 7
    else if(valor==9) return 8
    else if(valor==10) return 8
    else if(valor>10){
        return 8+2*(valor-10)
    }
}
function bienesMirador(nivel){
    let valor = parseInt(nivel)
    if(valor==1) return 5
    else if(valor==2) return 10
    else if(valor==3) return 15
    else if(valor==4) return 20
    else if(valor==5) return 25
    else if(valor==6) return 30
    else if(valor==7) return 35
    else if(valor==8) return 40
    else if(valor==9) return 45
    else if(valor==10) return 50
    else if(valor==11) return 53
    else if(valor==12) return 55
    else if(valor==13) return 58
    else if(valor==14) return 60
    else if(valor==15) return 63
    else if(valor==16) return 65
    else if(valor==17) return 68
    else if(valor==18) return 70
    else if(valor==19) return 73
    else if(valor==20) return 75
    else if(valor==21) return 77
    else if(valor==22) return 80
    else if(valor==23) return 82
    else if(valor==24) return 85
    else if(valor==25) return 87
    else if(valor==26) return 90
    else if(valor==27) return 92
    else if(valor==28) return 95
    else if(valor==29) return 97
    else if(valor==30) return 99
    else if(valor==31) return 101
    else if(valor==32) return 103
    else if(valor==33) return 106
    else if(valor==34) return 108
    else if(valor==35) return 110
    else if(valor==36) return 112
    else if(valor==37) return 113
    else if(valor==38) return 115
    else if(valor==39) return 117
    else if(valor==40) return 119
    else if(valor==41) return 120
    else if(valor==42) return 122
    else if(valor==43) return 123
    else if(valor==44) return 125
    else if(valor==45) return 126
    else if(valor==46) return 127
    else if(valor==47) return 129
    else if(valor==48) return 130
    else if(valor==49) return 131
    else if(valor==50) return 132
    else if(valor==51) return 133
    else if(valor==52) return 134
    else if(valor==53) return 135
    else if(valor==54) return 136
    else if(valor==55) return 137
    else if(valor==56) return 138
    else if(valor==57) return 138
    else if(valor==58) return 139
    else if(valor==59) return 140
    else if(valor==60) return 140
    else if(valor==61) return 141
    else if(valor==62) return 141
    else if(valor==63) return 142
    else if(valor==64) return 142
    else if(valor==65) return 143
    else if(valor==66) return 144
    else if(valor==67) return 144
    else if(valor==68) return 144
    else if(valor==69) return 144
    else if(valor==70) return 145
    else if(valor==71) return 145
    else if(valor==72) return 145
    else if(valor==73) return 146
    else if(valor==74) return 146
    else if(valor==75) return 146
    else if(valor==76) return 146
    else if(valor==77) return 147
    else if(valor==78) return 147
    else if(valor==79) return 147
    else if(valor==80) return 147
    else if(valor>80){
        return 148
    }
}
export {bienesArca, bienesMirador, bienesObs}