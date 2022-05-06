function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imgmanha.png'
        document.body.style.background = '#f0e2d7'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'imgtarde.png'
        document.body.style.background = '#842c0c'
    } else {
        //Boa noite!
        img.src = 'imgnoite.png'
        document.body.style.background = '#473757'
    }

}