let input = document.getElementById("numero")
let lista = document.getElementById("selValor")
let res = document.getElementById("res")
let valores = []


function adicionar() {

    let num = Number(input.value)
    
    if (input.value > 0 && input.value <= 100 && valores.indexOf(num) == -1) {

        valores.push(num)
        let item = document.createElement('option')
        item.text=`Valor ${num} adicionado`
        lista.appendChild(item)    
    }

    else{
        window.alert(`[ERRO] Valor invalido ou já encontrado na lista!`)
    }

    input.value = ''
    input.focus()
}

function calcular() {

    let max = valores.reduce(function(a, b) {
        return Math.max(a, b);
    });

    let min = valores.reduce(function(a, b) {
        return Math.min(a, b);
    });

    let soma = valores.reduce((a, b) => a + b, 0)

    let media = soma/valores.length.toFixed(2)
    
    res.innerHTML = `<p><strong>Ao todo temos ${valores.length} números armazenados</strong></p><br>`
    res.innerHTML += `<p>O maior valor informado foi ${max}<br>
    O menor valor informado foi ${min}<br>
    A soma dos valores informados foi ${soma}<br>
    A media dos valores é ${media}</p><br>`

    res.style.display = "block"

}