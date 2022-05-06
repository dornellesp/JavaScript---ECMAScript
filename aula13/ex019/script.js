function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById ('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`[ERRO]Verifique seus dados novamente! >=( `)
    } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade < 15 ) {
                //Menino
                img.setAttribute('src', 'menino.png')
            } else if (idade < 45) {
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else if (idade >= 50)
                //Velho
                img.setAttribute('src', 'velho.png')
            } else  (idade >= 125)
                //Vampiro
                img.setAttribute('src', 'vampiro.png')
             

          if (fsex[1].checked) {
            gênero = 'mulher' 
            if (idade < 15 ) {
                //Menina
                img.setAttribute('src', 'menina.png')
            } else if (idade < 50 ) {
                //Adulta
                img.setAttribute('src', 'adulta.png')
            } else if (idade >= 50 )
                //Velha
            img.setAttribute('src', 'velha.png')
             else (idade >= 125)
            //Vampira
            img.setAttribute('src', 'vampira.png')}
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
}