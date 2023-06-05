const textArea = document.querySelector(".textarea");
const mensagem = document.querySelector(".mensagem_criptografada");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function criptografar(StringEncriptada){

    let matrizCodigo = [["e", "enter"] , ["i", "imes"] , ["a", "ai"] , ["o", "ober"] , ["u","ufat"]];
    console.table(matrizCodigo)
    StringEncriptada = StringEncriptada.toLowerCase();
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(StringEncriptada.includes(matrizCodigo[i][0])){
            StringEncriptada = StringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return StringEncriptada;
}