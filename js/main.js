const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')

const partes = document.querySelectorAll('.controle-contador')
const controle = document.querySelectorAll('.controle-ajuste')

controle.forEach((elemento) =>{
    elemento.addEventListener('click', (evento) =>{
        manipulardados(evento.target.textContent)
    })
    })

console.log(partes)





function manipulardados(operaçao){
    if(operaçao === "-"){
        braco.value --
    }else (
        braco.value  ++
    )
}

