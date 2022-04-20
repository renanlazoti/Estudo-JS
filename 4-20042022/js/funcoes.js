//Encontra o maior valor de um array

function maior(numeros){
    // vamos transformar os numeros em numeros, realiando um parse para int
    for(var c = 0 ; c < numeros.length ; c++){
        numeros[c] = parseInt(numeros[c]);
    }


    var m = numeros[0];
    for(var i = 1 ; i < numeros.length ; i++){
        if(numeros[i] > m){
            m=numeros[i]
        }
    }
    return m;
}

//Encontra o menor valor de um array

function menor(numeros){
    var m = numeros[0];
    for(var i = 1 ; i < numeros.length ; i++){
        if(numeros[i] < m){
            m=numeros[i]
        }
    }
    return m;
}

// verificar se um campo esta vazio, e alertar

function vazio(controle){
    if(controle.value == "" || controle.value == null){
        alert("O campo "+controle.id+" não pode estar vazio");
    }
}

function datahora(){
    return new Date().toLocaleDateString() + "-" + new Date().toLocaleTimeString();
}