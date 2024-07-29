'use strict'

async function getPessoas(){
    const url = 'http://localhost:3000/pessoas'
    const response = await fetch(url)
    const pessoas = await response.json()
    console.log(pessoas)
}

async function createPessoa(newPessoa){
    const url = 'http://localhost:3000/pessoas'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPessoa)
    }
    const response = await fetch(url, options)
    
    if (response.ok) {
        console.log("tarefa concluida")
    } else {
        console.log("Falha")
    }
}

const pessoas1 = {
    "id": 5,
    "name": "Adriano"
}

async function updatePessoa(pessoaId, updatedPessoa){
    const url = `http://localhost:3000/pessoas/${pessoaId}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPessoa)
    }
    const response = await fetch(url, options)
    
    if (response.ok) {
        console.log("tarefa concluida")
    } else {
        console.log("Falha")
    }
}

const pessoas2 = {
    "name": "Aparecida"
}

async function deletePessoa(pessoaId){
    const url = `http://localhost:3000/pessoas/${pessoaId}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    
    if (response.ok) {
        console.log("tarefa concluida")
    } else {
        console.log("Falha")
    }
}

