//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    })
}
//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementById('senha').value;
    senha = senha.toLowerCase();
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    if(logado == 0){
        alert("Acesso Negado. Dados incorretos");
    }
}
//Ativar alert no botão cadastrar
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
    }


//Ativar alert jogo comprado com sucesso
function compra() {
    alert("Jogo comprado com sucesso");
    window.location.href = "index.html";
    }
    

//Ativar alert que a pagina está em manutenção
function manutencao() {
    alert("Desculpe o transtorno a página está em manutenção");
    window.location.href = "index.html";
    }
    