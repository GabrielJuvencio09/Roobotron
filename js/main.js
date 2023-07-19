const controle = document.querySelectorAll('[data-controle]')

controle.forEach((elemento) =>{
    elemento.addEventListener('click', (evento) =>{
        manipulardados(evento.target.dataset.controle, evento.target.parentNode)
    })
    })

function manipulardados(operaçao , controle){
    const peca = controle.querySelector('[data-contador]')

    if(operaçao === "-"){
        peca.value --
    }else (
        peca.value  ++
    )
}

