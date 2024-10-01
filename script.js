function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 14) {
                img.setAttribute('src', 'fotohomembebe.png')
                //Criança
            } else if (idade < 23) {
                img.setAttribute('src', 'fotohomemjovem.png')
                //Jovem
            } else if (idade < 50) {           
                img.setAttribute('src', 'fotohomemadulto.png')
                //Adulto
            } else {            
                img.setAttribute('src', 'fotohomemidoso.png')
                //idoso
            }
        
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 14) {
                //Criança
                img.setAttribute('src', 'fotomulherbebe.png')
            } else if (idade < 23) {
                //Jovem
                img.setAttribute('src', 'fotomulherjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotomulheradulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'fotomulheridoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    
    }
}