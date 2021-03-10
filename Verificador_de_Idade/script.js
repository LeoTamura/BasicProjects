function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        let fSex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fSex[0].checked){  //se o radsex na posiçao 0 (masculino) estiver checkada entao...


            if(idade>=0 && idade <12){
                genero = "menino" 
                img.setAttribute('src', 'imgs/foto-bebe-m.png')
            }
            else if(idade < 21){
                genero = "jovem" 
                img.setAttribute('src', 'imgs/foto-jovem-m.png')
            }
            else if(idade < 60){
                genero = 'homem' 
                img.setAttribute('src', 'imgs/foto-adulto-m.png')
            }
            else{
                genero = 'idoso' 
                img.setAttribute('src', 'imgs/foto-idoso-m.png')
            }
        }
        else if (fSex[1].checked) {  //se o radsex na posiçao 1 (feminino) estiver checkada entao...

            if(idade>=0 && idade <12){
                genero = "menina" 
                img.setAttribute('src', 'imgs/foto-bebe-f.png')
            }
            else if(idade < 21){
                genero = "jovem" 
                img.setAttribute('src', 'imgs/foto-jovem-f.png')
            }
            else if(idade < 60){
                genero = 'mulher' 
                img.setAttribute('src', 'imgs/foto-adulto-f.png')
            }
            else{
                genero = 'idosa'
                img.setAttribute('src', 'imgs/foto-idoso-f.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}