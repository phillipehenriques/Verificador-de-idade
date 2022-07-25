function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Digite um número válido')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'foto.criançaH.png')
                else if (idade < 21 ) {
                    //jovem
                    img.setAttribute('src', 'foto.adolescenteH.png')
            }   else if (idade <50) {
                    //adulto
                    img.setAttribute('src', 'foto.adultoH.png')
            }   else {
                    //idoso
                    img.setAttribute('src', 'foto.idosoH.png')
            }
        }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                    //criança
                    img.setAttribute('src', 'foto.criançaM.png')
                else if (idade < 21 ) {
                    //jovem
                    img.setAttribute('src', 'foto.adolescenteM.png')
            }   else if (idade <50) {
                    //adulto
                    img.setAttribute('src', 'foto.adultoM.png')
            }   else {
                //idoso
                img.setAttribute('src', 'foto.idosoM.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}
