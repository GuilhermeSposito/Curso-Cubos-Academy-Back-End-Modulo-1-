class Nomes {

    constructor(nome) {
        this.nome = nome
    }


}


class Bg {

    constructor() {
        if (localStorage.getItem('id') == null) {
            localStorage.setItem('id', 0)
        }
    }

    getStorage() {
        let id = localStorage.getItem('id')
        return id += 1
    }

    insereNoStorage(p) {
        let id = this.getStorage()
        localStorage.setItem(id, JSON.stringify(p))

    }

    recebeDoStorage() {

        let nomes = localStorage.getItem(1)
        nomes = JSON.parse(nomes)
        let nome = Array(nomes)

        return nome
    }

}

let bg = new Bg()


function salvaNome() {
    let nomeInserido = document.getElementById('idtxt').value
    let objctNome = new Nomes(nomeInserido)

    bg.insereNoStorage(objctNome)

    console.log(objctNome)
}


function mostraNome() {

    //cria modal 
    let modal = document.createElement('div')
    modal.style.width = '500px'
    modal.style.height = '500px'
    modal.style.backgroundColor = 'black'

    modal.style.color = 'white'
    modal.id = 'modal'
    modal.addEventListener('click', fecharModal)



    window.document.body.appendChild(modal)

    let nomeArray = bg.recebeDoStorage()

    nomeArray.forEach(p => {

        modal.innerText = p.nome


    })


}


function fecharModal() {

    document.getElementById('modal').remove()

}
