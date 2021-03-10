function calcular() {
    let input = document.getElementById('numero')
    let tab = document.getElementById('selTab')

    if(input.value.length == 0){
        window.alert(`[ERRO] Digite um numero para calcular!`)
    }
    else{
        let i = 1
        let num = Number(input.value)
        tab.innerHTML = ''

        while (i <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${i} =  ${num*i}`
            tab.appendChild(item)

            i++
        }
    }
}
