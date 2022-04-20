// verificar qual página irá abrir este arquivo JavaScript

//pega a url completa do navegador 
var pagina = window.location;
console.log(pagina);

// vamos quebrar a url onde houver barra
 pagina = pagina.href.split("/"); 
 console.log(pagina);
 //pegar o último elemento do array página criado acima
 
 pagina = pagina[pagina.length-1];
 console.log(pagina);

 if(pagina == "home.html"){

    document.body.style.backgroundColor="rgb(150,150,150)";

    /*acessar a caixa (input) chamada numeros, capturar e utlizar a função maior 
    para encontrar o maoir valor entre os numeros  
    */

    // referenciar um elemento de input da tela home

    const txtN = document.getElementById("txtN");
    
    // aplicar um evento chamado onblur, quando a caixa perde o foco

    txtN.onblur = function(){
        /* vamos capturar o valor contido em txtN, os numeros dentro desta caixa
        e alocar em um array
        */

        var valores = txtN.value.split(",");
        alert(maior(valores));
    }
}

    if(pagina == "form.html"){
        document.body.style.backgroundColor = "rgb(150,150,150)";
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const cpf = document.getElementById("cpf");
        const telefone = document.getElementById("telefone");

        nome.onblur = ()=>{
            vazio(nome);
        }
        email.onblur = ()=>{
            vazio(email);
        }
        cpf.onblur = ()=>{
            vazio(cpf);
        }
        telefone.onblur = ()=>{
            vazio(telefone);
        }
    }