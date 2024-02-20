
function sumar(a,b){
    return a+b
}

function restar(a,b){
    return a-b
}

const numero = 8

export const arimetica = {
    sumar:sumar,
    restar:restar,
    numero:numero,
    multiplicar:function(a,b){
        return a*b
    }
}