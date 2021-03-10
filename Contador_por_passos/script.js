function contar() {
    let inicio = document.getElementById('numInicio') 
    let fim  = document.getElementById('numFim') 
    let passo = document.getElementById('numPasso') 
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Digite um valor de início!')
    }
    else{
        res.innerHTML = 'Contando: <br>'

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0) {
            window.alert('[ERRO] Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){
            // contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
                
            }
        }

        else{
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
                
            } 
        }
        res.innerHTML += `\u{1F3C1}`
    }
}

