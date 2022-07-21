let permutaciones = []
let contador = 0;
function permutar(str){
    for(let i=0; i<str.length; i++){
        hallar(str[i])
    }
}
permutar('ABCD', 3)