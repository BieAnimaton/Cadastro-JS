let nome = document.querySelector('input#inpNom')
let email = document.querySelector('input#inpEma')
let senha = document.querySelector('input#inpSen')

let foto = document.querySelector('input#inpFot')

let nascimento = document.querySelector('input#inpNas')
let sexo = document.getElementsByName('radsex')
let profissao = document.getElementsByName('pro')
let count = 1

let agora = new Date
let ano = agora.getFullYear()

let lista = document.getElementById('contatosLista')


function adicionar() {
    let item = document.createElement('p')
    item.setAttribute('id', count)
    item.innerHTML = `Nome: ${nome.value}.  `
    item.innerHTML += `Email: ${email.value}. <br>`
    item.innerHTML += `Senha: ${senha.value}.  `
    item.innerHTML += `Nascimento: ${nascimento.value}. <br>`

    if (sexo[0].checked) {
        item.innerHTML += `Sexo: Masculino.<br>`
    } else if (sexo[1].checked) {
        item.innerHTML += `Sexo: Feminino.<br>`
    } else if (sexo[2].checked) {
        item.innerHTML += `Sexo: Outro.<br>`
    } else {
        item.innerHTML += `Sexo: Não Escolhido.<br>`
    }

    

    if (profissao[0].checked) {
        item.innerHTML += `Profissão: Programador.  `
    } else if (profissao[1].checked) {
        item.innerHTML += `Profissão: Designer.  `
    } else if(profissao[2].checked) {
        item.innerHTML += `Profissão: Editor Visual.  `
    } else {
        item.innerHTML += `Profissão: Nenhuma.  `
    }

    item.innerHTML += `<button id="salvar" onclick="salvar()">Salvar</button>`
    item.innerHTML += `<button id="apagar" onclick="apagar()">Apagar</button><br>`
    lista.appendChild(item)

    count++
}

function resetar() {
    lista.innerHTML = null
}

function apagar() {
    let btnDel = document.getElementById('apagar')
    lista.removeChild(btnDel.parentElement)
}

function salvar() {
    
}