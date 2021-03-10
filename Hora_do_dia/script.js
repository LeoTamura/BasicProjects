function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundo = data.getSeconds()
    

    msg.innerHTML = `Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos.`

    if(hora>=0 && hora<12){
        // bom dia
        img.src = "imgs/fotomanha.png"
        document.body.style.background = "#d4c38a"
        document.getElementById("msg").style.color = "#d4c38a"
    }
    else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = "imgs/fototarde.png"
        document.body.style.background = "#c66114"
        document.getElementById("msg").style.color = "#c66114"
    }
    else{
        // boa noite
        img.src = "imgs/fotonoite.png"
        document.body.style.background = "#034c69"
        document.getElementById("msg").style.color = "#034c69"
    }
}

