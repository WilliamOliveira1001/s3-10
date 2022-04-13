
function position (firstPlace, secondPlace, lastPlace){
    let colocacao = ["1 lugar "+ firstPlace,"2 lugar "+ secondPlace,"3 lugar "+ lastPlace]

        if(firstPlace == "Daniel"){
            return colocacao
        }

        if(secondPlace == "Daniel"){
            let colocacao1 = ["1 lugar "+ secondPlace,"2 lugar "+firstPlace,"3 lugar "+lastPlace]
            return colocacao1
        }

        if(lastPlace == "Daniel"){
        let colocacao2 = ["1 lugar "+firstPlace,"2 lugar "+lastPlace,"3 lugar "+secondPlace]
            return colocacao2
        }     
}
position("Rafael","Daniel","Emanuel")
console.log (position ("Rafael","Daniel","Emanuel"))


// ir testando as posições dos 3 que a posição vai se alterando.