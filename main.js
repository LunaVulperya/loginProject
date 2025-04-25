function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    if (!loginEmail || !loginSenha){
        alert("Favor, preencher todos os campos de acesso");
    } else{
        window.location.href = 'cadastro.html';
    }

}

// Declara array para o projeto
var dadosLista = [];
// Função de armazenamento de nomes em Array
function salvarUser(){
    let nomeUser= document.getElementById('nomeUser').value;

    if (nomeUser){
        dadosLista.push(nomeUser);
        document.getElementById('nomeUser').value = "";
        // console.log(dadosLista);
        criarLista();
    } else{
        alert("Campo de usuário não preenchido");
    }

}

// Função para criar lista de nomes
function criarLista(){
    let tabela =  "<tr><th>Nome</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length - 1); i++){
        tabela += "<tr><td>" +dadosLista[i] + "</td><td><button class='btn btn-success'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button> </td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

// Função para exlcuir nome da lista
function excluir(i){
    dadosLista.splice((i - 1), 1);
    document.getElementById('tabela').deleteRow(i);
}