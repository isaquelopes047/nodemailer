let loaderWindow = document.querySelector(".containerLoader");
loaderWindow.style.display = 'none';

let containerErroMsg = document.querySelector(".erroContainer")
containerErroMsg .style.display = "none";

function btnClick(){

    let to = formulario.to;
    let name = formulario.Nome;
    let frota = formulario.frota;

    let containerErro = document.querySelector('.erroContainer');

    let mostrar = document.querySelector('.msgErro')
    let erro = [];

    var timeErro = function(){
        setTimeout(function(){
            containerErro.style.display = "none";
        }, 2000)
    }

    if(to.value == "" || to.value == null || to.value == undefined || to.value.indexOf('@')==-1 || to.value.indexOf('.')==-1){

        containerErro.style.display = "block";
        containerErroMsg .style.display = "block";
        erro.push('Informe um Email valido');
        mostrar.innerHTML = erro.toString()

        timeErro();
        
        to.focus();

        return false;
    }
    if(name.value == "" || name.value == null || name.value == undefined || name.length <= 1 || name.value.length <= 1){

        containerErro.style.display = "block";
        containerErroMsg .style.display = "block";
        erro.push('Informe um Nome valido');
        mostrar.innerHTML = erro.toString()

        timeErro();

        name.focus();

        return false; 
    }

    if(frota.value == "" || frota.value == null || frota.value == undefined || frota.value.length <= 1){

        containerErro.style.display = "block";
        containerErroMsg .style.display = "block";
        erro.push('Informe uma frota valida');
        mostrar.innerHTML = erro.toString()

        timeErro();

        frota.focus();

        return false; 
    }
    else{
        loaderWindow.style.display = 'block';
    }
}
